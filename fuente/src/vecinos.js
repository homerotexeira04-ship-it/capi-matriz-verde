// Vida de barrio: rutinas de los vecinos según la hora, reacciones al clima y a la red, recorridos de los
// personajes principales, Lucía al volante, teros que defienden su nido, Pampa el perro de Don Mateo
// y la cuerda de tambores del baile final.
import * as THREE from 'three';
import { CITY_Y, POS } from './terrain.js';
import { makePerson } from './actors.js';
import { clamp, damp, angDiff, rng, smooth } from './util.js';
import { drawFace } from './ui.js';

const LOOP = 240;
function loopPoint(s, out) {   // mismo circuito que los ómnibus
  s = ((s % LOOP) + LOOP) % LOOP;
  if (s < 64) { out.x = -12 - s; out.z = 70; out.h = -Math.PI / 2; }
  else if (s < 120) { out.x = -77; out.z = 69 - (s - 64); out.h = Math.PI; }
  else if (s < 184) { out.x = -76 + (s - 120); out.z = 12; out.h = Math.PI / 2; }
  else { out.x = -11; out.z = 13 + (s - 184); out.h = 0; }
  return out;
}
const BENCH_R = [[-76, 74.6], [-40, 74.6], [-28, 74.6], [-16, 74.6]], BENCH_P = [[-39.4, 44, -Math.PI / 2], [-48.6, 44, Math.PI / 2]];
const NESTS = [[18, 30], [56, 30]], PAMPA = [36, 30];
const ROUTES = {
  valeria: { pts: [[-20, 27.8, 7], [-16.5, 26.2, 6], [-20, 27.8, 7], [-24.5, 26.5, 6]], speed: 1.2 },
  mateo: { pts: [[35.2, 28.4, 20, 'sit'], [38.2, 23.2, 10, 'look']], speed: 1.0 }
};
const M = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, flatShading: true, roughness: 0.85, ...o });

export class Vecinos {
  constructor(game) {
    const g = this.g = game, sc = game.scene, w = game.world, A = game.actors, R = rng(909); this.t = 0; this.cheerT = 0; this.prevBar = [true, true, true]; this.partyT = 0; this.tmp = { x: 0, z: 0, h: 0 };
    A.vec = this;   // los vecinos pasan a manejarse desde acá
    // paraguas para cada vecino, ocultos hasta que llueve
    const umbCols = [0xe6007e, 0x2ed3c6, 0xffc420, 0x6a2c91, 0x118ab2];
    const umbrella = col => { const u = new THREE.Group(); const top = new THREE.Mesh(new THREE.ConeGeometry(0.75, 0.32, 8, 1, true), M(col, { side: THREE.DoubleSide })); top.rotation.x = Math.PI; top.position.y = -1.05; u.add(top); const h = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.0, 4), M(0x333333)); h.position.y = -0.55; u.add(h); u.visible = false; return u; };
    A.citizens.forEach((c, i) => { c.umb = umbrella(umbCols[i % 5]); c.umb.position.set(0, -0.7, 0); c.armR.add(c.umb); c.waveCool = 0; c.waveT = 0; c.sit = null; c.home = { x: c.x, z: c.z }; });
    const add = (o, x, z) => { const p = makePerson(o); p.group.position.set(x, w.groundAt(x, z), z); sc.add(p.group); return p; };
    // corredores en la rambla
    this.joggers = [0, 1].map(i => Object.assign(add({ skin: i ? 0xc58b62 : 0xf1c9a5, shirt: i ? 0x2ed3c6 : 0xff8fab, pants: 0x23395d, hair: i ? 0x1a1412 : 0x8a5a33, pony: !i, hat: i ? 'gorra' : null, hatColor: 0xffffff }, -70 + i * 30, 73.6), { x: -70 + i * 30, dir: i ? -1 : 1, sp: 3.1 + i * 0.4 }));
    // chicos jugando al fútbol en la playa
    this.kids = [-45, -39.5, -34].map((x, i) => Object.assign(add({ skin: [0xe0ac86, 0xc58b62, 0xf1c9a5][i], shirt: [0x75aadb, 0xffffff, 0xe6007e][i], pants: 0x23395d, hair: [0x2a1c12, 0x5a3a1a, 0x1a1412][i], scale: 0.6 }, x, 78.4), { hx: x, x, z: 78.4, kick: 0 }));
    this.ball = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 1), M(0xf4f4f4)); this.ball.castShadow = true; sc.add(this.ball); this.pass = { a: 0, b: 1, t: 0, d: 1.1 };
    // ciclistas por el circuito de la ciudad
    const bike = (col, rider) => { const gr = new THREE.Group(); for (const z of [-0.55, 0.55]) { const wh = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.05, 5, 14), M(0x1c1e22)); wh.rotation.y = Math.PI / 2; wh.position.set(0, 0.36, z); gr.add(wh); }
      const fr = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 1.0), M(col)); fr.position.set(0, 0.62, 0); gr.add(fr); const st = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, 0.06), M(col)); st.position.set(0, 0.6, -0.1); gr.add(st); const hb = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.05), M(0x333333)); hb.position.set(0, 0.95, 0.5); gr.add(hb);
      const p = makePerson(rider); p.group.scale.setScalar(0.82); p.group.position.set(0, 0.12, -0.12); gr.add(p.group); p.armL.rotation.x = p.armR.rotation.x = -1.25; sc.add(gr); return Object.assign(p, { bike: gr }); };
    this.bikes = [[0xe6007e, 30], [0x2ed3c6, 150]].map(([col, s], i) => Object.assign(bike(col, { skin: i ? 0xe0ac86 : 0x9a6b4b, shirt: i ? 0xffc420 : 0x6a2c91, pants: 0x2b2d42, hair: 0x2a1c12, hat: 'gorra', hatColor: col }), { s, sp: 5.2 + i * 0.6 }));
    // cuerda de tambores para el baile final
    this.drummers = [0, 1, 2, 3].map(i => { const p = add({ skin: [0x9a6b4b, 0xc58b62, 0x6b4a33, 0xe0ac86][i], shirt: [0xffc420, 0xe6007e, 0x2ed3c6, 0x6a2c91][i], pants: 0xffffff, hair: 0x1a1412 }, -52 + i * 3, 37.2);
      const dr = new THREE.Group(); const body = new THREE.Mesh(new THREE.CylinderGeometry(0.26 - i * 0.02, 0.2, 0.75, 10), M(0x8a5a33)); dr.add(body); const top = new THREE.Mesh(new THREE.CylinderGeometry(0.27 - i * 0.02, 0.27 - i * 0.02, 0.04, 10), M(0xf2ead8)); top.position.y = 0.38; dr.add(top);
      for (const y of [-0.2, 0.2]) { const band = new THREE.Mesh(new THREE.TorusGeometry(0.25 - i * 0.02, 0.025, 4, 12), M([0xffc420, 0xe6007e, 0x2ed3c6, 0x6a2c91][i])); band.rotation.x = Math.PI / 2; band.position.y = y; dr.add(band); }
      dr.position.set(0.32, 0.9, 0.32); dr.rotation.set(0.5, 0, -0.35); p.group.add(dr); p.group.visible = false; return Object.assign(p, { x: -52 + i * 3 }); });
    // Lucía al volante: cartelito sobre el ómnibus
    const lc = document.createElement('canvas'); lc.width = 256; lc.height = 72; const lx = lc.getContext('2d'); lx.fillStyle = 'rgba(15,33,64,.95)'; lx.beginPath(); lx.roundRect(2, 2, 252, 68, 16); lx.fill(); lx.strokeStyle = '#ffc93c'; lx.lineWidth = 4; lx.stroke();
    const fc = document.createElement('canvas'); fc.width = fc.height = 24; drawFace(fc.getContext('2d'), 'lucia', 0, false); lx.imageSmoothingEnabled = false; lx.drawImage(fc, 10, 8, 56, 56); lx.fillStyle = '#fff7e6'; lx.font = '900 25px Nunito, sans-serif'; lx.textBaseline = 'middle'; lx.fillText('Lucía maneja', 76, 36);
    const lt = new THREE.CanvasTexture(lc); lt.colorSpace = THREE.SRGBColorSpace; this.luTag = new THREE.Sprite(new THREE.SpriteMaterial({ map: lt, depthTest: false, transparent: true, fog: false })); this.luTag.scale.set(4.6, 1.3, 1); this.luTag.renderOrder = 36; this.luTag.visible = false; sc.add(this.luTag);
    this.lu = { away: false, rest: 25, lastS: null, laps: 0, honked: false };
    // recorridos de Valeria y Don Mateo
    this.walk = {}; for (const k in ROUTES) { const n = A.npc[k]; this.walk[k] = { i: 0, wait: ROUTES[k].pts[0][2], x: n.home.x, z: n.home.z, moving: false }; }
    const log = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.3, 7), M(0x7b5a3a)); log.rotation.z = Math.PI / 2; log.position.set(35.4, w.groundAt(35.4, 28.6) + 0.22, 28.6); log.castShadow = true; sc.add(log);
    // nidos de teros
    const tero = () => { const gr = new THREE.Group(), bd = new THREE.Mesh(new THREE.IcosahedronGeometry(0.28, 1), M(0x9a8c7c)); bd.scale.set(0.8, 0.75, 1.5); gr.add(bd); const ch = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 0), M(0x1c1c1e)); ch.position.set(0, -0.03, 0.2); gr.add(ch);
      const hd = new THREE.Mesh(new THREE.IcosahedronGeometry(0.14, 0), M(0x8a8f96)); hd.position.set(0, 0.16, 0.4); gr.add(hd); const bk = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.2), M(0xd7263d)); bk.position.set(0, 0.14, 0.58); gr.add(bk);
      for (const sx of [-1, 1]) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.4, 0.03), M(0xd7263d)); l.position.set(sx * 0.08, -0.36, 0); gr.add(l); }
      const wg = new THREE.BufferGeometry(); wg.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0.3, 0, 0, -0.3, 0.95, 0, -0.1], 3)); wg.computeVertexNormals(); const wm = new THREE.MeshStandardMaterial({ color: 0x2a2a2e, side: THREE.DoubleSide });
      const wl = new THREE.Mesh(wg, wm), wr = new THREE.Mesh(wg, wm); wr.scale.x = -1; gr.add(wl, wr); gr.traverse(o => { if (o.isMesh) o.castShadow = true; }); sc.add(gr); return { g: gr, wl, wr }; };
    this.nests = NESTS.map(([nx, nz], k) => {
      const y = w.groundAt(nx, nz); for (let i = 0; i < 9; i++) { const a = i / 9 * 6.283, s = new THREE.Mesh(new THREE.IcosahedronGeometry(0.1, 0), M(0x8c8578)); s.position.set(nx + Math.cos(a) * 0.38, y + 0.05, nz + Math.sin(a) * 0.38); sc.add(s); }
      for (let i = 0; i < 3; i++) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), M(0x9c8f5a)); e.scale.set(1, 0.8, 1.3); e.position.set(nx + Math.cos(i * 2.1) * 0.13, y + 0.08, nz + Math.sin(i * 2.1) * 0.13); sc.add(e); }
      return { x: nx, z: nz, y, alarm: 0, birds: [0, 1].map(j => Object.assign(tero(), { a: j * 3.1, x: nx + (j ? 1.2 : -1.1), y: y + 0.55, z: nz + (j ? 0.6 : -0.8), hx: nx + (j ? 1.2 : -1.1), hz: nz + (j ? 0.6 : -0.8), call: 0 })) };
    });
    this.teroTip = false;
    // Pampa, el perro de Don Mateo
    const dog = this.dog = { g: new THREE.Group(), x: PAMPA[0], z: PAMPA[1], h: 0, follow: 0, cool: 0, bark: 0, legs: [] }, dm = M(0xb0703a), dd = M(0x5a3a20);
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.4, 0.9), dm); body.position.y = 0.55; dog.g.add(body);
    const head = new THREE.Group(); head.position.set(0, 0.85, 0.5); dog.g.add(head); dog.head = head;
    const hm = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.34, 0.36), dm); head.add(hm); const sn = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.16, 0.22), M(0xd9b48a)); sn.position.set(0, -0.06, 0.26); head.add(sn); const no = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.04), M(0x111111)); no.position.set(0, 0.0, 0.38); head.add(no);
    for (const sx of [-1, 1]) { const ear = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.2, 0.06), dd); ear.position.set(sx * 0.17, 0.12, -0.05); ear.rotation.z = sx * 0.35; head.add(ear); const eye = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 0.03), M(0x111111)); eye.position.set(sx * 0.09, 0.07, 0.19); head.add(eye); }
    for (const lx of [-0.14, 0.14]) for (const lz of [-0.32, 0.32]) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.38, 0.1), dd); l.position.set(lx, 0.2, lz); dog.g.add(l); dog.legs.push(l); }
    const tail = dog.tail = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, 0.4), dm); tail.position.set(0, 0.72, -0.55); tail.rotation.x = -0.6; dog.g.add(tail);
    dog.g.traverse(o => { if (o.isMesh) o.castShadow = true; }); sc.add(dog.g);
  }

  cheer(t = 3) { this.cheerT = Math.max(this.cheerT, t); }
  get festival() { const M = this.g.missions; return this.g.actors.gathered || !!this.g.cine || (M.key === 'pico' && (M.active || M.ceremony)); }
  get luciaAway() { return this.lu.away; }
  drums(on) { this.drumOn = on; this.drummers.forEach(d => { d.group.visible = on; }); }

  update(dt, st) {
    const g = this.g, w = this.g.world, A = g.actors, t = this.t += dt, h = st.hour, storm = w.storm || 0, cp = st.capi, play = g.mode === 'play';
    const night = (h < 6 || h >= 21.5) && !this.festival, rain = storm > 0.5, party = A.celebrate > 0;
    this.cheerT = Math.max(0, this.cheerT - dt);
    // los barrios que recuperan la luz festejan
    st.barrios.forEach((on, i) => { if (on && !this.prevBar[i] && play) this.cheer(3); this.prevBar[i] = on; });
    // ---------- vecinos ----------
    const slot = h >= 6 && h < 9.5 ? 'manana' : h >= 11.5 && h < 14.5 ? 'mate' : h >= 17 && h < 21.5 ? 'paseo' : 'dia';
    A.citizens.forEach((c, ci) => {
      const gr = c.group;
      if (A.gathered) { gr.visible = true; c.umb.visible = false; this.gatherPose(c, ci, dt, party); return; }
      const hide = (night && ci > 1) || (rain && ci % 3 === 0);
      gr.visible = !hide; c.umb.visible = rain && !hide; if (hide) { c.sit = null; return; }
      // mate en los bancos al mediodía
      const sitter = slot === 'mate' && !rain && (c.kind === 'plaza' || (c.kind === 'rambla' && ci % 2 === 1 && ci < 9));
      if (sitter && !c.sit) c.sit = c.kind === 'plaza' ? BENCH_P[ci - 13] : BENCH_R[(ci >> 1) % 4];
      if (!sitter) c.sit = null;
      let moving = !party && c.waveT <= 0 && this.cheerT <= 0, sp = c.speed * (slot === 'manana' ? 1.5 : slot === 'paseo' ? 0.75 : 1) * (rain ? 1.6 : 1);
      c.waveCool -= dt; const dC = Math.hypot(cp.x - gr.position.x, cp.z - gr.position.z);
      if (play && dC < 5 && c.waveCool <= 0) { c.waveT = 1.8; c.waveCool = 25; }
      c.waveT -= dt;
      if (c.sit) {   // camina hasta el banco y se sienta
        const [bx, bz, br] = c.sit, tz = bz - (br == null ? 0.05 : 0), dx = bx - gr.position.x, dz = tz - gr.position.z, d = Math.hypot(dx, dz);
        if (d > 0.3 && moving) { const k = Math.min(1, sp * dt / d); gr.position.x += dx * k; gr.position.z += dz * k; gr.position.y = CITY_Y; gr.rotation.y += angDiff(gr.rotation.y, Math.atan2(dx, dz)) * Math.min(1, dt * 6); const sw = Math.sin(t * 6 * c.speed + c.phase) * 0.6; c.legL.rotation.x = sw; c.legR.rotation.x = -sw; c.armL.rotation.x = -sw * 0.6; c.armR.rotation.x = sw * 0.6; c.x = gr.position.x; c.z = gr.position.z; }
        else if (d <= 0.3) { gr.position.set(bx, CITY_Y - 0.36, tz); gr.rotation.y += angDiff(gr.rotation.y, br == null ? 0 : br) * Math.min(1, dt * 6); c.legL.rotation.x = c.legR.rotation.x = -1.45; c.armR.rotation.x = c.waveT > 0 ? -2.7 + Math.sin(t * 12) * 0.3 : -1.1 + Math.sin(t * 0.8 + c.phase) * 0.15; c.armL.rotation.x = -0.4; }
        this.reactPose(c, dt, cp, party); return;
      }
      if (c.kind === 'rambla') { if (moving) c.x += c.dir * sp * dt; if (c.x > -13) c.dir = -1; if (c.x < -81) c.dir = 1; gr.position.set(c.x, CITY_Y, c.z); if (moving) gr.rotation.y = damp(gr.rotation.y, c.dir > 0 ? Math.PI / 2 : -Math.PI / 2, 6, dt); }
      else if (c.kind === 'west') { if (moving) c.z += c.dir * sp * dt; if (c.z > 70) c.dir = -1; if (c.z < 14) c.dir = 1; gr.position.set(c.x, CITY_Y, c.z); if (moving) gr.rotation.y = damp(gr.rotation.y, c.dir > 0 ? 0 : Math.PI, 6, dt); }
      else { if (moving) c.a += c.speed * dt * (rain ? 1.6 : 1); gr.position.set(POS.plaza[0] + Math.cos(c.a) * 5.2, CITY_Y, POS.plaza[1] + Math.sin(c.a) * 5.2); if (moving) gr.rotation.y = -c.a; }
      const ph = t * 6 * sp / Math.max(0.5, c.speed) + c.phase, sw = moving ? Math.sin(ph) * (rain ? 0.8 : 0.6) : 0;
      c.legL.rotation.x = sw; c.legR.rotation.x = -sw; c.armL.rotation.x = damp(c.armL.rotation.x, -sw * 0.6, 10, dt); c.armR.rotation.x = damp(c.armR.rotation.x, rain ? -0.15 : c.kind === 'plaza' ? -1.1 : sw * 0.6, 10, dt);
      this.reactPose(c, dt, cp, party);
    });
    // ---------- corredores, chicos y ciclistas ----------
    const out = !night && !rain;
    this.joggers.forEach(j => { j.group.visible = out && h >= 6 && h < 21; if (!j.group.visible) return; j.x += j.dir * j.sp * dt; if (j.x > -13) j.dir = -1; if (j.x < -81) j.dir = 1; j.group.position.set(j.x, CITY_Y + Math.abs(Math.sin(t * 9 + j.dir)) * 0.08, 73.6 + (j.dir > 0 ? 0 : 0.7)); j.group.rotation.y = j.dir > 0 ? Math.PI / 2 : -Math.PI / 2; const s = Math.sin(t * 9 + j.dir * 2); j.legL.rotation.x = s * 1.0; j.legR.rotation.x = -s * 1.0; j.armL.rotation.x = -s * 0.9 - 0.4; j.armR.rotation.x = s * 0.9 - 0.4; });
    const kidsOn = out && h >= 8.5 && h < 19 && !this.festival; this.ball.visible = kidsOn;
    this.kids.forEach(k => { k.group.visible = kidsOn; });
    if (kidsOn) {
      const P = this.pass; P.t += dt; const A0 = this.kids[P.a], B0 = this.kids[P.b];
      if (P.t >= P.d) { B0.kick = 0.35; P.a = P.b; P.b = (P.b + 1 + (Math.random() < 0.5 ? 1 : 0)) % 3; if (P.b === P.a) P.b = (P.b + 1) % 3; P.t = 0; P.d = 0.9 + Math.random() * 0.5; }
      const u = clamp(P.t / P.d, 0, 1), from = this.kids[P.a], to = this.kids[P.b], bx = from.x + (to.x - from.x) * u, bz = from.z + 0.4 + (to.z - from.z) * u;
      this.ball.position.set(bx, w.groundAt(bx, bz) + 0.2 + Math.sin(u * Math.PI) * 1.4, bz); this.ball.rotation.x += dt * 9;
      this.kids.forEach((k, i) => { k.kick -= dt; const tgt = i === P.b ? bx : k.hx + Math.sin(t * 0.7 + i) * 1.2; k.x += clamp(tgt - k.x, -2.2 * dt, 2.2 * dt); k.group.position.set(k.x, w.groundAt(k.x, k.z), k.z); k.group.rotation.y += angDiff(k.group.rotation.y, Math.atan2(bx - k.x, bz - k.z)) * Math.min(1, dt * 6); const s = Math.sin(t * 10 + i); k.legL.rotation.x = k.kick > 0 ? -1.2 : s * 0.5; k.legR.rotation.x = -s * 0.5; k.armL.rotation.x = -s * 0.5; k.armR.rotation.x = s * 0.5; });
    }
    this.bikes.forEach((b, i) => {
      b.bike.visible = out && h >= 7 && h < 20.5; if (!b.bike.visible) return; b.s += b.sp * dt; const p = loopPoint(b.s, this.tmp), off = 2.3, ox = Math.cos(p.h) * off, oz = -Math.sin(p.h) * off;
      b.bike.position.set(p.x + ox, CITY_Y - 0.05, p.z + oz); b.bike.rotation.y += angDiff(b.bike.rotation.y, p.h) * Math.min(1, dt * 5); const s = Math.sin(t * 7 + i); b.legL.rotation.x = -1.2 + s * 0.5; b.legR.rotation.x = -1.2 - s * 0.5;
    });
    // ---------- personajes principales ----------
    this.mainNpcs(dt, st, cp);
    this.lucia(dt, st, cp);
    // ---------- teros con nido ----------
    this.nests.forEach(n => {
      const d = Math.hypot(cp.x - n.x, cp.z - n.z), alarmed = play && d < 8 && !g.cine; if (alarmed) n.alarm = 2.5; else n.alarm -= dt;
      if (alarmed && !this.teroTip && play) { this.teroTip = true; g.ui.note('¡Los teros defienden su nido a los gritos! Mejor dar un rodeo.', 4.5); }
      n.birds.forEach((b, j) => {
        let tx = b.hx, ty = n.y + 0.55, tz = b.hz;
        if (n.alarm > 0) { b.a += dt * (2.6 + j * 0.4); const dive = Math.sin(t * 2.2 + j * 3) > 0.6; tx = cp.x + Math.cos(b.a) * (dive ? 1.2 : 3.4); tz = cp.z + Math.sin(b.a) * (dive ? 1.2 : 3.4); ty = cp.y + (dive ? 2.2 : 4.2);
          b.call -= dt; if (b.call <= 0) { b.call = 0.7 + Math.random() * 0.5; g.audio.tero(clamp(1 - d / 25, 0.3, 1)); } if (dive && Math.hypot(b.x - cp.x, b.z - cp.z) < 1.8) g.capi.flinch = 0.45; }
        const k = Math.min(1, dt * (n.alarm > 0 ? 3 : 1.4)), px = b.x, pz = b.z; b.x += (tx - b.x) * k; b.y += (ty - b.y) * k; b.z += (tz - b.z) * k;
        b.g.position.set(b.x, b.y, b.z); if (Math.abs(b.x - px) + Math.abs(b.z - pz) > 1e-3) b.g.rotation.y = Math.atan2(b.x - px, b.z - pz); else b.g.rotation.y += angDiff(b.g.rotation.y, Math.atan2(n.x - b.x, n.z - b.z) + Math.PI) * Math.min(1, dt * 2);
        const flying = b.y > n.y + 0.8, f = flying ? Math.sin(t * 14 + j) * 0.8 : 0.1 + Math.sin(t * 2 + j) * 0.05; b.wl.rotation.z = f; b.wr.rotation.z = -f;
      });
    });
    // ---------- Pampa ----------
    this.pampa(dt, st, cp);
    // ---------- cuerda de tambores ----------
    if (this.drumOn) this.drummers.forEach((d, i) => { d.x += Math.sin(t * 0.35) * 0.9 * dt; const x = d.x + Math.sin(t * 0.35) * 0, y = CITY_Y + Math.abs(Math.sin(t * 6.1 + i)) * 0.12; d.group.position.set(x, y, 37.4 + (i % 2) * 0.5); d.group.rotation.y = Math.PI + Math.sin(t * 3.05 + i) * 0.25; d.armR.rotation.x = -1.0 + Math.abs(Math.sin(t * 12.2 + i * 0.7)) * -0.8; d.armL.rotation.x = -0.7 + Math.sin(t * 6.1 + i) * 0.3; const s = Math.sin(t * 6.1 + i); d.legL.rotation.x = s * 0.4; d.legR.rotation.x = -s * 0.4; });
    // la fiesta del final termina después de un rato y cada uno vuelve a lo suyo
    if (A.gathered && g.missions.free && !g.cine) { this.partyT += dt; if (this.partyT > 45) { A.gather(false); this.partyT = 0; } } else this.partyT = 0;
  }

  gatherPose(c, ci, dt, party) {   // público a los lados del escenario
    const t = this.t, gr = c.group, k = Math.floor(ci / 2), ax = (ci % 2 ? -39.2 : -54.6) + (k % 3) * 2.6, az = 36.9 + Math.floor(k / 3) * 1.9, dance = this.g.actors.dancing;
    gr.position.set(ax, CITY_Y + Math.abs(Math.sin(t * (dance ? 6.1 : 8) + c.phase)) * (party ? 0.4 : 0.05), az); gr.rotation.y += angDiff(gr.rotation.y, Math.atan2(-44 - ax, 32.6 - az) + (dance ? Math.sin(t * 3 + ci) * 0.4 : 0)) * Math.min(1, dt * 5);
    c.legL.rotation.x = c.legR.rotation.x = 0;
    if (dance) { const s = Math.sin(t * 6.1 + c.phase); c.armL.rotation.x = -1.4 - s; c.armR.rotation.x = -1.4 + s; c.legL.rotation.x = s * 0.4; c.legR.rotation.x = -s * 0.4; }
    else { c.armL.rotation.x = party ? -2.6 + Math.sin(t * 14 + c.phase) * 0.3 : 0; c.armR.rotation.x = party ? -2.6 - Math.sin(t * 14 + c.phase) * 0.3 : 0; }
  }
  reactPose(c, dt, cp, party) {   // festejo, saludo o fiesta
    const t = this.t, gr = c.group;
    if (party || this.cheerT > 0) { gr.position.y += Math.abs(Math.sin(t * 8 + c.phase)) * 0.4; c.armL.rotation.x = -2.6 + Math.sin(t * 14 + c.phase) * 0.3; c.armR.rotation.x = -2.6 - Math.sin(t * 14 + c.phase) * 0.3; gr.rotation.y += angDiff(gr.rotation.y, Math.atan2(cp.x - gr.position.x, cp.z - gr.position.z)) * Math.min(1, dt * 5); c.umb.visible = false; }
    else if (c.waveT > 0) { c.armR.rotation.x = -2.7 + Math.sin(t * 12) * 0.3; c.armR.rotation.z = 0; gr.rotation.y += angDiff(gr.rotation.y, Math.atan2(cp.x - gr.position.x, cp.z - gr.position.z)) * Math.min(1, dt * 6); }
  }

  mainNpcs(dt, st, cp) {
    const g = this.g, A = g.actors, t = this.t, busy = A.gathered || g.cine;
    for (const k in ROUTES) {
      const n = A.npc[k], W = this.walk[k], R = ROUTES[k], gr = n.group, it = g.world.inter['npc:' + k];
      if (busy) { W.moving = false; if (it) { it.x = gr.position.x; it.z = gr.position.z + 0.9; it.group.position.x = it.x; it.group.position.z = it.z; } continue; }
      const pt = R.pts[W.i], near = Math.hypot(cp.x - W.x, cp.z - W.z) < 7 || st.talking === k || g.mg.active;
      const dx = pt[0] - W.x, dz = pt[1] - W.z, d = Math.hypot(dx, dz);
      if (d > 0.15) { W.moving = !near; if (W.moving) { const s = Math.min(d, R.speed * dt); W.x += dx / d * s; W.z += dz / d * s; W.h = (W.h == null ? gr.rotation.y : W.h) + angDiff(W.h == null ? gr.rotation.y : W.h, Math.atan2(dx, dz)) * Math.min(1, dt * 6); gr.rotation.y = W.h; } }
      else { W.moving = false; W.wait -= near ? 0 : dt; if (W.wait <= 0) { W.i = (W.i + 1) % R.pts.length; W.wait = R.pts[W.i][2]; } }
      const pose = !W.moving && d <= 0.15 && !near ? pt[3] : null, y = g.world.groundAt(W.x, W.z);
      gr.position.x = W.x; gr.position.z = W.z; gr.position.y = y - (pose === 'sit' ? 0.4 : 0);
      if (!W.moving) W.h = gr.rotation.y;
      if (W.moving) { const s = Math.sin(t * 6 + n.phase) * 0.6; n.legL.rotation.x = s; n.legR.rotation.x = -s; }
      else { n.legL.rotation.x = n.legR.rotation.x = pose === 'sit' ? -1.45 : 0; }
      if (pose === 'sit') gr.rotation.y += angDiff(gr.rotation.y, Math.atan2(33.6 - W.x, 27.8 - W.z)) * Math.min(1, dt * 4);
      if (pose === 'look') { gr.rotation.y += angDiff(gr.rotation.y, Math.atan2(60 - W.x, 5 - W.z)) * Math.min(1, dt * 4); n.armL.rotation.x = -2.5; n.armL.rotation.z = -0.4; } else n.armL.rotation.z = 0;
      if (it) { it.x = W.x; it.z = W.z; it.group.position.x = W.x; it.group.position.z = W.z; }
    }
    // baile en el escenario
    if (A.dancing) for (const k in A.npc) { const n = A.npc[k], s = Math.sin(t * 6.1 + n.phase); n.armL.rotation.x = -1.3 - s; n.armR.rotation.x = -1.3 + s; n.legL.rotation.x = s * 0.4; n.legR.rotation.x = -s * 0.4; n.group.position.y = 3.0 + Math.abs(s) * 0.2; n.group.rotation.y = Math.sin(t * 3.05 + n.phase) * 0.5; }
    // los vecinos nuevos también van a la fiesta
    const S = g.social; if (S && S.npc) { const spots = { rosa: [-31.5, 37.5], beto: [-31.5, 39.6], sofi: [-57, 38] };
      for (const k in spots) { const n = S.npc[k], it = g.world.inter['npc:' + k]; if (!n.home0) n.home0 = n.group.position.clone();
        const p = A.gathered ? new THREE.Vector3(spots[k][0], CITY_Y, spots[k][1]) : n.home0; if (n.group.position.distanceToSquared(p) > 0.01) { n.group.position.copy(p); if (it) { it.x = p.x; it.z = p.z + 0.9; it.group.position.x = it.x; it.group.position.z = it.z; } }
        if (A.gathered && A.dancing) { const s = Math.sin(t * 6.1 + n.ph); n.armL.rotation.x = -1.4 - s; n.armR.rotation.x = -1.4 + s; n.group.position.y = CITY_Y + Math.abs(s) * 0.2; } } }
  }

  lucia(dt, st, cp) {
    const g = this.g, A = g.actors, L = this.lu, bus = A.buses[0], n = A.npc.lucia, M = g.missions;
    const canDrive = st.busesOn && !['urbano', 'ahorro'].includes(M.key) && !(g.social && g.social.active === 'lucia') && !A.gathered && !g.cine && !(g.tut && g.tut.on) && st.talking !== 'lucia';
    if (!canDrive && L.away) { L.away = false; L.rest = 30; }
    L.rest -= dt;
    const s = bus.state === 'loop' ? ((bus.s % LOOP) + LOOP) % LOOP : null, crossed = s != null && L.lastS != null && L.lastS < 4 && s >= 4; L.lastS = s;
    if (crossed) {
      if (!L.away && canDrive && L.rest <= 0 && Math.hypot(cp.x - n.home.x, cp.z - n.home.z) > 10) { L.away = true; L.laps = 0; g.audio.honk(); }
      else if (L.away && ++L.laps >= 1) { L.away = false; L.rest = 40; }
    }
    n.group.visible = !L.away; this.luTag.visible = L.away;
    if (L.away) { const b = bus.g.position; this.luTag.position.set(b.x, b.y + 5.2, b.z); if (Math.hypot(cp.x - b.x, cp.z - b.z) < 9) { if (!L.honked) { L.honked = true; g.audio.honk(); } } else L.honked = false; }
  }

  pampa(dt, st, cp) {
    const g = this.g, D = this.dog, w = g.world, t = this.t, play = g.mode === 'play' && !g.cine;
    D.cool -= dt; D.bark -= dt;
    const dC = Math.hypot(cp.x - D.x, cp.z - D.z);
    if (play && D.follow <= 0 && D.cool <= 0 && dC < 6) { D.follow = 30; g.audio.bark(clamp(1 - dC / 20, 0.4, 1)); if (!this.dogTip) { this.dogTip = true; g.ui.note('Pampa, el perro de Don Mateo, te acompaña un rato.', 4); } }
    let tx, tz, sp;
    if (D.follow > 0 && play && dC < 60) { D.follow -= dt; const hx = Math.sin(g.capi.heading), hz = Math.cos(g.capi.heading); tx = cp.x - hx * 2.2 + hz * 1.2; tz = cp.z - hz * 2.2 - hx * 1.2; sp = dC > 5 ? 7.5 : 4; if (D.follow <= 0) D.cool = 40; if (g.capi.vy > 3 && D.bark <= 0) { D.bark = 1.5; g.audio.bark(0.7); } }
    else { if (D.follow > 0) { D.follow = 0; D.cool = 40; } tx = PAMPA[0] + Math.sin(t * 0.2) * 1.5; tz = PAMPA[1] + Math.cos(t * 0.15); sp = 2.2; if (Math.hypot(tx - D.x, tz - D.z) > 70) { D.x = tx; D.z = tz; } }
    const dx = tx - D.x, dz = tz - D.z, d = Math.hypot(dx, dz); let moving = false;
    if (d > 0.4) { const s = Math.min(d, sp * dt), nx = D.x + dx / d * s, nz = D.z + dz / d * s; if (w.terrainAt(nx, nz) > w.waterAt(nx, nz) - 0.1) { const p = new THREE.Vector3(nx, 0, nz); w.resolve(p, 0.4, w.groundAt(nx, nz)); D.x = p.x; D.z = p.z; moving = true; } D.h += angDiff(D.h, Math.atan2(dx, dz)) * Math.min(1, dt * 7); }
    else D.h += angDiff(D.h, Math.atan2(cp.x - D.x, cp.z - D.z)) * Math.min(1, dt * 3);
    const run = moving ? Math.sin(t * (sp > 5 ? 16 : 10)) : 0; D.g.position.set(D.x, w.groundAt(D.x, D.z) + Math.abs(run) * 0.06, D.z); D.g.rotation.y = D.h;
    D.legs.forEach((l, k) => { l.rotation.x = run * (k === 0 || k === 3 ? 0.7 : -0.7); }); D.tail.rotation.y = Math.sin(t * (D.follow > 0 ? 18 : 6)) * 0.6; D.head.rotation.x = moving ? 0.1 : Math.sin(t * 1.3) * 0.1;
  }
}
