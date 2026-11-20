// Relieve analítico del diorama y posiciones clave de los cinco sectores.
import { clamp, lerp, smooth, fbm, distPoly } from './util.js';

// Diorama "como en la realidad": el río Uruguay corre de norte a sur por el oeste; la represa de Salto Grande lo cruza
// al norte (lago arriba), Salto queda en la orilla oriental y Concordia (Argentina) enfrente, en la occidental.
export const B = { minX: -230, maxX: 130, minZ: -150, maxZ: 210 };
// Área original: se usa para sembrar la flora de siempre en los mismos lugares
export const B0 = { minX: -125, maxX: 110, minZ: -110, maxZ: 125 };
export const LAND = 2, PLATEAU = 6, RES = 5, CITY_Y = 2.15;
// Represa (de orilla a orilla) y desplazamientos de los sectores que se mudaron (se construyen con sus coordenadas de antes)
export const DAM_Z = -100, HYDRO_OFF = [-114, -45], SOLAR_OFF = [80, 0], MUSEO_OFF = [-114, 2];

// Arroyo al norte de la ciudad (antes era un canal): nace en la meseta y desemboca en el río
export const CHANNEL = [[12, -44], [-2, -36], [-28, -29], [-66, -26], [-104, -25]];
export const HILLS = [[52, -28, 6], [72, -36, 7], [90, -12, 6.5], [66, -4, 5.5], [86, 16, 6]];

export const POS = {
  plaza: [-44, 44], stage: [-44, 32.6], fest: [-44, 36.6], substation: [-20, 20], terminal: [-20, 62], tower: [-36, 20],
  mateo: [34, 25], valeria: [-20, 27.8], lucia: [-12.6, 66.2],
  windT: HILLS.map(h => [h[0], h[1]]), windTx: [48, 8],
  dam: { x0: -161, x1: -90, z0: -103, z1: -97, top: 6.6 },
  gates: [-132.66, -127.82, -122.98, -118.14], turbs: [-108.5, -104, -99.5, -95],
  solar: [[6, -68], [21, -68], [6, -87], [21, -87]],
  inverter: [13.5, -77.5], batYard: [37, -69], batConsole: [37, -60.2],
  boiler: [60, 63], chips: [48, 58], bioSub: [73, 56],
  bridge: { x: -46, z0: -42, z1: -12 },
  stops: [[-24, 71.8, 'Terminal y bulevar'], [-44, 52.3, 'Plaza Matriz'], [-66, -103.6, 'Represa de Salto Grande'], [38.5, 13.5, 'Parque Eólico'], [28, -56.2, 'Parque Solar'], [40.5, 60, 'Planta de Biomasa'],
    [-56, -3.2, 'Barrio Norte'], [-86.4, 52.6, 'Puerto'], [12, 0.4, 'Barrio Jardín'], [-79.5, -55.6, 'Energimundo']],
  // Ciudad ampliada
  norte: { z: 6, xs: [-68, -52, -36, -20] }, hospital: [-68, 6], escuela: [-52, 6], mercado: [-36, 6],
  teatro: [-4, 34], artigas: [-4, 48], catedral: [-36, 62], cancha: [-6, -15],
  // Puerto de Salto en la costanera oeste: muelle hacia el oeste, escollera con faro y, enfrente, el muelle de Concordia
  puerto: [-89.5, 41.2], muelle: { z: 47.5, x0: -96, x1: -117 }, faro: [-107.5, 62.5], orilla: { z: 47.5, x0: -149, x1: -164 },
  startCapi: [-31.2, 31.4],
  // Energimundo, en la margen oriental de la represa (armado a partir de fotos del lugar)
  museo: { x0: -86, x1: -51, z0: -96, z1: -50 }, edificio: { x0: -75, x1: -58, z0: -82.5, z1: -75 },
  crono: [-66.5, -69], domo: [-58.5, -60.5], portal: [-68, -56.4], escenario: { x0: -55, x1: -51.8, z0: -74.5, z1: -67 }
};

// Zonas planas (sin ondulación) con borde difuminado: [x0, x1, z0, z1]
const FLAT = [[-90, 24, -12, 104], [40, 82, 50, 72], [42, 56, 2, 14], [-52, -40, -48, -8], [27, 41, 19, 31], [2, 44, -32, 10], [-18, 6, -24, -6], [-16, 50, -110, -54], [-94, -34, -112, -46]];
function flatMask(x, z) {
  let m = 0;
  for (const r of FLAT) {
    const d = Math.min(x - r[0], r[1] - x, z - r[2], r[3] - z);
    m = Math.max(m, smooth(-6, 2, d));
  }
  return m;
}

// Orilla oriental del río Uruguay (Salto): positivo = tierra uruguaya
export const eastBank = z => -90 + 2.5 * Math.sin(z * 0.05) - 5 * Math.exp(-(((z - DAM_Z) / 10) ** 2));   // estribo de la represa
export function coastD(x, z) { return x - eastBank(z); }
// Orilla occidental (Concordia, Argentina): positivo = tierra argentina. Al norte de la represa el lago se ensancha hacia el oeste.
export const westBank = z => -158 + 3 * Math.sin(z * 0.035 + 1) + 1.6 * Math.sin(z * 0.11) - 40 * smooth(DAM_Z - 4, DAM_Z - 24, z);
export function westD(x, z) { return westBank(z) - x; }
export const farD = westD;
export const channelD = (x, z) => distPoly(x, z, CHANNEL);
export function resInside() { return -99; }   // ya no hay embalse aparte: el lago es el propio río
export const inLake = (x, z) => z < DAM_Z - 3 && x < eastBank(z) + 6 && x > westBank(z) - 6;
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
  const fd = westD(x, z);
  if (fd > -6) {   // Argentina: barranca baja frente a la ciudad y meseta al lado de la represa
    const ar = LAND + 0.25 + smooth(14, 30, fd) * 2.2 + (fbm(x * 0.05 + 7, z * 0.05) - 0.5) * 0.9 * smooth(6, 14, fd) + (PLATEAU + 0.4 - LAND) * smooth(DAM_Z + 24, DAM_Z + 6, z);
    h = Math.max(h, lerp(-3.2, ar, smooth(-5, 2.5, fd)));
  }
  if (z < DAM_Z - 2 && d < 3 && fd < 3) h = Math.max(h, 1.0);   // fondo del lago (arriba de la represa)
  const dc = channelD(x, z), hw = lerp(3.5, 7.5, smooth(12, -12, x)) + 1.5 * smooth(-50, -100, x);   // angosto en la naciente, ancho en la desembocadura
  if (dc < hw + 4.5 && z > -60) h = Math.min(h, lerp(-2.6, h, smooth(hw, hw + 4.5, dc)));
  return h;
}
// Nivel del agua: el lago de Salto Grande, elevado, al norte de la represa; río abajo, cota 0.
export function waterAt(x, z) { return z < DAM_Z - 3 && x < eastBank(z) + 30 ? RES : 0; }

export const ZONES = [
  { id: 'rio', name: 'Río Uruguay', x: -124, z: 40, color: '#4cc9f0', rect: [-150, -90, -84, 210] },
  { id: 'campo', name: 'Campo salteño y naranjales', x: 40, z: 150, color: '#ff9f2a', rect: [-86, 130, 102, 210] },
  { id: 'ciudad', name: 'Ciudad de Salto', x: -36, z: 50, color: '#ffd166', rect: [-86, 22, 12, 102] },
  { id: 'hidro', name: 'Represa de Salto Grande', x: -124, z: -100, color: '#4cc9f0', rect: [-166, -86, -112, -84] },
  { id: 'lago', name: 'Lago de Salto Grande', x: -150, z: -128, color: '#4cc9f0', rect: [-230, -86, -150, -112] },
  { id: 'eolica', name: 'Parque Eólico de las Cuchillas', x: 70, z: -12, color: '#e8f1f2' },
  { id: 'solar', name: 'Parque Solar y Baterías', x: 18, z: -80, color: '#ffb703', rect: [-18, 50, -112, -54] },
  { id: 'biomasa', name: 'Planta de Biomasa', x: 60, z: 62, color: '#90be6d' },
  { id: 'norte', name: 'Barrio Norte y Costanera', x: -44, z: -3, color: '#f4a261', rect: [-86, 4, -24, 12] },
  { id: 'puerto', name: 'Puerto de Salto', x: -96, z: 50, color: '#5ad1ff', rect: [-120, -84, 30, 70] },
  { id: 'sur', name: 'Barrio Sur', x: -28, z: 118, color: '#f4a261', rect: [-42, -8, 97, 136] },
  { id: 'jardin', name: 'Barrio Jardín', x: 24, z: -10, color: '#b5e48c', rect: [4, 46, -34, 10] },
  { id: 'orilla', name: 'Concordia (Argentina)', x: -190, z: 40, color: '#9be7ff', rect: [-230, -152, -92, 210] },
  { id: 'museo', name: 'Energimundo', x: -67, z: -70, color: '#e6007e', rect: [-86, -48, -98, -49] }
];
