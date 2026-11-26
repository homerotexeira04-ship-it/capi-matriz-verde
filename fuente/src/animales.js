// Modelos de la fauna con cuerpo, cabeza y patas por separado (cada parte es una malla con instancias):
// así cada animal camina moviendo las patas, baja la cabeza para comer y la levanta para mirar a Capi.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const _v = new THREE.Vector3(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _m = new THREE.Matrix4(), _up = new THREE.Vector3(0, 1, 0);
function kit() {
  const parts = [];
  const add = (g, col) => { g = g.index ? g.toNonIndexed() : g; const n = g.attributes.position.count, a = new Float32Array(n * 3), c = new THREE.Color(col); for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); if (g.attributes.uv) g.deleteAttribute('uv'); parts.push(g); };
  return {
    // elipsoide: centro, radios y giro
    E(col, x, y, z, rx, ry, rz, ax = 0, ay = 0, az = 0, det = 1) { const g = new THREE.IcosahedronGeometry(1, det); g.applyMatrix4(_m.compose(_v.set(x, y, z), _q.setFromEuler(_e.set(ax, ay, az)), new THREE.Vector3(rx, ry, rz))); add(g, col); },
    // tronco de cono entre dos puntos (patas, cuellos, colas, picos)
    C(col, a, b, r1, r2, seg = 6) { const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), d = B.clone().sub(A), L = d.length(); const g = new THREE.CylinderGeometry(r2, r1, L, seg); g.translate(0, L / 2, 0); g.applyMatrix4(_m.compose(A, _q.setFromUnitVectors(_up, d.normalize()), new THREE.Vector3(1, 1, 1))); add(g, col); },
    B(col, x, y, z, sx, sy, sz, ax = 0) { const g = new THREE.BoxGeometry(sx, sy, sz); g.rotateX(ax); g.translate(x, y, z); add(g, col); },
    done() { return mergeGeometries(parts, false); }
  };
}
const eyes = (k, x, y, z, r = 0.018, col = 0x111111) => { for (const s of [-1, 1]) k.E(col, s * x, y, z, r, r, r, 0, 0, 0, 0); };

// Cada especie: cuerpo (fijo), cabeza (gira sobre «pivot») y una pata (gira sobre la cadera, va hacia abajo) que se repite en «hips»
const SPEC = {
  venado() {
    const coat = 0xc08a52, dark = 0x8a5f3a, light = 0xf0e8d8, b = kit(), h = kit(), l = kit();
    b.E(coat, 0, 0.86, 0.02, 0.2, 0.22, 0.46); b.E(coat, 0, 0.9, 0.3, 0.19, 0.23, 0.22); b.E(coat, 0, 0.9, -0.3, 0.2, 0.22, 0.24);
    b.E(light, 0, 0.74, 0.02, 0.14, 0.09, 0.36); b.E(light, 0, 0.93, -0.52, 0.11, 0.12, 0.05); b.E(light, 0, 1.0, -0.55, 0.045, 0.08, 0.035, -0.5);
    h.C(coat, [0, -0.06, -0.06], [0, 0.38, 0.12], 0.085, 0.055); h.E(light, 0, 0.16, 0.06, 0.05, 0.1, 0.04);
    h.E(coat, 0, 0.46, 0.22, 0.08, 0.085, 0.16, 0.35); h.E(0x3a2a20, 0, 0.4, 0.36, 0.045, 0.042, 0.05); h.E(light, 0, 0.42, 0.3, 0.06, 0.03, 0.06);
    for (const s of [-1, 1]) { h.E(coat, s * 0.075, 0.56, 0.16, 0.028, 0.085, 0.045, 0, 0, s * 0.7); h.C(0xd9c6a0, [s * 0.04, 0.53, 0.18], [s * 0.1, 0.78, 0.14], 0.016, 0.01, 4); h.C(0xd9c6a0, [s * 0.075, 0.66, 0.16], [s * 0.08, 0.72, 0.27], 0.01, 0.006, 4); h.C(0xd9c6a0, [s * 0.1, 0.78, 0.14], [s * 0.07, 0.86, 0.08], 0.01, 0.005, 4); }
    eyes(h, 0.07, 0.5, 0.28, 0.02);
    l.C(coat, [0, 0.02, 0], [0, -0.36, 0], 0.048, 0.032); l.C(dark, [0, -0.36, 0], [0, -0.64, 0.015], 0.028, 0.022); l.B(0x1c1814, 0, -0.67, 0.025, 0.05, 0.04, 0.07);
    return { body: b.done(), head: h.done(), pivot: [0, 0.92, 0.4], leg: l.done(), hips: [[-0.11, 0.72, 0.34], [0.11, 0.72, 0.34], [-0.11, 0.74, -0.36], [0.11, 0.74, -0.36]], gait: [0, Math.PI, Math.PI, 0], graze: 1.75 };
  },
  vaca() {
    const red = 0x8b3b22, white = 0xf2ece0, b = kit(), h = kit(), l = kit();
    b.E(red, 0, 1.0, 0, 0.36, 0.36, 0.68); b.E(red, 0, 1.02, 0.42, 0.34, 0.37, 0.3); b.E(red, 0, 1.04, -0.44, 0.35, 0.35, 0.3);
    b.E(white, 0, 0.78, 0.3, 0.24, 0.18, 0.32); b.E(white, 0, 0.98, 0.66, 0.18, 0.2, 0.12); b.E(0xd9a08a, 0, 0.66, -0.3, 0.12, 0.08, 0.12);
    b.C(red, [0, 1.15, -0.7], [0, 0.55, -0.78], 0.035, 0.025, 5); b.E(white, 0, 0.5, -0.79, 0.05, 0.08, 0.05);
    h.C(red, [0, -0.02, -0.08], [0, 0.08, 0.3], 0.21, 0.16); h.E(white, 0, 0.06, 0.46, 0.15, 0.16, 0.22, 0.45); h.E(0xd9a08a, 0, -0.06, 0.64, 0.1, 0.085, 0.085); h.E(red, 0, 0.18, 0.38, 0.14, 0.07, 0.1);
    for (const s of [-1, 1]) { h.E(red, s * 0.18, 0.12, 0.38, 0.085, 0.04, 0.05, 0, 0, s * 0.3); h.C(0xe8e0c8, [s * 0.1, 0.19, 0.4], [s * 0.24, 0.24, 0.4], 0.028, 0.012, 5); }
    eyes(h, 0.11, 0.11, 0.54, 0.022);
    l.C(red, [0, 0.04, 0], [0, -0.42, 0], 0.09, 0.07); l.C(white, [0, -0.42, 0], [0, -0.6, 0.01], 0.065, 0.058); l.B(0x2a2420, 0, -0.63, 0.02, 0.12, 0.06, 0.14);
    return { body: b.done(), head: h.done(), pivot: [0, 1.04, 0.6], leg: l.done(), hips: [[-0.2, 0.66, 0.44], [0.2, 0.66, 0.44], [-0.2, 0.66, -0.48], [0.2, 0.66, -0.48]], gait: [0, Math.PI, Math.PI, 0], graze: 1.25 };
  },
  nandu() {
    const g1 = 0x9a9180, g2 = 0x847b6c, b = kit(), h = kit(), l = kit();
    b.E(g1, 0, 1.1, 0, 0.3, 0.28, 0.44); b.E(g2, 0, 1.2, -0.05, 0.27, 0.17, 0.38); b.E(0xa8a090, 0, 0.98, -0.34, 0.24, 0.22, 0.2, 0.4);
    for (const s of [-1, 1]) b.E(0xa49c8c, s * 0.24, 1.02, -0.04, 0.07, 0.2, 0.34, 0.15);
    h.E(0x3a3630, 0, 0.02, 0.03, 0.09, 0.1, 0.09); h.C(g1, [0, 0, 0], [0, 0.66, 0.12], 0.07, 0.04); h.E(0x8f887c, 0, 0.7, 0.17, 0.055, 0.05, 0.08); h.E(0x6a6050, 0, 0.68, 0.27, 0.03, 0.014, 0.06);
    eyes(h, 0.045, 0.72, 0.2, 0.013);
    l.E(g1, 0, -0.06, 0, 0.075, 0.14, 0.09); l.C(0x8a8a82, [0, -0.16, 0], [0, -1.05, 0.03], 0.04, 0.028); l.B(0x7a7a72, 0, -1.08, 0.08, 0.08, 0.03, 0.18);
    return { body: b.done(), head: h.done(), pivot: [0, 1.24, 0.3], leg: l.done(), hips: [[-0.12, 1.1, 0.02], [0.12, 1.1, 0.02]], gait: [0, Math.PI], graze: 0.75 };
  },
  aguara() {
    const red = 0xc4602a, blk = 0x1c1814, wh = 0xf2ece0, b = kit(), h = kit(), l = kit();
    b.E(red, 0, 0.98, 0, 0.17, 0.19, 0.44); b.E(red, 0, 1.0, 0.28, 0.16, 0.2, 0.2); b.E(blk, 0, 1.13, 0.1, 0.09, 0.08, 0.3); b.E(0xe8a060, 0, 0.86, 0, 0.12, 0.08, 0.3);
    b.C(red, [0, 1.02, -0.42], [0, 0.66, -0.68], 0.075, 0.055); b.E(wh, 0, 0.6, -0.71, 0.06, 0.08, 0.06);
    h.C(red, [0, -0.04, -0.04], [0, 0.17, 0.12], 0.1, 0.08); h.C(blk, [0, 0.02, -0.06], [0, 0.18, 0.06], 0.05, 0.04, 5); h.E(wh, 0, 0.08, 0.12, 0.05, 0.07, 0.04);
    h.E(red, 0, 0.22, 0.2, 0.085, 0.085, 0.11); h.C(0xb04f20, [0, 0.19, 0.26], [0, 0.14, 0.44], 0.05, 0.026); h.E(blk, 0, 0.14, 0.45, 0.02, 0.02, 0.02, 0, 0, 0, 0);
    for (const s of [-1, 1]) { h.E(red, s * 0.065, 0.38, 0.17, 0.038, 0.11, 0.028, 0, 0, s * 0.25); h.E(wh, s * 0.064, 0.37, 0.19, 0.02, 0.07, 0.01, 0, 0, s * 0.25); }
    eyes(h, 0.05, 0.25, 0.28, 0.015);
    l.C(blk, [0, 0.04, 0], [0, -0.86, 0.01], 0.045, 0.028); l.B(blk, 0, -0.88, 0.03, 0.05, 0.035, 0.08);
    return { body: b.done(), head: h.done(), pivot: [0, 1.08, 0.4], leg: l.done(), hips: [[-0.1, 0.9, 0.3], [0.1, 0.9, 0.3], [-0.1, 0.92, -0.32], [0.1, 0.92, -0.32]], gait: [0, Math.PI, Math.PI, 0], graze: 0.6 };
  },
  zorro() {
    const gr = 0x8d8a84, dk = 0x66625c, tan = 0xb38e64, wh = 0xe8e2d6, b = kit(), h = kit(), l = kit();
    b.E(gr, 0, 0.45, 0, 0.13, 0.14, 0.3); b.E(dk, 0, 0.52, -0.02, 0.1, 0.07, 0.26); b.E(wh, 0, 0.38, 0.04, 0.09, 0.07, 0.2);
    b.E(0x7f7b74, 0, 0.4, -0.44, 0.08, 0.085, 0.24, -0.6); b.E(0x2a2622, 0, 0.27, -0.63, 0.065, 0.065, 0.075, -0.6);
    h.C(gr, [0, -0.03, -0.03], [0, 0.08, 0.08], 0.08, 0.065); h.E(tan, 0, 0.1, 0.12, 0.075, 0.07, 0.085); h.C(tan, [0, 0.08, 0.18], [0, 0.05, 0.3], 0.04, 0.02); h.E(0x1c1814, 0, 0.05, 0.31, 0.016, 0.016, 0.016, 0, 0, 0, 0);
    h.E(wh, 0, 0.05, 0.14, 0.05, 0.03, 0.06); for (const s of [-1, 1]) h.E(0x9a7a5a, s * 0.05, 0.19, 0.08, 0.026, 0.07, 0.018, 0, 0, s * 0.2);
    eyes(h, 0.04, 0.13, 0.18, 0.012);
    l.C(tan, [0, 0.02, 0], [0, -0.36, 0.01], 0.032, 0.022); l.B(0x3a3028, 0, -0.38, 0.02, 0.035, 0.03, 0.05);
    return { body: b.done(), head: h.done(), pivot: [0, 0.52, 0.27], leg: l.done(), hips: [[-0.07, 0.36, 0.18], [0.07, 0.36, 0.18], [-0.07, 0.36, -0.2], [0.07, 0.36, -0.2]], gait: [0, Math.PI, Math.PI, 0], graze: 0.7 };
  },
  mulita() {
    const sh = 0x8f8170, band = 0x6f6354, b = kit(), h = kit(), l = kit();
    b.E(sh, 0, 0.2, 0, 0.15, 0.13, 0.24); for (let k = -2; k <= 2; k++) b.E(band, 0, 0.2, k * 0.055, 0.153, 0.133, 0.012, 0, 0, 0, 1);
    b.E(0x9d8f7c, 0, 0.18, -0.2, 0.13, 0.11, 0.07); b.C(sh, [0, 0.14, -0.24], [0, 0.04, -0.48], 0.04, 0.01, 5);
    h.E(0x9a8b78, 0, 0, 0.06, 0.055, 0.05, 0.08); h.C(0x9a8b78, [0, -0.01, 0.12], [0, -0.04, 0.22], 0.03, 0.012, 5); for (const s of [-1, 1]) h.E(0x7a6e5c, s * 0.035, 0.06, 0.03, 0.014, 0.04, 0.018, 0, 0, s * 0.3);
    eyes(h, 0.035, 0.02, 0.11, 0.008);
    l.C(0x7a6e5c, [0, 0.02, 0], [0, -0.12, 0.01], 0.03, 0.024); l.B(0x5a5044, 0, -0.13, 0.02, 0.035, 0.02, 0.05);
    return { body: b.done(), head: h.done(), pivot: [0, 0.17, 0.22], leg: l.done(), hips: [[-0.08, 0.12, 0.13], [0.08, 0.12, 0.13], [-0.08, 0.12, -0.13], [0.08, 0.12, -0.13]], gait: [0, Math.PI, Math.PI, 0], graze: 0.5 };
  },
  hornero() {
    const b = kit(), h = kit(), l = kit();
    b.E(0xb5713a, 0, 0.13, 0, 0.07, 0.065, 0.11); b.E(0xe2c8a0, 0, 0.11, 0.05, 0.05, 0.05, 0.06); b.E(0x9a4a22, 0, 0.15, -0.13, 0.035, 0.014, 0.07, -0.4);
    h.E(0x9a5e30, 0, 0.02, 0.03, 0.048, 0.046, 0.05); h.C(0x5a4a3a, [0, 0.015, 0.07], [0, 0.005, 0.13], 0.011, 0.003, 4); eyes(h, 0.03, 0.03, 0.06, 0.008);
    l.C(0x8a7a6a, [0, 0, 0], [0, -0.075, 0.01], 0.008, 0.006, 4);
    return { body: b.done(), head: h.done(), pivot: [0, 0.18, 0.07], leg: l.done(), hips: [[-0.025, 0.075, 0], [0.025, 0.075, 0]], gait: [0, Math.PI], graze: 0.9 };
  },
  lechucita() {
    const br = 0x8a6a48, b = kit(), h = kit(), l = kit();
    b.E(br, 0, 0.27, 0, 0.1, 0.13, 0.09); b.E(0xe8dcc0, 0, 0.24, 0.05, 0.075, 0.1, 0.05); for (const [x, y] of [[-0.06, 0.3], [0.05, 0.33], [-0.03, 0.22], [0.06, 0.24]]) b.E(0xf2ece0, x, y, -0.06, 0.015, 0.015, 0.01, 0, 0, 0, 0);
    b.E(0x7a5a3a, 0, 0.18, -0.08, 0.05, 0.06, 0.02, 0.3);
    h.E(br, 0, 0.07, 0.01, 0.085, 0.078, 0.08); for (const s of [-1, 1]) { h.E(0xf2ece0, s * 0.03, 0.1, 0.07, 0.03, 0.012, 0.01); h.E(0xffd23f, s * 0.032, 0.075, 0.075, 0.02, 0.02, 0.01, 0, 0, 0, 0); h.E(0x111111, s * 0.032, 0.075, 0.084, 0.009, 0.009, 0.004, 0, 0, 0, 0); }
    h.E(0xbfa070, 0, 0.05, 0.085, 0.012, 0.016, 0.014);
    l.C(0xd9c6a0, [0, 0, 0], [0, -0.16, 0.01], 0.012, 0.01, 4);
    return { body: b.done(), head: h.done(), pivot: [0, 0.37, 0], leg: l.done(), hips: [[-0.04, 0.16, 0], [0.04, 0.16, 0]], gait: [0, Math.PI], graze: 0.3 };
  },
  chaja() {
    const g = 0x7f8488, b = kit(), h = kit(), l = kit();
    b.E(g, 0, 0.62, 0, 0.23, 0.21, 0.36); for (const s of [-1, 1]) b.E(0x5f6468, s * 0.18, 0.66, -0.04, 0.07, 0.15, 0.3, 0.1); b.E(0x4f5458, 0, 0.6, -0.36, 0.12, 0.06, 0.1, -0.3);
    h.C(0x8a8f92, [0, -0.02, -0.02], [0, 0.28, 0.08], 0.07, 0.05); h.E(0xf4f4f4, 0, 0.18, 0.05, 0.062, 0.025, 0.062); h.E(0x1c1c1e, 0, 0.12, 0.04, 0.072, 0.03, 0.072);
    h.E(0x9aa0a4, 0, 0.33, 0.11, 0.068, 0.062, 0.078); h.E(0x6a6e72, 0, 0.4, 0.07, 0.02, 0.045, 0.03, -0.4); h.E(0x2a2a2a, 0, 0.31, 0.19, 0.024, 0.02, 0.04);
    for (const s of [-1, 1]) h.E(0xd62828, s * 0.045, 0.34, 0.14, 0.02, 0.02, 0.01, 0, 0, 0, 0); eyes(h, 0.05, 0.345, 0.15, 0.009);
    l.C(0xd46a5a, [0, 0.02, 0], [0, -0.44, 0.02], 0.025, 0.02); l.B(0xd46a5a, 0, -0.45, 0.06, 0.09, 0.02, 0.14);
    return { body: b.done(), head: h.done(), pivot: [0, 0.78, 0.26], leg: l.done(), hips: [[-0.08, 0.45, 0], [0.08, 0.45, 0]], gait: [0, Math.PI], graze: 1.0 };
  },
  carancho() {
    const dk = 0x3a2c22, b = kit(), h = kit(), l = kit();
    b.E(dk, 0, 0.32, 0, 0.11, 0.17, 0.11); b.E(0xe9dcc0, 0, 0.4, 0.05, 0.085, 0.09, 0.06); for (let k = 0; k < 4; k++) b.E(0x8a7a62, 0, 0.36 + k * 0.03, 0.09, 0.07, 0.006, 0.03, 0, 0, 0, 0);
    b.E(dk, 0, 0.16, -0.09, 0.05, 0.12, 0.03, 0.3); for (const s of [-1, 1]) b.E(0x2a2018, s * 0.1, 0.32, -0.02, 0.03, 0.15, 0.08);
    h.E(0xe9dcc0, 0, 0.06, 0.02, 0.068, 0.068, 0.072); h.E(0x1c1410, 0, 0.11, 0, 0.072, 0.04, 0.07); h.E(0xe8732a, 0, 0.05, 0.07, 0.045, 0.03, 0.02); h.C(0x9aa6b0, [0, 0.05, 0.08], [0, 0.02, 0.14], 0.025, 0.008, 5);
    eyes(h, 0.04, 0.07, 0.06, 0.01);
    l.C(0xf2c230, [0, 0, 0], [0, -0.17, 0.01], 0.015, 0.012, 4);
    return { body: b.done(), head: h.done(), pivot: [0, 0.5, 0.02], leg: l.done(), hips: [[-0.04, 0.17, 0], [0.04, 0.17, 0]], gait: [0, Math.PI], graze: 0.4 };
  },
  garza() {
    const wh = 0xf6f6f2, b = kit(), h = kit(), l = kit();
    b.E(wh, 0, 0.74, 0, 0.1, 0.11, 0.22, -0.25); b.E(wh, 0, 0.7, -0.24, 0.06, 0.04, 0.12, 0.2);
    h.C(wh, [0, 0, 0], [0, 0.2, 0.09], 0.04, 0.032); h.C(wh, [0, 0.2, 0.09], [0, 0.31, 0.02], 0.032, 0.028); h.C(wh, [0, 0.31, 0.02], [0, 0.4, 0.08], 0.028, 0.026); h.E(wh, 0, 0.42, 0.1, 0.04, 0.038, 0.06);
    h.C(0xf2c230, [0, 0.42, 0.14], [0, 0.39, 0.3], 0.014, 0.004, 5); eyes(h, 0.028, 0.44, 0.12, 0.007);
    l.C(0x2a2622, [0, 0, 0], [0, -0.66, 0.01], 0.012, 0.01, 4); l.B(0x2a2622, 0, -0.67, 0.05, 0.05, 0.01, 0.12);
    return { body: b.done(), head: h.done(), pivot: [0, 0.8, 0.16], leg: l.done(), hips: [[-0.035, 0.66, 0], [0.035, 0.66, 0]], gait: [0, Math.PI], graze: 1.1 };
  }
};
export const animalParts = k => SPEC[k]();

// Lobo marino (para Cabo Polonio): cuerpo ahusado, cabeza con hocico, aletas delanteras y traseras
export function loboGeo() {
  const k = kit(), c = 0x5a4a3c, d = 0x4a3c30;
  k.E(c, 0, 0.26, -0.05, 0.22, 0.2, 0.5); k.E(0x6a5a4a, 0, 0.36, 0.32, 0.17, 0.2, 0.2, -0.5); k.E(c, 0, 0.58, 0.46, 0.1, 0.1, 0.13); k.C(d, [0, 0.56, 0.52], [0, 0.52, 0.66], 0.06, 0.035, 6);
  k.E(0x111111, 0, 0.52, 0.67, 0.02, 0.018, 0.015, 0, 0, 0, 0); eyes(k, 0.05, 0.62, 0.54, 0.014);
  for (const s of [-1, 1]) { k.E(d, s * 0.17, 0.08, 0.24, 0.14, 0.025, 0.08, 0, s * 0.5, 0); k.E(d, s * 0.07, 0.07, -0.56, 0.06, 0.02, 0.15, 0, s * 0.4, 0); }
  return k.done();
}
