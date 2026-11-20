// MissionManager: historia corta y larga, diálogos, estados de las consolas, fallas, ceremonia final y modo libre.
import { POS } from './terrain.js';
import { CAP } from './grid.js';

const L = (who, text, x = 0) => ({ who, text, x });   // x = 1: línea solo de la historia larga
const KEY = 'capi-matriz-verde';
const N = ' ';

export const SEQ = {
  corta: ['viento', 'rio', 'sol', 'urbano', 'pico'],
  larga: ['viento', 'rio', 'sol', 'urbano', 'ahorro', 'tormenta', 'pico']
};
const DEF = {
  viento: { title: 'Vientos en la Cuchilla', scn: { hour: 9, rate: 1 / 60, hold: 11.5, wind: 0.95, gust: 0.08, extra: 0 } },
  rio: { title: 'La Fuerza del Río', scn: { hour: 11.5, rate: 1 / 60, hold: 13.5, wind: 0.6, gust: 0.08, extra: 15 } },
  sol: { title: 'Cosecha de Sol', scn: { hour: 9.5, rate: 1 / 30, hold: 18.6, wind: 0.8, gust: 0.08, extra: 0, energy: 1 / 12 } },
  urbano: { title: 'Circuito Verde Urbano', scn: { hour: 17.4, rate: 1 / 45, hold: 19.7, wind: 0.25, gust: 0.06, extra: 0, energy: 1 / 50 } },
  ahorro: { title: 'Ciudad que Ahorra', scn: { hour: 11.6, rate: 1 / 60, hold: 13.6, wind: 0.5, gust: 0.06, extra: 0 } },
  tormenta: { title: 'Sudestada sobre la Red', scn: { hour: 14.5, rate: 1 / 60, hold: 16.5, wind: 1, gust: 0.3, extra: 0, cloud: 0.95, energy: 1 / 70 } },
  pico: { title: 'Desafío 100% Renovable', scn: { hour: 19.3, rate: 1 / 45, hold: 19.8, wind: 0.6, gust: 0.1, extra: 0 } },
  libre: { title: 'Modo libre', scn: { hour: null, rate: 1 / 20, hold: null, wind: 0.6, gust: 0.14, extra: 0 } }
};

const INTRO = {
  ahorro: [
    L('lucia', 'Capi, hasta ahora sumamos energía limpia. Pero hay otra forma de ayudar a la red: gastar menos sin perder comodidad.'),
    L('lucia', 'En el Barrio Sur, pasando el bulevar, tres vecinos te esperan para cambiar sus lamparitas viejas por LED.'),
    L('lucia', 'Y pasá por la terminal ahora, al mediodía: quiero cargar los ómnibus cuando sobra sol, y no de noche, cuando todos prenden todo.')],
  viento: [
    L('valeria', `¡Capi! Acá Valeria, desde el Centro de Control. La ciudad está funcionando casi toda con respaldo térmico fósil: menos de un 20${N}% de la energía es renovable.`),
    L('valeria', 'Mirá la barra de arriba: Generación contra Demanda, en megavatios. Cuando lo renovable no alcanza, entra el respaldo fósil y la frecuencia se aparta de los 50,0 Hz.', 1),
    L('capi', 'Entendido, ingeniera. ¿Por dónde empiezo?', 1),
    L('valeria', 'Entró un frente de pampero y tenemos molinos frenados. Buscá a Don Mateo en la entrada de las cuchillas, al este. La flecha amarilla del minimapa te guía.')],
  rio: [
    L('valeria', 'Llovió fuerte en la cuenca alta y el caudal del río viene creciendo. Y al mediodía las fábricas piden más energía.'),
    L('valeria', 'Andá a la represa de Salto Grande, al norte, sobre el río Uruguay. La compartimos con Argentina: cada país tiene su central en su orilla y la nuestra es la del lado este.', 1),
    L('valeria', 'Hay compuertas abiertas de más: tiramos agua sin turbinarla. Regulá el vertedero y después sincronizá la Turbina 3.')],
  sol: [
    L('valeria', 'Una nube de polvo cubrió el Parque Solar, al norte, y descalibró los seguidores. Podés llegar por la calle del Barrio Jardín o por el puente del arroyo.'),
    L('valeria', 'Limpiá y reorientá las matrices, habilitá el Banco de Baterías y cargalo antes de las 18:30, cuando se nos va el sol.')],
  urbano: [
    L('lucia', '¡Hola, Capi! Lucía, de la Terminal de la Rambla. Tengo la flota eléctrica lista para salir, pero los cargadores rápidos están sin potencia.'),
    L('valeria', 'Y justo afloja el viento al atardecer. Necesitamos respaldo firme: la Planta de Biomasa, al este de la ciudad.'),
    L('valeria', 'Cargá chips del acopio forestal, encendé la caldera con su secuencia de arranque y enrutá la potencia hasta la terminal.')],
  tormenta: [
    L('mateo', '¡Capi, m\'hijo! Mirá el cielo del sudeste: se viene una sudestada de las bravas. Viento fuerte, lluvia y río crecido.'),
    L('valeria', 'Ya la tenemos encima. Con ráfagas tan fuertes un molino se frenó solo para protegerse, y un rayo hizo saltar el transformador del parque.'),
    L('valeria', 'Además las nubes taparon el sol y el embalse sube rápido: hay que volver a regular la compuerta 3. Las baterías aguantan mientras tanto, pero no para siempre.'),
    L('capi', 'Voy saliendo. ¡Que no me vuele el casco!')],
  pico: [
    L('valeria', 'Queda la prueba grande: la hora pico nocturna, sin sol. Cuando estés listo, vení a verme al Centro de Control, en la subestación de la ciudad.')]
};
const OUTRO = {
  ahorro: [L('valeria', `La demanda de la ciudad bajó un 6${N}% y los ómnibus cargaron con sol del mediodía. La energía más limpia es la que no hace falta generar.`), L('capi', 'Ahorrar también es generar. ¡Anotado!')],
  viento: [L('valeria', '¡Bien ahí! El parque eólico ya inyecta energía. El viento rinde muchísimo, pero es variable: cuando afloja, alguien tiene que cubrir.')],
  rio: [L('valeria', 'Embalse estable y tres turbinas en línea. El agua es nuestra energía de base: constante y regulable.'), L('capi', 'Cuando sopla el viento guardamos agua, y cuando afloja la turbinamos.', 1), L('valeria', 'Exacto: viento y agua se complementan. Ahora nos falta el sol.', 3)],
  sol: [L('valeria', 'Baterías cargadas. El sol del mediodía queda guardado para la noche: eso es mover energía en el tiempo.')],
  urbano: [L('valeria', 'Biomasa firme y transporte eléctrico en marcha. Desde ahora podés tomar el ómnibus en cualquier parada para viajar rápido entre sectores.')],
  tormenta: [L('mateo', 'Pasó lo peor. Viste cómo es: cuando una fuente se cae, las otras la sostienen. Por eso conviene tener de todo un poco.'), L('valeria', 'Red estable en plena sudestada. Eso se llama una matriz diversificada, Capi.')],
  pico: []
};
const SPEECH = [
  L('valeria', 'Capi, en nombre de toda la ciudad: gracias. Esta noche la matriz fue verde de punta a punta. El micrófono es tuyo.'),
  L('capi', '¡Gracias! Lo logramos entre todos. Y ya que tengo el micrófono, les cuento por qué esto importa tanto en Uruguay.'),
  L('capi', 'Uruguay no produce petróleo, gas ni carbón: todo el combustible fósil hay que traerlo de afuera. El agua, el viento, el sol y la biomasa, en cambio, son de acá.'),
  L('capi', 'Por eso las renovables nos dan independencia: no quedamos atados al precio del petróleo ni a que llegue el barco.', 1),
  L('capi', 'Además se complementan. Si un año llueve poco y los embalses bajan, el viento, el sol y la biomasa sostienen la red. Y si afloja el viento, cubre el agua.'),
  L('capi', 'También cuidan el aire: generar así la electricidad casi no emite gases que calientan el planeta.', 1),
  L('capi', `Y no es un cuento de videojuego. En 2025, el 98${N}% de la electricidad generada en Uruguay fue renovable: 46${N}% hidráulica, 34${N}% eólica, 14${N}% biomasa y 4${N}% solar, según el Ministerio de Industria, Energía y Minería.`),
  L('capi', 'Cuando sobra, hasta se la vendemos a los países vecinos.', 1),
  L('capi', 'Lo que falta nos toca a todos: usar la energía con cabeza y llevar esta electricidad limpia al transporte y a las casas. ¡Gracias por jugar, y nos vemos en Energimundo!')
];

export class Missions {
  constructor(game) {
    this.g = game; this.mode = 'larga'; this.seq = SEQ.larga; this.phase = 0; this.step = 0; this.active = false; this.pending = 0; this.lapse = null; this.t = 0;
    this.m5 = null; this.free = false; this.flags = {}; this.faultT = 60; this.streak = 0; this.best = 0; this.ceremony = false; this.fw = 0; this.fwNorth = false; this.busT = 0;
  }
  get key() { return this.phase < this.seq.length ? this.seq[this.phase] : 'libre'; }
  get short() { return this.mode === 'corta'; }
  get title() { return DEF[this.key].title; }
  lines(arr) { return arr.filter(l => !l.x || (!this.short && !(l.x === 3 && this.swap))); }
  load() { try { const s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (!s || typeof s.phase !== 'number') return null; const mode = s.mode === 'corta' ? 'corta' : 'larga'; return { mode, phase: Math.max(0, Math.min(SEQ[mode].length, s.phase + (mode === 'larga' && !s.v && s.phase >= 4 ? 1 : 0))), sparks: s.sparks, outfit: s.outfit, favors: s.favors, level: s.level === 'explorador' ? 'explorador' : 'ingeniero', swap: !!s.swap }; } catch (e) { return null; } }
  forget() { try { localStorage.removeItem(KEY); } catch (e) { /* sin almacenamiento */ } }
  save() { if (this.school) return; try { localStorage.setItem(KEY, JSON.stringify(Object.assign({ v: 2, phase: this.phase, mode: this.mode, level: this.level, swap: !!this.swap }, this.g.extras ? this.g.extras.data() : {}))); } catch (e) { /* sin almacenamiento */ } }
  done(k, n = this.phase) { const i = this.seq.indexOf(k); return i >= 0 ? i < n : n >= this.seq.length; }
  reached(k) { const i = this.seq.indexOf(k); return i < 0 ? this.free : this.phase > i || (this.phase === i && this.active); }

  // Estado de la red tras n misiones completas
  preset(n) {
    const G = this.g.grid, D = k => this.done(k, n), blocked = this.short ? [1] : [1, 2, 4];
    G.hydro.t.forEach((u, i) => { u.on = i < 2 || (i === 2 && D('rio')) || (i === 3 && n >= this.seq.length); u.fault = false; });
    G.hydro.gates.forEach((g, i) => { g.reg = i >= 2 || D('rio'); });
    G.windP.t.forEach((u, i) => { u.on = true; u.fault = !D('viento') && blocked.includes(i); }); G.windP.tx = D('viento'); G.windP.txFault = false;
    G.solar.a.forEach(u => { u.on = D('sol'); u.fault = false; });
    G.bat.connected = D('sol'); G.bat.soc = D('sol') ? 0.82 : 0.3; G.bat.mode = 'auto';
    G.bio.chips = G.bio.on = G.bio.routed = D('urbano'); G.bio.fault = false; G.bio.pressure = D('urbano') ? 1 : 0; G.buses = D('urbano');
    G.eff = this.seq.includes('ahorro') && D('ahorro') ? 0.06 : 0; G.headBonus = 0; G.bioBoost = 1;
  }
  scenario(key, instant) {
    const G = this.g.grid, s = DEF[key].scn;
    G.windTarget = s.wind; G.gustiness = s.gust; G.demandExtraTarget = s.extra; G.cloudTarget = s.cloud || 0; G.demandMul = key === 'sol' && !this.done('rio') ? 0.45 : 1;   // si el sol va antes que el río, es feriado y la ciudad consume menos G.energyRate = s.energy || 1 / 20;
    if (s.hour == null) { G.clockRate = s.rate; G.holdAt = null; return; }
    if (instant) { G.hour = s.hour; G.windBase = s.wind; G.demandExtra = s.extra; G.cloud = s.cloud || 0; G.clockRate = s.rate; G.holdAt = s.hold; }
    else { this.lapse = { to: s.hour, rate: s.rate, hold: s.hold }; G.clockRate = 7; G.holdAt = s.hour; }
  }
  start(mode, phase, instant = true, hold = false) {
    if (!hold && this.g.tut) this.g.tut.stop();
    const g = this.g; if (g.ui.dlg) { g.ui.dlg = null; document.getElementById('dialog').classList.add('hidden'); }
    this.schoolDone = false; this.mode = mode; this.seq = SEQ[mode].slice(); if (this.swap) { this.seq[1] = 'sol'; this.seq[2] = 'rio'; } this.ev = null; this.evT = null; this.fossilT = 0; this.phase = phase; this.step = 0; this.active = false; this.flags = {}; this.pending = 0; this.m5 = null; this.ceremony = false; this.free = phase >= this.seq.length;
    this.preset(phase); this.scenario(this.key, instant); g.grid.step(0); g.grid.fossil = Math.max(0, g.grid.out.demand - g.grid.out.ren); g.grid.step(0);
    g.actors.gather(false);
    if (this.free) { if (!this.quietFree) g.ui.toast('MODO LIBRE', 'Sandbox climático desbloqueado: abrí el panel de red con Tab', 4); this.quietFree = false; return; }
    if (hold) return;
    this.begin();
  }
  begin() {
    const g = this.g;
    g.ui.dialog(this.lines(INTRO[this.key]), () => {
      this.active = true; g.ui.toast('MISIÓN ' + (this.phase + 1), this.title, 3);
      if (this.key === 'tormenta') { const G = g.grid; G.windP.t[0].fault = true; G.windP.txFault = true; G.hydro.gates[2].reg = false; g.audio.thunder(); this.fossilT = 0; g.extras.choose('Sudestada', 'Valeria: “No llegamos a todo a la vez. ¿Qué atendemos primero?”', [['El parque eólico', 'Recuperar potencia cuanto antes'], ['La compuerta de la represa', 'Cuidar el agua del embalse']], i => { this.flags.first = i ? 'dam' : 'wind'; }); }
      if (this.key === 'sol' && !this.done('rio')) g.ui.note('Hoy es feriado: la ciudad consume menos y sobra sol para estrenar las baterías.', 6);
    });
  }

  // ---- Objetivos de cada misión ----
  steps() {
    const G = this.g.grid, o = G.out, c = this.g.capi.pos, S = this.short;
    switch (this.key) {
      case 'viento': {
        const set = S ? [1] : [1, 2, 4], left = set.filter(i => G.windP.t[i].fault);
        return [
          { text: 'Hablar con Don Mateo en la entrada de las cuchillas', targets: ['npc:mateo'], done: this.flag('mateo') },
          { text: S ? 'Desbloquear el freno del aerogenerador marcado' : `Desbloquear los frenos de 3 aerogeneradores (${3 - left.length}/3)`, targets: left.map(i => 'wind:' + i), done: !left.length },
          { text: 'Activar el transformador del parque', targets: ['wind:tx'], done: G.windP.tx },
          { text: `Llevar la matriz renovable al 35${N}%`, targets: [], done: o.pct >= 35 }];
      }
      case 'rio': {
        const set = S ? [0] : [0, 1], n = set.filter(i => G.hydro.gates[i].reg).length;
        return [
          { text: 'Viajar a la represa de Salto Grande, al norte', targets: ['gate:0'], done: this.flag('atDam') || (c.x > -170 && c.x < -60 && c.z < -84 && c.z > -126 && (this.flags.atDam = true)) },
          { text: S ? 'Regular la compuerta del vertedero' : `Regular dos compuertas del vertedero (${n}/2)`, targets: set.filter(i => !G.hydro.gates[i].reg).map(i => 'gate:' + i), done: n === set.length },
          { text: 'Sincronizar la Turbina 3 en la sala de máquinas', targets: ['turb:2'], done: G.hydro.t[2].on },
          { text: `Alcanzar el 65${N}% de energía renovable`, targets: [], done: o.pct >= 65 }];
      }
      case 'sol': {
        const set = S ? [0, 1] : [0, 1, 2, 3], left = set.filter(i => !G.solar.a[i].on), goal = S ? 0.5 : 0.8;
        return [
          { text: S ? `Limpiar y reorientar las matrices desde 2 consolas (${2 - left.length}/2)` : `Limpiar y reorientar las 4 matrices solares (${4 - left.length}/4)`, targets: left.map(i => 'solar:' + i), done: !left.length && G.solar.a.every(u => u.on) },
          { text: 'Habilitar el flujo hacia el Banco de Baterías', targets: ['bat'], done: G.bat.connected },
          { text: `Cargar el banco al ${goal * 100}${N}% antes de las 18:30 (${Math.round(G.bat.soc * 100)}${N}%)`, targets: [], done: G.bat.connected && G.bat.soc >= goal }];
      }
      case 'urbano': {
        const st = [
          { text: 'Cargar chips del acopio forestal en la cinta', targets: ['bio:chips'], done: G.bio.chips },
          { text: 'Encender la caldera con su secuencia de arranque', targets: ['bio:boiler'], done: G.bio.on },
          { text: 'Enrutar la potencia hacia la Terminal de la Rambla', targets: ['bio:sub'], done: G.bio.routed }];
        if (!S) st.push({ text: 'Cargar la flota al compás en los cargadores de la Terminal', targets: ['term'], done: this.flag('charged') });
        st.push({ text: 'Ver salir los ómnibus eléctricos: hablá con Lucía', targets: ['npc:lucia'], done: this.flag('busesSeen') });
        return st;
      }
      case 'ahorro': {
        const left = [0, 1, 2].filter(i => !this.flags['led' + i]);
        return [
          { text: `Cambiar las lamparitas por LED en 3 casas del barrio (${3 - left.length}/3)`, targets: left.map(i => 'led:' + i), done: !left.length },
          { text: 'Cargar los ómnibus con el sol del mediodía en la Terminal', targets: ['term'], done: this.flag('sunCharged') }];
      }
      case 'tormenta': {
        const w = [0].filter(i => G.windP.t[i].fault);
        const wind = [{ text: 'Liberar el aerogenerador frenado por las ráfagas', targets: w.map(i => 'wind:' + i), done: !w.length }, { text: 'Reconectar el transformador alcanzado por el rayo', targets: ['wind:tx'], done: !G.windP.txFault }];
        const dam = [{ text: 'Regular la compuerta 3: el río viene crecido', targets: ['gate:2'], done: G.hydro.gates[2].reg }];
        return (this.flags.first === 'dam' ? dam.concat(wind) : wind.concat(dam)).concat([{ text: `Recuperar el 100${N}% renovable en plena sudestada`, targets: [], done: o.pct >= 100 && !w.length && !G.windP.txFault && G.hydro.gates[2].reg }]);
      }
      case 'pico': {
        const m = this.m5;
        if (this.ceremony) return [{ text: 'Ir al escenario de la Plaza Matriz para la ceremonia', targets: ['fest'], done: this.flag('cer') }];
        return [
          { text: 'Hablar con la Ing. Valeria en el Centro de Control', targets: ['npc:valeria'], done: !!m },
          { text: 'Pasar las baterías a Automático en el panel de red (Tab)', targets: [], done: !!m && G.bat.mode === 'auto' },
          { text: `Mantener el 100${N}% renovable hasta que pase la hora pico`, targets: [], done: this.flag('m5won') }];
      }
    }
    return [];
  }
  flag(k) { return !!this.flags[k]; }
  event() { /* reservado para eventos de UI */ }

  // ---- Estados de consolas e interacción ----
  describe(id) {
    if (id === 'npc:lucia' && this.g.vecinos && this.g.vecinos.luciaAway) return { state: 'hidden' };
    const sd = this.g.social && this.g.social.describe(id); if (sd) return sd;
    const ud = this.g.urbano && this.g.urbano.describe(id); if (ud) return ud;
    const md = this.g.museo && this.g.museo.describe(id); if (md) return md;
    const G = this.g.grid, [k, s] = id.split(':'), i = +s, n = i + 1;
    if (k === 'npc') return { state: 'ok', label: 'Hablar con ' + { mateo: 'Don Mateo', valeria: 'la Ing. Valeria', lucia: 'Lucía' }[s] };
    if (k === 'sub') return { state: 'ok', label: 'Abrir el panel de red' };
    if (k === 'fest') return { state: this.ceremony ? 'ok' : 'locked', label: 'Subir al escenario' };
    if (k === 'stop') return G.buses ? { state: 'ok', label: 'Tomar el ómnibus eléctrico' } : { state: 'off', label: 'Parada de ómnibus: la flota eléctrica todavía no tiene carga' };
    if (k === 'term') {
      if (!this.reached('urbano') || !G.bio.routed) return { state: 'locked' };
      if (this.key === 'ahorro' && this.active && !this.flags.sunCharged) return this.lapse ? { state: 'off', label: 'Cargadores: esperá al mediodía, que todavía no hay sol' } : { state: 'need', label: 'Cargar los ómnibus con sol', mg: 'solar' };
      if (this.key === 'urbano' && !this.short && !this.flags.charged) return { state: 'need', label: 'Cargar la flota al compás', mg: 'rhythm' };
      return { state: 'ok', label: 'Tocar el compás de carga', mg: 'rhythm', replay: true };
    }
    if (k === 'led') {
      if (this.key === 'ahorro' && this.active) return this.flags['led' + i] ? { state: 'ok', label: 'Ver la casa con luces LED' } : { state: 'need', label: 'Cambiar las lamparitas por LED', mg: 'led' };
      return this.seq.includes('ahorro') && this.done('ahorro') ? { state: 'ok', label: 'Ver la casa con luces LED' } : { state: 'locked' };
    }
    if (k === 'wind') {
      if (!this.reached('viento')) return { state: 'locked' };
      if (s === 'tx') return G.windP.txFault ? { state: 'need', label: 'Reconectar el transformador del parque', mg: 'sync' } : !G.windP.tx ? { state: G.windP.t.some(u => u.fault) ? 'off' : 'need', label: 'Activar el transformador del parque' } : { state: 'ok', label: 'Inspeccionar el transformador' };
      return G.windP.t[i].fault ? { state: 'need', label: `Desbloquear el aerogenerador ${n}`, mg: i % 2 ? 'sync' : 'crank' } : { state: 'ok', label: `Inspeccionar el aerogenerador ${n}` };
    }
    if (k === 'gate') { if (!this.reached('rio')) return { state: 'locked' }; return G.hydro.gates[i].reg ? { state: 'ok', label: `Inspeccionar la compuerta ${n}` } : { state: 'need', label: `Regular la compuerta ${n}`, mg: 'gates' }; }
    if (k === 'turb') {
      if (!this.reached('rio')) return { state: 'locked' }; const u = G.hydro.t[i];
      if (u.fault) return { state: 'need', label: `Resincronizar la turbina ${n}`, mg: 'sync' };
      if (!u.on) return i === 2 ? { state: 'need', label: 'Sincronizar la turbina 3', mg: 'sync' } : { state: 'off', label: 'Turbina 4: en mantenimiento programado' };
      return { state: 'ok', label: `Inspeccionar la turbina ${n}` };
    }
    if (k === 'solar') { if (!this.reached('sol')) return { state: 'locked' }; const u = G.solar.a[i]; return u.on && !u.fault ? { state: 'ok', label: `Inspeccionar la matriz ${n}` } : { state: 'need', label: `Limpiar y reorientar la matriz ${n}`, mg: 'helio' }; }
    if (k === 'bat') { if (!this.reached('sol')) return { state: 'locked' }; return G.bat.connected ? { state: 'ok', label: 'Inspeccionar el banco de baterías' } : G.solar.a.every(u => u.on) ? { state: 'need', label: 'Habilitar el Banco de Baterías', mg: 'route' } : { state: 'off', label: 'Banco de baterías: primero las matrices solares' }; }
    if (k === 'bio') {
      if (!this.reached('urbano')) return { state: 'locked' };
      if (s === 'chips') return G.bio.chips ? { state: 'ok', label: 'Inspeccionar el acopio de chips' } : { state: 'need', label: 'Cargar chips de madera en la cinta' };
      if (s === 'boiler') return G.bio.fault ? { state: 'need', label: 'Recuperar la presión de la caldera', mg: 'seq' } : G.bio.on ? { state: 'ok', label: 'Inspeccionar la caldera' } : G.bio.chips ? { state: 'need', label: 'Encender la caldera', mg: 'seq' } : { state: 'off', label: 'Caldera: faltan chips en la cinta' };
      return G.bio.routed ? { state: 'ok', label: 'Inspeccionar la subestación' } : G.bio.on ? { state: 'need', label: 'Enrutar la potencia a la terminal', mg: 'route' } : { state: 'off', label: 'Subestación: la caldera está apagada' };
    }
    return { state: 'locked' };
  }
  interact(id) {
    if (this.g.tut && this.g.tut.interact(id)) return;
    if (this.g.social && this.g.social.interact(id)) return;
    if (this.g.urbano && this.g.urbano.interact(id)) return;
    if (this.g.museo && this.g.museo.interact(id)) return;
    const g = this.g, G = g.grid, d = this.describe(id), [k, s] = id.split(':'), i = +s, U = g.ui, it = g.world.inter[id];
    const fxOk = () => { g.fx.sparks(it.x, it.y + 2, it.z, 26, 0x5ad1ff); g.audio.power(); g.capi.celebrate(1.2); };
    if (k === 'npc') return this.talk(s);
    if (k === 'sub') return g.togglePanel(true);
    if (k === 'fest') { this.flags.cer = true; return this.runCeremony(); }
    if (k === 'stop') return d.state === 'ok' ? g.extras.openTravel(i) : U.note(d.label);
    if (d.state === 'off') return U.note(d.label);
    if (d.state === 'ok' && !d.replay) return U.note(this.info(id));
    if (d.mg) {
      const titles = { sync: 'Sincronización de fase', crank: `Freno del aerogenerador ${i + 1}`, seq: 'Secuencia de arranque de la caldera', gates: `Control de la compuerta ${i + 1}`, helio: `Matriz solar ${i + 1}`, route: 'Enrutamiento de subestación', rhythm: 'Compás de carga rápida', led: 'Cambio a LED', solar: 'Carga con sol del mediodía' };
      const opts = { title: titles[d.mg], from: k === 'bat' ? 'SOLAR' : 'CALDERA', to: k === 'bat' ? 'BATERÍAS' : 'TERMINAL' };
      return g.minigame(d.mg, opts, () => {
        let msg = 'Transformador reconectado.';
        if (k === 'wind') { if (s === 'tx') G.windP.txFault = false; else { G.windP.t[i].fault = false; msg = `Freno liberado: el aerogenerador ${i + 1} vuelve a girar.`; } }
        else if (k === 'gate') { G.hydro.gates[i].reg = true; if (this.short && this.key === 'rio') G.hydro.gates[1].reg = true; g.audio.gate(); msg = `Compuerta ${i + 1} regulada: el agua ahora pasa por las turbinas.`; }
        else if (k === 'turb') { G.hydro.t[i].on = true; G.hydro.t[i].fault = false; msg = `Turbina ${i + 1} acoplada a la red en 50,0 Hz.`; }
        else if (k === 'solar') { const set = this.short && this.key === 'sol' && i < 2 ? [i, i + 2] : [i]; set.forEach(j => { G.solar.a[j].on = true; G.solar.a[j].fault = false; }); msg = set.length > 1 ? `Matrices ${i + 1} y ${i + 3} limpias y siguiendo al sol.` : `Matriz ${i + 1} limpia y siguiendo al sol.`; }
        else if (k === 'bat') { G.bat.connected = true; G.bat.mode = 'auto'; msg = 'Banco de baterías conectado: los excedentes ahora se guardan.'; }
        else if (k === 'bio') { if (s === 'boiler') { G.bio.on = true; G.bio.fault = false; msg = 'Caldera encendida: la presión sube y entrega potencia firme.'; } else { G.bio.routed = true; msg = 'Potencia enrutada: los cargadores rápidos de la terminal tienen energía.'; } }
        else if (k === 'term') { if (d.mg === 'solar') { this.flags.sunCharged = true; msg = 'Ómnibus cargados con sol del mediodía: energía que sobraba y ahora mueve la ciudad.'; } else { this.flags.charged = true; msg = 'Flota cargada al compás del candombe. ¡Lista para salir!'; } }
        else if (k === 'led') { this.flags['led' + i] = true; G.eff = 0.02 * [0, 1, 2].filter(j => this.flags['led' + j]).length; msg = G.eff > 0.05 ? `Tres casas con LED y el barrio se contagia: la demanda de la ciudad baja un 6${N}%.` : 'Casa con luces LED: la misma luz gastando unas seis veces menos.'; }
        G.step(0); fxOk(); U.note(msg);
      });
    }
    // Acciones instantáneas
    g.capi.work(1.1); g.audio.spark();
    if (id === 'wind:tx') { G.windP.tx = true; setTimeout(fxOk, 900); U.note('Transformador en línea: el parque eólico inyecta energía a la red.'); }
    if (id === 'bio:chips') { G.bio.chips = true; g.fx.puff(it.x, it.y + 1, it.z, 14, 0xc9a66b, 2); U.note('Cinta cargada con chips de madera de residuos forestales.'); }
  }
  info(id) {
    if (id.startsWith('led')) return 'Lámparas LED: la misma luz con unas seis veces menos electricidad que una incandescente.';
    const G = this.g.grid, [k, s] = id.split(':'), i = +s, r = v => v.toFixed(1).replace('.', ',');
    if (k === 'wind') return s === 'tx' ? `Transformador del parque: ${r(G.out.wind)} MW hacia la ciudad.` : `Aerogenerador ${i + 1}: ${r(G.windUnit[i])} MW con viento al ${Math.round(G.wind * 100)}${N}%.`;
    if (k === 'gate') return `Compuerta ${i + 1} regulada. Salto útil al ${Math.round(G.head() * 100)}${N}%.`;
    if (k === 'turb') return `Turbina ${i + 1}: ${r(G.hydroUnit[i])} MW, acoplada a 50,0 Hz.`;
    if (k === 'solar') return `Matriz ${i + 1}: ${r(G.solarUnit[i])} MW. De noche no genera: por eso existen las baterías.`;
    if (k === 'bat') return `Banco LFP al ${Math.round(G.bat.soc * 100)}${N}%. Guarda excedentes y los devuelve en la hora pico.`;
    if (id === 'bio:chips') return 'Acopio de chips: biomasa de residuos forestales para la caldera.';
    if (id === 'bio:boiler') return `Caldera de cogeneración: ${r(G.out.bio)} MW firmes, haya o no viento.`;
    return 'Subestación elevadora: alimenta los cargadores de la Terminal de la Rambla.';
  }
  talk(who) {
    const g = this.g, U = g.ui, G = g.grid, f = this.flags, K = this.key;
    if (who === 'mateo') {
      if (K === 'viento' && this.active && !f.mateo) return U.dialog(this.lines([
        L('mateo', '¡Buen día, m\'hijo! Lindo pampero se largó: viento del sudoeste, fresco y parejo. Justo lo que piden los molinos.'),
        L('mateo', 'Las cuchillas son lomas largas y suaves: el viento las peina sin tropezar con nada. Por eso los plantamos acá arriba.', 1),
        L('mateo', this.short ? 'Después del mantenimiento quedó uno con el freno puesto. Andá a su consola, soltá el freno y sincronizalo con la red. Los teros te marcan dónde hay lío.' : 'Después del mantenimiento quedaron tres con el freno puesto. Andá a la consola de cada uno y soltá el freno: algunos piden manivela y otros sincronizar con la red. Los teros te marcan dónde hay lío.')]), () => { f.mateo = true; });
      if (K === 'tormenta') return U.dialog([L('mateo', 'Con sudestada los molinos se frenan solos si el viento se pasa de fuerte. No es falla: es que se cuidan. Hay que soltarlos cuando afloja la ráfaga.')]);
      return g.social.menu('mateo', this.done('urbano') ? 'Los montes de eucalipto dan madera y los restos van a la caldera. Acá no se tira nada.' : 'Cuando el viento afloja, el río cubre. Y cuando sopla fuerte, se guarda agua. Así de simple es el trato.');
    }
    if (who === 'lucia') {
      if (K === 'urbano' && this.active && G.bio.routed && (this.short || f.charged) && !f.busesSeen) return U.dialog(this.lines([
        L('lucia', '¡Llegó la potencia a los cargadores! Cada ómnibus eléctrico que sale es gasoil que no se quema en la ciudad.'),
        L('lucia', 'Carga rápida al atardecer y a recorrer la ciudad. ¡Mirá cómo salen!')]), () => { G.buses = true; this.busT = 6; g.inspect('terminal'); g.audio.power(); });
      if (K === 'urbano' && this.active && G.bio.routed && !f.charged) return U.dialog([L('lucia', 'Ya hay potencia. Ahora dale ritmo a los cargadores: es la consola del costado de la terminal, acá al lado.')]);
      return g.social.menu('lucia', G.buses ? 'La flota anda sola con energía de acá nomás. Y en silencio: los vecinos, chochos.' : 'Sin potencia en los cargadores no puedo sacar la flota. Avisame cuando la biomasa esté en línea.');
    }
    if (K === 'pico' && this.active && !this.m5 && !this.ceremony) return U.dialog(this.lines([
      L('valeria', 'Es la noche del festival en el bulevar: demanda máxima histórica y cero megavatios solares.'),
      L('valeria', 'Terminó el mantenimiento de la Turbina 4, así que la represa va a pleno. Tenés agua, biomasa, baterías y las ráfagas de la noche.', 1),
      L('valeria', `Abrí el panel de red con Tab y pasá las baterías a Automático. Después aguantá ${this.short ? 'un minuto y medio' : 'dos minutos'} al 100${N}% renovable: si algo falla, las baterías te dan margen mientras lo arreglás.`),
      L('valeria', '¿Listo? ¡Arranca la hora pico!')]), () => (this.short ? this.startM5() : this.dryYear()));
    g.social.menu('valeria', G.out.pct >= 100 ? 'Equilibrio óptimo: toda la demanda cubierta con renovables y la frecuencia clavada en 50,0 Hz.' : `Estamos en ${Math.round(G.out.pct)}${N}% renovable. Lo que falta lo cubre el respaldo fósil: ${Math.round(G.out.fossil)} MW.`);
  }

  // ---- Decisión de año seco (historia larga): cada opción refuerza la red de una manera distinta ----
  dryYear() {
    const g = this.g, G = g.grid;
    g.extras.choose('Año seco', 'Este año llovió poco y los embalses están más bajos que lo normal. ¿Con qué reforzamos la red para la hora pico?', [
      ['Guardar agua en el embalse', 'Turbinar menos de día para tener más fuerza de noche'],
      ['Llenar las baterías con el sol de la tarde', 'Energía al instante, pero dura un par de horas'],
      ['Pedir más biomasa a la planta', 'Potencia firme, si hay chips acopiados']], i => {
      this.startM5();
      if (i === 0) G.headBonus = 0.07; else if (i === 1) G.bat.soc = 1; else G.bioBoost = 1.18;
      g.ui.dialog([L('valeria', ['Buena: el agua guardada es como una batería gigante. Eso sí, si no llueve, esa reserva no se repone sola.', 'Buena: las baterías responden al instante. Eso sí, alcanzan para un par de horas, así que hay que usarlas justo en el pico.', 'Buena: la biomasa no depende del clima. Eso sí, hay que tener los chips acopiados de antemano.'][i]), L('valeria', 'En un año seco no hay una sola respuesta: por eso conviene tener varias fuentes y combinarlas.')]);
    });
  }

  // ---- Modo libre: cada tanto pasa algo y hay que decidir ----
  freeEvent() {
    const g = this.g, G = g.grid, U = g.ui;
    if (Math.random() < 0.5) g.extras.choose('Ola de calor', 'Todos prenden el aire acondicionado y la demanda se dispara. ¿Qué hacemos?', [['Pedir a los vecinos que lo pongan en 24 °C', 'Baja el consumo de toda la ciudad'], ['Sostener con baterías y más biomasa', 'Aguanta mientras dure la reserva']], i => {
      const e0 = G.eff || 0; G.demandExtraTarget += 30; if (i === 0) G.eff = e0 + 0.07; else { G.bioBoost = 1.2; G.bat.mode = 'auto'; }
      this.ev = { t: 80, undo: () => { G.demandExtraTarget -= 30; G.eff = e0; G.bioBoost = 1; } }; U.note(i === 0 ? 'Los vecinos colaboran: mismo fresco, menos consumo.' : 'Baterías y biomasa al frente. Mirá cuánto dura la reserva.', 5);
    });
    else g.extras.choose('Semanas sin lluvia', 'El embalse bajó y la represa rinde menos. ¿Con qué la reemplazamos?', [['Con el viento y el sol que haya', 'No cuesta nada, pero depende del clima'], ['Con más biomasa', 'Firme, mientras alcancen los chips']], i => {
      G.headBonus = -0.25; if (i === 1) G.bioBoost = 1.25; this.ev = { t: 80, undo: () => { G.headBonus = 0; G.bioBoost = 1; } }; U.note(i === 0 ? 'A mirar el cielo: hoy mandan el viento y el sol.' : 'La caldera trabaja a pleno para cubrir a la represa.', 5);
    });
  }

  // ---- Final: hora pico nocturna ----
  startM5() {
    const G = this.g.grid, S = this.short;
    G.hydro.t[3].on = true; G.hydro.t.forEach(u => { u.fault = false; }); G.hydro.gates.forEach(g => { g.reg = true; }); G.bat.soc = Math.max(G.bat.soc, 0.93); G.bat.mode = 'hold';
    G.hour = 20; G.clockRate = 0; G.holdAt = S ? 21.5 : 22; G.energyRate = 1 / 60; G.windTarget = 0.85; G.windBase = 0.85; G.gustiness = 0.2; G.demandExtraTarget = 0;
    this.m5 = { t: S ? 90 : 120, total: S ? 90 : 120, grace: this.level === 'explorador' ? 22 : 12, events: S ? [[68, 'wind'], [36, 'hydro']] : [[98, 'wind2'], [64, 'bio'], [30, 'hydro']] };
    this.g.ui.toast('¡HORA PICO!', `Mantené el 100${N}% renovable durante ${S ? '90 segundos' : '2 minutos'}`, 3);
  }
  fault(kind) {
    const G = this.g.grid, U = this.g.ui, rnd = a => a[Math.floor(Math.random() * a.length)];
    let msg = '';
    if (kind === 'wind' || kind === 'wind2') { const ok = G.windP.t.map((u, i) => i).filter(i => !G.windP.t[i].fault); if (!ok.length) return; const a = rnd(ok); G.windP.t[a].fault = true; msg = `Se trabó el freno del aerogenerador ${a + 1}`; if (kind === 'wind2') { const rest = ok.filter(i => i !== a); if (rest.length) { const b = rnd(rest); G.windP.t[b].fault = true; msg = `Se trabaron los aerogeneradores ${Math.min(a, b) + 1} y ${Math.max(a, b) + 1}`; } } }
    else if (kind === 'windtx') { if (!G.windP.tx || G.windP.txFault) return; G.windP.txFault = true; msg = 'Saltó la protección del transformador eólico'; }
    else if (kind === 'hydro') { const ok = [0, 1, 2, 3].filter(i => G.hydro.t[i].on && !G.hydro.t[i].fault); if (!ok.length) return; const a = rnd(ok); G.hydro.t[a].fault = true; msg = `La turbina ${a + 1} perdió el sincronismo`; }
    else if (kind === 'solar') { const ok = [0, 1, 2, 3].filter(i => G.solar.a[i].on && !G.solar.a[i].fault); if (!ok.length) return; const a = rnd(ok); G.solar.a[a].fault = true; msg = `Polvo sobre la matriz solar ${a + 1}`; }
    else if (kind === 'bio') { if (!G.bio.on || G.bio.fault) return; G.bio.fault = true; msg = 'Cayó la presión de la caldera de biomasa'; }
    else if (kind === 'gate') { const ok = [0, 1, 2, 3].filter(i => G.hydro.gates[i].reg); if (!ok.length) return; const a = rnd(ok); G.hydro.gates[a].reg = false; msg = `La compuerta ${a + 1} quedó abierta de más`; }
    U.note('Alerta de red: ' + msg + '.', 5); this.g.audio.alarm();
  }
  randomFault() {
    const G = this.g.grid, kinds = ['wind', 'wind', 'hydro', 'windtx', 'gate'];
    if (G.sun() > 0.3) kinds.push('solar', 'solar'); if (G.bio.on) kinds.push('bio');
    this.fault(kinds[Math.floor(Math.random() * kinds.length)]);
  }
  clearFaults() { const G = this.g.grid; G.windP.t.forEach(u => { u.fault = false; }); G.windP.txFault = false; G.hydro.t.forEach(u => { u.fault = false; }); G.hydro.gates.forEach(g => { g.reg = true; }); G.bio.fault = false; }
  failM5() {
    const g = this.g; this.m5 = null; this.active = false; g.ui.timer(null);
    this.scenario('pico', true); g.grid.bat.soc = 0.93; g.grid.bat.mode = 'auto'; this.clearFaults();
    g.ui.dialog([L('valeria', `Entró el respaldo fósil demasiado tiempo y perdimos el 100${N}% renovable. Tranquilo: reparé las fallas y recargué las baterías.`), L('valeria', 'Un consejo: las baterías son tu margen. Arreglá cada falla antes de que se vacíen. Vení a verme cuando quieras intentarlo de nuevo.')], () => { this.active = true; });
  }
  // Ceremonia: Capi en primer plano sobre el escenario de la plaza, discurso y créditos
  runCeremony() {
    const g = this.g; g.actors.celebrate = 4; this.fw = 600; this.fwNorth = true;
    g.startCine();
    g.ui.dialog(this.lines(SPEECH), () => {
      g.capi.celebrate(3); g.audio.fanfare(); g.actors.celebrate = 600;
      g.dance(11, () => g.extras.showDiploma(() => g.showCredits(() => { g.endCine(); this.fwNorth = false; this.fw = 12; g.actors.celebrate = 10; this.phase = this.seq.length; this.save(); this.start(this.mode, this.phase, false); g.actors.gather(true); })));
    });
  }

  update(dt) {
    const g = this.g, G = g.grid, U = g.ui; this.t += dt;
    if (this.lapse && Math.abs(G.hour - this.lapse.to) < 1e-3) { G.clockRate = this.lapse.rate; G.holdAt = this.lapse.hold; this.lapse = null; }
    // Estados de consolas
    const st = this.active ? this.steps() : [];
    let cur = st.findIndex(s => !s.done); if (cur < 0) cur = st.length;
    const targets = this.active && st[cur] ? st[cur].targets : g.tut && g.tut.on ? g.tut.targets() : [];
    for (const it of g.world.interList) { const d = this.describe(it.id); it.state = d.state; it.label = d.label || ''; it.target = targets.includes(it.id); if (it.target && it.state === 'locked') it.state = 'ok'; }
    if (this.fw > 0) {
      this.fw -= dt;
      if (Math.random() < 2.2 * dt) { const n = this.fwNorth; g.fx.firework(n ? -58 + Math.random() * 28 : -60 + Math.random() * 60, n ? 13 + Math.random() * 10 : 22 + Math.random() * 16, n ? 8 + Math.random() * 16 : 84 + Math.random() * 14, [0x57e389, 0x5ad1ff, 0xffd23f, 0xff8fab, 0xffffff][Math.floor(Math.random() * 5)]); g.audio.boom(); }
    }
    if (this.free) {
      if (G.out.pct < 97) this.flags.low = true;
      if (!this.flags.full && this.flags.low && G.out.pct >= 99.9) { this.flags.full = true; g.celebrate100(); }
      this.streak = G.out.pct >= 100 ? this.streak + dt : 0; this.best = Math.max(this.best, this.streak);
      this.evT = (this.evT == null ? 75 : this.evT) - dt;
      if (this.ev) { this.ev.t -= dt; if (this.ev.t <= 0) { this.ev.undo(); this.ev = null; U.note('Pasó el evento: la red vuelve a la normalidad.', 4); } }
      else if (this.evT <= 0 && !g.locked) { this.evT = 150 + Math.random() * 60; this.freeEvent(); }
      this.faultT -= dt; if (this.faultT <= 0) { this.faultT = 50 + Math.random() * 40; this.randomFault(); }
      const mm = s => Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');
      U.mission('Modo libre', 'Sandbox climático · panel de red con Tab', [
        { text: `Mantener la red al 100${N}% renovable`, state: G.out.pct >= 100 ? 'done' : 'now' },
        { text: 'Racha actual: ' + mm(this.streak), state: 'next' }, { text: 'Mejor racha: ' + mm(this.best), state: 'next' }]);
      U.timer(null); return;
    }
    if (g.tut && g.tut.on) { U.mission('Primeros pasos', `Tutorial · antes de la misión 1`, g.tut.items()); return; }
    const SC = this.school && g.escuela ? g.escuela.info(this.school) : null;
    U.mission(SC ? `Modo escuela · ${SC.name}` : `Misión ${this.phase + 1} de ${this.seq.length} · ${this.title}`, this.active ? 'Objetivos' : this.schoolDone ? '¡Misión completa!' : 'Recibiendo instrucciones…', st.map((s, i) => ({ text: s.text, state: i < cur ? 'done' : i === cur ? 'now' : 'next' })));
    if (!this.active) return;
    if (G.out.pct < 97) this.flags.low = true;
    if (!this.flags.full && this.flags.low && G.out.pct >= 99.9 && !this.lapse) { this.flags.full = true; g.celebrate100(); }
    if (cur !== this.step) { if (cur > this.step && cur < st.length) g.audio.ok(); this.step = cur; }
    const K = this.key;
    // Reglas especiales
    if (K === 'sol') {
      const left = 18.5 - G.hour; if (this.lapse) U.timer(null); else U.timer(G.bat.connected ? `Atardecer en ${Math.max(0, Math.floor(left))} h ${String(Math.max(0, Math.floor((left % 1) * 60))).padStart(2, '0')} min` : 'Sol hasta las 18:30', left < 2);
      if (left <= 0 && cur < st.length && !this.lapse) { this.active = false; U.timer(null); U.dialog([L('valeria', 'Se nos fue el sol antes de completar la carga. No pasa nada: mañana sale de nuevo. Adelanto el reloj y seguimos donde quedamos.')], () => { this.scenario('sol', false); this.active = true; }); }
    }
    if (K === 'tormenta' && G.out.pct < 99.9) this.fossilT = (this.fossilT || 0) + dt;
    if (K === 'urbano' && this.busT > 0) { this.busT -= dt; if (this.busT <= 0) this.flags.busesSeen = true; }
    if (K === 'pico' && this.m5 && !this.flags.m5won) {
      const m = this.m5;
      if (!m.started) { if (G.bat.mode !== 'auto') { U.timer('Pasá las baterías a Automático (Tab)', true); return; } m.started = true; G.clockRate = 1 / 60; }
      m.t -= dt;
      while (m.events.length && m.t <= m.events[0][0]) this.fault(m.events.shift()[1]);
      if (G.out.pct < 99.9) m.grace -= dt;
      const s = Math.max(0, Math.ceil(m.t));
      U.timer(`Hora pico: ${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}  ·  margen fósil ${Math.max(0, m.grace).toFixed(0)} s`, G.out.pct < 99.9);
      if (m.grace <= 0) return this.failM5();
      if (m.t <= 0) {
        this.flags.m5won = true; g.stats.mission('pico'); U.timer(null); U.toast(`¡100${N}% RENOVABLE!`, 'Pasó la hora pico sin un solo apagón', 4.5); g.audio.fanfare(); g.capi.celebrate(3); g.actors.celebrate = 10; this.fw = 60; this.fwNorth = false;
        this.clearFaults(); G.energyRate = 1 / 20; G.gustiness = 0.1;
        if (this.school) { this.schoolDone = true; setTimeout(() => U.dialog([L('valeria', '¡Lo logramos! Pasó el pico sin quemar una gota de combustible. Así se maneja una red 100 % renovable.')], () => g.escuela.complete('pico')), 4200); return; }
        this.ceremony = true; g.actors.gather(true);
        setTimeout(() => U.dialog([L('valeria', '¡Lo logramos! Pasó el pico sin quemar una gota de combustible. Vení a la Plaza Matriz: te armamos un escenario y te estamos esperando todos.')]), 4200);
      }
      return;
    }
    if (cur >= st.length && st.length && !this.pending && K !== 'pico') {
      // Misión completa
      this.pending = 1; this.active = false; U.timer(null);
      g.stats.mission(K); U.toast('¡MISIÓN COMPLETA!', this.title, 3.6); g.audio.fanfare(); g.capi.celebrateFor(K, 3.6); g.actors.celebrate = 7;
      if (K === 'tormenta') { G.cloudTarget = 0; G.cloud = Math.min(G.cloud, 0.3); g.vida.showRainbow(45); }   // escampa y sale el arcoíris
      const done = K, fs = Math.round(this.fossilT || 0), extra = K !== 'tormenta' ? null : L('valeria', (this.flags.first === 'dam' ? 'Cuidaste el agua primero, y el viento tardó un poco más en volver.' : 'Recuperaste potencia rápido, aunque el embalse siguió perdiendo agua un rato.') + (fs > 0 ? ` La ciudad pasó ${fs} segundos con respaldo fósil.` : ' Y la ciudad no necesitó respaldo fósil.'));
      setTimeout(() => {
        if (this.school) { this.schoolDone = true; const out = (extra ? [extra] : []).concat(this.lines(OUTRO[done])); const fin = () => { this.pending = 0; g.escuela.complete(done); }; return out.length ? U.dialog(out, fin) : fin(); }
        const next = () => { this.pending = 0; this.flags = {}; this.phase++; this.save(); this.step = 0; this.preset(this.phase); this.scenario(this.key, false); this.begin(); };
        const go = done !== 'viento' ? next : () => g.extras.choose('¿Por dónde seguimos?', 'Valeria: “Tenemos dos frentes abiertos. Elegí vos el orden: igual vamos a ir a los dos.”', [['A la Central Hidroeléctrica', 'El río: energía de base, firme y regulable'], ['Al Parque Solar', 'El sol del mediodía, guardado en baterías']], i => { this.swap = i === 1; this.seq = SEQ[this.mode].slice(); if (this.swap) { this.seq[1] = 'sol'; this.seq[2] = 'rio'; } next(); });
        const out = (extra ? [extra] : []).concat(this.lines(OUTRO[done])); if (out.length) U.dialog(out, go); else go();
      }, 3000);
    }
  }
}
