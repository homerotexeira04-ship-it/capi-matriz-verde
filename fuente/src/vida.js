// Paisaje y vida: guiños a Salto (naranjal, termas), central térmica de respaldo con humo,
// familia de carpinchos, bandadas, veleros, luciérnagas, reflejos nocturnos y arcoíris.
import * as THREE from 'three';
import { RES, CHANNEL } from './terrain.js';
import { rng, smooth, clamp, lerp, damp } from './util.js';
import { sign } from './sectors.js';

const NAR = [73, -76], TER = [91.5, -73], TERMICA = [33, 52], FAM = [-34, -18.5];
// Claros donde no se plantan árboles del monte (naranjal, termas, central térmica)
export const CLEAR = [[61, 86, -89, -62], [79, 104, -85, -61], [24, 42, 42, 62]];

const slab = (w, cx, cz, sx, sz, color) => {
  let lo = 1e9, hi = -1e9;
  for (let x = cx - sx / 2; x <= cx + sx / 2; x += 1.5) for (let z = cz - sz / 2; z <= cz + sz / 2; z += 1.5) { const h = w.terrainAt(x, z); lo = Math.min(lo, h); hi = Math.max(hi, h); }
  const top = hi + 0.12; w.batch.boxB(cx, lo - 0.6, cz, sx, top - lo + 0.6, sz, color); w.addPlatform(cx - sx / 2, cx + sx / 2, cz - sz / 2, cz + sz / 2, top);
  return top;
};

export function buildSalto(w) {
  const b = w.batch, R = rng(4711); w.clear = null;
  // ---------- Naranjal salteño ----------
  const [nx, nz] = NAR;
  for (let i = 0; i < 6; i++) for (let k = 0; k < 6; k++) w.tree('naranjo', nx - 8 + i * 3.2 + (R() - 0.5) * 0.5, nz - 8 + k * 3.2 + (R() - 0.5) * 0.5, 0.85 + R() * 0.3);
  for (let i = 0; i < 4; i++) { const x = nx - 4.5 + i * 2.1, z = nz + 10.6, y = w.groundAt(x, z); b.boxB(x, y, z, 1.3, 0.7, 1.0, 0xb98a52); b.boxB(x, y + 0.7, z, 1.1, 0.16, 0.8, 0xff8f1f); }
  sign(w, 'NARANJAS DE SALTO', nx + 7.5, w.groundAt(nx + 7.5, nz + 11.2), nz + 11.2, 0, 7.6, 1.3, { bg: '#1f5a2a', border: '#ffb347' });
  // ---------- Termas ----------
  const [tx, tz] = TER, ty = slab(w, tx, tz, 18, 13.5, 0xeadfc6);
  const pools = [[tx - 4, tz + 0.6, 3.5], [tx + 4.4, tz + 2, 2.5]];
  for (const [px, pz, pr] of pools) { b.cyl(px, ty, pz, pr + 0.3, pr + 0.4, 0.42, 0xd7dde0, 18); b.cyl(px, ty + 0.36, pz, pr, pr, 0.08, 0x35c9d2, 18); w.addCircle(px, pz, pr + 0.35); }
  b.boxB(tx + 3.6, ty, tz - 4.6, 7, 2.6, 3, 0xf6f0e2); b.boxB(tx + 3.6, ty + 2.6, tz - 4.6, 7.6, 0.28, 3.6, 0xc65f3e); b.boxB(tx + 3.6, ty, tz - 3.08, 1.2, 1.9, 0.08, 0x6b4a2f); w.addSolid(tx + 0.1, tx + 7.1, tz - 6.1, tz - 3.1);
  [[tx - 7.2, tz - 4.2, 0xff6b6b], [tx - 2.4, tz - 5, 0xffd23f], [tx + 7.6, tz - 0.6, 0x4fc3f7]].forEach(([ux, uz, col]) => {
    b.cyl(ux, ty, uz, 0.06, 0.06, 2.2, 0xdddddd, 5); b.add(new THREE.ConeGeometry(1.35, 0.55, 8), col, ux, ty + 2.4, uz); b.boxB(ux + 1.1, ty, uz + 0.3, 0.7, 0.28, 1.7, 0xffffff); w.addCircle(ux, uz, 0.2);
  });
  sign(w, 'TERMAS', tx - 4.5, ty, tz + 6.2, 0, 5, 1.3, { bg: '#0d5c6b', border: '#9be7ff' });
  w.updaters.push((dt, st) => {
    if (Math.random() < 16 * dt) { const p = pools[Math.random() < 0.62 ? 0 : 1], a = Math.random() * 6.283, r = Math.sqrt(Math.random()) * p[2] * 0.9; st.fx.soft.emit(p[0] + Math.cos(a) * r, ty + 0.5, p[1] + Math.sin(a) * r, (Math.random() - 0.5) * 0.3, 0.7 + Math.random() * 0.5, (Math.random() - 0.5) * 0.3, 2.2 + Math.random(), 0.5, 1.9, 0xffffff, 0.32, -0.25, 0.5); }
  });
  // ---------- Central térmica de respaldo: humea cuando la red quema combustible ----------
  const [cx, cz] = TERMICA, cy = slab(w, cx, cz, 14, 12, 0x9d998e);
  b.boxB(cx - 1.8, cy, cz - 1.2, 7.4, 3.4, 5.2, 0x727885); b.boxB(cx - 1.8, cy + 3.4, cz - 1.2, 7.9, 0.3, 5.7, 0x4b505c); b.boxB(cx - 1.8, cy, cz + 1.42, 1.6, 2.2, 0.08, 0x30343c);
  w.addSolid(cx - 5.6, cx + 2, cz - 3.9, cz + 1.5); w.addOcc(cx - 5.6, cx + 2, cz - 3.9, cz + 1.5, cy + 3.7);
  const chx = cx + 4, chz = cz - 2;
  b.cyl(chx, cy, chz, 0.55, 0.85, 10.5, 0xbdb6aa, 10); b.cyl(chx, cy + 8.9, chz, 0.6, 0.62, 0.8, 0xd4483b, 10); b.cyl(chx, cy + 7.2, chz, 0.66, 0.68, 0.8, 0xf2f2f2, 10); b.cyl(chx, cy + 5.5, chz, 0.71, 0.73, 0.8, 0xd4483b, 10);
  w.addCircle(chx, chz, 1.05);
  b.cyl(cx + 3.2, cy, cz + 2.8, 1.5, 1.5, 2.4, 0xd8d2c2, 12); b.cyl(cx + 3.2, cy + 2.4, cz + 2.8, 0.3, 1.5, 0.5, 0xc9c2b0, 12); w.addCircle(cx + 3.2, cz + 2.8, 1.7);
  sign(w, 'CENTRAL TÉRMICA DE RESPALDO', cx - 0.5, cy, cz + 5.4, 0, 9, 1.2, { bg: '#3a3f4a', border: '#ff9f43' });
  w.smog = 0;
  w.updaters.push((dt, st) => {
    const o = st.grid.out, share = clamp(o.fossil / Math.max(80, o.demand), 0, 1);
    w.smog = damp(w.smog, clamp(share * 1.5, 0, 1), 0.45, dt);
    if (share > 0.01 && Math.random() < (4 + 30 * share) * dt) {
      const wd = st.grid.windDir || 0, ws = 0.6 + (st.grid.wind || 0) * 1.6, g = Math.round(lerp(0x8c, 0x3a, share));
      st.fx.soft.emit(chx + (Math.random() - 0.5) * 0.5, cy + 10.6, chz + (Math.random() - 0.5) * 0.5, Math.cos(wd) * ws + (Math.random() - 0.5) * 0.4, 1.7 + Math.random() * 0.8, Math.sin(wd) * ws * 0.4 + (Math.random() - 0.5) * 0.4, 3.6 + Math.random() * 1.6, 1.0, 4.6, (g << 16) | (g << 8) | g, 0.5, -0.22, 0.3);
    }
  });
  // ---------- Casas del barrio donde Capi cambia lamparitas por LED ----------
  [[-28, 114], [-20, 122], [-36, 130]].forEach(([hx, hz], i) => { const h = w.houses.find(q => Math.abs(q.x - hx) < 2 && Math.abs(q.z - hz) < 2); if (h) w.addInter('led:' + i, h.x, h.z + h.d / 2 + 1.3, { console: false, h: 4.3, r: 3 }); });
  // ---------- Homenaje junto a la represa ----------
  sign(w, 'HOMENAJE A SALTO GRANDE', -55, w.groundAt(-55, -107.5), -107.5, 0, 7.6, 1.2, { bg: '#12325a', border: '#5ad1ff' });
}

const tri = pts => { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3)); g.computeVertexNormals(); return g; };

export class Vida {
  constructor(game) {
    const w = game.world, sc = game.scene, R = rng(2026); this.g = game; this.w = w; this.t = 0; this.rainbowT = 0; this.wasStorm = false; this.smogShown = -1;
    // Naranjas en los árboles
    const nar = w.trees.filter(t => t.type === 'naranjo'), im = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.2, 0), new THREE.MeshStandardMaterial({ color: 0xff8f1f, roughness: 0.6, emissive: 0x4a1e00 }), nar.length * 9), m4 = new THREE.Matrix4();
    let n = 0;
    for (const t of nar) for (let i = 0; i < 9; i++) { const a = R() * 6.283, e = 0.35 + R() * 1.25; m4.makeTranslation(t.x + Math.sin(e) * Math.cos(a) * 1.42 * t.s, t.y + 1.575 * t.s + Math.cos(e) * 1.17 * t.s, t.z + Math.sin(e) * Math.sin(a) * 1.42 * t.s); im.setMatrixAt(n++, m4); }
    sc.add(im);
    // ---------- Familia de carpinchos en la orilla ----------
    const capy = (s, col) => {
      const g = new THREE.Group(), M = new THREE.MeshStandardMaterial({ color: col, roughness: 0.95, flatShading: true }), D = new THREE.MeshStandardMaterial({ color: 0x2a1c12, roughness: 0.9 });
      const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 0.72, 3, 8), M); body.rotation.x = Math.PI / 2; body.position.y = 0.66; g.add(body);
      const head = new THREE.Group(); head.position.set(0, 0.9, 0.66); g.add(head);
      const hm = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.46, 0.66), M); hm.position.z = 0.14; head.add(hm);
      const nose = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.22, 0.08), D); nose.position.set(0, -0.05, 0.5); head.add(nose);
      for (const sx of [-1, 1]) { const ear = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.15, 0.08), M); ear.position.set(sx * 0.2, 0.28, -0.08); head.add(ear); const eye = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 5), D); eye.position.set(sx * 0.26, 0.08, 0.26); head.add(eye); }
      const legs = []; for (const lx of [-0.26, 0.26]) for (const lz of [-0.36, 0.36]) { const l = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.09, 0.42, 6), M); l.position.set(lx, 0.21, lz); g.add(l); legs.push(l); }
      g.scale.setScalar(s); g.traverse(o => { if (o.isMesh) o.castShadow = true; }); sc.add(g); return { g, head, legs };
    };
    const okSpot = (x, z) => { const h = w.terrainAt(x, z), wl = w.waterAt(x, z); return h > wl - 0.22 && h < wl + 1.6 && Math.hypot(x - FAM[0], z - FAM[1]) < 9 && !w.trees.some(t => Math.hypot(t.x - x, t.z - z) < 1.2); };
    this.fam = [[1.0, 0x8a5a33], [1.08, 0x7b5230], [0.52, 0xa06e42], [0.5, 0x996a40], [0.48, 0xa57448]].map(([s, col], i) => {
      const c = capy(s, col); let x = FAM[0], z = FAM[1];
      for (let k = 0; k < 40; k++) { const px = FAM[0] + (R() - 0.5) * 9, pz = FAM[1] + (R() - 0.5) * 9; if (okSpot(px, pz)) { x = px; z = pz; break; } }
      return Object.assign(c, { x, z, tx: x, tz: z, h: R() * 6.283, wait: 1 + R() * 4, s, i, ph: R() * 6 });
    });
    this.okSpot = okSpot;
    // ---------- Bandadas ----------
    const wingG = tri([0, 0, 0.2, 0, 0, -0.2, 1, 0, -0.08]);
    const flock = (count, color, scale) => { const mat = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide }), list = [];
      for (let i = 0; i < count; i++) { const g = new THREE.Group(), a = new THREE.Mesh(wingG, mat), b2 = new THREE.Mesh(wingG, mat); b2.scale.x = -1; g.add(a, b2); g.scale.setScalar(scale); sc.add(g); const row = Math.ceil(i / 2), side = i % 2 ? 1 : -1; list.push({ g, a, b: b2, ox: side * row * 1.9, oz: -row * 1.7, ph: i * 0.9 }); }
      return list; };
    this.flocks = [{ birds: flock(9, 0x20242c, 1.25), cx: 8, cz: -8, rx: 78, rz: 62, y: 27, sp: 0.075, a: 1.2 }, { birds: flock(5, 0xf2f4f6, 1.0), cx: -20, cz: 96, rx: 62, rz: 13, y: 12, sp: -0.11, a: 4 }];
    // ---------- Veleros ----------
    const boat = (col) => { const g = new THREE.Group(), W = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, flatShading: true }), Cm = new THREE.MeshStandardMaterial({ color: col, roughness: 0.6, flatShading: true, side: THREE.DoubleSide }), S = new THREE.MeshStandardMaterial({ color: 0xfdfdf6, roughness: 0.8, side: THREE.DoubleSide });
      const hull = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.62, 3.8), W); hull.position.y = 0.2; g.add(hull);
      const bow = new THREE.Mesh(new THREE.ConeGeometry(1.06, 1.7, 4), W); bow.rotation.set(Math.PI / 2, Math.PI / 4, 0); bow.scale.set(1, 1, 0.41); bow.position.set(0, 0.2, 2.75); g.add(bow);
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(1.54, 0.16, 3.84), Cm); stripe.position.y = 0.42; g.add(stripe);
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 5.4, 5), new THREE.MeshStandardMaterial({ color: 0x7b6a55 })); mast.position.set(0, 3.1, 0.3); g.add(mast);
      g.add(new THREE.Mesh(tri([0, 0.95, 0.15, 0, 5.6, 0.25, 0, 0.95, -2.5]), S)); g.add(new THREE.Mesh(tri([0, 0.95, 0.5, 0, 4.6, 0.4, 0, 0.95, 2.7]), Cm));
      g.traverse(o => { if (o.isMesh) o.castShadow = true; }); sc.add(g); return g; };
    this.boats = [[-124, 14, 6, 34, 0xe6007e, 0.5], [-126, 128, 7, 40, 0x2ed3c6, 2.6], [-142, -128, 30, 8, 0xffc420, 4.4]].map(([cx, cz, rx, rz, col, a], i) => ({ g: boat(col), cx, cz, rx, rz, a, y: w.waterAt(cx, cz), sp: (i % 2 ? -1 : 1) * (1.6 + i * 0.3), i }));
    // ---------- Luciérnagas y reflejos de estrellas en el agua ----------
    this.flies = []; for (const [fx, fz, r, k] of [[FAM[0], FAM[1], 13, 12], [NAR[0], NAR[1], 11, 8], [-44, 44, 13, 8], [34, 27, 9, 6]]) for (let i = 0; i < k; i++) { const a = R() * 6.283, d = Math.sqrt(R()) * r, x = fx + Math.cos(a) * d, z = fz + Math.sin(a) * d; this.flies.push({ x, z, y: Math.max(w.groundAt(x, z), w.waterAt(x, z)) + 0.9 + R() * 1.3, ph: R() * 6.283, sp: 0.6 + R() * 0.8 }); }
    this.glints = []; for (let i = 0; i < 46; i++) this.glints.push({ x: lerp(-152, -95, R()), z: lerp(-88, 204, R()), y: 0.06, ph: R() * 6.283 });
    for (let i = 0; i < 60 && this.glints.length < 62; i++) { const x = lerp(-185, -95, R()), z = lerp(-148, -106, R()); if (w.waterAt(x, z) === RES && w.terrainAt(x, z) < RES - 0.6) this.glints.push({ x, z, y: RES + 0.06, ph: R() * 6.283 }); }
    // ---------- Arcoíris ----------
    this.rainbow = new THREE.Mesh(new THREE.PlaneGeometry(96, 48).translate(0, 24, 0), new THREE.ShaderMaterial({ transparent: true, depthWrite: false, depthTest: false, side: THREE.DoubleSide, fog: false, uniforms: { uA: { value: 0 } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: 'varying vec2 vUv; uniform float uA; vec3 hue(float h){ return clamp(abs(mod(h*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0,0.0,1.0); } void main(){ float r = length(vec2((vUv.x-0.5)*2.0, vUv.y)); float t = (r-0.80)/0.17; if (t < 0.0 || t > 1.0) discard; float a = smoothstep(0.0,0.2,t)*smoothstep(1.0,0.8,t)*smoothstep(0.02,0.3,vUv.y); gl_FragColor = vec4(hue(0.78*(1.0-t)), a*uA*0.62); }' }));
    this.rainbow.rotation.order = 'YXZ'; this.rainbow.visible = false; this.rainbow.renderOrder = 40; sc.add(this.rainbow);
    this.smogEl = document.getElementById('smog');
    // ---------- Neblina sobre el agua al amanecer ----------
    const mc = document.createElement('canvas'); mc.width = mc.height = 128; const mg = mc.getContext('2d'), gr = mg.createRadialGradient(64, 64, 4, 64, 64, 62);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.45, 'rgba(255,255,255,.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); mg.fillStyle = gr; mg.fillRect(0, 0, 128, 128);
    const mtex = new THREE.CanvasTexture(mc); mtex.colorSpace = THREE.SRGBColorSpace;
    this.mistMats = [0.62, 0.42].map(o => new THREE.MeshBasicMaterial({ map: mtex, color: 0xf2f6f8, transparent: true, opacity: 0, depthWrite: false, fog: false, userData: { o } }));
    const pg = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), wet = (x, z) => w.terrainAt(x, z) < w.waterAt(x, z) - 0.25;
    this.mist = []; const bank = (x, z, sx, sz, layer) => { if (!wet(x, z)) return; const m = new THREE.Mesh(pg, this.mistMats[layer]); const y = w.waterAt(x, z) + 0.45 + layer * 0.9; m.position.set(x, y, z); m.scale.set(sx, 1, sz); m.rotation.y = R() * 6.283; m.renderOrder = 8; m.visible = false; sc.add(m); this.mist.push({ m, hx: x, hz: z, ph: R() * 6.283, sp: 0.6 + R() * 0.8 }); };
    for (let i = 0; i < 26; i++) for (const L of [0, 1]) bank(lerp(-150, -96, R()), lerp(-86, 204, R()), 10 + R() * 8, 18 + R() * 16, L);   // el río Uruguay frente a la costanera
    for (let s = 0; s < CHANNEL.length - 1; s++) { const [ax, az] = CHANNEL[s], [bx, bz] = CHANNEL[s + 1], n = Math.max(2, Math.round(Math.hypot(bx - ax, bz - az) / 9)); for (let k = 0; k < n; k++) { const t = (k + R() * 0.6) / n; for (const L of [0, 1]) bank(lerp(ax, bx, t) + (R() - 0.5) * 6, lerp(az, bz, t) + (R() - 0.5) * 5, 14 + R() * 10, 9 + R() * 6, L); } }
    for (let i = 0; i < 16; i++) bank(lerp(-185, -98, R()), lerp(-146, -108, R()), 16 + R() * 12, 10 + R() * 8, i % 2);   // el lago de Salto Grande
  }

  // sky: arco vertical sobre el lago (tomas con horizonte). Si no, acompaña a la cámara y se ve desde arriba.
  showRainbow(t = 55, sky = false) { this.rainbowT = t; this.rainbowMax = t; this.rainbowSky = sky; this.rbInit = true; }

  update(dt, st) {
    const w = this.w, t = this.t += dt, night = st.night, storm = w.storm || 0;
    // Neblina: aparece al amanecer y se deshace a media mañana, empujada por el viento
    const mk = w.mist || 0; this.mistMats.forEach(m => { m.opacity = mk * m.userData.o; });
    for (const b of this.mist) { b.m.visible = mk > 0.01; if (!b.m.visible) continue; const wd = st.grid.windDir || 0, dr = Math.sin(t * 0.05 * b.sp + b.ph) * 5; b.m.position.x = b.hx + Math.cos(wd) * dr; b.m.position.z = b.hz + Math.sin(wd) * dr * 0.5; b.m.rotation.y += dt * 0.01 * b.sp; }
    // Aire: velo grisáceo proporcional al respaldo fósil
    const sm = Math.round((w.smog || 0) * 50) / 50; if (sm !== this.smogShown && this.smogEl) { this.smogShown = sm; this.smogEl.style.opacity = (sm * 0.5).toFixed(3); }
    // Carpinchos
    const cp = st.capi;
    for (const c of this.fam) {
      const lead = c.i >= 2 ? this.fam[c.i % 2] : null; let moving = false;
      if (lead && Math.hypot(lead.x - c.x, lead.z - c.z) > 3.2) { c.tx = lead.x + Math.cos(c.ph) * 1.2; c.tz = lead.z + Math.sin(c.ph) * 1.2; c.wait = 0; }
      const dx = c.tx - c.x, dz = c.tz - c.z, d = Math.hypot(dx, dz);
      if (d > 0.25 && c.wait <= 0) {
        const sp = (lead ? 1.5 : 0.85) * c.s ** 0.3, nx2 = c.x + dx / d * sp * dt, nz2 = c.z + dz / d * sp * dt; moving = true;
        if (this.okSpot(nx2, nz2)) { c.x = nx2; c.z = nz2; } else { c.tx = c.x; c.tz = c.z; }
        let dh = Math.atan2(dx, dz) - c.h; dh = Math.atan2(Math.sin(dh), Math.cos(dh)); c.h += dh * Math.min(1, dt * 5);
      } else { c.wait -= dt; if (c.wait <= 0 && d <= 0.25) { c.wait = 2 + Math.random() * 6; for (let k = 0; k < 8; k++) { const px = c.x + (Math.random() - 0.5) * 7, pz = c.z + (Math.random() - 0.5) * 7; if (this.okSpot(px, pz)) { c.tx = px; c.tz = pz; break; } } } }
      const near = cp && Math.hypot(cp.x - c.x, cp.z - c.z) < 5;   // si Capi se acerca, lo miran
      if (near && !moving) { let dh = Math.atan2(cp.x - c.x, cp.z - c.z) - c.h; dh = Math.atan2(Math.sin(dh), Math.cos(dh)); c.h += dh * Math.min(1, dt * 3); }
      const h = w.terrainAt(c.x, c.z), wl = w.waterAt(c.x, c.z), walk = moving ? Math.sin(t * 11 + c.ph) : 0;
      c.g.position.set(c.x, Math.max(h, wl - 0.5 * c.s) + (moving ? Math.abs(walk) * 0.05 : 0), c.z); c.g.rotation.y = c.h;
      c.legs.forEach((l, k) => { l.rotation.x = walk * (k === 0 || k === 3 ? 0.5 : -0.5); });
      c.head.rotation.x = near ? -0.25 : moving ? 0.05 : 0.5 + Math.sin(t * 3 + c.ph) * 0.12;   // quietos, pastan
    }
    // Bandadas
    for (const f of this.flocks) {
      f.a += f.sp * dt; const vis = night < 0.75 && storm < 0.5, cx = f.cx + Math.cos(f.a) * f.rx, cz = f.cz + Math.sin(f.a) * f.rz, hd = Math.atan2(-Math.sin(f.a) * f.rx * Math.sign(f.sp), Math.cos(f.a) * f.rz * Math.sign(f.sp)), ch = Math.cos(hd), sh = Math.sin(hd);
      for (const b of f.birds) { b.g.visible = vis; if (!vis) continue; b.g.position.set(cx + b.ox * ch + b.oz * sh, f.y + Math.sin(t * 0.7 + b.ph) * 0.8, cz - b.ox * sh + b.oz * ch); b.g.rotation.y = hd; const fl = Math.sin(t * 8.5 + b.ph) * 0.65; b.a.rotation.z = fl; b.b.rotation.z = -fl; }
    }
    // Veleros
    for (const b of this.boats) {
      b.a += b.sp * dt / Math.max(b.rx, b.rz); const x = b.cx + Math.cos(b.a) * b.rx, z = b.cz + Math.sin(b.a) * b.rz, s = Math.sign(b.sp);
      b.g.position.set(x, b.y - 0.12 + Math.sin(t * 1.3 + b.i * 2) * 0.09, z); b.g.rotation.set(Math.sin(t * 1.1 + b.i) * 0.04, Math.atan2(-Math.sin(b.a) * b.rx * s, Math.cos(b.a) * b.rz * s), 0.09 + Math.sin(t * 0.8 + b.i * 1.7) * 0.05);
      if (Math.random() < 5 * dt) st.fx.soft.emit(x + (Math.random() - 0.5) * 0.8, b.y + 0.08, z + (Math.random() - 0.5) * 0.8, 0, 0.05, 0, 1.3, 0.35, 1.0, 0xffffff, 0.5, 0, 1);
      if (night > 0.4) st.fx.glow.sprite(x, b.y + 5.7, z, 1.3, 0xffd98a, 0.8 * night);
    }
    // Noche: luciérnagas y estrellas reflejadas
    if (night > 0.45 && storm < 0.5) {
      const k = smooth(0.45, 0.8, night);
      for (const f of this.flies) { const a = Math.max(0, Math.sin(t * 1.7 * f.sp + f.ph)); if (a > 0.05) st.fx.glow.sprite(f.x + Math.sin(t * 0.5 * f.sp + f.ph) * 1.3, f.y + Math.sin(t * 0.8 + f.ph * 2) * 0.5, f.z + Math.cos(t * 0.43 * f.sp + f.ph) * 1.3, 0.55, 0xd8ff6a, a * k); }
      for (const g of this.glints) { const a = 0.35 + 0.65 * Math.max(0, Math.sin(t * 1.3 + g.ph)); st.fx.glow.sprite(g.x, g.y, g.z, 0.5, 0xcfe0ff, a * k * 0.75); }
    }
    // Arcoíris al despejar el temporal
    if (storm > 0.6) this.wasStorm = true; else if (this.wasStorm && storm < 0.12) { this.wasStorm = false; if (night < 0.55) this.showRainbow(); }
    if (this.rainbowT > 0) {
      this.rainbowT -= dt; const m = this.rainbowMax || 55, rb = this.rainbow; rb.visible = true;
      if (this.rainbowSky) { rb.position.set(4, 3.5, -76); rb.rotation.set(0, 0, 0); rb.scale.setScalar(1); }
      else {
        const f = st.focus, dx = f.x - st.cam.x, dz = f.z - st.cam.z, d = Math.hypot(dx, dz) || 1, zoom = clamp(st.zoom || 56, 22, 90), k = this.rbInit ? 1 : Math.min(1, dt * 2.5); this.rbInit = false;
        rb.position.x = lerp(rb.position.x, f.x + dx / d * zoom * 0.08, k); rb.position.z = lerp(rb.position.z, f.z + dz / d * zoom * 0.08, k); rb.position.y = lerp(rb.position.y, f.y + 1, k);
        rb.rotation.set(-1.3, Math.atan2(-dx, -dz), 0); rb.scale.setScalar(zoom / 56 * 0.62);
      }
      this.rainbow.material.uniforms.uA.value = this.rainbow.material.uniforms.uA.value = smooth(0, 5, m - this.rainbowT) * smooth(0, 9, this.rainbowT) * (1 - night) * (1 - storm);
    } else this.rainbow.visible = false;
  }
}
