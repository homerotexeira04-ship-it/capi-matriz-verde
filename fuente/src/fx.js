// Sistema de partículas retro (espuma, polvo, chispas, pulsos de energía, fuegos artificiales).
import * as THREE from 'three';

const VS = `
attribute vec4 aColor; attribute float aSize; varying vec4 vColor; uniform float uScale;
void main(){ vColor=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_Position=projectionMatrix*mv;
  gl_PointSize=clamp(aSize*uScale/max(0.1,-mv.z),1.0,300.0); }`;
const FS = soft => `
varying vec4 vColor;
void main(){ float d=length(gl_PointCoord-0.5);
  ${soft ? 'float a=smoothstep(0.5,0.05,d);' : 'if(d>0.5) discard; float a=1.0;'}
  gl_FragColor=vec4(vColor.rgb,vColor.a*a);
#include <colorspace_fragment>
}`;
const _c = new THREE.Color();

class Layer {
  constructor(scene, n, additive) {
    this.n = n; this.count = 0; this.imm = 0;
    this.p = new Float32Array(n * 3); this.v = new Float32Array(n * 3); this.life = new Float32Array(n); this.max = new Float32Array(n);
    this.s0 = new Float32Array(n); this.s1 = new Float32Array(n); this.col = new Float32Array(n * 4); this.grav = new Float32Array(n); this.drag = new Float32Array(n);
    const total = n + 400;
    this.bp = new Float32Array(total * 3); this.bc = new Float32Array(total * 4); this.bs = new Float32Array(total);
    this.immList = [];
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.bp, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aColor', new THREE.BufferAttribute(this.bc, 4).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.bs, 1).setUsage(THREE.DynamicDrawUsage));
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 600 } }, vertexShader: VS, fragmentShader: FS(additive),
      transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending
    });
    this.mesh = new THREE.Points(g, this.mat); this.mesh.frustumCulled = false; this.mesh.renderOrder = additive ? 12 : 11;
    scene.add(this.mesh);
  }
  emit(x, y, z, vx, vy, vz, life, s0, s1, hex, alpha, grav, drag) {
    if (this.count >= this.n) return;
    const i = this.count++;
    this.p[i * 3] = x; this.p[i * 3 + 1] = y; this.p[i * 3 + 2] = z;
    this.v[i * 3] = vx; this.v[i * 3 + 1] = vy; this.v[i * 3 + 2] = vz;
    this.life[i] = life; this.max[i] = life; this.s0[i] = s0; this.s1[i] = s1; this.grav[i] = grav; this.drag[i] = drag;
    _c.set(hex); this.col[i * 4] = _c.r; this.col[i * 4 + 1] = _c.g; this.col[i * 4 + 2] = _c.b; this.col[i * 4 + 3] = alpha;
  }
  sprite(x, y, z, size, hex, alpha) { if (this.immList.length < 400 * 6) this.immList.push(x, y, z, size, hex, alpha); }
  update(dt) {
    let w = 0;
    for (let i = 0; i < this.count; i++) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) continue;
      const k = 1 - this.drag[i] * dt;
      this.v[i * 3] *= k; this.v[i * 3 + 2] *= k; this.v[i * 3 + 1] = this.v[i * 3 + 1] * k - this.grav[i] * dt;
      this.p[i * 3] += this.v[i * 3] * dt; this.p[i * 3 + 1] += this.v[i * 3 + 1] * dt; this.p[i * 3 + 2] += this.v[i * 3 + 2] * dt;
      if (w !== i) {
        this.p.copyWithin(w * 3, i * 3, i * 3 + 3); this.v.copyWithin(w * 3, i * 3, i * 3 + 3); this.col.copyWithin(w * 4, i * 4, i * 4 + 4);
        this.life[w] = this.life[i]; this.max[w] = this.max[i]; this.s0[w] = this.s0[i]; this.s1[w] = this.s1[i]; this.grav[w] = this.grav[i]; this.drag[w] = this.drag[i];
      }
      const t = 1 - this.life[w] / this.max[w];
      this.bp[w * 3] = this.p[w * 3]; this.bp[w * 3 + 1] = this.p[w * 3 + 1]; this.bp[w * 3 + 2] = this.p[w * 3 + 2];
      this.bc[w * 4] = this.col[w * 4]; this.bc[w * 4 + 1] = this.col[w * 4 + 1]; this.bc[w * 4 + 2] = this.col[w * 4 + 2];
      this.bc[w * 4 + 3] = this.col[w * 4 + 3] * (t < 0.15 ? t / 0.15 : 1 - (t - 0.15) / 0.85);
      this.bs[w] = this.s0[w] + (this.s1[w] - this.s0[w]) * t;
      w++;
    }
    this.count = w;
    const L = this.immList;
    for (let j = 0; j < L.length; j += 6) {
      this.bp[w * 3] = L[j]; this.bp[w * 3 + 1] = L[j + 1]; this.bp[w * 3 + 2] = L[j + 2]; this.bs[w] = L[j + 3];
      _c.set(L[j + 4]); this.bc[w * 4] = _c.r; this.bc[w * 4 + 1] = _c.g; this.bc[w * 4 + 2] = _c.b; this.bc[w * 4 + 3] = L[j + 5];
      w++;
    }
    L.length = 0;
    const g = this.mesh.geometry;
    g.setDrawRange(0, w);
    g.attributes.position.needsUpdate = true; g.attributes.aColor.needsUpdate = true; g.attributes.aSize.needsUpdate = true;
  }
}

export class FX {
  constructor(scene) { this.soft = new Layer(scene, 1600, false); this.glow = new Layer(scene, 1600, true); }
  setScale(px) { this.soft.mat.uniforms.uScale.value = px; this.glow.mat.uniforms.uScale.value = px; }
  update(dt) { this.soft.update(dt); this.glow.update(dt); }
  puff(x, y, z, n = 8, hex = 0xd9c9a3, spread = 1.4) {
    for (let i = 0; i < n; i++) { const a = Math.random() * 6.283, s = spread * (0.4 + Math.random()); this.soft.emit(x, y, z, Math.cos(a) * s, 0.6 + Math.random(), Math.sin(a) * s, 0.5 + Math.random() * 0.3, 0.35, 0.9, hex, 0.7, 1.5, 2.5); }
  }
  sparks(x, y, z, n = 10, hex = 0xffd23f) {
    for (let i = 0; i < n; i++) { const a = Math.random() * 6.283, s = 2 + Math.random() * 4; this.glow.emit(x, y, z, Math.cos(a) * s, 2 + Math.random() * 4, Math.sin(a) * s, 0.35 + Math.random() * 0.35, 0.3, 0.05, hex, 1, 12, 1); }
  }
  splash(x, y, z, n = 14) {
    for (let i = 0; i < n; i++) { const a = Math.random() * 6.283, s = 1 + Math.random() * 2.5; this.soft.emit(x, y, z, Math.cos(a) * s, 2.5 + Math.random() * 3, Math.sin(a) * s, 0.6 + Math.random() * 0.3, 0.3, 0.12, 0xffffff, 0.95, 11, 0.5); }
  }
  firework(x, y, z, hex) {
    for (let i = 0; i < 70; i++) {
      const a = Math.random() * 6.283, e = Math.acos(2 * Math.random() - 1), s = 9 + Math.random() * 5;
      this.glow.emit(x, y, z, Math.sin(e) * Math.cos(a) * s, Math.cos(e) * s, Math.sin(e) * Math.sin(a) * s, 1.2 + Math.random() * 0.7, 1.4, 0.2, hex, 1, 3.5, 1.3);
    }
  }
}
