// Ampliación de la maqueta: la Cuchilla de Haedo con sus cerros chatos de basalto, los Potreros de Arerunguá
// (pradera con su arroyo, monte de quebrada, tajamar y estancia), la estación del ferrocarril con su vía hacia el
// interior y el río Daymán con su monte ribereño. Todo queda al este de x 130 o al sur de z 210.
import * as THREE from 'three';
import { rng, lerp, smooth, clamp, distPoly } from './util.js';
import { RAIL, ESTACION, ARROYO, DAYMAN, TAJAMAR, MESAS, terrainH } from './terrain.js';
import { C, Batch } from './world.js';
import { sign } from './sectors.js';

export const railY = x => 2.6 + smooth(-40, 140, x) * 1.2 + 0.3;   // altura del riel (sobre el terraplén)
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
  w.road([[2, 226], [-8, 230], [-18, 232.5]], 3.0, ASPH);
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

  // ---------- Vía del ferrocarril: durmientes, rieles y puente de hierro sobre el arroyo ----------
  const bx = PUENTE_ARROYO;
  for (let x = RAIL.x0; x <= RAIL.x1; x += 1.1) b.boxB(x, railY(x) - 0.3, RAIL.z, 0.32, 0.16, 2.4, 0x6a5038);
  for (let x = RAIL.x0; x < RAIL.x1; x += 6) for (const s of [-0.72, 0.72]) b.box(x + 3, railY(x + 3) - 0.08, RAIL.z + s, 6.05, 0.14, 0.12, 0x8f969c, 0, 0, Math.atan2(railY(x + 6) - railY(x), 6) );
  { const x0 = bx - 9, x1 = bx + 9, y = railY(bx) - 0.34;
    b.boxB(bx, y - 0.6, RAIL.z, x1 - x0, 0.6, 3.4, 0x5d6268);
    for (const s of [-1.6, 1.6]) { b.boxB(bx, y + 2.4, RAIL.z + s, x1 - x0, 0.22, 0.22, 0x4e555c); b.boxB(bx, y, RAIL.z + s, x1 - x0, 0.22, 0.22, 0x4e555c);
      for (let k = 0; k < 6; k++) { const xa = x0 + k * 3; b.add(new THREE.BoxGeometry(0.16, 3.6, 0.16), 0x4e555c, xa + 1.5, y + 1.2, RAIL.z + s, 1, 1, 1, 0, 0, (k % 2 ? 1 : -1) * 0.69); b.boxB(xa, y, RAIL.z + s, 0.2, 2.6, 0.2, 0x4e555c); } }
    for (const xa of [x0 + 2, x1 - 2]) b.boxB(xa, -2, RAIL.z, 1.6, y - 0.6 + 2, 3.2, 0x9c8f7f);
  }
  // paso a nivel de la ruta con la cruz de San Andrés
  for (const s of [-1, 1]) { const x = 4 + s * 3.4, z = RAIL.z - s * 4; b.boxB(x, gy(x, z), z, 0.16, 3.2, 0.16, 0xf4f4f4); b.box(x, gy(x, z) + 2.8, z, 1.5, 0.18, 0.06, 0xf4f4f4, 0, 0, 0.7); b.box(x, gy(x, z) + 2.8, z, 1.5, 0.18, 0.06, 0xd62828, 0, 0, -0.7); }

  // ---------- Estación del ferrocarril (ladrillo, alero de madera sobre el andén y carteles «SALTO») ----------
  { const [sx, sz] = ESTACION, y = gy(sx, sz) + 0.05, wall = 0xa65a3f, trim = 0xf2ead8;
    b.boxB(sx, y - 0.6, sz + 5.1, 34, 1.4, 4.6, 0xc9c0ad);                          // andén
    w.addPlatform(sx - 17, sx + 17, sz + 2.8, sz + 7.4, y + 0.8);
    b.boxB(sx, y + 0.8, sz + 7.15, 34, 0.02, 0.18, 0xffd23f);                         // línea amarilla de seguridad
    b.boxB(sx, y, sz - 0.4, 15, 4.6, 5.6, wall); b.boxB(sx, y, sz - 0.4, 15.4, 0.6, 6, 0x7b6a5a);
    b.boxB(sx, y + 4.6, sz - 0.4, 15.6, 0.35, 6.2, trim);
    gable(b, sx, y + 4.95, sz - 0.4, 15.8, 2.0, 6.8, 0x5f6a73);
    for (let k = -3; k <= 3; k++) { const x = sx + k * 2.05; b.boxB(x, y + 1.1, sz + 2.42, 1.0, 2.2, 0.08, 0x2d4a5e); b.boxB(x, y + 3.3, sz + 2.42, 1.2, 0.18, 0.12, trim); b.boxB(x, y + 1.05, sz - 3.22, 1.0, 2.2, 0.08, k === 0 ? 0x5b4636 : 0x2d4a5e); }
    for (const k of [-1, 1]) b.boxB(sx + k * 7.7, y, sz - 0.4, 0.4, 4.6, 6.0, trim);
    // alero sobre el andén con columnas de hierro
    b.box(sx, y + 4.4, sz + 4.9, 30, 0.14, 5.4, 0x7a5a3c, 0, -0.12);
    for (let k = -3; k <= 3; k++) { const x = sx + k * 4.6; b.boxB(x, y + 0.8, sz + 6.5, 0.16, 3.4, 0.16, 0x2f4a3a); b.box(x, y + 4.0, sz + 6.1, 0.1, 0.1, 1.0, 0x2f4a3a, 0, 0.7); }
    for (let k = -14; k <= 14; k += 2) b.boxB(sx + k, y + 4.05, sz + 7.55, 1.6, 0.3, 0.05, 0xf2ead8);
    w.addSolid(sx - 7.6, sx + 7.6, sz - 3.3, sz + 2.5); w.addOcc(sx - 7.6, sx + 7.6, sz - 3.3, sz + 2.5, y + 7.2);
    // bancos, reloj y carteles con el nombre de la estación
    for (const k of [-11, -5, 5, 11]) { b.boxB(sx + k, y + 0.8, sz + 4.2, 2.2, 0.45, 0.6, C.wood); b.boxB(sx + k, y + 1.25, sz + 3.9, 2.2, 0.5, 0.08, C.wood); }
    b.cyl(sx, y + 4.9, sz + 2.6, 0.62, 0.62, 0.12, 0xf4f1ea, 16, Math.PI / 2); b.cyl(sx, y + 4.9, sz + 2.54, 0.7, 0.7, 0.1, 0x2b2d33, 16, Math.PI / 2);
    for (const k of [-15.5, 15.5]) { b.boxB(sx + k, y + 0.8, sz + 6.4, 0.14, 2.2, 0.14, 0x2b2d33); }
    sign(w, 'SALTO', sx - 15.5, y + 0.35, sz + 6.4, 0, 3.4, 0.9, { bg: '#1c1c1e', fg: '#ffffff', border: '#ffffff' });
    sign(w, 'SALTO', sx + 15.5, y + 0.35, sz + 6.4, 0, 3.4, 0.9, { bg: '#1c1c1e', fg: '#ffffff', border: '#ffffff' });
    sign(w, 'ESTACIÓN DEL FERROCARRIL', sx - 1, gy(sx - 1, sz - 8.5), sz - 8.5, 0, 8.2, 1.1, { bg: '#7a2e1d', border: '#ffd23f' });
    for (const k of [-12, 0, 12]) w.lamp(sx + k, sz - 6, 0);
    w.tree('palm', sx - 11, sz - 6.5, 0.9); w.tree('palm', sx + 11, sz - 6.5, 0.9); w.tree('jaca', sx + 18, sz - 3, 0.75);
    w.addInter('v:estacion', sx + 3, sz + 5.4, { console: false, h: 3.6, y: y + 0.8, r: 3.6 });
  }

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
  const nearRail = (x, z, d) => Math.abs(z - RAIL.z) < d && x > RAIL.x0 - 4;
  const avoid = (x, z) => nearRail(x, z, 5) || w.nearRoad(x, z, 3.5) || Math.hypot(x - ESTANCIA[0], z - ESTANCIA[1]) < 16 || Math.hypot(x - TAJAMAR[0], z - TAJAMAR[1]) < 13 || CAMS.some(c => Math.hypot(c[0] - x, c[1] - z) < 3.2) || Math.hypot(x - BIOLOGA[0], z - BIOLOGA[1]) < 4;
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
