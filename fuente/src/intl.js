// Ómnibus internacional Salto ⇄ Concordia. Sale del costado norte de la Terminal del Bulevar, cruza la ciudad por las
// calles de mano única, pasa por arriba de la represa (el puente internacional), para en la aduana del país al que entra
// y da la vuelta en una rotonda de Concordia. También se puede viajar en él: la cámara lo sigue sobre el coronamiento.
import * as THREE from 'three';
import { CITY_Y, westBank } from './terrain.js';
import { Batch, C, canvasTex, textTex } from './world.js';
import { makePerson } from './actors.js';
import { clamp, lerp, damp, angDiff } from './util.js';

const $ = id => document.getElementById(id);
export const avX = z => westBank(z) - 15;                       // avenida de Concordia, paralela a la costanera
export const ROT = { x: avX(24), z: 24, r: 5.4 };               // rotonda con naranjos (Concordia es la Capital Nacional del Citrus)
const SAL = { x: -20, z: 55 };                                  // andén del internacional, al costado norte de la terminal
const CON = { z: -14 };                                         // parada en la avenida de Concordia (mano al sur, vereda oeste)
export const INTL_STOPS = { salto: { x: -20, z: 57.5 }, concordia: { x: avX(-14) - 2.6, z: -14 } };
export const CLEAR5 = [[ROT.x - 8, ROT.x + 8, ROT.z - 8, ROT.z + 8], [avX(-14) - 5, avX(-14) - 1.4, -18, -10]];
// ¿Queda libre este lugar en Concordia? (para que no caigan casas en la rotonda ni en la parada)
export const intlKeep = (x, z) => Math.hypot(x - ROT.x, z - ROT.z) < ROT.r + 6 || (Math.abs(z - CON.z) < 5 && x > avX(CON.z) - 7 && x < avX(CON.z) + 1);

const VC = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.6 });
const LIT = new THREE.MeshBasicMaterial({ vertexColors: true });

// ---------- Construcción (antes de fundir la geometría) ----------
function shelter(w, x, z, ry, y) {   // refugio con techo celeste y banco, abierto hacia la calle
  const b = w.batch, s = Math.sin(ry), c = Math.cos(ry), P = (a, d) => [x + c * a + s * d, z - s * a + c * d];
  const [bx, bz] = P(0, -0.7); b.boxB(bx, y, bz, ry ? 1.8 : 3.4, 0.08, ry ? 3.4 : 1.8, 0xbdb6a2);
  for (const a of [-1.5, 1.5]) { const [px, pz] = P(a, -1.3); b.boxB(px, y, pz, 0.12, 2.6, 0.12, C.steelD); }
  const [rx, rz] = P(0, -0.75); b.box(rx, y + 2.65, rz, ry ? 1.8 : 3.6, 0.12, ry ? 3.6 : 1.8, 0x75aadb);
  const [gx, gz] = P(0, -1.32); b.box(gx, y + 1.4, gz, ry ? 0.05 : 3.0, 1.6, ry ? 3.0 : 0.05, 0xdff3fb);
  const [sx, sz] = P(0, -0.95); b.boxB(sx, y + 0.35, sz, ry ? 0.5 : 2.4, 0.12, ry ? 2.4 : 0.5, C.wood);
  const [ax, az] = P(-1.6, -1.4), [cx, cz] = P(1.6, -1.25); w.addSolid(Math.min(ax, cx), Math.max(ax, cx), Math.min(az, cz), Math.max(az, cz), y + 2.7);
}
function intlSign(w, x, y, z, ry, sw = 4.4, sh = 0.75) {
  const tex = textTex('INTERNACIONAL · SALTO – CONCORDIA', { w: 768, h: Math.round(768 * sh / sw), bg: '#0b3d91', fg: '#ffffff', border: '#75aadb', size: 64 });
  const mat = new THREE.MeshStandardMaterial({ map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.35, roughness: 0.8 });
  for (const r of [ry, ry + Math.PI]) { const m = new THREE.Mesh(new THREE.PlaneGeometry(sw, sh), mat); m.position.set(x + Math.sin(r) * 0.04, y + 2.5 + sh / 2, z + Math.cos(r) * 0.04); m.rotation.y = r; w.scene.add(m); }
  const s = Math.cos(ry) * (sw / 2 - 0.25), c = -Math.sin(ry) * (sw / 2 - 0.25);
  w.batch.boxB(x + s, y, z + c, 0.16, 2.55 + sh, 0.16, C.steelD); w.batch.boxB(x - s, y, z - c, 0.16, 2.55 + sh, 0.16, C.steelD);
  w.addCircle(x + s, z + c, 0.2); w.addCircle(x - s, z - c, 0.2);
}
// Andén en Salto: bajo el voladizo de las bóvedas de la terminal, con el cartel junto al cordón
export function buildIntlSalto(w) {
  intlSign(w, SAL.x, CITY_Y, 56.95, 0);
  for (let x = -24.5; x <= -15.5; x += 1.5) w.batch.box(x, CITY_Y + 0.03, 56.9, 0.9, 0.02, 0.14, 0x75aadb);   // borde del andén pintado
  w.addInter('intl:0', SAL.x, 57.9, { console: false, y: CITY_Y, h: 3.6, r: 3 });
}
// Concordia: rotonda con naranjos y la parada sobre la avenida (se arma antes que las casas del barrio)
export function buildIntlConcordia(w) {
  const pts = []; for (let k = 0; k <= 36; k++) { const a = k / 36 * Math.PI * 2; pts.push([ROT.x + Math.cos(a) * ROT.r, ROT.z + Math.sin(a) * ROT.r]); }
  w.road(pts, 3.0, C.asphalt, 0.09);
  const y = w.terrainAt(ROT.x, ROT.z), b = w.batch, ri = ROT.r - 1.5;
  b.cyl(ROT.x, y - 0.2, ROT.z, ri + 0.15, ri + 0.2, 0.55, 0xe9e2d4, 24);   // cordón
  b.cyl(ROT.x, y - 0.2, ROT.z, ri, ri, 0.62, 0x6fae4a, 24);                // césped
  w.addSolid(ROT.x - ri * 0.72, ROT.x + ri * 0.72, ROT.z - ri * 0.72, ROT.z + ri * 0.72, y + 0.45);
  for (let k = 0; k < 5; k++) { const a = k / 5 * Math.PI * 2 + 0.4; w.trees.push({ type: 'naranjo', x: ROT.x + Math.cos(a) * 2.1, z: ROT.z + Math.sin(a) * 2.1, s: 0.8, y: y + 0.42 }); }
  w.trees.push({ type: 'naranjo', x: ROT.x, z: ROT.z, s: 1.05, y: y + 0.42 });
  const sx = INTL_STOPS.concordia.x + 0.2, sz = CON.z, sy = w.terrainAt(sx, sz);
  b.boxB(sx - 0.5, sy - 0.25, sz, 2.0, 0.32, 6.4, 0xd8cfc0);                 // vereda de la parada
  shelter(w, sx - 0.3, sz, Math.PI / 2, sy + 0.07);
  intlSign(w, sx, sy + 0.07, sz - 3.7, Math.PI / 2, 3.6, 0.7);
  w.addInter('intl:1', sx + 0.4, sz + 2.2, { console: false, y: sy + 0.07, h: 3.6, r: 3 });
}

// ---------- Recorrido ----------
// Las rutas se dibujan como curvas Catmull-Rom (igual que world.road): el ómnibus sigue la misma curva para no salirse del asfalto
const ROAD_N = [[-44, 11], [-44, 0], [-44.6, -7], [-46, -12]];
const ROAD_M = [[-46, -42], [-47, -52], [-47.6, -72], [-49, -90], [-56, -99.2], [-70, -100.4], [-86.4, -100.2]];
const ROAD_A = [[-166, -100.2], [-174, -99.6], [-179, -93], [-178.6, -84], [-177.4, -77]];
const CREST_Z = -100.4;
function curve(pts, step = 1) {
  const c = new THREE.CatmullRomCurve3(pts.map(p => new THREE.Vector3(p[0], 0, p[1])), false, 'catmullrom', 0.5), n = Math.max(2, Math.ceil(c.getLength() / step)), out = [];
  for (let i = 0; i <= n; i++) { const p = c.getPointAt(i / n); out.push([p.x, p.z]); }
  return out;
}
// Esquinas redondeadas: en cada vértice se cambia el quiebre por una curva cuadrática
function fillet(pts, R) {
  const out = [pts[0]];
  for (let i = 1; i < pts.length - 1; i++) {
    const [ax, az] = pts[i - 1], [px, pz] = pts[i], [bx, bz] = pts[i + 1], la = Math.hypot(ax - px, az - pz), lb = Math.hypot(bx - px, bz - pz);
    const ang = Math.abs(angDiff(Math.atan2(px - ax, pz - az), Math.atan2(bx - px, bz - pz)));
    if (ang < 0.05 || la < 0.01 || lb < 0.01) { out.push(pts[i]); continue; }
    const d = Math.min(R * Math.tan(ang / 2), la * 0.45, lb * 0.45), p0 = [px + (ax - px) / la * d, pz + (az - pz) / la * d], p1 = [px + (bx - px) / lb * d, pz + (bz - pz) / lb * d];
    for (let k = 0; k <= 8; k++) { const t = k / 8, u = 1 - t; out.push([u * u * p0[0] + 2 * u * t * px + t * t * p1[0], u * u * p0[1] + 2 * u * t * pz + t * t * p1[1]]); }
  }
  out.push(pts[pts.length - 1]); return out;
}
function resample(pts, step) {
  const out = [{ x: pts[0][0], z: pts[0][1] }]; let acc = 0;
  for (let i = 1; i < pts.length; i++) {
    let [ax, az] = pts[i - 1]; const [bx, bz] = pts[i]; let seg = Math.hypot(bx - ax, bz - az);
    while (acc + seg >= step) { const t = (step - acc) / seg; ax = ax + (bx - ax) * t; az = az + (bz - az) * t; out.push({ x: ax, z: az }); seg = Math.hypot(bx - ax, bz - az); acc = 0; }
    acc += seg;
  }
  return out;
}
function buildPath() {
  const nRoad = curve(ROAD_N), mRoad = curve(ROAD_M), aRoad = curve(ROAD_A);
  const av = []; for (let z = -78; z <= 206; z += 8) av.push([avX(z), z]);
  const avC = curve(av), rz0 = ROT.z - ROT.r;
  const avS = avC.filter(p => p[1] > -77.5 && p[1] < rz0 - 5).map(p => [p[0] - 0.8, p[1]]);      // mano sur: carril oeste
  const avN = avC.filter(p => p[1] > -77.5 && p[1] < rz0 - 5).map(p => [p[0] + 0.8, p[1]]).reverse();
  // la rotonda se recorre en sentido antihorario visto en el mapa (mano derecha): se entra al oeste del punto norte y se sale al este
  const d0 = Math.asin(0.8 / ROT.r), ring = []; for (let k = 0; k <= 48; k++) { const a = -Math.PI / 2 - (d0 + (Math.PI * 2 - 2 * d0) * k / 48); ring.push([ROT.x + Math.cos(a) * ROT.r, ROT.z + Math.sin(a) * ROT.r]); }
  const crest = [[-86.4, -100.2], [-90, CREST_Z], [-125, CREST_Z], [-161, CREST_Z], [-166, -100.2]];
  const nNorth = nRoad.filter(p => p[1] < -6.5);                     // del Barrio Norte hacia el puente
  const nSouth = [...nRoad].reverse().filter(p => p[1] < 5.5);       // de vuelta, hasta la entrada a la calle 12
  const parts = {};
  const piece = (name, pts) => { parts[name] = pts; return pts; };
  const out = [].concat(
    piece('salida', fillet([[SAL.x, SAL.z], [-28, 55], [-28, -1], [-44, -1], nNorth[0]], 5.5)),
    piece('norte', nNorth), [[-46, -27]], piece('sur', mRoad), piece('cresta', crest.slice(1)), piece('arg', aRoad.slice(1)),
    piece('avS', avS), fillet([avS[avS.length - 1], ring[0], ring[6]], 3).slice(1, -1), piece('rot', ring.slice(6, 43)), fillet([ring[42], ring[48], avN[0]], 3).slice(1, -1), piece('avN', avN),
    [...aRoad].reverse().slice(1), [...crest].reverse().slice(1), [...mRoad].reverse(), [[-46, -27]], nSouth,
    piece('vuelta', fillet([[-44, 6], [-44, 12.6], [-12, 12.6], [-12, 55], [SAL.x, SAL.z]], 5.5).slice(1))
  );
  return resample(out, 0.5);
}

// ---------- Carrocería ----------
function flagUY(g, x, y, w, h) {
  g.fillStyle = '#fff'; g.fillRect(x, y, w, h); g.fillStyle = '#0038a8'; for (let i = 0; i < 4; i++) g.fillRect(x, y + h / 9 * (1 + i * 2), w, h / 9);
  g.fillStyle = '#fff'; g.fillRect(x, y, h * 5 / 9, h * 5 / 9); g.fillStyle = '#fcd116'; g.beginPath(); g.arc(x + h * 5 / 18, y + h * 5 / 18, h * 0.13, 0, 7); g.fill();
  g.strokeStyle = '#fcd116'; g.lineWidth = Math.max(1, h * 0.03); for (let k = 0; k < 16; k++) { const a = k * Math.PI / 8; g.beginPath(); g.moveTo(x + h * 5 / 18 + Math.cos(a) * h * 0.13, y + h * 5 / 18 + Math.sin(a) * h * 0.13); g.lineTo(x + h * 5 / 18 + Math.cos(a) * h * 0.23, y + h * 5 / 18 + Math.sin(a) * h * 0.23); g.stroke(); }
}
function flagAR(g, x, y, w, h) {
  g.fillStyle = '#74acdf'; g.fillRect(x, y, w, h); g.fillStyle = '#fff'; g.fillRect(x, y + h / 3, w, h / 3);
  g.fillStyle = '#f6b40e'; g.beginPath(); g.arc(x + w / 2, y + h / 2, h * 0.11, 0, 7); g.fill();
}
function coachMesh() {
  const L = 11.2, W = 2.5, g = new THREE.Group(), b = new Batch(), lit = new Batch(), win = new Batch();
  const white = 0xf6f7f9, blue = 0x0b3d91, cel = 0x75aadb, dark = 0x1c1e22;
  b.boxB(0, 0.36, 0, W, 2.95, L, white); b.boxB(0, 0.3, 0, W + 0.04, 0.52, L + 0.04, blue); b.box(0, 1.0, 0, W + 0.05, 0.16, L + 0.05, cel);
  b.boxB(0, 3.31, -0.8, W - 0.5, 0.26, 5.2, 0xdfe3e8); b.boxB(0, 3.31, 3.4, W - 0.7, 0.2, 1.4, 0xdfe3e8);   // baterías y aire en el techo
  for (const sz of [3.65, -2.95, -4.15]) for (const sx of [-1.17, 1.17]) { b.cyl(sx, 0.5, sz, 0.5, 0.5, 0.32, dark, 12, 0, 0, Math.PI / 2); b.cyl(sx * 1.01, 0.5, sz, 0.26, 0.26, 0.34, 0xb8bec4, 8, 0, 0, Math.PI / 2); }
  b.box(0, 0.55, L / 2 + 0.05, W, 0.32, 0.12, dark); b.box(0, 0.55, -L / 2 - 0.05, W, 0.32, 0.12, dark);
  for (const sx of [-1, 1]) { b.box(sx * 1.42, 2.75, L / 2 - 0.1, 0.08, 0.06, 0.6, dark); b.box(sx * 1.66, 2.5, L / 2 + 0.15, 0.1, 0.5, 0.16, dark); }
  win.box(0, 2.3, 0.45, W + 0.06, 1.0, 6.9, 0x22303c);                         // ventanillas (atrás queda el panel con el logo)
  win.box(0, 2.05, L / 2 + 0.03, W - 0.16, 1.9, 0.06, 0x22303c);               // parabrisas
  win.box(0, 2.35, -L / 2 - 0.03, W - 0.5, 0.8, 0.06, 0x22303c);               // luneta
  for (const sx of [-1, 1]) win.box(sx * (W / 2 + 0.035), 1.65, L / 2 - 1.15, 0.05, 2.1, 0.9, 0x2a3a4a);   // puertas delanteras
  for (const sx of [-0.82, 0.82]) { lit.box(sx, 0.86, L / 2 + 0.07, 0.46, 0.18, 0.05, 0xfff4c2); lit.box(sx, 0.95, -L / 2 - 0.07, 0.3, 0.32, 0.05, 0xff3030); }
  const winMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.25, metalness: 0.2, emissive: 0xffe2a8, emissiveIntensity: 0 });
  const bm = b.mesh(VC); bm.castShadow = true; g.add(bm, win.mesh(winMat), lit.mesh(LIT));
  // costados con la leyenda y las dos banderas
  const side = canvasTex(1024, 72, (x) => {
    x.fillStyle = '#f6f7f9'; x.fillRect(0, 0, 1024, 72);
    x.fillStyle = '#75aadb'; x.beginPath(); x.moveTo(0, 72); x.bezierCurveTo(300, 70, 520, 40, 1024, 52); x.lineTo(1024, 72); x.fill();
    flagUY(x, 14, 12, 66, 44); flagAR(x, 944, 12, 66, 44);
    x.fillStyle = '#0b3d91'; x.textAlign = 'center'; x.textBaseline = 'middle'; let fs = 44; x.font = `900 ${fs}px Nunito, Arial, sans-serif`;
    const t = 'INTERNACIONAL  ·  SALTO ⇄ CONCORDIA'; while (x.measureText(t).width > 820 && fs > 20) { fs -= 2; x.font = `900 ${fs}px Nunito, Arial, sans-serif`; }
    x.fillText(t, 512, 34);
  });
  const sm = new THREE.MeshStandardMaterial({ map: side, roughness: 0.6 });
  for (const sx of [-1, 1]) { const p = new THREE.Mesh(new THREE.PlaneGeometry(8.6, 0.6), sm); p.position.set(sx * (W / 2 + 0.032), 1.42, -0.6); p.rotation.y = sx * Math.PI / 2; g.add(p); }
  // logo de Salto Grande en los dos costados, sobre el panel trasero sin ventanillas (archivo provisto por Energimundo)
  const sgc = document.createElement('canvas'); sgc.width = 512; sgc.height = 287; const sgx = sgc.getContext('2d'), sgt = new THREE.CanvasTexture(sgc); sgt.colorSpace = THREE.SRGBColorSpace; sgt.anisotropy = 4;
  const paintSG = () => { sgx.fillStyle = '#f6f7f9'; sgx.fillRect(0, 0, 512, 287); const im = $('logoSG'); if (im && im.naturalWidth) { const k = Math.min(492 / im.naturalWidth, 270 / im.naturalHeight), w = im.naturalWidth * k, h = im.naturalHeight * k; sgx.drawImage(im, (512 - w) / 2, (287 - h) / 2, w, h); } sgt.needsUpdate = true; };
  paintSG(); { const im = $('logoSG'); if (im && !im.naturalWidth) im.addEventListener('load', paintSG, { once: true }); }
  const sgm = new THREE.MeshStandardMaterial({ map: sgt, roughness: 0.55 });
  for (const sx of [-1, 1]) { const p = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 1.18), sgm); p.position.set(sx * (W / 2 + 0.032), 2.3, -4.35); p.rotation.y = sx * Math.PI / 2; g.add(p); }
  const back = canvasTex(256, 64, (x) => { x.fillStyle = '#0b3d91'; x.fillRect(0, 0, 256, 64); x.fillStyle = '#ffd23f'; x.beginPath(); x.moveTo(40, 8); x.lineTo(22, 36); x.lineTo(36, 36); x.lineTo(28, 58); x.lineTo(50, 26); x.lineTo(36, 26); x.closePath(); x.fill(); x.fillStyle = '#fff'; x.font = '900 30px Nunito, Arial, sans-serif'; x.textBaseline = 'middle'; x.fillText('ELÉCTRICO', 64, 34); });
  const bp = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.4), new THREE.MeshStandardMaterial({ map: back, roughness: 0.6 })); bp.position.set(0, 1.45, -L / 2 - 0.035); bp.rotation.y = Math.PI; g.add(bp);
  // cartel de destino con letras de LED
  const dest = t => canvasTex(512, 72, (x) => { x.fillStyle = '#120c06'; x.fillRect(0, 0, 512, 72); x.fillStyle = '#ffa31a'; x.font = '900 46px "Lilita One", "Arial Black", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(t, 256, 38); });
  const dm = new THREE.MeshBasicMaterial({ map: dest('CONCORDIA') }), dPlane = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 0.27), dm); dPlane.position.set(0, 3.05, L / 2 + 0.07); g.add(dPlane);
  g.traverse(o => { if (o.isMesh) o.receiveShadow = false; });
  return { g, winMat, dm, dest: { c: dm.map, s: dest('SALTO') }, L };
}

export class Internacional {
  constructor(game) {
    const g = this.g = game, sc = game.scene, w = game.world;
    this.path = buildPath(); const P = this.path, n = P.length; this.L = n * 0.5;
    // rumbo y velocidad tope en cada punto (ciudad despacio, coronamiento tranquilo, curvas según su radio)
    this.h = new Float32Array(n); this.vmax = new Float32Array(n);
    for (let i = 0; i < n; i++) { const a = P[(i - 2 + n) % n], b = P[(i + 2) % n]; this.h[i] = Math.atan2(b.x - a.x, b.z - a.z); }
    for (let i = 0; i < n; i++) {
      const p = P[i], k = Math.abs(angDiff(this.h[(i - 6 + n) % n], this.h[(i + 6) % n])) / 6;
      let v = p.z > -9 && p.z < 95 && p.x > -84 && p.x < 23 ? 5.2 : Math.abs(p.z - CREST_Z) < 2 && p.x < -88 && p.x > -163 ? 7.5 : 10;
      if (k > 1e-3) v = Math.min(v, Math.sqrt(2.4 / k)); this.vmax[i] = Math.max(2.4, v);
    }
    for (let pass = 0; pass < 2; pass++) for (let i = n - 1; i >= 0; i--) this.vmax[i] = Math.min(this.vmax[i], Math.sqrt(this.vmax[(i + 1) % n] ** 2 + 2 * 1.6 * 0.5));   // frenar antes de las curvas
    const near = (x, z, a = 0, b = n) => { let bi = a, bd = 1e9; for (let i = a; i < b; i++) { const d = (P[i].x - x) ** 2 + (P[i].z - z) ** 2; if (d < bd) { bd = d; bi = i; } } return bi * 0.5; };
    this.near = near; const mid = Math.round(near(ROT.x, ROT.z + ROT.r) * 2);   // media vuelta: el punto sur de la rotonda
    this.half = mid * 0.5;
    // Paradas y aduanas (se para en la del país al que entra)
    this.events = [
      { s: near(-171, -100.2, 0, mid), dwell: 2.6, kind: 'aduana', text: 'Aduana argentina' },
      { s: near(avX(CON.z) - 0.8, CON.z, 0, mid), dwell: 12, kind: 'stop', at: 'concordia' },
      { s: near(-76.5, CREST_Z + 0.1, mid, n), dwell: 2.6, kind: 'aduana', text: 'Aduana uruguaya' },
      { s: this.L - 0.25, dwell: 14, kind: 'stop', at: 'salto' }
    ].sort((a, b) => a.s - b.s);
    // Semáforos de la calle -28 (al subir) y de la calle 12 (al volver): grupo 0 = norte-sur, 1 = este-oeste
    this.lights = [{ s: near(-28, 29.6, 0, mid), grp: 0, k: 3 }, { s: near(-28, 15, 0, mid), grp: 0, k: 1 }, { s: near(-31, 12.2, mid, n), grp: 1, k: 1 }];
    // Cruces donde hay que ceder el paso (entrada a la calle -28, cruce de la calle del Barrio Norte, entrada a la calle 12)
    // (el punto de espera queda 6 m antes del cruce: el frente del ómnibus va 5,6 m adelante de su centro)
    this.yields = [{ s: 0.4, x: -28, z: 55, r: 8 }, { s: near(-44.6, -6.1, mid, n), x: -44, z: -1, r: 8 }, { s: near(-44, 6.4, mid, n), x: -44, z: 12, r: 9 }];
    this.ride0 = [near(-49, -90, 0, mid), near(-178.6, -84, 0, mid)]; this.ride1 = [near(-178.6, -84, mid, n), near(-49, -90, mid, n)];
    // Ómnibus
    const m = coachMesh(); this.m = m; sc.add(m.g);
    this.s = 0; this.v = 0; this.state = 'dwell'; this.wait = 8; this.ei = this.events.findIndex(e => e.at === 'salto'); this.y = CITY_Y; this.yieldT = 0; this.blockT = 0; this.honkT = 0; this.ghost = 0; this.at = 'salto';
    this.out = true; this.circles = [];
    // Pasajeros con valijas
    const bag = new THREE.BoxGeometry(0.42, 0.55, 0.24), bagM = [0x6a2c91, 0x2a9d8f, 0xe5484d, 0x3a3f4a, 0xffc420].map(c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.8 }));
    const pax = (x, z, ry, i) => { const p = makePerson({ skin: [0xe0ac86, 0xc58b62, 0xf1c9a5, 0x9a6b4b][i % 4], shirt: [0x4fc3f7, 0xf4a261, 0xffffff, 0x90be6d, 0xe6007e][i % 5], pants: [0x2b2d42, 0x4a5568, 0x6b4f3a][i % 3], hair: [0x1a1412, 0x6b4a2a, 0x2b2b2b][i % 3], pony: i % 2 === 1 });
      const s = new THREE.Mesh(bag, bagM[i % 5]); s.position.set(0.5, 0.28, 0.1); p.group.add(s); p.group.position.set(x, w.groundAt(x, z), z); p.group.rotation.y = ry; sc.add(p.group); return Object.assign(p, { x, z, ry, i }); };
    const cs = INTL_STOPS.concordia;
    this.pax = { salto: [[-23.4, 57.7], [-21.6, 58.0], [-17.2, 57.6]].map(([x, z], i) => pax(x, z, Math.PI, i)), concordia: [[cs.x - 0.2, CON.z + 1.2], [cs.x - 0.4, CON.z - 0.6]].map(([x, z], i) => pax(x, z, Math.PI / 2, i + 3)) };
    this.tmpV = new THREE.Vector3(); this.follow = new THREE.Vector3();
    $('rcSkip').onclick = () => this.skip();
    this.place(0);
  }
  idx(s) { const n = this.path.length; return ((Math.round(s / 0.5) % n) + n) % n; }
  pt(s) { return this.path[this.idx(s)]; }
  place(dt) {
    const w = this.g.world, M = this.m, pf = this.pt(this.s + 2.3), pb = this.pt(this.s - 2.3), p = { x: (pf.x + pb.x) / 2, z: (pf.z + pb.z) / 2 }, h = Math.atan2(pf.x - pb.x, pf.z - pb.z);
    const fx = p.x + Math.sin(h) * 4, fz = p.z + Math.cos(h) * 4, bx = p.x - Math.sin(h) * 4, bz = p.z - Math.cos(h) * 4;   // el recorrido nunca pasa por debajo de otra plataforma
    const yf = w.groundAt(fx, fz), yb = w.groundAt(bx, bz), yc = w.groundAt(p.x, p.z), y = Math.max(yc, (yf + yb) / 2);
    this.y = dt ? damp(this.y, y, 10, dt) : y; this.x = p.x; this.z = p.z;
    this.hh = dt ? this.hh + angDiff(this.hh, h) * Math.min(1, dt * 6) : h;
    M.g.position.set(this.x, this.y, this.z); M.g.rotation.set(0, this.hh, 0); M.g.rotateX(-Math.atan2(yf - yb, 8) * 0.9);
    const out = this.s < this.half; if (out !== this.out) { this.out = out; M.dm.map = out ? M.dest.c : M.dest.s; M.dm.needsUpdate = true; }
  }
  addObs(list) { const sx = Math.sin(this.hh), cz = Math.cos(this.hh); for (const o of [-4.2, -1.4, 1.4, 4.2]) list.push({ x: this.x + sx * o, z: this.z + cz * o, r: 1.3, ref: null, hard: true }); }
  // ---- ¿Qué hay adelante? ----
  obstacles() {
    const u = this.g.urbano, list = []; if (u && u.obs) for (const o of u.obs) if (!(o.ref && o.ref.intl)) list.push(o);
    return list;
  }
  update(dt, st) {
    const g = this.g, w = g.world, u = g.urbano, n = this.path.length, riding = this.ride;
    if (this.state === 'dwell') { this.wait -= dt * (riding ? 2 : 1); this.v = 0; if (this.wait <= 0) { this.state = 'drive'; this.ei = (this.ei + 1) % this.events.length; } }
    else {
      const k = this.idx(this.s); let vt = this.vmax[k] * (riding ? 1.55 : 1);
      // próxima parada o aduana: frenar y quedarse
      const e = this.events[this.ei], de = ((e.s - this.s) % this.L + this.L) % this.L;
      vt = Math.min(vt, Math.sqrt(2 * 1.7 * Math.max(0, de - 0.15)) + (de > 0.6 ? 0.6 : 0));
      if (de < 0.35) { this.s = e.s; this.state = 'dwell'; this.wait = e.dwell; this.v = 0; this.event(e); }
      // semáforos
      for (const l of this.lights) { const d = ((l.s - this.s) % this.L + this.L) % this.L; if (d > 0.8 && d < 9 && u && !u.green(l.grp, d - 5.6)) vt = Math.min(vt, Math.max(0, (d - 6.2) * 1.4)); }
      // ceder el paso en los cruces
      let yielding = false;
      for (const y of this.yields) { const d = ((y.s - this.s) % this.L + this.L) % this.L; if (d > 0 && d < 7 && !riding) {
        let busy = false; for (const c of u ? u.cars : []) if (Math.hypot(c.x - y.x, c.z - y.z) < y.r) busy = true;
        for (const bb of g.actors.buses) if (bb.state === 'loop' && Math.hypot(bb.x - y.x, bb.z - y.z) < y.r + 1) busy = true;
        if (busy && this.yieldT < 7) { yielding = true; vt = Math.min(vt, Math.max(0, (d - 1.5) * 1.2)); } } }
      this.yieldT = yielding && this.v < 0.3 ? this.yieldT + dt : yielding ? this.yieldT : 0;
      // autos, ómnibus eléctricos, vecinos y Capi por delante
      if (!riding && this.ghost <= 0 && u) {
        const h = this.hh, fx = this.x + Math.sin(h) * 5.2, fz = this.z + Math.cos(h) * 5.2, a = u.ahead(fx, fz, h, this, 1.5, this.obstacles());
        if (a.d < 10) vt = Math.min(vt, Math.max(0, (a.d - 1.6) * 1.3));
        if (vt < 0.15 && a.d < 10) { this.blockT += dt; if (a.who && a.who.capi) { this.honkT -= dt; if (this.honkT <= 0 && this.blockT > 2.5 && g.mode === 'play' && !g.ui.dlg && !g.cine) { this.honkT = 8; st.audio && st.audio.honk(); } } else if (this.blockT > 14) { this.ghost = 3; this.blockT = 0; } }
        else this.blockT = 0;
      } else if (this.ghost > 0) this.ghost -= dt;
      this.v = damp(this.v, vt, vt < this.v ? 5 : 1.4, dt);
      const before = this.s; this.s = (this.s + this.v * dt) % this.L;
      if (riding) this.rideStep(before);
    }
    this.place(dt);
    // colisión para Capi y para el tránsito (cuatro círculos a lo largo de la carrocería)
    const h = this.hh, sx = Math.sin(h), cz = Math.cos(h);
    for (const o of [-4.2, -1.4, 1.4, 4.2]) w.dynCircles.push({ x: this.x + sx * o, z: this.z + cz * o, r: 1.35, intl: true });
    // luces de noche y pasajeros que suben
    this.m.winMat.emissiveIntensity = st.night * 0.55;
    if (st.night > 0.3) st.fx.glow.sprite(this.x + sx * 6, this.y + 0.9, this.z + cz * 6, 2.4, 0xfff0b0, 0.5 * st.night);
    for (const k of ['salto', 'concordia']) {
      const here = this.state === 'dwell' && this.at === k && this.events[this.ei].kind === 'stop', list = this.pax[k];
      const far = Math.hypot(this.x - INTL_STOPS[k].x, this.z - INTL_STOPS[k].z) > 45;
      list.forEach((p, i) => { if (here && this.wait < this.events[this.ei].dwell - 2.5 - i * 1.6) p.boarded = true; else if (far) p.boarded = false; const vis = !p.boarded; if (vis !== p.group.visible) p.group.visible = vis; p.armR.rotation.x = here && vis ? -0.3 : 0; });
    }
  }
  event(e) {
    if (e.kind === 'stop') { this.at = e.at; if (!this.ride) return; }
    if (this.ride && e.kind === 'aduana') this.caption(2);
  }
  // ---------- Viaje de Capi ----------
  describe(id) {
    const [k, s] = id.split(':'); if (k !== 'intl') return null;
    return { state: 'ok', label: s === '0' ? 'Viajar a Concordia en el ómnibus internacional' : 'Volver a Salto en el ómnibus internacional' };
  }
  interact(id) { const [k, s] = id.split(':'); if (k !== 'intl') return false; this.go(s === '0' ? 0 : 1); return true; }
  go(dir) {
    const g = this.g, ex = g.extras; if (ex.fading || this.ride || g.mode !== 'play') return;
    if (ex.open) ex.close();
    ex.fading = true; $('fade').classList.add('on'); $('fadeTxt').textContent = dir === 0 ? 'Subiendo al ómnibus internacional, rumbo a Concordia…' : 'Subiendo al ómnibus internacional, de vuelta a Salto…';
    g.audio.tone(659, 0.18, 'sine', 0.07); g.audio.tone(523, 0.3, 'sine', 0.07, 0.2);
    g.stats && g.stats.inc && g.stats.d && g.stats.inc(g.stats.d, 'intl');
    setTimeout(() => {
      const R = dir === 0 ? this.ride0 : this.ride1; this.ride = { dir, end: R[1], cap: -1, t: 0, ending: false };
      this.s = R[0]; this.v = 6; this.state = 'drive'; this.ghost = 0; this.ei = this.events.findIndex(e => e.s > this.s + 0.5); if (this.ei < 0) this.ei = 0; this.place(0);
      g.riding = true; g.capi.goto = null; g.capi.root.visible = false; g.ui.hide(); document.body.classList.add('riding'); $('rideCap').classList.remove('hidden');
      $('rcTitle').textContent = dir === 0 ? 'Ómnibus internacional · Salto → Concordia' : 'Ómnibus internacional · Concordia → Salto';
      const cam = g.cam; cam.follow = this.follow.set(this.x, this.y + 2, this.z); cam.target.copy(cam.follow); cam.followD = 34; cam.dist = 34; cam.inspect = null; cam.lowT = 999; cam.lowF = 0.42;
      this.yaw0 = dir === 0 ? 0.55 : -0.55; cam.yaw = cam.yawT = this.yaw0;
      this.caption(0);
      setTimeout(() => { $('fade').classList.remove('on'); ex.fading = false; }, 350);
    }, 750);
  }
  caption(i) {
    const r = this.ride; if (!r || r.cap >= i) return; r.cap = i;
    const T = r.dir === 0 ? [
      'Rumbo a Concordia, en Argentina, por el puente internacional de Salto Grande.',
      'Por arriba de la represa pasan la ruta y la vía del tren: es el puente que une Uruguay y Argentina.',
      'Control de frontera: Migraciones y Aduana revisan los documentos de los pasajeros.',
      'La represa es binacional: los dos países la manejan juntos y se reparten la energía mitad y mitad.'
    ] : [
      'De vuelta a Salto por el puente internacional de Salto Grande.',
      'Abajo, a la derecha, el vertedero; arriba, a la izquierda, el Lago de Salto Grande.',
      'Control de frontera del lado uruguayo: Migraciones y Aduana.',
      'Este ómnibus es eléctrico: carga sus baterías en la Terminal del Bulevar.'
    ];
    const el = $('rcText'); el.classList.remove('in'); void el.offsetWidth; el.textContent = T[i]; el.classList.add('in');
  }
  rideStep(before) {
    const r = this.ride, g = this.g, c = g.capi, cam = g.cam, R = r.dir === 0 ? this.ride0 : this.ride1, tot = ((R[1] - R[0]) % this.L + this.L) % this.L, prog = ((this.s - R[0]) % this.L + this.L) % this.L, k = prog / tot;
    c.pos.set(this.x, this.y, this.z); c.vel.set(0, 0, 0);
    this.follow.set(this.x, this.y + 2.2, this.z); cam.yawT = this.yaw0 + (r.dir === 0 ? -1 : 1) * k * 1.0;
    const onCrest = Math.abs(this.z - CREST_Z) < 2 && this.x < -92 && this.x > -160;
    if (onCrest) this.caption(1);
    if (r.cap >= 2 && this.state === 'drive' && k > 0.72) this.caption(3);
    if (!r.ending && prog >= tot - 0.6) this.finish();
  }
  skip() { if (this.ride && !this.ride.ending) this.finish(); }
  finish() {
    const r = this.ride, g = this.g, ex = g.extras; if (!r || r.ending) return; r.ending = true;
    ex.fading = true; $('fade').classList.add('on'); $('fadeTxt').textContent = r.dir === 0 ? 'Llegando a Concordia…' : 'Llegando a la Terminal del Bulevar…';
    setTimeout(() => {
      const to = r.dir === 0 ? 'concordia' : 'salto', e = this.events.find(q => q.kind === 'stop' && q.at === to);
      this.end(); this.s = e.s; this.ei = this.events.indexOf(e); this.state = 'dwell'; this.wait = 7; this.at = to; this.v = 0; this.place(0);
      const p = INTL_STOPS[to], c = g.capi; c.teleport(p.x + (to === 'salto' ? 1.4 : -0.2), p.z + (to === 'salto' ? 0.6 : 3.2)); c.heading = to === 'salto' ? Math.PI : Math.PI / 2;
      g.cam.target.set(c.pos.x, c.pos.y + 1.5, c.pos.z); g.cam.yaw = g.cam.yawT = to === 'salto' ? 0.5 : -0.9; g.cam.dist = g.cam.distT;
      setTimeout(() => { $('fade').classList.remove('on'); ex.fading = false; g.ui.note(to === 'concordia' ? 'Llegaste a Concordia, en Argentina. La parada del internacional para volver está acá mismo; la lancha sale del muelle.' : 'De vuelta en Salto, en el andén del internacional de la Terminal del Bulevar.', 5); }, 450);
    }, 700);
  }
  end() {   // vuelve todo a la normalidad (al llegar o si se sale al menú en pleno viaje)
    const g = this.g; if (!this.ride) return; this.ride = null; g.riding = false; g.capi.root.visible = true;
    const cam = g.cam; cam.follow = null; cam.lowT = 0; document.body.classList.remove('riding'); $('rideCap').classList.add('hidden');
    if (g.mode === 'play' && !g.cine) g.ui.show();
  }
  cancel() { if (!this.ride) return; this.end(); this.g.extras.fading = false; $('fade').classList.remove('on'); }
}
