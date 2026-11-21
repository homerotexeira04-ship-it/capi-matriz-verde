// La segunda transición energética: llevar la electricidad renovable al transporte. Autos eléctricos que cargan en
// casa (programados para la madrugada, el horario valle de UTE, de 0 a 7) y una planta de hidrógeno verde junto a la
// biomasa, con su hidrolinera y un camión forestal a hidrógeno (como el proyecto Kahirós de Fray Bentos).
// Acá están las construcciones, sus animaciones y los dos minijuegos de la misión.
import * as THREE from 'three';
import { GAMES, txt, rr, W, H } from './minigames.js';
import { C } from './world.js';
import { sign, transformer } from './sectors.js';
import { clamp, damp } from './util.js';

const NUN = 'Nunito,sans-serif';
export const H2P = { x: 64, z: 86 };   // planta de hidrógeno verde (al sur de la biomasa, sobre terreno aplanado)
// casas del Barrio Sur con cargador domiciliario: [x, z de la casa, lado del garaje (-1 oeste, 1 este)]
export const EVH = [[-20.0, 106.1, -1], [-36.4, 122.2, 1], [-28.1, 130.0, 1]];
const EV_COL = [0xe6007e, 0x2f6fe4, 0xf2f2f2];
// sin árboles encima de la planta ni en las entradas de los autos
export const CLEAR6 = [[50, 78, 77, 96]].concat(EVH.map(([x, z, s]) => [x + s * 4 - 1.6, x + s * 4 + 1.6, z - 3, z + 3]));

export function buildTransicion(w) {
  const b = w.batch, leds = [];
  const ledMat = () => new THREE.MeshStandardMaterial({ color: 0x14202c, emissive: 0x000000, emissiveIntensity: 1.8 });
  // ---------- autos eléctricos con cargador en casa ----------
  EVH.forEach(([hx, hz, side], i) => {
    const h = w.houses.find(q => Math.abs(q.x - hx) < 1.5 && Math.abs(q.z - hz) < 1.5) || { x: hx, z: hz, w: 4.8, d: 5.2 };
    const cx = h.x + side * (h.w / 2 + 1.55), cz = h.z + 0.2, y = w.groundAt(cx, cz), col = EV_COL[i];
    b.boxB(cx, y, cz, 2.3, 0.05, 5.0, 0x9a978f);   // entrada de cemento
    b.boxB(cx, y + 0.24, cz, 1.7, 0.56, 3.7, col); b.boxB(cx, y + 0.16, cz, 1.74, 0.14, 3.74, 0x2a2e34);
    b.boxB(cx, y + 0.8, cz - 0.15, 1.46, 0.5, 1.9, 0x22303c); b.boxB(cx, y + 1.3, cz - 0.15, 1.5, 0.07, 1.96, col);
    for (const sx of [-0.8, 0.8]) for (const sz of [-1.15, 1.15]) b.cyl(cx + sx, y + 0.3, cz + sz, 0.3, 0.3, 0.2, 0x1c1e22, 10, 0, 0, Math.PI / 2);
    b.boxB(cx - 0.55, y + 0.55, cz + 1.86, 0.36, 0.12, 0.04, 0xbfe9ff); b.boxB(cx + 0.55, y + 0.55, cz + 1.86, 0.36, 0.12, 0.04, 0xbfe9ff);   // faros LED, sin parrilla
    // cargador de pared y cable hasta el auto
    const wx = h.x + side * (h.w / 2 + 0.1), wz = h.z - 1.3, wy = w.groundAt(wx, wz);
    b.box(wx, wy + 1.25, wz, 0.16, 0.7, 0.5, 0xf4f6f8); b.box(wx + side * 0.07, wy + 1.36, wz, 0.04, 0.08, 0.3, 0x22303c);
    const ex = cx - side * 0.86, ez = cz - 1.3;
    b.box((wx + ex) / 2, wy + 0.95, (wz + ez) / 2, Math.abs(ex - wx) + 0.05, 0.05, 0.05, 0x1c1e22); b.box(wx + side * 0.05, wy + 1.0, wz, 0.05, 0.3, 0.05, 0x1c1e22);
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.12, 0.12), ledMat()); m.position.set(wx + side * 0.09, wy + 1.52, wz); w.scene.add(m); leds.push(m);
    w.addSolid(cx - 0.9, cx + 0.9, cz - 1.9, cz + 1.9);
    w.addInter('ev:' + i, cx, h.z + h.d / 2 + 1.1, { y: w.groundAt(cx, h.z + h.d / 2 + 1.1), ry: 0, h: 3.0 });
  });
  // ---------- planta de hidrógeno verde ----------
  const { x: px, z: pz } = H2P, y = w.groundAt(px, pz);
  b.boxB(px, y, pz, 26, 0.08, 15, 0xbdb6a2);
  // electrolizador en contenedor, con su respiradero de oxígeno
  const ex = px - 6, ez = pz - 3.8;
  b.boxB(ex, y + 0.08, ez, 7.2, 2.7, 2.6, 0xf5f3ee); b.boxB(ex, y + 1.5, ez, 7.24, 0.45, 2.64, 0x57b36a); b.boxB(ex, y + 2.78, ez, 7.3, 0.12, 2.7, 0xdad4c6);
  for (let k = -2; k <= 2; k++) b.box(ex + k * 1.3, y + 0.9, ez + 1.31, 0.06, 1.5, 0.04, 0xbdb8ae);
  b.cyl(ex + 2.6, y + 2.9, ez - 0.5, 0.16, 0.16, 1.4, C.steel, 8); b.cyl(ex - 2.4, y + 2.9, ez - 0.5, 0.12, 0.12, 0.9, C.steel, 8);
  w.addSolid(ex - 3.6, ex + 3.6, ez - 1.3, ez + 1.3); w.addOcc(ex - 3.6, ex + 3.6, ez - 1.3, ez + 1.3, y + 3);
  transformer(w, ex - 6, y, ez, 0.7);
  // compresor y tanques de hidrógeno a presión
  b.boxB(px + 0.5, y + 0.08, ez, 2.2, 1.9, 2.2, 0x8c949c); b.boxB(px + 0.5, y + 1.98, ez, 2.3, 0.1, 2.3, 0x6f777f);
  for (let k = 0; k < 3; k++) {
    const tz = pz - 5.2 + k * 1.75;
    b.cyl(px + 7, y + 1.05, tz, 0.72, 0.72, 6.2, 0xf4f6f8, 14, 0, 0, Math.PI / 2);
    for (const dx of [-2.2, 2.2]) b.boxB(px + 7 + dx, y + 0.08, tz, 0.3, 0.45, 1.3, C.steelD);
  }
  b.box(px + 7, y + 2.0, pz - 3.45, 6.4, 0.06, 0.06, 0x57b36a);
  w.addSolid(px + 3.8, px + 10.2, pz - 6, pz - 1);
  b.box((ex + px) / 2 + 1.5, y + 0.5, ez, 3.2, 0.12, 0.12, C.steel); b.box(px + 3.2, y + 0.5, ez, 1.6, 0.12, 0.12, C.steel);   // cañerías
  // hidrolinera: techito, surtidor y el camión forestal a hidrógeno
  const fx = px - 1, fz = pz + 3.2, fy = y + 0.08;
  for (const dx of [-2.4, 2.4]) b.boxB(fx + dx, fy, fz, 0.22, 4.4, 0.22, C.steelD);
  b.boxB(fx, fy + 4.4, fz, 6.4, 0.35, 4.2, 0xf5f3ee); b.boxB(fx, fy + 4.36, fz, 6.44, 0.14, 4.24, 0x57b36a);
  b.boxB(fx, fy, fz, 1.6, 0.2, 1.2, 0x9a978f); b.boxB(fx, fy + 0.2, fz, 0.9, 1.7, 0.6, 0xf4f6f8); b.boxB(fx, fy + 1.3, fz + 0.31, 0.6, 0.36, 0.02, 0x0f2140);
  b.box(fx + 0.5, fy + 1.0, fz, 0.06, 0.06, 0.5, 0x1c1e22);
  w.addSolid(fx - 0.8, fx + 0.8, fz - 0.6, fz + 0.6);
  const tx = px + 2, tz = pz + 5.6;   // camión de frente hacia el oeste, con trozas de eucalipto
  b.boxB(tx - 6.2, fy + 0.9, tz, 2.4, 2.6, 2.4, 0xf5f3ee); b.boxB(tx - 6.2, fy + 2.0, tz, 2.44, 0.4, 2.44, 0x57b36a); b.boxB(tx - 7.42, fy + 2.0, tz, 0.05, 0.9, 2.0, 0x22303c);
  b.boxB(tx - 4.6, fy + 1.0, tz, 0.9, 2.6, 2.2, 0x8c949c);   // tanques de hidrógeno detrás de la cabina
  b.boxB(tx + 1.2, fy + 1.0, tz, 10.4, 0.3, 2.4, 0x3d4650);
  for (const dx of [-3.8, -0.4, 3.0, 5.8]) for (const s of [-1, 1]) b.boxB(tx + dx, fy + 1.3, tz + s * 1.1, 0.14, 1.8, 0.14, C.steelD);
  for (let r = 0; r < 3; r++) for (let k = 0; k < 4 - r; k++) b.cyl(tx + 1.2, fy + 1.66 + r * 0.6, tz - 0.9 + k * 0.6 + r * 0.3, 0.3, 0.3, 9.6, 0xa87b4f, 7, 0, 0, Math.PI / 2);
  for (const dx of [-6.4, -4.2, 2.6, 4.2, 5.6]) for (const s of [-1, 1]) b.cyl(tx + dx, fy + 0.5, tz + s * 1.2, 0.5, 0.5, 0.36, 0x1c1e22, 10, Math.PI / 2, 0, 0);
  w.addSolid(tx - 7.5, tx + 6.6, tz - 1.3, tz + 1.3); w.addOcc(tx - 7.5, tx + 6.6, tz - 1.3, tz + 1.3, fy + 3.6);
  sign(w, 'HIDRÓGENO VERDE', px - 4, y, pz - 7.2, 0, 6, 1.1);
  w.addInter('h2:0', ex + 1.5, ez + 2.4, { y: y + 0.08, ry: 0, h: 3.4 });
  w.addInter('h2:fill', fx + 1.6, fz - 0.4, { y: fy, ry: 0, h: 3.2 });
  // luces de estado: verde cuando produce, celeste en el surtidor mientras carga el camión
  const st1 = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.22, 0.05), ledMat()); st1.position.set(ex - 2.4, y + 2.3, ez + 1.33); w.scene.add(st1);
  const st2 = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.32, 0.03), ledMat()); st2.position.set(fx, fy + 1.3, fz + 0.33); w.scene.add(st2);
  let puffT = 0, t = 0;
  w.updaters.push((dt, st) => {
    const G = st.grid, h = G.hour; t += dt;
    leds.forEach((m, i) => {
      const e = m.material.emissive; if (!G.ev.on) { e.setHex(0x000000); return; }
      const smart = G.ev.smart * 3 > i + 0.01, home = !smart && ((h + 24 - 17.5) % 24) < 5.5, night = smart && h >= 0.3 && h < 6.8;
      if (night) e.setRGB(0.2, 0.55 + 0.45 * Math.sin(t * 3 + i), 1);   // cargando de madrugada
      else if (smart) e.setHex(0x2fbf71);   // programado: espera el horario valle
      else if (home) e.setHex(Math.sin(t * 5 + i) > 0 ? 0xffa020 : 0x6a3a00);   // carga en plena hora pico
      else e.setHex(0x223033);
    });
    const p = G.out.h2 / 14; st1.material.emissive.setHex(G.h2.on ? (p > 0.05 ? 0x4dffa0 : 0xffc93c) : 0x223033);
    st2.material.emissive.setHex(G.h2.filling > 0 ? (Math.sin(t * 8) > 0 ? 0x5ad1ff : 0x1a4a66) : G.h2.on ? 0x2fbf71 : 0x223033);
    if (G.h2.filling > 0) G.h2.filling -= dt;
    // respiradero: sale oxígeno (y algo de vapor de agua) mientras se separa el agua
    if (p > 0.05 && st.fx && (puffT -= dt) <= 0) { puffT = 0.5 - 0.3 * p; st.fx.soft.emit(ex + 2.6, y + 4.4, ez - 0.5, (Math.random() - 0.5) * 0.4, 0.9 + Math.random() * 0.5, (Math.random() - 0.5) * 0.4, 2.4, 0.5, 2.2, 0xf4f7fb, 0.5, -0.05, 0.3); }
  });
}

// ---------------- Minijuego: programar la carga de un auto eléctrico ----------------
// Una línea de tiempo de mediodía a mediodía; se arrastra el bloque de carga hasta que quede entero en el horario valle
// (de 0 a 7). Precios tomados como proporción de la tarifa residencial triple horario de UTE: el valle cuesta casi cinco
// veces menos que la punta.
const DEM = [[0, 108], [3, 96], [6, 118], [9, 160], [12, 165], [15, 156], [18, 186], [20, 210], [21.5, 216], [23, 184], [24, 108]];
const dem = h => { h = ((h % 24) + 24) % 24; for (let i = 1; i < DEM.length; i++) if (h <= DEM[i][0]) { const [a, va] = DEM[i - 1], [b2, vb] = DEM[i]; return va + (vb - va) * (h - a) / (b2 - a); } return 108; };
const band = h => { h = ((h % 24) + 24) % 24; return h < 7 ? 'valle' : h >= 17.5 && h < 21.5 ? 'punta' : 'llano'; };   // punta: cuatro horas elegidas entre las 17 y las 23
class Carga {
  constructor(m, o) {
    this.m = m; this.title = o.title || 'Programar la carga'; this.noEase = true; this.t = 0; this.need = o.need || 4; this.leave = 7;
    this.s = 19 - 12; this.drag = null; this.k = {}; this.msg = ''; this.msgT = 0; this.who = o.who || 'el auto';
    this.hint = `Arrastrá la carga (o movela con ← →) hasta que quede entera de madrugada, en el horario valle, y confirmá con Espacio o tocando PROGRAMAR. Necesita ${this.need} horas y tiene que estar lista a las 7.`;
  }
  X(h) { return 40 + (h / 24) * 480; }   // h: horas desde el mediodía
  cost() { let c = 0; for (let k = 0; k < this.need * 2; k++) { const b2 = band(this.s + 12 + k * 0.5 + 0.25); c += b2 === 'valle' ? 1 : b2 === 'punta' ? 4.9 : 2.1; } return c / (this.need * 2); }
  ok() { const a = this.s + 12, e = a + this.need; return a >= 24 - 1e-6 && e <= 24 + this.leave + 1e-6; }
  confirm() {
    if (this.done) return;
    if (this.ok()) { this.m.audio.ok(); this.m.finish(true, '¡CARGA PROGRAMADA!'); return; }
    const a = this.s + 12, e = a + this.need; this.msgT = 2.6; this.m.audio.click();
    this.msg = e > 24 + this.leave ? 'Así no llega: a las 7 el auto tiene que estar cargado.' : [a, a + 0.5, e - 0.5].some(h => band(h) === 'punta') ? 'Eso cae en la hora pico: la luz cuesta casi 5 veces más y la red sufre.' : 'Mejor, pero en el valle (de 0 a 7) es todavía más barato.';
  }
  key(c, d) { this.k[c] = d; if (d && (c === 'Space' || c === 'Enter' || c === 'KeyE')) this.confirm(); if (d && (c === 'ArrowLeft' || c === 'KeyA')) this.s = Math.max(0, this.s - 0.5); if (d && (c === 'ArrowRight' || c === 'KeyD')) this.s = Math.min(24 - this.need, this.s + 0.5); }
  down(x, y) { if (y > 248 && x > 390) { this.confirm(); return; } const x0 = this.X(this.s), x1 = this.X(this.s + this.need); if (y > 150 && y < 210 && x > x0 - 10 && x < x1 + 10) this.drag = x - x0; else if (y > 60 && y < 220) { this.s = clamp(Math.round(((x - 40) / 480 * 24 - this.need / 2) * 2) / 2, 0, 24 - this.need); } }
  move(x) { if (this.drag == null) return; this.s = clamp(Math.round(((x - this.drag - 40) / 480 * 24) * 2) / 2, 0, 24 - this.need); }
  up() { this.drag = null; }
  update(dt) { this.t += dt; this.msgT = Math.max(0, this.msgT - dt); }
  draw(g) {
    const top = 52, bot = 140;
    txt(g, 'Programá la carga ' + (this.who.startsWith('el ') ? 'del ' + this.who.slice(3) : 'de ' + this.who), W / 2, 22, 17, '#fff7e6');
    // franjas horarias
    for (let k = 0; k < 48; k++) { const b2 = band(12 + k * 0.5 + 0.25); g.fillStyle = b2 === 'valle' ? 'rgba(47,191,113,.28)' : b2 === 'punta' ? 'rgba(255,90,74,.26)' : 'rgba(90,120,170,.14)'; g.fillRect(this.X(k * 0.5), top, 480 / 48 + 0.5, bot - top + 76); }
    txt(g, 'PUNTA', (this.X(5.5) + this.X(9.5)) / 2, top + 12, 12, '#ff8f7a', 'center', NUN); txt(g, 'VALLE: de 0 a 7', (this.X(12) + this.X(19)) / 2, top + 12, 12, '#7de8a8', 'center', NUN);
    // demanda de la ciudad
    g.strokeStyle = '#ffc93c'; g.lineWidth = 3; g.beginPath(); for (let k = 0; k <= 96; k++) { const h = k / 4, v = dem(h + 12); const yy = bot - (v - 80) / 150 * (bot - top - 18); k ? g.lineTo(this.X(h), yy) : g.moveTo(this.X(h), yy); } g.stroke();
    txt(g, 'demanda de la ciudad', this.X(0.2), top + 34, 11, '#ffc93c', 'left', NUN);
    for (let h = 0; h <= 24; h += 3) { const lab = String((h + 12) % 24).padStart(2, '0') + ':00'; g.fillStyle = '#6f84a8'; g.fillRect(this.X(h) - 1, bot + 74, 2, 6); txt(g, lab, this.X(h), bot + 88, 11, '#a9bbd6', 'center', NUN); }
    g.fillStyle = '#ffffff'; g.fillRect(this.X(19) - 1, top, 2, bot - top + 76); txt(g, 'sale 07:00', this.X(19), bot + 64, 10, '#fff7e6', 'center', NUN);
    // bloque de carga
    const x0 = this.X(this.s), x1 = this.X(this.s + this.need), good = this.ok(), c = this.cost();
    rr(g, x0, 158, x1 - x0, 40, 9); g.fillStyle = good ? '#2fbf71' : c > 2.5 ? '#ff6b4a' : '#ffb23c'; g.fill(); g.strokeStyle = '#fff7e6'; g.lineWidth = 3; g.stroke();
    txt(g, '⚡ ' + this.need + ' h', (x0 + x1) / 2, 178, 15, '#0f2140');
    // ayuda: si pasa un rato, se marca un lugar que sirve
    if (this.t > 20 && !good) { g.save(); g.setLineDash([7, 5]); g.lineDashOffset = -this.t * 20; g.strokeStyle = '#7de8a8'; g.lineWidth = 3; rr(g, this.X(12), 156, this.X(12 + this.need) - this.X(12), 44, 9); g.stroke(); g.restore(); txt(g, 'probá acá', (this.X(12) + this.X(12 + this.need)) / 2, 212, 11, '#7de8a8', 'center', NUN); }
    // costo relativo y botón
    rr(g, 40, 252, 330, 36, 10); g.fillStyle = '#0f2140'; g.fill(); txt(g, 'Costo de esta carga', 56, 270, 13, '#a9bbd6', 'left', NUN);
    rr(g, 196, 262, 160, 16, 8); g.fillStyle = '#13284c'; g.fill(); g.fillStyle = c > 2.5 ? '#ff6b4a' : c > 1.3 ? '#ffb23c' : '#57e389'; rr(g, 198, 264, Math.max(10, 156 * c / 4.9), 12, 6); g.fill();
    rr(g, 392, 252, 128, 36, 10); g.fillStyle = good ? '#2fbf71' : '#2a4374'; g.fill(); txt(g, 'PROGRAMAR', 456, 271, 16, '#fff7e6');
    if (this.msgT > 0) { rr(g, 50, 102, 460, 34, 10); g.fillStyle = 'rgba(10,25,48,.94)'; g.fill(); txt(g, this.msg, W / 2, 119, 14, '#ffb23c', 'center', NUN); }
  }
}

// ---------------- Minijuego: electrolizador ----------------
// El agua se separa en hidrógeno y oxígeno con electricidad (2 H₂O → 2 H₂ + O₂: salen el doble de burbujas de hidrógeno).
// Para que el hidrógeno sea verde, el electrolizador tiene que usar solo el viento que sobra de noche: se sigue la franja
// verde con la potencia, sin pasarse (eso saldría del respaldo fósil) y sin quedarse muy abajo (se desperdicia viento).
class Electro {
  constructor(m, o) {
    this.m = m; this.title = o.title || 'Electrolizador'; this.t = 0; this.p = 0.2; this.v = 0; this.prog = 0; this.k = {}; this.drag = false; this.over = 0; this.bub = [];
    this.hint = 'Subí y bajá la potencia del electrolizador (↑ ↓, o arrastrando) para seguir el viento que sobra, la franja verde. Si te pasás, esa energía sale del respaldo fósil y el hidrógeno ya no es verde.';
  }
  get s() { const t = this.t; return clamp(0.52 + 0.26 * Math.sin(t * 0.75) + 0.13 * Math.sin(t * 1.9 + 1.3), 0.12, 0.95); }
  key(c, d) { this.k[c] = d; }
  down(x, y) { if (x > 250) { this.drag = true; this.move(x, y); } }
  move(x, y) { if (this.drag) this.p = clamp((250 - y) / 190, 0, 1); }
  up() { this.drag = false; }
  update(dt) {
    this.t += dt; const k = this.k, up = k.ArrowUp || k.KeyW, dn = k.ArrowDown || k.KeyS;
    if (up || dn) this.p = clamp(this.p + ((up ? 1 : 0) - (dn ? 1 : 0)) * 0.55 * dt, 0, 1);
    const s = this.s, was = this.over > 0.3; this.over = this.p > s + 0.04 ? Math.min(1, this.over + dt * 3) : Math.max(0, this.over - dt * 3); if (!was && this.over > 0.3) this.m.audio.bad();
    if (this.p <= s + 0.04) this.prog = Math.min(1, this.prog + this.p * dt * 0.16);
    // burbujas: dos de hidrógeno por cada una de oxígeno
    if (Math.random() < this.p * 18 * dt) { this.bub.push({ x: 74 + Math.random() * 24, y: 236, h: 1 }); if (Math.random() < 0.5) this.bub.push({ x: 160 + Math.random() * 24, y: 236, h: 0 }); }
    for (const b2 of this.bub) b2.y -= (40 + 30 * this.p) * dt; this.bub = this.bub.filter(b2 => b2.y > 96);
    if (this.prog >= 1) this.m.finish(true, '¡HIDRÓGENO VERDE!');
  }
  draw(g) {
    // celda de electrólisis
    rr(g, 30, 70, 196, 180, 14); g.fillStyle = '#0f2140'; g.fill(); g.fillStyle = 'rgba(90,180,255,.35)'; g.fillRect(40, 96, 176, 146);
    g.fillStyle = '#c3cdd9'; g.fillRect(80, 82, 12, 156); g.fillRect(166, 82, 12, 156);
    txt(g, '−', 86, 74, 18, '#fff7e6'); txt(g, '+', 172, 74, 18, '#fff7e6');
    for (const b2 of this.bub) { g.fillStyle = b2.h ? 'rgba(255,255,255,.9)' : 'rgba(255,214,120,.9)'; g.beginPath(); g.arc(b2.x, b2.y, b2.h ? 3 : 4, 0, 7); g.fill(); }
    txt(g, 'H₂', 86, 264, 16, '#ffffff'); txt(g, 'O₂', 172, 264, 16, '#ffd678'); txt(g, 'agua', 128, 228, 12, '#cfe8ff', 'center', NUN);
    txt(g, '2 H₂O → 2 H₂ + O₂', 128, 286, 13, '#a9bbd6', 'center', NUN);
    // viento que sobra y potencia del electrolizador
    const X0 = 262, X1 = 520, Y = v => 250 - v * 190;
    rr(g, X0 - 8, 52, X1 - X0 + 16, 206, 12); g.fillStyle = '#0b1a33'; g.fill();
    g.fillStyle = 'rgba(47,191,113,.45)'; g.beginPath(); g.moveTo(X0, Y(0));
    for (let i = 0; i <= 40; i++) { const tt = this.t - 3 + i * 0.1, s = clamp(0.52 + 0.26 * Math.sin(tt * 0.75) + 0.13 * Math.sin(tt * 1.9 + 1.3), 0.12, 0.95); g.lineTo(X0 + i / 40 * (X1 - X0), Y(s)); }
    g.lineTo(X1, Y(0)); g.closePath(); g.fill();
    txt(g, 'viento que sobra', X0 + 6, 64, 11, '#7de8a8', 'left', NUN);
    const xp = X0 + 30 / 40 * (X1 - X0), yp = Y(this.p);
    g.strokeStyle = this.over > 0.3 ? '#ff6b4a' : '#ffc93c'; g.lineWidth = 4; g.beginPath(); g.moveTo(X0, yp); g.lineTo(X1, yp); g.stroke();
    g.fillStyle = this.over > 0.3 ? '#ff6b4a' : '#ffc93c'; g.beginPath(); g.arc(xp, yp, 9, 0, 7); g.fill();
    txt(g, 'potencia', X1 - 4, yp - 12, 11, '#ffc93c', 'right', NUN);
    // tanque de hidrógeno
    txt(g, `Hidrógeno verde: ${Math.round(this.prog * 100)}%`, 30, 34, 14, '#7de8a8', 'left', NUN);
    rr(g, 236, 26, 300, 16, 8); g.fillStyle = '#13284c'; g.fill(); g.fillStyle = '#57e389'; rr(g, 238, 28, Math.max(10, 296 * this.prog), 12, 6); g.fill();
    const s = this.s, msg = this.over > 0.3 ? '¡Te pasaste! Eso ya sale del respaldo fósil' : this.p < s - 0.25 ? 'Sobra viento: subí la potencia' : 'Bien: solo viento que sobra';
    txt(g, msg, (X0 + X1) / 2, 278, 13, this.over > 0.3 ? '#ff8f7a' : this.p < s - 0.25 ? '#ffc93c' : '#7de8a8', 'center', NUN);
  }
}

GAMES.carga = Carga; GAMES.h2 = Electro;
