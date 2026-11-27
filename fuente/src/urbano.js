// Vida urbana de la ciudad ampliada: autos eléctricos con semáforos, bicisenda, escolares, fútbol, feria,
// mercado, huerta, pescadores, kayaks, lancha a la otra orilla, faro y ambulancia.
import * as THREE from 'three';
import { POS, CITY_Y } from './terrain.js';
import { RX, RZ0, S_CITY } from './rail.js';
import { Batch } from './world.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { makePerson } from './actors.js';
import { rng, clamp, lerp, damp, smooth, angDiff } from './util.js';

const $ = id => document.getElementById(id);
const VC = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.75 });
const LIT = new THREE.MeshBasicMaterial({ vertexColors: true });
// haz de los faros sobre el asfalto (de noche)
const BEAM = (() => { const c = document.createElement('canvas'); c.width = 64; c.height = 128; const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 128, 0, 0); gr.addColorStop(0, 'rgba(255,240,200,0.9)'); gr.addColorStop(1, 'rgba(255,240,200,0)'); g.fillStyle = gr;
  g.beginPath(); g.moveTo(22, 128); g.lineTo(42, 128); g.lineTo(64, 0); g.lineTo(0, 0); g.closePath(); g.filter = 'blur(4px)'; g.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return new THREE.MeshBasicMaterial({ map: t, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }); })();
const BEAM_G = new THREE.PlaneGeometry(3.4, 7.5).rotateX(-Math.PI / 2).rotateY(Math.PI).translate(0, 0.1, 5.5);
const M = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, flatShading: true, roughness: 0.85, ...o });

// Recorridos de mano única (en sentido del tránsito). El 2 comparte calles con los ómnibus, en el mismo sentido.
const ROUTES = [
  { pts: [[-28, -1], [-60, -1], [-60, 55], [-28, 55]], n: 3 },
  { pts: [[-77, 27], [19, 27], [19, 70], [-77, 70]], n: 4 }
];
// Esquinas con semáforo: grupo 0 = calles norte-sur, grupo 1 = calles este-oeste
const CROSS = [[-60, 12.4], [-28, 12.4], [-60, 27], [-28, 27]];
const CAR_COLS = [0xe5484d, 0x2ed3c6, 0xffc420, 0x1d6fb8, 0xf4f1ea, 0x6a2c91, 0x90be6d, 0xff8fab, 0x3a3f4a, 0xf4a261];
const SKINS = [0xe0ac86, 0xc58b62, 0xf1c9a5, 0x9a6b4b, 0x6b4a33], HAIRS = [0x1a1412, 0x3b2a1e, 0x6b4a2a, 0xd8c08a, 0x2b2b2b];

function carMesh(col) {
  const g = new THREE.Group(), b = new Batch(), l = new Batch();
  b.boxB(0, 0.28, 0, 1.7, 0.58, 3.6, col); b.boxB(0, 0.2, 0, 1.74, 0.16, 3.64, 0x2a2e34);
  b.boxB(0, 0.86, -0.2, 1.46, 0.52, 1.9, 0x22303c); b.boxB(0, 1.38, -0.2, 1.5, 0.07, 1.96, col);
  for (const sx of [-0.8, 0.8]) for (const sz of [-1.15, 1.15]) b.cyl(sx, 0.32, sz, 0.32, 0.32, 0.22, 0x1c1e22, 10, 0, 0, Math.PI / 2);
  for (const sx of [-0.55, 0.55]) { l.boxB(sx, 0.6, 1.79, 0.36, 0.14, 0.06, 0xfff4c2); l.boxB(sx, 0.62, -1.79, 0.38, 0.12, 0.06, 0xff3030); }
  const m = b.mesh(VC); m.castShadow = true; g.add(m, l.mesh(LIT));
  const beam = new THREE.Mesh(BEAM_G, BEAM); beam.renderOrder = 7; g.add(beam);
  return g;
}
function bikeRider(col, o) {
  const gr = new THREE.Group();
  for (const z of [-0.55, 0.55]) { const wh = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.05, 5, 14), M(0x1c1e22)); wh.rotation.y = Math.PI / 2; wh.position.set(0, 0.36, z); gr.add(wh); }
  const fr = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 1.0), M(col)); fr.position.set(0, 0.62, 0); gr.add(fr);
  const hb = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.05), M(0x333333)); hb.position.set(0, 0.95, 0.5); gr.add(hb);
  const p = makePerson(o); p.group.scale.setScalar(0.82); p.group.position.set(0, 0.12, -0.12); gr.add(p.group); p.armL.rotation.x = p.armR.rotation.x = -1.25;
  return Object.assign(p, { bike: gr });
}
const BOW = mergeGeometries([new THREE.ConeGeometry(0.16, 0.3, 4).rotateZ(Math.PI / 2).translate(-0.15, 0, 0), new THREE.ConeGeometry(0.16, 0.3, 4).rotateZ(-Math.PI / 2).translate(0.15, 0, 0)]), BOW_M = M(0x1d4fb8);
function kid(R, shirt, o = {}) {
  const i = Math.floor(R() * 5), p = makePerson({ skin: SKINS[i], shirt, pants: o.pants || 0x2b2d42, hair: HAIRS[Math.floor(R() * 5)], pony: R() < 0.4, scale: 0.6 + R() * 0.06, sleeve: o.sleeve });
  if (o.bow) { const bow = new THREE.Mesh(BOW, BOW_M); bow.position.set(0, 1.6, 0.25); p.group.add(bow); }
  return p;
}
function adult(R, o = {}) { const i = Math.floor(R() * 5); return makePerson({ skin: SKINS[i], shirt: o.shirt || CAR_COLS[Math.floor(R() * CAR_COLS.length)], pants: o.pants || [0x2b2d42, 0x4a5568, 0x6b4f3a][Math.floor(R() * 3)], hair: HAIRS[Math.floor(R() * 5)], hat: o.hat, hatColor: o.hatColor, pony: o.pony, extra: o.extra, jacket: o.jacket }); }

// Doble de cuerpo para la distancia: todo el muñeco fusionado en una sola malla, sin sombra (una llamada de dibujo en vez de seis)
const _inv = new THREE.Matrix4(), _mm = new THREE.Matrix4();
function lod(p, root = p.group) {
  root.updateMatrixWorld(true); _inv.copy(root.matrixWorld).invert(); const geos = [];
  root.traverse(o => {
    if (!o.isMesh) return;
    for (let q = o; q && q !== root; q = q.parent) if (!q.visible) return;   // lo que está escondido (paraguas) no va en el doble
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone(); g.applyMatrix4(_mm.multiplyMatrices(_inv, o.matrixWorld));
    if (g.attributes.uv) g.deleteAttribute('uv');
    if (!g.attributes.color) { const c = o.material.color || new THREE.Color(0xffffff), n = g.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); }
    geos.push(g);
  });
  const st = new THREE.Mesh(mergeGeometries(geos, false), VC); st.visible = false; p.rig = [...root.children]; root.add(st); p.statue = st; p.near = true; p.root = root;
}
function setLod(p, near) { if (p.near === near) return; p.near = near; for (const c of p.rig) c.visible = near; p.statue.visible = !near; }

export class Urbano {
  constructor(game) {
    const g = this.g = game, w = g.world, sc = this.sc = game.scene, R = rng(2026); this.t = 0; this.R = R;
    this.people = [];
    // ---------- Autos eléctricos ----------
    this.routes = ROUTES.map(r => {
      const segs = []; let L = 0;
      for (let i = 0; i < r.pts.length; i++) { const a = r.pts[i], b = r.pts[(i + 1) % r.pts.length], len = Math.hypot(b[0] - a[0], b[1] - a[1]); segs.push({ a, b, s0: L, len, dx: (b[0] - a[0]) / len, dz: (b[1] - a[1]) / len }); L += len; }
      // cruces con semáforo que quedan sobre este recorrido
      const cross = [];
      for (const sg of segs) CROSS.forEach(([cx, cz], k) => {
        const onX = sg.dx === 0 && Math.abs(sg.a[0] - cx) < 0.6 && (cz - sg.a[1]) * sg.dz > 0 && (cz - sg.a[1]) * sg.dz < sg.len;
        const onZ = sg.dz === 0 && Math.abs(sg.a[1] - cz) < 0.8 && (cx - sg.a[0]) * sg.dx > 0 && (cx - sg.a[0]) * sg.dx < sg.len;
        if (onX) cross.push({ s: sg.s0 + Math.abs(cz - sg.a[1]), grp: 0, k }); if (onZ) cross.push({ s: sg.s0 + Math.abs(cx - sg.a[0]), grp: 1, k });
      });
      // paso a nivel: donde el recorrido cruza la vía del tren (con la vía por la costa, hoy ninguno)
      const rail = []; for (const sg of segs) if (sg.dz === 0 && sg.a[1] > RZ0 && sg.a[1] < RZ0 + S_CITY && (RX - sg.a[0]) * sg.dx > 0 && (RX - sg.a[0]) * sg.dx < sg.len) rail.push({ s: sg.s0 + Math.abs(RX - sg.a[0]), sr: sg.a[1] - RZ0 });
      return { segs, L, cross, rail };
    });
    this.cars = []; let ci = 0;
    this.routes.forEach((rt, ri) => { for (let i = 0; i < ROUTES[ri].n; i++) { const grp = carMesh(CAR_COLS[ci++ % CAR_COLS.length]); sc.add(grp); this.cars.push({ g: grp, rt, s: (i + 0.3 * ri) * rt.L / ROUTES[ri].n, v: 0, vmax: 5.2 + R() * 1.6, x: 0, z: 0, h: 0, wait: 0, ghost: 0, honk: 0 }); } });
    this.cars.forEach(c => this.place(c));
    // ---------- Semáforos ----------
    const pb = new Batch(), heads = { 0: [new Batch(), new Batch(), new Batch()], 1: [new Batch(), new Batch(), new Batch()] };
    CROSS.forEach(([cx, cz], k) => {
      const ns = k % 2 === 0 ? 1 : -1, px = cx - 2.25 * ns, pz = cz - 2.25 * ns;   // poste en la esquina de llegada
      pb.boxB(px, CITY_Y, pz, 0.14, 3.4, 0.14, 0x2a2e34); w.addCircle(px, pz, 0.2);
      for (const [grp, ry, ox, oz] of [[0, ns > 0 ? Math.PI : 0, 0, -0.28 * ns], [1, -Math.PI / 2, -0.28, 0]]) {
        const hx = px + ox, hz = pz + oz; pb.box(hx, CITY_Y + 3.05, hz, ry === 0 || ry === Math.PI ? 0.4 : 0.32, 1.1, ry === 0 || ry === Math.PI ? 0.32 : 0.4, 0x1f2328);
        const fx = Math.sin(ry) * 0.18, fz = Math.cos(ry) * 0.18;
        [3.4, 3.05, 2.7].forEach((yy, c) => heads[grp][c].sph(hx + fx, CITY_Y + yy, hz + fz, 0.12, 0xffffff, 1, 1));
      }
    });
    sc.add(pb.mesh(VC));
    const lc = [0xff3030, 0xffb020, 0x30e070];
    this.lightMats = [0, 1].map(grp => lc.map((col, c) => { const m = new THREE.MeshStandardMaterial({ color: 0x202020, emissive: col, emissiveIntensity: 0.05 }); sc.add(heads[grp][c].mesh(m)); return m; }));
    this.phase = 0;
    // ---------- Ambulancia estacionada en la puerta del hospital ----------
    const A = w.dyn.amb; if (A) {
      const ab = new Batch(); ab.boxB(0, 0.3, 0, 1.9, 1.9, 4.2, 0xf8f8f8); ab.boxB(0, 0.75, 0, 1.94, 0.3, 4.24, 0xe5484d); ab.boxB(0, 1.2, 1.55, 1.8, 0.62, 0.9, 0x22303c);
      for (const sx of [-0.85, 0.85]) for (const sz of [-1.3, 1.4]) ab.cyl(sx, 0.34, sz, 0.34, 0.34, 0.24, 0x1c1e22, 10, 0, 0, Math.PI / 2);
      ab.box(0, 1.1, -2.12, 0.5, 0.5, 0.04, 0xe5484d); ab.box(0, 1.1, -2.12, 0.16, 0.5, 0.05, 0xffffff); ab.box(0, 1.1, -2.12, 0.5, 0.16, 0.05, 0xffffff);
      const ag = new THREE.Group(), am = ab.mesh(VC); am.castShadow = true; ag.add(am);
      this.sirenR = new THREE.MeshStandardMaterial({ color: 0x601010, emissive: 0xff2020, emissiveIntensity: 0 }); this.sirenB = new THREE.MeshStandardMaterial({ color: 0x102060, emissive: 0x2060ff, emissiveIntensity: 0 });
      const r1 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.18, 0.3), this.sirenR), r2 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.18, 0.3), this.sirenB); r1.position.set(-0.4, 2.3, 1.6); r2.position.set(0.4, 2.3, 1.6); ag.add(r1, r2);
      ag.position.set(A.x, CITY_Y - 0.08, A.z); ag.rotation.y = A.h; sc.add(ag); w.addSolid(A.x - 2.1, A.x + 2.1, A.z - 1.0, A.z + 1.0, CITY_Y + 2.2);
    }
    // ---------- Ciclistas por la bicisenda de la costanera ----------
    this.cyclists = [[0xe6007e, -70, 1], [0x2ed3c6, -30, -1]].map(([col, x, dir], i) => { const p = bikeRider(col, { skin: SKINS[i + 1], shirt: i ? 0xffc420 : 0x06d6a0, pants: 0x2b2d42, hair: HAIRS[i], hat: 'gorra', hatColor: col }); sc.add(p.bike); return Object.assign(p, { x, dir, sp: 4 + i * 0.6, ph: R() * 6 }); });
    // ---------- Escolares de túnica y moña en el recreo ----------
    const Yd = w.dyn.yard;
    this.kids = Yd ? Array.from({ length: 8 }, (_, i) => { const p = kid(R, 0xf8f8f8, { bow: true, sleeve: 0xf8f8f8 }); const x = lerp(Yd.x0, Yd.x1, R()), z = lerp(Yd.z0, Yd.z1, R()); p.group.position.set(x, CITY_Y, z); sc.add(p.group); return Object.assign(p, { x, z, tx: x, tz: z, wait: R() * 2, sp: 1.8 + R() * 0.9, jump: 0 }); }) : [];
    // ---------- Fútbol en la cancha del barrio ----------
    const K = w.dyn.cancha;
    if (K) {
      this.foot = Array.from({ length: 6 }, (_, i) => { const p = kid(R, i % 2 ? 0x75aadb : 0xe5484d, { pants: i % 2 ? 0x111111 : 0xffffff }); const hx = K.cx + (i % 2 ? 1 : -1) * (2 + (i >> 1) * 2.4), hz = K.cz + ((i >> 1) - 1) * 3; p.group.position.set(hx, K.y, hz); sc.add(p.group); return Object.assign(p, { hx, hz, x: hx, z: hz, kick: 0 }); });
      this.ball = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 1), M(0xf4f4f4)); this.ball.castShadow = true; sc.add(this.ball);
      this.pass = { a: 0, b: 1, t: 9, d: 1.2, ax: K.cx, az: K.cz, bx: K.cx, bz: K.cz };
    }
    // ---------- Feria de la costanera y mercado ----------
    const F = w.dyn.feria;
    this.vendors = F ? F.stalls.map((s, i) => { const p = adult(R, { shirt: [0xffffff, 0x2a9d8f, 0xffc420, 0x6a2c91][i], hat: i % 2 ? 'gorra' : null, hatColor: 0x1f2f4f }); p.group.position.set(s.x + 0.3, w.groundAt(s.x, s.z + 0.95), s.z + 0.95); p.group.rotation.y = Math.PI; sc.add(p.group); return p; }) : [];
    this.shoppers = F ? Array.from({ length: 4 }, (_, i) => { const p = adult(R, { extra: i % 2 ? 'mate' : null }); const x = F.walk.x0 + 0.5 + i * 3.0; p.group.position.set(x, 2.12, F.walk.z); sc.add(p.group); return Object.assign(p, { x, z: F.walk.z, dir: i % 2 ? 1 : -1, wait: 0, sp: 0.9 + R() * 0.4 }); }) : [];
    const Mk = w.dyn.market;
    this.market = Mk ? Array.from({ length: 5 }, (_, i) => { const p = adult(R, { pony: i === 1, extra: i === 3 ? 'mate' : null }); const x = Mk.cx + (R() - 0.5) * 6, z = Mk.cz + (R() - 0.5) * 1.6; p.group.position.set(x, CITY_Y, z); sc.add(p.group); return Object.assign(p, { x, z, tx: x, tz: z, wait: R() * 4, sp: 0.9 + R() * 0.3 }); }) : [];
    // ---------- Vecinos en la huerta ----------
    const H = w.dyn.huerta;
    this.garden = H ? [0, 1].map(i => { const p = adult(R, { hat: 'gorra', hatColor: i ? 0xffc420 : 0x2f7d32, shirt: i ? 0x2a9d8f : 0xf4a261 }); const x = H.x - 1.5 + i * 3, z = H.z - 2 + i * 2; p.group.position.set(x, H.y, z + 0.7); p.group.rotation.y = Math.PI; sc.add(p.group); return Object.assign(p, { ph: R() * 6 }); }) : [];
    // ---------- Pescadores con caña ----------
    const Mu = POS.muelle, [fx, fz] = POS.faro;
    this.fishers = [[-106, Mu.z - 1.1, Math.PI, 1.35], [-101, Mu.z + 1.1, 0, 1.35], [fx + 7, fz - 0.8, Math.PI, 1.62], [-63, -12.2, Math.PI, null]].map(([x, z, ry, y], i) => {
      const p = adult(R, { hat: i % 2 ? 'boina' : 'gorra', hatColor: [0x1e1e22, 0x6b8f4e, 0x2a6f97, 0xa5522d][i], jacket: i === 3 ? 0x50623a : null });
      const yy = y == null ? w.terrainAt(x, z) : y; p.group.position.set(x, yy, z); p.group.rotation.y = ry; sc.add(p.group);
      const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.035, 3.2, 5), M(0x3a2a1a)); rod.position.set(0, -0.7, 1.4); rod.rotation.x = 1.05; p.armR.add(rod); p.armR.rotation.x = -0.9; p.armL.rotation.x = -0.8;
      const bob = new THREE.Mesh(new THREE.SphereGeometry(0.1, 6, 5), M(0xff3030)); const bx = x + Math.sin(ry) * 4.2, bz = z + Math.cos(ry) * 4.2; bob.position.set(bx, 0.05, bz); sc.add(bob);
      return Object.assign(p, { rod, bob, bx, bz, ph: R() * 6, bite: 0 });
    });
    // ---------- Lancha a la otra orilla ----------
    const lb = new Batch();
    lb.boxB(0, -0.2, 0, 2.6, 0.9, 6.6, 0xf4f1ea); lb.boxB(0, -0.25, 0, 2.66, 0.35, 6.66, 0x1d6fb8); lb.add(new THREE.ConeGeometry(1.3, 1.4, 4), 0xf4f1ea, 0, 0.25, 3.95, 0.98, 1, 0.36, Math.PI / 2, Math.PI / 4, 0);
    lb.boxB(0, 0.7, -0.6, 2.2, 1.3, 3.6, 0xf4f1ea); lb.boxB(0, 1.15, -0.6, 2.24, 0.5, 3.64, 0x22303c); lb.boxB(0, 2.0, -0.6, 2.5, 0.12, 4.0, 0x2a9d8f);
    lb.boxB(0, 0.7, 2.0, 2.4, 0.5, 0.12, 0xf4f1ea); lb.cyl(0, 2.1, -2.3, 0.04, 0.04, 1.2, 0xdddddd, 5);
    this.lancha = new THREE.Group(); const lm = lb.mesh(VC); lm.castShadow = true; this.lancha.add(lm);
    const lt = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 5), new THREE.MeshBasicMaterial({ color: 0xfff4c2 })); lt.position.set(0, 3.35, -2.3); this.lancha.add(lt);
    const nm = document.createElement('canvas'); nm.width = 256; nm.height = 48; const nx = nm.getContext('2d'); nx.fillStyle = '#f4f1ea'; nx.fillRect(0, 0, 256, 48); nx.fillStyle = '#1d6fb8'; nx.font = '900 30px Nunito, Arial, sans-serif'; nx.textAlign = 'center'; nx.textBaseline = 'middle'; nx.fillText('LANCHA DEL RÍO', 128, 26);
    const ntex = new THREE.CanvasTexture(nm); ntex.colorSpace = THREE.SRGBColorSpace;
    for (const sx of [-1, 1]) { const pl = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.48), new THREE.MeshBasicMaterial({ map: ntex })); pl.position.set(sx * 1.34, 0.15, 0.4); pl.rotation.y = sx * Math.PI / 2; this.lancha.add(pl); }
    sc.add(this.lancha); this.lT = 6;
    this.L0 = { x: Mu.x1 + 2.6, z: Mu.z + 3.6 }; this.L1 = { x: POS.orilla.x0 - 2.2, z: POS.orilla.z + 3.6 };
    // ---------- Kayaks ----------
    this.kayaks = [[-118, 24, 3.6, 10, 0xffc420], [-122, 88, 3, 6, 0xe5484d], [null, null, 0, 0, 0x2ed3c6]].map(([cx, cz, rx, rz, col], i) => {
      const kb = new Batch(); kb.add(new THREE.SphereGeometry(1, 10, 6), col, 0, 0.1, 0, 0.42, 0.22, 1.9); kb.boxB(0, 0.18, 0, 0.36, 0.5, 0.42, [0x2a9d8f, 0x6a2c91, 0xf4a261][i]); kb.sph(0, 0.85, 0, 0.2, SKINS[i], 1, 1); kb.boxB(0, 0.6, 0, 0.44, 0.22, 0.46, 0xff6b35);
      const g = new THREE.Group(); g.add(kb.mesh(VC)); const pad = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.05, 0.12), M(0x3a3a3a)); pad.position.y = 0.62; g.add(pad); sc.add(g);
      return { g, pad, cx, cz, rx, rz, a: R() * 6, sp: (i % 2 ? -1 : 1) * 0.22, i, x: -60, dir: 1 };
    });
    // ---------- Haz giratorio del faro ----------
    const Fa = w.dyn.faro;
    if (Fa) {
      this.beamMat = new THREE.MeshBasicMaterial({ color: 0xfff1b0, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false });
      this.beam = new THREE.Group(); this.beam.position.set(Fa.x, Fa.y, Fa.z);
      for (const s of [1, -1]) { const c = new THREE.Mesh(new THREE.ConeGeometry(2.2, 34, 12, 1, true), this.beamMat); c.rotation.z = s * Math.PI / 2; c.position.x = s * 17; this.beam.add(c); }
      sc.add(this.beam);
      this.lampMat = new THREE.MeshBasicMaterial({ color: 0xfff1b0 }); const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 6), this.lampMat); lamp.position.set(Fa.x, Fa.y, Fa.z); sc.add(lamp);
    }
    for (const list of [this.kids, this.foot || [], this.vendors, this.shoppers, this.market, this.garden, this.fishers]) this.people.push(...list);
    for (const pp of this.people) lod(pp);
    for (const c of this.cyclists) { lod(c, c.bike); this.people.push(c); }
    // también los vecinos de antes: de lejos van en una sola pieza (su visibilidad la sigue manejando cada módulo)
    const V = game.vecinos, Ac = game.actors; this.others = [];
    for (const c of Ac.citizens) { lod(c); this.others.push(c); }
    if (V) { for (const k of V.kids.concat(V.joggers)) { lod(k); this.others.push(k); } for (const b of V.bikes) { lod(b, b.bike); this.others.push(b); } }
    game.actors.busBlock = (b, dt) => this.busBlock(b, dt);
  }

  // ---------- Recorridos ----------
  at(rt, s, out) {
    s = ((s % rt.L) + rt.L) % rt.L;
    for (const sg of rt.segs) if (s < sg.s0 + sg.len || sg === rt.segs[rt.segs.length - 1]) { const k = s - sg.s0; out.x = sg.a[0] + sg.dx * k; out.z = sg.a[1] + sg.dz * k; return out; }
    return out;
  }
  place(c) {
    const p = this.at(c.rt, c.s, { x: 0, z: 0 }), a = this.at(c.rt, c.s - 1.6, { x: 0, z: 0 }), b = this.at(c.rt, c.s + 1.6, { x: 0, z: 0 });
    c.x = p.x; c.z = p.z; c.h = Math.atan2(b.x - a.x, b.z - a.z);
  }
  green(grp, dist) {   // ¿puede pasar? En amarillo sólo sigue el que ya está encima del cruce
    const p = this.phase, ns = p < 7 ? 'g' : p < 8.5 ? 'y' : 'r', ew = p >= 9 && p < 16 ? 'g' : p >= 16 && p < 17.5 ? 'y' : 'r', s = grp === 0 ? ns : ew;
    return s === 'g' || (s === 'y' && dist < 3.4);
  }
  // Distancia libre por delante (autos, ómnibus, Capi, vecinos, ciclistas)
  ahead(x, z, h, self, lat0, list) {
    const fx = Math.sin(h), fz = Math.cos(h); let best = 99, who = null;
    for (const o of list) {
      if (o.ref === self) continue;
      const dx = o.x - x, dz = o.z - z, along = dx * fx + dz * fz; if (along < 0.4 || along > 10) continue;
      const lat = Math.abs(dx * fz - dz * fx); if (lat > lat0 + (o.r || 0) * 0.6) continue;
      const d = along - (o.r || 0); if (d < best) { best = d; who = o; }
    }
    return { d: best, who };
  }
  busBlock(b, dt) {
    if (!this.obs) return 1;
    b.wait = b.wait || 0;
    const { d, who } = this.ahead(b.x, b.z, b.h, b, 1.0, this.carObs);
    let k = clamp((d - 5.2) / 4, 0, 1);
    // los ómnibus respetan los semáforos de la calle del norte
    if (Math.abs(b.z - 12) < 1.5 && Math.abs(angDiff(b.h, Math.PI / 2)) < 0.4) for (const [cx] of CROSS.slice(0, 2)) { const dd = cx - b.x; if (dd > 2.5 && dd < 7.5 && !this.green(1, dd)) k = Math.min(k, clamp((dd - 4.2) / 2, 0, 1)); }
    if (k < 0.05) { if (who && who.hard) b.wait = 0; else { b.wait += dt; if (b.wait > 5) k = 1; } } else b.wait = 0;   // detrás del internacional se espera sin atravesarlo
    return k;
  }
  lanchaGo(to) {   // viaje de Capi en lancha (desde el muelle del puerto o desde la otra orilla)
    const g = this.g, ex = g.extras; if (ex.fading || g.locked) return;
    ex.fading = true; $('fade').classList.add('on'); $('fadeTxt').textContent = to ? 'En lancha hacia Concordia…' : 'En lancha de vuelta a Salto…';
    g.audio.tone(330, 0.5, 'sine', 0.06); g.audio.tone(247, 0.7, 'sine', 0.05, 0.3); g.audio.lap(1); g.audio.splash(0.6);
    setTimeout(() => {
      const p = to ? { x: POS.orilla.x1 + 1.5, z: POS.orilla.z - 0.2 } : { x: POS.muelle.x0 - 3, z: POS.muelle.z - 0.2 };
      g.capi.teleport(p.x, p.z); g.capi.heading = to ? -Math.PI / 2 : Math.PI / 2; g.cam.target.set(p.x, g.capi.pos.y + 1.5, p.z); g.cam.inspect = null; this.lT = to ? 41 : 1;
      setTimeout(() => { $('fade').classList.remove('on'); ex.fading = false; g.ui.note(to ? 'Llegaste a Concordia, en Argentina, del otro lado del río Uruguay. La lancha vuelve a Salto cuando quieras.' : 'De vuelta en el puerto de Salto.', 4.5); }, 450);
    }, 700);
  }
  describe(id) {
    const [k, s] = id.split(':'); if (k !== 'lancha') return null;
    return { state: 'ok', label: s === '0' ? 'Cruzar en lancha a Concordia' : 'Volver en lancha a Salto' };
  }
  interact(id) { const [k, s] = id.split(':'); if (k !== 'lancha') return false; this.lanchaGo(s === '0'); return true; }

  update(dt, st) {
    this.t += dt; const t = this.t, w = this.g.world, hour = st.hour, night = st.night, f = st.focus, M0 = w.mats;
    const near = (x, z, r = 115) => (x - f.x) ** 2 + (z - f.z) ** 2 < r * r;
    // luces que no dependen de los barrios
    M0.nightWin.emissiveIntensity = 0.12 + 1.5 * night; M0.cross.emissiveIntensity = 0.5 + 1.8 * night;
    M0.flood.emissiveIntensity = night > 0.25 && hour > 17 ? 2.4 * night : 0.05; M0.wallbox.emissiveIntensity = 0.55 + 0.45 * Math.sin(t * 2.2);
    // ---------- Semáforos ----------
    this.phase = (this.phase + dt) % 18;
    const p = this.phase, ns = p < 7 ? 2 : p < 8.5 ? 1 : 0, ew = p >= 9 && p < 16 ? 2 : p >= 16 && p < 17.5 ? 1 : 0;
    this.lightMats.forEach((mats, grp) => mats.forEach((m, c) => { m.emissiveIntensity = c === (grp ? ew : ns) ? 2.4 : 0.05; }));
    // ---------- Obstáculos para el tránsito ----------
    const obs = []; for (const o of (w.dynCircles || [])) obs.push({ x: o.x, z: o.z, r: o.r || 0.5, ref: o });
    obs.push({ x: st.capi.x, z: st.capi.z, r: 0.7, capi: true });
    const V = this.g.vecinos; if (V && V.bikes) for (const bk of V.bikes) obs.push({ x: bk.bike.position.x, z: bk.bike.position.z, r: 0.6 });
    for (const c of this.cars) obs.push({ x: c.x, z: c.z, r: 1.2, ref: c });
    this.obs = obs;
    this.carObs = []; for (const c of this.cars) this.carObs.push({ x: c.x - Math.sin(c.h) * 1.2, z: c.z - Math.cos(c.h) * 1.2, r: 1.1, ref: null }, { x: c.x + Math.sin(c.h) * 1.2, z: c.z + Math.cos(c.h) * 1.2, r: 1.1, ref: null });
    if (this.g.intl) this.g.intl.addObs(this.carObs);   // los ómnibus eléctricos esperan detrás del internacional
    // ---------- Autos ----------
    const hl = 0.4 + night * 0.6; BEAM.opacity = Math.max(0, night - 0.2) * 0.55;
    for (const c of this.cars) {
      let v = c.vmax;
      for (const cr of c.rt.cross) { const d = ((cr.s - c.s) % c.rt.L + c.rt.L) % c.rt.L; if (d > 1.2 && d < 7 && !this.green(cr.grp, d)) v = Math.min(v, Math.max(0, (d - 2.6) * 2.2)); }
      const T = this.g.campo && this.g.campo.tr; if (T && T.state !== 'parado' && T.state !== 'fuera') for (const cr of c.rt.rail) { const d = ((cr.s - c.s) % c.rt.L + c.rt.L) % c.rt.L; if (d > 1.2 && d < 9 && Math.abs(T.s - cr.sr) < 24) v = Math.min(v, Math.max(0, (d - 3.4) * 2.2)); }   // pasa el tren: esperan en el paso a nivel
      if (c.ghost > 0) c.ghost -= dt;
      else {
        const a = this.ahead(c.x, c.z, c.h, c, 1.35, obs); if (a.d < 9) v = Math.min(v, Math.max(0, (a.d - 2.6) * 1.6));
        if (v < 0.1 && a.d < 9) { c.wait += dt; if (a.who && a.who.capi) { c.honk -= dt; const G = this.g; if (c.honk <= 0 && c.wait > 3 && G.mode === 'play' && !G.ui.dlg && !(G.tut && G.tut.on) && !G.cine && Math.hypot(st.capi.x - c.x, st.capi.z - c.z) < 30) { c.honk = 9; st.audio && st.audio.honk(); } } else if (c.wait > 5) { c.ghost = 2.5; c.wait = 0; } }
        else c.wait = 0;
      }
      c.v = damp(c.v, v, v < c.v ? 6 : 2.2, dt); c.s += c.v * dt; this.place(c);
      c.g.position.set(c.x, CITY_Y - 0.06, c.z); c.g.rotation.y = c.h; c.g.visible = near(c.x, c.z, 140);
      w.dynCircles.push({ x: c.x + Math.sin(c.h) * 1.0, z: c.z + Math.cos(c.h) * 1.0, r: 0.95 }, { x: c.x - Math.sin(c.h) * 1.0, z: c.z - Math.cos(c.h) * 1.0, r: 0.95 });
      if (night > 0.3 && c.g.visible) st.fx.glow.sprite(c.x + Math.sin(c.h) * 2.2, CITY_Y + 0.6, c.z + Math.cos(c.h) * 2.2, 1.6, 0xfff0b0, 0.4 * night * hl);
      if (night > 0.3 && c.g.visible) st.fx.glow.sprite(c.x - Math.sin(c.h) * 1.95, CITY_Y + 0.62, c.z - Math.cos(c.h) * 1.95, 0.9, 0xff2a20, 0.45 * night);   // luces traseras
    }
    // ---------- Ambulancia ----------
    if (this.sirenR) { const on = night > 0.2 ? 1 : 0.35, ph = Math.sin(t * 9) > 0; this.sirenR.emissiveIntensity = ph ? 2.4 * on : 0.1; this.sirenB.emissiveIntensity = ph ? 0.1 : 2.4 * on; }
    // ---------- Ciclistas de la bicisenda ----------
    for (const c of this.cyclists) {
      c.x += c.dir * c.sp * dt; if (c.x > -14) c.dir = -1; if (c.x < -81) c.dir = 1;
      const z = -6.6 + c.dir * 0.3; c.bike.position.set(c.x, CITY_Y, z); c.bike.rotation.y = damp(c.bike.rotation.y, c.dir > 0 ? Math.PI / 2 : -Math.PI / 2, 5, dt);
      const ph = t * 7 + c.ph; c.legL.rotation.x = Math.sin(ph) * 0.8 - 0.6; c.legR.rotation.x = -Math.sin(ph) * 0.8 - 0.6; c.bike.visible = true;
      w.dynCircles.push({ x: c.x, z, r: 0.6 });
    }
    // ---------- Recreo ----------
    const school = hour > 7.5 && hour < 17.5 && !(w.storm || 0) > 0.5;
    for (const k of this.kids) {
      const vis = school && near(k.x, k.z); k.group.visible = vis; if (!vis) continue;
      const Yd = w.dyn.yard; k.wait -= dt;
      const dx = k.tx - k.x, dz = k.tz - k.z, d = Math.hypot(dx, dz);
      if (d > 0.2) { const s = Math.min(d, k.sp * dt); k.x += dx / d * s; k.z += dz / d * s; k.group.rotation.y = damp(k.group.rotation.y, k.group.rotation.y + angDiff(k.group.rotation.y, Math.atan2(dx, dz)), 10, dt); }
      else if (k.wait <= 0) { k.tx = lerp(Yd.x0, Yd.x1, this.R()); k.tz = lerp(Yd.z0, Yd.z1, this.R()); k.wait = 0.4 + this.R() * 2.2; if (this.R() < 0.3) k.jump = 0.5; }
      const run = d > 0.2, ph = t * 11 + k.phase; k.jump = Math.max(0, k.jump - dt);
      k.legL.rotation.x = run ? Math.sin(ph) * 0.9 : 0; k.legR.rotation.x = run ? -Math.sin(ph) * 0.9 : 0; k.armL.rotation.x = run ? -Math.sin(ph) * 0.8 : (k.jump > 0 ? -2.6 : 0); k.armR.rotation.x = run ? Math.sin(ph) * 0.8 : (k.jump > 0 ? -2.6 : 0);
      k.group.position.set(k.x, CITY_Y + (k.jump > 0 ? Math.sin(k.jump / 0.5 * Math.PI) * 0.45 : 0), k.z);
    }
    // ---------- Fútbol ----------
    if (this.foot) {
      const K = w.dyn.cancha, on = hour > 9 && hour < 19 && !(w.storm || 0) > 0.5 && near(K.cx, K.cz), P = this.pass;
      this.ball.visible = on;
      for (const k of this.foot) k.group.visible = on;
      if (on) {
        P.t += dt;
        if (P.t >= P.d) { const B0 = this.foot[P.b]; B0.kick = 0.3; P.a = P.b; let nb; do { nb = Math.floor(this.R() * 6); } while (nb === P.a); P.b = nb; P.t = 0; P.d = 0.9 + this.R() * 0.8;
          const A = this.foot[P.a], Bk = this.foot[P.b]; P.ax = A.x; P.az = A.z; P.bx = clamp(Bk.hx + (this.R() - 0.5) * 3, K.cx - K.W / 2 + 0.6, K.cx + K.W / 2 - 0.6); P.bz = clamp(Bk.hz + (this.R() - 0.5) * 2.5, K.cz - K.D / 2 + 0.6, K.cz + K.D / 2 - 0.6); }
        const u = P.t / P.d; this.ball.position.set(lerp(P.ax, P.bx, u), K.y + 0.22 + Math.sin(u * Math.PI) * 1.1, lerp(P.az, P.bz, u)); this.ball.rotation.x += dt * 9;
        this.foot.forEach((k, i) => {
          const tx = i === P.b ? P.bx : k.hx + Math.sin(t * 0.6 + i) * 1.2, tz = i === P.b ? P.bz : k.hz + Math.cos(t * 0.5 + i * 2) * 0.9, dx = tx - k.x, dz = tz - k.z, d = Math.hypot(dx, dz);
          if (d > 0.15) { const s = Math.min(d, (i === P.b ? 3.2 : 1.4) * dt); k.x += dx / d * s; k.z += dz / d * s; }
          const look = i === P.a || i === P.b ? Math.atan2(this.ball.position.x - k.x, this.ball.position.z - k.z) : Math.atan2(dx, dz);
          k.group.rotation.y += angDiff(k.group.rotation.y, look) * Math.min(1, dt * 8);
          k.kick = Math.max(0, k.kick - dt); const ph = t * 10 + i, mv = d > 0.15;
          k.legL.rotation.x = k.kick > 0 ? -1.2 : mv ? Math.sin(ph) * 0.8 : 0; k.legR.rotation.x = mv ? -Math.sin(ph) * 0.8 : 0;
          k.group.position.set(k.x, K.y, k.z);
        });
      }
    }
    // ---------- Feria (de mañana) ----------
    const F = w.dyn.feria, feria = hour > 7 && hour < 13.5;
    if (F) F.group.visible = feria;
    for (const v of this.vendors) { v.group.visible = feria && near(v.group.position.x, v.group.position.z); if (v.group.visible) { v.armR.rotation.x = Math.sin(t * 2 + v.phase) * 0.3 - 0.3; v.head.rotation.y = Math.sin(t * 0.7 + v.phase) * 0.4; } }
    for (const s of this.shoppers) {
      const vis = feria && near(s.x, s.z); s.group.visible = vis; if (!vis) continue;
      s.wait -= dt; let mv = false;
      if (s.wait <= 0) { s.x += s.dir * s.sp * dt; mv = true; if (s.x > F.walk.x1) s.dir = -1; if (s.x < F.walk.x0) s.dir = 1; if (this.R() < dt * 0.25) s.wait = 2 + this.R() * 3; }
      s.group.position.set(s.x, 2.12, s.z); s.group.rotation.y = damp(s.group.rotation.y, s.wait > 0 ? Math.PI : (s.dir > 0 ? Math.PI / 2 : -Math.PI / 2), 6, dt);
      const ph = t * 6 + s.phase; s.legL.rotation.x = mv ? Math.sin(ph) * 0.5 : 0; s.legR.rotation.x = mv ? -Math.sin(ph) * 0.5 : 0;
    }
    // ---------- Mercado ----------
    const Mk = w.dyn.market, open = hour > 7 && hour < 20;
    for (const m of this.market) {
      const vis = open && near(m.x, m.z); m.group.visible = vis; if (!vis) continue;
      m.wait -= dt; const dx = m.tx - m.x, dz = m.tz - m.z, d = Math.hypot(dx, dz);
      if (d > 0.15) { const s = Math.min(d, m.sp * dt); m.x += dx / d * s; m.z += dz / d * s; m.group.rotation.y += angDiff(m.group.rotation.y, Math.atan2(dx, dz)) * Math.min(1, dt * 6); }
      else if (m.wait <= 0) { m.tx = Mk.cx + (this.R() - 0.5) * 7; m.tz = Mk.cz + (this.R() - 0.5) * 1.6; m.wait = 1.5 + this.R() * 4; }
      const ph = t * 6 + m.phase, mv = d > 0.15; m.legL.rotation.x = mv ? Math.sin(ph) * 0.5 : 0; m.legR.rotation.x = mv ? -Math.sin(ph) * 0.5 : 0;
      m.group.position.set(m.x, CITY_Y, m.z);
    }
    // ---------- Huerta ----------
    const day = hour > 7 && hour < 19 && !(w.storm || 0) > 0.5;
    for (const gdn of this.garden) { const vis = day && near(gdn.group.position.x, gdn.group.position.z); gdn.group.visible = vis; if (!vis) continue; const b = Math.max(0, Math.sin(t * 0.9 + gdn.ph)); gdn.group.rotation.x = -b * 0.5; gdn.armL.rotation.x = gdn.armR.rotation.x = -0.4 - b * 1.1; }
    // ---------- Pescadores ----------
    const fishing = hour > 5.5 && hour < 21.5;
    for (const fi of this.fishers) {
      const vis = fishing && near(fi.bx, fi.bz); fi.group.visible = vis; fi.bob.visible = vis; if (!vis) continue;
      if (fi.bite <= 0 && this.R() < dt * 0.05) fi.bite = 1.6;
      fi.bite = Math.max(0, fi.bite - dt); const tug = fi.bite > 0 ? Math.sin(fi.bite * 18) * 0.5 + 0.5 : 0;
      fi.armR.rotation.x = -0.9 - tug * 0.35 + Math.sin(t * 0.8 + fi.ph) * 0.04; fi.bob.position.y = Math.sin(t * 2 + fi.ph) * 0.06 - tug * 0.25 + 0.04;
    }
    // ---------- Lancha ----------
    this.lT = (this.lT + dt) % 80; const T = this.lT, A0 = this.L0, A1 = this.L1;
    let lx, dir, moving = false; const GO = -Math.PI / 2, BACK = Math.PI / 2;   // hacia Concordia (oeste) y de vuelta a Salto (este)
    if (T < 14) { lx = A0.x; dir = GO; } else if (T < 40) { const u = smooth(0, 1, (T - 14) / 26); lx = lerp(A0.x, A1.x, u); dir = GO; moving = true; } else if (T < 54) { lx = A1.x; dir = BACK; } else { const u = smooth(0, 1, (T - 54) / 26); lx = lerp(A1.x, A0.x, u); dir = BACK; moving = true; }
    const lz = A0.z + (moving ? Math.sin(Math.PI * (T < 40 ? (T - 14) / 26 : (T - 54) / 26)) * 5 : 0);
    this.lancha.position.set(lx, Math.sin(t * 1.4) * 0.08, lz); this.lancha.rotation.y = damp(this.lancha.rotation.y, dir, 1.2, dt); this.lancha.rotation.z = Math.sin(t * 1.1) * 0.03;
    this.lancha.visible = near(lx, lz, 160);
    if (moving && this.lancha.visible && Math.random() < dt * 22) { const fx = Math.sin(dir), fz = Math.cos(dir), side = Math.random() < 0.5 ? -1 : 1; st.fx.soft.emit(lx - fx * 3.4, 0.08, lz - fz * 3.4, -fz * side * 1.1 - fx * 0.4, 0.03, fx * side * 1.1 - fz * 0.4, 2.6, 0.35, 1.3, 0xffffff, 0.5, 0, 0.5); }   // estela en V
    if (moving && this.lancha.visible && Math.random() < dt * 14) { const bx = lx - Math.sin(dir) * 3.6, bz = lz - Math.cos(dir) * 3.6; st.fx.soft.emit(bx + (Math.random() - 0.5), 0.1, bz, (Math.random() - 0.5) * 0.6, 0.3, (Math.random() - 0.5) * 0.6, 1.4, 0.3, 1.2, 0xffffff, 0.45, 0, 0.4); }
    if (night > 0.3 && this.lancha.visible) st.fx.glow.sprite(lx - Math.sin(dir) * 2.3, 3.35, lz - Math.cos(dir) * 2.3, 2.2, 0xfff0b0, 0.5 * night);
    // ---------- Kayaks ----------
    const kay = hour > 7.5 && hour < 19 && !(w.storm || 0) > 0.5;
    for (const k of this.kayaks) {
      let x, z, h;
      if (k.cx != null) { k.a += k.sp * dt; x = k.cx + Math.cos(k.a) * k.rx; z = k.cz + Math.sin(k.a) * k.rz; h = Math.atan2(-Math.sin(k.a) * k.rx * Math.sign(k.sp), Math.cos(k.a) * k.rz * Math.sign(k.sp)); }
      else { k.x += k.dir * 1.6 * dt; if (k.x > -32) k.dir = -1; if (k.x < -100) k.dir = 1; x = k.x; z = -26.4 + (k.x > -66 ? (k.x + 66) / 38 * -2.6 : 0) + 1.5 * k.dir; h = k.dir > 0 ? Math.PI / 2 : -Math.PI / 2; }
      k.g.visible = kay && near(x, z); if (!k.g.visible) continue;
      k.g.position.set(x, Math.sin(t * 1.6 + k.i) * 0.05, z); k.g.rotation.y = h; k.pad.rotation.z = Math.sin(t * 3 + k.i) * 0.6; k.pad.rotation.y = Math.sin(t * 3 + k.i) * 0.25;
    }
    // ---------- Faro ----------
    if (this.beam) { const on = smooth(0.1, 0.5, night); this.beam.rotation.y += dt * 0.9; this.beamMat.opacity = 0.16 * on; this.beam.visible = on > 0.01; this.lampMat.color.setScalar(0.6 + 0.4 * on).multiply(new THREE.Color(0xfff1b0)); if (on > 0.05) st.fx.glow.sprite(w.dyn.faro.x, w.dyn.faro.y, w.dyn.faro.z, 5, 0xfff1b0, 0.8 * on); }
    // ---------- Distancia: los vecinos lejanos no se dibujan y los de media distancia van en una sola pieza ----------
    const far = clamp((st.zoom || 46) * 1.1 + 15, 45, 95), lodR = 15 + (st.cine ? 25 : 0);
    for (const pp of this.others) { const r = pp.root; if (!r.visible) continue; r.getWorldPosition(this._wp || (this._wp = new THREE.Vector3())); setLod(pp, (this._wp.x - f.x) ** 2 + (this._wp.z - f.z) ** 2 < lodR * lodR); }
    for (const pp of this.people) {
      const r = pp.root; if (!r.visible) continue; r.getWorldPosition(this._wp || (this._wp = new THREE.Vector3())); const d2 = (this._wp.x - f.x) ** 2 + (this._wp.z - f.z) ** 2;
      if (d2 > far * far) { r.visible = false; continue; } setLod(pp, d2 < lodR * lodR);
    }
  }
}
