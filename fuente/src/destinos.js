// Destinos de la Gira por el Uruguay: cuatro maquetas, cada una armada a partir de fotos y datos del lugar real.
// Quedan lejos hacia el este (x ≥ 1500), fuera de la vista desde Salto, y solo se muestra la del viaje en curso.
// Como toda maqueta, las distancias están comprimidas; donde algo real queda lejos, un cartel dice a cuánto está.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { lerp, smooth, clamp, fbm, noise2, rng } from './util.js';
import { DEST } from './terrain.js';
import { Batch, C, textTex } from './world.js';
import { animalParts } from './animales.js';

const TRI_X = new THREE.CylinderGeometry(1, 1, 1, 3).rotateX(-Math.PI / 2).rotateY(Math.PI / 2);
const TRI_Z = new THREE.CylinderGeometry(1, 1, 1, 3).rotateX(-Math.PI / 2);
const ROCK = new THREE.IcosahedronGeometry(1, 1);
const gableX = (b, x, y0, z, len, h, wid, col) => { const sy = h / 1.5; b.add(TRI_X, col, x, y0 + 0.5 * sy, z, len, sy, wid / 1.732); };
const gableZ = (b, x, y0, z, len, h, wid, col) => { const sy = h / 1.5; b.add(TRI_Z, col, x, y0 + 0.5 * sy, z, wid / 1.732, sy, len); };
const HALF = 90;
const face = (u0, v0, u1, v1) => Math.atan2(u1 - u0, v1 - v0);
function segD(px, pz, ax, az, bx, bz) { const dx = bx - ax, dz = bz - az, L = dx * dx + dz * dz || 1, t = clamp(((px - ax) * dx + (pz - az) * dz) / L, 0, 1); return [Math.hypot(px - ax - dx * t, pz - az - dz * t), t]; }
const rectD = (u, v, u0, u1, v0, v1) => Math.hypot(Math.max(u0 - u, 0, u - u1), Math.max(v0 - v, 0, v - v1));
const pads = (h, u, v, list, r = 4) => { for (const [u0, u1, v0, v1, t] of list) { const d = rectD(u, v, u0, u1, v0, v1); if (d < r) h = lerp(t, h, smooth(0, r, d)); } return h; };
const grass = (u, v) => { const k = noise2(u * 0.09 + 11, v * 0.09); return k > 0.62 ? 0x9bb85c : k < 0.36 ? 0x74a548 : 0x86b052; };

// =====================================================================================================
// 1. Rincón del Bonete (represa Dr. Gabriel Terra), sobre el río Negro, entre Tacuarembó y Durazno.
// Fotos aéreas: un muro largo de hormigón de orilla a orilla, el vertedero con sus pilas y compuertas en el medio,
// grúas pórtico amarillas sobre el coronamiento, la sala de máquinas al pie del muro con la playa de 150 kV al lado,
// el lago enorme aguas arriba (con islas y playas) y el río angosto, entre monte, aguas abajo.
// =====================================================================================================
const BON = { lvU: 6, crest: 8.6, spS: -30, spN: 22, phN: 44, vS: -64, vN: 50 };
const bSS = u => -60 - 0.33 * Math.max(0, u - 14) + 5 * Math.sin(u * 0.09);          // orilla sur del lago (Durazno)
const bSN = u => 47 + 0.22 * Math.max(0, u - 14) + 6 * Math.sin(u * 0.07 + 1);       // orilla norte (Tacuarembó)
const B_ISL = [[56, -16, 9], [78, 24, 5.5], [40, -44, 4]];
const bRc = u => lerp(-4, 7, smooth(-40, 4, u)) + 7 * Math.sin(u * 0.05 + 0.6) * smooth(-10, -50, u);   // eje del río aguas abajo
const bRw = u => lerp(17, 37, smooth(-34, 2, u));
const B_PADS = [[-18, 2, 44, 54, 3.6], [-42, -18, 52, 72, 3.8], [-86, -46, 62, 88, 4.2], [-80, -60, 36, 50, 3.9]];
function bonH(u, v) {
  const n = fbm(u * 0.035 + 5, v * 0.035) - 0.5;
  let h;
  if (u >= 10) {
    const uu = Math.max(u, 14), d = Math.min(v - bSS(uu), bSN(uu) - v);   // d > 0: dentro del lago
    const land = 6.7 + 3.2 * smooth(0, 16, -d) + n * 2.4;
    h = lerp(land, 5.3 - 8.5 * smooth(0, 26, d), smooth(-1.5, 2.5, d));
    for (const [x, z, r] of B_ISL) { const di = Math.hypot(u - x, v - z); h = Math.max(h, 5.2 + (3.4 + n * 1.2) * smooth(r, 0, di)); }
  } else {
    const uc = Math.min(u, 6), dc = Math.abs(v - bRc(uc)) - bRw(uc);
    const land = lerp(3.9, 8.4, smooth(-6, 10, u)) + n * 1.8 * smooth(-4, -24, u);
    h = lerp(-2.6 + n * 0.6, land, smooth(-2, 4, dc));
  }
  return pads(h, u, v, B_PADS);
}
const bonLv = u => u >= 12 ? BON.lvU : 0;
function bonCol(u, v, h, ny) {
  const lv = bonLv(u);
  if (h < lv - 0.15) return 0x4a6a62;
  if (h < lv + 0.8) return u >= 12 ? 0xd8c79c : 0x8f8466;
  if (rectD(u, v, -42, -18, 52, 72) < 0.5) return 0xb7b1a3;
  if (ny < 0.78) return 0x7d6a50;
  return grass(u, v);
}

// =====================================================================================================
// 2. Fray Bentos: el Paisaje Industrial (ex frigorífico Anglo, Patrimonio Mundial) sobre el río Uruguay.
// La cámara de frío de siete pisos frente al agua, el muelle de madera con sus grúas, la chimenea de ladrillo de 1906,
// las naves de techos de chapa, la plaza con el monumento a Liebig, el barrio Anglo y la Casa Grande en la loma.
// Más allá, la planta de celulosa de UPM (a 5 km de la ciudad) y el proyecto Kahirós de hidrógeno verde (ruta 2).
// =====================================================================================================
const fShW = v => -52 + 3 * Math.sin(v * 0.05) - 7 * Math.exp(-(((v + 32) / 15) ** 2));   // costa oeste (el río Uruguay)
const fShN = u => -74 + 3 * Math.sin(u * 0.07) + 6 * smooth(10, -40, u);                   // costa norte, río arriba
const F_PADS = [[46, 88, 30, 88, 2.6], [28, 88, -64, -38, 2.6], [30, 50, 10, 24, 2.5], [-50, 2, -52, 10, 2.5]];
function frayH(u, v) {
  const d = Math.min(u - fShW(v), v - fShN(u)), n = fbm(u * 0.03, v * 0.03) - 0.5;
  const land = 2.4 + n * 1.2 * smooth(6, 30, d) + 3.4 * smooth(14, 32, v) * smooth(32, 4, u);   // loma de la Casa Grande, al sur
  const h = lerp(-4.5, land, smooth(-5, 2.5, d));
  return pads(h, u, v, F_PADS, 5);
}
function frayCol(u, v, h, ny) {
  if (h < -0.1) return 0x5a6a5a;
  if (h < 1.0) return 0xb9a27c;
  if (rectD(u, v, -50, 2, -52, 10) < 0.5 || rectD(u, v, 28, 88, -64, -38) < 0.5) return noise2(u * 0.2, v * 0.2) > 0.5 ? 0xa39b8c : 0x9a9284;
  if (ny < 0.8) return 0x8a7a5a;
  return grass(u, v);
}

// =====================================================================================================
// 3. Valle del Lunarejo (Rivera): cerros chatos de basalto con paredones, un valle ancho de pradera con ganado,
// el arroyo Lunarejo con su monte de galería, quebradas de monte casi selvático y una cascada al fondo de una de ellas.
// El Centro de Visitantes queda arriba, junto a la Ruta 30 (km 237), y un sendero baja al valle.
// =====================================================================================================
const lc = v => -4 + 6 * Math.sin(v * 0.03);                                                  // eje del valle
const lac = v => lc(v) + 7 * Math.sin(v * 0.075 + 1) + 3 * Math.sin(v * 0.19);               // arroyo Lunarejo
const LQ = { m: [-31, -42], a: [-70, -50] };                                                 // quebrada lateral: boca y anfiteatro de la cascada
const LP = { a: [44, -34], b: [24, 32] };                                                    // sendero que baja la ladera este
const roadU = v => lc(v) + 66;                                                               // Ruta 30, arriba en la meseta
const L_PADS = [[42, 58, -16, 4, 24.2], [70, 86, 14, 28, 24.2], [33, 40, -52, -40, 24.2]];
const lunAmph = (u, v) => Math.hypot(u - LQ.a[0], v - LQ.a[1]);
function lunH(u, v) {
  const dv = u - lc(v), n = fbm(u * 0.05, v * 0.05) - 0.5, nr = noise2(u * 0.18, v * 0.18) - 0.5;
  let h = 2.6 + n * 0.8
    + 6 * smooth(24, 35, dv) + 15.5 * smooth(34, 41, dv) * (1 + nr * 0.06)
    + 5.5 * smooth(-24, -35, dv) + 14 * smooth(-34, -41, dv) * (1 + nr * 0.06)
    + smooth(41, 52, Math.abs(dv)) * n * 1.4;
  const db = Math.hypot(u - 16, (v + 64) * 0.9); h = Math.max(h, 2.6 + 4 * smooth(16, 10, db) + 9.5 * smooth(9.5, 7.5, db));   // cerro chato aislado
  const da = Math.abs(u - lac(v)); h = lerp(0.3 + nr * 0.3, h, smooth(2.4, 4.6, da));                                        // cauce del arroyo
  const [dq, t] = segD(u, v, ...LQ.m, ...LQ.a), fq = lerp(2.4, 9.6, t), wq = lerp(6, 4, t);
  h = Math.min(h, lerp(fq + nr * 0.6, h, smooth(wq, wq + 7, dq)));
  const dA = lunAmph(u, v); h = Math.min(h, lerp(9.6, h, smooth(7, 9.5, dA))); if (dA < 4.5) h = Math.min(h, lerp(7.6, 9.6, smooth(2.2, 4.5, dA)));
  const [dp, tp] = segD(u, v, ...LP.a, ...LP.b); h = lerp(lerp(24.1, 2.8, tp), h, smooth(2.4, 4.8, dp));
  const dr = Math.abs(u - roadU(v)); if (dr < 7) h = lerp(24.2, h, smooth(3.5, 7, dr));
  return pads(h, u, v, L_PADS, 3);
}
const lunWater = (u, v) => lunAmph(u, v) < 8 ? 9.3 : 1.3;
function lunCol(u, v, h, ny) {
  if (h < lunWater(u, v) - 0.1) return 0x3d5b4a;
  const k = noise2(u * 0.21, v * 0.21);
  if (ny < 0.55) return k > 0.62 ? 0x6e5444 : k > 0.4 ? 0x5e5048 : 0x4f4741;   // paredones de basalto
  if (Math.abs(u - lac(v)) < 3.6 || (lunAmph(u, v) < 8.5 && h < 10.5)) return k > 0.5 ? 0x7b746a : 0x6a645b;
  if (ny < 0.8) return 0x4f7a3e;
  if (Math.abs(u - roadU(v)) < 3.2) return 0x8a8476;
  if (h > 20) return k > 0.55 ? 0xa3b25e : 0x93ab55;
  return grass(u, v);
}

// =====================================================================================================
// 4. Cabo Polonio (Rocha): una isla soldada a la costa. La punta de granito rosado con el faro de ladrillo de 1881
// (anillos blancos, linterna con cúpula roja), la lobería en las rocas, las islas de Torres enfrente (Rasa, Encantada
// e Islote), el pueblo sin calles ni red eléctrica entre la playa Sur y la playa Norte, y detrás las dunas móviles.
// =====================================================================================================
const pS = u => lerp(46, 15, smooth(-60, 50, u)) + 4 * Math.sin(u * 0.05 + 1);
const pN = u => lerp(-52, -20, smooth(-40, 50, u)) - 3 * Math.sin(u * 0.06);
const pT = v => 60 - 4 * (v / 16) ** 2 + 2 * Math.sin(v * 0.4);
const P_ISL = [[76, 64, 9, 3.0], [58, 80, 6, 1.2], [86, 36, 3.6, 2.2]];   // Encantada, Rasa e Islote
const P_FARO = [44, 1];
const P_PADS = [[38, 50, -5, 8, 4.0], [-40, -27, -4, 10, 2.8]];
const polDl = (u, v) => Math.min(v - pN(u), pS(u) - v, pT(v) - u);
const polRock = (u, v) => smooth(17, 9, Math.hypot(u - 48, (v + 1) * 1.1));
function polH(u, v) {
  const n = fbm(u * 0.04 + 3, v * 0.05) - 0.5, dl = polDl(u, v), rock = polRock(u, v);
  const dune = smooth(-22, -46, u) * (0.45 + 0.55 * (0.5 + 0.5 * Math.sin(u * 0.13 + 1.6 * Math.sin(v * 0.05) + v * 0.02))) * (6 + 10 * smooth(-36, -76, u));
  const land = 1.9 + n * 0.9 + dune + rock * (1.6 + 1.6 * (noise2(u * 0.35, v * 0.35) - 0.3));
  let h = dl >= 0 ? lerp(0.1 + dl * 0.15 + rock * 1.2, land, smooth(2.5, Math.max(3.5, 12 - rock * 8), dl)) : 0.1 + dl * (0.22 + rock * 0.4);
  h = Math.max(h, -7);
  for (const [x, z, r, top] of P_ISL) { const di = Math.hypot(u - x, v - z); if (di < r + 2) h = Math.max(h, top * smooth(r, r * 0.25, di) + (noise2(u * 0.5, v * 0.5) - 0.5) * 0.8 * smooth(r, 0, di) - 0.3); }
  return pads(h, u, v, P_PADS, 4);
}
function polCol(u, v, h, ny) {
  if (h < -0.1) return 0x3a6f80;
  const k = noise2(u * 0.3, v * 0.3), isl = P_ISL.some(([x, z, r]) => Math.hypot(u - x, v - z) < r + 0.5);
  if (polRock(u, v) > 0.35 || isl) return ny < 0.75 ? 0x9c7f74 : k > 0.6 ? 0xd2b6a6 : k > 0.35 ? 0xc4a596 : 0xb08e80;   // granito rosado
  if (h < 1.3 && polDl(u, v) < 9) return 0xe6d3a3;
  if (u < -24) return noise2(u * 0.07, v * 0.07) > 0.7 ? 0xb7b46e : ny < 0.93 ? 0xd4bd88 : k > 0.5 ? 0xecdcaf : 0xe2cd9b;   // dunas
  return k > 0.62 ? 0xb4b870 : k > 0.35 ? 0xa7b56a : 0x97aa5e;
}

export const DESTINOS = [
  { k: 'negro', name: 'Rincón del Bonete', where: 'Río Negro, entre Tacuarembó y Durazno', via: 'Viajando a Rincón del Bonete, por la ruta 5…', ox: 1500,
    h: bonH, water: u => bonLv(u), col: bonCol, pool: [[12.5, HALF, -HALF, HALF, BON.lvU], [-HALF, 7, -HALF, HALF, 0]],
    spawn: [-64, 46, 0.9], stop: [-70, 42], npc: [-4, 49.5, Math.PI] },
  { k: 'fray', name: 'Fray Bentos', where: 'Río Negro, a orillas del río Uruguay', via: 'Viajando a Fray Bentos…', ox: 2400,
    h: frayH, water: () => 0, col: frayCol, pool: [[-HALF, HALF, -HALF, -58, 0], [-HALF, -40, -58, HALF, 0]],
    spawn: [36, 20, -1.4], stop: [40, 14], npc: [5, 10, -2.4] },
  { k: 'lunarejo', name: 'Valle del Lunarejo', where: 'Rivera, junto a la Ruta 30', via: 'Viajando al Valle del Lunarejo, por la Ruta 30…', ox: 3300,
    h: lunH, water: lunWater, col: lunCol, pool: [[-30, 22, -HALF, HALF, 1.3], [-80, -61, -59, -41, 9.3]],
    spawn: [74, 25, -1.6], stop: [78, 20], npc: [44, -1, -1.2] },
  { k: 'polonio', name: 'Cabo Polonio', where: 'Rocha, en la costa atlántica', via: 'Viajando a Cabo Polonio… el último tramo, por las dunas, es en camión.', ox: 4200,
    h: polH, water: () => 0, col: polCol, pool: [[-HALF, HALF, -HALF, HALF, 0]],
    spawn: [-30, 6, 1.3], stop: [-34, 3], npc: [6, 17.5, 3.0], stopSign: 'CAMIONES 4×4 · TERMINAL' }
];
export const destAt = x => DESTINOS[clamp(Math.round((x - 1500) / 900), 0, DESTINOS.length - 1)];

export function buildDestinos(w) {
  const _c = new THREE.Color();
  w.destH = (x, z) => { const d = destAt(x); return d.h(x - d.ox, z); };
  DEST.water = (x, z) => { const d = destAt(x); return d.water(x - d.ox, z); };
  const aniMat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.9 });
  const glow = new THREE.MeshBasicMaterial({ color: 0xcfefff, transparent: true, opacity: 0.72, side: THREE.DoubleSide, depthWrite: false });
  for (const d of DESTINOS) {
    const grp = new THREE.Group(); grp.visible = false; w.scene.add(grp); d.group = grp;
    const N = 110, g = new THREE.PlaneGeometry(HALF * 2, HALF * 2, N, N); g.rotateX(-Math.PI / 2);
    const p = g.attributes.position; for (let i = 0; i < p.count; i++) p.setY(i, d.h(p.getX(i), p.getZ(i)));
    g.computeVertexNormals(); const nor = g.attributes.normal, col = new Float32Array(p.count * 3);
    for (let i = 0; i < p.count; i++) { _c.set(d.col(p.getX(i), p.getZ(i), p.getY(i), nor.getY(i))); _c.offsetHSL(0, 0, (noise2(p.getX(i) * 0.3, p.getZ(i) * 0.3) - 0.5) * 0.05); col[i * 3] = _c.r; col[i * 3 + 1] = _c.g; col[i * 3 + 2] = _c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const tm = new THREE.Mesh(g, w.mats.terrain); tm.position.x = d.ox; tm.receiveShadow = true; grp.add(tm);
    // bordes cortados de la maqueta y zócalo
    const sk = [], skc = [];
    const edge = (ax, az, bx, bz) => { for (let i = 0; i < N; i++) { const t0 = i / N, t1 = (i + 1) / N, x0 = lerp(ax, bx, t0), z0 = lerp(az, bz, t0), x1 = lerp(ax, bx, t1), z1 = lerp(az, bz, t1), h0 = Math.max(d.h(x0, z0), d.water(x0, z0)), h1 = Math.max(d.h(x1, z1), d.water(x1, z1));
      sk.push(x0 + d.ox, h0, z0, x1 + d.ox, h1, z1, x1 + d.ox, -9, z1, x0 + d.ox, h0, z0, x1 + d.ox, -9, z1, x0 + d.ox, -9, z0); for (let k = 0; k < 6; k++) { _c.set(k === 0 || k === 1 || k === 3 ? 0x8a6540 : 0x4a3524); skc.push(_c.r, _c.g, _c.b); } } };
    edge(-HALF, HALF, HALF, HALF); edge(HALF, HALF, HALF, -HALF); edge(HALF, -HALF, -HALF, -HALF); edge(-HALF, -HALF, -HALF, HALF);
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(sk, 3)); sg.setAttribute('color', new THREE.Float32BufferAttribute(skc, 3)); sg.computeVertexNormals();
    grp.add(new THREE.Mesh(sg, w.skirtMat));
    const plinth = new THREE.Mesh(new THREE.BoxGeometry(HALF * 2 + 8, 3, HALF * 2 + 8), new THREE.MeshStandardMaterial({ color: 0x3b2a20, roughness: 0.8 })); plinth.position.set(d.ox, -10.5, 0); grp.add(plinth);
    // agua: un espejo por tramo, con su profundidad para el color de la orilla
    for (const [u0, u1, v0, v1, lv] of d.pool) {
      const nx = Math.max(4, Math.round((u1 - u0) / 1.8)), nz = Math.max(4, Math.round((v1 - v0) / 1.8)), wg = new THREE.PlaneGeometry(u1 - u0, v1 - v0, nx, nz); wg.rotateX(-Math.PI / 2);
      const cx = (u0 + u1) / 2, cz = (v0 + v1) / 2, wp = wg.attributes.position, a = new Float32Array(wp.count);
      for (let i = 0; i < wp.count; i++) a[i] = clamp(lv - d.h(wp.getX(i) + cx, wp.getZ(i) + cz), -2, 12);
      wg.setAttribute('aDepth', new THREE.BufferAttribute(a, 1));
      const wm = new THREE.Mesh(wg, w.waterMat); wm.position.set(d.ox + cx, lv, cz); wm.renderOrder = 5; grp.add(wm);
    }
    // construcciones, árboles, animales y carteles de cada destino
    const b = new Batch(), trees = [], herd = [], ctx = { w, b, d, trees, grp, glow, gy: (u, v) => w.groundAt(d.ox + u, v), X: u => d.ox + u, R: rng(d.ox) };
    ctx.sign = (text, u, v, ry, sw, sh, o = {}) => { const tex = textTex(text, { w: 512, h: Math.round(512 * sh / sw), bg: o.bg || '#12325a', fg: o.fg || '#ffffff', border: o.border || '#ffc93c', size: 72 });
      const y = ctx.gy(u, v), m = new THREE.Mesh(new THREE.PlaneGeometry(sw, sh), new THREE.MeshStandardMaterial({ map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.3, roughness: 0.8 }));
      m.position.set(d.ox + u, y + 2.4 + sh / 2, v); m.rotation.y = ry; grp.add(m); const m2 = m.clone(); m2.rotation.y = ry + Math.PI; grp.add(m2);
      const s = Math.cos(ry) * (sw / 2 - 0.3), c = -Math.sin(ry) * (sw / 2 - 0.3); b.boxB(d.ox + u + s, y, v + c, 0.2, 2.5, 0.2, C.steelD); b.boxB(d.ox + u - s, y, v - c, 0.2, 2.5, 0.2, C.steelD); };
    ctx.tree = (type, u, v, s = 1) => { if (Math.abs(u) > HALF - 1 || Math.abs(v) > HALF - 1 || d.h(u, v) < d.water(u, v) + 0.4) return; trees.push({ type, x: d.ox + u, z: v, s, y: d.h(u, v) }); };
    ctx.inter = (id, u, v, o = {}) => { const it = w.addInter(id, d.ox + u, v, Object.assign({ console: false, h: 3.4 }, o)); grp.add(it.group); return it; };
    ctx.solid = (u0, u1, v0, v1, top) => w.addSolid(d.ox + u0, d.ox + u1, v0, v1, top);
    ctx.plat = (u0, u1, v0, v1, top) => w.addPlatform(d.ox + u0, d.ox + u1, v0, v1, top);
    // caja con las esquinas: u0..u1, v0..v1, de y0 a y1
    ctx.slab = (u0, u1, v0, v1, y0, y1, col) => b.boxB(d.ox + (u0 + u1) / 2, y0, (v0 + v1) / 2, u1 - u0, y1 - y0, v1 - v0, col);
    // camino que sigue el relieve, en tramos cortos
    ctx.path = (pts, wd, col, lift = 0.06) => { for (let i = 0; i < pts.length - 1; i++) { const [ua, va] = pts[i], [ub, vb] = pts[i + 1], L = Math.hypot(ub - ua, vb - va), n = Math.max(1, Math.ceil(L / 1.6)), ry = -Math.atan2(vb - va, ub - ua);
      for (let k = 0; k < n; k++) { const t = (k + 0.5) / n, u = lerp(ua, ub, t), v = lerp(va, vb, t); b.box(d.ox + u, d.h(u, v) + lift, v, L / n + 0.15, 0.1, wd, col, ry); } } };
    // cable o caño entre dos puntos
    const _a = new THREE.Vector3(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), UP = new THREE.Vector3(0, 1, 0), WIRE = new THREE.CylinderGeometry(1, 1, 1, 4);
    ctx.wire = (u0, y0, v0, u1, y1, v1, r = 0.05, col = 0x2a2a2a) => { _a.set(u1 - u0, y1 - y0, v1 - v0); const L = _a.length(); _q.setFromUnitVectors(UP, _a.normalize()); _e.setFromQuaternion(_q);
      b.add(WIRE, col, d.ox + (u0 + u1) / 2, (y0 + y1) / 2, (v0 + v1) / 2, r, L, r, _e.x, _e.y, _e.z); };
    ctx.rock = (u, v, s, col, sy = 0.7) => b.add(ROCK, col, d.ox + u, d.h(u, v) + s * sy * 0.35, v, s, s * sy, s * (0.8 + ctx.R() * 0.4), ctx.R() * 0.3, ctx.R() * 6, 0, 0.06);
    ctx.animal = (k, u, v, ry, graze = 0) => herd.push({ k, u, v, ry, graze });
    // parada de la Gira (andén chico con cartel), para volver a Salto
    { const [su, sv] = d.stop, y = ctx.gy(su, sv); b.boxB(ctx.X(su), y - 0.3, sv, 8, 0.75, 3, 0xc9c0ad); ctx.plat(su - 4, su + 4, sv - 1.5, sv + 1.5, y + 0.45);
      b.boxB(ctx.X(su), y + 0.45, sv - 1.2, 6, 2.6, 0.12, 0xa65a3f); b.box(ctx.X(su), y + 3.15, sv - 0.4, 7, 0.14, 2.2, 0x7a5a3c); for (const s of [-2.8, 2.8]) b.boxB(ctx.X(su + s), y + 0.45, sv + 0.5, 0.14, 2.7, 0.14, 0x2f4a3a);
      b.boxB(ctx.X(su), y + 0.45, sv - 0.6, 2.4, 0.45, 0.6, C.wood); ctx.inter('v:volver', su, sv + 0.6, { h: 3.6, r: 3.2 }); ctx.sign(d.stopSign || 'TREN DE LA GIRA', su + 6, sv + 2.4, 0, 5.4, 1.0, { bg: '#7a2e1d', border: '#ffd23f' }); }
    BUILD[d.k](ctx);
    const bm = b.mesh(w.mats.solid); if (bm) { bm.castShadow = true; bm.receiveShadow = true; grp.add(bm); }
    for (const m of w.plantTrees(trees)) { w.scene.remove(m); grp.add(m); }
    // animales quietos (pastando o mirando), con las mismas piezas que la fauna de Salto
    if (herd.length) { const parts = {}, geos = [], M = new THREE.Matrix4(), Mh = new THREE.Matrix4(), Q = new THREE.Quaternion(), E = new THREE.Euler(), V = new THREE.Vector3(), S = new THREE.Vector3(1, 1, 1);
      for (const a of herd) { const P = parts[a.k] || (parts[a.k] = animalParts(a.k)), y = ctx.gy(a.u, a.v); M.compose(V.set(d.ox + a.u, y, a.v), Q.setFromEuler(E.set(0, a.ry, 0)), S);
        geos.push(P.body.clone().applyMatrix4(M));
        Mh.compose(V.set(...P.pivot), Q.setFromEuler(E.set(a.graze * P.graze, 0, 0)), S); geos.push(P.head.clone().applyMatrix4(Mh).applyMatrix4(M));
        for (const h of P.hips) { Mh.makeTranslation(h[0], h[1], h[2]); geos.push(P.leg.clone().applyMatrix4(Mh).applyMatrix4(M)); } }
      const am = new THREE.Mesh(mergeGeometries(geos, false), aniMat); am.castShadow = true; grp.add(am); geos.forEach(x => x.dispose()); }
  }
}

// ---------- Construcciones de cada destino ----------
const BUILD = {
  // ---------------------------------------------------------------- Rincón del Bonete
  negro(c) {
    const { b, d, X, gy, R } = c, T = BON.crest, C1 = 0xbab5a8, C2 = 0xa29d91, C3 = 0xc9c4b8, YEL = 0xf2c230, GLASS = 0x2d4a5e;
    // tramos de muro macizo (margen sur y estribo norte), con el paramento de aguas abajo escalonado
    for (const [v0, v1] of [[BON.vS, BON.spS], [BON.phN, BON.vN]]) {
      c.slab(7, 12.5, v0, v1, -3, T, C1); c.slab(5.4, 7, v0, v1, -3, 4.2, C2); c.slab(4.2, 5.4, v0, v1, -3, 1.4, C2);
      c.solid(4.2, 12.5, v0, v1, T);
    }
    // vertedero: 13 vanos entre pilas, compuertas, la rápida y el cuenco amortiguador
    const spC = (BON.spS + BON.spN) / 2, spL = BON.spN - BON.spS;
    c.slab(8.6, 12.4, BON.spS, BON.spN, -3, 5, C2);
    b.box(X(4.3), 2.2, spC, 8.4, 0.6, spL, C2, 0, 0, 0.72);
    c.slab(-8, 0.8, BON.spS, BON.spN, -2.4, -1.2, C2); c.slab(-8.6, -7.6, BON.spS, BON.spN, -2.4, -0.4, C2);
    for (let k = 0; k <= 13; k++) { const v = BON.spS + k * 4; c.slab(5.6, 13.2, v - 0.5, v + 0.5, -2.6, T - 0.3, C3); b.cyl(X(13.2), -2.6, v, 0.5, 0.5, T + 2.3, C3, 8); }
    for (let k = 0; k < 13; k++) { const v = BON.spS + 2 + k * 4;
      c.slab(12.1, 12.45, v - 1.5, v + 1.5, 5, 6.9, 0x4f5a63);                          // compuerta
      c.wire(12.2, 6.6, v - 1.3, 8.4, 7.6, v - 1.45, 0.1, 0x4f5a63); c.wire(12.2, 6.6, v + 1.3, 8.4, 7.6, v + 1.45, 0.1, 0x4f5a63);
      c.slab(11.6, 12.4, v - 0.7, v + 0.7, T, T + 0.9, 0x8d9399); }                    // mecanismo de izado
    c.solid(7, 12.5, BON.spS, BON.spN, T);
    // toma y bloque de la central (4 unidades)
    c.slab(7, 12.5, BON.spN, BON.phN, -3, T, C1); c.solid(7, 12.5, BON.spN, BON.phN, T);
    for (let k = 0; k < 4; k++) { const v = 24.6 + k * 5; c.slab(12.5, 12.6, v - 1.7, v + 1.7, 0.6, 5.4, 0x2c3438); b.cyl(X(9.8), T, v, 1.5, 1.5, 2.6, 0xe9e6de, 14); b.cyl(X(9.8), T + 2.6, v, 1.1, 1.55, 0.5, 0xd2cfc6, 14); }
    // coronamiento: calzada, barandas, rieles y dos grúas pórtico amarillas
    c.slab(7, 12.5, BON.vS, BON.vN, T - 0.35, T, 0x9a968c); c.plat(7, 12.5, BON.vS, BON.vN, T);
    for (const su of [7.1, 12.4]) { c.slab(su - 0.1, su + 0.1, BON.vS, BON.vN, T, T + 1.0, 0xe4e0d6); c.solid(su - 0.12, su + 0.12, BON.vS, BON.vN, T + 1.1); }
    for (const su of [7.7, 11.9]) c.slab(su - 0.14, su + 0.14, BON.spS, BON.phN, T, T + 0.12, 0x3a3f46);
    for (const vg of [-17, 7]) {
      for (const su of [7.7, 11.9]) for (const sv of [-1.6, 1.6]) c.slab(su - 0.22, su + 0.22, vg + sv - 0.22, vg + sv + 0.22, T, T + 6.2, YEL);
      for (const sv of [-1.6, 1.6]) c.slab(7.2, 12.4, vg + sv - 0.3, vg + sv + 0.3, T + 6.2, T + 6.9, YEL);
      c.slab(8.4, 11.2, vg - 1.9, vg + 1.9, T + 6.9, T + 8.4, 0xe0b020); c.slab(8.3, 8.4, vg - 1, vg + 0.4, T + 7.2, T + 8.1, GLASS);
      c.wire(9.8, T + 6.9, vg, 9.8, T + 2.6, vg, 0.05);
    }
    // sala de máquinas (proyecto de Julio Vilamajó): nave clara con ventanales altos, al pie del muro
    c.slab(-9.5, 6, 21, 45, -3, 3.6, C2); c.slab(-8, 5, 22, 44, 3.6, 10, 0xdcd8cd); c.slab(-8.2, 5.2, 21.8, 44.2, 10, 10.3, 0x8c887e);
    for (let k = 0; k < 9; k++) c.slab(-8.06, -8, 23.4 + k * 2.4 - 0.55, 23.4 + k * 2.4 + 0.55, 4.6, 9.4, GLASS);
    for (let k = 0; k < 5; k++) c.slab(-6.6 + k * 2.4 - 0.5, -6.6 + k * 2.4 + 0.5, 21.94, 22, 4.6, 9.4, GLASS);
    for (let k = 0; k < 4; k++) { const v = 24.6 + k * 5; c.slab(-9.6, -9.5, v - 1.6, v + 1.6, -1.4, 1.2, 0x1d2a30); }   // salidas de los tubos de aspiración
    c.solid(-9.5, 6, 21, 45, 10.3);
    c.slab(0, 2.4, 44, 44.06, 3.6, 6.6, 0x3a3f46);                                                                   // puerta
    c.slab(3.2, 4.2, 44, 44.08, 5.2, 5.9, 0xb08a3a); c.slab(3.25, 4.15, 44, 44.07, 4.5, 5.0, 0x8f8f8f);              // placa del IEEE (2012) y, debajo, la de 2009
    c.inter('d1:placa', 3.7, 46.6, { h: 3.0, r: 2.6 });
    c.slab(-18, 2, 44, 54, 3.0, 3.6, 0xc9c4b8);
    // sala de mando, en un edificio aparte sobre la explanada
    c.slab(-17, -11, 46, 53, 3.6, 8.6, 0xe8e4da); c.slab(-17.2, -10.8, 45.8, 53.2, 8.6, 8.9, 0x8c887e);
    for (let k = 0; k < 3; k++) c.slab(-10.96, -10.9, 47 + k * 2, 48.3 + k * 2, 6.2, 8.0, GLASS);
    c.slab(-10.96, -10.9, 48.8, 50.2, 3.6, 5.8, 0x3a3f46); c.solid(-17, -11, 46, 53, 8.9);
    c.inter('d1:mando', -9.2, 49.5, { h: 3.4, r: 2.6 });
    c.sign('CENTRAL HIDROELÉCTRICA DR. GABRIEL TERRA', -6, 57, 0, 10.4, 1.1, { bg: '#1d4f8a', border: '#ffd23f' });
    // playa de 150 kV: pórticos, interruptores, transformadores y alambrado
    c.slab(-42, -18, 52, 72, 3.7, 3.85, 0xb7b1a3);
    for (const uu of [-38, -30, -22]) { for (const vv of [54, 70]) c.slab(uu - 0.2, uu + 0.2, vv - 0.2, vv + 0.2, 3.8, 11.8, 0xd0d4d8); c.slab(uu - 0.25, uu + 0.25, 54, 70, 11.6, 12.0, 0xd0d4d8);
      for (const vv of [57, 62, 67]) { c.wire(uu, 11.6, vv, uu, 9.6, vv, 0.06, 0xe0e0e0); b.cyl(X(uu + 3), 3.85, vv, 0.18, 0.22, 2.3, 0xe8e8e8, 6); c.slab(uu + 2.5, uu + 3.5, vv - 0.5, vv + 0.5, 3.85, 4.4, 0x8d9399); } }
    for (const vv of [56, 62, 68]) { c.slab(-21, -18.6, vv - 1.1, vv + 1.1, 3.85, 6.4, 0x5a6168); for (let k = 0; k < 4; k++) c.slab(-18.6, -18.2, vv - 0.9 + k * 0.6, vv - 0.7 + k * 0.6, 4.2, 6.0, 0x4c535a); b.cyl(X(-19.8), 6.4, vv, 0.14, 0.18, 1.4, 0xe8e8e8, 6); }
    for (const [u0, v0, u1, v1] of [[-42, 52, -18, 52], [-42, 72, -18, 72], [-42, 52, -42, 72], [-18, 52, -18, 72]]) { const L = Math.hypot(u1 - u0, v1 - v0), n = Math.round(L / 3);
      for (let k = 0; k <= n; k++) b.boxB(X(lerp(u0, u1, k / n)), 3.8, lerp(v0, v1, k / n), 0.12, 2, 0.12, 0x9aa0a6); c.slab(Math.min(u0, u1) - 0.03, Math.max(u0, u1) + 0.03, Math.min(v0, v1) - 0.03, Math.max(v0, v1) + 0.03, 4.0, 5.7, 0xa8b0b6); }
    c.solid(-42, -18, 52, 72, 6);
    // líneas que se llevan la energía (la primera, de 1945, llegaba hasta Montevideo)
    const tower = (u, v) => { const y = gy(u, v); for (const [sx, sz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) c.wire(u + sx * 1.4, y, v + sz * 1.4, u + sx * 0.4, y + 15, v + sz * 0.4, 0.12, 0x9aa0a6);
      for (const yy of [11, 14]) c.slab(u - 0.2, u + 0.2, v - 4, v + 4, y + yy, y + yy + 0.3, 0x9aa0a6); c.slab(u - 0.3, u + 0.3, v - 0.3, v + 0.3, y + 15, y + 16.4, 0x9aa0a6); return y; };
    const t1 = tower(-58, 62), t2 = tower(-82, 58);
    for (const dv of [-3.6, 0, 3.6]) { c.wire(-38, 11.6, 62 + dv * 1.9, -58, t1 + 11, 62 + dv, 0.04); c.wire(-58, t1 + 11, 62 + dv, -82, t2 + 11, 58 + dv, 0.04); c.wire(-82, t2 + 11, 58 + dv, -HALF + 0.5, t2 + 10.4, 57 + dv, 0.04); }
    // villa de UTE: casas blancas de techo de teja, calles de tierra y la casa de visitas de piedra
    c.path([[-46, 66], [-86, 66]], 3, 0xc8b48a); c.path([[-62, 64], [-62, 88]], 3, 0xc8b48a); c.path([[-46, 66], [-18, 54]], 3.4, 0xc8b48a); c.path([[-60, 50], [-46, 66]], 3, 0xc8b48a);
    for (const [u, v] of [[-80, 72], [-71, 72], [-53, 72], [-80, 82], [-71, 82], [-53, 82]]) { const y = gy(u, v);
      c.slab(u - 3.4, u + 3.4, v - 2.4, v + 2.4, y - 0.3, y + 2.8, 0xf0ebe0); gableX(b, X(u), y + 2.8, v, 7.4, 1.5, 5.4, 0xb0533a);
      c.slab(u - 0.5, u + 0.5, v - 2.46, v - 2.4, y, y + 2.1, 0x5a3e2b); for (const s of [-2, 2]) c.slab(u + s - 0.45, u + s + 0.45, v - 2.46, v - 2.4, y + 1, y + 2, GLASS);
      c.solid(u - 3.4, u + 3.4, v - 2.4, v + 2.4, y + 3.5); }
    { const u = -38, v = 81, y = gy(u, v); c.slab(u - 6, u + 6, v - 3, v + 3, y - 0.3, y + 2.6, 0x8d7d66); c.slab(u - 6.3, u + 6.3, v - 3.3, v + 3.3, y + 2.6, y + 2.9, 0x5e5a52); gableX(b, X(u), y + 2.9, v, 12.4, 1.1, 6.4, 0x5e5a52); c.solid(u - 6, u + 6, v - 3, v + 3, y + 3.6); }
    // lago: barrera de boyas frente al muro, un bote y el cartel
    for (let v = -54; v <= 46; v += 3.4) b.sph(X(22), BON.lvU + 0.1, v, 0.34, 0xf28c28, 0.8, 0);
    c.wire(22, BON.lvU + 0.15, -54, 22, BON.lvU + 0.15, 46, 0.03, 0xdedede);
    { const u = 40, v = 8; b.box(X(u), BON.lvU + 0.25, v, 4, 0.5, 1.5, 0xf4f4f4, 0.4); b.box(X(u), BON.lvU + 0.45, v, 3.4, 0.2, 1.1, 0x2f6fb0, 0.4); }
    c.sign('LAGO DE RINCÓN DEL BONETE · 1.070 km²', 32, 60, 0.15, 9.2, 1.1, { bg: '#1d6fb8', border: '#ffffff' });
    c.sign('RÍO ABAJO: BAYGORRIA (1960) Y PALMAR (1982)', -48, -38, 0.2, 9.8, 1.1, { bg: '#1d6fb8', border: '#ffffff' });
    // monte nativo en las barrancas, plantaciones de eucaliptos, islas con monte y vacas en el campo
    for (let i = 0; i < 1300; i++) { const u = lerp(-88, 88, R()), v = lerp(-88, 88, R()), h = d.h(u, v);
      if (h < d.water(u, v) + 0.6 || B_PADS.some(([a, bb, cc, dd]) => rectD(u, v, a, bb, cc, dd) < 3) || (u > -20 && u < 24 && v > -70 && v < 58) || rectD(u, v, -86, -36, -86, -58) < 2 || Math.hypot(u - 32, v - 60) < 6) continue;
      let p;
      if (u < 7) { const dc = Math.abs(v - bRc(u)) - bRw(u); p = dc < 14 ? 0.8 : 0.06; }
      else { const dd = Math.min(v - bSS(Math.max(u, 14)), bSN(Math.max(u, 14)) - v); p = dd > 0 ? 0.9 : dd > -12 ? 0.55 : 0.07; }
      if (R() < p) c.tree(R() < 0.8 ? 'native' : R() < 0.8 ? 'bush' : 'ceibo', u, v, 0.8 + R() * 0.6); }
    for (let u = -84; u <= -38; u += 4) for (let v = -84; v <= -60; v += 4) c.tree('euca', u + (R() - 0.5), v + (R() - 0.5), 0.85 + R() * 0.3);
    for (let u = 36; u <= 86; u += 4.5) for (let v = 66; v <= 86; v += 4.5) if (R() < 0.85) c.tree('euca', u, v, 0.9 + R() * 0.3);
    for (const [u, v] of [[-88, 70], [-88, 78], [-66, 90 - 2], [-46, 88], [-58, 76], [-48, 60], [-26, 86], [-86, 60]]) c.tree('euca', u, v, 1.1);
    for (const [u, v, r] of [[-30, -62, 0.4], [-22, -56, 2.6], [-14, -66, 1.2], [-36, -50, 3.6], [-8, -58, 0.8], [-26, -72, 5.4]]) c.animal('vaca', u, v, r, R() < 0.7 ? 1 : 0);
  },

  // ---------------------------------------------------------------- Fray Bentos
  fray(c) {
    const { b, d, X, gy, R } = c, BR = 0xa65a3f, BRd = 0x963f2b, RUST = 0x8a4b33, ZINC = 0x9aa0a4, CRE = 0xc8b48c, CREd = 0xb39f78, WIN = 0x3b3a36, WHITE = 0xefe9dc;
    // costanera de piedra frente al predio industrial
    for (let v = -56; v <= 12; v += 2.5) { const u = fShW(v); c.slab(u - 0.2, u + 1.6, v - 1.3, v + 1.3, -4.5, 2.5, 0x8f8a80); }
    // cámara de frío (años 1920): siete pisos de hormigón para guardar hasta 18.000 toneladas de carne
    const y0 = 2.5;
    c.slab(-47, -34, -48, -14, y0 - 0.5, y0 + 14, CRE); c.slab(-46.5, -34.5, -47.5, -14.5, y0 + 14, y0 + 15.8, 0xb9bcbc); gableX(b, X(-40.5), y0 + 15.8, -31, 12, 0.8, 33, 0xa7abab);
    for (let f = 1; f < 7; f++) c.slab(-47.08, -33.92, -48.08, -13.92, y0 + f * 2 - 0.06, y0 + f * 2 + 0.06, CREd);
    for (let v = -46.6; v < -14; v += 2.8) { c.slab(-47.15, -47, v - 0.25, v + 0.25, y0, y0 + 14, CREd); for (let f = 0; f < 7; f++) c.slab(-47.07, -47, v + 0.7, v + 1.4, y0 + 0.8 + f * 2, y0 + 1.5 + f * 2, WIN); }
    for (let u = -45.6; u < -34; u += 2.8) for (let f = 0; f < 7; f++) for (const vv of [-48.07, -13.93]) c.slab(u - 0.35, u + 0.35, vv - 0.04, vv + 0.04, y0 + 0.8 + f * 2, y0 + 1.5 + f * 2, WIN);
    c.slab(-47, -35, -14, -4, y0 - 0.5, y0 + 11, 0xbfa883); for (let f = 0; f < 5; f++) for (let v = -12.6; v < -4; v += 2.8) c.slab(-47.07, -47, v, v + 0.7, y0 + 0.8 + f * 2, y0 + 1.5 + f * 2, WIN);
    c.solid(-47, -34, -48, -4, y0 + 15);
    // el muelle de madera (230 m en el original) y sus grúas
    c.slab(-88, -55, -38, -33, 2.3, 2.75, 0x6e5a44); c.slab(-88, -80, -43, -28, 2.3, 2.75, 0x6e5a44);
    for (let u = -57; u > -88; u -= 3) for (const v of [-37.6, -33.4]) c.slab(u - 0.18, u + 0.18, v - 0.18, v + 0.18, -4.5, 2.3, 0x4e4034);
    for (let v = -42.6; v <= -28.4; v += 3) for (const u of [-87.6, -84, -80.4]) c.slab(u - 0.18, u + 0.18, v - 0.18, v + 0.18, -4.5, 2.3, 0x4e4034);
    for (const v of [-36.4, -34.6]) c.slab(-87, -50, v - 0.08, v + 0.08, 2.75, 2.85, 0x3a3a3a);
    c.plat(-88, -50, -38, -33, 2.75); c.plat(-88, -80, -43, -28, 2.75);
    const crane = (u, v, ang) => { for (const [su, sv] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) c.slab(u + su * 1.1 - 0.15, u + su * 1.1 + 0.15, v + sv * 1.1 - 0.15, v + sv * 1.1 + 0.15, 2.75, 4.6, 0x7a2e22);
      c.slab(u - 1.4, u + 1.4, v - 1.4, v + 1.4, 4.6, 4.9, 0x7a2e22); c.slab(u - 1.2, u + 1.2, v - 1.0, v + 1.0, 4.9, 7.0, 0xe6dcc3); c.slab(u - 1.3, u + 1.3, v - 1.1, v + 1.1, 7.0, 7.25, 0x7a2e22);
      c.slab(u - 1.22, u - 1.2, v - 0.6, v + 0.4, 5.6, 6.6, 0x2d3a44);
      const tu = u - Math.cos(ang) * 8.5, ty = 6 + Math.sin(ang) * 8.5; c.wire(u - 0.8, 6.0, v - 0.35, tu, ty, v - 0.1, 0.16, 0x7a2e22); c.wire(u - 0.8, 6.0, v + 0.35, tu, ty, v + 0.1, 0.16, 0x7a2e22);
      c.wire(u + 0.6, 7.2, v, tu, ty, v, 0.04); c.wire(tu, ty, v, tu, ty - 4, v, 0.03); c.slab(tu - 0.2, tu + 0.2, v - 0.2, v + 0.2, ty - 4.4, ty - 4, 0x3a3a3a); };
    crane(-83, -40, 0.95); crane(-86, -31, 0.75);
    // la chimenea de ladrillo (1906): 43 metros de alto en el original
    { const u = -24, v = -34, y = gy(u, v); c.slab(u - 1.7, u + 1.7, v - 1.7, v + 1.7, y - 0.3, y + 3, BRd); b.cyl(X(u), y + 3, v, 0.82, 1.3, 19, BRd, 12); b.cyl(X(u), y + 22, v, 1.05, 0.9, 0.8, 0x6e2c1e, 12); c.solid(u - 1.7, u + 1.7, v - 1.7, v + 1.7, y + 22); }
    // naves de la fábrica: ladrillo y techos de chapa
    const nave = (u0, u1, v0, v1, h, wall, roof, alongU = true) => { const y = 2.5; c.slab(u0, u1, v0, v1, y - 0.5, y + h, wall);
      if (roof === 'flat') c.slab(u0 - 0.2, u1 + 0.2, v0 - 0.2, v1 + 0.2, y + h, y + h + 0.3, 0x6a5a4c);
      else if (alongU) gableX(b, X((u0 + u1) / 2), y + h, (v0 + v1) / 2, u1 - u0 + 0.6, 2.2, v1 - v0 + 0.8, roof); else gableZ(b, X((u0 + u1) / 2), y + h, (v0 + v1) / 2, v1 - v0 + 0.6, 2.2, u1 - u0 + 0.8, roof);
      c.solid(u0, u1, v0, v1, y + h + 2); };
    nave(-32, -6, -52, -40, 6, BR, RUST); nave(-14, -2, -36, -24, 6.5, 0x9d5741, ZINC); nave(-32, -20, -10, 2, 9, BR, 'flat'); nave(-16, -4, -18, 0, 5.5, 0xd9d2c4, RUST, false);
    for (let f = 0; f < 3; f++) for (let v = -9; v < 2; v += 2.2) c.slab(-20.06, -20, v, v + 1, 3.4 + f * 3, 4.8 + f * 3, WIN);
    // sala de máquinas (1922): aquí se encendió en 1883 la primera lamparita eléctrica del Uruguay
    nave(-30, -18, -28, -13, 8, BR, RUST, false);
    for (let v = -27; v < -14; v += 2.4) { c.slab(-18.06, -18, v, v + 1.3, 4, 9, 0x2d3a44); b.cyl(X(-18.03), 9, v + 0.65, 0.65, 0.65, 0.06, BR, 10, 0, 0, Math.PI / 2); }
    c.slab(-18.08, -18, -21.4, -19.2, 2.5, 6, 0x3a2e26); c.inter('d2:sala', -15.6, -20.3, { h: 3.6, r: 3 });
    for (const v of [-36.2, -34.8]) c.slab(-55, -6, v - 0.06, v + 0.06, 2.52, 2.6, 0x4a4a4a);
    // plaza, monumento a Liebig y oficinas blancas de postigos rojos
    c.path([[-2, 5], [20, 5]], 2.4, 0xcfc4ae); c.path([[9, -4], [9, 14]], 2.4, 0xcfc4ae);
    { const u = 9, v = 5, y = gy(u, v); c.slab(u - 1.3, u + 1.3, v - 1.3, v + 1.3, y - 0.2, y + 0.5, 0x7a6a5a); c.slab(u - 0.75, u + 0.75, v - 0.75, v + 0.75, y + 0.5, y + 3.1, 0x6f4b38);
      for (const s of [-1, 1]) { c.slab(u - 0.45, u + 0.45, v + s * 0.55 - 0.22, v + s * 0.55 + 0.22, y + 3.1, y + 3.6, 0x5e4434); c.slab(u + 0.4, u + 0.7, v + s * 0.55 - 0.15, v + s * 0.55 + 0.15, y + 3.4, y + 3.75, 0x5e4434); }
      b.cyl(X(u), y + 3.1, v, 0.3, 0.35, 1.3, 0x5e4434, 8); c.solid(u - 1.3, u + 1.3, v - 1.3, v + 1.3, y + 3); }
    const casona = (u0, u1, v0, v1, h, wall, roof, shut, sideV) => { const y = gy((u0 + u1) / 2, (v0 + v1) / 2); c.slab(u0, u1, v0, v1, y - 0.4, y + h, wall);
      gableX(b, X((u0 + u1) / 2), y + h, (v0 + v1) / 2, u1 - u0 + 0.6, 1.4, v1 - v0 + 0.6, roof);
      for (let u = u0 + 1.5; u < u1 - 1; u += 2.6) { c.slab(u - 0.45, u + 0.45, sideV - 0.06, sideV + 0.06, y + 1.0, y + 2.6, 0x2d3a44); for (const s of [-0.75, 0.75]) c.slab(u + s - 0.28, u + s + 0.28, sideV - 0.08, sideV + 0.08, y + 1.0, y + 2.6, shut); }
      c.solid(u0, u1, v0, v1, y + h + 1.4); };
    casona(-1, 19, -13, -7, 4, WHITE, 0x9b4a35, 0x8e2f22, -6.95); casona(21, 27, -4, 13, 4.2, WHITE, 0x9b4a35, 0x8e2f22, 13.05);
    c.sign('MUSEO DE LA REVOLUCIÓN INDUSTRIAL', 0, 12, -0.3, 8.6, 1.0, { bg: '#7a2e1d', border: '#ffd23f' });
    c.sign('PAISAJE INDUSTRIAL FRAY BENTOS · PATRIMONIO MUNDIAL (2015)', 24, 18, 0.2, 12.6, 1.2, { bg: '#7a2e1d', border: '#ffd23f' });
    // barrio Anglo: tiras de casas obreras con galería y techo de teja
    c.path([[44, 12], [30, 4], [20, 5]], 3.6, 0xb9a988); c.path([[28, -20], [60, -20]], 3.4, 0xb9a988); c.path([[28, -8], [60, -8]], 3.4, 0xb9a988); c.path([[30, 4], [30, -26]], 3.4, 0xb9a988);
    const DOOR = [0x2f6f5e, 0x8e2f22, 0x2b4a7a, 0x6a4a2a];
    for (const [vr, sideV] of [[-25, -22.4], [-14.5, -17.6], [-3.5, -6.6]]) { const y = gy(45, vr), dv = sideV - vr;
      c.slab(33, 58, vr - 2.4, vr + 2.4, y - 0.4, y + 3, 0xf0e9dc); gableX(b, X(45.5), y + 3, vr, 25.6, 1.5, 5.4, 0xa5533a);
      for (let k = 0; k < 5; k++) { const u = 35.5 + k * 5; c.slab(u - 0.5, u + 0.5, sideV - 0.05, sideV + 0.05, y, y + 2.2, DOOR[(k + Math.round(vr)) & 3]); c.slab(u + 1.3, u + 2.2, sideV - 0.05, sideV + 0.05, y + 1, y + 2.1, 0x2d3a44); }
      c.slab(33, 58, sideV + Math.sign(dv) * 0.1, sideV + Math.sign(dv) * 1.9, y + 2.6, y + 2.75, 0x9b4a35); for (let u = 34; u <= 57; u += 3.2) c.slab(u - 0.1, u + 0.1, sideV + Math.sign(dv) * 1.7, sideV + Math.sign(dv) * 1.9, y, y + 2.6, 0xe8e0d0);
      c.solid(33, 58, vr - 2.4, vr + 2.4, y + 4.5); }
    // la Casa Grande (1868) en la loma, con galería, postigos verdes y su parque
    { const u0 = -26, u1 = -8, v0 = 30, v1 = 38, y = gy(-17, 34); c.slab(u0, u1, v0, v1, y - 0.6, y + 3.4, 0xf3efe6); c.slab(u0 - 0.3, u1 + 0.3, v0 - 0.3, v1 + 0.3, y + 3.4, y + 3.6, 0x585e66); gableX(b, X(-17), y + 3.6, 34, 18.6, 1.6, 8.6, 0x585e66);
      c.slab(u0, u1, v0 - 2.6, v0, y - 0.2, y, 0xd8cfc0); c.slab(u0, u1, v0 - 2.6, v0, y + 3.0, y + 3.2, 0x585e66); for (let u = u0 + 0.2; u <= u1; u += 2.2) c.slab(u - 0.12, u + 0.12, v0 - 2.5, v0 - 2.26, y, y + 3.0, 0xf3efe6);
      for (let u = u0 + 1.6; u < u1 - 1; u += 2.8) { c.slab(u - 0.5, u + 0.5, v0 - 0.06, v0, y + 0.6, y + 2.6, 0x2d3a44); for (const s of [-0.8, 0.8]) c.slab(u + s - 0.3, u + s + 0.3, v0 - 0.08, v0, y + 0.6, y + 2.6, 0x2f4a3a); }
      for (const uu of [-23, -11]) c.slab(uu - 0.4, uu + 0.4, 33.6, 34.4, y + 4, y + 5.6, 0xd8cfc0);
      c.solid(u0, u1, v0, v1, y + 5); c.sign('CASA GRANDE · 1868', -17, 22, 0, 4.6, 0.9, { bg: '#2f4a3a', border: '#ffe0a0' }); }
    for (const [u, v, t] of [[-32, 26, 'arauca'], [-2, 24, 'arauca'], [-30, 44, 'arauca'], [-20, 24, 'palm'], [-12, 25, 'palm'], [-4, 44, 'palm'], [-36, 34, 'ombu'], [2, 34, 'native']]) c.tree(t, u, v, 1);
    for (let u = -26; u <= -8; u += 2) c.tree('bush', u, 26.4, 0.6);
    // planta de celulosa de UPM (2007), a 5 km de la ciudad: genera su electricidad quemando licor negro
    const PY = 2.6, WH = 0xe3e6e8;
    c.slab(56, 68, -62, -50, PY, PY + 20, WH); c.slab(57, 67, -61, -51, PY + 20, PY + 22, 0xcfd4d8); for (let f = 0; f < 5; f++) c.slab(55.95, 56, -60, -52, PY + 3 + f * 3.6, PY + 3.5 + f * 3.6, 0x8f9aa3);
    b.cyl(X(74), PY, -60, 1.2, 1.7, 30, 0xd9dcdf, 12); b.cyl(X(74), PY + 30, -60, 1.3, 1.3, 0.8, 0x9aa0a6, 12);
    for (const u of [46, 51.5]) b.cyl(X(u), PY, -58, 2.2, 2.2, 15, 0xc9ced3, 14);
    c.slab(30, 44, -54, -42, PY, PY + 7, 0xdfe3e6); gableX(b, X(37), PY + 7, -48, 14.6, 1.2, 12.6, 0x8f9aa3);
    for (let i = 0; i < 6; i++) for (let k = 0; k < 4; k++) b.add(new THREE.CylinderGeometry(0.3, 0.3, 7, 6), 0x8a6a45, X(78 + i * 0.66), PY + 0.35 + k * 0.55, -44 + (k % 2) * 0.3, 1, 1, 1, Math.PI / 2, 0, 0);
    b.add(new THREE.ConeGeometry(5, 4, 10), 0xc8a874, X(82), PY + 2, -55); c.wire(80, PY + 3.5, -55, 68, PY + 12, -56, 0.5, 0xb0b6bc);
    c.solid(30, 88, -64, -42, PY + 22);
    for (let u = 30; u <= 88; u += 3) c.slab(u - 0.07, u + 0.07, -41.1, -40.9, PY, PY + 2, 0x9aa0a6); c.slab(30, 88, -41.02, -40.98, PY + 0.2, PY + 1.9, 0xb0b8be);
    c.slab(41, 46, -39, -35, PY, PY + 3, WH); c.slab(40.8, 46.2, -39.2, -34.8, PY + 3, PY + 3.25, 0x8f9aa3); c.slab(42.8, 44.2, -35.02, -34.96, PY, PY + 2.2, 0x2f6fb0); c.solid(41, 46, -39, -35, PY + 3.3);
    c.inter('d2:caldera', 43.5, -32.6, { h: 3.6, r: 3 });
    c.sign('UPM FRAY BENTOS · CENTRAL DE BIOMASA', 50, -30, 0, 8.8, 1.1, { bg: '#2e7d32', border: '#ffe0a0' });
    c.sign('A UPM: 5 KM POR LA COSTA, RÍO ARRIBA', 20, -26, -0.4, 8.6, 1.0, { bg: '#12325a', border: '#ffffff' });
    c.path([[30, -20], [26, -30], [43, -31]], 4, 0x6a6a68); c.path([[30, 4], [30, -20]], 4, 0x6a6a68);
    d.steam = [X(62), PY + 23, -56];
    // proyecto Kahirós (ruta 2): parque solar de 4,8 MW, electrolizadores, tanques e hidrolinera para camiones a hidrógeno
    for (let r = 0; r < 7; r++) for (let t = 0; t < 4; t++) { const u = 58 + t * 7.4, v = 56 + r * 4.4, y = PY;
      for (const s of [-2.6, 2.6]) c.slab(u + s - 0.08, u + s + 0.08, v - 0.08, v + 0.08, y, y + 1.3, 0x9aa0a6);
      b.box(X(u), y + 1.35, v, 6.8, 0.1, 2.4, 0x22346a, 0, -0.5); b.box(X(u), y + 1.3, v + 0.02, 6.9, 0.06, 2.5, 0xb0b6bc, 0, -0.5); }
    for (const [u, v] of [[50, 36], [50, 40.2]]) { c.slab(u - 3, u + 3, v - 1.2, v + 1.2, PY, PY + 2.6, 0xf2f4f5); c.slab(u - 3.02, u + 3.02, v - 1.0, v + 1.0, PY + 0.4, PY + 0.7, 0x1b7f5a); }
    for (const v of [34, 37, 40]) { b.add(new THREE.CylinderGeometry(1.0, 1.0, 7, 12), 0xf4f4f4, X(66), PY + 1.4, v, 1, 1, 1, 0, 0, Math.PI / 2); for (const s of [-2.5, 2.5]) c.slab(66 + s - 0.2, 66 + s + 0.2, v - 0.7, v + 0.7, PY, PY + 0.6, 0x9aa0a6); }
    c.solid(46.5, 70, 33, 42, PY + 3);
    { const u = 54, v = 48; c.slab(u - 4.5, u + 4.5, v - 3, v + 3, PY + 4, PY + 4.3, 0x2e9d5a); for (const [su, sv] of [[-4, -2.6], [4, -2.6], [-4, 2.6], [4, 2.6]]) c.slab(u + su - 0.15, u + su + 0.15, v + sv - 0.15, v + sv + 0.15, PY, PY + 4, 0xe8e8e8);
      c.slab(u - 0.5, u + 0.5, v - 0.35, v + 0.35, PY, PY + 1.8, 0x2a9d8f); c.inter('d2:h2', u + 1.6, v + 1.4, { h: 3.6, r: 3 }); }
    { const u = 52, v = 54.6; c.slab(u - 0.2, u + 2.6, v - 1.2, v + 1.2, PY + 0.7, PY + 3.4, 0xf2f4f5); c.slab(u + 2.55, u + 2.62, v - 1.0, v + 1.0, PY + 2.2, PY + 3.2, 0x2d3a44); c.slab(u - 0.2, u + 2.6, v - 1.22, v + 1.22, PY + 1.4, PY + 1.7, 0x1b7f5a);
      c.slab(u - 11, u - 0.4, v - 1.2, v + 1.2, PY + 1.0, PY + 1.3, 0x3a3f46); for (let k = 0; k < 4; k++) for (const s of [-1.1, 1.1]) c.slab(u - 10 + k * 3 - 0.08, u - 10 + k * 3 + 0.08, v + s - 0.08, v + s + 0.08, PY + 1.3, PY + 3.4, 0x3a3f46);
      for (let k = 0; k < 9; k++) b.add(new THREE.CylinderGeometry(0.32, 0.32, 10, 6), 0x9a7a52, X(u - 5.7), PY + 1.65 + Math.floor(k / 3) * 0.6, v - 0.7 + (k % 3) * 0.7, 1, 1, 1, 0, 0, Math.PI / 2);
      for (const [wu, wv] of [[u + 1.6, v - 1.25], [u + 1.6, v + 1.25], [u - 3, v - 1.25], [u - 3, v + 1.25], [u - 8.5, v - 1.25], [u - 8.5, v + 1.25]]) b.add(new THREE.CylinderGeometry(0.55, 0.55, 0.4, 10), 0x1e1e1e, X(wu), PY + 0.55, wv, 1, 1, 1, Math.PI / 2, 0, 0);
      c.solid(u - 11, u + 2.6, v - 1.3, v + 1.3, PY + 3.4); }
    c.sign('PROYECTO KAHIRÓS · HIDRÓGENO VERDE · RUTA 2', 58, 30, 0, 9.6, 1.1, { bg: '#1b7f5a', border: '#ffffff' });
    for (let u = 46; u <= 88; u += 3) c.slab(u - 0.07, u + 0.07, 29.1, 29.3, PY, PY + 1.8, 0x9aa0a6);
    // árboles: cortinas de eucaliptos, plátanos en el barrio y monte en la costa
    for (let i = 0; i < 520; i++) { const u = lerp(-88, 88, R()), v = lerp(-88, 88, R()), h = d.h(u, v);
      if (h < 1.4 || F_PADS.some(([a, bb, cc, dd]) => rectD(u, v, a, bb, cc, dd) < 2.5) || rectD(u, v, -2, 28, -14, 14) < 1 || rectD(u, v, 32, 59, -28, -1) < 1.5 || rectD(u, v, -28, -6, 20, 40) < 2) continue;
      const belt = (v > -36 && v < -30 && u > 4 && u < 26) || (u > 22 && u < 28 && v > 20 && v < 60) || (v > 24 && v < 28 && u > 30);
      if (belt) c.tree('euca', u, v, 0.9 + R() * 0.3); else if (R() < 0.35) c.tree(R() < 0.5 ? 'euca' : R() < 0.7 ? 'native' : 'bush', u, v, 0.8 + R() * 0.4); }
    for (let u = 34; u <= 58; u += 4.6) for (const v of [-11, 0.6]) c.tree('native', u, v, 0.75);
    for (const [u, v] of [[60, 12], [-6, -30], [16, 24], [12, 40], [-40, 20], [-46, 40]]) c.tree('naranjo', u, v, 1);
  },

  // ---------------------------------------------------------------- Valle del Lunarejo
  lunarejo(c) {
    const { b, d, X, gy, R } = c, STONE = 0x8a7f72, WOOD = 0x8a623c;
    // Ruta 30 en la meseta, con alambrado
    const rp = []; for (let v = -88; v <= 88; v += 8) rp.push([roadU(v), v]); c.path(rp, 5, 0x5e5e5c, 0.05);
    for (let v = -86; v <= 86; v += 6) b.box(X(roadU(v)), 24.2 + 0.07, v, 0.18, 0.05, 2.4, 0xe8c547, Math.atan2(roadU(v + 1) - roadU(v), 1));
    for (let v = -88; v <= 88; v += 4) { const u = roadU(v) - 4.2, y = d.h(u, v); b.boxB(X(u), y, v, 0.14, 1.3, 0.14, 0x7a5a3c); }
    for (const yy of [0.5, 0.9, 1.2]) for (let v = -88; v < 88; v += 8) c.wire(roadU(v) - 4.2, d.h(roadU(v) - 4.2, v) + yy, v, roadU(v + 8) - 4.2, d.h(roadU(v + 8) - 4.2, v + 8) + yy, v + 8, 0.02, 0x6a6a6a);
    // Centro de Visitantes (Ruta 30, km 237): base de piedra, madera y techo a dos aguas
    { const u = 51, v = -6, y = gy(u, v); c.slab(u - 5, u + 5, v - 3.2, v + 3.2, y - 0.4, y + 1.2, STONE); c.slab(u - 5, u + 5, v - 3.2, v + 3.2, y + 1.2, y + 3.4, WOOD);
      gableZ(b, X(u), y + 3.4, v, 7.2, 2.0, 11, 0x5a4a3c); c.slab(u - 5.06, u - 5, v - 1, v + 1, y, y + 2.4, 0x4a3426); for (const s of [-2.4, 2.4]) c.slab(u - 5.06, u - 5, v + s - 0.6, v + s + 0.6, y + 1.5, y + 2.6, 0x2d4a5e);
      c.slab(u - 8, u - 5, v - 3.2, v + 3.2, y - 0.2, y + 0.15, 0x9a7a52); c.solid(u - 5, u + 5, v - 3.2, v + 3.2, y + 5.4); }
    c.sign('PAISAJE PROTEGIDO VALLE DEL LUNAREJO', 44, 8, -0.5, 9.8, 1.1, { bg: '#2e5a2e', border: '#ffe0a0' });
    c.sign('CENTRO DE VISITANTES · RUTA 30 KM 237', 58, -16, 0.3, 8.6, 1.0, { bg: '#2e5a2e', border: '#ffe0a0' });
    // mirador al borde de la meseta: deck de madera sobre el paredón, con baranda y banco
    { const y = 24.2; c.slab(30, 38, -50, -42, y - 0.25, y, 0x9a7a52); c.plat(30, 38, -50, -42, y);
      for (const [u0, v0, u1, v1] of [[30, -50, 30, -42], [30, -50, 34, -50], [30, -42, 34, -42]]) { c.slab(Math.min(u0, u1) - 0.07, Math.max(u0, u1) + 0.07, Math.min(v0, v1) - 0.07, Math.max(v0, v1) + 0.07, y + 0.95, y + 1.08, WOOD);
        const L = Math.hypot(u1 - u0, v1 - v0), n = Math.round(L / 1.3); for (let k = 0; k <= n; k++) c.slab(lerp(u0, u1, k / n) - 0.07, lerp(u0, u1, k / n) + 0.07, lerp(v0, v1, k / n) - 0.07, lerp(v0, v1, k / n) + 0.07, y, y + 1, WOOD); }
      c.solid(29.6, 30.2, -50, -42, y + 1.1); c.slab(35, 37, -44.4, -43.8, y, y + 0.5, WOOD); c.inter('d3:mirador', 32.4, -46, { h: 3.4, r: 3 }); }
    c.sign('MIRADOR DEL VALLE', 38, -38, -0.6, 4.6, 0.9, { bg: '#5c4a3e', border: '#ffd23f' });
    // sendero que baja la ladera: escalones de piedra y postes
    for (let k = 0; k <= 34; k++) { const t = k / 34, u = lerp(LP.a[0], LP.b[0], t), v = lerp(LP.a[1], LP.b[1], t), y = d.h(u, v); b.box(X(u), y - 0.05, v, 2.2, 0.18, 1.0, 0x8c8478, -Math.atan2(LP.b[1] - LP.a[1], LP.b[0] - LP.a[0]));
      if (k % 3 === 0) b.boxB(X(u - 1.8), y, v + 0.5, 0.12, 1.0, 0.12, WOOD); }
    c.path([[LP.b[0], LP.b[1]], [14, 38], [-6, 34]], 1.4, 0xb3a57e);
    // pirca (muro de piedra seca) y un corral redondo en el valle
    for (let k = 0; k < 28; k++) { const a = k / 28 * Math.PI * 2; if (k === 3) continue; const u = -16 + Math.cos(a) * 6, v = 24 + Math.sin(a) * 6; b.boxB(X(u), gy(u, v) - 0.2, v, 1.5, 1.2, 0.7, k % 2 ? 0x8c8478 : 0x7f776c, -a + Math.PI / 2); }
    for (let k = 0; k < 24; k++) { const u = lerp(-26, 14, k / 23), v = lerp(62, 68, k / 23) + Math.sin(k) * 0.4; b.boxB(X(u), gy(u, v) - 0.2, v, 1.8, 1.0, 0.7, k % 2 ? 0x8c8478 : 0x7a7268, -Math.atan2(6, 40)); }
    // la cascada al fondo de la quebrada, con su pozo
    { const fall = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 12.8), c.glow); fall.position.set(X(-77.2), 15.8, LQ.a[1]); fall.rotation.y = Math.PI / 2; c.grp.add(fall); d.fall = fall;
      const foam = new THREE.Mesh(new THREE.CircleGeometry(1.8, 12), c.glow); foam.rotation.x = -Math.PI / 2; foam.position.set(X(-75.8), 9.36, LQ.a[1]); c.grp.add(foam); }
    for (let k = 0; k < 7; k++) c.rock(-75 + R() * 3, LQ.a[1] - 3 + R() * 6, 0.6 + R() * 0.6, 0x4f4741);
    // muestras de agua: en el arroyo y al pie de la cascada
    const m0v = -6, m1v = 44; c.inter('d3:m0', lac(m0v) + 3.4, m0v, { h: 2.6, r: 3 }); c.inter('d3:m1', lac(m1v) - 3.4, m1v, { h: 2.6, r: 3 }); c.inter('d3:m2', LQ.a[0] + 4.6, LQ.a[1] + 2, { h: 2.6, r: 3 });
    for (const v of [m0v, m1v]) for (let k = 0; k < 4; k++) c.rock(lac(v) + (R() < 0.5 ? -2.6 : 2.6), v + (R() - 0.5) * 5, 0.7 + R() * 0.5, 0x5e5048, 0.45);
    // piedras de basalto al borde de los paredones y en el valle
    for (let i = 0; i < 160; i++) { const u = lerp(-88, 88, R()), v = lerp(-88, 88, R()), adv = Math.abs(u - lc(v)); if ((adv > 33 && adv < 44) || R() < 0.15) { const h = d.h(u, v); if (h > d.water(u, v) + 0.3 && Math.abs(u - roadU(v)) > 4) c.rock(u, v, 0.5 + R() * 1.1, R() < 0.5 ? 0x5e5048 : 0x4f4741); } }
    // monte: de galería en el arroyo, en las laderas y bien tupido en la quebrada
    for (let i = 0; i < 2600; i++) { const u = lerp(-88, 88, R()), v = lerp(-88, 88, R()), h = d.h(u, v); if (h < d.water(u, v) + 0.4 || Math.abs(u - roadU(v)) < 6 || L_PADS.some(([a, bb, cc, dd]) => rectD(u, v, a, bb, cc, dd) < 3)) continue;
      const da = Math.abs(u - lac(v)), adv = Math.abs(u - lc(v)), [dq, t] = segD(u, v, ...LQ.m, ...LQ.a), [dp] = segD(u, v, ...LP.a, ...LP.b), dA = lunAmph(u, v);
      if (dp < 4 || Math.hypot(u + 16, v - 24) < 8 || da < 3.2 || dA < 9 || dq < lerp(6, 4, t) * 0.7) continue;
      let p = 0.03; if (da < 9) p = 0.85; else if (dq < lerp(6, 4, t) + 7 || dA < 13) p = 0.9; else if (adv > 23 && adv < 37) p = 0.55; else if (adv >= 41) p = 0.04;
      if (R() < p) c.tree(R() < 0.8 ? 'native' : da < 9 && R() < 0.25 ? 'ceibo' : 'bush', u, v, 0.8 + R() * 0.7); }
    // ganado en el valle (la ganadería extensiva también es parte del paisaje protegido) y un guazubirá en la quebrada
    for (const [u, v] of [[-14, -20], [-8, -26], [2, -16], [-20, 6], [8, 8], [-12, 46], [4, 52], [-2, -48], [10, -36]]) c.animal('vaca', u, v, R() * 6, R() < 0.75 ? 1 : 0);
    c.animal('guazubira', -38, -46, 1.2, 0); c.animal('guazubira', -60, -48, -1.4, 1);
    d.vista = [lc(-20), 6, -20];
  },

  // ---------------------------------------------------------------- Cabo Polonio
  polonio(c) {
    const { b, d, X, gy, R } = c, BRICK = 0xa66c45, WHITE = 0xf2efe8, GRANITE = [0xc4a596, 0xb08e80, 0xd2b6a6, 0xa98679];
    // el faro (1881): torre de ladrillo de unos 26 m, anillos blancos, ojos de buey, balcón y linterna de cúpula roja
    const [fu, fv] = P_FARO, fy = gy(fu, fv), H = 15, rAt = y => 1.7 - 0.45 * (y / H);
    b.cyl(X(fu), fy - 0.2, fv, 2.0, 2.1, 0.8, 0xd8d2c6, 16); b.cyl(X(fu), fy + 0.6, fv, rAt(H), rAt(0), H, BRICK, 16);
    for (const yy of [0.6, 5.2, 9.8, 14.4]) b.cyl(X(fu), fy + 0.6 + yy, fv, rAt(yy) + 0.05, rAt(yy) + 0.06, 0.38, WHITE, 16);
    for (const [yy, a] of [[2.6, 0.4], [7.2, 2.4], [11.8, 4.4], [4, 3.6], [8.6, 5.6], [12.6, 1.4]]) { const r = rAt(yy) + 0.02; b.add(new THREE.CylinderGeometry(0.22, 0.22, 0.1, 10), 0x2a2f36, X(fu + Math.cos(a) * r), fy + 0.6 + yy, fv + Math.sin(a) * r, 1, 1, 1, 0, -a, Math.PI / 2); }
    const top = fy + 0.6 + H; b.cyl(X(fu), top, fv, 2.0, 1.4, 0.35, WHITE, 16);
    for (let k = 0; k < 14; k++) { const a = k / 14 * Math.PI * 2; b.boxB(X(fu + Math.cos(a) * 1.9), top + 0.35, fv + Math.sin(a) * 1.9, 0.06, 0.8, 0.06, 0x2a2f36); } b.cyl(X(fu), top + 1.12, fv, 1.95, 1.95, 0.06, 0x2a2f36, 16);
    b.cyl(X(fu), top + 0.35, fv, 1.2, 1.2, 0.5, WHITE, 12); b.cyl(X(fu), top + 0.85, fv, 1.05, 1.05, 1.6, 0xfff0b8, 12); for (let k = 0; k < 6; k++) { const a = k / 6 * Math.PI * 2; b.boxB(X(fu + Math.cos(a) * 1.07), top + 0.85, fv + Math.sin(a) * 1.07, 0.07, 1.6, 0.07, 0xe8e8e8); }
    b.cyl(X(fu), top + 2.45, fv, 0.25, 1.25, 0.95, 0xc0392b, 12); for (let k = 0; k < 4; k++) { const a = k / 4 * Math.PI * 2 + 0.4; b.box(X(fu + Math.cos(a) * 0.72), top + 2.9, fv + Math.sin(a) * 0.72, 0.16, 1.0, 0.04, WHITE, -a, 0, 0); }
    b.sph(X(fu), top + 3.55, fv, 0.26, 0xc0392b, 1, 1); b.cyl(X(fu), top + 3.8, fv, 0.03, 0.03, 0.8, 0x2a2f36, 4);
    c.solid(fu - 1.8, fu + 1.8, fv - 1.8, fv + 1.8, top + 4);
    d.beam = [X(fu), top + 1.6, fv]; d.faro = [X(fu), fy + 10, fv];
    // casas de los fareros: blancas, de azotea, pegadas a la torre
    for (const [u0, u1, v0, v1] of [[33, 42, -4, 1.5], [38, 42.3, 1.5, 7]]) { const y = gy((u0 + u1) / 2, (v0 + v1) / 2); c.slab(u0, u1, v0, v1, y - 0.4, y + 3, WHITE); c.slab(u0 - 0.1, u1 + 0.1, v0 - 0.1, v1 + 0.1, y + 3, y + 3.35, 0xe6e2da);
      for (let u = u0 + 1.2; u < u1 - 0.6; u += 2.2) c.slab(u - 0.4, u + 0.4, v0 - 0.06, v0, y + 1, y + 2.1, 0x2d4a5e); c.solid(u0, u1, v0, v1, y + 3.4); }
    c.slab(42.3, 42.36, 3, 4.6, gy(42, 4), gy(42, 4) + 2.1, 0x2f6f5e);
    { const u = 53, v = -10, y = gy(u, v); b.cyl(X(u), y, v, 0.5, 0.6, 4.4, WHITE, 10); b.cyl(X(u), y + 4.4, v, 0.55, 0.55, 0.7, 0xc0392b, 10); b.cyl(X(u), y + 5.1, v, 0.1, 0.6, 0.45, WHITE, 10); c.solid(u - 0.6, u + 0.6, v - 0.6, v + 0.6, y + 5.5); }
    c.inter('d4:faro', 43.2, 4.6, { h: 3.4, r: 2.8 });
    c.sign('FARO DE CABO POLONIO · 1881', 32, 10, 0.4, 6.8, 1.0, { bg: '#1d4f8a', border: '#ffffff' });
    // granito rosado: bochas redondeadas en la punta, en la lobería y en las islas
    for (let i = 0; i < 150; i++) { const a = R() * Math.PI * 2, r = Math.sqrt(R()) * 18, u = 48 + Math.cos(a) * r, v = -1 + Math.sin(a) * r * 0.9; if (Math.hypot(u - fu, v - fv) < 5 || rectD(u, v, 32, 43, -5, 8) < 1.5 || d.h(u, v) < -0.6) continue; c.rock(u, v, 0.5 + R() * 1.2, GRANITE[i & 3], 0.42); }
    for (const [x, z, r] of P_ISL) for (let i = 0; i < r * 5; i++) { const a = R() * 6.283, rr = Math.sqrt(R()) * r * 0.9; c.rock(x + Math.cos(a) * rr, z + Math.sin(a) * rr, 0.6 + R() * 1.4, GRANITE[i & 3], 0.6); }
    for (let i = 0; i < 40; i++) { const u = lerp(-20, 34, R()), v = lerp(-22, 22, R()); if (d.h(u, v) > 1.5) c.rock(u, v, 0.4 + R() * 0.9, GRANITE[i & 3], 0.6); }
    // lobería: mirador con postes y cuerda para mirar sin molestar
    for (let k = 0; k <= 8; k++) { const a = -0.3 + k * 0.16, u = 48 + Math.cos(a) * 9, v = 6 + Math.sin(a) * 9, y = d.h(u, v); b.boxB(X(u), y, v, 0.14, 1.0, 0.14, 0x7a5a3c); if (k) { const a0 = a - 0.16, u0 = 48 + Math.cos(a0) * 9, v0 = 6 + Math.sin(a0) * 9; c.wire(u0, d.h(u0, v0) + 0.85, v0, u, y + 0.85, v, 0.03, 0xd8c8a0); } }
    c.inter('d4:lobos', 54.6, 8.4, { h: 3.0, r: 3.4 });
    c.sign('ISLAS DE TORRES: RASA, ENCANTADA E ISLOTE', 50, 16, 0.6, 9.2, 1.0, { bg: '#1d6fb8', border: '#ffe0a0' });
    d.lobos = []; for (let i = 0; i < 260 && d.lobos.length < 26; i++) { const u = lerp(54, 66, R()), v = lerp(-14, 16, R()), h = d.h(u, v); if (h > 0.1 && h < 2.6) d.lobos.push([u, v]); }
    for (const [x, z, r] of P_ISL) for (let i = 0; i < r * 2.2; i++) { const a = R() * 6.283, rr = Math.sqrt(R()) * r * 0.8, u = x + Math.cos(a) * rr, v = z + Math.sin(a) * rr; if (d.h(u, v) > 0) d.lobos.push([u, v]); }
    // el pueblo: sin calles ni cables. Casitas blancas de azotea y ranchos de madera de colores, con paneles solares,
    // algún molinito y tanques de agua
    const DOORS = [0x2f6fb0, 0x3d8a4a, 0x7ec8e3, 0xc0392b, 0xf2c230], RANCHO = [0xf2c230, 0x7ec8e3, 0xe76f51, 0x6ab04c, 0x9a7a52, 0x5a9fd4], ROOF = [0x8d9399, 0xa63d2d, 0x6a7076];
    const casa = (u, v, ry, o = {}) => { const y = gy(u, v), w = o.w || 4 + R() * 1.6, dd = o.d || 3.2 + R() * 1.2, white = o.white != null ? o.white : R() < 0.55, cs = Math.cos(ry), sn = Math.sin(ry);
      const P = (a, bb) => [u + a * cs + bb * sn, v - a * sn + bb * cs];
      b.boxB(X(u), y - 0.5, v, w, (white ? 3.0 : 2.8) + 0.5, dd, white ? 0xf1eee6 : RANCHO[Math.floor(R() * RANCHO.length)], ry);
      if (white) b.boxB(X(u), y + 3.0, v, w + 0.12, 0.25, dd + 0.12, 0xe6e2da, ry);
      else b.add(TRI_X, ROOF[Math.floor(R() * 3)], X(u), y + 2.8 + 0.5 * 0.9, v, w + 0.5, 0.9, (dd + 0.6) / 1.732, 0, ry, 0);
      const [du, dv] = P(-w * 0.18, dd / 2 + 0.03); b.boxB(X(du), y, dv, 0.9, 2.0, 0.06, o.door || DOORS[Math.floor(R() * DOORS.length)], ry);
      const [wu, wv] = P(w * 0.22, dd / 2 + 0.03); b.boxB(X(wu), y + 1.0, wv, 0.9, 0.8, 0.06, 0x2d4a5e, ry);
      const [pu, pv] = P(0, -dd * 0.12); b.box(X(pu), y + (white ? 3.55 : 3.9), pv, Math.min(2.4, w * 0.5), 0.07, 1.3, 0x1f3c88, ry, white ? -0.55 : -0.25);
      if (o.tank || R() < 0.35) { const [tu, tv] = P(w * 0.32, dd * 0.2); b.cyl(X(tu), y + (white ? 3.25 : 3.0), tv, 0.45, 0.45, 0.9, 0x1e1e1e, 10); }
      if (o.mill || R() < 0.22) { const [mu, mv] = P(-w / 2 - 1.2, -dd * 0.3), my = d.h(mu, mv); b.boxB(X(mu), my, mv, 0.1, 5.2, 0.1, 0x9aa0a6); for (let k = 0; k < 3; k++) b.box(X(mu), my + 5.2, mv + 0.06, 0.1, 1.2, 0.04, 0xf4f4f4, 0, 0, k * 2.094); b.box(X(mu), my + 5.2, mv - 0.2, 0.18, 0.18, 0.5, 0x9aa0a6); }
      const hw = Math.abs(w / 2 * cs) + Math.abs(dd / 2 * sn), hd = Math.abs(w / 2 * sn) + Math.abs(dd / 2 * cs); c.solid(u - hw, u + hw, v - hd, v + hd, y + 4); };
    casa(4, 12, 0, { white: true, w: 5, d: 3.6, door: 0x7ec8e3, tank: true, mill: true });   // la casa de Doña Elsa, la de la puerta celeste
    c.inter('d4:casa', 3.1, 14.8, { h: 3.2, r: 2.6 });
    const spots = []; for (let i = 0; i < 400 && spots.length < 30; i++) { const u = lerp(-22, 34, R()), v = lerp(-24, 26, R()); if (polDl(u, v) < 7 || polRock(u, v) > 0.25 || Math.hypot(u - 4, v - 12) < 8 || Math.hypot(u - 6, v - 17.5) < 4 || Math.hypot(u + 34, v - 3) < 9 || spots.some(([a, bb]) => Math.hypot(u - a, v - bb) < 6.4)) continue; spots.push([u, v]); }
    for (const [u, v] of spots) casa(u, v, (R() - 0.5) * 0.9);
    // playa Sur: botes de pescadores en la arena y un parador de madera
    for (let k = 0; k < 5; k++) { const u = -40 + k * 7 + R() * 2, v = pS(u) - 4.5 - R() * 2, y = Math.max(0.3, d.h(u, v)), col = [0x2f6fb0, 0xc0392b, 0x3d8a4a, 0xf2c230, 0xf4f4f4][k], ry = face(u, v, u, pS(u)) + Math.PI / 2;
      b.box(X(u), y + 0.35, v, 3.6, 0.7, 1.3, col, ry); b.box(X(u), y + 0.62, v, 3.0, 0.2, 0.9, 0x6e5a44, ry); }
    { const u = -8, v = 24, y = gy(u, v); c.slab(u - 4, u + 4, v - 2.5, v + 2.5, y - 0.4, y + 3, 0x9a7a52); b.add(TRI_X, 0xa63d2d, X(u), y + 3.45, v, 8.6, 0.9, 5.6 / 1.732); c.slab(u - 4, u + 4, v + 2.5, v + 5, y + 0.3, y + 0.45, 0x8a6a45); c.solid(u - 4, u + 4, v - 2.5, v + 2.5, y + 4); }
    // la terminal de los camiones 4×4 que cruzan las dunas, y el camión
    { const u = -29, v = -3, y = gy(u, v), ry = 0.15; const P = (a, bb) => [u + a * Math.cos(ry) + bb * Math.sin(ry), v - a * Math.sin(ry) + bb * Math.cos(ry)];
      b.boxB(X(u), y + 0.9, v, 7.6, 0.5, 2.6, 0x2b2b2b, ry); { const [a, bb] = P(3, 0); b.boxB(X(a), y + 1.4, bb, 1.8, 1.9, 2.5, 0x4a6b3a, ry); const [g1, g2] = P(3.92, 0); b.boxB(X(g1), y + 2.3, g2, 0.06, 0.8, 2.0, 0x2d4a5e, ry); }
      { const [a, bb] = P(-1, 0); b.boxB(X(a), y + 1.4, bb, 5.6, 1.0, 2.6, 0x4a6b3a, ry); for (const s of [-2.6, -0.4, 1.6]) for (const t of [-1.25, 1.25]) { const [pa, pb] = P(s, t); b.boxB(X(pa), y + 2.4, pb, 0.1, 1.6, 0.1, 0x3a3a3a, ry); } const [ra, rb] = P(-1, 0); b.boxB(X(ra), y + 4.0, rb, 5.8, 0.12, 2.8, 0xe8e2cf, ry); }
      for (const s of [-3, -1.2, 3]) for (const t of [-1.3, 1.3]) { const [wa, wb] = P(s, t); b.add(new THREE.CylinderGeometry(0.65, 0.65, 0.5, 12), 0x1e1e1e, X(wa), y + 0.65, wb, 1, 1, 1, Math.PI / 2, -ry, 0); }
      c.solid(u - 4, u + 4, v - 1.8, v + 1.8, y + 4); }
    c.path([[-36, 0], [-50, -6], [-66, -2], [-88, 4]], 2.6, 0xcdb98a, 0.04); c.path([[-36, 6], [-52, 10], [-70, 8], [-88, 12]], 2.6, 0xcdb98a, 0.04);
    c.path([[-26, 3], [-12, 6], [2, 8], [20, 2], [32, 2]], 1.6, 0xd9c79a, 0.04); c.path([[2, 8], [-2, 20], [-8, 22]], 1.4, 0xd9c79a, 0.04); c.path([[12, 4], [16, -16], [10, -22]], 1.4, 0xd9c79a, 0.04);
    c.sign('PARQUE NACIONAL CABO POLONIO', -40, -12, 0.3, 7.4, 1.0, { bg: '#1d6fb8', border: '#ffe0a0' });
    // monte de pinos y acacias detrás de las dunas, y matas en los bordes
    for (let i = 0; i < 700; i++) { const u = lerp(-88, -60, R()), v = lerp(-48, 44, R()); if (R() < 0.55 && polDl(u, v) > 4) c.tree(R() < 0.7 ? 'pino' : 'bush', u, v, 0.8 + R() * 0.5); }
    for (let i = 0; i < 120; i++) { const u = lerp(-58, 30, R()), v = lerp(-40, 40, R()); if (polDl(u, v) > 6 && polRock(u, v) < 0.2 && !spots.some(([a, bb]) => Math.hypot(u - a, v - bb) < 4) && Math.hypot(u + 29, v + 3) > 6 && Math.hypot(u - 4, v - 14) > 6) c.tree('bush', u, v, 0.5 + R() * 0.5); }
  }
};
