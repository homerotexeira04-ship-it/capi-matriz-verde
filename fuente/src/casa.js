// «La casa eficiente»: una casa en corte con cosas que gastan energía de más. Se tocan para arreglarlas y cada arreglo
// deja un consejo para usar en casa. Los consejos siguen las recomendaciones del MIEM (eficiencia.uy, «Recomendaciones
// 2025» y el «Manual de eficiencia energética para el hogar») y de UTE: termostato del calefón en 60 °C como máximo,
// aire en 25 °C o más en verano y 21 °C o menos en invierno, la LED gasta unas 10 veces menos que la incandescente, etc.
// Sin apuro ni tiempo: sirve también para charlarlo en grupo, por ejemplo en un taller con personas mayores.
import { GAMES, txt, rr } from './minigames.js';

const SW = 960, SH = 540, NUN = 'Nunito,sans-serif', TOP = 118, FLOOR = 432;
const ROOMS = ['BAÑO', 'COCINA', 'LIVING', 'DORMITORIO'], RX = i => 52 + i * 216, RW = 208;
const WALL = ['#d3ecf2', '#f7ead0', '#f3dfcc', '#e2dcf3'];

// Lo que puede estar gastando de más. box: zona que se toca (una o varias). Ordenados de izquierda a derecha.
const ITEMS = [
  { k: 'calefon', room: 0, box: [[166, 132, 238, 262]], tip: 'Calefón: con el termostato en 60 °C como máximo alcanza. Y un reloj que lo prenda solo antes de bañarte ahorra bastante.' },
  { k: 'canilla', room: 0, box: [[60, 236, 152, 330]], tip: 'Canilla que gotea: tira agua y también la energía que el calefón gastó en calentarla. Se arregla cambiándole el cuerito.' },
  { k: 'lavarropas', room: 0, box: [[164, 330, 248, 432]], tip: 'Lavarropas: lavá con la carga completa que dice el manual y evitá el agua caliente.' },
  { k: 'heladera', room: 1, box: [[270, 190, 366, 432]], tip: 'Heladera: abrila poco y cerrala rápido, y fijate que el burlete cierre bien. La comida caliente se guarda cuando se enfría.' },
  { k: 'olla', room: 1, box: [[368, 270, 428, 350]], tip: 'Olla: cociná con la tapa puesta y en una hornalla de su tamaño. Así el calor queda en la comida y no se va al aire.' },
  { k: 'pava', room: 1, box: [[428, 266, 478, 348]], tip: 'Pava: calentá solo el agua que vas a usar. Y para el mate no tiene que hervir.' },
  { k: 'aire', room: 2, box: [[584, 132, 684, 178], [592, 188, 676, 284]], tip: 'Aire acondicionado: en verano, a 25 °C o más (en invierno, a 21 °C o menos), y con puertas y ventanas cerradas.' },
  { k: 'tele', room: 2, box: [[490, 316, 616, 432]], tip: 'Stand-by: la lucecita roja también gasta. Es poco, pero suma todo el día: desenchufá o apagá la zapatilla al salir de casa.' },
  { k: 'luz', room: 3, box: [[794, TOP, 866, 204]], tip: 'Luz: apagala si no hay nadie y aprovechá la luz del día. Una lámpara LED gasta unas 10 veces menos que una incandescente.' },
  { k: 'plancha', room: 3, box: [[706, 326, 798, 432]], tip: 'Plancha: nunca la dejes prendida sola. Apagala un poquito antes de terminar y aprovechá el calor que le queda.' }];
const ctr = it => { const b = it.box[0]; return [(b[0] + b[2]) / 2, (b[1] + b[3]) / 2]; };
const wrap = (g, s, max, size) => { g.font = `${size}px ${NUN}`; const out = []; let l = ''; for (const w of s.split(' ')) { const t = l ? l + ' ' + w : w; if (l && g.measureText(t).width > max) { out.push(l); l = w; } else l = t; } if (l) out.push(l); return out; };

class Casa {
  constructor(m, o) {
    this.m = m; this.title = o.title || 'La casa eficiente'; this.noEase = true; this.t = 0; this.last = 0; this.sel = 0; this.kb = false; this.hov = -1;
    this.hint = 'Recorré la casa y tocá lo que está gastando energía de más. Con teclado: flechas para elegir y Espacio para arreglar. Cada arreglo trae un consejo para usar en casa.';
    // seis cosas para arreglar, al menos una en cada ambiente
    const bad = new Set(), pick = a => a[Math.floor(Math.random() * a.length)];
    for (let r = 0; r < 4; r++) bad.add(pick(ITEMS.map((it, i) => [it, i]).filter(([it]) => it.room === r))[1]);
    while (bad.size < 6) bad.add(Math.floor(Math.random() * ITEMS.length));
    this.bad = ITEMS.map((_, i) => bad.has(i)); this.total = bad.size; this.fixAt = ITEMS.map(() => -9);
    this.tip = null; this.msg = null; this.msgT = 0; this.endT = 0;
  }
  get left() { return this.bad.filter(Boolean).length; }
  at(x, y) { return ITEMS.findIndex(it => it.box.some(b => x >= b[0] && x <= b[2] && y >= b[1] && y <= b[3])); }
  act(i) {
    if (i < 0 || this.endT > 0) return; this.sel = i;
    if (!this.bad[i]) { this.msg = 'Eso está bien así. Buscá otra cosa.'; this.msgT = 2; this.m.audio.click(); return; }
    this.bad[i] = false; this.fixAt[i] = this.t; this.last = this.t; this.tip = ITEMS[i]; this.msgT = 0; this.m.audio.ok();
    if (!this.left) this.endT = 6.5;   // un momento para leer el último consejo y el cierre
  }
  key(c, d) {
    if (!d) return; const n = ITEMS.length;
    if (this.endT > 0) { if (c === 'Space' || c === 'Enter') this.endT = Math.min(this.endT, 0.05); return; }
    if (c === 'ArrowLeft' || c === 'ArrowUp' || c === 'KeyA' || c === 'KeyW') { this.kb = true; this.sel = (this.sel + n - 1) % n; }
    else if (c === 'ArrowRight' || c === 'ArrowDown' || c === 'KeyD' || c === 'KeyS') { this.kb = true; this.sel = (this.sel + 1) % n; }
    else if (c === 'Space' || c === 'Enter' || c === 'KeyE') { this.kb = true; this.act(this.sel); }
  }
  down(x, y) { this.kb = false; if (this.endT > 0) { if (this.endT < 5.5) this.endT = Math.min(this.endT, 0.05); return; } this.act(this.at(x, y)); }
  move(x, y) { this.hov = this.at(x, y); }
  update(dt) {
    this.t += dt; this.msgT = Math.max(0, this.msgT - dt);
    if (this.endT > 0) { this.endT -= dt; if (this.endT <= 0) this.m.finish(true, '¡CASA EFICIENTE!'); }
  }

  // ---------- dibujo ----------
  draw(g) {
    const t = this.t;
    const sky = g.createLinearGradient(0, 0, 0, 470); sky.addColorStop(0, '#5fb6ee'); sky.addColorStop(1, '#c4e6f6'); g.fillStyle = sky; g.fillRect(0, 0, SW, SH);
    g.fillStyle = '#ffd23f'; g.beginPath(); g.arc(300, 30, 20, 0, 7); g.fill(); g.strokeStyle = 'rgba(255,210,63,.55)'; g.lineWidth = 4;
    for (let k = 0; k < 10; k++) { const a = k * 0.628 + t * 0.2; g.beginPath(); g.moveTo(300 + Math.cos(a) * 27, 30 + Math.sin(a) * 27); g.lineTo(300 + Math.cos(a) * 35, 30 + Math.sin(a) * 35); g.stroke(); }
    g.fillStyle = '#6fb04e'; g.fillRect(0, FLOOR + 10, SW, 40); g.fillStyle = '#5c9a40'; for (let x = 6; x < SW; x += 22) g.fillRect(x, FLOOR + 10, 3, 6);
    // techo y paredes
    g.fillStyle = '#a8492a'; g.beginPath(); g.moveTo(22, TOP - 4); g.lineTo(480, 58); g.lineTo(938, TOP - 4); g.closePath(); g.fill();
    g.fillStyle = '#c45a34'; g.beginPath(); g.moveTo(44, TOP - 8); g.lineTo(480, 66); g.lineTo(916, TOP - 8); g.closePath(); g.fill();
    g.fillStyle = '#8a5a3c'; g.fillRect(40, TOP - 6, 880, FLOOR - TOP + 16);
    for (let i = 0; i < 4; i++) this.room(g, i);
    ITEMS.forEach((it, i) => this.item(g, it.k, ITEMS[i].box, this.bad[i], t, t - this.fixAt[i]));
    // ayuda: si pasa un rato sin encontrar nada, lo que falta empieza a latir
    const idle = t - this.last; if (idle > 16 && !this.endT) {
      const a = Math.min(1, (idle - 16) / 8) * (0.35 + 0.35 * Math.sin(t * 4));
      this.bad.forEach((b, i) => { if (!b) return; const [cx, cy] = ctr(ITEMS[i]); g.strokeStyle = `rgba(255,201,60,${a})`; g.lineWidth = 5; g.beginPath(); g.arc(cx, cy, 34 + 6 * Math.sin(t * 4), 0, 7); g.stroke(); });
    }
    const mark = (i, col, dash) => { if (i < 0) return; g.save(); g.setLineDash(dash ? [8, 6] : []); g.lineDashOffset = -t * 30; g.strokeStyle = col; g.lineWidth = 3; ITEMS[i].box.forEach(b => { rr(g, b[0] - 3, b[1] - 3, b[2] - b[0] + 6, b[3] - b[1] + 6, 10); g.stroke(); }); g.restore(); };
    if (!this.endT) { if (this.kb) mark(this.sel, '#ffc93c', true); else if (this.hov >= 0) mark(this.hov, 'rgba(255,247,230,.7)', false); }
    // cabecera: cuánto falta y la barra de gasto de más
    const done = this.total - this.left;
    rr(g, 26, 14, 214, 40, 12); g.fillStyle = 'rgba(15,33,64,.85)'; g.fill(); txt(g, `Arreglos: ${done} de ${this.total}`, 133, 35, 20, '#fff7e6');
    rr(g, 690, 14, 244, 40, 12); g.fillStyle = 'rgba(15,33,64,.85)'; g.fill(); txt(g, 'GASTO DE MÁS', 760, 35, 13, '#a9bbd6', 'center', NUN);
    rr(g, 820, 26, 102, 16, 8); g.fillStyle = '#13284c'; g.fill(); const f = this.left / this.total;
    if (f > 0) { g.fillStyle = f > 0.5 ? '#ff8f4a' : f > 0.2 ? '#ffc93c' : '#57e389'; rr(g, 822, 28, Math.max(12, 98 * f), 12, 6); g.fill(); } else txt(g, '¡nada!', 871, 35, 13, '#57e389', 'center', NUN);
    // franja de abajo: el consejo del último arreglo (o la consigna)
    rr(g, 16, 466, SW - 32, 64, 12); g.fillStyle = 'rgba(10,25,48,.93)'; g.fill();
    if (this.msgT > 0) txt(g, this.msg, SW / 2, 498, 19, '#ffb23c', 'center', NUN);
    else if (this.tip) { const L = wrap(g, this.tip.tip, SW - 90, 18); g.fillStyle = '#57e389'; g.beginPath(); g.arc(40, 498, 9, 0, 7); g.fill(); L.slice(0, 2).forEach((l, k) => txt(g, l, 58, 498 + (k - (Math.min(2, L.length) - 1) / 2) * 23, 18, '#fff7e6', 'left', NUN)); }
    else txt(g, 'Tocá lo que esté gastando energía de más: hay ' + this.total + ' cosas para arreglar.', SW / 2, 498, 19, '#fff7e6', 'center', NUN);
    if (this.endT > 0 && this.endT < 5.2) this.final(g, Math.min(1, (5.2 - this.endT) * 3));
  }
  final(g, a) {
    g.save(); g.globalAlpha = a; g.fillStyle = 'rgba(6,18,38,.6)'; g.fillRect(0, 0, SW, 460);
    rr(g, 170, 120, 620, 250, 18); g.fillStyle = '#fff7e6'; g.fill(); g.strokeStyle = '#57e389'; g.lineWidth = 6; g.stroke();
    txt(g, '¡Casa eficiente!', SW / 2, 168, 38, '#1f7a46');
    txt(g, `Arreglaste las ${this.total} cosas que gastaban de más.`, SW / 2, 214, 20, '#0f2140', 'center', NUN);
    wrap(g, 'Un consejo más: con la tarifa de doble horario de UTE, el calefón y el lavarropas conviene usarlos fuera de las cuatro horas de punta, que se eligen entre las 17 y las 23.', 540, 18)
      .forEach((l, k) => txt(g, l, SW / 2, 256 + k * 24, 18, '#2a4374', 'center', NUN));
    txt(g, 'Tocá o apretá Espacio para seguir', SW / 2, 346, 14, '#6f84a8', 'center', NUN);
    g.restore();
  }
  room(g, i) {
    const x = RX(i), w = RW; g.fillStyle = WALL[i]; g.fillRect(x, TOP, w, FLOOR - TOP);
    if (i === 0) { g.strokeStyle = 'rgba(80,140,160,.25)'; g.lineWidth = 1; for (let y = 250; y < FLOOR; y += 18) { g.beginPath(); g.moveTo(x, y); g.lineTo(x + w, y); g.stroke(); } for (let xx = x + 18; xx < x + w; xx += 18) { g.beginPath(); g.moveTo(xx, 250); g.lineTo(xx, FLOOR); g.stroke(); } }
    if (i === 1) { g.fillStyle = 'rgba(181,83,47,.12)'; for (let xx = x + 100; xx < x + w; xx += 14) for (let y = 240; y < 338; y += 14) if ((xx + y) % 28 === 0) g.fillRect(xx, y, 14, 14); }
    g.fillStyle = i === 0 ? '#9fc3cf' : '#b98a5c'; g.fillRect(x, FLOOR - 6, w, 6);
    txt(g, ROOMS[i], x + w / 2, TOP + 14, 13, 'rgba(42,67,116,.75)', 'center', NUN);
    // ventanas de adorno (de día: se ve el cielo)
    const win = (wx, wy, ww, wh) => { g.fillStyle = '#9fd6f5'; g.fillRect(wx, wy, ww, wh); g.strokeStyle = '#f4efe6'; g.lineWidth = 5; g.strokeRect(wx, wy, ww, wh); g.beginPath(); g.moveTo(wx + ww / 2, wy); g.lineTo(wx + ww / 2, wy + wh); g.moveTo(wx, wy + wh / 2); g.lineTo(wx + ww, wy + wh / 2); g.stroke(); };
    if (i === 1) win(x + 118, 156, 70, 62);
    if (i === 3) win(x + 136, 214, 56, 58);
    // muebles de adorno
    if (i === 2) { g.fillStyle = '#4f7fbf'; rr(g, x + 132, 388, 72, 38, 8); g.fill(); rr(g, x + 128, 374, 14, 52, 6); g.fill(); rr(g, x + 194, 374, 14, 52, 6); g.fill(); g.fillStyle = '#6a98d4'; rr(g, x + 140, 380, 56, 18, 6); g.fill(); }
    if (i === 3) { g.fillStyle = '#7a4f33'; g.fillRect(x + 106, 386, 98, 40); g.fillRect(x + 196, 360, 10, 66); g.fillStyle = '#f4efe6'; rr(g, x + 108, 376, 88, 16, 5); g.fill(); g.fillStyle = '#e6007e'; rr(g, x + 130, 380, 66, 14, 5); g.fill(); g.fillStyle = '#ffffff'; rr(g, x + 112, 370, 26, 12, 5); g.fill(); }
    if (i < 3) { g.fillStyle = '#8a5a3c'; g.fillRect(x + w, TOP, 8, FLOOR - TOP); }
  }
  item(g, k, box, bad, t, since) {
    const pop = since >= 0 && since < 0.5 ? Math.sin(since / 0.5 * Math.PI) : 0;   // destello verde al arreglarlo
    if (pop) { const [cx, cy] = ctr({ box }); g.fillStyle = `rgba(87,227,137,${0.35 * pop})`; g.beginPath(); g.arc(cx, cy, 40 + 30 * pop, 0, 7); g.fill(); }
    const heat = (x, y, n, col) => { g.strokeStyle = col; g.lineWidth = 3; for (let k = 0; k < n; k++) { const xx = x + (k - (n - 1) / 2) * 12, ph = t * 3 + k; g.beginPath(); for (let s = 0; s <= 10; s++) { const yy = y - s * 2.6; g.lineTo(xx + Math.sin(ph + s * 0.7) * 3, yy - ((t * 18 + k * 7) % 8)); } g.stroke(); } };
    const led = (x, y, on, col) => { g.fillStyle = on ? col : '#4a5568'; g.beginPath(); g.arc(x, y, 4, 0, 7); g.fill(); if (on) { g.fillStyle = col.replace(')', ',.3)').replace('rgb', 'rgba'); g.beginPath(); g.arc(x, y, 8, 0, 7); g.fill(); } };
    if (k === 'calefon') {
      const x = 202, y = 196;
      g.strokeStyle = '#5a8fd6'; g.lineWidth = 5; g.beginPath(); g.moveTo(x - 12, y + 50); g.lineTo(x - 12, y + 70); g.stroke(); g.strokeStyle = '#e0483a'; g.beginPath(); g.moveTo(x + 12, y + 50); g.lineTo(x + 12, y + 70); g.lineTo(x - 70, y + 70); g.stroke();
      rr(g, x - 28, y - 56, 56, 108, 26); g.fillStyle = '#eef2f6'; g.fill(); g.strokeStyle = '#9aa8b8'; g.lineWidth = 3; g.stroke();
      rr(g, x - 20, y - 8, 40, 24, 6); g.fillStyle = '#0f2140'; g.fill(); txt(g, bad ? '75°' : '60°', x, y + 5, 16, bad ? '#ff8f4a' : '#57e389');
      led(x, y + 30, !bad || Math.sin(t * 6) > -0.3, bad ? 'rgb(255,90,74)' : 'rgb(87,227,137)');
      if (bad) heat(x, y - 62, 3, 'rgba(255,120,60,.7)');
    } else if (k === 'canilla') {
      const x = 106;
      g.fillStyle = '#f4f6f8'; rr(g, x - 12, 306, 24, 120, 6); g.fill(); rr(g, x - 42, 290, 84, 22, 10); g.fill(); g.strokeStyle = '#b9c4d0'; g.lineWidth = 2; g.stroke();
      g.fillStyle = '#c3cdd9'; rr(g, x - 4, 250, 8, 40, 3); g.fill(); rr(g, x - 4, 250, 30, 8, 3); g.fill(); g.fillStyle = '#e0483a'; g.beginPath(); g.arc(x, 248, 7, 0, 7); g.fill();
      g.fillStyle = '#c3cdd9'; rr(g, x + 20, 256, 8, 12, 3); g.fill();
      if (bad) { g.fillStyle = '#7cc8f5'; for (let d = 0; d < 2; d++) { const p = (t * 1.6 + d * 0.5) % 1; g.globalAlpha = 1 - p * 0.3; g.beginPath(); g.ellipse(x + 24, 272 + p * 22, 3, 4.5, 0, 0, 7); g.fill(); } g.globalAlpha = 1; heat(x + 24, 292, 2, 'rgba(255,255,255,.55)'); }
    } else if (k === 'lavarropas') {
      const x = 206, y = 384;
      rr(g, x - 38, y - 50, 76, 98, 8); g.fillStyle = '#f4f6f8'; g.fill(); g.strokeStyle = '#b9c4d0'; g.lineWidth = 2; g.stroke();
      g.fillStyle = '#2a4374'; rr(g, x - 30, y - 44, 34, 12, 3); g.fill(); txt(g, bad ? '60°' : 'FRÍA', x - 13, y - 38, 9, bad ? '#ff8f4a' : '#9be7ff', 'center', NUN); g.fillStyle = '#c3cdd9'; g.beginPath(); g.arc(x + 22, y - 38, 6, 0, 7); g.fill();
      g.fillStyle = '#c3cdd9'; g.beginPath(); g.arc(x, y + 8, 27, 0, 7); g.fill(); g.fillStyle = bad ? '#3a2f52' : '#1b3a66'; g.beginPath(); g.arc(x, y + 8, 21, 0, 7); g.fill();
      g.save(); g.beginPath(); g.arc(x, y + 8, 21, 0, 7); g.clip(); const r0 = t * 2.4;
      const cl = bad ? [['#ffc93c', 0]] : [['#e6007e', 0], ['#ffc93c', 1.2], ['#57e389', 2.3], ['#ffffff', 3.4], ['#5ad1ff', 4.6]];
      cl.forEach(([c, a]) => { g.fillStyle = c; g.beginPath(); g.ellipse(x + Math.cos(r0 + a) * 10, y + 8 + Math.sin(r0 + a) * 10 + (bad ? 8 : 0), bad ? 6 : 10, bad ? 4 : 7, r0 + a, 0, 7); g.fill(); });
      if (bad) { g.fillStyle = 'rgba(255,110,60,.25)'; g.fillRect(x - 21, y - 13, 42, 42); }
      g.restore(); if (bad) txt(g, '½', x + 26, y + 34, 15, '#e0483a');
    } else if (k === 'heladera') {
      const x = 305, y0 = 196;
      if (bad) {
        g.fillStyle = '#eaf8ff'; rr(g, x - 32, y0, 64, FLOOR - 6 - y0, 10); g.fill(); g.fillStyle = 'rgba(160,220,255,.5)'; g.fillRect(x - 28, y0 + 4, 56, FLOOR - 14 - y0);
        g.fillStyle = '#c3d7e6'; for (const yy of [262, 318, 372]) g.fillRect(x - 28, yy, 56, 4);
        [['#e0483a', -14, 300], ['#57e389', 8, 304], ['#ffc93c', -6, 356], ['#f4efe6', 12, 410], ['#ff8f4a', -16, 412]].forEach(([c, dx, yy]) => { g.fillStyle = c; rr(g, x + dx - 7, yy - 14, 14, 14, 4); g.fill(); });
        g.fillStyle = '#d4dde8'; g.beginPath(); g.moveTo(x + 32, y0); g.lineTo(x + 58, y0 + 12); g.lineTo(x + 58, FLOOR - 16); g.lineTo(x + 32, FLOOR - 6); g.closePath(); g.fill(); g.strokeStyle = '#9aa8b8'; g.lineWidth = 2; g.stroke();
        g.strokeStyle = 'rgba(150,215,255,.85)'; g.lineWidth = 3; for (let k = 0; k < 4; k++) { const p = (t * 0.6 + k / 4) % 1, yy = 250 + k * 40; g.globalAlpha = 1 - p; g.beginPath(); for (let s = 0; s < 8; s++) g.lineTo(x + 40 + p * 46 + s * 5, yy + p * 26 + Math.sin(s + t * 3 + k) * 4); g.stroke(); } g.globalAlpha = 1;
      } else {
        rr(g, x - 32, y0, 64, FLOOR - 6 - y0, 10); g.fillStyle = '#e8eef4'; g.fill(); g.strokeStyle = '#9aa8b8'; g.lineWidth = 2; g.stroke();
        g.beginPath(); g.moveTo(x - 32, 270); g.lineTo(x + 32, 270); g.stroke(); g.fillStyle = '#9aa8b8'; rr(g, x + 20, 224, 5, 30, 2); g.fill(); rr(g, x + 20, 286, 5, 46, 2); g.fill();
      }
    } else if (k === 'olla' || k === 'pava') {
      if (k === 'olla') {   // la mesada y la cocina van con la olla
        g.fillStyle = '#d6c3a5'; g.fillRect(368, 346, 108, FLOOR - 352); g.fillStyle = '#b89b72'; for (const xx of [396, 450]) g.fillRect(xx, 360, 3, 60);
        g.fillStyle = '#2a2f3a'; g.fillRect(366, 336, 112, 10);
      }
      const x = k === 'olla' ? 396 : 452;
      if (k === 'olla') {
        const fw = bad ? 34 : 20; g.fillStyle = '#3b82f6'; for (let f = -fw; f <= fw; f += 7) { const h = 6 + Math.sin(t * 20 + f) * 2; g.beginPath(); g.moveTo(x + f - 3, 336); g.lineTo(x + f, 336 - h); g.lineTo(x + f + 3, 336); g.fill(); }
        g.fillStyle = '#8fa3c8'; rr(g, x - 24, 300, 48, 32, 6); g.fill(); g.fillRect(x - 32, 306, 8, 5); g.fillRect(x + 24, 306, 8, 5);
        if (bad) { g.fillStyle = 'rgba(255,255,255,.8)'; for (let s = 0; s < 4; s++) { const p = (t * 0.7 + s / 4) % 1; g.globalAlpha = 1 - p; g.beginPath(); g.arc(x - 12 + s * 8 + Math.sin(t * 2 + s) * 6, 296 - p * 36, 6 + p * 8, 0, 7); g.fill(); } g.globalAlpha = 1; g.fillStyle = '#5ad1ff'; g.fillRect(x - 20, 302, 40, 4); }
        else { g.fillStyle = '#6f84a8'; g.beginPath(); g.ellipse(x, 300, 27, 6, 0, Math.PI, 0); g.fill(); g.fillRect(x - 4, 290, 8, 6); }
      } else {
        g.fillStyle = '#2a2f3a'; rr(g, x - 20, 330, 40, 6, 3); g.fill(); led(x + 12, 333, bad, 'rgb(255,90,74)');
        g.fillStyle = '#e8eef4'; g.beginPath(); g.moveTo(x - 14, 296); g.lineTo(x + 14, 296); g.lineTo(x + 18, 330); g.lineTo(x - 18, 330); g.closePath(); g.fill(); g.strokeStyle = '#9aa8b8'; g.lineWidth = 2; g.stroke();
        g.beginPath(); g.moveTo(x - 15, 304); g.lineTo(x - 26, 296); g.stroke(); g.strokeStyle = '#2a2f3a'; g.lineWidth = 4; g.beginPath(); g.moveTo(x + 14, 300); g.quadraticCurveTo(x + 28, 312, x + 16, 324); g.stroke();
        g.fillStyle = bad ? '#5ad1ff' : '#9be7ff'; g.fillRect(x - 9, bad ? 300 : 316, 6, bad ? 28 : 12);
        if (bad) { g.fillStyle = 'rgba(255,255,255,.85)'; for (let s = 0; s < 5; s++) { const p = (t * 1.1 + s / 5) % 1; g.globalAlpha = 1 - p; g.beginPath(); g.arc(x - 28 - p * 10 + Math.sin(t * 3 + s) * 3, 292 - p * 30, 4 + p * 7, 0, 7); g.fill(); } g.globalAlpha = 1; txt(g, '100°', x, 282, 12, '#e0483a'); }
        else txt(g, 'mate', x, 284, 12, '#1f7a46', 'center', NUN);
      }
    } else if (k === 'aire') {
      const x = 634;
      rr(g, x - 44, 138, 88, 32, 8); g.fillStyle = '#f7f9fb'; g.fill(); g.strokeStyle = '#b9c4d0'; g.lineWidth = 2; g.stroke(); g.fillStyle = '#d5dde6'; g.fillRect(x - 38, 162, 76, 4);
      rr(g, x + 14, 144, 24, 14, 4); g.fillStyle = '#0f2140'; g.fill(); txt(g, bad ? '18°' : '25°', x + 26, 151, 11, bad ? '#5ad1ff' : '#57e389');
      g.strokeStyle = bad ? 'rgba(120,200,255,.9)' : 'rgba(120,200,255,.45)'; g.lineWidth = 2; for (let k = 0; k < (bad ? 4 : 2); k++) { const p = (t * 0.8 + k / 4) % 1; g.globalAlpha = 1 - p; g.beginPath(); g.moveTo(x - 30 + k * 18, 172 + p * 20); g.lineTo(x - 22 + k * 18, 172 + p * 20 + 6); g.stroke(); } g.globalAlpha = 1;
      const wx = 598, wy = 196, ww = 72, wh = 80;
      g.fillStyle = '#9fd6f5'; g.fillRect(wx, wy, ww, wh); g.strokeStyle = '#f4efe6'; g.lineWidth = 5; g.strokeRect(wx, wy, ww, wh);
      if (bad) {
        g.fillStyle = 'rgba(205,235,250,.9)'; g.strokeStyle = '#f4efe6'; g.lineWidth = 3;
        for (const s of [-1, 1]) { const ex = s < 0 ? wx : wx + ww; g.beginPath(); g.moveTo(ex, wy); g.lineTo(ex + s * 22, wy - 6); g.lineTo(ex + s * 22, wy + wh + 6); g.lineTo(ex, wy + wh); g.closePath(); g.fill(); g.stroke(); }
        g.fillStyle = '#e6007e'; g.globalAlpha = 0.85; g.beginPath(); g.moveTo(wx + 4, wy); g.quadraticCurveTo(wx + 24 + Math.sin(t * 3) * 8, wy + 40, wx + 10 + Math.sin(t * 2) * 10, wy + wh); g.lineTo(wx + 4, wy + wh); g.fill(); g.globalAlpha = 1;
        heat(wx + ww / 2, wy + wh - 8, 3, 'rgba(255,150,60,.75)');
      } else { g.beginPath(); g.moveTo(wx + ww / 2, wy); g.lineTo(wx + ww / 2, wy + wh); g.moveTo(wx, wy + wh / 2); g.lineTo(wx + ww, wy + wh / 2); g.stroke(); g.fillStyle = '#e6007e'; g.fillRect(wx - 10, wy - 4, 12, wh + 8); g.fillRect(wx + ww - 2, wy - 4, 12, wh + 8); }
    } else if (k === 'tele') {
      const x = 542;
      g.fillStyle = '#7a4f33'; g.fillRect(x - 46, 386, 92, 40); g.fillStyle = '#5e3c26'; g.fillRect(x - 46, 404, 92, 3);
      g.fillStyle = '#2a2f3a'; g.fillRect(x - 6, 376, 12, 10); rr(g, x - 44, 322, 88, 56, 5); g.fill(); g.fillStyle = '#0d1420'; g.fillRect(x - 40, 326, 80, 46);
      g.fillStyle = 'rgba(255,255,255,.08)'; g.beginPath(); g.moveTo(x - 40, 326); g.lineTo(x - 10, 326); g.lineTo(x - 30, 372); g.lineTo(x - 40, 372); g.fill();
      led(x + 34, 375, bad && Math.sin(t * 2.5) > -0.6, 'rgb(255,60,60)');
      g.fillStyle = '#2a2f3a'; rr(g, x - 30, 392, 34, 10, 3); g.fill(); led(x - 6, 397, bad, 'rgb(255,60,60)');
      g.fillStyle = '#f4efe6'; rr(g, 588, 420, 26, 9, 3); g.fill(); g.strokeStyle = '#2a2f3a'; g.lineWidth = 2; g.beginPath(); g.moveTo(x + 10, 386); g.quadraticCurveTo(x + 40, 430, 590, 424); g.stroke();
      led(607, 424, bad, 'rgb(255,150,40)');
    } else if (k === 'luz') {
      const x = 830;
      if (bad) { const gr = g.createLinearGradient(0, 176, 0, FLOOR); gr.addColorStop(0, 'rgba(255,220,120,.55)'); gr.addColorStop(1, 'rgba(255,220,120,0)'); g.fillStyle = gr; g.beginPath(); g.moveTo(x - 16, 176); g.lineTo(x + 16, 176); g.lineTo(x + 70, FLOOR - 6); g.lineTo(x - 70, FLOOR - 6); g.closePath(); g.fill(); }
      g.strokeStyle = '#2a2f3a'; g.lineWidth = 2; g.beginPath(); g.moveTo(x, TOP); g.lineTo(x, 156); g.stroke();
      g.fillStyle = bad ? '#fff1b8' : '#c3cdd9'; g.beginPath(); g.arc(x, 178, 9, 0, 7); g.fill();
      g.fillStyle = '#4f7fbf'; g.beginPath(); g.moveTo(x - 8, 156); g.lineTo(x + 8, 156); g.lineTo(x + 22, 178); g.lineTo(x - 22, 178); g.closePath(); g.fill();
      if (bad) { g.fillStyle = 'rgba(255,230,140,.35)'; g.beginPath(); g.arc(x, 180, 18 + Math.sin(t * 5) * 2, 0, 7); g.fill(); }
    } else if (k === 'plancha') {
      const x = 750;
      g.strokeStyle = '#6f84a8'; g.lineWidth = 3; g.beginPath(); g.moveTo(x - 26, 376); g.lineTo(x + 18, FLOOR - 6); g.moveTo(x + 18, 376); g.lineTo(x - 26, FLOOR - 6); g.stroke();
      g.fillStyle = '#5ad1ff'; g.beginPath(); g.moveTo(x - 46, 368); g.lineTo(x + 30, 368); g.quadraticCurveTo(x + 46, 372, x + 30, 377); g.lineTo(x - 46, 377); g.closePath(); g.fill();
      g.fillStyle = '#f4efe6'; rr(g, x - 40, 362, 34, 7, 3); g.fill();   // la camisa a medio planchar
      if (bad) {
        g.fillStyle = 'rgba(255,140,60,.35)'; g.beginPath(); g.ellipse(x + 10, 366, 26, 7, 0, 0, 7); g.fill();
        g.fillStyle = '#e8eef4'; g.beginPath(); g.moveTo(x - 6, 366); g.lineTo(x + 30, 366); g.quadraticCurveTo(x + 30, 350, x + 10, 350); g.lineTo(x - 2, 352); g.closePath(); g.fill(); g.fillStyle = '#e6007e'; rr(g, x, 340, 22, 7, 3); g.fill(); g.fillRect(x + 2, 344, 4, 8);
        led(x + 12, 359, Math.sin(t * 4) > -0.5, 'rgb(255,90,74)'); heat(x + 10, 338, 3, 'rgba(255,120,60,.7)');
      } else {   // parada sobre el talón, apagada
        g.fillStyle = '#e8eef4'; g.beginPath(); g.moveTo(x + 16, 366); g.lineTo(x + 26, 366); g.lineTo(x + 26, 332); g.quadraticCurveTo(x + 18, 330, x + 16, 340); g.closePath(); g.fill(); g.fillStyle = '#e6007e'; rr(g, x + 26, 336, 6, 22, 3); g.fill(); led(x + 21, 352, false, 'rgb(255,90,74)');
      }
    }
  }
}
Casa.size = [SW, SH];
GAMES.casa = Casa;
