// Secretos de Salto: siete cosas escondidas en la maqueta. Cuatro son guiños a los Cuentos de la selva (1918) de Horacio
// Quiroga (los flamencos con medias, la tortuga gigante, el loro pelado y la abeja haragana); además, la luz mala del
// campo (la lleva arqueo.js), un carpincho de oro en lo alto de un cerro chato y una botella con un mensaje en la playa.
import * as THREE from 'three';
import { MESAS } from './terrain.js';
import { hLoad, hSave } from './arqueo.js';

const $ = id => document.getElementById(id);
const L = (who, text) => ({ who, text });

export const SECRETS = [
  { k: 'flamencos', name: 'Flamencos con medias', hint: 'De noche, en la arena donde el Daymán se junta con el río Uruguay.', night: true, x: -88.0, z: 299.8, t: [
    'Tres flamencos bailan en la arena… ¡con medias de colores!',
    'Es un guiño a «Las medias de los flamencos», de los Cuentos de la selva (1918) de Horacio Quiroga: el cuento que explica por qué los flamencos tienen las patas coloradas.'] },
  { k: 'tortuga', name: 'La tortuga gigante', hint: 'Va muy despacio por la banquina de la ruta que sale hacia el sur.', t: [
    'Una tortuga gigante camina despacito por la banquina de la ruta 3, con un hombre dormido sobre el caparazón.',
    '«La tortuga gigante», de los Cuentos de la selva: una tortuga carga, muy despacio y sin descansar, hasta Buenos Aires al hombre enfermo que antes la había salvado.'] },
  { k: 'loro', name: 'El loro pelado', hint: 'Entre las naranjas, sobre un cajón.', x: 73.8, z: -65.4, t: [
    'Un loro sin plumas, ¡pelado!, cuida un cajón de naranjas.',
    '«El loro pelado», de los Cuentos de la selva: un loro que se quedó sin plumas después de escaparse de un tigre.'] },
  { k: 'abeja', name: 'La abeja haragana', hint: 'Duerme la siesta en una flor del jardín de un escritor.', x: -27.5, z: -44.2, t: [
    'Una abeja duerme la siesta en una flor del jardín de Quiroga…',
    '«La abeja haragana», de los Cuentos de la selva: una abeja que no quería trabajar aprende, en una noche muy difícil, por qué importa el trabajo de todas.'] },
  { k: 'luz', name: 'La luz mala', hint: 'De noche, una luz flota sobre el campo del sur y se aleja si te acercás.', t: [] },
  { k: 'oro', name: 'El carpincho de oro', hint: 'Brilla en lo alto, cerca del mirador de la Cuchilla de Haedo.', x: MESAS[0][0] + 9, z: MESAS[0][1] - 7, t: [
    '¡Un carpincho de oro en lo alto del cerro chato! Nadie sabe quién lo dejó acá…',
    'Dicen que lo pusieron los primeros guardianes de la matriz verde, para quien se animara a subir hasta el mirador. ¿Será cierto?'] },
  { k: 'botella', name: 'Botella con un mensaje', hint: 'En la playa del río Uruguay, al sur de la estación.', x: -86.2, z: 168, t: [
    'Una botella con un mensaje adentro. Dice así:',
    '«En esta maqueta hay siete secretos: unos flamencos que bailan de noche, una tortuga que va despacio a Buenos Aires, un loro sin plumas entre las naranjas, una abeja dormida en un jardín famoso, una luz que anda por el campo, un carpincho que brilla en lo alto… y esta botella.»'] }
];
const ROAD = [[0, 208], [2, 226], [4, 246], [6, 270]];   // la ruta 3 (pradera.js): la tortuga va por la banquina oeste
const roadX = z => { for (let i = 0; i < ROAD.length - 1; i++) { const [x0, z0] = ROAD[i], [x1, z1] = ROAD[i + 1]; if (z <= z1) return x0 + (x1 - x0) * Math.max(0, (z - z0) / (z1 - z0)); } return ROAD[ROAD.length - 1][0]; };

const std = (c, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: 0.75, flatShading: true }, o));
const box = (g, w, h, d, m, x, y, z) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); o.position.set(x, y, z); o.castShadow = true; g.add(o); return o; };
const ball = (g, r, m, x, y, z, sx = 1, sy = 1, sz = 1) => { const o = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); o.castShadow = true; g.add(o); return o; };

function flamenco(sc) {
  const g = new THREE.Group(), pink = std(0xff8fab), dark = std(0x1c1c1e), legs = [];
  ball(g, 0.42, pink, 0, 1.55, 0, 1, 0.75, 1.35);
  const neck = new THREE.Group(); neck.position.set(0, 1.7, 0.42); g.add(neck);
  box(neck, 0.12, 0.7, 0.12, pink, 0, 0.35, 0).rotation.x = -0.35; box(neck, 0.12, 0.45, 0.12, pink, 0, 0.82, 0.18);
  ball(neck, 0.17, pink, 0, 1.08, 0.24); box(neck, 0.09, 0.08, 0.3, std(0xf4f1ea), 0, 1.03, 0.45); box(neck, 0.09, 0.08, 0.12, dark, 0, 0.99, 0.63);
  // patas largas con medias a rayas, como en el cuento
  const stripes = [0xd62828, 0xf4f4f4, 0x1c1c1e, 0xd62828, 0xf4f4f4, 0x1c1c1e];
  for (const sx of [-0.12, 0.12]) { const lg = new THREE.Group(); lg.position.set(sx, 1.2, 0); g.add(lg); stripes.forEach((c, i) => box(lg, 0.07, 0.2, 0.07, std(c), 0, -0.1 - i * 0.2, 0)); box(lg, 0.16, 0.04, 0.22, pink, 0, -1.22, 0.06); legs.push(lg); }
  sc.add(g); return { g, neck, legs };
}
function tortuga(sc) {
  const g = new THREE.Group(), shell = std(0x5d7a3a), skin = std(0x8a9a5a), legs = [];
  const s = new THREE.Mesh(new THREE.SphereGeometry(1.15, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), shell); s.scale.set(1, 0.72, 1.3); s.position.y = 0.42; s.castShadow = true; g.add(s);
  box(g, 2.2, 0.18, 2.8, std(0x4a5e2e), 0, 0.42, 0);
  for (let i = 0; i < 5; i++) { const a = i / 5 * 6.283; box(g, 0.42, 0.06, 0.42, std(0x7d9a4a), Math.cos(a) * 0.5, 1.15 - (i % 2) * 0.05, Math.sin(a) * 0.62).rotation.y = a; }
  const head = ball(g, 0.3, skin, 0, 0.55, 1.6, 1, 0.85, 1.2); ball(head, 0.06, std(0x1c1c1e), 0.15, 0.1, 0.18); ball(head, 0.06, std(0x1c1c1e), -0.15, 0.1, 0.18);
  for (const [x, z] of [[-0.8, 0.9], [0.8, 0.9], [-0.8, -0.9], [0.8, -0.9]]) legs.push(box(g, 0.34, 0.45, 0.34, skin, x, 0.22, z));
  // el hombre enfermo, dormido y tapado con una frazada, con su sombrero
  box(g, 0.5, 0.32, 1.3, std(0xa5522d), 0, 1.33, -0.1); ball(g, 0.2, std(0xe0ac86), 0, 1.42, 0.62); const hat = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.04, 10), std(0xd8c08a)); hat.position.set(0, 1.62, 0.62); g.add(hat);
  sc.add(g); return { g, head, legs };
}
function loro(sc) {
  const g = new THREE.Group(), skin = std(0xf2b0a0), green = std(0x3fa34d);
  ball(g, 0.22, skin, 0, 0.32, 0, 0.9, 1.15, 0.9); const head = ball(g, 0.16, skin, 0, 0.62, 0.06); box(head, 0.1, 0.1, 0.14, std(0xffc420), 0, -0.04, 0.17).rotation.x = 0.6;
  ball(head, 0.035, std(0x1c1c1e), 0.1, 0.04, 0.1); ball(head, 0.035, std(0x1c1c1e), -0.1, 0.04, 0.1);
  for (const sx of [-1, 1]) box(g, 0.05, 0.22, 0.16, green, sx * 0.2, 0.34, -0.02);   // dos plumitas que le quedan
  box(g, 0.08, 0.2, 0.04, green, 0, 0.12, -0.2).rotation.x = 0.7;
  sc.add(g); return { g, head };
}
function abeja(sc) {
  const g = new THREE.Group(), y = std(0xffc420), k = std(0x1c1c1e), wing = std(0xdff3fb, { transparent: true, opacity: 0.7 });
  ball(g, 0.16, y, 0, 0, 0, 1, 0.9, 1.4); for (const z of [-0.06, 0.08]) box(g, 0.3, 0.3, 0.05, k, 0, 0, z); ball(g, 0.1, k, 0, 0.02, 0.24);
  const wings = [-1, 1].map(sx => { const w = box(g, 0.22, 0.02, 0.14, wing, sx * 0.16, 0.15, -0.02); w.rotation.z = sx * 0.4; return w; });
  sc.add(g); g.scale.setScalar(1.6); return { g, wings };
}
function carpinchoOro(sc) {
  const g = new THREE.Group(), gold = std(0xffc84a, { metalness: 0.85, roughness: 0.28, flatShading: true, emissive: 0x6b4a00, emissiveIntensity: 0.35 });
  box(g, 0.75, 0.42, 0.24, gold, 0, 0.12, 0); ball(g, 0.42, gold, 0, 0.62, 0, 1, 0.9, 1.35); const h = box(g, 0.42, 0.4, 0.5, gold, 0, 0.82, 0.62); box(h, 0.3, 0.26, 0.2, gold, 0, -0.06, 0.32);
  for (const sx of [-0.15, 0.15]) box(h, 0.08, 0.1, 0.06, gold, sx, 0.24, -0.08);
  sc.add(g); return { g };
}
function botella(sc) {
  const g = new THREE.Group(), glass = std(0x3f8f5a, { roughness: 0.15 });   // opaco y facetado: así reusa el mismo shader que el resto
  const b = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.5, 10), glass); b.rotation.z = Math.PI / 2; b.position.y = 0.14; g.add(b);
  const n = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.12, 0.2, 8), glass); n.rotation.z = Math.PI / 2; n.position.set(0.34, 0.14, 0); g.add(n);
  box(g, 0.05, 0.06, 0.06, std(0x8a6a3a), 0.47, 0.14, 0); box(g, 0.3, 0.12, 0.03, std(0xf2e6c9), 0, 0.14, 0);
  sc.add(g); return { g };
}

export class Secretos {
  constructor(game) {
    const g = this.g = game, w = g.world, sc = g.scene; this.got = new Set((hLoad().sec || []).filter(k => SECRETS.some(s => s.k === k))); this.t = 0;
    this.fl = [[0, 0], [1.3, 1.5], [1.1, -1.6]].map(([dx, dz]) => { const f = flamenco(sc), S = SECRETS[0]; f.g.position.set(S.x + dx, w.groundAt(S.x + dx, S.z + dz), S.z + dz); f.g.rotation.y = 0.6 + dx; return f; });
    this.tor = tortuga(sc); this.torZ = 216; this.torDir = 1;
    this.lo = loro(sc); { const S = SECRETS[2]; this.lo.g.position.set(S.x, w.groundAt(S.x, S.z) + 0.86, S.z); }
    this.ab = abeja(sc); { const S = SECRETS[3]; this.abY = w.groundAt(S.x, S.z) + 0.78; this.ab.g.position.set(S.x, this.abY, S.z); }
    this.oro = carpinchoOro(sc); { const S = SECRETS[5]; this.oro.g.position.set(S.x, w.groundAt(S.x, S.z), S.z); w.addCircle(S.x, S.z, 0.7); }
    this.bo = botella(sc); { const S = SECRETS[6]; this.bo.g.position.set(S.x, w.groundAt(S.x, S.z), S.z); this.bo.g.rotation.y = 0.7; this.bo.g.scale.setScalar(1.7); }
    for (const S of SECRETS) if (S.x != null) w.addInter('sec:' + S.k, S.x, S.z + (S.k === 'loro' ? 1.4 : S.k === 'abeja' ? 1.1 : 0.9), { console: false, h: 2.6, r: S.k === 'flamencos' ? 3 : 1.8 });
    w.addInter('sec:tortuga', 0, this.torZ, { console: false, h: 2.6, r: 2.6 });
  }
  reset() { /* los secretos se conservan entre partidas (en el kiosco, hasta que vuelve al inicio por inactividad) */ }
  wipe() { this.got.clear(); }
  all() { return this.got.size >= SECRETS.length; }
  night() { const h = this.g.grid.hour; return h > 20.3 || h < 5.2; }
  describe(id) {
    if (!id.startsWith('sec:')) return null;
    const k = id.slice(4), S = SECRETS.find(s => s.k === k); if (!S) return null;
    if (S.night && !this.night()) return { state: 'hidden' };
    return { state: 'ok', label: this.got.has(k) ? S.name + ' ✓' : '¿Qué es eso?' };
  }
  interact(id) {
    if (!id.startsWith('sec:')) return false;
    const k = id.slice(4), S = SECRETS.find(s => s.k === k); if (!S) return true;
    this.found(k, true); return true;
  }
  found(k, talk) {
    const g = this.g, S = SECRETS.find(s => s.k === k), fresh = !this.got.has(k); this.got.add(k); if (fresh) hSave(g, 'sec', this.got);
    if (fresh) { g.ui.toast('¡SECRETO!', `${S.name} · ${this.got.size} de ${SECRETS.length}`, 3); g.audio.ok && g.audio.ok(); const p = g.capi.pos; g.fx.sparks(p.x, p.y + 2, p.z, 20, 0xc77dff); }
    if (talk && S.t.length) g.ui.dialog(S.t.map(t => L('secreto', t)), fresh && this.all() ? () => this.reward() : null);
    else if (fresh && this.all()) setTimeout(() => this.reward(), 1500);
  }
  reward() {
    const g = this.g; g.confetti && g.confetti(80); g.capi.celebrate && g.capi.celebrate(3);
    g.ui.dialog([L('quiroga', '¡Encontraste los siete secretos de Salto, y a los animales de mis cuentos! Te ganaste el atuendo de Explorador de la selva: sombrero de paja, pañuelo y morral, para andar por el monte.')]);
  }
  fill() {
    const box = $('seList'); box.textContent = '';
    for (const S of SECRETS) { const got = this.got.has(S.k), d = document.createElement('div'); d.className = 'alItem' + (got ? ' on' : ''); d.innerHTML = `<b>${got ? '★' : '?'}</b><div><em>${got ? S.name : 'Secreto sin descubrir'}</em><span>${got ? (S.t[1] || S.t[0] || 'Dicen que donde aparece hay algo enterrado.') : 'Pista: ' + S.hint}</span></div>`; box.appendChild(d); }
    $('seCount').textContent = `${this.got.size} de ${SECRETS.length}`;
  }
  update(dt, st) {
    const g = this.g, w = g.world, t = this.t += dt, cp = st.capi, nt = this.night();
    // flamencos: solo de noche, bailando
    this.fl.forEach((f, i) => { f.g.visible = nt; if (!nt) return; const ph = t * 3 + i * 2; f.g.position.y = w.groundAt(f.g.position.x, f.g.position.z) + Math.max(0, Math.sin(ph)) * 0.12; f.legs.forEach((l, j) => { l.rotation.x = Math.sin(ph + j * Math.PI) * 0.35; }); f.neck.rotation.z = Math.sin(t * 2 + i) * 0.2; f.g.rotation.y += dt * 0.4; });
    // tortuga: va y viene, despacito, por la banquina oeste de la ruta 3
    { const T = this.tor, sp = 0.45; this.torZ += this.torDir * sp * dt; if (this.torZ > 256) { this.torZ = 256; this.torDir = -1; } if (this.torZ < 214) { this.torZ = 214; this.torDir = 1; }
      const z = this.torZ, x = roadX(z) - 3.5; T.g.position.set(x, w.groundAt(x, z), z); T.g.rotation.y = this.torDir > 0 ? 0 : Math.PI; T.legs.forEach((l, j) => { l.position.y = 0.22 + Math.max(0, Math.sin(t * 2.4 + j * 1.6)) * 0.08; }); T.head.position.y = 0.55 + Math.sin(t * 1.2) * 0.04;
      const it = w.inter['sec:tortuga']; if (it) { it.x = x; it.z = z + (this.torDir > 0 ? 2.2 : -2.2); } w.dynCircles.push({ x, z, r: 1.4 }); }
    // loro: mueve la cabeza; abeja: duerme y aletea de a ratos; carpincho de oro: gira y brilla
    this.lo.head.rotation.z = Math.sin(t * 1.7) * 0.35; this.lo.g.rotation.y = Math.sin(t * 0.4) * 0.6;
    this.ab.g.position.y = this.abY + Math.sin(t * 1.3) * 0.03; this.ab.wings.forEach((wg, j) => { wg.rotation.z = (j ? 1 : -1) * (0.4 + (Math.sin(t * 0.5) > 0.8 ? Math.sin(t * 60) * 0.5 : 0)); });
    if (!nt && Math.random() < 1.2 * dt) { const p = this.bo.g.position; st.fx.glow.sprite(p.x + 0.3, p.y + 0.35, p.z, 0.9, 0xe8fff0, 0.55); }   // la botella brilla al sol
    this.oro.g.rotation.y += dt * 0.6; if (Math.random() < 3 * dt) { const p = this.oro.g.position; st.fx.glow.sprite(p.x, p.y + 1.1, p.z, 1.4, 0xffe08a, 0.6); }
    // la abeja ronca: ¡zzz!
    if (Math.random() < 0.8 * dt && Math.hypot(cp.x - this.ab.g.position.x, cp.z - this.ab.g.position.z) < 12) { const p = this.ab.g.position; st.fx.soft.emit(p.x, p.y + 0.4, p.z, 0, 0.35, 0, 1.4, 0.15, 0.35, 0xffffff, 0.5, 0, 0.5); }
  }
}
