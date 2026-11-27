// Destinos de la Gira por el Uruguay: cuatro maquetas chicas, cada una con su relieve, su agua y sus construcciones.
// Quedan lejos hacia el este (x ≥ 1500), fuera de la vista desde Salto, y solo se muestra la del viaje en curso.
import * as THREE from 'three';
import { lerp, smooth, clamp, fbm, noise2, rng } from './util.js';
import { DEST } from './terrain.js';
import { Batch, C, textTex } from './world.js';

const TRI_X = new THREE.CylinderGeometry(1, 1, 1, 3).rotateX(-Math.PI / 2).rotateY(Math.PI / 2);
const TRI_Z = new THREE.CylinderGeometry(1, 1, 1, 3).rotateX(-Math.PI / 2);
const gableX = (b, x, y0, z, len, h, wid, col) => { const sy = h / 1.5; b.add(TRI_X, col, x, y0 + 0.5 * sy, z, len, sy, wid / 1.732); };
const gableZ = (b, x, y0, z, len, h, wid, col) => { const sy = h / 1.5; b.add(TRI_Z, col, x, y0 + 0.5 * sy, z, wid / 1.732, sy, len); };
const HALF = 90;

// ===================== 1. Represas del río Negro =====================
// Tres represas en cadena (de este a oeste): Rincón del Bonete (1945), Baygorria (1960) y Palmar (1982).
const NEG_DAMS = [[46, 'RINCÓN DEL BONETE · 1945', 9], [-4, 'BAYGORRIA · 1960', 6], [-54, 'PALMAR · 1982', 3]];
const negLv = u => u > 46 ? 9 : u > -4 ? 6 : u > -54 ? 3 : 0;
const negLvS = u => 3 * (smooth(-60, -48, u) + smooth(-10, 2, u) + smooth(40, 52, u));
const negMid = u => 6 * Math.sin(u * 0.045) + 3 * Math.sin(u * 0.11 + 1);
function negH(u, v) {
  const land = negLvS(u) + 3.2 + (fbm(u * 0.04 + 5, v * 0.04) - 0.3) * 4 + smooth(30, 80, Math.abs(v)) * 3;
  const lake = u > 50, rw = lake ? lerp(9, 48, smooth(50, 82, u)) * (0.85 + 0.3 * noise2(u * 0.05, v * 0.08)) : 8;
  const dv = Math.abs(v - (lake ? 0 : negMid(u))), bed = negLv(u) - 2.6;
  return lerp(bed, land, smooth(rw, rw + 7, dv));
}
const negCol = (u, v, h, ny) => { const w = negLv(u); if (h < w - 0.1) return 0x2c5a6e; if (h < w + 0.7) return 0xd9c79a; return ny < 0.8 ? 0x7a6a52 : (noise2(u * 0.08, v * 0.08) > 0.55 ? 0x8fb457 : 0x6db04a); };

// ===================== 2. Fray Bentos =====================
// Paisaje Industrial Fray Bentos (ex frigorífico Anglo) sobre el río Uruguay, la planta de celulosa con su central de
// biomasa y la hidrolinera del camión forestal a hidrógeno.
const frayShore = v => -42 + 5 * Math.sin(v * 0.04) - 16 * Math.exp(-(((v + 8) / 22) ** 2));   // la punta del Anglo entra en el río
function frayH(u, v) { const d = u - frayShore(v); return lerp(-4, 2.4 + (fbm(u * 0.03, v * 0.03) - 0.5) * 1.6 * smooth(10, 40, d), smooth(-4, 5, d)); }
const frayCol = (u, v, h, ny) => h < -0.1 ? 0x3a5a66 : h < 0.9 ? 0xd7c49a : (u > 10 && v > 10 ? 0x9aa58a : noise2(u * 0.07, v * 0.07) > 0.6 ? 0x95b85a : 0x72b04c);

// ===================== 3. Valle del Lunarejo =====================
// Quebrada con laderas de basalto, monte nativo, el arroyo Lunarejo con una cascada y un mirador arriba.
const lunMid = v => 8 * Math.sin(v * 0.05 + 0.5) + 4 * Math.sin(v * 0.13);
function lunH(u, v) {
  const d = Math.abs(u - lunMid(v)), floor = 2.2 + smooth(-60, -74, v) * 6;   // al norte, un escalón: de ahí cae la cascada
  const wall = 16 * smooth(16, 34, d) * (0.85 + 0.3 * fbm(u * 0.05, v * 0.05)) + 2 * smooth(34, 60, d);
  const cw = 2.6 + smooth(-60, 60, v) * 1.6, creek = smooth(cw, cw + 3, d);
  return lerp(-1.4 + smooth(-60, -74, v) * 6.2, floor + wall + (fbm(u * 0.1, v * 0.1) - 0.5) * 0.8, creek);
}
const lunWater = (u, v) => v < -66 ? 6 : 0;
const lunCol = (u, v, h, ny) => h < lunWater(u, v) - 0.1 ? 0x2f5a52 : ny < 0.72 ? (noise2(u * 0.2, v * 0.2) > 0.5 ? 0x5c4a3e : 0x6b5444) : h > 14 ? 0xa9a46a : noise2(u * 0.09, v * 0.09) > 0.5 ? 0x5e9a44 : 0x4f8a3c;

// ===================== 4. Cabo Polonio =====================
// Pueblo sin red eléctrica entre dunas, con paneles solares y molinitos; el faro sobre la punta de piedra y los lobos
// marinos en las rocas y en las islas.
function polShoreD(u, v) { return Math.min(52 - v + 6 * Math.sin(u * 0.06), 74 - u + 8 * Math.sin(v * 0.05)); }   // positivo = tierra
const ISLAS = [[70, 74, 7], [48, 80, 5], [84, 56, 4]];
function polH(u, v) {
  const d = polShoreD(u, v);
  let h = lerp(-3 - 7 * smooth(-2, -26, d), 1.6 + 4.5 * smooth(-10, -60, u) * (0.6 + 0.6 * fbm(u * 0.035 + 3, v * 0.05)) + (fbm(u * 0.08, v * 0.08) - 0.5) * 0.8, smooth(-3, 6, d));
  const pd = Math.hypot(u - 56, (v - 40) * 0.8); h = Math.max(h, 3.6 * smooth(14, 4, pd) + (noise2(u * 0.4, v * 0.4) - 0.5) * 1.2 * smooth(16, 6, pd));   // punta de piedra del faro
  for (const [x, z, r] of ISLAS) { const di = Math.hypot(u - x, v - z); h = Math.max(h, 2.2 * smooth(r, r * 0.3, di) + (noise2(u * 0.5, v * 0.5) - 0.5) * 0.8 * smooth(r, 0, di) - 0.4); }
  return h;
}
const polCol = (u, v, h, ny) => { if (h < -0.1) return 0x2a6f8a; const pd = Math.hypot(u - 56, (v - 40) * 0.8); if (pd < 13 || ISLAS.some(([x, z, r]) => Math.hypot(u - x, v - z) < r)) return ny < 0.75 ? 0x8e8279 : noise2(u * 0.3, v * 0.3) > 0.5 ? 0xa89a8e : 0xbcb0a2; return u < -12 ? 0xead9a8 : noise2(u * 0.06, v * 0.06) > 0.6 ? 0x9fb46a : 0xe2cf9c; };

export const DESTINOS = [
  { k: 'negro', name: 'Represas del río Negro', where: 'Durazno, Tacuarembó y Río Negro', ox: 1500, h: negH, water: negLv, col: negCol,
    pool: [[46, HALF, -HALF, HALF, 9], [-4, 46, -24, 24, 6], [-54, -4, -24, 24, 3], [-HALF, -54, -24, 24, 0]], spawn: [-70, 40, 3.4], stop: [-72, 46] },
  { k: 'fray', name: 'Fray Bentos', where: 'Río Negro', ox: 2400, h: frayH, water: () => 0, col: frayCol, pool: [[-HALF, -10, -HALF, HALF, 0]], spawn: [40, -60, -0.6], stop: [44, -66] },
  { k: 'lunarejo', name: 'Valle del Lunarejo', where: 'Rivera', ox: 3300, h: lunH, water: lunWater, col: lunCol, pool: [[-30, 30, -HALF, -66, 6], [-30, 30, -66, HALF, 0]], spawn: [6, 70, 3.1], stop: [10, 78] },
  { k: 'polonio', name: 'Cabo Polonio', where: 'Rocha', ox: 4200, h: polH, water: () => 0, col: polCol, pool: [[-HALF, HALF, 20, HALF, 0], [40, HALF, -HALF, 20, 0]], spawn: [-50, -40, 0.8], stop: [-56, -46] }
];
export const destAt = x => DESTINOS[clamp(Math.round((x - 1500) / 900), 0, DESTINOS.length - 1)];

export function buildDestinos(w) {
  const _c = new THREE.Color();
  w.destH = (x, z) => { const d = destAt(x); return d.h(x - d.ox, z); };
  DEST.water = (x, z) => { const d = destAt(x); return d.water(x - d.ox, z); };
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
    // construcciones, árboles y carteles de cada destino
    const b = new Batch(), trees = [], ctx = { w, b, d, trees, grp, gy: (u, v) => w.groundAt(d.ox + u, v), X: u => d.ox + u, R: rng(d.ox) };
    ctx.sign = (text, u, v, ry, sw, sh, o = {}) => { const tex = textTex(text, { w: 512, h: Math.round(512 * sh / sw), bg: o.bg || '#12325a', fg: o.fg || '#ffffff', border: o.border || '#ffc93c', size: 72 });
      const y = ctx.gy(u, v), m = new THREE.Mesh(new THREE.PlaneGeometry(sw, sh), new THREE.MeshStandardMaterial({ map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.3, roughness: 0.8 }));
      m.position.set(d.ox + u, y + 2.4 + sh / 2, v); m.rotation.y = ry; grp.add(m); const m2 = m.clone(); m2.rotation.y = ry + Math.PI; grp.add(m2);
      const s = Math.cos(ry) * (sw / 2 - 0.3), c = -Math.sin(ry) * (sw / 2 - 0.3); b.boxB(d.ox + u + s, y, v + c, 0.2, 2.5, 0.2, C.steelD); b.boxB(d.ox + u - s, y, v - c, 0.2, 2.5, 0.2, C.steelD); };
    ctx.tree = (type, u, v, s = 1) => { if (d.h(u, v) < d.water(u, v) + 0.4) return; trees.push({ type, x: d.ox + u, z: v, s, y: d.h(u, v) }); };
    ctx.inter = (id, u, v, o = {}) => { const it = w.addInter(id, d.ox + u, v, Object.assign({ console: false, h: 3.4 }, o)); grp.add(it.group); return it; };
    ctx.solid = (u0, u1, v0, v1, top) => w.addSolid(d.ox + u0, d.ox + u1, v0, v1, top);
    ctx.plat = (u0, u1, v0, v1, top) => w.addPlatform(d.ox + u0, d.ox + u1, v0, v1, top);
    // parada del tren de la Gira: andén chico con cartel, para volver a Salto
    { const [su, sv] = d.stop, y = ctx.gy(su, sv); b.boxB(ctx.X(su), y - 0.3, sv, 8, 0.75, 3, 0xc9c0ad); ctx.plat(su - 4, su + 4, sv - 1.5, sv + 1.5, y + 0.45);
      b.boxB(ctx.X(su), y + 0.45, sv - 1.2, 6, 2.6, 0.12, 0xa65a3f); b.box(ctx.X(su), y + 3.15, sv - 0.4, 7, 0.14, 2.2, 0x7a5a3c); for (const s of [-2.8, 2.8]) b.boxB(ctx.X(su + s), y + 0.45, sv + 0.5, 0.14, 2.7, 0.14, 0x2f4a3a);
      b.boxB(ctx.X(su), y + 0.45, sv - 0.6, 2.4, 0.45, 0.6, C.wood); ctx.inter('v:volver', su, sv + 0.6, { h: 3.6, r: 3.2 }); ctx.sign('TREN DE LA GIRA', su + 6, sv + 2.4, 0, 5.4, 1.0, { bg: '#7a2e1d', border: '#ffd23f' }); }
    BUILD[d.k](ctx);
    const bm = b.mesh(w.mats.solid); if (bm) { bm.castShadow = true; bm.receiveShadow = true; grp.add(bm); }
    for (const m of w.plantTrees(trees)) { w.scene.remove(m); grp.add(m); }
  }
}

// ---------- Construcciones de cada destino ----------
const BUILD = {
  negro(c) {
    const { b, d, X, gy, R } = c;
    for (const [u, name, lv] of NEG_DAMS) {
      const top = lv + 3.4, half = 14;
      b.boxB(X(u), -3, 0, 5, top + 3, half * 2, 0xc9c2b4);                         // muro de hormigón
      b.boxB(X(u - 1.6), lv - 3, 0, 1.6, 3, half * 2 - 2, 0xb5ad9e);                  // pie del muro aguas abajo
      b.boxB(X(u), top, 0, 5.4, 0.25, half * 2 + 0.4, 0x8f8a80); c.plat(u - 2.7, u + 2.7, -half, half, top + 0.25);
      for (const s of [-1, 1]) { b.boxB(X(u), top + 0.25, s * (half + 0.1), 5.4, 0.9, 0.16, 0xe8e3d8); c.solid(u - 2.7, u + 2.7, s * half - 0.2, s * half + 0.2, top + 1.2); }
      for (let k = -2; k <= 2; k++) { b.boxB(X(u + 0.4), top + 0.25, k * 4.2, 1.6, 2.2, 0.5, 0x6a6e75); b.boxB(X(u - 2.6), lv - 3.2, k * 4.2, 0.2, top - lv + 2.6, 2.6, 0x3a5a6e); }   // compuertas
      // casa de máquinas en la margen sur
      const gy0 = gy(u - 8, -half - 7); b.boxB(X(u - 8), gy0, -half - 7, 11, 6, 8, 0xe9e2d0); b.boxB(X(u - 8), gy0 + 6, -half - 7, 11.4, 0.4, 8.4, 0x9a8a72);
      for (let k = -2; k <= 2; k++) b.boxB(X(u - 8 + k * 2), gy0 + 2, -half - 2.95, 1.1, 2.4, 0.08, 0x2d4a5e);
      c.solid(u - 13.5, u - 2.5, -half - 11, -half - 3, gy0 + 6.4);
      c.sign(name, u - 8, -half - 13, 0, 7.6, 1.1, { bg: '#1d4f8a', border: '#ffd23f' });
      // torre de alta tensión que se lleva la energía
      const tu = u - 16, tv = -half - 22, ty = gy(tu, tv); for (const [sx, sz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) b.add(new THREE.CylinderGeometry(0.08, 0.12, 13, 4), 0x9aa0a6, X(tu + sx * 0.9), ty + 6.4, tv + sz * 0.9, 1, 1, 1, sz * 0.07, 0, -sx * 0.07);
      b.boxB(X(tu), ty + 11, tv, 6, 0.2, 0.3, 0x9aa0a6);
    }
    c.sign('LAGO DEL RINCÓN DEL BONETE', 62, -40, 0.3, 8.4, 1.1, { bg: '#1d6fb8', border: '#ffffff' });
    c.sign('RÍO NEGRO', -74, -16, 0, 4.6, 1.0, { bg: '#1d6fb8', border: '#ffffff' });
    // placa del hito de la ingeniería junto a Bonete
    { const u = 38, v = -24, y = gy(u, v); b.boxB(X(u), y, v, 1.6, 1.3, 0.5, 0x7a6a5a); b.box(X(u), y + 1.0, v + 0.27, 1.2, 0.8, 0.06, 0xb08a3a, 0, -0.3); c.inter('d1:placa', u, v + 1.2, { h: 3.0, r: 3 }); }
    c.inter('d1:mando', 30, -20, { h: 3.4, r: 3 }); b.boxB(X(30), gy(30, -20), -20, 2.2, 1.1, 1.0, 0x49505a); b.box(X(30), gy(30, -20) + 1.3, -19.9, 2.0, 0.7, 0.1, 0x103040, 0, -0.45);
    for (let i = 0; i < 160; i++) { const u = lerp(-88, 88, c.R()), v = lerp(-88, 88, c.R()), h = d.h(u, v); if (h < d.water(u, v) + 1.2 || Math.abs(v) < 26 && NEG_DAMS.some(([du]) => Math.abs(u - du) < 18) || Math.hypot(u - d.stop[0], v - d.stop[1]) < 8) continue; c.tree(c.R() < 0.3 ? 'euca' : c.R() < 0.75 ? 'native' : 'bush', u, v, 0.8 + c.R() * 0.5); }
  },
  fray(c) {
    const { b, d, X, gy, R } = c;
    // frigorífico Anglo: naves de ladrillo, la chimenea con su nombre y el muelle sobre el río
    const brick = 0xa65a3f, y = gy(-30, -10);
    for (const [u, v, w2, d2, h] of [[-32, -14, 18, 12, 8], [-14, -18, 14, 10, 6], [-24, 4, 22, 9, 10], [-6, 2, 10, 14, 7]]) {
      b.boxB(X(u), y, v, w2, h, d2, brick); b.boxB(X(u), y + h, v, w2 + 0.3, 0.4, d2 + 0.3, 0x7a3a28);
      for (let k = -Math.floor(w2 / 4); k <= Math.floor(w2 / 4); k++) for (let f = 0; f < Math.floor(h / 3); f++) b.boxB(X(u + k * 2), y + 1.4 + f * 3, v + d2 / 2 + 0.04, 0.9, 1.4, 0.06, 0x2d3a44);
      c.solid(u - w2 / 2, u + w2 / 2, v - d2 / 2, v + d2 / 2, y + h);
    }
    b.cyl(X(-40), y, -2, 1.6, 2.2, 24, 0x8f4a32, 10); b.cyl(X(-40), y + 24, -2, 1.9, 1.9, 0.8, 0x6a3424, 10); c.solid(-42, -38, -4, 0, y + 25);
    const at = textTex('ANGLO', { w: 512, h: 128, fg: '#f4f1ea', bg: '#8f4a32', border: '#8f4a32', size: 100 });
    const an = new THREE.Mesh(new THREE.PlaneGeometry(13, 3.2), new THREE.MeshStandardMaterial({ map: at, emissive: 0xffffff, emissiveMap: at, emissiveIntensity: 0.15, roughness: 0.8 }));
    an.rotation.z = Math.PI / 2; an.position.set(X(-40), y + 15, 0.02); c.grp.add(an);
    b.boxB(X(-54), -2, -26, 26, 4.6, 4, 0x9a8a72); c.plat(-67, -41, -28, -24, 2.6);   // muelle
    c.sign('PAISAJE INDUSTRIAL FRAY BENTOS · PATRIMONIO MUNDIAL', -8, -32, 0, 12.4, 1.3, { bg: '#7a2e1d', border: '#ffd23f' });
    c.inter('d2:sala', -24, 9.2, { h: 3.6, r: 3.4 });
    // planta de celulosa con su central de biomasa (caldera, chimenea con vapor y pila de troncos)
    const py = gy(46, 46);
    b.boxB(X(46), py, 46, 30, 9, 18, 0xdfe3e6); b.boxB(X(46), py + 9, 46, 30.4, 0.4, 18.4, 0x8f9aa3); c.solid(31, 61, 37, 55, py + 9.4);
    for (const [u, v] of [[30, 66], [38, 66]]) { b.cyl(X(u), py, v, 3, 3, 14, 0xc9ced3, 14); c.solid(u - 3, u + 3, v - 3, v + 3, py + 14); }
    b.cyl(X(64), py, 40, 1.4, 1.8, 30, 0xf4f4f4, 10); for (let k = 0; k < 3; k++) b.cyl(X(64), py + 22 + k * 3, 40, 1.5, 1.5, 0.6, 0xd62828, 10); c.solid(62, 66, 38, 42, py + 30);
    for (let i = 0; i < 6; i++) for (let k = 0; k < 4; k++) b.add(new THREE.CylinderGeometry(0.35, 0.35, 8, 6), 0x8a6a45, X(70 + i * 0.75), py + 0.4 + k * 0.6, 62 + (k % 2) * 0.35, 1, 1, 1, Math.PI / 2, 0, 0);
    c.sign('CENTRAL DE BIOMASA', 40, 30, 0, 6.6, 1.0, { bg: '#2e7d32', border: '#ffe0a0' }); c.inter('d2:caldera', 46, 35.6, { h: 3.6, r: 3.4 });
    c.steam = [X(64), py + 31, 40];
    // hidrolinera y camión forestal a hidrógeno
    const hu = 30, hv = -36, hy = gy(hu, hv);
    b.boxB(X(hu), hy, hv, 9, 0.2, 7, 0xd8d2c4); b.boxB(X(hu), hy + 4, hv, 9.4, 0.3, 7.4, 0x57e389); for (const [sx, sz] of [[-4, -3], [4, -3], [-4, 3], [4, 3]]) b.boxB(X(hu + sx), hy, hv + sz, 0.24, 4, 0.24, 0xe8e8e8);
    b.boxB(X(hu), hy, hv, 1.0, 1.8, 0.6, 0x2a9d8f); c.inter('d2:h2', hu + 1.6, hv + 1.6, { h: 3.6, r: 3.2 });
    for (const [u, v, r] of [[hu + 9, hv - 2, 1.6], [hu + 9, hv + 2, 1.6]]) { b.add(new THREE.CylinderGeometry(r, r, 7, 12), 0xf4f4f4, X(u), hy + r + 0.2, v, 1, 1, 1, 0, 0, Math.PI / 2); }
    c.sign('HIDROLINERA · HIDRÓGENO VERDE', hu, hv - 6, 0, 8.6, 1.0, { bg: '#1b7f5a', border: '#ffffff' });
    // puente internacional hacia Argentina (el tramo que entra en la maqueta)
    for (let u = -14; u > -HALF; u -= 2) { const yy = 6 + smooth(-14, -50, u) * 6; b.boxB(X(u), yy, -74, 2.1, 0.5, 6, 0xbab4a8); if (u % 12 === 0) b.boxB(X(u), -4, -74, 1.6, yy + 4, 4, 0xa8a296); }
    c.sign('PUENTE GENERAL SAN MARTÍN · A ARGENTINA', -6, -66, 0, 9.4, 1.0, { bg: '#1d4f8a', border: '#ffffff' });
    for (let i = 0; i < 130; i++) { const u = lerp(-6, 88, c.R()), v = lerp(-88, 88, c.R()); if (d.h(u, v) < 1.2 || (u > 26 && u < 76 && v > 26 && v < 72) || (Math.abs(u - hu) < 12 && Math.abs(v - hv) < 9) || Math.hypot(u - d.stop[0], v - d.stop[1]) < 8 || (u < 4 && v > -26 && v < 14)) continue; c.tree(c.R() < 0.55 ? 'euca' : c.R() < 0.8 ? 'native' : 'bush', u, v, 0.8 + c.R() * 0.4); }
  },
  lunarejo(c) {
    const { b, d, X, gy, R } = c;
    // centro de visitantes en el fondo del valle
    const cu = lunMid(40) + 14, cv = 40, cy = gy(cu, cv);
    b.boxB(X(cu), cy, cv, 10, 3.4, 6, 0x8a623c); gableZ(b, X(cu), cy + 3.4, cv, 6.8, 1.8, 10.8, 0x5f6a73); c.solid(cu - 5, cu + 5, cv - 3, cv + 3, cy + 5);
    for (let k = -1; k <= 1; k++) b.boxB(X(cu - 5.04), cy + 1, cv + k * 1.8, 0.08, 1.4, 1.1, 0x2d4a5e);
    c.sign('PAISAJE PROTEGIDO VALLE DEL LUNAREJO', cu - 9, cv + 8, -0.4, 10.4, 1.2, { bg: '#2e5a2e', border: '#ffe0a0' });
    // puntos para tomar muestras de agua del arroyo y la cascada
    [[30], [-10], [-58]].forEach(([v], i) => c.inter('d3:m' + i, lunMid(v) + 3.6, v, { h: 2.6, r: 3 }));
    // cascada: lámina de agua desde el escalón del norte
    const fu = lunMid(-67), fall = new THREE.Mesh(new THREE.PlaneGeometry(6, 6.6), new THREE.MeshBasicMaterial({ color: 0xcfefff, transparent: true, opacity: 0.72, side: THREE.DoubleSide, depthWrite: false }));
    fall.position.set(X(fu), 3, -66.5); c.grp.add(fall); c.fall = fall;
    // mirador arriba de la ladera oeste, con baranda y una escalera de piedra
    const mu = lunMid(10) - 40, my = gy(mu, 10);
    b.boxB(X(mu), my, 10, 7, 0.3, 6, 0xb89a74); for (const s of [-3, 3]) { b.boxB(X(mu + 3.5), my + 0.3, 10 + s, 0.14, 1.1, 0.14, C.wood); } b.boxB(X(mu + 3.5), my + 1.3, 10, 0.12, 0.12, 6, C.wood);
    c.inter('d3:mirador', mu + 1, 10, { h: 3.4, r: 3.4 });
    for (let k = 0; k < 16; k++) { const u = lerp(mu + 4, lunMid(14) - 6, k / 15), v = 14 + k * 0.6, y = d.h(u, v); b.boxB(X(u), y - 0.2, v, 1.6, 0.4, 1.4, 0x8a7a66); }
    c.sign('MIRADOR', mu + 2, 4, 0.6, 3.4, 0.9, { bg: '#5c4a3e', border: '#ffd23f' });
    // monte nativo de quebrada: denso al pie de las laderas
    for (let i = 0; i < 420; i++) { const v = lerp(-86, 86, c.R()), u = lunMid(v) + (c.R() < 0.5 ? -1 : 1) * lerp(5, 34, c.R() ** 1.4), h = d.h(u, v); if (h < d.water(u, v) + 0.4 || Math.hypot(u - cu, v - cv) < 9 || Math.hypot(u - d.stop[0], v - d.stop[1]) < 7 || (v > -62 && v < -54 && Math.abs(u - lunMid(v)) < 7)) continue; c.tree(c.R() < 0.6 ? 'native' : c.R() < 0.8 ? 'ceibo' : 'bush', u, v, 0.8 + c.R() * 0.6); }
    for (let i = 0; i < 60; i++) { const u = lerp(-88, 88, c.R()), v = lerp(-88, 88, c.R()); if (d.h(u, v) > 14) { const s = 0.5 + c.R() * 1.1; b.add(new THREE.DodecahedronGeometry(s, 0), c.R() < 0.5 ? 0x5c4a3e : 0x6b5444, X(u), d.h(u, v) + s * 0.3, v, 1, 0.7, 1, c.R(), c.R() * 6, 0); } }
  },
  polonio(c) {
    const { b, d, X, gy, R } = c;
    // faro sobre la punta de piedra (1881)
    const fu = 58, fv = 38, fy = gy(fu, fv);
    b.cyl(X(fu), fy, fv, 1.9, 2.5, 18, 0xf4f1ea, 14); b.cyl(X(fu), fy + 18, fv, 2.5, 2.5, 0.4, 0x3a3f46, 14); b.cyl(X(fu), fy + 18.4, fv, 1.5, 1.5, 2.2, 0xfff3c4, 10); b.cyl(X(fu), fy + 20.6, fv, 0.4, 1.7, 1.2, 0x3a3f46, 10);
    b.boxB(X(fu - 3.4), fy, fv, 4, 2.6, 3.4, 0xf4f1ea); c.solid(fu - 5.4, fu + 2.5, fv - 2.5, fv + 2.5, fy + 18);
    c.inter('d4:faro', fu - 3.4, fv - 3, { h: 3.6, r: 3.4 }); c.sign('FARO DE CABO POLONIO · 1881', fu - 10, fv - 8, 0.3, 7.6, 1.0, { bg: '#1d4f8a', border: '#ffffff' });
    c.beam = [X(fu), fy + 19.4, fv];
    // casitas de colores con paneles solares y molinitos, sin cables
    const COL = [0xf2c230, 0x5ad1ff, 0xff8fab, 0x57e389, 0xf4f1ea, 0xe8732a, 0x9a62c8, 0x2a9d8f];
    const casas = [[-6, 6], [6, 12], [16, 2], [-14, 18], [2, 26], [20, 22], [-22, 4], [28, 10], [10, -8], [-4, -12]];
    casas.forEach(([u, v], i) => { const y = gy(u, v), ry = (c.R() - 0.5) * 0.8, w2 = 4 + c.R() * 1.5, d2 = 3.4 + c.R();
      b.boxB(X(u), y - 0.3, v, w2, 2.6, d2, COL[i % COL.length], ry); b.add(TRI_X, 0x6a6e75, X(u), y + 2.3 + 0.5 * 0.8, v, w2 + 0.4, 0.8, (d2 + 0.6) / 1.732, 0, ry, 0);
      b.box(X(u) + Math.sin(ry) * 0.6, y + 3.0, v + Math.cos(ry) * 0.6, 1.8, 0.06, 1.2, 0x1f3c88, ry, -0.5);   // panel solar
      if (i % 3 === 0) { const mu = u + 3, mv = v - 2, my = gy(mu, mv); b.boxB(X(mu), my, mv, 0.12, 5, 0.12, 0x9aa0a6); for (let k = 0; k < 3; k++) b.box(X(mu), my + 5, mv + 0.1, 0.12, 1.3, 0.04, 0xf4f4f4, 0, 0, k * 2.094); }
      c.solid(u - w2 / 2, u + w2 / 2, v - d2 / 2, v + d2 / 2, y + 3); });
    c.casas = casas;
    c.inter('d4:casa', 2, 22.6, { h: 3.2, r: 3 });
    c.inter('d4:lobos', 64, 50, { h: 3.0, r: 4 });
    c.sign('CABO POLONIO · PARQUE NACIONAL', -30, -20, 0.4, 8.6, 1.1, { bg: '#1d6fb8', border: '#ffe0a0' });
    // senda de tablas entre las dunas
    for (let k = 0; k < 30; k++) { const u = lerp(-48, 4, k / 29), v = lerp(-38, 4, k / 29) + Math.sin(k * 0.5) * 2, y = d.h(u, v); b.boxB(X(u), y - 0.05, v, 1.4, 0.12, 2, 0x9a7a52, Math.atan2(42, 52)); }
    for (let i = 0; i < 40; i++) { const u = lerp(-88, -30, c.R()), v = lerp(-88, 20, c.R()); if (d.h(u, v) > 2) c.tree(c.R() < 0.5 ? 'pino' : 'bush', u, v, 0.8 + c.R() * 0.4); }
  }
};
