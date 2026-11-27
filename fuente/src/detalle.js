// Detalle fino del suelo: matas de pasto que se mecen con el viento, flores silvestres y piedritas.
// Son decenas de miles de piezas chicas, en trozos de 48 m: solo se dibujan los trozos cerca de lo que mira la cámara.
import * as THREE from 'three';
import { rng, smooth, noise2 } from './util.js';
import { B, terrainH, waterAt, newMask } from './terrain.js';
import { windSway, groundColor } from './world.js';

const CH = 48;
export class Detalle {
  constructor(w) {
    this.w = w; this.chunks = []; const R = rng(8080), _c = new THREE.Color(), _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3();
    // máscara de caminos y edificios en una grilla de 1 m (para no sembrar pasto sobre el asfalto ni adentro de las casas)
    const W = B.maxX - B.minX, D = B.maxZ - B.minZ, NX = Math.ceil(W), NZ = Math.ceil(D), mask = new Uint8Array(NX * NZ);
    const mark = (x0, x1, z0, z1) => { for (let z = Math.max(0, Math.floor(z0 - B.minZ)); z <= Math.min(NZ - 1, Math.ceil(z1 - B.minZ)); z++) for (let x = Math.max(0, Math.floor(x0 - B.minX)); x <= Math.min(NX - 1, Math.ceil(x1 - B.minX)); x++) mask[z * NX + x] = 1; };
    for (const b of w.boxes) if (b.x0 < B.maxX && b.x1 > B.minX) mark(b.x0 - 0.4, b.x1 + 0.4, b.z0 - 0.4, b.z1 + 0.4);
    for (const p of w.platforms) if (p.x0 < B.maxX && p.x1 > B.minX) mark(p.x0, p.x1, p.z0, p.z1);
    for (const line of w.roads) for (let i = 0; i < line.length - 1; i++) { const [ax, az] = line[i], [bx, bz] = line[i + 1], L = Math.hypot(bx - ax, bz - az); for (let t = 0; t <= L; t += 0.8) { const x = ax + (bx - ax) * t / L, z = az + (bz - az) * t / L; mark(x - 2.3, x + 2.3, z - 2.3, z + 2.3); } }
    const free = (x, z) => { const i = Math.floor(z - B.minZ) * NX + Math.floor(x - B.minX); return i >= 0 && i < mask.length && !mask[i]; };
    // geometrías: mata de pasto (tres hojas cruzadas, oscura abajo y clara arriba), flor y piedrita
    const blades = [], cols = [];
    for (let k = 0; k < 5; k++) { const a = k * Math.PI * 2 / 5 + 0.3, c = Math.cos(a), s = Math.sin(a), lean = 0.32 + (k % 2) * 0.18, ht = k % 2 ? 0.7 : 1;
      blades.push(-s * 0.09, -1, c * 0.09, s * 0.09, -1, -c * 0.09, c * lean, -1 + 2 * ht, s * lean); cols.push(0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 1.12, 1.15, 1.05); }
    const tg = new THREE.BufferGeometry(); tg.setAttribute('position', new THREE.Float32BufferAttribute(blades, 3)); tg.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3)); tg.computeVertexNormals();
    const fg = new THREE.OctahedronGeometry(0.14, 0); fg.scale(1, 0.55, 1);
    const pg = new THREE.DodecahedronGeometry(0.2, 0);
    const tm = windSway(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, side: THREE.DoubleSide }), w.windU, 0.32, false);
    const fm = w.treeMats.fl;
    const FLOR = [0xf6f3e6, 0xf2d14b, 0xd58fd8, 0xf6f3e6, 0xffffff];
    const cells = new Map(), cell = (x, z) => { const k = Math.floor((x - B.minX) / CH) + ',' + Math.floor((z - B.minZ) / CH); if (!cells.has(k)) cells.set(k, { t: [], f: [], p: [], cx: 0, cz: 0, n: 0 }); return cells.get(k); };
    const STEP = 1.2;
    for (let z = B.minZ + 1; z < B.maxZ - 1; z += STEP) for (let x = B.minX + 1; x < B.maxX - 1; x += STEP) {
      const px = x + (R() - 0.5) * STEP * 1.2, pz = z + (R() - 0.5) * STEP * 1.2, h = terrainH(px, pz);
      if (h < waterAt(px, pz) + 0.35 || !free(px, pz)) continue;
      const nm = newMask(px, pz), dens = 0.35 + 0.45 * nm + 0.25 * smooth(0.35, 0.75, noise2(px * 0.06 + 3, pz * 0.06 - 5));
      if (R() > dens) continue;
      const hx = terrainH(px + 0.8, pz) - terrainH(px - 0.8, pz), hz = terrainH(px, pz + 0.8) - terrainH(px, pz - 0.8), ny = 1.6 / Math.hypot(hx, 1.6, hz);
      groundColor(_c, px, pz, h, ny);
      const green = _c.g > _c.r * 1.03 && _c.g > _c.b * 1.12;
      const C = cell(px, pz); C.cx += px; C.cz += pz; C.n++;
      if (ny < 0.8 || !green) { if (R() < 0.08) C.p.push([px, h, pz, 0.6 + R() * 0.9, 0x8a847c]); continue; }   // en la piedra y en la arena, alguna piedrita
      const tall = 0.24 + R() * 0.24 + nm * 0.16;
      _c.offsetHSL((R() - 0.5) * 0.03, 0.05, (R() - 0.35) * 0.1);
      C.t.push([px, h + tall / 2 - 0.03, pz, tall, _c.getHex()]);
      const fl = nm > 0.5 ? 0.004 : 0.022;
      if (R() < fl) C.f.push([px + 0.3, h + 0.13, pz, 1, FLOR[Math.floor(R() * FLOR.length)]]);
      if (R() < 0.012) C.p.push([px - 0.4, h, pz, 0.5 + R() * 0.8, R() < 0.5 ? 0x9a948a : 0x7f786e]);
    }
    const make = (geo, mat, list, kind) => {
      if (!list.length) return null; const m = new THREE.InstancedMesh(geo, mat, list.length);
      list.forEach(([x, y, z, s, c], i) => {
        if (kind === 't') _m.compose(_p.set(x, y, z), _q.setFromEuler(_e.set(0, R() * 6.28, 0)), _s.set(s * 1.3, s / 2, s * 1.3));
        else if (kind === 'p') _m.compose(_p.set(x, y - 0.05 * s, z), _q.setFromEuler(_e.set(R(), R() * 6, R())), _s.set(s, s * 0.6, s));
        else _m.compose(_p.set(x, y, z), _q.identity(), _s.set(s, s, s));
        m.setMatrixAt(i, _m); m.setColorAt(i, _c.set(c));
      });
      m.castShadow = false; m.receiveShadow = true; m.computeBoundingSphere(); return m;
    };
    for (const C of cells.values()) {
      const g = new THREE.Group(); g.visible = false; this.w.scene.add(g);
      for (const m of [make(tg, tm, C.t, 't'), make(fg, fm, C.f, 'f'), make(pg, fm, C.p, 'p')]) if (m) g.add(m);
      if (!g.children.length) { this.w.scene.remove(g); continue; }
      this.chunks.push({ g, x: C.cx / C.n, z: C.cz / C.n });
      this.count = (this.count || 0) + C.t.length;
    }
    this.t = 0;
  }
  // cada tanto, se prenden los trozos cerca de lo que mira la cámara (y ninguno si la cámara está muy lejos)
  update(dt, target, dist, inDest) {
    this.t -= dt; if (this.t > 0) return; this.t = 0.25;
    const far = dist > 150 || inDest, R2 = (dist < 60 ? 80 : 110) ** 2;
    for (const c of this.chunks) { const dx = c.x - target.x, dz = c.z - target.z; c.g.visible = !far && dx * dx + dz * dz < R2; }
  }
}
