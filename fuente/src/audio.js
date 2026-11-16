// AudioSynth: música procedural adaptativa (candombe electrónico + milonga chill) y efectos, todo con Web Audio API.
import { clamp } from './util.js';

const mtof = m => 440 * Math.pow(2, (m - 69) / 12);
// Progresión de 8 compases: Am7 – Dm7 – G7 – Cmaj7 – Fmaj7 – Dm7 – E7 – Am
const CH = [
  { b: 45, n: [57, 60, 64, 67] }, { b: 50, n: [57, 60, 62, 65] }, { b: 43, n: [55, 59, 62, 65] }, { b: 48, n: [55, 60, 64, 67] },
  { b: 41, n: [57, 60, 64, 65] }, { b: 50, n: [57, 60, 62, 65] }, { b: 40, n: [56, 59, 62, 64] }, { b: 45, n: [57, 60, 64, 69] }
];
const LEAD = [
  [[0, 76, 5], [8, 72, 3], [12, 74, 3]], [[0, 77, 5], [6, 74, 2], [8, 69, 6]], [[0, 74, 3], [4, 71, 3], [8, 67, 3], [12, 71, 3]], [[0, 72, 6], [8, 76, 7]],
  [[0, 69, 5], [6, 72, 2], [8, 76, 3], [12, 77, 3]], [[0, 74, 6], [8, 77, 3], [12, 81, 3]], [[0, 76, 5], [6, 80, 2], [8, 83, 3], [12, 80, 3]], [[0, 81, 12]]
];
const CLAVE = [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0], PIANO = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0], BASS = [[0, 0], [6, 7], [8, 12], [12, 7]];

export class AudioSynth {
  constructor() { this.ctx = null; this.muted = false; this.step16 = 0; this.next = 0; this.pct = 0; this.alarmT = 0; this.deficit = false; }
  start() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    try {
      const AC = window.AudioContext || window.webkitAudioContext; const c = this.ctx = new AC();
      this.master = c.createGain(); this.master.gain.value = this.muted ? 0 : 0.55;
      const comp = c.createDynamicsCompressor(); this.master.connect(comp); comp.connect(c.destination);
      this.music = c.createGain(); this.music.gain.value = 0.34; this.music.connect(this.master);
      this.sfx = c.createGain(); this.sfx.gain.value = 0.8; this.sfx.connect(this.master);
      const len = c.sampleRate * 2, buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      this.noiseBuf = buf;
      // Ambiente: viento, agua y zumbido de transformadores
      const src = c.createBufferSource(); src.buffer = buf; src.loop = true; src.start();
      const mk = (type, f, q) => { const fl = c.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q; const g = c.createGain(); g.gain.value = 0; src.connect(fl); fl.connect(g); g.connect(this.master); return { fl, g }; };
      this.aWind = mk('bandpass', 420, 0.8); this.aWater = mk('lowpass', 1400, 0.3);
      const hum = c.createOscillator(); hum.type = 'sawtooth'; hum.frequency.value = 100; const hf = c.createBiquadFilter(); hf.type = 'lowpass'; hf.frequency.value = 260; this.aHum = c.createGain(); this.aHum.gain.value = 0;
      hum.connect(hf); hf.connect(this.aHum); this.aHum.connect(this.master); hum.start();
      this.next = c.currentTime + 0.3;
    } catch (e) { this.ctx = null; }
  }
  setMuted(m) { this.muted = m; if (this.ctx) this.master.gain.setTargetAtTime(m ? 0 : 0.55, this.ctx.currentTime, 0.05); }

  tone(f, dur, type = 'square', vol = 0.1, when = 0, f2 = null, dest = null, attack = 0.005) {
    if (!this.ctx) return; const c = this.ctx, t = c.currentTime + when, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(dest || this.sfx); o.start(t); o.stop(t + dur + 0.02);
  }
  noise(dur, vol, type, f, q = 1, when = 0, dest = null) {
    if (!this.ctx) return; const c = this.ctx, t = c.currentTime + when, s = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain();
    s.buffer = this.noiseBuf; s.loop = true; fl.type = type; fl.frequency.value = f; fl.Q.value = q;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(fl); fl.connect(g); g.connect(dest || this.sfx); s.start(t, Math.random()); s.stop(t + dur + 0.02);
  }
  // ---- Efectos ----
  step(m) { if (m === 'agua') { this.noise(0.12, 0.1, 'lowpass', 900); this.tone(500, 0.06, 'sine', 0.04, 0, 250); } else if (m === 'hormigon') { this.noise(0.04, 0.09, 'highpass', 2200); this.tone(180, 0.03, 'square', 0.03); } else this.noise(0.07, 0.1, 'bandpass', 800, 0.8); }
  jump() { this.tone(300, 0.14, 'square', 0.07, 0, 640); }
  land() { this.noise(0.12, 0.16, 'lowpass', 320); }
  splash(v = 1) { this.noise(0.4, 0.2 * v, 'bandpass', 1300, 0.6); this.noise(0.25, 0.1 * v, 'highpass', 3000); }
  click() { this.tone(880, 0.04, 'square', 0.05); }
  ok() { this.tone(660, 0.1, 'triangle', 0.14, 0, 990); this.tone(1320, 0.12, 'sine', 0.06, 0.06); }
  bad() { this.tone(210, 0.2, 'sawtooth', 0.08, 0, 140); }
  spark() { this.noise(0.05, 0.08, 'highpass', 3500); this.tone(1900, 0.03, 'square', 0.03); }
  blip(p = 0) { this.tone(520 + p * 40, 0.03, 'square', 0.025); }
  power() { this.tone(70, 0.9, 'sawtooth', 0.09, 0, 260); this.tone(140, 0.9, 'square', 0.04, 0.05, 520); this.noise(0.5, 0.05, 'bandpass', 600, 2, 0.4); }
  gate() { this.noise(0.6, 0.07, 'bandpass', 220, 3); this.tone(90, 0.6, 'sawtooth', 0.05, 0, 70); }
  tero(v = 1) { for (let k = 0; k < 2; k++) { this.tone(2300, 0.08, 'sine', 0.07 * v, k * 0.28, 1750); this.tone(2500, 0.13, 'sine', 0.07 * v, k * 0.28 + 0.09, 1500); } }
  fanfare() { [72, 76, 79, 84].forEach((m, i) => this.tone(mtof(m), 0.2, 'square', 0.08, i * 0.11)); [72, 76, 79, 84].forEach(m => this.tone(mtof(m), 0.9, 'triangle', 0.07, 0.46)); this.tone(mtof(96), 0.5, 'sine', 0.05, 0.5); }
  boom() { this.noise(0.5, 0.2, 'lowpass', 500, 0.5); this.noise(0.3, 0.06, 'highpass', 2500, 0.5, 0.05); }
  thunder() { this.noise(1.6, 0.34, 'lowpass', 170, 0.4); this.noise(0.25, 0.2, 'bandpass', 900, 0.5); this.tone(52, 1.4, 'sine', 0.2, 0.05, 34); }
  alarm() { this.tone(660, 0.16, 'sine', 0.06); this.tone(520, 0.2, 'sine', 0.06, 0.18); }

  // ---- Música ----
  drum(kind, t, v) {
    const c = this.ctx, when = t - c.currentTime;
    if (kind === 'clave') { this.tone(1900, 0.045, 'triangle', 0.09 * v, when, null, this.music); this.noise(0.02, 0.05 * v, 'highpass', 4000, 1, when, this.music); }
    else if (kind === 'chico') this.tone(410, 0.07, 'sine', 0.06 * v, when, 330, this.music);
    else if (kind === 'piano') { this.tone(120, 0.22, 'sine', 0.2 * v, when, 62, this.music); this.noise(0.03, 0.04 * v, 'lowpass', 900, 1, when, this.music); }
    else if (kind === 'repique') this.tone(260, 0.09, 'triangle', 0.08 * v, when, 200, this.music);
  }
  pad(ch, t, dur, warm) {
    const c = this.ctx, g = c.createGain(), f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 700 + warm * 900;
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.05 + warm * 0.03, t + dur * 0.35); g.gain.linearRampToValueAtTime(0.0001, t + dur * 1.05);
    f.connect(g); g.connect(this.music);
    const notes = warm > 0.6 ? ch.n.concat([ch.n[0] + 12]) : ch.n;
    for (const n of notes) for (const det of [-5, 5]) { const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = mtof(n); o.detune.value = det; o.connect(f); o.start(t); o.stop(t + dur * 1.1); }
  }
  schedule() {
    const c = this.ctx, sd = 60 / 92 / 4;
    while (this.next < c.currentTime + 0.25) {
      const s = this.step16, bar = Math.floor(s / 16) % 8, st = s % 16, ch = CH[bar], t = this.next, w = t - c.currentTime, p = this.pct;
      const layer = p >= 90 ? 3 : p >= 65 ? 2 : p >= 35 ? 1 : 0;
      if (st === 0) this.pad(ch, t, sd * 16, layer / 3);
      for (const [bs, iv] of BASS) if (bs === st) this.tone(mtof(ch.b + iv), sd * 2.6, 'triangle', 0.16, w, null, this.music, 0.01);
      if (layer >= 1) { if (CLAVE[st]) this.drum('clave', t, 1); if (st % 4 !== 0) this.drum('chico', t, st % 4 === 1 ? 1 : 0.55); }
      if (layer >= 2) { if (PIANO[st]) this.drum('piano', t, 1); if (st % 2 === 0) this.tone(mtof(ch.n[(st / 2) % 4] + 12), sd * 1.6, 'triangle', 0.045, w, null, this.music); if (bar % 4 === 3 && st >= 10) this.drum('repique', t, 0.6 + (st - 10) * 0.08); }
      if (layer >= 3) for (const [ls, m, l] of LEAD[bar]) if (ls === st) { this.tone(mtof(m), sd * l, 'square', 0.04, w, null, this.music, 0.02); this.tone(mtof(m) * 1.003, sd * l, 'sine', 0.05, w, null, this.music, 0.03); }
      this.step16++; this.next += sd;
    }
  }
  update(dt, st) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    this.pct = st.pct;
    if (this.next < this.ctx.currentTime - 1) this.next = this.ctx.currentTime + 0.1;
    this.schedule();
    const now = this.ctx.currentTime;
    this.aWind.g.gain.setTargetAtTime(clamp(st.windNear * (0.03 + st.wind * 0.16), 0, 0.2), now, 0.3);
    this.aWind.fl.frequency.setTargetAtTime(320 + st.wind * 500, now, 0.5);
    this.aWater.g.gain.setTargetAtTime(st.waterNear * 0.16, now, 0.3);
    this.aHum.gain.setTargetAtTime(st.humNear * 0.07, now, 0.3);
    if (st.deficit) { this.alarmT -= dt; if (this.alarmT <= 0) { this.alarm(); this.alarmT = 1.6; } } else this.alarmT = 0.4;
  }
}
