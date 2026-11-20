// WorldBuilder (sectores): ciudad y rambla, represa, parque eólico, parque solar + baterías, biomasa, red de transmisión y flora.
import * as THREE from 'three';
import { clamp, lerp, damp, smooth, noise2, rng } from './util.js';
import { POS, CITY_Y, B0 as B, coastD, channelD, terrainH, RES, DAM_Z, HYDRO_OFF, SOLAR_OFF } from './terrain.js';
import { C, canvasTex, textTex, Batch, offsetWorld } from './world.js';
import { argFlag } from './barrios.js';
import { CAP } from './grid.js';

export const PAL = [C.cream, C.terra, C.ochre, C.rose, C.white, 0xa9cfe0, 0xd9c6a0, 0xe0d2b4];

export function sign(w, text, x, y, z, ry, sw = 7, sh = 1.6, o = {}) {
  const tex = textTex(text, { w: 512, h: Math.round(512 * sh / sw), bg: o.bg || '#12325a', fg: o.fg || '#ffffff', border: o.border || '#ffc93c', size: 72 });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(sw, sh), new THREE.MeshStandardMaterial({ map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.3, roughness: 0.8 }));
  m.position.set(x, y + 2.4 + sh / 2, z); m.rotation.y = ry; w.scene.add(m);
  const m2 = m.clone(); m2.rotation.y = ry + Math.PI; w.scene.add(m2);
  const s = Math.cos(ry) * (sw / 2 - 0.3), c = -Math.sin(ry) * (sw / 2 - 0.3);
  w.batch.boxB(x + s, y, z + c, 0.2, 2.5, 0.2, C.steelD); w.batch.boxB(x - s, y, z - c, 0.2, 2.5, 0.2, C.steelD);
}

// Cartel con el logotipo del museo (textura tomada de la imagen incrustada en la página)
export function logoSign(w, x, y, z, ry, sw = 6, lift = 2.4) {
  if (!w.logoTex) return;
  const sh = sw * 200 / 720, mat = new THREE.MeshStandardMaterial({ map: w.logoTex, emissive: 0xffffff, emissiveMap: w.logoTex, emissiveIntensity: 0.45, roughness: 0.8 });
  for (const r of [ry, ry + Math.PI]) { const m = new THREE.Mesh(new THREE.PlaneGeometry(sw, sh), mat); m.position.set(x + Math.sin(r) * 0.09, y + lift + sh / 2, z + Math.cos(r) * 0.09); m.rotation.y = r; w.scene.add(m); }
  const s = Math.cos(ry) * (sw / 2 - 0.3), c = -Math.sin(ry) * (sw / 2 - 0.3);
  w.batch.boxB(x + s, y, z + c, 0.26, lift + 0.1, 0.26, C.steelD); w.batch.boxB(x - s, y, z - c, 0.26, lift + 0.1, 0.26, C.steelD); w.batch.box(x, y + lift + sh / 2, z, sw + 0.3, sh + 0.3, 0.12, C.steelD, ry);
}

// Pabellón nacional flameando (textura procedural)
export function flag(w, x, y, z, fw, fh, mast) {
  if (!w.flagTex) w.flagTex = canvasTex(360, 240, (g) => {
    g.fillStyle = '#fff'; g.fillRect(0, 0, 360, 240); g.fillStyle = '#0038a8';
    for (let i = 0; i < 4; i++) g.fillRect(0, 240 / 9 * (1 + i * 2), 360, 240 / 9);
    g.fillStyle = '#fff'; g.fillRect(0, 0, 133.3, 133.3); g.fillStyle = '#fcd116'; g.strokeStyle = '#fcd116'; g.lineWidth = 6;
    for (let k = 0; k < 16; k++) { const a = k * Math.PI / 8; g.beginPath(); g.moveTo(66, 66); g.lineTo(66 + Math.cos(a) * 54, 66 + Math.sin(a) * 54); g.stroke(); }
    g.beginPath(); g.arc(66, 66, 26, 0, 7); g.fill();
  });
  w.batch.cyl(x, y, z, 0.07 + mast * 0.004, 0.1 + mast * 0.008, mast, 0xe6e6e6, 8); w.batch.sph(x, y + mast + 0.12, z, 0.16 + mast * 0.008, 0xcfa24a);
  const fg = new THREE.PlaneGeometry(fw, fh, 14, 6), m = new THREE.Mesh(fg, new THREE.MeshStandardMaterial({ map: w.flagTex, side: THREE.DoubleSide, roughness: 0.9 }));
  m.position.set(x + fw / 2 + 0.12, y + mast - fh / 2 - 0.15, z); m.castShadow = true; w.scene.add(m);
  const base = fg.attributes.position.array.slice();
  w.updaters.push((dt, st) => {
    const p = fg.attributes.position, amp = (0.08 + st.grid.wind * 0.22) * fw / 3;
    for (let i = 0; i < p.count; i++) { const u = (base[i * 3] + fw / 2) / fw; p.setZ(i, Math.sin(u * 7.2 - w.time * (4 + st.grid.wind * 5)) * amp * u); }
    p.needsUpdate = true;
  });
}

export function windows(w, cx, cz, bw, bd, y0, bh, barrio) {
  const wb = w.winBatch[barrio], nf = Math.max(1, Math.floor((bh - 0.8) / 1.7)), quad = new THREE.PlaneGeometry(0.78, 1.0);
  const face = (len, fx, fz, ry) => {
    const nc = Math.max(1, Math.floor((len - 0.8) / 1.45));
    for (let f = 0; f < nf; f++) for (let c = 0; c < nc; c++) {
      const u = (c - (nc - 1) / 2) * 1.45;
      wb.add(quad, 0xffffff, cx + fx * (bw / 2 + 0.05) + (fz ? u : 0), y0 + 1.35 + f * 1.7, cz + fz * (bd / 2 + 0.05) + (fx ? u : 0), 1, 1, 1, 0, ry, 0, 0);
    }
  };
  face(bw, 0, 1, 0); face(bw, 0, -1, Math.PI); face(bd, 1, 0, Math.PI / 2); face(bd, -1, 0, -Math.PI / 2);
}
export function building(w, cx, cz, bw, bd, bh, col, barrio, style) {
  const b = w.cityBatch, y0 = 2.2, R = w.rand, trim = 0xf3ecdc;
  b.boxB(cx, y0, cz, bw, bh, bd, col);
  b.boxB(cx, y0, cz, bw + 0.2, 0.55, bd + 0.2, 0x8d8478);
  b.boxB(cx, y0 + bh, cz, bw + 0.36, 0.28, bd + 0.36, trim);
  const top = y0 + bh + 0.28;
  if (style === 1) { b.boxB(cx, top, cz, bw * 0.62, 1.7, bd * 0.62, col); b.boxB(cx, top + 1.7, cz, bw * 0.66, 0.2, bd * 0.66, trim); }
  if (style === 2) for (let k = -1; k <= 1; k++) b.boxB(cx + k * bw * 0.3, y0 + 0.55, cz + bd / 2 + 0.1, 0.3, bh + 0.6, 0.26, trim);
  if (style === 3) { b.cyl(cx + bw / 2 - 0.3, y0, cz + bd / 2 - 0.3, 1.25, 1.25, bh + 1.2, col, 10); b.cyl(cx + bw / 2 - 0.3, y0 + bh + 1.2, cz + bd / 2 - 0.3, 1.42, 1.42, 0.24, trim, 10); }
  if (R() < 0.5) b.cyl(cx + (R() - 0.5) * bw * 0.4, top, cz + (R() - 0.5) * bd * 0.4, 0.55, 0.55, 1.1, 0x8a8f96, 8);
  if (R() < 0.45) b.boxB(cx + (R() - 0.5) * bw * 0.4, top, cz + (R() - 0.5) * bd * 0.4, 1.1, 0.5, 0.8, 0xb8bcc2);
  b.boxB(cx, y0, cz + bd / 2 + 0.03, 1.0, 1.5, 0.08, 0x5b4636);
  windows(w, cx, cz, bw, bd, y0, bh, barrio);
  w.addSolid(cx - bw / 2, cx + bw / 2, cz - bd / 2, cz + bd / 2); w.addOcc(cx - bw / 2, cx + bw / 2, cz - bd / 2, cz + bd / 2, y0 + bh + (style === 1 ? 1.9 : 0.3));
}

// ================= SECTOR 1: CIUDAD, COSTANERA Y BULEVAR =================
export function buildCity(w) {
  const b = w.batch, R = w.rand, Y = 2.2;
  // Calzadas, bulevar y costanera: la ciudad creció hacia el este (hasta x 22) y hacia el sur (hasta z 94)
  b.boxB(-28, 1.2, 41, 100, 0.9, 60, C.asphalt);              // x -78..22, z 11..71
  b.boxB(-30.5, 1.0, 73.3, 105, 1.2, 4.6, C.granite);         // bulevar
  b.boxB(-28, 1.2, 84.8, 100, 0.9, 18.4, C.asphalt);          // x -78..22, z 75.6..94
  b.boxB(-80.6, 1.0, 52.5, 4.8, 1.2, 83, C.granite);          // costanera sobre el río Uruguay
  b.boxB(-28, 1.25, 94.1, 100, 0.9, 0.6, C.sidewalk);         // cordón del sur
  w.addPlatform(-83.2, 22, 11, 94.4, CITY_Y);
  for (let x = -80; x <= 20; x += 4) b.boxB(x, Y, 73.3, 0.14, 0.02, 4.4, 0xc38e80);
  for (let z = 14; z <= 92; z += 4) b.boxB(-80.6, Y, z, 4.6, 0.02, 0.14, 0xc38e80);
  const wall = (x0, x1, z0, z1) => { b.boxB((x0 + x1) / 2, Y, (z0 + z1) / 2, x1 - x0, 0.7, z1 - z0, C.cream); b.boxB((x0 + x1) / 2, Y + 0.7, (z0 + z1) / 2, x1 - x0 + 0.16, 0.12, z1 - z0 + 0.16, 0xfaf4e6); w.addSolid(x0, x1, z0, z1, 3.05); };
  // Baranda de la costanera, con la boca del puerto y las bajadas al puerto deportivo
  const GAPS = [[38, 60], [67.4, 70.6], [76.4, 79.6]];
  let zz = 11; for (const [g0, g1] of GAPS) { wall(-83.4, -83.0, zz, g0); zz = g1; } wall(-83.4, -83.0, zz, 94.2);
  const inGap = z => GAPS.some(([g0, g1]) => z > g0 - 1.6 && z < g1 + 1.6);
  // líneas de calzada
  const xsS = [-76, -60, -44, -28, -12, 4, 20], zsS = [13, 27, 41, 55, 69, 77.6, 92];
  for (const x of xsS) for (let z = 15; z < 92; z += 3.2) { if (z > 70.4 && z < 76) continue; b.boxB(x, 2.1, z, 0.14, 0.02, 1.4, 0xe9e2c8); }
  for (const z of zsS) for (let x = -76; x < 21; x += 3.2) b.boxB(x, 2.1, z, 1.4, 0.02, 0.14, 0xe9e2c8);

  const xs = [-68, -52, -36, -20, -4, 12], zs = [20, 34, 48, 62, 85];
  const dummy = { rand: R, cityBatch: new Batch(), batch: new Batch(), winBatch: [new Batch(), new Batch(), new Batch()], addSolid() {}, addOcc() {} };
  const block = (i, j) => {
    const cx = xs[i], cz = zs[j], key = i + ',' + j, barrio = i === 0 ? 0 : i >= 3 ? 2 : 1;
    if ((i === 1 || i === 2) && (j === 1 || j === 2)) return;   // las cuatro manzanas centrales son la Plaza Matriz
    if (key === '4,2') return;                                    // Plaza Artigas, frente al teatro
    b.boxB(cx, 1.3, cz, 12.8, 0.9, 10.8, C.sidewalk);
    if (key === '3,0') { substation(w, cx, cz); return; }
    if (key === '3,3') { terminal(w, cx, cz); return; }
    if (key === '2,0') { tower(w, cx, cz); return; }
    // El teatro y la catedral ocupan su manzana: igual se "tiran los dados" para que el resto de la ciudad no cambie
    const land = key === '4,1' || key === '2,3', bw0 = land ? dummy : w;
    const n = R() < 0.45 ? 2 : 3, total = 10.6, gap = 0.5, bw = (total - gap * (n - 1)) / n;
    for (let k = 0; k < n; k++) {
      const x = cx - total / 2 + bw / 2 + k * (bw + gap), tall = (i === 1 || i === 2) && j < 4 ? 6.5 + R() * 6.5 : 4.2 + R() * 4;
      building(bw0, x, cz + (R() - 0.5) * 0.6, bw, 7 + R() * 1.0, tall, PAL[Math.floor(R() * PAL.length)], barrio, Math.floor(R() * 4));
    }
    if (key === '4,1') return;
    w.tree(R() < 0.5 ? 'jaca' : 'native', cx - 5.85, cz + 4.85, 0.7, Y); w.tree('jaca', cx + 5.85, cz - 4.85, 0.65, Y);
  };
  // primero las 16 manzanas de siempre (mismo orden de dados), después el ensanche
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) block(i, j);
  for (let i = 4; i < 6; i++) for (let j = 0; j < 4; j++) block(i, j);
  for (let i = 0; i < 6; i++) block(i, 4);

  plaza(w);
  plazaArtigas(w);

  // Farolas, palmeras y bancos del bulevar (el tramo de x -68 a -48 queda libre para las llamadas)
  for (let x = -80; x <= 20; x += 8) { if (x > -68 && x < -48) continue; w.lamp(x, 75.1, Math.PI, Y); }
  for (let z = 16; z <= 92; z += 8) { if (inGap(z)) continue; w.lamp(-82.5, z, Math.PI / 2, Y); }
  for (let x = -76; x <= 8; x += 12) { if (x > -68 && x < -48) continue; w.tree('palm', x + 4, 72.2, 0.95 + R() * 0.2, Y); if (x !== -4) b.boxB(x, Y, 74.6, 2.2, 0.45, 0.6, C.wood); }   // en x -4 está el puesto de la feria
  for (let z = 20; z <= 86; z += 11) { w.tree('palm', -79.4, z, 1, Y); if (!inGap(z + 4)) b.boxB(-82.1, Y, z + 4, 0.6, 0.45, 2.2, C.wood); }
  for (const x of xsS) for (const z of [20, 48, 85]) { if (x === 4 && z === 48) continue; w.lamp(x + 2.4, z + 5.0, 0, Y); }
  // Letras del bulevar
  const tex = textTex('URUGUAY', { w: 1024, h: 256, fg: '#ffffff', stroke: '#1d6fb8', size: 210 });
  const let3 = new THREE.Mesh(new THREE.PlaneGeometry(13, 3.2), new THREE.MeshStandardMaterial({ map: tex, transparent: true, alphaTest: 0.35, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.25 }));
  let3.position.set(-33, Y + 1.75, 74.95); let3.castShadow = true; w.scene.add(let3);
  const let4 = let3.clone(); let4.position.z = 74.85; let4.rotation.y = Math.PI; w.scene.add(let4);
  b.boxB(-33, Y, 74.9, 13.4, 0.18, 0.7, 0xf2efe8);
  logoSign(w, -18.5, Y, 74.7, 0, 7);
  sign(w, 'BULEVAR', 14, Y, 74.9, 0, 4.4, 0.9);

  // Barrio Sur: viviendas instanciadas al sur del bulevar, sobre la ruta que sale de la ciudad
  const roofs = [0xb5533c, 0xa9462f, 0xc86a4a, 0x8f9aa3], DX = -33, DZ = 73;
  for (const hx of [-3, 5, 13]) for (const hz of [33, 41, 49, 57]) {
    const x = hx + DX + (R() - 0.5), z = hz + DZ + (R() - 0.5), y = w.groundAt(x, z), c = PAL[Math.floor(R() * PAL.length)];
    w.houses.push({ x, y, z, w: 4.8, d: 5.2, h: 2.7, rh: 1.7, c, rc: roofs[Math.floor(R() * 4)], ry: 0 });
    w.addSolid(x - 2.4, x + 2.4, z - 2.6, z + 2.6); w.addOcc(x - 2.4, x + 2.4, z - 2.6, z + 2.6, y + 4);
    const q = new THREE.PlaneGeometry(0.8, 0.9);
    w.winBatch[2].add(q, 0xffffff, x - 1.2, y + 1.5, z + 2.66, 1, 1, 1, 0, 0, 0, 0); w.winBatch[2].add(q, 0xffffff, x + 1.2, y + 1.5, z + 2.66, 1, 1, 1, 0, 0, 0, 0);
    w.winBatch[2].add(q, 0xffffff, x + 2.46, y + 1.5, z, 1, 1, 1, 0, Math.PI / 2, 0, 0); w.winBatch[2].add(q, 0xffffff, x - 2.46, y + 1.5, z, 1, 1, 1, 0, -Math.PI / 2, 0, 0);
    b.boxB(x, y, z + 2.63, 0.8, 1.5, 0.08, 0x5b4636);
    if (R() < 0.7) w.tree(R() < 0.5 ? 'ceibo' : 'native', x + 3.4, z + 2.8, 0.7);
    if (R() < 0.6) w.tree('bush', x - 3, z + 3, 1);
  }
  for (let z = 30; z <= 60; z += 10) w.lamp(1 + DX, z + DZ, Math.PI / 2);
  sign(w, 'BARRIO SUR', -42, w.groundAt(-42, 100.6), 100.6, 0, 4.6, 0.9);
}

// Plaza Artigas: frente al Teatro Larrañaga, con el monumento a Artigas, canteros, bancos y faroles
function plazaArtigas(w) {
  const b = w.batch, Y = 2.2, R = w.rand, [cx, cz] = POS.artigas;
  b.boxB(cx, 1.3, cz, 12.8, 0.9, 10.8, 0xdcd1b8);
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b.boxB(cx + sx * 3.7, Y, cz + sz * 2.9, 4.2, 0.07, 3.4, 0x6dbb52);
  b.boxB(cx, Y, cz, 12.6, 0.012, 1.4, 0xc9bca0); b.boxB(cx, Y, cz, 1.4, 0.012, 10.6, 0xc9bca0);
  // monumento: pedestal escalonado y la figura del prócer (abstracta, en bronce)
  b.boxB(cx, Y, cz, 3.2, 0.4, 3.2, 0xd8d2c2); b.boxB(cx, Y + 0.4, cz, 2.4, 0.4, 2.4, 0xd8d2c2); b.boxB(cx, Y + 0.8, cz, 1.5, 2.2, 1.5, 0xcfc6b2);
  b.boxB(cx, Y + 3.0, cz, 1.7, 0.2, 1.7, 0xe6dfcf);
  const BR = 0x6b5a3a;
  b.boxB(cx - 0.18, Y + 3.2, cz, 0.22, 0.95, 0.24, BR); b.boxB(cx + 0.18, Y + 3.2, cz, 0.22, 0.95, 0.24, BR);
  b.boxB(cx, Y + 4.1, cz, 0.72, 1.05, 0.42, BR); b.add(new THREE.ConeGeometry(0.62, 1.4, 6), BR, cx, Y + 4.25, cz, 1, 1, 0.75);
  b.sph(cx, Y + 5.42, cz, 0.24, BR); b.boxB(cx + 0.42, Y + 4.4, cz + 0.06, 0.16, 0.7, 0.16, BR);
  w.addSolid(cx - 1.6, cx + 1.6, cz - 1.6, cz + 1.6, Y + 5.6);
  plaqueSign(w, 'PLAZA ARTIGAS', cx, Y + 1.9, cz + 0.79, 0, 1.4, 0.36);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { w.tree(R() < 0.5 ? 'jaca' : 'native', cx + sx * 5.6, cz + sz * 4.4, 0.75, Y); b.boxB(cx + sx * 3.7, Y, cz + sz * 0.9, 2.2, 0.45, 0.6, C.wood); }
  for (const [x, z] of [[cx - 6, cz], [cx + 6, cz], [cx, cz + 5.1]]) w.lamp(x, z, 0, Y);
}
function plaqueSign(w, text, x, y, z, ry, sw, sh) {
  const t = textTex(text, { w: 512, h: Math.round(512 * sh / sw), bg: '#3a3226', fg: '#f3e2b0', border: '#cfa24a', size: 64 });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(sw, sh), new THREE.MeshStandardMaterial({ map: t, emissive: 0xffffff, emissiveMap: t, emissiveIntensity: 0.25, roughness: 0.8 }));
  m.position.set(x, y, z); m.rotation.y = ry; w.scene.add(m);
}

function plaza(w) {
  const b = w.batch, Y = 2.2, R = w.rand, cx = -44, cz = 41, [fx, fz] = POS.plaza;
  b.boxB(cx, 1.3, cz, 28.8, 0.9, 24.8, 0xdcd1b8);
  for (const sx of [-1, 1]) { b.boxB(cx + sx * 8.7, Y, 39.2, 10.2, 0.07, 6.2, 0x6dbb52); b.boxB(cx + sx * 8.7, Y, 48.6, 10.2, 0.07, 6.6, 0x6dbb52); }
  for (let z = 30; z <= 52; z += 2.2) b.boxB(cx, Y, z, 6.6, 0.015, 0.1, 0xc9bca0);
  // Fuente central
  b.cyl(fx, Y, fz, 3.4, 3.55, 0.5, C.concrete, 16); b.cyl(fx, Y + 0.5, fz, 3.05, 3.05, 0.05, 0x58b9e6, 16);
  b.cyl(fx, Y, fz, 0.5, 0.75, 2.2, 0xd8d2c2, 8); b.cyl(fx, Y + 2.2, fz, 1.2, 0.5, 0.25, 0xd8d2c2, 10); b.sph(fx, Y + 2.9, fz, 0.42, 0xcfa24a);
  w.addCircle(fx, fz, 3.5);
  w.updaters.push((dt, st) => { if (Math.random() < 30 * dt) { const a = Math.random() * 6.283; st.fx.soft.emit(fx, Y + 2.6, fz, Math.cos(a) * 1.6, 3.2 + Math.random(), Math.sin(a) * 1.6, 0.9, 0.22, 0.12, 0xdff4ff, 0.8, 9, 0.2); } });
  // Mosaico con el isotipo del museo
  b.cyl(cx, Y, 38.4, 3.2, 3.2, 0.03, 0xf3ecdc, 24);
  if (w.isoTex) { const g = new THREE.PlaneGeometry(5.4, 5.4); g.rotateX(-Math.PI / 2); const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ map: w.isoTex, transparent: true, alphaTest: 0.25, roughness: 0.9 })); m.position.set(cx, Y + 0.05, 38.4); m.receiveShadow = true; w.scene.add(m); }
  // Escenario con micrófono, fondo del museo y pabellón
  b.boxB(cx, Y, 32.3, 12, 0.8, 3.8, 0xf4f1ea); b.boxB(cx, Y + 0.25, 34.22, 12.04, 0.3, 0.06, C.celeste); b.boxB(cx, Y + 0.78, 32.3, 12.2, 0.04, 4.0, 0xb9895a);
  b.boxB(cx, Y, 35.25, 6, 0.27, 0.7, 0xe6dfcf); b.boxB(cx, Y, 34.55, 6, 0.54, 0.7, 0xe6dfcf);
  w.addSolid(-50, -38, 30.4, 34.2, 3.0, true); w.addPlatform(-47, -41, 34.9, 35.6, 2.47); w.addPlatform(-47, -41, 34.2, 34.9, 2.74);
  b.cyl(cx + 0.5, 3.0, 33.7, 0.03, 0.03, 1.2, C.steelD, 5); b.sph(cx + 0.5, 4.25, 33.7, 0.1, 0x22252a); b.cyl(cx + 0.5, 3.0, 33.7, 0.22, 0.26, 0.05, C.steelD, 8);
  for (const sx of [-1, 1]) { b.boxB(cx + sx * 5.6, 3.0, 31.0, 0.5, 0.9, 0.5, 0x22252a); b.boxB(cx + sx * 5.6, 3.9, 31.0, 0.7, 0.5, 0.6, 0x33383f); }
  logoSign(w, cx, Y, 29.9, 0, 15, 3.2);
  flag(w, -41.6, 3.0, 30.9, 3.6, 2.4, 5.2);
  flag(w, -55.2, Y, 31.4, 8.4, 5.6, 16);
  b.cyl(-55.2, Y, 31.4, 1.0, 1.2, 0.6, C.concrete, 10); w.addCircle(-55.2, 31.4, 1.2);
  // Palmeras Butiá, jacarandás, bancos y farolas
  for (const x of [-57.3, -30.7]) for (const z of [36.2, 41.6, 47, 52.2]) w.tree('butia', x, z, 1 + R() * 0.25, Y);
  for (const sx of [-1, 1]) { w.tree('jaca', cx + sx * 10.5, 39.2, 0.85, Y); w.tree('jaca', cx + sx * 10.5, 48.8, 0.85, Y); w.tree('butia', cx + sx * 6.2, 50.6, 0.9, Y); }
  for (const sx of [-1, 1]) for (const z of [38.4, 44, 49.4]) b.boxB(cx + sx * 4.6, Y, z, 0.6, 0.45, 2.2, C.wood);
  for (const [x, z, a] of [[-57.6, 29.4, 0.8], [-30.4, 29.4, -0.8], [-57.6, 52.6, 2.3], [-30.4, 52.6, -2.3], [-57.6, 41, 1.57], [-30.4, 41, -1.57], [-51, 52.6, 3.14], [-37, 29.4, 0]]) w.lamp(x, z, a, Y);
  sign(w, 'PLAZA MATRIZ', -51.5, Y, 52.9, 0, 5.2, 1.0);
  logoSign(w, -37, Y, 52.9, 0, 6.4);
  w.addInter('fest', POS.fest[0], POS.fest[1], { console: false, y: CITY_Y, h: 4 });
}

function tower(w, cx, cz) {
  const b = w.cityBatch, Y = 2.2, col = 0xd9cdb4, trim = 0xf3ecdc;
  b.boxB(cx, Y, cz, 10, 8.5, 8.6, col); b.boxB(cx, Y + 8.5, cz, 10.4, 0.3, 9, trim);
  b.boxB(cx, Y + 8.8, cz, 6.6, 6.5, 6, col); b.boxB(cx, Y + 15.3, cz, 7, 0.3, 6.4, trim);
  b.boxB(cx, Y + 15.6, cz, 4.2, 4.6, 4.2, col); b.boxB(cx, Y + 20.2, cz, 4.6, 0.25, 4.6, trim);
  b.cyl(cx, Y + 20.45, cz, 1.2, 2.0, 1.8, 0x6f9aa8, 8); b.sph(cx, Y + 22.4, cz, 1.25, 0x6f9aa8, 1, 1); b.cyl(cx, Y + 23.3, cz, 0.05, 0.12, 3, 0xd8d2c2, 5);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { b.cyl(cx + sx * 3.1, Y + 15.6, cz + sz * 2.8, 0.5, 0.6, 2.2, col, 6); b.sph(cx + sx * 3.1, Y + 18.0, cz + sz * 2.8, 0.62, 0x6f9aa8); }
  for (let k = -1; k <= 1; k++) b.boxB(cx + k * 3, Y + 0.55, cz + 4.36, 0.4, 8.2, 0.3, trim);
  windows(w, cx, cz, 10, 8.6, Y, 8.5, 1); windows(w, cx, cz, 6.6, 6, Y + 8.6, 6.5, 1); windows(w, cx, cz, 4.2, 4.2, Y + 15.4, 4.6, 1);
  w.addSolid(cx - 5, cx + 5, cz - 4.3, cz + 4.3); w.addOcc(cx - 5, cx + 5, cz - 4.3, cz + 4.3, Y + 8.8); w.addOcc(cx - 3.3, cx + 3.3, cz - 3, cz + 3, Y + 15.6); w.addOcc(cx - 2.1, cx + 2.1, cz - 2.1, cz + 2.1, Y + 22);
}

export function transformer(w, x, y, z, s = 1) {
  const b = w.batch;
  b.boxB(x, y, z, 2.6 * s, 2.3 * s, 1.9 * s, 0x8c949c);
  for (let k = -2; k <= 2; k++) { b.boxB(x + k * 0.5 * s, y + 0.3 * s, z + 1.1 * s, 0.12 * s, 1.7 * s, 0.4 * s, 0x6f777f); b.boxB(x + k * 0.5 * s, y + 0.3 * s, z - 1.1 * s, 0.12 * s, 1.7 * s, 0.4 * s, 0x6f777f); }
  for (let k = -1; k <= 1; k++) { b.cyl(x + k * 0.8 * s, y + 2.3 * s, z, 0.1 * s, 0.16 * s, 1.0 * s, 0xb9684a, 6); b.sph(x + k * 0.8 * s, y + 3.35 * s, z, 0.14 * s, 0xd9d9d9); }
  b.cyl(x + 1.0 * s, y + 2.3 * s, z + 0.5 * s, 0.35 * s, 0.35 * s, 0.6 * s, 0x8c949c, 8);
  w.addSolid(x - 1.4 * s, x + 1.4 * s, z - 1.2 * s, z + 1.2 * s);
}
function gantry(w, x, y, z, ry = 0, wd = 6, h = 6.5) {
  const b = w.batch, s = Math.cos(ry) * wd / 2, c = -Math.sin(ry) * wd / 2;
  b.boxB(x + s, y, z + c, 0.28, h, 0.28, C.steel); b.boxB(x - s, y, z - c, 0.28, h, 0.28, C.steel);
  b.box(x, y + h, z, wd + 0.6, 0.3, 0.3, C.steel, ry);
  for (let k = -1; k <= 1; k++) b.cyl(x + s * k * 0.7, y + h - 0.9, z + c * k * 0.7, 0.08, 0.14, 0.8, 0xb9684a, 5);
}
export function fence(w, x0, x1, z0, z1, y, gaps = []) {
  const b = w.batch;
  const run = (ax, az, bx, bz) => { w.addSolid(Math.min(ax, bx) - 0.08, Math.max(ax, bx) + 0.08, Math.min(az, bz) - 0.08, Math.max(az, bz) + 0.08, y + 1.5); const n = Math.ceil(Math.hypot(bx - ax, bz - az) / 2.2); for (let i = 0; i <= n; i++) b.boxB(lerp(ax, bx, i / n), y, lerp(az, bz, i / n), 0.1, 1.5, 0.1, 0x6b7480); b.box((ax + bx) / 2, y + 1.45, (az + bz) / 2, Math.abs(bx - ax) + 0.1, 0.07, Math.abs(bz - az) + 0.1, 0x6b7480); b.box((ax + bx) / 2, y + 0.8, (az + bz) / 2, Math.abs(bx - ax) + 0.05, 0.05, Math.abs(bz - az) + 0.05, 0x6b7480); };
  run(x0, z0, x1, z0); run(x0, z0, x0, z1); run(x1, z0, x1, z1);
  if (!gaps.length) run(x0, z1, x1, z1); else { run(x0, z1, gaps[0], z1); run(gaps[1], z1, x1, z1); }
}

function substation(w, cx, cz) {
  const b = w.batch, Y = 2.2;
  b.boxB(cx, Y, cz, 12.2, 0.06, 10.2, 0xb7ae9b);
  fence(w, cx - 6, cx + 6, cz - 5, cz + 5, Y, [cx - 1.6, cx + 1.6]);
  transformer(w, cx - 3.4, Y, cz - 1.8, 1.05); transformer(w, cx + 0.6, Y, cz - 1.8, 1.05);
  gantry(w, cx - 1.4, Y, cz - 4.1, 0, 8, 7);
  b.boxB(cx + 3.9, Y, cz + 2, 3.6, 3.2, 4.4, C.white); b.boxB(cx + 3.9, Y + 2.2, cz + 2, 3.66, 0.5, 4.46, C.celeste); b.boxB(cx + 3.9, Y + 3.2, cz + 2, 3.9, 0.2, 4.7, 0xdad4c6);
  b.cyl(cx + 4.8, Y + 3.4, cz + 3.2, 0.04, 0.06, 3.4, 0xd8d2c2, 5); b.sph(cx + 4.8, Y + 6.9, cz + 3.2, 0.16, C.red);
  w.winBatch[2].add(new THREE.PlaneGeometry(2.2, 0.9), 0xffffff, cx + 3.9, Y + 1.6, cz + 4.26, 1, 1, 1, 0, 0, 0, 0);
  w.addSolid(cx + 2.1, cx + 5.7, cz - 0.2, cz + 4.2);
  sign(w, 'CENTRO DE CONTROL DE RED', cx - 2.6, Y, cz + 5.6, 0, 6, 1.1);
  w.addInter('npc:valeria', POS.valeria[0], POS.valeria[1], { console: false, y: CITY_Y, h: 3.6 });
  w.addInter('sub', cx + 0.9, cz + 3.2, { y: Y, ry: Math.PI });
}

function terminal(w, cx, cz) {
  const b = w.batch, Y = 2.2;
  b.boxB(cx, Y, cz, 12.4, 0.05, 10.4, 0x7b828c);
  for (const dx of [-5, 0, 5]) for (const dz of [-3.6, 3.6]) b.cyl(cx + dx, Y, cz + dz, 0.2, 0.3, 4.9, 0xd8cdbb, 8);
  // Cubierta de bóvedas autoportantes de ladrillo, en homenaje a Eladio Dieste: cinco cáscaras finas con voladizo
  const cb = w.cityBatch, nV = 5, cw = 12.6 / nV, rise = 0.72, rr = (cw * cw / 4 + rise * rise) / (2 * rise), ha = Math.asin(cw / 2 / rr), L = 12.4;
  const vault = new THREE.CylinderGeometry(rr, rr, L, 14, 1, true, Math.PI - ha, ha * 2);
  for (let i = 0; i < nV; i++) {
    const vx = cx - 6.3 + cw / 2 + i * cw;
    cb.add(vault, i % 2 ? 0xb5603a : 0xc06a42, vx, Y + 5 - rr * Math.cos(ha), cz, 1, 1, 1, Math.PI / 2, 0, 0, 0.04);
    cb.box(vx, Y + 5 + rise - 0.02, cz, 0.1, 0.05, L, 0xd7895e);   // lomo de la bóveda
  }
  for (let i = 0; i <= nV; i++) cb.box(cx - 6.3 + i * cw, Y + 4.96, cz, 0.22, 0.16, L + 0.1, 0x8f4a2c);   // canaletas entre bóvedas
  cb.box(cx, Y + 4.8, cz, 12.8, 0.24, 0.5, 0x8f4a2c);   // viga central que sostiene las cáscaras
  w.dyn.chargers = [];
  [-4, 0, 4].forEach((dx) => {
    b.boxB(cx + dx, Y, cz - 2.9, 0.7, 2.0, 0.5, 0xf4f1ea); b.boxB(cx + dx, Y + 2.0, cz - 2.9, 0.8, 0.14, 0.6, C.celeste);
    const led = new THREE.Mesh(new THREE.BoxGeometry(0.42, 1.1, 0.06), w.mats.charger); led.position.set(cx + dx, Y + 1.25, cz - 2.62); w.scene.add(led);
    w.addCircle(cx + dx, cz - 2.9, 0.5);
  });
  w.addOcc(cx - 6.4, cx + 6.4, cz - 6.2, cz + 6.2, Y + 5.8);
  (w.navBlock = w.navBlock || []).push([cx - 6.6, cx + 6.6, cz - 2.4, cz + 4.6]);   // andén: ahí estacionan los ómnibus
  sign(w, 'TERMINAL DEL BULEVAR · ÓMNIBUS ELÉCTRICOS', cx, Y + 3.4, cz + 4.7, 0, 9, 1.0, { bg: '#0b5a4a', border: '#7dffb0' });
  w.addInter('npc:lucia', POS.lucia[0], POS.lucia[1], { console: false, y: CITY_Y, h: 3.6 });
  w.addInter('term', -13.9, 61.2, { y: Y, ry: Math.PI / 2, h: 3.4 });
}

// ================= SECTOR 2: CENTRAL HIDROELÉCTRICA =================
// La represa se arma en coordenadas locales (como siempre) y se ubica sobre el río Uruguay con una vista desplazada del mundo.
// El tramo original (vertedero + central uruguaya) se completa hacia el oeste con el cuerpo de la presa y la central argentina.
export function buildHydro(W) {
  const [OX, OZ] = HYDRO_OFF, w = offsetWorld(W, OX, OZ), GATES = POS.gates.map(x => x - OX), TURBS = POS.turbs.map(x => x - OX);
  const b = w.batch, D = { x0: POS.dam.x0 - OX, x1: POS.dam.x1 - OX, z0: POS.dam.z0 - OZ, z1: POS.dam.z1 - OZ }, T = POS.dam.top, cc = C.concrete;
  b.box(-22.7, (T - 3) / 2, -55, 2.6, T + 3, 6, cc); b.box(11.3, (T - 3) / 2, -55, 25.4, T + 3, 6, cc);
  b.box((D.x0 - 24) / 2, (T - 3) / 2, -55, -24 - D.x0, T + 3, 6, cc);   // cuerpo oeste, hasta la orilla argentina
  b.box(-11.4, -0.2, -56, 20, 5.6, 4, C.concreteD);                    // umbral del vertedero
  b.box(-11.4, 1.05, -50.4, 20, 0.7, 7.8, C.concreteD, 0, 0.417);       // rápida
  b.box(-11.4, T - 0.35, -55, 20, 0.7, 6, cc);                          // tablero sobre los vanos
  for (let k = 0; k < 5; k++) { const px = -21.08 + k * 4.84; b.box(px, (T - 3) / 2, -54, 0.64, T + 3, 8, cc); b.box(px, 0.3, -48.6, 0.64, 2.6, 3.2, cc, 0, 0.417); }
  const CX = (D.x0 + D.x1) / 2, CW = D.x1 - D.x0;
  b.box(CX, T + 0.02, -55.4, CW, 0.04, 2.6, 0x6a6f77);
  for (let x = D.x0 + 2; x <= D.x1 - 2; x += 3.2) b.box(x, T + 0.05, -55.4, 1.4, 0.02, 0.14, 0xe9e2c8);
  // vía del tren sobre el coronamiento (el puente une Salto con Concordia)
  b.box(CX, T + 0.03, -53.4, CW, 0.03, 1.5, 0x8a7d6b); for (const dz of [-0.36, 0.36]) b.box(CX, T + 0.1, -53.4 + dz, CW, 0.08, 0.08, 0x5a6068);
  for (let x = D.x0 + 0.5; x <= D.x1; x += 0.9) b.box(x, T + 0.05, -53.4, 0.22, 0.04, 1.2, 0x6b4f3a);
  for (const z of [-57.85, -52.15]) { b.box(CX, T + 0.95, z, CW, 0.1, 0.1, C.steelD); b.box(CX, T + 0.5, z, CW, 0.06, 0.06, C.steelD); for (let x = D.x0; x <= D.x1; x += 2.4) b.boxB(x, T, z, 0.1, 1.0, 0.1, C.steelD); }
  w.addSolid(D.x0, D.x1, D.z0, D.z1, T, true);
  // Rampa en el estribo uruguayo y explanada en el argentino (la meseta queda a la altura del coronamiento)
  b.box(25.8, T - 0.66, -55, 3.8, 0.5, 6, cc, 0, 0, -0.215); w.addPlatform(24, 27.6, D.z0, D.z1, (x) => T - (x - 24) / 3.6 * 0.8);
  b.box(D.x0 - 2.5, T - 0.4, -55, 5, 0.8, 6, cc); w.addPlatform(D.x0 - 5, D.x0, D.z0, D.z1, T);
  w.addSolid(D.x0, D.x1, D.z0 - 0.1, D.z0 + 0.2, T + 1.0); w.addSolid(D.x0, D.x1, D.z1 - 0.2, D.z1 + 0.1, T + 1.0);
  for (let x = D.x0 + 4; x <= 20; x += 10) w.lamp(x, -57.5, 0, T);
  // Pórticos de izaje y compuertas móviles
  const fallTex = canvasTex(32, 64, (g) => { g.fillStyle = '#bfe9fb'; g.fillRect(0, 0, 32, 64); g.fillStyle = '#ffffff'; for (let i = 0; i < 26; i++) g.fillRect((i * 13) % 32, (i * 29) % 64, 3, 10 + (i * 7) % 16); }, { repeat: 1 });
  fallTex.wrapS = fallTex.wrapT = THREE.RepeatWrapping; fallTex.repeat.set(2, 2);
  const fallMat = new THREE.MeshBasicMaterial({ map: fallTex, transparent: true, opacity: 0.9, side: THREE.DoubleSide });
  const gateMat = new THREE.MeshStandardMaterial({ color: 0x2f6f9f, flatShading: true, roughness: 0.7, metalness: 0.3 });
  const gates = [];
  GATES.forEach((gx, i) => {
    for (const z of [-57.6, -52.4]) for (const dx of [-2.3, 2.3]) b.boxB(gx + dx, T, z, 0.22, 3.4, 0.22, C.yellow);
    for (const dx of [-2.3, 2.3]) b.box(gx + dx, T + 3.5, -55, 0.3, 0.3, 5.6, C.yellow);
    for (const z of [-57.6, -55, -52.4]) b.box(gx, T + 3.5, z, 4.9, 0.3, 0.3, C.yellow);
    b.boxB(gx, T + 3.3, -55, 1.0, 0.8, 1.0, C.steelD); b.box(gx, T + 2.2, -55.4, 0.08, 2.4, 0.08, C.steelD);
    const gm = new THREE.Mesh(new THREE.BoxGeometry(4.15, 3.4, 0.4), gateMat); gm.position.set(gx, 4.3, -55.4); gm.castShadow = true; w.scene.add(gm);
    const fall = new THREE.Mesh(new THREE.PlaneGeometry(3.9, 8.6), fallMat); fall.position.set(gx, 1.5, -50.3); fall.rotation.x = -(Math.PI / 2 - 0.417); w.scene.add(fall);
    gates.push({ mesh: gm, fall, open: i < 2 ? 1 : 0.28 });
    w.addInter('gate:' + i, gx, -52.9, { y: T, ry: Math.PI, h: 5.2 });
  });
  // Sala de turbinas con techo vidriado y rotores visibles
  b.box(12, -1.1, -48, 20, 3.8, 8, cc);
  b.box(12, 2.6, -44.2, 20, 3.6, 0.4, 0xd9d2c4); b.box(2.2, 2.6, -48, 0.4, 3.6, 8, 0xd9d2c4); b.box(21.8, 2.6, -48, 0.4, 3.6, 8, 0xd9d2c4);
  b.box(12, 3.6, -44.0, 20, 0.5, 0.1, C.celeste);
  for (let x = 2; x <= 22; x += 5) b.box(x, 4.5, -48, 0.25, 0.25, 8, C.steel);
  b.box(12, 4.5, -44.2, 20.4, 0.25, 0.4, C.steel);
  w.glassBatch.box(12, 4.55, -48.1, 19.6, 0.08, 7.6, 0xffffff);
  w.addSolid(2, 22, -52, -44, 4.6, true);
  // rampa de servicio desde la orilla uruguaya hasta el techo de la sala de máquinas
  { const RT = x => lerp(4.6, 6.02, clamp((x - 22) / 6.2, 0, 1)), zc = -49;
    b.box(25.1, (RT(22) + RT(28.2)) / 2 - 0.22, zc, 6.36, 0.44, 3, cc, 0, 0, Math.atan2(RT(28.2) - RT(22), 6.2));
    w.addPlatform(21.8, 28.4, zc - 1.5, zc + 1.5, (x) => RT(x));
    for (const s of [-1, 1]) { const z = zc + s * 1.45; for (let x = 22.2; x <= 28.2; x += 1.5) b.boxB(x, RT(x), z, 0.08, 0.95, 0.08, C.steelD); b.box(25.2, (RT(22.2) + RT(28.2)) / 2 + 0.92, z, 6.1, 0.07, 0.07, C.steelD, 0, 0, Math.atan2(RT(28.2) - RT(22.2), 6)); w.addSolid(22, 27.4, z - 0.05, z + 0.05, 6.4); } }
  const rotors = [], rotMat = new THREE.MeshStandardMaterial({ color: 0xe6e6e6, flatShading: true, roughness: 0.5, metalness: 0.4 });
  TURBS.forEach((tx, i) => {
    b.cyl(tx, 0.8, -48, 1.55, 1.7, 1.3, 0xf2a03a, 12); b.cyl(tx, 2.1, -48, 0.5, 0.5, 0.5, C.steelD, 8);
    const r = new THREE.Group(); const disc = new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.35, 0.22, 12), rotMat); r.add(disc);
    for (let k = 0; k < 3; k++) { const sp = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.12, 0.34), new THREE.MeshStandardMaterial({ color: 0xd7263d, roughness: 0.6 })); sp.rotation.y = k * Math.PI / 3; sp.position.y = 0.14; r.add(sp); }
    r.position.set(tx, 2.45, -48); w.scene.add(r); rotors.push(r);
    b.box(tx, 0.1, -44.1, 2.2, 1.0, 0.5, 0x1f2a33);
    w.addInter('turb:' + i, tx, -52.9, { y: T, ry: Math.PI, h: 4.2 });
  });
  sign(w, 'CENTRAL HIDROELÉCTRICA · URUGUAY', 12, 2.2, -43.9, 0, 9, 0.8, { bg: '#1c3d5a' });
  // Central argentina, en la margen oeste (de adorno: su energía va a la red argentina)
  b.box(-36, -1.1, -48, 18, 3.8, 8, cc);
  b.box(-36, 2.6, -44.2, 18, 3.6, 0.4, 0xd9d2c4); b.box(-44.8, 2.6, -48, 0.4, 3.6, 8, 0xd9d2c4); b.box(-27.2, 2.6, -48, 0.4, 3.6, 8, 0xd9d2c4);
  b.box(-36, 3.6, -44.0, 18, 0.5, 0.1, 0x74acdf);
  for (let x = -45; x <= -27; x += 4.5) b.box(x, 4.5, -48, 0.25, 0.25, 8, C.steel);
  w.glassBatch.box(-36, 4.55, -48.1, 17.6, 0.08, 7.6, 0xffffff);
  w.addSolid(-45, -27, -52, -44, 4.6, true);
  const rotA = [];
  for (const tx of [-42, -37.5, -33, -28.5]) {
    b.cyl(tx, 0.8, -48, 1.55, 1.7, 1.3, 0xf2a03a, 12); b.cyl(tx, 2.1, -48, 0.5, 0.5, 0.5, C.steelD, 8); b.box(tx, 0.1, -44.1, 2.2, 1.0, 0.5, 0x1f2a33);
    const r = new THREE.Group(); r.add(new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.35, 0.22, 12), new THREE.MeshStandardMaterial({ color: 0xe6e6e6, flatShading: true, roughness: 0.5, metalness: 0.4 })));
    for (let k = 0; k < 3; k++) { const sp = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.12, 0.34), new THREE.MeshStandardMaterial({ color: 0x74acdf, roughness: 0.6 })); sp.rotation.y = k * Math.PI / 3; sp.position.y = 0.14; r.add(sp); }
    r.position.set(tx, 2.45, -48); w.scene.add(r); rotA.push(r);
  }
  sign(w, 'CENTRAL ARGENTINA', -36, 2.2, -44.0, 0, 6, 0.9, { bg: '#1c3d5a', border: '#74acdf' });
  argFlag(w, -49.5, w.groundAt(-49.5, -58.5), -58.5, 2.4, 1.6, 8);
  flag(W, POS.dam.x1 + 5.2, W.groundAt(POS.dam.x1 + 5.2, -104.4), -104.4, 2.4, 1.6, 8);
  w.updaters.push((dt, st) => { const u = st.grid.hydroUnit, avg = (u[0] + u[1] + u[2] + u[3]) / 4; rotA.forEach((r, i) => { r.rotation.y += dt * (0.25 + avg / CAP.hydro) * 7.5 * (1 + i * 0.03); }); });
  for (let x = -44; x <= 20; x += 4) { const buoy = new THREE.Mesh(new THREE.SphereGeometry(0.4, 6, 5), new THREE.MeshStandardMaterial({ color: 0xff7b25, flatShading: true })); buoy.position.set(x, RES, -62.5); w.scene.add(buoy); (w.dyn.buoys = w.dyn.buoys || []).push(buoy); }
  w.updaters.push((dt, st) => {
    const G = st.grid;
    fallTex.offset.y += dt * 1.6;
    gates.forEach((g, i) => {
      const goal = G.hydro.gates[i].reg ? 0.28 : 1;
      g.open = damp(g.open, goal, 1.5, dt); g.mesh.position.y = 4.3 + g.open * 2.3;
      g.fall.scale.x = 0.3 + 0.7 * g.open; g.fall.material.opacity = 0.9;
      if (Math.random() < g.open * 60 * dt) st.fx.soft.emit(POS.gates[i] + (Math.random() - 0.5) * 3.6 * g.open, 0.3, -46.3 + OZ + Math.random(), (Math.random() - 0.5) * 2, 1.5 + Math.random() * 2.5 * g.open, 1 + Math.random() * 2, 0.8, 0.5, 1.3, 0xffffff, 0.8, 5, 1);
    });
    rotors.forEach((r, i) => { r.rotation.y += dt * (G.hydroUnit[i] / CAP.hydro) * 9; if (G.hydroUnit[i] > 1 && Math.random() < 14 * dt) st.fx.soft.emit(POS.turbs[i] + (Math.random() - 0.5) * 1.6, 0.15, -43.6 + OZ, (Math.random() - 0.5), 0.3, 1.5 + Math.random() * 2, 1.0, 0.4, 1.0, 0xffffff, 0.6, 0, 0.8); });
    w.dyn.buoys.forEach((bu, i) => { bu.position.y = RES + Math.sin(w.time * 1.5 + i) * 0.1; });
  });
  // Pasos de frontera en las dos cabeceras del puente
  const aduana = (x, z, text, col, face) => {
    const y = W.groundAt(x, z), bb = W.batch;
    bb.boxB(x, y, z, 4.4, 2.8, 2.6, 0xf2efe8); bb.boxB(x, y + 2.0, z, 4.46, 0.5, 2.66, col); bb.boxB(x, y + 2.8, z, 4.9, 0.2, 3.1, 0xdad4c6);
    W.winBatch[2].add(new THREE.PlaneGeometry(2.6, 0.9), 0xffffff, x, y + 1.4, z + face * 1.32, 1, 1, 1, 0, face > 0 ? 0 : Math.PI, 0, 0);
    W.addSolid(x - 2.2, x + 2.2, z - 1.3, z + 1.3);
    // barrera levantada sobre el carril (de adorno: no corta el paso)
    const bx = x + 2.9, bz = z + face * 1.7, A = 0.95, L = 4.4, ca = Math.cos(A), sa = Math.sin(A);
    bb.boxB(bx, y, bz, 0.3, 1.1, 0.3, 0xe8e2d2); W.addCircle(bx, bz, 0.25);
    for (let k = 0; k < 6; k++) { const d = (k + 0.5) * L / 6; bb.box(bx, y + 1.05 + d * sa, bz + face * d * ca, 0.13, 0.13, L / 6 + 0.02, k % 2 ? 0xffffff : 0xe5484d, 0, -face * A); }
    sign(W, text, x, y + 0.4, z + face * 1.4 + face * 0.02, face > 0 ? 0 : Math.PI, 4.2, 0.7, { bg: '#12325a', border: '#ffc93c' });
  };
  aduana(-76.5, -104.8, 'ADUANA · URUGUAY', 0x0038a8, 1);
  aduana(-171.5, -104.8, 'ADUANA · ARGENTINA', 0x74acdf, 1);
  sign(W, 'REPRESA DE SALTO GRANDE', -84, W.groundAt(-84, -106.5), -106.5, 0, 7.6, 1.2, { bg: '#0b4f7a', border: '#9be7ff' });
}

// ================= SECTOR 3: PARQUE EÓLICO EN LAS CUCHILLAS =================
export function buildWind(w) {
  const b = w.batch, R = w.rand, turbs = [];
  const whiteBase = new THREE.MeshStandardMaterial({ color: 0xf7f7f2, flatShading: true, roughness: 0.6, transparent: true });
  POS.windT.forEach(([x, z], i) => {
    const white = whiteBase.clone();
    const y = w.groundAt(x, z);
    b.cyl(x, y - 0.3, z, 2.3, 2.5, 0.6, C.concrete, 10); b.cyl(x, y, z, 0.5, 1.0, 22, 0xf4f4ef, 10);
    b.boxB(x, y + 0.3, z + 1.0, 0.7, 1.5, 0.1, 0x8a8f96);
    w.addCircle(x, z, 1.25);
    const nac = new THREE.Group(); nac.position.set(x, y + 22.3, z);
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.4, 3.4), white); body.position.z = -0.5; body.castShadow = true; nac.add(body);
    const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.22, 6, 5), w.mats.beacon); beacon.position.set(0, 0.85, -1.6); nac.add(beacon);
    const rotor = new THREE.Group(); rotor.position.z = 1.5; nac.add(rotor);
    const hub = new THREE.Mesh(new THREE.ConeGeometry(0.62, 1.3, 8), white); hub.rotation.x = Math.PI / 2; hub.position.z = 0.2; rotor.add(hub);
    for (let k = 0; k < 3; k++) {
      const g = new THREE.CylinderGeometry(0.1, 0.5, 10.5, 4); g.scale(1, 1, 0.3); g.translate(0, 5.6, 0);
      const bl = new THREE.Mesh(g, white); bl.rotation.z = k * Math.PI * 2 / 3; bl.castShadow = true; rotor.add(bl);
    }
    w.scene.add(nac);
    turbs.push({ nac, rotor, speed: 0, y, mat: white });
    w.addInter('wind:' + i, x + 2.2, z + 1.6, { ry: 0.6, h: 3.4 });
  });
  const [tx, tz] = POS.windTx, ty = w.groundAt(tx, tz);
  b.boxB(tx, ty, tz, 11, 0.08, 8, 0xb9b09a);
  fence(w, tx - 5.5, tx + 5.5, tz - 4, tz + 4, ty, [tx - 1.6, tx + 1.6]);
  transformer(w, tx - 2.2, ty, tz - 1, 1.1); gantry(w, tx + 2.6, ty, tz - 1.4, Math.PI / 2, 5, 6.5);
  b.boxB(tx + 3.2, ty, tz + 2.2, 1.6, 2.0, 1.0, 0x8c949c);
  w.addInter('wind:tx', tx, tz + 2.6, { y: ty, ry: 0, h: 3.6 });
  sign(w, 'PARQUE EÓLICO LAS CUCHILLAS', 41, w.groundAt(41, 17.5), 17.5, 0.6, 7.5, 1.2);
  // Ganado de las cuchillas
  for (let i = 0; i < 16; i++) {
    const x = 34 + R() * 68, z = -38 + R() * 62; if (w.nearRoad(x, z, 4) || POS.windT.some(p => Math.hypot(p[0] - x, p[1] - z) < 6) || coastD(x, z) < 6) continue;
    const y = w.groundAt(x, z), ry = R() * 6, sheep = i % 3 === 0;
    if (sheep) { b.box(x, y + 0.55, z, 0.6, 0.55, 1.0, 0xf3f0e6, ry); b.box(x + Math.sin(ry) * 0.6, y + 0.7, z + Math.cos(ry) * 0.6, 0.32, 0.34, 0.4, 0x3b342c, ry); }
    else { b.box(x, y + 0.95, z, 0.85, 0.8, 1.8, i % 2 ? 0x9b4a2a : 0x2c2622, ry); b.box(x + Math.sin(ry) * 1.1, y + 1.1, z + Math.cos(ry) * 1.1, 0.5, 0.5, 0.6, 0xf3f0e6, ry); }
    for (const [lx, lz] of [[-0.25, -0.5], [0.25, -0.5], [-0.25, 0.5], [0.25, 0.5]]) { const c = Math.cos(ry), s = Math.sin(ry), k = sheep ? 0.6 : 1; b.boxB(x + (lx * c + lz * s) * k, y, z + (-lx * s + lz * c) * k, 0.14, sheep ? 0.35 : 0.6, 0.14, sheep ? 0x3b342c : 0x4a3a2c); }
  }
  w.updaters.push((dt, st) => {
    const G = st.grid, yaw = Math.atan2(-Math.cos(G.windDir), -Math.sin(G.windDir));
    turbs.forEach((t, i) => {
      t.nac.rotation.y = damp(t.nac.rotation.y, yaw, 0.6, dt);
      const u = G.windP.t[i], free = u.on && !u.fault, p = G.windUnit[i] / CAP.wind;
      t.speed = damp(t.speed, free ? (p > 0.01 ? 0.5 + p * 2.8 : 0.3 * G.wind) : 0, 1.2, dt);
      t.rotor.rotation.z += t.speed * dt;
      // la góndola se vuelve translúcida si queda entre la cámara y Capi
      const ax = st.focus.x - st.cam.x, ay = st.focus.y - st.cam.y, az = st.focus.z - st.cam.z, px = t.nac.position.x - st.cam.x, py = t.nac.position.y - st.cam.y, pz = t.nac.position.z - st.cam.z;
      const k = clamp((px * ax + py * ay + pz * az) / (ax * ax + ay * ay + az * az), 0, 1), d = Math.hypot(px - ax * k, py - ay * k, pz - az * k);
      t.mat.opacity = damp(t.mat.opacity, lerp(0.14, 1, smooth(6, 15, d)), 6, dt);
    });
    // ráfagas estilizadas
    if (Math.random() < G.wind * 55 * dt) {
      const h = POS.windT[Math.floor(Math.random() * 5)], x = h[0] + (Math.random() - 0.5) * 50, z = h[1] + (Math.random() - 0.5) * 50, sp = 9 + G.wind * 14;
      const y = w.terrainAt(x, z) + 2 + Math.random() * 10;
      for (let k = 0; k < 5; k++) st.fx.soft.emit(x - Math.cos(G.windDir) * k * 0.7, y, z - Math.sin(G.windDir) * k * 0.7, Math.cos(G.windDir) * sp, 0, Math.sin(G.windDir) * sp, 1.3, 0.22 - k * 0.03, 0.05, 0xffffff, 0.55 - k * 0.08, 0, 0);
    }
  });
}

// ================= SECTOR 4: PARQUE SOLAR Y BATERÍAS =================
export function buildSolar(w) {
  const b = w.batch, arrays = [];
  const cellTex = canvasTex(64, 64, (g) => { g.fillStyle = '#ffffff'; g.fillRect(0, 0, 64, 64); g.strokeStyle = '#9db4d8'; g.lineWidth = 2; for (let i = 0; i <= 64; i += 16) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 64); g.moveTo(0, i); g.lineTo(64, i); g.stroke(); } });
  cellTex.wrapS = cellTex.wrapT = THREE.RepeatWrapping; cellTex.repeat.set(2, 6);
  POS.solar.forEach(([cx, cz], i) => {
    const y = w.groundAt(cx, cz), mat = new THREE.MeshStandardMaterial({ color: 0xb49a6a, map: cellTex, roughness: 0.35, metalness: 0.35 });
    const rows = [];
    for (const dx of [-4.3, 0, 4.3]) {
      for (const dz of [-4.6, 0, 4.6]) b.boxB(cx + dx, y, cz + dz, 0.18, 1.8, 0.18, C.steel);
      b.box(cx + dx, y + 1.8, cz, 0.16, 0.16, 11.4, C.steelD);
      const p = new THREE.Mesh(new THREE.BoxGeometry(3.7, 0.1, 11), mat); p.position.set(cx + dx, y + 1.95, cz); p.castShadow = true; p.receiveShadow = true; w.scene.add(p); rows.push(p);
    }
    w.addSolid(cx - 6.2, cx + 6.2, cz - 5.6, cz + 5.6);
    arrays.push({ rows, mat, clean: 0, tilt: [0.7, -0.55, 0.4, -0.75][i], miss: [0.7, -0.55, 0.4, -0.75][i] });
    w.addInter('solar:' + i, cx, cz + 7.4, { y, ry: Math.PI, h: 3.4 });
  });
  const [ix, iz] = POS.inverter, iy = w.groundAt(ix, iz);
  b.boxB(ix, iy, iz, 4.2, 2.6, 2.6, C.white); b.boxB(ix, iy + 2.6, iz, 4.5, 0.2, 2.9, 0xdad4c6); b.boxB(ix, iy + 1.9, iz, 4.24, 0.3, 2.64, C.yellow);
  for (let k = -1; k <= 1; k++) b.boxB(ix + k * 1.2, iy + 0.3, iz + 1.32, 0.8, 1.2, 0.06, 0x8c949c);
  w.addSolid(ix - 2.1, ix + 2.1, iz - 1.3, iz + 1.3);
  b.box(ix + 12, iy + 0.05, iz, 22, 0.1, 0.5, 0x8c8676);
  sign(w, 'PARQUE SOLAR Y BATERÍAS', 28, w.groundAt(28, -59.2), -59.4, 0, 7, 1.2);
  // Banco de baterías LFP
  const [bx, bz] = POS.batYard, by = w.groundAt(bx, bz), leds = [];
  b.boxB(bx, by, bz, 15, 0.08, 17, 0xbdb6a2);
  const ledMat = new THREE.MeshStandardMaterial({ color: 0x0c2a1a, emissive: 0x4dffa0, emissiveIntensity: 1.6 });
  for (const dx of [-3.3, 3.3]) for (const dz of [-5.2, 0, 5.2]) {
    const x = bx + dx, z = bz + dz;
    b.boxB(x, by + 0.2, z, 5.6, 2.5, 2.5, 0xf5f3ee); b.boxB(x, by + 1.5, z, 5.64, 0.5, 2.54, C.celeste); b.boxB(x, by, z, 5.2, 0.2, 2.2, C.steelD);
    b.boxB(x + 2.2, by + 2.7, z, 0.9, 0.45, 1.4, 0xb8bcc2); b.box(x - 1.4, by + 1.2, z + 1.27, 0.06, 2.0, 0.04, 0xbdb8ae); b.box(x + 0.2, by + 1.2, z + 1.27, 0.06, 2.0, 0.04, 0xbdb8ae);
    b.box(x - 0.6, by + 0.75, z + 1.27, 1.9, 0.26, 0.05, 0x1b2a22);
    const led = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.18, 0.06), ledMat); led.position.set(x - 0.6, by + 0.75, z + 1.3); w.scene.add(led); leds.push({ m: led, x0: x - 1.5 });
    w.addSolid(x - 2.8, x + 2.8, z - 1.25, z + 1.25);
  }
  gantry(w, bx, by, bz - 7.6, 0, 6, 6);
  w.addInter('bat', POS.batConsole[0], POS.batConsole[1], { ry: 0, h: 3.6 });
  const dusty = new THREE.Color(0xb49a6a), cleanC = new THREE.Color(0x1f3f9a);
  w.updaters.push((dt, st) => {
    const G = st.grid, a = Math.PI * (G.hour - 6) / 12, up = Math.sin(a) > 0.02, track = up ? -clamp(Math.PI / 2 - a, -0.95, 0.95) : 0;
    arrays.forEach((A, i) => {
      const u = G.solar.a[i], ok = u.on && !u.fault;
      A.clean = damp(A.clean, ok ? 1 : 0, 2, dt); A.mat.color.copy(dusty).lerp(cleanC, A.clean);
      A.tilt = damp(A.tilt, ok ? track : A.miss, 1.5, dt); A.rows.forEach(r => { r.rotation.z = A.tilt; });
      if (ok && G.solarUnit[i] > 9 && Math.random() < 1.5 * dt) st.fx.glow.emit(POS.solar[i][0] + (Math.random() - 0.5) * 11, A.rows[0].position.y + 0.4, POS.solar[i][1] + (Math.random() - 0.5) * 10, 0, 0.6, 0, 0.6, 0.9, 0.1, 0xfff0a0, 0.9, 0, 0);
    });
    const soc = G.bat.connected ? G.bat.soc : 0;
    ledMat.emissive.set(G.bat.connected ? (soc < 0.25 ? 0xff5a4d : soc < 0.6 ? 0xffc93c : 0x4dffa0) : 0x223033);
    leds.forEach(L => { const s = Math.max(0.03, soc); L.m.scale.x = s; L.m.position.x = L.x0 + 0.9 * s; });
  });
}

// ================= SECTOR 5: PLANTA DE BIOMASA AGROFORESTAL =================
export function buildBiomass(w) {
  const b = w.batch, R = w.rand, y = 2;
  const [bx, bz] = POS.boiler;
  b.boxB(bx + 2, y, bz + 3, 9, 9.5, 9, 0x7fa37a); b.boxB(bx + 2, y + 9.5, bz + 3, 9.4, 0.3, 9.4, 0x5d7f5a);
  for (let k = -3; k <= 3; k++) b.boxB(bx + 2 + k * 1.2, y + 0.4, bz - 1.53, 0.12, 8.8, 0.06, 0x6c916a);
  b.boxB(bx - 7, y, bz + 3.5, 8, 5.2, 7, 0xe8e2d2); b.boxB(bx - 7, y + 5.2, bz + 3.5, 8.4, 0.3, 7.4, C.celeste);
  w.winBatch[2].add(new THREE.PlaneGeometry(5, 1.2), 0xffffff, bx - 7, y + 3.4, bz - 0.04, 1, 1, 1, 0, Math.PI, 0, 0);
  b.cyl(bx + 9.2, y, bz + 5, 0.75, 1.0, 19, 0xf4f1ea, 10); b.cyl(bx + 9.2, y + 13, bz + 5, 0.86, 0.9, 1.4, C.red, 10); b.cyl(bx + 9.2, y + 16.6, bz + 5, 0.8, 0.83, 1.4, C.red, 10);
  w.addSolid(bx - 2.5, bx + 6.5, bz - 1.5, bz + 7.5); w.addSolid(bx - 11, bx - 3, bz, bz + 7); w.addOcc(bx - 2.5, bx + 6.5, bz - 1.5, bz + 7.5, y + 9.8); w.addOcc(bx - 11, bx - 3, bz, bz + 7, y + 5.5); w.addCircle(bx + 9.2, bz + 5, 1.2);
  const glowMat = new THREE.MeshStandardMaterial({ color: 0x40200c, emissive: 0xff7a1a, emissiveIntensity: 0 });
  const glow = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.3, 0.1), glowMat); glow.position.set(bx + 2, y + 1.6, bz - 1.56); w.scene.add(glow);
  // Acopio de chips bajo tinglado + cinta
  const [cx, cz] = POS.chips;
  for (const dx of [-4, 4]) for (const dz of [-3.2, 3.2]) b.boxB(cx + dx, y, cz + dz, 0.25, 4.6, 0.25, C.steel);
  b.box(cx, y + 4.8, cz, 9.4, 0.25, 7.6, 0xb8bcc2, 0, 0, 0.08);
  b.add(new THREE.ConeGeometry(2.6, 2.6, 8), 0xc9a66b, cx - 1.6, y + 1.3, cz - 0.5); b.add(new THREE.ConeGeometry(2.0, 2.0, 8), 0xd4b27a, cx + 2.2, y + 1.0, cz + 0.6); b.add(new THREE.ConeGeometry(1.4, 1.3, 7), 0xbf9a5c, cx + 0.4, y + 0.65, cz + 2.2);
  w.addCircle(cx - 1.6, cz - 0.5, 2.2); w.addCircle(cx + 2.2, cz + 0.6, 1.7);
  b.box(cx + 7, y + 3.4, cz + 3.2, 9.4, 0.3, 1.0, 0x3d4650, 0.38, 0, 0.42); b.boxB(cx + 4.4, y, cz + 2.2, 0.2, 1.6, 0.2, C.steel); b.boxB(cx + 8.6, y, cz + 3.8, 0.2, 4.2, 0.2, C.steel);
  for (let i = 0; i < 3; i++) for (let k = 0; k < 4 - i; k++) b.cyl(cx - 7 + k * 0.9 + i * 0.45, y + 0.42 + i * 0.75, cz + 8, 0.4, 0.4, 5, 0xa87b4f, 7, Math.PI / 2, 0, 0);
  b.boxB(cx - 4, y + 0.4, cz - 6, 2.4, 1.2, 1.6, C.yellow); b.boxB(cx - 4.4, y + 1.6, cz - 6, 1.2, 1.0, 1.4, 0x33383f); b.box(cx - 2.2, y + 0.9, cz - 6, 1.6, 0.9, 1.5, C.steelD, 0, 0, 0.3);
  for (const dx of [-0.8, 0.8]) for (const dz of [-0.85, 0.85]) b.cyl(cx - 4 + dx, y + 0.45, cz - 6 + dz, 0.45, 0.45, 0.3, 0x22252a, 8, Math.PI / 2, 0, 0);
  w.addInter('bio:chips', cx + 0.5, cz + 4.6, { ry: 0, h: 3.4 });
  w.addInter('bio:boiler', bx - 1.2, bz - 3.4, { ry: 0, h: 3.6 });
  const [sx, sz] = POS.bioSub;
  b.boxB(sx, y, sz, 9, 0.08, 7.5, 0xb9b09a); fence(w, sx - 4.5, sx + 4.5, sz - 3.75, sz + 3.75, y, [sx - 1.5, sx + 1.5]);
  transformer(w, sx - 1.6, y, sz - 0.8, 1); gantry(w, sx + 2.2, y, sz - 1.6, Math.PI / 2, 4.6, 6.3);
  w.addInter('bio:sub', sx, sz + 2.2, { ry: 0, h: 3.6 });
  sign(w, 'PLANTA DE BIOMASA', 45, w.groundAt(45, 66.4), 66.6, 0.2, 6.5, 1.2, { bg: '#2f5d2a', border: '#c9f29b' });
  // Montes de eucaliptos ordenados
  const plant = (x0, x1, z0, z1) => { for (let x = x0; x <= x1; x += 3.1) for (let z = z0; z <= z1; z += 3.1) { const px = x + (R() - 0.5) * 0.6, pz = z + (R() - 0.5) * 0.6; if (coastD(px, pz) < 7 || w.nearRoad(px, pz, 3.2)) continue; w.tree('euca', px, pz, 0.85 + R() * 0.4); } };
  plant(42, 106, 33, 47); plant(84, 106, 52, 74); plant(44, 78, 74, 77);
  w.updaters.push((dt, st) => {
    const p = st.grid.bio.pressure; glowMat.emissiveIntensity = p * (2 + Math.sin(w.time * 9) * 0.5);
    if (p > 0.05 && Math.random() < p * 26 * dt) st.fx.soft.emit(bx + 9.2 + (Math.random() - 0.5) * 0.6, y + 19.4, bz + 5, Math.cos(st.grid.windDir) * (1 + st.grid.wind * 4), 2.2 + Math.random(), Math.sin(st.grid.windDir) * (1 + st.grid.wind * 3), 3.2, 1.2, 4.6, 0xffffff, 0.75, -0.25, 0.25);
    w.mats.charger.emissiveIntensity = st.grid.bio.routed ? 2.2 + Math.sin(w.time * 6) * 0.6 : 0;
  });
}

// ================= INFRAESTRUCTURA: carreteras, puente, líneas de transmisión =================
export function buildRoads(w) {
  const A = C.asphalt, G = C.gravel;
  w.road([[22, 27], [28, 25.5], [34, 22.5]], 3.4, A);
  w.road([[34, 22.5], [42, 16.5], [48, 12.5]], 2.6, G); w.road([[48, 12.5], [57, 5], [66, -1]], 2.4, G);
  w.road([[66, -1], [60, -14], [54.5, -25.5]], 2.2, G); w.road([[66, -1], [70, -18], [72.5, -33]], 2.2, G);
  w.road([[66, -1], [78, -8], [88, -10]], 2.2, G); w.road([[66, -1], [76, 8], [85, 13.5]], 2.2, G);
  w.road([[22, 69], [28, 66.5], [44, 62.5]], 3.6, A);
  // al norte: puente sobre el arroyo, Energimundo y la represa (el coronamiento sigue a Concordia)
  w.road([[-44, 11], [-44, 0], [-44.6, -7], [-46, -12]], 3.4, A);
  w.road([[-46, -42], [-47, -52], [-47.6, -72], [-49, -90], [-56, -99.2], [-70, -100.4], [-86.4, -100.2]], 3.4, A);
  w.road([[-47.4, -49.6], [-60, -49.4], [-74, -49.6], [-82, -50], [-86.8, -50.6]], 3.0, A);   // acceso a Energimundo
  w.road([[-166, -100.2], [-174, -99.6], [-179, -93], [-178.6, -84], [-177.4, -77]], 3.4, A);   // del lado argentino, hasta la avenida de Concordia
  // al noreste: Barrio Jardín y el Parque Solar
  w.road([[-12, 13], [4, 2], [16, -14], [24, -34], [27.5, -49], [27, -54.6]], 3.4, A);
  // al sur: la ruta que sale de la ciudad, con el Barrio Sur y los naranjales
  w.road([[-12, 94.4], [-12, 112], [-11, 140], [-6, 172], [0, 208]], 3.4, A);
  w.road([[-40, 100.4], [-26, 100.4], [-12, 100.4]], 2.8, A);
  w.road([[-11.2, 126], [12, 128], [40, 124], [70, 128], [104, 132]], 2.4, G);
  // Puente arqueado sobre el arroyo
  const b = w.batch, Br = POS.bridge, hA = w.terrainAt(Br.x, Br.z0) + 0.05, hB = w.terrainAt(Br.x, Br.z1) + 0.05;
  const f = z => { const t = clamp((z - Br.z0) / (Br.z1 - Br.z0), 0, 1); return lerp(hA, hB, t) + 1.9 * Math.sin(Math.PI * t); };
  w.addPlatform(Br.x - 2.3, Br.x + 2.3, Br.z0, Br.z1, (x, z) => f(z));
  const n = 14, L = (Br.z1 - Br.z0) / n;
  for (let i = 0; i < n; i++) {
    const z0 = Br.z0 + i * L, z1 = z0 + L, zm = (z0 + z1) / 2, rx = -Math.atan2(f(z1) - f(z0), L);
    b.box(Br.x, f(zm) - 0.2, zm, 4.6, 0.4, L + 0.12, C.concrete, 0, rx); b.box(Br.x, f(zm) + 0.01, zm, 3.6, 0.03, L + 0.1, A, 0, rx);
    for (const s of [-1, 1]) { b.boxB(Br.x + s * 2.2, f(z0), z0, 0.14, 1.0, 0.14, C.white); b.box(Br.x + s * 2.2, f(zm) + 0.95, zm, 0.12, 0.12, L + 0.1, C.white, 0, rx); }
  }
  for (const z of [Br.z0 + (Br.z1 - Br.z0) * 0.3, Br.z0 + (Br.z1 - Br.z0) * 0.7]) for (const s of [-1.5, 1.5]) b.cyl(Br.x + s, -3, z, 0.5, 0.6, f(z) + 2.8, C.concreteD, 8);
  w.lamp(Br.x + 2.6, Br.z1 + 1, -Math.PI / 2); w.lamp(Br.x - 2.6, Br.z0 - 1, Math.PI / 2);
}

export function buildLines(w) {
  const b = w.batch, segs = [];
  const towers = [];   // torres ya levantadas: una segunda línea que pasa por la misma torre cuelga de una cruceta más baja
  const mk = (name, pts, color, cap) => {
    const P = pts.map(([x, z, yo], i) => {
      const y = w.groundAt(x, z), end = i === 0 || i === pts.length - 1;
      const pv = pts[Math.max(0, i - 1)], nx = pts[Math.min(pts.length - 1, i + 1)], ry = Math.atan2(nx[0] - pv[0], nx[1] - pv[1]);
      const shared = !end && towers.some(t => Math.hypot(t[0] - x, t[1] - z) < 1.5);
      if (!end && !shared) {
        b.add(new THREE.CylinderGeometry(0.28, 1.25, 13, 4), C.steel, x, y + 6.5, z, 1, 1, 1, 0, ry + Math.PI / 4, 0);
        b.box(x, y + 11.2, z, 6.6, 0.24, 0.3, C.steel, ry); b.box(x, y + 12.9, z, 3.6, 0.2, 0.26, C.steel, ry);
        for (const s of [-3, 3]) b.cyl(x + Math.cos(ry) * s, y + 10.5, z - Math.sin(ry) * s, 0.07, 0.12, 0.7, 0xb9684a, 5);
        w.addCircle(x, z, 1.0); towers.push([x, z]);
      } else if (shared) {
        b.box(x, y + 8.9, z, 6.0, 0.22, 0.28, C.steel, ry);
        for (const s of [-2.7, 2.7]) b.cyl(x + Math.cos(ry) * s, y + 8.2, z - Math.sin(ry) * s, 0.07, 0.12, 0.7, 0xb9684a, 5);
      }
      return { x, y: y + (end ? (yo || 6) : shared ? 8.2 : 10.5), z, ry, end, low: shared };
    });
    const path = [];
    for (let i = 0; i < P.length - 1; i++) {
      const a = P[i], c = P[i + 1];
      for (const off of [-3, 0, 3]) {
        let prev = null;
        for (let k = 0; k <= 10; k++) {
          const t = k / 10, sag = 4 * t * (1 - t) * 1.7;
          const oa = a.end ? off * 0.6 : a.low ? off * 0.9 : off, oc = c.end ? off * 0.6 : c.low ? off * 0.9 : off, ya = a.y + (off === 0 && !a.end ? (a.low ? 0.75 : 2.3) : 0), yc = c.y + (off === 0 && !c.end ? (c.low ? 0.75 : 2.3) : 0);
          const p = [lerp(a.x + Math.cos(a.ry) * oa, c.x + Math.cos(c.ry) * oc, t), lerp(ya, yc, t) - sag, lerp(a.z - Math.sin(a.ry) * oa, c.z - Math.sin(c.ry) * oc, t)];
          if (prev) segs.push(...prev, ...p);
          prev = p;
          if (off === 0) path.push(new THREE.Vector3(p[0], p[1], p[2]));
        }
      }
    }
    const cum = [0]; for (let i = 1; i < path.length; i++) cum.push(cum[i - 1] + path[i].distanceTo(path[i - 1]));
    w.lines[name] = { path, cum, len: cum[cum.length - 1], color, cap, phase: Math.random(), level: 0 };
  };
  const S = [POS.substation[0] - 1.4, POS.substation[1] - 4.1, 7];
  mk('eolica', [[POS.windTx[0] + 2.6, POS.windTx[1] - 1.4, 6.5], [33, 12], [17, 8.2], [-6, 4], S], 0x9be7ff, 40);
  mk('hidro', [[-92.5, -93, 5], [-80, -111.5], [-62, -109.5], [-44, -96], [-41.5, -74], [-40, -52], [-35.5, -14], S], 0x5ad1ff, 144);
  mk('solar', [[POS.batYard[0], POS.batYard[1] - 7.6, 6], [23, -50], [17, -38], [9, -24], [2, -6], S], 0xffe066, 98);
  mk('biomasa', [[POS.bioSub[0] + 2.2, POS.bioSub[1] - 1.6, 6.3], [56, 46], [51, 18], [33, 12], [17, 8.2], [-6, 4], S], 0xb6f27a, 40);
  // Alimentador urbano en postes de baja tensión (con nidos de hornero), por la vereda este del ensanche
  const poles = [[23.4, 22], [23.4, 33], [23.4, 50.5], [23.4, 62]], fp = [];
  poles.forEach(([x, z], i) => {
    b.cyl(x, 2.1, z, 0.1, 0.14, 7, 0x7a5a3a, 6); b.box(x, 8.6, z, 1.8, 0.14, 0.14, 0x7a5a3a);
    if (i % 2 === 0) { b.sph(x - 0.5, 8.95, z, 0.34, 0xa5673f, 0.9); b.box(x - 0.5, 8.95, z + 0.3, 0.16, 0.2, 0.1, 0x3a2416); b.box(x + 0.45, 8.85, z, 0.14, 0.24, 0.3, 0xb5651d); b.box(x + 0.45, 9.0, z + 0.16, 0.1, 0.1, 0.12, 0xd9a066); }
    fp.push(new THREE.Vector3(x, 8.7, z));
  });
  for (let i = 0; i < fp.length - 1; i++) for (const off of [-0.8, 0.8]) segs.push(fp[i].x + off, fp[i].y, fp[i].z, fp[i + 1].x + off, fp[i + 1].y, fp[i + 1].z);
  const cum = [0]; for (let i = 1; i < fp.length; i++) cum.push(cum[i - 1] + fp[i].distanceTo(fp[i - 1]));
  w.lines.ciudad = { path: fp, cum, len: cum[cum.length - 1], color: 0xffd98a, cap: 1, phase: 0, level: 0 };
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(segs, 3));
  w.scene.add(new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0x2b3038 })));
  const at = (L, t) => { const d = t * L.len; let i = 1; while (i < L.cum.length - 1 && L.cum[i] < d) i++; const k = (d - L.cum[i - 1]) / Math.max(1e-6, L.cum[i] - L.cum[i - 1]); return [lerp(L.path[i - 1].x, L.path[i].x, k), lerp(L.path[i - 1].y, L.path[i].y, k), lerp(L.path[i - 1].z, L.path[i].z, k)]; };
  // Pulsos luminosos: velocidad e intensidad según los MW transmitidos
  w.updaters.push((dt, st) => {
    const o = st.grid.out, mw = { eolica: o.wind, hidro: o.hydro, solar: o.solar + Math.max(0, o.bat), biomasa: o.bio, ciudad: o.pct / 100 };
    for (const k in w.lines) {
      const L = w.lines[k], lv = clamp(mw[k] / L.cap, 0, 1); L.level = damp(L.level, lv, 3, dt);
      if (L.level < 0.02) continue;
      L.phase = (L.phase + dt * (5 + 30 * L.level) / L.len) % 1;
      const n = Math.max(3, Math.round(L.len / 14));
      for (let i = 0; i < n; i++) { const p = at(L, (L.phase + i / n) % 1); st.fx.glow.sprite(p[0], p[1], p[2], 1.2 + 1.8 * L.level, L.color, 0.35 + 0.65 * L.level); }
    }
  });
}

// ================= PARADAS DE ÓMNIBUS (viaje rápido) =================
export function buildStops(w) {
  const b = w.batch, tex = textTex('PARADA', { w: 256, h: 96, bg: '#0b5a4a', fg: '#ffffff', border: '#7dffb0', size: 60 });
  const mat = new THREE.MeshStandardMaterial({ map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.4, roughness: 0.8 });
  POS.stops.forEach(([x, z], i) => {
    const y = w.groundAt(x, z);
    b.boxB(x, y, z - 1.1, 3.0, 0.08, 1.8, 0xbdb6a2);
    for (const dx of [-1.3, 1.3]) b.boxB(x + dx, y, z - 1.7, 0.12, 2.6, 0.12, C.steelD);
    b.box(x, y + 2.65, z - 1.15, 3.2, 0.12, 1.7, C.celeste); b.box(x, y + 1.4, z - 1.74, 2.6, 1.6, 0.05, 0xdff3fb); b.boxB(x, y + 0.35, z - 1.35, 2.2, 0.12, 0.5, C.wood);
    b.cyl(x + 1.9, y, z - 0.6, 0.06, 0.07, 3.4, C.steelD, 6); w.addCircle(x + 1.9, z - 0.6, 0.25); w.addSolid(x - 1.4, x + 1.4, z - 1.85, z - 1.6, y + 2.7);
    for (const r of [0, Math.PI]) { const m = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.56), mat); m.position.set(x + 1.9, y + 3.2, z - 0.6 + (r ? -0.03 : 0.03)); m.rotation.y = r; w.scene.add(m); }
    w.addInter('stop:' + i, x, z, { console: false, y, h: 4.4 });
  });
}

// ================= FLORA Y DETALLES RURALES =================
const FLORA_KEEP = [[-24, 71.8], [-44, 52.3], [-66, -103.6], [37.5, 24.2], [28, -56.2], [40.5, 60], [-79.5, -55.6], [-46, -45]];
export function buildFlora(w) {
  const R = w.rand, b = w.batch;
  // Rancho de Don Mateo con ombú
  const [mx, mz] = POS.mateo, my = w.groundAt(mx - 4, mz + 3);
  w.houses.push({ x: mx - 4.5, y: my, z: mz + 3.5, w: 5.4, d: 4.4, h: 2.5, rh: 1.9, c: 0xf1e7d0, rc: 0xb39a5a, ry: 0.3 });
  w.addSolid(mx - 7.2, mx - 1.8, mz + 1.3, mz + 5.7);
  w.tree('ombu', mx + 7.5, mz + 7.5, 1.1);
  b.cyl(mx - 0.4, w.groundAt(mx - 0.4, mz + 2.8), mz + 2.8, 0.5, 0.5, 0.5, 0x6d6d6d, 8); // fogón
  for (let i = 0; i < 6; i++) b.boxB(mx + 0.5 + i * 1.6, w.groundAt(mx + 0.5 + i * 1.6, mz - 3.4), mz - 3.4, 0.14, 1.1, 0.14, C.wood);
  w.addInter('npc:mateo', mx, mz, { console: false, h: 3.6 });
  // Monte ribereño y árboles dispersos
  let placed = 0, tries = 0;
  while (placed < 230 && tries++ < 4000) {
    const x = lerp(B.minX + 4, B.maxX - 3, R()), z = lerp(B.minZ + 3, B.maxZ - 4, R());
    if (coastD(x, z) < 5 || terrainH(x, z) < 1.6) continue;
    if (x > -88 && x < 25 && z > -10 && z < 98) continue;                      // ciudad, Barrio Norte y costanera
    if (x > -72 && x < -48 && z > 95 && z < 104) continue;                     // canchita de los gurises
    if (x > 0 && x < 47 && z > -35 && z < 12) continue;                         // Barrio Jardín
    if (x > -12 && x < 48 && z > -108 && z < -56) continue;                     // parque solar
    if (x > 38 && z > 28) continue;                                             // biomasa y montes
    if (Math.abs(z - DAM_Z) < 13 && x < -70) continue;                          // estribo de la represa
    if (w.nearRoad(x, z, 3.5) || Math.hypot(x - mx, z - mz) < 9 || FLORA_KEEP.some(p => Math.hypot(p[0] - x, p[1] - z) < 5)) continue;
    if (Math.hypot(x - POS.windTx[0], z - POS.windTx[1]) < 9 || POS.windT.some(p => Math.hypot(p[0] - x, p[1] - z) < 7)) continue;
    const near = channelD(x, z) < 22 || coastD(x, z) < 15, eastF = x > 30;
    if (!near && R() < (eastF ? 0.8 : 0.45)) continue;
    const t = R(), type = near ? (t < 0.3 ? 'ceibo' : t < 0.85 ? 'native' : 'bush') : (t < 0.12 ? 'ombu' : t < 0.5 ? 'native' : t < 0.65 ? 'ceibo' : 'bush');
    const sc = type === 'ombu' ? 0.7 + R() * 0.3 : 0.8 + R() * 0.5; placed++;
    if (type !== 'bush' && POS.stops.some(p => Math.hypot(p[0] - x, p[1] - z) < 7)) continue;
    w.tree(type, x, z, sc);
  }
  for (let i = 0; i < 26; i++) { const a = R() * 6.283, x = 18 + Math.cos(a) * (34 + R() * 6) * 0.9, z = -78 + Math.sin(a) * 30; if (!(x > -12 && x < 48 && z > -108 && z < -56) && !w.nearRoad(x, z, 3)) w.tree('native', x, z, 0.8); }
  // Piedras
  for (let i = 0; i < 40; i++) { const x = lerp(B.minX, B.maxX, R()), z = lerp(B.minZ, B.maxZ, R()), h = terrainH(x, z); if (h > 1.5 && !(x > -88 && x < 25 && z > -10 && z < 98) && !(x > 0 && x < 47 && z > -35 && z < 12) && !(x > -88 && x < -48 && z > -100 && z < -48) && !w.nearRoad(x, z, 2.5)) b.add(new THREE.IcosahedronGeometry(0.4 + R() * 0.6, 0), 0x9a968c, x, h + 0.1, z, 1, 0.6, 1, 0, R() * 6, 0); }
}

// ================= AMPLIACIÓN: CAMPO DEL SUR, NARANJALES Y MONTES =================
// La maqueta creció: al sur de la ciudad ya no hay río sino campo salteño, con naranjales, un packing de citrus,
// chacras, cortinas de eucaliptos y montes nativos. También se plantan árboles en las franjas nuevas del este y del norte.
export function buildSur(w) {
  const R = rng(9090), b = w.batch;
  const GROVES = [[8, 104, 8, 5], [46, 106, 7, 5], [10, 134, 9, 5], [56, 136, 8, 6], [84, 108, 6, 7]], SP = 3.4;
  const inGrove = (x, z, m = 2) => GROVES.some(([x0, z0, nx, nz]) => x > x0 - m && x < x0 + (nx - 1) * SP + m && z > z0 - m && z < z0 + (nz - 1) * SP + m);
  for (const [x0, z0, nx, nz] of GROVES) for (let i = 0; i < nx; i++) for (let k = 0; k < nz; k++) {
    const x = x0 + i * SP + (R() - 0.5) * 0.4, z = z0 + k * SP + (R() - 0.5) * 0.4;
    if (!w.nearRoad(x, z, 2.6)) w.tree('naranjo', x, z, 0.8 + R() * 0.25);
  }
  // cortinas de eucaliptos (rompevientos) al norte de los naranjales
  for (let x = 4; x < 108; x += 2.8) if (!w.nearRoad(x, 100.5, 3) && !inGrove(x, 100.5, 1)) w.tree('euca', x + (R() - 0.5) * 0.6, 100.5 + (R() - 0.5) * 0.8, 0.85 + R() * 0.25);
  // packing de citrus: galpón de clasificación con cajones de naranjas
  const px = 31, pz = 116.5, py = w.groundAt(px, pz);
  b.boxB(px, py - 0.4, pz, 15.4, 0.5, 10.4, 0xb7ae9b);
  b.boxB(px, py, pz, 14, 4.2, 8.6, 0xe9e2d0); b.boxB(px, py + 3.2, pz, 14.06, 0.5, 8.66, 0xff8f1f);
  b.add(new THREE.CylinderGeometry(1, 1, 1, 3).rotateZ(Math.PI / 2).rotateY(Math.PI / 2), 0x8f9aa3, px, py + 5.0, pz, 14.6, 1.6, 9.2 / 1.732);
  b.boxB(px - 3, py, pz + 4.33, 3.2, 3.0, 0.1, 0x5b5a56); b.boxB(px + 3, py, pz + 4.33, 3.2, 3.0, 0.1, 0x5b5a56);
  for (let i = 0; i < 6; i++) for (let k = 0; k < 2; k++) { const x = px - 6 + i * 1.5, z = pz + 6 + k * 1.2, y = w.groundAt(x, z); b.boxB(x, y, z, 1.2, 0.6, 0.9, 0xb98a52); b.boxB(x, y + 0.6, z, 1.0, 0.14, 0.7, 0xff9f2a); }
  w.addSolid(px - 7, px + 7, pz - 4.3, pz + 4.3); w.addOcc(px - 7, px + 7, pz - 4.3, pz + 4.3, py + 5.8);
  sign(w, 'PACKING DE CITRUS', px + 9.4, w.groundAt(px + 9.4, pz + 6), pz + 6, 0, 6.4, 1.1, { bg: '#c9541a', border: '#ffe0a0' });
  // tambo y casa de chacra con molino de viento para el agua
  const fx = 74, fz = 158, fy = w.groundAt(fx, fz);
  w.houses.push({ x: fx, y: fy, z: fz, w: 6, d: 4.6, h: 2.6, rh: 1.6, c: 0xf2e4c4, rc: 0xb5533c, ry: 0.1 }); w.addSolid(fx - 3, fx + 3, fz - 2.3, fz + 2.3);
  const mx = fx + 7, mz = fz - 2, my = w.groundAt(mx, mz);
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b.add(new THREE.CylinderGeometry(0.06, 0.08, 7.4, 4), 0x9aa0a6, mx + sx * 0.7, my + 3.6, mz + sz * 0.7, 1, 1, 1, sz * 0.1, 0, -sx * 0.1);
  for (let k = 0; k < 12; k++) { const a = k * Math.PI / 6; b.box(mx + Math.cos(a) * 0.9, my + 7.6 + Math.sin(a) * 0.9, mz + 0.3, 0.5, 1.5, 0.04, 0xd8dde2, 0, 0, a); }
  b.cyl(mx, my, mz + 2.2, 1.2, 1.2, 1.0, 0x9aa0a6, 12); w.addCircle(mx, mz, 1.0); w.addCircle(mx, mz + 2.2, 1.25);
  for (let i = 0; i < 9; i++) b.boxB(fx - 9 + i * 2.2, w.groundAt(fx - 9 + i * 2.2, fz + 7), fz + 7, 0.14, 1.1, 0.14, C.wood);
  // montes nativos y árboles sueltos en las franjas nuevas (sur, este y norte de la maqueta)
  let placed = 0, tries = 0;
  while (placed < 190 && tries++ < 5000) {
    const x = lerp(-86, 127, R()), z = lerp(-147, 207, R());
    if (x > B.minX + 4 && x < B.maxX - 3 && z > B.minZ + 3 && z < B.maxZ - 4) continue;   // el área original ya tiene su flora
    if (coastD(x, z) < 5 || terrainH(x, z) < 1.6) continue;
    if ((x > -42 && x < -14 && z > 97 && z < 136) || inGrove(x, z, 3) || Math.hypot(x - px, z - pz) < 12 || Math.hypot(x - fx, z - fz) < 12) continue;
    if (x > -94 && x < 50 && z > -112 && z < -48) continue;                      // represa, Energimundo y parque solar
    if ((x > -74 && x < -20 && z > 138) || (x > 20 && x < 126 && z > 158 && !(x > 64 && x < 86 && z < 168))) continue;   // chacras
    if (w.nearRoad(x, z, 3.5)) continue;
    const t = R(), riv = coastD(x, z) < 18, type = riv ? (t < 0.35 ? 'ceibo' : t < 0.85 ? 'native' : 'bush') : (t < 0.1 ? 'ombu' : t < 0.45 ? 'native' : t < 0.6 ? 'euca' : t < 0.75 ? 'ceibo' : 'bush');
    if (!riv && R() < 0.35) continue;
    w.tree(type, x, z, type === 'ombu' ? 0.75 + R() * 0.3 : 0.8 + R() * 0.5); placed++;
  }
}
