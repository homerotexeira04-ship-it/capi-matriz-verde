// WorldBuilder (núcleo): relieve, agua, cielo, ciclo día/noche, lotes de geometría e instancias, colisiones.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { clamp, lerp, smooth, rng, fbm, noise2, keyAt, distPoly } from './util.js';
import { B, LAND, RES, DAM_Z, terrainH, waterAt, coastD, channelD, CHANNEL, westD, eastBank, westBank } from './terrain.js';

export const C = {
  cream: 0xf2e4c4, terra: 0xc8674a, ochre: 0xe2b25c, rose: 0xe9bba6, white: 0xf5f1e8, celeste: 0x8fcdea, concrete: 0xbdb5a8, concreteD: 0x9c958a,
  asphalt: 0x4b5058, sidewalk: 0xcfc9bc, granite: 0xdcab9c, steel: 0x77808c, steelD: 0x49505a, wood: 0x8a623c, yellow: 0xffc93c, cyan: 0x5ad1ff,
  red: 0xe5484d, glass: 0x2c3e50, gravel: 0xcdbb93, green: 0x5fae4a
};

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3(), _c = new THREE.Color(), _c2 = new THREE.Color();
const UNIT_BOX = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();
const jr = rng(77);

function paint(g, color, jitter) {
  const n = g.attributes.position.count, a = new Float32Array(n * 3);
  _c.set(color);
  if (jitter) _c.offsetHSL(0, 0, (jr() - 0.5) * jitter);
  for (let i = 0; i < n; i++) { a[i * 3] = _c.r; a[i * 3 + 1] = _c.g; a[i * 3 + 2] = _c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3));
  if (g.attributes.uv) g.deleteAttribute('uv');
  return g;
}

// Lote de geometría estática: miles de piezas low-poly fusionadas en una sola malla con color por vértice.
export class Batch {
  constructor() { this.list = []; }
  add(geo, color, x, y, z, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0, jitter = 0.03) {
    const g = geo.index ? geo.toNonIndexed() : geo.clone();
    _m.compose(_p.set(x, y, z), _q.setFromEuler(_e.set(rx, ry, rz)), _s.set(sx, sy, sz));
    g.applyMatrix4(_m);
    this.list.push(paint(g, color, jitter));
    return this;
  }
  box(x, y, z, sx, sy, sz, color, ry = 0, rx = 0, rz = 0) { return this.add(UNIT_BOX, color, x, y, z, sx, sy, sz, rx, ry, rz); }
  boxB(x, y, z, sx, sy, sz, color, ry = 0) { return this.add(UNIT_BOX, color, x, y + sy / 2, z, sx, sy, sz, 0, ry, 0); }
  cyl(x, y, z, rt, rb, h, color, seg = 8, rx = 0, ry = 0, rz = 0) { return this.add(new THREE.CylinderGeometry(rt, rb, h, seg), color, x, y + (rx || rz ? 0 : h / 2), z, 1, 1, 1, rx, ry, rz); }
  sph(x, y, z, r, color, sy = 1, detail = 1) { return this.add(new THREE.IcosahedronGeometry(r, detail), color, x, y, z, 1, sy, 1); }
  mesh(mat) {
    if (!this.list.length) return null;
    const g = mergeGeometries(this.list, false);
    this.list.forEach(x => x.dispose()); this.list = [];
    return new THREE.Mesh(g, mat);
  }
}

export function canvasTex(w, h, draw, opts = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (opts.repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(opts.repeat, opts.repeat); }
  if (opts.pixel) { t.magFilter = THREE.NearestFilter; }
  return t;
}
export function textTex(text, o = {}) {
  const W = o.w || 512, H = o.h || 128;
  return canvasTex(W, H, (g) => {
    if (o.bg) { g.fillStyle = o.bg; g.fillRect(0, 0, W, H); }
    if (o.border) { g.strokeStyle = o.border; g.lineWidth = 10; g.strokeRect(5, 5, W - 10, H - 10); }
    g.fillStyle = o.fg || '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
    let size = o.size || 64; g.font = `${size}px "Lilita One","Arial Black",Impact,sans-serif`;
    while (g.measureText(text).width > W - 40 && size > 12) { size -= 4; g.font = `${size}px "Lilita One","Arial Black",Impact,sans-serif`; }
    if (o.stroke) { g.lineWidth = 8; g.strokeStyle = o.stroke; g.lineJoin = 'round'; g.strokeText(text, W / 2, H / 2 + 4); }
    g.fillText(text, W / 2, H / 2 + 4);
  });
}

// Claves del ciclo horario: hora, cielo, horizonte/niebla, color del sol, intensidad solar, intensidad ambiente
const SKY = [
  [0, 0x0a1230, 0x101c40, 0x9db2ff, 1.0, 1.05],
  [5.2, 0x0e1736, 0x15224a, 0x9db2ff, 1.0, 1.05],
  [6.4, 0xf2a7b5, 0xf7c1b0, 0xffa98a, 1.5, 1.1],
  [7.6, 0xa5d6f2, 0xcfe6f2, 0xffe6c4, 2.5, 1.45],
  [12, 0x62bbf0, 0xbfe3f5, 0xffffff, 3.1, 1.7],
  [16.8, 0x7cc4ee, 0xcfe3ee, 0xfff0cf, 2.8, 1.55],
  [18.5, 0xf4a25a, 0xf8c27a, 0xff9648, 1.9, 1.15],
  [19.5, 0x4a3a78, 0x6a4a7a, 0xb07aa0, 0.9, 0.95],
  [20.4, 0x0c1434, 0x101c40, 0x9db2ff, 1.0, 1.05],
  [24, 0x0a1230, 0x101c40, 0x9db2ff, 1.0, 1.05]
];

const WATER_VS = `
uniform float uTime; varying vec3 vWorld;
#include <fog_pars_vertex>
void main(){
  vec4 w=modelMatrix*vec4(position,1.0);
  w.y+=sin(w.x*0.35+uTime*1.3)*0.10+sin(w.z*0.42-uTime*1.1)*0.09+sin((w.x+w.z)*0.18+uTime*0.7)*0.12;
  vWorld=w.xyz; vec4 mvPosition=viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
  #include <fog_vertex>
}`;
const WATER_FS = `
uniform vec3 uDeep; uniform vec3 uShallow; uniform vec3 uSunDir; uniform vec3 uSunColor; uniform vec3 uSky; uniform float uOpacity; uniform float uLight; uniform float uTime;
varying vec3 vWorld;
#include <fog_pars_fragment>
void main(){
  vec3 n=normalize(cross(dFdx(vWorld),dFdy(vWorld))); if(n.y<0.0) n=-n;
  vec3 v=normalize(cameraPosition-vWorld);
  float fres=pow(1.0-max(dot(n,v),0.0),2.0);
  vec3 col=mix(uDeep,uShallow,0.25+0.75*fres);
  col=mix(col,uSky,fres*0.45);
  float diff=max(dot(n,uSunDir),0.0);
  col*=uLight*(0.62+0.5*diff);
  float spec=pow(max(dot(n,normalize(uSunDir+v)),0.0),90.0);
  // reflejo del sol: un camino suave y destellos que titilan, en vez de una mancha blanca dura
  vec2 cell=floor(vWorld.xz*1.3); float h=fract(sin(dot(cell,vec2(12.9898,78.233)))*43758.5453);
  float tw=step(0.7,fract(h*7.0+uTime*(0.25+0.5*h)));
  col+=uSunColor*(smoothstep(0.2,0.95,spec)*0.3+smoothstep(0.3,0.7,spec)*tw*0.6);
  gl_FragColor=vec4(col,uOpacity);
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;

const TREE = {
  euca: { th: 6.4, tr: 0.2, tc: 0xddd6c8, crowns: [[0.72, 1.25, 1.9, 0x4d8f76], [1.0, 0.95, 1.5, 0x63a585]] },
  native: { th: 2.3, tr: 0.28, tc: 0x6b4a2f, crowns: [[1.05, 1.9, 1.5, 0x4f9a3f]] },
  ceibo: { th: 2.1, tr: 0.26, tc: 0x5f4630, crowns: [[1.0, 1.7, 1.25, 0x4c9442], [1.45, 0.9, 0.7, 0xe2383f]] },
  jaca: { th: 2.6, tr: 0.26, tc: 0x5a4636, crowns: [[1.05, 1.9, 1.4, 0x8f7fd6]] },
  ombu: { th: 2.6, tr: 1.0, tc: 0x7a6248, crowns: [[1.1, 4.6, 2.3, 0x3f8a3a], [1.5, 3.0, 1.7, 0x4b9a44]] },
  palm: { th: 6.2, tr: 0.26, tc: 0x8a6f4d, frond: 2.7, fc: 0x4f9a48 },
  butia: { th: 3.3, tr: 0.42, tc: 0x7b6a55, frond: 2.1, fc: 0x86a892 },
  naranjo: { th: 1.5, tr: 0.2, tc: 0x6b4a2f, crowns: [[1.05, 1.45, 1.2, 0x2f7d32]] },
  bush: { th: 0, tr: 0, tc: 0, crowns: [[0.5, 0.9, 0.7, 0x58a548]] },
  cipres: { th: 0.9, tr: 0.16, tc: 0x5a4636, crowns: [[2.9, 0.62, 2.7, 0x2f5f3e], [4.6, 0.36, 1.2, 0x376b45]] },
  pino: { th: 4.2, tr: 0.22, tc: 0x6b4a33, crowns: [[0.86, 1.25, 0.9, 0x2f5a3a], [1.08, 0.85, 0.75, 0x3b6b45]] }
};

export class World {
  constructor(scene, renderer) {
    this.scene = scene; this.renderer = renderer; this.rand = rng(20260);
    this.batch = new Batch(); this.cityBatch = new Batch(); this.winBatch = [new Batch(), new Batch(), new Batch()]; this.glassBatch = new Batch(); this.screenBatch = new Batch();
    this.platforms = []; this.boxes = []; this.circles = []; this.occ = []; this.inter = {}; this.interList = [];
    this.trees = []; this.lamps = []; this.houses = []; this.roads = []; this.updaters = []; this.dyn = {};
    this.lines = {}; this.time = 0; this.night = 0; this.power = [0, 0, 0]; this.flicker = 0;
    this.sunDir = new THREE.Vector3(0.5, 0.8, -0.3);
    this.makeMaterials();
    this.buildTerrain();
    this.buildWater();
    this.buildSky();
  }

  makeMaterials() {
    const grain = canvasTex(64, 64, (g) => {
      const r = rng(5);
      for (let y = 0; y < 64; y += 2) for (let x = 0; x < 64; x += 2) { const v = 222 + Math.floor(r() * 33); g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(x, y, 2, 2); }
    }, { repeat: 70 });
    // Planos de corte: abren un corredor en los edificios que tapan a Capi (vista en corte tipo maqueta)
    this.clip = [new THREE.Plane(new THREE.Vector3(0, -1, 0), 80), new THREE.Plane(new THREE.Vector3(1, 0, 0), 0), new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0), new THREE.Plane(new THREE.Vector3(0, 0, -1), 0)];
    this.mats = {
      city: new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.92, metalness: 0, side: THREE.DoubleSide, clippingPlanes: this.clip, clipIntersection: true }),
      solid: new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.92, metalness: 0 }),
      terrain: new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 1, metalness: 0, map: grain }),
      glass: new THREE.MeshStandardMaterial({ color: 0xaee3ff, transparent: true, opacity: 0.32, roughness: 0.15, metalness: 0.2, depthWrite: false }),
      win: [0, 1, 2].map(() => new THREE.MeshStandardMaterial({ color: 0x34495e, emissive: 0xffc56e, emissiveIntensity: 0, roughness: 0.4, clippingPlanes: this.clip, clipIntersection: true })),
      screen: new THREE.MeshStandardMaterial({ color: 0x103040, emissive: 0x4fd6ff, emissiveIntensity: 1.1, roughness: 0.4 }),
      bulb: new THREE.MeshStandardMaterial({ color: 0xfff6dd, emissive: 0xffe6a8, emissiveIntensity: 0 }),
      beacon: new THREE.MeshStandardMaterial({ color: 0x802020, emissive: 0xff2a2a, emissiveIntensity: 0 }),
      charger: new THREE.MeshStandardMaterial({ color: 0x1b3a2a, emissive: 0x4dffa0, emissiveIntensity: 0 }),
      pool: new THREE.MeshBasicMaterial({
        map: canvasTex(64, 64, (g) => { const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,225,160,0.85)'); gr.addColorStop(1, 'rgba(255,225,160,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); }),
        transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending
      })
    };
  }

  // ---------- Relieve ----------
  buildTerrain() {
    const W = B.maxX - B.minX, D = B.maxZ - B.minZ, N = Math.round(W / 1.5);   // celdas de 1,5 (el diorama es cuadrado)
    this.N = N; this.cell = W / N;
    const g = new THREE.PlaneGeometry(W, D, N, N);
    g.rotateX(-Math.PI / 2); g.translate((B.minX + B.maxX) / 2, 0, (B.minZ + B.maxZ) / 2);
    const pos = g.attributes.position, n = pos.count;
    this.hgrid = new Float32Array(n);
    for (let i = 0; i < n; i++) { const h = terrainH(pos.getX(i), pos.getZ(i)); this.hgrid[i] = h; pos.setY(i, h); }
    g.computeVertexNormals();
    const col = new Float32Array(n * 3), nor = g.attributes.normal;
    for (let i = 0; i < n; i++) { groundColor(_c, pos.getX(i), pos.getZ(i), this.hgrid[i], nor.getY(i)); col[i * 3] = _c.r; col[i * 3 + 1] = _c.g; col[i * 3 + 2] = _c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const m = new THREE.Mesh(g, this.mats.terrain); m.receiveShadow = true;
    this.scene.add(m); this.terrain = m;

    // Bordes cortados del diorama (sección de suelo) y zócalo de maqueta
    const sk = [], skc = [], ws = [];
    const edge = (ax, az, bx, bz, steps) => {
      for (let i = 0; i < steps; i++) {
        const t0 = i / steps, t1 = (i + 1) / steps;
        const x0 = lerp(ax, bx, t0), z0 = lerp(az, bz, t0), x1 = lerp(ax, bx, t1), z1 = lerp(az, bz, t1);
        const h0 = terrainH(x0, z0), h1 = terrainH(x1, z1);
        sk.push(x0, h0, z0, x1, h1, z1, x1, -9, z1, x0, h0, z0, x1, -9, z1, x0, -9, z0);
        for (let k = 0; k < 6; k++) { const top = k === 0 || k === 1 || k === 3; _c.set(top ? 0x8a6540 : 0x4a3524); skc.push(_c.r, _c.g, _c.b); }
        const w0 = waterAt(x0, z0), w1 = waterAt(x1, z1);
        if (h0 < w0 - 0.02 || h1 < w1 - 0.02) {
          const wl = Math.max(w0, w1), ox = (z1 - z0) * 0.02, oz = -(x1 - x0) * 0.02;
          ws.push(x0 + ox, wl, z0 + oz, x1 + ox, wl, z1 + oz, x1 + ox, Math.min(h1, wl), z1 + oz, x0 + ox, wl, z0 + oz, x1 + ox, Math.min(h1, wl), z1 + oz, x0 + ox, Math.min(h0, wl), z0 + oz);
        }
      }
    };
    edge(B.minX, B.maxZ, B.maxX, B.maxZ, N); edge(B.maxX, B.maxZ, B.maxX, B.minZ, N);
    edge(B.maxX, B.minZ, B.minX, B.minZ, N); edge(B.minX, B.minZ, B.minX, B.maxZ, N);
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.Float32BufferAttribute(sk, 3)); sg.setAttribute('color', new THREE.Float32BufferAttribute(skc, 3)); sg.computeVertexNormals();
    this.scene.add(new THREE.Mesh(sg, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, side: THREE.DoubleSide })));
    const wg = new THREE.BufferGeometry(); wg.setAttribute('position', new THREE.Float32BufferAttribute(ws, 3));
    this.waterSide = new THREE.Mesh(wg, new THREE.MeshBasicMaterial({ color: 0x2f86c8, transparent: true, opacity: 0.72, side: THREE.DoubleSide, depthWrite: false }));
    this.scene.add(this.waterSide);
    const plinth = new THREE.Mesh(new THREE.BoxGeometry(W + 8, 3, D + 8), new THREE.MeshStandardMaterial({ color: 0x3b2a20, roughness: 0.8 }));
    plinth.position.set((B.minX + B.maxX) / 2, -10.5, (B.minZ + B.maxZ) / 2); plinth.receiveShadow = true; this.scene.add(plinth);
  }
  terrainAt(x, z) {
    const fx = clamp((x - B.minX) / this.cell, 0, this.N - 0.001), fz = clamp((z - B.minZ) / this.cell, 0, this.N - 0.001);
    const ix = Math.floor(fx), iz = Math.floor(fz), u = fx - ix, v = fz - iz, s = this.N + 1, g = this.hgrid;
    const a = g[iz * s + ix], b = g[iz * s + ix + 1], c = g[(iz + 1) * s + ix], d = g[(iz + 1) * s + ix + 1];
    return lerp(lerp(a, b, u), lerp(c, d, u), v);
  }
  groundAt(x, z, y = 1e9) {
    let g = this.terrainAt(x, z);
    for (const p of this.platforms) {
      if (x >= p.x0 && x <= p.x1 && z >= p.z0 && z <= p.z1) {
        const t = typeof p.top === 'function' ? p.top(x, z) : p.top;
        if (t > g && y >= t - 1.3) g = t;
      }
    }
    return g;
  }
  waterAt(x, z) { return waterAt(x, z); }
  addPlatform(x0, x1, z0, z1, top) { this.platforms.push({ x0, x1, z0, z1, top }); }
  addSolid(x0, x1, z0, z1, top = 1e9, walk = false) { this.boxes.push({ x0, x1, z0, z1, top }); if (walk) this.addPlatform(x0, x1, z0, z1, top); }
  addCircle(x, z, r) { this.circles.push({ x, z, r }); }
  addOcc(x0, x1, z0, z1, y1) { this.occ.push({ x0, x1, z0, z1, y1 }); }
  // ¿Algún edificio tapa el segmento entre la cámara y Capi?
  occluded(ox, oy, oz, tx, ty, tz) {
    const dx = tx - ox, dy = ty - oy, dz = tz - oz;
    for (const b of this.occ) {
      let t0 = 0, t1 = 0.97;
      const ax = [[ox, dx, b.x0, b.x1], [oy, dy, -5, b.y1], [oz, dz, b.z0, b.z1]];
      let hit = true;
      for (const [o, d, lo, hi] of ax) {
        if (Math.abs(d) < 1e-6) { if (o < lo || o > hi) { hit = false; break; } continue; }
        let a = (lo - o) / d, c = (hi - o) / d; if (a > c) { const s = a; a = c; c = s; }
        t0 = Math.max(t0, a); t1 = Math.min(t1, c); if (t0 > t1) { hit = false; break; }
      }
      if (hit) return true;
    }
    return false;
  }
  // Empuja un círculo (x,z,r) fuera de los obstáculos; devuelve true si hubo contacto.
  resolve(p, r, y) {
    let hit = false;
    for (const b of this.boxes) {
      if (y >= b.top - 0.5) continue;
      if (p.x < b.x0 - r || p.x > b.x1 + r || p.z < b.z0 - r || p.z > b.z1 + r) continue;
      const cx = clamp(p.x, b.x0, b.x1), cz = clamp(p.z, b.z0, b.z1);
      let dx = p.x - cx, dz = p.z - cz; const d2 = dx * dx + dz * dz;
      if (d2 >= r * r) continue;
      hit = true;
      if (d2 > 1e-8) { const d = Math.sqrt(d2); p.x = cx + dx / d * r; p.z = cz + dz / d * r; }
      else {
        const l = p.x - b.x0, rr = b.x1 - p.x, t = p.z - b.z0, bb = b.z1 - p.z, m = Math.min(l, rr, t, bb);
        if (m === l) p.x = b.x0 - r; else if (m === rr) p.x = b.x1 + r; else if (m === t) p.z = b.z0 - r; else p.z = b.z1 + r;
      }
    }
    for (const list of [this.circles, this.dynCircles || []]) for (const c of list) {
      if (!c.r) continue;
      const dx = p.x - c.x, dz = p.z - c.z, rr = r + c.r, d2 = dx * dx + dz * dz;
      if (d2 < rr * rr && d2 > 1e-8) { const d = Math.sqrt(d2); p.x = c.x + dx / d * rr; p.z = c.z + dz / d * rr; hit = true; }
    }
    return hit;
  }

  // ---------- Agua ----------
  buildWater() {
    const U = THREE.UniformsUtils.merge([THREE.UniformsLib.fog, {
      uTime: { value: 0 }, uDeep: { value: new THREE.Color(0x15589a) }, uShallow: { value: new THREE.Color(0x6fd0f2) },
      uSunDir: { value: new THREE.Vector3(0, 1, 0) }, uSunColor: { value: new THREE.Color(0xffffff) }, uSky: { value: new THREE.Color(0xbfe3f5) },
      uOpacity: { value: 0.86 }, uLight: { value: 1 }
    }]);
    this.waterMat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: WATER_VS, fragmentShader: WATER_FS, transparent: true, fog: true, depthWrite: false });
    const W = B.maxX - B.minX, D = B.maxZ - B.minZ;
    // río aguas abajo de la represa (cota 0); el lago de arriba lleva su propio espejo
    const rz0 = DAM_Z - 4, g = new THREE.PlaneGeometry(W, B.maxZ - rz0, 120, 100); g.rotateX(-Math.PI / 2);
    const river = new THREE.Mesh(g, this.waterMat); river.position.set((B.minX + B.maxX) / 2, 0, (rz0 + B.maxZ) / 2); river.renderOrder = 5; this.scene.add(river);
    // Lago de Salto Grande: espejo elevado aguas arriba de la represa
    const lx0 = B.minX, lx1 = eastBank(DAM_Z - 3) + 8, lz0 = B.minZ, lz1 = DAM_Z - 3;
    const rg = new THREE.PlaneGeometry(lx1 - lx0, lz1 - lz0, 60, 20); rg.rotateX(-Math.PI / 2);
    const res = new THREE.Mesh(rg, this.waterMat); res.position.set((lx0 + lx1) / 2, RES, (lz0 + lz1) / 2); res.renderOrder = 5; this.scene.add(res);
  }

  // ---------- Lluvia: trazos que caen alrededor de la cámara ----------
  updateRain(dt, st) {
    const N = 700;
    if (!this.rain) {
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 6), 3).setUsage(THREE.DynamicDrawUsage));
      this.rain = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0xcfe4f5, transparent: true, opacity: 0, depthWrite: false })); this.rain.frustumCulled = false; this.rain.renderOrder = 10; this.scene.add(this.rain);
      this.drops = new Float32Array(N * 3).fill(-999);
    }
    const on = this.storm > 0.05; this.rain.visible = on; if (!on) return;
    this.rain.material.opacity = 0.55 * this.storm;
    const G = st.grid, span = clamp((this.zoom || 60) * 1.6, 40, 170), wx = Math.cos(G.windDir) * 12, wz = Math.sin(G.windDir) * 7, p = this.rain.geometry.attributes.position.array, d = this.drops, len = 0.03 + span * 0.0006;
    for (let i = 0; i < N; i++) {
      let x = d[i * 3], y = d[i * 3 + 1], z = d[i * 3 + 2];
      y -= 46 * dt; x += wx * dt; z += wz * dt;
      if (y < st.focus.y - 3 || Math.abs(x - st.focus.x) > span / 2 || Math.abs(z - st.focus.z) > span / 2) { x = st.focus.x + (Math.random() - 0.5) * span; z = st.focus.z + (Math.random() - 0.5) * span; y = st.focus.y + 6 + Math.random() * 30; }
      d[i * 3] = x; d[i * 3 + 1] = y; d[i * 3 + 2] = z;
      p[i * 6] = x; p[i * 6 + 1] = y; p[i * 6 + 2] = z; p[i * 6 + 3] = x - wx * len; p[i * 6 + 4] = y + 46 * len; p[i * 6 + 5] = z - wz * len;
    }
    this.rain.geometry.attributes.position.needsUpdate = true;
  }

  // ---------- Cielo, sol, luna, estrellas, nubes ----------
  buildSky() {
    const s = this.scene;
    s.background = new THREE.Color(0x62bbf0); s.fog = new THREE.Fog(0xbfe3f5, 180, 720);
    this.hemi = new THREE.HemisphereLight(0xdff3ff, 0x6a8a55, 1.6); s.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xffffff, 3); this.sun.castShadow = true;
    const sh = this.sun.shadow; sh.mapSize.set(2048, 2048); sh.camera.left = -85; sh.camera.right = 85; sh.camera.top = 85; sh.camera.bottom = -85; sh.camera.near = 20; sh.camera.far = 420; sh.bias = -0.0006; sh.normalBias = 0.5;
    s.add(this.sun); s.add(this.sun.target);
    this.sunDisc = new THREE.Mesh(new THREE.SphereGeometry(16, 16, 12), new THREE.MeshBasicMaterial({ color: 0xfff3b0, fog: false })); s.add(this.sunDisc);
    this.moonDisc = new THREE.Mesh(new THREE.SphereGeometry(11, 16, 12), new THREE.MeshBasicMaterial({ color: 0xe8eeff, fog: false })); s.add(this.moonDisc);
    const sp = [], r = rng(9);
    for (let i = 0; i < 500; i++) { const a = r() * 6.283, e = Math.asin(0.05 + r() * 0.95); sp.push(Math.cos(a) * Math.cos(e) * 900, Math.sin(e) * 900 - 60, Math.sin(a) * Math.cos(e) * 900); }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
    this.stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: 2.2, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false })); s.add(this.stars);
    // Nubes low-poly
    this.clouds = [];
    const cm = new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true, roughness: 1, transparent: true, opacity: 0.94 }); this.cloudMat = cm;
    for (let i = 0; i < 9; i++) {
      const b = new Batch(), n = 3 + Math.floor(r() * 3);
      for (let k = 0; k < n; k++) b.add(new THREE.IcosahedronGeometry(3 + r() * 2.5, 1), 0xffffff, (k - n / 2) * 4.2, r() * 1.2, (r() - 0.5) * 3, 1.3, 0.62, 1, 0, 0, 0, 0);
      const m = b.mesh(cm.clone()); m.castShadow = true; m.position.set(lerp(B.minX, B.maxX, r()), 46 + r() * 10, lerp(B.minZ, B.maxZ, r()));
      s.add(m); this.clouds.push(m);
    }
  }

  setTime(hour, focus) {
    const { a, b, k } = keyAt(SKY, hour), s = this.scene;
    s.background.set(a[1]).lerp(_c2.set(b[1]), k);
    s.fog.color.set(a[2]).lerp(_c2.set(b[2]), k);
    this.sun.color.set(a[3]).lerp(_c2.set(b[3]), k);
    const stm = this.storm || 0; s.background.lerp(_c2.set(0x566270), stm * 0.85); s.fog.color.lerp(_c2.set(0x66727f), stm * 0.85);
    const smg = this.smogOn ? (this.smog || 0) : 0; s.fog.color.lerp(_c2.set(0x9a8f7c), smg * 0.6); s.background.lerp(_c2.set(0x9a9488), smg * 0.5); s.fog.near = lerp(180, 85, smg); s.fog.far = lerp(720, 500, smg);
    const mst = this.mist || 0; s.fog.color.lerp(_c2.set(0xdfe7ec), mst * 0.45); s.background.lerp(_c2.set(0xcfdbe4), mst * 0.25); s.fog.near = Math.min(s.fog.near, lerp(180, 100, mst)); s.fog.far = Math.min(s.fog.far, lerp(720, 540, mst));
    const sInt = lerp(a[4], b[4], k) * (1 - 0.82 * stm) * (1 - 0.22 * smg), hInt = lerp(a[5], b[5], k) * (1 - 0.42 * stm) + (this.flash || 0) * 4;
    this.hemi.intensity = hInt; this.hemi.color.copy(s.fog.color).lerp(_c2.set(0xffffff), 0.35);
    this.hemi.groundColor.set(0x6a8a55).lerp(_c2.set(0x1a2440), this.night);
    const ang = Math.PI * (hour - 6) / 12, el = Math.sin(ang);
    const sd = _p.set(Math.cos(ang), el, -0.45).normalize();
    this.sunDisc.position.copy(focus).addScaledVector(sd, 760); this.sunDisc.visible = el > -0.12;
    const mang = ang + Math.PI; const md = _s.set(Math.cos(mang) * 0.8, Math.sin(mang) * 0.8 + 0.15, 0.5).normalize();
    this.moonDisc.position.copy(focus).addScaledVector(md, 760); this.moonDisc.visible = md.y > -0.05;
    const day = el > 0.1;
    if (day) this.sunDir.copy(sd); else this.sunDir.set(-0.35, 0.8, 0.45).normalize();
    // cerca del horizonte la luz baja para ocultar el relevo sol/luna
    const hz = smooth(0.02, 0.22, Math.abs(el - 0.1));
    this.sun.intensity = sInt * lerp(0.35, 1, hz);
    const half = clamp((this.zoom || 60) * 0.95, 70, 165), sc = this.sun.shadow.camera;
    if (Math.abs(sc.right - half) > 2) { sc.left = -half; sc.right = half; sc.top = half; sc.bottom = -half; sc.updateProjectionMatrix(); }
    this.sun.target.position.copy(focus);
    this.sun.position.copy(focus).addScaledVector(this.sunDir, 200);
    this.stars.material.opacity = this.night * 0.9; this.stars.position.copy(focus);
    const u = this.waterMat.uniforms;
    // de noche el brillo del agua sigue a la luna visible
    u.uSunDir.value.copy(day || md.y < 0.08 ? this.sunDir : md); u.uSunColor.value.copy(this.sun.color).multiplyScalar(day ? 1 : 0.85);
    u.uSky.value.copy(s.fog.color); u.uLight.value = lerp(1, 0.34, this.night);
    this.cloudMat.color.set(0xffffff).lerp(_c2.set(0x39456e), this.night * 0.85);
    if (hour > 17.4 && hour < 19.4) this.cloudMat.color.lerp(_c2.set(0xffb27a), 0.5 * (1 - Math.abs(hour - 18.4)));
    this.cloudMat.color.lerp(_c2.set(0x55606c), stm * 0.8);
  }

  // ---------- Carreteras: cinta apoyada en el relieve ----------
  road(pts, width, color, lift = 0.07) {
    const curve = new THREE.CatmullRomCurve3(pts.map(p => new THREE.Vector3(p[0], 0, p[1])), false, 'catmullrom', 0.5);
    const len = curve.getLength(), n = Math.max(2, Math.ceil(len / 1.4)), P = [], line = [];
    for (let i = 0; i <= n; i++) {
      const p = curve.getPointAt(i / n), t = curve.getTangentAt(i / n), nx = -t.z, nz = t.x, hw = width / 2;
      const lx = p.x + nx * hw, lz = p.z + nz * hw, rx = p.x - nx * hw, rz = p.z - nz * hw;
      const y = Math.max(this.terrainAt(lx, lz), this.terrainAt(rx, rz), this.terrainAt(p.x, p.z)) + lift;
      P.push([lx, y, lz, rx, y, rz]); line.push([p.x, p.z]);
    }
    const v = [];
    for (let i = 0; i < n; i++) { const a = P[i], b = P[i + 1]; v.push(a[0], a[1], a[2], b[3], b[4], b[5], a[3], a[4], a[5], a[0], a[1], a[2], b[0], b[1], b[2], b[3], b[4], b[5]); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
    const nn = new Float32Array(v.length); for (let i = 1; i < nn.length; i += 3) nn[i] = 1; g.setAttribute('normal', new THREE.BufferAttribute(nn, 3));
    this.batch.list.push(paint(g, color, 0)); this.roads.push(line);
    return line;
  }
  nearRoad(x, z, d) { for (const l of this.roads) if (distPoly(x, z, l) < d) return true; return false; }

  tree(type, x, z, s = 1, y = null) { if (this.clear && this.clear.some(c => x > c[0] && x < c[1] && z > c[2] && z < c[3])) return; this.trees.push({ type, x, z, s, y: y == null ? this.groundAt(x, z) : y }); this.addCircle(x, z, type === 'ombu' ? 1.1 : type === 'bush' ? 0 : 0.4); }
  lamp(x, z, ry = 0, y = null) { this.lamps.push({ x, z, ry, y: y == null ? this.groundAt(x, z) : y }); }

  // Consola de nodo + marcador flotante de interacción
  addInter(id, x, z, o = {}) {
    const y = o.y != null ? o.y : this.groundAt(x, z), ry = o.ry || 0, b = this.batch;
    if (o.console !== false) {
      b.boxB(x, y, z, 0.9, 1.0, 0.6, C.steelD, ry); b.boxB(x, y + 1.0, z, 1.1, 0.12, 0.8, C.yellow, ry);
      const s = Math.sin(ry), c = Math.cos(ry);
      this.screenBatch.box(x + s * 0.12, y + 1.42, z + c * 0.12, 0.95, 0.62, 0.08, 0xffffff, ry, -0.45);
      b.box(x - s * 0.02, y + 1.38, z - c * 0.02, 1.08, 0.78, 0.14, C.steelD, ry, -0.45);
      this.addCircle(x, z, 0.55);
    }
    const g = new THREE.Group(); g.position.set(x, y + (o.h || 3.2), z);
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.42, 0), new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false }));
    const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.1, 4), new THREE.MeshBasicMaterial({ color: 0xffd23f, fog: false })); arrow.rotation.x = Math.PI; arrow.position.y = 1.3;
    g.add(gem, arrow); this.scene.add(g);
    const it = { id, x, y, z, r: o.r || 3.4, group: g, gem, arrow, state: 'locked', target: false, label: '', baseY: y + (o.h || 3.2), phase: this.rand() * 6 };
    this.inter[id] = it; this.interList.push(it);
    return it;
  }

  // ---------- Cierre: fusiona lotes y crea instancias ----------
  finalize() {
    const s = this.scene, M = this.mats;
    // Detalles (puertas, aberturas, ventanales) que quedaron en el lote común pero están pegados a un edificio que la cámara
    // puede cortar: pasan al lote de la ciudad, así el corte no deja piezas flotando en el aire
    this.batch.list = this.batch.list.filter(g => {
      if (!g.boundingBox) g.computeBoundingBox(); const b = g.boundingBox; if (b.max.y < 2.6) return true;
      for (const o of this.occ) if (b.min.x >= o.x0 - 0.7 && b.max.x <= o.x1 + 0.7 && b.min.z >= o.z0 - 0.7 && b.max.z <= o.z1 + 0.7 && b.min.y < o.y1) { this.cityBatch.list.push(g); return false; }
      return true;
    });
    M.glass.clippingPlanes = this.clip; M.glass.clipIntersection = true;
    const main = this.batch.mesh(M.solid); main.castShadow = true; main.receiveShadow = true; s.add(main);
    const city = this.cityBatch.mesh(M.city); if (city) { city.castShadow = true; city.receiveShadow = true; s.add(city); }
    this.winBatch.forEach((b, i) => { const m = b.mesh(M.win[i]); if (m) s.add(m); });
    const gl = this.glassBatch.mesh(M.glass); if (gl) { gl.renderOrder = 6; s.add(gl); }
    const sc = this.screenBatch.mesh(M.screen); if (sc) s.add(sc);

    // Árboles (InstancedMesh): troncos, copas y penachos de palmera
    const trunk = [], crown = [], frond = [];
    for (const t of this.trees) {
      const d = TREE[t.type], sc2 = t.s;
      if (d.th) trunk.push({ x: t.x, y: t.y + d.th * sc2 / 2, z: t.z, sx: d.tr * sc2, sy: d.th * sc2, sz: d.tr * sc2, c: d.tc, ry: 0 });
      if (d.crowns) for (const cr of d.crowns) crown.push({ x: t.x + (this.rand() - 0.5) * 0.3, y: t.y + d.th * sc2 * cr[0] + (d.th ? 0 : 0.4), z: t.z + (this.rand() - 0.5) * 0.3, sx: cr[1] * sc2, sy: cr[2] * sc2, sz: cr[1] * sc2, c: cr[3], ry: this.rand() * 6 });
      if (d.frond) frond.push({ x: t.x, y: t.y + d.th * sc2, z: t.z, sx: d.frond * sc2, sy: d.frond * sc2, sz: d.frond * sc2, c: d.fc, ry: this.rand() * 6 });
    }
    const fl = new THREE.MeshStandardMaterial({ flatShading: true, roughness: 1 });
    this.instanced(new THREE.CylinderGeometry(0.75, 1, 1, 5), fl, trunk);
    this.instanced(new THREE.IcosahedronGeometry(1, 1), fl, crown, 0.08);
    const fg = [];
    for (let k = 0; k < 8; k++) { const g = new THREE.BoxGeometry(0.26, 0.05, 1); g.translate(0, 0, 0.5); g.rotateX(0.42 + (k % 2) * 0.3); g.rotateY(k * Math.PI / 4); fg.push(g); }
    this.instanced(mergeGeometries(fg), fl, frond, 0.05);

    // Farolas LED
    const poles = [], heads = [], bulbs = [], pools = [];
    for (const l of this.lamps) {
      const sx = Math.sin(l.ry), cz = Math.cos(l.ry);
      poles.push({ x: l.x, y: l.y + 2.1, z: l.z, sx: 0.09, sy: 4.2, sz: 0.09, c: 0x3d4650, ry: 0 });
      heads.push({ x: l.x + sx * 0.5, y: l.y + 4.2, z: l.z + cz * 0.5, sx: 0.32, sy: 0.12, sz: 1.2, c: 0x3d4650, ry: l.ry });
      bulbs.push({ x: l.x + sx * 0.9, y: l.y + 4.08, z: l.z + cz * 0.9, sx: 0.2, sy: 0.1, sz: 0.3, c: 0xffffff, ry: l.ry });
      pools.push({ x: l.x + sx * 0.9, y: l.y + 0.09, z: l.z + cz * 0.9, sx: 9, sy: 1, sz: 9, c: 0xffffff, ry: 0 });
    }
    this.instanced(new THREE.CylinderGeometry(1, 1, 1, 6), fl, poles);
    this.instanced(new THREE.BoxGeometry(1, 1, 1), fl, heads);
    this.instanced(new THREE.BoxGeometry(1, 1, 1), M.bulb, bulbs, 0, false);
    const pg = new THREE.PlaneGeometry(1, 1); pg.rotateX(-Math.PI / 2);
    const pm = this.instanced(pg, M.pool, pools, 0, false); if (pm) pm.renderOrder = 7;

    // Viviendas repetitivas
    const body = [], roof = [];
    for (const h of this.houses) {
      body.push({ x: h.x, y: h.y + h.h / 2, z: h.z, sx: h.w, sy: h.h, sz: h.d, c: h.c, ry: h.ry });
      roof.push({ x: h.x, y: h.y + h.h + h.rh / 2, z: h.z, sx: h.w * 0.78, sy: h.rh, sz: h.d * 0.78, c: h.rc, ry: h.ry + Math.PI / 4 });
    }
    this.instanced(new THREE.BoxGeometry(1, 1, 1), fl, body);
    this.instanced(new THREE.CylinderGeometry(0.02, 1, 1, 4), fl, roof);
  }
  instanced(geo, mat, list, jitter = 0, shadow = true) {
    if (!list.length) return null;
    const m = new THREE.InstancedMesh(geo, mat, list.length);
    list.forEach((o, i) => {
      _m.compose(_p.set(o.x, o.y, o.z), _q.setFromEuler(_e.set(0, o.ry || 0, 0)), _s.set(o.sx, o.sy, o.sz)); m.setMatrixAt(i, _m);
      _c.set(o.c); if (jitter) _c.offsetHSL((this.rand() - 0.5) * 0.02, 0, (this.rand() - 0.5) * jitter); m.setColorAt(i, _c);
    });
    m.castShadow = shadow; m.receiveShadow = shadow; m.frustumCulled = false; this.scene.add(m);
    return m;
  }

  // amount 0..1: baja el plano horizontal hasta la altura de Capi dentro de un corredor hacia la cámara
  setCutaway(amount, p, yaw) {
    const c = this.clip, rx = Math.cos(yaw), rz = -Math.sin(yaw), fx = Math.sin(yaw), fz = Math.cos(yaw), W = 7;
    c[0].constant = lerp(80, p.y + 1.2, amount);
    c[1].normal.set(rx, 0, rz); c[1].constant = -(rx * p.x + rz * p.z + W);
    c[2].normal.set(-rx, 0, -rz); c[2].constant = rx * p.x + rz * p.z - W;
    c[3].normal.set(-fx, 0, -fz); c[3].constant = fx * p.x + fz * p.z + 0.9;
  }

  // ---------- Actualización por cuadro ----------
  update(dt, st) {
    this.time += dt; this.night = st.night; this.zoom = st.zoom; this.smogOn = !st.demo;
    this.waterMat.uniforms.uTime.value = this.time;
    // Temporal: con nubosidad alta el cielo se cierra, llueve y caen rayos
    this.storm = smooth(0.45, 0.9, st.grid.cloud); this.flash = Math.max(0, (this.flash || 0) - dt * 5);
    this.updateRain(dt, st);
    if (this.storm > 0.25) {
      this.boltT = (this.boltT == null ? 4 : this.boltT) - dt;
      if (this.storm > 0.6 && this.boltT <= 0) { this.boltT = 5 + Math.random() * 7; this.flash = 1; if (st.audio) setTimeout(() => st.audio.thunder(), 350); }
    }
    // neblina de la mañana: aparece antes del amanecer y se levanta a media mañana
    this.mist = smooth(4.6, 6.2, st.hour) * (1 - smooth(8.6, 10.4, st.hour)) * (1 - this.storm);
    this.setTime(st.hour, st.focus);
    const M = this.mats, n = this.night;
    // Parpadeo de barrios cuando cae la frecuencia
    const flick = st.grid.freq < 49.4 ? (Math.sin(this.time * 37) > 0.2 ? 0.25 : 1) : 1;
    for (let i = 0; i < 3; i++) {
      this.power[i] = lerp(this.power[i], st.barrios[i] ? 1 : 0, Math.min(1, dt * 2));
      // las ventanas se encienden por barrios a medida que cae la noche
      M.win[i].emissiveIntensity = this.power[i] * (0.18 + 1.5 * clamp(n * 1.8 - i * 0.4, 0, 1)) * flick;
    }
    M.bulb.emissiveIntensity = n * 2.4 * flick; M.pool.opacity = n * 0.5 * flick;
    M.beacon.emissiveIntensity = n > 0.2 ? (Math.sin(this.time * 3.2) > 0 ? 3 : 0.1) : 0.2;
    M.screen.emissiveIntensity = 0.9 + 0.3 * Math.sin(this.time * 5);
    for (const c of this.clouds) {
      // las nubes se aclaran si se interponen entre la cámara y Capi
      const ax = st.focus.x - st.cam.x, ay = st.focus.y - st.cam.y, az = st.focus.z - st.cam.z, px = c.position.x - st.cam.x, py = c.position.y - st.cam.y, pz = c.position.z - st.cam.z;
      const t = clamp((px * ax + py * ay + pz * az) / (ax * ax + ay * ay + az * az), 0, 1), d = Math.hypot(px - ax * t, py - ay * t, pz - az * t);
      c.material.color.copy(this.cloudMat.color); c.material.opacity = lerp(c.material.opacity, lerp(0.12, 0.94, smooth(16, 42, d)), Math.min(1, dt * 4));
      c.position.x += (1.2 + st.grid.wind * 4) * dt * Math.cos(st.grid.windDir); c.position.z += (1.2 + st.grid.wind * 4) * dt * Math.sin(st.grid.windDir) * 0.4; if (c.position.x > B.maxX + 30) c.position.x = B.minX - 30; if (c.position.z > B.maxZ + 20) c.position.z = B.minZ - 20; }
    for (const it of this.interList) {
      const g = it.group; g.visible = it.state !== 'locked' && it.state !== 'hidden' && !st.cine;
      if (!g.visible) continue;
      const need = it.state === 'need';
      it.gem.material.color.set(need ? 0xff4d4d : it.state === 'off' ? 0x9aa7bd : 0x57e389);
      it.gem.rotation.y += dt * (need ? 4 : 1.2); const sc = need ? 1.25 + 0.25 * Math.sin(this.time * 8) : 0.6; it.gem.scale.setScalar(sc);
      g.position.y = it.baseY + Math.sin(this.time * 2.5 + it.phase) * 0.18;
      it.arrow.visible = it.target; if (it.target) { it.arrow.position.y = 1.5 + Math.abs(Math.sin(this.time * 4)) * 0.6; it.arrow.rotation.y += dt * 3; }
    }
    for (const u of this.updaters) u(dt, st);
  }
}

// Vista desplazada del mundo: un sector se arma con sus coordenadas de siempre (locales) y queda ubicado en otro lugar del mapa.
// Lotes, colisiones, plataformas, consolas, árboles, farolas, caminos y mallas sueltas reciben el corrimiento (dx, dz).
export function offsetWorld(w, dx, dz) {
  const ob = base => { const o = Object.create(base); o.add = function (geo, color, x, y, z, ...r) { Batch.prototype.add.call(base, geo, color, x + dx, y, z + dz, ...r); return o; }; return o; };
  const group = new THREE.Group(); group.position.set(dx, 0, dz); w.scene.add(group);
  const over = {
    dx, dz, scene: group,
    batch: ob(w.batch), cityBatch: ob(w.cityBatch), glassBatch: ob(w.glassBatch), screenBatch: ob(w.screenBatch), winBatch: w.winBatch.map(ob),
    terrainAt: (x, z) => w.terrainAt(x + dx, z + dz), groundAt: (x, z, y) => w.groundAt(x + dx, z + dz, y), waterAt: (x, z) => w.waterAt(x + dx, z + dz),
    addPlatform: (x0, x1, z0, z1, top) => w.addPlatform(x0 + dx, x1 + dx, z0 + dz, z1 + dz, typeof top === 'function' ? (x, z) => top(x - dx, z - dz) : top),
    addSolid: (x0, x1, z0, z1, top, walk) => w.addSolid(x0 + dx, x1 + dx, z0 + dz, z1 + dz, top, walk),
    addCircle: (x, z, r) => w.addCircle(x + dx, z + dz, r),
    addOcc: (x0, x1, z0, z1, y1) => w.addOcc(x0 + dx, x1 + dx, z0 + dz, z1 + dz, y1),
    addInter: (id, x, z, o) => w.addInter(id, x + dx, z + dz, o),
    tree: (type, x, z, s, y) => w.tree(type, x + dx, z + dz, s, y),
    lamp: (x, z, ry, y) => w.lamp(x + dx, z + dz, ry, y),
    road: (pts, width, color, lift) => w.road(pts.map(p => [p[0] + dx, p[1] + dz]), width, color, lift),
    nearRoad: (x, z, d) => w.nearRoad(x + dx, z + dz, d),
    trees: { push: (...a) => a.forEach(t => w.trees.push({ ...t, x: t.x + dx, z: t.z + dz })) },
    houses: { push: (...a) => a.forEach(h => w.houses.push({ ...h, x: h.x + dx, z: h.z + dz })) },
    lamps: { push: (...a) => a.forEach(l => w.lamps.push({ ...l, x: l.x + dx, z: l.z + dz })) }
  };
  return new Proxy(w, { get: (t, k) => (k in over ? over[k] : t[k]), set: (t, k, v) => { t[k] = v; return true; } });
}

// Color del suelo por zona, altura y pendiente.
const cA = new THREE.Color(), cB = new THREE.Color();
function groundColor(c, x, z, h, ny) {
  const wl = waterAt(x, z), ar = westD(x, z), d = Math.max(coastD(x, z), ar);   // distancia a la orilla más cercana (positiva en tierra)
  if (h < wl - 0.15) { c.set(0x2c556b).lerp(cA.set(0xcdbb8c), smooth(wl - 3.4, wl - 0.1, h)); return; }
  const banks = Math.min(channelD(x, z) - 8, 99);
  if ((d < 5.2 && h < 2.6) || h < wl + 0.5) { c.set(0xe8d6a4).lerp(cA.set(0xd8c08a), noise2(x * 0.4, z * 0.4)); return; }
  const g = fbm(x * 0.07, z * 0.07);
  c.set(0x5fb146).lerp(cA.set(0x8ed45c), g);
  if (x > 26) c.lerp(cA.set(0xb9d95e), smooth(0.5, 0.85, noise2(x * 0.13 + 9, z * 0.13)) * 0.6);
  if (banks < 6 || (d < 14 && z < DAM_Z)) c.lerp(cA.set(0x4c9a4a), 0.5);
  const inR = (x0, x1, z0, z1) => smooth(-3, 1, Math.min(x - x0, x1 - x, z - z0, z1 - z));
  c.lerp(cA.set(0xd0c8b0), inR(-10, 45, -106, -58) * (0.85 + 0.15 * noise2(x, z)));   // parque solar
  c.lerp(cA.set(0xb89264), inR(42, 80, 51, 71) * 0.9);
  c.lerp(cA.set(0x6f9a52), inR(40, 108, 31, 50) * 0.7);
  c.lerp(cA.set(0x8f9a8a), inR(-86, 22, 9, 94.4));                // ciudad
  c.lerp(cA.set(0x8f9a8a), inR(-86, -8, -8, 10));                 // Barrio Norte y costanera
  c.lerp(cA.set(0x7fb35a), inR(4, 44, -32, 9) * 0.55);            // Barrio Jardín: pasto cuidado
  const fr = Math.max(inR(-72, -22, 140, 207), inR(22, 124, 160, 207) * (1 - inR(64, 86, 148, 168)));   // chacras del sur
  if (fr > 0) { const k = ((Math.floor((x + 300) / 6.5) % 3) + 3) % 3; c.lerp(cA.set(k === 0 ? 0xa48a5c : k === 1 ? 0x9cc65a : 0x79ad48), fr * 0.7); }
  if (ar > 0) c.lerp(cA.set(0x79b04f), 0.35);                     // Argentina, la otra orilla
  c.lerp(cA.set(0xcabd9a), inR(41, 57, 2, 15) * 0.9);
  if (ny < 0.82) c.lerp(cA.set(0x9c8a66), smooth(0.82, 0.6, ny));
}
