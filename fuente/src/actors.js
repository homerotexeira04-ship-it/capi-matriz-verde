// Personajes secundarios, ciudadanos, ómnibus eléctricos y fauna autóctona (teros).
import * as THREE from 'three';
import { clamp, lerp, damp, angDiff } from './util.js';
import { POS, CITY_Y } from './terrain.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const VC = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.85 });
// Fusiona las mallas hijas directas de un grupo en una sola malla con color por vértice
function fuse(group) {
  const geos = [], keep = [];
  for (const ch of [...group.children]) {
    if (!ch.isMesh || ch.userData.keep) { keep.push(ch); continue; }
    ch.updateMatrix(); const g = ch.geometry.index ? ch.geometry.toNonIndexed() : ch.geometry.clone(); g.applyMatrix4(ch.matrix);
    const n = g.attributes.position.count, a = new Float32Array(n * 3), c = ch.material.color; for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(a, 3)); if (g.attributes.uv) g.deleteAttribute('uv'); geos.push(g); group.remove(ch);
  }
  if (geos.length) { const m = new THREE.Mesh(mergeGeometries(geos, false), VC); m.castShadow = true; group.add(m); }
  return group;
}

const cache = {};
const mat = (hex, o = {}) => cache[hex] || (cache[hex] = new THREE.MeshStandardMaterial({ color: hex, flatShading: true, roughness: 0.85, ...o }));
const part = (geo, hex, x, y, z, parent) => { const m = new THREE.Mesh(geo, mat(hex)); m.position.set(x, y, z); m.castShadow = true; parent.add(m); return m; };
const BOX = (a, b, c) => new THREE.BoxGeometry(a, b, c);

export function makePerson(o) {
  const g = new THREE.Group(), s = o.scale || 1;
  const legL = new THREE.Group(), legR = new THREE.Group(), armL = new THREE.Group(), armR = new THREE.Group();
  legL.position.set(-0.17, 0.82, 0); legR.position.set(0.17, 0.82, 0); armL.position.set(-0.47, 1.62, 0); armR.position.set(0.47, 1.62, 0);
  part(BOX(0.25, 0.82, 0.28), o.pants, 0, -0.41, 0, legL); part(BOX(0.25, 0.82, 0.28), o.pants, 0, -0.41, 0, legR);
  part(BOX(0.27, 0.14, 0.4), 0x2a2420, 0, -0.78, 0.06, legL); part(BOX(0.27, 0.14, 0.4), 0x2a2420, 0, -0.78, 0.06, legR);
  part(BOX(0.74, 0.86, 0.44), o.shirt, 0, 1.25, 0, g);
  if (o.jacket) { part(BOX(0.78, 0.88, 0.2), o.jacket, 0, 1.25, -0.14, g); part(BOX(0.24, 0.88, 0.47), o.jacket, -0.27, 1.25, 0, g); part(BOX(0.24, 0.88, 0.47), o.jacket, 0.27, 1.25, 0, g); }
  if (o.poncho) part(new THREE.ConeGeometry(0.72, 0.95, 4), o.poncho, 0, 1.3, 0, g).rotation.y = Math.PI / 4;
  part(BOX(0.2, 0.72, 0.22), o.jacket || o.sleeve || o.shirt, 0, -0.34, 0, armL); part(BOX(0.2, 0.72, 0.22), o.jacket || o.sleeve || o.shirt, 0, -0.34, 0, armR);
  part(BOX(0.17, 0.16, 0.18), o.skin, 0, -0.76, 0, armL); part(BOX(0.17, 0.16, 0.18), o.skin, 0, -0.76, 0, armR);
  const head = new THREE.Group(); head.position.set(0, 2.02, 0);
  part(new THREE.IcosahedronGeometry(0.34, 1), o.skin, 0, 0, 0, head);
  part(BOX(0.07, 0.09, 0.04), 0x20242c, -0.12, 0.04, 0.31, head); part(BOX(0.07, 0.09, 0.04), 0x20242c, 0.12, 0.04, 0.31, head);
  if (o.hair) { part(BOX(0.62, 0.24, 0.58), o.hair, 0, 0.2, -0.06, head); part(BOX(0.6, 0.5, 0.2), o.hair, 0, -0.02, -0.26, head); }
  if (o.pony) part(BOX(0.16, 0.5, 0.16), o.hair, 0, -0.25, -0.4, head);
  if (o.bigote) part(BOX(0.3, 0.07, 0.06), 0xd8d8d8, 0, -0.1, 0.32, head);
  if (o.hat === 'casco') { part(new THREE.SphereGeometry(0.38, 10, 6, 0, 6.3, 0, Math.PI / 2), o.hatColor, 0, 0.12, 0, head); part(new THREE.CylinderGeometry(0.44, 0.44, 0.05, 10), o.hatColor, 0, 0.13, 0.05, head); }
  if (o.hat === 'boina') { const bo = part(new THREE.IcosahedronGeometry(0.4, 1), o.hatColor, 0.06, 0.26, 0, head); bo.scale.set(1.1, 0.35, 1.1); }
  if (o.hat === 'gorra') { part(new THREE.SphereGeometry(0.36, 10, 6, 0, 6.3, 0, Math.PI / 2), o.hatColor, 0, 0.14, 0, head); part(BOX(0.4, 0.05, 0.3), o.hatColor, 0, 0.17, 0.38, head); }
  if (o.extra === 'tablet') part(BOX(0.36, 0.28, 0.04), 0x4fd6ff, 0.02, -0.72, 0.16, armL);
  if (o.extra === 'mate') { part(new THREE.SphereGeometry(0.11, 6, 5), 0x7a4b23, 0, -0.84, 0.06, armR); part(new THREE.CylinderGeometry(0.015, 0.015, 0.2, 4), 0xd8d8d8, 0.03, -0.72, 0.08, armR); part(new THREE.CylinderGeometry(0.08, 0.08, 0.42, 6), 0x9aa3ad, -0.16, -0.36, 0.1, armL); }
  [g, legL, legR, armL, armR, head].forEach(fuse);
  g.add(legL, legR, armL, armR, head); g.scale.setScalar(s);
  return { group: g, legL, legR, armL, armR, head, phase: Math.random() * 6 };
}

function makeTero() {
  const g = new THREE.Group();
  const body = part(new THREE.IcosahedronGeometry(0.28, 1), 0x9a8c7c, 0, 0, 0, g); body.scale.set(0.8, 0.75, 1.5);
  part(new THREE.IcosahedronGeometry(0.2, 0), 0x1c1c1e, 0, -0.03, 0.2, g).scale.set(0.9, 0.9, 1);
  part(new THREE.IcosahedronGeometry(0.2, 0), 0xf4f1ea, 0, -0.1, -0.12, g).scale.set(0.9, 0.7, 1.4);
  part(new THREE.IcosahedronGeometry(0.14, 0), 0x8a8f96, 0, 0.16, 0.4, g);
  part(BOX(0.03, 0.03, 0.22), 0x1c1c1e, 0, 0.3, 0.3, g);
  part(BOX(0.04, 0.04, 0.2), 0xd7263d, 0, 0.14, 0.58, g);
  const wg = new THREE.BufferGeometry(); wg.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0.3, 0, 0, -0.3, 0.95, 0, -0.1], 3)); wg.computeVertexNormals();
  const wm = new THREE.MeshStandardMaterial({ color: 0x2a2a2e, side: THREE.DoubleSide, flatShading: true });
  fuse(g);
  const wl = new THREE.Mesh(wg, wm), wr = new THREE.Mesh(wg, wm); wr.scale.x = -1; g.add(wl, wr);
  return { group: g, wl, wr };
}

function makeBus(headMat) {
  const g = new THREE.Group();
  part(BOX(2.5, 2.3, 8.2), 0xf4f1ea, 0, 1.75, 0, g); part(BOX(2.54, 0.7, 8.24), 0x35b3e8, 0, 1.0, 0, g); part(BOX(2.54, 0.16, 8.24), 0x7ee081, 0, 1.45, 0, g);
  part(BOX(2.56, 0.85, 7.2), 0x1d2a38, 0, 2.2, -0.2, g); part(BOX(2.3, 0.95, 0.1), 0x1d2a38, 0, 2.15, 4.08, g);
  part(BOX(1.9, 0.3, 4.6), 0xdfe6ea, 0, 3.05, -0.6, g);
  for (const sx of [-1.15, 1.15]) for (const sz of [-2.7, 2.7]) part(new THREE.CylinderGeometry(0.48, 0.48, 0.3, 10), 0x1c1e22, sx, 0.5, sz, g).rotation.z = Math.PI / 2;
  fuse(g);
  for (const sx of [-0.85, 0.85]) { const h = new THREE.Mesh(BOX(0.4, 0.22, 0.06), headMat); h.position.set(sx, 0.95, 4.13); g.add(h); }
  return g;
}

const LOOP = 240;
function loopPoint(s, out) {
  s = ((s % LOOP) + LOOP) % LOOP;
  if (s < 64) { out.x = -12 - s; out.z = 70; out.h = -Math.PI / 2; }
  else if (s < 120) { out.x = -77; out.z = 69 - (s - 64); out.h = Math.PI; }
  else if (s < 184) { out.x = -76 + (s - 120); out.z = 12; out.h = Math.PI / 2; }
  else { out.x = -11; out.z = 13 + (s - 184); out.h = 0; }
  return out;
}

export class Actors {
  constructor(world, scene) {
    this.w = world; this.scene = scene; this.t = 0; this.celebrate = 0; this.gathered = false;
    const Y = CITY_Y;
    this.npc = {
      valeria: this.addNpc(makePerson({ skin: 0xd9a17a, shirt: 0xf4f1ea, jacket: 0x23395d, pants: 0x2b2d42, hair: 0x3b2314, hat: 'casco', hatColor: 0xf4f4f4, extra: 'tablet' }), POS.valeria[0], Y, POS.valeria[1], Math.PI),
      mateo: this.addNpc(makePerson({ skin: 0xc58b62, shirt: 0xe9dcc0, poncho: 0xa5522d, pants: 0x50623a, hat: 'boina', hatColor: 0x1e1e22, bigote: true, extra: 'mate', sleeve: 0xe9dcc0 }), POS.mateo[0], world.groundAt(POS.mateo[0], POS.mateo[1]), POS.mateo[1], -2.2),
      lucia: this.addNpc(makePerson({ skin: 0xe0ac86, shirt: 0x4aa3d8, pants: 0x1f2f4f, hair: 0x1a1412, pony: true, hat: 'gorra', hatColor: 0x1f2f4f }), POS.lucia[0], Y, POS.lucia[1], Math.PI / 2)
    };
    // Ciudadanos con termo y mate
    this.citizens = [];
    const cols = [0xef476f, 0xffd166, 0x06d6a0, 0x118ab2, 0xf4a261, 0x9b5de5, 0xf15bb5, 0x2a9d8f, 0xe76f51, 0x8ecae6], skins = [0xe0ac86, 0xc58b62, 0xf1c9a5, 0x9a6b4b];
    for (let i = 0; i < 15; i++) {
      const p = makePerson({ skin: skins[i % 4], shirt: cols[i % cols.length], pants: [0x2b2d42, 0x4a5568, 0x6b4f3a][i % 3], hair: [0x2a1a10, 0x5a3a1a, 0xc9a35a, 0x777777][i % 4], extra: i % 2 ? 'mate' : null, scale: 0.9 + (i % 3) * 0.04 });
      scene.add(p.group);
      if (i < 11) Object.assign(p, { kind: 'rambla', x: -78 + i * 6, z: 72.3 + (i % 3) * 1.0, dir: i % 2 ? 1 : -1, speed: 1.1 + (i % 4) * 0.25 });
      else if (i < 13) Object.assign(p, { kind: 'west', x: -80.8 + (i % 2) * 1.2, z: 20 + i * 3, dir: i % 2 ? 1 : -1, speed: 1.2 });
      else Object.assign(p, { kind: 'plaza', a: i * 2, speed: 0.35 });
      this.citizens.push(p);
    }
    // Teros
    this.teros = [];
    for (let i = 0; i < 6; i++) { const t = makeTero(); scene.add(t.group); Object.assign(t, { hx: [20, 60, 80, -20, 10, 45][i], hz: [0, 30, -20, -30, 45, -5][i], a: i * 1.3, target: null, x: 0, y: 6, z: 0, call: 2 + i }); this.teros.push(t); }
    // Ómnibus eléctricos
    this.headMat = new THREE.MeshStandardMaterial({ color: 0xfff4c2, emissive: 0xfff0b0, emissiveIntensity: 0 });
    this.buses = [];
    [-24, -20, -16].forEach((x, i) => { const g = makeBus(this.headMat); g.position.set(x, 2.2, 62.8); scene.add(g); this.buses.push({ g, state: 'parked', px: x, s: 0, wait: i * 4.5, x, z: 62.8, h: 0 }); });
    this.tmp = { x: 0, z: 0, h: 0 };
  }
  addNpc(p, x, y, z, ry) { p.group.position.set(x, y, z); p.group.rotation.y = ry; p.home = { x, y, z, ry }; this.scene.add(p.group); return p; }

  // Ceremonia final: todos los personajes se reúnen en la rambla
  gather(on) {
    this.gathered = on;
    const spots = { valeria: [-47.4, 32.6], mateo: [-40.3, 33.1], lucia: [-46.2, 31.3] };   // sobre el escenario de la plaza
    for (const k in this.npc) { const n = this.npc[k], h = on ? { x: spots[k][0], y: 3.0, z: spots[k][1], ry: 0 } : n.home; n.group.position.set(h.x, h.y, h.z); n.group.rotation.y = h.ry; n.baseY = h.y; }
  }

  update(dt, st) {
    this.t += dt; const t = this.t, w = this.w;
    this.celebrate = Math.max(0, this.celebrate - dt);
    const party = this.celebrate > 0;
    w.dynCircles = [];
    for (const k in this.npc) {
      const n = this.npc[k], g = n.group, dx = st.capi.x - g.position.x, dz = st.capi.z - g.position.z, d = Math.hypot(dx, dz);
      if (st.cine) g.rotation.y += angDiff(g.rotation.y, 0) * Math.min(1, dt * 4); else if (d < 14) g.rotation.y += angDiff(g.rotation.y, Math.atan2(dx, dz)) * Math.min(1, dt * 4);
      const talk = st.talking === k;
      n.armR.rotation.x = damp(n.armR.rotation.x, talk ? -1.2 + Math.sin(t * 7) * 0.35 : party ? -2.7 : k === 'mateo' ? -0.9 : 0, 8, dt);
      n.armL.rotation.x = damp(n.armL.rotation.x, party ? -2.7 + Math.sin(t * 12) * 0.2 : k === 'valeria' ? -0.9 : 0, 8, dt);
      n.head.rotation.x = talk ? Math.sin(t * 6) * 0.06 : 0;
      g.position.y = (n.baseY != null ? n.baseY : n.home.y) + (party ? Math.abs(Math.sin(t * 7 + n.phase)) * 0.35 : Math.sin(t * 2 + n.phase) * 0.015);
      w.dynCircles.push({ x: g.position.x, z: g.position.z, r: 0.6 });
    }
    this.citizens.forEach((c, ci) => {
      const g = c.group; let moving = !party;
      if (this.gathered) {   // público a los lados del escenario
        const k = Math.floor(ci / 2), ax = (ci % 2 ? -39.2 : -54.6) + (k % 3) * 2.6, az = 36.9 + Math.floor(k / 3) * 1.9;
        g.position.set(ax, CITY_Y + Math.abs(Math.sin(t * 8 + c.phase)) * (party ? 0.4 : 0.05), az); g.rotation.y += angDiff(g.rotation.y, Math.atan2(-44 - ax, 32.6 - az)) * Math.min(1, dt * 5);
        c.legL.rotation.x = c.legR.rotation.x = 0; c.armL.rotation.x = party ? -2.6 + Math.sin(t * 14 + c.phase) * 0.3 : 0; c.armR.rotation.x = party ? -2.6 - Math.sin(t * 14 + c.phase) * 0.3 : 0;
        return;
      }
      if (c.kind === 'rambla') { if (moving) c.x += c.dir * c.speed * dt; if (c.x > -13) c.dir = -1; if (c.x < -81) c.dir = 1; g.position.set(c.x, CITY_Y, c.z); g.rotation.y = damp(g.rotation.y, c.dir > 0 ? Math.PI / 2 : -Math.PI / 2, 6, dt); }
      else if (c.kind === 'west') { if (moving) c.z += c.dir * c.speed * dt; if (c.z > 70) c.dir = -1; if (c.z < 14) c.dir = 1; g.position.set(c.x, CITY_Y, c.z); g.rotation.y = damp(g.rotation.y, c.dir > 0 ? 0 : Math.PI, 6, dt); }
      else { if (moving) c.a += c.speed * dt; g.position.set(POS.plaza[0] + Math.cos(c.a) * 5.2, CITY_Y, POS.plaza[1] + Math.sin(c.a) * 5.2); g.rotation.y = -c.a; }
      const ph = t * 6 * c.speed + c.phase, sw = moving ? Math.sin(ph) * 0.6 : 0;
      c.legL.rotation.x = sw; c.legR.rotation.x = -sw;
      if (party) { g.position.y += Math.abs(Math.sin(t * 8 + c.phase)) * 0.4; c.armL.rotation.x = -2.6 + Math.sin(t * 14 + c.phase) * 0.3; c.armR.rotation.x = -2.6 - Math.sin(t * 14 + c.phase) * 0.3; g.rotation.y += angDiff(g.rotation.y, Math.atan2(st.capi.x - g.position.x, st.capi.z - g.position.z)) * Math.min(1, dt * 5); }
      else { c.armL.rotation.x = damp(c.armL.rotation.x, -sw * 0.6, 10, dt); c.armR.rotation.x = damp(c.armR.rotation.x, c.kind === 'plaza' ? -1.1 : sw * 0.6, 10, dt); }
    });
    // Teros: guían hacia los nodos averiados
    const needs = st.needs;
    this.teros.forEach((b, i) => {
      const tgt = needs.length ? needs[i % needs.length] : null;
      b.a += dt * (tgt ? 1.7 : 0.5);
      const cx = tgt ? tgt.x : b.hx, cz = tgt ? tgt.z : b.hz, r = tgt ? 3.2 + (i % 3) : 9 + i * 2, cy = (tgt ? tgt.y + 4.2 : w.terrainAt(cx, cz) + 7) + Math.sin(t * 2 + i) * 0.6;
      const gx = cx + Math.cos(b.a + i) * r, gz = cz + Math.sin(b.a + i) * r;
      const k = Math.min(1, dt * 1.6), px = b.x, pz = b.z;
      b.x = lerp(b.x, gx, k); b.y = lerp(b.y, cy, k); b.z = lerp(b.z, gz, k);
      b.group.position.set(b.x, b.y, b.z);
      if (Math.abs(b.x - px) + Math.abs(b.z - pz) > 1e-4) b.group.rotation.y = Math.atan2(b.x - px, b.z - pz);
      const f = Math.sin(t * 13 + i) * 0.7; b.wl.rotation.z = f; b.wr.rotation.z = -f;
      b.call -= dt;
      if (tgt && b.call < 0) { b.call = 2.5 + Math.random() * 3; const d = Math.hypot(st.capi.x - b.x, st.capi.z - b.z); if (d < 45) st.audio.tero(clamp(1 - d / 45, 0.1, 1)); }
    });
    // Ómnibus
    this.headMat.emissiveIntensity = st.night * 3;
    for (const b of this.buses) {
      if (b.state === 'parked' && st.busesOn) { b.wait -= dt; if (b.wait <= 0) b.state = 'leaving'; }
      if (!st.busesOn && b.state !== 'parked') { b.state = 'parked'; b.x = b.px; b.z = 62.8; b.h = 0; }
      if (b.state === 'leaving') { b.z += 5 * dt; b.h = 0; if (b.z >= 69.5) { b.state = 'loop'; b.s = -12 - b.x; } }
      else if (b.state === 'loop') { b.s += 9 * dt; const p = loopPoint(b.s, this.tmp); b.x = damp(b.x, p.x, 6, dt); b.z = damp(b.z, p.z, 6, dt); b.h += angDiff(b.h, p.h) * Math.min(1, dt * 3); }
      b.g.position.set(b.x, 2.12, b.z); b.g.rotation.y = b.h;
      w.dynCircles.push({ x: b.x, z: b.z, r: 2.0 });
      if (st.night > 0.3 && b.state !== 'parked') st.fx.glow.sprite(b.x + Math.sin(b.h) * 4.6, 3.1, b.z + Math.cos(b.h) * 4.6, 3.2, 0xfff0b0, 0.5 * st.night);
    }
  }
}
