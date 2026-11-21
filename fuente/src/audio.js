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
  constructor() { this.ctx = null; this.muted = false; this.hold = false; this.step16 = 0; this.next = 0; this.pct = 0; this.alarmT = 0; this.deficit = false; this.title = true; this.soft = 0; this.realDrums = false; this.duck = 0; this.ev = { bird: 2, cric: 1, bell: 9, bus: 6, lap: 3 }; }
  start() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    try {
      const AC = window.AudioContext || window.webkitAudioContext; const c = this.ctx = new AC();
      this.master = c.createGain(); this.master.gain.value = this.muted || this.hold ? 0 : 0.55;
      const comp = c.createDynamicsCompressor(); this.master.connect(comp); comp.connect(c.destination);
      this.music = c.createGain(); this.music.gain.value = 0.34; this.music.connect(this.master);
      this.sfx = c.createGain(); this.sfx.gain.value = 0.8; this.sfx.connect(this.master);
      const len = c.sampleRate * 2, buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      this.noiseBuf = buf;
      // Ambiente: viento, agua y zumbido de transformadores
      const src = c.createBufferSource(); src.buffer = buf; src.loop = true; src.start();
      const mk = (type, f, q) => { const fl = c.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q; const g = c.createGain(); g.gain.value = 0; src.connect(fl); fl.connect(g); g.connect(this.master); return { fl, g }; };
      this.aWind = mk('bandpass', 420, 0.8); this.aWater = mk('lowpass', 1400, 0.3); this.aCity = mk('lowpass', 190, 0.7);
      const hum = c.createOscillator(); hum.type = 'sawtooth'; hum.frequency.value = 100; const hf = c.createBiquadFilter(); hf.type = 'lowpass'; hf.frequency.value = 260; this.aHum = c.createGain(); this.aHum.gain.value = 0;
      hum.connect(hf); hf.connect(this.aHum); this.aHum.connect(this.master); hum.start();
      this.next = c.currentTime + 0.3;
    } catch (e) { this.ctx = null; }
  }
  setMuted(m) { this.muted = m; if (this.ctx) this.master.gain.setTargetAtTime(m || this.hold ? 0 : 0.55, this.ctx.currentTime, 0.05); }
  // mientras carga el juego el sonido queda en silencio (aunque ya se haya habilitado con un toque); después entra suave
  release() { this.hold = false; if (this.ctx) this.master.gain.setTargetAtTime(this.muted ? 0 : 0.55, this.ctx.currentTime, 0.35); }

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
  honk() { this.tone(392, 0.16, 'square', 0.045); this.tone(494, 0.16, 'square', 0.035); this.tone(392, 0.2, 'square', 0.045, 0.22); this.tone(494, 0.2, 'square', 0.035, 0.22); }
  bark(v = 1) { for (const d of [0, 0.17]) { this.tone(540, 0.08, 'sawtooth', 0.05 * v, d, 360); this.noise(0.08, 0.07 * v, 'bandpass', 1200, 2, d); } }
  boom() { this.noise(0.5, 0.2, 'lowpass', 500, 0.5); this.noise(0.3, 0.06, 'highpass', 2500, 0.5, 0.05); }
  thunder() { this.noise(1.6, 0.34, 'lowpass', 170, 0.4); this.noise(0.25, 0.2, 'bandpass', 900, 0.5); this.tone(52, 1.4, 'sine', 0.2, 0.05, 34); }
  alarm() { this.tone(660, 0.16, 'sine', 0.06); this.tone(520, 0.2, 'sine', 0.06, 0.18); }
  // ---- Ambiente de la pantalla de inicio y de la demostración ----
  swell(dur, vol, type, f, q, f2) {   // ruido que crece y se apaga: algo que pasa cerca
    if (!this.ctx) return; const c = this.ctx, t = c.currentTime, s = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain();
    s.buffer = this.noiseBuf; s.loop = true; fl.type = type; fl.Q.value = q; fl.frequency.setValueAtTime(f, t); fl.frequency.linearRampToValueAtTime(f2, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + dur * 0.5); g.gain.linearRampToValueAtTime(0.0001, t + dur);
    s.connect(fl); fl.connect(g); g.connect(this.sfx); s.start(t, Math.random()); s.stop(t + dur + 0.05);
  }
  benteveo(v = 1) {   // «bien-te-veo»
    const a = 0.032 * v, d = 0.04 * Math.random();
    this.tone(2750, 0.13, 'sine', a, d, 2300); this.tone(2100, 0.08, 'sine', a * 0.8, d + 0.17); this.tone(2950, 0.3, 'sine', a, d + 0.31, 2150); this.tone(5900, 0.3, 'sine', a * 0.12, d + 0.31, 4300);
  }
  chirps(v = 1) { const n = 3 + Math.floor(Math.random() * 3), f = 3400 + Math.random() * 1200; for (let k = 0; k < n; k++) this.tone(f + k * 60, 0.045, 'sine', 0.018 * v, k * 0.075, f * 0.82); }
  cricket(v = 1) { const f = 4400 + Math.random() * 500; for (let r = 0; r < 2; r++) for (let k = 0; k < 3; k++) this.tone(f, 0.022, 'sine', 0.011 * v, r * 0.32 + k * 0.045); }
  bell(v = 1) { for (const d of [0, 0.19]) { this.tone(2650, 0.55, 'sine', 0.026 * v, d); this.tone(3980, 0.35, 'sine', 0.01 * v, d); } }
  busBy(v = 1) { this.swell(3, 0.03 * v, 'bandpass', 380, 0.8, 620); this.tone(440, 3, 'sine', 0.008 * v, 0, 610); }
  strum(ch, v = 1) { ch.forEach((m, i) => { const f = mtof(m), w = i * 0.017; this.tone(f, 1.1, 'triangle', 0.05 * v, w, f * 0.996, null, 0.003); this.tone(f * 2, 0.4, 'sine', 0.014 * v, w, null, null, 0.003); }); }   // rasgueo de guitarra
  cencerro(v = 1) { this.tone(780, 0.28, 'square', 0.012 * v, 0, 760); this.tone(1265, 0.22, 'triangle', 0.016 * v, 0.004, 1240); this.noise(0.03, 0.02 * v, 'bandpass', 2600, 4); }   // campana de la yegua madrina
  crackle(v = 1) { this.noise(0.025, 0.06 * v, 'highpass', 2400 + Math.random() * 2400, 1); }   // chisporroteo del fogón
  cheer(v = 1) { this.swell(1.8, 0.06 * v, 'bandpass', 850, 0.6, 1250); if (Math.random() < 0.6) this.tone(1500 + Math.random() * 500, 0.35, 'sine', 0.02 * v, 0.3, 2300); }   // aplausos y gritos del público
  lap(v = 1) { this.noise(0.55, 0.035 * v, 'lowpass', 520, 0.6); this.tone(330, 0.09, 'sine', 0.012 * v, 0.12, 190); }
  ambience(dt, a) {
    const E = this.ev, day = 1 - a.night;
    this.aCity.g.gain.setTargetAtTime(a.city * 0.045 * (0.45 + 0.55 * day), this.ctx.currentTime, 0.6);
    this.soft = a.plaza * (a.hour >= 17.5 || a.hour < 1 ? 1 : 0.4);
    if ((E.bird -= dt) <= 0) { E.bird = 2.5 + Math.random() * 5.5; if (day > 0.5 && a.green > 0.2) { const r = Math.random(); if (r < 0.5) this.benteveo(a.green); else if (r < 0.72 && a.field > 0.3) this.tero(0.45 * a.field); else this.chirps(a.green); } }
    if ((E.cric -= dt) <= 0) { E.cric = 0.4 + Math.random() * 1.2; if (a.night > 0.5) this.cricket(0.5 + 0.5 * a.green); }
    if ((E.bell -= dt) <= 0) { E.bell = 11 + Math.random() * 15; if (a.city > 0.35 && day > 0.3) this.bell(a.city); }
    if ((E.bus -= dt) <= 0) { E.bus = 8 + Math.random() * 10; if (a.city > 0.3) this.busBy(a.city); }
    if ((E.lap -= dt) <= 0) { E.lap = 2 + Math.random() * 4; if (a.water > 0.4) this.lap(a.water); }
  }

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
    const c = this.ctx, sd = 60 / (this.title ? 74 : 92) / 4;
    while (this.next < c.currentTime + 0.25) {
      const s = this.step16, bar = Math.floor(s / 16) % 8, st = s % 16, ch = CH[bar], t = this.next, w = t - c.currentTime, p = this.pct;
      const layer = p >= 90 ? 3 : p >= 65 ? 2 : p >= 35 ? 1 : 0;
      if (this.title) { this.calm(s, bar, st, ch, t, w, sd); this.step16++; this.next += sd; continue; }
      if (st === 0) this.pad(ch, t, sd * 16, layer / 3);
      for (const [bs, iv] of BASS) if (bs === st) this.tone(mtof(ch.b + iv), sd * 2.6, 'triangle', 0.16, w, null, this.music, 0.01);
      if (layer >= 1) { if (CLAVE[st]) this.drum('clave', t, 1); if (st % 4 !== 0) this.drum('chico', t, st % 4 === 1 ? 1 : 0.55); }
      if (layer >= 2) { if (PIANO[st]) this.drum('piano', t, 1); if (st % 2 === 0) this.tone(mtof(ch.n[(st / 2) % 4] + 12), sd * 1.6, 'triangle', 0.045, w, null, this.music); if (bar % 4 === 3 && st >= 10) this.drum('repique', t, 0.6 + (st - 10) * 0.08); }
      if (layer >= 3) for (const [ls, m, l] of LEAD[bar]) if (ls === st) { this.tone(mtof(m), sd * l, 'square', 0.04, w, null, this.music, 0.02); this.tone(mtof(m) * 1.003, sd * l, 'sine', 0.05, w, null, this.music, 0.03); }
      if (!this.llamada && this.soft > 0.05) { const v = this.soft * 0.7; if (CLAVE[st]) this.drum('clave', t, v); if (st % 2) this.drum('chico', t, v * 0.8); if (PIANO[st] || st === 8) this.drum('piano', t, v * 1.2); if ([3, 7, 11, 14].includes(st)) this.drum('repique', t, v); }
      if (this.llamada && !this.realDrums) { if (CLAVE[st]) this.drum('clave', t, 1.3); this.drum('chico', t, st % 2 ? 1.3 : 0.7); if (PIANO[st] || st === 8 || st === 14) this.drum('piano', t, 1.6); if ([3, 6, 7, 11, 13, 14, 15].includes(st)) this.drum('repique', t, 1.2); }
      this.step16++; this.next += sd;
    }
  }
  // Versión tranquila del tema para la pantalla de inicio: colchón, bajo suave, cajita de música y la melodía cada dos vueltas
  calm(s, bar, st, ch, t, w, sd) {
    const M = this.music;
    if (st === 0) { this.pad(ch, t, sd * 16, 0.15); this.tone(mtof(ch.b), sd * 7, 'triangle', 0.1, w, null, M, 0.03); }
    if (st === 8) this.tone(mtof(ch.b + 7), sd * 5, 'triangle', 0.07, w, null, M, 0.03);
    if (st % 4 === 2) { const n = ch.n[((st >> 2) + bar) % 4] + 12; this.tone(mtof(n), 0.8, 'sine', 0.04, w, null, M, 0.008); this.tone(mtof(n) * 2, 0.3, 'sine', 0.01, w, null, M, 0.008); }
    if (Math.floor(s / 128) % 2 === 1) for (const [ls, m, l] of LEAD[bar]) if (ls === st) { this.tone(mtof(m), sd * l * 1.1, 'triangle', 0.026, w, null, M, 0.07); this.tone(mtof(m) * 1.002, sd * l * 1.1, 'sine', 0.03, w, null, M, 0.09); }
    if (this.soft > 0.05) { const v = this.soft * 0.55; if (CLAVE[st]) this.drum('clave', t, v); if (st % 2) this.drum('chico', t, v * 0.8); if (PIANO[st] || st === 8) this.drum('piano', t, v * 1.2); if ([3, 7, 11, 14].includes(st)) this.drum('repique', t, v); }
  }
  update(dt, st) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    this.pct = st.pct; this.title = !!st.title;
    if (this.next < this.ctx.currentTime - 1) this.next = this.ctx.currentTime + 0.1;
    this.schedule();
    const now = this.ctx.currentTime;
    this.aWind.g.gain.setTargetAtTime(clamp(st.windNear * (0.03 + st.wind * 0.16), 0, 0.2), now, 0.3);
    this.aWind.fl.frequency.setTargetAtTime(320 + st.wind * 500, now, 0.5);
    this.aWater.g.gain.setTargetAtTime(st.waterNear * 0.16, now, 0.3);
    this.aHum.gain.setTargetAtTime(st.humNear * 0.07, now, 0.3);
    // cuando se oye la cuerda de tambores de verdad, la música se corre a un costado para no pisarle el ritmo
    this.music.gain.setTargetAtTime((this.title ? 0.3 : 0.34) * (1 - 0.82 * clamp(this.duck * 1.7, 0, 1)), now, this.duck > 0.05 ? 0.35 : 0.8);
    if (st.amb) this.ambience(dt, st.amb); else { this.aCity.g.gain.setTargetAtTime(0, now, 0.5); this.soft = 0; }
    if (this.realDrums) { if (this.duck > 0.02) this.soft = 0; } else this.soft = Math.max(this.soft, st.festSoft || 0, st.carnaval && this.title ? 0.3 : 0);
    if (st.deficit) { this.alarmT -= dt; if (this.alarmT <= 0) { this.alarm(); this.alarmT = 1.6; } } else this.alarmT = 0.4;
  }
}
