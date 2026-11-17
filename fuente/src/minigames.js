// Minijuegos técnicos estilo arcade (10–15 s): sincronización de fase, alineación heliotrópica, compuertas y enrutamiento.
import { clamp, lerp, rng } from './util.js';

const $ = id => document.getElementById(id);
export const W = 560, H = 300, FONT = '"Lilita One","Arial Black",sans-serif';
export const txt = (g, s, x, y, size, col, align = 'center', font = FONT) => { g.font = `${size}px ${font}`; g.fillStyle = col; g.textAlign = align; g.textBaseline = 'middle'; g.fillText(s, x, y); };
export const rr = (g, x, y, w, h, r) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); };

// 1) Sincronización de fase: detener el indicador dentro de la ventana verde de 50.0 Hz
class Sync {
  constructor(m, o) { this.m = m; this.title = o.title || 'Sincronización de fase'; this.hint = 'Pulsá Espacio o hacé clic cuando la aguja pase por la ventana verde de 50,0 Hz. Tres aciertos acoplan el generador.'; this.hits = 0; this.t = Math.random() * 6; this.f = 50; this.flash = 0; this.miss = 0; this.win = 0.34; }
  speed() { return [2.3, 3.0, 3.8][Math.min(2, this.hits)]; }
  update(dt) { this.t += dt * this.speed(); this.f = 50 + 1.75 * Math.sin(this.t) + 0.12 * Math.sin(this.t * 3.7); this.flash = Math.max(0, this.flash - dt); this.miss = Math.max(0, this.miss - dt); }
  act() {
    if (this.done) return;
    if (Math.abs(this.f - 50) <= this.win) { this.hits++; this.flash = 0.35; this.m.audio.ok(); this.win = [0.34, 0.27, 0.21][Math.min(2, this.hits)]; if (this.hits >= 3) this.m.finish(true, '¡ACOPLADO A LA RED!'); }
    else { this.miss = 0.4; this.m.audio.bad(); this.m.audio.spark(); this.win = Math.min(0.4, this.win + 0.03); }
  }
  key(c, d) { if (d && (c === 'Space' || c === 'Enter' || c === 'KeyE')) this.act(); }
  down() { this.act(); }
  draw(g) {
    const X = f => 60 + (f - 48) / 4 * 440, y = 150;
    txt(g, this.f.toFixed(1).replace('.', ',') + ' Hz', W / 2, 62, 54, this.miss > 0 ? '#ff6b4a' : Math.abs(this.f - 50) <= this.win ? '#57e389' : '#fff7e6');
    rr(g, 60, y - 16, 440, 32, 10); g.fillStyle = '#0f2140'; g.fill(); g.strokeStyle = '#2a4374'; g.lineWidth = 3; g.stroke();
    g.fillStyle = this.flash > 0 ? '#b8ffd6' : '#2fbf71'; g.fillRect(X(50 - this.win), y - 14, X(50 + this.win) - X(50 - this.win), 28);
    for (let f = 48; f <= 52; f += 0.5) { g.fillStyle = '#6f84a8'; g.fillRect(X(f) - 1, y + 20, 2, f % 1 === 0 ? 10 : 5); if (f % 1 === 0) txt(g, f.toFixed(1).replace('.', ','), X(f), y + 42, 13, '#a9bbd6', 'center', 'Nunito,sans-serif'); }
    const nx = X(this.f); g.fillStyle = this.miss > 0 ? '#ff6b4a' : '#ffc93c'; g.beginPath(); g.moveTo(nx, y - 4); g.lineTo(nx - 11, y - 34); g.lineTo(nx + 11, y - 34); g.closePath(); g.fill(); g.fillRect(nx - 2, y - 16, 4, 32);
    if (this.miss > 0) for (let i = 0; i < 6; i++) { g.strokeStyle = '#ffd23f'; g.lineWidth = 2; g.beginPath(); const a = i * 1.05 + this.t; g.moveTo(nx + Math.cos(a) * 8, y + Math.sin(a) * 8); g.lineTo(nx + Math.cos(a) * 24, y + Math.sin(a) * 24); g.stroke(); }
    ['R', 'S', 'T'].forEach((p, i) => { const cx = W / 2 - 80 + i * 80, cy = 244, on = i < this.hits; g.beginPath(); g.arc(cx, cy, 22, 0, 7); g.fillStyle = on ? '#57e389' : '#13284c'; g.fill(); g.lineWidth = 4; g.strokeStyle = on ? '#d6ffe7' : '#2a4374'; g.stroke(); txt(g, p, cx, cy + 1, 22, on ? '#0b3a22' : '#6f84a8'); });
  }
}

// 2) Alineación heliotrópica: limpiar el polvo y orientar inclinación + azimut hasta 100% de irradiancia
class Helio {
  constructor(m, o) {
    this.m = m; this.title = o.title || 'Alineación heliotrópica'; const r = rng(Math.floor(Math.random() * 1e6));
    this.dust = []; for (let i = 0; i < 14; i++) this.dust.push({ x: 150 + r() * 260, y: 90 + r() * 130, a: 1 });
    this.tt = 20 + r() * 30; this.ta = -50 + r() * 100; this.tilt = this.tt + (r() < 0.5 ? -1 : 1) * (14 + r() * 10); this.az = this.ta + (r() < 0.5 ? -1 : 1) * (35 + r() * 25);
    this.tilt = clamp(this.tilt, 0, 60); this.az = clamp(this.az, -80, 80); this.hold = 0; this.keys = {}; this.phase = 0; this.t = 0; this.drag = null;
    this.hint = 'Primero limpiá el polvo: pasá el cursor sobre el panel o mantené Espacio.';
  }
  dirt() { return this.dust.reduce((s, d) => s + d.a, 0) / this.dust.length; }
  irr() { const dt = (this.tilt - this.tt) * Math.PI / 180, da = (this.az - this.ta) * Math.PI / 180; return 100 * Math.pow(Math.max(0, Math.cos(dt) * Math.cos(da * 0.9)), 6); }
  update(dt) {
    this.t += dt;
    if (this.phase === 0) {
      if (this.keys.Space) { const d = this.dust.find(x => x.a > 0); if (d) { d.a = Math.max(0, d.a - dt * 9); if (d.a === 0) this.m.audio.click(); } }
      if (this.dirt() < 0.03) { this.phase = 1; this.m.audio.ok(); this.hint = 'Ahora orientá el panel: ←/→ cambia el azimut y ↑/↓ la inclinación (o arrastrá). Llevá la irradiancia al 100\u00a0%.'; this.m.setHint(this.hint); }
    } else {
      const k = this.keys, v = 42 * dt;
      if (k.ArrowLeft || k.KeyA) this.az -= v; if (k.ArrowRight || k.KeyD) this.az += v; if (k.ArrowUp || k.KeyW) this.tilt += v * 0.7; if (k.ArrowDown || k.KeyS) this.tilt -= v * 0.7;
      this.az = clamp(this.az, -80, 80); this.tilt = clamp(this.tilt, 0, 60);
      if (this.irr() >= 97.5) { this.hold += dt; if (this.hold > 0.7 && !this.done) this.m.finish(true, '¡IRRADIANCIA AL 100\u00a0%!'); } else this.hold = 0;
    }
  }
  key(c, d) { this.keys[c] = d; }
  down(x, y) { this.drag = { x, y }; this.move(x, y); }
  up() { this.drag = null; }
  move(x, y) {
    if (this.phase === 0) { for (const d of this.dust) if (d.a > 0 && Math.hypot(d.x - x, d.y - y) < 34) { d.a = Math.max(0, d.a - 0.34); if (d.a === 0) this.m.audio.click(); } }
    else if (this.drag) { this.az = clamp(this.az + (x - this.drag.x) * 0.45, -80, 80); this.tilt = clamp(this.tilt - (y - this.drag.y) * 0.3, 0, 60); this.drag = { x, y }; }
  }
  draw(g) {
    const irr = this.phase ? this.irr() : 0, cx = 280, cy = 160;
    // sol objetivo
    const sx = cx + this.ta * 2.4, sy = 70 - this.tt * 0.6;
    g.fillStyle = '#ffd23f'; g.beginPath(); g.arc(sx, sy, 16, 0, 7); g.fill(); g.strokeStyle = '#ffd23f'; g.lineWidth = 3; for (let k = 0; k < 8; k++) { const a = k * 0.785 + this.t; g.beginPath(); g.moveTo(sx + Math.cos(a) * 21, sy + Math.sin(a) * 21); g.lineTo(sx + Math.cos(a) * 28, sy + Math.sin(a) * 28); g.stroke(); }
    // panel en perspectiva según azimut/inclinación
    const sk = this.phase ? this.az * 0.9 : 0, hh = this.phase ? 70 - this.tilt * 0.55 : 62;
    const pts = [[cx - 130 + sk, cy - hh], [cx + 130 + sk, cy - hh], [cx + 150 - sk * 0.3, cy + 62], [cx - 150 - sk * 0.3, cy + 62]];
    g.beginPath(); pts.forEach((p, i) => i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])); g.closePath();
    const c = Math.round(lerp(40, 70, irr / 100)); g.fillStyle = `rgb(${c - 20},${c + 20},${150 + irr * 0.9})`; g.fill(); g.strokeStyle = '#cfe3ff'; g.lineWidth = 4; g.stroke();
    g.strokeStyle = 'rgba(207,227,255,.5)'; g.lineWidth = 1.5;
    for (let i = 1; i < 6; i++) { const t = i / 6; g.beginPath(); g.moveTo(lerp(pts[0][0], pts[1][0], t), pts[0][1]); g.lineTo(lerp(pts[3][0], pts[2][0], t), pts[3][1]); g.stroke(); }
    for (let i = 1; i < 3; i++) { const t = i / 3; g.beginPath(); g.moveTo(lerp(pts[0][0], pts[3][0], t), lerp(pts[0][1], pts[3][1], t)); g.lineTo(lerp(pts[1][0], pts[2][0], t), lerp(pts[1][1], pts[2][1], t)); g.stroke(); }
    g.fillStyle = '#77808c'; g.fillRect(cx - 5, cy + 62, 10, 40);
    for (const d of this.dust) if (d.a > 0) { g.globalAlpha = d.a * 0.85; g.fillStyle = '#b89c6a'; g.beginPath(); g.arc(d.x, d.y, 30, 0, 7); g.fill(); g.globalAlpha = 1; }
    if (irr > 97) { g.globalAlpha = 0.35 + 0.3 * Math.sin(this.t * 20); g.fillStyle = '#ffe58a'; g.beginPath(); pts.forEach((p, i) => i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])); g.fill(); g.globalAlpha = 1; }
    // medidor
    rr(g, 500, 40, 30, 220, 8); g.fillStyle = '#0f2140'; g.fill(); g.strokeStyle = '#2a4374'; g.lineWidth = 3; g.stroke();
    const v = this.phase ? irr : (1 - this.dirt()) * 100; g.fillStyle = this.phase ? (irr > 97 ? '#ffd23f' : '#5ad1ff') : '#b89c6a'; g.fillRect(504, 256 - v * 2.12, 22, v * 2.12);
    txt(g, this.phase ? 'IRRADIANCIA' : 'LIMPIEZA', 515, 24, 12, '#a9bbd6', 'center', 'Nunito,sans-serif'); txt(g, Math.round(v) + '%', 515, 278, 18, '#fff7e6');
    if (this.phase) { txt(g, 'Azimut ' + Math.round(this.az) + '°', 20, 270, 15, '#a9bbd6', 'left', 'Nunito,sans-serif'); txt(g, 'Inclinación ' + Math.round(this.tilt) + '°', 20, 290, 15, '#a9bbd6', 'left', 'Nunito,sans-serif'); }
  }
}

// 3) Control de compuertas: estabilizar el embalse sin desbordar el río aguas abajo
class Gates {
  constructor(m, o) { this.m = m; this.title = o.title || 'Control de compuerta'; this.hint = 'Ajustá la apertura con ↑/↓ (o arrastrá la compuerta) para mantener el embalse en la franja verde sin pasar la línea roja aguas abajo.'; this.L = 0.86; this.u = 0.95; this.dn = 0.9; this.t = Math.random() * 9; this.prog = 0; this.keys = {}; this.drag = false; this.mw = 0; }
  update(dt) {
    this.t += dt; const k = this.keys;
    if (k.ArrowUp || k.KeyW) this.u += dt * 0.7; if (k.ArrowDown || k.KeyS) this.u -= dt * 0.7; this.u = clamp(this.u, 0, 1);
    const qin = 0.5 + 0.14 * Math.sin(this.t * 0.9) + 0.06 * Math.sin(this.t * 2.3 + 1), qout = this.u * (0.55 + 0.75 * this.L);
    this.L = clamp(this.L + (qin - qout) * 0.3 * dt, 0.05, 1); this.dn += (qout - this.dn) * Math.min(1, dt * 2.5);
    const ok = this.L > 0.5 && this.L < 0.7 && this.dn < 0.8; this.ok = ok; this.mw = 36 * clamp(this.L / 0.7, 0, 1) * (this.dn < 0.8 ? 1 : 0.6);
    this.prog = clamp(this.prog + (ok ? dt / 4 : -dt / 10), 0, 1);
    if (this.prog >= 1 && !this.done) this.m.finish(true, '¡NIVEL ESTABILIZADO!');
  }
  key(c, d) { this.keys[c] = d; }
  down(x, y) { this.drag = true; this.move(x, y); }
  up() { this.drag = false; }
  move(x, y) { if (this.drag) this.u = clamp((250 - y) / 150, 0, 1); }
  draw(g) {
    const base = 262, top = 60, ry = lerp(base, top + 10, this.L), dy = lerp(base, base - 110, this.dn);
    g.fillStyle = '#12305c'; g.fillRect(0, 0, W, H);
    g.fillStyle = '#2f86c8'; g.fillRect(20, ry, 230, base - ry); g.fillStyle = '#6fd0f2'; g.fillRect(20, ry, 230, 4);
    g.fillStyle = 'rgba(87,227,137,.28)'; g.fillRect(20, lerp(base, top + 10, 0.7), 230, lerp(base, top + 10, 0.5) - lerp(base, top + 10, 0.7));
    txt(g, 'EMBALSE', 135, 40, 15, '#a9bbd6', 'center', 'Nunito,sans-serif');
    g.fillStyle = '#2f86c8'; g.fillRect(310, dy, 230, base - dy); g.fillStyle = '#6fd0f2'; g.fillRect(310, dy, 230, 4);
    g.strokeStyle = '#ff6b4a'; g.lineWidth = 3; g.setLineDash([8, 6]); const ly = lerp(base, base - 110, 0.8); g.beginPath(); g.moveTo(310, ly); g.lineTo(540, ly); g.stroke(); g.setLineDash([]);
    txt(g, 'RÍO ABAJO', 425, ly - 14, 13, this.dn >= 0.8 ? '#ff6b4a' : '#a9bbd6', 'center', 'Nunito,sans-serif');
    g.fillStyle = '#bdb5a8'; g.fillRect(250, top - 10, 60, base - top + 10); g.fillStyle = '#12305c'; g.fillRect(262, 100, 36, 150);
    const gy = 100 + (1 - this.u) * 0; g.fillStyle = '#2f86c8'; g.fillRect(262, 250 - this.u * 150, 36, this.u * 150);
    g.fillStyle = '#ffc93c'; g.fillRect(258, 100 - 6 + (1 - this.u) * 150 - 150 * 0 - 0, 44, 0);
    g.fillStyle = '#2f6f9f'; g.fillRect(258, 94, 44, (1 - this.u) * 150 + 6); g.strokeStyle = '#ffc93c'; g.lineWidth = 3; g.strokeRect(258, 94, 44, (1 - this.u) * 150 + 6);
    for (let i = 0; i < 6; i++) { g.fillStyle = 'rgba(255,255,255,.75)'; const px = 312 + ((this.t * 90 + i * 37) % 60), py = base - 6 - ((i * 13) % 20) * this.u; g.fillRect(px, py, 6 + this.u * 8, 3); }
    g.fillStyle = '#3b2a20'; g.fillRect(0, base, W, H - base);
    txt(g, 'Apertura ' + Math.round(this.u * 100) + '%', 280, 76, 15, '#fff7e6'); txt(g, Math.round(this.mw) + ' MW', 135, 284, 18, this.ok ? '#57e389' : '#ffc93c');
    rr(g, 330, 276, 200, 14, 7); g.fillStyle = '#0f2140'; g.fill(); g.fillStyle = '#57e389'; g.fillRect(332, 278, 196 * this.prog, 10);
    txt(g, this.dn >= 0.8 ? '¡Desborde aguas abajo!' : this.L >= 0.7 ? 'Embalse muy alto' : this.L <= 0.5 ? 'Embalse bajo: se pierde salto' : 'Estable', 430, 40, 15, this.ok ? '#57e389' : '#ff6b4a', 'center', 'Nunito,sans-serif');
  }
}

// 4) Enrutamiento de subestación: girar tramos para llevar energía de la fuente a la carga sin tocar celdas sobrecargadas
const DIRS = [[0, -1, 1, 4], [1, 0, 2, 8], [0, 1, 4, 1], [-1, 0, 8, 2]];   // dx, dy, bit propio, bit opuesto
const rot = m => ((m << 1) & 15) | (m >> 3);
class Route {
  constructor(m, o) {
    this.m = m; this.title = o.title || 'Enrutamiento de subestación'; this.from = o.from || 'FUENTE'; this.to = o.to || 'CARGA';
    this.hint = 'Hacé clic en un tramo para girarlo (o flechas + Espacio). Conectá ' + this.from + ' con ' + this.to + ' sin energizar las celdas rojas de sobrecarga.';
    this.C = 6; this.R = 4; this.cur = { x: 0, y: 0 }; this.t = 0; this.over = 0;
    for (let tries = 0; tries < 800; tries++) if (this.gen()) break;
  }
  gen() {
    const { C, R } = this, r = Math.random; this.rs = Math.floor(r() * R); this.rt = Math.floor(r() * R);
    const seen = new Set(), path = [[0, this.rs]]; seen.add('0,' + this.rs);
    let guard = 0;
    while (guard++ < 200) {
      const [x, y] = path[path.length - 1]; if (x === C - 1 && y === this.rt) break;
      const opts = []; for (const [dx, dy] of DIRS) { const nx = x + dx, ny = y + dy; if (nx < 0 || ny < 0 || nx >= C || ny >= R || seen.has(nx + ',' + ny)) continue; opts.push([nx, ny, dx === 1 ? 3 : dy !== 0 ? (x === C - 1 ? 3 : 1.4) : 0.25]); }
      if (!opts.length) return false;
      let tot = opts.reduce((s, o) => s + o[2], 0), k = r() * tot, pick = opts[0]; for (const o of opts) { k -= o[2]; if (k <= 0) { pick = o; break; } }
      path.push([pick[0], pick[1]]); seen.add(pick[0] + ',' + pick[1]);
    }
    const last = path[path.length - 1]; if (last[0] !== C - 1 || last[1] !== this.rt || path.length < 7) return false;
    this.g = []; for (let y = 0; y < R; y++) { this.g.push([]); for (let x = 0; x < C; x++) this.g[y].push({ m: [5, 3, 7, 3, 5][Math.floor(r() * 5)], bad: false, path: false }); }
    path.forEach(([x, y], i) => {
      let m = 0; const link = (ax, ay) => { for (const [dx, dy, b] of DIRS) if (ax === x + dx && ay === y + dy) m |= b; };
      if (i === 0) m |= 8; else link(path[i - 1][0], path[i - 1][1]);
      if (i === path.length - 1) m |= 2; else link(path[i + 1][0], path[i + 1][1]);
      this.g[y][x] = { m, need: m, bad: false, path: true };
    });
    const free = []; for (let y = 0; y < R; y++) for (let x = 0; x < C; x++) if (!this.g[y][x].path) free.push([x, y]);
    for (let i = 0; i < 3 && free.length; i++) { const k = Math.floor(r() * free.length), [x, y] = free.splice(k, 1)[0]; this.g[y][x].bad = true; this.g[y][x].m = 7; }
    for (let y = 0; y < R; y++) for (let x = 0; x < C; x++) { const n = 1 + Math.floor(r() * 3); for (let i = 0; i < n; i++) this.g[y][x].m = rot(this.g[y][x].m); }
    this.flood(); return !this.solved;
  }
  flood() {
    const { C, R, g } = this; for (const row of g) for (const c of row) c.on = false;
    this.solved = false; this.overNow = false;
    if (!(g[this.rs][0].m & 8)) return;
    const st = [[0, this.rs]]; g[this.rs][0].on = true;
    while (st.length) { const [x, y] = st.pop(); for (const [dx, dy, b, ob] of DIRS) { const nx = x + dx, ny = y + dy; if (nx < 0 || ny < 0 || nx >= C || ny >= R) continue; if ((g[y][x].m & b) && (g[ny][nx].m & ob) && !g[ny][nx].on) { g[ny][nx].on = true; st.push([nx, ny]); } } }
    this.overNow = g.some(row => row.some(c => c.bad && c.on));
    this.solved = g[this.rt][C - 1].on && (g[this.rt][C - 1].m & 2) && !this.overNow;
  }
  turn(x, y) { if (this.done) return; this.g[y][x].m = rot(this.g[y][x].m); this.m.audio.click(); this.flood(); if (this.overNow) { this.over = 0.5; this.m.audio.bad(); } if (this.solved) this.m.finish(true, '¡CIRCUITO CERRADO!'); }
  update(dt) { this.t += dt; this.over = Math.max(0, this.over - dt); }
  key(c, d) { if (!d) return; const k = this.cur; if (c === 'ArrowLeft' || c === 'KeyA') k.x = Math.max(0, k.x - 1); else if (c === 'ArrowRight' || c === 'KeyD') k.x = Math.min(this.C - 1, k.x + 1); else if (c === 'ArrowUp' || c === 'KeyW') k.y = Math.max(0, k.y - 1); else if (c === 'ArrowDown' || c === 'KeyS') k.y = Math.min(this.R - 1, k.y + 1); else if (c === 'Space' || c === 'Enter' || c === 'KeyE') this.turn(k.x, k.y); }
  down(x, y) { const cx = Math.floor((x - 100) / 60), cy = Math.floor((y - 30) / 60); if (cx >= 0 && cy >= 0 && cx < this.C && cy < this.R) { this.cur = { x: cx, y: cy }; this.turn(cx, cy); } }
  draw(g) {
    const S = 60, ox = 100, oy = 30;
    for (let y = 0; y < this.R; y++) for (let x = 0; x < this.C; x++) {
      const c = this.g[y][x], px = ox + x * S, py = oy + y * S, cx = px + S / 2, cy = py + S / 2;
      rr(g, px + 3, py + 3, S - 6, S - 6, 8); g.fillStyle = c.bad ? (c.on ? '#8a2018' : '#3a1a22') : '#0f2140'; g.fill(); g.strokeStyle = c.bad ? '#ff6b4a' : '#2a4374'; g.lineWidth = 2; g.stroke();
      g.strokeStyle = c.on ? (c.bad ? '#ff9a7a' : '#5ad1ff') : '#51648a'; g.lineWidth = c.on ? 9 : 7; g.lineCap = 'round';
      for (const [dx, dy, b] of DIRS) if (c.m & b) { g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + dx * (S / 2 - 3), cy + dy * (S / 2 - 3)); g.stroke(); }
      g.fillStyle = g.strokeStyle; g.beginPath(); g.arc(cx, cy, c.on ? 7 : 5, 0, 7); g.fill();
      if (c.bad) txt(g, '!', cx + 17, cy - 15, 18, '#ff6b4a');
    }
    const k = this.cur; g.strokeStyle = '#ffc93c'; g.lineWidth = 3; rr(g, ox + k.x * S + 1, oy + k.y * S + 1, S - 2, S - 2, 9); g.stroke();
    const sy = oy + this.rs * S + S / 2, ty = oy + this.rt * S + S / 2, on = this.g[this.rt][this.C - 1].on && (this.g[this.rt][this.C - 1].m & 2) && !this.overNow;
    g.strokeStyle = '#5ad1ff'; g.lineWidth = 9; g.beginPath(); g.moveTo(62, sy); g.lineTo(ox, sy); g.stroke();
    g.strokeStyle = on ? '#57e389' : '#51648a'; g.beginPath(); g.moveTo(ox + this.C * S, ty); g.lineTo(ox + this.C * S + 38, ty); g.stroke();
    rr(g, 6, sy - 22, 60, 44, 8); g.fillStyle = '#5ad1ff'; g.fill(); txt(g, this.from, 36, sy + 1, 11, '#06233a');
    rr(g, ox + this.C * S + 34, ty - 22, 60, 44, 8); g.fillStyle = on ? '#57e389' : '#51648a'; g.fill(); txt(g, this.to, ox + this.C * S + 64, ty + 1, 11, '#06233a');
    if (this.over > 0) txt(g, '¡SOBRECARGA!', W / 2, 284, 20, '#ff6b4a');
  }
}

// 5) Manivela del freno: alternar izquierda/derecha para girar la manivela y soltar el freno mecánico
class Crank {
  constructor(m, o) { this.m = m; this.title = o.title || 'Freno mecánico'; this.hint = 'Alterná ← y → (o A y D) lo más rápido que puedas para girar la manivela y soltar el freno. En pantalla táctil: tocá un lado y el otro.'; this.prog = 0; this.side = 0; this.ang = 0; this.t = 0; this.kick = 0; }
  push(s) { if (this.done || s === this.side) return; this.side = s; this.prog = Math.min(1, this.prog + 0.042); this.ang += 0.5; this.kick = 0.12; this.m.audio.click(); if (this.prog >= 1) this.m.finish(true, '¡FRENO LIBERADO!'); }
  key(c, d) { if (!d) return; if (c === 'ArrowLeft' || c === 'KeyA') this.push(-1); else if (c === 'ArrowRight' || c === 'KeyD') this.push(1); }
  down(x) { this.push(x < W / 2 ? -1 : 1); }
  update(dt) { this.t += dt; this.kick = Math.max(0, this.kick - dt); this.prog = Math.max(0, this.prog - dt * 0.09); }
  draw(g) {
    const cx = 190, cy = 150, R = 78, open = this.prog * 26;
    // disco de freno y mordazas
    g.fillStyle = '#51648a'; g.beginPath(); g.arc(cx, cy, R, 0, 7); g.fill(); g.fillStyle = '#0f2140'; g.beginPath(); g.arc(cx, cy, R - 16, 0, 7); g.fill();
    for (let k = 0; k < 6; k++) { const a = this.ang + k * Math.PI / 3; g.strokeStyle = '#8fa3c8'; g.lineWidth = 6; g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + Math.cos(a) * (R - 18), cy + Math.sin(a) * (R - 18)); g.stroke(); }
    g.fillStyle = this.prog >= 1 ? '#57e389' : '#ff6b4a'; g.fillRect(cx - R - 22 - open, cy - 26, 22, 52); g.fillRect(cx + R + open, cy - 26, 22, 52);
    const a = this.ang; g.strokeStyle = '#ffc93c'; g.lineWidth = 10; g.lineCap = 'round'; g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + Math.cos(a) * 54, cy + Math.sin(a) * 54); g.stroke();
    g.fillStyle = '#ffc93c'; g.beginPath(); g.arc(cx + Math.cos(a) * 54, cy + Math.sin(a) * 54, 12, 0, 7); g.fill(); g.fillStyle = '#fff7e6'; g.beginPath(); g.arc(cx, cy, 10, 0, 7); g.fill();
    // teclas
    for (const [s, x, lab] of [[-1, 360, '←'], [1, 450, '→']]) { const on = this.side === s && this.kick > 0; rr(g, x - 34, 96, 68, 68, 12); g.fillStyle = on ? '#ffc93c' : this.side === s ? '#2a4374' : '#13284c'; g.fill(); g.lineWidth = 4; g.strokeStyle = this.side === s ? '#6f84a8' : '#ffc93c'; g.stroke(); txt(g, lab, x, 131, 38, on ? '#3a2500' : '#fff7e6'); }
    txt(g, this.side === 0 ? 'Empezá con cualquiera' : 'Ahora la otra', 405, 190, 15, '#a9bbd6', 'center', 'Nunito,sans-serif');
    rr(g, 60, 258, 440, 20, 10); g.fillStyle = '#0f2140'; g.fill(); g.strokeStyle = '#2a4374'; g.lineWidth = 3; g.stroke();
    g.fillStyle = '#57e389'; rr(g, 63, 261, Math.max(8, 434 * this.prog), 14, 7); g.fill();
    txt(g, 'FRENO ' + Math.round((1 - this.prog) * 100) + '%', W / 2, 238, 16, '#fff7e6');
  }
}

// Bicicleta generadora (Museos en la Noche): pedalear alternando teclas para prender seis lamparitas LED
class Bici {
  constructor(m, o) { this.m = m; this.title = o.title || 'Bicicleta generadora'; this.hint = 'Alterná ← y → (o A y D) para pedalear: el generador transforma tu movimiento en electricidad y se prenden las lamparitas LED. En pantalla táctil: tocá un lado y el otro.'; this.prog = 0; this.side = 0; this.ang = 0; this.t = 0; this.kick = 0; this.lit = 0; }
  push(s) { if (this.done || s === this.side) return; this.side = s; this.prog = Math.min(1, this.prog + 0.034); this.ang += 0.6; this.kick = 0.12; const n = Math.floor(this.prog * 6 + 1e-6); if (n > this.lit) this.m.audio.blip(n); this.lit = n; if (this.prog >= 1) this.m.finish(true, '¡LAS 6 LAMPARITAS PRENDIDAS!'); }
  key(c, d) { if (!d) return; if (c === 'ArrowLeft' || c === 'KeyA') this.push(-1); else if (c === 'ArrowRight' || c === 'KeyD') this.push(1); }
  down(x) { this.push(x < W / 2 ? -1 : 1); }
  update(dt) { this.t += dt; this.kick = Math.max(0, this.kick - dt); this.prog = Math.max(0, this.prog - dt * 0.07); this.lit = Math.floor(this.prog * 6 + 1e-6); }
  draw(g) {
    // lamparitas LED que se van prendiendo
    for (let i = 0; i < 6; i++) { const x = 70 + i * 52, y = 48, on = i < this.lit;
      if (on) { g.fillStyle = 'rgba(255,214,90,.35)'; g.beginPath(); g.arc(x, y, 24, 0, 7); g.fill(); }
      g.fillStyle = on ? '#fff3b0' : '#33415c'; g.beginPath(); g.arc(x, y, 14, 0, 7); g.fill(); g.fillStyle = '#8fa3c8'; g.fillRect(x - 7, y + 12, 14, 9); }
    g.strokeStyle = '#57e389'; g.lineWidth = 3; g.beginPath(); g.moveTo(70, 78); g.lineTo(330, 78); g.lineTo(330, 152); g.lineTo(312, 162); g.stroke();
    // bicicleta vista de costado
    const cx = 205, cy = 188, a = this.ang;
    for (const wx of [120, 300]) { g.strokeStyle = '#d8e2f2'; g.lineWidth = 6; g.beginPath(); g.arc(wx, cy, 44, 0, 7); g.stroke(); for (let k = 0; k < 6; k++) { const q = (wx === 300 ? a * 1.6 : 0) + k * Math.PI / 3; g.lineWidth = 2; g.beginPath(); g.moveTo(wx, cy); g.lineTo(wx + Math.cos(q) * 44, cy + Math.sin(q) * 44); g.stroke(); } }
    g.strokeStyle = '#e6007e'; g.lineWidth = 8; g.lineCap = 'round'; g.beginPath(); g.moveTo(120, cy); g.lineTo(185, cy - 65); g.lineTo(cx, cy); g.lineTo(300, cy); g.lineTo(255, cy - 65); g.lineTo(185, cy - 65); g.moveTo(255, cy - 65); g.lineTo(300, cy); g.moveTo(255, cy - 65); g.lineTo(250, cy - 85); g.stroke();
    g.fillStyle = '#26262b'; rr(g, 232, cy - 93, 40, 10, 5); g.fill(); g.strokeStyle = '#d8e2f2'; g.lineWidth = 5; g.beginPath(); g.moveTo(185, cy - 65); g.lineTo(175, cy - 87); g.lineTo(160, cy - 87); g.stroke();
    g.fillStyle = '#2a4374'; rr(g, 296, cy - 45, 34, 26, 6); g.fill(); txt(g, 'G', 313, cy - 31, 15, '#57e389');
    const px = Math.cos(a) * 26, py = Math.sin(a) * 26; g.strokeStyle = '#ffc93c'; g.lineWidth = 7; g.beginPath(); g.moveTo(cx - px, cy - py); g.lineTo(cx + px, cy + py); g.stroke();
    for (const s of [-1, 1]) { g.fillStyle = '#ffc93c'; g.fillRect(cx + s * px - 11, cy + s * py - 4, 22, 8); }
    // teclas y potencia
    for (const [s, x, lab] of [[-1, 420, '←'], [1, 500, '→']]) { const on = this.side === s && this.kick > 0; rr(g, x - 32, 110, 64, 64, 12); g.fillStyle = on ? '#ffc93c' : this.side === s ? '#2a4374' : '#13284c'; g.fill(); g.lineWidth = 4; g.strokeStyle = '#6f84a8'; g.stroke(); txt(g, lab, x, 143, 30, on ? '#3a2500' : '#fff7e6'); }
    txt(g, this.side === 0 ? 'Empezá con cualquiera' : 'Ahora la otra', 460, 196, 15, '#a9bbd6', 'center', 'Nunito,sans-serif');
    rr(g, 60, 262, 440, 20, 10); g.fillStyle = '#0f2140'; g.fill(); g.strokeStyle = '#2a4374'; g.lineWidth = 3; g.stroke();
    g.fillStyle = '#ffc93c'; rr(g, 63, 265, Math.max(8, 434 * this.prog), 14, 7); g.fill();
    txt(g, 'POTENCIA ' + Math.round(this.prog * 100) + ' W · ' + this.lit + ' de 6 LED', W / 2, 244, 16, '#fff7e6');
  }
}

// 6) Secuencia de arranque: repetir el orden en que se encienden las etapas de la caldera
const PADS = [{ k: ['ArrowUp', 'KeyW'], lab: '↑', name: 'AIRE', col: '#5ad1ff', x: 280, y: 78, f: 660 }, { k: ['ArrowRight', 'KeyD'], lab: '→', name: 'CHISPA', col: '#ffc93c', x: 385, y: 150, f: 880 }, { k: ['ArrowDown', 'KeyS'], lab: '↓', name: 'CHIPS', col: '#ff8a4a', x: 280, y: 222, f: 440 }, { k: ['ArrowLeft', 'KeyA'], lab: '←', name: 'VAPOR', col: '#e8f1f2', x: 175, y: 150, f: 550 }];
class Seq {
  constructor(m, o) {
    this.m = m; this.title = o.title || 'Secuencia de arranque'; this.hint = 'Mirá el orden en que se encienden las etapas y repetilo con las flechas (o haciendo clic). Son tres rondas, cada una más larga.';
    this.seq = []; for (let i = 0; i < 5; i++) { let n; do { n = Math.floor(Math.random() * 4); } while (i && n === this.seq[i - 1]); this.seq.push(n); }
    this.round = 0; this.len = [3, 4, 5]; this.state = 'show'; this.i = 0; this.t = 0.6; this.lit = -1; this.litT = 0; this.err = 0;
  }
  flash(n) { this.lit = n; this.litT = 0.3; this.m.audio.tone(PADS[n].f, 0.22, 'triangle', 0.14); }
  press(n) {
    if (this.done || this.state !== 'input') return;
    this.flash(n);
    if (n !== this.seq[this.i]) { this.err = 0.7; this.m.audio.bad(); this.state = 'show'; this.i = 0; this.t = 1.0; return; }
    this.i++;
    if (this.i >= this.len[this.round]) { this.round++; this.m.audio.ok(); if (this.round >= 3) return this.m.finish(true, '¡CALDERA EN MARCHA!'); this.state = 'show'; this.i = 0; this.t = 0.9; }
  }
  key(c, d) { if (!d) return; const n = PADS.findIndex(p => p.k.includes(c)); if (n >= 0) this.press(n); }
  down(x, y) { const n = PADS.findIndex(p => Math.hypot(p.x - x, p.y - y) < 46); if (n >= 0) this.press(n); }
  update(dt) {
    this.litT = Math.max(0, this.litT - dt); if (this.litT === 0) this.lit = -1; this.err = Math.max(0, this.err - dt);
    if (this.state === 'show') { this.t -= dt; if (this.t <= 0) { if (this.i < this.len[this.round]) { this.flash(this.seq[this.i]); this.i++; this.t = 0.5; } else { this.state = 'input'; this.i = 0; } } }
  }
  draw(g) {
    PADS.forEach((p, n) => { const on = this.lit === n; g.beginPath(); g.arc(p.x, p.y, 42, 0, 7); g.fillStyle = on ? p.col : '#13284c'; g.fill(); g.lineWidth = 5; g.strokeStyle = p.col; g.stroke(); txt(g, p.lab, p.x, p.y - 6, 30, on ? '#0f2140' : p.col); txt(g, p.name, p.x, p.y + 20, 11, on ? '#0f2140' : '#a9bbd6', 'center', 'Nunito,sans-serif'); });
    txt(g, this.err > 0 ? 'Orden equivocado: mirá de nuevo' : this.state === 'show' ? 'Mirá…' : 'Tu turno', 280, 150, 15, this.err > 0 ? '#ff6b4a' : this.state === 'show' ? '#a9bbd6' : '#57e389', 'center', 'Nunito,sans-serif');
    for (let r = 0; r < 3; r++) { g.beginPath(); g.arc(470, 110 + r * 40, 13, 0, 7); g.fillStyle = r < this.round ? '#57e389' : '#13284c'; g.fill(); g.lineWidth = 3; g.strokeStyle = r === this.round ? '#ffc93c' : '#2a4374'; g.stroke(); }
    txt(g, 'RONDA', 470, 78, 12, '#a9bbd6', 'center', 'Nunito,sans-serif');
    const n = this.len[Math.min(2, this.round)]; for (let k = 0; k < n; k++) { g.fillStyle = this.state === 'input' && k < this.i ? '#57e389' : '#2a4374'; g.fillRect(60 + k * 16, 270, 12, 12); }
  }
}

// 7) Compás de carga: pulsar cada flecha cuando su nota llega a la línea, al ritmo de un toque de candombe
const LANES = [['ArrowLeft', 'KeyA', '←', '#5ad1ff'], ['ArrowDown', 'KeyS', '↓', '#57e389'], ['ArrowUp', 'KeyW', '↑', '#ffc93c'], ['ArrowRight', 'KeyD', '→', '#ff8fab']];
class Rhythm {
  constructor(m, o) { this.m = m; this.title = o.title || 'Compás de carga'; this.hint = 'Pulsá cada flecha (o A S W D, o tocá su carril) cuando la nota llegue a la línea. Con 9 aciertos de 14 la flota queda cargada.'; this.reset(); }
  reset() {
    const beat = [0, 3, 6, 10, 12, 16, 19, 22, 26, 28, 32, 36, 38, 40], lane = [0, 2, 1, 3, 1, 0, 3, 2, 0, 1, 3, 2, 1, 0];
    this.notes = beat.map((b, i) => ({ t: 2.0 + b * 0.19, lane: lane[i], hit: 0 })); this.t = 0; this.hits = 0; this.miss = 0; this.flash = [0, 0, 0, 0]; this.msg = ''; this.msgT = 0;
  }
  press(l) {
    if (this.done) return; this.flash[l] = 0.15;
    let best = null; for (const n of this.notes) if (!n.hit && n.lane === l && Math.abs(n.t - this.t) < 0.2 && (!best || Math.abs(n.t - this.t) < Math.abs(best.t - this.t))) best = n;
    if (best) { best.hit = 1; this.hits++; this.m.audio.tone([196, 262, 330, 392][l], 0.16, 'triangle', 0.16); this.m.audio.tone(1900, 0.04, 'triangle', 0.06); } else this.m.audio.tone(120, 0.08, 'square', 0.05);
  }
  key(c, d) { if (!d) return; const l = LANES.findIndex(x => x[0] === c || x[1] === c); if (l >= 0) this.press(l); }
  down(x) { const l = Math.floor((x - 120) / 80); if (l >= 0 && l < 4) this.press(l); }
  update(dt) {
    this.t += dt; this.msgT = Math.max(0, this.msgT - dt); for (let i = 0; i < 4; i++) this.flash[i] = Math.max(0, this.flash[i] - dt);
    for (const n of this.notes) if (!n.hit && this.t - n.t > 0.2) { n.hit = -1; this.miss++; }
    if (this.hits >= 9 && !this.done && this.notes.every(n => n.hit) ) return this.m.finish(true, '¡FLOTA CARGADA!');
    if (this.notes.every(n => n.hit) && !this.done) { if (this.hits >= 9) this.m.finish(true, '¡FLOTA CARGADA!'); else { const h = this.hits; this.reset(); this.msg = `Fueron ${h} de 14. ¡Otra vuelta!`; this.msgT = 2; } }
  }
  draw(g) {
    const top = 20, line = 236, sp = (line - top) / 1.7;
    for (let l = 0; l < 4; l++) { const x = 120 + l * 80; g.fillStyle = this.flash[l] > 0 ? 'rgba(255,255,255,.14)' : l % 2 ? '#0c1c3a' : '#0f2140'; g.fillRect(x, top, 80, 256); g.strokeStyle = '#2a4374'; g.lineWidth = 2; g.strokeRect(x, top, 80, 256);
      rr(g, x + 14, line - 22, 52, 44, 10); g.strokeStyle = LANES[l][3]; g.lineWidth = 4; g.stroke(); if (this.flash[l] > 0) { g.fillStyle = LANES[l][3]; g.fill(); } txt(g, LANES[l][2], x + 40, line + 1, 26, this.flash[l] > 0 ? '#0f2140' : LANES[l][3]); }
    for (const n of this.notes) { if (n.hit) continue; const y = line - (n.t - this.t) * sp; if (y < top - 20 || y > 290) continue; const x = 120 + n.lane * 80 + 40; rr(g, x - 24, y - 15, 48, 30, 9); g.fillStyle = LANES[n.lane][3]; g.fill(); txt(g, LANES[n.lane][2], x, y + 1, 20, '#0f2140'); }
    // batería del ómnibus
    rr(g, 468, 60, 56, 170, 10); g.fillStyle = '#0f2140'; g.fill(); g.strokeStyle = '#fff7e6'; g.lineWidth = 4; g.stroke(); g.fillStyle = '#fff7e6'; g.fillRect(486, 50, 20, 10);
    const f = Math.min(1, this.hits / 9); g.fillStyle = f >= 1 ? '#57e389' : '#5ad1ff'; g.fillRect(474, 224 - 158 * f, 44, 158 * f);
    txt(g, this.hits + '/9', 496, 250, 20, '#fff7e6'); txt(g, 'CARGA', 496, 36, 12, '#a9bbd6', 'center', 'Nunito,sans-serif');
    txt(g, 'COMPÁS', 60, 36, 12, '#a9bbd6', 'center', 'Nunito,sans-serif'); const b = Math.floor(this.t / 0.76) % 4; for (let k = 0; k < 4; k++) { g.beginPath(); g.arc(60, 70 + k * 34, 11, 0, 7); g.fillStyle = k === b ? '#ffc93c' : '#13284c'; g.fill(); }
    if (this.msgT > 0) txt(g, this.msg, 280, 130, 22, '#ffc93c');
  }
}

// Cambio de lamparitas incandescentes por LED
class Led {
  constructor(m, o) {
    this.m = m; this.title = o.title || 'Cambio a LED'; this.t = 0; this.bad = 0;
    this.hint = 'Tocá las lamparitas viejas (las amarillas, que calientan) o apretá su número para cambiarlas por LED. Las blancas ya son LED: dejalas como están.';
    const old = new Set(); while (old.size < 4) old.add(Math.floor(Math.random() * 6));
    this.b = Array.from({ length: 6 }, (_, i) => ({ old: old.has(i), pop: 0 }));
  }
  watts() { return this.b.reduce((s, b) => s + (b.old ? 60 : 9), 0); }
  pick(i) { const b = this.b[i]; if (!b || this.done) return; if (!b.old) { this.bad = 1; this.m.audio.click(); return; } b.old = false; b.pop = 0.4; this.m.audio.ok(); if (!this.b.some(q => q.old)) this.m.finish(true, '¡TODO LED!'); }
  key(c, d) { if (!d) return; const i = { Digit1: 0, Digit2: 1, Digit3: 2, Digit4: 3, Digit5: 4, Digit6: 5, Numpad1: 0, Numpad2: 1, Numpad3: 2, Numpad4: 3, Numpad5: 4, Numpad6: 5 }[c]; if (i != null) this.pick(i); }
  down(x, y) { if (y > 60 && y < 232) this.pick(Math.floor((x - 22) / 86)); }
  update(dt) { this.t += dt; this.bad = Math.max(0, this.bad - dt); for (const b of this.b) b.pop = Math.max(0, b.pop - dt); }
  draw(g) {
    txt(g, 'Lamparitas de la casa', W / 2, 26, 18, '#fff7e6');
    this.b.forEach((b, i) => {
      const x = 65 + i * 86, y = 122, fl = b.old ? 0.75 + 0.25 * Math.sin(this.t * 17 + i * 2) : 1, s = 1 + b.pop * 0.5;
      const gr = g.createRadialGradient(x, y, 6, x, y, 54 * s); gr.addColorStop(0, b.old ? `rgba(255,170,60,${0.6 * fl})` : 'rgba(190,230,255,.5)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(x - 60, y - 60, 120, 120);
      g.fillStyle = b.old ? '#ffb23c' : '#eaf6ff'; g.beginPath(); g.arc(x, y - 6, 24 * s, 0, 7); g.fill();
      g.fillStyle = '#8fa3c8'; rr(g, x - 11, y + 16, 22, 18, 4); g.fill();
      if (b.old) { g.strokeStyle = '#b3541e'; g.lineWidth = 3; g.beginPath(); g.moveTo(x - 9, y - 2); g.lineTo(x - 4, y - 12); g.lineTo(x + 1, y - 2); g.lineTo(x + 6, y - 12); g.lineTo(x + 10, y - 2); g.stroke(); }
      else { g.fillStyle = '#7fd4ff'; for (let k = -1; k <= 1; k++) g.fillRect(x + k * 9 - 3, y - 10, 6, 6); }
      txt(g, b.old ? '60 W' : '9 W', x, y + 52, 15, b.old ? '#ffb23c' : '#9be7ff');
      rr(g, x - 15, y + 66, 30, 26, 6); g.fillStyle = '#13284c'; g.fill(); g.lineWidth = 2; g.strokeStyle = b.old ? '#ffc93c' : '#2a4374'; g.stroke(); txt(g, String(i + 1), x, y + 80, 15, '#fff7e6');
    });
    const w = this.watts(); rr(g, 60, 264, 440, 20, 10); g.fillStyle = '#0f2140'; g.fill(); g.strokeStyle = '#2a4374'; g.lineWidth = 3; g.stroke();
    g.fillStyle = w > 120 ? '#ff8f4a' : '#57e389'; rr(g, 63, 267, Math.max(8, 434 * w / 360), 14, 7); g.fill();
    txt(g, this.bad > 0 ? 'Esa ya es LED: buscá las amarillas' : `Consumo de luz: ${w} W`, W / 2, 246, 16, this.bad > 0 ? '#ffb23c' : '#fff7e6');
  }
}

// Carga de ómnibus con el sol del mediodía: se carga solo mientras no hay nubes
class SunCharge {
  constructor(m, o) {
    this.m = m; this.title = o.title || 'Carga con sol'; this.t = 0; this.prog = 0; this.hold = false; this.fossil = 0;
    this.hint = 'Mantené apretado Espacio (o el dedo en la pantalla) mientras brilla el sol para cargar los ómnibus. Soltá cuando pase una nube: ahí la carga saldría del respaldo fósil.';
    this.clouds = [[2.6, 1.3], [5.6, 1.1], [8.3, 1.5], [11.4, 1.0], [14.0, 1.4], [17.2, 1.2], [20.3, 1.5], [23.5, 1.1], [26.4, 1.4], [29.6, 1.2]];
  }
  get sun() { const p = this.t % 32; return !this.clouds.some(([s, d]) => p > s && p < s + d); }
  key(c, d) { if (c === 'Space' || c === 'Enter') this.hold = d; }
  down() { this.hold = true; }
  up() { this.hold = false; }
  update(dt) {
    this.t += dt; this.fossil = Math.max(0, this.fossil - dt);
    if (this.hold) { if (this.sun) this.prog = Math.min(1, this.prog + dt * 0.17); else { this.prog = Math.max(0, this.prog - dt * 0.1); this.fossil = 0.3; } }
    if (this.prog >= 1) this.m.finish(true, '¡CARGADOS CON SOL!');
  }
  draw(g) {
    const p = this.t % 32, sx = 150, sun = this.sun;
    g.fillStyle = sun ? '#3f9be0' : '#5f7388'; rr(g, 30, 16, 500, 112, 14); g.fill();
    g.save(); rr(g, 30, 16, 500, 112, 14); g.clip();
    g.fillStyle = sun ? '#ffd23f' : '#c9b56a'; g.beginPath(); g.arc(sx, 70, 28, 0, 7); g.fill();
    if (sun) { g.strokeStyle = '#ffd23f'; g.lineWidth = 4; for (let k = 0; k < 10; k++) { const a = k * 0.628 + this.t; g.beginPath(); g.moveTo(sx + Math.cos(a) * 36, 70 + Math.sin(a) * 36); g.lineTo(sx + Math.cos(a) * 46, 70 + Math.sin(a) * 46); g.stroke(); } }
    g.fillStyle = '#eef3f8';
    for (const [s, d] of this.clouds) for (const off of [0, 32]) { const x0 = sx + (s + off - p) * 62, w = d * 62; if (x0 > 560 || x0 + w < 0) continue; for (let k = 0; k < 3; k++) { g.beginPath(); g.ellipse(x0 + w * (0.2 + k * 0.3), 70 + (k === 1 ? -10 : 4), w * 0.3 + 14, 26, 0, 0, 7); g.fill(); } }
    g.restore();
    rr(g, 70, 150, 190, 68, 14); g.fillStyle = '#2ed3c6'; g.fill(); g.fillStyle = '#d8f6ff'; for (let k = 0; k < 4; k++) { rr(g, 84 + k * 42, 161, 32, 24, 5); g.fill(); }
    g.fillStyle = '#12284c'; g.beginPath(); g.arc(112, 222, 12, 0, 7); g.fill(); g.beginPath(); g.arc(218, 222, 12, 0, 7); g.fill();
    g.strokeStyle = this.hold ? (sun ? '#57e389' : '#ff5a4a') : '#6f84a8'; g.lineWidth = 6; g.lineCap = 'round'; g.beginPath(); g.moveTo(260, 192); g.bezierCurveTo(300, 236, 320, 146, 356, 186); g.stroke();
    rr(g, 356, 150, 150, 68, 10); g.fillStyle = '#0f2140'; g.fill(); g.lineWidth = 4; g.strokeStyle = '#8fa3c8'; g.stroke();
    g.fillStyle = this.fossil > 0 ? '#ff5a4a' : '#57e389'; rr(g, 362, 156, Math.max(6, 138 * this.prog), 56, 7); g.fill();
    txt(g, Math.round(this.prog * 100) + '%', 431, 185, 26, '#fff7e6');
    txt(g, this.hold ? (sun ? 'Cargando con sol' : '¡Nube! Soltá: esa carga sería fósil') : (sun ? 'Mantené apretado ESPACIO' : 'Esperá a que pase la nube'), W / 2, 266, 17, this.hold && !sun ? '#ff8f7a' : '#fff7e6', 'center', 'Nunito,sans-serif');
  }
}

export const GAMES = { sync: Sync, helio: Helio, gates: Gates, route: Route, crank: Crank, seq: Seq, rhythm: Rhythm, led: Led, solar: SunCharge, bici: Bici };

export class Minigames {
  constructor(audio) {
    this.audio = audio; this.active = null; this.cv = $('mgCv'); this.g = this.cv.getContext('2d'); this.end = 0; this.msg = ''; this.time = 0;
    const pt = e => { const r = this.cv.getBoundingClientRect(); return [(e.clientX - r.left) / r.width * this.cv.width, (e.clientY - r.top) / r.height * this.cv.height]; };
    this.cv.addEventListener('pointerdown', e => { e.preventDefault(); if (this.active && this.active.down && !this.active.done) { const [x, y] = pt(e); this.active.down(x, y); } });
    this.cv.addEventListener('pointermove', e => { if (this.active && this.active.move && !this.active.done) { const [x, y] = pt(e); this.active.move(x, y); } });
    window.addEventListener('pointerup', () => { if (this.active && this.active.up) this.active.up(); });
  }
  has(type) { return !!GAMES[type]; }
  start(type, opts, cb) {
    const sz = GAMES[type].size || [W, H]; this.cv.width = sz[0]; this.cv.height = sz[1]; $('mg').classList.toggle('big', !!GAMES[type].size);
    this.active = new GAMES[type](this, opts || {}); this.cb = cb; this.end = 0; this.time = 0; this.type = type; this.startedAt = performance.now(); if (this.onStart) this.onStart(type); this.eased = false; this.slow = Math.min(this.base || 1, this.struggle && this.struggle[type] ? 0.8 : 1);
    $('mgTitle').textContent = this.active.title; this.setHint(this.active.hint); $('mg').classList.remove('hidden'); this.audio.click();
  }
  setHint(t) { $('mgHint').textContent = t; }
  finish(ok, msg) { if (!this.active || this.active.done) return; if (this.onEnd) this.onEnd(ok); this.active.done = true; this.msg = msg; this.end = 1.0; this.ok = ok; if (ok) this.audio.fanfare(); }
  cancel() { if (!this.active) return; if (!this.active.done && this.onEnd) this.onEnd(false); const cb = this.cb; this.active = null; $('mg').classList.add('hidden'); if (cb) cb(false); }
  key(code, down) { if (!this.active || this.active.done) return; if (this.active.key) this.active.key(code, down); }
  update(dt) {
    const a = this.active; if (!a) return;
    this.time += dt; const g = this.g;
    g.fillStyle = '#061226'; g.fillRect(0, 0, W, H);
    // Ayuda automática: si el minijuego se alarga, va más despacio; pasado un minuto y medio, Capi lo resuelve
    const kk = (this.base || 1) < 1 ? 0.6 : 1, ease = a.noEase ? 1 : this.time > 50 * kk ? 0.5 : this.time > 24 * kk ? Math.min(0.7, this.slow) : this.slow;
    if (ease < 0.8 && !this.eased && !a.done) { this.eased = true; (this.struggle = this.struggle || {})[this.type] = true; this.setHint(a.hint + ' Ayuda activada: ahora va más despacio.'); }
    if (!a.done) { a.update(dt * ease); if (this.time > 90 && !a.done && !a.noEase) this.finish(true, '¡LO LOGRAMOS JUNTOS!'); }
    a.draw(g);
    if (a.done) {
      this.end -= dt; g.fillStyle = 'rgba(6,18,38,.72)'; g.fillRect(0, 0, W, H);
      txt(g, this.msg, W / 2, H / 2 - 10, 38, '#57e389'); txt(g, this.time - (1 - this.end) < 10 ? '¡Tiempo perfecto!' : 'Buen trabajo', W / 2, H / 2 + 30, 18, '#fff7e6', 'center', 'Nunito,sans-serif');
      if (this.end <= 0) { const cb = this.cb; this.active = null; $('mg').classList.add('hidden'); if (cb) cb(true); }
    }
  }
}
