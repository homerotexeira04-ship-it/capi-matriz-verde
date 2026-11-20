// Tutorial jugable de la primera partida: caminar, mirar, saltar y hablar con Valeria.
// Los textos cambian según se juegue con teclado, pantalla táctil o joystick, y nadie queda trabado:
// si un paso se demora aparece una ayuda extra, y pasado un rato el tutorial sigue solo.
import * as THREE from 'three';

const $ = id => document.getElementById(id);
const TARGET = [-30.3, 22.4];   // vereda de la torre (la calle es de los autos)
const K = s => s.split(' ').map(k => `<kbd>${k}</kbd>`).join('');
const STEPS = [
  { id: 'walk', title: 'Caminá hasta la luz',
    txt: { keys: 'Usá las flechas o W A S D para llevar a Capi hasta el círculo brillante.', touch: 'Tocá el piso, sobre el círculo brillante, y Capi camina solo hasta ahí.', pad: 'Mové la palanca izquierda para llevar a Capi hasta el círculo brillante.' },
    caps: { keys: K('W A S D') + ' o ' + K('↑ ← ↓ →'), touch: '<kbd>Tocá el piso</kbd>', pad: '<kbd>Palanca</kbd>' },
    help: 'Mirá el círculo amarillo: está un poco más arriba en la pantalla.' },
  { id: 'look', title: 'Mirá alrededor',
    txt: { keys: 'Girá la cámara con Q y E. Con la rueda del mouse acercás y alejás la vista.', touch: 'Girá la cámara con los botones ⟲ y ⟳ de abajo a la izquierda. Con ＋ y − acercás y alejás.', pad: 'Girá la cámara con los botones LB y RB.' },
    caps: { keys: K('Q E') + ' <kbd>Rueda</kbd>', touch: K('⟲ ⟳ ＋ −'), pad: K('LB RB') },
    help: 'También sirven los botones redondos de abajo a la izquierda.' },
  { id: 'jump', title: 'Saltá',
    txt: { keys: 'Apretá Espacio para saltar. Así se pasan cercos, escalones y charcos.', touch: 'Tocá el botón Saltar, abajo a la izquierda.', pad: 'Apretá el botón B para saltar.' },
    caps: { keys: '<kbd>Espacio</kbd>', touch: '<kbd>Saltar</kbd>', pad: '<kbd>B</kbd>' },
    help: 'Es la tecla larga de abajo del teclado.' },
  { id: 'talk', title: 'Hablá con la Ing. Valeria',
    txt: { keys: 'Seguí la flecha amarilla hasta ella y apretá E. La flecha y el mapa de abajo a la derecha siempre te muestran adónde ir.', touch: 'Seguí la flecha amarilla y, cuando estés cerca, tocá el cartel que aparece abajo. El mapa de abajo a la derecha también te guía.', pad: 'Seguí la flecha amarilla y apretá A cuando estés cerca. El mapa de abajo a la derecha también te guía.' },
    caps: { keys: '<kbd>E</kbd>', touch: '<kbd>Tocá el cartel</kbd>', pad: '<kbd>A</kbd>' },
    help: 'Es la señora del casco blanco, al lado de la subestación.' }
];

export class Tutorial {
  constructor(game) {
    this.g = game; this.on = false; this.i = 0; this.t = 0; this.okT = 0; this.tips = null;
    this.dev = window.matchMedia && matchMedia('(pointer:coarse)').matches ? 'touch' : 'keys';
    window.addEventListener('keydown', () => this.setDev('keys'), true);
    window.addEventListener('pointerdown', e => { if (e.pointerType === 'touch') document.body.classList.add('touchUsed'); this.setDev(e.pointerType === 'touch' ? 'touch' : 'keys'); }, true);
    // marca en el piso para el primer paso
    const ring = this.ring = new THREE.Group();
    const m = new THREE.MeshBasicMaterial({ color: 0xffd23f, transparent: true, opacity: 0.9, depthWrite: false, side: THREE.DoubleSide, fog: false });
    const a = new THREE.Mesh(new THREE.RingGeometry(1.15, 1.55, 40), m); a.rotation.x = -Math.PI / 2; ring.add(a);
    const b = new THREE.Mesh(new THREE.CircleGeometry(1.1, 32), new THREE.MeshBasicMaterial({ color: 0xffe066, transparent: true, opacity: 0.28, depthWrite: false, fog: false })); b.rotation.x = -Math.PI / 2; ring.add(b);
    ring.visible = false; game.scene.add(ring);
    $('tSkip').onclick = () => this.skip();
  }
  setDev(d) { if (d !== this.dev) { this.dev = d; if (this.on) this.show(); } }
  get step() { return STEPS[this.i]; }
  start() {
    const g = this.g; this.on = true; this.i = 0; this.t = 0; this.okT = 0; this.tips = null; g.stats.inc(g.stats.d.tut, 'start');
    g.cam.distT = 34; this.enter(); $('tut').classList.remove('hidden'); document.body.classList.add('tut');
  }
  enter() {
    const g = this.g, s = this.step; this.t = 0; this.okT = 0; this.helped = false;
    if (s.id === 'walk') { this.ring.position.set(TARGET[0], g.world.groundAt(TARGET[0], TARGET[1]) + 0.08, TARGET[1]); this.ring.visible = true; }
    else this.ring.visible = false;
    if (s.id === 'look') { this.yaw0 = g.cam.yaw; this.turn = 0; this.lastYaw = g.cam.yaw; this.dist0 = g.cam.distT; }
    this.show();
  }
  show() {
    const s = this.step, el = $('tut'), pad = this.padOn() ? 'pad' : this.dev;
    $('tutN').textContent = `paso ${this.i + 1} de ${STEPS.length}`; $('tutT').textContent = this.okT > 0 ? '¡Bien!' : s.title;
    $('tutX').textContent = s.txt[pad] + (this.helped ? ' ' + s.help : ''); $('tutCaps').innerHTML = s.caps[pad];
    $('tutDots').innerHTML = STEPS.map((q, k) => `<i class="${k < this.i || (k === this.i && this.okT > 0) ? 'ok' : k === this.i ? 'now' : ''}"></i>`).join('');
    el.classList.toggle('ok', this.okT > 0);
  }
  padOn() { const ps = navigator.getGamepads ? navigator.getGamepads() : []; for (const p of ps) if (p && p.connected) return true; return false; }
  targets() { return this.on && this.step.id === 'talk' ? ['npc:valeria'] : []; }
  items() { return STEPS.map((s, k) => ({ text: s.title, state: k < this.i ? 'done' : k === this.i ? 'now' : 'next' })); }
  done() {
    if (this.okT > 0) return; const g = this.g; this.okT = 0.9; g.audio.ok(); this.ring.visible = false;
    const c = g.capi.pos; g.fx.sparks(c.x, c.y + 1.6, c.z, 18, 0xffd23f); this.show();
  }
  // Valeria cierra el tutorial en cualquier paso: si alguien va directo hacia ella, no se lo frena
  interact(id) {
    if (!this.on || id !== 'npc:valeria') return false;
    if (this.step.id === 'talk') this.g.stats.inc(this.g.stats.d.tut, 'done'); else this.g.stats.inc(this.g.stats.d.tut, 'skip');
    this.finish(); return true;
  }
  skip() { if (!this.on) return; this.g.stats.inc(this.g.stats.d.tut, 'skip'); this.finish(); }
  finish() { this.stop(); this.tips = { goal: false, need: false }; this.g.missions.begin(); }
  stop() { this.on = false; this.ring.visible = false; $('tut').classList.add('hidden'); document.body.classList.remove('tut'); }
  update(dt) {
    const g = this.g;
    if (this.tips) this.tip();
    if (!this.on) return;
    const s = this.step, c = g.capi, play = g.mode === 'play' && !g.locked; this.t += dt;
    if (this.ring.visible) { const k = 1 + 0.12 * Math.sin(g.time * 5); this.ring.scale.set(k, 1, k); if (Math.random() < 10 * dt) g.fx.glow.emit(TARGET[0] + (Math.random() - 0.5) * 2, this.ring.position.y + 0.2, TARGET[1] + (Math.random() - 0.5) * 2, 0, 2.2, 0, 0.9, 0.35, 0.1, 0xffe066, 0.9, 0, 1); }
    if (this.okT > 0) { this.okT -= dt; if (this.okT <= 0) { this.i++; if (this.i >= STEPS.length) return this.finish(); this.enter(); } return; }
    if (!play) return;
    if (s.id === 'walk' && Math.hypot(c.pos.x - TARGET[0], c.pos.z - TARGET[1]) < 1.9) this.done();
    if (s.id === 'look') { let d = g.cam.yaw - this.lastYaw; this.lastYaw = g.cam.yaw; this.turn += Math.abs(d); if (this.turn > 0.9 || Math.abs(Math.log(g.cam.distT / this.dist0)) > 0.3) this.done(); }
    if (s.id === 'jump' && !c.grounded && c.vy > 0) this.done();
    // ayuda si se demora, y si se traba del todo, el tutorial sigue igual
    if (!this.helped && this.t > 16) { this.helped = true; this.show(); }
    if (this.t > 45 && s.id !== 'talk') { g.ui.note('Seguimos igual: lo vas a ir aprendiendo mientras jugás.', 3.5); this.done(); }
    if (this.t > 70 && s.id === 'talk') { const v = g.world.inter['npc:valeria']; c.navigate(v.x, v.z, 2.2); this.t = 50; }
  }
  // consejos de una sola vez en la primera misión, después del tutorial
  tip() {
    const g = this.g, M = g.missions, T = this.tips, dev = this.padOn() ? 'pad' : this.dev;
    if (M.key !== 'viento' || g.mode !== 'play') { this.tips = null; return; }
    if (!T.goal && M.active && !g.ui.dlg) { T.goal = true; g.ui.note('Tus objetivos están arriba a la izquierda. La flecha amarilla te lleva al próximo.', 6); }
    if (!T.need && g.cand && g.cand.state === 'need' && !g.ui.dlg) { T.need = true; g.ui.note(dev === 'touch' ? 'Rombo rojo: algo para arreglar. Tocá el cartel de abajo para empezar.' : dev === 'pad' ? 'Rombo rojo: algo para arreglar. Apretá A para empezar.' : 'Rombo rojo: algo para arreglar. Apretá E para empezar.', 6); }
    if (T.goal && T.need) this.tips = null;
  }
}
