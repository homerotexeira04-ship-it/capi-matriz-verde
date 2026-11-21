// Arranque del juego: render, cámara isométrica orbital, entrada (teclado, ratón y táctil) y bucle principal.
import * as THREE from 'three';
import { clamp, lerp, damp, angDiff } from './util.js';
import { B, POS, ZONES, CITY_Y, coastD, westD, channelD, MUSEO_OFF } from './terrain.js';
import { EnergyGrid } from './grid.js';
import { World, canvasTex, offsetWorld } from './world.js';
import { buildCity, buildHydro, buildWind, buildSolar, buildBiomass, buildRoads, buildLines, buildFlora, buildStops, buildSur } from './sectors.js';
import { FX } from './fx.js';
import { Capi } from './capi.js';
import { Actors } from './actors.js';
import { AudioSynth } from './audio.js';
import { UI, drawFace } from './ui.js';
import { Minigames } from './minigames.js';
import { Missions } from './missions.js';
import { NavGrid } from './nav.js';
import { Extras } from './extras.js';
import { Vida, buildSalto, CLEAR } from './vida.js';
import { Social, buildSocial, CLEAR2 } from './social.js';
import './arcade.js';
import { Stats, Guide, Settings } from './guia.js';
import { Tutorial } from './tutorial.js';
import { Vecinos } from './vecinos.js';
import { Fiestas } from './fiestas.js';
import { buildBarrios, CLEAR3 } from './barrios.js';
import { Urbano } from './urbano.js';
import { buildMuseo, Museo, CLEAR4 } from './museo.js';
import { Escuela } from './escuela.js';
import { Internacional, buildIntlSalto, CLEAR5 } from './intl.js';
import { Mapa } from './mapa.js';
import { Muestras } from './muestras.js';
import { Post } from './post.js';
import { buildCorte, Corte } from './corte.js';

const $ = id => document.getElementById(id);
const FOV = 40;

// Tomas de la demostración: x, z, distancia, giro, cámara baja (0-1), hora, duración y recorrido de Capi
const SHOTS = [
  { x: -44, z: 40, d: 50, yaw: -0.55, low: 0.12, h: 19.4, t: 10, capi: [-36.4, 47, -47, 37.6] },
  { x: -122, z: -100, d: 76, yaw: 0.18, low: 0.45, h: 10.5, t: 10, rainbow: true },
  { x: -42, z: -4, d: 54, yaw: 2.75, low: 0.5, h: 6.7, t: 10 },
  { x: -46, z: 2, d: 40, yaw: 2.35, low: 0.4, h: 10.5, t: 10, capi: [-49, -4.5, -30, -4.5] },
  { x: 62, z: -8, d: 60, yaw: 0.9, low: 0.55, h: 16, t: 9 },
  { x: 78, z: -73, d: 42, yaw: -0.25, low: 0.35, h: 11.5, t: 10 },
  { x: -30, z: 80, d: 58, yaw: 0.3, low: 0.6, h: 18.4, t: 10, capi: [-22.4, 73.4, -46, 74] },
  { x: -34, z: -19, d: 20, yaw: 2.6, low: 0.3, h: 9, t: 9 },
  { x: -100, z: 56, d: 62, yaw: 1.25, low: 0.5, h: 19.6, t: 10 },
  { x: 26, z: -10, d: 44, yaw: 0.7, low: 0.45, h: 12.5, t: 9 },
  { x: -40, z: 38, d: 70, yaw: 2.6, low: 0.4, h: 17.2, t: 10 },
  { x: 18, z: -80, d: 50, yaw: 0.2, low: 0.4, h: 13, t: 9, capi: [13.5, -66, 13.5, -78] },
  { x: -30, z: 45, d: 96, yaw: -0.5, low: 0.3, h: 21.5, t: 10 },
  { x: -66, z: -68, d: 44, yaw: 0.3, low: 0.45, h: 16.4, t: 10 },
  { x: -4, z: 40, d: 40, yaw: 0.12, low: 0.35, h: 18.8, t: 9 },
  { x: -64, z: 0, d: 150, yaw: -1.05, low: 0.1, h: 11.5, t: 10 }
];
class Game {
  constructor() {
    const canvas = $('gl');
    const r = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, stencil: true, powerPreference: 'high-performance' });
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75)); r.shadowMap.enabled = true; r.localClippingEnabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
    this.post = new Post(r);   // resplandor, maqueta y color por hora
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(FOV, 1, 1, 2200);
    this.grid = new EnergyGrid(); this.audio = new AudioSynth(); this.fx = new FX(this.scene);
    this.ready = this.init(r);
  }

  // Construcción del diorama por etapas, con barra de progreso en la pantalla de inicio
  async init(r) {
    const steps = 10; let k = 0;
    const stage = async (txt) => { const el = $('load'); if (el) { el.textContent = txt; el.style.setProperty('--p', Math.round(k++ / steps * 100) + '%'); } await new Promise(res => requestAnimationFrame(() => setTimeout(res, 0))); };
    await stage('Levantando el relieve y el río…');
    // WorldBuilder
    const w = this.world = new World(this.scene, r);
    const li = $('logoLargo');
    if (li && li.naturalWidth) w.logoTex = canvasTex(720, 200, (g) => { g.fillStyle = '#0f2140'; g.fillRect(0, 0, 720, 200); g.strokeStyle = '#ffc93c'; g.lineWidth = 10; g.strokeRect(5, 5, 710, 190); const k = Math.min(640 / li.naturalWidth, 150 / li.naturalHeight), iw = li.naturalWidth * k, ih = li.naturalHeight * k; g.drawImage(li, (720 - iw) / 2, (200 - ih) / 2, iw, ih); });
    const ii = $('logoIso');
    if (ii && ii.naturalWidth) w.isoTex = canvasTex(256, 256, (g) => { g.clearRect(0, 0, 256, 256); const k = Math.min(250 / ii.naturalWidth, 250 / ii.naturalHeight), iw = ii.naturalWidth * k, ih = ii.naturalHeight * k; g.drawImage(ii, (256 - iw) / 2, (256 - ih) / 2, iw, ih); });
    w.clear = CLEAR.concat(CLEAR2, CLEAR3, CLEAR4, CLEAR5);
    await stage('Trazando calles, costanera y puentes…'); buildRoads(w); buildCity(w);
    await stage('Represa, molinos, paneles y biomasa…'); buildHydro(w); buildWind(w); buildSolar(w); buildBiomass(w); buildLines(w);
    await stage('Barrio Norte, puerto y Barrio Jardín…'); buildBarrios(w); buildStops(w); buildIntlSalto(w);
    await stage('Armando Energimundo junto a la represa…'); buildMuseo(offsetWorld(w, MUSEO_OFF[0], MUSEO_OFF[1])); buildCorte(w);
    await stage('Plantando ceibos, palmeras y naranjos…'); buildFlora(w); buildSur(w); buildSalto(w); buildSocial(w);
    await stage('Uniendo las piezas de la maqueta…'); w.finalize(); w.nightLights(); w.groundShadows(); w.buildPuddles();
    await stage('Calculando caminos para Capi…');
    this.capi = new Capi(this.scene, w, this.fx, this.audio);
    this.actors = new Actors(w, this.scene);
    this.capi.nav = new NavGrid(w);
    await stage('Despertando a los vecinos…');
    this.capiLight = new THREE.PointLight(0xfff0c8, 0, 22, 1.6); this.scene.add(this.capiLight);
    const ring = this.ring = new THREE.Mesh(new THREE.RingGeometry(0.55, 0.8, 20), new THREE.MeshBasicMaterial({ color: 0xffd23f, transparent: true, opacity: 0.9, depthWrite: false, fog: false }));
    ring.rotation.x = -Math.PI / 2; ring.visible = false; ring.renderOrder = 9; this.scene.add(ring);
    this.xray = new THREE.MeshBasicMaterial({ color: 0xffc93c, transparent: true, opacity: 0.6, depthFunc: THREE.GreaterDepth, depthWrite: false, fog: false, stencilWrite: true, stencilRef: 1, stencilFunc: THREE.NotEqualStencilFunc, stencilZPass: THREE.ReplaceStencilOp });
    this.ui = new UI(this); { const ff = $('fadeFace'); if (ff) drawFace(ff.getContext('2d'), 'capi', 0, false, null); } this.mg = new Minigames(this.audio); this.missions = new Missions(this);
    this.stats = new Stats(); window.__capiSettings = Settings; Settings.apply(); this.guide = new Guide(this);
    this.extras = new Extras(this); this.vida = new Vida(this); this.social = new Social(this); this.tut = new Tutorial(this); this.vecinos = new Vecinos(this); this.fiestas = new Fiestas(this); this.urbano = new Urbano(this); this.intl = new Internacional(this); this.mapa = new Mapa(this); this.muestras = new Muestras(this.audio); this.corte = new Corte(this); this.museo = new Museo(this); this.escuela = new Escuela(this); Settings.onFest = k => this.fiestas.set(k); this.fiestas.set(Settings.fest); Settings.onFx = v => { this.post.level = this.post.gl2 ? v : 0; }; if (Settings.fx != null && !/[?&]post=/.test(location.search) && window.CAPI_POST == null) this.post.level = this.post.gl2 ? Settings.fx : 0;   // ajuste del personal (Modo SuperCapi)
    this.mg.onStart = t => this.stats.mgStart(t); this.mg.onEnd = ok => this.stats.mgEnd(ok);
    this.mode = 'title'; this.panel = false; this.help = false; this.keys = {}; this.jump = false; this.eUsed = false; this.cand = null; this.time = 0;
    this.cam = { yaw: 0.5, yawT: 0.5, dist: 150, distT: 150, target: new THREE.Vector3(-14, 3, 14), inspect: null, inspectT: 0 };
    this.ptr = new Map(); this.drag = null; this.autoQuality = true; this.quality = 0; this.ema = 0.016; this.qT = 0;
    this.bind(); this.resize();
    if (this.kioskCfg) this.audio.start();   // el lanzador del kiosco permite sonido sin tocar nada
    for (const ev of ['pointerdown', 'keydown', 'touchstart']) window.addEventListener(ev, () => this.audio.start(), { capture: true, passive: true });
    this.missions.preset(0); this.grid.step(0); this.grid.fossil = this.grid.out.demand - this.grid.out.ren; this.grid.step(0);
    const level = mode => this.extras.choose('¿Cómo querés jugar?', 'Podés cambiar de idea la próxima vez.', [['Explorador', 'Más tranquilo: los minijuegos van más despacio y hay más margen'], ['Ingeniero', 'El desafío completo']], i => this.play(mode, 0, null, i ? 'ingeniero' : 'explorador'));
    $('bShort').onclick = () => level('corta'); $('bLong').onclick = () => level('larga');
    $('bCont').onclick = () => { if (this.saved) this.play(this.saved.mode, this.saved.phase, this.saved); };
    $('bSchool').onclick = () => this.escuela.open();
    $('bCred').onclick = () => this.showCredits(null);
    document.querySelectorAll('.bigToggle').forEach(b => { b.onclick = () => Settings.setBig(!Settings.big); });
    await stage('¡Listo!');
    this.refreshTitle(); $('load').style.removeProperty('--p');
    this.last = performance.now();
    requestAnimationFrame(t => this.frame(t));
  }

  refreshTitle() {
    const sv = this.saved = this.missions.load(), c = $('bCont');
    $('bShort').disabled = false; $('bLong').disabled = false; $('bSchool').disabled = false;
    c.classList.toggle('hidden', !sv || (sv.phase === 0));
    if (sv) { const n = sv.mode === 'corta' ? 5 : 7; c.innerHTML = 'Continuar<small>' + (sv.phase >= n ? 'modo libre' : `historia ${sv.mode} · misión ${sv.phase + 1} de ${n}`) + '</small>'; }
    $('load').textContent = 'Teclado y mouse · también funciona con pantalla táctil';
  }
  play(mode, phase, saved, level, opt = {}) {
    this.setPaused(false); if (this.clockStopped != null) this.clockStopped = null;
    this.missions.level = level || (saved && saved.level) || 'ingeniero'; this.missions.swap = !!(saved && saved.swap); this.mg.base = this.missions.level === 'explorador' ? 0.75 : 1;
    if (saved) this.extras.restore(saved); else this.extras.reset();
    this.audio.start(); this.fiestas.seen = {}; this.mode = 'play'; $('title').classList.add('hidden'); this.ui.show();
    this.cam.distT = 56; this.cam.yawT = 0.35;
    this.capi.teleport(POS.startCapi[0], POS.startCapi[1]); this.capi.heading = Math.PI;
    this.missions.school = opt.school || null; this.escuela.cur = opt.school || null; ['escuela', 'eWin'].forEach(id => $(id).classList.add('hidden')); this.escuela.winOpen = false; if (this.extras.open === 'escuela' || this.extras.open === 'eWin') this.extras.open = null;
    const tut = !opt.school && (!!opt.tutorial || (!saved && phase === 0 && !opt.guide));
    if (!opt.guide) this.stats.startGame(opt.school ? 'escuela' : mode, this.missions.level, !saved);
    this.missions.start(mode, phase, true, tut);
    if (tut) this.tut.start();
  }
  // confeti en pantalla con los colores de Energimundo
  confetti(n = 70) {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const box = $('confetti'), C = ['#e6007e', '#6a2c91', '#2ed3c6', '#ffc420', '#ffffff'];
    for (let i = 0; i < n; i++) { const s = document.createElement('i'); s.style.left = (Math.random() * 100) + '%'; s.style.background = C[i % 5]; s.style.animationDuration = (2.2 + Math.random() * 1.6) + 's'; s.style.animationDelay = (Math.random() * 0.5) + 's'; s.style.setProperty('--r', (Math.random() * 720 - 360) + 'deg'); s.style.setProperty('--x', (Math.random() * 160 - 80) + 'px'); box.appendChild(s); setTimeout(() => s.remove(), 4500); }
  }
  // la red llegó al 100 % renovable por primera vez en la misión
  celebrate100() {
    const c = this.capi.pos; this.fx.confetti(c.x, c.y + 2, c.z); this.confetti(); this.vecinos.cheer(3.5); this.audio.ok(); setTimeout(() => this.audio.ok(), 180);
    this.ui.note(`¡La red llegó al 100 % renovable!`, 3);
  }
  // baile final: cuerda de tambores de candombe, todos bailan
  dance(t, done) {
    this.audio.llamada = true; this.cineWide = true; this.capi.dancing = true; this.actors.dancing = true; this.vecinos.drums(true); this.missions.fw = Math.max(this.missions.fw || 0, t); this.confetti(90);
    this.ui.toast('¡QUE SUENE EL CANDOMBE!', 'Una cuerda de tambores toma la plaza', 3.5);
    setTimeout(() => { this.audio.llamada = false; this.cineWide = false; this.capi.dancing = false; this.actors.dancing = false; this.vecinos.drums(false); if (this.mode === 'play' && this.cine) done(); }, t * 1000);
  }
  setPaused(on) { this.paused = !!on; document.body.classList.toggle('paused', this.paused); }
  // Presentación final: Capi en primer plano sobre el escenario de la plaza
  startCine() {
    const c = this.capi; this.cine = true; this.ui.hide(); document.body.classList.add('cine');
    if (this.panel) this.togglePanel(false);
    c.teleport(POS.stage[0], POS.stage[1]); c.heading = 0; this.cam.inspect = null;
    // corte directo a un plano cercano y frontal, con un leve acercamiento
    this.cineYaw = Math.round(this.cam.yaw / (Math.PI * 2)) * Math.PI * 2; this.cam.yawT = this.cam.yaw = this.cineYaw + 0.2; this.cam.dist = 9.5; this.cam.cineK = 1; this.cam.cut = 0;
    this.cam.target.set(c.pos.x, c.pos.y + 1.95, c.pos.z);
  }
  endCine() { this.cine = false; document.body.classList.remove('cine'); if (this.mode === 'play') this.ui.show(); this.cam.distT = 46; }
  showCredits(done) {
    $('credits').classList.remove('hidden'); $('crClose').textContent = done ? 'Seguir en modo libre' : 'Volver';
    $('crClose').onclick = () => { $('credits').classList.add('hidden'); this.audio.click(); if (done) done(); };
  }
  // Vuelve a la pantalla de título (útil entre visitantes del museo); el progreso guardado se conserva
  kiosk(now) {
    const K = this.kioskCfg, busy = this.mode === 'title' && (!!this.mg.active || !!this.extras.open);
    if (!K || (this.mode === 'title' && !busy)) { this.lastInput = now; return; }
    const idle = (now - this.lastInput) / 1000, left = Math.ceil(K.idle - idle);
    if (left <= 0) {
      if (busy) { if (this.mg.active) this.mg.cancel(); const o = this.extras.open; if (o) { $(o).classList.add('hidden'); this.extras.open = null; } }
      else { this.missions.forget(); this.toTitle(); }
      this.lastInput = now;
    }
    else if (left <= K.warn) this.ui.note(`¿Seguís ahí? El juego vuelve al inicio en ${left} s. Mové el mouse o tocá una tecla para seguir.`, 1.2);
  }
  // ---------- Demostración: si nadie toca nada en el título, la cámara pasea por el diorama ----------
  attractStep(dt, real) {
    document.body.classList.toggle('arc', this.mode === 'title' && (!!this.mg.active || !!this.extras.open));
    if (this.mode !== 'title' || !$('credits').classList.contains('hidden') || this.mg.active || this.extras.open) { this.titleIdle = 0; if (this.attract) this.stopAttract(); return; }
    this.titleIdle = (this.titleIdle || 0) + real;
    if (!this.attract) { if (this.titleIdle > (this.kioskCfg ? 12 : 25)) { this.attract = { t: 0, next: 0, i: -1, hour0: this.grid.hour }; document.body.classList.add('attract'); } return; }
    const A = this.attract, cam = this.cam; A.t += real;
    if (A.t >= A.next) {
      if (!A.fading) { A.fading = true; $('fadeTxt').textContent = ''; $('fade').classList.add('on'); A.next = A.t + 0.5; return; }
      A.fading = false; A.i = (A.i + 1) % SHOTS.length; const s = A.shot = SHOTS[A.i]; A.start = A.t; A.next = A.t + s.t;
      cam.target.set(s.x, this.world.groundAt(s.x, s.z) + 2, s.z); cam.dist = s.d * 1.1; cam.yaw = cam.yawT = s.yaw; cam.low = s.low; cam.lowK = s.low; this.grid.hour = s.h;
      if (s.capi) { this.capi.teleport(s.capi[0], s.capi[1]); this.capi.navigate(s.capi[2], s.capi[3], 0.8); } else this.capi.teleport(POS.startCapi[0], POS.startCapi[1]);
      if (s.rainbow) this.vida.showRainbow(s.t, true);
      setTimeout(() => $('fade').classList.remove('on'), 120);
    }
    if (A.shot) cam.distT = lerp(A.shot.d * 1.1, A.shot.d * 0.86, clamp((A.t - A.start) / A.shot.t, 0, 1));
  }
  stopAttract() {
    const A = this.attract; if (!A) return; this.attract = null; this.titleIdle = 0; document.body.classList.remove('attract'); $('fade').classList.remove('on');
    this.grid.hour = A.hour0; this.cam.low = 0; this.cam.distT = this.cam.dist = 150; this.cam.target.set(-14, 3, 14); this.capi.teleport(POS.startCapi[0], POS.startCapi[1]); this.vida.rainbowT = 0;
  }
  // Modo foto: sin carteles y con la cámara libre
  togglePhoto() { this.photo = !this.photo; this.keys = {}; if (this.photo) { this.ui.hide(); this.cam.lowP = 0; this.cam.dist0 = this.cam.distT; this.postal(); } else { this.ui.show(); this.cam.distT = this.cam.dist0 || 56; } document.body.classList.toggle('photo', this.photo); this.audio.click(); }
  // Marco de postal del modo foto: fecha de hoy y sello con Capi (con su atuendo)
  postal() {
    document.body.classList.toggle('postal', !this.postalOff);
    const d = $('pcDate'); if (d) d.textContent = new Date().toLocaleDateString('es-UY', { day: 'numeric', month: 'long', year: 'numeric' });
    const f = $('pcFace'); if (f) drawFace(f.getContext('2d'), 'capi', 0, false, this.extras ? this.extras.colors() : null);
  }
  // Joystick: palanca o cruceta para moverse y navegar menús; A acción, B saltar, X panel, Y vestuario, LB/RB girar la cámara
  pad(dt) {
    const pads = navigator.getGamepads ? navigator.getGamepads() : []; let p = null; for (const q of pads) if (q && q.connected) { p = q; break; } if (!p) return;
    const b = i => !!(p.buttons[i] && p.buttons[i].pressed), ax = p.axes[0] || 0, ay = p.axes[1] || 0, S = this.padS = this.padS || {};
    const dirs = { ArrowLeft: ax < -0.5 || b(14), ArrowRight: ax > 0.5 || b(15), ArrowUp: ay < -0.5 || b(12), ArrowDown: ay > 0.5 || b(13) }, A = b(0);
    const menu = this.mg.active ? null : this.extras.open ? $(this.extras.open) : !$('credits').classList.contains('hidden') ? $('credits') : this.mode === 'title' ? $('title') : this.help ? $('help') : this.panel ? $('panel') : null;
    if (menu) {   // en los menús se mueve el foco entre botones
      const btns = [...menu.querySelectorAll('button')].filter(el => el.offsetParent !== null && !el.disabled), cur = btns.indexOf(document.activeElement);
      const edge = (k, on) => { const was = S[k]; S[k] = on; return on && !was; };
      const nx = edge('mN', dirs.ArrowDown || dirs.ArrowRight), pv = edge('mP', dirs.ArrowUp || dirs.ArrowLeft);
      if (btns.length && (nx || pv)) btns[(cur + (nx ? 1 : -1) + btns.length) % btns.length].focus();
      if (edge('mA', A) && btns.length) (cur >= 0 ? btns[cur] : btns[0]).click();
      if (edge('mB', b(1)) && this.extras.open) this.extras.close();
      return;
    }
    const want = Object.assign({ Space: b(1) || (A && !!this.mg.active), KeyE: A && !this.mg.active, Tab: b(2), KeyV: b(3), Escape: b(8), KeyP: b(9) }, dirs);
    for (const c in want) if (!!S[c] !== want[c]) { S[c] = want[c]; window.dispatchEvent(new KeyboardEvent(want[c] ? 'keydown' : 'keyup', { code: c, key: c, bubbles: true })); }
    if (this.mode === 'play' && !this.locked) this.cam.yawT += ((b(4) ? 1 : 0) - (b(5) ? 1 : 0) - (Math.abs(p.axes[2] || 0) > 0.3 ? p.axes[2] : 0)) * 1.9 * dt;
  }
  toTitle() {
    if (this.photo) this.togglePhoto();
    this.intl.cancel(); this.tut.stop(); this.setPaused(false); this.audio.llamada = false; this.cineWide = false; this.capi.dancing = false; this.actors.dancing = false; this.vecinos.drums(false); this.clockStopped = null; this.stats.endSession(); if (this.extras.open === 'guide') this.guide.close();
    this.toggleHelp(false); if (this.panel) this.togglePanel(false); if (this.mg.active) this.mg.cancel(); this.extras.open = null; ['wardrobe', 'travel', 'diploma', 'arcade', 'album', 'choice', 'domo', 'escuela', 'eWin', 'bigmap'].forEach(id => $(id).classList.add('hidden'));
    this.ui.dlg = null; $('dialog').classList.add('hidden'); this.ui.hide(); this.mode = 'title'; $('title').classList.remove('hidden');
    this.refreshTitle(); if (this.cine) this.endCine(); $('credits').classList.add('hidden');
    this.missions.active = false; this.missions.free = false; this.missions.m5 = null; this.missions.fw = 0; this.cam.distT = 150; this.cam.inspect = null; this.cam.target.set(-14, 3, 14); this.keys = {};
  }
  get locked() { return this.mode !== 'play' || !!this.riding || !!this.ui.dlg || !!this.mg.active || this.panel || this.help || !!this.cine || !!this.extras.open || this.extras.fading || !!this.photo; }
  togglePanel(on) { if (this.mode !== 'play' || this.mg.active || this.ui.dlg) return; this.panel = on == null ? !this.panel : on; if (this.panel) this.ui.openPanel(this.missions.free); else this.ui.closePanel(); this.audio.click(); }
  toggleHelp(on) { this.help = on; $('help').classList.toggle('hidden', !on); }
  toggleMute() { this.muteAt = performance.now(); this.audio.setMuted(!this.audio.muted); $('bMute').textContent = 'Sonido: ' + (this.audio.muted ? 'no' : 'sí'); }
  minigame(type, opts, onWin) { this.capi.goto = null; this.mg.start(type, opts, ok => { if (ok) onWin(); }); }
  inspect(id) {
    const z = id === 'terminal' ? { x: POS.terminal[0], z: POS.terminal[1] + 6 } : ZONES.find(q => q.id === id); if (!z) return;
    if (this.panel) this.togglePanel(false);
    this.cam.inspect = new THREE.Vector3(z.x, this.world.groundAt(z.x, z.z) + 2, z.z); this.cam.inspectT = 6.5;
  }
  interact(id) { const it = this.world.inter[id]; if (!it || it.state === 'locked') return; this.capi.goto = null; this.face = Math.atan2(it.x - this.capi.pos.x, it.z - this.capi.pos.z); this.missions.interact(id); }

  bind() {
    const cv = $('gl');
    for (const ev of ['keydown', 'pointerdown', 'pointermove', 'wheel', 'touchstart']) window.addEventListener(ev, e => { this.titleIdle = 0; if (this.attract) { this.stopAttract(); if (ev === 'keydown') { e.stopPropagation(); e.preventDefault(); } } }, { capture: true });
    const K = window.CAPI_KIOSCO; this.kioskCfg = K ? { idle: Math.max(30, +K.idle || 180), warn: Math.max(5, +K.warn || 30) } : null; this.lastInput = performance.now();
    document.addEventListener('visibilitychange', () => { const c = this.audio.ctx; if (!c) return; if (document.hidden) { if (c.state === 'running') c.suspend(); } else if (c.state === 'suspended') c.resume(); });   // pestaña oculta: el juego se congela y el sonido también
    if (this.kioskCfg) { this.missions.forget(); for (const ev of ['keydown', 'pointerdown', 'pointermove', 'wheel', 'touchstart']) window.addEventListener(ev, () => { this.lastInput = performance.now(); }, { passive: true, capture: true }); window.addEventListener('contextmenu', e => e.preventDefault()); }
    window.addEventListener('pointermove', e => { this.mouse = e.pointerType === 'mouse' ? { x: e.clientX, y: e.clientY } : null; }, { passive: true });
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('keydown', e => {
      const c = e.code;
      if (e.target && e.target.tagName === 'INPUT' && e.target.type === 'text') return;   // escribiendo el nombre del diploma
      if (['Tab', 'Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(c)) e.preventDefault();
      if (this.mode === 'title' && (this.mg.active || this.extras.open)) {   // feria o elección de nivel desde el título
        if (c === 'Escape') { if (this.mg.active) this.mg.cancel(); else this.extras.close(); } else if (!e.repeat) { if (this.mg.active) this.mg.key(c, true); else this.extras.key(c); }
        return;
      }
      if (this.mode === 'title') { if (c === 'KeyM' && !e.repeat) this.toggleMute(); if (c === 'Enter' && !$('bLong').disabled && $('credits').classList.contains('hidden')) { if (this.saved && this.saved.phase > 0) this.play(this.saved.mode, this.saved.phase, this.saved); else this.play('larga', 0); } return; }
      if (c === 'KeyP' && !e.repeat && this.mode === 'play' && (this.photo || !this.locked)) { this.togglePhoto(); return; }
      if (this.photo) { if (c === 'Escape') this.togglePhoto(); else if (c === 'KeyC' && !e.repeat) { this.postalOff = !this.postalOff; this.postal(); this.audio.click(); } else this.keys[c] = true; return; }
      if (this.riding) { if (!e.repeat && ['KeyE', 'Space', 'Enter', 'Escape', 'KeyF'].includes(c)) this.intl.skip(); if (c === 'KeyM' && !e.repeat) this.toggleMute(); return; }
      if (c === 'Escape' && this.tut.on && !this.extras.open && !this.mg.active && !this.ui.dlg) { this.tut.skip(); return; }
      if (c === 'Escape') { if (this.extras.open) this.extras.close(); else if (this.mg.active) this.mg.cancel(); else if (this.panel) this.togglePanel(false); else if (this.help) this.toggleHelp(false); return; }
      if (c === 'KeyM' && !e.repeat) this.toggleMute();
      if (c === 'KeyN' && !e.repeat && this.mode === 'play' && (this.extras.open === 'bigmap' || !this.locked)) { this.mapa.toggle(); return; }
      if (this.extras.open) { if (!e.repeat) { if (c === 'KeyV' || c === 'KeyB') this.extras.close(); else this.extras.key(c); } return; }
      if (c === 'KeyB' && !e.repeat && !this.locked) { this.social.openAlbum(); return; }
      if (c === 'KeyV' && !e.repeat && !this.locked) { this.extras.toggleWardrobe(); return; }
      if (this.mg.active) { if (!e.repeat) this.mg.key(c, true); return; }
      if (c === 'Tab') { if (!e.repeat && !this.cine) this.togglePanel(); return; }
      if (this.ui.dlg) { if (!e.repeat && (c === 'KeyE' || c === 'Space' || c === 'Enter' || c === 'KeyF')) this.ui.advance(); return; }
      if (this.panel || this.help) return;
      if (e.repeat) return;
      if (c === 'KeyT' && this.extras.rideTo) { this.extras.ride(); return; }
      this.keys[c] = true;
      if (c === 'Space') this.jump = true;
      if (c === 'KeyE' || c === 'KeyF' || c === 'Enter') { if (this.cand) { if (c === 'KeyE') this.eUsed = true; this.interact(this.cand.id); } }
      if (e.shiftKey && (c === 'KeyQ' || (c === 'KeyE' && !this.eUsed))) { const s = Math.PI / 4; this.cam.yawT = (c === 'KeyQ' ? Math.floor(this.cam.yawT / s + 1e-3) + 1 : Math.ceil(this.cam.yawT / s - 1e-3) - 1) * s; }
    });
    window.addEventListener('keyup', e => { this.keys[e.code] = false; if (e.code === 'KeyE') this.eUsed = false; if (this.mg.active) this.mg.key(e.code, false); });
    window.addEventListener('blur', () => { this.keys = {}; });
    cv.addEventListener('contextmenu', e => e.preventDefault());
    cv.addEventListener('pointerdown', e => {
      cv.setPointerCapture(e.pointerId); this.ptr.set(e.pointerId, { x: e.clientX, y: e.clientY });
      this.drag = { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, moved: 0, right: e.button === 2, touch: e.pointerType === 'touch', pinch: this.ptr.size > 1 ? this.pinchDist() : 0 };
    });
    cv.addEventListener('pointermove', e => {
      if (!this.ptr.has(e.pointerId) || !this.drag) return; const d = this.drag, p = this.ptr.get(e.pointerId), dx = e.clientX - p.x;
      p.x = e.clientX; p.y = e.clientY; d.moved = Math.max(d.moved, Math.hypot(e.clientX - d.sx, e.clientY - d.sy));
      if (this.mode !== 'play') return;
      if (this.ptr.size > 1) { const pd = this.pinchDist(); if (d.pinch > 0) this.cam.distT = clamp(this.cam.distT * d.pinch / pd, 20, 195); d.pinch = pd; d.moved = 99; }
      else if (d.right || (d.touch && d.moved > 12)) this.cam.yawT -= dx * 0.007;
    });
    const up = e => { const d = this.drag; this.ptr.delete(e.pointerId); if (!d) return; if (this.ptr.size === 0) { if (!d.right && d.moved < 7 && e.type === 'pointerup') this.click(e.clientX, e.clientY); this.drag = null; } };
    cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
    cv.addEventListener('wheel', e => { e.preventDefault(); if (this.mode === 'play' && !this.panel) this.cam.distT = clamp(this.cam.distT * Math.exp(e.deltaY * 0.0011), 20, 195); }, { passive: false });
    const hold = (id, fn) => { const b = $(id); let t = null; const stop = () => { clearInterval(t); t = null; }; b.addEventListener('pointerdown', () => { fn(); t = setInterval(fn, 60); }); ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => b.addEventListener(ev, stop)); };
    hold('cL', () => { this.cam.yawT += 0.09; }); hold('cR', () => { this.cam.yawT -= 0.09; });
    hold('cIn', () => { this.cam.distT = clamp(this.cam.distT * 0.94, 20, 195); }); hold('cOut', () => { this.cam.distT = clamp(this.cam.distT * 1.06, 20, 195); });
  }
  pinchDist() { const p = [...this.ptr.values()]; return p.length > 1 ? Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y) : 0; }
  resize() {
    const w = window.innerWidth, h = window.innerHeight; this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    this.fx.setScale(h * this.renderer.getPixelRatio() / (2 * Math.tan(FOV * Math.PI / 360)));
  }

  // Clic izquierdo: consola/NPC resaltado o navegación automática hacia el punto del terreno
  click(px, py) {
    if (this.ui.dlg) return this.ui.advance();
    if (this.locked) return;
    const w = this.world, v = new THREE.Vector3(), W = window.innerWidth, H = window.innerHeight;
    const best = this.pickAt(px, py), c = this.capi;
    if (best) {
      if (Math.hypot(best.x - c.pos.x, best.z - c.pos.z) < best.r) return this.interact(best.id);
      c.navigate(best.x, best.z, best.r - 0.9, () => this.interact(best.id)); this.ringAt(best.x, best.z); return;
    }
    const o = this.camera.position, d = v.set(px / W * 2 - 1, -(py / H) * 2 + 1, 0.5).unproject(this.camera).sub(o).normalize();
    let t0 = 2, hit = null;
    for (let t = 2; t < 700; t += 1.2) {
      const x = o.x + d.x * t, y = o.y + d.y * t, z = o.z + d.z * t;
      if (x < B.minX || x > B.maxX || z < B.minZ || z > B.maxZ) { t0 = t; if (y < -4) break; continue; }
      const g = Math.max(w.groundAt(x, z, y + 1.3), w.waterAt(x, z) - 0.3);
      if (y <= g) { let a = t0, b = t; for (let i = 0; i < 7; i++) { const m = (a + b) / 2, mx = o.x + d.x * m, my = o.y + d.y * m, mz = o.z + d.z * m; if (my <= Math.max(w.groundAt(mx, mz, my + 1.3), w.waterAt(mx, mz) - 0.3)) b = m; else a = m; } hit = { x: o.x + d.x * b, z: o.z + d.z * b }; break; }
      t0 = t;
    }
    if (hit) { c.navigate(hit.x, hit.z, 0.6); this.ringAt(hit.x, hit.z); this.audio.click(); }
  }
  // Consola o personaje más cercano al puntero en pantalla (para el clic y para el cursor)
  pickAt(px, py) {
    const v = this.pickV || (this.pickV = new THREE.Vector3()), W = window.innerWidth, H = window.innerHeight; let best = null, bd = 56;
    for (const it of this.world.interList) {
      if (it.state === 'locked' || it.state === 'hidden') continue;
      for (const hy of [1.3, it.baseY - it.y]) { v.set(it.x, it.y + hy, it.z).project(this.camera); if (v.z > 1) continue; const d = Math.hypot((v.x * 0.5 + 0.5) * W - px, (-v.y * 0.5 + 0.5) * H - py); if (d < bd) { bd = d; best = it; } }
    }
    return best;
  }
  // Cursor según lo que hay debajo: usar, caminar o girar la cámara
  cursor() {
    const d = this.drag, m = this.mouse; let s = '';
    if (d && d.right && !d.touch) s = 'rot';
    else if (m && this.mode === 'play' && !this.locked && !this.ui.dlg && !this.panel && !this.help && !this.mg.active && !this.extras.open && !this.photo && !this.cine) s = this.pickAt(m.x, m.y) ? 'use' : 'walk';
    if (s !== this.curS) { this.curS = s; if (s) document.body.dataset.cur = s; else delete document.body.dataset.cur; }
  }
  ringAt(x, z) { const w = this.world; this.ring.position.set(x, Math.max(w.groundAt(x, z), w.waterAt(x, z)) + 0.14, z); this.ring.visible = true; }

  frame(now) {
    requestAnimationFrame(t => this.frame(t)); this.kiosk(now);
    const real = (now - this.last) / 1000, cdt = Math.min(0.05, Math.max(0.001, real)), dt = this.paused ? 1e-6 : cdt; this.last = now; this.time += dt;
    if (this.mode === 'play' && !this.paused && real < 1) this.stats.play(real);
    // Calidad adaptativa: si el equipo no llega a ~30 FPS, baja resolución y sombras por pasos
    if (this.mode === 'play' && this.autoQuality && real < 0.5) {
      this.ema = lerp(this.ema, real, 0.05); this.qT += real;
      if (this.qT > 3 && this.ema > 0.036 && this.quality < 3) {
        this.qT = 0; this.quality++; const sun = this.world.sun;
        if (this.quality === 1) { this.renderer.setPixelRatio(1); this.resize(); }
        else if (this.quality === 2) { sun.shadow.mapSize.set(1024, 1024); if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; } this.post.level = Math.min(this.post.level, 1); }
        else { sun.castShadow = false; this.post.level = 0; }
      }
    }
    const k = this.keys, cam = this.cam, c = this.capi, G = this.grid, w = this.world, play = this.mode === 'play';
    // --- Entrada ---
    const mx = (k.KeyD || k.ArrowRight ? 1 : 0) - (k.KeyA || k.ArrowLeft ? 1 : 0), mz = (k.KeyW || k.ArrowUp ? 1 : 0) - (k.KeyS || k.ArrowDown ? 1 : 0);
    if (play && !this.locked) { if (k.KeyQ && !k.ShiftLeft && !k.ShiftRight) cam.yawT += 1.9 * cdt; if (k.KeyE && !this.eUsed && !k.ShiftLeft && !k.ShiftRight) cam.yawT -= 1.9 * cdt; }
    if ((mx || mz) && !this.riding) { cam.inspect = null; this.face = null; cam.lowT = 0; }
    if (cam.lowT > 0) cam.lowT -= cdt;   // plano bajo por un rato (por ejemplo, para mirar una fiesta)
    const inp = { mx: this.locked ? 0 : mx, mz: this.locked ? 0 : mz, yaw: cam.yaw, jump: this.jump && !this.locked, locked: this.locked, working: !!this.mg.active, talking: this.cine && this.ui.talking === 'capi', face: this.cine ? 0 : (this.mg.active || this.ui.dlg || c.busy > 0) ? this.face : null };
    this.jump = false;
    this.attractStep(dt, Math.min(real, 1)); this.pad(dt);
    if (this.mode === 'title' && !this.attract) { const fc = this.tFaceCtx || (this.tFaceCtx = $('tFace') && $('tFace').getContext('2d')); if (fc) drawFace(fc, 'capi', now / 1000, (now / 1000) % 7 > 6.4, this.extras.colors()); }
    if (this.photo) { if (k.KeyQ || k.ArrowLeft) cam.yawT += 1.6 * cdt; if (k.KeyE || k.ArrowRight) cam.yawT -= 1.6 * cdt; if (k.KeyW || k.ArrowUp) cam.lowP = clamp((cam.lowP || 0) + cdt * 0.7, 0, 0.92); if (k.KeyS || k.ArrowDown) cam.lowP = clamp((cam.lowP || 0) - cdt * 0.7, 0, 0.92); if (k.KeyA) cam.distT = clamp(cam.distT - 40 * cdt, 8, 195); if (k.KeyD) cam.distT = clamp(cam.distT + 40 * cdt, 8, 195); }
    if (play) c.update(dt, inp); else c.update(dt, { mx: 0, mz: 0, yaw: 0, jump: false, locked: !this.attract });
    // --- Simulación ---
    G.step(dt);
    if (play && !this.riding) this.missions.update(dt);
    this.tut.update(dt);
    this.mg.update(dt);
    // Consola candidata
    this.cand = null;
    if (play && !this.locked) { let bd = 1e9; for (const it of w.interList) { if (it.state === 'locked' || it.state === 'hidden') continue; const d = Math.hypot(it.x - c.pos.x, it.z - c.pos.z); if (d < it.r && d < bd && Math.abs(it.y - c.pos.y) < 4.5) { bd = d; this.cand = it; } } }
    this.ui.prompt(this.cand ? this.cand.label : null);
    this.ring.visible = this.ring.visible && !!c.goto; if (this.ring.visible) { this.ring.scale.setScalar(1 + 0.25 * Math.sin(this.time * 9)); }
    // --- Cámara: seguimiento con amortiguación, órbita y zoom ---
    if (!play) { cam.yawT += cdt * 0.06; }
    cam.inspectT -= cdt; if (cam.inspectT <= 0) cam.inspect = null;
    if (this.cine) cam.yawT = this.cineYaw + Math.sin(this.time * 0.22) * 0.24;
    cam.cineK = damp(cam.cineK || 0, this.cine ? 1 : 0, 2.2, cdt);
    cam.yaw = damp(cam.yaw, cam.yawT, this.cine ? 2 : 9, cdt); cam.dist = damp(cam.dist, this.cine ? (this.cineWide ? 20 : 7.4) : cam.follow ? cam.followD : cam.inspect ? 95 : cam.distT, this.cine ? 2.2 : 4, cdt);
    const goal = this.cine ? new THREE.Vector3(c.pos.x, c.pos.y + (this.cineWide ? 0.6 : 1.95), c.pos.z + (this.cineWide ? 4.2 : 0)) : cam.follow ? cam.follow : cam.inspect ? cam.inspect : !play ? cam.target : new THREE.Vector3(c.pos.x + c.vel.x * 0.4, c.pos.y + 1.5, c.pos.z + c.vel.z * 0.4);
    cam.target.x = damp(cam.target.x, goal.x, cam.inspect ? 2.5 : 6, cdt); cam.target.y = damp(cam.target.y, goal.y, 4, cdt); cam.target.z = damp(cam.target.z, goal.z, cam.inspect ? 2.5 : 6, cdt);
    const zt = clamp((cam.dist - 20) / 175, 0, 1), base = (40 + 5 * zt) * Math.PI / 180;
    // Si un edificio tapa a Capi, se abre un corte en los edificios entre la cámara y él
    const occ = play && !cam.inspect && !cam.follow && !this.cine && w.occluded(c.pos.x + Math.sin(cam.yaw) * Math.cos(base) * cam.dist, c.pos.y + 1.5 + Math.sin(base) * cam.dist, c.pos.z + Math.cos(cam.yaw) * Math.cos(base) * cam.dist, c.pos.x, c.pos.y + 1.6, c.pos.z);
    cam.cut = damp(cam.cut || 0, occ ? 1 : 0, occ ? 7 : 3, cdt); w.setCutaway(cam.cut, c.pos, cam.yaw);
    cam.lowK = damp(cam.lowK || 0, this.attract ? (cam.low || 0) : this.photo ? (cam.lowP || 0) : cam.lowT > 0 ? (cam.lowF || 0) : 0, cam.lowT > 0 ? 1.5 : 3, cdt);
    cam.wideK = damp(cam.wideK || 0, this.cineWide ? 1 : 0, 2, cdt);
    const pitch = lerp(lerp(base, 0.16, cam.lowK), lerp(-0.09, 0.58, cam.wideK), cam.cineK);   // en la presentación la cámara baja y mira a Capi de frente
    this.camera.position.set(cam.target.x + Math.sin(cam.yaw) * Math.cos(pitch) * cam.dist, cam.target.y + Math.sin(pitch) * cam.dist, cam.target.z + Math.cos(cam.yaw) * Math.cos(pitch) * cam.dist);
    this.camera.lookAt(cam.target); this.camera.updateMatrixWorld();
    this.muestras.listen(play ? c.pos : cam.target, this.camera);   // los sonidos grabados se oyen desde donde está Capi
    // --- Mundo ---
    const night = G.night(), pct = G.out.pct, needs = w.interList.filter(it => it.state === 'need');
    const st = { grid: G, hour: G.hour, night, focus: cam.target, cam: this.camera.position, barrios: play ? [pct >= 33, pct >= 63, pct >= 88] : [true, true, true], demo: !play, fx: this.fx, zoom: cam.dist, cine: !!this.cine, capi: c.pos, talking: this.ui.talking, needs, busesOn: G.buses, audio: this.audio };
    w.update(dt, st); this.actors.update(dt, st);
    c.setLed(pct / 100, pct >= 100); c.lamp.material.emissiveIntensity = 0.5 + night * 3;
    if (this.cine) { this.capiLight.position.set(c.pos.x, c.pos.y + 3.4, c.pos.z + 2.6); this.capiLight.intensity = night * 40; } else { this.capiLight.position.set(c.pos.x, c.pos.y + 4.6, c.pos.z); this.capiLight.intensity = night * 16; }
    if (c.rimU) c.rimU.uRim.value = lerp(0.14, 0.3, night); this.fx.setLight(lerp(1, 0.4, night) * (1 - 0.25 * (w.storm || 0)));   // halo suave: con la noche oscura y el resplandor, más quemaba
    for (const it of needs) if (Math.random() < 5 * dt) this.fx.sparks(it.x + (Math.random() - 0.5), it.y + 1.6, it.z + (Math.random() - 0.5), 3, 0xffb020);
    this.extras.update(dt, { fx: this.fx, play: play && !this.cine && !this.riding }); this.vida.update(dt, st); this.social.update(dt, st); this.vecinos.update(dt, st); this.fiestas.update(dt, st); this.intl.update(dt, st); this.corte.update(dt, st); this.urbano.update(dt, st); this.museo.update(dt, st); this.escuela.update();
    this.fx.update(dt);
    // --- Audio y HUD ---
    const near = (x, z, r) => clamp(1 - Math.hypot(c.pos.x - x, c.pos.z - z) / r, 0, 1);
    let amb = null, windNear = Math.max(0.12, near(70, -12, 75)), waterNear = Math.max(near(-11, -49, 45), c.swimming ? 0.45 : 0);
    if (!play) {   // pantalla de inicio y demostración: el sonido sigue a la cámara
      const f = cam.target, nf = (x, z, r) => clamp(1 - Math.hypot(f.x - x, f.z - z) / r, 0, 1), wide = clamp((cam.dist - 75) / 55, 0, 1);
      const water = Math.max(clamp(1 - Math.max(coastD(f.x, f.z), westD(f.x, f.z)) / 32, 0, 1), clamp(1 - channelD(f.x, f.z) / 26, 0, 0.85), nf(-130, -124, 60), nf(-122, -96, 40));
      const city = Math.max(nf(-32, 48, 58), nf(0, 52, 40), nf(-44, 4, 34)), field = nf(58, -6, 58);
      amb = { water: lerp(water, 0.45, wide), city: lerp(city, 0.4, wide), field: lerp(field, 0.3, wide), green: clamp(1 - city * 0.7, 0.3, 1), plaza: nf(-44, 38, 24) * (1 - wide), night, hour: G.hour };
      windNear = Math.max(0.08, 0.6 * lerp(Math.max(field, nf(70, -12, 75) * 0.6), 0.3, wide)); waterNear = amb.water * 0.45;
    }
    // cuerda de tambores de verdad: el desfile de Carnaval o la del baile final en la plaza
    this.muestras.frame(dt, this.audio.llamada ? this.vecinos.drumAt() : this.fiestas.cuerdaAt(), !play, this.paused);
    this.audio.realDrums = this.muestras.ok; this.audio.duck = this.muestras.level;
    this.audio.update(dt, { pct, title: !play, amb, festSoft: this.fiestas.soft, carnaval: this.fiestas.mode === 'carnaval', wind: G.wind, windNear, waterNear, humNear: Math.max(near(POS.substation[0], POS.substation[1], 14), near(POS.windTx[0], POS.windTx[1], 14), near(POS.bioSub[0], POS.bioSub[1], 14), near(POS.batYard[0], POS.batYard[1], 16)), deficit: play && G.freq < 49.5 });
    if ((this.curT = (this.curT || 0) - dt) <= 0) { this.curT = 0.08; this.cursor(); }
    if (play) this.ui.update(dt, { capi: c.pos, heading: c.heading, yaw: cam.yaw, inter: w.interList, panel: this.panel, capiTalk: this.ui.talking === 'capi', colors: this.extras.colors(), buses: G.buses, sparks: this.extras.sparks.filter(q => !this.extras.got.has(q.i)) });
    const r = this.renderer;
    r.autoClear = true; r.shadowMap.autoUpdate = true; this.camera.layers.set(0); r.info.autoReset = false; r.info.reset();   // contadores de todo el cuadro (escena + postproceso)
    this.post.begin();
    r.render(this.scene, this.camera);
    if (play && !this.cine) {   // segunda pasada: silueta de Capi a través de los obstáculos
      r.autoClear = false; r.shadowMap.autoUpdate = false; this.camera.layers.set(1); this.scene.overrideMaterial = this.xray;
      const bg = this.scene.background; this.scene.background = null;
      r.render(this.scene, this.camera);
      this.scene.background = bg; this.scene.overrideMaterial = null; this.camera.layers.set(0);
    }
    this.post.end({ hour: G.hour, night, storm: w.storm || 0, dist: cam.dist, focus: cam.target, camera: this.camera, title: !play });
  }
}

async function boot() {
  try { const g = new Game(); await g.ready; window.__bootMs = Math.round(performance.now()); window.__game = g; }
  catch (e) { console.error(e); $('load').textContent = 'No se pudo iniciar el motor 3D: ' + e.message; }
}
const fonts = document.fonts && document.fonts.ready ? Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1500))]) : Promise.resolve();
const imgs = [...document.images].map(i => i.decode ? i.decode().catch(() => {}) : Promise.resolve());
Promise.all([fonts, ...imgs]).then(() => setTimeout(boot, 30));
