// Vida del campo en la ampliación: el tren de la estación, la fauna de la pradera (con encuentros raros de noche),
// las flores del pastizal, el ganado de la estancia, la bióloga con sus cámaras trampa y el álbum de fauna.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { rng, lerp, smooth, clamp, damp, angDiff, distPoly } from './util.js';
import { RAIL, ESTACION, ARROYO, TAJAMAR, MESAS, DAYMAN, terrainH, newMask } from './terrain.js';
import { railY, ESTANCIA, BIOLOGA, CAMS, NESTS, CUEVAS } from './pradera.js';
import { makePerson } from './actors.js';
import { NAMES } from './ui.js';
import { animalParts } from './animales.js';

const $ = id => document.getElementById(id);
const L = (who, text) => ({ who, text });
const FKEY = 'capi-fauna';

// ---------- Fichas del álbum de fauna (datos revisados) ----------
export const FAUNA = [
  { k: 'venado', name: 'Venado de campo', fact: 'Es Monumento Natural de Uruguay desde 1985. De sus cuatro poblaciones en el país, tres están en Salto.' },
  { k: 'nandu', name: 'Ñandú', fact: 'Es el ave más grande de Uruguay. No vuela, pero corre muy rápido. El macho empolla los huevos y cuida a los pichones.' },
  { k: 'aguara', name: 'Aguará guazú', fact: 'El cánido más grande de América del Sur. Se lo creía extinguido en Uruguay, hasta que en 2021 lo filmaron en Salto.', rare: true },
  { k: 'puma', name: 'Puma', fact: 'Se lo consideró extinto en Uruguay a principios del siglo XX. Hoy hay avistamientos muy esporádicos, también en Salto.', rare: true },
  { k: 'zorro', name: 'Zorro gris', fact: 'Come de todo: frutos, insectos y roedores. Así ayuda a controlar las plagas del campo. Anda más de noche.' },
  { k: 'mulita', name: 'Mulita', fact: 'Es un armadillo: tiene caparazón de placas y cava cuevas con sus uñas fuertes.' },
  { k: 'hornero', name: 'Hornero', fact: 'Arma su nido de barro con forma de horno. Adentro tiene una pared que protege la cámara de los huevos.' },
  { k: 'lechucita', name: 'Lechucita de campo', fact: 'Anda de día y vive en cuevas en el suelo, a veces en las que dejaron las mulitas.' },
  { k: 'chaja', name: 'Chajá', fact: 'Grita fuerte cuando ve algo raro: es el guardián del bañado. Tiene dos espolones filosos en cada ala.' },
  { k: 'carancho', name: 'Carancho', fact: 'Un ave rapaz que come de todo: carroña, insectos y animales chicos. Le gusta pararse en los postes.' },
  { k: 'garza', name: 'Garza blanca', fact: 'Pesca quieta en la orilla y atrapa peces y ranas con su pico largo.' },
  { k: 'carpincho', name: 'Carpincho', fact: 'El roedor más grande del mundo. Nada muy bien y puede quedarse varios minutos bajo el agua.' },
  { k: 'guazubira', name: 'Guazubirá', fact: 'Un venado chico que vive escondido en el monte nativo. Sale a comer al amanecer y al atardecer.' },
  { k: 'manopelada', name: 'Mano pelada', fact: 'Busca cangrejos y otros bichos en la orilla con sus manos sin pelo: de ahí viene su nombre.' },
  { k: 'zorrillo', name: 'Zorrillo', fact: 'Si se siente en peligro, levanta la cola y tira un líquido con muy mal olor.' },
  { k: 'lobito', name: 'Lobito de río', fact: 'Es una nutria que vive en arroyos de agua limpia. Verlo es señal de un río sano.' }
];
const FBY = Object.fromEntries(FAUNA.map(f => [f.k, f]));
// Qué puede aparecer en cada cámara (peso relativo). El puma y el aguará son rarezas de verdad.
const SPOT = [
  { zorro: 26, mulita: 16, guazubira: 16, zorrillo: 10, aguara: 9, puma: 3, manopelada: 8 },
  { carpincho: 22, manopelada: 18, zorro: 12, garza: 12, lobito: 9, aguara: 7, puma: 3, guazubira: 6 },
  { venado: 24, nandu: 18, zorro: 12, mulita: 10, lechucita: 10, aguara: 11, puma: 3, zorrillo: 8 }
];

// ---------- Siluetas para las fotos y las fichas (dibujo 2D) ----------
export function drawAnimal(g, k, x, y, s, col) {
  const E = (cx, cy, rx, ry, r = 0) => { g.beginPath(); g.ellipse(x + cx * s, y + cy * s, rx * s, ry * s, r, 0, 7); g.fill(); };
  const Ln = (pts, w) => { g.lineWidth = w * s; g.lineCap = 'round'; g.lineJoin = 'round'; g.beginPath(); pts.forEach(([a, b], i) => i ? g.lineTo(x + a * s, y + b * s) : g.moveTo(x + a * s, y + b * s)); g.stroke(); };
  g.fillStyle = g.strokeStyle = col.main;
  const quad = (bx, by, brx, bry, legH, hx, hy, hr, neck) => { E(bx, by, brx, bry); for (const lx of [-brx * 0.7, -brx * 0.45, brx * 0.45, brx * 0.7]) Ln([[bx + lx, by], [bx + lx * 1.05, by + bry + legH]], 0.07); if (neck) Ln(neck, 0.13); E(hx, hy, hr * 1.3, hr); };
  switch (k) {
    case 'venado': quad(0, -0.62, 0.42, 0.17, 0.5, 0.52, -0.98, 0.09, [[0.32, -0.7], [0.5, -0.95]]); Ln([[0.5, -1.05], [0.46, -1.32], [0.38, -1.42]], 0.03); Ln([[0.46, -1.2], [0.58, -1.32]], 0.03); E(0.6, -0.97, 0.07, 0.03); g.fillStyle = col.light; E(-0.43, -0.66, 0.05, 0.07); break;
    case 'guazubira': quad(0, -0.45, 0.34, 0.15, 0.36, 0.42, -0.62, 0.08, [[0.26, -0.5], [0.4, -0.62]]); Ln([[0.42, -0.68], [0.42, -0.8]], 0.03); break;
    case 'nandu': E(0, -0.92, 0.36, 0.24); Ln([[0.22, -1.0], [0.34, -1.4], [0.36, -1.62]], 0.07); E(0.4, -1.64, 0.08, 0.05); Ln([[0.47, -1.64], [0.56, -1.62]], 0.03); Ln([[-0.06, -0.72], [-0.1, -0.35], [-0.04, 0]], 0.05); Ln([[0.08, -0.72], [0.12, -0.35], [0.2, 0]], 0.05); break;
    case 'aguara': quad(0, -0.72, 0.36, 0.15, 0.62, 0.5, -0.92, 0.09, [[0.3, -0.78], [0.46, -0.92]]); g.beginPath(); g.moveTo(x + 0.44 * s, y - 0.98 * s); g.lineTo(x + 0.42 * s, y - 1.16 * s); g.lineTo(x + 0.5 * s, y - 1.0 * s); g.fill(); g.beginPath(); g.moveTo(x + 0.52 * s, y - 0.98 * s); g.lineTo(x + 0.56 * s, y - 1.16 * s); g.lineTo(x + 0.6 * s, y - 0.98 * s); g.fill(); E(0.64, -0.9, 0.08, 0.04); Ln([[-0.34, -0.74], [-0.52, -0.6], [-0.6, -0.42]], 0.09); g.fillStyle = col.light; E(-0.6, -0.42, 0.05, 0.05); break;
    case 'puma': quad(0, -0.4, 0.46, 0.15, 0.3, 0.52, -0.5, 0.11, [[0.38, -0.45], [0.5, -0.5]]); Ln([[-0.44, -0.42], [-0.7, -0.3], [-0.86, -0.24], [-0.92, -0.32]], 0.07); E(0.46, -0.6, 0.03, 0.04); E(0.56, -0.61, 0.03, 0.04); break;
    case 'zorro': quad(0, -0.32, 0.3, 0.12, 0.22, 0.38, -0.42, 0.08, [[0.24, -0.36], [0.36, -0.42]]); E(0.48, -0.4, 0.07, 0.035); g.beginPath(); g.moveTo(x + 0.33 * s, y - 0.47 * s); g.lineTo(x + 0.34 * s, y - 0.58 * s); g.lineTo(x + 0.4 * s, y - 0.48 * s); g.fill(); E(-0.4, -0.3, 0.17, 0.06, 0.4); break;
    case 'zorrillo': E(0, -0.18, 0.24, 0.13); E(0.26, -0.15, 0.08, 0.06); for (const lx of [-0.16, 0.14]) Ln([[lx, -0.1], [lx, 0]], 0.06); E(-0.26, -0.38, 0.1, 0.2, -0.4); g.fillStyle = col.light; E(0, -0.28, 0.18, 0.03); E(-0.24, -0.42, 0.04, 0.13, -0.4); break;
    case 'mulita': E(0, -0.14, 0.24, 0.14); g.fillStyle = col.light; for (let i = -2; i <= 2; i++) g.fillRect(x + (i * 0.07 - 0.01) * s, y - 0.27 * s, 0.02 * s, 0.24 * s); g.fillStyle = col.main; E(0.28, -0.08, 0.09, 0.05, 0.3); Ln([[-0.24, -0.1], [-0.4, -0.04]], 0.04); g.beginPath(); g.moveTo(x + 0.28 * s, y - 0.12 * s); g.lineTo(x + 0.3 * s, y - 0.22 * s); g.lineTo(x + 0.33 * s, y - 0.12 * s); g.fill(); break;
    case 'carpincho': E(0, -0.32, 0.4, 0.22); E(0.42, -0.36, 0.16, 0.12); for (const lx of [-0.26, -0.1, 0.16, 0.28]) Ln([[lx, -0.18], [lx, 0]], 0.08); E(0.38, -0.5, 0.03, 0.04); break;
    case 'manopelada': quad(0, -0.26, 0.26, 0.12, 0.16, 0.32, -0.32, 0.08, null); E(0.43, -0.3, 0.05, 0.03); Ln([[-0.24, -0.28], [-0.46, -0.22]], 0.06); g.fillStyle = col.light; E(0.34, -0.33, 0.06, 0.02); break;
    case 'lobito': E(0, -0.14, 0.36, 0.1); E(0.36, -0.18, 0.09, 0.07); Ln([[-0.34, -0.12], [-0.62, -0.06]], 0.07); for (const lx of [-0.2, 0.2]) Ln([[lx, -0.08], [lx + 0.05, 0]], 0.05); break;
    case 'lechucita': E(0, -0.26, 0.11, 0.17); E(0, -0.46, 0.1, 0.09); Ln([[-0.03, -0.1], [-0.04, 0]], 0.02); Ln([[0.03, -0.1], [0.04, 0]], 0.02); g.fillStyle = col.light; E(-0.04, -0.47, 0.03, 0.03); E(0.04, -0.47, 0.03, 0.03); break;
    case 'hornero': E(0, -0.2, 0.12, 0.07, -0.2); E(0.12, -0.27, 0.05, 0.05); Ln([[0.16, -0.27], [0.22, -0.26]], 0.02); Ln([[-0.1, -0.18], [-0.2, -0.16]], 0.04); Ln([[0, -0.14], [0, 0]], 0.015); break;
    case 'chaja': E(0, -0.42, 0.26, 0.17); Ln([[0.16, -0.5], [0.26, -0.72]], 0.08); E(0.28, -0.76, 0.07, 0.06); Ln([[0.33, -0.76], [0.38, -0.74]], 0.03); Ln([[0.02, -0.28], [0, 0]], 0.04); Ln([[0.1, -0.28], [0.12, 0]], 0.04); g.fillStyle = col.light; Ln([[0.19, -0.6], [0.23, -0.62]], 0.06); break;
    case 'carancho': E(0, -0.34, 0.12, 0.2); E(0.04, -0.58, 0.08, 0.07); Ln([[0.1, -0.58], [0.16, -0.55]], 0.03); Ln([[0, -0.16], [-0.02, 0]], 0.025); g.fillStyle = col.light; E(0.03, -0.46, 0.08, 0.06); break;
    case 'garza': E(0, -0.62, 0.17, 0.1); Ln([[0.12, -0.66], [0.2, -0.86], [0.16, -1.0], [0.22, -1.08]], 0.045); E(0.25, -1.08, 0.05, 0.035); Ln([[0.29, -1.08], [0.44, -1.06]], 0.025); Ln([[0, -0.54], [0, 0]], 0.025); Ln([[0.05, -0.54], [0.06, 0]], 0.025); break;
  }
}

// ---------- Tren de la estación: dos coches con cabina (va y vuelve sin dar la vuelta) y uno en el medio ----------
function trainCar(cab) {
  const parts = [], P = (col, x, y, z, sx, sy, sz) => { const g = new THREE.BoxGeometry(sx, sy, sz).toNonIndexed(); g.translate(x, y, z); const n = g.attributes.position.count, a = new Float32Array(n * 3), c = new THREE.Color(col); for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); g.deleteAttribute('uv'); parts.push(g); };
  P(0xf4f1ea, 0, 1.9, 0, 11.6, 2.6, 2.9); P(0x75aadb, 0, 1.25, 0, 11.64, 0.5, 2.94); P(0x1d4f8a, 0, 3.24, 0, 11.4, 0.12, 2.7);
  P(0x2a3a4a, 0, 2.35, 0, 10.8, 0.75, 2.96); P(0x3a3f46, 0, 0.55, 0, 10.6, 0.5, 2.4);
  for (const x of [-3.8, 3.8]) for (const s of [-0.8, 0.8]) P(0x2b2d33, x + s, 0.45, 0, 0.7, 0.7, 2.5);
  if (cab) { P(0xffd23f, 5.85, 1.9, 0, 0.12, 2.5, 2.8); P(0x1c2a38, 5.9, 2.5, 0, 0.1, 0.8, 2.2); P(0xfff3c4, 5.92, 1.3, 0.9, 0.06, 0.25, 0.4); P(0xfff3c4, 5.92, 1.3, -0.9, 0.06, 0.25, 0.4); }
  return mergeGeometries(parts, false);
}

const SEASONS = ['auto', 'verano', 'otono', 'invierno', 'primavera'], SLABEL = { auto: 'automática', verano: 'verano', otono: 'otoño', invierno: 'invierno', primavera: 'primavera' }, SMONTH = { verano: 0, otono: 4, invierno: 6, primavera: 10 };
// Tropa: un gaucho arrea vacas por el camino de tierra, de la estancia hasta cerca de la ruta y de vuelta
const TROPA = [[151, 190], [150, 220], [146, 250], [128, 256], [90, 256.5], [52, 257]];
function horseGeo() {
  const parts = [], P = (col, x, y, z, sx, sy, sz, rx = 0) => { const g = new THREE.BoxGeometry(sx, sy, sz).toNonIndexed(); g.rotateX(rx); g.translate(x, y, z); const n = g.attributes.position.count, a = new Float32Array(n * 3), c = new THREE.Color(col); for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); g.deleteAttribute('uv'); parts.push(g); };
  for (const sx of [-0.2, 0.2]) for (const sz of [-0.6, 0.6]) P(0x4a2e1c, sx, 0.45, sz, 0.13, 0.9, 0.13);
  P(0x7a4a2a, 0, 1.15, 0, 0.5, 0.55, 1.5); P(0x7a4a2a, 0, 1.55, 0.78, 0.26, 0.7, 0.3, -0.5); P(0x7a4a2a, 0, 1.82, 1.02, 0.24, 0.26, 0.5); P(0x1c1410, 0, 1.6, 0.7, 0.06, 0.6, 0.14, -0.5); P(0x1c1410, 0, 1.1, -0.85, 0.1, 0.6, 0.12, 0.4);
  P(0x3a2a1a, 0, 1.45, -0.05, 0.56, 0.1, 0.6); P(0x9b2226, 0, 1.5, -0.05, 0.6, 0.06, 0.5);
  return mergeGeometries(parts, false);
}
function tractorGeo() {
  const parts = [], P = (geo, col, x, y, z, rz = 0) => { const g = geo.toNonIndexed(); if (rz) g.rotateZ(rz); g.translate(x, y, z); const n = g.attributes.position.count, a = new Float32Array(n * 3), c = new THREE.Color(col); for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); if (g.attributes.uv) g.deleteAttribute('uv'); parts.push(g); };
  P(new THREE.BoxGeometry(1.2, 0.9, 2.2), 0xc0392b, 0, 1.05, 0.3); P(new THREE.BoxGeometry(1.3, 1.3, 1.1), 0xc0392b, 0, 1.6, -0.6); P(new THREE.BoxGeometry(1.2, 0.7, 1.0), 0x2a3a4a, 0, 2.0, -0.6);
  P(new THREE.CylinderGeometry(0.08, 0.08, 1.0, 6), 0x2b2d33, 0.35, 1.9, 0.9);
  for (const s of [-0.75, 0.75]) { P(new THREE.CylinderGeometry(0.75, 0.75, 0.42, 12), 0x1f1f22, s, 0.75, -0.7, Math.PI / 2); P(new THREE.CylinderGeometry(0.42, 0.42, 0.3, 10), 0x1f1f22, s * 0.85, 0.42, 1.1, Math.PI / 2); }
  P(new THREE.BoxGeometry(1.8, 0.25, 0.6), 0x6a6e75, 0, 0.35, -1.9);
  return mergeGeometries(parts, false);
}

export class Campo {
  constructor(game) {
    const g = this.g = game, w = g.world, sc = g.scene, R = this.R = rng(2718);
    this.t = 0; this.load();
    NAMES.biologa = 'Ana, bióloga de campo'; NAMES.estanciero = 'Don Ramón, el estanciero';
    const VC = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.9 });
    this.mat = VC;
    // --- tren ---
    const cabG = trainCar(true), midG = trainCar(false);
    this.train = new THREE.Group(); const cars = [new THREE.Mesh(cabG, VC), new THREE.Mesh(midG, VC), new THREE.Mesh(cabG, VC)];
    cars[0].position.x = 12.2; cars[2].position.x = -12.2; cars[2].rotation.y = Math.PI; cars.forEach(c => { c.castShadow = true; this.train.add(c); });
    sc.add(this.train); this.tr = { x: ESTACION[0], v: 0, state: 'parado', t: 18, dir: 1 }; this.placeTrain();
    // --- fauna ---
    this.sp = {}; this.ani = [];
    const kinds = ['venado', 'nandu', 'aguara', 'zorro', 'mulita', 'hornero', 'lechucita', 'chaja', 'carancho', 'garza', 'vaca'];
    const add = (k, x, z, o = {}) => this.ani.push(Object.assign({ k, x, z, hx: x, hz: z, h: R() * 6.28, r: 10, st: 'idle', t: R() * 4, v: 0, tx: x, tz: z, y: 0, bob: 0, tilt: 0 }, o));
    for (const [cx, cz, n] of [[204, 176, 4], [250, 112, 3]]) for (let i = 0; i < n; i++) add('venado', cx + (R() - 0.5) * 12, cz + (R() - 0.5) * 12, { r: 16, flee: 11, see: 16 });
    for (let i = 0; i < 5; i++) add('nandu', 262 + (R() - 0.5) * 14, 200 + (R() - 0.5) * 14, { r: 18, flee: 9, see: 15 });
    for (let i = 0; i < 3; i++) add('mulita', [158, 226, 196][i], [150, 210, 46][i], { r: 6, flee: 4.5, see: 8, slow: true });
    for (let i = 0; i < 2; i++) add('zorro', [222, 176][i], [64, 222][i], { r: 22, flee: 7, see: 12, night: true });
    add('aguara', 270, 180, { r: 0, see: 22, rare: true, hidden: true });
    // horneros en sus nidos (los nidos van en el lote fijo), lechucitas en la cueva y caranchos en los postes
    NESTS.forEach(([x, z]) => add('hornero', x, z + 0.6, { r: 1.6, see: 7, bird: true }));
    for (const [x, z] of CUEVAS) add('lechucita', x, z, { r: 0, see: 8, look: true });
    for (const [x, z] of [[178, 150], [134, 214]]) add('carancho', x, z, { r: 0, see: 9, look: true, y0: 1.25 });
    for (const [x, z] of [[TAJAMAR[0] + 9, TAJAMAR[1] + 3], [TAJAMAR[0] + 10, TAJAMAR[1] + 5.5], [40, 302], [44, 300]]) add('chaja', x, z, { r: 3, flee: 6, see: 12, alarm: true });
    for (const [x, z] of [[TAJAMAR[0] - 6, TAJAMAR[1] - 4], [120, 300], [-20, 318]]) add('garza', x, z, { r: 2, flee: 5, see: 10 });
    for (let i = 0; i < 12; i++) add('vaca', 156 + (R() - 0.5) * 36, 214 + (R() - 0.5) * 30 - (i % 2) * 30, { r: 14, flee: 0, see: 0, slow: true });
    for (const k of kinds) {
      const list = this.ani.filter(a => a.k === k), P = animalParts(k), mk = (geo, n) => { const m = new THREE.InstancedMesh(geo, VC, n); m.castShadow = true; m.frustumCulled = false; m.instanceMatrix.setUsage(THREE.DynamicDrawUsage); sc.add(m); return m; };
      this.sp[k] = { m: mk(P.body, list.length), hm: mk(P.head, list.length), lm: mk(P.leg, list.length * P.hips.length), P, list };
      list.forEach((a, i) => { a.i = i; a.y = terrainH(a.x, a.z); a.ph = R() * 6; a.amp = 0; a.hp = 0; a.hy = 0; a.peck = R() * 6; });
    }
    // --- flores del pastizal: margaritas, macachines, cardos y senecios (una sola malla con instancias) ---
    const fg = new THREE.OctahedronGeometry(0.16, 0); fg.scale(1, 0.55, 1);
    const COL = [0xf6f3e6, 0xf6f3e6, 0xd58fd8, 0x9a62c8, 0xf2d14b], fl = [];
    for (let i = 0; i < 1600 && fl.length < 1300; i++) {
      const cx = lerp(134, 286, R()), cz = lerp(-120, 290, R()), c = COL[Math.floor(R() * COL.length)];
      for (let k = 0, n = 3 + Math.floor(R() * 6); k < n; k++) {
        const x = cx + (R() - 0.5) * 5, z = cz + (R() - 0.5) * 5, h = terrainH(x, z);
        if (h < 1 || distPoly(x, z, ARROYO) < 6 || Math.abs(z - RAIL.z) < 4 || MESAS.some(([mx, mz, r]) => { const d = Math.hypot(x - mx, z - mz); return d > r - 2 && d < r + 8; })) continue;
        fl.push([x, h + 0.12, z, c]);
      }
    }
    const fm = new THREE.InstancedMesh(fg, new THREE.MeshStandardMaterial({ flatShading: true, roughness: 1 }), fl.length), M4 = new THREE.Matrix4(), cc = new THREE.Color();
    fl.forEach(([x, y, z, c], i) => { M4.makeTranslation(x, y, z); fm.setMatrixAt(i, M4); fm.setColorAt(i, cc.set(c)); }); sc.add(fm); this.flowers = fm;
    // --- cámaras trampa (se ven atadas a un tronco o a un poste cuando están colocadas) ---
    this.cams = CAMS.map(([x, z], i) => { const m = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.42, 0.22), new THREE.MeshStandardMaterial({ color: 0x4a5a3a, roughness: 0.8 })); const y = terrainH(x, z); m.position.set(x, y + 1.0, z); m.visible = false; sc.add(m);
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.2, 0.14), new THREE.MeshStandardMaterial({ color: 0x6a4a2c })); post.position.set(x, y + 0.6, z - 0.18); post.visible = false; sc.add(post); return { m, post, set: false }; });
    // --- personas: la bióloga y el estanciero ---
    const person = (o, x, z, ry) => { const p = makePerson(o); p.group.position.set(x, w.groundAt(x, z), z); p.group.rotation.y = ry; sc.add(p.group); return p; };
    this.ana = person({ skin: 0xe0ac86, shirt: 0x6b8f4e, jacket: 0x4a5a3a, pants: 0x8a7a5a, hair: 0x3b2314, hat: 'gorra', hatColor: 0x2f5a3a, pony: true }, BIOLOGA[0], BIOLOGA[1], -0.6);
    this.ramon = person({ skin: 0xc58b62, shirt: 0xf2efe8, pants: 0x3a3a44, hair: 0x9a9a9a, hat: 'boina', hatColor: 0x1c1c1e, bigote: true }, ESTANCIA[0] - 6, ESTANCIA[1] + 6, 0.4);
    w.addInter('npc:biologa', BIOLOGA[0], BIOLOGA[1], { console: false, h: 3.6 });
    w.addInter('npc:estanciero', ESTANCIA[0] - 6, ESTANCIA[1] + 6, { console: false, h: 3.6 });
    CAMS.forEach(([x, z], i) => w.addInter('ct:' + i, x, z, { console: false, h: 2.8, r: 3 }));
    // --- interfaz del álbum de fauna ---
    $('bFauna').onclick = () => this.openAlbum(); $('faClose').onclick = () => g.extras.close(); $('fpClose').onclick = () => this.closePhotos();
    // --- tropa de ganado con su gaucho a caballo ---
    this.horse = new THREE.Mesh(horseGeo(), VC); this.horse.castShadow = true; sc.add(this.horse);
    this.gaucho = makePerson({ skin: 0xc58b62, shirt: 0xf2efe8, jacket: 0x9b2226, pants: 0x2b2d42, hair: 0x2a1c12, hat: 'boina', hatColor: 0x1c1c1e, bigote: true });
    this.gaucho.group.position.set(0, 1.0, 0); for (const l of [this.gaucho.legL, this.gaucho.legR]) if (l) { l.rotation.x = -1.3; l.rotation.z = l === this.gaucho.legL ? 0.35 : -0.35; }
    this.horse.add(this.gaucho.group);
    this.tropa = { s: 0, dir: 1, wait: 8, len: 0 }; for (let i = 1; i < TROPA.length; i++) this.tropa.len += Math.hypot(TROPA[i][0] - TROPA[i - 1][0], TROPA[i][1] - TROPA[i - 1][1]);
    const vacas = this.sp.vaca.list; this.arreo = vacas.slice(0, 6).map((a, i) => { a.tropa = true; a.r = 0; a.off = [(i % 3 - 1) * 1.8, 3 + Math.floor(i / 3) * 2.6]; return a; });
    // --- tractor arando la chacra entre la vía y el Daymán ---
    this.tractor = new THREE.Mesh(tractorGeo(), VC); this.tractor.castShadow = true; sc.add(this.tractor); this.tra = { x: 40, row: 0, dir: 1 };
    this.season = 'auto'; try { this.season = localStorage.getItem('capi-estacion') || 'auto'; } catch (e) { /* sin almacenamiento */ }
    this.refresh();
  }
  seasonLabel() { const s = this.season === 'auto' ? this.autoSeason() : this.season; return this.season === 'auto' ? `automática (${SLABEL[s]})` : SLABEL[s]; }
  autoSeason() { const m = new Date().getMonth(); return m === 11 || m < 2 ? 'verano' : m < 5 ? 'otono' : m < 8 ? 'invierno' : 'primavera'; }
  cycleSeason() { this.season = SEASONS[(SEASONS.indexOf(this.season) + 1) % SEASONS.length]; try { localStorage.setItem('capi-estacion', this.season); } catch (e) { /* sin almacenamiento */ } this.g.ui.note('Estación del año: ' + this.seasonLabel(), 3); }
  updateSeason(st) {
    const s = this.season === 'auto' ? this.autoSeason() : this.season, m = this.season === 'auto' ? new Date().getMonth() : SMONTH[s];
    this.g.world.setBloom(m >= 9 || m <= 1, m >= 9 && m <= 11);
    const h = st.hour, cloud = this.g.grid.cloud || 0, fr = s === 'invierno' ? smooth(5.2, 6.4, h) * (1 - smooth(8.4, 9.8, h)) * (1 - cloud) : 0;
    this.g.world.cloudU.uFrost.value = fr;
  }
  updateTropa(dt) {
    const T = this.tropa, P = TROPA;
    if (T.wait > 0) T.wait -= dt; else { T.s += T.dir * 1.3 * dt; if (T.s >= T.len || T.s <= 0) { T.s = clamp(T.s, 0, T.len); T.dir *= -1; T.wait = 20; } }
    const at = s => { let d = s; for (let i = 1; i < P.length; i++) { const L = Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]); if (d <= L || i === P.length - 1) { const k = clamp(d / L, 0, 1); return [lerp(P[i - 1][0], P[i][0], k), lerp(P[i - 1][1], P[i][1], k), Math.atan2(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1])]; } d -= L; } return P[0].concat(0); };
    const [x, z, hd] = at(T.s), head = T.dir > 0 ? hd : hd + Math.PI, moving = T.wait <= 0;
    this.horse.position.set(x, terrainH(x, z) + (moving ? Math.abs(Math.sin(this.t * 6)) * 0.08 : 0), z); this.horse.rotation.y = head;
    const back = at(clamp(T.s - T.dir * 6, 0, T.len));   // las vacas van adelante del gaucho, en el sentido de la marcha
    const fx = T.dir > 0 ? at(clamp(T.s + 7, 0, T.len)) : at(clamp(T.s - 7, 0, T.len));
    for (const a of this.arreo) { const sn = Math.sin(head), cs = Math.cos(head), tx = fx[0] + a.off[0] * cs + a.off[1] * sn * 0.4, tz = fx[1] - a.off[0] * sn + a.off[1] * cs * 0.4; a.tx = tx; a.tz = tz; a.st = moving ? 'walk' : 'idle'; }
  }
  updateTractor(dt) {
    const T = this.tra, z = 268 + T.row * 3.2, x0 = 30, x1 = 118;
    T.x += T.dir * 3.2 * dt; if (T.x > x1 || T.x < x0) { T.x = clamp(T.x, x0, x1); T.dir *= -1; T.row = (T.row + 1) % 6; }
    const y = terrainH(T.x, z); this.tractor.position.set(T.x, y, z + (T.dir > 0 ? 0 : 0)); this.tractor.rotation.y = T.dir > 0 ? Math.PI / 2 : -Math.PI / 2;
    if (Math.random() < dt * 5) this.g.fx.puff(T.x - T.dir * 2.2, y + 0.4, z, 1, 0xc9b28a, 0.8);
  }

  // ---------- Guardado (en el kiosco, cada partida nueva empieza con el álbum vacío) ----------
  load() { try { const s = JSON.parse(localStorage.getItem(FKEY) || 'null'); this.seen = (s && s.seen) || {}; this.foto = (s && s.foto) || {}; this.ct = (s && s.ct) || 0; } catch (e) { this.seen = {}; this.foto = {}; this.ct = 0; } }
  save() { if (this.g.kioskCfg) return; try { localStorage.setItem(FKEY, JSON.stringify({ seen: this.seen, foto: this.foto, ct: this.ct })); } catch (e) { /* sin almacenamiento */ } }
  reset() { this.seen = {}; this.foto = {}; this.ct = 0; this.camState = null; this.cams.forEach(c => { c.set = false; c.m.visible = c.post.visible = false; }); this.refresh(); }
  count() { return FAUNA.filter(f => this.seen[f.k] || this.foto[f.k]).length; }
  refresh() { const b = $('bFauna'); if (b) b.innerHTML = `Fauna <small>${this.count()}/${FAUNA.length}</small>`; }
  register(k, how) {
    if (!FBY[k]) return; const first = !this.seen[k] && !this.foto[k];
    if (how === 'foto') this.foto[k] = (this.foto[k] || 0) + 1; else this.seen[k] = 1;
    this.save(); this.refresh();
    if (first && how !== 'foto') { this.g.ui.toast(FBY[k].rare ? '¡ENCUENTRO RARÍSIMO!' : '¡NUEVO EN EL ÁLBUM!', FBY[k].name, 3); this.g.audio.ok(); this.g.extras.fact(FBY[k].name, FBY[k].fact, 9); }
  }

  // ---------- Interacción ----------
  describe(id) {
    if (id === 'npc:biologa') return { state: 'ok', label: 'Hablar con Ana, la bióloga' };
    if (id === 'npc:estanciero') return { state: 'ok', label: 'Hablar con Don Ramón' };
    if (id.startsWith('ct:')) { const i = +id.slice(3), c = this.cams[i]; if (this.camState === 'colocar' && !c.set) return { state: 'need', label: 'Colocar la cámara trampa · ' + CAMS[i][2] }; return c.set ? { state: 'ok', label: 'Cámara trampa colocada' } : { state: 'hidden' }; }
    return null;
  }
  interact(id) {
    const g = this.g;
    if (id === 'npc:biologa') { this.talkAna(); return true; }
    if (id === 'npc:estanciero') { this.talkRamon(); return true; }
    if (id.startsWith('ct:')) {
      const i = +id.slice(3), c = this.cams[i]; if (this.camState !== 'colocar' || c.set) return true;
      c.set = true; c.m.visible = c.post.visible = true; g.capi.work(1.2); g.audio.ok();
      const left = this.cams.filter(x => !x.set).length; g.ui.note(left ? `Cámara colocada. Faltan ${left}.` : 'Las tres cámaras están listas. Volvé con Ana.', 4);
      if (!left) this.camState = 'listas';
      return true;
    }
    return false;
  }
  talkAna() {
    const g = this.g, opts = [['¿Qué hacés acá?', ''], ['¿Qué animales hay en la pradera?', '']], st = this.camState;
    const ci = opts.length; opts.push(st === 'listas' ? ['Ya coloqué las tres cámaras', 'A esperar la noche'] : st === 'colocar' ? ['¿Dónde iban las cámaras?', 'Las marcas amarillas'] : this.ct ? ['Revisar las cámaras otra vez', 'Otra noche, otras fotos'] : ['¿Te ayudo con las cámaras trampa?', 'Monitoreo de fauna']);
    const ai = opts.length; opts.push(['Ver el álbum de fauna', `${this.count()} de ${FAUNA.length} especies`]); opts.push(['Nada más, ¡gracias!', '']);
    g.extras.choose(NAMES.biologa, st === 'listas' ? '¡Bien ahí, Capi! Las cámaras ya están en su lugar.' : '¡Hola, Capi! Estoy estudiando la fauna de la pradera y del monte.', opts, i => {
      if (i === 0) g.ui.dialog([L('biologa', 'Hago monitoreo de fauna: contamos qué animales viven acá y cómo les va. Muchos andan de noche y se esconden de la gente.'), L('biologa', 'Por eso usamos cámaras trampa: se disparan solas cuando pasa un animal, con una luz infrarroja que ellos casi no ven.')]);
      else if (i === 1) g.ui.dialog([L('biologa', 'Venados de campo, ñandúes, mulitas, zorros, horneros, lechucitas… La pradera natural de Uruguay es un tesoro.'), L('biologa', 'Y a veces aparece alguien muy especial: el aguará guazú, el zorro de patas largas. Se lo creía extinguido en Uruguay y en 2021 lo filmaron acá, en Salto.'), L('biologa', 'Del puma hay muy pocos avistamientos en todo el país. Si sale en una foto, ¡es una noticia!')]);
      else if (i === ci) {
        if (st === 'listas') this.night();
        else if (st === 'colocar') g.ui.note('Buscá las tres marcas amarillas: en el monte de la quebrada, en la orilla del arroyo y en la pradera.', 5);
        else if (this.ct) this.night();
        else g.ui.dialog([L('biologa', '¡Me vendría bárbaro! Tengo tres cámaras: una para el monte de la quebrada, otra para la orilla del arroyo y otra para la pradera abierta.'), L('biologa', 'Colocalas en las marcas amarillas y volvé a avisarme. A la mañana revisamos juntos qué pasó por ahí.')], () => { this.camState = 'colocar'; this.cams.forEach(c => { c.set = false; c.m.visible = c.post.visible = false; }); g.ui.note('Colocá las 3 cámaras trampa en las marcas amarillas.', 5); });
      } else if (i === ai) this.openAlbum();
    });
  }
  talkRamon() {
    const g = this.g;
    g.extras.choose(NAMES.estanciero, '¡Buenas, Capi! Pase nomás. ¿Gusta un mate?', [['¿Qué se hace en la estancia?', ''], ['¿Para qué es el tajamar?', ''], ['¿Y el molino?', ''], ['Nada más, ¡gracias!', '']], i => {
      if (i === 0) g.ui.dialog([L('estanciero', 'Criamos ganado en campo natural. Estas vacas coloradas de cara blanca son Hereford, una raza muy común en Uruguay.'), L('estanciero', 'Cuidamos el pastizal: si no se sobrecarga el campo, conviven las vacas, los venados y los ñandúes.')]);
      else if (i === 1) g.ui.dialog([L('estanciero', 'Es un estanque que se hace con un terraplén de tierra para juntar el agua de lluvia. Así el ganado tiene para tomar en verano.')]);
      else if (i === 2) g.ui.dialog([L('estanciero', 'El molino saca agua del pozo con la fuerza del viento, sin enchufe. Hace más de cien años que en el campo se usa la energía del viento.')]);
    });
  }

  // ---------- Noche de cámaras trampa: pantalla negra y, a la mañana, las fotos ----------
  night() {
    const g = this.g; this.camState = null; this.ct++;
    g.extras.fading = true; $('fade').classList.add('on'); $('fadeTxt').textContent = 'Las cámaras trampa trabajan solas toda la noche…';
    setTimeout(() => { $('fade').classList.remove('on'); g.extras.fading = false; this.photos(); }, 2600);
  }
  photos() {
    const g = this.g, R = Math.random, shots = [];
    SPOT.forEach((tab, i) => {
      // en la primera noche, al menos una foto rara no está garantizada: es azar de verdad (pero el puma es muy difícil)
      const tot = Object.values(tab).reduce((a, b) => a + b, 0); let r = R() * tot, k = 'zorro'; for (const [kk, p] of Object.entries(tab)) { r -= p; if (r <= 0) { k = kk; break; } }
      const hh = 20 + Math.floor(R() * 10), hour = hh % 24, min = Math.floor(R() * 60);
      shots.push({ k, i, cam: CAMS[i][2], time: `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`, temp: 9 + Math.floor(R() * 12), night: hour < 6 || hour >= 20 });
    });
    const box = $('fpList'); box.textContent = '';
    for (const s of shots) {
      const f = FBY[s.k], card = document.createElement('div'); card.className = 'fpCard' + (f.rare ? ' rare' : '');
      const cv = document.createElement('canvas'); cv.width = 320; cv.height = 200; this.drawPhoto(cv, s); card.appendChild(cv);
      const t = document.createElement('div'); t.innerHTML = `<b>${f.name}</b><small>${s.cam}</small>`; card.appendChild(t); box.appendChild(card);
      this.register(s.k, 'foto');
    }
    const rare = shots.find(s => FBY[s.k].rare);
    $('fpMsg').textContent = rare ? (rare.k === 'puma' ? '¡Un puma! Es uno de los registros más raros del país. Ana no lo puede creer.' : '¡Un aguará guazú! Ana dice que cada registro ayuda a cuidarlo.') : 'Cada foto suma datos para cuidar la fauna. Podés volver a revisar las cámaras otra noche.';
    g.extras.open = 'fotos'; $('fotos').classList.remove('hidden'); g.audio.ok();
    if (rare) { g.audio.fanfare(); g.capi.celebrate(2); }
  }
  closePhotos() { $('fotos').classList.add('hidden'); if (this.g.extras.open === 'fotos') this.g.extras.open = null; this.g.ui.note('Las fotos quedaron en el álbum de fauna.', 3.5); }
  drawPhoto(cv, s) {
    const g = cv.getContext('2d'), W = cv.width, H = cv.height, night = s.night;
    const sky = g.createLinearGradient(0, 0, 0, H); if (night) { sky.addColorStop(0, '#1d2a22'); sky.addColorStop(1, '#4a5a4c'); } else { sky.addColorStop(0, '#8fb0a6'); sky.addColorStop(1, '#6f8a52'); }
    g.fillStyle = sky; g.fillRect(0, 0, W, H);
    g.fillStyle = night ? '#2f3d33' : '#4f6b3a'; for (let i = 0; i < 7; i++) { g.beginPath(); g.ellipse(Math.random() * W, 40 + Math.random() * 30, 30 + Math.random() * 40, 30 + Math.random() * 20, 0, 0, 7); g.fill(); }
    g.fillStyle = night ? '#6a786a' : '#8a9a5a'; g.fillRect(0, H * 0.72, W, H);
    const big = ['venado', 'nandu', 'aguara', 'garza', 'guazubira'].includes(s.k), sc = big ? 92 : ['puma', 'carpincho'].includes(s.k) ? 120 : 150;
    const col = night ? { main: '#d9e6d4', light: '#ffffff' } : { main: '#3a2c22', light: '#f2ece0' };
    g.save(); if (Math.random() < 0.5) { g.translate(W, 0); g.scale(-1, 1); } drawAnimal(g, s.k, W * (0.42 + Math.random() * 0.16), H * 0.86, sc, col); g.restore();
    if (night) { const v = g.createRadialGradient(W / 2, H / 2, 40, W / 2, H / 2, 200); v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,.55)'); g.fillStyle = v; g.fillRect(0, 0, W, H); }
    const img = g.getImageData(0, 0, W, H), d = img.data; for (let i = 0; i < d.length; i += 4) { const n = (Math.random() - 0.5) * (night ? 34 : 14); d[i] += n; d[i + 1] += n; d[i + 2] += n; } g.putImageData(img, 0, 0);
    g.fillStyle = 'rgba(0,0,0,.55)'; g.fillRect(0, H - 20, W, 20); g.fillStyle = '#ffffff'; g.font = '12px monospace'; g.textAlign = 'left';
    g.fillText(`CAM ${s.i + 1}  ${s.time}  ${s.temp}°C  ${night ? 'IR' : ''}`, 8, H - 6); g.textAlign = 'right'; g.fillText('ENERGIMUNDO', W - 8, H - 6);
  }

  // ---------- Álbum de fauna ----------
  openAlbum() {
    const g = this.g, box = $('faList'); box.textContent = '';
    for (const f of FAUNA) {
      const seen = this.seen[f.k], ft = this.foto[f.k], card = document.createElement('div'); card.className = 'faCard' + (seen || ft ? '' : ' unk') + (f.rare ? ' rare' : '');
      const cv = document.createElement('canvas'); cv.width = 120; cv.height = 90; const cg = cv.getContext('2d');
      cg.fillStyle = seen || ft ? '#e8efe0' : '#2a3a55'; cg.fillRect(0, 0, 120, 90);
      const sc2 = ['venado', 'nandu', 'aguara', 'garza', 'guazubira'].includes(f.k) ? 46 : ['puma', 'carpincho'].includes(f.k) ? 60 : 78;
      drawAnimal(cg, f.k, 56, 82, sc2, seen || ft ? { main: '#4a3a2a', light: '#ffffff' } : { main: '#11192b', light: '#11192b' });
      card.appendChild(cv);
      const t = document.createElement('div'); t.innerHTML = seen || ft ? `<b>${f.name}</b><small>${[seen ? 'Visto' : '', ft ? `${ft} foto${ft > 1 ? 's' : ''}` : ''].filter(Boolean).join(' · ')}</small><p>${f.fact}</p>` : `<b>?</b><small>${f.rare ? 'Muy raro: quizá en una cámara trampa' : 'Todavía no lo encontraste'}</small>`;
      card.appendChild(t); box.appendChild(card);
    }
    $('faCount').textContent = `${this.count()} de ${FAUNA.length}`;
    if (g.extras.open) $(g.extras.open).classList.add('hidden'); g.extras.open = 'fauna'; $('fauna').classList.remove('hidden');
  }

  // ---------- Tren ----------
  placeTrain() { const x = this.tr.x; this.train.position.set(x, railY(x) - 0.05, RAIL.z); this.train.visible = x < 300 && x > RAIL.x0 - 30; }
  depart(cb) { const T = this.tr; if (T.state === 'parado' || T.state === 'llega') { T.state = 'sale'; T.cb = cb; T.v = Math.max(T.v, 0); } }
  updateTrain(dt) {
    const T = this.tr, home = ESTACION[0];
    if (T.state === 'parado') { T.v = 0; T.t -= dt; if (T.t <= 0 && !this.hold) this.depart(); }
    else if (T.state === 'sale') { T.v = Math.min(14, T.v + 2.2 * dt); T.x += T.v * dt; if (T.x > 330) { T.state = 'fuera'; T.t = 28; const cb = T.cb; T.cb = null; if (cb) cb(); } }
    else if (T.state === 'fuera') { T.t -= dt; if (T.t <= 0 && !this.holdOut) { T.state = 'llega'; T.x = 330; T.v = 14; } }
    else if (T.state === 'llega') { const d = T.x - home; T.v = Math.max(1.2, Math.min(14, Math.sqrt(2 * 2.2 * Math.max(0, d)))); T.x -= T.v * dt; if (T.x <= home) { T.x = home; T.state = 'parado'; T.t = 25; this.g.audio.bell && this.g.audio.bell(0.5); } }
    this.placeTrain();
    const c = this.g.capi.pos; if (T.state !== 'parado' && T.state !== 'fuera' && Math.abs(c.z - RAIL.z) < 1.9 && Math.abs(c.x - T.x) < 18.5 && c.y < railY(c.x) + 3) { c.z = RAIL.z + (c.z < RAIL.z ? -2.1 : 2.1); }   // no se puede quedar parado en la vía
  }

  // ---------- Animación de la fauna ----------
  update(dt, st) {
    this.t += dt; this.updateTrain(dt); this.updateSeason(st);
    const g = this.g, c = g.capi.pos, R = this.R, night = st.night > 0.5, far = c.x < 110 && c.z < 200 && g.cam.target.x < 110 && g.cam.target.z < 200;
    for (const k in this.sp) { const S2 = this.sp[k]; S2.m.visible = S2.hm.visible = S2.lm.visible = !far; }
    if (Math.hypot(c.x + 34, c.z + 18.5) < 12) this.register('carpincho', 'visto');   // los carpinchos de la orilla de Salto también cuentan
    if (far) return;
    this.updateTropa(dt); this.updateTractor(dt);
    const M4 = new THREE.Matrix4(), M5 = new THREE.Matrix4(), M6 = new THREE.Matrix4(), Q = new THREE.Quaternion(), V = new THREE.Vector3(), S = new THREE.Vector3(1, 1, 1), E = new THREE.Euler();
    // aguará: de noche, cada tanto cruza la pradera a lo lejos (si Capi anda por el campo)
    const ag = this.sp.aguara.list[0];
    if (ag.hidden) {
      this.agT = (this.agT == null ? 50 : this.agT) - dt * (night && c.x > 130 ? 1 : 0);
      if (this.agT <= 0) { this.agT = 150 + R() * 120; const a = R() * 6.28, d = 26 + R() * 8; ag.x = clamp(c.x + Math.cos(a) * d, 136, 286); ag.z = clamp(c.z + Math.sin(a) * d, -130, 236); if (terrainH(ag.x, ag.z) > 1) { ag.hidden = false; ag.life = 26; ag.tx = clamp(ag.x - Math.cos(a) * 30 + Math.sin(a) * 30, 136, 286); ag.tz = clamp(ag.z - Math.sin(a) * 30 - Math.cos(a) * 30, -130, 236); } }
    } else { ag.life -= dt; if (ag.life <= 0) ag.hidden = true; }
    for (const k in this.sp) {
      const { m, hm, lm, P, list } = this.sp[k], NH = P.hips.length;
      for (const a of list) {
        const dx = c.x - a.x, dz = c.z - a.z, dc = Math.hypot(dx, dz);
        let hide = a.hidden || (a.night && !night);
        if (!hide) {
          if (a.see && dc < a.see) this.register(a.k, 'visto');
          if (a.flee && dc < a.flee && a.st !== 'flee') { a.st = 'flee'; a.t = 2.5 + R() * 1.5; const an = Math.atan2(-dx, -dz) + (R() - 0.5) * 0.8; a.tx = a.x + Math.sin(an) * 14; a.tz = a.z + Math.cos(an) * 14; if (a.alarm && !a.cried) { a.cried = 1; g.audio.alarm(); } }
          if (a.st === 'flee') { a.t -= dt; if (a.t <= 0) { a.st = 'idle'; a.t = 2 + R() * 4; a.hx = a.x; a.hz = a.z; a.cried = 0; } }
          else if (a.r && (a.t -= dt) <= 0) { if (a.st === 'idle') { a.st = 'walk'; a.t = 3 + R() * 5; const an = R() * 6.28, rr = R() * a.r; a.tx = a.hx + Math.cos(an) * rr; a.tz = a.hz + Math.sin(an) * rr; } else { a.st = 'idle'; a.t = 2 + R() * 5; } }
          if (a.k === 'aguara' && a.tx != null) a.st = 'trot';
          const sp = a.st === 'flee' ? (a.k === 'nandu' ? 9 : a.k === 'venado' ? 8 : 4) : a.st === 'trot' ? 2.6 : a.st === 'walk' ? (a.tropa ? 1.6 : a.slow ? 0.5 : a.bird ? 0.8 : 1.1) : 0;
          if (sp > 0) {
            const tx = a.tx - a.x, tz = a.tz - a.z, d = Math.hypot(tx, tz);
            if (d > 0.4) { const nx = a.x + tx / d * sp * dt, nz = a.z + tz / d * sp * dt, ny = terrainH(nx, nz); if (ny > 0.6 && !(Math.abs(nz - RAIL.z) < 2 && this.tr.state !== 'fuera' && Math.abs(nx - this.tr.x) < 20)) { a.x = nx; a.z = nz; } else a.st = 'idle'; a.h += angDiff(a.h, Math.atan2(tx, tz)) * Math.min(1, 6 * dt); }
            else if (a.st !== 'flee') a.st = 'idle';
          }
          if (a.look && dc < 14) a.h += angDiff(a.h, Math.atan2(dx, dz)) * Math.min(1, 3 * dt);
          a.y = terrainH(a.x, a.z) + (a.y0 || 0);
          a.bob = sp > 0 ? Math.abs(Math.sin(this.t * (sp > 3 ? 11 : 7) + a.i)) * (sp > 3 ? 0.12 : 0.04) * (a.bird ? 2 : 1) : 0;
          a.tilt = damp(a.tilt, sp > 3 ? -0.06 : 0, 3, dt);
          // patas: paso cruzado (o alternado en las aves), más largo al correr; cabeza: come cuando está tranquilo y mira a Capi si se acerca
          a.amp = damp(a.amp, sp > 3 ? 0.7 : sp > 0 ? 0.38 : 0, 6, dt); a.ph += dt * (sp > 3 ? 11 : 3 + sp * 3);
          const alert = a.st === 'flee' || dc < (a.flee ? a.flee * 1.8 : 9), graze = !alert && a.st === 'idle' && !a.look;
          let hp = graze ? P.graze * (0.75 + 0.25 * Math.sin(this.t * 0.6 + a.i)) : alert ? -0.12 : 0, hy = 0;
          if (graze && (a.k === 'nandu' || a.k === 'hornero' || a.k === 'chaja' || a.k === 'garza')) { a.peck += dt * 2.2; hp = P.graze * Math.max(0, Math.sin(a.peck)) ** 3; }
          if (alert && a.st !== 'flee') hy = clamp(angDiff(a.h, Math.atan2(dx, dz)), -0.9, 0.9);
          a.hp = damp(a.hp, hp, 5, dt); a.hy = damp(a.hy, hy, 5, dt);
        }
        const sc0 = hide ? 0.0001 : 1;
        V.set(a.x, a.y + a.bob, a.z); E.set(a.tilt, a.h, 0); Q.setFromEuler(E); S.setScalar(sc0); M4.compose(V, Q, S); m.setMatrixAt(a.i, M4);
        V.set(...P.pivot); E.set(a.hp, a.hy, 0); Q.setFromEuler(E); S.setScalar(1); M5.compose(V, Q, S); M6.multiplyMatrices(M4, M5); hm.setMatrixAt(a.i, M6);
        for (let j = 0; j < NH; j++) { V.set(...P.hips[j]); E.set(Math.sin(a.ph + P.gait[j]) * a.amp, 0, 0); Q.setFromEuler(E); M5.compose(V, Q, S); M6.multiplyMatrices(M4, M5); lm.setMatrixAt(a.i * NH + j, M6); }
      }
      m.instanceMatrix.needsUpdate = true; hm.instanceMatrix.needsUpdate = true; lm.instanceMatrix.needsUpdate = true;
    }
  }
}
