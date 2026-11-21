// Energimundo: el museo de energías renovables de Salto Grande, en la margen oriental de la represa.
// Armado a partir de fotos reales del lugar: edificio bajo con la franja roja y la caja de vidrio con el isotipo,
// domo geodésico negro, el Cronomundo (reloj de sol de acero corten), letras gigantes, pórtico de entrada,
// escenario a pedal con bicicletas generadoras, cafetería y un sendero con las seis estaciones de energía.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { POS, MUSEO_OFF } from './terrain.js';
import { C, Batch, canvasTex } from './world.js';
import { flag } from './sectors.js';
import { argFlag } from './barrios.js';

const $ = id => document.getElementById(id);
const L = (who, text) => ({ who, text });
// La flora al azar no planta dentro del predio (los árboles del museo se plantan a mano)
export const CLEAR4 = [[POS.museo.x0, POS.museo.x1, POS.museo.z0, POS.museo.z1], [POS.museo.x0 + 2, POS.museo.x1, POS.museo.z1 - 1, POS.museo.z1 + 9.5]];   // y el pasto frente a las letras
// El predio se arma en sus coordenadas de siempre (locales) y main.js lo ubica junto a la represa con una vista desplazada
const [MX, MZ] = MUSEO_OFF, loc = r => ({ x0: r.x0 - MX, x1: r.x1 - MX, z0: r.z0 - MZ, z1: r.z1 - MZ }), lp = p => [p[0] - MX, p[1] - MZ];
const LP = { edificio: loc(POS.edificio), crono: lp(POS.crono), domo: lp(POS.domo), portal: lp(POS.portal), escenario: loc(POS.escenario) };

const MAROON = 0x7a2a27, RED = 0xd23a3f, DARK = 0x2a2a2e, BLACK = 0x1d1d22, ROOF = 0x47474c, CONC = 0xd0cbc2, GRAVEL = 0xbdb5a8,
  CORTEN = 0x8e4a2a, SILVER = 0xd5d8dd, WHITE = 0xf2f2f0, PATH = 0xd8cfc0, TRAIL = 0xcdbb93;
// Colores del isotipo de Energimundo
const LOGO = { purple: 0x6a2c91, magenta: 0xe6007e, teal: 0x1fb5ad, green: 0x8cc63f, yellow: 0xffc93c, orange: 0xf28c28, blue: 0x2f6fe4, red: 0xe5484d };

// ---------- Cartelería: un solo atlas y una sola malla para todos los carteles del predio ----------
const AW = 1024, AH = 1024;
const CELL = {
  logo: [0, 0, 1024, 224], word: [0, 224, 640, 96], pedal: [640, 224, 384, 96],
  totem: [0, 320, 256, 224], crono: [256, 320, 256, 224], domo: [512, 320, 256, 224], cafe: [768, 320, 256, 224],
  solar: [0, 544, 256, 240], eolica: [256, 544, 256, 240], hidro: [512, 544, 256, 240], bio: [768, 544, 256, 240],
  mareo: [0, 784, 256, 240], geo: [256, 784, 256, 240], iso: [512, 784, 256, 240]
};
const STATIONS = [['solar', 'SOLAR', '#f2a71b'], ['eolica', 'EÓLICA', '#3aa6c9'], ['hidro', 'HIDRÁULICA', '#2f6fe4'], ['bio', 'BIOMASA', '#4f9a3f'], ['mareo', 'MAREOMOTRIZ', '#1fb5ad'], ['geo', 'GEOTÉRMICA', '#d2552b']];
function drawAtlas(g) {
  const li = $('logoLargo'), ii = $('logoIso'), ok = im => im && im.naturalWidth;
  const font = (px, w = 900) => `${w} ${px}px Nunito,"Arial Black",sans-serif`, disp = px => `${px}px "Lilita One","Arial Black",sans-serif`;
  const fit = (im, x, y, w, h) => { const k = Math.min(w / im.naturalWidth, h / im.naturalHeight); g.drawImage(im, x + (w - im.naturalWidth * k) / 2, y + (h - im.naturalHeight * k) / 2, im.naturalWidth * k, im.naturalHeight * k); };
  const txt = (s, x, y, px, col, f = disp) => { g.fillStyle = col; g.font = f(px); g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(s, x, y); };
  const rings = (cx, cy, r) => { const cols = ['#6a2c91', '#e6007e', '#1fb5ad', '#8cc63f', '#ffc93c']; cols.forEach((c, i) => { g.strokeStyle = c; g.lineWidth = r * 0.11; g.beginPath(); g.arc(cx, cy, r * (1 - i * 0.17), 0.3 + i * 0.9, 0.3 + i * 0.9 + 4.6); g.stroke(); }); g.fillStyle = '#f28c28'; g.beginPath(); g.arc(cx, cy, r * 0.2, 0, 7); g.fill(); g.fillStyle = '#2f6fe4'; g.beginPath(); g.arc(cx, cy, r * 0.08, 0, 7); g.fill(); };
  g.clearRect(0, 0, AW, AH);
  // logo largo sobre azul, con borde amarillo (pórtico, fachada y escenario)
  let [x, y, w, h] = CELL.logo; g.fillStyle = '#0f2140'; g.fillRect(x, y, w, h); g.strokeStyle = '#ffc93c'; g.lineWidth = 12; g.strokeRect(x + 6, y + 6, w - 12, h - 12);
  if (ok(li)) fit(li, x + 40, y + 24, w - 80, h - 48); else { rings(x + 120, y + h / 2, 80); txt('ENERGIMUNDO', x + 590, y + h / 2, 120, '#fff7e6'); }
  // palabra blanca sobre fondo transparente (para el vidrio)
  [x, y, w, h] = CELL.word; txt('ENERGIMUNDO', x + w / 2, y + h / 2 + 4, 82, '#ffffff');
  [x, y, w, h] = CELL.pedal; g.fillStyle = '#ffc420'; g.fillRect(x, y, w, h); txt('ESCENARIO A PEDAL', x + w / 2, y + h / 2 + 2, 40, '#2a1a00');
  // tótem negro con el isotipo
  [x, y, w, h] = CELL.totem; g.fillStyle = '#16161a'; g.fillRect(x, y, w, h); if (ok(ii)) fit(ii, x + 48, y + 12, 160, 150); else rings(x + 128, y + 88, 70); txt('ENERGIMUNDO', x + 128, y + 190, 34, '#ffffff');
  // cartel del Cronomundo (como el de verdad: fondo pizarra, ícono celeste)
  [x, y, w, h] = CELL.crono; g.fillStyle = '#2b2f36'; g.fillRect(x, y, w, h); g.strokeStyle = '#8fe3f0'; g.lineWidth = 5; g.strokeRect(x + 10, y + 10, w - 20, h - 20);
  g.strokeStyle = '#2ed3c6'; g.lineWidth = 5; g.beginPath(); g.arc(x + 128, y + 82, 50, 0, 7); g.stroke(); g.lineWidth = 3;
  for (const k of [0.35, 0.7, 1]) { g.beginPath(); g.ellipse(x + 128, y + 82, 50 * k, 50, 0.5, 0, 7); g.stroke(); }
  g.beginPath(); g.ellipse(x + 128, y + 82, 50, 16, 0.5, 0, 7); g.stroke(); txt('CRONOMUNDO', x + 128, y + 172, 36, '#ffffff');
  // domo
  [x, y, w, h] = CELL.domo; g.fillStyle = '#16161a'; g.fillRect(x, y, w, h); g.strokeStyle = '#d5d8dd'; g.lineWidth = 4;
  g.beginPath(); g.arc(x + 128, y + 130, 80, Math.PI, 0); g.lineTo(x + 48, y + 130); g.stroke();
  for (let i = 1; i < 6; i++) { const a = Math.PI + i * Math.PI / 6; g.beginPath(); g.moveTo(x + 128, y + 130); g.lineTo(x + 128 + Math.cos(a) * 80, y + 130 + Math.sin(a) * 80); g.stroke(); }
  g.beginPath(); g.arc(x + 128, y + 130, 46, Math.PI, 0); g.stroke(); txt('DOMO', x + 128, y + 180, 46, '#ffffff');
  // cafetería
  [x, y, w, h] = CELL.cafe; g.fillStyle = '#1fb5ad'; g.fillRect(x, y, w, h); g.fillStyle = '#fff7e6'; g.fillRect(x + 88, y + 52, 64, 70); g.fillRect(x + 82, y + 118, 92, 10);
  g.strokeStyle = '#fff7e6'; g.lineWidth = 9; g.beginPath(); g.arc(x + 158, y + 86, 18, -1.2, 1.2); g.stroke(); txt('CAFETERÍA', x + 128, y + 180, 40, '#fff7e6');
  // estaciones del sendero: seis energías renovables, cada una con su ícono
  for (const [k, name, col] of STATIONS) {
    [x, y, w, h] = CELL[k]; g.fillStyle = col; g.fillRect(x, y, w, h); g.fillStyle = 'rgba(0,0,0,.18)'; g.fillRect(x, y + h - 62, w, 62);
    const cx = x + 128, cy = y + 92; g.fillStyle = '#ffffff'; g.strokeStyle = '#ffffff'; g.lineCap = 'round'; g.lineJoin = 'round';
    if (k === 'solar') { g.beginPath(); g.arc(cx, cy, 34, 0, 7); g.fill(); g.lineWidth = 10; for (let i = 0; i < 10; i++) { const a = i * Math.PI / 5; g.beginPath(); g.moveTo(cx + Math.cos(a) * 48, cy + Math.sin(a) * 48); g.lineTo(cx + Math.cos(a) * 66, cy + Math.sin(a) * 66); g.stroke(); } }
    if (k === 'eolica') { g.lineWidth = 9; g.beginPath(); g.moveTo(cx, cy - 6); g.lineTo(cx, cy + 74); g.stroke(); g.lineWidth = 14; for (let i = 0; i < 3; i++) { const a = -Math.PI / 2 + i * 2.094; g.beginPath(); g.moveTo(cx, cy - 6); g.lineTo(cx + Math.cos(a) * 62, cy - 6 + Math.sin(a) * 62); g.stroke(); } g.beginPath(); g.arc(cx, cy - 6, 10, 0, 7); g.fill(); }
    if (k === 'hidro') { g.beginPath(); g.moveTo(cx, cy - 70); g.quadraticCurveTo(cx + 62, cy + 6, cx, cy + 62); g.quadraticCurveTo(cx - 62, cy + 6, cx, cy - 70); g.fill(); }
    if (k === 'bio') { g.save(); g.translate(cx, cy); g.rotate(0.7); g.beginPath(); g.ellipse(0, 0, 36, 68, 0, 0, 7); g.fill(); g.strokeStyle = col; g.lineWidth = 7; g.beginPath(); g.moveTo(0, 64); g.lineTo(0, -56); g.stroke(); g.restore(); }
    if (k === 'mareo') { g.lineWidth = 11; for (const dy of [-26, 6, 38]) { g.beginPath(); for (let i = 0; i <= 20; i++) { const xx = cx - 70 + i * 7, yy = cy + dy + Math.sin(i * 0.62) * 12; i ? g.lineTo(xx, yy) : g.moveTo(xx, yy); } g.stroke(); } }
    if (k === 'geo') { g.beginPath(); g.moveTo(cx - 72, cy + 64); g.lineTo(cx - 20, cy - 26); g.lineTo(cx + 20, cy - 26); g.lineTo(cx + 72, cy + 64); g.closePath(); g.fill(); g.fillStyle = col; g.fillRect(cx - 14, cy - 26, 28, 30); g.lineWidth = 8; for (const dx of [-22, 0, 22]) { g.beginPath(); g.moveTo(cx + dx, cy - 38); g.bezierCurveTo(cx + dx - 12, cy - 52, cx + dx + 12, cy - 62, cx + dx, cy - 76); g.stroke(); } }
    txt(name, x + 128, y + h - 31, name.length > 10 ? 30 : 36, '#ffffff');
  }
  // isotipo con fondo transparente (calco grande sobre el vidrio de la entrada)
  [x, y, w, h] = CELL.iso; if (ok(ii)) fit(ii, x + 8, y + 4, w - 16, h - 8); else rings(x + 128, y + 120, 110);
}

// ---------- Letras gigantes: cada letra es un trazo grueso (tramos + uniones redondeadas) ----------
const PI = Math.PI;
const arc = (cx, cy, rx, ry, a0, a1, n = 10) => Array.from({ length: n + 1 }, (_, i) => { const a = a0 + (a1 - a0) * i / n; return [cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]; });
const GLYPH = {
  E: [0.62, [[[0.56, 0.9], [0.1, 0.9], [0.1, 0.1], [0.56, 0.1]], [[0.1, 0.5], [0.48, 0.5]]]],
  N: [0.7, [[[0.1, 0.1], [0.1, 0.9], [0.6, 0.1], [0.6, 0.9]]]],
  R: [0.68, [[[0.1, 0.1], [0.1, 0.9], [0.36, 0.9], ...arc(0.36, 0.7, 0.22, 0.2, PI / 2, -PI / 2), [0.1, 0.5]], [[0.36, 0.5], [0.6, 0.1]]]],
  G: [0.76, [[...arc(0.38, 0.5, 0.28, 0.4, 0.62, 2 * PI, 18), [0.43, 0.5]]]],
  I: [0.2, [[[0.1, 0.1], [0.1, 0.9]]]],
  M: [0.86, [[[0.1, 0.1], [0.1, 0.9], [0.43, 0.36], [0.76, 0.9], [0.76, 0.1]]]],
  U: [0.7, [[[0.1, 0.9], [0.1, 0.4], ...arc(0.35, 0.4, 0.25, 0.3, PI, 2 * PI), [0.6, 0.9]]]],
  D: [0.72, [[[0.32, 0.1], [0.1, 0.1], [0.1, 0.9], [0.32, 0.9], ...arc(0.32, 0.5, 0.3, 0.4, PI / 2, -PI / 2)]]],
  O: [0.78, [arc(0.39, 0.5, 0.29, 0.4, 0, 2 * PI, 22)]]
};
const JOINT = new THREE.CylinderGeometry(1, 1, 1, 10);
function stroke(b, pts, X, Y, z, S, t, d, color) {
  for (let i = 0; i < pts.length; i++) {
    const [u, v] = pts[i], x = X + u * S, y = Y + v * S;
    if (i) { const [u0, v0] = pts[i - 1], x0 = X + u0 * S, y0 = Y + v0 * S, len = Math.hypot(x - x0, y - y0); if (len > 1e-4) b.box((x + x0) / 2, (y + y0) / 2, z, len, t, d, color, 0, 0, Math.atan2(y - y0, x - x0)); }
    b.add(JOINT, color, x, y, z, t / 2, d, t / 2, PI / 2, 0, 0, 0.02);
  }
}
function word(b, text, cx, y, z, S, color) {
  const gap = 0.14, wd = [...text].reduce((s, c) => s + GLYPH[c][0], 0) + gap * (text.length - 1);
  let x = cx - wd * S / 2;
  for (const c of text) { const [gw, lines] = GLYPH[c]; for (const p of lines) stroke(b, p, x, y, z, S, 0.2 * S, 0.34, color); x += (gw + gap) * S; }
  return wd * S;
}

// Bicicleta fija con generador, mirando hacia +x
function bike(b, x, y, z) {
  const fr = LOGO.magenta, dk = 0x26262b, seg = (a, c, r = 0.035) => { const len = Math.hypot(c[0] - a[0], c[1] - a[1]); b.box(x + (a[0] + c[0]) / 2, y + (a[1] + c[1]) / 2, z, len, r * 2, r * 2, fr, 0, 0, Math.atan2(c[1] - a[1], c[0] - a[0])); };
  b.boxB(x, y, z, 1.7, 0.06, 0.56, DARK);
  const wheel = new THREE.TorusGeometry(0.34, 0.04, 5, 16);
  for (const dx of [-0.55, 0.55]) b.add(wheel, dk, x + dx, y + 0.4, z, 1, 1, 1, 0, 0, 0, 0);
  seg([-0.55, 0.4], [0, 0.46]); seg([0, 0.46], [0.55, 0.4]); seg([0, 0.46], [-0.2, 0.98]); seg([-0.2, 0.98], [0.4, 0.98]); seg([0.4, 0.98], [0.55, 0.4]); seg([0.4, 0.98], [0.45, 1.2]);
  b.boxB(x - 0.24, y + 0.98, z, 0.3, 0.07, 0.16, dk); b.box(x + 0.45, y + 1.2, z, 0.05, 0.05, 0.52, dk);
  b.box(x, y + 0.46, z, 0.06, 0.44, 0.05, LOGO.yellow, 0, 0, 0.8);
  b.boxB(x - 0.88, y + 0.06, z, 0.26, 0.26, 0.26, 0x2a4374); b.box(x - 0.88, y + 0.36, z, 0.05, 0.05, 0.05, 0x57e389);
}

export function buildMuseo(w) {
  const b = w.batch, gb = w.glassBatch, R = w.rand, M = w.mats, gy = (x, z) => w.terrainAt(x, z);
  const glow = new Batch(), led = new Batch(), lights = new Batch(), quads = [];
  M.museoWin = new THREE.MeshStandardMaterial({ color: 0x34495e, emissive: 0xfff0c8, emissiveIntensity: 0, roughness: 0.4 });
  M.museoLed = new THREE.MeshBasicMaterial({ vertexColors: true });
  M.museoStage = new THREE.MeshBasicMaterial({ vertexColors: true, color: 0x555555 });
  const quad = (cell, x, y, z, qw, qh, ry) => {
    const g = new THREE.PlaneGeometry(qw, qh), uv = g.attributes.uv, [cx, cy, cw, ch] = CELL[cell];
    for (let i = 0; i < uv.count; i++) { const u = uv.getX(i), v = uv.getY(i); uv.setXY(i, (cx + u * cw) / AW, 1 - (cy + (1 - v) * ch) / AH); }
    g.rotateY(ry); g.translate(x, y, z); quads.push(g);
  };
  const plant = (type, x, z, s = 1) => { w.trees.push({ type, x, z, s, y: w.groundAt(x, z) }); w.addCircle(x, z, 0.4); };

  // ---------- Edificio principal ----------
  {
    const { x0, x1, z0, z1 } = LP.edificio, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, Lx = x1 - x0, D = z1 - z0, y = gy(cx, cz), yb = y + 0.3, H = 3.2;
    b.boxB(cx, y - 0.4, cz, Lx + 0.6, 0.7, D + 0.6, CONC);
    b.boxB(cx, yb, cz, Lx, H, D, MAROON);
    for (let k = 0; k < 5; k++) { const yy = yb + 2.06 + k * 0.22; b.box(cx, yy, z1 + 0.07, Lx + 0.12, 0.12, 0.1, RED); b.box(x0 - 0.07, yy, cz, 0.1, 0.12, D + 0.12, RED); b.box(x1 + 0.07, yy, cz, 0.1, 0.12, D + 0.12, RED); }
    b.boxB(cx, yb + H, cz, Lx + 0.5, 0.3, D + 0.5, DARK); b.boxB(cx, yb + H + 0.3, cz, Lx - 0.2, 0.06, D - 0.2, ROOF);
    for (const [ax, az] of [[43, -81.5], [52.5, -82.2]]) { b.boxB(ax, yb + H + 0.36, az, 1.6, 0.7, 1.1, 0xa9aeb5); b.boxB(ax, yb + H + 1.06, az, 1.3, 0.05, 0.8, 0x8b9097); }
    // ventanal del ala este, con parteluces y luz interior de noche
    gb.box(52.2, yb + 1.25, z1 + 0.07, 7.4, 1.4, 0.04, 0xffffff); glow.box(52.2, yb + 1.25, z1 - 0.04, 7.2, 1.3, 0.04, 0xffffff);
    for (let x = 48.5; x <= 55.9; x += 1.23) b.box(x, yb + 1.25, z1 + 0.09, 0.08, 1.46, 0.08, BLACK);
    b.box(52.2, yb + 0.53, z1 + 0.09, 7.5, 0.08, 0.1, BLACK); b.box(52.2, yb + 1.97, z1 + 0.09, 7.5, 0.08, 0.1, BLACK);
    // cartel con el logo sobre la franja roja
    b.box(52.2, yb + 2.5, z1 + 0.17, 4.5, 1.12, 0.1, DARK); quad('logo', 52.2, yb + 2.5, z1 + 0.23, 4.3, 0.94, 0);
    // paneles negros en el ala oeste y en los costados
    b.box(40.25, yb + 1.0, z1 + 0.07, 2.1, 2.0, 0.08, BLACK); for (const z of [-82.6, -79.2]) { b.box(x0 - 0.06, yb + 1.0, z, 0.08, 2.0, 1.5, BLACK); b.box(x1 + 0.06, yb + 1.0, z, 0.08, 2.0, 1.5, BLACK); }
    b.box(47.5, yb + 1.05, z0 - 0.06, 1.1, 2.1, 0.08, 0x3a3f46);   // puerta de servicio
    // caja de vidrio de la entrada, con el isotipo gigante en el vidrio y las seis luces de colores
    const ex = 44, ez = z1 + 0.85, ew = 4.8, ed = 1.7, eh = 3.0;
    b.boxB(ex, y + 0.24, ez, ew + 0.2, 0.08, ed + 0.1, CONC);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) b.boxB(ex + sx * ew / 2, yb, ez + sz * ed / 2, 0.12, eh, 0.12, BLACK);
    b.boxB(ex, yb + eh - 0.1, ez, ew + 0.16, 0.2, ed + 0.16, BLACK);
    gb.box(ex, yb + eh / 2, ez + ed / 2, ew, eh - 0.1, 0.04, 0xffffff); for (const sx of [-1, 1]) gb.box(ex + sx * ew / 2, yb + eh / 2, ez, 0.04, eh - 0.1, ed, 0xffffff);
    glow.box(ex, yb + 1.4, z1 + 0.05, ew - 0.3, 2.6, 0.04, 0xffffff);
    for (const dx of [-0.66, 0.66]) b.boxB(ex + dx, yb, ez + ed / 2 + 0.02, 0.07, 2.25, 0.07, BLACK); b.box(ex, yb + 2.25, ez + ed / 2 + 0.02, 1.4, 0.07, 0.07, BLACK);
    quad('iso', ex - 1.4, yb + 1.45, ez + ed / 2 + 0.035, 1.8, 1.69, 0); quad('word', ex + 1.15, yb + 2.45, ez + ed / 2 + 0.035, 1.9, 0.29, 0);
    const lc = [LOGO.yellow, LOGO.blue, LOGO.magenta, LOGO.purple, 0x57e389, LOGO.red], disc = new THREE.CylinderGeometry(0.15, 0.15, 0.04, 14);
    lc.forEach((c, i) => led.add(disc, c, ex - 1.1 + i * 0.44, yb + 2.62, ez + ed / 2 - 0.06, 1, 1, 1, PI / 2, 0, 0, 0));
    w.addSolid(x0, x1, z0, z1, yb + H + 0.4); w.addOcc(x0, x1, z0, z1, yb + H + 0.4);
    w.addSolid(ex - ew / 2, ex + ew / 2, z1, z1 + ed, yb + eh);
    w.addInter('museo:entrada', ex, ez + ed / 2 + 1.0, { console: false, y, h: 4.6 });
    for (const x of [39.8, 42.4, 53.4, 56.0]) plant('cipres', x, -86.9, 0.9 + R() * 0.2);   // con un claro al medio para ver las estaciones
  }

  // ---------- Plaza de pedregullo, caminos, bancos, banderas y tótem ----------
  {
    const y = gy(48, -71.5);
    b.boxB(48, y, -71.5, 16, 0.05, 11, GRAVEL);
    for (const [x, z, sx, sz] of [[48, -66, 16.2, 0.22], [40, -71.5, 0.22, 11.2], [56, -71.5, 0.22, 11.2]]) b.boxB(x, y, z, sx, 0.09, sz, CONC);
    b.boxB(44, y, -70.9, 1.8, 0.08, 9.0, PATH);                       // del pórtico a la puerta
    w.road([[44, -54.2], [44, -60], [44, -66.2]], 2.2, PATH);
    w.road([[36.2, -57.5], [40, -57.5], [43.2, -57.6]], 1.6, PATH);  // desde la parada
    w.road([[44.9, -62.5], [48.5, -62.5], [51.4, -62.5]], 1.6, PATH);  // al domo
    w.road([[42.4, -51.2], [44, -53.6]], 1.8, PATH);  // desde el camino de acceso
    for (const [x, z, r] of [[52.2, -67.4, 0], [40.9, -71.2, PI / 2], [50.4, -75.2, 0]]) { b.boxB(x, y, z, r ? 0.45 : 1.6, 0.42, r ? 1.6 : 0.45, CONC); b.boxB(x, y + 0.42, z, r ? 0.5 : 1.7, 0.08, r ? 1.7 : 0.5, C.wood); w.addSolid(x - (r ? 0.25 : 0.85), x + (r ? 0.25 : 0.85), z - (r ? 0.85 : 0.25), z + (r ? 0.85 : 0.25), y + 0.5); }
    flag(w, 53.4, y, -75.9, 1.5, 1.0, 5.6); argFlag(w, 55.1, y, -75.9, 1.5, 1.0, 5.6); w.addCircle(53.4, -75.9, 0.25);
    b.boxB(41.2, y, -66.9, 1.0, 2.0, 0.24, BLACK); quad('totem', 41.2, y + 1.42, -66.76, 0.92, 0.8, 0); quad('totem', 41.2, y + 1.42, -67.04, 0.92, 0.8, PI); w.addSolid(40.7, 41.7, -67.05, -66.75, y + 2);
    for (const [x, z, ry] of [[42.7, -61.2, PI / 2], [42.7, -64.6, PI / 2], [39.3, -73.4, 0], [56.6, -66.6, PI], [37.2, -61.6, 0]]) w.lamp(x, z, ry);
  }

  // ---------- Cronomundo: reloj de sol de acero corten, con el eje paralelo al de la Tierra ----------
  {
    const [x, z] = LP.crono, y = gy(x, z), R0 = 1.45, cy = y + 0.27 + R0, lat = 31.4 * PI / 180;
    b.cyl(x, y, z, 1.85, 1.95, 0.24, CONC, 24); b.add(new THREE.TorusGeometry(1.55, 0.05, 4, 40), CORTEN, x, y + 0.26, z, 1, 1, 1, PI / 2, 0, 0, 0.04);
    b.box(x, y + 0.27, z + 0.2, 0.14, 0.03, 2.6, 0x6e3a22, 0, 0.05);   // escala de fechas sur-norte
    const A = new THREE.Vector3(0, Math.sin(lat), Math.cos(lat)), U = new THREE.Vector3(1, 0, 0), V = new THREE.Vector3().crossVectors(A, U).normalize();
    const tor = new THREE.TorusGeometry(R0, 0.045, 4, 44), q = new THREE.Quaternion(), e = new THREE.Euler(), Zv = new THREE.Vector3(0, 0, 1), Yv = new THREE.Vector3(0, 1, 0);
    const ring = (n, s = 1, off = 0) => { q.setFromUnitVectors(Zv, n.clone().normalize()); e.setFromQuaternion(q); b.add(tor, CORTEN, x + A.x * off, cy + A.y * off, z + A.z * off, s, s, s, e.x, e.y, e.z, 0.06); };
    for (let k = 0; k < 4; k++) { const a = k * PI / 4; ring(U.clone().multiplyScalar(Math.cos(a)).addScaledVector(V, Math.sin(a))); }
    ring(A); const tr = 23.44 * PI / 180; ring(A, Math.cos(tr), R0 * Math.sin(tr)); ring(A, Math.cos(tr), -R0 * Math.sin(tr));
    q.setFromUnitVectors(Yv, A); e.setFromQuaternion(q);
    b.add(new THREE.CylinderGeometry(0.04, 0.04, R0 * 2 + 0.5, 6), CORTEN, x, cy, z, 1, 1, 1, e.x, e.y, e.z);
    const tip = A.clone().multiplyScalar(R0 + 0.32); b.add(new THREE.ConeGeometry(0.17, 0.44, 4), CORTEN, x + tip.x, cy + tip.y, z + tip.z, 1, 1, 0.35, e.x, e.y, e.z);
    const tail = A.clone().multiplyScalar(-R0 - 0.2); b.add(new THREE.BoxGeometry(0.34, 0.3, 0.03), CORTEN, x + tail.x, cy + tail.y, z + tail.z, 1, 1, 1, e.x, e.y, e.z);
    b.cyl(x, y + 0.2, z, 0.08, 0.12, 0.25, CORTEN, 6);
    b.boxB(x - 2.6, y, z + 1.2, 1.1, 1.45, 0.12, 0x23262c); quad('crono', x - 2.6, y + 1.05, z + 1.27, 1.0, 0.875, 0); w.addSolid(x - 3.15, x - 2.05, z + 1.12, z + 1.28, y + 1.5);
    w.addCircle(x, z, 1.9); w.addInter('museo:crono', x, z, { console: false, y, h: 4.7 });
  }

  // ---------- Domo geodésico negro (cine) ----------
  {
    const [x, z] = LP.domo, y = gy(x, z) + 0.12, Rd = 3.3, el = [0, 0.32, 0.64, 0.96, 1.22], n = 15, apex = [0, Rd, 0];
    const P = (i, j) => { const f = el[i], a = (j + (i % 2) * 0.5) * 2 * PI / n; return [Math.cos(f) * Math.cos(a) * Rd, Math.sin(f) * Rd, Math.cos(f) * Math.sin(a) * Rd]; };
    const tris = [];
    for (let i = 0; i < el.length - 1; i++) for (let j = 0; j < n; j++) {
      const a = P(i, j), a2 = P(i, j + 1), c = P(i + 1, j), c2 = P(i + 1, j + 1), up = i % 2 === 0;
      if (up) { tris.push([a, a2, c], [c, a2, c2]); } else { tris.push([a, a2, c2], [a, c2, c]); }
    }
    for (let j = 0; j < n; j++) tris.push([P(el.length - 1, j), P(el.length - 1, j + 1), apex]);
    const sets = [[], []], lines = [];
    tris.forEach((t, k) => { const s = sets[(k * 7 + (k >> 2)) % 2]; for (const p of [t[0], t[2], t[1]]) s.push(...p); for (let m = 0; m < 3; m++) lines.push(...t[m].map(v => v * 1.006), ...t[(m + 1) % 3].map(v => v * 1.006)); });
    sets.forEach((s, k) => { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(s, 3)); g.computeVertexNormals(); b.add(g, k ? 0x36363d : 0x2b2b31, x, y, z, 1, 1, 1, 0, 0, 0, 0.02); });
    const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute(lines, 3));
    const lm = new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0x8b919b })); lm.position.set(x, y, z); w.scene.add(lm);
    // de noche las aristas del domo son tiras LED que cambian de color despacio
    const gris = new THREE.Color(0x8b919b), led = new THREE.Color(); let tt = 0;
    w.updaters.push((dt, st) => { tt += dt; const n = Math.min(1, Math.max(0, (st.night - 0.2) / 0.5)); led.setHSL((tt * 0.035) % 1, 0.85, 0.6); lm.material.color.copy(gris).lerp(led, n); });
    b.cyl(x, y - 0.3, z, Rd + 0.12, Rd + 0.2, 0.42, CONC, 24);
    const vx = x - Rd - 0.25; b.boxB(vx, y - 0.1, z, 1.7, 2.35, 1.9, 0x26262b); b.box(vx - 0.86, y + 0.95, z, 0.04, 1.85, 1.05, 0x0d0d11);
    b.boxB(vx - 0.4, y + 2.25, z, 2.5, 0.08, 2.2, 0x1d1d22); quad('domo', vx - 0.87, y + 2.95, z, 1.1, 0.96, -PI / 2);
    w.addCircle(x, z, Rd + 0.15); w.addSolid(vx - 0.85, vx + 0.85, z - 0.95, z + 0.95, y + 2.4);
    w.addInter('museo:domo', vx - 1.6, z, { console: false, y: y - 0.12, h: 3.9 });
    plant('pino', x + 5, z + 3.8, 0.95); plant('native', x + 5.6, z - 3, 0.9); plant('cipres', x + 5.4, z + 6.4, 1);
  }

  // ---------- Pórtico de entrada y boletería ----------
  {
    const [x, z] = LP.portal, y = gy(x, z), hw = 1.75, hd = 0.6, H = 3.4;
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) { b.boxB(x + sx * hw, y, z + sz * hd, 0.13, H, 0.13, WHITE); w.addCircle(x + sx * hw, z + sz * hd, 0.2); }
    for (const sz of [-1, 1]) b.box(x, y + H, z + sz * hd, hw * 2 + 0.13, 0.13, 0.13, WHITE); for (const sx of [-1, 1]) b.box(x + sx * hw, y + H, z, 0.13, 0.13, hd * 2, WHITE);
    for (const sx of [-1, 1]) { b.boxB(x + sx * 2.6, y, z, 0.1, 2.7, 0.1, WHITE); b.box(x + sx * 2.15, y + 2.7, z, 0.95, 0.1, 0.1, WHITE); }
    b.box(x, y + H + 0.62, z, 4.5, 1.12, 0.14, DARK); quad('logo', x, y + H + 0.62, z + 0.08, 4.3, 0.94, 0); quad('logo', x, y + H + 0.62, z - 0.08, 4.3, 0.94, PI);
    const kx = x + 3.6, kz = z - 0.4; b.boxB(kx, y, kz, 1.3, 2.3, 1.1, BLACK); b.boxB(kx, y + 2.3, kz, 1.5, 0.1, 1.3, DARK); glow.box(kx, y + 1.35, kz + 0.56, 0.9, 0.6, 0.03, 0xffffff);
    quad('totem', kx, y + 0.75, kz + 0.565, 0.7, 0.61, 0); w.addSolid(kx - 0.65, kx + 0.65, kz - 0.55, kz + 0.55, y + 2.4);
  }

  // ---------- Letras gigantes ENERGIMUNDO, mirando al sur (hacia la ciudad) ----------
  {
    const x = 53, z = -54.6, y = gy(x, z), S = 1.25;
    b.boxB(x, y - 0.2, z, 11.4, 0.3, 0.9, CONC);
    const wd = word(b, 'ENERGIMUNDO', x, y + 0.1, z, S, SILVER);
    w.addSolid(x - wd / 2 - 0.2, x + wd / 2 + 0.2, z - 0.45, z + 0.45, y + 1.4);
    plant('cipres', 60.6, -56.4, 1.05); plant('cipres', 61.4, -59.8, 0.95);
  }

  // ---------- Estacionamiento con su entrada desde la ruta ----------
  {
    w.road([[27.2, -52.4], [29.4, -57.6], [31.8, -62.2], [34.6, -63.4]], 3.0, C.asphalt);
    const y = gy(36.7, -67.8); b.boxB(36.7, y, -67.8, 6.2, 0.06, 10.8, C.asphalt);
    for (let z = -63; z >= -72.7; z -= 2.4) b.boxB(35.4, y + 0.06, z, 3.4, 0.02, 0.1, 0xf2efe8);
    const cars = [[-64.2, LOGO.red], [-66.6, 0x2ed3c6], [-71.4, 0xf4f1ea]];
    for (const [z, col] of cars) {
      const x = 35.4; b.boxB(x, y + 0.2, z, 3.6, 0.58, 1.7, col); b.boxB(x + 0.2, y + 0.78, z, 1.9, 0.52, 1.46, 0x22303c); b.boxB(x + 0.2, y + 1.3, z, 1.96, 0.07, 1.5, col);
      for (const dx of [-1.15, 1.15]) for (const dz of [-0.8, 0.8]) b.cyl(x + dx, y + 0.32, z + dz, 0.32, 0.32, 0.22, 0x1c1e22, 10, PI / 2);
      w.addSolid(x - 1.8, x + 1.8, z - 0.85, z + 0.85, y + 1.4);
    }
    for (const [x, z] of [[34.0, -74.8], [33.2, -60.6]]) plant('pino', x, z, 0.9 + R() * 0.15);
  }

  // ---------- Cafetería con mesas y sombrillas (plaza gastronómica) ----------
  {
    const x = 37.6, z = -80, y = gy(x, z);
    b.boxB(x, y, z, 2.4, 2.2, 2.0, LOGO.teal); b.boxB(x, y + 2.2, z, 2.6, 0.12, 2.2, 0xf2efe8);
    b.box(x, y + 1.15, z + 1.01, 1.6, 0.7, 0.04, 0x1d2a33); glow.box(x, y + 1.15, z + 0.98, 1.5, 0.6, 0.03, 0xffffff); b.boxB(x, y + 0.9, z + 1.18, 1.9, 0.07, 0.36, 0xf2efe8);
    b.box(x, y + 2.0, z + 1.42, 2.6, 0.06, 0.9, LOGO.yellow, 0, 0.32); quad('cafe', x, y + 2.75, z + 1.0, 1.0, 0.875, 0);
    w.addSolid(x - 1.2, x + 1.2, z - 1, z + 1, y + 2.4);
    const um = [LOGO.magenta, LOGO.green, LOGO.orange];
    [[36.6, -76.7], [38.7, -76.1], [37.2, -74.4]].forEach(([tx, tz], i) => {
      const ty = gy(tx, tz); b.cyl(tx, ty, tz, 0.05, 0.08, 0.72, 0x3a3f46, 6); b.cyl(tx, ty + 0.72, tz, 0.48, 0.48, 0.05, 0xf2efe8, 12);
      b.cyl(tx, ty + 0.72, tz, 0.03, 0.03, 1.5, 0xe8e8e8, 5); b.cyl(tx, ty + 2.1, tz, 0.02, 1.0, 0.36, um[i], 8);
      for (const a of [0.4, 0.4 + PI]) b.boxB(tx + Math.cos(a) * 0.75, ty, tz + Math.sin(a) * 0.75, 0.38, 0.45, 0.38, 0x3a3f46);
      w.addCircle(tx, tz, 0.55);
    });
    for (const [px, pz] of [[35.3, -78.4], [37.4, -86.8], [36.4, -83.6]]) plant('pino', px, pz, 0.85 + R() * 0.2);
  }

  // ---------- Escenario a pedal y bicicletas generadoras ----------
  {
    const { x0, x1, z0, z1 } = LP.escenario, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, y = gy(cx, cz), top = y + 0.96;
    b.boxB(cx, y - 0.3, cz, x1 - x0, 1.2, z1 - z0, CONC); b.boxB(cx, y + 0.9, cz, x1 - x0, 0.06, z1 - z0, C.wood);
    const sz = -72.625;   // escalones al medio, entre las bicis (alineados con la grilla de caminos)
    for (let k = 0; k < 3; k++) { const sx = x0 - 0.15 - k * 0.3; b.boxB(sx, y, sz, 0.3, 0.3 * (3 - k), 1.2, CONC); w.addPlatform(sx - 0.15, sx + 0.15, sz - 0.6, sz + 0.6, y + 0.3 * (3 - k)); }
    w.addPlatform(x0, x1, z0, z1, top);
    w.addSolid(x0 - 0.05, x0 + 0.05, z0, sz - 0.68, top); w.addSolid(x0 - 0.05, x0 + 0.05, sz + 0.68, z1, top); w.addSolid(x0, x1, z0 - 0.05, z0 + 0.05, top); w.addSolid(x0, x1, z1 - 0.05, z1 + 0.05, top);
    b.boxB(x1 - 0.15, top, cz, 0.3, 3.0, z1 - z0, DARK); quad('logo', x1 - 0.32, top + 1.9, cz, 4.4, 0.96, -PI / 2); w.addSolid(x1 - 0.3, x1, z0, z1, top + 3);
    for (const z of [z0 + 0.15, z1 - 0.15]) { b.boxB(x0 + 0.15, top, z, 0.16, 3.4, 0.16, 0x9aa0aa); w.addCircle(x0 + 0.15, z, 0.2); }
    b.box(cx + 0.1, top + 3.5, cz, x1 - x0 + 0.8, 0.16, z1 - z0 + 0.6, DARK, 0, 0, -0.08);
    b.box(x0 + 0.15, top + 3.25, cz, 0.18, 0.18, z1 - z0, 0x9aa0aa);
    b.box(x0 - 0.05, top + 3.95, cz, 0.08, 0.5, 4.3, DARK); quad('pedal', x0 - 0.1, top + 3.95, cz, 4.0, 1.0, -PI / 2);
    for (let k = 0; k < 6; k++) { const z = z0 + 0.8 + k * (z1 - z0 - 1.6) / 5; lights.box(x0 + 0.15, top + 3.02, z, 0.28, 0.3, 0.28, [LOGO.magenta, LOGO.yellow, LOGO.teal, LOGO.green, LOGO.orange, LOGO.purple][k]); }
    for (const z of [z0 + 0.6, z1 - 0.6]) { b.boxB(x0 + 0.5, top, z, 0.6, 1.1, 0.6, BLACK); b.cyl(x0 + 0.19, top + 0.75, z, 0.17, 0.17, 0.03, 0x555a63, 10, 0, 0, PI / 2); w.addSolid(x0 + 0.2, x0 + 0.8, z - 0.3, z + 0.3, top + 1.1); }
    const by = gy(57.2, -72.8); for (const z of [-75.5, -74.1, -71.15, -69.75]) { bike(b, 57.2, by, z); b.box(58.4, by + 0.05, z, 0.5, 0.04, 0.06, BLACK); w.addSolid(56.35, 58.05, z - 0.25, z + 0.25, by + 1.2); }
    for (const [za, zb] of [[-75.5, -74.1], [-71.15, -69.75]]) b.box(58.65, by + 0.05, (za + zb) / 2, 0.06, 0.04, zb - za, BLACK);   // cables a la consola del escenario
    w.addInter('museo:bici', 56.4, -72.625, { console: false, y: by, h: 3.2 });
    // conos de luz para el show (aditivos, apagados hasta que alguien pedalea)
    const cone = new THREE.ConeGeometry(0.9, 3.0, 12, 1, true); cone.translate(0, -1.5, 0);
    const beams = [];
    for (let k = 0; k < 3; k++) {
      const m = new THREE.Mesh(cone, new THREE.MeshBasicMaterial({ color: [LOGO.magenta, LOGO.teal, LOGO.yellow][k], transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false }));
      m.position.set(x0 + 0.15, top + 2.9, z0 + 1.6 + k * 2.15); m.rotation.z = -0.35; m.visible = false; w.scene.add(m); beams.push(m);
    }
    w.museoBeams = beams;
    for (const [px, pz] of [[60.6, -66.4], [61.4, -80.4], [58.4, -84.6]]) plant(px > 61 ? 'native' : 'pino', px, pz, 0.9 + R() * 0.15);
  }

  // ---------- Sendero con las seis estaciones de energía ----------
  {
    w.road([[38.6, -91], [48, -91.3], [58.4, -91]], 1.6, TRAIL);
    w.road([[57.6, -77.4], [57.9, -84], [58.3, -90.4]], 1.4, TRAIL);
    w.road([[37.7, -81.6], [38.3, -86.4], [38.8, -90.4]], 1.4, TRAIL);
    STATIONS.forEach(([k, , col], i) => {
      const x = 40.6 + i * 3.4, z = -92.7, y = gy(x, z);
      b.boxB(x, y, z, 0.16, 1.25, 0.16, DARK); b.box(x, y + 1.7, z, 1.12, 1.1, 0.1, new THREE.Color(col).getHex());
      quad(k, x, y + 1.7, z + 0.06, 1.02, 0.96, 0); w.addSolid(x - 0.56, x + 0.56, z - 0.1, z + 0.1, y + 2.3);
    });
    for (let x = 39.4; x <= 58.4; x += 2.7) plant('cipres', x, -95.4 + (R() - 0.5) * 0.4, 0.9 + R() * 0.25);
    for (const [px, pz] of [[37.6, -93.6], [60.2, -88.6], [60.8, -94.2]]) plant('pino', px, pz, 0.95);
    for (const [x, z] of [[44.5, -90.0], [52.5, -90.0]]) w.lamp(x, z, PI);
  }

  // ---------- Mallas propias: carteles, luces interiores, luces de colores y del escenario ----------
  const tex = canvasTex(AW, AH, drawAtlas); tex.anisotropy = 4;
  const sm = new THREE.Mesh(mergeGeometries(quads), new THREE.MeshStandardMaterial({ map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.32, roughness: 0.8, alphaTest: 0.35 }));
  sm.receiveShadow = true; w.scene.add(sm); M.museoSigns = sm.material;
  const s = w.scene, gm = glow.mesh(M.museoWin); if (gm) s.add(gm);
  const lm = led.mesh(M.museoLed); if (lm) s.add(lm);
  const st = lights.mesh(M.museoStage); if (st) s.add(st);
}

// ================= Vida del museo: interacciones, función del domo y show del escenario =================
const LABEL = { entrada: 'Entrar a Energimundo', crono: 'Leer la hora en el Cronomundo', domo: 'Ver la función del domo', bici: 'Pedalear para el escenario' };
// Función del domo: la historia del universo contada como si fuera un año (calendario cósmico) y, al final, el cuidado del ambiente
const SCENES = [
  { t: 'Si toda la historia del universo entrara en un año, ¿qué pasaría cada mes? Mirá para arriba…' },
  { t: '1 de enero: el Big Bang. Todo lo que existe empieza a expandirse.' },
  { t: 'En los primeros meses se forman las galaxias, como nuestra Vía Láctea, con miles de millones de estrellas.' },
  { t: 'Entre fines de agosto y principios de septiembre nacen el Sol y la Tierra.' },
  { t: 'A fines de septiembre aparecen los primeros seres vivos, diminutos, en el mar.' },
  { t: 'El 25 de diciembre llegan los dinosaurios. El 30 se extinguen.' },
  { t: 'El 31 de diciembre, en los últimos minutos del año, aparecemos los seres humanos.' },
  { t: 'Y en el último segundo empezamos a quemar petróleo y carbón: el aire se calienta y el clima cambia.' },
  { t: 'Nos toca cuidar la casa común: energía del sol, del viento y del agua, y usarla con cabeza. ¡Gracias por venir al domo!' }
];
const SCENE_T = 4.4;

export class Museo {
  constructor(g) {
    this.g = g; this.t = 0; this.show = 0; this.note = 0; this.dT = -1; this.stars = [];
    for (let i = 0; i < 140; i++) this.stars.push([Math.random() * 6.283, Math.sqrt(Math.random()), 0.6 + Math.random() * 1.6, Math.random() * 6.283]);
    const c = $('domoClose'); if (c) c.onclick = () => g.extras.close();
  }
  describe(id) { const [k, s] = id.split(':'); if (k !== 'museo') return null; return { state: 'ok', label: LABEL[s] }; }
  interact(id) {
    const [k, s] = id.split(':'); if (k !== 'museo') return false;
    if (s === 'entrada') this.entrada(); else if (s === 'crono') this.crono(); else if (s === 'domo') this.openDomo(); else if (s === 'bici') this.bici();
    return true;
  }
  entrada() {
    const g = this.g, say = t => g.ui.dialog([L('capi', t)]);
    g.extras.choose('Energimundo', 'Museo de energías renovables de Salto Grande. ¿Qué querés saber?', [
      ['¿Qué hay adentro?', 'Las salas del museo'], ['¿Cuánto sale la entrada?', 'Precio y duración'], ['¿De quién es Energimundo?', 'Dónde queda'], ['Nada más, ¡gracias!', '']
    ], i => {
      if (i === 0) say('Salas interactivas sobre las energías renovables: maquetas de la represa, pantallas gigantes, juegos y realidad aumentada. Afuera hay un sendero, el domo, el Cronomundo y el escenario a pedal.');
      if (i === 1) say('¡La entrada es gratis! El recorrido lleva por lo menos una hora, adentro y afuera.');
      if (i === 2) say('Es de Salto Grande, la represa que comparten Uruguay y Argentina sobre el río Uruguay. El museo está del lado uruguayo, al lado de la represa.');
    });
  }
  crono() {
    const g = this.g, h = g.grid.hour, night = g.world.night > 0.55;
    if (night) return g.ui.dialog([L('capi', 'De noche no hay sombra: el Cronomundo descansa hasta que salga el sol. Es un reloj de sol de verdad.')]);
    let m = Math.round(h * 12) * 5; const hh = Math.floor(m / 60) % 24, mm = m % 60;
    const ROM = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
    g.ui.dialog([L('capi', `La sombra del eje cae sobre el ${ROM[hh % 12]} y marca las ${hh}:${String(mm).padStart(2, '0')}, hora solar. Las marcas van de 5 en 5 minutos.`),
      L('capi', 'Para la hora del reloj hay que sumarle unos minutos según el día: el cartel trae una gráfica con la cuenta. ¡Y la sombra sobre la escala inclinada marca también la fecha!')]);
    g.audio.ok();
  }
  bici() {
    const g = this.g;
    g.mg.start('bici', { title: 'Escenario a pedal' }, ok => {
      if (!ok) return;
      this.show = 24; this.beat = 0; g.audio.fanfare(); g.capi.celebrate && g.capi.celebrate(2);
      const x = 60.6 + MX, z = -72.8 + MZ; g.fx.sparks(x, g.world.groundAt(x, z) + 4, z, 40, 0xffc93c);
      g.ui.note('¡Con tu pedaleo el escenario tiene luz y sonido! En Energimundo el público le pone las piernas al espectáculo.', 6);
    });
  }
  openDomo() {
    const g = this.g; if (g.locked) return;
    g.extras.open = 'domo'; $('domo').classList.remove('hidden'); this.dT = 0; this.sc = -1; g.audio.click();
    g.audio.tone(196, 1.6, 'sine', 0.05); g.audio.tone(294, 1.6, 'sine', 0.04, 0.4);
  }
  update(dt, st) {
    this.t += dt; const g = this.g, w = g.world, M = w.mats, night = st.night;
    if (M.museoWin) M.museoWin.emissiveIntensity = night * 0.95;
    if (M.museoSigns) M.museoSigns.emissiveIntensity = 0.3 + night * 0.35;
    if (M.museoLed) M.museoLed.color.setScalar(0.75 + 0.25 * night + 0.06 * Math.sin(this.t * 3));
    // show del escenario después de pedalear
    if (this.show > 0) {
      this.show -= dt; const on = this.show > 0, k = Math.min(1, this.show / 2);
      M.museoStage.color.setScalar(on ? 0.55 + 0.45 * Math.abs(Math.sin(this.t * 6)) : 0.33);
      (w.museoBeams || []).forEach((m, i) => { m.visible = on; m.material.opacity = on ? k * (0.32 + 0.14 * Math.sin(this.t * 4 + i * 2)) : 0; m.rotation.z = -0.35 + Math.sin(this.t * 1.3 + i) * 0.25; m.rotation.x = Math.sin(this.t * 0.9 + i * 1.7) * 0.3; });
      this.beat -= dt;
      if (on && this.beat <= 0 && !g.locked) { const sc = [60, 62, 64, 67, 69, 72], n = sc[Math.floor(Math.random() * sc.length)]; g.audio.tone(440 * Math.pow(2, (n - 69) / 12), 0.18, 'triangle', 0.05); if (Math.random() < 0.5) g.audio.tone(110, 0.12, 'sine', 0.06); this.beat = 0.25; }
    } else if (M.museoStage) M.museoStage.color.setScalar(0.33 + 0.25 * night);
    // función del domo
    if (this.dT >= 0) {
      const el = $('domo'); if (!el || el.classList.contains('hidden')) { this.endDomo(false); return; }
      this.dT += dt; const i = Math.floor(this.dT / SCENE_T);
      if (i >= SCENES.length) { g.extras.close(); this.endDomo(true); return; }
      if (i !== this.sc) { this.sc = i; $('domoTx').textContent = SCENES[i].t; if (i) g.audio.tone([196, 262, 330, 392, 349, 294, 247, 523][i - 1] || 262, 0.9, 'sine', 0.05); }
      this.drawDomo(i, (this.dT % SCENE_T) / SCENE_T);
    }
  }
  endDomo(full) {
    this.dT = -1; const g = this.g;
    if (full) g.ui.note('¡Qué función! En el domo de Energimundo se proyecta un video sobre la historia del universo y el cuidado del ambiente.', 6);
  }
  drawDomo(i, u) {
    const cv = $('domoCv'); if (!cv) return; const g = cv.getContext('2d'), W = cv.width, c = W / 2, R = c - 4, t = this.dT;
    const fade = Math.min(1, u * 6, (1 - u) * 6), P = Math.PI, T = (s, x, y, px, col = '#fff7e6') => { g.fillStyle = col; g.font = `${px}px "Lilita One","Arial Black",sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(s, x, y); };
    g.save(); g.clearRect(0, 0, W, W); g.beginPath(); g.arc(c, c, R, 0, 7); g.clip();
    const sky = [['#050b1e', '#14244d'], ['#000000', '#1a0f2e'], ['#02040f', '#121a3a'], ['#04060f', '#161a33'], ['#0b3a5a', '#2d8fb5'], ['#3a5a2a', '#9cc77a'], ['#1d3b5c', '#d98b4a'], ['#3a2a28', '#8a5a4a'], ['#0b2b55', '#5fb7ea']][i];
    const gr = g.createRadialGradient(c, c, 0, c, c, R); gr.addColorStop(0, sky[1]); gr.addColorStop(1, sky[0]); g.fillStyle = gr; g.fillRect(0, 0, W, W);
    g.globalAlpha = fade;
    const star = (a, k = 1) => { for (const [ang, r, s, ph] of this.stars) { const q = ang + t * 0.05 * k; g.fillStyle = `rgba(255,255,255,${a * (0.5 + 0.5 * Math.sin(t * 2 + ph))})`; g.fillRect(c + Math.cos(q) * r * R - s / 2, c + Math.sin(q) * r * R - s / 2, s, s); } };
    const cal = (day, mon) => { g.fillStyle = 'rgba(255,255,255,.92)'; g.fillRect(c - 46, 40, 92, 84); g.fillStyle = '#e5484d'; g.fillRect(c - 46, 40, 92, 24); T(mon, c, 53, 16, '#ffffff'); T(day, c, 96, 40, '#1b2b4a'); };
    if (i === 0) { star(1); for (let m = 0; m < 12; m++) { const a = -P / 2 + m * P / 6 + t * 0.1, on = m <= Math.floor(u * 12); g.fillStyle = on ? '#ffd23f' : 'rgba(255,255,255,.25)'; g.beginPath(); g.arc(c + Math.cos(a) * 150, c + Math.sin(a) * 150, 13, 0, 7); g.fill(); } T('EL UNIVERSO', c, c - 18, 34); T('EN UN AÑO', c, c + 22, 34, '#ffd23f'); }
    if (i === 1) { const r = 10 + u * 230; for (let k = 6; k >= 0; k--) { const rr = r * (0.35 + k * 0.11); g.fillStyle = `rgba(${255},${200 - k * 20},${120 + k * 15},${0.12 + (6 - k) * 0.05})`; g.beginPath(); g.arc(c, c, rr, 0, 7); g.fill(); } g.fillStyle = '#ffffff'; g.beginPath(); g.arc(c, c, 14 + 20 * (1 - u), 0, 7); g.fill(); star(u, 3); cal('1', 'ENERO'); }
    if (i === 2) { star(0.8); g.save(); g.translate(c, c + 20); g.rotate(t * 0.25); for (let arm = 0; arm < 2; arm++) for (let k = 0; k < 220; k++) { const a = arm * P + k * 0.05, r = 12 + k * 0.95, x = Math.cos(a) * r, y = Math.sin(a) * r * 0.62; g.fillStyle = `rgba(${200 + (k % 3) * 20},${190 + (k % 5) * 10},255,${0.95 - k / 300})`; const s2 = 3 + (k % 4 === 0 ? 2 : 0); g.fillRect(x + Math.sin(k * 7) * 9, y + Math.cos(k * 5) * 7, s2, s2); } g.fillStyle = 'rgba(255,240,200,.9)'; g.beginPath(); g.ellipse(0, 0, 30, 19, 0, 0, 7); g.fill(); g.restore(); T('VÍA LÁCTEA', c, c + 190, 24, '#cfe0ff'); }
    if (i === 3) { star(0.6); g.fillStyle = '#ffd23f'; g.beginPath(); g.arc(c, c, 40, 0, 7); g.fill(); g.strokeStyle = 'rgba(255,255,255,.18)'; g.lineWidth = 2; for (const r of [80, 120, 170]) { g.beginPath(); g.arc(c, c, r, 0, 7); g.stroke(); } [[80, '#c9a37a', 1.6, 6], [120, '#2f86c8', 1.0, 11], [170, '#d0603a', 0.7, 8]].forEach(([r, col, sp, sz], k) => { const a = t * sp + k * 2; g.fillStyle = col; g.beginPath(); g.arc(c + Math.cos(a) * r, c + Math.sin(a) * r, sz, 0, 7); g.fill(); if (k === 1) { g.fillStyle = '#57e389'; g.beginPath(); g.arc(c + Math.cos(a) * r - 3, c + Math.sin(a) * r - 2, 4, 0, 7); g.fill(); } }); cal('1', 'SEPTIEMBRE'); }
    if (i === 4) { for (let k = 0; k < 7; k++) { g.strokeStyle = `rgba(255,255,255,${0.08 + k * 0.02})`; g.lineWidth = 3; g.beginPath(); for (let x = 0; x <= W; x += 10) { const y = 120 + k * 50 + Math.sin(x * 0.02 + t * 1.5 + k) * 10; x ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke(); }
      for (let k = 0; k < 14; k++) { const x = c + Math.cos(k * 2.3 + t * 0.3) * (60 + (k * 37) % 150), y = c + Math.sin(k * 1.7 + t * 0.4) * (50 + (k * 29) % 140), r = 7 + (k % 4) * 3; g.fillStyle = 'rgba(140,230,160,.55)'; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); g.fillStyle = 'rgba(30,110,60,.8)'; g.beginPath(); g.arc(x + 1, y - 1, r * 0.35, 0, 7); g.fill(); } cal('25', 'SEPTIEMBRE'); }
    if (i === 5) { g.fillStyle = '#3f6b2f'; g.beginPath(); g.arc(c, c + 330, 300, 0, 7); g.fill(); const x0 = c - 120 + u * 120, y0 = c + 70;
      g.fillStyle = '#2d4a22'; g.beginPath(); g.ellipse(x0, y0, 70, 34, 0, 0, 7); g.fill(); g.beginPath(); g.moveTo(x0 + 50, y0 - 14); g.quadraticCurveTo(x0 + 110, y0 - 110, x0 + 140, y0 - 120); g.lineTo(x0 + 150, y0 - 104); g.quadraticCurveTo(x0 + 110, y0 - 80, x0 + 70, y0 + 4); g.fill(); g.beginPath(); g.moveTo(x0 - 60, y0); g.quadraticCurveTo(x0 - 130, y0 - 10, x0 - 160, y0 + 30); g.lineTo(x0 - 60, y0 + 20); g.fill(); for (const dx of [-38, -12, 18, 42]) g.fillRect(x0 + dx, y0 + 20, 12, 38);
      if (u > 0.55) { const k = (u - 0.55) / 0.45, mx = c + 200 - k * 260, my = 40 + k * 220; g.strokeStyle = 'rgba(255,190,80,.8)'; g.lineWidth = 10; g.beginPath(); g.moveTo(mx + 60, my - 60); g.lineTo(mx, my); g.stroke(); g.fillStyle = '#ffdd88'; g.beginPath(); g.arc(mx, my, 12, 0, 7); g.fill(); } cal(u > 0.6 ? '30' : '25', 'DICIEMBRE'); }
    if (i === 6) { g.fillStyle = '#2d3a28'; g.fillRect(0, c + 90, W, W); for (let k = 0; k < 4; k++) { const x = c - 120 + k * 70, y = c + 90; g.fillStyle = '#1b1410'; g.beginPath(); g.arc(x, y - 66, 12, 0, 7); g.fill(); g.fillRect(x - 9, y - 54, 18, 40); g.fillRect(x - 8, y - 14, 6, 26); g.fillRect(x + 2, y - 14, 6, 26); }
      const fx = c + 150, fy = c + 90; for (let k = 0; k < 5; k++) { g.fillStyle = ['#ffd23f', '#ff8a2a', '#e5484d'][k % 3]; g.beginPath(); g.moveTo(fx - 22 + k * 9, fy); g.quadraticCurveTo(fx - 18 + k * 9, fy - 40 - 20 * Math.abs(Math.sin(t * 6 + k)), fx - 8 + k * 9, fy); g.fill(); } T('23:48', c, 92, 34, '#ffd23f'); T('31 DE DICIEMBRE', c, 128, 18); }
    if (i === 7) { g.fillStyle = '#4a4040'; g.fillRect(0, c + 80, W, W); for (let k = 0; k < 4; k++) { const x = c - 150 + k * 95; g.fillStyle = '#2a2224'; g.fillRect(x, c + 10, 60, 70); g.fillRect(x + 36, c - 50, 14, 60); for (let p = 0; p < 6; p++) { const s = (t * 0.6 + p * 0.33 + k * 0.2) % 2, r = 10 + s * 22; g.fillStyle = `rgba(90,90,95,${0.55 - s * 0.25})`; g.beginPath(); g.arc(x + 43 + s * 30, c - 60 - s * 90, r, 0, 7); g.fill(); } }
      g.fillStyle = `rgba(229,72,77,${0.25 + 0.2 * Math.sin(t * 2)})`; g.beginPath(); g.arc(c, c, R, 0, 7); g.fill(); T('23:59:59', c, 92, 34, '#ffd23f'); }
    if (i === 8) { g.fillStyle = '#2f86c8'; g.beginPath(); g.arc(c, c + 30, 120, 0, 7); g.fill(); g.fillStyle = '#57b85a'; for (const [x, y, rx, ry] of [[-40, -30, 46, 30], [40, 20, 38, 50], [-20, 60, 30, 18]]) { g.beginPath(); g.ellipse(c + x, c + 30 + y, rx, ry, 0.4, 0, 7); g.fill(); }
      g.strokeStyle = '#ffffff'; g.lineWidth = 5; g.beginPath(); g.moveTo(c + 70, c - 70); g.lineTo(c + 70, c - 140); g.stroke(); g.lineWidth = 7; for (let k = 0; k < 3; k++) { const a = t * 2.5 + k * 2.094; g.beginPath(); g.moveTo(c + 70, c - 140); g.lineTo(c + 70 + Math.cos(a) * 34, c - 140 + Math.sin(a) * 34); g.stroke(); }
      g.fillStyle = '#ffd23f'; g.beginPath(); g.arc(c - 110, c - 120, 26, 0, 7); g.fill(); const cols = ['#6a2c91', '#e6007e', '#1fb5ad', '#8cc63f', '#ffc93c']; cols.forEach((cl, k) => { g.strokeStyle = cl; g.lineWidth = 6; g.beginPath(); g.arc(c, c + 30, 150 + k * 9, -P * 0.95 + k * 0.2, -P * 0.95 + k * 0.2 + P * 0.9 * Math.min(1, u * 2)); g.stroke(); }); T('CUIDEMOS LA CASA COMÚN', c, c + 200, 22); }
    g.restore(); g.globalAlpha = 1;
    // borde de la cúpula con los gajos del domo
    g.strokeStyle = 'rgba(255,255,255,.12)'; g.lineWidth = 1.5; for (let k = 0; k < 15; k++) { const a = k * 2 * P / 15; g.beginPath(); g.moveTo(c, c); g.lineTo(c + Math.cos(a) * R, c + Math.sin(a) * R); g.stroke(); }
    for (const r of [0.33, 0.62, 0.86]) { g.beginPath(); g.arc(c, c, R * r, 0, 7); g.stroke(); }
    g.strokeStyle = '#26262b'; g.lineWidth = 8; g.beginPath(); g.arc(c, c, R, 0, 7); g.stroke();
  }
}
