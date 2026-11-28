// Expedición arqueológica: Laura, arqueóloga, acampa en la orilla del lago de Salto Grande (donde entre 1976 y 1978 hubo
// una misión de rescate de la UNESCO antes de que el agua tapara los sitios). Con el pincel se excava capa por capa en
// sitios del departamento, se mira una piedra con grabados y, de noche, la luz mala lleva hasta el último hallazgo.
// Cada hallazgo tiene su ficha con datos verificados y queda en la vitrina.
import * as THREE from 'three';
import { Batch, canvasTex } from './world.js';
import { makePerson } from './actors.js';
import { sign } from './sectors.js';

const $ = id => document.getElementById(id);
const L = (who, text) => ({ who, text });
const HKEY = 'capi-hallazgos';
export function hLoad() { try { return JSON.parse(localStorage.getItem(HKEY) || 'null') || {}; } catch (e) { return {}; } }
export function hSave(g, part, set) { if (g.kioskCfg) return; try { const d = hLoad(); d[part] = [...set]; localStorage.setItem(HKEY, JSON.stringify(d)); } catch (e) { /* sin almacenamiento */ } }
export function hWipe() { try { localStorage.removeItem(HKEY); } catch (e) { /* sin almacenamiento */ } }
export const CAMP = [-62, -124];                 // campamento de Laura, en la orilla este del lago
const LUZ_A = [-56, 272], LUZ_B = [-35, 290];   // la luz mala aparece en el campo del sur y se mete en la tierra en B

// Capas del suelo para el minijuego (de arriba hacia abajo); la última es la del hallazgo
const PASTO = { name: 'Pasto y raíces', age: 'hoy', col: '#5f8f3a' }, NEGRA = { name: 'Tierra negra', age: 'cientos de años', col: '#4a3524' };
const PARDA = { name: 'Tierra parda', age: 'unos miles de años', col: '#7a5034' }, ARCILLA = { name: 'Arcilla', age: 'más de 4.000 años', col: '#9a6040' };
const ARENA = { name: 'Arena y grava del río', age: 'más de 10.000 años', col: '#c9a46a' };

// ---------- dibujos de los hallazgos (canvas 2D, centrados en cx, cy) ----------
const D = {
  placa(g, cx, cy, s) { g.save(); g.translate(cx, cy); g.scale(s, s); g.fillStyle = '#8d8f93'; g.beginPath(); g.ellipse(0, 0, 78, 52, 0.15, 0, 7); g.fill(); g.fillStyle = '#a4a7ab'; g.beginPath(); g.ellipse(-8, -8, 62, 38, 0.15, 0, 7); g.fill();
    g.strokeStyle = '#4a4c50'; g.lineWidth = 4; g.lineJoin = 'round'; g.beginPath(); for (let i = 0; i <= 8; i++) g.lineTo(-56 + i * 14, -16 + (i % 2 ? 14 : -2)); g.stroke();
    g.beginPath(); for (let i = 0; i <= 8; i++) g.lineTo(-56 + i * 14, 14 + (i % 2 ? 14 : -2)); g.stroke(); g.beginPath(); g.moveTo(-40, -34); g.lineTo(40, -34); g.stroke(); g.restore(); },
  cola(g, cx, cy, s) { g.save(); g.translate(cx, cy); g.scale(s, s); g.fillStyle = '#d6c39a'; g.beginPath(); g.moveTo(0, -80); g.quadraticCurveTo(34, -20, 20, 26); g.lineTo(14, 44); g.lineTo(30, 70); g.lineTo(0, 58); g.lineTo(-30, 70); g.lineTo(-14, 44); g.lineTo(-20, 26); g.quadraticCurveTo(-34, -20, 0, -80); g.fill();
    g.strokeStyle = '#a08a62'; g.lineWidth = 2; for (let i = 0; i < 7; i++) { g.beginPath(); g.moveTo(0, -64 + i * 13); g.lineTo(-18 + (i % 2) * 4, -50 + i * 13); g.moveTo(0, -60 + i * 13); g.lineTo(18 - (i % 2) * 4, -46 + i * 13); g.stroke(); } g.restore(); },
  lestodon(g, cx, cy, s) { g.save(); g.translate(cx, cy); g.rotate(-0.5); g.scale(s, s); g.fillStyle = '#e6d8b8'; g.fillRect(-70, -13, 140, 26); for (const sx of [-1, 1]) { g.beginPath(); g.arc(sx * 74, -16, 24, 0, 7); g.arc(sx * 74, 16, 22, 0, 7); g.fill(); }
    g.fillStyle = '#c9b892'; g.fillRect(-60, 4, 120, 6); g.restore(); },
  boleadora(g, cx, cy, s) { g.save(); g.translate(cx, cy); g.scale(s, s); const gr = g.createRadialGradient(-18, -18, 6, 0, 0, 58); gr.addColorStop(0, '#b7bcc2'); gr.addColorStop(1, '#5d6268'); g.fillStyle = gr; g.beginPath(); g.arc(0, 0, 56, 0, 7); g.fill();
    g.strokeStyle = '#3f4348'; g.lineWidth = 7; g.beginPath(); g.ellipse(0, 4, 56, 14, 0, 0, Math.PI); g.stroke(); g.restore(); },
  glipto(g, cx, cy, s) { g.save(); g.translate(cx, cy); g.scale(s, s); for (let j = -2; j <= 2; j++) for (let i = -3; i <= 3; i++) { if (Math.abs(i) + Math.abs(j) > 4) continue; const x = i * 26 + (j % 2 ? 13 : 0), y = j * 23;
      g.fillStyle = '#cdb88c'; g.beginPath(); for (let k = 0; k < 6; k++) { const a = k / 6 * 6.283 + 0.52; g.lineTo(x + Math.cos(a) * 14, y + Math.sin(a) * 14); } g.closePath(); g.fill(); g.strokeStyle = '#9c8458'; g.lineWidth = 2; g.stroke(); g.beginPath(); g.arc(x, y, 5, 0, 7); g.stroke(); } g.restore(); },
  petro(g, cx, cy, s) { g.save(); g.translate(cx, cy); g.scale(s, s); g.fillStyle = '#4b4440'; g.beginPath(); g.ellipse(0, 0, 80, 56, -0.1, 0, 7); g.fill(); g.strokeStyle = '#a99a8a'; g.lineWidth = 5; g.lineJoin = 'round';
    g.beginPath(); for (let i = 0; i <= 6; i++) g.lineTo(-50 + i * 15, -22 + (i % 2 ? 16 : 0)); g.stroke(); g.beginPath(); g.arc(-26, 22, 12, 0, 7); g.stroke(); g.beginPath(); g.arc(24, 20, 14, 0, 7); g.arc(24, 20, 5, 0, 7); g.stroke(); g.beginPath(); g.moveTo(0, 6); g.lineTo(0, 40); g.moveTo(-8, 16); g.lineTo(8, 16); g.stroke(); g.restore(); },
  ceramica(g, cx, cy, s) { g.save(); g.translate(cx, cy); g.scale(s, s); g.fillStyle = '#b8693a'; g.beginPath(); g.moveTo(-70, -30); g.quadraticCurveTo(0, -60, 70, -26); g.lineTo(58, 44); g.quadraticCurveTo(0, 22, -60, 48); g.closePath(); g.fill();
    g.fillStyle = '#8f4c26'; for (let j = 0; j < 4; j++) for (let i = 0; i < 7; i++) { g.beginPath(); g.ellipse(-50 + i * 17 + (j % 2) * 8, -22 + j * 18 - Math.abs(i - 3) * 2, 6, 4, 0.4, 0, 7); g.fill(); } g.restore(); }
};

// ---------- los hallazgos ----------
export const FINDS = [
  { k: 'placa', name: 'Placa grabada', place: 'la orilla del lago de Salto Grande', x: -80, z: -131, age: 'Unos 4.600 años', layers: [PASTO, NEGRA, PARDA, ARCILLA], t: [
    'Una piedra con líneas grabadas. En la zona de Salto Grande aparecieron más de cien piedras así: los arqueólogos las llamaron «placas grabadas». El sitio donde estaban se dató en unos 4.600 años.',
    'Ese lugar hoy está bajo el agua del lago de la represa. Por eso, entre 1976 y 1978, antes de que se llenara, una misión de la UNESCO hizo un rescate arqueológico en la zona.'] },
  { k: 'cola', name: 'Punta «cola de pescado»', place: 'la barranca del río Uruguay, al sur de la estación', x: -87.4, z: 222, age: 'Unos 11.000 años', layers: [PASTO, NEGRA, PARDA, ARENA], t: [
    'Una punta de proyectil con la base en forma de cola de pescado. Son de los primeros cazadores de América, de hace unos 11.000 años.',
    'En Uruguay aparecen sobre todo en el noroeste, sobre el río Uruguay medio y el río Cuareim. Los rastros humanos más antiguos del país, de unos 11.500 años, se encontraron en Salto en los años setenta.'] },
  { k: 'lestodon', name: 'Hueso de perezoso gigante', place: 'la orilla del arroyo, al norte de la ciudad', x: -60, z: -43, age: 'Fines de la Edad de Hielo', layers: [PASTO, NEGRA, ARCILLA, ARENA], t: [
    'Un hueso enorme: parte del fémur de un Lestodon, un perezoso gigante que vivía en estas tierras a fines de la última Edad de Hielo.',
    'En el departamento de Salto, a orillas del arroyo Itapebí Grande, apareció un fémur así junto a huesos y piedras trabajadas por los primeros cazadores.'] },
  { k: 'boleadora', name: 'Bola de boleadora', place: 'los Potreros de Arerunguá', x: 230, z: 120, age: 'Los últimos miles de años', layers: [PASTO, NEGRA, PARDA], t: [
    'Una piedra redonda y pulida, con una canaleta alrededor para atarla con tientos de cuero: una bola de boleadora. Se tiraba girando, para cazar.',
    'Las usaban los cazadores-recolectores que vivieron sobre el río Uruguay en los últimos miles de años, junto con cerámica e instrumentos de hueso.'] },
  { k: 'glipto', name: 'Placas de caparazón de gliptodonte', place: 'la orilla del arroyo de la pradera', x: 182, z: 80, age: 'Más de 10.000 años', layers: [PASTO, NEGRA, ARCILLA, ARENA], t: [
    'Placas de hueso de la coraza de un gliptodonte, un pariente gigante del tatú: medía hasta tres metros de largo, pesaba más de una tonelada y su caparazón tenía cientos de placas.',
    'Uruguay es uno de los lugares donde más fósiles de gliptodonte se encontraron. Muchas veces aparecen después de una lluvia, a orillas de un arroyo: lo correcto es dejarlos donde están y avisar a un museo.'] },
  { k: 'petro', look: true, name: 'Piedra con grabados', place: 'el pie de un cerro chato', x: 180, z: -33, age: 'Los últimos miles de años', t: [
    'Una piedra con grabados: líneas en zigzag y surcos hechos picoteando la roca con otra piedra más dura.',
    'En el norte del Uruguay hay grabados así en rocas a cielo abierto, hechos por cazadores-recolectores. En el centro del departamento de Salto se encontraron muchos en los últimos años.'] },
  { k: 'ceramica', luz: true, name: 'Tiesto de cerámica guaraní', place: 'el campo del sur, donde se metió la luz mala', x: LUZ_B[0], z: LUZ_B[1], age: 'Cientos de años', layers: [PASTO, NEGRA, PARDA], t: [
    'Un pedazo de olla de barro con la superficie corrugada, marcada apretando el barro con los dedos: así decoraban muchas ollas los guaraníes. Sus restos aparecen en el bajo río Uruguay.',
    'Dice la leyenda que quienes se animaban a cavar donde había aparecido la luz mala encontraban alfarería indígena. La explicación de la ciencia: esas luces pueden ser gases del suelo, como el metano de los bañados, que brillan de noche.'] }
];
const DIGS = FINDS.filter(f => !f.look && !f.luz && f.k !== 'placa').map(f => f.k);   // los cuatro del medio

// Lo fijo (se arma antes de unir el mundo): campamento, piedra con grabados y claros sin árboles
export function buildArqueo(w) {
  const b = w.batch, [cx, cz] = CAMP, y = w.groundAt(cx, cz);
  w.noTrees = (w.noTrees || []).concat(FINDS.map(f => [f.x - 4.5, f.x + 4.5, f.z - 4.5, f.z + 4.5]), [[cx - 7, cx + 8, cz - 7, cz + 6]]);
  // carpa, mesa con bandejas, zaranda y baldes
  const tx = cx + 3.6, tz = cz - 2.6, ty = w.groundAt(tx, tz);
  b.add(new THREE.ConeGeometry(2.4, 2.6, 4), 0xc9b07a, tx, ty + 1.3, tz, 1, 1, 1.4, 0, Math.PI / 4, 0); b.boxB(tx, ty, tz + 1.9, 1.1, 1.6, 0.06, 0x3a2e26); w.addCircle(tx, tz, 2.2);
  b.boxB(cx - 2.4, y + 0.85, cz - 1.2, 2.6, 0.1, 1.2, 0xd8c8a8); for (const ox of [-1.15, 1.15]) for (const oz of [-0.5, 0.5]) b.boxB(cx - 2.4 + ox, y, cz - 1.2 + oz, 0.08, 0.85, 0.08, 0x5d6268);
  for (const [ox, col] of [[-0.7, 0x8a5a3a], [0.3, 0x8d8f93], [1.0, 0xe6d8b8]]) { b.boxB(cx - 2.4 + ox, y + 0.95, cz - 1.2, 0.6, 0.06, 0.6, 0x2b2d33); b.sph(cx - 2.4 + ox, y + 1.05, cz - 1.2, 0.14, col); }
  w.addSolid(cx - 3.8, cx - 1.0, cz - 1.9, cz - 0.5, y + 1.1);
  { const zx = cx + 0.6, zz = cz - 3.2; b.boxB(zx, y + 0.75, zz, 1.3, 0.12, 0.9, 0x8a6a3a); b.boxB(zx, y + 0.8, zz, 1.1, 0.03, 0.7, 0x9aa0a4); for (const o of [-0.55, 0.55]) b.boxB(zx + o, y, zz, 0.07, 0.8, 0.07, 0x5d6268); w.addCircle(zx, zz, 0.8); }   // zaranda
  for (const [bx, bz, col] of [[cx + 1.6, cz + 0.6, 0x1d6fb8], [cx + 2.2, cz + 1.1, 0xe5484d]]) { b.cyl(bx, w.groundAt(bx, bz), bz, 0.26, 0.2, 0.44, col, 10); w.addCircle(bx, bz, 0.3); }
  sign(w, 'CAMPAMENTO ARQUEOLÓGICO', cx - 0.6, y, cz - 5.2, 0, 6.6, 1.0, { bg: '#5a3a1a', border: '#ffd23f' });
  // piedra con grabados al pie del cerro chato (siempre está: un misterio para quien pasa)
  const P = FINDS.find(f => f.k === 'petro'), py = w.groundAt(P.x, P.z);
  b.add(new THREE.IcosahedronGeometry(1, 1), 0x4b4440, P.x, py + 0.9, P.z, 2.2, 1.3, 1.6, 0, 0.4, 0); w.addCircle(P.x, P.z, 2.1);
  const tex = canvasTex(256, 180, cg => { cg.clearRect(0, 0, 256, 180); D.petro(cg, 128, 90, 1.25); });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.8), new THREE.MeshStandardMaterial({ map: tex, transparent: true, alphaTest: 0.25, roughness: 0.9 })); m.position.set(P.x, py + 1.05, P.z + 1.64); w.scene.add(m);
  w.addInter('arq:petro', P.x, P.z + 2.9, { console: false, h: 3, r: 2.2 });
}

export class Arqueo {
  constructor(game) {
    const g = this.g = game, w = g.world, sc = g.scene; this.got = new Set(); this.ever = new Set((hLoad().arq || []).filter(k => FINDS.some(f => f.k === k))); this.t = 0; this.luz = null; this.luzDone = false; this.luzOn = false;
    const VC = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.9 });
    this.root = new THREE.Group(); this.root.visible = false; sc.add(this.root);
    this.sites = {};
    for (const f of FINDS) {
      if (f.look) continue;
      const y = w.groundAt(f.x, f.z), b = new Batch(), done = new Batch();
      b.boxB(f.x, y - 0.04, f.z, 3.2, 0.1, 3.2, 0x6b4a2f);   // cuadrícula de excavación con jalones y piolín
      for (const ox of [-1.7, 1.7]) for (const oz of [-1.7, 1.7]) b.boxB(f.x + ox, y, f.z + oz, 0.07, 0.75, 0.07, 0xd8c8a8);
      for (const s of [-1.7, 1.7]) { b.boxB(f.x, y + 0.6, f.z + s, 3.4, 0.02, 0.02, 0xffffff); b.boxB(f.x + s, y + 0.6, f.z, 0.02, 0.02, 3.4, 0xffffff); }
      b.add(new THREE.IcosahedronGeometry(1, 1), 0x7a5034, f.x + 2.7, y + 0.1, f.z - 1.2, 1.0, 0.45, 0.8);   // montoncito de tierra
      b.boxB(f.x + 1.9, y, f.z + 1.9, 0.04, 1.3, 0.04, 0x2b2d33); b.box(f.x + 2.15, y + 1.15, f.z + 1.9, 0.5, 0.3, 0.02, 0xe5484d);   // banderita
      done.boxB(f.x, y - 0.03, f.z, 2.6, 0.06, 2.6, 0x3a2818); done.boxB(f.x + 1.9, y, f.z + 1.9, 0.04, 1.3, 0.04, 0x2b2d33); done.box(f.x + 2.15, y + 1.15, f.z + 1.9, 0.5, 0.3, 0.02, 0x57e389);
      const grp = new THREE.Group(), m = b.mesh(VC), md = done.mesh(VC); grp.add(m); md.visible = false; grp.add(md); grp.userData = { m, md };
      if (f.luz) grp.visible = false;
      this.root.add(grp); this.sites[f.k] = grp;
      w.addInter('arq:' + f.k, f.x - 2.3, f.z + 2.3, { console: false, h: 3, r: 2.4 });
    }
    // Laura, la arqueóloga
    const [cx, cz] = CAMP, lp = this.laura = makePerson({ skin: 0xe0ac86, shirt: 0xb59a6a, jacket: 0x7d6a48, pants: 0x5a4a32, hair: 0x5a3a22, pony: true, hat: 'ala', hatColor: 0xc9b07a, extra: 'pincel' });
    lp.group.position.set(cx, w.groundAt(cx, cz), cz); sc.add(lp.group); w.addInter('npc:laura', cx, cz + 0.6, { console: false, h: 3.6 });
    // la luz mala: un resplandor que flota a poca altura y se aleja cuando uno se acerca
    w.addInter('arq:luz', LUZ_A[0], LUZ_A[1], { console: false, h: 2 });
    this.luzP = { x: LUZ_A[0], z: LUZ_A[1], s: 0, sink: 0 };
    // vitrina
    this.btn(); $('bVit').onclick = () => this.openVitrina(); $('viClose').onclick = () => g.extras.close();
  }
  get on() { return this.g.missions.mode === 'arqueo'; }
  reset() { this.got.clear(); this.luzDone = false; this.luzOn = false; this.luzP = { x: LUZ_A[0], z: LUZ_A[1], s: 0, sink: 0 }; this.refresh(); }
  has(k) { return this.got.has(k); }
  digsDone() { return DIGS.filter(k => this.got.has(k)).length; }
  refresh() { for (const k in this.sites) { const s = this.sites[k], f = this.got.has(k); s.userData.m.visible = !f; s.userData.md.visible = f; if (FINDS.find(q => q.k === k).luz) s.visible = this.luzDone || f; } }
  steps(flag) {
    const left = DIGS.filter(k => !this.got.has(k)), n = DIGS.length - left.length;
    return [
      { text: 'Excavar junto al lago: hay una piedra con grabados', targets: ['arq:placa'], done: this.has('placa') },
      { text: `Excavar los otros sitios marcados en el mapa (${n}/4)`, targets: left.map(k => 'arq:' + k), done: !left.length },
      { text: 'Mirar la piedra con grabados al pie de un cerro chato', targets: ['arq:petro'], done: this.has('petro') },
      { text: 'Esperar la noche y seguir la luz mala del campo del sur', targets: this.luzOn ? ['arq:luz'] : [], done: this.luzDone },
      { text: 'Excavar donde se metió la luz', targets: ['arq:ceramica'], done: this.has('ceramica') },
      { text: 'Volver al campamento con Laura', targets: ['npc:laura'], done: flag('laura') }];
  }
  describe(id) {
    if (id === 'npc:laura') return { state: this.on && this.g.missions.active && this.ready() ? 'need' : 'ok', label: 'Hablar con Laura, la arqueóloga' };
    if (id === 'arq:luz') return { state: 'hidden' };
    if (!id.startsWith('arq:')) return null;
    const k = id.slice(4), f = FINDS.find(q => q.k === k); if (!f) return null;
    if (f.look) return { state: this.on && !this.has(k) ? 'need' : 'ok', label: this.has(k) ? 'Volver a mirar la piedra con grabados ✓' : 'Mirar la piedra con grabados' };
    if (!this.on || (f.luz && !this.luzDone && !this.has(k))) return { state: 'hidden' };
    return this.has(k) ? { state: 'ok', label: f.name + ' ✓ · ver la ficha' } : { state: 'need', label: 'Excavar con el pincel' };
  }
  ready() { return FINDS.every(f => this.has(f.k)); }
  everAll() { return FINDS.every(f => this.ever.has(f.k)); }
  wipe() { this.ever.clear(); this.btn(); }
  btn() { const b = $('bVit'); if (b) b.innerHTML = `Vitrina <small>${FINDS.filter(f => this.ever.has(f.k)).length}/${FINDS.length}</small>`; }
  interact(id) {
    const g = this.g, U = g.ui;
    if (id === 'npc:laura') {
      if (this.on && g.missions.active && this.ready()) { g.missions.flags.laura = true; return true; }
      if (this.on && g.missions.active) { const f = FINDS.find(q => !this.has(q.k) && (!q.luz || this.luzDone)); U.dialog([L('laura', f ? `Seguimos: falta ${f.name.toLowerCase()}, en ${f.place}. Mirá el mapa (tecla N): los sitios están marcados.` : 'Esperá a que se haga de noche y mirá hacia el campo del sur: los paisanos cuentan de una luz que anda por ahí…')]); return true; }
      U.dialog([L('laura', '¡Hola, Capi! Soy Laura, arqueóloga. Estudiamos lo que dejaron las personas que vivieron acá hace cientos y miles de años.'),
        L('laura', 'Cuando se construyó la represa, el agua iba a tapar muchos sitios. Entre 1976 y 1978 hubo una misión de rescate de la UNESCO para estudiarlos antes.'),
        L('laura', this.ever.size ? `Ya encontraste ${this.ever.size} de ${FINDS.length} hallazgos: están en la vitrina (botón «Vitrina»).` : 'Si querés excavar conmigo, elegí la «Expedición arqueológica» en la pantalla de inicio.')]);
      return true;
    }
    if (!id.startsWith('arq:')) return false;
    const k = id.slice(4), f = FINDS.find(q => q.k === k); if (!f || k === 'luz') return true;
    if (f.look) { if (!this.has(k) && this.on) this.found(f); else U.dialog(f.t.map(t => L('placa2', t)).concat(this.on ? [] : [L('placa2', '¿Quién los hizo, y cuándo? En la Expedición arqueológica, Laura te lo cuenta.')])); return true; }
    if (this.has(k)) { this.ficha(f); return true; }
    if (f.luz && !this.luzDone) return true;
    g.capi.work && g.capi.work(0.6);
    g.mg.start('excavar', { title: 'Excavación · ' + f.place, layers: f.layers, draw: (cg, x, y) => D[k](cg, x, y, 1.25) }, ok => { if (ok) this.found(f); });
    return true;
  }
  found(f) {
    const g = this.g; this.got.add(f.k); this.ever.add(f.k); hSave(g, 'arq', this.ever); this.refresh(); this.btn();
    const it = g.world.inter['arq:' + f.k]; if (it) { g.fx.sparks(it.x + 2.3, (it.y || 2) + 1.2, it.z - 2.3, 24, 0xffd23f); }
    g.audio.fanfare && g.audio.fanfare(); g.capi.celebrate && g.capi.celebrate(1.4);
    g.ui.toast('¡HALLAZGO!', f.name, 3); this.ficha(f);
    if (this.on && !this.luzOn && this.has('placa') && this.has('petro') && this.digsDone() >= DIGS.length) this.startNight();
  }
  ficha(f) {
    const g = this.g; g.ui.dialog([L('laura', `${f.name} · ${f.age.toLowerCase()}. Lo encontramos en ${f.place}.`)].concat(f.t.map(t => L('laura', t))));
  }
  startNight() {
    const g = this.g, G = g.grid, M = g.missions; this.luzOn = true;
    if (!(G.hour > 20.4 || G.hour < 5)) { M.lapse = { to: 20.8, rate: 1 / 90, hold: 23.6 }; G.clockRate = 7; G.holdAt = 20.8; }
    setTimeout(() => g.ui.note('Laura: “Se hace de noche. En el campo del sur los paisanos ven una luz que se mueve… ¿Vamos a ver?”', 7), 2500);
  }
  // ---------- vitrina ----------
  openVitrina() {
    const g = this.g; if (g.locked) return; if (g.extras.open) $(g.extras.open).classList.add('hidden'); g.extras.open = 'vitrina'; g.audio.click();
    const box = $('viList'); box.textContent = '';
    for (const f of FINDS) {
      const got = this.ever.has(f.k) || this.got.has(f.k), card = document.createElement('div'); card.className = 'faCard' + (got ? '' : ' unk');
      const cv = document.createElement('canvas'); cv.width = 160; cv.height = 120; const cg = cv.getContext('2d'); cg.fillStyle = got ? '#e8dcc0' : '#2a3a55'; cg.fillRect(0, 0, 160, 120);
      if (got) D[f.k](cg, 80, 60, 0.62); else { cg.globalAlpha = 0.35; D[f.k](cg, 80, 60, 0.62); cg.globalAlpha = 1; cg.fillStyle = 'rgba(17,25,43,.75)'; cg.fillRect(0, 0, 160, 120); cg.fillStyle = '#ffd23f'; cg.font = '900 44px "Lilita One",sans-serif'; cg.textAlign = 'center'; cg.fillText('?', 80, 76); }
      card.appendChild(cv); const t = document.createElement('div');
      t.innerHTML = got ? `<b>${f.name}</b><small>${f.age} · ${f.place}</small><p>${f.t[0]}</p>` : `<b>?</b><small>Pista: ${f.place}</small><p>${f.luz ? 'Dicen que una luz de noche marca dónde está.' : 'En la Expedición arqueológica, con el pincel.'}</p>`;
      card.appendChild(t); box.appendChild(card);
    }
    $('viCount').textContent = `${FINDS.filter(f => this.ever.has(f.k)).length} de ${FINDS.length}`;
    if (g.secretos) g.secretos.fill();
    $('vitrina').classList.remove('hidden');
  }

  update(dt, st) {
    const g = this.g, t = this.t += dt, w = g.world, cp = st.capi, on = this.on;
    this.root.visible = on;
    // Laura mira a Capi
    { const p = this.laura.group.position, d = Math.hypot(cp.x - p.x, cp.z - p.z); let dh = (d < 10 ? Math.atan2(cp.x - p.x, cp.z - p.z) : 0) - this.laura.group.rotation.y; dh = Math.atan2(Math.sin(dh), Math.cos(dh)); this.laura.group.rotation.y += dh * Math.min(1, dt * 4);
      this.laura.armR.rotation.x = st.talking === 'laura' ? -1.2 + Math.sin(t * 7) * 0.35 : -0.25 + Math.sin(t * 1.3) * 0.1; w.dynCircles.push({ x: p.x, z: p.z, r: 0.6 }); }
    // la luz mala: de noche en cualquier partida; en la expedición, recién cuando Laura la busca
    const h = st.grid.hour, night = h > 20.3 || h < 5.2, show = night && (on ? this.luzOn && !this.luzDone : !this.luzDone) && g.mode === 'play' && !g.viajes.cur, P = this.luzP, it = w.inter['arq:luz'];
    if (show) {
      const dx = LUZ_B[0] - LUZ_A[0], dz = LUZ_B[1] - LUZ_A[1], len = Math.hypot(dx, dz), dC = Math.hypot(cp.x - P.x, cp.z - P.z);
      if (P.s < len) { if (dC < 13) P.s = Math.min(len, P.s + (13 - dC) * 0.9 * dt + 0.6 * dt); P.x = LUZ_A[0] + dx / len * P.s + Math.sin(t * 0.9) * 1.2; P.z = LUZ_A[1] + dz / len * P.s + Math.cos(t * 0.7) * 1.2; }
      else { P.sink = Math.min(1, P.sink + dt * 0.5); P.x = LUZ_B[0]; P.z = LUZ_B[1]; if (P.sink >= 1 && Math.hypot(cp.x - P.x, cp.z - P.z) < 6) this.luzReached(); }
      const y = w.groundAt(P.x, P.z) + (1.6 + Math.sin(t * 2.3) * 0.35) * (1 - P.sink), a = (0.75 + Math.sin(t * 9) * 0.15 + Math.sin(t * 23) * 0.08) * (1 - P.sink * 0.7);
      st.fx.glow.sprite(P.x, y, P.z, 3.4 * (1 - P.sink * 0.5), 0xbff7a6, a); st.fx.glow.sprite(P.x, y, P.z, 1.2, 0xffffff, a);
      if (P.sink >= 1) st.fx.glow.sprite(P.x, w.groundAt(P.x, P.z) + 0.15, P.z, 4.5, 0xbff7a6, 0.35 + Math.sin(t * 3) * 0.1);
      if (it) { it.x = P.x; it.z = P.z; }
    }
  }
  luzReached() {
    const g = this.g; if (this.luzDone) return; this.luzDone = true; this.refresh();
    if (g.secretos) g.secretos.found('luz');
    if (this.on) g.ui.dialog([L('laura', '¡Se metió en la tierra, justo acá! Dice la leyenda que donde aparece la luz mala hay algo enterrado.'), L('laura', 'Marqué una cuadrícula. Probá con el pincel, despacito.')]);
    else g.ui.dialog([L('secreto', 'La luz se apagó y se metió en la tierra. Dicen los paisanos que donde aparece la luz mala hay algo enterrado…'), L('secreto', 'La ciencia dice que esas luces pueden ser gases del suelo que brillan de noche. ¿Querés saber qué hay abajo? Probá la Expedición arqueológica.')]);
  }
}
