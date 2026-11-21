// EnergyGridSimulator: balance de MW en tiempo real, clima, reloj y baterías.
// Lógica pura (sin gráficos) para poder probarla por separado.
import { clamp, lerp, keyAt } from './util.js';

export const CAP = { hydro: 36, wind: 8, solar: 12, bio: 40, batP: 60, batE: 120, bus: 16, ev: 22, h2: 14 };
// Carga de los autos eléctricos de la ciudad. Sin programar, la gente enchufa al llegar a casa y la carga cae en la
// hora pico; programados, la misma energía entra de madrugada, en el horario valle de UTE (de 0 a 7).
const evAtHome = h => { const d = ((h - 20.2 + 36) % 24) - 12; return Math.exp(-(d * d) / 3.2); };   // pico a las 20 h, unas 3,2 h·MW por MW
const evValley = h => (h >= 0.3 && h < 6.6 ? 1 : h < 0.3 ? h / 0.3 : h < 7 ? (7 - h) / 0.4 : 0) * 0.47;   // casi lo mismo, repartido de 0 a 7
const DEMAND = [[0, 108], [3, 96], [6, 118], [9, 160], [12, 165], [15, 156], [18, 186], [20, 210], [21.5, 216], [23, 184], [24, 108]];

export class EnergyGrid {
  constructor() {
    this.t = 0;
    this.hour = 9; this.clockRate = 1 / 20; this.energyRate = 1 / 20; this.holdAt = null;
    this.windBase = 0.6; this.windTarget = 0.6; this.wind = 0.6; this.windDir = 0.5; this.gustiness = 0.1;
    this.cloud = 0; this.cloudTarget = 0;
    this.demandExtra = 0; this.demandExtraTarget = 0; this.demandMul = 1;
    this.hydro = { t: [0, 1, 2, 3].map(() => ({ on: false, fault: false })), gates: [0, 1, 2, 3].map(() => ({ reg: false })) };
    this.windP = { t: [0, 1, 2, 3, 4].map(() => ({ on: true, fault: false })), tx: false, txFault: false };
    this.solar = { a: [0, 1, 2, 3].map(() => ({ on: false, fault: false })) };
    this.bio = { on: false, fault: false, chips: false, pressure: 0, routed: false };
    this.bat = { connected: false, soc: 0.2, mode: 'auto', p: 0 };
    this.buses = false;
    this.ev = { on: false, smart: 0 };   // smart: qué parte de los autos carga programada de madrugada (0 a 1)
    this.h2 = { on: false, kg: 0 };      // electrolizador: carga flexible que toma solo la energía renovable que sobra
    this.fossil = 0; this.freq = 50;
    this.windUnit = [0, 0, 0, 0, 0]; this.hydroUnit = [0, 0, 0, 0]; this.solarUnit = [0, 0, 0, 0];
    this.out = { hydro: 0, wind: 0, solar: 0, bio: 0, bat: 0, fossil: 0, gen: 0, demand: 160, ren: 0, pct: 0, surplus: 0, unmet: 0, ev: 0, h2: 0 };
    this.step(0);
  }
  sun(h = this.hour) { const s = Math.sin(Math.PI * (h - 6) / 12); return s > 0 ? Math.pow(s, 0.75) : 0; }
  night(h = this.hour) {
    if (h >= 17.8 && h < 20) return clamp((h - 17.8) / 2.0, 0, 1);
    if (h >= 20 || h < 5.4) return 1;
    if (h < 7) return clamp(1 - (h - 5.4) / 1.6, 0, 1);
    return 0;
  }
  demandAt(h) { const { a, b, k } = keyAt(DEMAND, h); return lerp(a[1], b[1], k); }
  head() { const n = this.hydro.gates.filter(g => g.reg).length; return 0.4 + 0.3 * clamp(n - 2, 0, 2) + (this.headBonus || 0); }

  step(dt) {
    this.t += dt;
    // Reloj con posible detención en una hora dada (ventanas horarias de misión)
    if (dt > 0 && this.clockRate > 0) {
      const prev = this.hour; let next = prev + dt * this.clockRate;
      if (this.holdAt != null) {
        let gap = this.holdAt - prev; if (gap < -1e-6) gap += 24;   // un error de redondeo no cuenta como «ya pasó»
        if (gap <= dt * this.clockRate + 1e-6) next = this.holdAt;
      }
      this.hour = next >= 24 ? next - 24 : next < 0 ? next + 24 : next;   // sin módulo: 18,95 se queda en 18,95
    }
    // Clima
    this.windBase += clamp(this.windTarget - this.windBase, -0.12 * dt, 0.12 * dt);
    this.cloud += clamp(this.cloudTarget - this.cloud, -0.15 * dt, 0.15 * dt);
    const g = (Math.sin(this.t * 0.21) + 0.6 * Math.sin(this.t * 0.53 + 1) + 0.4 * Math.sin(this.t * 1.13 + 2)) / 2;
    this.wind = clamp(this.windBase + this.gustiness * g, 0, 1);
    this.windDir = 0.55 + 0.35 * Math.sin(this.t * 0.03);
    this.demandExtra += clamp(this.demandExtraTarget - this.demandExtra, -6 * dt, 6 * dt);

    // Generación por fuente
    const o = this.out, head = this.head();
    o.hydro = 0;
    this.hydro.t.forEach((u, i) => { const p = u.on && !u.fault ? CAP.hydro * head : 0; this.hydroUnit[i] = p; o.hydro += p; });
    o.wind = 0;
    const live = this.windP.tx && !this.windP.txFault;
    this.windP.t.forEach((u, i) => {
      const wf = clamp(this.wind * (0.94 + 0.12 * Math.sin(this.t * 0.31 + i * 1.7)), 0, 1);
      const p = live && u.on && !u.fault ? CAP.wind * wf : 0; this.windUnit[i] = p; o.wind += p;
    });
    o.solar = 0;
    const sun = this.sun() * (1 - 0.65 * this.cloud);
    this.solar.a.forEach((u, i) => { const p = u.on && !u.fault ? CAP.solar * sun : 0; this.solarUnit[i] = p; o.solar += p; });
    const bioGoal = this.bio.on && !this.bio.fault ? 1 : 0;
    this.bio.pressure += clamp(bioGoal - this.bio.pressure, -0.2 * dt, 0.3 * dt);
    o.bio = CAP.bio * this.bio.pressure * (this.bioBoost || 1);

    // Demanda
    o.ev = this.ev.on ? CAP.ev * ((1 - this.ev.smart) * evAtHome(this.hour) + this.ev.smart * evValley(this.hour)) : 0;
    o.demand = (this.demandAt(this.hour) + this.demandExtra + (this.buses ? CAP.bus * (0.6 + 0.4 * this.night()) : 0) + o.ev) * this.demandMul * (1 - (this.eff || 0));
    o.ren = o.hydro + o.wind + o.solar + o.bio;

    // Baterías: positivo = descarga hacia la red, negativo = carga con excedentes
    const net = o.ren - o.demand, b = this.bat, dh = dt * this.energyRate;
    let pb = 0;
    if (b.connected) {
      if (net > 0 && b.mode !== 'hold') pb = -Math.min(net, CAP.batP, dh > 0 ? (1 - b.soc) * CAP.batE / dh : CAP.batP);
      else if (net < 0 && b.mode === 'auto') pb = Math.min(-net, CAP.batP, dh > 0 ? b.soc * CAP.batE / dh : CAP.batP);
      b.soc = clamp(b.soc - pb * dh / CAP.batE, 0, 1);
    }
    b.p = pb; o.bat = pb;

    // Respaldo térmico fósil con rampa: cubre el faltante con retardo
    const dis = Math.max(0, pb), short = Math.max(0, o.demand - o.ren - dis);
    this.fossil += clamp(short - this.fossil, -30 * dt, 14 * dt);
    if (this.clockRate > 1) this.fossil = short;   // durante un salto de hora no hay transitorio
    this.fossil = clamp(this.fossil, 0, o.demand);
    o.fossil = this.fossil;
    o.unmet = Math.max(0, short - this.fossil);
    o.surplus = Math.max(0, net + pb);
    // Hidrógeno verde: el electrolizador toma lo que sobra (después de cargar las baterías) y nunca le pide al respaldo fósil
    o.h2 = this.h2.on ? Math.min(CAP.h2, o.surplus) : 0; o.surplus -= o.h2;
    if (o.h2 > 0 && dh > 0) this.h2.kg += o.h2 * dh * 1000 / 55;   // unos 55 kWh de electricidad por kilo de hidrógeno
    o.gen = Math.min(o.ren, o.demand + Math.max(0, -pb)) + dis + o.fossil;
    o.pct = 100 * clamp((Math.min(o.ren, o.demand) + dis) / o.demand, 0, 1);
    if (o.pct > 99.95) o.pct = 100;

    // Frecuencia: cae con el faltante no cubierto, se recupera cuando entra el respaldo
    const target = 50 - 1.5 * clamp(o.unmet / (0.1 * o.demand), 0, 1) - (o.fossil > 2 ? 0.1 : 0);
    this.freq += (target - this.freq) * Math.min(1, dt * 2.5);
    if (dt === 0) this.freq = target;
  }
  get optimal() { return this.out.pct >= 100 && this.freq > 49.95; }
}
