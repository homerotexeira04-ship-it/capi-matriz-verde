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
function drawMedal(cv, E, got = true) {
  const g = cv.getContext('2d'), W = cv.width, c = W / 2, R = W * 0.3, cy = W * 0.56;
  g.clearRect(0, 0, W, W);
  // cintas
  for (const [sx, col] of [[-1, '#6a2c91'], [1, '#e6007e']]) { g.fillStyle = col; g.beginPath(); g.moveTo(c + sx * 10, cy - R - 2); g.lineTo(c + sx * 56, 6); g.lineTo(c + sx * 92, 6); g.lineTo(c + sx * 46, cy - R + 14); g.closePath(); g.fill(); }
  g.fillStyle = got ? '#ffd23f' : '#3a4a6a'; g.beginPath(); g.arc(c, cy, R + 12, 0, 7); g.fill();
  g.fillStyle = got ? '#b8860b' : '#2a3654'; g.beginPath(); g.arc(c, cy, R + 4, 0, 7); g.fill();
  g.fillStyle = got ? E.color : '#26324e'; g.beginPath(); g.arc(c, cy, R, 0, 7); g.fill();
  drawIcon(g, E.icon, c, cy, R * 0.82, got ? '#ffffff' : '#5a6a8a');
  if (got) { g.strokeStyle = 'rgba(255,255,255,.55)'; g.lineWidth = 4; g.beginPath(); g.arc(c, cy, R - 7, -2.6, -1.4); g.stroke(); }
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
      const cv = b.querySelector('canvas'), x = cv.getContext('2d'); x.fillStyle = E.color; x.beginPath(); x.arc(48, 48, 46, 0, 7); x.fill(); drawIcon(x, E.icon, 48, 48, 30);
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
      story: 'Modo escuela · ' + E.name, extra: `Medallas: ${this.count()} de ${ESCUELA.length}`
    });
  }
  toFree(quiet) { const M = this.g.missions; M.school = null; M.quietFree = quiet; M.start('larga', SEQ.larga.length, false); }
  update() {
    // si la ventana de la medalla se cerró con Esc, se sigue explorando
    if (this.winOpen && $('eWin').classList.contains('hidden') && this.g.extras.open !== 'diploma') { this.winOpen = false; this.toFree(false); }
  }
}
