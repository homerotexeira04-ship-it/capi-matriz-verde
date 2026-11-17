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
const SKINS = [0x9a6b4b, 0xc58b62, 0x6b4a33, 0xe0ac86, 0xf1c9a5, 0x8a5a3c];
const HAIRS = [0x1a1412, 0x3b2a1e, 0x6b4a2a, 0xd8c08a, 0x2b2b2b];
const mat = c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.75 });

export class Fiestas {
  constructor(game) { this.g = game; this.mode = null; this.sets = {}; this.seen = {}; this.soft = 0; this.t = 0; this.fwT = 2; this.cfT = 3; this.solids = []; }

  set(k) {
    k = FIESTAS[k] ? k : null; this.mode = k; this.seen = {};
    if (k && !this.sets[k]) this.sets[k] = this.build(k);
    for (const [m, s] of Object.entries(this.sets)) s.root.visible = m === k;
    this.solids = k ? this.sets[k].solids : [];
    const tag = document.getElementById('festTag'); if (tag) { tag.textContent = k ? TAG[k] : ''; tag.classList.toggle('hidden', !k); }
    document.body.dataset.fest = k || '';
  }
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
      const T = S.tour = { guide, x: -51.8, z: 36.2, h: 0, i: 0, wait: 3, vis: [] };
      S.root.add(guide.group);
      const OFF = [[-0.9, -1.6], [0.9, -1.7], [0, -2.6], [-1.6, -2.7], [1.6, -2.8], [-0.7, -3.7], [0.8, -3.8]];
      OFF.forEach((o, i) => { const p = makePerson({ skin: SKINS[(i + 2) % SKINS.length], shirt: [0xd4483b, 0x57e389, 0xffc420, 0x9b6bd8, 0xff8fab, 0x5ad1ff, 0xf2efe8][i], pants: [0x2b3a55, 0x4a3b2a, 0x2b2b2b][i % 3], hair: HAIRS[(i + 1) % HAIRS.length], scale: i === 4 ? 0.78 : 1 }); p.group.position.set(-51.8 + o[0], 2.2, 36.2 + o[1]); S.root.add(p.group); T.vis.push({ p, o, x: -51.8 + o[0], z: 36.2 + o[1] }); });
    }
    if (k === 'fiestas') {
      this.garlands(S, an.ring.concat(an.cross, an.rambla), 'bulbs', PAL.fiestas);
      const tree = arbolito(); tree.group.position.set(-50.6, 2.2, 47); S.root.add(tree.group); S.anim.push(tree.lights); S.solids.push({ x: -50.6, z: 47, r: 1.5 });
    }
    return S;
  }

  // ---------- Cada cuadro ----------
  update(dt, st) {
    this.soft = 0; const k = this.mode; if (!k) return;
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
    if (k === 'patrimonio') this.tour(S.tour, dt, t, h);
    if (k === 'fiestas' && (h >= 20.5 || h < 1.5) && !g.cine && (this.fwT -= dt) <= 0) {
      this.fwT = 2.2 + Math.random() * 3.2; const x = -72 + Math.random() * 62, z = -6 + Math.random() * 26;   // al norte, detrás de la ciudad vista desde la cámara
      st.fx.firework(x, 24 + Math.random() * 16, z, PAL.fiestas[Math.floor(Math.random() * PAL.fiestas.length)]);
      if (Math.hypot(L.x - x, L.z - z) < 110 && g.audio) g.audio.boom();
    }
  }
  tour(T, dt, t, h) {
    const on = h >= 9 && h < 19.5, all = [T.guide].concat(T.vis.map(v => v.p)); all.forEach(p => { p.group.visible = on; }); if (!on) return;
    const PATH = [[-51.8, 36.2, 6], [-51.8, 47.8, 0], [-44, 49, 7], [-36.2, 47.8, 0], [-36.2, 36.2, 0], [-44, 37.2, 7]];
    let moving = false;
    if (T.wait > 0) T.wait -= dt;
    else {
      const [tx, tz] = PATH[(T.i + 1) % PATH.length], dx = tx - T.x, dz = tz - T.z, d = Math.hypot(dx, dz);
      if (d < 0.15) { T.i = (T.i + 1) % PATH.length; T.wait = PATH[T.i][2]; }
      else { const s = Math.min(d, 0.75 * dt); T.x += dx / d * s; T.z += dz / d * s; T.h = Math.atan2(dx, dz); moving = true; }
    }
    const G = T.guide, ph = t * 6;
    G.group.position.set(T.x, 2.2, T.z); G.group.rotation.y = moving ? T.h : T.h + Math.PI;
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
