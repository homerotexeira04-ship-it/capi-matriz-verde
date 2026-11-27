// Mapa grande de la maqueta: se abre tocando el minimapa o con la tecla N. Muestra los lugares con su nombre, Capi,
// el objetivo de la misión, el favor en curso, las paradas y los vehículos. Al tocar un lugar se ve qué hay y cómo llegar:
// caminando, en ómnibus eléctrico, en el ómnibus internacional o en la lancha. Se puede acercar con la rueda o con dos dedos.
import { B, ZONES, POS } from './terrain.js';
import { mapColor } from './ui.js';
import { INTL_STOPS } from './intl.js';
import { clamp } from './util.js';

const $ = id => document.getElementById(id);
const WW = B.maxX - B.minX, DD = B.maxZ - B.minZ, AR = -152;   // al oeste de x = -152 queda Argentina
const sideOf = x => (x < AR ? 'ar' : 'uy');
const zc = id => ZONES.find(z => z.id === id) || {};
// Lugares: nombre, nombre corto para el mapa, posición del cartel, parada de ómnibus más cercana y una línea de qué hay
const PLACES = [
  { id: 'ciudad', name: 'Ciudad de Salto', x: -40, z: 62, stop: 0, pri: 1, d: 'El centro: la Plaza Matriz con la catedral, el bulevar y la Terminal del Bulevar, de donde salen los ómnibus eléctricos y el internacional.' },
  { id: 'teatro', name: 'Teatro Larrañaga', short: 'Teatro', x: -4, z: 34, stop: 1, pri: 2, d: 'Se inauguró en 1882 y lleva el nombre de Dámaso Antonio Larrañaga. Es Monumento Histórico Nacional.' },
  { id: 'artigas', name: 'Plaza Artigas', x: -4, z: 48, stop: 0, pri: 2, d: 'Con el monumento ecuestre a José Gervasio Artigas, obra de Edmundo Prati, inaugurado en 1940. Al pie está la placa con su historia.' },
  { id: 'puerto', name: 'Puerto de Salto', short: 'Puerto', x: -100, z: 54, stop: 7, pri: 1, d: 'Muelle, faro, puerto deportivo, la feria de la mañana y la lancha a Concordia.' },
  { id: 'norte', name: 'Barrio Norte y Costanera', short: 'Barrio Norte', x: -50, z: -2, stop: 6, pri: 1, d: 'Hospital, escuela, mercado, bicisenda y cancha de fútbol, entre la ciudad y el arroyo.' },
  { id: 'sur', name: 'Barrio Sur', x: -26, z: 120, stop: 0, pri: 1, d: 'Casitas del sur del bulevar, donde se cambian las lamparitas viejas por LED y tres autos eléctricos cargan en casa.' },
  { id: 'jardin', name: 'Barrio Jardín', x: 22, z: -4, stop: 8, pri: 1, d: 'Casas con paneles solares en el techo, autos eléctricos y una huerta del barrio.' },
  { id: 'museo', name: 'Energimundo', x: -66, z: -66, stop: 9, pri: 1, col: '#e6007e', d: 'El museo de las energías renovables: Cronomundo, domo geodésico, escenario a pedal y el sendero de las seis energías.' },
  { id: 'hidro', name: 'Represa de Salto Grande', short: 'Represa', x: -124, z: -92, stop: 2, pri: 1, both: true, d: 'Binacional: la comparten Uruguay y Argentina, que se reparten su energía. Por arriba pasan la ruta y el tren.' },
  { id: 'lago', name: 'Lago de Salto Grande', short: 'Lago', x: -176, z: -132, water: true, pri: 1, d: 'El embalse que forma la represa: unos 783 km² y 140 km de largo.' },
  { id: 'solar', name: 'Parque Solar y Baterías', short: 'Parque Solar', x: 16, z: -96, stop: 4, pri: 1, d: 'Paneles que siguen al sol y un banco de baterías que guarda la energía del mediodía para la noche.' },
  { id: 'eolica', name: 'Parque Eólico de las Cuchillas', short: 'Parque Eólico', x: 80, z: -24, stop: 3, pri: 1, d: 'Molinos en las lomas, donde el viento corre parejo y sin obstáculos.' },
  { id: 'biomasa', name: 'Planta de Biomasa', short: 'Biomasa', x: 62, z: 70, stop: 5, pri: 1, d: 'Usa los restos de los montes de eucalipto para dar energía firme, aunque no haya viento ni sol.' },
  { id: 'hidrogeno', name: 'Planta de Hidrógeno Verde', short: 'Hidrógeno', x: 64, z: 92, stop: 5, pri: 2, d: 'Un electrolizador separa el agua en hidrógeno y oxígeno con el viento que sobra de noche. La hidrolinera carga un camión forestal.' },
  { id: 'termas', name: 'Termas', x: 92, z: -62, stop: 4, pri: 2, d: 'Agua caliente del Acuífero Guaraní: calor de la Tierra para bañarse todo el año.' },
  { id: 'campo', name: 'Campo y naranjales', x: 44, z: 164, stop: null, pri: 1, d: 'Chacras, un tambo, un packing de citrus y naranjales: Salto es tierra de citrus.' },
  { id: 'concordia', name: 'Concordia (Argentina)', short: 'Concordia', x: -194, z: 30, stop: null, pri: 1, col: '#9be7ff', d: 'Capital Nacional del Citrus, en la otra orilla. Se llega en la lancha o en el ómnibus internacional.' },
  { id: 'estacion', name: 'Estación del ferrocarril', short: 'Estación', x: -24, z: 238, stop: null, pri: 1, d: 'De acá sale el tren de la Gira por el Uruguay, hacia las represas del río Negro, Fray Bentos, el Lunarejo y Cabo Polonio.' },
  { id: 'arerungua', name: 'Potreros de Arerunguá', short: 'Pradera', x: 214, z: 150, stop: null, pri: 1, d: 'Pradera natural con venados de campo, ñandúes y mulitas, un arroyo con monte de quebrada, la Estancia La Cuchilla y Ana, la bióloga de las cámaras trampa.' },
  { id: 'haedo', name: 'Cuchilla de Haedo', short: 'Cerros chatos', x: 214, z: -86, stop: null, pri: 1, d: 'Cerros chatos de basalto, con laderas de piedra y un mirador en la cima del más alto.' },
  { id: 'dayman', name: 'Río Daymán', x: 90, z: 318, water: true, pri: 2, river: true, d: 'Corre de este a oeste y desemboca en el río Uruguay, al sur de Salto. Lo cruza el puente de la ruta 3.' },
  { id: 'rio', name: 'Río Uruguay', x: -126, z: 112, water: true, pri: 1, river: true, d: 'Nace en Brasil y separa Uruguay de Argentina. Más abajo de la represa corre libre frente a Salto y Concordia.' }
].map(p => Object.assign({ col: zc(p.id).color || '#ffd166' }, p));

export class Mapa {
  constructor(game) {
    this.g = game; this.cv = $('bmCv'); this.ctx = this.cv.getContext('2d'); this.sel = null; this.view = { z: 1, cx: -50, cz: 30 }; this.ptr = new Map(); this.t = 0;
    $('mini').addEventListener('click', () => this.open()); $('mini').style.cursor = 'pointer'; $('bMap').onclick = () => this.open();
    $('bmClose').onclick = () => this.close(); $('bmIn').onclick = () => this.zoomBy(1.4); $('bmOut').onclick = () => this.zoomBy(1 / 1.4);
    const list = $('bmList'); PLACES.forEach(p => { const b = document.createElement('button'); b.type = 'button'; b.className = 'bmChip'; b.textContent = p.short || p.name; b.style.setProperty('--c', p.col); b.onclick = () => this.select(p, true); list.appendChild(b); p.chip = b; });
    const cv = this.cv;
    cv.addEventListener('pointerdown', e => { cv.setPointerCapture(e.pointerId); this.ptr.set(e.pointerId, { x: e.clientX, y: e.clientY, x0: e.clientX, y0: e.clientY }); if (this.ptr.size === 2) this.pinch = this.pdist(); this.moved = 0; });
    cv.addEventListener('pointermove', e => {
      const p = this.ptr.get(e.pointerId); if (!p) return; const dx = e.clientX - p.x, dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY;
      if (this.ptr.size === 2) { const d = this.pdist(); if (this.pinch) this.zoomBy(d / this.pinch, false); this.pinch = d; this.moved = 99; return; }
      this.moved += Math.abs(dx) + Math.abs(dy); if (this.moved > 6) { const s = this.scale(); this.view.cx -= dx / s; this.view.cz -= dy / s; this.clampView(); }
    });
    const up = e => { const p = this.ptr.get(e.pointerId); this.ptr.delete(e.pointerId); if (this.ptr.size < 2) this.pinch = 0; if (p && this.moved <= 6 && this.ptr.size === 0) { const r = cv.getBoundingClientRect(); this.tap(e.clientX - r.left, e.clientY - r.top); } };
    cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', e => { this.ptr.delete(e.pointerId); this.pinch = 0; });
    cv.addEventListener('wheel', e => { e.preventDefault(); const r = cv.getBoundingClientRect(); this.zoomBy(e.deltaY < 0 ? 1.18 : 1 / 1.18, true, e.clientX - r.left, e.clientY - r.top); }, { passive: false });
    window.addEventListener('resize', () => { if (this.isOpen) this.fit(); });
    setTimeout(() => this.build(), 2500);   // el mapa se dibuja de a poco, sin trabar el juego
  }
  pdist() { const [a, b] = [...this.ptr.values()]; return Math.hypot(a.x - b.x, a.y - b.y) || 1; }
  get isOpen() { return this.g.extras.open === 'bigmap'; }
  // ---------- Imagen base: relieve, agua, calles, manzanas, casas y árboles ----------
  build(sync) {
    if (this.base) return;
    const RS = 512;
    if (!this.raster) { this.raster = document.createElement('canvas'); this.raster.width = this.raster.height = RS; this.rx = this.raster.getContext('2d'); this.row = 0; }
    const img = this.rx.createImageData(RS, 1);
    const rows = sync ? RS : 24;
    for (let n = 0; n < rows && this.row < RS; n++, this.row++) {
      const j = this.row; for (let i = 0; i < RS; i++) { const c = mapColor(B.minX + (i + 0.5) / RS * WW, B.minZ + (j + 0.5) / RS * DD), k = i * 4; img.data[k] = c[0]; img.data[k + 1] = c[1]; img.data[k + 2] = c[2]; img.data[k + 3] = 255; }
      this.rx.putImageData(img, 0, j);
    }
    if (this.row < RS) { if (!sync) setTimeout(() => this.build(), 30); return; }
    this.compose();
  }
  compose() {
    const S = 1024, k = S / WW, c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d'), w = this.g.world;
    const X = v => (v - B.minX) * k, Z = v => (v - B.minZ) * k;
    x.imageSmoothingEnabled = true; x.drawImage(this.raster, 0, 0, S, S);
    // calles fuera de la ciudad
    x.lineCap = 'round'; x.lineJoin = 'round';
    for (const l of w.roads) { x.strokeStyle = '#7d818a'; x.lineWidth = 3.2 * k; x.beginPath(); l.forEach((p, i) => i ? x.lineTo(X(p[0]), Z(p[1])) : x.moveTo(X(p[0]), Z(p[1]))); x.stroke(); }
    // manzanas, plazas y teatro
    const xs = [-68, -52, -36, -20, -4, 12], zs = [20, 34, 48, 62, 85];
    for (let i = 0; i < 6; i++) for (let j = 0; j < 5; j++) {
      if ((i === 1 || i === 2) && (j === 1 || j === 2)) continue; const cx = xs[i], cz = zs[j];
      x.fillStyle = '#d8d0bf'; x.fillRect(X(cx - 6.4), Z(cz - 5.4), 12.8 * k, 10.8 * k);
      x.fillStyle = i === 4 && j === 2 ? '#7cc06a' : i === 4 && j === 1 ? '#e2a77e' : i === 3 && j === 3 ? '#c06a42' : '#efe9dc'; const m = i === 4 && j === 2 ? 0.6 : 1.2; x.fillRect(X(cx - 6.4 + m), Z(cz - 5.4 + m), (12.8 - 2 * m) * k, (10.8 - 2 * m) * k);
    }
    x.fillStyle = '#d8d0bf'; x.fillRect(X(-58.4), Z(27.6), 28.8 * k, 26.8 * k); x.fillStyle = '#7cc06a'; x.fillRect(X(-57.6), Z(28.4), 27.2 * k, 25.2 * k); x.fillStyle = '#58b9e6'; x.beginPath(); x.arc(X(POS.plaza[0]), Z(POS.plaza[1]), 3.2 * k, 0, 7); x.fill();
    x.fillStyle = '#b39e86'; x.fillRect(X(-4 - 2.4), Z(48 - 2.2), 4.8 * k, 4.4 * k);   // monumento a Artigas
    x.fillStyle = '#c8bfae'; x.fillRect(X(-83), Z(11), 4.8 * k, 83 * k);   // costanera
    // casas y árboles
    for (const h of w.houses) { x.save(); x.translate(X(h.x), Z(h.z)); x.rotate(-(h.ry || 0)); x.fillStyle = '#' + (h.rc || 0xb5533c).toString(16).padStart(6, '0'); x.fillRect(-h.w / 2 * k, -h.d / 2 * k, h.w * k, h.d * k); x.restore(); }
    for (const t of w.trees) { const r = (t.type === 'bush' ? 0.8 : t.type === 'ombu' ? 2.2 : 1.25) * (t.s || 1) * k; x.fillStyle = t.type === 'naranjo' ? '#2f7d32' : t.type === 'palm' || t.type === 'butia' ? '#5aa04a' : t.type === 'euca' ? '#4d8f76' : t.type === 'jaca' ? '#8f7fd6' : '#3f8a3a'; x.beginPath(); x.arc(X(t.x), Z(t.z), r, 0, 7); x.fill(); if (t.type === 'naranjo') { x.fillStyle = '#ff9f2a'; x.beginPath(); x.arc(X(t.x) + r * 0.3, Z(t.z) - r * 0.2, r * 0.32, 0, 7); x.fill(); } }
    // represa, puentes, muelles, museo, paneles y molinos
    const Dm = POS.dam, Mu = POS.muelle, O = POS.orilla, Br = POS.bridge;
    x.fillStyle = '#a49e93'; x.fillRect(X(Dm.x0), Z(Dm.z0), (Dm.x1 - Dm.x0) * k, (Dm.z1 - Dm.z0) * k); x.fillStyle = '#6a6f77'; x.fillRect(X(Dm.x0), Z(-101.7), (Dm.x1 - Dm.x0) * k, 2.6 * k);
    x.fillStyle = '#6a6f77'; x.fillRect(X(Br.x - 1.8), Z(Br.z0), 3.6 * k, (Br.z1 - Br.z0) * k);
    x.fillStyle = '#b08a5a'; x.fillRect(X(-96), Z(38), 12.6 * k, 22 * k); x.fillRect(X(Mu.x1), Z(Mu.z - 1.7), (Mu.x0 - Mu.x1) * k, 3.4 * k); x.fillRect(X(O.x1), Z(O.z - 1.7), (O.x0 - O.x1) * k, 3.4 * k);
    for (const z of [69, 77.6]) x.fillRect(X(-104), Z(z - 1.2), 20 * k, 2.4 * k);
    x.fillStyle = '#f4f1ea'; x.beginPath(); x.arc(X(POS.faro[0]), Z(POS.faro[1]), 1.6 * k, 0, 7); x.fill(); x.fillStyle = '#e5484d'; x.beginPath(); x.arc(X(POS.faro[0]), Z(POS.faro[1]), 0.8 * k, 0, 7); x.fill();
    { const E = POS.edificio; x.fillStyle = '#b9b2a6'; x.fillRect(X(-74), Z(-75), 16 * k, 11 * k); x.fillStyle = '#8b2f2a'; x.fillRect(X(E.x0), Z(E.z0), (E.x1 - E.x0) * k, (E.z1 - E.z0) * k); x.fillStyle = '#2d2d33'; x.beginPath(); x.arc(X(POS.domo[0]), Z(POS.domo[1]), 3.3 * k, 0, 7); x.fill(); }
    x.fillStyle = '#1f3f9a'; for (const [px, pz] of POS.solar) for (let r = 0; r < 4; r++) x.fillRect(X(px - 6), Z(pz - 5.5 + r * 3), 12 * k, 1.8 * k);
    for (const [px, pz] of POS.windT) { x.fillStyle = '#ffffff'; x.beginPath(); x.arc(X(px), Z(pz), 1.6 * k, 0, 7); x.fill(); x.strokeStyle = '#ffffff'; x.lineWidth = 0.7 * k; for (let b = 0; b < 3; b++) { const a = b * 2.094 - 1.57; x.beginPath(); x.moveTo(X(px), Z(pz)); x.lineTo(X(px) + Math.cos(a) * 5 * k, Z(pz) + Math.sin(a) * 5 * k); x.stroke(); } }
    this.base = c; this.k = k;
  }
  // ---------- Vista ----------
  fit() {
    const r = this.cv.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
    this.W = Math.max(50, r.width); this.H = Math.max(50, r.height); this.cv.width = Math.round(this.W * dpr); this.cv.height = Math.round(this.H * dpr); this.dpr = dpr; this.clampView();
  }
  scale() { return Math.min(this.W, this.H) / WW * this.view.z; }
  clampView() {
    const s = this.scale(), hw = this.W / 2 / s, hh = this.H / 2 / s, V = this.view;
    V.cx = hw * 2 >= WW ? (B.minX + B.maxX) / 2 : clamp(V.cx, B.minX + hw, B.maxX - hw); V.cz = hh * 2 >= DD ? (B.minZ + B.maxZ) / 2 : clamp(V.cz, B.minZ + hh, B.maxZ - hh);
  }
  zoomBy(f, anchor = true, px, py) {
    const V = this.view, s0 = this.scale(); px = px == null ? this.W / 2 : px; py = py == null ? this.H / 2 : py;
    const wx = V.cx + (px - this.W / 2) / s0, wz = V.cz + (py - this.H / 2) / s0;
    V.z = clamp(V.z * f, 1, 4.5); const s1 = this.scale();
    if (anchor) { V.cx = wx - (px - this.W / 2) / s1; V.cz = wz - (py - this.H / 2) / s1; }
    this.clampView();
  }
  sx(x) { return (x - this.view.cx) * this.scale() + this.W / 2; }
  sy(z) { return (z - this.view.cz) * this.scale() + this.H / 2; }
  // ---------- Abrir y cerrar ----------
  open() {
    const g = this.g; if (g.mode !== 'play' || g.locked) return;
    if (!this.base) { this.build(true); }
    g.extras.open = 'bigmap'; $('bigmap').classList.remove('hidden'); g.audio.click(); g.capi.goto = null;
    this.fit(); const c = g.capi.pos; this.view.z = Math.max(this.view.z, Math.min(this.W, this.H) < 480 ? 1.6 : 1); this.view.cx = c.x; this.view.cz = c.z; this.clampView();
    if (!this.sel) this.info(); this.loop();
  }
  close() { if (this.isOpen) { $('bigmap').classList.add('hidden'); this.g.extras.open = null; } }
  toggle() { if (this.isOpen) this.close(); else this.open(); }
  loop() { if (!this.isOpen) return; this.draw(); requestAnimationFrame(() => this.loop()); }
  // ---------- Dibujo ----------
  draw() {
    const g = this.g, x = this.ctx, dpr = this.dpr, s = this.scale(), t = (this.t = performance.now() / 1000), w = g.world;
    x.setTransform(dpr, 0, 0, dpr, 0, 0); x.fillStyle = '#0b1830'; x.fillRect(0, 0, this.W, this.H);
    if (!this.base) { x.fillStyle = '#fff7e6'; x.font = '800 16px Nunito,sans-serif'; x.textAlign = 'center'; x.fillText('Dibujando el mapa…', this.W / 2, this.H / 2); return; }
    x.imageSmoothingEnabled = true; x.drawImage(this.base, this.sx(B.minX), this.sy(B.minZ), WW * s, DD * s);
    const P = (px, pz) => [this.sx(px), this.sy(pz)];
    // vehículos: ómnibus eléctricos, el internacional y la lancha
    for (const b of g.actors.buses) if (b.state !== 'parked') this.vehicle(x, ...P(b.x, b.z), b.h, 8.2 * s, 2.5 * s, '#35b3e8');
    if (g.intl) this.vehicle(x, ...P(g.intl.x, g.intl.z), g.intl.hh, 11.2 * s, 2.6 * s, '#0b3d91', '#75aadb');
    if (g.urbano && g.urbano.lancha && g.urbano.lancha.visible !== false) { const L = g.urbano.lancha.position; this.vehicle(x, ...P(L.x, L.z), g.urbano.lancha.rotation.y, 6.6 * s, 2.6 * s, '#f4f1ea', '#1d6fb8'); }
    // paradas, muelles de la lancha y del internacional
    if (g.grid.buses) for (const st of POS.stops) { const [a, b] = P(st[0], st[1]); this.badge(x, a, b, '#35b3e8', 'P'); }
    for (const k of ['salto', 'concordia']) { const p = INTL_STOPS[k], [a, b] = P(p.x, p.z); this.badge(x, a, b, '#0b3d91', 'I', '#75aadb'); }
    for (const [px, pz] of [[POS.muelle.x1 + 1, POS.muelle.z], [POS.orilla.x0 - 1, POS.orilla.z]]) { const [a, b] = P(px, pz); this.badge(x, a, b, '#1d6fb8', '⚓'); }
    // favor en curso y objetivos de la misión
    for (const f of g.social.favorTargets()) { const [a, b] = P(f.x, f.z); this.heart(x, a, b, 1 + 0.12 * Math.sin(t * 5)); }
    for (const it of w.interList) if (it.target) { const [a, b] = P(it.x, it.z), k = (t * 1.2) % 1; x.strokeStyle = 'rgba(255,210,63,' + (1 - k) + ')'; x.lineWidth = 3; x.beginPath(); x.arc(a, b, 8 + k * 16, 0, 7); x.stroke(); x.fillStyle = '#ffd23f'; x.strokeStyle = '#0f2140'; x.lineWidth = 2.5; x.beginPath(); x.arc(a, b, 7, 0, 7); x.fill(); x.stroke(); }
    // lugares
    // (los carteles que se pisarían con otro ya dibujado no se muestran: primero el elegido, después por importancia)
    x.textAlign = 'center'; x.textBaseline = 'middle'; for (const p of PLACES) p.shown = false; const used = [], order = PLACES.slice().sort((a, b) => (b === this.sel) - (a === this.sel) || a.pri - b.pri);
    for (const p of order) {
      if (p.pri > 1 && this.view.z < 1.7 && p !== this.sel) continue;
      const [a, b] = P(p.x, p.z), sel = p === this.sel, txt = this.view.z < 1.5 || Math.min(this.W, this.H) < 480 ? (p.short || p.name) : p.name;
      x.font = (p.river ? 'italic 800 ' : '800 ') + (sel ? 15 : 13) + 'px Nunito,sans-serif';
      const rw = x.measureText(txt).width + 18, rh = sel ? 26 : 22, box = [a - rw / 2 - 2, b - rh / 2 - 2, a + rw / 2 + 2, b + rh / 2 + 2];
      if (!sel && used.some(u => box[0] < u[2] && box[2] > u[0] && box[1] < u[3] && box[3] > u[1])) continue; used.push(box); p.shown = true;
      x.font = (p.river ? 'italic 800 ' : '800 ') + (sel ? 15 : 13) + 'px Nunito,sans-serif';
      if (p.water) { x.fillStyle = 'rgba(255,255,255,.9)'; x.strokeStyle = 'rgba(15,33,64,.7)'; x.lineWidth = 3; x.strokeText(txt, a, b); x.fillText(txt, a, b); if (sel) { x.strokeStyle = '#ffd23f'; x.lineWidth = 2; x.strokeRect(a - x.measureText(txt).width / 2 - 6, b - 12, x.measureText(txt).width + 12, 24); } continue; }
      const tw = x.measureText(txt).width + 18, th = sel ? 26 : 22;
      x.fillStyle = sel ? 'rgba(255,210,63,.96)' : 'rgba(11,26,51,.88)'; x.strokeStyle = sel ? '#0f2140' : p.col; x.lineWidth = 2; this.rr(x, a - tw / 2, b - th / 2, tw, th, th / 2); x.fill(); x.stroke();
      x.fillStyle = sel ? '#0f2140' : '#fff7e6'; x.fillText(txt, a, b + 1);
    }
    // punto elegido fuera de los lugares
    if (this.pin) { const [a, b] = P(this.pin.x, this.pin.z); x.fillStyle = '#e6007e'; x.strokeStyle = '#ffffff'; x.lineWidth = 2.5; x.beginPath(); x.moveTo(a, b); x.arc(a, b - 16, 8, Math.PI * 0.75, Math.PI * 0.25); x.closePath(); x.fill(); x.stroke(); x.fillStyle = '#fff'; x.beginPath(); x.arc(a, b - 16, 3, 0, 7); x.fill(); }
    // Capi
    const c = g.capi.pos, [ca, cb] = P(c.x, c.z); x.save(); x.translate(ca, cb); x.fillStyle = 'rgba(255,210,63,.25)'; x.beginPath(); x.arc(0, 0, 18 + 3 * Math.sin(t * 4), 0, 7); x.fill();
    x.rotate(Math.PI - g.capi.heading); x.fillStyle = '#fff7e6'; x.strokeStyle = '#0f2140'; x.lineWidth = 3.5; x.beginPath(); x.moveTo(0, -14); x.lineTo(10, 11); x.lineTo(0, 5); x.lineTo(-10, 11); x.closePath(); x.stroke(); x.fill(); x.restore();
    // norte y escala
    x.fillStyle = '#0f2140'; x.beginPath(); x.arc(this.W - 26, 26, 17, 0, 7); x.fill(); x.fillStyle = '#ffc93c'; x.font = '20px "Lilita One","Arial Black",sans-serif'; x.fillText('N', this.W - 26, 27);
    const m = s * 50 > 140 ? 25 : s * 50 < 50 ? 100 : 50; x.fillStyle = 'rgba(11,26,51,.85)'; this.rr(x, 10, this.H - 32, m * s + 64, 22, 8); x.fill(); x.fillStyle = '#fff7e6'; x.fillRect(18, this.H - 22, m * s, 3); x.font = '800 12px Nunito,sans-serif'; x.textAlign = 'left'; x.fillText(m + ' m', 24 + m * s, this.H - 20);
  }
  rr(x, a, b, w, h, r) { x.beginPath(); x.moveTo(a + r, b); x.arcTo(a + w, b, a + w, b + h, r); x.arcTo(a + w, b + h, a, b + h, r); x.arcTo(a, b + h, a, b, r); x.arcTo(a, b, a + w, b, r); x.closePath(); }
  vehicle(x, a, b, h, L, Wd, col, stripe) { x.save(); x.translate(a, b); x.rotate(-h); x.fillStyle = col; x.strokeStyle = '#0f2140'; x.lineWidth = 1.5; x.fillRect(-Wd / 2, -L / 2, Wd, L); x.strokeRect(-Wd / 2, -L / 2, Wd, L); if (stripe) { x.fillStyle = stripe; x.fillRect(-Wd / 2, -L * 0.1, Wd, L * 0.2); } x.restore(); }
  badge(x, a, b, col, ch, ring) { x.fillStyle = col; x.strokeStyle = ring || '#ffffff'; x.lineWidth = 2; this.rr(x, a - 8, b - 8, 16, 16, 4); x.fill(); x.stroke(); x.fillStyle = '#ffffff'; x.font = '900 10px Nunito,sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(ch, a, b + 0.5); }
  heart(x, a, b, k) { x.save(); x.translate(a, b - 4); x.scale(k, k); x.fillStyle = '#e6007e'; x.strokeStyle = '#ffffff'; x.lineWidth = 2; x.beginPath(); x.moveTo(0, 8); x.bezierCurveTo(-12, -2, -6, -12, 0, -5); x.bezierCurveTo(6, -12, 12, -2, 0, 8); x.fill(); x.stroke(); x.restore(); }
  // ---------- Elegir un lugar o un punto ----------
  tap(px, py) {
    let best = null, bd = 30;
    for (const p of PLACES) { if (p.pri > 1 && this.view.z < 1.7) continue; const d = Math.hypot(this.sx(p.x) - px, this.sy(p.z) - py); if (d < bd) { bd = d; best = p; } }
    if (best && best.shown !== false) return this.select(best);
    const s = this.scale(), wx = this.view.cx + (px - this.W / 2) / s, wz = this.view.cz + (py - this.H / 2) / s;
    if (wx < B.minX || wx > B.maxX || wz < B.minZ || wz > B.maxZ) return;
    this.sel = null; this.pin = { x: wx, z: wz }; this.info(); this.g.audio.click();
  }
  select(p, center) {
    this.sel = p; this.pin = null; PLACES.forEach(q => q.chip.classList.toggle('on', q === p)); this.g.audio.click();
    if (center) { this.view.cx = p.x; this.view.cz = p.z; this.clampView(); }
    this.info();
  }
  info() {
    const g = this.g, box = $('bmInfo'), c = g.capi.pos, here = sideOf(c.x); box.textContent = '';
    const h = document.createElement('h3'), d = document.createElement('p'), acts = document.createElement('div'); acts.className = 'bmActs';
    const btn = (label, fn, cls = '') => { const b = document.createElement('button'); b.type = 'button'; b.className = 'btn ' + cls; b.innerHTML = label; b.onclick = fn; acts.appendChild(b); return b; };
    const target = this.sel || this.pin;
    if (!target) { h.textContent = 'Mapa de la maqueta'; d.textContent = 'Tocá un lugar para ver qué hay y cómo llegar. Arrastrá para moverte y usá la rueda, dos dedos o los botones + y − para acercar.'; box.append(h, d); return; }
    const p = this.sel, x = target.x, z = target.z, w = g.world, wet = p ? !!p.water : w.waterAt(x, z) > w.groundAt(x, z) + 0.3;
    const there = p && p.both ? here : sideOf(x), dist = Math.round(Math.hypot(x - c.x, z - c.z));
    h.textContent = p ? p.name : 'Punto elegido'; d.textContent = p ? p.d : wet ? 'Ahí hay agua. Para cruzar el río están la lancha, el ómnibus internacional y el puente de la represa.' : `Un lugar a ${dist} m de Capi, en ${there === 'ar' ? 'Argentina' : 'Uruguay'}.`;
    box.append(h, d);
    if (!wet && there === here) btn(`Caminar hasta ahí <small>${dist} m</small>`, () => this.go('walk', x, z));
    if (!wet && there === here && p && p.stop != null && g.grid.buses && here === 'uy') btn(`Ómnibus eléctrico <small>parada ${POS.stops[p.stop][2]}</small>`, () => this.go('bus', p.stop), 'ghost');
    if (there !== here && !wet) {
      btn(`Ómnibus internacional <small>por arriba de la represa</small>`, () => this.go('intl', here === 'uy' ? 0 : 1));
      btn(`Lancha <small>cruza el río en un rato</small>`, () => this.go('lancha', here === 'uy'), 'ghost');
    }
    if (p && p.stop != null && !g.grid.buses && here === 'uy' && there === 'uy') { const n = document.createElement('p'); n.className = 'bmNote'; n.textContent = 'Los ómnibus eléctricos salen cuando la terminal tiene potencia para cargarlos.'; box.append(n); }
    box.append(acts);
  }
  go(kind, a, b) {
    const g = this.g; this.close();
    if (kind === 'walk') { g.capi.navigate(a, b, 1.4); g.ringAt(a, b); g.ui.note('Capi va caminando. Si querés frenar, movelo con las flechas o tocá el piso.', 3.5); }
    if (kind === 'bus') { g.extras.from = -1; g.extras.travel(a); }
    if (kind === 'intl') g.intl.go(a);
    if (kind === 'lancha') g.urbano.lanchaGo(a);
  }
  key(code) { if (code === 'Equal' || code === 'NumpadAdd') this.zoomBy(1.4); if (code === 'Minus' || code === 'NumpadSubtract') this.zoomBy(1 / 1.4); }
}
