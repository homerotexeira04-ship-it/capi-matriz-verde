// Modo festivo (se elige desde el modo guía y queda guardado en la PC): Carnaval, Día del Patrimonio y Fin de año.
// Decoraciones de temporada en la plaza y la rambla, gente que celebra, sonido y frases de los personajes.
import * as THREE from 'three';
import { makePerson } from './actors.js';
import { canvasTex, textTex } from './world.js';
import { clamp } from './util.js';

export const FIESTAS = { carnaval: 'Carnaval', criolla: 'Semana Criolla', patrimonio: 'Día del Patrimonio', museos: 'Museos en la Noche', fiestas: 'Fin de año' };
// Accesorio que regala el personaje de cada fiesta (se elige después en el vestuario)
export const ACCS = {
  antifaz: { name: 'Antifaz de Carnaval', fest: 'carnaval', npc: 'mamavieja', color: 0x6a2c91, gift: '¡Tomá, para que bailes de incógnito! Un antifaz de Carnaval, con plumas y todo.' },
  panuelo: { name: 'Pañuelo criollo', fest: 'criolla', npc: 'payador', color: 0x5aa9e6, gift: 'Para el cuello, como se usa en el campo: un pañuelo criollo. ¡Ya parece de la cuchilla, compañero!' },
  escarapela: { name: 'Escarapela', fest: 'patrimonio', npc: 'marta', color: 0x2f7fc1, gift: 'Te regalo una escarapela celeste y blanca. El patrimonio es de todos, y entre todos se cuida.' },
  farol: { name: 'Farol de museo', fest: 'museos', npc: 'nico', color: 0xffc420, gift: '¡Prendiste las seis lamparitas con tus piernas! Tomá este farol LED para recorrer los museos de noche.' },
  gorro: { name: 'Gorro navideño', fest: 'fiestas', npc: 'papanoel', color: 0xd42a2a, gift: '¡Jo, jo, jo! Un gorro como el mío. Eso sí: con este calor, usalo un ratito nomás.' }
};
const ACC_OF = Object.fromEntries(Object.entries(ACCS).map(([k, a]) => [a.npc, k]));
const L = (who, text) => ({ who, text });
// Guitarra del payador: milonga en La menor (Am – E7)
const AM = [57, 60, 64, 69], E7 = [52, 56, 59, 62, 64];
const RUEDO = { x: 67, z: 20, r: 6 }, FOGON = { x: 58.6, z: 17.4 }, PAY = [56.6, 19.0];
const TAG = { carnaval: 'Edición Carnaval', criolla: 'Edición Semana Criolla', patrimonio: 'Edición Día del Patrimonio', museos: 'Edición Museos en la Noche', fiestas: '¡Felices fiestas!' };
const PAL = {
  carnaval: [0xe6007e, 0xffc420, 0x2ed3c6, 0x6a2c91, 0xff6b35, 0x57e389],
  patrimonio: [0x5aa9e6, 0xffffff],
  fiestas: [0xff3b3b, 0xffd23f, 0x57e389, 0x5ad1ff, 0xff8fab, 0xffffff],
  criolla: [0x5aa9e6, 0xffffff, 0xffd23f],
  museos: [0xffe2a8, 0xfff3d6, 0xffd08a]
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
  },
  criolla: {
    mateo: '¡Llegó la Semana Criolla, m\'hijo! Hay jineteada en el ruedo, al lado de mi rancho, y el payador está junto al fogón.',
    valeria: 'En Semana de Turismo media ciudad sale de paseo. Igual la red no descansa: alguien tiene que cuidar los 50 Hz.',
    lucia: 'Esta semana la flota lleva gente a la fiesta criolla de la cuchilla. ¡Bajate en la parada del parque eólico!',
    guia: 'La Semana Criolla celebra las tradiciones del campo: el mate, el asado con cuero, la guitarra y los caballos.'
  },
  museos: {
    valeria: 'Esta noche los museos abren hasta tarde y gratis. La red les da luz con energía renovable.',
    guia: '¡Hoy es Museos en la Noche! Museos de todo el país abren de noche, con entrada libre. Hay una bicicleta generadora en la plaza.',
    mateo: 'De noche y en un museo... ¡a mi edad! Igual me voy a dar una vuelta, m\'hijo.',
    lucia: 'Hoy la flota trabaja hasta tarde: hay gente recorriendo museos toda la noche.'
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
  // Opciones extra en el menú de los personajes de fiesta: regalo de accesorio y bicicleta generadora
  extraOptions(who) {
    const out = [], k = ACC_OF[who], g = this.g;
    if (who === 'nico') out.push(['Probar la bicicleta generadora', 'Pedaleá para prender las lamparitas', () => this.bike()]);
    else if (k && !g.extras.acc.has(k)) out.push(['¿Tenés algo para Capi?', 'Un regalo de fiesta', () => this.gift(k)]);
    return out;
  }
  gift(k) {
    const A = ACCS[k], g = this.g; g.extras.giveAcc(k); g.stats && g.stats.inc && g.stats.inc(g.stats.d, 'regalos');
    g.ui.dialog([L(A.npc, A.gift)]); g.audio.fanfare(); g.capi.celebrate && g.capi.celebrate(2.4);
    g.ui.toast('¡REGALO DE FIESTA!', `Nuevo accesorio para Capi: ${A.name}. Abrí el vestuario con V.`, 4.5); g.missions.save();
  }
  bike() {
    const g = this.g;
    g.mg.start('bici', { title: 'Bicicleta generadora' }, ok => {
      if (!ok) return; this.litHold = 25; this.spinT = 3;
      if (!g.extras.acc.has('farol')) this.gift('farol'); else g.ui.dialog([L('nico', '¡Otra vez las seis prendidas! Tenés piernas de turbina, Capi.')]);
    });
  }
  onAsk(who, tag) { if (tag === 'payada') this.payadaT = 24; }
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
    if (k === 'criolla') this.buildCriolla(S);
    if (k === 'museos') this.buildMuseos(S);
    if (S.cast) for (const c of S.cast.list) { c.p.group.position.set(c.x, 2.2, c.z); c.p.group.rotation.y = c.ry; S.root.add(c.p.group); S.solids.push({ x: c.x, z: c.z, r: 0.55 }); }
    return S;
  }
  // ---------- Semana Criolla en la cuchilla: ruedo con jineteada, fogón con payador, puestos y caballos ----------
  buildCriolla(S) {
    const w = this.g.world, gy = (x, z) => w.groundAt(x, z), wood = mat(0x7b5a3a), R = RUEDO;
    const N = 24, posts = [];
    for (let i = 0; i < N; i++) { const a = i / N * Math.PI * 2, x = R.x + Math.cos(a) * R.r, z = R.z + Math.sin(a) * R.r; posts.push([x, z, a]); const p = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 1.4, 6), wood); p.position.set(x, gy(x, z) + 0.7, z); S.root.add(p); S.solids.push({ x, z, r: 0.3 }); }
    for (let i = 0; i < N; i++) {
      if (i === 5 || i === 6) continue;   // entrada del lado sur (hacia la cámara)
      const [x0, z0] = posts[i], [x1, z1] = posts[(i + 1) % N], mx = (x0 + x1) / 2, mz = (z0 + z1) / 2, len = Math.hypot(x1 - x0, z1 - z0), y = gy(mx, mz);
      for (const h of [0.55, 1.1]) { const r = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.1, len), wood); r.position.set(mx, y + h, mz); r.rotation.y = Math.atan2(x1 - x0, z1 - z0); S.root.add(r); }
      S.solids.push({ x: mx, z: mz, r: 0.45 });
    }
    // arco de entrada y banderines celestes y blancos
    const ax = R.x + Math.cos(5.5 / N * Math.PI * 2) * (R.r + 1.3), az = R.z + Math.sin(5.5 / N * Math.PI * 2) * (R.r + 1.3), ay = gy(ax, az);
    const arch = new THREE.Group(), tex = textTex('SEMANA CRIOLLA', { w: 1024, h: 160, bg: '#8a5a2b', fg: '#fff7e6', border: '#ffd23f', size: 96 });
    for (const sx of [-1, 1]) { const post = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 4.4, 8), wood); post.position.set(sx * 2.6, 2.2, 0); arch.add(post); S.solids.push({ x: ax + sx * 2.6, z: az, r: 0.25 }); }
    for (const ry of [0, Math.PI]) { const bn = new THREE.Mesh(new THREE.PlaneGeometry(5.0, 0.8), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.85 })); bn.position.set(0, 3.9, ry ? -0.02 : 0.02); bn.rotation.y = ry; arch.add(bn); }
    arch.position.set(ax, ay, az); S.root.add(arch);
    const pole = (x, z) => { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 4.6, 6), wood); p.position.set(x, gy(x, z) + 2.3, z); S.root.add(p); S.solids.push({ x, z, r: 0.25 }); return new THREE.Vector3(x, gy(x, z) + 4.4, z); };
    const aL = new THREE.Vector3(ax - 2.6, ay + 4.3, az), aR = new THREE.Vector3(ax + 2.6, ay + 4.3, az), p1 = pole(61.2, 24.6), p2 = pole(55.4, 15.2), p3 = pole(74.4, 28.2), p4 = pole(79.2, 20.4);
    this.garlands(S, [[aL, p1, 0.8], [p1, p2, 0.9], [aR, p3, 0.8], [p3, p4, 0.9]], 'flags', PAL.criolla);
    // fogón con parrilla y asado
    const F = FOGON, fy = gy(F.x, F.z), fire = new THREE.Group(); fire.position.set(F.x, fy, F.z); S.root.add(fire);
    for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2, st = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 0), mat(0x8c8c8c)); st.position.set(Math.cos(a) * 0.75, 0.12, Math.sin(a) * 0.75); fire.add(st); }
    for (const ry of [0.4, -0.9]) { const lg = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 1.1, 6), mat(0x5a3a22)); lg.rotation.set(Math.PI / 2, ry, 0); lg.position.y = 0.15; fire.add(lg); }
    S.flames = [0xff6b1a, 0xffb020, 0xffe066].map((c, i) => { const f = new THREE.Mesh(new THREE.ConeGeometry(0.32 - i * 0.08, 0.9 - i * 0.2, 7), new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 1.6, transparent: true, opacity: 0.9 })); f.position.y = 0.55 - i * 0.05; fire.add(f); return f; });
    S.solids.push({ x: F.x, z: F.z, r: 0.95 });
    const gx = F.x + 1.5, gz = F.z - 0.4, grill = new THREE.Group(); grill.position.set(gx, gy(gx, gz), gz); S.root.add(grill);
    for (const [lx, lz] of [[-0.55, -0.35], [0.55, -0.35], [-0.55, 0.35], [0.55, 0.35]]) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.8, 0.06), mat(0x26262b)); l.position.set(lx, 0.4, lz); grill.add(l); }
    const grate = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.05, 0.85), mat(0x3a3a3f)); grate.position.y = 0.82; grill.add(grate);
    for (const [px, pz, sx] of [[-0.3, -0.15, 0.4], [0.2, 0.1, 0.5], [0.35, -0.22, 0.3]]) { const m = new THREE.Mesh(new THREE.BoxGeometry(sx, 0.07, 0.24), mat(0x8a4a2a)); m.position.set(px, 0.88, pz); grill.add(m); }
    S.solids.push({ x: gx, z: gz, r: 0.75 });
    // asientos de tronco
    for (const [x, z] of [[PAY[0], PAY[1]], [60.2, 19.2], [60.9, 17.6]]) { const s2 = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.3, 0.45, 8), mat(0x6b4a2a)); s2.position.set(x, gy(x, z) + 0.22, z); S.root.add(s2); }
    // payador con guitarra (se puede conversar con él) y dos paisanos escuchando
    const pay = makePerson({ skin: 0xc58b62, shirt: 0xf2efe8, pants: 0x26262b, hair: 0x1a1412, hat: 'boina', hatColor: 0x1c1c1e, bigote: true });
    const gt = guitarra(); gt.position.set(0.05, 1.15, 0.36); gt.rotation.set(0, 0, 0.95); pay.group.add(gt); pay.group.add(neckerchief(0x5aa9e6));
    const oy = [makePerson({ skin: 0x9a6b4b, shirt: 0xd4483b, pants: 0x3a3a44, hair: 0x555555, hat: 'boina', hatColor: 0x23395d }), makePerson({ skin: 0xe0ac86, shirt: 0x2f7fc1, pants: 0x4a3b2a, hair: 0x3b2a1e, hat: 'gorra', hatColor: 0xf2efe8, extra: 'mate' })];
    S.cast = { kind: 'criolla', list: [
      { p: pay, key: 'payador', x: PAY[0], z: PAY[1], ry: 0.3, dance: 'payador', sit: true },
      { p: oy[0], x: 60.2, z: 19.2, ry: -1.9, dance: 'listen', sit: true },
      { p: oy[1], x: 60.9, z: 17.6, ry: -1.4, dance: 'listen', sit: true }] };
    // jineteada en el ruedo y público alrededor
    const hz = horse(0x6b3f22, 0x2a1c12); S.root.add(hz.group);
    const rider = makePerson({ skin: 0xc58b62, shirt: 0xf2efe8, pants: 0x26262b, hair: 0x1a1412, hat: 'boina', hatColor: 0x1c1c1e }); rider.group.position.set(0, -0.38, -0.12); rider.legL.rotation.z = 0.5; rider.legR.rotation.z = -0.5; rider.legL.rotation.x = rider.legR.rotation.x = -0.4; rider.group.add(neckerchief(0xd4483b)); hz.body.add(rider.group);
    S.jine = { hz, rider, t: 0, a: 0 };
    S.crowd = [];
    for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2 + 0.3; if (Math.abs(a - Math.PI / 2) < 0.45) continue; const x = R.x + Math.cos(a) * (R.r + 1.25), z = R.z + Math.sin(a) * (R.r + 1.25);
      const p = makePerson({ skin: SKINS[i % SKINS.length], shirt: [0x5aa9e6, 0xf2efe8, 0xd4483b, 0x6b8f4e, 0xffd23f][i % 5], pants: [0x26262b, 0x4a3b2a, 0x2b3a55][i % 3], hair: HAIRS[i % HAIRS.length], hat: i % 3 === 0 ? 'boina' : i % 3 === 1 ? 'gorra' : undefined, hatColor: [0x1c1c1e, 0xf2efe8][i % 2], scale: i % 4 === 3 ? 0.66 : 1 });
      p.group.position.set(x, gy(x, z), z); p.group.rotation.y = Math.atan2(R.x - x, R.z - z); S.root.add(p.group); S.crowd.push(p); S.solids.push({ x, z, r: 0.45 }); }
    // caballos atados al palenque y puestos de artesanías
    const pl = new THREE.Group(), px = 72.6, pz = 13.4; pl.position.set(px, gy(px, pz), pz); S.root.add(pl);
    for (const sx of [-1.4, 1.4]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 1.2, 6), wood); p.position.set(sx, 0.6, 0); pl.add(p); }
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 3.0, 6), wood); bar.rotation.z = Math.PI / 2; bar.position.y = 1.1; pl.add(bar); S.solids.push({ x: px, z: pz, r: 1.5 });
    S.tied = [[-0.7, 0x2a1c12, 0x111111], [0.75, 0xd9c7a0, 0x8a6a40]].map(([dx, c, m]) => { const h = horse(c, m); h.group.position.set(px + dx, gy(px + dx, pz + 1.7), pz + 1.7); h.group.rotation.y = Math.PI; S.root.add(h.group); S.solids.push({ x: px + dx, z: pz + 1.7, r: 0.9 }); return h; });
    S.stalls = [[74.8, 26.4, -2.6, 'ARTESANÍAS'], [77.6, 21.6, -2.0, 'MATES Y PONCHOS']].map(([x, z, ry, label]) => { const st = puesto(label); st.position.set(x, gy(x, z), z); st.rotation.y = ry; S.root.add(st); S.solids.push({ x, z, r: 1.3 });
      const v = makePerson({ skin: SKINS[(x | 0) % SKINS.length], shirt: 0xf2a93b, pants: 0x3a3a44, hair: HAIRS[2], pony: true }); const bx = x + Math.sin(ry + Math.PI) * 1.2, bz = z + Math.cos(ry + Math.PI) * 1.2; v.group.position.set(bx, gy(bx, bz), bz); v.group.rotation.y = ry; S.root.add(v.group); return v; });
  }
  // ---------- Museos en la Noche: luminarias, proyección en la torre y la bicicleta generadora ----------
  buildMuseos(S) {
    const an = this.anchors(); this.garlands(S, an.ring, 'bulbs', PAL.museos);
    const arch = new THREE.Group(), tex = textTex('MUSEOS EN LA NOCHE', { w: 1024, h: 160, bg: '#3a1f6b', fg: '#fff7e6', border: '#ffc420', size: 92 });
    for (const sx of [-1, 1]) { const post = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 4.5, 8), mat(0x2b2b33)); post.position.set(sx * 3.7, 2.25, 0); arch.add(post); S.solids.push({ x: -44 + sx * 3.7, z: 52.1, r: 0.25 }); }
    for (const ry of [0, Math.PI]) { const bn = new THREE.Mesh(new THREE.PlaneGeometry(7.2, 1.15), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.25 })); bn.position.set(0, 3.85, ry ? -0.02 : 0.02); bn.rotation.y = ry; arch.add(bn); }
    arch.position.set(-44, 2.2, 52.1); S.root.add(arch);
    // luminarias de papel a lo largo del camino central
    const items = []; for (let z = 36.6; z <= 51.5; z += 2.2) for (const x of [-47.9, -40.1]) items.push({ p: new THREE.Vector3(x, 2.42, z), c: new THREE.Color(PAL.museos[items.length % 3]) });
    const lum = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.15, 0.18, 0.4, 6), new THREE.MeshBasicMaterial(), items.length), m4 = new THREE.Matrix4();
    items.forEach((it, i) => { m4.makeTranslation(it.p.x, it.p.y, it.p.z); lum.setMatrixAt(i, m4); lum.setColorAt(i, it.c); }); S.root.add(lum); S.anim.push({ im: lum, items, kind: 'bulbs', placed: true });
    // proyección de luz sobre la fachada de la torre
    const proj = projTex(), pm = new THREE.MeshBasicMaterial({ map: proj, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
    const pl = new THREE.Mesh(new THREE.PlaneGeometry(9.4, 7.6), pm); pl.position.set(-36, 6.45, 24.38); S.root.add(pl); S.proj = { m: pm, tex: proj };
    // puesto con la bicicleta generadora y su tablero de lamparitas
    const tent = carpa(); tent.position.set(-37.2, 2.2, 41.4); S.root.add(tent); S.solids.push({ x: -37.2, z: 41.4, r: 1.4 });
    const bk = bici(); bk.group.position.set(-37.2, 2.2, 43.4); bk.group.rotation.y = Math.PI / 2; S.root.add(bk.group); S.solids.push({ x: -37.2, z: 43.4, r: 0.8 }); S.bike = bk;
    const board = new THREE.Group(); board.position.set(-37.2, 2.2, 42.5); S.root.add(board);
    const bp = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.7, 0.08), mat(0x23395d)); bp.position.y = 2.1; board.add(bp); for (const sx of [-1, 1]) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.08, 2.1, 0.08), mat(0x2b2b33)); l.position.set(sx * 1.0, 1.05, -0.02); board.add(l); }
    S.leds = []; for (let i = 0; i < 6; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), new THREE.MeshBasicMaterial({ color: 0x33415c })); b.position.set(-0.85 + i * 0.34, 2.1, 0.08); board.add(b); S.leds.push(b); }
    const nico = makePerson({ skin: 0xe0ac86, shirt: 0xffc420, pants: 0x23395d, hair: 0x3b2a1e });
    const vis = [0, 1, 2].map(i => makePerson({ skin: SKINS[(i + 3) % SKINS.length], shirt: [0x9b6bd8, 0x5ad1ff, 0xff8fab][i], pants: 0x2b3a55, hair: HAIRS[i], scale: i === 1 ? 0.64 : 1 }));
    S.cast = { kind: 'museos', list: [{ p: nico, key: 'nico', x: -35.2, z: 43.8, ry: -0.9, dance: 'nico' }, { p: vis[0], x: -38.7, z: 45.0, ry: 2.6, dance: 'kid' }, { p: vis[1], x: -36.9, z: 45.4, ry: 3.1, dance: 'kid' }, { p: vis[2], x: -35.6, z: 45.9, ry: -2.7, dance: 'kid' }] };
    this.litHold = 0; this.spinT = 0;
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
      if (c.sit) { y -= 0.42; p.legL.rotation.x = p.legR.rotation.x = -1.45; }
      if (c.dance === 'payador') { const fast = this.payadaT > 0; p.armR.rotation.x = -0.9 + Math.sin(t * (fast ? 14 : 8)) * 0.18; p.armR.rotation.z = 0.5; p.armL.rotation.x = -1.3; p.armL.rotation.z = -0.5; p.head.rotation.x = Math.sin(t * 2) * 0.08; }
      if (c.dance === 'listen') { p.armR.rotation.x = Math.sin(t * 0.7 + c.x) > 0.6 ? -1.6 : -0.3; p.head.rotation.y = Math.sin(t * 0.5 + c.z) * 0.3; }
      if (c.dance === 'nico') { p.armL.rotation.x = -0.6 + Math.sin(t * 1.4) * 0.5; }
      if (c.dance === 'kid') { y += Math.abs(Math.sin(t * 3 + c.x)) * 0.05; p.armR.rotation.x = Math.sin(t * 2 + c.x) > 0.9 ? -2.6 : 0; }
      if (face) { ry = Math.atan2(cp.x - c.x, cp.z - c.z); rz = 0; rx = 0; if (talk) p.armR.rotation.x = -1.2 + Math.sin(t * 7) * 0.35; }
      g.position.set(c.x, (c.sit || C.kind === 'criolla' ? this.g.world.groundAt(c.x, c.z) - 2.2 : 0) + y, c.z); g.rotation.set(rx, ry, rz);
    }
  }
  // El momento fuerte de la fiesta, a pedido del modo guía
  kick() {
    const g = this.g, G = g.grid, k = this.mode, S = k && this.sets[k], c = g.capi.pos, play = g.mode === 'play'; if (!S) return;
    if (k === 'carnaval') { G.hour = 19.5; S.parade.x = clamp(c.x + 9, -76, -16); this.cfT = 0.5; if (play) g.ui.note(c.z > 55 ? '¡Ahí vienen las llamadas por la rambla!' : '¡Arrancan las llamadas en la rambla! Bajá a verlas.', 6); }
    if (k === 'patrimonio') { G.hour = 10.5; const T = S.tour; T.i = 0; T.wait = 2; T.x = TOUR[0][0]; T.z = TOUR[0][1]; T.vis.forEach(v => { v.x = T.x + v.o[0]; v.z = T.z + v.o[1]; }); if (play) g.ui.note('Arranca la visita guiada del Día del Patrimonio en la Plaza Matriz.', 6); }
    if (k === 'fiestas') { G.hour = 23.9; this.count = 10.999; this.countN = 11; }
    if (k === 'criolla') { G.hour = 15.5; this.jineNow = 10; if (play) g.ui.note('¡Arranca la jineteada en el ruedo de la cuchilla, al lado del rancho de Don Mateo!', 6); }
    if (k === 'museos') { G.hour = 21; this.show = 40; if (play) g.ui.note('¡Empieza Museos en la Noche! Hay una proyección en la torre y una bicicleta generadora en la plaza.', 6); }
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
    if (k === 'criolla') this.criolla(S, dt, t, st, L);
    if (k === 'museos') this.museos(S, dt, t, st, L);
    if (S.cast) this.animCast(S.cast, dt, t, st);
    this.countdown(dt, st);
    if (k === 'fiestas' && (h >= 20.5 || h < 1.5 || this.bigFw > 0) && !g.cine && (this.fwT -= dt) <= 0) {
      this.fwT = this.bigFw > 0 ? 0.25 + Math.random() * 0.35 : 2.2 + Math.random() * 3.2; const x = -72 + Math.random() * 62, z = -6 + Math.random() * 26;   // al norte, detrás de la ciudad vista desde la cámara
      st.fx.firework(x, 24 + Math.random() * 16, z, PAL.fiestas[Math.floor(Math.random() * PAL.fiestas.length)]);
      if (Math.hypot(L.x - x, L.z - z) < 110 && g.audio) g.audio.boom();
    }
  }
  criolla(S, dt, t, st, L) {
    const g = this.g, w = g.world, A = g.audio, R = RUEDO;
    if (this.payadaT > 0) this.payadaT -= dt;
    S.flames.forEach((f, i) => { const k = 0.8 + Math.sin(t * (9 + i * 3) + i) * 0.15 + Math.random() * 0.1; f.scale.set(k, 0.85 + Math.sin(t * (11 + i * 2)) * 0.2 + Math.random() * 0.12, k); });
    if (st.fx && st.fx.soft && Math.random() < 9 * dt) st.fx.soft.emit(FOGON.x + (Math.random() - 0.5) * 0.4, w.groundAt(FOGON.x, FOGON.z) + 1.2, FOGON.z + (Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.3, 1.1 + Math.random() * 0.6, (Math.random() - 0.5) * 0.3, 2.6, 0.35, 1.3, 0x9a9a9a, 0.32, -0.05, 0.4);
    // jineteada: un rato al paso y después corcovos, con el público que grita
    const J = S.jine, hz = J.hz; J.t += dt; const cyc = J.t % 18, buck = cyc > 9 || this.jineNow > 0; if (this.jineNow > 0) this.jineNow -= dt;
    if (!buck) { J.a += dt * 0.42; } else J.a += dt * 0.15;
    const rr = buck ? 1.6 : 3.2, x = R.x + Math.cos(J.a) * rr, z = R.z + Math.sin(J.a) * rr, gy = w.groundAt(x, z);
    hz.group.position.set(x, gy + (buck ? Math.abs(Math.sin(t * 5.5)) * 0.45 : 0), z); hz.group.rotation.y = -J.a + (buck ? Math.sin(t * 2.7) * 0.9 : 0);
    hz.body.rotation.x = buck ? Math.sin(t * 5.5) * 0.42 : Math.sin(t * 6) * 0.03;
    hz.legs.forEach((l, i) => { l.rotation.x = buck ? Math.sin(t * 5.5 + (i < 2 ? 0 : Math.PI)) * 0.5 : Math.sin(t * 6 + i * 1.6) * 0.35; });
    hz.tail.rotation.x = 0.5 + Math.sin(t * 3) * 0.25;
    J.rider.armR.rotation.x = buck ? -2.6 + Math.sin(t * 6) * 0.5 : -0.4; J.rider.group.rotation.x = buck ? -Math.sin(t * 5.5) * 0.3 : 0;
    S.crowd.forEach((p, i) => { p.armR.rotation.x = buck && Math.sin(t * 4 + i) > 0 ? -2.7 : 0; p.armL.rotation.x = buck && Math.sin(t * 3.3 + i * 2) > 0.3 ? -2.5 : 0; });
    S.tied.forEach((h, i) => { h.tail.rotation.x = 0.4 + Math.sin(t * 2.3 + i * 2) * 0.35; h.neck.rotation.x = -0.55 + Math.sin(t * 0.8 + i) * 0.1; });
    S.stalls.forEach((v, i) => { v.armR.rotation.x = Math.sin(t * 1.3 + i * 2) > 0.85 ? -2.4 : 0; });
    // sonido: guitarra del payador, chisporroteo del fogón y gritos del público
    if (A) {
      const dP = Math.hypot(L.x - PAY[0], L.z - PAY[1]), vP = clamp(1 - dP / 18, 0, 1) * (this.payadaT > 0 ? 1.5 : 0.75);
      const e8 = 0.3, beat = Math.floor(t / e8); if (vP > 0.03 && beat !== this.lastBeat) { const pos = beat % 8, bar = Math.floor(beat / 8); if (pos === 0 || pos === 3 || pos === 6) A.strum(bar % 2 ? E7 : AM, vP * (pos === 0 ? 1 : 0.7)); } this.lastBeat = beat;
      const dF = Math.hypot(L.x - FOGON.x, L.z - FOGON.z); if (dF < 14 && Math.random() < 7 * dt * (1 - dF / 14)) A.crackle(1 - dF / 14);
      const dR = Math.hypot(L.x - R.x, L.z - R.z); if (buck && dR < 32 && (this.cheerT = (this.cheerT || 0) - dt) <= 0) { this.cheerT = 1.6 + Math.random() * 1.6; A.cheer(1 - dR / 32); }
    }
  }
  museos(S, dt, t, st, L) {
    const g = this.g, night = st.night, show = this.show > 0; if (show) this.show -= dt;
    S.proj.m.opacity = clamp(night * 0.9 + (show ? 0.3 : 0), 0, 1) * (0.8 + Math.sin(t * 1.3) * 0.2);
    S.proj.tex.offset.x = (t * (show ? 0.08 : 0.03)) % 1; S.proj.m.color.setHSL((t * (show ? 0.12 : 0.04)) % 1, 0.75, 0.6);
    // tablero de la bicicleta: si Capi la hizo andar queda todo prendido un rato; si no, una luz que recorre el tablero invita a probar
    if (this.litHold > 0) this.litHold -= dt; if (this.spinT > 0) { this.spinT -= dt; S.bike.crank.rotation.x -= dt * 9; }
    const chase = Math.floor(t * 3) % 8;
    S.leds.forEach((b, i) => { b.material.color.setHex(this.litHold > 0 || show ? 0xfff3b0 : i === chase ? 0xffd34a : 0x33415c); });
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
function guitarra() {
  const g = new THREE.Group(), wood = mat(0xb5793a), dark = mat(0x3a2414);
  for (const [r, y] of [[0.26, -0.12], [0.2, 0.2]]) { const c = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.12, 14), wood); c.rotation.x = Math.PI / 2; c.position.y = y; g.add(c); }
  const hole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.13, 10), dark); hole.rotation.x = Math.PI / 2; hole.position.y = 0.06; g.add(hole);
  const neck = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.75, 0.05), dark); neck.position.y = 0.72; g.add(neck);
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.18, 0.05), dark); head.position.y = 1.17; g.add(head); return g;
}
function neckerchief(c) { const t = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.3, 3), mat(c)); t.rotation.x = Math.PI; t.scale.z = 0.35; t.position.set(0, 1.58, 0.24); return t; }
// Caballo criollo: cuerpo, cuello, cabeza, patas, cola y recado con pellón
function horse(c, mane) {
  const group = new THREE.Group(), body = new THREE.Group(); body.position.y = 1.35; group.add(body); const M1 = mat(c), M2 = mat(mane);
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.68, 1.7), M1); body.add(torso);
  const neck = new THREE.Group(); neck.position.set(0, 0.3, 0.75); neck.rotation.x = -0.55; body.add(neck);
  const nk = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.8, 0.36), M1); nk.position.y = 0.38; neck.add(nk);
  const mn = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.8, 0.12), M2); mn.position.set(0, 0.42, -0.2); neck.add(mn);
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.3, 0.68), M1); head.position.set(0, 0.82, 0.22); head.rotation.x = 0.6; neck.add(head);
  for (const sx of [-0.09, 0.09]) { const e = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.14, 4), M1); e.position.set(sx, 1.0, 0.0); neck.add(e); }
  const legs = []; for (const [lx, lz] of [[-0.2, 0.62], [0.2, 0.62], [-0.2, -0.62], [0.2, -0.62]]) { const l = new THREE.Group(); l.position.set(lx, -0.3, lz); body.add(l); const m = new THREE.Mesh(new THREE.BoxGeometry(0.15, 1.05, 0.16), M1); m.position.y = -0.5; l.add(m); const hoof = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.12, 0.2), M2); hoof.position.y = -1.0; l.add(hoof); legs.push(l); }
  const tail = new THREE.Group(); tail.position.set(0, 0.2, -0.85); body.add(tail); const tm = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.75, 0.12), M2); tm.position.y = -0.36; tail.add(tm);
  const saddle = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.12, 0.62), mat(0xe9dcc0)); saddle.position.set(0, 0.38, -0.05); body.add(saddle);
  group.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return { group, body, neck, legs, tail };
}
function puesto(label) {   // puesto de feria con toldo a rayas, mesa con mates y ponchos, y cartel
  const g = new THREE.Group(), wood = mat(0x7b5a3a);
  const tb = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.08, 0.9), wood); tb.position.y = 0.85; g.add(tb);
  for (const [x, z] of [[-1, -0.4], [1, -0.4], [-1, 0.4], [1, 0.4]]) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.85, 0.07), wood); l.position.set(x, 0.42, z); g.add(l); const p = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.3, 5), wood); p.position.set(x * 1.05, 1.15, z * 1.2); g.add(p); }
  for (let i = 0; i < 6; i++) { const s = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.05, 1.3), mat(i % 2 ? 0xffffff : 0x5aa9e6)); s.position.set(-1.0 + i * 0.4, 2.3, 0); g.add(s); }
  for (let i = 0; i < 4; i++) { const m = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), mat(0x7a4b23)); m.position.set(-0.8 + i * 0.22, 0.98, 0.15); g.add(m); }
  for (let i = 0; i < 3; i++) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.12, 0.34), mat([0xd4483b, 0x6b8f4e, 0xf2a93b][i])); p.position.set(0.3 + i * 0.42, 0.95, -0.1); g.add(p); }
  const sg = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 0.42), new THREE.MeshStandardMaterial({ map: textTex(label, { w: 512, h: 108, bg: '#8a5a2b', fg: '#fff7e6', size: 58 }), side: THREE.DoubleSide })); sg.position.set(0, 2.0, 0.62); g.add(sg);
  return g;
}
function carpa() {   // carpa del puesto de la bicicleta generadora
  const g = new THREE.Group();
  for (const [x, z] of [[-1.25, -1.25], [1.25, -1.25], [-1.25, 1.25], [1.25, 1.25]]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.4, 6), mat(0xe8e8e8)); p.position.set(x, 1.2, z); g.add(p); }
  const roof = new THREE.Mesh(new THREE.ConeGeometry(2.0, 1.0, 4), mat(0x6a2c91)); roof.rotation.y = Math.PI / 4; roof.position.y = 2.9; g.add(roof);
  const tb = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.08, 0.8), mat(0xf2efe8)); tb.position.set(0, 0.85, -0.6); g.add(tb);
  const sg = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.4), new THREE.MeshStandardMaterial({ map: textTex('BICICLETA GENERADORA', { w: 768, h: 128, bg: '#ffc420', fg: '#3a2500', size: 62 }), side: THREE.DoubleSide })); sg.position.set(0, 2.25, 1.27); g.add(sg);
  return g;
}
function bici() {   // bicicleta fija con generador
  const g = new THREE.Group(), fr = mat(0xe6007e), dk = mat(0x26262b);
  for (const z of [-0.55, 0.55]) { const w = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.04, 6, 16), dk); w.position.set(0, 0.36, z); w.rotation.y = Math.PI / 2; g.add(w); }
  const bar = (x0, y0, z0, x1, y1, z1) => { const a = new THREE.Vector3(x0, y0, z0), b = new THREE.Vector3(x1, y1, z1), m = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, a.distanceTo(b), 6), fr); m.position.copy(a).add(b).multiplyScalar(0.5); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize()); g.add(m); };
  bar(0, 0.36, -0.55, 0, 0.42, 0); bar(0, 0.42, 0, 0, 0.36, 0.55); bar(0, 0.42, 0, 0, 0.95, -0.2); bar(0, 0.95, -0.2, 0, 0.95, 0.4); bar(0, 0.95, 0.4, 0, 0.36, 0.55); bar(0, 0.95, 0.4, 0, 1.15, 0.45);
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.06, 0.3), dk); seat.position.set(0, 1.0, -0.22); g.add(seat);
  const hb = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.5, 5), dk); hb.rotation.z = Math.PI / 2; hb.position.set(0, 1.15, 0.45); g.add(hb);
  const crank = new THREE.Group(); crank.position.set(0, 0.42, 0); g.add(crank); const arm = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.42, 0.05), mat(0xffc420)); crank.add(arm); crank.rotation.y = 0;
  const gen = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.2, 0.22), mat(0x2a4374)); gen.position.set(0, 0.42, -0.85); g.add(gen);
  const cb = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.9, 5), dk); cb.position.set(0, 0.85, -0.85); g.add(cb);
  return { group: g, crank };
}
function projTex() {   // dibujo que se proyecta sobre la torre: sol, molino, gota y hoja (dos por fachada, con la proporción de la pared)
  const t = canvasTex(1024, 416, (c, W, H) => {
    c.fillStyle = '#262626'; c.fillRect(0, 0, W, H); c.strokeStyle = '#fff'; c.fillStyle = '#fff'; c.lineCap = 'round'; c.lineJoin = 'round';
    for (let k = 0; k < 4; k++) { const x = 128 + k * 256, y = 208;
      if (k === 0) { c.beginPath(); c.arc(x, y, 62, 0, 7); c.fill(); c.lineWidth = 16; for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2; c.beginPath(); c.moveTo(x + Math.cos(a) * 82, y + Math.sin(a) * 82); c.lineTo(x + Math.cos(a) * 118, y + Math.sin(a) * 118); c.stroke(); } }
      if (k === 1) { c.lineWidth = 14; c.beginPath(); c.moveTo(x, y - 20); c.lineTo(x, y + 170); c.stroke(); c.lineWidth = 22; for (let i = 0; i < 3; i++) { const a = -Math.PI / 2 + i * 2.094; c.beginPath(); c.moveTo(x, y - 20); c.lineTo(x + Math.cos(a) * 112, y - 20 + Math.sin(a) * 112); c.stroke(); } c.beginPath(); c.arc(x, y - 20, 18, 0, 7); c.fill(); }
      if (k === 2) { c.beginPath(); c.moveTo(x, y - 135); c.quadraticCurveTo(x + 105, y + 20, x, y + 120); c.quadraticCurveTo(x - 105, y + 20, x, y - 135); c.fill(); }
      if (k === 3) { c.save(); c.translate(x, y); c.rotate(0.7); c.beginPath(); c.ellipse(0, 0, 68, 128, 0, 0, 7); c.fill(); c.strokeStyle = '#262626'; c.lineWidth = 9; c.beginPath(); c.moveTo(0, 120); c.lineTo(0, -110); c.stroke(); c.restore(); }
    }
  });
  t.wrapS = THREE.RepeatWrapping; t.repeat.set(0.5, 1); return t;
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
