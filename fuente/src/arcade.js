// Minijuegos de la Feria de la Rambla: cometa y cinta de chips
import { GAMES, txt, rr, W, H } from './minigames.js';

// Remontar una cometa: atrapar ráfagas y esquivar nubes de tormenta
class Kite {
  constructor(m, o) {
    this.m = m; this.title = o.title || 'Cometa en la rambla'; this.t = 0; this.x = 280; this.y = 150; this.vx = 0; this.vy = 0; this.k = {}; this.got = 0; this.items = []; this.spawn = 0.4; this.hit = 0; this.tx = null; this.trail = [];
    this.hint = 'Mové la cometa con las flechas (o arrastrando con el dedo) para atrapar 8 ráfagas de viento. Esquivá las nubes grises: te hacen perder altura.';
  }
  key(c, d) { this.k[c] = d; }
  down(x, y) { this.tx = [x, y]; }
  move(x, y) { if (this.tx) this.tx = [x, y]; }
  up() { this.tx = null; }
  update(dt) {
    this.t += dt; this.hit = Math.max(0, this.hit - dt); const k = this.k;
    let ax = ((k.ArrowRight || k.KeyD ? 1 : 0) - (k.ArrowLeft || k.KeyA ? 1 : 0)) * 620, ay = ((k.ArrowDown || k.KeyS ? 1 : 0) - (k.ArrowUp || k.KeyW ? 1 : 0)) * 620;
    if (this.tx) { ax = (this.tx[0] - this.x) * 9; ay = (this.tx[1] - this.y) * 9; }
    this.vx += (ax + Math.sin(this.t * 0.9) * 60) * dt; this.vy += (ay + 40) * dt; this.vx *= Math.exp(-2.6 * dt); this.vy *= Math.exp(-2.6 * dt);
    this.x = Math.max(30, Math.min(W - 30, this.x + this.vx * dt)); this.y = Math.max(26, Math.min(232, this.y + this.vy * dt));
    this.trail.unshift([this.x, this.y]); if (this.trail.length > 16) this.trail.pop();
    this.spawn -= dt; if (this.spawn <= 0) { this.spawn = 0.75 + Math.random() * 0.5; this.items.push({ x: W + 30, y: 36 + Math.random() * 190, v: 95 + Math.random() * 70, bad: Math.random() < 0.3, ph: Math.random() * 6 }); }
    for (const it of this.items) {
      it.x -= it.v * dt; it.y += Math.sin(this.t * 2 + it.ph) * 14 * dt;
      if (!it.gone && Math.hypot(it.x - this.x, it.y - this.y) < (it.bad ? 30 : 27)) { it.gone = true; if (it.bad) { this.hit = 0.7; this.vy += 260; this.m.audio.click(); } else { this.got++; this.m.audio.ok(); if (this.got >= 8) this.m.finish(true, '¡A VOLAR!'); } }
    }
    this.items = this.items.filter(it => !it.gone && it.x > -40);
  }
  draw(g) {
    const gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, '#3f9be0'); gr.addColorStop(0.8, '#a8dcf5'); g.fillStyle = gr; g.fillRect(0, 0, W, H);
    g.fillStyle = '#2c6f95'; g.fillRect(0, 252, W, 48); g.fillStyle = '#e8d6a4'; g.fillRect(0, 276, W, 24);
    for (const it of this.items) {
      if (it.bad) { g.fillStyle = '#56606e'; for (let k = 0; k < 3; k++) { g.beginPath(); g.ellipse(it.x - 16 + k * 16, it.y + (k === 1 ? -7 : 2), 17, 13, 0, 0, 7); g.fill(); } }
      else { g.strokeStyle = '#ffffff'; g.lineWidth = 3; g.lineCap = 'round'; for (let k = 0; k < 3; k++) { g.beginPath(); g.arc(it.x + k * 7 - 7, it.y + (k - 1) * 8, 9 - k * 1.5, 0.6 + this.t * 3, 4.4 + this.t * 3); g.stroke(); } }
    }
    g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(58, 272); g.quadraticCurveTo((58 + this.x) / 2, 272 - 20, this.x, this.y + 16); g.stroke();
    g.fillStyle = '#7a4a2a'; g.fillRect(46, 262, 14, 16); g.fillStyle = '#ffc420'; g.fillRect(45, 256, 16, 8);   // Capi sosteniendo el hilo
    g.strokeStyle = '#ff8fab'; g.lineWidth = 3; g.beginPath(); this.trail.forEach(([x, y], i) => { const px = x - i * 2.2, py = y + 18 + i * 3 + Math.sin(this.t * 9 + i) * 2; if (i) g.lineTo(px, py); else g.moveTo(px, py); }); g.stroke();
    g.save(); g.translate(this.x, this.y); g.rotate(this.vx * 0.0012 + (this.hit > 0 ? Math.sin(this.t * 40) * 0.3 : 0));
    g.fillStyle = '#e6007e'; g.beginPath(); g.moveTo(0, -22); g.lineTo(15, 0); g.lineTo(0, 18); g.lineTo(-15, 0); g.closePath(); g.fill(); g.fillStyle = '#ffc420'; g.beginPath(); g.moveTo(0, -22); g.lineTo(15, 0); g.lineTo(0, 0); g.closePath(); g.fill(); g.fillStyle = '#2ed3c6'; g.beginPath(); g.moveTo(0, 18); g.lineTo(-15, 0); g.lineTo(0, 0); g.closePath(); g.fill();
    g.restore();
    rr(g, 12, 10, 150, 30, 10); g.fillStyle = 'rgba(15,33,64,.85)'; g.fill(); txt(g, `Ráfagas: ${this.got}/8`, 87, 26, 17, '#fff7e6');
  }
}

// Cinta de la planta de biomasa: dejar pasar los chips y sacar piedras y botellas
class Belt {
  constructor(m, o) {
    this.m = m; this.title = o.title || 'Cinta de chips'; this.t = 0; this.items = []; this.spawn = 0.3; this.open = 0; this.out = 0; this.bad = 0; this.msg = 0;
    this.hint = 'Por la cinta vienen chips de madera mezclados con piedras y botellas. Apretá Espacio (o tocá la pantalla) cuando algo que no es madera pase sobre la compuerta. Sacá 10 para limpiar la carga.';
  }
  hatch() { if (this.done || this.open > 0) return; this.open = 0.28; let any = false; for (const it of this.items) if (!it.gone && it.x > 352 && it.x < 428) { it.gone = true; it.fall = 1; any = true; if (it.kind) { this.out++; this.m.audio.ok(); if (this.out >= 10) this.m.finish(true, '¡CARGA LIMPIA!'); } else { this.bad = 1; this.m.audio.click(); } } if (!any) this.m.audio.click(); }
  key(c, d) { if (d && (c === 'Space' || c === 'ArrowDown' || c === 'Enter' || c === 'KeyS')) this.hatch(); }
  down() { this.hatch(); }
  update(dt) {
    this.t += dt; this.open = Math.max(0, this.open - dt); this.bad = Math.max(0, this.bad - dt); this.msg = Math.max(0, this.msg - dt);
    this.spawn -= dt; if (this.spawn <= 0) { this.spawn = 0.62 + Math.random() * 0.3; this.items.push({ x: -24, kind: Math.random() < 0.42 ? 1 + Math.floor(Math.random() * 2) : 0, r: Math.random() * 6, y: 0 }); }
    for (const it of this.items) { if (it.fall) { it.y += 320 * dt; continue; } it.x += 118 * dt; if (it.x > 520 && !it.gone) { it.gone = true; if (it.kind) { this.msg = 1.2; this.m.audio.click(); } } }
    this.items = this.items.filter(it => it.y < 150 && it.x < 560);
  }
  draw(g) {
    g.fillStyle = '#0d1f3d'; g.fillRect(0, 0, W, H);
    txt(g, `Sacadas: ${this.out}/10`, 96, 30, 18, '#fff7e6'); if (this.bad > 0) txt(g, 'Eso era madera buena', 380, 30, 16, '#ffb23c'); else if (this.msg > 0) txt(g, '¡Se coló una piedra a la caldera!', 380, 30, 16, '#ff8f7a');
    rr(g, 486, 96, 66, 110, 8); g.fillStyle = '#7a2e22'; g.fill(); g.fillStyle = '#ffb347'; rr(g, 498, 150, 42, 44, 6); g.fill(); txt(g, 'CALDERA', 519, 114, 11, '#fff7e6');
    g.fillStyle = '#51648a'; g.fillRect(0, 168, 352, 14); g.fillRect(428, 168, 62, 14);
    g.fillStyle = this.open > 0 ? '#13284c' : '#ffc93c'; g.fillRect(352, 168, 76, this.open > 0 ? 4 : 14);
    g.fillStyle = '#2a4374'; for (let x = (this.t * 118) % 28 - 28; x < 490; x += 28) if (x < 340 || x > 428) g.fillRect(x, 171, 12, 8);
    rr(g, 346, 214, 88, 60, 8); g.fillStyle = '#3a4a66'; g.fill(); txt(g, 'DESCARTE', 390, 262, 11, '#a9bbd6');
    txt(g, '▼', 390, 142 + Math.sin(this.t * 6) * 3, 16, '#ffc93c');
    for (const it of this.items) {
      const x = it.x, y = 156 + it.y; g.save(); g.translate(x, y); g.rotate(it.r);
      if (it.kind === 0) { g.fillStyle = '#c9965a'; g.fillRect(-13, -6, 26, 12); g.fillStyle = '#a87440'; g.fillRect(-13, -1, 26, 2); }
      else if (it.kind === 1) { g.fillStyle = '#8c9199'; g.beginPath(); g.moveTo(-12, 4); g.lineTo(-6, -9); g.lineTo(7, -8); g.lineTo(13, 2); g.lineTo(4, 9); g.lineTo(-8, 8); g.closePath(); g.fill(); }
      else { g.fillStyle = '#58c7e8'; rr(g, -6, -11, 12, 20, 4); g.fill(); g.fillStyle = '#e8f8ff'; g.fillRect(-3, -15, 6, 5); }
      g.restore();
    }
  }
}

GAMES.cometa = Kite; GAMES.cinta = Belt;
