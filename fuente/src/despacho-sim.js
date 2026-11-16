// Simulación del "día de despacho" del Centro de Control (sin gráficos, para poder probarla aparte)
const DEM = [[0, 108], [3, 96], [6, 118], [9, 160], [12, 165], [15, 156], [18, 186], [20, 210], [21.5, 216], [23, 184], [24, 108]];
export const demand = h => { for (let i = 1; i < DEM.length; i++) if (h <= DEM[i][0]) { const a = DEM[i - 1], b = DEM[i]; return a[1] + (b[1] - a[1]) * (h - a[0]) / (b[0] - a[0]); } return 108; };
export const wind = h => 40 * (0.6 + 0.4 * Math.cos((h - 3) / 24 * 2 * Math.PI));
export const sun = h => (h > 6.5 && h < 19.5 ? 135 * Math.pow(Math.sin(Math.PI * (h - 6.5) / 13), 1.25) : 0);
export const BIO = 30, HYDRO = 130, BATP = 55, BATE = 170, WATER = 1260, SOC0 = 60;
export const fresh = () => ({ h: 0, water: WATER, soc: SOC0, fossilE: 0, demE: 0, wasteE: 0, out: {} });
// lever: 0..1 de la potencia hidráulica; mode: -1 cargar, 0 reposo, 1 descargar
export function step(s, lever, mode, dtH) {
  const d = demand(s.h), w = wind(s.h), su = sun(s.h); let hy = Math.min(HYDRO * lever, s.water / dtH); const base = w + su + BIO + hy; let bat = 0;
  if (mode < 0) bat = -Math.min(BATP, Math.max(0, base - d), (BATE - s.soc) / dtH);        // solo carga con lo que sobra
  else if (mode > 0) bat = Math.min(BATP, Math.max(0, d - base), s.soc / dtH);
  const fossil = Math.max(0, d - base - Math.max(0, bat)), waste = Math.max(0, base + Math.min(0, bat) - d);
  s.water -= hy * dtH; s.soc -= bat * dtH; s.fossilE += fossil * dtH; s.demE += d * dtH; s.wasteE += waste * dtH; s.h += dtH;
  s.out = { d, w, su, hy, bat, fossil, waste }; return s;
}
export const pct = s => (s.demE > 0 ? 100 * (1 - s.fossilE / s.demE) : 100);
