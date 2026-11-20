// Modo escuela: se elige una energía en la portada, se juega solo esa misión y al final hay medalla, atuendo y certificado.
// Las medallas quedan guardadas en esta computadora (se pueden borrar desde el mismo menú).
import { SEQ } from './missions.js';
import { OUTFITS } from './extras.js';

const $ = id => document.getElementById(id);
const KEY = 'capi-escuela';

export const ESCUELA = [
  { key: 'viento', name: 'Energía eólica', icon: 'viento', color: '#3aa6c9', min: 3, outfit: 1,
    sub: 'Destrabar los molinos del parque eólico',
    learn: ['El viento hace girar las palas, y un generador convierte ese giro en electricidad.', 'El viento es variable: cuando afloja, otras fuentes tienen que cubrir.', 'El transformador del parque sube la tensión para mandar la energía lejos con menos pérdidas.'] },
  { key: 'rio', name: 'Energía hidráulica', icon: 'rio', color: '#2f6fe4', min: 3, outfit: 2,
    sub: 'Regular las compuertas y poner en línea una turbina',
    learn: ['El agua del embalse baja con fuerza, mueve las turbinas y estas hacen girar los generadores.', 'Si se abren compuertas de más, se tira agua sin generar energía.', 'El agua es energía de base, firme y regulable, y se complementa con el viento.'] },
  { key: 'sol', name: 'Energía solar y baterías', icon: 'sol', color: '#f2a71b', min: 4, outfit: 3,
    sub: 'Limpiar los paneles y cargar las baterías antes del atardecer',
    learn: ['Los paneles solares transforman la luz del sol en electricidad.', 'Un panel con seguidor gira para mirar al sol y produce más que uno fijo.', 'Las baterías guardan la energía del mediodía para usarla de noche.'] },
  { key: 'urbano', name: 'Biomasa y transporte eléctrico', icon: 'urbano', color: '#4f9a3f', min: 4, outfit: 4,
    sub: 'Encender la caldera y cargar los ómnibus eléctricos',
    learn: ['La biomasa usa restos de madera para generar energía firme, aunque no haya viento ni sol.', 'En la caldera, el calor hace vapor, y el vapor mueve una turbina.', 'Los ómnibus eléctricos se cargan con energía renovable y no echan humo.'] },
  { key: 'ahorro', name: 'Ahorro y eficiencia', icon: 'ahorro', color: '#e6b800', min: 3, outfit: null,
    sub: 'Cambiar lamparitas por LED y cargar los ómnibus con sol',
    learn: ['Una lamparita LED da la misma luz gastando mucha menos energía.', 'Cargar los ómnibus al mediodía aprovecha el sol que sobra.', 'La energía más limpia es la que no hace falta generar.'] },
  { key: 'tormenta', name: 'Clima y matriz diversificada', icon: 'tormenta', color: '#6a7fa8', min: 4, outfit: null,
    sub: 'Sostener la red en plena sudestada',
    learn: ['Con ráfagas muy fuertes, un molino se frena solo para protegerse.', 'Las baterías sostienen la red mientras se reparan las fallas.', 'Con varias fuentes distintas, si una se cae, las otras la sostienen.'] },
  { key: 'pico', name: 'La red completa', icon: 'pico', color: '#e6007e', min: 5, outfit: 5,
    sub: 'Pasar la hora pico nocturna 100 % renovable',
    learn: ['La hora pico es cuando la ciudad pide más energía: a la noche y sin sol.', 'Hay que arreglar cada falla rápido y usar bien las baterías.', 'En 2025, el 98 % de la electricidad generada en Uruguay fue renovable.'] }
];
const BY = Object.fromEntries(ESCUELA.map(e => [e.key, e]));

// Íconos de cada energía (se usan en las tarjetas y en la medalla)
export function drawIcon(g, k, cx, cy, r, col = '#ffffff') {
  g.save(); g.fillStyle = col; g.strokeStyle = col; g.lineCap = 'round'; g.lineJoin = 'round';
  const s = r / 70;
  if (k === 'sol') { g.beginPath(); g.arc(cx, cy, 30 * s, 0, 7); g.fill(); g.lineWidth = 9 * s; for (let i = 0; i < 10; i++) { const a = i * Math.PI / 5; g.beginPath(); g.moveTo(cx + Math.cos(a) * 42 * s, cy + Math.sin(a) * 42 * s); g.lineTo(cx + Math.cos(a) * 60 * s, cy + Math.sin(a) * 60 * s); g.stroke(); } }
  if (k === 'viento') { g.lineWidth = 8 * s; g.beginPath(); g.moveTo(cx, cy - 8 * s); g.lineTo(cx, cy + 62 * s); g.stroke(); g.lineWidth = 13 * s; for (let i = 0; i < 3; i++) { const a = -Math.PI / 2 + i * 2.094; g.beginPath(); g.moveTo(cx, cy - 8 * s); g.lineTo(cx + Math.cos(a) * 56 * s, cy - 8 * s + Math.sin(a) * 56 * s); g.stroke(); } g.beginPath(); g.arc(cx, cy - 8 * s, 9 * s, 0, 7); g.fill(); }
  if (k === 'rio') { g.beginPath(); g.moveTo(cx, cy - 62 * s); g.quadraticCurveTo(cx + 56 * s, cy + 6 * s, cx, cy + 56 * s); g.quadraticCurveTo(cx - 56 * s, cy + 6 * s, cx, cy - 62 * s); g.fill(); }
  if (k === 'urbano') { g.translate(cx, cy); g.rotate(0.7); g.beginPath(); g.ellipse(0, 0, 32 * s, 60 * s, 0, 0, 7); g.fill(); g.globalCompositeOperation = 'destination-out'; g.lineWidth = 6 * s; g.beginPath(); g.moveTo(0, 56 * s); g.lineTo(0, -50 * s); g.stroke(); }
  if (k === 'ahorro') { g.beginPath(); g.arc(cx, cy - 14 * s, 34 * s, Math.PI * 0.8, Math.PI * 2.2); g.lineTo(cx + 15 * s, cy + 30 * s); g.lineTo(cx - 15 * s, cy + 30 * s); g.closePath(); g.fill(); g.fillRect(cx - 15 * s, cy + 36 * s, 30 * s, 7 * s); g.fillRect(cx - 12 * s, cy + 47 * s, 24 * s, 7 * s); g.lineWidth = 6 * s; for (const a of [-2.6, -1.57, -0.55]) { g.beginPath(); g.moveTo(cx + Math.cos(a) * 46 * s, cy - 14 * s + Math.sin(a) * 46 * s); g.lineTo(cx + Math.cos(a) * 60 * s, cy - 14 * s + Math.sin(a) * 60 * s); g.stroke(); } }
  if (k === 'tormenta') { for (const [x, y, rr] of [[-22, -10, 24], [6, -22, 30], [30, -6, 22]]) { g.beginPath(); g.arc(cx + x * s, cy + y * s, rr * s, 0, 7); g.fill(); } g.fillRect(cx - 44 * s, cy - 8 * s, 92 * s, 22 * s); g.beginPath(); g.moveTo(cx + 6 * s, cy + 18 * s); g.lineTo(cx - 12 * s, cy + 46 * s); g.lineTo(cx + 2 * s, cy + 46 * s); g.lineTo(cx - 8 * s, cy + 70 * s); g.lineTo(cx + 22 * s, cy + 36 * s); g.lineTo(cx + 8 * s, cy + 36 * s); g.lineTo(cx + 18 * s, cy + 18 * s); g.closePath(); g.fill(); }
  if (k === 'pico') { g.beginPath(); g.moveTo(cx + 12 * s, cy - 64 * s); g.lineTo(cx - 34 * s, cy + 8 * s); g.lineTo(cx - 2 * s, cy + 8 * s); g.lineTo(cx - 14 * s, cy + 64 * s); g.lineTo(cx + 34 * s, cy - 10 * s); g.lineTo(cx + 2 * s, cy - 10 * s); g.closePath(); g.fill(); }
  g.restore();
}
// ---------- Medallas "premium": metal dorado con canto estriado, esmalte, letras en oro e isotipo de Energimundo dorado ----------
const SHORT = { viento: 'EÓLICA', rio: 'HIDRÁULICA', sol: 'SOLAR', urbano: 'BIOMASA', ahorro: 'EFICIENCIA', tormenta: 'CLIMA', pico: 'RED COMPLETA' };
const METAL = {
  gold: ['#fff4c8', '#f3c94c', '#b8841a', '#f8d870', '#8a5a0c'],
  silver: ['#ffffff', '#cfd6df', '#8a95a3', '#e6ebf1', '#5d6774']
};
function metal(g, x0, y0, x1, y1, kind = 'gold') { const gr = g.createLinearGradient(x0, y0, x1, y1), c = METAL[kind]; [0, 0.24, 0.52, 0.74, 1].forEach((t, i) => gr.addColorStop(t, c[i])); return gr; }
const disc = (g, x, y, r) => { g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); };
let isoGold = null;
// Isotipo de Energimundo pasado a oro: conserva los tonos del original como relieve (claro y oscuro del metal)
function goldIso() {
  if (isoGold !== null) return isoGold;
  const im = $('logoIso'); if (!im || !im.naturalWidth) return null;
  try {
    const S = 256, c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d'), k = Math.min(236 / im.naturalWidth, 236 / im.naturalHeight), w = im.naturalWidth * k, h = im.naturalHeight * k;
    x.drawImage(im, (S - w) / 2, (S - h) / 2, w, h); const d = x.getImageData(0, 0, S, S), p = d.data;
    for (let i = 0; i < p.length; i += 4) {
      if (!p[i + 3]) continue; const y = Math.floor(i / 4 / S) / S, l = (0.3 * p[i] + 0.59 * p[i + 1] + 0.11 * p[i + 2]) / 255, t = Math.max(0, Math.min(1, (l - 0.15) / 0.6)) * (1.05 - 0.3 * y);
      p[i] = 217 + 38 * t; p[i + 1] = 160 + 82 * t; p[i + 2] = 52 + 132 * t * t;
    }
    x.putImageData(d, 0, 0); isoGold = c;
  } catch (e) { isoGold = null; }
  return isoGold;
}
// Anillos de colores (por si el isotipo no está disponible): igual en oro
function goldRings(g, cx, cy, r) { for (let i = 0; i < 4; i++) { g.strokeStyle = i % 2 ? '#c99a2e' : '#f6d777'; g.lineWidth = r * 0.16; g.beginPath(); g.arc(cx, cy, r * (0.92 - i * 0.2), 0.3 + i * 0.9, 0.3 + i * 0.9 + 4.6); g.stroke(); } }
// Texto curvo: arriba se lee de izquierda a derecha por fuera, abajo también (al derecho)
function arcText(g, text, cx, cy, r, top, px, fill) {
  g.save(); g.font = `900 ${px}px Nunito,"Arial Black",sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = fill;
  const sp = px * 0.08, ws = [...text].map(ch => g.measureText(ch).width + sp), total = ws.reduce((a, b) => a + b, 0) - sp; let a = (top ? -Math.PI / 2 : Math.PI / 2) + (top ? -1 : 1) * total / r / 2;
  [...text].forEach((ch, i) => { const da = ws[i] / r, m = a + (top ? 1 : -1) * (ws[i] - sp) / r / 2; g.save(); g.translate(cx + Math.cos(m) * r, cy + Math.sin(m) * r); g.rotate(m + (top ? Math.PI / 2 : -Math.PI / 2)); g.fillText(ch, 0, 0); g.restore(); a += (top ? 1 : -1) * da; });
  g.restore();
}
// Cuerpo de la medalla (sin cinta): canto estriado, esmalte con letras en oro, centro de color e ícono en relieve
function medalBody(g, cx, cy, R, E, kind, opt) {
  const gold = kind === 'gold', ink = gold ? '#fff3c0' : '#eef2f7', s = R / 82;
  g.save(); g.shadowColor = 'rgba(0,0,0,.45)'; g.shadowBlur = 12 * s; g.shadowOffsetY = 5 * s; g.fillStyle = metal(g, cx - R, cy - R, cx + R, cy + R, kind); disc(g, cx, cy, R); g.fill(); g.restore();
  // canto estriado (como una moneda)
  g.save(); g.lineWidth = Math.max(1, 1.6 * s); for (let i = 0; i < 96; i++) { const a = i / 96 * Math.PI * 2; g.strokeStyle = i % 2 ? (gold ? 'rgba(120,78,8,.55)' : 'rgba(70,80,95,.5)') : 'rgba(255,250,220,.55)'; g.beginPath(); g.moveTo(cx + Math.cos(a) * R * 0.9, cy + Math.sin(a) * R * 0.9); g.lineTo(cx + Math.cos(a) * R * 0.985, cy + Math.sin(a) * R * 0.985); g.stroke(); } g.restore();
  // bisel interior
  g.fillStyle = metal(g, cx + R, cy + R, cx - R, cy - R, kind); disc(g, cx, cy, R * 0.88); g.fill();
  // banda de esmalte azul noche con letras en oro
  const band = g.createRadialGradient(cx, cy - R * 0.3, R * 0.2, cx, cy, R * 0.82); band.addColorStop(0, '#24407a'); band.addColorStop(1, '#0c1a3a');
  g.fillStyle = band; disc(g, cx, cy, R * 0.8); g.fill();
  g.strokeStyle = metal(g, cx - R, cy - R, cx + R, cy + R, kind); g.lineWidth = 2.2 * s; disc(g, cx, cy, R * 0.8); g.stroke();
  if (opt.text !== false) {
    arcText(g, opt.top || 'ENERGIMUNDO', cx, cy, R * 0.705, true, 11.5 * s, ink);
    arcText(g, opt.bottom || SHORT[E.key] || '', cx, cy, R * 0.705, false, 10.5 * s, ink);
    for (const sx of [-1, 1]) { g.fillStyle = ink; g.save(); g.translate(cx + sx * R * 0.705, cy); g.rotate(Math.PI / 4); g.fillRect(-2.2 * s, -2.2 * s, 4.4 * s, 4.4 * s); g.restore(); }
  }
  // centro de color, con brillo y rayos suaves
  const rc = R * (opt.text === false ? 0.72 : 0.6), col = E.color || '#2ed3c6', cg = g.createRadialGradient(cx - rc * 0.35, cy - rc * 0.4, rc * 0.1, cx, cy, rc);
  cg.addColorStop(0, shade(col, 0.45)); cg.addColorStop(0.45, col); cg.addColorStop(1, shade(col, -0.35));
  g.fillStyle = gold ? cg : '#3a4a6a'; disc(g, cx, cy, rc); g.fill();
  g.save(); disc(g, cx, cy, rc); g.clip(); g.globalAlpha = 0.12; g.fillStyle = '#ffffff'; for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2; g.beginPath(); g.moveTo(cx, cy); g.arc(cx, cy, rc, a, a + Math.PI / 32); g.closePath(); g.fill(); } g.restore();
  g.strokeStyle = metal(g, cx + R, cy - R, cx - R, cy + R, kind); g.lineWidth = 3 * s; disc(g, cx, cy, rc); g.stroke();
  // ícono en relieve (capa aparte, así los calados no agujerean la medalla)
  const L = document.createElement('canvas'), n = Math.ceil(rc * 2.2); L.width = L.height = n; drawIcon(L.getContext('2d'), opt.icon || E.icon, n / 2, n / 2, rc * 0.62, '#ffffff');
  g.save(); g.shadowColor = 'rgba(0,0,0,.4)'; g.shadowBlur = 4 * s; g.shadowOffsetY = 2 * s; g.drawImage(L, cx - n / 2, cy - n / 2); g.restore();
  // destello
  g.save(); g.strokeStyle = 'rgba(255,255,255,.5)'; g.lineWidth = 3 * s; g.beginPath(); g.arc(cx, cy, R * 0.93, -2.55, -1.55); g.stroke(); g.restore();
}
function shade(hex, k) { const n = parseInt(hex.slice(1), 16), f = v => Math.max(0, Math.min(255, Math.round(v + (k < 0 ? v * k : (255 - v) * k)))); return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`; }
// Cinta con los colores de Energimundo y broche dorado con el isotipo
function ribbon(g, c, top, y1, s) {
  for (const [sx, a, b] of [[-1, '#6a2c91', '#8a46b5'], [1, '#e6007e', '#ff3a9d']]) {
    const gr = g.createLinearGradient(c + sx * 70 * s, 0, c + sx * 10 * s, 0); gr.addColorStop(0, a); gr.addColorStop(0.5, b); gr.addColorStop(1, a);
    g.fillStyle = gr; g.beginPath(); g.moveTo(c + sx * 8 * s, y1); g.lineTo(c + sx * 48 * s, top); g.lineTo(c + sx * 86 * s, top); g.lineTo(c + sx * 44 * s, y1); g.closePath(); g.fill();
    g.fillStyle = 'rgba(255,255,255,.28)'; g.beginPath(); g.moveTo(c + sx * 20 * s, y1); g.lineTo(c + sx * 60 * s, top); g.lineTo(c + sx * 66 * s, top); g.lineTo(c + sx * 26 * s, y1); g.closePath(); g.fill();
  }
}
function clasp(g, cx, cy, r, s) {
  g.save(); g.shadowColor = 'rgba(0,0,0,.4)'; g.shadowBlur = 6 * s; g.shadowOffsetY = 2 * s; g.fillStyle = metal(g, cx - r, cy - r, cx + r, cy + r); disc(g, cx, cy, r); g.fill(); g.restore();
  g.fillStyle = '#0c1a3a'; disc(g, cx, cy, r * 0.8); g.fill();
  const iso = goldIso(); g.save(); g.shadowColor = 'rgba(0,0,0,.6)'; g.shadowBlur = 2 * s; if (iso) g.drawImage(iso, cx - r * 0.74, cy - r * 0.74, r * 1.48, r * 1.48); else goldRings(g, cx, cy, r * 0.62); g.restore();
  g.strokeStyle = 'rgba(255,240,190,.7)'; g.lineWidth = 1.4 * s; disc(g, cx, cy, r * 0.8); g.stroke();
}
// Medalla completa (ventana de la medalla) o en miniatura (menú). got = false: todavía no ganada.
export function drawMedal(cv, E, got = true, opt = {}) {
  const g = cv.getContext('2d'), W = cv.width; g.clearRect(0, 0, W, W);
  if (opt.mini) {   // tarjeta del menú
    const R = W * 0.47, c = W / 2;
    if (!got) { g.fillStyle = E.color; disc(g, c, c, R * 0.84); g.fill(); g.setLineDash([4, 4]); g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = 3; disc(g, c, c, R * 0.95); g.stroke(); g.setLineDash([]); drawIcon(g, E.icon, c, c, R * 0.55); return; }
    medalBody(g, c, c, R * 0.97, E, 'gold', { text: false }); return;
  }
  const s = W / 220, c = W / 2, R = 78 * s, cy = 136 * s;
  ribbon(g, c, 2 * s, cy - R * 0.55, s);
  medalBody(g, c, cy, R, E, got ? 'gold' : 'silver', opt);
  clasp(g, c, cy - R - 6 * s, 21 * s, s);
}
// Sello dorado de Energimundo para el diploma: isotipo en oro, o la medalla de la misión en el certificado del Modo escuela
export function drawSeal(cv, E) {
  const g = cv.getContext('2d'), W = cv.width, c = W / 2, R = W * 0.46; g.clearRect(0, 0, W, W);
  if (E) { medalBody(g, c, c, R, E, 'gold', {}); return; }
  // estrella de puntas (borde de sello) y centro con el isotipo dorado
  g.save(); g.shadowColor = 'rgba(0,0,0,.35)'; g.shadowBlur = 8; g.shadowOffsetY = 3; g.fillStyle = metal(g, 0, 0, W, W); g.beginPath();
  for (let i = 0; i <= 64; i++) { const a = i / 64 * Math.PI * 2, r = i % 2 ? R : R * 0.92; g.lineTo(c + Math.cos(a) * r, c + Math.sin(a) * r); } g.closePath(); g.fill(); g.restore();
  const band = g.createRadialGradient(c, c - R * 0.3, R * 0.2, c, c, R * 0.8); band.addColorStop(0, '#24407a'); band.addColorStop(1, '#0c1a3a'); g.fillStyle = band; disc(g, c, c, R * 0.8); g.fill();
  g.strokeStyle = metal(g, 0, 0, W, W); g.lineWidth = W * 0.012; disc(g, c, c, R * 0.8); g.stroke();
  arcText(g, 'ENERGIMUNDO', c, c, R * 0.655, true, W * 0.062, '#fff3c0'); arcText(g, '100 % RENOVABLE', c, c, R * 0.655, false, W * 0.052, '#fff3c0');
  const iso = goldIso(); g.save(); g.shadowColor = 'rgba(0,0,0,.6)'; g.shadowBlur = W * 0.012; if (iso) g.drawImage(iso, c - R * 0.55, c - R * 0.55, R * 1.1, R * 1.1); else goldRings(g, c, c, R * 0.42); g.restore();
}

export class Escuela {
  constructor(g) {
    this.g = g; this.level = 'explorador'; this.cur = null; this.winOpen = false;
    try { const d = JSON.parse(localStorage.getItem(KEY) || 'null'); this.medals = d && d.v === 1 && d.medals ? d.medals : {}; } catch (e) { this.medals = {}; }
    $('eClose').onclick = () => g.extras.close();
    $('eReset').onclick = () => { if (!this.count()) return; if (!this.resetArm) { this.resetArm = true; $('eReset').textContent = '¿Seguro? Tocá de nuevo'; return; } this.medals = {}; this.save(); this.resetArm = false; this.draw(); g.audio.click(); };
    document.querySelectorAll('#escuela .eLevel button').forEach(b => { b.onclick = () => { this.level = b.dataset.l; this.drawLevel(); g.audio.click(); }; });
    $('eCert').onclick = () => this.cert();
    $('eOther').onclick = () => { this.closeWin(); this.toFree(true); this.open(); };
    $('eFree').onclick = () => { this.closeWin(); this.toFree(false); };
  }
  has(k) { return !!this.medals[k]; }
  count() { return ESCUELA.filter(e => this.medals[e.key]).length; }
  save() { try { localStorage.setItem(KEY, JSON.stringify({ v: 1, medals: this.medals })); } catch (e) { /* sin almacenamiento */ } }
  info(k) { return BY[k]; }

  // ---- Menú de misiones ----
  open() {
    const g = this.g; if (g.extras.open && g.extras.open !== 'escuela') return;
    g.extras.open = 'escuela'; $('escuela').classList.remove('hidden'); this.resetArm = false; this.draw(); g.audio.click();
    setTimeout(() => { const b = document.querySelector('#eList button'); if (b) try { b.focus({ preventScroll: true }); } catch (e) { /* sin foco */ } }, 30);
  }
  drawLevel() { document.querySelectorAll('#escuela .eLevel button').forEach(b => { const on = b.dataset.l === this.level; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); }); }
  draw() {
    const box = $('eList'); box.textContent = ''; this.drawLevel();
    ESCUELA.forEach((E, i) => {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'eCard' + (this.medals[E.key] ? ' got' : ''); b.style.setProperty('--c', E.color);
      b.innerHTML = `<canvas width="96" height="96" aria-hidden="true"></canvas><span class="eTxt"><b><kbd>${i + 1}</kbd> ${E.name}</b><small>${E.sub}</small><em>${this.medals[E.key] ? '★ Medalla ganada' : `Unos ${E.min} minutos`}</em></span>`;
      drawMedal(b.querySelector('canvas'), E, !!this.medals[E.key], { mini: true });
      b.onclick = () => this.start(E.key); box.appendChild(b);
    });
    $('eCount').textContent = `Medallas: ${this.count()} de ${ESCUELA.length}`; $('eReset').textContent = 'Borrar medallas'; $('eReset').disabled = !this.count();
  }
  key(code) { const m = /^(?:Digit|Numpad)([1-7])$/.exec(code); if (m) this.start(ESCUELA[+m[1] - 1].key); }
  start(k) {
    const g = this.g; $('escuela').classList.add('hidden'); if (g.extras.open === 'escuela') g.extras.open = null;
    this.cur = k; g.play('larga', SEQ.larga.indexOf(k), null, this.level, { school: k });
    setTimeout(() => g.ui.note('Modo escuela: ' + BY[k].name + '. Moverse con W A S D o las flechas, usar con E. La flecha amarilla del minimapa te guía.', 7), 400);
  }

  // ---- Fin de la misión: medalla, atuendo y certificado ----
  complete(k) {
    const g = this.g, E = BY[k], first = !this.medals[k];
    this.medals[k] = new Date().toISOString().slice(0, 10); this.save(); g.stats.inc(g.stats.d, 'medallas'); g.stats.flush && g.stats.flush();
    let prize = '';
    if (E.outfit != null) { const O = OUTFITS[E.outfit]; g.extras.setOutfit(E.outfit); prize = `Tu premio: Capi estrena el atuendo ${O.name} (${O.desc.toLowerCase()}). Queda en el vestuario, tecla V.`; }
    else prize = 'Tu premio: la medalla queda guardada en el Modo escuela de esta computadora.';
    $('eWinT').textContent = `¡Medalla de ${E.name}!`; $('eWinS').textContent = (first ? '' : 'Otra vez, ¡y con todo! ') + `Medallas: ${this.count()} de ${ESCUELA.length}. Lo que aprendiste:`;
    const ul = $('eLearn'); ul.textContent = ''; for (const t of E.learn) { const li = document.createElement('li'); li.textContent = t; ul.appendChild(li); }
    if (this.count() === ESCUELA.length) prize += ' ¡Y juntaste las siete medallas: sos Guardián de la Matriz Verde!';
    $('ePrize').textContent = prize; drawMedal($('eMedal'), E, true);
    g.extras.open = 'eWin'; $('eWin').classList.remove('hidden'); this.winOpen = true; g.audio.fanfare(); g.confetti(80); g.capi.celebrate && g.capi.celebrate(3);
    setTimeout(() => { try { $('eCert').focus({ preventScroll: true }); } catch (e) { /* sin foco */ } }, 40);
  }
  closeWin() { $('eWin').classList.add('hidden'); if (this.g.extras.open === 'eWin') this.g.extras.open = null; this.winOpen = false; }
  cert() {
    const g = this.g, E = BY[this.cur], M = g.missions; $('eWin').classList.add('hidden'); this.winOpen = false; g.extras.open = null;
    g.extras.showDiploma(() => { this.winOpen = true; g.extras.open = 'eWin'; $('eWin').classList.remove('hidden'); }, {
      kicker: 'CERTIFICADO', title: this.count() === ESCUELA.length ? 'Las siete medallas de Energimundo' : 'Medalla de ' + E.name, desc: `por completar la misión «${M.title}» junto a Capi, en el Modo escuela de Energimundo.`,
      story: 'Modo escuela · ' + E.name, extra: `Medallas: ${this.count()} de ${ESCUELA.length}`, medal: E
    });
  }
  toFree(quiet) { const M = this.g.missions; M.school = null; M.quietFree = quiet; M.start('larga', SEQ.larga.length, false); }
  update() {
    // si la ventana de la medalla se cerró con Esc, se sigue explorando
    if (this.winOpen && $('eWin').classList.contains('hidden') && this.g.extras.open !== 'diploma') { this.winOpen = false; this.toFree(false); }
  }
}
