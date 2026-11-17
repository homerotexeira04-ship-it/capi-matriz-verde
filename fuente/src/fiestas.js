// Modo festivo (se elige desde el modo guía y queda guardado en la PC): Carnaval, Día del Patrimonio y Fin de año.
// Decoraciones de temporada en la plaza y la rambla, gente que celebra, sonido y frases de los personajes.
import * as THREE from 'three';
import { makePerson } from './actors.js';
import { canvasTex, textTex } from './world.js';
import { clamp } from './util.js';

export const FIESTAS = { carnaval: 'Carnaval', patrimonio: 'Día del Patrimonio', fiestas: 'Fin de año' };
const TAG = { carnaval: 'Edición Carnaval', patrimonio: 'Edición Día del Patrimonio', fiestas: '¡Felices fiestas!' };
const PAL = {
  carnaval: [0xe6007e, 0xffc420, 0x2ed3c6, 0x6a2c91, 0xff6b35, 0x57e389],
  patrimonio: [0x5aa9e6, 0xffffff],
  fiestas: [0xff3b3b, 0xffd23f, 0x57e389, 0x5ad1ff, 0xff8fab, 0xffffff]
};
// La primera vez que se habla con cada personaje en la partida, saluda con algo de la fiesta
const LINES = {
  carnaval: {
    mateo: '¡Se oyen los tambores desde la cuchilla, m\'hijo! Chico, repique y piano: así suena el candombe.',
    lucia: '¡Esta noche hay llamadas en la rambla! La flota eléctrica lleva a la gente al desfile sin echar humo.',
    valeria: 'En Carnaval la ciudad trasnocha y la demanda de la noche sube. Hay que tener la red bien afinada.',
    guia: '¿Escuchás los tambores? El candombe nació de las comunidades afrodescendientes del Uruguay y hoy es Patrimonio Cultural Inmaterial de la Humanidad.',
    beto: 'Con tanto tambor no pica ni un bagre... ¡pero qué lindo que suena!'
  },
  patrimonio: {
    valeria: 'Hoy es el Día del Patrimonio. Las represas y las centrales también son parte de nuestra historia.',
    guia: '¡Hoy es el Día del Patrimonio! Cada año, un fin de semana de octubre, museos, edificios y lugares históricos de todo el país abren sus puertas.',
    mateo: 'El rancho, el ombú y los molinos de agua de las estancias también son patrimonio, m\'hijo. Cuentan cómo se vivía en el campo.',
    lucia: 'Hoy los ómnibus van llenos: todo el mundo sale a recorrer edificios históricos.'
  },
  fiestas: {
    valeria: 'Las luces del arbolito son LED: alumbran lo mismo gastando mucha menos energía.',
    mateo: 'Acá la Nochebuena cae en pleno verano, m\'hijo: la cena se hace en el patio, al fresco.',
    lucia: '¡Felices fiestas, Capi! Hoy la flota hace horario especial para que todos lleguen a la cena.',
    guia: '¡Felices fiestas! El año que viene los esperamos en Energimundo.',
    rosa: 'Para las fiestas no falta la ensalada de frutas, ¡y las naranjas de Salto le dan el toque!',
    sofi: 'En las fiestas las termas se llenan de turistas: el agua calentita gusta hasta en verano.'
  }
};
// Recorrido de la visita guiada: escenario → lado este → fuente → vuelta (sin cruzar al grupo escolar del oeste)
const TOUR = [[-44, 37.2, 7], [-37.2, 37.6, 0], [-37.2, 47.2, 0], [-44, 48.9, 7], [-37.2, 47.2, 0], [-37.2, 37.6, 0]];
const SKINS = [0x9a6b4b, 0xc58b62, 0x6b4a33, 0xe0ac86, 0xf1c9a5, 0x8a5a3c];
const HAIRS = [0x1a1412, 0x3b2a1e, 0x6b4a2a, 0xd8c08a, 0x2b2b2b];
const mat = c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.75 });

export class Fiestas {
  constructor(game) { this.g = game; this.mode = null; this.sets = {}; this.seen = {}; this.soft = 0; this.t = 0; this.fwT = 2; this.cfT = 3; this.solids = []; }

  set(k) {
    k = FIESTAS[k] ? k : null; this.mode = k; this.seen = {}; this.count = 0; this.bigFw = 0;
    if (k && !this.sets[k]) this.sets[k] = this.build(k);
    for (const [m, s] of Object.entries(this.sets)) s.root.visible = m === k;
    this.solids = k ? this.sets[k].solids : [];
    const tag = document.getElementById('festTag'); if (tag) { tag.textContent = k ? TAG[k] : ''; tag.classList.toggle('hidden', !k); }
    document.body.dataset.fest = k || '';
  }
  present(who) { if (who === 'marta') { const h = this.g.grid.hour; return h >= 9 && h < 19.5; } return true; }
  line(who) { const k = this.mode; if (!k || this.seen[who]) return null; const l = LINES[k][who]; if (l) this.seen[who] = true; return l || null; }

  // ---------- Construcción ----------
  anchors() {
    const L = this.g.world.lamps, top = l => new THREE.Vector3(l.x, l.y + 4.3, l.z);
    const plaza = L.filter(l => l.x > -59 && l.x < -29 && l.z > 28 && l.z < 54).sort((a, b) => Math.atan2(a.z - 41, a.x + 44) - Math.atan2(b.z - 41, b.x + 44)).map(top);
    const ramb = L.filter(l => Math.abs(l.z - 75.1) < 0.3).sort((a, b) => a.x - b.x).map(top);
    const ring = plaza.map((p, i) => [p, plaza[(i + 1) % plaza.length], 0.9]);
    const rambla = []; for (let i = 0; i + 1 < ramb.length; i++) if (ramb[i + 1].x - ramb[i].x < 9) rambla.push([ramb[i], ramb[i + 1], 0.55]);
    const find = (x, z) => plaza.reduce((b, p) => (Math.hypot(p.x - x, p.z - z) < Math.hypot(b.x - x, b.z - z) ? p : b));
    const cross = [[find(-57.6, 29.4), find(-30.4, 52.6), 1.1], [find(-30.4, 29.4), find(-57.6, 52.6), 1.1]];
    return { ring, rambla, cross };
  }
  garlands(S, pairs, kind, pal) {
    const items = [], pts = [], up = new THREE.Vector3();
    for (const [a, b, sag] of pairs) {
      const len = a.distanceTo(b), n = Math.max(2, Math.round(len / (kind === 'flags' ? 0.72 : 0.55))), dip = sag * Math.min(len / 9, 2.4);
      const p = t => new THREE.Vector3().lerpVectors(a, b, t).add(up.set(0, -dip * 4 * t * (1 - t), 0));
      let prev = p(0); for (let i = 1; i <= n * 2; i++) { const q = p(i / (n * 2)); pts.push(prev, q); prev = q; }
      const ry = Math.atan2(-(b.z - a.z), b.x - a.x);
      for (let i = 1; i < n; i++) items.push({ p: p(i / n), ry, c: new THREE.Color(pal[(i + items.length) % pal.length]) });
    }
    S.root.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x2a2a2a })));
    let geo, m;
    if (kind === 'flags') { geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute([-0.21, 0, 0, 0.21, 0, 0, 0, -0.46, 0], 3)); geo.computeVertexNormals(); m = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, roughness: 0.8 }); }
    else { geo = new THREE.SphereGeometry(0.085, 6, 4); m = new THREE.MeshBasicMaterial(); }
    const im = new THREE.InstancedMesh(geo, m, items.length); im.frustumCulled = false;
    items.forEach((it, i) => { im.setColorAt(i, it.c); });
    S.root.add(im); S.anim.push({ im, items, kind });
    this.pose(S.anim[S.anim.length - 1], 0, 0);
  }
  pose(A, t, night) {
    const m4 = this.m4 || (this.m4 = new THREE.Matrix4()), q = this.q || (this.q = new THREE.Quaternion()), e = this.e || (this.e = new THREE.Euler(0, 0, 0, 'YXZ')), one = this.one || (this.one = new THREE.Vector3(1, 1, 1)), c = this.c || (this.c = new THREE.Color());
    if (A.kind === 'flags') { A.items.forEach((it, i) => { e.set(Math.sin(t * 2.6 + i * 0.9) * 0.35, it.ry, 0, 'YXZ'); q.setFromEuler(e); m4.compose(it.p, q, one); A.im.setMatrixAt(i, m4); }); A.im.instanceMatrix.needsUpdate = true; }
    else {
      if (!A.placed) { A.items.forEach((it, i) => { m4.makeTranslation(it.p.x, it.p.y - 0.06, it.p.z); A.im.setMatrixAt(i, m4); }); A.im.instanceMatrix.needsUpdate = true; A.placed = true; }
      A.items.forEach((it, i) => { const k = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(t * 2.3 + i * 1.7)); c.copy(it.c).multiplyScalar(lerpN(0.55, k * 1.15, night)); A.im.setColorAt(i, c); }); A.im.instanceColor.needsUpdate = true;
    }
  }
  build(k) {
    const g = this.g, S = { root: new THREE.Group(), anim: [], people: [], solids: [] }, an = this.anchors();
    g.scene.add(S.root);
    if (k === 'carnaval') {
      this.garlands(S, an.ring.concat(an.cross, an.rambla), 'flags', PAL.carnaval);
      for (const [x, cA, cB] of [[-52.2, '#6a2c91', '#ffc420'], [-35.8, '#e6007e', '#ffffff']]) { const e = estandarte(cA, cB, 1); e.position.set(x, 2.2, 36.6); S.root.add(e); S.solids.push({ x, z: 36.6, r: 0.3 }); }
      // Llamadas por la rambla al caer la tarde: estandarte adelante y la cuerda de tambores atrás
      const P = S.parade = { x: -12, members: [] };
      const bearer = makePerson({ skin: SKINS[2], shirt: 0xffc420, pants: 0x6a2c91, hair: HAIRS[0] }); const st = estandarte('#2ed3c6', '#ffc420', 0.62); st.position.set(0.55, 0.9, 0.1); st.rotation.y = Math.PI / 2; bearer.group.add(st); bearer.armR.rotation.x = -0.9;
      P.members.push({ p: bearer, dx: 0, dz: 73.4, drum: false });
      for (let i = 0; i < 6; i++) { const p = makePerson({ skin: SKINS[i % SKINS.length], shirt: PAL.carnaval[i % 6], pants: 0xffffff, hair: HAIRS[i % HAIRS.length] }); p.group.add(tamboril(i)); P.members.push({ p, dx: 2.6 + Math.floor(i / 2) * 1.6, dz: i % 2 ? 73.9 : 72.9, drum: true, i }); }
      for (const mb of P.members) S.root.add(mb.p.group);
      // Personajes típicos del candombe bailando en la plaza: Mama Vieja (se puede hablar con ella), Gramillero y Escobero
      const mama = makePerson({ skin: 0x6b4a33, shirt: 0xffffff, pants: 0xffffff, hair: 0x1a1412 }); mama.group.add(skirt(0xffffff, 0xe6007e));
      const scarf = new THREE.Mesh(new THREE.SphereGeometry(0.37, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), mat(0xf4f1ea)); scarf.position.y = 0.08; mama.head.add(scarf);
      mama.armR.add(held(parasol(), 0)); mama.armL.add(held(fan(), 0, -0.05));
      const gram = makePerson({ skin: 0x5a3c2a, shirt: 0x26262b, pants: 0x26262b, hair: 0xe2e2e2 }); gram.head.add(topHat()); const beard = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.34, 0.14), mat(0xf2f2f2)); beard.position.set(0, -0.2, 0.3); gram.head.add(beard);
      const cane = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.0, 5), mat(0x5a3a22)); cane.position.set(0, -1.2, 0.05); gram.armR.add(cane);
      const bag = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.26, 0.14), mat(0x7a4b23)); bag.position.set(0, -0.92, 0.08); gram.armL.add(bag);
      const esc = makePerson({ skin: 0x7a5238, shirt: 0xffffff, pants: 0xffffff, hair: 0x1a1412, hat: 'gorra', hatColor: 0xe6007e }); const broom = escoba(); esc.armR.add(broom);
      S.cast = { kind: 'carnaval', list: [
        { p: mama, key: 'mamavieja', x: -36.6, z: 40.6, ry: 0.4, dance: 'mama' },
        { p: gram, x: -38.2, z: 41.7, ry: 0.6, dance: 'gram' },
        { p: esc, x: -34.9, z: 41.9, ry: 0.1, dance: 'esc', broom }] };
    }
    if (k === 'patrimonio') {
      this.garlands(S, an.ring.concat(an.rambla), 'flags', PAL.patrimonio);
      // Arco de bienvenida en la entrada norte de la plaza
      const arch = new THREE.Group(), tex = textTex('DÍA DEL PATRIMONIO', { w: 1024, h: 160, bg: '#2f7fc1', fg: '#ffffff', border: '#ffffff', size: 92 });
      for (const sx of [-1, 1]) { const post = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 4.5, 8), mat(0xf2efe8)); post.position.set(sx * 3.7, 2.25, 0); arch.add(post); S.solids.push({ x: -44 + sx * 3.7, z: 52.1, r: 0.25 }); }
      for (const ry of [0, Math.PI]) { const bn = new THREE.Mesh(new THREE.PlaneGeometry(7.2, 1.15), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8 })); bn.position.set(0, 3.85, ry ? -0.02 : 0.02); bn.rotation.y = ry; arch.add(bn); }
      arch.position.set(-44, 2.2, 52.1); S.root.add(arch);
      // Visita guiada por la plaza
      const guide = makePerson({ skin: SKINS[1], shirt: 0x2f7fc1, pants: 0x2b3a55, hair: HAIRS[1], hat: 'gorra', hatColor: 0xffffff });
      const fl = new THREE.Group(), stick = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.6, 5), mat(0x3a3a3a)); stick.position.y = 0.8; fl.add(stick);
      const fm = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.36), new THREE.MeshStandardMaterial({ map: flagTex(), side: THREE.DoubleSide })); fm.position.set(0.28, 1.42, 0); fl.add(fm); fl.position.set(0, -0.8, 0.1); fl.rotation.x = Math.PI; guide.armR.add(fl); guide.armR.rotation.x = -2.5;
      const T = S.tour = { guide, x: TOUR[0][0], z: TOUR[0][1], h: 0, i: 0, wait: 3, vis: [] };
      S.root.add(guide.group);
      const OFF = [[-0.9, -1.6], [0.9, -1.7], [0, -2.6], [-1.6, -2.7], [1.6, -2.8], [-0.7, -3.7], [0.8, -3.8]];
      OFF.forEach((o, i) => { const p = makePerson({ skin: SKINS[(i + 2) % SKINS.length], shirt: [0xd4483b, 0x57e389, 0xffc420, 0x9b6bd8, 0xff8fab, 0x5ad1ff, 0xf2efe8][i], pants: [0x2b3a55, 0x4a3b2a, 0x2b2b2b][i % 3], hair: HAIRS[(i + 1) % HAIRS.length], scale: i === 4 ? 0.78 : 1 }); p.group.position.set(TOUR[0][0] + o[0], 2.2, TOUR[0][1] + o[1]); S.root.add(p.group); T.vis.push({ p, o, x: TOUR[0][0] + o[0], z: TOUR[0][1] + o[1] }); });
    }
    if (k === 'fiestas') {
      this.garlands(S, an.ring.concat(an.cross, an.rambla), 'bulbs', PAL.fiestas);
      // Papá Noel junto al arbolito, con su bolsa de regalos y dos chicos haciendo cola
      const noel = makePerson({ skin: 0xf1c9a5, shirt: 0xd42a2a, pants: 0xd42a2a, hair: 0xf4f4f4 }); santa(noel);
      const kids = [0, 1].map(i => makePerson({ skin: SKINS[i * 3 % SKINS.length], shirt: [0x5ad1ff, 0xffd23f][i], pants: 0x23395d, hair: HAIRS[i], scale: 0.62 }));
      S.cast = { kind: 'fiestas', list: [{ p: noel, key: 'papanoel', x: -34, z: 42.6, ry: -0.5, dance: 'noel' }, { p: kids[0], x: -33.0, z: 44.1, ry: Math.PI + 0.6, dance: 'kid' }, { p: kids[1], x: -32.3, z: 45.0, ry: Math.PI + 0.6, dance: 'kid' }] };
      const tree = arbolito(); tree.group.position.set(-36.8, 2.2, 41); S.root.add(tree.group); S.anim.push(tree.lights); S.solids.push({ x: -36.8, z: 41, r: 1.5 });
    }
    if (S.cast) for (const c of S.cast.list) { c.p.group.position.set(c.x, 2.2, c.z); c.p.group.rotation.y = c.ry; S.root.add(c.p.group); S.solids.push({ x: c.x, z: c.z, r: 0.55 }); }
    return S;
  }
  // Baile y gestos de los personajes de la fiesta; miran a Capi cuando se acerca o cuando hablan con él
  animCast(C, dt, t, st) {
    const cp = st.capi;
    for (const c of C.list) {
      const p = c.p, g = p.group, d = Math.hypot(cp.x - c.x, cp.z - c.z), talk = c.key && st.talking === c.key, face = c.key && (talk || d < 5);
      let ry = c.ry, y = 2.2, rz = 0, rx = 0;
      if (c.dance === 'mama') { ry += Math.sin(t * 1.6) * 0.6; rz = Math.sin(t * 3.2) * 0.07; y += Math.abs(Math.sin(t * 3.2)) * 0.04; p.armR.rotation.x = -2.3 + Math.sin(t * 1.6) * 0.2; p.armL.rotation.x = -1.1 + Math.sin(t * 3.2) * 0.45; }
      if (c.dance === 'gram') { ry += Math.sin(t * 0.9) * 0.9; rx = 0.2; y += Math.abs(Math.sin(t * 4.1)) * 0.12; p.armR.rotation.x = -0.35 + Math.sin(t * 4.1) * 0.45; p.legL.rotation.x = Math.max(0, Math.sin(t * 4.1)) * 0.6; p.legR.rotation.x = Math.max(0, -Math.sin(t * 4.1)) * 0.6; }
      if (c.dance === 'esc') { ry += t * 1.4; y += Math.abs(Math.sin(t * 5)) * 0.16; p.armR.rotation.x = -2.7; c.broom.rotation.y += dt * 9; p.armL.rotation.x = -0.8 + Math.sin(t * 5) * 0.5; }
      if (c.dance === 'noel') { g.scale.y = 1 + Math.sin(t * 2.2) * 0.012; p.armL.rotation.x = d < 8 ? -2.8 + Math.sin(t * 8) * 0.3 : -0.2; }
      if (c.dance === 'kid') { y += Math.abs(Math.sin(t * 3 + c.x)) * 0.05; p.armR.rotation.x = Math.sin(t * 2 + c.x) > 0.9 ? -2.6 : 0; }
      if (face) { ry = Math.atan2(cp.x - c.x, cp.z - c.z); rz = 0; rx = 0; if (talk) p.armR.rotation.x = -1.2 + Math.sin(t * 7) * 0.35; }
      g.position.set(c.x, y, c.z); g.rotation.set(rx, ry, rz);
    }
  }
  // El momento fuerte de la fiesta, a pedido del modo guía
  kick() {
    const g = this.g, G = g.grid, k = this.mode, S = k && this.sets[k], c = g.capi.pos, play = g.mode === 'play'; if (!S) return;
    if (k === 'carnaval') { G.hour = 19.5; S.parade.x = clamp(c.x + 9, -76, -16); this.cfT = 0.5; if (play) g.ui.note(c.z > 55 ? '¡Ahí vienen las llamadas por la rambla!' : '¡Arrancan las llamadas en la rambla! Bajá a verlas.', 6); }
    if (k === 'patrimonio') { G.hour = 10.5; const T = S.tour; T.i = 0; T.wait = 2; T.x = TOUR[0][0]; T.z = TOUR[0][1]; T.vis.forEach(v => { v.x = T.x + v.o[0]; v.z = T.z + v.o[1]; }); if (play) g.ui.note('Arranca la visita guiada del Día del Patrimonio en la Plaza Matriz.', 6); }
    if (k === 'fiestas') { G.hour = 23.9; this.count = 10.999; this.countN = 11; }
  }
  countdown(dt, st) {
    if (!(this.count > 0)) return; const g = this.g, play = g.mode === 'play';
    this.count -= dt; g.grid.hour = 23.97; const n = Math.ceil(this.count);
    if (n < this.countN && n > 0) { this.countN = n; if (play) g.ui.toast(String(n), 'Cuenta regresiva para el Año Nuevo', 1.05); g.audio && g.audio.tone(660 + (10 - n) * 30, 0.12, 'triangle', 0.08); }
    if (this.count <= 0) {
      this.count = 0; g.grid.hour = 0.02; this.bigFw = 22; this.fwT = 0;
      if (play) { g.ui.toast('¡FELIZ AÑO NUEVO!', 'Que el año que viene sea 100 % renovable', 5); g.confetti && g.confetti(90); const cp = g.capi.pos; st.fx.confetti(cp.x, cp.y + 3, cp.z, 120); g.capi.celebrate && g.capi.celebrate(3); }
      g.audio && g.audio.fanfare();
    }
  }

  // ---------- Cada cuadro ----------
  update(dt, st) {
    this.soft = 0; const k = this.mode; if (!k) return; if (this.bigFw > 0) this.bigFw -= dt;
    const S = this.sets[k], g = this.g, t = (this.t += dt), h = st.hour, night = st.night;
    const L = g.mode === 'play' ? st.capi : st.focus;
    const w = g.world; if (w.dynCircles) for (const s of this.solids) w.dynCircles.push(s);
    this.flutT = (this.flutT || 0) - dt; const flut = this.flutT <= 0; if (flut) this.flutT = 1 / 24;
    for (const A of S.anim) if (A.kind !== 'flags' || flut) this.pose(A, t, night);
    if (k === 'carnaval') {
      const P = S.parade, on = h >= 17 || h < 1;
      if (st.demo && st.focus.z > 60 && Math.abs(P.x - st.focus.x) > 22) P.x = st.focus.x + 5;   // en la demostración, el desfile aparece en cámara
      if (on) { P.x -= 0.85 * dt; if (P.x < -86) P.x = -10; }
      for (const mb of P.members) {
        const p = mb.p, x = P.x + mb.dx, vis = on && x > -84 && x < -9; p.group.visible = vis; if (!vis) continue;
        const ph = t * 5.2 + mb.dx; p.group.position.set(x, 2.2 + Math.abs(Math.sin(ph)) * 0.07, mb.dz); p.group.rotation.y = -Math.PI / 2 + Math.sin(t * 1.5 + mb.dx) * 0.12;
        p.legL.rotation.x = Math.sin(ph) * 0.45; p.legR.rotation.x = -Math.sin(ph) * 0.45;
        if (mb.drum) { p.armR.rotation.x = -1.0 - Math.abs(Math.sin(t * 12.2 + mb.i * 0.7)) * 0.8; p.armL.rotation.x = -0.7 - Math.abs(Math.sin(t * 6.1 + mb.i)) * 0.6; }
      }
      if (on) {
        const d = Math.hypot(L.x - (P.x + 5), L.z - 73.4); this.soft = clamp(1 - d / 42, 0, 1);
        if (this.soft > 0.2 && (this.cfT -= dt) <= 0) { this.cfT = 5 + Math.random() * 5; st.fx && st.fx.confetti && st.fx.confetti(P.x + 4, 5.2, 73.4, 36); }
      }
    }
    if (k === 'patrimonio') this.tour(S.tour, dt, t, h, st);
    if (S.cast) this.animCast(S.cast, dt, t, st);
    this.countdown(dt, st);
    if (k === 'fiestas' && (h >= 20.5 || h < 1.5 || this.bigFw > 0) && !g.cine && (this.fwT -= dt) <= 0) {
      this.fwT = this.bigFw > 0 ? 0.25 + Math.random() * 0.35 : 2.2 + Math.random() * 3.2; const x = -72 + Math.random() * 62, z = -6 + Math.random() * 26;   // al norte, detrás de la ciudad vista desde la cámara
      st.fx.firework(x, 24 + Math.random() * 16, z, PAL.fiestas[Math.floor(Math.random() * PAL.fiestas.length)]);
      if (Math.hypot(L.x - x, L.z - z) < 110 && g.audio) g.audio.boom();
    }
  }
  tour(T, dt, t, h, st) {
    const on = h >= 9 && h < 19.5, all = [T.guide].concat(T.vis.map(v => v.p)); all.forEach(p => { p.group.visible = on; }); if (!on) return;
    let moving = false; const cp = st.capi, dC = Math.hypot(cp.x - T.x, cp.z - T.z);
    if (dC < 4 || st.talking === 'marta') T.wait = Math.max(T.wait, 1.2);   // espera a Capi
    if (T.wait > 0) T.wait -= dt;
    else {
      const [tx, tz] = TOUR[(T.i + 1) % TOUR.length], dx = tx - T.x, dz = tz - T.z, d = Math.hypot(dx, dz);
      if (d < 0.15) { T.i = (T.i + 1) % TOUR.length; T.wait = TOUR[T.i][2]; }
      else { const s = Math.min(d, 0.75 * dt); T.x += dx / d * s; T.z += dz / d * s; T.h = Math.atan2(dx, dz); moving = true; }
    }
    const G = T.guide, ph = t * 6;
    G.group.position.set(T.x, 2.2, T.z); G.group.rotation.y = moving ? T.h : dC < 6 ? Math.atan2(cp.x - T.x, cp.z - T.z) : T.h + Math.PI;
    const it = this.g.world.inter['npc:marta']; if (it) { it.x = T.x; it.z = T.z; it.group.position.x = T.x; it.group.position.z = T.z; }
    if (this.g.world.dynCircles) this.g.world.dynCircles.push({ x: T.x, z: T.z, r: 0.55 });
    G.legL.rotation.x = moving ? Math.sin(ph) * 0.5 : 0; G.legR.rotation.x = moving ? -Math.sin(ph) * 0.5 : 0; G.armL.rotation.x = moving ? 0 : -0.4 + Math.sin(t * 2) * 0.3;
    const c = Math.cos(T.h), s = Math.sin(T.h);
    T.vis.forEach((v, i) => {
      const ox = v.o[0], oz = v.o[1] * (moving ? 1 : 0.8), tx = T.x + ox * c + oz * s, tz = T.z - ox * s + oz * c, dx = tx - v.x, dz = tz - v.z, d = Math.hypot(dx, dz), p = v.p;
      const walk = d > 0.25; if (walk) { const st = Math.min(d, (0.6 + d * 0.5) * dt); v.x += dx / d * st; v.z += dz / d * st; }
      p.group.position.set(v.x, 2.2, v.z);
      p.group.rotation.y = walk ? Math.atan2(dx, dz) : Math.atan2(T.x - v.x, T.z - v.z);
      const q = t * 6 + i; p.legL.rotation.x = walk ? Math.sin(q) * 0.45 : 0; p.legR.rotation.x = walk ? -Math.sin(q) * 0.45 : 0;
    });
  }
}

const lerpN = (a, b, k) => a + (b - a) * k;

// Estandarte de comparsa: paño de color con media luna y estrellas, flecos dorados
function estandarte(cA, cB, s) {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 4.6, 6), mat(0xd9b45a)); pole.position.y = 2.3; g.add(pole);
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.6, 5), mat(0xd9b45a)); bar.rotation.z = Math.PI / 2; bar.position.y = 4.3; g.add(bar);
  const tip = new THREE.Mesh(new THREE.OctahedronGeometry(0.14, 0), new THREE.MeshStandardMaterial({ color: 0xffd23f, emissive: 0x8a6a10, roughness: 0.4 })); tip.position.y = 4.72; g.add(tip);
  const tex = canvasTex(256, 360, (c, W, H) => {
    c.fillStyle = cA; c.fillRect(0, 0, W, H - 40);
    c.fillStyle = '#ffd23f'; for (let x = 6; x < W; x += 14) c.fillRect(x, H - 42, 6, 40);
    c.lineWidth = 10; c.strokeStyle = cB; c.strokeRect(10, 10, W - 20, H - 70);
    c.fillStyle = '#ffd23f'; c.beginPath(); c.arc(128, 150, 62, 0, Math.PI * 2); c.fill(); c.fillStyle = cA; c.beginPath(); c.arc(152, 136, 56, 0, Math.PI * 2); c.fill();
    const star = (x, y, r) => { c.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.42 : r; c.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } c.closePath(); c.fill(); };
    c.fillStyle = cB; star(176, 92, 20); star(196, 160, 14); star(70, 236, 16); star(186, 232, 12);
    c.fillStyle = '#ffffff'; c.font = '34px "Lilita One","Arial Black",sans-serif'; c.textAlign = 'center'; c.fillText('CARNAVAL', 128, 290);
  });
  const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.97), new THREE.MeshStandardMaterial({ map: tex, side: THREE.DoubleSide, roughness: 0.85 })); flag.position.set(0, 3.3, 0.04); g.add(flag);
  g.scale.setScalar(s); return g;
}
function held(obj, dy = 0, dz = 0.05) { const g = new THREE.Group(); g.add(obj); g.position.set(0, -0.78 + dy, dz); g.rotation.x = Math.PI; return g; }   // objeto en la mano, saliendo hacia afuera del brazo
function skirt(col, band) { const g = new THREE.Group(), s = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.68, 1.05, 12), mat(col)); s.position.y = 0.53; g.add(s); const b = new THREE.Mesh(new THREE.CylinderGeometry(0.64, 0.685, 0.14, 12), mat(band)); b.position.y = 0.12; g.add(b); return g; }
function parasol() { const g = new THREE.Group(), st = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 1.2, 5), mat(0x3a3a3a)); st.position.y = 0.5; g.add(st); const c = new THREE.Mesh(new THREE.ConeGeometry(0.72, 0.34, 10, 1, true), new THREE.MeshStandardMaterial({ color: 0xe6007e, side: THREE.DoubleSide, roughness: 0.8 })); c.position.y = 1.0; g.add(c); return g; }
function fan() { const m = new THREE.Mesh(new THREE.CircleGeometry(0.26, 10, 0, Math.PI), new THREE.MeshStandardMaterial({ color: 0xffd23f, side: THREE.DoubleSide })); m.position.y = 0.12; return m; }
function topHat() { const g = new THREE.Group(), k = mat(0x18181b), c = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.29, 0.5, 10), k); c.position.y = 0.48; g.add(c); const b = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.04, 12), k); b.position.y = 0.24; g.add(b); const r = new THREE.Mesh(new THREE.CylinderGeometry(0.295, 0.295, 0.07, 10), mat(0xe6007e)); r.position.y = 0.3; g.add(r); return g; }
function escoba() { const g = new THREE.Group(), st = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 1.7, 5), mat(0xc9a36b)); g.add(st); const br = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.5, 8), mat(0xd9b45a)); br.position.y = -1.05; br.rotation.x = Math.PI; g.add(br); g.position.set(0, -0.8, 0.12); g.rotation.z = Math.PI / 2; return g; }
function santa(p) {   // traje rojo con ribetes blancos, barba, gorro y bolsa de regalos
  const W = mat(0xf7f7f7), Rd = mat(0xd42a2a);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.42, 10, 8), Rd); belly.scale.set(1, 0.9, 0.85); belly.position.set(0, 1.18, 0.12); p.group.add(belly);
  const belt = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.12, 0.62), mat(0x1c1c1e)); belt.position.set(0, 1.0, 0.06); p.group.add(belt);
  const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.14, 0.04), mat(0xffd23f)); buckle.position.set(0, 1.0, 0.39); p.group.add(buckle);
  const trim = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.8, 0.05), W); trim.position.set(0, 1.25, 0.49); p.group.add(trim);
  const beard = new THREE.Mesh(new THREE.IcosahedronGeometry(0.3, 1), W); beard.scale.set(1.05, 1.1, 0.6); beard.position.set(0, -0.22, 0.24); p.head.add(beard);
  const hat = new THREE.Mesh(new THREE.ConeGeometry(0.33, 0.62, 10), Rd); hat.position.set(0.04, 0.5, -0.02); hat.rotation.z = -0.25; p.head.add(hat);
  const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.37, 0.37, 0.12, 12), W); brim.position.y = 0.22; p.head.add(brim);
  const pom = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), W); pom.position.set(0.2, 0.8, -0.02); p.head.add(pom);
  const sack = new THREE.Mesh(new THREE.IcosahedronGeometry(0.46, 1), mat(0x8a5a2b)); sack.scale.set(1, 1.15, 0.9); sack.position.set(-0.75, 0.5, -0.25); p.group.add(sack);
}
function tamboril(i) {
  const dr = new THREE.Group(), r = 0.26 - (i % 3) * 0.025, band = [0xffc420, 0xe6007e, 0x2ed3c6, 0x6a2c91][i % 4];
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 0.78, 0.75, 10), mat(0x8a5a33)); dr.add(body);
  const top = new THREE.Mesh(new THREE.CylinderGeometry(r + 0.01, r + 0.01, 0.04, 10), mat(0xf2ead8)); top.position.y = 0.38; dr.add(top);
  for (const y of [-0.2, 0.2]) { const b = new THREE.Mesh(new THREE.TorusGeometry(r - 0.01, 0.025, 4, 12), mat(band)); b.rotation.x = Math.PI / 2; b.position.y = y; dr.add(b); }
  dr.position.set(0.32, 0.9, 0.32); dr.rotation.set(0.5, 0, -0.35); return dr;
}
function flagTex() {   // banderita celeste y blanca para la guía de la visita
  return canvasTex(64, 40, (c, W, H) => { for (let i = 0; i < 9; i++) { c.fillStyle = i % 2 ? '#5aa9e6' : '#ffffff'; c.fillRect(0, i * H / 9, W, H / 9 + 1); } c.fillStyle = '#ffffff'; c.fillRect(0, 0, 24, 22); c.fillStyle = '#ffd23f'; c.beginPath(); c.arc(12, 11, 6, 0, Math.PI * 2); c.fill(); });
}
// Arbolito de Navidad con luces LED que titilan, estrella y regalos
function arbolito() {
  const g = new THREE.Group(), green = mat(0x1f7a3a);
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 0.8, 8), mat(0x6b4a2a)); trunk.position.y = 0.4; g.add(trunk);
  const T = [[1.6, 2.3, 0.6], [1.25, 2.0, 2.05], [0.85, 1.7, 3.3]];
  for (const [r, hh, y0] of T) { const c = new THREE.Mesh(new THREE.ConeGeometry(r, hh, 10), green); c.position.y = y0 + hh / 2; c.castShadow = true; g.add(c); }
  const shape = new THREE.Shape(); for (let i = 0; i < 10; i++) { const a = Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? 0.16 : 0.38; const x = Math.cos(a) * rr, y = Math.sin(a) * rr; if (i) shape.lineTo(x, y); else shape.moveTo(x, y); }
  const star = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth: 0.1, bevelEnabled: false }), new THREE.MeshStandardMaterial({ color: 0xffd23f, emissive: 0xffb000, emissiveIntensity: 0.9 })); star.position.set(0, 5.25, -0.05); g.add(star);
  const items = [], pal = PAL.fiestas;
  T.forEach(([r, hh, y0], j) => { const n = 26 - j * 6; for (let i = 0; i < n; i++) { const f = (i + 0.5) / n, y = y0 + hh * (0.12 + 0.78 * f), rr = r * (1 - (y - y0) / hh) + 0.06, a = i * 2.4 + j; items.push({ p: new THREE.Vector3(Math.cos(a) * rr, y, Math.sin(a) * rr), c: new THREE.Color(pal[(i + j) % pal.length]) }); } });
  const im = new THREE.InstancedMesh(new THREE.SphereGeometry(0.075, 6, 4), new THREE.MeshBasicMaterial(), items.length), m4 = new THREE.Matrix4();
  items.forEach((it, i) => { m4.makeTranslation(it.p.x, it.p.y, it.p.z); im.setMatrixAt(i, m4); im.setColorAt(i, it.c); }); g.add(im);
  for (const [x, z, c, s] of [[1.2, 0.8, 0xe6007e, 0.5], [-1.1, 0.9, 0x2ed3c6, 0.42], [0.2, 1.45, 0xffc420, 0.36], [-0.6, -1.3, 0x6a2c91, 0.46]]) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(s, s * 0.8, s), mat(c)); b.position.set(x, s * 0.4, z); b.rotation.y = x; g.add(b);
    const rb = new THREE.Mesh(new THREE.BoxGeometry(s * 1.02, s * 0.82, 0.07), mat(0xffffff)); rb.position.copy(b.position); rb.rotation.y = x; g.add(rb);
  }
  // las luces del árbol usan el mismo titileo que las guirnaldas (se ubican en coordenadas del árbol)
  return { group: g, lights: { im, items, kind: 'bulbs', placed: true } };
}
