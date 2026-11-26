// UIManager: HUD de telemetría, tarjeta de misión, diálogos con retratos, minimapa-brújula y panel de red.
import { clamp, lerp, fmtHour } from './util.js';
import { B, ZONES, terrainH, waterAt, coastD, westD, POS } from './terrain.js';
import { CAP } from './grid.js';

const $ = id => document.getElementById(id);
export const NAMES = { corte: 'Maqueta en corte · una unidad de Salto Grande', capi: 'Capi', valeria: 'Ing. Valeria', mateo: 'Don Mateo', lucia: 'Lucía', rosa: 'Doña Rosa', beto: 'Beto, el pescador', sofi: 'Sofía', guia: 'Pepe, guía de Energimundo', mamavieja: 'Mama Vieja', marta: 'Marta, guía del Patrimonio', papanoel: 'Papá Noel', payador: 'El payador', nico: 'Nico, guía nocturno', graciela: 'Graciela, maestra de Concordia', placa: 'Placa del monumento' };

// Retratos pixelados (grilla 24×24) con parpadeo y boca animada
export function drawFace(g, who, t, talking, col) {
  const R = (x, y, w, h, c) => { g.fillStyle = c; g.fillRect(x, y, w, h); };
  const blink = (t % 3.1) < 0.14, open = talking && Math.sin(t * 18) > 0;
  g.clearRect(0, 0, 24, 24);
  if (who === 'capi') {
    const hc = col ? col.helmet : '#ffc420', vc = col ? col.vest : '#4fc3f7', bc = col ? col.band : '#f1ff6b';
    R(0, 0, 24, 24, '#3f8fd0'); R(4, 17, 16, 7, vc); R(4, 20, 16, 1, bc);
    R(5, 7, 14, 12, '#a56f3e'); R(7, 12, 10, 8, '#b98250'); R(9, 12, 6, 2, '#3a2416'); R(11, 17, 2, 2, '#fff');
    R(3, 8, 3, 3, '#7a4a26'); R(18, 8, 3, 3, '#7a4a26');
    R(5, 3, 14, 5, hc); R(4, 7, 16, 1, hc); g.fillStyle = 'rgba(0,0,0,.18)'; g.fillRect(4, 7, 16, 1); R(11, 2, 2, 2, hc);
    if (!blink) { R(7, 10, 2, 2, '#1a100a'); R(15, 10, 2, 2, '#1a100a'); } else { R(7, 11, 2, 1, '#1a100a'); R(15, 11, 2, 1, '#1a100a'); }
    if (open) R(10, 19, 4, 2, '#5a2a1a');
    const k = col && col.kit;   // detalles de cada atuendo en el retrato
    if (k === 'gaucho') { R(4, 0, 16, 7, '#3f8fd0'); R(3, 7, 18, 1, '#3f8fd0'); R(3, 4, 18, 3, '#1e1e22'); R(5, 3, 13, 1, '#1e1e22'); R(13, 2, 2, 1, '#1e1e22'); R(3, 17, 18, 7, '#9b2226'); R(3, 21, 18, 1, '#f2e4c4'); R(3, 23, 18, 1, '#1c1c1e'); R(11, 17, 2, 2, '#fff'); }
    else if (k === 'chofer') { R(4, 0, 16, 8, '#3f8fd0'); R(5, 2, 14, 4, '#1f2f4f'); R(5, 5, 14, 1, '#2a9d8f'); R(4, 6, 16, 2, '#111'); R(11, 3, 2, 2, '#ffd23f'); R(9, 17, 6, 2, '#fff'); R(11, 19, 2, 5, '#1f2f4f'); }
    else if (k === 'solar') { R(6, 9, 4, 3, '#1a1a2e'); R(14, 9, 4, 3, '#1a1a2e'); R(10, 9, 4, 1, '#ff8a2a'); R(6, 2, 12, 1, '#1f3c88'); R(18, 18, 3, 3, '#ffc420'); }
    else if (k === 'eolico') { R(11, 0, 2, 3, '#f4f4f4'); R(8, 0, 8, 1, '#f4f4f4'); R(7, 18, 2, 6, '#ff7a1a'); R(15, 18, 2, 6, '#ff7a1a'); R(6, 7, 4, 1, '#2ed3c6'); R(14, 7, 4, 1, '#2ed3c6'); }
    else if (k === 'hidro') { R(6, 16, 12, 2, '#ff8a1a'); R(6, 19, 2, 2, '#5ad1ff'); R(15, 18, 2, 2, '#ff8a1a'); }
    else if (k === 'biomasa') { R(2, 7, 3, 4, '#d62828'); R(19, 7, 3, 4, '#d62828'); R(5, 2, 14, 1, '#2f3337'); R(17, 19, 3, 2, '#4c9a3f'); }
    else if (k === 'guardian') { R(0, 14, 4, 10, '#e6007e'); R(20, 14, 4, 10, '#e6007e'); R(6, 7, 12, 1, '#2ed3c6'); R(10, 19, 4, 3, '#ffd23f'); }
    else if (k === 'viajero') { R(4, 0, 16, 8, '#3f8fd0'); R(6, 1, 12, 5, '#ffffff'); R(6, 5, 12, 1, '#75aadb'); R(3, 6, 18, 2, '#ffffff'); R(11, 5, 2, 1, '#fcd116'); R(7, 19, 4, 3, '#1c1c1e'); R(8, 20, 2, 1, '#5a6070'); R(15, 17, 1, 7, '#2b2d33'); }
    else if (k === 'control') { R(3, 6, 2, 6, '#3a3f4a'); R(19, 6, 2, 6, '#3a3f4a'); R(5, 14, 4, 1, '#3a3f4a'); R(6, 9, 4, 3, 'rgba(207,234,255,.45)'); R(14, 9, 4, 3, 'rgba(207,234,255,.45)'); R(11, 20, 3, 4, '#f4f4f4'); }
    else if (k === 'clasico' || !k) R(16, 18, 2, 4, '#2b2d33');
    return;
  }
  if (who === 'corte') {   // la unidad generadora en corte: generador arriba, eje y turbina abajo, agua celeste
    R(0, 0, 24, 24, '#1c3d5a'); R(0, 15, 24, 9, '#3f9ad8'); R(4, 4, 16, 5, '#2f6f5f'); R(6, 5, 12, 3, '#b87333'); R(11, 9, 2, 6, '#b8bec6');
    R(6, 15, 12, 2, '#c8913a'); R(4, 17, 4, 1, '#c8913a'); R(16, 17, 4, 1, '#c8913a'); R(10, 17, 4, 3, '#c8913a'); R(1, 20, 4, 1, '#bfe9fb'); R(18, 21, 4, 1, '#bfe9fb');
    return;
  }
  if (who === 'placa') {   // placa de bronce con un jinete
    R(0, 0, 24, 24, '#3a3226'); R(2, 2, 20, 20, '#cfa24a'); R(3, 3, 18, 18, '#5b4a33'); const c = '#e3c06a';
    R(7, 12, 10, 4, c); R(7, 16, 1, 4, c); R(10, 16, 1, 4, c); R(14, 16, 1, 4, c); R(16, 16, 1, 4, c); R(16, 9, 2, 4, c); R(17, 8, 3, 2, c); R(6, 13, 1, 3, c); R(11, 7, 3, 5, c); R(11, 5, 3, 2, c); R(10, 5, 5, 1, c);
    return;
  }
  const P = {
    valeria: { bg: '#7b5ea7', skin: '#d9a17a', hair: '#3b2314', body: '#23395d', hat: '#f4f4f4' },
    mateo: { bg: '#6b8f4e', skin: '#c58b62', hair: '#555', body: '#a5522d', hat: '#1e1e22' },
    lucia: { bg: '#2a9d8f', skin: '#e0ac86', hair: '#1a1412', body: '#4aa3d8', hat: '#1f2f4f' },
    rosa: { bg: '#2f7d32', skin: '#d9a17a', hair: '#5a4636', body: '#f2a93b', hat: '#e9dcc0' },
    beto: { bg: '#2c6f95', skin: '#c58b62', hair: '#555', body: '#3f7d8c', hat: '#d4483b' },
    sofi: { bg: '#0d5c6b', skin: '#e0ac86', hair: '#1a1412', body: '#35c9d2', hat: '#35c9d2' },
    guia: { bg: '#6a2c91', skin: '#c58b62', hair: '#3b2314', body: '#e6007e', hat: '#e6007e' },
    mamavieja: { bg: '#e6007e', skin: '#6b4a33', hair: '#1a1412', body: '#f7f7f7', hat: '#f4f1ea' },
    marta: { bg: '#2f7fc1', skin: '#c58b62', hair: '#3b2a1e', body: '#2f7fc1', hat: '#ffffff' },
    papanoel: { bg: '#1f7a3a', skin: '#f1c9a5', hair: '#f4f4f4', body: '#d42a2a', hat: '#d42a2a' },
    payador: { bg: '#8a5a2b', skin: '#c58b62', hair: '#1a1412', body: '#f2efe8', hat: '#1c1c1e' },
    nico: { bg: '#3a1f6b', skin: '#e0ac86', hair: '#3b2a1e', body: '#ffc420', hat: '#3b2a1e' },
    graciela: { bg: '#4a8fc8', skin: '#f1c9a5', hair: '#6b4a2a', body: '#f8f8f8', hat: '#6b4a2a' },
    biologa: { bg: '#4a6b3a', skin: '#e0ac86', hair: '#3b2314', body: '#6b8f4e', hat: '#2f5a3a' },
    estanciero: { bg: '#8a5a2b', skin: '#c58b62', hair: '#9a9a9a', body: '#f2efe8', hat: '#1c1c1e' },
    jefa: { bg: '#7a2e1d', skin: '#d9a17a', hair: '#2a1c12', body: '#1d4f8a', hat: '#1d4f8a' }
  }[who] || { bg: '#23395d', skin: '#d9a17a', hair: '#2a1c12', body: '#4aa3d8', hat: '#4aa3d8' };
  R(0, 0, 24, 24, P.bg); R(3, 18, 18, 6, P.body); R(10, 16, 4, 3, P.skin);
  R(6, 6, 12, 11, P.skin); R(5, 7, 2, 8, P.hair); R(17, 7, 2, 8, P.hair);
  if (who === 'valeria') { R(5, 2, 14, 5, P.hat); R(4, 6, 16, 1, '#cfcfcf'); R(10, 18, 4, 6, '#f4f1ea'); }
  if (who === 'mateo') { R(4, 3, 16, 4, P.hat); R(3, 5, 6, 2, P.hat); R(8, 13, 8, 2, '#d8d8d8'); R(3, 19, 18, 1, '#e9dcc0'); }
  if (who === 'rosa' || who === 'beto') { R(5, 3, 14, 4, P.hat); if (who === 'beto') R(8, 13, 8, 2, '#666'); }
  if (who === 'lucia') { R(5, 2, 14, 5, P.hat); R(5, 6, 16, 1, P.hat); R(19, 8, 2, 9, P.hair); R(9, 19, 6, 1, '#fff'); }
  if (who === 'biologa') { R(5, 3, 14, 4, P.hat); R(12, 6, 8, 1, P.hat); R(19, 8, 2, 8, P.hair); }
  if (who === 'estanciero') { R(3, 3, 18, 4, P.hat); R(9, 2, 6, 1, P.hat); R(8, 13, 8, 2, '#d8d8d8'); }
  if (who === 'jefa') { R(5, 3, 14, 4, P.hat); R(4, 6, 16, 1, '#ffd23f'); R(11, 4, 2, 2, '#ffd23f'); }
  if (who === 'guia') { R(5, 3, 14, 4, '#ffc420'); R(12, 6, 8, 1, '#ffc420'); }
  if (who === 'mamavieja') { R(4, 2, 16, 6, P.hat); R(7, 4, 1, 1, '#e6007e'); R(12, 3, 1, 1, '#e6007e'); R(16, 5, 1, 1, '#e6007e'); R(5, 13, 1, 2, '#ffd23f'); R(18, 13, 1, 2, '#ffd23f'); }
  if (who === 'marta') { R(5, 3, 14, 4, P.hat); R(12, 6, 9, 1, P.hat); }
  if (who === 'payador') { R(3, 3, 18, 4, P.hat); R(9, 3, 6, 1, P.hat); R(8, 13, 8, 2, '#2a1c12'); R(9, 18, 6, 2, '#5aa9e6'); }
  if (who === 'graciela') { R(5, 4, 14, 3, P.hair); R(18, 7, 3, 10, P.hair); R(9, 18, 6, 2, '#75aadb'); R(7, 9, 4, 3, 'rgba(32,36,44,.55)'); R(13, 9, 4, 3, 'rgba(32,36,44,.55)'); }
  if (who === 'nico') { R(5, 3, 14, 4, P.hair); R(6, 9, 5, 4, '#20242c'); R(13, 9, 5, 4, '#20242c'); R(11, 10, 2, 1, '#20242c'); }
  if (who === 'papanoel') { R(5, 1, 14, 5, P.hat); R(18, 0, 4, 4, '#ffffff'); R(4, 6, 16, 2, '#ffffff'); R(6, 13, 12, 6, '#f4f4f4'); R(3, 21, 18, 1, '#ffffff'); }
  if (!blink) { R(8, 10, 2, 2, '#20242c'); R(14, 10, 2, 2, '#20242c'); } else { R(8, 11, 2, 1, '#20242c'); R(14, 11, 2, 1, '#20242c'); }
  if (open) R(10, 14, 4, 2, '#7a2f2f'); else R(10, 14, 4, 1, '#8a4a3a');
}

// Color del terreno para los mapas (minimapa y mapa grande)
export function mapColor(x, z) {
  const h = terrainH(x, z), wl = waterAt(x, z); let r, gg, b;
  if (h < wl - 0.15) { r = 40; gg = 120 + (wl > 1 ? 40 : 0); b = 200; }
  else if ((coastD(x, z) < 5 || (westD(x, z) > -2 && westD(x, z) < 5)) && h < 2.6) { r = 232; gg = 214; b = 164; }
  else { const t = clamp((h - 2) / 8, 0, 1); r = lerp(96, 150, t); gg = lerp(178, 205, t); b = lerp(72, 96, t); }
  if (x > -84 && x < 22 && z > 11 && z < 94.4 || x > -84 && x < -9 && z > -8 && z < 11) { r = 176; gg = 170; b = 160; }
  if (x > -12 && x < 48 && z > -106 && z < -58 && h > 5) { r = 205; gg = 198; b = 172; }
  if (westD(x, z) > 9 && h >= wl - 0.15 && x < -166 && z > -84) { r = lerp(r, 196, 0.35); gg = lerp(gg, 186, 0.35); b = lerp(b, 170, 0.35); }
  return [r, gg, b];
}

export class UI {
  constructor(game) {
    this.g = game; this.t = 0; this.acc = 0; this.dlg = null; this.toastT = 0; this.noteT = 0; this.zoneId = ''; this.zoneT = 0;
    this.gc = $('gauge').getContext('2d'); this.pc = $('phase').getContext('2d'); this.mc = $('mini').getContext('2d'); this.fc = $('capiFace').getContext('2d'); this.dc = $('dFace').getContext('2d'); this.sc = $('pCv').getContext('2d');
    this.buildMap(); this.keysT = 0; this.cardT = 0;
    const card = $('card');
    card.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { this.cardHover = true; this.cardWake(); } });
    card.addEventListener('pointerleave', () => { this.cardHover = false; });
    card.addEventListener('pointerdown', () => this.cardWake());
    $('dialog').addEventListener('click', () => this.advance());
    $('bPanel').onclick = () => game.togglePanel(); $('pClose').onclick = () => game.togglePanel(false);
    $('bHelp').onclick = () => game.toggleHelp(true); $('hClose').onclick = () => game.toggleHelp(false);
    $('bMute').onclick = () => game.toggleMute(); $('hTitle').onclick = () => game.toTitle();
    $('prompt').addEventListener('click', () => { if (game.cand && !game.locked) game.interact(game.cand.id); });
    $('cJump').addEventListener('pointerdown', () => { game.jump = true; });
    document.addEventListener('click', e => { const b = e.target.closest && e.target.closest('button'); if (b) b.blur(); });
    $('batMode').querySelectorAll('button').forEach(b => b.onclick = () => { if (!game.grid.bat.connected) return; game.grid.bat.mode = b.dataset.m; game.audio.click(); game.missions.event('batmode'); this.panelDom(); });
    const sl = (id, fn) => { $(id).oninput = e => { fn(+e.target.value); this.sandboxOut(); }; };
    sl('sWind', v => { game.grid.windTarget = v / 100; }); sl('sCloud', v => { game.grid.cloudTarget = v / 100; });
    sl('sHour', v => { game.grid.hour = v / 4; }); sl('sDem', v => { game.grid.demandMul = v / 100; });
    sl('sRate', v => { game.grid.clockRate = [0, 1 / 20, 1 / 8, 1 / 3, 1][v]; });
    $('sFault').onclick = () => { game.missions.randomFault(true); game.audio.click(); };
    $('pCv').addEventListener('click', e => { const r = e.target.getBoundingClientRect(), x = (e.clientX - r.left) / r.width * 760, y = (e.clientY - r.top) / r.height * 440; for (const n of this.nodes || []) if (Math.hypot(x - n.x, y - n.y) < 46 && n.zone) { game.inspect(n.zone); } });
  }

  // Mapa pre-renderizado para el minimapa
  buildMap() {
    const S = 256, c = document.createElement('canvas'); c.width = c.height = S; const g = c.getContext('2d'), img = g.createImageData(S, S), d = img.data;
    const W = B.maxX - B.minX, D = B.maxZ - B.minZ;
    for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) { const k = (j * S + i) * 4, c = mapColor(B.minX + (i + 0.5) / S * W, B.minZ + (j + 0.5) / S * D); d[k] = c[0]; d[k + 1] = c[1]; d[k + 2] = c[2]; d[k + 3] = 255; }
    g.putImageData(img, 0, 0);
    const X = x => (x - B.minX) / W * S, Z = z => (z - B.minZ) / D * S;
    g.strokeStyle = 'rgba(70,70,80,.9)'; g.lineWidth = 1.6;
    for (const l of this.g.world.roads) { g.beginPath(); l.forEach((p, i) => i ? g.lineTo(X(p[0]), Z(p[1])) : g.moveTo(X(p[0]), Z(p[1]))); g.stroke(); }
    const Dm = POS.dam, Mu = POS.muelle, O = POS.orilla;
    g.fillStyle = '#9a948a'; g.fillRect(X(Dm.x0), Z(Dm.z0), X(Dm.x1) - X(Dm.x0), Math.max(4, Z(Dm.z1) - Z(Dm.z0))); g.fillRect(X(POS.bridge.x - 2), Z(POS.bridge.z0), 4, Z(POS.bridge.z1) - Z(POS.bridge.z0));
    g.fillRect(X(-96), Z(38), X(-83.4) - X(-96), Z(60) - Z(38));
    g.fillRect(X(Mu.x1), Z(Mu.z - 1.7), X(Mu.x0) - X(Mu.x1), 3); g.fillRect(X(O.x1), Z(O.z - 1.7), X(O.x0) - X(O.x1), 3); g.fillRect(X(-88), Z(POS.faro[1] - 1.3), X(-88) - X(POS.faro[0]) > 0 ? X(-88) - X(POS.faro[0]) : 1, 2);
    for (const z of [69, 77.6]) g.fillRect(X(-104), Z(z - 1.2), X(-84) - X(-104), 2);
    { const E = POS.edificio; g.fillStyle = '#b9b2a6'; g.fillRect(X(-74), Z(-75), X(-58) - X(-74), Z(-64) - Z(-75)); g.fillStyle = '#8b2f2a'; g.fillRect(X(E.x0), Z(E.z0), X(E.x1) - X(E.x0), Z(E.z1) - Z(E.z0)); g.fillStyle = '#2d2d33'; g.beginPath(); g.arc(X(POS.domo[0]), Z(POS.domo[1]), 3.3 / W * S, 0, 7); g.fill(); }
    g.fillStyle = '#1f3f9a'; for (const [x, z] of POS.solar) g.fillRect(X(x - 6), Z(z - 5.5), 13, 12);
    g.fillStyle = '#fff'; for (const [x, z] of POS.windT) { g.beginPath(); g.arc(X(x), Z(z), 2.2, 0, 7); g.fill(); }
    this.map = c; this.mapScale = S / W;
  }

  show() { $('hud').classList.remove('hidden'); }
  // HUD liviano: la barra de teclas se va sola después de un rato de juego (vuelve al cerrar la Ayuda) y la tarjeta de misión
  // se achica a lo esencial (título y paso actual) cuando no hay novedades; se agranda sola con cada cambio o al tocarla
  keysFor(t) { this.keysT = t; document.body.classList.remove('keysOff'); }
  cardWake(t = 9) { this.cardT = t; $('card').classList.remove('quiet'); }
  hudLite(dt) {
    const g = this.g, busy = this.dlg || (g.tut && g.tut.on) || g.cine;
    if (this.keysT > 0 && !busy) { this.keysT -= dt; if (this.keysT <= 0) document.body.classList.add('keysOff'); }
    this.sigT = (this.sigT || 0) - dt;
    if (this.sigT <= 0) { this.sigT = 0.25; const sig = this._mk + '|' + $('sparkCount').textContent + '|' + $('favLine').textContent + '|' + $('mSub').textContent; if (sig !== this._sig) { this._sig = sig; this.cardWake(); } }
    if (this.cardT > 0 && !busy && !this.cardHover) { this.cardT -= dt; if (this.cardT <= 0) $('card').classList.add('quiet'); }
  }
  hide() { $('hud').classList.add('hidden'); this.prompt(null); this.timer(null); $('toast').classList.remove('on'); $('note').classList.remove('on'); }
  toast(title, sub = '', t = 3.2) { const el = $('toast'); el.querySelector('h2').textContent = title; el.querySelector('p').textContent = sub; el.classList.add('on'); this.toastT = t; }
  note(text, t = 3.5) { const el = $('note'); el.textContent = text; el.classList.add('on'); this.noteT = t; }
  prompt(text) { const el = $('prompt'); if (!text) { el.classList.add('hidden'); return; } el.classList.remove('hidden'); if (this._p !== text) { el.innerHTML = '<kbd>E</kbd> ' + text; this._p = text; } }
  timer(text, warn) { const el = $('timer'); if (!text) { el.classList.add('hidden'); return; } el.classList.remove('hidden'); el.textContent = text; el.classList.toggle('warn', !!warn); }
  mission(title, sub, items) {
    $('mTitle').textContent = title; $('mSub').textContent = sub;
    const key = items.map(i => i.text + i.state).join('|'); if (key === this._mk) return; this._mk = key;
    const ul = $('mList'); ul.textContent = '';
    for (const it of items) { const li = document.createElement('li'); li.className = it.state; li.textContent = it.text; ul.appendChild(li); }
  }

  // ---- Diálogos ----
  dialog(lines, done) { if (this.g.panel) this.g.togglePanel(false); if (this.g.help) this.g.toggleHelp(false); this.dlg = { lines, i: 0, n: 0, done, acc: 0 }; $('dialog').classList.remove('hidden'); $('dName').textContent = NAMES[lines[0].who]; $('dText').textContent = ''; this.g.audio.click(); }
  get talking() { return this.dlg ? this.dlg.lines[this.dlg.i].who : null; }
  advance() {
    const d = this.dlg; if (!d) return;
    const full = d.lines[d.i].text;
    if (d.n < full.length) { d.n = full.length; $('dText').textContent = full; return; }
    d.i++; d.n = 0; this.g.audio.click();
    if (d.i >= d.lines.length) { this.dlg = null; $('dialog').classList.add('hidden'); if (d.done) d.done(); return; }
    $('dName').textContent = NAMES[d.lines[d.i].who]; $('dText').textContent = '';
  }

  update(dt, st) {
    this.t += dt; const G = this.g.grid, o = G.out; this.hudLite(dt);
    if (this.toastT > 0) { this.toastT -= dt; if (this.toastT <= 0) $('toast').classList.remove('on'); }
    if (this.noteT > 0) { this.noteT -= dt; if (this.noteT <= 0) $('note').classList.remove('on'); }
    const d = this.dlg;
    if (d) {
      const full = d.lines[d.i].text; d.acc += dt * 48;
      if (d.n < full.length && d.acc >= 1) { const add = Math.floor(d.acc); d.acc -= add; const before = d.n; d.n = Math.min(full.length, d.n + add); $('dText').textContent = full.slice(0, d.n); if (Math.floor(before / 3) !== Math.floor(d.n / 3)) this.g.audio.blip({ capi: 3, valeria: 6, mateo: 0, lucia: 8 }[d.lines[d.i].who]); }
      drawFace(this.dc, d.lines[d.i].who, this.t, d.n < full.length, this.g.extras ? this.g.extras.colors() : null);
    }
    this.acc += dt; if (this.acc < 0.09) { this.drawMini(st); return; } this.acc = 0;
    // Telemetría
    const max = 270, ren = Math.max(0, o.gen - o.fossil);
    $('bGen').style.width = (ren / max * 100) + '%'; $('bFos').style.width = (o.fossil / max * 100) + '%'; $('bDem').style.width = (o.demand / max * 100) + '%';
    $('vGen').textContent = Math.round(o.gen) + ' MW'; $('vDem').textContent = Math.round(o.demand) + ' MW';
    $('bBat').style.width = (G.bat.connected ? G.bat.soc * 100 : 0) + '%';
    $('vBat').textContent = G.bat.connected ? Math.round(G.bat.soc * 100) + '%' + (o.bat > 0.5 ? ' ▼' : o.bat < -0.5 ? ' ▲' : '') : 'sin conectar';
    $('vClock').textContent = fmtHour(G.hour);
    const hz = $('vHz'); hz.textContent = G.freq.toFixed(1).replace('.', ',') + ' Hz'; hz.classList.toggle('low', G.freq < 49.85);
    this.drawGauge(o.pct); this.drawPhase(G.hour); drawFace(this.fc, 'capi', this.t, st.capiTalk, st.colors);
    if (!this.ffc) { const fc = document.getElementById('fadeFace'); this.ffc = fc ? fc.getContext('2d') : null; this.fadeEl = document.getElementById('fade'); }
    if (this.ffc && this.fadeEl.classList.contains('on')) drawFace(this.ffc, 'capi', this.t, false, st.colors);   // la cara de Capi en el iris de las transiciones
    this.drawMini(st);
    // Cartel de sector
    let z = null; for (const q of ZONES) if (q.rect ? (st.capi.x > q.rect[0] && st.capi.x < q.rect[1] && st.capi.z > q.rect[2] && st.capi.z < q.rect[3]) : Math.hypot(st.capi.x - q.x, st.capi.z - q.z) < (q.id === 'ciudad' ? 46 : 34)) z = q;
    if (z && z.id !== this.zoneId) { this.zoneId = z.id; $('zone').textContent = z.name; this.zoneT = 5; } else if (!z) { this.zoneId = ''; this.zoneT = Math.min(this.zoneT, 0.6); }
    if (this.zoneT > 0) { this.zoneT -= dt * 1.6; $('zone').style.opacity = clamp(this.zoneT, 0, 1); }
    if (st.panel) { this.drawPanel(); if ((this._pd = (this._pd || 0) + 1) % 4 === 0) this.panelDom(); }
  }

  drawGauge(pct) {
    const g = this.gc, S = 184, c = S / 2, r = 70;
    g.clearRect(0, 0, S, S);
    g.lineWidth = 18; g.lineCap = 'round'; g.strokeStyle = '#07142b'; g.beginPath(); g.arc(c, c, r, 0, 7); g.stroke();
    const t = clamp(pct / 100, 0, 1), col = pct >= 100 ? '#2fe38a' : `rgb(${Math.round(lerp(255, 120, t * t))},${Math.round(lerp(150, 215, t))},${Math.round(lerp(40, 90, t))})`;
    g.strokeStyle = col; g.beginPath(); g.arc(c, c, r, -Math.PI / 2, -Math.PI / 2 + Math.max(0.02, t) * Math.PI * 2); g.stroke();
    g.fillStyle = '#fff7e6'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = (pct >= 99.5 ? 46 : 56) + 'px "Lilita One","Arial Black",sans-serif'; g.fillText(Math.round(pct) + '%', c, c - 6);
    g.font = '800 21px Nunito,sans-serif'; const lw = g.measureText('RENOVABLE').width; if (lw > 104) g.font = `800 ${Math.floor(21 * 104 / lw)}px Nunito,sans-serif`;   // que entre dentro del anillo
    g.fillStyle = col; g.fillText('RENOVABLE', c, c + 31);
  }
  drawPhase(h) {
    const g = this.pc; g.clearRect(0, 0, 68, 68); const day = h > 6 && h < 19;
    g.fillStyle = day ? (h < 7.5 ? '#ff9fb0' : h > 17.5 ? '#ff9a4a' : '#ffd23f') : '#dfe8ff'; g.beginPath(); g.arc(34, 34, 17, 0, 7); g.fill();
    if (day) { g.strokeStyle = g.fillStyle; g.lineWidth = 4; g.lineCap = 'round'; for (let k = 0; k < 8; k++) { const a = k * Math.PI / 4 + this.t * 0.4; g.beginPath(); g.moveTo(34 + Math.cos(a) * 23, 34 + Math.sin(a) * 23); g.lineTo(34 + Math.cos(a) * 30, 34 + Math.sin(a) * 30); g.stroke(); } }
    else { g.fillStyle = '#0f2140'; g.beginPath(); g.arc(42, 28, 14, 0, 7); g.fill(); }
  }

  drawMini(st) {
    const g = this.mc, S = 352, c = S / 2, R = 80, k = c / R, yaw = st.yaw, W = B.maxX - B.minX;
    g.save(); g.clearRect(0, 0, S, S); g.beginPath(); g.arc(c, c, c, 0, 7); g.clip();
    g.fillStyle = '#0b1830'; g.fillRect(0, 0, S, S);
    g.translate(c, c); g.rotate(yaw); g.scale(k, k); g.translate(-st.capi.x, -st.capi.z);
    g.imageSmoothingEnabled = false; g.drawImage(this.map, B.minX, B.minZ, W, B.maxZ - B.minZ);
    g.restore();
    const P = (x, z) => { const dx = x - st.capi.x, dz = z - st.capi.z, cs = Math.cos(yaw), sn = Math.sin(yaw); return [(dx * cs - dz * sn) * k, (dx * sn + dz * cs) * k]; };
    const mark = (x, z, col, r, ring) => {
      let [px, py] = P(x, z); const d = Math.hypot(px, py), lim = c - 16; const out = d > lim; if (out) { px *= lim / d; py *= lim / d; }
      g.beginPath(); g.arc(c + px, c + py, r, 0, 7); g.fillStyle = col; g.fill(); g.lineWidth = 3; g.strokeStyle = '#0f2140'; g.stroke();
      if (ring) { g.beginPath(); g.arc(c + px, c + py, r + 6 + (this.t * 14 % 12), 0, 7); g.strokeStyle = col; g.globalAlpha = 1 - (this.t * 14 % 12) / 12; g.stroke(); g.globalAlpha = 1; }
    };
    for (const z of ZONES) if (!z.area) mark(z.x, z.z, z.color, 8, false);
    // paradas de ómnibus (si la flota ya anda) y chispas cercanas todavía sin juntar
    if (st.buses) for (const s of POS.stops) { const [px, py] = P(s[0], s[1]); if (Math.hypot(px, py) < c - 12) { g.fillStyle = '#35b3e8'; g.strokeStyle = '#0f2140'; g.lineWidth = 2; g.fillRect(c + px - 6, c + py - 6, 12, 12); g.strokeRect(c + px - 6, c + py - 6, 12, 12); } }
    for (const s of st.sparks || []) { if (Math.hypot(s.x - st.capi.x, s.z - st.capi.z) > 42) continue; const [px, py] = P(s.x, s.z); g.save(); g.translate(c + px, c + py); g.rotate(Math.PI / 4 + this.t * 2); g.fillStyle = '#ffe066'; g.strokeStyle = '#0f2140'; g.lineWidth = 2; g.fillRect(-6, -6, 12, 12); g.strokeRect(-6, -6, 12, 12); g.restore(); }
    for (const it of st.inter) { if (it.state === 'need' && !it.target) mark(it.x, it.z, '#ff4d4d', 6, false); }
    for (const it of st.inter) if (it.target) mark(it.x, it.z, '#ffd23f', 9, true);
    const fm = this.g.fiestas && this.g.fiestas.mark(); if (fm) mark(fm.x, fm.z, '#e6007e', 8, true);   // las llamadas, en el minimapa
    // Capi y norte
    g.save(); g.translate(c, c); g.rotate(Math.PI - st.heading + yaw); g.fillStyle = '#fff7e6'; g.strokeStyle = '#0f2140'; g.lineWidth = 4; g.beginPath(); g.moveTo(0, -17); g.lineTo(11, 12); g.lineTo(0, 5); g.lineTo(-11, 12); g.closePath(); g.stroke(); g.fill(); g.restore();
    const nx = c + Math.sin(yaw) * -(c - 20) * -1, ny = c - Math.cos(yaw) * (c - 20);
    g.fillStyle = '#0f2140'; g.beginPath(); g.arc(nx, ny, 15, 0, 7); g.fill(); g.fillStyle = '#ffc93c'; g.font = '22px "Lilita One","Arial Black",sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('N', nx, ny + 1);
  }

  // ---- Panel de red (Tab) ----
  sandboxOut() { const G = this.g.grid; $('oWind').textContent = Math.round(G.windTarget * 100) + '%'; $('oCloud').textContent = Math.round(G.cloudTarget * 100) + '%'; $('oHour').textContent = fmtHour(G.hour); $('oDem').textContent = Math.round(G.demandMul * 100) + '%'; $('oRate').textContent = ['pausa', '×1', '×2.5', '×7', '×20'][+$('sRate').value]; }
  openPanel(free) { $('panel').classList.remove('hidden'); $('sandbox').classList.toggle('hidden', !free); if (free) { const G = this.g.grid; $('sWind').value = Math.round(G.windTarget * 100); $('sCloud').value = Math.round(G.cloudTarget * 100); $('sHour').value = Math.round(G.hour * 4); this.sandboxOut(); } this.panelDom(); this.drawPanel(); }
  closePanel() { $('panel').classList.add('hidden'); }
  panelDom() {
    const G = this.g.grid, o = G.out;
    $('batMode').querySelectorAll('button').forEach(b => { b.classList.toggle('on', G.bat.connected && G.bat.mode === b.dataset.m); b.disabled = !G.bat.connected; });
    $('batInfo').textContent = !G.bat.connected ? 'El banco todavía no está conectado a la red. Se habilita en el Parque Solar.' : `Carga ${Math.round(G.bat.soc * 100)}% (${Math.round(G.bat.soc * CAP.batE)} MWh). ` + (o.bat > 0.5 ? `Descargando ${Math.round(o.bat)} MW hacia la ciudad.` : o.bat < -0.5 ? `Cargando ${Math.round(-o.bat)} MW con excedentes.` : G.bat.mode === 'hold' ? 'En reserva: no entrega energía aunque falte.' : 'En espera.');
    const cnt = (arr) => arr.filter(u => u.on && !u.fault).length, bad = (arr) => arr.some(u => u.fault);
    const rows = [
      ['hidro', 'Central Hidroeléctrica', o.hydro, `${cnt(G.hydro.t)}/4 turbinas · salto ${Math.round(G.head() * 100)}%`, bad(G.hydro.t) ? 'bad' : cnt(G.hydro.t) ? 'ok' : 'off'],
      ['eolica', 'Parque Eólico', o.wind, `${cnt(G.windP.t)}/5 molinos · viento ${Math.round(G.wind * 100)}%`, bad(G.windP.t) || G.windP.txFault ? 'bad' : G.windP.tx ? 'ok' : 'off'],
      ['solar', 'Parque Solar', o.solar, `${cnt(G.solar.a)}/4 matrices · sol ${Math.round(G.sun() * (1 - 0.65 * G.cloud) * 100)}%`, bad(G.solar.a) ? 'bad' : cnt(G.solar.a) ? 'ok' : 'off'],
      ['biomasa', 'Planta de Biomasa', o.bio, `caldera ${Math.round(G.bio.pressure * 100)}%`, G.bio.fault ? 'bad' : G.bio.on ? 'ok' : 'off']
    ];
    const key = rows.map(r => Math.round(r[2]) + r[3] + r[4]).join('|'); if (key === this._pk) return; this._pk = key;
    const box = $('plantList'); box.textContent = '';
    for (const r of rows) {
      const div = document.createElement('div'); div.className = 'plant';
      const lab = { ok: 'en línea', bad: 'falla', off: 'fuera de servicio' }[r[4]];
      div.innerHTML = `<div>${r[1]}<span class="pill ${r[4]}">${lab}</span><em>${r[3]}</em></div><b>${Math.round(r[2])} MW</b>`;
      const b = document.createElement('button'); b.type = 'button'; b.textContent = 'Ver'; b.onclick = () => this.g.inspect(r[0]); div.appendChild(b); box.appendChild(div);
    }
  }
  drawPanel() {
    const g = this.sc, W = 760, H = 440, G = this.g.grid, o = G.out, t = this.t;
    g.clearRect(0, 0, W, H);
    g.strokeStyle = '#102a52'; g.lineWidth = 1; for (let x = 0; x < W; x += 40) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); } for (let y = 0; y < H; y += 40) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
    const city = { x: 380, y: 232 };
    const N = this.nodes = [
      // ubicados como en la maqueta: la represa al noroeste, el sol y las baterías al norte, el viento y la biomasa al este
      { zone: 'hidro', x: 140, y: 92, name: 'HIDRO', mw: o.hydro, cap: 144, col: '#4cc9f0' },
      { zone: 'eolica', x: 652, y: 182, name: 'EÓLICA', mw: o.wind, cap: 40, col: '#e8f1f2' },
      { zone: 'biomasa', x: 630, y: 352, name: 'BIOMASA', mw: o.bio, cap: 40, col: '#90be6d' },
      { zone: 'solar', x: 380, y: 66, name: 'SOLAR', mw: o.solar, cap: 48, col: '#ffb703' },
      { zone: 'solar', x: 545, y: 72, name: 'BATERÍAS', mw: o.bat, cap: 50, col: '#5ad1ff', bat: true },
      { zone: null, x: 210, y: 386, name: 'RESPALDO FÓSIL', mw: o.fossil, cap: 140, col: '#b08a7a' }
    ];
    if (G.h2.on) N.push({ zone: 'hidrogeno', x: 120, y: 236, name: 'HIDRÓGENO', mw: -o.h2, cap: 14, col: '#57e389', h2: true });
    for (const n of N) {
      const act = Math.abs(n.mw) > 0.5, lv = clamp(Math.abs(n.mw) / n.cap, 0, 1);
      g.strokeStyle = act ? n.col : '#27406b'; g.lineWidth = act ? 3 + lv * 5 : 3; g.setLineDash(act ? [10, 9] : []); g.lineDashOffset = (n.mw < 0 ? 1 : -1) * t * (20 + lv * 90);
      g.beginPath(); g.moveTo(n.x, n.y); g.lineTo(city.x, city.y); g.stroke(); g.setLineDash([]);
    }
    const node = (x, y, r, col, name, val, sub) => {
      g.fillStyle = '#0f2140'; g.strokeStyle = col; g.lineWidth = 5; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); g.stroke();
      g.fillStyle = col; g.font = '15px "Lilita One","Arial Black",sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(name, x, r > 50 ? y + r + 15 : y - r - 12);
      g.fillStyle = '#fff7e6'; g.font = '900 19px Nunito,sans-serif'; g.fillText(val, x, y - (sub ? 6 : 0));
      if (sub) { g.font = '800 12px Nunito,sans-serif'; g.fillStyle = '#a9bbd6'; g.fillText(sub, x, y + 13); }
    };
    for (const n of N) node(n.x, n.y, 42, n.col, n.name, (n.bat && !G.bat.connected) ? '—' : Math.round(n.h2 ? -n.mw : n.mw) + ' MW', n.bat ? (G.bat.connected ? Math.round(G.bat.soc * 100) + '% carga' : 'sin conectar') : n.h2 ? Math.round(G.h2.kg) + ' kg' : Math.round(clamp(Math.abs(n.mw) / n.cap, 0, 1) * 100) + '%');
    const ok = o.pct >= 100;
    node(city.x, city.y, 62, ok ? '#57e389' : '#ffc93c', 'CIUDAD · DEMANDA', Math.round(o.demand) + ' MW', G.freq.toFixed(1).replace('.', ',') + ' Hz · ' + Math.round(o.pct) + ' %');
    if (G.ev.on) { g.textAlign = 'center'; g.font = '800 12px Nunito,sans-serif'; g.fillStyle = '#a9bbd6'; g.fillText(`incluye autos eléctricos: ${Math.round(o.ev)} MW`, city.x, city.y + 92); }
    g.textAlign = 'left'; g.font = '800 13px Nunito,sans-serif'; g.fillStyle = '#a9bbd6';
    g.fillText('G total = hidro + eólica + solar + biomasa + baterías = ' + Math.round(o.ren + Math.max(0, o.bat)) + ' MW', 16, H - 16);
    g.textAlign = 'right'; g.fillStyle = ok ? '#57e389' : '#ff6b4a'; g.fillText(ok ? 'EQUILIBRIO ÓPTIMO' : 'DÉFICIT RENOVABLE: ' + Math.round(o.fossil + o.unmet) + ' MW', W - 16, H - 16);
  }
}
