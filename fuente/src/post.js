// Postproceso del diorama: resplandor de las luces (fuerte de noche), desenfoque de maqueta arriba y abajo
// cuando la cámara se aleja, color según la hora del día y viñeta suave.
// El juego usa siempre el nivel 2 (completo). Los niveles 1 y 0 quedan solo para pruebas (?post=1 o ?post=0 en la dirección)
// y para equipos sin WebGL 2, que no pueden hacer el antialias en la textura.
import * as THREE from 'three';
import { clamp, lerp } from './util.js';

const VS = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';
const DOWN = `uniform sampler2D t; uniform vec2 px; varying vec2 vUv;
void main(){ gl_FragColor = 0.25 * (texture2D(t, vUv + px * vec2(-0.5, -0.5)) + texture2D(t, vUv + px * vec2(0.5, -0.5)) + texture2D(t, vUv + px * vec2(-0.5, 0.5)) + texture2D(t, vUv + px * vec2(0.5, 0.5))); }`;
const BRIGHT = `uniform sampler2D t; uniform vec2 px; uniform float thr; uniform float knee; varying vec2 vUv;
void main(){
  vec3 c = 0.25 * (texture2D(t, vUv + px * vec2(-0.5, -0.5)).rgb + texture2D(t, vUv + px * vec2(0.5, -0.5)).rgb + texture2D(t, vUv + px * vec2(-0.5, 0.5)).rgb + texture2D(t, vUv + px * vec2(0.5, 0.5)).rgb);
  float l = max(c.r, max(c.g, c.b)); gl_FragColor = vec4(c * smoothstep(thr, thr + knee, l), 1.0); }`;
const BLUR = `uniform sampler2D t; uniform vec2 dir; varying vec2 vUv;
void main(){
  vec3 c = texture2D(t, vUv).rgb * 0.2270270270;
  c += (texture2D(t, vUv + dir * 1.3846153846).rgb + texture2D(t, vUv - dir * 1.3846153846).rgb) * 0.3162162162;
  c += (texture2D(t, vUv + dir * 3.2307692308).rgb + texture2D(t, vUv - dir * 3.2307692308).rgb) * 0.0702702703;
  gl_FragColor = vec4(c, 1.0); }`;
const COMP = `uniform sampler2D tScene; uniform sampler2D tBlur; uniform sampler2D tB1; uniform sampler2D tB2;
uniform float uTilt; uniform float uFocusY; uniform float uBand; uniform float uBloom; uniform float uVig; uniform float uSat; uniform float uCon; uniform vec3 uTint; uniform vec2 uAspect;
varying vec2 vUv;
void main(){
  vec3 c = texture2D(tScene, vUv).rgb;
  float tw = smoothstep(uBand, uBand + 0.34, abs(vUv.y - uFocusY)) * uTilt;
  c = mix(c, texture2D(tBlur, vUv).rgb, tw);
  c += (texture2D(tB1, vUv).rgb + texture2D(tB2, vUv).rgb * 0.9) * uBloom;
  c *= uTint;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722)); c = mix(vec3(l), c, uSat);
  c = max((c - 0.18) * uCon + 0.18, 0.0);
  vec2 q = (vUv - 0.5) * uAspect; c *= mix(1.0 - uVig, 1.0, smoothstep(0.9, 0.22, length(q)));
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
  gl_FragColor.rgb += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0;
}`;

// Color por hora: [hora, tinte, saturación, contraste, viñeta]
const NIGHT = [[0.86, 0.95, 1.14], 0.88, 1.1, 0.4];
const GRADE = [
  [0, ...NIGHT], [5.2, ...NIGHT],
  [6.4, [1.08, 0.97, 0.95], 1.06, 1.02, 0.28], [8, [1.02, 1.0, 0.98], 1.08, 1.04, 0.2],
  [12, [1, 1, 1], 1.1, 1.05, 0.18], [16.8, [1.03, 1.0, 0.96], 1.1, 1.05, 0.2],
  [18.5, [1.1, 0.99, 0.88], 1.14, 1.05, 0.28], [19.5, [0.98, 0.94, 1.06], 1.0, 1.06, 0.32],
  [20.4, ...NIGHT], [24, ...NIGHT]
];
const _v = new THREE.Vector3();

export class Post {
  constructor(r) {
    this.r = r; this.gl2 = r.capabilities.isWebGL2;
    this.level = this.gl2 ? 2 : 0;
    const force = typeof window !== 'undefined' && (window.CAPI_POST ?? new URLSearchParams(location.search).get('post'));
    if (force != null && force !== '') this.level = clamp(+force, 0, 2);
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2)); this.quad.frustumCulled = false;
    this.scene = new THREE.Scene(); this.scene.add(this.quad);
    const half = { type: this.gl2 ? THREE.HalfFloatType : THREE.UnsignedByteType, depthBuffer: false, stencilBuffer: false };
    this.rt = new THREE.WebGLRenderTarget(1, 1, { samples: this.gl2 ? 4 : 0, colorSpace: THREE.SRGBColorSpace, depthBuffer: true, stencilBuffer: true });
    this.h = new THREE.WebGLRenderTarget(1, 1, half); this.hb = new THREE.WebGLRenderTarget(1, 1, half); this.hc = new THREE.WebGLRenderTarget(1, 1, half);
    this.q = new THREE.WebGLRenderTarget(1, 1, half); this.qb = new THREE.WebGLRenderTarget(1, 1, half);
    this.e = new THREE.WebGLRenderTarget(1, 1, half); this.eb = new THREE.WebGLRenderTarget(1, 1, half);
    const sm = (fs, u) => new THREE.ShaderMaterial({ vertexShader: VS, fragmentShader: fs, uniforms: u, depthTest: false, depthWrite: false });
    this.mDown = sm(DOWN, { t: { value: null }, px: { value: new THREE.Vector2() } });
    this.mBright = sm(BRIGHT, { t: { value: null }, px: { value: new THREE.Vector2() }, thr: { value: 0.9 }, knee: { value: 0.25 } });
    this.mBlur = sm(BLUR, { t: { value: null }, dir: { value: new THREE.Vector2() } });
    this.mComp = sm(COMP, { tScene: { value: null }, tBlur: { value: null }, tB1: { value: null }, tB2: { value: null },
      uTilt: { value: 0 }, uFocusY: { value: 0.5 }, uBand: { value: 0.16 }, uBloom: { value: 0.2 }, uVig: { value: 0.2 }, uSat: { value: 1 }, uCon: { value: 1 },
      uTint: { value: new THREE.Color(1, 1, 1) }, uAspect: { value: new THREE.Vector2(1, 1) } });
    this.black = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1); this.black.needsUpdate = true;
    this.w = 1; this.hgt = 1;
  }
  get on() { return this.level > 0; }
  setSize(w, h) {
    this.w = w; this.hgt = h; this.rt.setSize(w, h);
    const s = (t, d) => t.setSize(Math.max(1, Math.round(w / d)), Math.max(1, Math.round(h / d)));
    s(this.h, 2); s(this.hb, 2); s(this.hc, 2); s(this.q, 4); s(this.qb, 4); s(this.e, 8); s(this.eb, 8);
    this.mComp.uniforms.uAspect.value.set(w / h, 1);
  }
  // antes de dibujar la escena: todo va a la textura con antialias
  begin() { if (!this.on) return; if (this.rt.width !== this.r.domElement.width || this.rt.height !== this.r.domElement.height) this.setSize(this.r.domElement.width, this.r.domElement.height); this.r.setRenderTarget(this.rt); }
  pass(mat, target) { this.quad.material = mat; this.r.setRenderTarget(target); this.r.render(this.scene, this.cam); }
  blur(src, tmp, s) { const m = this.mBlur, u = m.uniforms; u.t.value = src.texture; u.dir.value.set(s / src.width, 0); this.pass(m, tmp); u.t.value = tmp.texture; u.dir.value.set(0, s / src.height); this.pass(m, src); }
  // o = { hour, night, storm, dist, focus, camera, title }
  end(o) {
    if (!this.on) return;
    const r = this.r, ac = r.autoClear; r.autoClear = true;
    const U = this.mComp.uniforms, full = this.level >= 2;
    // ---- color por hora (y gris si hay tormenta)
    let i = 0; while (i < GRADE.length - 2 && GRADE[i + 1][0] <= o.hour) i++;
    const A = GRADE[i], B = GRADE[i + 1], k = clamp((o.hour - A[0]) / (B[0] - A[0]), 0, 1), st = o.storm || 0;
    U.uTint.value.setRGB(lerp(A[1][0], B[1][0], k), lerp(A[1][1], B[1][1], k), lerp(A[1][2], B[1][2], k)).lerp(_c.setRGB(0.95, 0.98, 1.04), st * 0.6);
    U.uSat.value = lerp(A[2], B[2], k) * (1 - 0.25 * st); U.uCon.value = lerp(A[3], B[3], k); U.uVig.value = lerp(A[4], B[4], k) + 0.08 * st;
    // ---- resplandor: casi nada de día, fuerte de noche
    const n = o.night || 0, mb = this.mBright.uniforms;
    mb.thr.value = lerp(0.92, 0.5, n); mb.knee.value = lerp(0.12, 0.3, n); U.uBloom.value = lerp(0.1, 0.85, n) * (full ? 1 : 0.8);
    // mitad de resolución: la escena suavizada (para la maqueta) y la base del resplandor
    this.mDown.uniforms.t.value = this.rt.texture; this.mDown.uniforms.px.value.set(1 / this.rt.width, 1 / this.rt.height); this.pass(this.mDown, this.h);
    mb.t.value = this.h.texture; mb.px.value.set(1 / this.h.width, 1 / this.h.height); this.pass(this.mBright, this.q);
    this.blur(this.q, this.qb, 1); this.blur(this.q, this.qb, 2);
    U.tB1.value = this.q.texture; U.tB2.value = this.black;
    if (full) { this.mDown.uniforms.t.value = this.q.texture; this.mDown.uniforms.px.value.set(1 / this.q.width, 1 / this.q.height); this.pass(this.mDown, this.e); this.blur(this.e, this.eb, 1.5); this.blur(this.e, this.eb, 3); U.tB2.value = this.e.texture; }
    // ---- maqueta: desenfoque arriba y abajo, más fuerte cuanto más lejos está la cámara
    const tilt = full ? clamp((o.dist - 34) / 110, 0, 1) * (o.title ? 1 : 0.85) : 0;
    U.uTilt.value = tilt;
    if (tilt > 0.01) {
      _v.copy(o.focus).project(o.camera); U.uFocusY.value = clamp(_v.y * 0.5 + 0.5, 0.25, 0.75); U.uBand.value = lerp(0.22, 0.12, tilt);
      this.blur(this.h, this.hb, 1.2); this.blur(this.h, this.hb, 2.4); U.tBlur.value = this.h.texture;
    } else U.tBlur.value = this.rt.texture;
    U.tScene.value = this.rt.texture; this.pass(this.mComp, null);
    r.autoClear = ac;
  }
}
const _c = new THREE.Color();
