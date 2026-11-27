// Ampliación de la maqueta: la Cuchilla de Haedo con sus cerros chatos de basalto, los Potreros de Arerunguá
// (pradera con su arroyo, monte de quebrada, tajamar y estancia), la estación del ferrocarril con su vía hacia el
// interior y el río Daymán con su monte ribereño. Todo queda al este de x 130 o al sur de z 210.
import * as THREE from 'three';
import { rng, lerp, smooth, distPoly } from './util.js';
import { RAIL, ARROYO, DAYMAN, TAJAMAR, MESAS, terrainH } from './terrain.js';
import { C, Batch, textTex } from './world.js';
import { RX, RZ0, RAIL_L, S_CITY, railXZ, railY, railNear, railRot } from './rail.js';
import { sign } from './sectors.js';

export const ESTANCIA = [150, 182];
export const BIOLOGA = [192, 96];
// Lugares para las cámaras trampa: borde del monte de la quebrada, orilla del arroyo y la pradera abierta
export const CAMS = [[214, 30, 'Monte de la quebrada'], [214, 128, 'Orilla del arroyo'], [176, 214, 'Pradera abierta']];
export const NESTS = [[134, 196], [134, 160], [178, 120], [178, 204]], CUEVAS = [[214, 196], [246, 72], [160, 92]];
export const PUENTE_ARROYO = (() => { let best = [0, 1e9]; for (let x = 120; x < 260; x += 0.5) { const d = distPoly(x, RAIL.z, ARROYO); if (d < best[1]) best = [x, d]; } return best[0]; })();
const TRI_X = new THREE.CylinderGeometry(1, 1, 1, 3).rotateX(-Math.PI / 2).rotateY(Math.PI / 2);   // techo a dos aguas, cumbrera a lo largo de x
const gable = (b, x, y0, z, len, h, wid, color) => { const sy = h / 1.5; b.add(TRI_X, color, x, y0 + 0.5 * sy, z, len, sy, wid / 1.732); };
const GRAVEL = 0xb5a27f, ASPH = 0x4b5058, BASALTO = [0x5c4a3e, 0x6b5444, 0x4f4038, 0x76604d];

export function buildPradera(w) {
  const b = w.pBatch = new Batch(), R = rng(31415), t0 = w.trees.length;   // lote propio: se recorta cuando la cámara mira a la ciudad
  const gy = (x, z) => w.groundAt(x, z);

  // ---------- Caminos: la ruta sigue al sur hasta el puente del Daymán; ramal a la estación y camino de tierra a la estancia ----------
  w.road([[0, 208], [2, 226], [4, 246], [6, 270], [8, 300], [10, 312]], 3.4, ASPH);
  w.road([[10, 338], [11, 352], [12, 369]], 3.4, ASPH);
  w.road([[5, 258], [40, 257], [90, 256.5], [128, 256], [144, 250], [149, 230], [151, 200], [151, 190]], 2.4, GRAVEL);
  // puente de la ruta 3 sobre el río Daymán
  { const x = 10, z0 = 310, z1 = 340, y = 3.1;
    b.boxB(x, y - 0.5, (z0 + z1) / 2, 4.6, 0.5, z1 - z0, 0xb7b1a5); b.boxB(x, y, (z0 + z1) / 2, 3.4, 0.06, z1 - z0, ASPH);
    for (const s of [-1, 1]) { b.boxB(x + s * 2.2, y, (z0 + z1) / 2, 0.2, 0.9, z1 - z0, 0xe8e3d8); }
    for (let z = z0 + 5; z < z1; z += 7.5) b.boxB(x, -3.5, z, 2.6, y - 0.5 + 3.5, 1.2, 0xa39d92);
    w.addPlatform(x - 2.3, x + 2.3, z0, z1, y + 0.06); w.addSolid(x + 2.1, x + 2.5, z0, z1, y + 0.9); w.addSolid(x - 2.5, x - 2.1, z0, z1, y + 0.9);
    sign(w, 'RÍO DAYMÁN', x + 4.8, gy(x + 4.8, 306), 306, 0, 5.4, 1.0, { bg: '#1d6fb8', border: '#ffffff' });
    sign(w, 'RUTA 3 · A PAYSANDÚ', x + 4.6, gy(x + 4.6, 352), 352, 0, 6.6, 1.0, { bg: '#2e7d32', border: '#ffffff' });
  }

  // ---------- Vía del ferrocarril (ver rail.js): durmientes, rieles, pasos a nivel y puente de hierro sobre el arroyo ----------
  const bx = PUENTE_ARROYO;
  buildVia(w, b);
  { const x0 = bx - 9, x1 = bx + 9, y = railY(railNear(bx, RAIL.z).s) - 0.34;
    b.boxB(bx, y - 0.6, RAIL.z, x1 - x0, 0.6, 3.4, 0x5d6268);
    for (const s of [-1.6, 1.6]) { b.boxB(bx, y + 2.4, RAIL.z + s, x1 - x0, 0.22, 0.22, 0x4e555c); b.boxB(bx, y, RAIL.z + s, x1 - x0, 0.22, 0.22, 0x4e555c);
      for (let k = 0; k < 6; k++) { const xa = x0 + k * 3; b.add(new THREE.BoxGeometry(0.16, 3.6, 0.16), 0x4e555c, xa + 1.5, y + 1.2, RAIL.z + s, 1, 1, 1, 0, 0, (k % 2 ? 1 : -1) * 0.69); b.boxB(xa, y, RAIL.z + s, 0.2, 2.6, 0.2, 0x4e555c); } }
    for (const xa of [x0 + 2, x1 - 2]) b.boxB(xa, -2, RAIL.z, 1.6, y - 0.6 + 2, 3.2, 0x9c8f7f);
  }
  buildEstacion(w);

  // ---------- Cerros chatos: piedras de basalto en las laderas y un mirador en la cima del más alto ----------
  for (const [mx, mz, r, a] of MESAS) {
    for (let i = 0, n = Math.round(r * 2.2); i < n; i++) {
      const an = R() * 6.283, d = r + 1 + R() * 6, x = mx + Math.cos(an) * d, z = mz + Math.sin(an) * d, s = 0.5 + R() * 1.4;
      b.add(new THREE.DodecahedronGeometry(s, 0), BASALTO[i % 4], x, terrainH(x, z) + s * 0.3, z, 1, 0.65 + R() * 0.5, 1, R(), R() * 6, R());
      if (s > 1.2) w.addCircle(x, z, s * 0.8);
    }
  }
  { const [mx, mz] = MESAS[0], y = terrainH(mx, mz);
    b.boxB(mx, y, mz, 6, 0.3, 6, 0xb89a74); for (const [sx, sz] of [[-3, -3], [3, -3], [3, 3], [-3, 3]]) b.boxB(mx + sx, y + 0.3, mz + sz, 0.16, 1.1, 0.16, C.wood);
    for (const s of [-3, 3]) { b.boxB(mx, y + 1.3, mz + s, 6, 0.12, 0.12, C.wood); b.boxB(mx + s, y + 1.3, mz, 0.12, 0.12, 6, C.wood); }
    sign(w, 'MIRADOR · CUCHILLA DE HAEDO', mx + 6, terrainH(mx + 6, mz + 5), mz + 5, -0.5, 7.4, 1.1, { bg: '#5c4a3e', border: '#ffd23f' });
  }
  sign(w, 'CERROS CHATOS', 160, terrainH(160, -12), -12, 0.4, 5.2, 1.0, { bg: '#5c4a3e', border: '#ffd23f' });

  // ---------- Monte de quebrada a lo largo del arroyo y monte ribereño del Daymán ----------
  const nearRail = (x, z, d) => railNear(x, z).d < d;
  const avoid = (x, z) => nearRail(x, z, 5) || (x > 14 && x < 48 && z > 274 && z < 302) || w.nearRoad(x, z, 3.5) || Math.hypot(x - ESTANCIA[0], z - ESTANCIA[1]) < 16 || Math.hypot(x - TAJAMAR[0], z - TAJAMAR[1]) < 13 || CAMS.some(c => Math.hypot(c[0] - x, c[1] - z) < 3.2) || Math.hypot(x - BIOLOGA[0], z - BIOLOGA[1]) < 4;
  const strip = (pts, w0, w1, step, types) => {
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, az] = pts[i], [cx, cz] = pts[i + 1], L = Math.hypot(cx - ax, cz - az), nx = -(cz - az) / L, nz = (cx - ax) / L;
      for (let t = 0; t < L; t += step) for (const side of [-1, 1]) {
        if (R() < 0.18) continue;
        const off = lerp(w0, w1, R()), x = ax + (cx - ax) * t / L + nx * off * side + (R() - 0.5) * 2, z = az + (cz - az) * t / L + nz * off * side + (R() - 0.5) * 2;
        if (x > 289 || z > 369 || x < -88 || terrainH(x, z) < 0.6 || avoid(x, z)) continue;
        const r = R(); let type = types[0][1]; for (const [p, k] of types) if (r < p) { type = k; break; }
        w.tree(type, x, z, 0.75 + R() * 0.55);
      }
    }
  };
  strip(ARROYO, 4.5, 12, 2.6, [[0.55, 'native'], [0.75, 'ceibo'], [1, 'bush']]);
  strip(DAYMAN.filter(p => p[0] > -84), 9, 20, 3.2, [[0.45, 'native'], [0.68, 'ceibo'], [0.78, 'palm'], [1, 'bush']]);
  // árboles sueltos en la pradera: talas, ombúes y algún coronilla
  for (let i = 0; i < 70; i++) {
    const x = lerp(134, 286, R()), z = lerp(-140, 236, R());
    if (terrainH(x, z) < 1 || distPoly(x, z, ARROYO) < 9 || avoid(x, z) || MESAS.some(([mx, mz, r]) => Math.hypot(x - mx, z - mz) < r + 7)) continue;
    w.tree(R() < 0.18 ? 'ombu' : R() < 0.6 ? 'native' : 'bush', x, z, 0.8 + R() * 0.4);
  }
  for (let i = 0; i < 46; i++) {   // franja sur: chacras y montecitos entre la vía y el Daymán
    const x = lerp(-80, 286, R()), z = lerp(214, 300, R());
    if (terrainH(x, z) < 1 || avoid(x, z) || distPoly(x, z, DAYMAN) < 14 || (x > 120 && distPoly(x, z, ARROYO) < 8)) continue;
    w.tree(R() < 0.4 ? 'euca' : R() < 0.75 ? 'native' : 'bush', x, z, 0.8 + R() * 0.4);
  }
  // pasarelas de madera sobre el arroyo (para llegar a las cámaras y al otro lado del monte)
  for (const pz of [96, 30]) {
    let px = 200, best = 1e9; for (let x = 160; x < 260; x += 0.5) { const d = distPoly(x, pz, ARROYO); if (d < best) { best = d; px = x; } }
    const y = 1.9; b.boxB(px, y - 0.25, pz, 14, 0.25, 2.2, 0x8a623c);
    for (let k = -6; k <= 6; k += 2) b.boxB(px + k, -1.2, pz, 0.24, y + 1.0, 0.24, 0x6a4a2c);
    for (const s of [-1, 1]) b.boxB(px, y, pz + s * 1.0, 14, 0.9, 0.08, 0x8a623c);
    w.addPlatform(px - 7, px + 7, pz - 1.1, pz + 1.1, y); w.addSolid(px - 7, px + 7, pz + 0.95, pz + 1.15, y + 0.9); w.addSolid(px - 7, px + 7, pz - 1.15, pz - 0.95, y + 0.9);
  }

  // ---------- Estancia: casco con galería, galpón, molino, corral y el ombú al lado de la casa ----------
  { const [ex, ez] = ESTANCIA, y = gy(ex, ez);
    b.boxB(ex, y, ez, 12, 3.2, 6.4, 0xf3ecdc); b.boxB(ex, y, ez, 12.2, 0.4, 6.6, 0x9a8a72);
    gable(b, ex, y + 3.2, ez, 12.6, 1.7, 7.2, 0xa9462f);
    b.box(ex, y + 3.0, ez + 4.4, 12.4, 0.12, 2.6, 0x8a623c, 0, 0.18);
    for (let k = -2; k <= 2; k++) b.boxB(ex + k * 2.9, y, ez + 5.4, 0.18, 2.8, 0.18, 0x6a4a2c);
    for (const k of [-4, -1.5, 1.5, 4]) b.boxB(ex + k, y + 1.1, ez + 3.22, 1.1, 1.3, 0.08, 0x2d4a5e); b.boxB(ex, y, ez + 3.22, 1.0, 2.0, 0.08, 0x5b4636);
    w.addSolid(ex - 6, ex + 6, ez - 3.2, ez + 3.2); w.addOcc(ex - 6, ex + 6, ez - 3.2, ez + 3.2, y + 5);
    const gx = ex + 14, gz = ez - 4, gy2 = gy(gx, gz);
    b.boxB(gx, gy2, gz, 9, 3.6, 7, 0xb9bcc0); gable(b, gx, gy2 + 3.6, gz, 9.4, 1.3, 7.6, 0x8f9aa3);
    b.boxB(gx, gy2, gz + 3.52, 3.6, 3.0, 0.1, 0x6a6e75); w.addSolid(gx - 4.5, gx + 4.5, gz - 3.5, gz + 3.5); w.addOcc(gx - 4.5, gx + 4.5, gz - 3.5, gz + 3.5, gy2 + 5);
    const mx = ex - 10, mz = ez - 6, my = gy(mx, mz);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b.add(new THREE.CylinderGeometry(0.06, 0.08, 7.4, 4), 0x9aa0a6, mx + sx * 0.7, my + 3.6, mz + sz * 0.7, 1, 1, 1, sz * 0.1, 0, -sx * 0.1);
    for (let k = 0; k < 12; k++) { const a = k * Math.PI / 6; b.box(mx + Math.cos(a) * 0.9, my + 7.6 + Math.sin(a) * 0.9, mz + 0.3, 0.5, 1.5, 0.04, 0xd8dde2, 0, 0, a); }
    b.cyl(mx + 2.6, my, mz, 1.3, 1.3, 1.0, 0x9aa0a6, 12); w.addCircle(mx, mz, 1.0); w.addCircle(mx + 2.6, mz, 1.35);
    b.boxB(mx + 2.6, my, mz + 3.4, 4.2, 0.6, 1.0, 0x9a9590);   // bebedero
    // corral de palo a pique
    const cx = ex + 10, cz = ez + 12;
    for (let k = 0; k < 28; k++) { const a = k / 28 * 6.283; if (k === 7) continue; const x = cx + Math.cos(a) * 6, z = cz + Math.sin(a) * 6; b.boxB(x, gy(x, z), z, 0.3, 1.6 + (k % 2) * 0.2, 0.3, 0x6a4a2c); w.addCircle(x, z, 0.25); }
    // palenque, banco y fogón bajo el ombú
    b.boxB(ex - 9, gy(ex - 9, ez + 8), ez + 8, 4, 1.1, 0.14, C.wood); for (const s of [-2, 2]) b.boxB(ex - 9 + s, gy(ex - 9 + s, ez + 8), ez + 8, 0.16, 1.2, 0.16, C.wood);
    w.tree('ombu', ex - 7, ez + 2, 1.05); w.tree('euca', ex + 3, ez - 9, 1); w.tree('euca', ex + 6, ez - 10, 0.95); w.tree('euca', ex + 9, ez - 9.5, 1.05); w.tree('euca', ex + 12, ez - 10.5, 0.9);
    sign(w, 'ESTANCIA LA CUCHILLA', ex - 9, gy(ex - 9, ez + 17), ez + 17, 0, 7.4, 1.1, { bg: '#7a5a3c', border: '#ffe0a0' });
  }
  sign(w, 'POTREROS DE ARERUNGUÁ', 140, gy(140, 236), 236, 0, 7.6, 1.1, { bg: '#5a7a2e', border: '#ffe0a0' });

  // ---------- Tajamar (para que tome agua el ganado) ----------
  { const [tx, tz, tr] = TAJAMAR; for (let i = 0; i < 9; i++) { const a = i * 0.7 + 0.3, x = tx + Math.cos(a) * (tr + 1.2), z = tz + Math.sin(a) * (tr + 1.2) / 1.3; b.boxB(x, gy(x, z) - 0.1, z, 0.25, 0.9 + R() * 0.4, 0.25, 0x7a8a4a); } }

  // nidos de hornero sobre los postes y cuevas de lechucita
  NESTS.forEach(([x, z]) => { const y = terrainH(x, z) + 1.25; b.boxB(x, y - 1.25, z, 0.16, 1.25, 0.16, 0x6a4a2c); b.boxB(x, y, z, 0.42, 0.06, 0.42, 0x8a6a45); b.add(new THREE.SphereGeometry(0.26, 8, 6, 0, 6.3, 0, 1.9), 0xa9784a, x, y + 0.06, z, 1, 0.9, 1.1); });
  CUEVAS.forEach(([x, z]) => { b.add(new THREE.SphereGeometry(0.6, 8, 5, 0, 6.3, 0, 1.4), 0x8a7a5a, x, terrainH(x, z) - 0.1, z - 0.5, 1, 0.5, 1); b.add(new THREE.CircleGeometry(0.22, 8).rotateY(0), 0x2a2018, x, terrainH(x, z) + 0.12, z - 0.02, 1, 1, 1); });
  // ---------- Alambrados: postes cada 3 metros con tres hilos ----------
  const fence = (pts) => {
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, az] = pts[i], [cx, cz] = pts[i + 1], L = Math.hypot(cx - ax, cz - az), n = Math.max(1, Math.round(L / 3)), ry = Math.atan2(-(cz - az), cx - ax);
      let prev = null;
      for (let k = 0; k <= n; k++) {
        const x = ax + (cx - ax) * k / n, z = az + (cz - az) * k / n, h = terrainH(x, z);
        const skip = h < 0.4 || distPoly(x, z, ARROYO) < 4 || w.nearRoad(x, z, 2.2) || nearRail(x, z, 3);
        if (!skip) b.boxB(x, h, z, 0.14, 1.25, 0.14, k % 5 === 0 ? 0x6a4a2c : 0x8a6f4d);
        if (prev && !skip && !prev.skip) for (const hy of [0.45, 0.8, 1.15]) b.box((x + prev.x) / 2, (h + prev.h) / 2 + hy, (z + prev.z) / 2, Math.hypot(x - prev.x, z - prev.z), 0.025, 0.025, 0x9aa0a6, ry, 0, Math.atan2(h - prev.h, Math.hypot(x - prev.x, z - prev.z)));
        prev = { x, z, h, skip };
      }
    }
  };
  fence([[134, 240], [134, 140], [178, 140]]); fence([[178, 100], [178, 238]]); fence([[134, 140], [134, 30], [182, 30]]);
  fence([[226, 60], [286, 60]]); fence([[230, 160], [286, 160]]); fence([[226, 236], [286, 236]]);
  fence([[-40, 262], [130, 262]]);
  w.treesNew = w.trees.splice(t0);   // los árboles de la ampliación van en mallas aparte: así no se dibujan cuando la cámara mira a la ciudad
}

// ---------- Vía: durmientes y rieles a lo largo del recorrido; en la ciudad, a nivel de la calle con balasto y tablones ----------
const CALLES = [[53.4, 56.6], [67.4, 79.6], [90.4, 93.6]];   // calles que cruza la vía entre las manzanas (z)
function buildVia(w, bp) {
  const P = {}, Q = {}, enCalle = z => CALLES.some(([a, c]) => z > a - 0.2 && z < c + 0.2);
  const pick = s => s < S_CITY + 2 ? w.batch : bp;
  for (let s = 0.5; s <= RAIL_L; s += 1.1) { railXZ(s, P); if (s < S_CITY + 2 && enCalle(P.z)) continue; pick(s).box(P.x, railY(s) - 0.22, P.z, 0.32, 0.16, 2.4, 0x6a5038, railRot(P)); }
  for (let s = 0; s < RAIL_L; s += 3) {
    const s1 = Math.min(RAIL_L, s + 3); railXZ(s, P); railXZ(s1, Q);
    const ux = Q.x - P.x, uz = Q.z - P.z, L = Math.hypot(ux, uz), nx = -uz / L, nz = ux / L, y0 = railY(s), y1 = railY(s1), ry = -Math.atan2(uz, ux), rz = Math.atan2(y1 - y0, L);
    for (const o of [-0.72, 0.72]) pick(s).box((P.x + Q.x) / 2 + nx * o, (y0 + y1) / 2 - 0.08, (P.z + Q.z) / 2 + nz * o, L + 0.06, 0.14, 0.12, 0x8f969c, ry, 0, rz);
  }
  // en la ciudad: balasto entre calles y tablones en los cruces
  let z0 = RZ0 - 0.8;
  for (const [a, c] of CALLES) { w.batch.boxB(RX, 2.18, (z0 + a) / 2, 3.6, 0.08, a - z0, 0x8a8076); w.batch.boxB(RX, 2.2, (a + c) / 2, 2.2, 0.2, c - a, 0x5a4636); z0 = c; }
  // tope al final de la vía, al norte del andén
  { const y = 2.2, z = RZ0 - 0.6; for (const o of [-0.72, 0.72]) w.batch.boxB(RX + o, y, z, 0.3, 1.0, 0.3, 0x3a3f46); w.batch.boxB(RX, y + 0.7, z - 0.1, 2.6, 0.45, 0.35, 0xd62828); for (let k = -1; k <= 1; k += 2) w.batch.boxB(RX + k * 0.6, y + 0.7, z - 0.29, 0.5, 0.45, 0.02, 0xf4f4f4); w.addSolid(RX - 1.3, RX + 1.3, z - 0.3, z + 0.2, y + 1.2); }
  // pasos a nivel con los caminos de afuera: tablones y cruces de San Andrés
  const seen = [], rn = {};
  for (const line of w.roads) for (let i = 0; i < line.length - 1; i++) { const [ax, az] = line[i], [bx, bz] = line[i + 1], Lr = Math.hypot(bx - ax, bz - az);
    for (let t = 0; t <= Lr; t += 0.5) { const x = ax + (bx - ax) * t / Lr, z = az + (bz - az) * t / Lr; railNear(x, z, rn);
      if (rn.d > 0.5 || rn.s < S_CITY + 4 || seen.some(q => Math.abs(q - rn.s) < 12)) continue; seen.push(rn.s);
      railXZ(rn.s, P); const ry = railRot(P), y = railY(rn.s), nx = -P.dz, nz = P.dx;
      bp.box(P.x, y - 0.1, P.z, 4.2, 0.14, 2.0, 0x5a4636, ry);
      for (const sd of [-1, 1]) { const px = P.x + nx * sd * 3.4 - P.dx * sd * 2.6, pz = P.z + nz * sd * 3.4 - P.dz * sd * 2.6, py = w.groundAt(px, pz);
        bp.boxB(px, py, pz, 0.16, 3.2, 0.16, 0xf4f4f4); bp.box(px, py + 2.8, pz, 1.5, 0.18, 0.06, 0xf4f4f4, ry + Math.PI / 2, 0, 0.7); bp.box(px, py + 2.8, pz, 1.5, 0.18, 0.06, 0xd62828, ry + Math.PI / 2, 0, -0.7); }
    } }
}

// ---------- Estación de Salto (Ing. A. R. Wilkinson; área ferroviaria Monumento Histórico Nacional, 2010): en la ciudad, al este del centro ----------
// Armada a partir de fotos: dos plantas revocadas en gris arena, planta baja con buñas, ventanas altas arriba, cornisa
// gruesa, un ala baja con terraza y toldo celeste, el alero del andén sobre columnas de hierro verdes y el cartel «SALTO».
// Al lado, el edificio de dos plantas lindero; más al sur, la chimenea y los dos galpones contiguos.
function plaqueMesh(w, text, x, y, z, ry, sw, sh, o = {}) {
  const t = textTex(text, { w: 512, h: Math.max(64, Math.round(512 * sh / sw)), bg: o.bg || '#f4f4f4', fg: o.fg || '#1c1c1e', border: o.border || '#1c1c1e', size: 80 });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(sw, sh), new THREE.MeshStandardMaterial({ map: t, emissive: 0xffffff, emissiveMap: t, emissiveIntensity: o.glow != null ? o.glow : 0.25, roughness: 0.8 }));
  m.position.set(x, y, z); m.rotation.y = ry; w.scene.add(m); if (o.both) { const m2 = m.clone(); m2.rotation.y = ry + Math.PI; w.scene.add(m2); } return m;
}
export function buildEstacion(w) {
  const b = w.batch, Y = 2.2, STU = 0xc8c0ae, STUd = 0xb1a995, TRIM = 0xe6e0d0, WIN = 0x2d3a44, DOOR = 0x4a3426, GREEN = 0x2f5a3a;
  const box = (x0, x1, y0, y1, z0, z1, c) => b.boxB((x0 + x1) / 2, y0, (z0 + z1) / 2, x1 - x0, y1 - y0, z1 - z0, c);
  // suelo de la manzana de la estación y de las de los galpones
  for (const [z0, z1] of [[28.6, 53.4], [56.6, 67.4], [79.6, 90.4]]) box(5.6, 18.4, 1.3, 2.2, z0, z1, C.sidewalk);
  // edificio principal
  const x0 = 5.8, x1 = 11.8, z0 = 31.5, z1 = 50.5, H1 = 3.6, H2 = 7.0;
  box(x0, x1, Y, Y + H2, z0, z1, STU);
  for (let k = 1; k <= 5; k++) box(x0 - 0.03, x1 + 0.03, Y + k * 0.6 - 0.03, Y + k * 0.6 + 0.03, z0 - 0.03, z1 + 0.03, STUd);   // buñas de la planta baja
  box(x0 - 0.12, x1 + 0.12, Y + H1, Y + H1 + 0.3, z0 - 0.12, z1 + 0.12, TRIM);                                                     // faja entre pisos
  box(x0 - 0.25, x1 + 0.25, Y + H2, Y + H2 + 0.45, z0 - 0.25, z1 + 0.25, TRIM); box(x0, x1, Y + H2 + 0.45, Y + H2 + 0.95, z0, z1, STU);   // cornisa y pretil
  for (const xf of [x0 - 0.05, x1 + 0.05]) {
    for (let z = z0 + 1.2; z < z1 - 0.6; z += 2.1) { box(xf - 0.04, xf + 0.04, Y + 4.2, Y + 6.4, z - 0.6, z + 0.6, TRIM); box(xf - 0.06, xf + 0.06, Y + 4.35, Y + 6.25, z - 0.45, z + 0.45, WIN); box(xf - 0.1, xf + 0.1, Y + 6.45, Y + 6.6, z - 0.7, z + 0.7, TRIM);
      w.winBatch[1].add(new THREE.PlaneGeometry(0.85, 1.8), 0xffffff, xf + (xf > 9 ? 0.08 : -0.08), Y + 5.3, z, 1, 1, 1, 0, xf > 9 ? Math.PI / 2 : -Math.PI / 2, 0, 0); }
    for (let z = z0 + 2.25; z < z1 - 1; z += 4.2) box(xf - 0.07, xf + 0.07, Y + H1 + 0.3, Y + H2, z - 0.22, z + 0.22, TRIM);   // pilastras
  }
  for (let z = z0 + 1.5; z < z1 - 1; z += 3) { const door = Math.round((z - z0) / 3) % 2 === 0; box(x1 + 0.02, x1 + 0.08, Y, Y + (door ? 2.8 : 2.2), z - 0.6, z + 0.6, door ? DOOR : WIN); if (!door) box(x1 + 0.02, x1 + 0.06, Y, Y + 0.9, z - 0.6, z + 0.6, STU); }   // andén
  for (const z of [36, 38.5, 43.5, 46]) box(x0 - 0.08, x0 - 0.02, Y + 0.9, Y + 2.9, z - 0.55, z + 0.55, WIN);   // calle
  box(x0 - 0.1, x0 - 0.02, Y, Y + 3.0, 40, 42, DOOR); box(x0 - 0.5, x0, Y, Y + 0.15, 39.2, 42.8, 0xe6dccb); box(x0 - 0.3, x0 - 0.02, Y + 3.05, Y + 3.25, 39.6, 42.4, TRIM);
  plaqueMesh(w, 'ESTACIÓN SALTO', x0 - 0.1, Y + 3.9, 41, -Math.PI / 2, 3.6, 0.6, { bg: '#2f3a33', fg: '#f3e2b0', border: '#cfa24a', glow: 0.35 });
  plaqueMesh(w, 'MONUMENTO HISTÓRICO NACIONAL', x0 - 0.06, Y + 2.0, 38.0, -Math.PI / 2, 1.2, 0.36, { bg: '#3a3226', fg: '#f3e2b0', border: '#cfa24a' });
  b.cyl(x1 + 0.1, Y + 3.1, 41, 0.55, 0.55, 0.1, 0xf4f1ea, 16, 0, 0, Math.PI / 2); b.cyl(x1 + 0.06, Y + 3.1, 41, 0.62, 0.62, 0.08, 0x2b2d33, 16, 0, 0, Math.PI / 2);   // reloj
  w.addSolid(x0, x1, z0, z1); w.addOcc(x0, x1, z0, z1, Y + H2 + 1);
  // ala baja al norte, con terraza, baranda y el toldo celeste
  box(x0, x1, Y, Y + 3.2, 28.9, z0, STU); box(x0 - 0.1, x1 + 0.1, Y + 3.2, Y + 3.4, 28.8, z0, TRIM);
  for (let z = 29.1; z < z0; z += 0.5) box(x1 - 0.06, x1 + 0.06, Y + 3.4, Y + 4.2, z - 0.05, z + 0.05, TRIM); box(x1 - 0.1, x1 + 0.1, Y + 4.2, Y + 4.32, 28.9, z0, TRIM);
  for (let x = x0 + 0.3; x < x1; x += 0.5) box(x - 0.05, x + 0.05, Y + 3.4, Y + 4.2, 28.95, 29.05, TRIM); box(x0, x1, Y + 4.2, Y + 4.32, 28.9, 29.1, TRIM);
  for (const [xx, zz] of [[7.2, 30], [9.4, 29.6], [10.8, 30.4]]) { box(xx - 0.25, xx + 0.25, Y + 3.4, Y + 3.9, zz - 0.25, zz + 0.25, 0x9a6b4b); b.sph(xx, Y + 4.15, zz, 0.32, 0x4f9a3f); }   // macetas
  b.box(x1 - 1.6, Y + 5.0, (28.9 + z0) / 2 + 0.6, 3.4, 0.08, 2.6, 0x2a8bd8, 0, 0, -0.32);
  w.addSolid(x0, x1, 28.9, z0); w.addOcc(x0, x1, 28.9, z0, Y + 4.4);
  // edificio de dos plantas lindero, al sur
  box(x0, 11.2, Y, Y + 6.6, 51.1, 53.2, 0xd6a99a); box(x0 - 0.15, 11.35, Y + 6.6, Y + 6.95, 51, 53.3, TRIM);
  for (const xf of [x0 - 0.05, 11.25]) for (const z of [51.8, 52.6]) for (const yy of [0.9, 4.2]) box(xf - 0.03, xf + 0.03, Y + yy, Y + yy + 1.7, z - 0.28, z + 0.28, WIN);
  w.addSolid(x0, 11.2, 51.1, 53.2); w.addOcc(x0, 11.2, 51.1, 53.2, Y + 7);
  // andén con su alero sobre columnas de hierro verdes
  const PY = 2.95, AX0 = x1, AX1 = 14.35, AZ0 = 29.8, AZ1 = 54;
  box(AX0, AX1, Y - 0.9, PY, AZ0, AZ1, 0xbdb4a2); box(AX1 - 0.3, AX1, PY, PY + 0.01, AZ0, AZ1, 0xffd23f); w.addPlatform(AX0, AX1, AZ0, AZ1, PY);
  for (let z = AZ0 + 1.6; z < AZ1; z += 3.6) { box(13.75, 13.95, PY, PY + 2.9, z - 0.1, z + 0.1, GREEN); b.box(13.3, PY + 2.75, z, 1.0, 0.08, 0.08, GREEN, 0, 0, 0.5); }
  b.box(12.95, PY + 3.05, (AZ0 + AZ1) / 2, 3.1, 0.1, AZ1 - AZ0, 0x7d858c, 0, 0, -0.12); box(14.45, 14.52, PY + 2.55, PY + 2.95, AZ0, AZ1, 0xe8e0cc);
  for (const z of [34, 39, 45, 49]) { box(12.2, 12.7, PY, PY + 0.45, z - 1, z + 1, C.wood); box(11.92, 12.0, PY + 0.45, PY + 0.95, z - 1, z + 1, C.wood); }
  for (const z of [30.6, 53.2]) { for (const o of [-0.95, 0.95]) box(12.9 - 0.05, 12.9 + 0.05, PY, PY + 2.2, z + o - 0.05, z + o + 0.05, 0x2b2d33); plaqueMesh(w, 'SALTO', 12.9, PY + 2.0, z, Math.PI / 2, 2.2, 0.55, { both: true }); }
  w.addInter('v:estacion', 13.1, 42, { console: false, h: 3.6, y: PY, r: 3.4 });
  // chimenea de ladrillo y casa de calderas, en la manzana siguiente
  box(5.8, 10.4, Y, Y + 3.6, 58, 63.5, 0xa65a3f); gableZ(b, 8.1, Y + 3.6, 60.75, 5.9, 1.3, 4.9, 0x8a4b33); w.addSolid(5.8, 10.4, 58, 63.5); w.addOcc(5.8, 10.4, 58, 63.5, Y + 5);
  box(10.8, 12.6, Y, Y + 1.6, 64.2, 66, 0x963f2b); b.cyl(11.7, Y + 1.6, 65.1, 0.5, 0.8, 11, 0x963f2b, 10); b.cyl(11.7, Y + 12.6, 65.1, 0.62, 0.55, 0.5, 0x6e2c1e, 10); w.addSolid(10.8, 12.6, 64.2, 66, Y + 13);
  for (let k = 0; k < 4; k++) box(6.4, 9.8, Y + k * 0.18, Y + k * 0.18 + 0.16, 64.6 + (k % 2) * 0.2, 65.8 + (k % 2) * 0.2, 0x6a5038);   // durmientes apilados
  // los dos galpones contiguos
  for (const [gx0, gx1, roof] of [[5.8, 9.6, 0x8a4b33], [9.7, 13.5, 0x9aa0a4]]) { box(gx0, gx1, Y, Y + 4.2, 80.2, 89.8, 0xa65a3f); gableZ(b, (gx0 + gx1) / 2, Y + 4.2, 85, 9.9, 1.6, gx1 - gx0 + 0.4, roof);
    box((gx0 + gx1) / 2 - 1.1, (gx0 + gx1) / 2 + 1.1, Y, Y + 3.2, 80.12, 80.2, 0x3a2e26); for (const z of [82.5, 85, 87.5]) box(gx1 - 0.04 + 0.08, gx1 + 0.06, Y + 2.2, Y + 3.2, z - 0.4, z + 0.4, WIN); }
  w.addSolid(5.8, 13.5, 80.2, 89.8); w.addOcc(5.8, 13.5, 80.2, 89.8, Y + 6);
  plaqueMesh(w, 'GALPONES DEL FERROCARRIL', 9.6, Y + 4.9, 80.0, Math.PI, 3.2, 0.42, { bg: '#3a3226', fg: '#f3e2b0', border: '#cfa24a' });
}
const gableZ = (b, x, y0, z, len, h, wid, color) => { const sy = h / 1.5; b.add(TRI_Z, color, x, y0 + 0.5 * sy, z, wid / 1.732, sy, len); };
const TRI_Z = new THREE.CylinderGeometry(1, 1, 1, 3).rotateX(-Math.PI / 2);
