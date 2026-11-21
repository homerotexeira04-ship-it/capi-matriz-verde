// Sonidos grabados de verdad: tambores de candombe, caballos y fuegos artificiales.
// Cada uno suena desde su lugar en el mundo: cerca se oye fuerte y brillante, lejos más bajo y apagado,
// y a la izquierda o a la derecha según hacia dónde mire la cámara. Los fuegos llegan después del destello,
// como en la realidad (el sonido viaja a 343 m/s). Autores y licencias: sonidos/CREDITOS.txt y la pantalla de créditos.
import { clamp } from './util.js';
import piano_a from '../sonidos/piano_a.mp3';
import piano_b from '../sonidos/piano_b.mp3';
import piano_m from '../sonidos/piano_m.mp3';
import repique_a from '../sonidos/repique_a.mp3';
import repique_b from '../sonidos/repique_b.mp3';
import repique_m from '../sonidos/repique_m.mp3';
import chico_a from '../sonidos/chico_a.mp3';
import chico_b from '../sonidos/chico_b.mp3';
import chico_m from '../sonidos/chico_m.mp3';
import palo from '../sonidos/palo.mp3';
import madera_a from '../sonidos/madera_a.mp3';
import madera_b from '../sonidos/madera_b.mp3';
import fw_estallido_a from '../sonidos/fw_estallido_a.mp3';
import fw_estallido_b from '../sonidos/fw_estallido_b.mp3';
import fw_trueno_a from '../sonidos/fw_trueno_a.mp3';
import fw_trueno_b from '../sonidos/fw_trueno_b.mp3';
import fw_crepitar_a from '../sonidos/fw_crepitar_a.mp3';
import fw_crepitar_b from '../sonidos/fw_crepitar_b.mp3';
import fw_final from '../sonidos/fw_final.mp3';
import caballo_relincho_a from '../sonidos/caballo_relincho_a.mp3';
import caballo_relincho_b from '../sonidos/caballo_relincho_b.mp3';
import caballo_resoplido_a from '../sonidos/caballo_resoplido_a.mp3';
import caballo_resoplido_b from '../sonidos/caballo_resoplido_b.mp3';

const RAW = { piano_a, piano_b, piano_m, repique_a, repique_b, repique_m, chico_a, chico_b, chico_m, palo, madera_a, madera_b,
  fw_estallido_a, fw_estallido_b, fw_trueno_a, fw_trueno_b, fw_crepitar_a, fw_crepitar_b, fw_final,
  caballo_relincho_a, caballo_relincho_b, caballo_resoplido_a, caballo_resoplido_b };
const SOUND = 343;
const rnd = (a, b) => a + Math.random() * (b - a);
const pick = a => a[Math.floor(Math.random() * a.length)];
const bytes = b64 => { const s = atob(b64), u = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i); return u; };

// Dónde empieza de verdad el golpe (el MP3 trae unos milisegundos de silencio al principio)
function onset(b) {
  const d = b.getChannelData(0), n = Math.min(d.length, Math.floor(b.sampleRate * 0.15)); let pk = 0;
  for (let i = 0; i < n; i++) pk = Math.max(pk, Math.abs(d[i]));
  for (let i = 0; i < n; i++) if (Math.abs(d[i]) > pk * 0.04) return Math.max(0, i / b.sampleRate - 0.002);
  return 0;
}

// ---------- Candombe ----------
// La madera es la clave 3-2, tocada con el palo en el costado del tambor.
const MADERA = [0, 3, 6, 10, 12];
// [semicorchea, golpe ('a' abierto, 'm' apagado), intensidad]
const PIANO = {
  base: [[0, 'm', 0.55], [3, 'a', 0.6], [6, 'a', 1], [8, 'm', 0.5], [10, 'a', 0.75], [14, 'a', 0.95]],
  base2: [[0, 'm', 0.5], [2, 'm', 0.4], [6, 'a', 1], [7, 'a', 0.55], [10, 'a', 0.8], [12, 'm', 0.45], [14, 'a', 0.95]],
  repicado: [[0, 'a', 0.9], [2, 'a', 0.6], [3, 'a', 0.7], [6, 'a', 1], [7, 'a', 0.6], [10, 'a', 0.85], [11, 'a', 0.6], [14, 'a', 1]]
};
// Frases del repique cuando se suelta
const REPIQUE = [
  [[0, 'a', 1], [3, 'a', 0.8], [4, 'm', 0.5], [6, 'a', 0.9], [7, 'a', 0.7], [10, 'a', 0.9], [11, 'm', 0.5], [12, 'a', 0.8], [14, 'a', 1]],
  [[2, 'a', 0.8], [3, 'a', 0.9], [6, 'a', 0.8], [7, 'a', 0.9], [10, 'a', 0.8], [11, 'a', 0.9], [13, 'a', 0.7], [14, 'a', 0.85], [15, 'a', 1]],
  [[0, 'a', 1], [1, 'm', 0.4], [2, 'a', 0.6], [3, 'a', 0.9], [6, 'a', 1], [8, 'a', 0.6], [9, 'a', 0.65], [10, 'a', 0.7], [11, 'a', 0.75], [12, 'a', 0.8], [13, 'a', 0.85], [14, 'a', 0.9], [15, 'a', 1]],
  [[0, 'a', 1], [3, 'a', 1], [6, 'a', 1], [10, 'm', 0.5], [12, 'a', 0.8], [13, 'a', 0.6], [14, 'a', 0.9]]
];
// Remate del repique al final de un tramo de base
const FILL = [[8, 'a', 0.6], [10, 'a', 0.7], [11, 'a', 0.75], [12, 'a', 0.8], [13, 'a', 0.85], [14, 'a', 0.95], [15, 'a', 1]];

// La cuerda va cambiando: arranca con la madera, se asienta en la base, el repique se suelta (repicado),
// el tempo se acelera de a poco y de vez en cuando hacen un corte todos juntos y vuelven a empezar más calmos.
class Cuerda {
  constructor(m) { this.m = m; this.b = null; this.on = false; this.off = 99; this.lvl = 0; this.next = 0; }
  start(kind) {
    const fiesta = kind === 'fiesta';
    this.next = this.m.ctx.currentTime + 0.06; this.st = 0; this.sec = fiesta ? 'repicado' : 'madera'; this.left = fiesta ? 3 : 2;
    this.bpm = this.goal = fiesta ? 124 : 108; this.pian = 'base'; this.frase = REPIQUE[0];
  }
  section() {
    const s = this.sec, r = Math.random();
    if (s === 'madera' || s === 'corte') { this.sec = 'base'; this.left = 6 + Math.floor(Math.random() * 5); this.pian = r < 0.5 ? 'base' : 'base2'; if (s === 'corte') this.goal = rnd(110, 118); }
    else if (s === 'base') {
      if (this.goal > 129 || (r > 0.62 && r < 0.86)) { this.sec = 'corte'; this.left = 1; }
      else if (r <= 0.62) { this.sec = 'repicado'; this.left = 3 + Math.floor(Math.random() * 4); this.goal = Math.min(this.goal + rnd(3, 6), 134); }
      else { this.left = 4; this.pian = this.pian === 'base' ? 'base2' : 'base'; }
    } else { this.sec = r < 0.55 ? 'base' : 'corte'; this.left = this.sec === 'corte' ? 1 : 4 + Math.floor(Math.random() * 4); }
  }
  // un golpe de cada tambor: varias manos con un pelito de diferencia para que suene a grupo
  drum(t, kind, hit, v, hands = 1) {
    const m = this.m, b = this.b.in;
    for (let h = 0; h < hands; h++) {
      const w = t + (h ? rnd(0.004, 0.016) : rnd(-0.004, 0.004)), g = v * (h ? 0.55 : 1) * rnd(0.85, 1);
      if (kind === 'piano') m.play(hit === 'a' ? pick(['piano_a', 'piano_b']) : 'piano_m', w, 0.95 * g, rnd(0.78, 0.83), b);
      else if (kind === 'repique') { m.play(hit === 'a' ? pick(['repique_a', 'repique_b']) : 'repique_m', w, 0.72 * g, rnd(0.97, 1.03), b); if (hit === 'a') m.play('palo', w, 0.16 * g, rnd(1.05, 1.15), b); }
      else if (kind === 'chico') m.play(hit === 'a' ? pick(['chico_a', 'chico_b']) : 'chico_m', w, 0.5 * g, rnd(1.1, 1.16), b);
      else m.play(pick(['madera_a', 'madera_b']), w, 0.42 * g, rnd(0.8, 0.88), b);
    }
  }
  step(t) {
    const s = this.st, sec = this.sec, last = this.left === 1;
    if (sec === 'madera') { if (MADERA.includes(s)) this.drum(t, 'madera', 'a', 1.4, 3); if (last && s >= 12) this.drum(t, 'repique', 'a', 0.5 + (s - 12) * 0.15); return; }
    if (sec === 'corte') {   // la llamada del repique y el golpe de todos juntos
      if (s === 0 || s === 3 || s === 6) this.drum(t, 'repique', 'a', 1, 2);
      if (s === 8 || s === 11 || s === 14) { this.drum(t, 'piano', 'a', 1.1, 2); this.drum(t, 'repique', 'a', 1, 2); this.drum(t, 'chico', 'a', 1, 2); }
      return;
    }
    if (s % 4 === 1) this.drum(t, 'chico', 'a', 1, 3); else if (s % 4 === 2) this.drum(t, 'chico', 'm', 0.45, 2);   // el chico: el pulso, la vía del tren
    for (const [p, hit, v] of PIANO[sec === 'repicado' ? 'repicado' : this.pian]) if (p === s) this.drum(t, 'piano', hit, v, 2);
    if (sec === 'repicado') { for (const [p, hit, v] of this.frase) if (p === s) this.drum(t, 'repique', hit, v, 1); }
    else if (last && s >= 8) { for (const [p, hit, v] of FILL) if (p === s) this.drum(t, 'repique', hit, v); }
    else if (MADERA.includes(s)) this.drum(t, 'madera', 'a', 0.75, 2);
  }
  update(dt, src, title) {
    const m = this.m, c = m.ctx; if (!this.b) this.b = m.bus();
    const on = !!src;
    if (on && !this.on) { if (this.off > 4 || !this.next) this.start(src.kind); this.on = true; }
    if (!on) { this.on = false; this.off += dt; }
    else this.off = 0;
    let g = 0, f = 19000, pan = 0;
    if (on) { const s = m.spat(src.x, src.y, src.z, 16, 180); g = s.g; f = s.f; pan = s.pan; if (title && g < 0.08) { g = 0.08; f = Math.min(f, 2400); } }
    this.lvl = g; m.set(this.b, g, f, pan);
    if (!on) return;
    if (this.next < c.currentTime - 0.4) this.next = c.currentTime + 0.05;
    while (this.next < c.currentTime + 0.3) {
      if (g > 0.003) this.step(this.next);
      this.bpm += (this.goal - this.bpm) * 0.05;
      this.next += 60 / this.bpm / 4;
      if (++this.st === 16) {
        this.st = 0;
        if (this.sec === 'base') this.goal = Math.min(this.goal + 0.7, 132);   // se van entusiasmando
        if (this.sec === 'repicado') this.frase = pick(REPIQUE);
        if (--this.left <= 0) this.section();
      }
    }
  }
}

export class Muestras {
  constructor(audio) { this.a = audio; this.buf = {}; this.ok = false; this.started = false; this.lx = 0; this.ly = 0; this.lz = 0; this.rx = 1; this.rz = 0; this.fwN = 0; this.cu = new Cuerda(this); this.bedV = null; }
  get ctx() { return this.a.ctx; }
  // Durante la pantalla de carga: decodifica todos los MP3 en un contexto "sin parlantes" (no necesita que nadie
  // toque la pantalla). Un AudioBuffer sirve después en cualquier contexto, así que al arrancar el sonido ya están listos.
  predecode() {
    if (this.pre) return this.pre;
    const OAC = window.OfflineAudioContext || window.webkitOfflineAudioContext; let oc = null;
    try { oc = OAC ? new OAC(2, 1, 48000) : null; } catch (e) { oc = null; }
    if (!oc) return (this.pre = Promise.resolve(false));
    const keys = Object.keys(RAW); let n = 0;
    const one = k => new Promise(res => {
      let once = false; const fin = b => { if (once) return; once = true; if (b) { b.off = onset(b); this.buf[k] = b; } n++; if (this.onProgress) this.onProgress(n / keys.length); res(); };
      try { const p = oc.decodeAudioData(bytes(RAW[k]).buffer, b => fin(b), () => fin(null)); if (p && p.catch) p.catch(() => fin(null)); } catch (e) { fin(null); }
    });
    const all = Promise.all(keys.map(one)), cap = new Promise(r => setTimeout(r, 12000));   // si el navegador no contesta, se sigue igual
    return (this.pre = Promise.race([all, cap]).then(() => !!this.buf.piano_a && !!this.buf.chico_a));
  }
  init() {
    const c = this.a.ctx; if (!c || this.started || !this.a.master) return; this.started = true;
    this.out = c.createGain(); this.out.gain.value = 0.9; this.out.connect(this.a.master);
    // lo que no se pudo decodificar en la carga se decodifica ahora con el contexto de verdad
    (this.pre || Promise.resolve()).then(() => {
      const keys = Object.keys(RAW).filter(k => !this.buf[k]); let left = keys.length;
      const done = (k, b) => { if (b) { b.off = onset(b); this.buf[k] = b; } if (--left <= 0) this.ok = !!this.buf.piano_a && !!this.buf.chico_a; };
      if (!keys.length) { left = 1; done(null, null); return; }
      for (const k of keys) {
        try {
          let once = false; const fin = b => { if (!once) { once = true; done(k, b); } };
          const p = c.decodeAudioData(bytes(RAW[k]).buffer, b => fin(b), () => fin(null)); if (p && p.catch) p.catch(() => fin(null));
        } catch (e) { done(k, null); }
      }
    });
  }
  // quien escucha: Capi (o el centro de la cámara en la pantalla de inicio), con la derecha de la cámara para el paneo
  listen(p, cam) {
    this.lx = p.x; this.ly = p.y; this.lz = p.z;
    const e = cam.matrixWorld.elements, h = Math.hypot(e[0], e[2]) || 1; this.rx = e[0] / h; this.rz = e[2] / h;
  }
  spat(x, y, z, ref, max) {
    const dx = x - this.lx, dy = y - this.ly, dz = z - this.lz, d = Math.hypot(dx, dy, dz), hz = Math.hypot(dx, dz) || 1;
    const g = clamp((max - d) / (max * 0.3), 0, 1) / (1 + (d / ref) * (d / ref));
    const f = clamp(19000 * Math.exp(-d / (ref * 2.4)), 450, 19000);
    const pan = clamp((dx * this.rx + dz * this.rz) / hz, -1, 1) * 0.7 * clamp(hz / 6, 0, 1);
    return { g, f, pan, d };
  }
  // una fuente en el mundo: ganancia → filtro (el aire se come los agudos) → paneo
  bus() {
    const c = this.ctx, g = c.createGain(), f = c.createBiquadFilter(), p = c.createStereoPanner ? c.createStereoPanner() : null;
    g.gain.value = 0; f.type = 'lowpass'; f.frequency.value = 19000; f.Q.value = 0.4;
    const inp = c.createGain(); inp.connect(g); g.connect(f); if (p) { f.connect(p); p.connect(this.out); } else f.connect(this.out);
    return { in: inp, g, f, p };
  }
  set(b, g, f, pan, k = 0.08) {
    const t = this.ctx.currentTime; b.g.gain.setTargetAtTime(g, t, k); b.f.frequency.setTargetAtTime(f, t, k); if (b.p) b.p.pan.setTargetAtTime(pan, t, k);
  }
  drop(b) { try { b.in.disconnect(); b.g.disconnect(); b.f.disconnect(); if (b.p) b.p.disconnect(); } catch (e) { /* ya estaba suelto */ } }
  play(n, t, g = 1, r = 1, dest = this.out, loop = false) {
    const b = this.buf[n]; if (!b) return null; const c = this.ctx, s = c.createBufferSource(), v = c.createGain();
    s.buffer = b; s.playbackRate.value = r; v.gain.value = g; s.connect(v); v.connect(dest);
    if (loop) { s.loop = true; s.loopStart = 0.4; s.loopEnd = b.duration - 0.4; }
    s.start(Math.max(t, c.currentTime), b.off); s.onended = () => { try { v.disconnect(); } catch (e) { /* nada */ } }; return s;
  }
  // un sonido suelto desde un punto: o = { ref, max, gain, rate, delay (llega a la velocidad del sonido), wait }
  at(n, x, y, z, o = {}) {
    if (!this.ok || !this.buf[n]) return null;
    const s = this.spat(x, y, z, o.ref || 10, o.max || 120); if (s.g * (o.gain || 1) < 0.003) return null;
    const b = this.bus(), t = this.ctx.currentTime + (o.wait || 0) + (o.delay ? s.d / SOUND : 0);
    b.g.gain.value = s.g * (o.gain || 1); b.f.frequency.value = s.f; if (b.p) b.p.pan.value = s.pan;
    const src = this.play(n, t, 1, o.rate || 1, b.in); if (!src) { this.drop(b); return null; }
    if (o.fw) this.fwN++;
    src.addEventListener('ended', () => { if (o.fw) this.fwN--; this.drop(b); });
    return src;
  }
  // ---------- usos ----------
  firework(x, y, z) {
    if (this.fwN > 9) return;   // en el final hay muchos a la vez: con diez voces alcanza
    const n = pick(['fw_estallido_a', 'fw_estallido_b', 'fw_estallido_a', 'fw_trueno_a', 'fw_trueno_b']);
    this.at(n, x, y, z, { ref: 46, max: 360, delay: true, gain: rnd(0.75, 1), rate: rnd(0.88, 1.08), fw: true });
    if (Math.random() < 0.45) this.at(pick(['fw_crepitar_a', 'fw_crepitar_b']), x, y, z, { ref: 38, max: 280, delay: true, wait: rnd(0.25, 0.55), gain: rnd(0.4, 0.6), rate: rnd(0.95, 1.05), fw: true });
  }
  // el chisporroteo continuo del gran final de Año Nuevo
  bed(on, x, y, z) {
    if (!this.ok) return;
    if (on && !this.bedV) { const b = this.bus(), src = this.play('fw_final', this.ctx.currentTime, 1, 1, b.in, true); this.bedV = { b, src }; }
    if (!this.bedV) return;
    const s = this.spat(x, y, z, 40, 340); this.set(this.bedV.b, on ? s.g * 0.7 : 0, s.f, s.pan, on ? 0.3 : 0.9);
    if (!on) { const v = this.bedV; this.bedV = null; try { v.src.stop(this.ctx.currentTime + 4); } catch (e) { /* nada */ } setTimeout(() => this.drop(v.b), 4500); }
  }
  horse(p, loud) {
    if (loud) this.at(pick(['caballo_relincho_a', 'caballo_relincho_a', 'caballo_relincho_b']), p.x, p.y + 1.6, p.z, { ref: 10, max: 140, gain: rnd(0.75, 1), rate: rnd(0.92, 1.08) });
    else this.at(pick(['caballo_resoplido_a', 'caballo_resoplido_b']), p.x, p.y + 1.4, p.z, { ref: 5, max: 55, gain: rnd(0.6, 0.9), rate: rnd(0.9, 1.1) });
  }
  // cada cuadro: la cuerda de tambores (src = { x, y, z, kind } o null)
  frame(dt, drums, title, paused) {
    if (!this.started) this.init();
    if (!this.ok || this.ctx.state !== 'running') { this.cu.lvl = 0; return; }
    if (paused !== this.paused) { this.paused = paused; this.out.gain.setTargetAtTime(paused ? 0.18 : 0.9, this.ctx.currentTime, 0.15); }   // en pausa, el mundo se oye de lejos
    this.cu.update(dt, drums, title);
  }
  get level() { return this.ok ? this.cu.lvl : 0; }
}
