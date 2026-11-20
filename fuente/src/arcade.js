// Minijuegos de la Feria del Bulevar: cometa y cinta de chips
import { GAMES, txt, rr, W, H } from './minigames.js';
import { fresh, step, pct, demand, wind, sun, BIO, HYDRO, BATE, WATER } from './despacho-sim.js';

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


// ---------- Escena grande: Centro de Control, un día entero de despacho ----------
const SW = 960, SH = 540, NUN = 'Nunito,sans-serif';
class Dispatch {
  constructor(m, o) {
    this.m = m; this.title = o.title || 'Centro de Control'; this.noEase = true; this.s = fresh(); this.lever = 0.3; this.mode = 0; this.hist = []; this.acc = 0;
    this.hint = 'Sos quien maneja la red durante un día. Flechas ↑ ↓: cuánta agua turbinar. Flechas ← →: baterías (cargar, reposo, descargar). El agua no alcanza para todo: guardala, junto con la batería, para la noche, cuando no hay sol.';
    this.fc = []; for (let h = 0; h <= 24.01; h += 0.25) this.fc.push([h, wind(h), sun(h), demand(h)]);
  }
  key(c, d) { if (!d) return; if (c === 'ArrowUp' || c === 'KeyW') this.lever = Math.min(1, +(this.lever + 0.1).toFixed(1)); else if (c === 'ArrowDown' || c === 'KeyS') this.lever = Math.max(0, +(this.lever - 0.1).toFixed(1)); else if (c === 'ArrowLeft' || c === 'KeyA') this.mode = Math.max(-1, this.mode - 1); else if (c === 'ArrowRight' || c === 'KeyD') this.mode = Math.min(1, this.mode + 1); else return; this.m.audio.click(); }
  down(x, y) {
    if (x > 690 && x < 930 && y > 404 && y < 446) { this.mode = Math.floor((x - 690) / 80) - 1; this.m.audio.click(); }
    else if (x > 690 && x < 930 && y > 300 && y < 352) { this.lever = Math.max(0, Math.min(1, Math.round((x - 690) / 240 * 10) / 10)); this.m.audio.click(); }
  }
  update(dt) {
    const dH = dt / 3; step(this.s, this.lever, this.mode, dH); this.acc += dH;
    if (this.acc >= 0.25) { this.acc -= 0.25; this.hist.push(Object.assign({ h: this.s.h }, this.s.out)); }
    if (this.s.h >= 24) { const p = pct(this.s); this.m.setHint(p >= 97 ? 'Día casi perfecto: guardaste agua y batería para cuando hacían falta.' : p >= 88 ? 'Muy buen día. Para mejorarlo, cerrá el agua cuando hay sol y abrila de noche.' : 'Se quemó bastante combustible. Probá otra vez turbinando poco de día y guardando el agua para la noche.'); this.m.finish(true, `${Math.round(p)} % RENOVABLE`); }
  }
  draw(g) {
    const s = this.s, o = s.out, X = h => 44 + h * 25, Y = mw => 336 - mw * 1.12;
    g.fillStyle = '#0a1930'; g.fillRect(0, 0, SW, SH);
    txt(g, 'Pronóstico y demanda del día', 44, 30, 20, '#fff7e6', 'left'); txt(g, 'MW', 30, 60, 12, '#a9bbd6', 'center', NUN);
    g.strokeStyle = '#1f3a66'; g.lineWidth = 1; for (let mw = 0; mw <= 240; mw += 60) { g.beginPath(); g.moveTo(44, Y(mw)); g.lineTo(644, Y(mw)); g.stroke(); txt(g, String(mw), 28, Y(mw), 11, '#6f84a8', 'center', NUN); }
    const area = (f0, f1, col) => { g.fillStyle = col; g.beginPath(); this.fc.forEach((p, i) => { const y = Y(f1(p)); if (i) g.lineTo(X(p[0]), y); else g.moveTo(X(p[0]), y); }); for (let i = this.fc.length - 1; i >= 0; i--) g.lineTo(X(this.fc[i][0]), Y(f0(this.fc[i]))); g.closePath(); g.fill(); };
    area(() => 0, () => BIO, '#7fae54'); area(() => BIO, p => BIO + p[1], '#7fd4ff'); area(p => BIO + p[1], p => BIO + p[1] + p[2], '#ffd23f');
    for (const q of this.hist) { const x = X(q.h - 0.25), b0 = BIO + q.w + q.su; g.fillStyle = '#2f7de0'; g.fillRect(x, Y(b0 + q.hy), 6.6, q.hy * 1.12); if (q.bat > 0) { g.fillStyle = '#57e389'; g.fillRect(x, Y(b0 + q.hy + q.bat), 6.6, q.bat * 1.12); } if (q.fossil > 0.5) { g.fillStyle = '#e0483a'; g.fillRect(x, Y(q.d), 6.6, q.fossil * 1.12); } }
    g.strokeStyle = '#fff7e6'; g.lineWidth = 3; g.beginPath(); this.fc.forEach((p, i) => { if (i) g.lineTo(X(p[0]), Y(p[3])); else g.moveTo(X(p[0]), Y(p[3])); }); g.stroke();
    g.strokeStyle = '#ff8fab'; g.lineWidth = 2; g.beginPath(); g.moveTo(X(s.h), 52); g.lineTo(X(s.h), 340); g.stroke();
    for (let h = 0; h <= 24; h += 6) txt(g, h + ' h', X(h), 354, 13, '#a9bbd6', 'center', NUN);
    [['#7fae54', 'Biomasa'], ['#7fd4ff', 'Viento'], ['#ffd23f', 'Sol'], ['#2f7de0', 'Agua'], ['#57e389', 'Batería'], ['#e0483a', 'Fósil']].forEach(([c, n], i) => { g.fillStyle = c; g.fillRect(44 + i * 100, 378, 14, 14); txt(g, n, 64 + i * 100, 386, 13, '#fff7e6', 'left', NUN); });
    g.fillStyle = '#fff7e6'; g.fillRect(44, 406, 22, 3); txt(g, 'Demanda de la ciudad', 74, 408, 13, '#fff7e6', 'left', NUN);
    const night = s.h < 6.5 || s.h > 19.5; txt(g, `${String(Math.floor(s.h) % 24).padStart(2, '0')}:${String(Math.floor((s.h % 1) * 60)).padStart(2, '0')}`, 110, 470, 44, night ? '#9be7ff' : '#ffd23f', 'left'); txt(g, night ? 'Noche: no hay sol' : 'Día', 250, 474, 16, '#a9bbd6', 'left', NUN);
    const st = o.fossil > 1 ? ['Falta energía: entra el respaldo fósil', '#ff8f7a'] : o.waste > 1 ? ['Sobra energía: cargá baterías o cerrá agua', '#ffd23f'] : ['Red en equilibrio', '#57e389']; txt(g, st[0], 44, 512, 18, st[1], 'left');
    // panel derecho
    rr(g, 672, 20, 268, 500, 14); g.fillStyle = '#10264a'; g.fill(); g.lineWidth = 3; g.strokeStyle = '#2a4374'; g.stroke();
    txt(g, 'Renovable hoy', 806, 48, 16, '#a9bbd6', 'center', NUN); txt(g, Math.round(pct(s)) + ' %', 806, 90, 50, pct(s) >= 95 ? '#57e389' : pct(s) >= 85 ? '#ffd23f' : '#ff8f7a');
    const bar = (y, lab, v, col, tx) => { txt(g, lab, 690, y, 14, '#fff7e6', 'left', NUN); txt(g, tx, 930, y, 14, '#a9bbd6', 'right', NUN); rr(g, 690, y + 12, 240, 20, 8); g.fillStyle = '#0a1930'; g.fill(); g.fillStyle = col; rr(g, 692, y + 14, Math.max(6, 236 * v), 16, 6); g.fill(); };
    bar(142, 'Agua en el embalse', s.water / WATER, '#2f7de0', Math.round(s.water / WATER * 100) + ' %'); bar(202, 'Batería', s.soc / BATE, '#57e389', Math.round(s.soc / BATE * 100) + ' %');
    txt(g, '↑ ↓  Agua que se turbina', 690, 284, 14, '#fff7e6', 'left', NUN); txt(g, Math.round(this.lever * 100) + ' %', 930, 284, 16, '#9be7ff', 'right');
    for (let i = 0; i < 10; i++) { rr(g, 690 + i * 24, 304, 20, 44, 5); g.fillStyle = i < Math.round(this.lever * 10) ? '#2f7de0' : '#0a1930'; g.fill(); g.lineWidth = 2; g.strokeStyle = '#2a4374'; g.stroke(); }
    txt(g, '← →  Baterías', 690, 388, 14, '#fff7e6', 'left', NUN);
    ['Cargar', 'Reposo', 'Descargar'].forEach((n, i) => { const on = this.mode === i - 1; rr(g, 690 + i * 80, 404, 76, 42, 9); g.fillStyle = on ? '#ffc93c' : '#0a1930'; g.fill(); g.lineWidth = 2; g.strokeStyle = on ? '#ffc93c' : '#2a4374'; g.stroke(); txt(g, n, 728 + i * 80, 426, 14, on ? '#1b1400' : '#a9bbd6', 'center', NUN); });
    txt(g, o.bat < -0.5 ? 'Guardando lo que sobra' : o.bat > 0.5 ? 'Entregando energía' : this.mode < 0 ? 'No sobra nada para guardar' : this.mode > 0 ? (s.soc < 1 ? 'Batería vacía' : 'No hace falta ahora') : 'En espera', 806, 474, 14, '#a9bbd6', 'center', NUN);
  }
}
Dispatch.size = [SW, SH];

// ---------- Escena grande: por dentro de la torre de un aerogenerador ----------
const FLOORS = [
  'Base de la torre: acá abajo el transformador sube la tensión para mandar la energía lejos.',
  'Por estos cables baja la electricidad desde la góndola, decenas de metros más arriba.',
  'La torre es hueca. Los técnicos suben por escaleras como esta y, en las más altas, en ascensor.',
  'El sistema de orientación gira la góndola para que las palas miren siempre al viento.',
  'La multiplicadora convierte el giro lento de las palas en uno rápido para el generador.',
  '¡La góndola! Acá el generador transforma el giro en electricidad.'];
class Tower {
  constructor(m, o) {
    this.m = m; this.title = o.title || 'Torre del aerogenerador'; this.noEase = true; this.t = 0; this.x = 420; this.fl = 0; this.cl = 0; this.k = {}; this.bolt = [0, 0, 0, 0, 0]; this.face = 1; this.work = 0; this.cam = 0; this.msgT = 0;
    this.hint = 'Subí por dentro de la torre. En cada piso hay un bulón flojo: parate al lado y apretá Espacio para ajustarlo y abrir la escotilla. Después andá a la escalera y subí con ↑. Flechas ← → para caminar.';
  }
  lad(i) { return i % 2 ? 600 : 360; }
  bx(i) { return i % 2 ? 380 : 580; }
  act() { const i = this.fl; if (this.cl > 0 || i > 4 || this.bolt[i] >= 1) return; if (Math.abs(this.x - this.bx(i)) < 34) this.work = 0.25; else this.msgT = 1.6; }
  key(c, d) { this.k[c] = d; if (d && (c === 'Space' || c === 'KeyE' || c === 'Enter')) this.act(); }
  down(x, y) { this.pk = y < 190 ? 'ArrowUp' : x < 380 ? 'ArrowLeft' : x > 580 ? 'ArrowRight' : null; if (this.pk) this.k[this.pk] = true; else this.act(); }
  up() { if (this.pk) this.k[this.pk] = false; this.pk = null; }
  update(dt) {
    this.t += dt; this.msgT = Math.max(0, this.msgT - dt); const k = this.k, i = this.fl, L = k.ArrowLeft || k.KeyA, R = k.ArrowRight || k.KeyD, U = k.ArrowUp || k.KeyW, D = k.ArrowDown || k.KeyS;
    if (this.work > 0 && i < 5) { this.work -= dt; this.bolt[i] = Math.min(1, this.bolt[i] + dt * 2.2); if (this.bolt[i] >= 1) { this.work = 0; this.m.audio.ok(); } else if (this.work <= 0 && (k.Space || k.KeyE)) this.work = 0.25; }
    if (this.cl > 0 || (U && i < 5 && this.bolt[i] >= 1 && Math.abs(this.x - this.lad(i)) < 26)) {
      this.x = this.lad(i); this.cl += (D && !U ? -1 : U || this.cl > 0.05 ? 1 : 0) * dt * 1.15; if (D && !U && this.cl <= 0) this.cl = 0;
      if (this.cl >= 1) { this.cl = 0; this.fl++; this.m.audio.click(); if (this.fl >= 5) this.m.finish(true, '¡ARRIBA DE TODO!'); }
    } else if (this.work <= 0) { const v = (R ? 1 : 0) - (L ? 1 : 0); if (v) this.face = v; this.x = Math.max(322, Math.min(638, this.x + v * 210 * dt)); this.walk = v ? this.t : 0; if (U && i < 5 && this.bolt[i] < 1 && Math.abs(this.x - this.lad(i)) < 26) this.msgT = 1.6; }
    this.cam += ((this.fl + this.cl) * 130 - this.cam) * Math.min(1, dt * 5);
  }
  draw(g) {
    const cy = this.cam, FY = i => 430 - i * 130 + cy, hgt = (this.fl + this.cl) / 5;
    const gr = g.createLinearGradient(0, 0, 0, SH); gr.addColorStop(0, hgt > 0.5 ? '#2f7fd0' : '#62bbf0'); gr.addColorStop(1, '#bfe3f5'); g.fillStyle = gr; g.fillRect(0, 0, SW, SH);
    g.fillStyle = '#ffffff'; for (let c = 0; c < 6; c++) { const x = (c * 190 + this.t * 8) % 1100 - 70, y = 80 + c * 95 + cy * 0.25 - 120; g.globalAlpha = 0.8; g.beginPath(); g.ellipse(x, y, 60, 20, 0, 0, 7); g.ellipse(x + 34, y - 12, 40, 18, 0, 0, 7); g.fill(); } g.globalAlpha = 1;
    g.fillStyle = '#6fb04e'; g.fillRect(0, FY(0) + 40, SW, 400);   // suelo, queda abajo al subir
    g.fillStyle = '#dfe6ee'; g.fillRect(292, FY(5) - 150, 376, 150 + 5 * 130 + 44); g.fillStyle = '#c3cdd9'; g.fillRect(292, FY(5) - 150, 14, 900); g.fillRect(654, FY(5) - 150, 14, 900);
    g.strokeStyle = '#ffc93c'; g.lineWidth = 4; for (const cx of [472, 488]) { g.beginPath(); g.moveTo(cx, FY(5) - 60); g.lineTo(cx, FY(0)); g.stroke(); }
    for (let i = 0; i <= 5; i++) {
      const y = FY(i); if (y < -160 || y > SH + 60) continue;
      g.fillStyle = '#7d8a9c'; g.fillRect(306, y, 348, 12);
      if (i < 5) { const lx = this.lad(i), ok = this.bolt[i] >= 1; g.strokeStyle = ok ? '#4a5568' : '#9aa5b5'; g.lineWidth = 4; g.beginPath(); g.moveTo(lx - 14, y); g.lineTo(lx - 14, y - 130); g.moveTo(lx + 14, y); g.lineTo(lx + 14, y - 130); g.stroke(); g.lineWidth = 3; for (let r = 14; r < 130; r += 18) { g.beginPath(); g.moveTo(lx - 14, y - r); g.lineTo(lx + 14, y - r); g.stroke(); }
        g.fillStyle = ok ? '#57e389' : '#e0483a'; g.fillRect(lx - 22, y - 128, 44, 8);   // escotilla
        const bx = this.bx(i); g.save(); g.translate(bx, y - 16); g.rotate(this.bolt[i] * 6.283); g.fillStyle = ok ? '#57e389' : '#ffb23c'; g.beginPath(); for (let a = 0; a < 6; a++) g.lineTo(Math.cos(a * 1.047) * 13, Math.sin(a * 1.047) * 13); g.closePath(); g.fill(); g.fillStyle = '#3a4252'; g.fillRect(-2, -8, 4, 16); g.restore();
        if (!ok) txt(g, 'bulón flojo', bx, y - 42 + Math.sin(this.t * 5) * 2, 13, '#b3541e', 'center', NUN); }
      if (i === 0) { g.fillStyle = '#51648a'; g.fillRect(452, y - 60, 60, 60); g.fillStyle = '#ffc93c'; g.fillRect(470, y - 46, 24, 8); }
      if (i === 3) { g.strokeStyle = '#51648a'; g.lineWidth = 8; g.beginPath(); g.arc(480, y - 44, 26, this.t, this.t + 5.2); g.stroke(); }
      if (i === 4) { g.fillStyle = '#51648a'; rr(g, 430, y - 74, 100, 74, 10); g.fill(); g.strokeStyle = '#8fa3c8'; g.lineWidth = 5; for (const [gx, r, sp] of [[458, 20, 1], [502, 13, -1.6]]) { g.beginPath(); for (let a = 0; a < 6.3; a += 0.785) { g.moveTo(gx, y - 38); g.lineTo(gx + Math.cos(a + this.t * 3 * sp) * r, y - 38 + Math.sin(a + this.t * 3 * sp) * r); } g.stroke(); } }
      if (i === 5) { g.fillStyle = '#2a4374'; rr(g, 380, y - 96, 200, 96, 14); g.fill(); g.fillStyle = '#ffc93c'; g.beginPath(); g.arc(480, y - 48, 30, 0, 7); g.fill(); g.fillStyle = '#2a4374'; g.beginPath(); g.arc(480, y - 48, 12, 0, 7); g.fill(); txt(g, 'GENERADOR', 480, y - 108, 14, '#2a4374'); }
      txt(g, i * 16 + ' m', 268, y + 4, 13, '#2a4374', 'right', NUN);
    }
    // Capi
    const py = FY(this.fl) - this.cl * 130, bob = this.cl > 0 ? Math.sin(this.cl * 40) * 2 : this.walk ? Math.abs(Math.sin(this.t * 14)) * 3 : 0;
    g.save(); g.translate(this.x, py - bob); g.scale(this.cl > 0 ? 1 : this.face, 1);
    g.fillStyle = '#8a5a33'; rr(g, -15, -44, 30, 40, 9); g.fill(); g.fillStyle = '#4fc3f7'; g.fillRect(-15, -30, 30, 14); g.fillStyle = '#f1ff6b'; g.fillRect(-15, -24, 30, 3);
    g.fillStyle = '#9a6a40'; rr(g, -13, -66, 28, 24, 8); g.fill(); g.fillStyle = '#ffc420'; rr(g, -15, -72, 30, 13, 6); g.fill(); g.fillStyle = '#1b1400'; g.fillRect(6, -58, 4, 5); g.fillStyle = '#5a3a20'; g.fillRect(11, -52, 6, 5);
    g.fillStyle = '#6b4526'; g.fillRect(-11, -5, 8, 6); g.fillRect(3, -5, 8, 6);
    if (this.work > 0) { g.strokeStyle = '#c3cdd9'; g.lineWidth = 4; g.beginPath(); g.moveTo(12, -30); g.lineTo(26 + Math.sin(this.t * 30) * 3, -16); g.stroke(); }
    g.restore();
    rr(g, 20, SH - 76, SW - 40, 60, 12); g.fillStyle = 'rgba(10,25,48,.9)'; g.fill();
    const tip = this.msgT > 0 ? (this.bolt[this.fl] < 1 ? 'Primero ajustá el bulón flojo de este piso: parate al lado y apretá Espacio.' : '') : ''; txt(g, tip || FLOORS[this.fl], SW / 2, SH - 46, 17, tip ? '#ffb23c' : '#fff7e6', 'center', NUN);
    txt(g, `Piso ${this.fl + 1} de 6`, 40, 34, 20, '#0f2140', 'left');
  }
}
Tower.size = [SW, SH];

GAMES.cometa = Kite; GAMES.cinta = Belt; GAMES.despacho = Dispatch; GAMES.torre = Tower;
