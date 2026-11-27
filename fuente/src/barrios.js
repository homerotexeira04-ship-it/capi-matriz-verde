// Ciudad ampliada: Barrio Norte y costanera, Teatro Larrañaga, puerto con faro y lancha sobre el río Uruguay,
// Concordia en la otra orilla y el Barrio Jardín de casas solares. Todo se arma con lotes fusionados para no cargar la PC.
import * as THREE from 'three';
import { POS, CITY_Y, B, terrainH, farD, westBank } from './terrain.js';
import { C, Batch, textTex, canvasTex } from './world.js';
import { sign, flag, building, PAL } from './sectors.js';
import { rng, clamp, lerp } from './util.js';
import { buildIntlConcordia, intlKeep, ROT } from './intl.js';

const Y = 2.2;
// Rectángulos donde la flora al azar no debe plantar (edificios nuevos)
export const CLEAR3 = [[-84, -8, -9, 12], [-17, 5, -22, -7], [4, 46, -34, 10], [-38, -16, 98, 134]];

// Prismas y cúpulas ya orientados (se escalan en x, y, z del mundo)
const TRI_Z = new THREE.CylinderGeometry(1, 1, 1, 3).rotateX(-Math.PI / 2);   // techo a dos aguas, cumbrera a lo largo de z
const TRI_X = TRI_Z.clone().rotateY(Math.PI / 2);                              // cumbrera a lo largo de x
const DOME = new THREE.SphereGeometry(1, 14, 7, 0, Math.PI * 2, 0, Math.PI / 2);
function gable(b, x, y0, z, w, h, d, color, alongX = false) {
  const sy = h / 1.5;
  if (alongX) b.add(TRI_X, color, x, y0 + 0.5 * sy, z, d, sy, w / 1.732);
  else b.add(TRI_Z, color, x, y0 + 0.5 * sy, z, w / 1.732, sy, d);
}
const plant = (w, type, x, z, s = 1, y = null) => { w.trees.push({ type, x, z, s, y: y == null ? w.groundAt(x, z) : y }); w.addCircle(x, z, type === 'ombu' ? 1.1 : type === 'bush' ? 0 : 0.4); };
const wall = (w, x0, x1, z0, z1) => { const b = w.batch; b.boxB((x0 + x1) / 2, Y, (z0 + z1) / 2, x1 - x0, 0.7, z1 - z0, C.cream); b.boxB((x0 + x1) / 2, Y + 0.7, (z0 + z1) / 2, x1 - x0 + 0.16, 0.12, z1 - z0 + 0.16, 0xfaf4e6); w.addSolid(x0, x1, z0, z1, 3.05); };

// Ventanas en las cuatro caras sobre un lote dado (para luces que no dependen de los barrios)
function winGrid(wb, cx, cz, bw, bd, y0, bh, step = 1.7) {
  const nf = Math.max(1, Math.floor((bh - 0.8) / step)), q = new THREE.PlaneGeometry(0.78, 1.0);
  const face = (len, fx, fz, ry) => { const nc = Math.max(1, Math.floor((len - 0.8) / 1.45)); for (let f = 0; f < nf; f++) for (let c = 0; c < nc; c++) { const u = (c - (nc - 1) / 2) * 1.45; wb.add(q, 0xffffff, cx + fx * (bw / 2 + 0.05) + (fz ? u : 0), y0 + 1.35 + f * step, cz + fz * (bd / 2 + 0.05) + (fx ? u : 0), 1, 1, 1, 0, ry, 0, 0); } };
  face(bw, 0, 1, 0); face(bw, 0, -1, Math.PI); face(bd, 1, 0, Math.PI / 2); face(bd, -1, 0, -Math.PI / 2);
}
// Paneles solares inclinados mirando al norte (hacia la represa, -z)
function panels(b, x0, x1, z0, z1, y) {
  for (let x = x0; x <= x1 + 0.01; x += 1.25) for (let z = z0; z <= z1 + 0.01; z += 1.1) {
    b.box(x, y + 0.32, z, 1.12, 0.06, 0.95, 0x1f3c88, 0, -0.32); b.box(x, y + 0.14, z + 0.28, 0.08, 0.3, 0.08, C.steelD);
  }
}
function signTex(text, bg, fg, border) { return textTex(text, { w: 1024, h: 180, bg, fg, border, size: 96 }); }
function plaque(w, text, x, y, z, ry, sw, sh, o = {}) {
  const t = textTex(text, { w: 512, h: Math.max(64, Math.round(512 * sh / sw)), bg: o.bg || '#12325a', fg: o.fg || '#ffffff', border: o.border || '#ffc93c', size: 72 });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(sw, sh), new THREE.MeshStandardMaterial({ map: t, emissive: 0xffffff, emissiveMap: t, emissiveIntensity: o.glow != null ? o.glow : 0.35, roughness: 0.8 }));
  m.position.set(x, y, z); m.rotation.y = ry; w.scene.add(m); return m;
}

export function buildBarrios(w) {
  const R = rng(5150), M = w.mats;
  // Ventanas que se prenden de noche aunque falle un barrio (hospital con respaldo, la otra orilla)
  M.nightWin = new THREE.MeshStandardMaterial({ color: 0x34495e, emissive: 0xfff0c8, emissiveIntensity: 0.2, roughness: 0.4, clippingPlanes: w.clip, clipIntersection: true });
  M.cross = new THREE.MeshStandardMaterial({ color: 0xd62828, emissive: 0xff2a2a, emissiveIntensity: 0.6, roughness: 0.5 });
  M.flood = new THREE.MeshStandardMaterial({ color: 0xfffbe8, emissive: 0xfff4d0, emissiveIntensity: 0, roughness: 0.4 });
  M.wallbox = new THREE.MeshStandardMaterial({ color: 0x1b3a2a, emissive: 0x4dffa0, emissiveIntensity: 0.9 });
  w.nightBatch = new Batch(); w.floodBatch = new Batch(); w.ledBatch = new Batch();
  norte(w, R); teatro(w); catedral(rotWorld(w, POS.catedral[0], POS.catedral[1], Math.PI / 2)); cancha(w); puerto(w, R); orilla(w, R); jardin(w, R);
  const s = w.scene, nb = w.nightBatch.mesh(M.nightWin); if (nb) s.add(nb);
  const fl = w.floodBatch.mesh(M.flood); if (fl) s.add(fl);
  const lb = w.ledBatch.mesh(M.wallbox); if (lb) s.add(lb);
}

// ================= BARRIO NORTE Y COSTANERA =================
function norte(w, R) {
  const b = w.batch;
  b.boxB(-44, 1.2, 4, 68, 0.9, 14, C.asphalt);                 // calles del barrio (x -78..-10, z -3..11)
  b.boxB(-80.6, 1.0, 1.7, 4.8, 1.2, 18.6, C.granite);           // la rambla oeste sigue hacia el norte
  b.boxB(-46.5, 1.0, -5.3, 73, 1.2, 4.6, C.granite);            // costanera norte
  w.addPlatform(-83.2, -10, -7.6, 11, CITY_Y);
  for (let x = -80; x <= -12; x += 4) b.boxB(x, Y, -5.3, 0.14, 0.02, 4.4, 0xc38e80);
  for (let z = -6; z <= 10; z += 4) b.boxB(-80.6, Y, z, 4.6, 0.02, 0.14, 0xc38e80);
  // bicisenda verde con su pictograma
  b.boxB(-47, Y, -6.6, 70, 0.025, 1.3, 0x3f9a5a);
  for (let x = -80; x <= -14; x += 2.4) { b.boxB(x, Y + 0.01, -7.24, 1.2, 0.02, 0.08, 0xf2efe8); b.boxB(x, Y + 0.01, -5.96, 1.2, 0.02, 0.08, 0xf2efe8); }
  for (let x = -74; x <= -18; x += 14) { for (const dx of [-0.42, 0.42]) b.add(new THREE.TorusGeometry(0.26, 0.05, 4, 10), 0xffffff, x + dx, Y + 0.035, -6.6, 1, 1, 1, Math.PI / 2, 0, 0, 0); b.boxB(x, Y + 0.03, -6.66, 0.7, 0.02, 0.07, 0xffffff); }
  // líneas de calzada
  for (const x of [-76, -60, -44, -28, -12]) for (let z = 0; z < 11; z += 3.2) b.boxB(x, 2.1, z, 0.14, 0.02, 1.4, 0xe9e2c8);
  for (let x = -76; x < -11; x += 3.2) b.boxB(x, 2.1, -1, 1.4, 0.02, 0.14, 0xe9e2c8);
  // baranda sobre el río, con bajadas a la orilla y la salida al puente
  wall(w, -83.4, -83.0, -7.8, 11);
  wall(w, -83.4, -73, -7.95, -7.6); wall(w, -67.8, -49.4, -7.95, -7.6); wall(w, -42.2, -31, -7.95, -7.6); wall(w, -25.4, -10, -7.95, -7.6);
  for (let x = -80; x <= -14; x += 8) { if (x > -50 && x < -40) continue; w.lamp(x, -7.45, 0, Y); }
  for (let x = -76; x <= -16; x += 12) { b.boxB(x, Y, -3.45, 2.2, 0.45, 0.6, C.wood); plant(w, 'palm', x + 6, -3.5, 0.9 + R() * 0.2, Y); }
  for (let x = -80; x <= -16; x += 7) { if (x > -51 && x < -40) continue; plant(w, R() < 0.7 ? 'ceibo' : 'native', x + (R() - 0.5) * 2, -10.6 - R() * 2.4, 0.85 + R() * 0.3); }
  sign(w, 'COSTANERA NORTE', -38.5, Y, -4.4, 0, 6.2, 1.0);
  // manzanas
  for (const cx of POS.norte.xs) b.boxB(cx, 1.3, 6, 12.8, 0.9, 10.8, C.sidewalk);
  for (const x of [-76, -60, -44, -28, -12]) w.lamp(x + 2.4, 11, 0, Y);
  hospital(w, -68, 6); escuela(w, -52, 6); mercado(w, -36, 6);
  // viviendas con techos solares
  const cx = -20, cz = 6;
  [[-23.2, 4.2], [-17.4, 5.4]].forEach(([x, bw], k) => { const h = 4.4 + R() * 1.6; building(w, x, cz + (R() - 0.5) * 0.4, bw, 7.6, h, PAL[Math.floor(R() * PAL.length)], 2, k ? 2 : 0); panels(b, x - bw / 2 + 0.6, x + bw / 2 - 0.6, cz - 2.4, cz + 1.2, Y + h + 0.28); });
  plant(w, 'jaca', cx - 5.85, cz + 4.85, 0.7, Y); plant(w, 'native', cx + 5.85, cz - 4.85, 0.65, Y);
}

function hospital(w, cx, cz) {
  const cb = w.cityBatch, b = w.batch, x0 = cx - 5.5, x1 = cx + 5.5, z0 = cz - 4.2, z1 = cz + 4.2, H = 7.6;
  cb.boxB(cx, Y, cz, 11, H, 8.4, 0xf4f6f2); cb.boxB(cx, Y, cz, 11.2, 0.6, 8.6, 0x2a9d8f); cb.boxB(cx, Y + H, cz, 11.4, 0.3, 8.8, 0xdfe7e4);
  for (let k = 1; k < 3; k++) cb.boxB(cx, Y + k * 2.5, cz, 11.08, 0.12, 8.48, 0x8fd3c9);
  // helipuerto en la azotea
  cb.cyl(cx + 1.6, Y + H + 0.3, cz, 2.7, 2.7, 0.12, 0x5b6470, 16); cb.cyl(cx + 1.6, Y + H + 0.42, cz, 2.3, 2.3, 0.02, 0xffffff, 16); cb.cyl(cx + 1.6, Y + H + 0.43, cz, 2.1, 2.1, 0.02, 0x5b6470, 16);
  cb.box(cx + 1.0, Y + H + 0.46, cz, 0.24, 0.03, 1.6, 0xffffff); cb.box(cx + 2.2, Y + H + 0.46, cz, 0.24, 0.03, 1.6, 0xffffff); cb.box(cx + 1.6, Y + H + 0.46, cz, 1.2, 0.03, 0.24, 0xffffff);
  cb.boxB(cx - 3.6, Y + H + 0.3, cz - 1.6, 1.6, 1.4, 1.6, 0xcfd8d6);
  // entrada de emergencias con alero, sobre la calle de la costanera (sin ómnibus)
  b.boxB(cx, Y + 2.6, z0 - 0.9, 5.4, 0.26, 2.2, 0xe9eef0); for (const sx of [-2.4, 2.4]) { b.boxB(cx + sx, Y, z0 - 1.8, 0.18, 2.6, 0.18, C.steelD); w.addCircle(cx + sx, z0 - 1.8, 0.15); }
  b.boxB(cx, Y, z0 - 0.03, 2.2, 2.1, 0.08, 0x2c3e50);
  // cruces rojas que brillan de noche
  const crossB = new Batch();
  for (const [x, z, ry] of [[cx - 3.4, z1 + 0.08, 0], [cx + 3.4, z1 + 0.08, 0], [x1 + 0.08, cz, Math.PI / 2], [cx - 3.8, z0 - 0.08, Math.PI], [cx + 3.8, z0 - 0.08, Math.PI]]) { crossB.box(x, Y + 5.6, z, 1.5, 0.45, 0.1, 0xffffff, ry); crossB.box(x, Y + 5.6, z, 0.45, 1.5, 0.1, 0xffffff, ry); }
  w.scene.add(crossB.mesh(w.mats.cross));
  plaque(w, 'HOSPITAL', cx, Y + 3.25, z0 - 2.02, Math.PI, 4.2, 0.62, { bg: '#ffffff', fg: '#c1121f', border: '#2a9d8f', glow: 0.5 });
  plaque(w, 'HOSPITAL', cx, Y + 6.6, z1 + 0.06, 0, 4.2, 0.62, { bg: '#ffffff', fg: '#c1121f', border: '#2a9d8f', glow: 0.5 });
  winGrid(w.nightBatch, cx, cz, 11, 8.4, Y + 0.6, H - 0.8, 2.5);
  w.addSolid(x0, x1, z0, z1); w.addOcc(x0, x1, z0, z1, Y + H + 0.3);
  w.dyn.amb = { x: cx + 4.6, z: -1.3, h: -Math.PI / 2 };
}

function escuela(w, cx, cz) {
  const cb = w.cityBatch, b = w.batch, col = 0xf2e4c4, trim = 0x1d6fb8, H = 5.0;
  // ala norte (dos pisos) y ala oeste
  const wing = (x0, x1, z0, z1) => { const mx = (x0 + x1) / 2, mz = (z0 + z1) / 2, sx = x1 - x0, sz = z1 - z0; cb.boxB(mx, Y, mz, sx, H, sz, col); cb.boxB(mx, Y + 2.45, mz, sx + 0.06, 0.18, sz + 0.06, trim); cb.boxB(mx, Y + H, mz, sx + 0.3, 0.26, sz + 0.3, 0xfaf4e6); w.addSolid(x0, x1, z0, z1); w.addOcc(x0, x1, z0, z1, Y + H + 0.3); };
  wing(cx - 6, cx + 6, cz - 5, cz - 1.4); wing(cx - 6, cx - 2.4, cz - 1.4, cz + 5);
  gable(cb, cx, Y + H + 0.26, cz - 3.2, 3.6, 1.0, 12.3, 0xc8674a, true);
  for (const [x, z] of [[cx - 4, cz - 1.38], [cx, cz - 1.38], [cx + 4, cz - 1.38]]) for (const fy of [0, 2.5]) w.winBatch[1].add(new THREE.PlaneGeometry(1.4, 1.1), 0xffffff, x, Y + 1.2 + fy, z, 1, 1, 1, 0, 0, 0, 0);
  for (const z of [cz + 0.6, cz + 3.2]) for (const fy of [0, 2.5]) w.winBatch[1].add(new THREE.PlaneGeometry(1.4, 1.1), 0xffffff, cx - 2.38, Y + 1.2 + fy, z, 1, 1, 1, 0, Math.PI / 2, 0, 0);
  for (const x of [cx - 4, cx, cx + 4]) for (const fy of [0, 2.5]) w.winBatch[1].add(new THREE.PlaneGeometry(1.4, 1.1), 0xffffff, x, Y + 1.2 + fy, cz - 5.02, 1, 1, 1, 0, Math.PI, 0, 0);
  b.boxB(cx - 1.2, Y, cz - 1.36, 1.2, 2.0, 0.08, 0x5b4636);
  // patio con rayuela, aro y bandera
  b.boxB(cx + 1.8, Y, cz + 1.8, 8.2, 0.03, 6.4, 0xd8cdb6);
  for (let i = 0; i < 6; i++) b.boxB(cx + 0.2 + (i % 2) * 0.62, Y + 0.035, cz + 1.2 + Math.floor(i / 2) * 0.62 + (i % 2) * 0.3, 0.56, 0.01, 0.56, [0xef476f, 0xffd166, 0x06d6a0][i % 3]);
  b.cyl(cx + 5.2, Y, cz + 1.0, 0.07, 0.08, 3.0, C.steelD, 6); b.box(cx + 5.2, Y + 3.0, cz + 1.25, 0.9, 0.6, 0.06, 0xffffff); b.add(new THREE.TorusGeometry(0.24, 0.03, 4, 10), 0xe5484d, cx + 5.2, Y + 2.75, cz + 1.55, 1, 1, 1, Math.PI / 2, 0, 0, 0);
  w.addCircle(cx + 5.2, cz + 1.0, 0.2);
  flag(w, cx + 5.4, Y, cz + 4.6, 1.8, 1.2, 5.2); w.addCircle(cx + 5.4, cz + 4.6, 0.25);
  // reja baja con portón sobre la calle de la ciudad
  const rail = (x0, x1, z0, z1) => { const n = Math.ceil(Math.max(x1 - x0, z1 - z0) / 0.5); for (let i = 0; i <= n; i++) b.boxB(lerp(x0, x1, i / n), Y, lerp(z0, z1, i / n), 0.06, 1.0, 0.06, trim); b.box((x0 + x1) / 2, Y + 0.98, (z0 + z1) / 2, Math.abs(x1 - x0) + 0.06, 0.06, Math.abs(z1 - z0) + 0.06, trim); w.addSolid(Math.min(x0, x1) - 0.05, Math.max(x0, x1) + 0.05, Math.min(z0, z1) - 0.05, Math.max(z0, z1) + 0.05, Y + 1.0); };
  rail(cx - 2.4, cx + 0.4, cz + 5.1, cz + 5.1); rail(cx + 2.6, cx + 6.1, cz + 5.1, cz + 5.1); rail(cx + 6.1, cx + 6.1, cz - 1.4, cz + 5.1);
  plaque(w, 'ESCUELA PÚBLICA', cx - 1.2, Y + 3.9, cz - 1.32, 0, 4.6, 0.7, { bg: '#1d6fb8', fg: '#ffffff', border: '#ffffff' });
  plaque(w, 'ESCUELA PÚBLICA', cx, Y + 3.9, cz - 5.04, Math.PI, 4.6, 0.7, { bg: '#1d6fb8', fg: '#ffffff', border: '#ffffff' });
  w.dyn.yard = { x0: cx - 1.6, x1: cx + 5.0, z0: cz - 0.6, z1: cz + 4.4 };
}

function mercado(w, cx, cz) {
  const cb = w.cityBatch, b = w.batch, x0 = cx - 5.8, x1 = cx + 5.8, z0 = cz - 4.6, z1 = cz + 4.6, H = 3.6, iron = 0x56707e;
  for (const x of [x0 + 0.2, cx - 1.95, cx + 1.95, x1 - 0.2]) for (const z of [z0 + 0.2, z1 - 0.2]) { b.boxB(x, Y, z, 0.22, H, 0.22, iron); w.addCircle(x, z, 0.25); }
  for (const z of [z0 + 0.2, z1 - 0.2]) b.box(cx, Y + H, z, 11.8, 0.22, 0.22, iron);
  for (const x of [x0 + 0.2, cx - 1.95, cx + 1.95, x1 - 0.2]) b.box(x, Y + H, cz, 0.22, 0.22, 9.4, iron);
  // techo en bóveda de chapa, con lucernario en los frentes
  const span = 9.6, rise = 2.1, rr = (span * span / 4 + rise * rise) / (2 * rise), ha = Math.asin(span / 2 / rr);
  const arc = new THREE.CylinderGeometry(rr, rr, 12.2, 18, 1, true, 1.5 * Math.PI - ha, ha * 2).rotateZ(-Math.PI / 2);
  cb.add(arc, 0x8a9aa6, cx, Y + H - rr * Math.cos(ha), cz, 1, 1, 1, 0, 0, 0, 0.02);
  for (let k = -5; k <= 5; k++) cb.add(new THREE.CylinderGeometry(rr + 0.03, rr + 0.03, 0.12, 18, 1, true, 1.5 * Math.PI - ha, ha * 2).rotateZ(-Math.PI / 2), 0x5d6d78, cx + k * 1.1, Y + H - rr * Math.cos(ha), cz, 1, 1, 1, 0, 0, 0, 0);
  const sh = new THREE.Shape(); sh.moveTo(-span / 2, 0); sh.absarc(0, -(rr - rise), rr, Math.PI / 2 + ha, Math.PI / 2 - ha, true); sh.lineTo(-span / 2, 0);
  const fan = new THREE.ShapeGeometry(sh, 12);
  for (const sx of [-1, 1]) w.glassBatch.add(fan, 0xffffff, cx + sx * 6.08, Y + H, cz, 1, 1, 1, 0, sx * Math.PI / 2, 0, 0);
  // puestos de frutas y verduras
  const fruit = [0xff8f1f, 0xe5484d, 0x7cc243, 0xffd23f, 0x9b5de5, 0x2f7d32];
  [[cx - 3.6, cz - 2.2], [cx + 3.6, cz - 2.2], [cx - 3.6, cz + 2.0], [cx + 3.6, cz + 2.0]].forEach(([x, z], i) => {
    b.boxB(x, Y, z, 2.6, 0.9, 1.1, 0x8a623c); b.boxB(x, Y + 0.9, z, 2.7, 0.06, 1.2, 0xc9a36b);
    for (let k = 0; k < 4; k++) { const cxx = x - 0.95 + k * 0.63; b.boxB(cxx, Y + 0.96, z, 0.55, 0.22, 0.8, 0x6b4a2f); for (let m = 0; m < 4; m++) b.sph(cxx - 0.13 + (m % 2) * 0.26, Y + 1.24, z - 0.18 + Math.floor(m / 2) * 0.36, 0.13, fruit[(i * 2 + k) % fruit.length], 1, 0); }
    w.addSolid(x - 1.3, x + 1.3, z - 0.55, z + 0.55, Y + 1.2);
  });
  plaque(w, 'MERCADO', cx, Y + H + 0.85, z1 + 0.18, 0, 3.6, 0.7, { bg: '#56707e', fg: '#fff7e6', border: '#ffd166' });
  plaque(w, 'MERCADO', cx, Y + H + 0.85, z0 - 0.18, Math.PI, 3.6, 0.7, { bg: '#56707e', fg: '#fff7e6', border: '#ffd166' });
  w.addOcc(x0, x1, z0, z1, Y + H + rise);
  w.dyn.market = { cx, cz };
}

// ================= TEATRO Y CATEDRAL =================
function teatro(w) {
  // Teatro Larrañaga (1882): ocupa toda su manzana y mira al sur, a la Plaza 33 Orientales. Cuerpo neoclásico, pórtico de seis columnas,
  // frontón con el nombre y, atrás, la caja escénica más alta.
  const [cx, cz] = POS.teatro, cb = w.cityBatch, b = w.batch, col = 0xead7ae, trim = 0xfaf4e6, base = 0xb9a47a, H = 9.4;
  const x0 = cx - 6.0, x1 = cx + 6.0, z0 = cz - 4.9, z1 = cz + 3.2;
  cb.boxB(cx, Y, (z0 + z1) / 2, x1 - x0, H, z1 - z0, col); cb.boxB(cx, Y, (z0 + z1) / 2, x1 - x0 + 0.2, 0.9, z1 - z0 + 0.2, base);
  cb.boxB(cx, Y + H, (z0 + z1) / 2, x1 - x0 + 0.4, 0.45, z1 - z0 + 0.4, trim);
  for (const k of [-1, 1]) cb.boxB(cx + k * 5.75, Y + 0.9, (z0 + z1) / 2, 0.5, H - 0.9, z1 - z0 + 0.12, trim);   // pilastras de esquina
  cb.boxB(cx, Y + 4.6, (z0 + z1) / 2, x1 - x0 + 0.14, 0.22, z1 - z0 + 0.14, trim);                         // cornisa intermedia
  // caja escénica (detrás) y cúpula baja de la sala
  cb.boxB(cx, Y + H + 0.45, z0 + 2.3, 9.4, 3.4, 4.0, col); cb.boxB(cx, Y + H + 3.85, z0 + 2.3, 9.8, 0.3, 4.4, trim);
  cb.cyl(cx, Y + H + 0.45, cz + 0.4, 2.6, 2.8, 0.7, trim, 16); cb.add(DOME, 0x9fb7b0, cx, Y + H + 1.15, cz + 0.4, 2.55, 1.2, 2.55);
  // pórtico de columnas con frontón y escalinata
  const zp = z1 + 1.15;
  b.boxB(cx, Y, zp - 0.05, 12.4, 0.25, 2.6, 0xe6dccb); b.boxB(cx, Y, zp + 1.25, 11.0, 0.12, 0.9, 0xe6dccb);
  for (let i = 0; i < 6; i++) { const x = cx - 5.0 + i * 2.0; b.cyl(x, Y + 0.25, zp, 0.34, 0.38, 6.1, trim, 10); b.boxB(x, Y + 0.25, zp, 0.9, 0.25, 0.9, trim); b.boxB(x, Y + 6.35, zp, 0.86, 0.28, 0.86, trim); w.addCircle(x, zp, 0.4); }
  cb.boxB(cx, Y + 6.63, zp - 0.3, 12.0, 1.2, 2.3, trim); cb.boxB(cx, Y + 7.83, zp - 0.3, 12.3, 0.2, 2.5, 0xd8c79f);
  gable(cb, cx, Y + 8.03, zp - 0.3, 12.3, 2.1, 2.5, col);
  cb.add(new THREE.CircleGeometry(0.55, 14), base, cx, Y + 8.75, zp + 0.97, 1, 1, 1, 0, 0, 0, 0);
  plaque(w, 'TEATRO LARRAÑAGA', cx, Y + 7.25, zp + 0.88, 0, 6.6, 0.8, { bg: '#7a1f2b', fg: '#ffe9a8', border: '#e8c66a', glow: 0.5 });
  // puertas, balcón y ventanas en arco
  for (let i = 0; i < 3; i++) b.boxB(cx - 3 + i * 3, Y + 0.25, z1 + 0.04, 1.4, 3.0, 0.08, 0x5a2a1e);
  b.boxB(cx, Y + 4.4, z1 + 0.35, 8.4, 0.16, 0.7, trim); for (let x = cx - 4; x <= cx + 4; x += 0.5) b.boxB(x, Y + 4.56, z1 + 0.66, 0.06, 0.7, 0.06, trim);
  for (let i = -1; i <= 1; i++) { w.winBatch[1].add(new THREE.PlaneGeometry(1.1, 2.0), 0xffffff, cx + i * 3, Y + 5.8, z1 + 0.04, 1, 1, 1, 0, 0, 0, 0); w.winBatch[1].add(new THREE.CircleGeometry(0.55, 10, 0, Math.PI), 0xffffff, cx + i * 3, Y + 6.8, z1 + 0.04, 1, 1, 1, 0, 0, 0, 0); }
  for (const fx of [-1, 1]) for (let i = 0; i < 3; i++) { const z = z0 + 1.6 + i * 2.5; w.winBatch[1].add(new THREE.PlaneGeometry(0.9, 2.0), 0xffffff, cx + fx * 6.05, Y + 5.8, z, 1, 1, 1, 0, fx * Math.PI / 2, 0, 0); w.winBatch[1].add(new THREE.PlaneGeometry(0.9, 1.4), 0xffffff, cx + fx * 6.05, Y + 2.3, z, 1, 1, 1, 0, fx * Math.PI / 2, 0, 0); }
  for (const sx of [-1, 1]) { const x = cx + sx * 6.3, z = zp + 1.4; b.cyl(x, Y, z, 0.08, 0.1, 2.6, 0x2a2a2e, 6); b.sph(x, Y + 3.0, z, 0.26, 0xffe8a8); w.addCircle(x, z, 0.15); }
  // cartelera de funciones
  plaque(w, 'HOY · FUNCIÓN 20:30', cx + 4.5, Y + 1.7, z1 + 0.1, 0, 1.9, 0.5, { bg: '#2a1a12', fg: '#ffd166', border: '#e8c66a', glow: 0.6 });
  w.addSolid(x0, x1, z0, z1); w.addOcc(x0, x1, z0, z1, Y + H + 4.2); w.addOcc(cx - 6.2, cx + 6.2, zp - 1.4, zp + 0.9, Y + 10.2);
}

// La misma construcción girada alrededor de (cx, cz): la catedral real mira al oeste, a la Plaza Artigas
function rotWorld(w, cx, cz, th) {
  const c = Math.cos(th), sn = Math.sin(th), q0 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), th), q = new THREE.Quaternion(), e = new THREE.Euler();
  const P = (x, z) => { const dx = x - cx, dz = z - cz; return [cx + dx * c + dz * sn, cz - dx * sn + dz * c]; };
  const wrap = bt => { const o = { add(geo, color, x, y, z, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0, jitter) { const [X, Z] = P(x, z); q.setFromEuler(e.set(rx, ry, rz)).premultiply(q0); e.setFromQuaternion(q); bt.add(geo, color, X, y, Z, sx, sy, sz, e.x, e.y, e.z, jitter); return o; } };
    for (const k of ['box', 'boxB', 'cyl', 'sph']) o[k] = (...a) => Batch.prototype[k].apply(o, a); return o; };
  const rect = (x0, x1, z0, z1) => { const [ax, az] = P(x0, z0), [bx, bz] = P(x1, z1); return [Math.min(ax, bx), Math.max(ax, bx), Math.min(az, bz), Math.max(az, bz)]; };
  return { cityBatch: wrap(w.cityBatch), batch: wrap(w.batch), winBatch: w.winBatch.map(wrap), rand: w.rand,
    addSolid: (x0, x1, z0, z1, top, walk) => w.addSolid(...rect(x0, x1, z0, z1), top, walk), addOcc: (x0, x1, z0, z1, y1) => w.addOcc(...rect(x0, x1, z0, z1), y1),
    addCircle: (x, z, r) => w.addCircle(...P(x, z), r), terrainAt: (x, z) => w.terrainAt(...P(x, z)), groundAt: (x, z) => w.groundAt(...P(x, z)),
    scene: { add: m => { const [X, Z] = P(m.position.x, m.position.z); m.position.x = X; m.position.z = Z; m.rotation.y += th; w.scene.add(m); } } };
}
function catedral(w) {
  const [cx, cz] = POS.catedral, cb = w.cityBatch, b = w.batch, col = 0xecdcb5, trim = 0xfaf4e6, dome = 0x7fb3a8, H = 7.0;
  const zf = cz - 4.6;   // fachada sobre la calle de la plaza
  cb.boxB(cx, Y, cz + 0.8, 8.2, H, 8.6, col); cb.boxB(cx, Y + H, cz + 0.8, 8.5, 0.3, 8.9, trim);
  gable(cb, cx, Y + H + 0.3, cz + 0.8, 8.4, 2.0, 8.8, 0xb5533c);
  // fachada con frontón y rosetón
  cb.boxB(cx, Y, zf + 0.6, 7.6, 8.4, 1.2, col); cb.boxB(cx, Y + 8.4, zf + 0.6, 7.9, 0.3, 1.4, trim); gable(cb, cx, Y + 8.7, zf + 0.6, 7.9, 1.6, 1.4, col);
  b.boxB(cx, Y, zf - 0.04, 1.8, 3.0, 0.08, 0x4a2c1c); b.add(new THREE.CircleGeometry(0.9, 12, 0, Math.PI), 0x4a2c1c, cx, Y + 3.0, zf - 0.04, 1, 1, 1, 0, Math.PI, 0, 0);
  w.winBatch[1].add(new THREE.CircleGeometry(1.0, 16), 0xffffff, cx, Y + 5.7, zf - 0.05, 1, 1, 1, 0, Math.PI, 0, 0);
  for (const sx of [-1, 1]) for (let i = 0; i < 3; i++) w.winBatch[1].add(new THREE.PlaneGeometry(0.7, 2.0), 0xffffff, cx + sx * 4.13, Y + 3.6, cz - 1.8 + i * 2.6, 1, 1, 1, 0, sx * Math.PI / 2, 0, 0);
  // campanarios con cupulín
  for (const sx of [-1, 1]) {
    const tx = cx + sx * 4.6, tz = zf + 1.0;
    cb.boxB(tx, Y, tz, 2.6, 11.4, 2.6, col); cb.boxB(tx, Y + 11.4, tz, 2.9, 0.3, 2.9, trim);
    for (const [fx, fz, ry] of [[0, -1.31, Math.PI], [0, 1.31, 0], [1.31, 0, Math.PI / 2], [-1.31, 0, -Math.PI / 2]]) b.boxB(tx + fx, Y + 8.6, tz + fz, fx ? 0.06 : 1.0, 1.8, fx ? 1.0 : 0.06, 0x2a2622, 0);
    cb.add(DOME, dome, tx, Y + 11.7, tz, 1.25, 1.5, 1.25); cb.cyl(tx, Y + 13.1, tz, 0.05, 0.05, 1.0, 0xcfa24a, 5); cb.box(tx, Y + 13.8, tz, 0.5, 0.07, 0.07, 0xcfa24a);
    w.addSolid(tx - 1.3, tx + 1.3, tz - 1.3, tz + 1.3); w.addOcc(tx - 1.3, tx + 1.3, tz - 1.3, tz + 1.3, Y + 13.2);
  }
  // cúpula central sobre tambor
  cb.cyl(cx, Y + H + 1.2, cz + 2.2, 2.3, 2.4, 1.9, col, 14); cb.cyl(cx, Y + H + 3.1, cz + 2.2, 2.5, 2.5, 0.2, trim, 14);
  cb.add(DOME, dome, cx, Y + H + 3.3, cz + 2.2, 2.35, 2.3, 2.35); cb.cyl(cx, Y + H + 5.5, cz + 2.2, 0.35, 0.4, 0.8, trim, 8); cb.cyl(cx, Y + H + 6.3, cz + 2.2, 0.05, 0.05, 1.2, 0xcfa24a, 5); cb.box(cx, Y + H + 7.1, cz + 2.2, 0.6, 0.08, 0.08, 0xcfa24a);
  for (let k = 0; k < 8; k++) { const a = k * Math.PI / 4; w.winBatch[1].add(new THREE.PlaneGeometry(0.5, 1.0), 0xffffff, cx + Math.sin(a) * 2.42, Y + H + 2.1, cz + 2.2 + Math.cos(a) * 2.42, 1, 1, 1, 0, a, 0, 0); }
  b.boxB(cx, Y, zf - 0.7, 7.0, 0.18, 1.2, 0xe6dccb);
  plaque(w, 'CATEDRAL', cx, Y + 7.6, zf - 0.08, Math.PI, 3.0, 0.5, { bg: '#4a2c1c', fg: '#ffe9a8', border: '#cfa24a', glow: 0.3 });
  w.addSolid(cx - 4.1, cx + 4.1, zf, cz + 5.1); w.addOcc(cx - 4.1, cx + 4.1, zf, cz + 5.1, Y + H + 5.5);
}

// ================= PARQUE Y CANCHA DE LA COSTANERA =================
function cancha(w) {
  const b = w.batch, [cx, cz] = POS.cancha, y = w.terrainAt(cx, cz) + 0.02, W = 18, D = 11, line = 0xf4f4f4;
  b.boxB(cx, y - 0.2, cz, W + 2, 0.24, D + 2, 0x4f9a3f); b.boxB(cx, y, cz, W, 0.05, D, 0x5cb04a);
  for (let i = 0; i < 6; i++) b.boxB(cx - W / 2 + 1.5 + i * 3, y + 0.051, cz, 1.5, 0.005, D, 0x63ba50);
  const ln = (x, z, sx, sz) => b.boxB(x, y + 0.055, z, sx, 0.01, sz, line);
  ln(cx, cz - D / 2, W, 0.12); ln(cx, cz + D / 2, W, 0.12); ln(cx - W / 2, cz, 0.12, D); ln(cx + W / 2, cz, 0.12, D); ln(cx, cz, 0.12, D);
  b.add(new THREE.TorusGeometry(1.6, 0.06, 3, 24), line, cx, y + 0.06, cz, 1, 1, 1, Math.PI / 2, 0, 0, 0);
  for (const sx of [-1, 1]) { ln(cx + sx * (W / 2 - 1.8), cz, 0.12, 5); ln(cx + sx * (W / 2 - 0.9), cz - 2.5, 1.8, 0.12); ln(cx + sx * (W / 2 - 0.9), cz + 2.5, 1.8, 0.12);
    const gx = cx + sx * (W / 2 + 0.05); b.boxB(gx, y, cz - 1.5, 0.12, 1.6, 0.12, 0xffffff); b.boxB(gx, y, cz + 1.5, 0.12, 1.6, 0.12, 0xffffff); b.box(gx, y + 1.6, cz, 0.12, 0.12, 3.1, 0xffffff); b.box(gx + sx * 0.5, y + 0.8, cz, 0.04, 1.6, 3.0, 0xdfe6ea); w.addCircle(gx, cz - 1.5, 0.15); w.addCircle(gx, cz + 1.5, 0.15); }
  b.boxB(cx - 3, y, cz + D / 2 + 1.4, 3.2, 0.45, 0.6, C.wood); b.boxB(cx + 3, y, cz + D / 2 + 1.4, 3.2, 0.45, 0.6, C.wood);
  // torres de iluminación (se prenden de noche)
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    const x = cx + sx * (W / 2 + 1.2), z = cz + sz * (D / 2 + 1.2); b.cyl(x, y, z, 0.1, 0.14, 7.5, C.steelD, 6); w.addCircle(x, z, 0.2);
    w.floodBatch.box(x - sx * 0.3, y + 7.6, z - sz * 0.3, 1.2, 0.5, 0.2, 0xffffff, Math.atan2(-sx, -sz));
  }
  plaque(w, 'CANCHA DEL BARRIO', cx, y + 2.6, cz + D / 2 + 2.2, 0, 4.2, 0.6, { bg: '#2f7d32', fg: '#ffffff', border: '#ffd166' });
  for (const sx of [-0.8, 0.8]) b.boxB(cx + sx * 2.1, y, cz + D / 2 + 2.2, 0.12, 2.3, 0.12, C.steelD);
  w.dyn.cancha = { cx, cz, y, W, D };
}

// ================= PUERTO DE SALTO, PUERTO DEPORTIVO Y FARO (costanera oeste, sobre el río Uruguay) =================
function puerto(w, R) {
  const b = w.batch, [px, pz] = POS.puerto, Mu = POS.muelle, gy = Y, cb = w.cityBatch;
  // explanada del puerto: un muelle de piedra que se mete en el río a la altura de la costanera
  const DX0 = -96, DX1 = -83.4, DZ0 = 38, DZ1 = 60;
  b.boxB((DX0 + DX1) / 2, -3, (DZ0 + DZ1) / 2, DX1 - DX0, 5.2, DZ1 - DZ0, 0xb9b1a2); b.boxB((DX0 + DX1) / 2, 2.2, (DZ0 + DZ1) / 2, DX1 - DX0 + 0.2, 0.02, DZ1 - DZ0 + 0.2, C.granite);
  w.addPlatform(DX0, DX1, DZ0, DZ1, CITY_Y);
  for (let z = DZ0 + 2; z < DZ1; z += 4) b.boxB(DX0 + 6, gy, z, 12, 0.02, 0.14, 0xc38e80);
  // baranda del borde, con la boca del muelle de pasajeros
  const rail = (x0, x1, z0, z1) => { b.boxB((x0 + x1) / 2, gy, (z0 + z1) / 2, x1 - x0, 0.9, z1 - z0, 0x3d4650); w.addSolid(x0, x1, z0, z1, gy + 0.95); };
  rail(DX0, DX0 + 0.12, DZ0, Mu.z - 1.8); rail(DX0, DX0 + 0.12, Mu.z + 1.8, DZ1); rail(DX0, -84, DZ0 - 0.12, DZ0); rail(DX0, -84, DZ1, DZ1 + 0.12);
  for (const [x, z] of [[DX0 + 0.6, 40], [DX0 + 0.6, 55], [DX0 + 0.6, 58.6]]) { b.cyl(x, gy, z, 0.22, 0.26, 0.5, 0x2a2e34, 8); w.addCircle(x, z, 0.3); }   // bolardos
  // edificio del puerto con techo solar
  const H = 3.6, x0 = px - 4.5, x1 = px + 4.5, z0 = pz - 2.5, z1 = pz + 2.5;
  cb.boxB(px, gy, pz, 9, H, 5, 0xf5f1e8); cb.boxB(px, gy + 2.3, pz, 9.06, 0.5, 5.06, C.celeste); cb.boxB(px, gy + H, pz, 9.4, 0.25, 5.4, 0xdad4c6);
  panels(b, px - 3.6, px + 3.6, pz - 1.6, pz + 1.2, gy + H + 0.25);
  cb.boxB(px - 3.4, gy + H, pz + 1.4, 1.8, 1.8, 1.8, 0xf5f1e8); w.glassBatch.box(px - 3.4, gy + H + 1.2, pz + 1.4, 1.84, 0.7, 1.84, 0xffffff);
  b.boxB(px - 1.5, gy, z1 + 0.03, 1.4, 2.2, 0.08, 0x2c3e50); b.boxB(px + 1.5, gy, z1 + 0.03, 1.4, 2.2, 0.08, 0x2c3e50);
  for (const z of [pz - 1.2, pz + 1.2]) w.winBatch[2].add(new THREE.PlaneGeometry(1.2, 0.9), 0xffffff, x1 + 0.04, gy + 1.5, z, 1, 1, 1, 0, Math.PI / 2, 0, 0);
  w.addSolid(x0, x1, z0, z1); w.addOcc(x0, x1, z0, z1, gy + H + 2);
  plaque(w, 'PUERTO · LANCHA A CONCORDIA', px, gy + 3.0, z1 + 0.1, 0, 7.6, 0.62, { bg: '#0b4f7a', fg: '#ffffff', border: '#9be7ff' });
  plaque(w, 'PUERTO DE SALTO', x1 + 0.1, gy + 3.0, pz, Math.PI / 2, 4.6, 0.62, { bg: '#0b4f7a', fg: '#ffffff', border: '#9be7ff' });
  flag(w, -85.2, gy, 45.2, 2.4, 1.6, 7); w.addCircle(-85.2, 45.2, 0.3);
  for (const [x, z] of [[-94.6, 45.4], [-94.6, 51.4]]) w.lamp(x, z, -Math.PI / 2, gy);   // boca del muelle
  // muelle de pasajeros: tablones sobre pilotes hacia el oeste, baja suave desde la explanada
  const MZ = Mu.z, top = (x) => lerp(gy + 0.02, 1.35, clamp((DX0 - x) / 5, 0, 1));
  w.addPlatform(Mu.x1, Mu.x0 + 0.4, MZ - 1.7, MZ + 1.7, (x) => top(x));
  for (let x = Mu.x0; x > Mu.x1; x -= 1) { const t0 = top(x), t1 = top(x - 1); b.box(x - 0.5, (t0 + t1) / 2 - 0.15, MZ, 1.02, 0.3, 3.4, (Math.round(x) % 2) ? C.wood : 0x7a5634, 0, 0, -Math.atan2(t1 - t0, 1)); }
  for (let x = Mu.x0 - 3; x >= Mu.x1; x -= 4) for (const sz of [-1.55, 1.55]) b.cyl(x, -2.6, MZ + sz, 0.17, 0.17, 3.9, 0x6a4a2f, 6);
  for (const sz of [-1, 1]) {
    const xEnd = sz > 0 ? Mu.x1 + 8 : Mu.x1 + 0.5;
    for (let x = Mu.x0 - 1; x >= xEnd; x -= 2) b.boxB(x, top(x), MZ + sz * 1.62, 0.08, 1.0, 0.08, 0xf2efe8);
    b.box((Mu.x0 - 1 + xEnd) / 2, 1.35 + 0.98, MZ + sz * 1.62, Mu.x0 - 1 - xEnd, 0.06, 0.06, 0xf2efe8);
    w.addSolid(xEnd, Mu.x0 - 6, MZ + sz * 1.62 - 0.06, MZ + sz * 1.62 + 0.06, 2.4);
  }
  // refugio al final del muelle
  for (const [sx, sz] of [[-1.6, -1.3], [2, -1.3], [-1.6, 1.3], [2, 1.3]]) b.boxB(Mu.x1 + 2.4 + sx, 1.35, MZ + sz, 0.12, 2.5, 0.12, C.steelD);
  b.box(Mu.x1 + 2.6, 3.95, MZ, 4.4, 0.14, 3.4, C.celeste); b.boxB(Mu.x1 + 2.6, 1.35, MZ - 1.0, 2.6, 0.45, 0.5, C.wood);
  w.addInter('lancha:0', Mu.x1 + 2.6, MZ + 0.6, { console: false, y: 1.35, h: 4.6 });
  // escollera y faro
  const [fx, fz] = POS.faro, EX0 = fx + 1.5, EX1 = -88;
  b.boxB((EX0 + EX1) / 2, -1.2, fz, EX1 - EX0, 2.8, 2.6, 0x9c968c); w.addPlatform(EX0, EX1, fz - 1.3, fz + 1.3, 1.62);
  for (let x = EX1 - 0.5; x > EX0; x -= 1.6) for (const sz of [-1, 1]) b.add(new THREE.IcosahedronGeometry(0.75 + R() * 0.4, 0), 0x8a857c, x - R() * 0.5, 0.2 + R() * 0.6, fz + sz * (1.6 + R() * 0.4), 1, 0.7, 1, 0, R() * 6, 0, 0.05);
  b.add(new THREE.CylinderGeometry(1.4, 1.8, 1, 8), 0x9c968c, EX1 + 0.6, 1.25, fz, 1, 0.8, 1);   // remate de la escollera en la orilla
  b.cyl(fx, -1.2, fz, 2.7, 3.1, 2.82, 0x9c968c, 12); w.addPlatform(fx - 2.6, fx + 2.6, fz - 2.6, fz + 2.6, 1.62);
  for (let k = 0; k < 6; k++) b.cyl(fx, 1.62 + k * 1.3, fz, 0.95 - k * 0.04, 1.0 - k * 0.04, 1.3, k % 2 ? 0xd62828 : 0xf5f1e8, 12);
  b.cyl(fx, 9.42, fz, 1.25, 1.25, 0.16, 0x3d4650, 12); w.glassBatch.add(new THREE.CylinderGeometry(0.62, 0.62, 1.1, 10), 0xffffff, fx, 10.13, fz);
  b.add(new THREE.ConeGeometry(0.8, 0.9, 10), 0xd62828, fx, 11.15, fz); b.cyl(fx, 11.6, fz, 0.04, 0.04, 0.8, 0x3d4650, 5);
  w.addCircle(fx, fz, 1.15);
  w.dyn.faro = { x: fx, y: 10.13, z: fz };
  // puerto deportivo: dos muelles de madera (en la punta de las calles) con veleros amarrados entre ellos
  const PZ = [69, 77.6], PX0 = -86.2, PX1 = -104;
  for (const z of PZ) {
    b.boxB(-84.8, 1.25 - 0.9, z, 2.8, 0.9, 3.0, C.granite); w.addPlatform(-86.2, -83.4, z - 1.5, z + 1.5, 1.7);   // bajada de la costanera
    b.boxB((PX0 + PX1) / 2, 0.95, z, PX0 - PX1, 0.3, 2.4, C.wood); w.addPlatform(PX1, PX0, z - 1.2, z + 1.2, 1.25);
    for (let x = PX0 - 2; x >= PX1; x -= 5) for (const sz of [-1.1, 1.1]) b.cyl(x, -2.6, z + sz, 0.16, 0.16, 4, 0x6a4a2f, 6);
  }
  b.boxB(PX1 - 1.1, 0.95, (PZ[0] + PZ[1]) / 2, 2.2, 0.3, PZ[1] - PZ[0] + 2.4, C.wood); w.addPlatform(PX1 - 2.2, PX1, PZ[0] - 1.2, PZ[1] + 1.2, 1.25);
  w.dyn.boats = [];
  const sails = [0xffffff, 0xffd166, 0xef476f, 0x8ecae6, 0xffffff, 0x90be6d];
  [[-95, 71.3], [-100.5, 71.3], [-97, 75.3], [-102, 75.3], [-96.5, 81.4], [-99, 66.6]].forEach((p, i) => {
    const g = new THREE.Group(), mat = new THREE.MeshStandardMaterial({ flatShading: true, roughness: 0.8, vertexColors: true });
    const bb = new Batch();
    bb.box(0, 0.25, 0, 1.3, 0.6, 3.6, 0xf4f1ea); bb.box(0, 0.05, 0, 1.0, 0.3, 3.0, i % 2 ? 0x1d6fb8 : 0xc0392b); bb.box(0, 0.7, -0.3, 0.9, 0.4, 1.2, 0xe8e2d2);
    bb.cyl(0, 0.5, 0.4, 0.05, 0.05, 4.2, 0x8a8f96, 5);
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute([0, 4.5, 0.45, 0, 1.1, 0.45, 0, 1.1, -1.7, 0, 4.5, 0.45, 0, 1.1, -1.7, 0, 1.1, 0.45], 3)); sg.computeVertexNormals();
    bb.add(sg, sails[i], 0, 0, 0, 1, 1, 1, 0, 0, 0, 0);
    const m = bb.mesh(mat); m.castShadow = true; g.add(m); g.position.set(p[0], 0, p[1]); g.rotation.y = (i % 2 ? -1 : 1) * Math.PI / 2 + 0.06 * i; w.scene.add(g); w.dyn.boats.push(g);
  });
  w.updaters.push((dt) => w.dyn.boats.forEach((g, i) => { g.position.y = Math.sin(w.time * 1.3 + i) * 0.12 - 0.05; g.rotation.z = Math.sin(w.time * 1.1 + i * 2) * 0.05; }));
  plaque(w, 'PUERTO DEPORTIVO', -82.7, gy + 2.4, 73.3, Math.PI / 2, 3.6, 0.5, { bg: '#0b4f7a', fg: '#ffffff', border: '#9be7ff' });
  // feria del puerto (sólo de mañana), sobre la explanada
  const fb = new Batch(), stalls = [], cols = [[0xe5484d, 0xffffff], [0x2a9d8f, 0xffffff], [0xffc420, 0xe5484d], [0x6a2c91, 0xffffff]];
  [-94.2, -91, -87.8, -84.6].forEach((x, i) => {
    const z = 57.4, y = gy;
    fb.boxB(x, y, z, 2.2, 0.85, 0.9, 0x8a623c); fb.boxB(x, y + 0.85, z, 2.3, 0.06, 1.0, 0xc9a36b);
    for (const [sx, sz] of [[-1.05, -0.45], [1.05, -0.45], [-1.05, 0.45], [1.05, 0.45]]) fb.boxB(x + sx, y, z + sz, 0.06, 2.2, 0.06, 0x6b4a2f);
    for (let k = 0; k < 5; k++) fb.box(x - 1.0 + k * 0.5, y + 2.25, z, 0.5, 0.06, 1.4, cols[i][k % 2], 0, 0.18);
    for (let k = 0; k < 6; k++) fb.sph(x - 0.85 + k * 0.34, y + 1.0, z - 0.15 + (k % 2) * 0.25, 0.14, [0xff8f1f, 0x7cc243, 0xe5484d, 0xffd23f, 0x8a5a33, 0xf4f1ea][(k + i) % 6], 1, 0);
    stalls.push({ x, z });
  });
  const feria = new THREE.Group(), fm = fb.mesh(w.mats.solid); fm.castShadow = true; feria.add(fm);
  ['FRUTAS', 'VERDURAS', 'MIEL Y QUESOS', 'ARTESANÍAS'].forEach((t, i) => { const tx = textTex(t, { w: 512, h: 108, bg: '#8a5a2b', fg: '#fff7e6', size: 58 }), m = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 0.42), new THREE.MeshStandardMaterial({ map: tx, side: THREE.DoubleSide, emissive: 0xffffff, emissiveMap: tx, emissiveIntensity: 0.3 })); m.position.set(stalls[i].x, gy + 1.95, stalls[i].z - 0.52); m.rotation.y = Math.PI; feria.add(m); });
  w.scene.add(feria); w.dyn.feria = { group: feria, stalls, walk: { z: 55.2, x0: -95.4, x1: -84 } };
  stalls.forEach(s => w.addSolid(s.x - 1.15, s.x + 1.15, s.z - 0.5, s.z + 0.5, 3.0));
  const fsign = plaque(w, 'FERIA DEL PUERTO · DE MAÑANA', -89.4, gy + 3.25, 58.3, Math.PI, 6.2, 0.6, { bg: '#2f7d32', fg: '#ffffff', border: '#ffd166' }); feria.attach(fsign);
}

// ================= CONCORDIA (ARGENTINA), EN LA ORILLA OCCIDENTAL =================
function orilla(w, R) {
  const b = w.batch, O = POS.orilla, cols = [0xf2e4c4, 0xe9bba6, 0xd9c6a0, 0xa9cfe0, 0xf5f1e8, 0xe2b25c], roofs = [0xb5533c, 0xa9462f, 0xc86a4a, 0x8f9aa3];
  const OZ = O.z, shore = O.x1, top = (x) => lerp(1.35, w.terrainAt(shore, OZ) + 0.06, clamp((O.x0 - 4 - x) / 6, 0, 1));
  // muelle de Concordia, enfrente del de Salto
  w.addPlatform(shore - 1, O.x0, OZ - 1.7, OZ + 1.7, (x) => top(x));
  for (let x = O.x0; x > shore - 1; x -= 1) { const t0 = top(x), t1 = top(x - 1); b.box(x - 0.5, (t0 + t1) / 2 - 0.15, OZ, 1.02, 0.3, 3.4, (Math.round(x) % 2) ? C.wood : 0x7a5634, 0, 0, -Math.atan2(t1 - t0, 1)); }
  for (let x = O.x0; x >= O.x0 - 10; x -= 4) for (const sz of [-1.55, 1.55]) b.cyl(x, -2.6, OZ + sz, 0.17, 0.17, 3.9, 0x6a4a2f, 6);
  w.addInter('lancha:1', O.x0 - 2.2, OZ + 0.6, { console: false, y: 1.35, h: 4.6 });
  const gx = shore - 3.5, gy = w.terrainAt(gx, OZ);
  sign(w, 'CONCORDIA · ARGENTINA', gx, gy, OZ - 4.5, Math.PI / 2, 6.4, 1.0, { bg: '#4a8fc8', border: '#ffffff' });
  argFlag(w, gx + 0.2, gy, OZ + 4.2, 2.4, 1.6, 7);
  // costanera de Concordia, con palmeras
  for (let z = -86; z <= 206; z += 2) { const x = westBank(z) - 5.2, y = w.terrainAt(x, z); if (Math.abs(z - OZ) > 3) b.boxB(x, y - 0.3, z, 2.6, 0.38, 2.05, 0xd8c8a8); }
  for (let z = -82; z <= 202; z += 12) { if (Math.abs(z - OZ) < 6) continue; plant(w, R() < 0.6 ? 'palm' : 'ceibo', westBank(z) - 7.2, z, 0.9 + R() * 0.2); }
  // calles de Concordia: una avenida paralela a la costanera y transversales hasta el borde de la maqueta
  const av = []; for (let z = -78; z <= 206; z += 8) av.push([westBank(z) - 15, z]); w.road(av, 3.2, C.asphalt);
  buildIntlConcordia(w);   // rotonda con naranjos y parada del ómnibus internacional
  for (let z = -70; z <= 200; z += 22) { if (Math.hypot(westBank(z) - 17.2 - ROT.x, z - ROT.z) < ROT.r + 3) continue; w.lamp(westBank(z) - 17.2, z, Math.PI / 2); }
  for (const z of [-40, 8, OZ, 92, 140, 186]) w.road([[westBank(z) - 8.4, z], [westBank(z) - 15, z], [-196, z], [-229, z]], z === OZ ? 3.2 : 2.6, C.asphalt);
  // casas y edificios bajos de la ciudad vecina
  for (let i = 0; i < 130; i++) {
    const z = lerp(-80, 204, R()), x = lerp(-226, -168, R()), fd = farD(x, z);
    if (fd < 9 || intlKeep(x, z) || (Math.abs(z - OZ) < 7 && x > -176) || (Math.abs(z - 40) < 6 && Math.abs(x + 182) < 6) || w.nearRoad(x, z, 4.4)) continue;
    const y = w.terrainAt(x, z), tall = R() < 0.22 && x > -200;
    if (tall) { const h = 5 + R() * 6, bw = 3.6 + R() * 2, bd = 3.6 + R() * 2; b.boxB(x, y - 0.3, z, bw, h + 0.3, bd, cols[Math.floor(R() * cols.length)]); b.boxB(x, y + h, z, bw + 0.2, 0.2, bd + 0.2, 0xf3ecdc); winGrid(w.nightBatch, x, z, bw, bd, y, h); w.addSolid(x - bw / 2, x + bw / 2, z - bd / 2, z + bd / 2); w.addOcc(x - bw / 2, x + bw / 2, z - bd / 2, z + bd / 2, y + h); }
    else { const hw = 3.6 + R(), hd = 3.8 + R(); w.houses.push({ x, y: y - 0.1, z, w: hw, d: hd, h: 2.4, rh: 1.4, c: cols[Math.floor(R() * cols.length)], rc: roofs[Math.floor(R() * roofs.length)], ry: (R() - 0.5) * 0.3 }); const q = new THREE.PlaneGeometry(0.7, 0.8); w.nightBatch.add(q, 0xffffff, x + hw / 2 + 0.05, y + 1.3, z, 1, 1, 1, 0, Math.PI / 2, 0, 0); w.addSolid(x - hw / 2, x + hw / 2, z - hd / 2, z + hd / 2); }
    if (R() < 0.5) plant(w, R() < 0.5 ? 'native' : 'jaca', x + (R() - 0.5) * 3, z + 3, 0.8 + R() * 0.3);
  }
  // iglesia con campanario, que se ve desde la costanera de Salto (la torre mira al río)
  const cx = -182, cz = 40, cy = w.terrainAt(cx, cz);
  b.boxB(cx, cy - 0.3, cz, 8, 5.3, 5, 0xf2e4c4); gable(b, cx, cy + 5, cz, 5.2, 1.8, 8.2, 0xb5533c, true);
  b.boxB(cx + 4.6, cy - 0.3, cz, 2.2, 11.3, 2.2, 0xf2e4c4); w.addSolid(cx - 4, cx + 5.7, cz - 2.5, cz + 2.5); w.addOcc(cx - 4.2, cx + 6, cz - 2.7, cz + 2.7, cy + 6); b.add(new THREE.ConeGeometry(1.4, 2.6, 4), 0xb5533c, cx + 4.6, cy + 12.3, cz, 1, 1, 1, 0, Math.PI / 4, 0);
  w.nightBatch.add(new THREE.CircleGeometry(0.6, 12), 0xffffff, cx + 5.72, cy + 3.5, cz, 1, 1, 1, 0, Math.PI / 2, 0, 0);
  for (let i = 0; i < 90; i++) { const x = lerp(-228, -164, R()), z = lerp(-84, 206, R()); if (farD(x, z) > 10 && !intlKeep(x, z) && !(Math.abs(z - OZ) < 6 && x > -178) && !w.nearRoad(x, z, 2.6)) plant(w, R() < 0.25 ? 'euca' : R() < 0.6 ? 'native' : 'bush', x, z, 0.8 + R() * 0.5); }
}
// Bandera argentina en la otra orilla del río
export function argFlag(w, x, y, z, fw, fh, mast) {
  const tex = canvasTex(360, 240, (g) => { g.fillStyle = '#74acdf'; g.fillRect(0, 0, 360, 240); g.fillStyle = '#ffffff'; g.fillRect(0, 80, 360, 80); g.fillStyle = '#f6b40e'; g.beginPath(); g.arc(180, 120, 22, 0, 7); g.fill(); g.strokeStyle = '#f6b40e'; g.lineWidth = 4; for (let k = 0; k < 16; k++) { const a = k * Math.PI / 8; g.beginPath(); g.moveTo(180 + Math.cos(a) * 24, 120 + Math.sin(a) * 24); g.lineTo(180 + Math.cos(a) * 34, 120 + Math.sin(a) * 34); g.stroke(); } });
  w.batch.cyl(x, y, z, 0.07, 0.11, mast, 0xe6e6e6, 8); w.addCircle(x, z, 0.25);
  const fg = new THREE.PlaneGeometry(fw, fh, 12, 5), m = new THREE.Mesh(fg, new THREE.MeshStandardMaterial({ map: tex, side: THREE.DoubleSide, roughness: 0.9 }));
  m.position.set(x + fw / 2 + 0.12, y + mast - fh / 2 - 0.15, z); m.castShadow = true; w.scene.add(m);
  const base = fg.attributes.position.array.slice();
  w.updaters.push((dt, st) => { const p = fg.attributes.position, amp = (0.08 + st.grid.wind * 0.22) * fw / 3; for (let i = 0; i < p.count; i++) { const u = (base[i * 3] + fw / 2) / fw; p.setZ(i, Math.sin(u * 7.2 - w.time * (4 + st.grid.wind * 5) + 1.3) * amp * u); } p.needsUpdate = true; });
}

// ================= BARRIO JARDÍN =================
export const JARDIN = [[20, 1.6, 1], [29, 1.6, 1], [38, 1.6, 1], [22, -9.6, -1], [31, -9.6, -1], [40, -9.6, -1], [27, -15.8, 1], [36, -15.8, 1], [28, -26.2, -1], [37, -26.2, -1]];
function jardin(w, R) {
  const b = w.batch, A = C.asphalt, pastel = [0xf2e4c4, 0xe9bba6, 0xa9cfe0, 0xd9e7c4, 0xf5f1e8, 0xe2c6e8], cars = [0xe5484d, 0x2ed3c6, 0xffc420, 0x1d6fb8, 0xf4f1ea, 0x6a2c91];
  w.road([[9.2, -4], [26, -4], [44, -4]], 3.0, A); w.road([[19.4, -21], [32, -21], [44, -21]], 3.0, A);
  JARDIN.forEach(([x, z, f], i) => {
    // f = 1: el frente mira a -z (a la calle del sur); f = -1: mira a +z
    const y = w.terrainAt(x, z), col = pastel[i % pastel.length], H = 2.9, fz = z - f * 2.5;
    b.boxB(x, y - 0.2, z, 5, H + 0.2, 5, col); b.boxB(x, y + H, z, 5.3, 0.22, 5.3, 0xf3ecdc); b.boxB(x, y + H + 0.22, z, 5.0, 0.3, 0.12, 0xf3ecdc);
    panels(b, x - 1.9, x + 1.9, z - 1.6, z + 1.6, y + H + 0.22);
    b.boxB(x - 1, y, fz - f * 0.04, 0.9, 1.9, 0.08, 0x5b4636);
    const q = new THREE.PlaneGeometry(0.9, 0.9); w.winBatch[2].add(q, 0xffffff, x + 1.1, y + 1.5, fz - f * 0.05, 1, 1, 1, 0, f > 0 ? Math.PI : 0, 0, 0); w.winBatch[2].add(q, 0xffffff, x + 2.53, y + 1.5, z, 1, 1, 1, 0, Math.PI / 2, 0, 0); w.winBatch[2].add(q, 0xffffff, x - 2.53, y + 1.5, z, 1, 1, 1, 0, -Math.PI / 2, 0, 0);
    w.addSolid(x - 2.5, x + 2.5, z - 2.5, z + 2.5); w.addOcc(x - 2.5, x + 2.5, z - 2.5, z + 2.5, y + H + 0.6);
    // auto eléctrico enchufado en la entrada y cargador de pared
    const ax = x + 3.75, az = z - f * 0.4, ac = cars[i % cars.length];
    b.boxB(ax, y, az, 2.0, 0.04, 4.6, 0xbdb6a2);
    b.boxB(ax, y + 0.28, az, 1.6, 0.55, 3.4, ac); b.boxB(ax, y + 0.83, az + f * 0.25, 1.36, 0.5, 1.8, 0x22303c); b.boxB(ax, y + 1.33, az + f * 0.25, 1.4, 0.06, 1.86, ac);
    for (const sx of [-0.78, 0.78]) for (const sz of [-1.1, 1.1]) b.cyl(ax + sx, y + 0.32, az + sz, 0.3, 0.3, 0.2, 0x1c1e22, 10, 0, 0, Math.PI / 2);
    b.boxB(x + 2.56, y + 0.9, z + f * 1.2, 0.1, 0.6, 0.4, 0xf4f1ea); w.ledBatch.box(x + 2.62, y + 1.25, z + f * 1.2, 0.03, 0.14, 0.2, 0xffffff);
    b.box(x + 3.1, y + 0.9, z + f * 0.3, 1.1, 0.04, 0.04, 0x222222, 0, 0, 0.4);
    w.addSolid(ax - 0.8, ax + 0.8, az - 1.7, az + 1.7, y + 1.4);
    // jardín del frente
    for (let k = 0; k < 3; k++) b.sph(x - 2 + k * 0.9, y + 0.3, fz - f * 0.7, 0.42, 0x58a548, 0.8, 0);
    if (R() < 0.7) plant(w, R() < 0.5 ? 'jaca' : 'native', x - 2.2, z + f * 3.6, 0.7);
  });
  // huerta comunitaria
  const hx = 9.5, hz = -17.5, hy = w.terrainAt(hx, hz);
  for (let r = 0; r < 4; r++) { const z = hz - 3 + r * 2; b.boxB(hx, hy, z, 6, 0.45, 1.1, 0x7b5a3a); b.boxB(hx, hy + 0.45, z, 5.8, 0.04, 0.9, 0x5a3d26);
    for (let k = 0; k < 7; k++) b.sph(hx - 2.5 + k * 0.84, hy + 0.65, z, 0.28 + R() * 0.12, [0x4c9a3f, 0x7cc243, 0x2f7d32][(k + r) % 3], 1.3, 0);
    w.addSolid(hx - 3, hx + 3, z - 0.55, z + 0.55, hy + 0.6); }
  b.cyl(hx + 4.4, hy, hz - 2.6, 0.7, 0.7, 1.6, 0x2a6f97, 10); w.addCircle(hx + 4.4, hz - 2.6, 0.75);
  b.boxB(hx + 4.4, hy, hz + 2.2, 1.6, 1.9, 1.6, 0x9a7a52); gable(b, hx + 4.4, hy + 1.9, hz + 2.2, 1.8, 0.7, 1.8, 0x6d8a4a); w.addSolid(hx + 3.6, hx + 5.2, hz + 1.4, hz + 3.0);
  for (const [x, z] of [[hx - 3.3, hz - 4.2], [hx + 3.3, hz - 4.2], [hx - 3.3, hz + 4.2], [hx + 3.3, hz + 4.2]]) b.boxB(x, hy, z, 0.1, 0.9, 0.1, C.wood);
  plaque(w, 'HUERTA COMUNITARIA', hx, hy + 2.2, hz + 4.4, 0, 4.0, 0.56, { bg: '#2f7d32', fg: '#ffffff', border: '#ffd166' });
  for (const sx of [-1.7, 1.7]) b.boxB(hx + sx, hy, hz + 4.4, 0.1, 1.95, 0.1, C.wood);
  w.dyn.huerta = { x: hx, z: hz, y: hy };
  const sy = w.terrainAt(13, 5);
  sign(w, 'BARRIO JARDÍN', 13.5, sy, 5.2, 0.15, 5.2, 1.0, { bg: '#2f7d32', border: '#b5e48c' });
}
