// Relieve analítico del diorama y posiciones clave de los cinco sectores.
import { clamp, lerp, smooth, fbm, distPoly } from './util.js';
import { RX, RZ0, S_CITY, railNear, railY } from './rail.js';
const _rn = {};

// Diorama "como en la realidad": el río Uruguay corre de norte a sur por el oeste; la represa de Salto Grande lo cruza
// al norte (lago arriba), Salto queda en la orilla oriental y Concordia (Argentina) enfrente, en la occidental.
export const B = { minX: -230, maxX: 290, minZ: -150, maxZ: 370 };
// Ampliación de la maqueta (todo lo nuevo queda al este de x 130 o al sur de z 210, así lo de antes no se mueve):
// la Cuchilla de Haedo con sus cerros chatos de basalto (noreste), los Potreros de Arerunguá con su arroyo y su monte de
// quebrada (este), la estación del ferrocarril y el río Daymán, que desemboca en el río Uruguay (sur)
export const B1 = { maxX: 130, maxZ: 210 };
export const MESAS = [[198, -106, 22, 11], [254, -56, 18, 9], [240, -128, 13, 7], [170, -44, 11, 5.5], [262, 10, 12, 6]];   // x, z, radio, altura
export const ARROYO = [[288, -86], [262, -40], [226, -14], [196, 22], [186, 62], [198, 106], [218, 148], [210, 196], [184, 236], [166, 272], [150, 300]];
export const DAYMAN = [[300, 324], [262, 312], [220, 318], [176, 304], [130, 314], [84, 326], [36, 318], [-10, 330], [-52, 326], [-100, 334]];
export const TAJAMAR = [160, 122, 9];
export const RAIL = { z: 247, x0: 66.8, x1: 289.2 };   // tramo recto hacia el este (la vía completa está en rail.js)
export const ESTACION = [13.1, 42];                  // andén de la estación de Salto, en la ciudad
export const newMask = (x, z) => Math.max(smooth(124, 140, x), smooth(204, 218, z));
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
  mateo: [34, 25], valeria: [-20, 27.8], lucia: [-14.3, 66.3],
  windT: HILLS.map(h => [h[0], h[1]]), windTx: [48, 8],
  dam: { x0: -161, x1: -90, z0: -103, z1: -97, top: 6.6 },
  gates: [-132.66, -127.82, -122.98, -118.14], turbs: [-108.5, -104, -99.5, -95],
  solar: [[6, -68], [21, -68], [6, -87], [21, -87]],
  inverter: [13.5, -77.5], batYard: [37, -69], batConsole: [37, -60.2],
  boiler: [60, 63], chips: [48, 58], bioSub: [73, 56],
  bridge: { x: -46, z0: -42, z1: -12 },
  stops: [[-24, 71.8, 'Terminal del Bulevar'], [-44, 52.3, 'Plaza Artigas'], [-66, -103.6, 'Represa de Salto Grande'], [38.5, 13.5, 'Parque Eólico'], [28, -56.2, 'Parque Solar'], [40.5, 60, 'Planta de Biomasa'],
    [-56, -3.2, 'Barrio Norte'], [-86.4, 52.6, 'Puerto'], [12, 0.4, 'Barrio Jardín'], [-79.5, -55.6, 'Energimundo']],
  // Ciudad ampliada
  norte: { z: 6, xs: [-68, -52, -36, -20] }, hospital: [-68, 6], escuela: [-52, 6], mercado: [-36, 6],
  // Centro según el plano real: el teatro al oeste, cerca de la Plaza 33; la Plaza Artigas (la principal) con la catedral al este
  teatro: [-68, 34], plaza33: [-68, 48], artigas: [-44, 44], catedral: [-20, 48], plazoleta: [-4, 48], cancha: [-6, -15],
  // Puerto de Salto en la costanera oeste: muelle hacia el oeste, escollera con faro y, enfrente, el muelle de Concordia
  puerto: [-89.5, 41.2], muelle: { z: 47.5, x0: -96, x1: -117 }, faro: [-107.5, 62.5], orilla: { z: 47.5, x0: -149, x1: -164 },
  startCapi: [-31.2, 31.4],
  // Energimundo, en la margen oriental de la represa (armado a partir de fotos del lugar)
  museo: { x0: -86, x1: -51, z0: -96, z1: -50 }, edificio: { x0: -75, x1: -58, z0: -82.5, z1: -75 },
  crono: [-66.5, -69], domo: [-58.5, -60.5], portal: [-68, -56.4], escenario: { x0: -55, x1: -51.8, z0: -74.5, z1: -67 }
};

// Zonas planas (sin ondulación) con borde difuminado: [x0, x1, z0, z1]
const FLAT = [[-90, 24, -12, 104], [40, 82, 50, 72], [50, 78, 79, 94], [42, 56, 2, 14], [-52, -40, -48, -8], [27, 41, 19, 31], [2, 44, -32, 10], [-18, 6, -24, -6], [-16, 50, -110, -54], [-94, -34, -112, -46]];
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
  const nm = newMask(x, z); if (nm > 0 && d > -6) h = ampliacion(x, z, h, nm);
  if (x > RX - 6 && z > RZ0 + 50 && h > 0.5) { const rn = railNear(x, z, _rn); if (rn.d < 4 && rn.s > S_CITY - 2) h = lerp(h, railY(rn.s) - 0.3, smooth(4, 1.6, rn.d)); }   // terraplén de la vía
  const dc = channelD(x, z), hw = lerp(3.5, 7.5, smooth(12, -12, x)) + 1.5 * smooth(-50, -100, x);   // angosto en la naciente, ancho en la desembocadura
  if (dc < hw + 4.5 && z > -60) h = Math.min(h, lerp(-2.6, h, smooth(hw, hw + 4.5, dc)));
  return h;
}
// Relieve de la ampliación: cerros chatos de basalto, pradera ondulada, quebrada del arroyo, tajamar y río Daymán
export function ampliacion(x, z, h, nm) {
  if (h > 0.5) {
    let add = (fbm(x * 0.025 + 3, z * 0.025 - 7) - 0.5) * 3 * smooth(140, 190, x);   // cuchillas suaves hacia el este
    for (const [mx, mz, r, a] of MESAS) {   // cerro chato: cima plana y ladera de piedra empinada (la cuesta basáltica)
      const d = Math.hypot(x - mx, z - mz) - r * 0.28 * (fbm(x * 0.045 + mx, z * 0.045) - 0.5) * 2;
      add += a * smooth(r + 8, r, d) + 0.6 * smooth(r, r - 6, d) * (fbm(x * 0.2, z * 0.2) - 0.5);
    }
    h += add * nm;
  }
  // arroyo: angosto, encajonado entre piedras arriba (quebrada) y más abierto en la pradera
  const da = distPoly(x, z, ARROYO), q = smooth(40, -60, z), aw = 2.2 + 1.3 * smooth(-40, 300, z);
  if (da < aw + 9) h = Math.min(h, lerp(-1.1, h, smooth(aw, aw + 3 + 6 * (1 - q), da)));
  const [tx, tz, tr] = TAJAMAR, dt = Math.hypot(x - tx, (z - tz) * 1.3);
  if (dt < tr + 3) h = Math.min(h, lerp(-0.9, h, smooth(tr - 3, tr + 2, dt)));
  // río Daymán: se ensancha hacia la desembocadura
  const dd = distPoly(x, z, DAYMAN), hw = lerp(5, 11, smooth(300, -100, x));
  if (dd < hw + 8) h = Math.min(h, lerp(-3, h, smooth(hw, hw + 7, dd)));
  return h;
}
// Nivel del agua: el lago de Salto Grande, elevado, al norte de la represa; río abajo, cota 0.
export const DEST = { water: null };   // los destinos de la Gira (lejos, al este) tienen sus propios niveles de agua
export const BND = { minX: B.minX, maxX: B.maxX, minZ: B.minZ, maxZ: B.maxZ };   // por dónde puede andar Capi (cambia en los viajes)
export function waterAt(x, z) { if (x > 1000 && DEST.water) return DEST.water(x, z); return z < DAM_Z - 3 && x < eastBank(z) + 30 ? RES : 0; }

export const ZONES = [
  { id: 'haedo', area: true, name: 'Cuchilla de Haedo · cerros chatos', x: 210, z: -80, color: '#c9a27a', rect: [132, 290, -150, 0] },
  { id: 'arerungua', area: true, name: 'Potreros de Arerunguá', x: 220, z: 120, color: '#d4c36a', rect: [132, 290, 0, 236] },
  { id: 'estacion', name: 'Estación del ferrocarril', x: 10, z: 42, color: '#ff8f5a', rect: [4.5, 19, 28.6, 54] },
  { id: 'termas', name: 'Termas del Daymán', x: 30, z: 287, color: '#35c9d2', rect: [16, 46, 276, 300] },
  { id: 'dayman', area: true, name: 'Río Daymán', x: 90, z: 330, color: '#4cc9f0', rect: [-90, 290, 290, 370] },
  { id: 'rio', area: true, name: 'Río Uruguay', x: -124, z: 40, color: '#4cc9f0', rect: [-150, -90, -84, 370] },
  { id: 'campo', area: true, name: 'Campo salteño y naranjales', x: 40, z: 150, color: '#ff9f2a', rect: [-86, 130, 102, 210] },
  { id: 'ciudad', name: 'Ciudad de Salto', x: -36, z: 50, color: '#ffd166', rect: [-86, 22, 12, 102] },
  { id: 'hidro', name: 'Represa de Salto Grande', x: -124, z: -100, color: '#4cc9f0', rect: [-166, -56, -112, -84] },
  { id: 'lago', area: true, name: 'Lago de Salto Grande', x: -150, z: -128, color: '#4cc9f0', rect: [-230, -56, -150, -112] },
  { id: 'eolica', name: 'Parque Eólico', x: 70, z: -12, color: '#e8f1f2' },
  { id: 'solar', name: 'Parque Solar y Baterías', x: 18, z: -80, color: '#ffb703', rect: [-18, 50, -112, -54] },
  { id: 'biomasa', name: 'Planta de Biomasa', x: 60, z: 62, color: '#90be6d' },
  { id: 'hidrogeno', name: 'Planta de Hidrógeno Verde', x: 64, z: 86, color: '#57e389', rect: [50, 78, 77, 96] },
  { id: 'norte', name: 'Barrio Norte y Costanera', x: -44, z: -3, color: '#f4a261', rect: [-86, 4, -24, 12] },
  { id: 'puerto', name: 'Puerto de Salto', x: -96, z: 50, color: '#5ad1ff', rect: [-120, -84, 30, 70] },
  { id: 'sur', name: 'Barrio Sur', x: -28, z: 118, color: '#f4a261', rect: [-42, -8, 97, 136] },
  { id: 'jardin', name: 'Barrio Jardín', x: 24, z: -10, color: '#b5e48c', rect: [4, 46, -34, 10] },
  { id: 'orilla', name: 'Concordia (Argentina)', x: -190, z: 40, color: '#9be7ff', rect: [-230, -152, -92, 370] },
  { id: 'museo', name: 'Energimundo', x: -67, z: -70, color: '#e6007e', rect: [-86, -48, -98, -49] }
];
