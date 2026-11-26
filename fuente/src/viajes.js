// Gira por el Uruguay: el tren sale de la estación de Salto hacia cuatro destinos, cada uno con su misión corta,
// sus personajes y un sello para el pasaporte. Se puede viajar desde cualquier partida; el modo «Gira» los encadena.
import * as THREE from 'three';
import { clamp, lerp, damp, rng } from './util.js';
import { B, BND, ESTACION, RAIL } from './terrain.js';
import { DESTINOS } from './destinos.js';
import { railY } from './pradera.js';
import { makePerson } from './actors.js';
import { NAMES } from './ui.js';

const $ = id => document.getElementById(id);
const L = (who, text) => ({ who, text });
const GKEY = 'capi-gira';
const HALF = 90;

// Personajes de cada destino (posición local) y lo que hay que hacer allá
const GENTE = {
  negro: { id: 'operadora', name: 'Marta, operadora de UTE', at: [36, -28, 2.6], look: { skin: 0xd9a17a, shirt: 0x1d4f8a, jacket: 0x1d4f8a, pants: 0x2b2d42, hair: 0x3b2314, hat: 'casco', hatColor: 0xf4f4f4 } },
  fray: { id: 'guiafb', name: 'Nahuel, guía del Anglo', at: [-10, 14, 3.4], look: { skin: 0xc58b62, shirt: 0x7a2e1d, pants: 0x2b2d42, hair: 0x1a1412, hat: 'gorra', hatColor: 0x7a2e1d } },
  lunarejo: { id: 'guarda', name: 'Rosario, guardaparque', at: null, look: { skin: 0xe0ac86, shirt: 0x6b8f4e, jacket: 0x4a5a3a, pants: 0x5a4a3a, hair: 0x2a1c12, hat: 'gorra', hatColor: 0x4a5a3a, pony: true } },
  polonio: { id: 'elsa', name: 'Doña Elsa, vecina del Cabo', at: [8, 16, 0.4], look: { skin: 0xd9a17a, shirt: 0x2a9d8f, pants: 0x5a4636, hair: 0xd8d8d8, hat: 'boina', hatColor: 0xe9dcc0 } }
};
const PASOS = {
  negro: [['npc', 'Hablar con Marta, la operadora de Rincón del Bonete'], ['d1:placa', 'Leer la placa histórica de Bonete'], ['d1:mando', 'Coordinar las tres represas en cadena']],
  fray: [['npc', 'Hablar con Nahuel, el guía del Anglo'], ['d2:sala', 'Entrar a la sala de máquinas del Anglo'], ['d2:caldera', 'Encender la caldera de la central de biomasa'], ['d2:h2', 'Cargar el camión forestal con hidrógeno verde']],
  lunarejo: [['npc', 'Hablar con Rosario, la guardaparque'], ['d3:m', 'Tomar 3 muestras de agua del arroyo'], ['d3:mirador', 'Subir al mirador del valle']],
  polonio: [['npc', 'Hablar con Doña Elsa'], ['d4:casa', 'Ayudar a la casa a pasar la noche sin cables'], ['d4:faro', 'Subir al faro'], ['d4:lobos', 'Mirar los lobos marinos']]
};
const CHARLA = {
  negro: [L('operadora', '¡Bienvenido al río Negro, Capi! Acá está Rincón del Bonete, la primera gran represa del país: empezó a generar en diciembre de 1945.'),
    L('operadora', 'Las turbinas venían de Alemania y la Segunda Guerra Mundial las demoró. Hoy tiene cuatro generadores de 38 MW: 152 MW en total.'),
    L('operadora', 'Su lago es el cuerpo de agua dulce más grande de Uruguay. Río abajo están Baygorria, de 1960, y Palmar, de 1982.'),
    L('operadora', 'El agua que pasa por una turbina sigue río abajo y vuelve a generar en la siguiente. ¿Me ayudás a coordinarlas desde la consola?')],
  fray: [L('guiafb', '¡Hola, Capi! Bienvenido a Fray Bentos. Este era el frigorífico Anglo: le decían «la cocina del mundo» porque mandaba carne enlatada a todo el planeta.'),
    L('guiafb', 'Cerró en 1979, y en 2015 la UNESCO declaró este lugar Patrimonio Mundial: el Paisaje Industrial Fray Bentos.'),
    L('guiafb', 'Y la energía tiene mucho que ver con esta historia. Entrá a la sala de máquinas y te cuento.')],
  lunarejo: [L('guarda', '¡Bienvenido al Valle del Lunarejo! Es Paisaje Protegido desde 2009 y forma parte de las Quebradas del Norte, en la cuesta basáltica.'),
    L('guarda', 'Acá nace el arroyo Lunarejo. Su agua va al río Tacuarembó, y el Tacuarembó desemboca en el río Negro.'),
    L('guarda', 'Medimos cómo está el agua para cuidarla. ¿Me traés tres muestras del arroyo? Hay una al lado de la cascada.')],
  polonio: [L('elsa', '¡Hola, Capi! Bienvenido al Cabo. Acá no llega la red eléctrica: cada casa tiene sus paneles solares, algún molinito y una batería.'),
    L('elsa', 'Vivimos todo el año unas setenta personas. En verano viene muchísima gente, y hay que cuidar la energía.'),
    L('elsa', 'Mi casa es la de la puerta celeste. ¿Me ayudás a que la batería aguante toda la noche?')]
};

export class Viajes {
  constructor(game) {
    const g = this.g = game, w = g.world;
    this.cur = null; this.cine = null; this.t = 0; this.load();
    NAMES.jefa = 'Inés, jefa de estación';
    for (const k in GENTE) NAMES[GENTE[k].id] = GENTE[k].name;
    GENTE.lunarejo.at = [this.lunU(), 46, -1.6];   // la guardaparque espera junto al centro de visitantes
    this.people = {};
    for (const d of DESTINOS) {
      const G = GENTE[d.k], [u, v, ry] = G.at, x = d.ox + u, p = makePerson(G.look);
      p.group.position.set(x, w.groundAt(x, v), v); p.group.rotation.y = ry; d.group.add(p.group); this.people[d.k] = p;
      w.addInter('npc:' + G.id, x, v, { console: false, h: 3.6 }).group && d.group.add(w.inter['npc:' + G.id].group);
    }
    // jefa de estación en el andén de Salto
    const [sx, sz] = ESTACION, jp = makePerson({ skin: 0xd9a17a, shirt: 0x1d4f8a, jacket: 0x1d4f8a, pants: 0x2b2d42, hair: 0x2a1c12, hat: 'gorra', hatColor: 0x1d4f8a, pony: true });
    jp.group.position.set(sx - 4, w.groundAt(sx - 4, sz + 5), sz + 5); jp.group.rotation.y = 0.3; g.scene.add(jp.group); w.addInter('npc:jefa', sx - 4, sz + 5, { console: false, h: 3.6 });
    // destellos de los destinos: vapor de la central de Fray Bentos, haz del faro, ballena y lobos marinos
    const pol = DESTINOS[3], beam = new THREE.Mesh(new THREE.ConeGeometry(4, 40, 10, 1, true), new THREE.MeshBasicMaterial({ color: 0xfff3c4, transparent: true, opacity: 0.18, depthWrite: false, side: THREE.DoubleSide, fog: false }));
    beam.geometry.translate(0, -20, 0); beam.geometry.rotateZ(Math.PI / 2); beam.position.set(pol.ox + 58, 23, 38); pol.group.add(beam); this.beam = beam;
    const whale = new THREE.Group(), wm = new THREE.MeshStandardMaterial({ color: 0x2b3038, roughness: 0.6, flatShading: true });
    const wb = new THREE.Mesh(new THREE.SphereGeometry(1, 10, 6), wm); wb.scale.set(1.6, 0.9, 5.2); whale.add(wb);
    const tail = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.2, 1.2), wm); tail.position.z = -5.4; whale.add(tail);
    whale.position.set(pol.ox + 40, -0.6, 84); pol.group.add(whale); this.whale = whale;
    const lm = new THREE.MeshStandardMaterial({ color: 0x5a4a3c, roughness: 0.8, flatShading: true }), lg = new THREE.SphereGeometry(0.55, 7, 5); lg.scale(1, 0.55, 1.9);
    this.lobos = []; const R = rng(55);
    for (const [cu, cv, n] of [[64, 50, 9], [70, 74, 10], [48, 80, 6]]) for (let i = 0; i < n; i++) { const u = cu + (R() - 0.5) * 9, v = cv + (R() - 0.5) * 7, m = new THREE.Mesh(lg, lm); m.position.set(pol.ox + u, Math.max(pol.h(u, v), 0) + 0.25, v); m.rotation.y = R() * 6; pol.group.add(m); this.lobos.push(m); }
    // interfaz
    $('giClose').onclick = () => this.closePanel(); $('paClose').onclick = () => { $('pasaporte').classList.add('hidden'); if (g.extras.open === 'pasaporte') g.extras.open = null; };
  }
  lunU() { const v = 46; return 8 * Math.sin(v * 0.05 + 0.5) + 4 * Math.sin(v * 0.13) + 8; }

  // ---------- Sellos del pasaporte (en el kiosco no quedan guardados entre visitantes) ----------
  load() { try { const s = JSON.parse(localStorage.getItem(GKEY) || 'null'); this.sellos = (s && s.sellos) || {}; } catch (e) { this.sellos = {}; } }
  save() { if (this.g.kioskCfg) return; try { localStorage.setItem(GKEY, JSON.stringify({ sellos: this.sellos })); } catch (e) { /* sin almacenamiento */ } }
  reset() { this.sellos = {}; }
  count() { return DESTINOS.filter(d => this.sellos[d.k]).length; }

  // ---------- Consolas y personajes ----------
  describe(id) {
    const c = this.cur;
    if (id === 'v:estacion') return this.g.campo && this.g.campo.tr.state === 'parado' ? { state: 'ok', label: 'Subir al tren de la Gira por el Uruguay' } : { state: 'off', label: 'El tren llega en un ratito: esperalo en el andén' };
    if (id === 'npc:jefa') return { state: 'ok', label: 'Hablar con Inés, la jefa de estación' };
    if (id === 'v:volver') return c ? { state: c.done ? 'need' : 'ok', label: 'Tomar el tren de vuelta a Salto' } : { state: 'hidden' };
    const k = Object.keys(GENTE).find(k => 'npc:' + GENTE[k].id === id);
    if (k) return { state: c && c.k === k && !c.st.npc ? 'need' : 'ok', label: 'Hablar con ' + GENTE[k].name.split(',')[0] };
    if (/^d[1-4]:/.test(id)) {
      if (!c) return { state: 'hidden' };
      const key = id.startsWith('d3:m') ? 'd3:m' : id, done = key === 'd3:m' ? c.st['m' + id.slice(4)] : c.st[key];
      const lab = { 'd1:placa': 'Leer la placa', 'd1:mando': 'Consola de las tres represas', 'd2:sala': 'Sala de máquinas del Anglo', 'd2:caldera': 'Caldera de la central de biomasa', 'd2:h2': 'Hidrolinera', 'd3:m': 'Tomar una muestra de agua', 'd3:mirador': 'Mirador del valle', 'd4:casa': 'La casa de Doña Elsa', 'd4:faro': 'Subir al faro', 'd4:lobos': 'Mirar los lobos marinos' }[key];
      return { state: !c.st.npc ? 'locked' : done ? 'ok' : 'need', label: lab + (done ? ' ✓' : '') };
    }
    return null;
  }
  interact(id) {
    const g = this.g, c = this.cur, U = g.ui;
    if (id === 'v:estacion') { if (this.describe(id).state === 'ok') this.openPanel(); else U.note('El tren está en camino. Llega en un ratito al andén.', 4); return true; }
    if (id === 'npc:jefa') { this.talkJefa(); return true; }
    if (id === 'v:volver') { this.back(); return true; }
    const k = Object.keys(GENTE).find(k => 'npc:' + GENTE[k].id === id);
    if (k) { if (c && c.k === k && !c.st.npc) U.dialog(CHARLA[k], () => this.mark('npc')); else U.dialog([L(GENTE[k].id, c && c.done ? '¡Gracias por la visita, Capi! Ya tenés el sello en el pasaporte.' : 'Seguí con lo que charlamos, Capi: te marqué el camino con las flechas amarillas.')]); return true; }
    if (!/^d[1-4]:/.test(id) || !c) return false;
    if (!c.st.npc) { U.note('Primero hablá con ' + GENTE[c.k].name.split(',')[0] + '.', 3.5); return true; }
    switch (id) {
      case 'd1:placa': U.dialog([L('placa', 'Rincón del Bonete y su sistema de trasmisión, 1945. En 2012, el IEEE, la mayor asociación de ingenieros del mundo, lo reconoció como un hito de la historia de la ingeniería eléctrica.'), L('placa', 'Desde aquí la energía viajó por líneas de alta tensión hasta Montevideo, a más de 200 kilómetros.')], () => this.mark('d1:placa')); break;
      case 'd1:mando': if (c.st['d1:mando']) { U.note('Las tres represas trabajan en cadena.', 3); break; } g.minigame('cascada', { title: 'Represas en cadena del río Negro' }, () => U.dialog([L('operadora', '¡Así se trabaja en cadena! Bonete guarda agua y ayuda a regular las crecidas para las de abajo; Baygorria y Palmar vuelven a usar esa misma agua.'), L('operadora', 'Entre las tres suman casi 600 MW. Y todo empezó acá, en 1945.')], () => this.mark('d1:mando'))); break;
      case 'd2:sala': U.dialog([L('guiafb', 'Esta es la sala de máquinas. Según la historia del Anglo, en 1883 se instaló aquí la primera red eléctrica del país, para hacer andar la fábrica.'), L('guiafb', 'Las calderas quemaban leña y carbón. Hoy, a pocos kilómetros, se genera electricidad con biomasa: andá a la central y lo vas a ver.')], () => this.mark('d2:sala')); break;
      case 'd2:caldera': if (c.st['d2:caldera']) { U.note('La caldera ya está generando.', 3); break; } g.minigame('seq', { title: 'Caldera de la central de biomasa' }, () => U.dialog([L('guiafb', 'La planta de celulosa usa la biomasa que le sobra del proceso para hacer vapor y generar electricidad: su central tiene unos 160 MW.'), L('guiafb', 'Lo que no usa la fábrica va a la red de todo el país. Es energía renovable que sale de la madera.')], () => this.mark('d2:caldera'))); break;
      case 'd2:h2': if (c.st['d2:h2']) { U.note('El camión ya salió con el tanque lleno.', 3); break; } g.capi.work(1.6); g.audio.power(); U.dialog([L('guiafb', 'En Fray Bentos empezó el primer proyecto de hidrógeno verde del país: un camión forestal que anda con hidrógeno hecho con energía renovable.'), L('guiafb', 'Carga 68 kilos de hidrógeno en menos de media hora y le alcanzan para más de 700 kilómetros. ¡Y por el caño de escape sale solo vapor de agua!')], () => this.mark('d2:h2')); break;
      case 'd3:mirador': U.dialog([L('guarda', 'Desde acá se ve todo el valle: las laderas de basalto, el monte de quebrada y el arroyo allá abajo.'), L('guarda', 'Esa agua limpia baja al río Tacuarembó y termina en el río Negro, el de las represas de Bonete, Baygorria y Palmar. Cuidar el monte también es cuidar la energía.')], () => this.mark('d3:mirador')); g.cam.inspect = new THREE.Vector3(DESTINOS[2].ox, 8, -20); g.cam.inspectT = 7; break;
      case 'd4:casa': if (c.st['d4:casa']) { U.note('La casa de Elsa ya está lista para la noche.', 3); break; } g.minigame('polonio', { title: 'Una noche sin cables' }, () => U.dialog([L('elsa', '¡Gracias, Capi! Sin red, cada casa aprende a usar la energía con cuidado: luces LED, nada de estufas ni termos eléctricos de noche.')], () => this.mark('d4:casa'))); break;
      case 'd4:faro': g.cam.inspect = new THREE.Vector3(DESTINOS[3].ox + 58, 14, 38); g.cam.inspectT = 6; U.dialog([L('elsa', 'El faro es de 1881 y es el más oriental de la costa uruguaya. Desde arriba se ven las dunas, las islas y, con suerte, alguna ballena.'), L('elsa', 'Entre el invierno y la primavera pasan ballenas francas australes frente a la costa.')], () => this.mark('d4:faro')); break;
      case 'd4:lobos': g.audio.bark && g.audio.bark(0.4); U.dialog([L('elsa', 'En las rocas de la punta y en las islas Rasa, Encantada y El Islote vive una de las colonias de lobos marinos más importantes de la región.'), L('elsa', 'Durante muchos años los cazaron. Hoy están protegidos, y hay que mirarlos de lejos, sin molestarlos.')], () => this.mark('d4:lobos')); break;
      default:
        if (id.startsWith('d3:m')) { const i = id.slice(4); if (c.st['m' + i]) { U.note('Esa muestra ya está tomada.', 2.5); break; } c.st['m' + i] = true; g.capi.work(1.2); g.audio.splash && g.audio.splash(0.4);
          const n = [0, 1, 2].filter(j => c.st['m' + j]).length; U.note(n < 3 ? `Muestra ${n} de 3: agua clara y fresca, con larvas de insectos que solo viven en agua limpia.` : '¡Las tres muestras están! Agua limpia en todo el arroyo.', 4.5); if (n >= 3) this.mark('d3:m'); }
    }
    return true;
  }
  talkJefa() {
    const g = this.g, n = this.count();
    if (g.missions.mode === 'gira') g.missions.flags.jefa = true;
    g.extras.choose(NAMES.jefa, n >= 4 ? '¡Capi, completaste la Gira por el Uruguay! El tren te espera para volver cuando quieras.' : '¡Bienvenido a la estación! El tren de la Gira por el Uruguay sale desde este andén.', [['¿Adónde va el tren?', ''], ['Ver mi pasaporte', `${n} de 4 sellos`], ['Nada más, ¡gracias!', '']], i => {
      if (i === 0) g.ui.dialog([L('jefa', 'Hace cuatro viajes: a las represas del río Negro, a Fray Bentos, al Valle del Lunarejo y a Cabo Polonio.'), L('jefa', 'En cada lugar hay alguien que te espera con una tarea. Al terminarla, te ponen un sello en el pasaporte. ¡Juntá los cuatro!')]);
      else if (i === 1) this.openPasaporte();
    });
  }

  // ---------- Panel de destinos ----------
  openPanel() {
    const g = this.g, box = $('giList'); box.textContent = '';
    DESTINOS.forEach((d, i) => {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'btn ghost giCard' + (this.sellos[d.k] ? ' done' : '');
      b.innerHTML = `<b><kbd>${i + 1}</kbd> ${d.name}</b><small>${d.where}</small><span>${PASOS[d.k].slice(1).map(p => p[1]).join(' · ')}</span>${this.sellos[d.k] ? '<em>✓ Sello</em>' : ''}`;
      b.onclick = () => { this.closePanel(); this.go(d.k); }; box.appendChild(b);
    });
    $('giCount').textContent = `${this.count()} de 4 sellos`;
    if (g.extras.open) $(g.extras.open).classList.add('hidden'); g.extras.open = 'gira'; $('gira').classList.remove('hidden'); g.audio.click();
  }
  closePanel() { $('gira').classList.add('hidden'); if (this.g.extras.open === 'gira') this.g.extras.open = null; }
  key(code) { if (this.g.extras.open !== 'gira') return false; const m = /^(?:Digit|Numpad)([1-4])$/.exec(code); if (m) { this.closePanel(); this.go(DESTINOS[+m[1] - 1].k); return true; } return false; }

  // ---------- Viaje de ida: el tren sale con Capi, la cámara lo sigue y, tras el telón, el destino ----------
  go(k) {
    const g = this.g, G = g.grid, d = DESTINOS.find(x => x.k === k); if (!d || this.cine) return;
    this.clock = { rate: G.clockRate, hold: G.holdAt }; G.clockRate = 0;
    this.cine = { t: 0, phase: 'sube', d }; g.extras.fading = true; g.capi.goto = null;
    $('fade').classList.add('on'); $('fadeTxt').textContent = 'Subiendo al tren de la Gira…';
    setTimeout(() => { g.capi.root.visible = false; g.cam.follow = new THREE.Vector3(); g.cam.followD = 42; $('fade').classList.remove('on'); g.campo.depart(); this.cine.phase = 'viaja'; this.cine.t = 0; g.audio.bell && g.audio.bell(0.6); }, 700);
  }
  arrive(d) {
    const g = this.g;
    $('fade').classList.add('on'); $('fadeTxt').textContent = `Viajando a ${d.name}…`;
    setTimeout(() => {
      DESTINOS.forEach(x => { x.group.visible = x === d; });
      Object.assign(BND, { minX: d.ox - HALF, maxX: d.ox + HALF, minZ: -HALF, maxZ: HALF });
      const [u, v, h] = d.spawn; g.capi.teleport(d.ox + u, v); g.capi.heading = h; g.capi.root.visible = true; g.cam.follow = null; g.cam.distT = 38; g.cam.yawT = h + Math.PI;
      this.cur = { k: d.k, d, st: {}, done: !!this.sellos[d.k] && false };
      document.body.classList.add('viaje'); this.cine = null;
      setTimeout(() => { $('fade').classList.remove('on'); g.extras.fading = false; g.ui.toast(d.name.toUpperCase(), d.where, 3.2); g.audio.ok(); }, 600);
    }, 1400);
  }
  mark(key) {
    const c = this.cur, g = this.g; if (!c) return; c.st[key] = true; g.audio.ok();
    if (!c.done && PASOS[c.k].every(([k]) => c.st[k === 'npc' ? 'npc' : k])) {
      c.done = true; const first = !this.sellos[c.k]; this.sellos[c.k] = 1; this.save();
      g.ui.toast('¡SELLO EN EL PASAPORTE!', c.d.name, 3.5); g.audio.fanfare(); g.capi.celebrate(2.2);
      setTimeout(() => g.ui.note('Tomá el tren de vuelta a Salto en el andén de la Gira.', 5), 2600);
      if (first && g.missions.mode === 'gira') g.missions.giraStamp(c.k);
    }
  }
  // ---------- Viaje de vuelta ----------
  back() {
    const g = this.g, G = g.grid; if (this.cine) return;
    g.extras.fading = true; $('fade').classList.add('on'); $('fadeTxt').textContent = 'Volviendo a Salto en el tren…';
    setTimeout(() => {
      DESTINOS.forEach(x => { x.group.visible = false; });
      Object.assign(BND, { minX: B.minX, maxX: B.maxX, minZ: B.minZ, maxZ: B.maxZ });
      const [sx, sz] = ESTACION; g.capi.teleport(sx + 4, sz + 4.6); g.capi.heading = Math.PI; g.cam.distT = 40;
      if (this.clock) { G.clockRate = this.clock.rate; G.holdAt = this.clock.hold; this.clock = null; }
      this.cur = null; document.body.classList.remove('viaje');
      const T = g.campo.tr; T.x = ESTACION[0]; T.state = 'parado'; T.t = 25; g.campo.placeTrain();
      setTimeout(() => { $('fade').classList.remove('on'); g.extras.fading = false; if (this.count() >= 4 && g.missions.mode !== 'gira' && !this.toldAll) { this.toldAll = true; this.openPasaporte(); } }, 600);
    }, 1200);
  }
  leave() { if (this.cur || this.cine) { DESTINOS.forEach(x => { x.group.visible = false; }); Object.assign(BND, { minX: B.minX, maxX: B.maxX, minZ: B.minZ, maxZ: B.maxZ }); this.cur = null; this.cine = null; document.body.classList.remove('viaje'); this.g.capi.root.visible = true; this.g.cam.follow = null; } }

  // ---------- Pasaporte ----------
  openPasaporte() {
    const g = this.g, cv = $('paCv'), x = cv.getContext('2d'), W = cv.width, H = cv.height;
    x.fillStyle = '#f3ead2'; x.fillRect(0, 0, W, H); x.strokeStyle = '#1d4f8a'; x.lineWidth = 6; x.strokeRect(10, 10, W - 20, H - 20);
    x.fillStyle = '#1d4f8a'; x.font = '900 30px "Lilita One","Arial Black",sans-serif'; x.textAlign = 'center'; x.fillText('PASAPORTE DE LA GIRA', W / 2, 54);
    x.font = '700 16px Nunito,sans-serif'; x.fillStyle = '#3a2c22'; x.fillText('Capi recorrió el Uruguay de la energía renovable', W / 2, 80);
    const COLS = ['#1d6fb8', '#7a2e1d', '#2e5a2e', '#e8732a'];
    DESTINOS.forEach((d, i) => {
      const cx = 110 + (i % 2) * 260, cy = 160 + Math.floor(i / 2) * 150, on = this.sellos[d.k];
      x.save(); x.translate(cx + 60, cy); x.rotate(on ? (i % 2 ? 0.12 : -0.1) : 0); x.globalAlpha = on ? 0.9 : 0.25;
      x.strokeStyle = COLS[i]; x.lineWidth = 5; x.beginPath(); x.arc(0, 0, 58, 0, 7); x.stroke(); x.lineWidth = 2; x.beginPath(); x.arc(0, 0, 48, 0, 7); x.stroke();
      x.fillStyle = COLS[i]; x.font = '900 15px "Lilita One","Arial Black",sans-serif'; x.textAlign = 'center';
      const words = d.name.toUpperCase().split(' '), mid = Math.ceil(words.length / 2); x.fillText(words.slice(0, mid).join(' '), 0, -6); x.fillText(words.slice(mid).join(' '), 0, 14);
      x.font = '700 11px Nunito,sans-serif'; x.fillText(on ? 'GIRA · CAPI' : 'FALTA', 0, 34); x.restore();
    });
    $('paMsg').textContent = this.count() >= 4 ? '¡Gira completa! Conociste cuatro lugares donde el Uruguay produce, cuida y ahorra energía.' : `Llevás ${this.count()} de 4 sellos. El tren sale desde la estación de Salto.`;
    if (g.extras.open) $(g.extras.open).classList.add('hidden'); g.extras.open = 'pasaporte'; $('pasaporte').classList.remove('hidden');
  }

  // ---------- Objetivos en pantalla mientras se está de viaje ----------
  drive() {
    const g = this.g, c = this.cur, U = g.ui, P = PASOS[c.k];
    const items = P.map(([k, text]) => ({ text: k === 'd3:m' ? `${text} (${[0, 1, 2].filter(j => c.st['m' + j]).length}/3)` : text, done: !!c.st[k] }));
    let cur = items.findIndex(s => !s.done); if (cur < 0) cur = items.length;
    const tg = cur < P.length ? (P[cur][0] === 'npc' ? ['npc:' + GENTE[c.k].id] : P[cur][0] === 'd3:m' ? [0, 1, 2].filter(j => !c.st['m' + j]).map(j => 'd3:m' + j) : [P[cur][0]]) : ['v:volver'];
    for (const it of g.world.interList) { const dd = g.missions.describe(it.id); it.state = dd.state; it.label = dd.label || ''; it.target = tg.includes(it.id); if (it.target && it.state === 'locked') it.state = 'ok'; }
    const list = items.map((s, i) => ({ text: s.text, state: s.done ? 'done' : i === cur ? 'now' : 'next' }));
    list.push({ text: 'Volver a Salto en el tren', state: c.done ? 'now' : 'next' });
    U.mission(`Gira · ${c.d.name}`, c.done ? '¡Sello conseguido!' : c.d.where, list);
  }

  update(dt, st) {
    this.t += dt; const g = this.g;
    if (this.cine && this.cine.phase === 'viaja' && g.cam.follow) {   // unos segundos mirando cómo sale el tren y, tras el telón, el destino
      const T = g.campo.tr; g.cam.follow.set(Math.min(T.x, 260), railY(Math.min(T.x, 260)) + 2, RAIL.z); this.cine.t += dt;
      if (this.cine.t > 5.5) { this.cine.phase = 'llega'; this.arrive(this.cine.d); }
    }
    const c = this.cur; if (!c) return;
    if (c.k === 'polonio') {
      this.beam.rotation.y = this.t * 0.9; this.beam.material.opacity = 0.06 + st.night * 0.22;
      const k = (this.t % 40) / 40, wv = this.whale; wv.position.x = DESTINOS[3].ox + lerp(-70, 85, k); wv.position.y = -0.7 + Math.max(0, Math.sin(this.t * 0.7)) * 0.5; wv.rotation.y = Math.PI / 2;
      if (Math.sin(this.t * 0.7) > 0.97 && !this.spout) { this.spout = 1; g.fx.splash(wv.position.x, 1.2, wv.position.z, 10); } else if (Math.sin(this.t * 0.7) < 0.5) this.spout = 0;
      this.lobos.forEach((m, i) => { m.rotation.x = Math.sin(this.t * 1.3 + i) * 0.08; });
    }
    if (c.k === 'fray' && Math.random() < dt * 2.4) { const p = DESTINOS[1]; g.fx.puff(p.ox + 64 + (Math.random() - 0.5), 33, 40 + (Math.random() - 0.5), 2, 0xf4f4f4, 1.2); }
  }
}
