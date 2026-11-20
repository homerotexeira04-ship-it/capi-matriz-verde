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
// Cuerpo de la medalla: canto estriado con bisel, cordón de perlas, campo dorado con guilloché, el isotipo de Energimundo
// en oro y en relieve al centro, laureles, la palabra ENERGIMUNDO grabada arriba y una banda de esmalte con la energía.
function laurel(g, cx, cy, r, side, s, kind) {
  const a0 = Math.PI / 2 + side * 0.62, a1 = Math.PI / 2 + side * 1.5, n = 7, dark = kind === 'gold' ? '#8a5a0c' : '#5d6774';
  g.save(); g.strokeStyle = dark; g.lineWidth = 1.6 * s; g.beginPath(); g.arc(cx, cy, r, Math.min(a0, a1), Math.max(a0, a1)); g.stroke();
  for (let i = 0; i < n; i++) {
    const a = a0 + (a1 - a0) * (i + 0.5) / n, x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r, t = a + side * Math.PI / 2;
    for (const k of [-1, 1]) {
      g.save(); g.translate(x, y); g.rotate(t + k * 0.55 * side); g.translate(0, -5.2 * s * k * side);
      g.fillStyle = metal(g, -4 * s, -6 * s, 4 * s, 6 * s, kind); g.strokeStyle = dark; g.lineWidth = 0.9 * s;
      g.beginPath(); g.ellipse(0, 0, 2.6 * s, 6 * s, 0, 0, Math.PI * 2); g.fill(); g.stroke(); g.restore();
    }
  }
  g.restore();
}
function banner(g, cx, y, w, h, text, E, s, kind) {
  const gold = metal(g, cx - w / 2, y - h, cx + w / 2, y + h, kind), tail = h * 0.9;
  for (const sx of [-1, 1]) {   // puntas plegadas detrás
    const x0 = cx + sx * (w / 2 - tail * 0.2);
    g.fillStyle = '#081329'; g.beginPath(); g.moveTo(x0, y - h / 2 + h * 0.25); g.lineTo(x0 + sx * tail, y - h / 2 + h * 0.25); g.lineTo(x0 + sx * tail * 0.62, y + h * 0.18); g.lineTo(x0 + sx * tail, y + h / 2 + h * 0.25); g.lineTo(x0, y + h / 2 + h * 0.25); g.closePath(); g.fill();
    g.strokeStyle = gold; g.lineWidth = 1.4 * s; g.stroke();
  }
  g.save(); g.shadowColor = 'rgba(0,0,0,.4)'; g.shadowBlur = 5 * s; g.shadowOffsetY = 2 * s;
  const eg = g.createLinearGradient(0, y - h / 2, 0, y + h / 2); eg.addColorStop(0, '#2b4a8a'); eg.addColorStop(0.55, '#14275a'); eg.addColorStop(1, '#0b1838');
  g.fillStyle = eg; g.beginPath(); g.moveTo(cx - w / 2, y - h / 2); g.quadraticCurveTo(cx, y - h / 2 - h * 0.28, cx + w / 2, y - h / 2); g.lineTo(cx + w / 2, y + h / 2); g.quadraticCurveTo(cx, y + h / 2 - h * 0.28, cx - w / 2, y + h / 2); g.closePath(); g.fill(); g.restore();
  g.strokeStyle = gold; g.lineWidth = 2 * s; g.stroke();
  g.save(); g.globalAlpha = 0.18; g.fillStyle = '#ffffff'; g.beginPath(); g.moveTo(cx - w / 2 + 3 * s, y - h / 2 + 2 * s); g.quadraticCurveTo(cx, y - h / 2 - h * 0.2, cx + w / 2 - 3 * s, y - h / 2 + 2 * s); g.lineTo(cx + w / 2 - 3 * s, y - h * 0.1); g.quadraticCurveTo(cx, y - h * 0.38, cx - w / 2 + 3 * s, y - h * 0.1); g.closePath(); g.fill(); g.restore();
  // pequeño esmalte con el ícono de la energía y la palabra en oro
  const ir = h * 0.36, ix = cx - w / 2 + h * 0.62, iy = y - h * 0.1;
  const cg = g.createRadialGradient(ix - ir * 0.3, iy - ir * 0.3, ir * 0.1, ix, iy, ir); cg.addColorStop(0, shade(E.color || '#2ed3c6', 0.4)); cg.addColorStop(1, shade(E.color || '#2ed3c6', -0.3));
  g.fillStyle = cg; disc(g, ix, iy, ir); g.fill(); g.strokeStyle = gold; g.lineWidth = 1.3 * s; g.stroke(); drawIcon(g, E.icon, ix, iy, ir * 0.62, '#ffffff');
  g.save(); g.font = `900 ${Math.round(h * 0.5)}px Nunito,"Arial Black",sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
  let fs = h * 0.5; const tx = cx + h * 0.32, maxW = w - h * 1.7; while (g.measureText(text).width > maxW && fs > 6) { fs -= 0.5; g.font = `900 ${fs}px Nunito,"Arial Black",sans-serif`; }
  g.fillStyle = 'rgba(0,0,0,.5)'; g.fillText(text, tx, y - h * 0.08 + 1.2 * s); g.fillStyle = kind === 'gold' ? '#ffe79a' : '#eef2f7'; g.fillText(text, tx, y - h * 0.08); g.restore();
}
function medalBody(g, cx, cy, R, E, kind, opt) {
  const gold = kind === 'gold', s = R / 82, dark = gold ? 'rgba(110,70,6,.85)' : 'rgba(60,70,85,.8)';
  // sombra y canto
  g.save(); g.shadowColor = 'rgba(0,0,0,.5)'; g.shadowBlur = 14 * s; g.shadowOffsetY = 6 * s; g.fillStyle = metal(g, cx - R, cy - R, cx + R, cy + R, kind); disc(g, cx, cy, R); g.fill(); g.restore();
  g.save(); g.lineWidth = Math.max(0.8, 1.1 * s); for (let i = 0; i < 160; i++) { const a = i / 160 * Math.PI * 2; g.strokeStyle = i % 2 ? (gold ? 'rgba(120,78,8,.6)' : 'rgba(70,80,95,.55)') : 'rgba(255,250,225,.55)'; g.beginPath(); g.moveTo(cx + Math.cos(a) * R * 0.915, cy + Math.sin(a) * R * 0.915); g.lineTo(cx + Math.cos(a) * R * 0.99, cy + Math.sin(a) * R * 0.99); g.stroke(); } g.restore();
  // bisel: el aro interior se ilumina al revés que el canto
  g.fillStyle = metal(g, cx + R, cy + R, cx - R, cy - R, kind); disc(g, cx, cy, R * 0.905); g.fill();
  g.fillStyle = metal(g, cx - R, cy - R, cx + R, cy + R, kind); disc(g, cx, cy, R * 0.855); g.fill();
  // cordón de perlas
  for (let i = 0; i < 64; i++) { const a = i / 64 * Math.PI * 2, x = cx + Math.cos(a) * R * 0.83, y = cy + Math.sin(a) * R * 0.83; g.fillStyle = dark; disc(g, x + 0.5 * s, y + 0.6 * s, 1.5 * s); g.fill(); g.fillStyle = gold ? '#ffeaa0' : '#f4f7fb'; disc(g, x, y, 1.35 * s); g.fill(); }
  // campo pulido con guilloché (rayos finos que brillan distinto)
  const fr = R * 0.79, fg = g.createRadialGradient(cx - fr * 0.3, cy - fr * 0.35, fr * 0.05, cx, cy, fr);
  if (gold) { fg.addColorStop(0, '#fff2bf'); fg.addColorStop(0.45, '#f1c445'); fg.addColorStop(1, '#a8740f'); } else { fg.addColorStop(0, '#ffffff'); fg.addColorStop(0.5, '#cfd6df'); fg.addColorStop(1, '#7d8794'); }
  g.fillStyle = fg; disc(g, cx, cy, fr); g.fill();
  g.save(); disc(g, cx, cy, fr); g.clip(); g.lineWidth = Math.max(0.6, 0.8 * s);
  for (let i = 0; i < 120; i++) { const a = i / 120 * Math.PI * 2; g.strokeStyle = i % 2 ? 'rgba(255,255,255,.16)' : 'rgba(90,55,0,.12)'; g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + Math.cos(a) * fr, cy + Math.sin(a) * fr); g.stroke(); }
  g.restore();
  g.strokeStyle = dark; g.lineWidth = 1.2 * s; disc(g, cx, cy, fr); g.stroke();
  // ENERGIMUNDO grabado arriba (hueco: luz abajo, sombra arriba)
  if (opt.text !== false) { g.save(); g.translate(0, 1.1 * s); arcText(g, opt.top || 'ENERGIMUNDO', cx, cy, R * 0.66, true, 12 * s, gold ? 'rgba(255,246,205,.9)' : 'rgba(255,255,255,.9)'); g.restore(); arcText(g, opt.top || 'ENERGIMUNDO', cx, cy, R * 0.66, true, 12 * s, gold ? '#7a4d06' : '#4a5463'); }
  // laureles a los lados de abajo
  laurel(g, cx, cy, R * 0.66, -1, s, kind); laurel(g, cx, cy, R * 0.66, 1, s, kind);
  // isotipo de Energimundo en oro y en relieve
  const ir = R * (opt.text === false ? 0.58 : 0.43), iy = cy - R * (opt.text === false ? 0.02 : 0.07), iso = goldIso();
  // medallón rebajado en oro mate: el isotipo pulido resalta encima
  g.save(); const mr = ir * 1.1, mg = g.createRadialGradient(cx + mr * 0.25, iy + mr * 0.3, mr * 0.1, cx, iy, mr);
  if (gold) { mg.addColorStop(0, '#9c6a12'); mg.addColorStop(1, '#5e3c05'); } else { mg.addColorStop(0, '#7d8794'); mg.addColorStop(1, '#46505d'); }
  g.fillStyle = mg; disc(g, cx, iy, mr); g.fill();
  g.lineWidth = 2.2 * s; g.strokeStyle = gold ? 'rgba(255,236,170,.85)' : 'rgba(255,255,255,.8)'; g.beginPath(); g.arc(cx, iy, mr, 0.2, Math.PI - 0.2); g.stroke();
  g.strokeStyle = 'rgba(0,0,0,.45)'; g.beginPath(); g.arc(cx, iy, mr, Math.PI + 0.2, -0.2); g.stroke(); g.restore();
  if (iso) {
    g.save(); g.globalAlpha = 0.55; g.filter = 'brightness(0.25)'; g.drawImage(iso, cx - ir + 1.6 * s, iy - ir + 2.2 * s, ir * 2, ir * 2); g.restore();
    g.save(); if (!gold) g.filter = 'grayscale(1) brightness(1.25)'; g.drawImage(iso, cx - ir, iy - ir, ir * 2, ir * 2); g.restore();
  } else goldRings(g, cx, iy, ir * 0.8);
  // banda de esmalte con la energía de la misión
  if (opt.text !== false) banner(g, cx, cy + R * 0.6, R * 1.42, R * 0.3, opt.bottom || SHORT[E.key] || '', E, s, kind);
  // brillos
  g.save(); g.strokeStyle = 'rgba(255,255,255,.6)'; g.lineWidth = 2.6 * s; g.lineCap = 'round'; g.beginPath(); g.arc(cx, cy, R * 0.955, -2.6, -1.6); g.stroke(); g.lineWidth = 1.4 * s; g.beginPath(); g.arc(cx, cy, R * 0.955, -1.45, -1.25); g.stroke(); g.restore();
  g.save(); const hg = g.createRadialGradient(cx - fr * 0.45, cy - fr * 0.5, 0, cx - fr * 0.45, cy - fr * 0.5, fr * 0.7); hg.addColorStop(0, 'rgba(255,255,255,.28)'); hg.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = hg; disc(g, cx, cy, fr); g.fill(); g.restore();
}
function shade(hex, k) { const n = parseInt(hex.slice(1), 16), f = v => Math.max(0, Math.min(255, Math.round(v + (k < 0 ? v * k : (255 - v) * k)))); return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`; }
// Cinta de raso en V con los colores de Energimundo (violeta, fucsia y filetes dorados), cruzada detrás de la argolla
function ribbon(g, c, top, yb, s) {
  const strap = (sx, under) => {
    const xa = c + sx * 100 * s, xb = c + sx * 52 * s, xc = c - sx * 4 * s, xd = c + sx * 26 * s;   // arriba ancho, abajo se angosta y cruza
    g.save(); if (!under) { g.shadowColor = 'rgba(0,0,0,.35)'; g.shadowBlur = 6 * s; g.shadowOffsetX = -sx * 2 * s; }
    g.beginPath(); g.moveTo(xa, top); g.lineTo(xb, top); g.lineTo(xc, yb); g.lineTo(xd, yb); g.closePath();
    const ux = (xb - xa), uy = 0, mx = (xa + xb) / 2, gr = g.createLinearGradient(xa, top, xb, top);
    const st = [['#4b1d6b', 0], ['#6a2c91', 0.06], ['#d9a83a', 0.2], ['#ffe08a', 0.215], ['#d9a83a', 0.23], ['#e6007e', 0.25], ['#ff3a9d', 0.5], ['#e6007e', 0.75], ['#d9a83a', 0.77], ['#ffe08a', 0.785], ['#d9a83a', 0.8], ['#6a2c91', 0.94], ['#4b1d6b', 1]];
    for (const [col, t] of (sx < 0 ? st : st.map(([c2, t2]) => [c2, 1 - t2]).reverse())) gr.addColorStop(t, col);
    g.fillStyle = gr; g.fill(); g.restore();
    // brillo de raso y sombra donde se pliega
    g.save(); g.beginPath(); g.moveTo(xa, top); g.lineTo(xb, top); g.lineTo(xc, yb); g.lineTo(xd, yb); g.closePath(); g.clip();
    const sh = g.createLinearGradient(0, top, 0, yb); sh.addColorStop(0, 'rgba(255,255,255,.22)'); sh.addColorStop(0.45, 'rgba(255,255,255,0)'); sh.addColorStop(1, 'rgba(0,0,0,.35)'); g.fillStyle = sh; g.fillRect(Math.min(xa, xc) - 5, top, Math.abs(xa - xc) + 60 * s, yb - top); g.restore();
  };
  strap(1, true); strap(-1, false);
}
// Argolla y pasador dorados que unen la cinta con la medalla
function bail(g, cx, cy, s, kind) {
  g.save(); g.lineWidth = 5 * s; g.strokeStyle = metal(g, cx - 14 * s, cy - 10 * s, cx + 14 * s, cy + 10 * s, kind); g.beginPath(); g.ellipse(cx, cy, 11 * s, 8 * s, 0, 0, Math.PI * 2); g.stroke();
  g.lineWidth = 1.2 * s; g.strokeStyle = 'rgba(255,255,255,.6)'; g.beginPath(); g.ellipse(cx, cy, 11 * s, 8 * s, 0, -2.8, -1.4); g.stroke(); g.restore();
  g.save(); g.shadowColor = 'rgba(0,0,0,.35)'; g.shadowBlur = 4 * s; g.fillStyle = metal(g, cx - 30 * s, cy - 24 * s, cx + 30 * s, cy - 14 * s, kind); g.beginPath(); g.roundRect ? g.roundRect(cx - 36 * s, cy - 26 * s, 72 * s, 11 * s, 4 * s) : g.rect(cx - 36 * s, cy - 26 * s, 72 * s, 11 * s); g.fill(); g.restore();
  g.fillStyle = 'rgba(110,70,6,.8)'; g.font = `900 ${6 * s}px Nunito,"Arial Black",sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('SALTO · URUGUAY', cx, cy - 20.3 * s);
}
// Medalla completa (ventana de la medalla) o en miniatura (menú). got = false: todavía no ganada.
export function drawMedal(cv, E, got = true, opt = {}) {
  const g = cv.getContext('2d'), W = cv.width, H = cv.height; g.clearRect(0, 0, W, H);
  if (opt.mini) {   // tarjeta del menú
    const R = W * 0.47, c = W / 2;
    if (!got) { g.fillStyle = E.color; disc(g, c, c, R * 0.84); g.fill(); g.setLineDash([4, 4]); g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = 3; disc(g, c, c, R * 0.95); g.stroke(); g.setLineDash([]); drawIcon(g, E.icon, c, c, R * 0.55); return; }
    medalBody(g, c, c, R * 0.97, E, 'gold', { text: false }); return;
  }
  const s = W / 220, c = W / 2, R = 80 * s, cy = H - R - 12 * s, kind = got ? 'gold' : 'silver';
  ribbon(g, c, 0, cy - R - 2 * s, s);
  bail(g, c, cy - R - 5 * s, s, kind);
  medalBody(g, c, cy, R, E, kind, opt);
  return { c, cy, R };
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
    $('ePrize').textContent = prize; this.shine(drawMedal($('eMedal'), E, true));
    g.extras.open = 'eWin'; $('eWin').classList.remove('hidden'); this.winOpen = true; g.audio.fanfare(); g.confetti(80); g.capi.celebrate && g.capi.celebrate(3);
    setTimeout(() => { try { $('eCert').focus({ preventScroll: true }); } catch (e) { /* sin foco */ } }, 40);
  }
  // destello que cruza la medalla cada tanto mientras está abierta la ventana del premio
  shine(geo) {
    const cv = $('eMedal'); if (!geo || !cv) return; const base = document.createElement('canvas'); base.width = cv.width; base.height = cv.height; base.getContext('2d').drawImage(cv, 0, 0);
    const g = cv.getContext('2d'), t0 = performance.now(), id = this.shineId = (this.shineId || 0) + 1, red = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (red) return;
    const step = (now) => {
      if (id !== this.shineId || $('eWin').classList.contains('hidden')) { g.clearRect(0, 0, cv.width, cv.height); g.drawImage(base, 0, 0); return; }
      const t = ((now - t0) / 1000) % 3.6, k = t / 1.1; g.clearRect(0, 0, cv.width, cv.height); g.drawImage(base, 0, 0);
      if (k < 1) { const { c, cy, R } = geo, x = c - R * 1.6 + k * R * 3.2; g.save(); g.beginPath(); g.arc(c, cy, R * 0.99, 0, Math.PI * 2); g.clip(); g.globalCompositeOperation = 'lighter';
        const gr = g.createLinearGradient(x - R * 0.2, cy - R * 0.5, x + R * 0.2, cy + R * 0.5); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.5, 'rgba(255,245,215,.32)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(c - R, cy - R, R * 2, R * 2); g.restore(); }
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
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
