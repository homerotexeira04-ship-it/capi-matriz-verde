// Relieve analítico del diorama y posiciones clave de los cinco sectores.
import { clamp, lerp, smooth, fbm, distPoly } from './util.js';

// Diorama ampliado: más río al oeste, la otra orilla al sur y campo al este (cuadrado de 290 × 290)
export const B = { minX: -160, maxX: 130, minZ: -112, maxZ: 178 };
// Área original: se usa para sembrar la flora de siempre en los mismos lugares
export const B0 = { minX: -125, maxX: 110, minZ: -110, maxZ: 125 };
export const LAND = 2, PLATEAU = 6, RES = 5, CITY_Y = 2.15;

// El canal corre más al norte para dejar lugar al Barrio Norte y a la costanera
export const CHANNEL = [[0, -52], [0, -40], [-28, -29], [-66, -26], [-170, -25]];
export const HILLS = [[52, -28, 6], [72, -36, 7], [90, -12, 6.5], [66, -4, 5.5], [86, 16, 6]];

export const POS = {
  plaza: [-44, 44], stage: [-44, 32.6], fest: [-44, 36.6], substation: [-20, 20], terminal: [-20, 62], tower: [-36, 20],
  mateo: [34, 25], valeria: [-20, 27.8], lucia: [-12.6, 66.2],
  windT: HILLS.map(h => [h[0], h[1]]), windTx: [48, 8],
  dam: { x0: -24, x1: 24, z0: -58, z1: -52, top: 6.6 },
  gates: [-18.66, -13.82, -8.98, -4.14], turbs: [5.5, 10, 14.5, 19],
  solar: [[-74, -68], [-59, -68], [-74, -87], [-59, -87]],
  inverter: [-66.5, -77.5], batYard: [-43, -69], batConsole: [-43, -60.2],
  boiler: [60, 63], chips: [48, 58], bioSub: [73, 56],
  bridge: { x: -46, z0: -42, z1: -12 },
  stops: [[-24, 71.8, 'Terminal de la Rambla'], [-44, 52.3, 'Plaza Matriz'], [30.2, -35.5, 'Central Hidroeléctrica'], [38.5, 13.5, 'Parque Eólico'], [-52, -56.2, 'Parque Solar'], [40.5, 60, 'Planta de Biomasa'],
    [-56, -3.2, 'Barrio Norte'], [10.2, 74.4, 'Puerto'], [12, 0.4, 'Barrio Jardín'], [34.5, -57.6, 'Energimundo']],
  // Ciudad ampliada
  norte: { z: 6, xs: [-68, -52, -36, -20] }, hospital: [-68, 6], escuela: [-52, 6], mercado: [-36, 6],
  teatro: [-52, 20], catedral: [-36, 62], cancha: [-6, -15],
  puerto: [17, 78.4], muelle: { x: 17, z0: 81, z1: 107 }, faro: [34, 101], orilla: { x: 17, z0: 140, z1: 152 },
  startCapi: [-31.2, 31.4],
  // Energimundo, en la margen oriental de la represa (armado a partir de fotos del lugar)
  museo: { x0: 28, x1: 63, z0: -98, z1: -52 }, edificio: { x0: 39, x1: 56, z0: -84.5, z1: -77 },
  crono: [47.5, -71], domo: [55.5, -62.5], portal: [46, -58.4], escenario: { x0: 59, x1: 62.2, z0: -76.5, z1: -69 }
};

// Zonas planas (sin ondulación) con borde difuminado: [x0, x1, z0, z1]
const FLAT = [[-90, 20, -12, 90], [-92, -34, -106, -58], [40, 82, 50, 72], [42, 56, 2, 14], [-52, -40, -48, -8], [-34, 34, -62, -50], [27, 41, 19, 31], [2, 44, -32, 10], [-10, 42, 64, 84], [-18, 6, -24, -6], [29, 63, -98, -52]];
function flatMask(x, z) {
  let m = 0;
  for (const r of FLAT) {
    const d = Math.min(x - r[0], r[1] - x, z - r[2], r[3] - z);
    m = Math.max(m, smooth(-6, 2, d));
  }
  return m;
}

export function coastD(x, z) {
  const a = 82 + 2.5 * Math.sin(x * 0.045) - z, b = x - (-90 + 2.5 * Math.sin(z * 0.05));
  const k = 8, h = clamp(0.5 + 0.5 * (b - a) / k, 0, 1);
  return lerp(b, a, h) - k * h * (1 - h);
}
// La otra orilla del río (positivo = tierra firme del otro lado)
export function farD(x, z) { return z - (148 + 3 * Math.sin(x * 0.035 + 1) + 1.6 * Math.sin(x * 0.11)); }
export const channelD = (x, z) => distPoly(x, z, CHANNEL);
export function resInside(x, z) {
  const w = 20 + 12 * smooth(-58, -85, z);
  return Math.min(w - Math.abs(x), -56 - z);
}
export function landAdd(x, z) {
  const fm = flatMask(x, z);
  let hill = 0;
  for (const [hx, hz, a] of HILLS) { const dx = x - hx, dz = z - hz; hill += a * Math.exp(-(dx * dx + dz * dz) / 340); }
  const east = smooth(22, 44, x);
  const rough = hill + east * (1.0 * Math.sin(x * 0.11 + 1) * Math.cos(z * 0.09) + 0.9) + (fbm(x * 0.06 + 40, z * 0.06 + 40) - 0.5) * 1.6;
  return (PLATEAU - LAND) * smooth(-36, -54, z) + rough * (1 - fm);
}
export function terrainH(x, z) {
  const d = coastD(x, z);
  let h = lerp(-3.2, LAND + landAdd(x, z), smooth(-5, 2.5, d));
  const fd = farD(x, z);
  if (fd > -6) h = Math.max(h, lerp(-3.2, LAND + 0.25 + smooth(14, 30, fd) * 2.2 + (fbm(x * 0.05 + 7, z * 0.05) - 0.5) * 0.9 * smooth(6, 14, fd), smooth(-5, 2.5, fd)));
  const dc = channelD(x, z), hw = 8 + 9 * smooth(-40, -52, z);
  if (dc < hw + 4.5 && z > -58) h = Math.min(h, lerp(-2.6, h, smooth(hw, hw + 4.5, dc)));
  const ri = resInside(x, z);
  if (ri > -4.5) h = lerp(h, 1.0, smooth(-4.5, 0.5, ri));
  return h;
}
// Nivel del agua: embalse elevado al norte de la represa, río abajo y costa en cota 0.
export function waterAt(x, z) { return z < -56 && 20 + 12 * smooth(-58, -85, z) - Math.abs(x) > -4.5 ? RES : 0; }

export const ZONES = [
  { id: 'ciudad', name: 'Ciudad Costera y Rambla', x: -46, z: 46, color: '#ffd166' },
  { id: 'hidro', name: 'Central Hidroeléctrica', x: 0, z: -55, color: '#4cc9f0' },
  { id: 'eolica', name: 'Parque Eólico de las Cuchillas', x: 70, z: -12, color: '#e8f1f2' },
  { id: 'solar', name: 'Parque Solar y Baterías', x: -62, z: -76, color: '#ffb703' },
  { id: 'biomasa', name: 'Planta de Biomasa', x: 60, z: 62, color: '#90be6d' },
  { id: 'norte', name: 'Barrio Norte y Costanera', x: -44, z: -3, color: '#f4a261', rect: [-86, 4, -24, 12] },
  { id: 'puerto', name: 'Puerto y Faro', x: 18, z: 88, color: '#5ad1ff', rect: [-8, 44, 70, 112] },
  { id: 'jardin', name: 'Barrio Jardín', x: 24, z: -10, color: '#b5e48c', rect: [4, 46, -34, 10] },
  { id: 'orilla', name: 'La otra orilla', x: 17, z: 160, color: '#9be7ff', rect: [-160, 130, 128, 178] },
  { id: 'museo', name: 'Energimundo', x: 47, z: -72, color: '#e6007e', rect: [29, 63, -98, -53] }
];
