// CapiController: modelo 3D de Capi, física, colisiones suaves, detección agua/tierra y máquina de estados de animación.
import * as THREE from 'three';
import { clamp, lerp, damp, angDiff, rng } from './util.js';
import { B, POS, CITY_Y } from './terrain.js';
import { canvasTex, Batch } from './world.js';

const S = { IDLE: 'idle', RUN: 'run', JUMP: 'jump', SWIM: 'swim', INTERACT: 'interact', CELEBRATE: 'celebrate' };

export class Capi {
  constructor(scene, world, fx, audio) {
    this.world = world; this.fx = fx; this.audio = audio;
    this.pos = new THREE.Vector3(POS.startCapi[0], CITY_Y, POS.startCapi[1]);
    this.vel = new THREE.Vector3(); this.vy = 0; this.heading = Math.PI; this.state = S.IDLE; this.grounded = true; this.swimming = false;
    this.t = 0; this.detour = 0; this.side = 1; this.stuckAll = 0; this.lastGoto = null; this.phase = 0; this.dash = 0; this.busy = 0; this.cele = 0; this.goto = null; this.stuck = 0; this.blink = 2; this.sniff = 3; this.led = 0;
    this.j = { legL: 0, legR: 0, armL: 0, armR: 0, armLz: 0, armRz: 0, tilt: 0, roll: 0, headX: 0, lift: 0, sy: 1 };
    this.build(scene);
  }

  build(scene) {
    const fur = canvasTex(64, 64, (g) => {
      g.fillStyle = '#a56f3e'; g.fillRect(0, 0, 64, 64); const r = rng(3);
      for (let i = 0; i < 420; i++) { g.fillStyle = r() < 0.5 ? 'rgba(80,45,20,0.28)' : 'rgba(215,160,100,0.25)'; g.fillRect(r() * 64, r() * 64, 1.5, 4 + r() * 6); }
    }, { repeat: 2 });
    const M = (hex, o = {}) => new THREE.MeshStandardMaterial({ color: hex, roughness: 0.8, ...o });
    const mFur = new THREE.MeshStandardMaterial({ map: fur, roughness: 1 }), mFurD = M(0x7a4a26, { roughness: 1 }), mBelly = M(0xcfa06c, { roughness: 1 });
    const mDark = M(0x2b1c12), mYellow = M(0xffc420, { roughness: 0.45 }), mVest = M(0x4fc3f7, { roughness: 0.7, side: THREE.DoubleSide });
    this.mats = { helmet: mYellow, vest: mVest };
    const mBand = this.mats.band = M(0xf1ff6b, { emissive: 0xc8d83a, emissiveIntensity: 0.5 }), mSteel = M(0xb6bec7, { metalness: 0.6, roughness: 0.35 }), mPack = M(0x3d4650);
    const add = (geo, m, x, y, z, parent) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.castShadow = true; parent.add(o); return o; };
    const root = new THREE.Group(), rig = new THREE.Group(); rig.position.y = 1.0; root.add(rig); this.root = root; this.rig = rig;
    // Torso, chaleco técnico y cinturón (coordenadas relativas al centro del torso)
    add(new THREE.SphereGeometry(0.62, 16, 12), mFur, 0, 0.02, 0, rig).scale.set(1, 1.12, 0.92);
    add(new THREE.SphereGeometry(0.5, 12, 10), mBelly, 0, -0.08, 0.3, rig).scale.set(0.82, 0.95, 0.5);
    this.vestM = add(new THREE.CylinderGeometry(0.645, 0.7, 0.74, 16, 1, true), mVest, 0, 0.14, 0, rig); this.vestM.scale.z = 0.94; this.bands = [];
    for (const y of [-0.08, 0.3]) { const b = add(new THREE.TorusGeometry(0.69, 0.045, 6, 20), mBand, 0, y, 0, rig); b.rotation.x = Math.PI / 2; b.scale.y = 0.94; this.bands.push(b); }
    const emb = canvasTex(64, 64, (g) => { g.fillStyle = '#ffd23f'; g.beginPath(); g.arc(32, 32, 30, 0, 7); g.fill(); g.fillStyle = '#12325a'; g.beginPath(); g.moveTo(37, 6); g.lineTo(16, 36); g.lineTo(30, 36); g.lineTo(25, 58); g.lineTo(48, 26); g.lineTo(34, 26); g.closePath(); g.fill(); });
    const em = add(new THREE.CircleGeometry(0.15, 12), new THREE.MeshStandardMaterial({ map: emb, roughness: 0.6 }), -0.3, 0.3, 0.6, rig); em.rotation.y = -0.5; this.emblem = em; this.emb = emb;
    const belt = add(new THREE.TorusGeometry(0.66, 0.05, 6, 18), mDark, 0, -0.34, 0, rig); belt.rotation.x = Math.PI / 2;
    add(new THREE.BoxGeometry(0.14, 0.12, 0.08), mYellow, 0, -0.34, 0.63, rig);
    this.beltWrench = add(new THREE.BoxGeometry(0.07, 0.42, 0.07), mSteel, 0.62, -0.52, 0.12, rig);
    // Mochila-batería con barra LED
    const pack = new THREE.Group(); pack.position.set(0, 0.12, -0.66); rig.add(pack);
    add(new THREE.BoxGeometry(0.66, 0.8, 0.32), mPack, 0, 0, 0, pack); add(new THREE.BoxGeometry(0.7, 0.1, 0.36), mYellow, 0, 0.4, 0, pack);
    add(new THREE.BoxGeometry(0.44, 0.62, 0.02), M(0x11181d), 0, -0.02, -0.165, pack);
    this.leds = [];
    for (let i = 0; i < 5; i++) { const m = new THREE.MeshStandardMaterial({ color: 0x15201a, emissive: 0x4dffa0, emissiveIntensity: 0 }); this.leds.push(add(new THREE.BoxGeometry(0.36, 0.085, 0.03), m, 0, -0.26 + i * 0.12, -0.18, pack)); this.leds[i].castShadow = false; }
    // Patas y brazos
    const limb = (x, y, z, len, r, hand) => {
      const g = new THREE.Group(); g.position.set(x, y, z); rig.add(g);
      add(new THREE.CapsuleGeometry(r, len, 4, 8), mFur, 0, -len / 2 - r * 0.4, 0, g);
      const e = add(new THREE.SphereGeometry(r * 1.15, 8, 6), mFurD, 0, -len - r * 1.2, hand ? 0 : 0.07, g); if (!hand) e.scale.set(1, 0.6, 1.5);
      return g;
    };
    this.legL = limb(-0.27, -0.5, 0, 0.22, 0.18); this.legR = limb(0.27, -0.5, 0, 0.22, 0.18);
    this.armL = limb(-0.66, 0.36, 0.05, 0.4, 0.13, true); this.armR = limb(0.66, 0.36, 0.05, 0.4, 0.13, true);
    // Herramientas
    const wr = new THREE.Group(); wr.position.set(0, -0.62, 0.1); wr.rotation.x = -1.2; this.armR.add(wr); this.wrench = wr;
    add(new THREE.BoxGeometry(0.07, 0.6, 0.07), mSteel, 0, 0.25, 0, wr); add(new THREE.TorusGeometry(0.11, 0.045, 5, 8, 4.6), mSteel, 0, 0.6, 0, wr);
    const tb = add(new THREE.BoxGeometry(0.44, 0.32, 0.04), new THREE.MeshStandardMaterial({ color: 0x103040, emissive: 0x4fd6ff, emissiveIntensity: 1.3, transparent: true, opacity: 0.85 }), 0.1, -0.62, 0.22, this.armL); tb.rotation.x = -1.0; this.tablet = tb;
    // Cabeza
    const head = new THREE.Group(); head.position.set(0, 0.86, 0.06); rig.add(head); this.head = head;
    add(new THREE.SphereGeometry(0.56, 16, 12), mFur, 0, 0, 0, head).scale.set(1, 0.92, 1);
    const mz = add(new THREE.SphereGeometry(0.42, 14, 10), mFur, 0, -0.11, 0.44, head); mz.scale.set(1.05, 0.8, 1.12);
    add(new THREE.SphereGeometry(0.12, 10, 8), mDark, 0, 0.02, 0.86, head).scale.set(1.35, 0.7, 0.55);
    add(new THREE.BoxGeometry(0.2, 0.025, 0.05), mDark, 0, -0.25, 0.85, head);
    add(new THREE.BoxGeometry(0.055, 0.08, 0.04), M(0xffffff), -0.035, -0.3, 0.85, head); add(new THREE.BoxGeometry(0.055, 0.08, 0.04), M(0xffffff), 0.035, -0.3, 0.85, head);
    this.eyes = [];
    for (const sx of [-1, 1]) {
      const e = add(new THREE.SphereGeometry(0.095, 10, 8), M(0x120c08, { roughness: 0.2 }), sx * 0.38, 0.04, 0.42, head); this.eyes.push(e);
      add(new THREE.SphereGeometry(0.032, 6, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }), sx * 0.4, 0.085, 0.495, head);
      add(new THREE.SphereGeometry(0.06, 8, 6), M(0xe8b59a, { roughness: 1 }), sx * 0.3, -0.12, 0.72, head).scale.set(1.3, 0.6, 0.6);
    }
    this.ears = [];
    for (const sx of [-1, 1]) {
      const eg = new THREE.Group(); eg.position.set(sx * 0.47, 0.44, -0.1); head.add(eg); this.ears.push(eg);
      add(new THREE.SphereGeometry(0.14, 8, 8), mFurD, 0, 0.06, 0, eg).scale.set(0.7, 1, 0.9); add(new THREE.SphereGeometry(0.08, 6, 6), M(0xd99a84), sx * 0.04, 0.06, 0.05, eg).scale.set(0.5, 0.9, 0.6);
      const rim = add(new THREE.TorusGeometry(0.15, 0.035, 5, 10), mYellow, sx * 0.44, 0.42, -0.1, head); rim.rotation.y = Math.PI / 2; rim.rotation.x = sx * 0.4; (this.rims = this.rims || []).push(rim);
    }
    // Casco con dos aberturas para las orejas
    const helm = new THREE.Group(); helm.position.set(0, 0.2, -0.04); helm.rotation.x = -0.3; head.add(helm); this.helm = helm;   // echado hacia atrás para que se vean los ojos
    add(new THREE.SphereGeometry(0.58, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), mYellow, 0, 0.03, 0, helm).scale.set(1.0, 0.72, 1.04);
    add(new THREE.CylinderGeometry(0.61, 0.63, 0.06, 18), mYellow, 0, 0.04, 0, helm); add(new THREE.BoxGeometry(0.44, 0.05, 0.16), mYellow, 0, 0.04, 0.62, helm);
    add(new THREE.BoxGeometry(0.12, 0.07, 0.9), mYellow, 0, 0.45, 0, helm);
    this.lamp = add(new THREE.BoxGeometry(0.16, 0.1, 0.06), new THREE.MeshStandardMaterial({ color: 0xe8fbff, emissive: 0x9ff0ff, emissiveIntensity: 0.6 }), 0, 0.2, 0.57, helm);
    this.wrench.visible = false; this.tablet.visible = false;
    this.helmetParts = [...helm.children];
    this.buildKits(M);
    // Capa 1 + estarcido: permite dibujar la silueta de Capi cuando queda detrás de un edificio
    root.traverse(o => { if (o.isMesh) { o.layers.enable(1); o.renderOrder = 3; const m = o.material; m.stencilWrite = true; m.stencilRef = 1; m.stencilFunc = THREE.AlwaysStencilFunc; m.stencilZPass = THREE.ReplaceStencilOp; } });
    root.position.copy(this.pos); scene.add(root);
    this.buildProps(scene, add, M);
    this.buildAccessories(add, M);
  }
  // Atuendos del vestuario: cada uno trae piezas propias, no sólo colores
  buildKits(M) {
    const VCm = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7, flatShading: true });
    const K = this.kits = {}, P = { rig: this.rig, head: this.head, helm: this.helm, armL: this.armL, armR: this.armR, legL: this.legL, legR: this.legR };
    const kit = (name, flags = {}) => { const k = K[name] = Object.assign({ parts: [], b: {} }, flags); return k; };
    const bat = (k, part) => k.b[part] || (k.b[part] = new Batch());
    const mesh = (k, part, geo, mat, x, y, z, rx = 0, ry = 0, rz = 0, hat = false) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); m.castShadow = true; m.userData.hat = hat; P[part].add(m); k.parts.push(m); return m; };
    const done = (k, hatParts = []) => { for (const part in k.b) { const m = k.b[part].mesh(VCm); if (!m) continue; m.castShadow = true; m.userData.hat = hatParts.includes(part); P[part].add(m); k.parts.push(m); } delete k.b; };
    const glass = (c, o = 0.55) => new THREE.MeshStandardMaterial({ color: c, transparent: true, opacity: o, roughness: 0.1, metalness: 0.3 });
    const lenses = (k, frame, lens, round) => {   // anteojos sobre los ojos de costado del carpincho
      const b = bat(k, 'head');
      for (const sx of [-1, 1]) { mesh(k, 'head', new THREE.CylinderGeometry(round ? 0.12 : 0.13, round ? 0.12 : 0.13, 0.03, round ? 14 : 6), lens, sx * 0.4, 0.05, 0.47, Math.PI / 2, 0, sx * 0.62).rotation.order = 'YXZ';
        b.add(new THREE.TorusGeometry(0.125, 0.022, 4, round ? 14 : 6), frame, sx * 0.4, 0.05, 0.47, 1, 1, 1, 0, sx * 0.62, 0, 0); b.box(sx * 0.5, 0.1, 0.12, 0.03, 0.03, 0.5, frame, sx * 0.3); }
      b.box(0, 0.13, 0.62, 0.42, 0.035, 0.035, frame);
    };
    // ---- Clásico: walkie-talkie y bolsillo ----
    let k = kit('clasico'), b = bat(k, 'rig');
    b.box(0.34, 0.24, 0.6, 0.13, 0.22, 0.07, 0x2b2d33, 0.5); b.box(0.36, 0.42, 0.6, 0.02, 0.2, 0.02, 0x1c1c1e, 0.5); b.box(0.33, 0.28, 0.645, 0.07, 0.05, 0.01, 0x7dffb0, 0.5);
    b.box(0.08, -0.05, 0.66, 0.2, 0.16, 0.03, 0x37474f); b.box(0.08, 0.02, 0.675, 0.21, 0.04, 0.02, 0x263238);
    done(k);
    // ---- Eólico: arnés de altura, mosquetones, antiparras y molinito en el casco ----
    k = kit('eolico'); b = bat(k, 'rig'); const or = 0xff7a1a, steel = 0xc9d1d9;
    b.add(new THREE.TorusGeometry(0.7, 0.05, 6, 22), or, 0, -0.22, 0, 1, 1, 0.94, Math.PI / 2, 0, 0, 0);
    for (const sx of [-1, 1]) { b.box(sx * 0.22, 0.14, 0.6, 0.09, 0.78, 0.035, or, sx * 0.25, -0.2); b.box(sx * 0.3, 0.14, -0.5, 0.09, 0.7, 0.035, or, sx * -0.3, 0.2); b.add(new THREE.TorusGeometry(0.075, 0.02, 4, 10), steel, sx * 0.44, -0.33, 0.48, 1, 1, 1, 0, sx * 0.6, 0, 0); }
    b.box(0, 0.2, 0.64, 0.5, 0.07, 0.035, or); b.box(0, 0.2, 0.67, 0.1, 0.09, 0.03, steel);
    b.add(new THREE.TorusGeometry(0.17, 0.035, 5, 12), 0xf4f1ea, 0.6, -0.36, -0.2, 1, 1, 1, 0, Math.PI / 2, 0, 0);
    for (const leg of ['legL', 'legR']) bat(k, leg).add(new THREE.TorusGeometry(0.21, 0.04, 5, 14), or, 0, -0.05, 0, 1, 1, 1, Math.PI / 2, 0, 0, 0);
    const hb = bat(k, 'helm');
    for (const sx of [-1, 0, 1]) hb.box(sx * 0.22, 0.38 - Math.abs(sx) * 0.05, 0.2, 0.06, 0.03, 0.22, 0x37474f);
    hb.add(new THREE.TorusGeometry(0.6, 0.03, 4, 24), 0x1c1c1e, 0, 0.12, 0.02, 1, 1, 1.04, Math.PI / 2, 0, 0, 0);
    for (const sx of [-1, 1]) mesh(k, 'helm', new THREE.CylinderGeometry(0.11, 0.11, 0.06, 12), glass(0x2ed3c6, 0.7), sx * 0.15, 0.16, 0.6, Math.PI / 2 - 0.3, 0, 0);
    hb.box(0, 0.16, 0.6, 0.1, 0.04, 0.04, 0x1c1c1e);
    hb.cyl(0, 0.48, -0.18, 0.018, 0.03, 0.55, 0xf4f4f4, 6); hb.box(0, 1.03, -0.16, 0.08, 0.08, 0.18, 0xf4f4f4);
    const rotor = this.kitRotor = new THREE.Group(); rotor.position.set(0, 1.03, -0.05); this.helm.add(rotor); k.parts.push(rotor);
    const blade = new THREE.MeshStandardMaterial({ color: 0xf4f4f4, roughness: 0.5 });
    for (let i = 0; i < 3; i++) { const bl = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.34, 0.014), blade); bl.geometry.translate(0, 0.17, 0); bl.rotation.z = i * Math.PI * 2 / 3; bl.castShadow = true; rotor.add(bl); }
    rotor.add(new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 5), blade));
    done(k);
    // ---- Hidro: chaleco salvavidas inflable, cuello, silbato, gota y botas de goma ----
    k = kit('hidro', { noBands: true }); b = bat(k, 'rig'); const navy = 0x1d3a6e, lifeO = 0xff8a1a;
    for (let i = 0; i < 8; i++) { const a = (i + 0.5) / 8 * Math.PI * 2; if (Math.abs(Math.sin(a)) > 0.9 && Math.cos(a) < 0) continue; b.add(new THREE.CapsuleGeometry(0.11, 0.42, 3, 8), 0x2a5fb0, Math.sin(a) * 0.69, 0.13, Math.cos(a) * 0.65, 1, 1, 0.75, 0, a, 0, 0.02); }
    b.add(new THREE.TorusGeometry(0.42, 0.12, 8, 18, Math.PI * 1.6), lifeO, 0, 0.55, 0.02, 1, 1, 1, Math.PI / 2, 0, Math.PI * 0.7, 0);
    for (const y of [0.0, 0.26]) b.add(new THREE.TorusGeometry(0.71, 0.03, 4, 22), 0xe8f0f0, 0, y, 0, 1, 1, 0.94, Math.PI / 2, 0, 0, 0);
    b.box(0.2, 0.36, 0.64, 0.06, 0.05, 0.12, lifeO); b.add(new THREE.TorusGeometry(0.16, 0.012, 3, 10), 0x1c1c1e, 0.1, 0.42, 0.6, 1, 1, 1, 0.4, 0.3, 0, 0);
    b.sph(-0.3, 0.3, 0.64, 0.08, 0x5ad1ff, 1.2, 1); b.add(new THREE.ConeGeometry(0.075, 0.12, 8), 0x5ad1ff, -0.3, 0.4, 0.64);
    for (const leg of ['legL', 'legR']) { const lb = bat(k, leg); lb.cyl(0, -0.4, 0, 0.21, 0.2, 0.34, navy, 10); lb.add(new THREE.SphereGeometry(0.23, 10, 6), navy, 0, -0.45, 0.08, 1, 0.55, 1.55, 0, 0, 0, 0); lb.add(new THREE.SphereGeometry(0.235, 10, 4, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), 0xffc420, 0, -0.45, 0.08, 1, 0.55, 1.55, 0, 0, 0, 0); lb.add(new THREE.TorusGeometry(0.21, 0.025, 4, 12), 0xffc420, 0, -0.24, 0, 1, 1, 1, Math.PI / 2, 0, 0, 0); }
    bat(k, 'helm').sph(0, 0.26, 0.55, 0.07, 0x5ad1ff, 1.2, 1);
    done(k);
    // ---- Solar: lentes de sol, cubrenuca, panelito en el casco y un sol en el pecho ----
    k = kit('solar'); b = bat(k, 'rig');
    lenses(k, 0xff8a2a, new THREE.MeshStandardMaterial({ color: 0x1a1a2e, roughness: 0.15, metalness: 0.5 }), true);
    b.add(new THREE.CircleGeometry(0.1, 12), 0xffc420, 0.28, 0.26, 0.625, 1, 1, 1, 0, 0.45, 0, 0);
    for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; b.box(0.28 + Math.cos(a) * 0.15 * Math.cos(0.45), 0.26 + Math.sin(a) * 0.15, 0.625 - Math.cos(a) * 0.15 * Math.sin(0.45), 0.05, 0.02, 0.012, 0xff8a2a, 0.45, 0, a); }
    const hs = bat(k, 'helm');
    hs.add(new THREE.CylinderGeometry(0.62, 0.66, 0.34, 14, 1, true, Math.PI * 0.62, Math.PI * 0.76), 0xfff1c4, 0, -0.12, -0.02, 1, 1, 1, 0, 0, 0, 0);
    hs.box(0, 0.5, -0.08, 0.08, 0.12, 0.08, 0x3d4650); hs.box(0, 0.6, -0.06, 0.56, 0.04, 0.4, 0x1f3c88, 0, -0.25);
    for (const dx of [-0.14, 0, 0.14]) hs.box(dx, 0.625, -0.06, 0.012, 0.012, 0.38, 0x8fb5ff, 0, -0.25); hs.box(0, 0.625, -0.06, 0.54, 0.012, 0.012, 0x8fb5ff, 0, -0.25);
    const ps = bat(k, 'rig'); ps.box(0, 0.6, -0.66, 0.6, 0.04, 0.34, 0x1f3c88, 0, -0.35); ps.box(0, 0.55, -0.62, 0.06, 0.1, 0.06, 0x3d4650);
    done(k);
    // ---- Biomasa: casco forestal con orejeras y visera de malla, guantes de cuero y leña en la mochila ----
    k = kit('biomasa'); const hf = bat(k, 'helm'), red = 0xd62828, dark = 0x2f3337;
    for (const sx of [-1, 1]) { hf.cyl(sx * 0.62, -0.05, 0.06, 0.16, 0.16, 0.12, red, 12, 0, 0, Math.PI / 2); hf.box(sx * 0.6, 0.12, 0.06, 0.06, 0.3, 0.06, dark); }
    hf.box(0, 0.3, 0.64, 0.78, 0.03, 0.03, dark, 0, -0.9); hf.box(0, 0.1, 0.5, 0.78, 0.03, 0.03, dark, 0, -0.9);
    for (let i = -3; i <= 3; i++) hf.box(i * 0.11, 0.2, 0.57, 0.012, 0.012, 0.3, 0x6b7076, 0, -0.9);
    for (const sx of [-1, 1]) hf.box(sx * 0.4, 0.2, 0.57, 0.03, 0.03, 0.3, dark, 0, -0.9);
    b = bat(k, 'rig'); b.add(new THREE.SphereGeometry(0.1, 8, 6), 0x4c9a3f, 0.28, 0.26, 0.63, 1.5, 0.75, 0.3, 0, 0.45, 0.6, 0); b.box(0.24, 0.2, 0.64, 0.015, 0.12, 0.015, 0x2f7d32, 0.45, 0, 0.6);
    for (let i = 0; i < 3; i++) { b.cyl(-0.18 + i * 0.18, 0.62, -0.68, 0.07, 0.08, 0.6, 0x8a5a33, 8, 0, 0, Math.PI / 2 + (i - 1) * 0.08); }
    b.sph(0.32, 0.72, -0.68, 0.12, 0x4c9a3f, 1, 0);
    for (const arm of ['armL', 'armR']) { const ab = bat(k, arm); ab.sph(0, -0.556, 0, 0.17, 0x8a6a3a, 1, 1); ab.add(new THREE.TorusGeometry(0.15, 0.04, 4, 12), 0xff8a1a, 0, -0.45, 0, 1, 1, 1, Math.PI / 2, 0, 0, 0); }
    done(k);
    // ---- Guardián: capa, hombreras, visera luminosa y emblema grande ----
    k = kit('guardian', { noEmblem: true }); b = bat(k, 'rig');
    for (const sx of [-1, 1]) { b.add(new THREE.SphereGeometry(0.24, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), 0x6a2c91, sx * 0.6, 0.44, 0.04, 1.1, 0.7, 1, 0, 0, -sx * 0.5, 0); b.add(new THREE.TorusGeometry(0.24, 0.03, 4, 14), 0xffd23f, sx * 0.6, 0.44, 0.04, 1.1, 1, 1, Math.PI / 2, 0, -sx * 0.5, 0); }
    b.add(new THREE.TorusGeometry(0.27, 0.035, 5, 18), 0xffd23f, 0, 0.2, 0.64, 1, 1, 1, 0, 0, 0, 0);
    mesh(k, 'rig', new THREE.CircleGeometry(0.25, 18), new THREE.MeshStandardMaterial({ map: this.emb, emissive: 0xffffff, emissiveMap: this.emb, emissiveIntensity: 0.45, roughness: 0.5 }), 0, 0.2, 0.655);
    this.visorMat = new THREE.MeshStandardMaterial({ color: 0x2ed3c6, emissive: 0x2ed3c6, emissiveIntensity: 1.2, transparent: true, opacity: 0.8 });
    mesh(k, 'helm', new THREE.CylinderGeometry(0.635, 0.635, 0.12, 16, 1, true, -Math.PI * 0.32, Math.PI * 0.64), this.visorMat, 0, 0.13, 0.02);
    const capeG = new THREE.PlaneGeometry(1.45, 1.55, 6, 8); capeG.translate(0, -0.775, 0);
    { const a = capeG.attributes.position; for (let i = 0; i < a.count; i++) { const u = -a.getY(i) / 1.55; a.setX(i, a.getX(i) * (0.6 + 0.4 * u)); } }   // angosta en los hombros, ancha abajo
    const capeM = new THREE.MeshStandardMaterial({ color: 0xe6007e, roughness: 0.7, side: THREE.DoubleSide });
    const cape = mesh(k, 'rig', capeG, capeM, 0, 0.55, -0.9, 0.12, 0, 0); this.cape = { m: cape, base: capeG.attributes.position.array.slice() };
    const hem = mesh(k, 'rig', new THREE.BoxGeometry(1.46, 0.08, 0.03), new THREE.MeshStandardMaterial({ color: 0x2ed3c6, emissive: 0x2ed3c6, emissiveIntensity: 0.4 }), 0, -1.55, 0, 0, 0, 0); cape.attach(hem); hem.position.set(0, -1.55, 0.01); hem.rotation.set(0, 0, 0);
    bat(k, 'rig').add(new THREE.TorusGeometry(0.12, 0.03, 4, 10), 0xffd23f, 0, 0.55, -0.86, 1, 1, 1, 0, 0, 0, 0);
    done(k);
    // ---- Gaucho: boina, poncho a rayas con flecos y rastra de monedas ----
    k = kit('gaucho', { noHelmet: true, noVest: true });
    mesh(k, 'head', new THREE.SphereGeometry(0.6, 16, 8), new THREE.MeshStandardMaterial({ color: 0x1e1e22, roughness: 0.95 }), 0.04, 0.42, -0.04, 0, 0, 0.14, true).scale.set(1.08, 0.3, 1.08);
    bat(k, 'head').cyl(0.08, 0.58, -0.04, 0.02, 0.03, 0.08, 0x1e1e22, 5);
    const stripes = canvasTex(32, 128, (g) => { g.fillStyle = '#9b2226'; g.fillRect(0, 0, 32, 128); for (const [y, h, c] of [[104, 6, '#f2e4c4'], [111, 4, '#1c1c1e'], [117, 6, '#f2e4c4'], [70, 3, '#1c1c1e'], [44, 3, '#1c1c1e']]) { g.fillStyle = c; g.fillRect(0, y, 32, h); } });
    // poncho que cae desde el cuello sobre el cuerpo redondo (ochavado para que no lo atraviese)
    const poncho = mesh(k, 'rig', new THREE.CylinderGeometry(0.52, 1.02, 0.78, 8, 1, true), new THREE.MeshStandardMaterial({ map: stripes, roughness: 0.95, side: THREE.DoubleSide }), 0, 0.12, 0, 0, Math.PI / 8, 0); poncho.scale.set(1, 1, 0.95);
    b = bat(k, 'rig'); const yb = 0.12 - 0.39;
    b.add(new THREE.TorusGeometry(0.5, 0.05, 5, 16), 0x5a1416, 0, 0.5, 0, 1, 1, 0.95, Math.PI / 2, 0, 0, 0);
    for (let e = 0; e < 8; e++) { const a0 = Math.PI / 8 + e * Math.PI / 4, a1 = a0 + Math.PI / 4; for (let i = 0; i < 6; i++) { const u = (i + 0.5) / 6, a = a0 + (a1 - a0) * u, r = 1.02 * Math.cos(Math.PI / 8) / Math.cos(a - (a0 + a1) / 2); b.box(Math.sin(a) * r, yb - 0.07, Math.cos(a) * r * 0.95, 0.025, 0.14, 0.025, 0xf2e4c4); } }
    b.add(new THREE.TorusGeometry(0.64, 0.075, 6, 20), 0x1c1c1e, 0, -0.25, 0, 1, 1, 0.94, Math.PI / 2, 0, 0, 0);
    for (let i = -2; i <= 2; i++) b.cyl(i * 0.12, -0.25, 0.62 - Math.abs(i) * 0.04, 0.05, 0.05, 0.025, 0xd8dde3, 12, Math.PI / 2, 0, 0);
    b.box(0, -0.25, 0.63, 0.5, 0.02, 0.02, 0xb8bec4);
    done(k, ['head']);
    // ---- Chofer: gorra de chofer, cuello de camisa, corbata, bolsillos y charreteras ----
    k = kit('chofer', { noHelmet: true, noBands: true, noEmblem: true }); const hc = bat(k, 'head'), cap = 0x1f2f4f;
    hc.cyl(0, 0.44, -0.04, 0.6, 0.5, 0.28, cap, 16, -0.12, 0, 0); hc.cyl(0, 0.585, -0.06, 0.61, 0.61, 0.04, cap, 16, -0.12, 0, 0);
    hc.add(new THREE.TorusGeometry(0.51, 0.04, 4, 20), 0x2a9d8f, 0, 0.36, -0.03, 1, 1, 1, Math.PI / 2 - 0.12, 0, 0, 0);
    hc.add(new THREE.CylinderGeometry(0.4, 0.42, 0.03, 14, 1, false, -Math.PI / 2, Math.PI), 0x111111, 0, 0.33, 0.36, 1, 1, 0.75, 0.35, 0, 0, 0);
    hc.box(0, 0.47, 0.5, 0.14, 0.1, 0.03, 0xffd23f, 0, -0.12);
    b = bat(k, 'rig');
    for (const sx of [-1, 1]) { b.add(new THREE.ConeGeometry(0.13, 0.24, 3), 0xffffff, sx * 0.12, 0.5, 0.52, 1, 1, 0.3, Math.PI, sx * 0.4, sx * 0.5, 0); b.box(sx * 0.28, 0.22, 0.6, 0.18, 0.16, 0.04, 0x3d8fc6, sx * 0.4); b.box(sx * 0.28, 0.29, 0.61, 0.19, 0.04, 0.03, 0x2f7fb5, sx * 0.4); b.box(sx * 0.58, 0.46, 0.04, 0.26, 0.05, 0.3, cap, 0, 0, -sx * 0.5); b.box(sx * 0.66, 0.43, 0.04, 0.03, 0.055, 0.3, 0xffd23f, 0, 0, -sx * 0.5); }
    b.box(0, 0.47, 0.6, 0.1, 0.09, 0.05, cap); b.add(new THREE.ConeGeometry(0.07, 0.44, 4), cap, 0, 0.22, 0.66, 1, 1, 0.3, Math.PI, Math.PI / 4, 0, 0);
    b.box(-0.28, 0.32, 0.64, 0.12, 0.04, 0.02, 0xffd23f, -0.4);
    for (let i = 0; i < 3; i++) b.sph(0.02, 0.05 - i * 0.12, 0.66, 0.025, 0xf4f4f4, 1, 0);
    done(k, ['head']);
    // ---- Control: auriculares con micrófono, lentes y credencial con cinta ----
    k = kit('control'); const hd = bat(k, 'head'), gray = 0x3a3f4a;
    hd.add(new THREE.TorusGeometry(0.68, 0.035, 5, 20, Math.PI), gray, 0, 0.06, -0.06, 1, 1.05, 1, 0, 0, 0, 0);
    for (const sx of [-1, 1]) { hd.cyl(sx * 0.66, 0.04, -0.06, 0.15, 0.15, 0.1, gray, 12, 0, 0, Math.PI / 2); hd.cyl(sx * 0.71, 0.04, -0.06, 0.11, 0.11, 0.02, 0x9b7fd0, 12, 0, 0, Math.PI / 2); }
    hd.box(-0.5, -0.14, 0.32, 0.03, 0.03, 0.55, gray, 0.6, 0.25); hd.sph(-0.3, -0.24, 0.56, 0.05, 0x1c1c1e, 1, 0);
    lenses(k, 0x23395d, glass(0xcfeaff, 0.35), false);
    b = bat(k, 'rig');
    for (const sx of [-1, 1]) b.box(sx * 0.12, 0.3, 0.63, 0.035, 0.42, 0.015, 0x9b7fd0, 0, -0.15, sx * 0.4);
    b.box(0, 0.02, 0.665, 0.2, 0.26, 0.02, 0xf4f4f4, 0, -0.12); b.box(0, 0.12, 0.672, 0.2, 0.05, 0.02, 0x6a2c91, 0, -0.12); b.box(-0.04, 0.0, 0.676, 0.07, 0.08, 0.01, 0xa56f3e, 0, -0.12); b.box(0.05, -0.02, 0.676, 0.06, 0.015, 0.01, 0x3a3f4a, 0, -0.12);
    for (let i = 0; i < 3; i++) b.cyl(0.26 + i * 0.05, 0.36, 0.58, 0.012, 0.012, 0.16, [0xe5484d, 0x1d6fb8, 0x1c1c1e][i], 5);
    done(k);
    for (const key in K) for (const m of K[key].parts) m.visible = false;
    this.kitKey = 'clasico'; this.applyKit();
  }
  // Accesorios de fiesta (vestuario): antifaz, escarapela, gorro navideño, pañuelo criollo y farol
  buildAccessories(add, M) {
    const A = this.accs = {}, side = { side: THREE.DoubleSide };
    const mk = A.antifaz = new THREE.Group(); this.head.add(mk);
    const purple = M(0x6a2c91), gold = M(0xffd23f, { metalness: 0.4, roughness: 0.4 });
    for (const sx of [-1, 1]) { const p = add(new THREE.BoxGeometry(0.34, 0.22, 0.03), purple, sx * 0.41, 0.06, 0.45, mk); p.rotation.y = sx * 0.62; const r = add(new THREE.TorusGeometry(0.12, 0.035, 6, 14), gold, sx * 0.4, 0.05, 0.48, mk); r.rotation.y = sx * 0.62; }
    add(new THREE.BoxGeometry(0.2, 0.07, 0.04), purple, 0, 0.1, 0.55, mk);
    const fe = add(new THREE.ConeGeometry(0.06, 0.46, 6), M(0xe6007e), 0.62, 0.3, 0.28, mk); fe.rotation.z = -0.7;
    const fe2 = add(new THREE.ConeGeometry(0.05, 0.36, 6), M(0x2ed3c6), 0.66, 0.22, 0.2, mk); fe2.rotation.z = -1.0;
    const es = A.escarapela = new THREE.Group(); es.position.set(0.3, 0.32, 0.6); es.rotation.y = 0.5; this.rig.add(es);
    add(new THREE.CircleGeometry(0.15, 16), M(0x5aa9e6, side), 0, 0, 0, es); add(new THREE.CircleGeometry(0.1, 16), M(0xffffff, side), 0, 0, 0.006, es); add(new THREE.CircleGeometry(0.05, 12), M(0x5aa9e6, side), 0, 0, 0.012, es);
    for (const sx of [-1, 1]) { const t = add(new THREE.BoxGeometry(0.06, 0.2, 0.01), M(0x5aa9e6), sx * 0.05, -0.18, -0.006, es); t.rotation.z = sx * 0.25; }
    const go = A.gorro = new THREE.Group(); go.position.set(0, 0.06, 0); this.helm.add(go);   // calzado sobre el casco
    add(new THREE.CylinderGeometry(0.7, 0.7, 0.16, 18), M(0xf7f7f7), 0, 0, 0, go); add(new THREE.ConeGeometry(0.68, 1.05, 16), M(0xd42a2a), 0, 0.6, 0, go);
    add(new THREE.SphereGeometry(0.13, 8, 6), M(0xf7f7f7), 0, 1.14, 0, go);
    const pa = A.panuelo = new THREE.Group(); pa.position.set(0, 0.52, 0); this.rig.add(pa);   // sobre el borde del chaleco (Capi casi no tiene cuello)
    const ring = add(new THREE.TorusGeometry(0.62, 0.085, 6, 22), M(0x5aa9e6), 0, 0, 0, pa); ring.rotation.x = Math.PI / 2; ring.scale.y = 0.94;
    const tri = add(new THREE.ConeGeometry(0.3, 0.5, 3), M(0x5aa9e6), 0, -0.2, 0.64, pa); tri.rotation.set(Math.PI + 0.25, 0, 0); tri.scale.z = 0.3;
    add(new THREE.SphereGeometry(0.08, 6, 5), M(0xffffff), 0, 0.02, 0.66, pa);
    const fa = A.farol = new THREE.Group(); fa.position.set(0, -0.66, 0.12); this.armL.add(fa);
    const frame = M(0x26262b); add(new THREE.TorusGeometry(0.07, 0.015, 4, 10, Math.PI), frame, 0, -0.02, 0, fa);
    add(new THREE.BoxGeometry(0.2, 0.04, 0.2), frame, 0, -0.06, 0, fa); add(new THREE.BoxGeometry(0.2, 0.04, 0.2), frame, 0, -0.34, 0, fa);
    this.farolGlass = add(new THREE.BoxGeometry(0.15, 0.24, 0.15), new THREE.MeshStandardMaterial({ color: 0xfff1b8, emissive: 0xffc420, emissiveIntensity: 1.4 }), 0, -0.2, 0, fa);
    for (const k in A) A[k].visible = false;
  }
  setAccessory(k) { for (const key in this.accs) this.accs[key].visible = key === k; this.accKey = k; this.applyKit(); }
  // Objetos de los festejos de cada misión
  buildProps(scene, add, M) {
    const P = this.props = {}, dark = M(0x15151f, { metalness: 0.5, roughness: 0.2 });
    // lentes de sol (Cosecha de Sol)
    const sh = P.shades = new THREE.Group(); this.head.add(sh);
    for (const sx of [-1, 1]) { const l = add(new THREE.BoxGeometry(0.3, 0.2, 0.05), dark, sx * 0.4, 0.05, 0.47, sh); l.rotation.y = sx * 0.62; const tm = add(new THREE.BoxGeometry(0.03, 0.03, 0.42), dark, sx * 0.53, 0.12, 0.22, sh); tm.rotation.y = sx * 0.15; }
    add(new THREE.BoxGeometry(0.62, 0.05, 0.05), M(0xe6007e), 0, 0.24, 0.52, sh);
    // bandera a cuadros de largada (Circuito Verde Urbano)
    const fl = P.flag = new THREE.Group(); fl.position.set(0, -0.6, 0.08); this.armR.add(fl);
    add(new THREE.CylinderGeometry(0.025, 0.025, 1.1, 5), M(0xdddddd), 0, -0.35, 0, fl);
    const ck = document.createElement('canvas'); ck.width = 64; ck.height = 44; const cx = ck.getContext('2d'); for (let y = 0; y < 4; y++) for (let x = 0; x < 6; x++) { cx.fillStyle = (x + y) % 2 ? '#111' : '#fff'; cx.fillRect(x * 11, y * 11, 11, 11); }
    const ct = new THREE.CanvasTexture(ck); ct.colorSpace = THREE.SRGBColorSpace; ct.magFilter = THREE.NearestFilter;
    this.flagCloth = add(new THREE.PlaneGeometry(0.62, 0.42), new THREE.MeshStandardMaterial({ map: ct, side: THREE.DoubleSide, roughness: 0.9 }), 0, -0.75, 0.32, fl); this.flagCloth.rotation.y = Math.PI / 2;
    // lamparita LED (Ciudad que Ahorra)
    const bu = P.bulb = new THREE.Group(); bu.position.set(0, -0.7, 0); this.armR.add(bu);
    add(new THREE.SphereGeometry(0.17, 12, 10), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff6c8, emissiveIntensity: 2.2 }), 0, -0.24, 0, bu); add(new THREE.CylinderGeometry(0.08, 0.09, 0.14, 8), M(0xb6bec7, { metalness: 0.6 }), 0, -0.05, 0, bu);
    // paraguas (Sudestada)
    const um = P.umbrella = new THREE.Group(); um.position.set(0, -0.6, 0); this.armR.add(um);
    add(new THREE.CylinderGeometry(0.025, 0.025, 1.3, 5), M(0x3a3230), 0, -0.55, 0, um);
    this.umbTop = add(new THREE.ConeGeometry(0.85, 0.38, 8, 1, true), new THREE.MeshStandardMaterial({ color: 0xe6007e, side: THREE.DoubleSide, flatShading: true, roughness: 0.7 }), 0, -1.25, 0, um); this.umbTop.rotation.x = Math.PI;
    // cometa (Vientos en la Cuchilla): vive en el mundo, atada a la mano de Capi
    const kt = P.kite = new THREE.Group(); scene.add(kt);
    const tri = (pts, col) => { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3)); g.computeVertexNormals(); const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: col, side: THREE.DoubleSide })); kt.add(m); };
    tri([0, 1.1, 0, 0.75, 0, 0, 0, 0, 0], 0xffc420); tri([0, 1.1, 0, -0.75, 0, 0, 0, 0, 0], 0xe6007e); tri([0, -0.9, 0, 0.75, 0, 0, 0, 0, 0], 0x6a2c91); tri([0, -0.9, 0, -0.75, 0, 0, 0, 0, 0], 0x2ed3c6);
    this.kiteTail = []; for (let i = 0; i < 5; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.1, 0.02), new THREE.MeshBasicMaterial({ color: [0xffc420, 0xe6007e, 0x2ed3c6, 0x6a2c91, 0xffffff][i] })); scene.add(b); this.kiteTail.push(b); }
    this.kiteLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]), new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 })); this.kiteLine.frustumCulled = false; scene.add(this.kiteLine);
    for (const k in P) P[k].visible = false; this.kiteTail.forEach(b => { b.visible = false; }); this.kiteLine.visible = false;
  }
  // festejo propio de cada misión
  celebrateFor(key, t = 3.6) {
    const prop = { viento: 'kite', rio: 'splash', sol: 'shades', urbano: 'flag', ahorro: 'bulb', tormenta: 'umbrella' }[key] || null;
    this.cele = t; this.celeT = 0; this.celeProp = prop; if (!prop) this.celeKind = ((this.celeKind || 0) + 1) % 4;
    if (prop === 'flag') { this.audio.honk(); setTimeout(() => this.audio.honk(), 700); }
    if (prop === 'splash') this.audio.splash(1.4);
  }

  setLed(level, good) {
    const n = Math.round(clamp(level, 0, 1) * 5);
    this.leds.forEach((l, i) => { l.material.emissive.set(good ? 0x4dffa0 : level < 0.4 ? 0xff7a4d : 0xffc93c); l.material.emissiveIntensity = i < n ? 2.2 : 0.05; });
  }
  setOutfit(o) { this.mats.helmet.color.set(o.helmet); this.mats.vest.color.set(o.vest); this.mats.band.color.set(o.band); this.mats.band.emissive.set(o.band).multiplyScalar(0.7); this.kitKey = o.kit || 'clasico'; this.applyKit(); }
  // Muestra las piezas propias del atuendo y esconde lo que tapan (casco, chaleco, bandas)
  applyKit() {
    const K = this.kits; if (!K) return; const k = K[this.kitKey] || K.clasico, hat = this.accKey === 'gorro';
    for (const key in K) for (const m of K[key].parts) m.visible = key === this.kitKey && !(hat && m.userData.hat);
    const helmetOff = k.noHelmet && !hat;
    for (const m of this.helmetParts) m.visible = !helmetOff; for (const r of this.rims) r.visible = !helmetOff;
    this.vestM.visible = !k.noVest; for (const b of this.bands) b.visible = !k.noVest && !k.noBands; this.emblem.visible = !k.noVest && !k.noEmblem;
  }
  celebrate(t = 2.4) { this.cele = t; this.celeProp = null; this.celeKind = ((this.celeKind || 0) + 1) % 4; this.celeT = 0; }
  work(t = 1.2) { this.busy = t; }
  // Navegación automática hacia un punto: usa la grilla A* si está disponible
  navigate(x, z, r = 0.6, done = null) {
    const path = this.nav ? this.nav.find(this.pos.x, this.pos.z, x, z) : null;
    this.goto = { x, z, r, done, path, pi: 0 };
  }
  teleport(x, z) { this.pos.set(x, this.world.groundAt(x, z), z); this.vel.set(0, 0, 0); this.vy = 0; this.goto = null; this.swimming = false; this.grounded = true; }

  update(dt, inp) {
    const w = this.world, p = this.pos;
    this.t += dt; this.cele = Math.max(0, this.cele - dt); this.busy = Math.max(0, this.busy - dt); this.dash = Math.max(0, this.dash - dt);
    const locked = inp.locked || this.busy > 0; this.talking = !!inp.talking;
    let wx = 0, wz = 0;
    if (!locked) {
      if (inp.mx || inp.mz) {
        this.goto = null;
        const fx = -Math.sin(inp.yaw), fz = -Math.cos(inp.yaw), rx = Math.cos(inp.yaw), rz = -Math.sin(inp.yaw);
        wx = fx * inp.mz + rx * inp.mx; wz = fz * inp.mz + rz * inp.mx;
        const l = Math.hypot(wx, wz); if (l > 1) { wx /= l; wz /= l; }
      } else if (this.goto) {
        const dx = this.goto.x - p.x, dz = this.goto.z - p.z, d = Math.hypot(dx, dz);
        if (d < (this.goto.r || 0.6)) { const cb = this.goto.done; this.goto = null; if (cb) cb(); }
        else {
          const gp = this.goto.path; let tx = this.goto.x, tz = this.goto.z;
          if (gp) { while (this.goto.pi < gp.length - 1 && Math.hypot(gp[this.goto.pi].x - p.x, gp[this.goto.pi].z - p.z) < 1.0) this.goto.pi++; if (this.goto.pi < gp.length) { tx = gp[this.goto.pi].x; tz = gp[this.goto.pi].z; if (this.goto.pi === gp.length - 1 && Math.hypot(tx - p.x, tz - p.z) < 0.5) this.goto.pi++; } }
          const ex = tx - p.x, ez = tz - p.z, el = Math.hypot(ex, ez) || 1;
          wx = ex / el; wz = ez / el;
          if (this.detour > 0) { this.detour -= dt; const a = this.side * 1.3, c = Math.cos(a), s = Math.sin(a), tx = wx * c - wz * s; wz = wx * s + wz * c; wx = tx; }
        }
      }
    } else if (inp.locked) this.goto = null;

    const wl = w.waterAt(p.x, p.z);
    let speed = this.swimming ? 6.8 : 11.5; if (this.dash > 0) speed *= 2.0;
    const acc = this.swimming ? 4 : this.grounded ? 14 : 5;
    this.vel.x = damp(this.vel.x, wx * speed, acc, dt); this.vel.z = damp(this.vel.z, wz * speed, acc, dt);
    if (inp.jump && !locked) {
      if (this.swimming) { if (this.dash <= 0) { this.dash = 0.55; this.fx.splash(p.x, wl + 0.1, p.z, 10); this.audio.splash(0.5); } }
      else if (this.grounded) { this.vy = 11.2; this.grounded = false; this.audio.jump(); }
    }
    // Movimiento horizontal con prueba de pendiente/escalón
    const tryMove = (dx, dz) => {
      const nx = clamp(p.x + dx, B.minX + 1, B.maxX - 1), nz = clamp(p.z + dz, B.minZ + 1, B.maxZ - 1), dist = Math.hypot(nx - p.x, nz - p.z);
      if (dist < 1e-6) return false;
      const g = w.groundAt(nx, nz, p.y), rise = g - p.y;
      if ((this.grounded || this.swimming) && rise > 0.7 && rise / dist > 2.4) return false;
      if (!this.grounded && !this.swimming && rise > 0.25) return false;
      p.x = nx; p.z = nz; return true;
    };
    const mx = this.vel.x * dt, mzz = this.vel.z * dt, ox = p.x, oz = p.z;
    if (!tryMove(mx, mzz)) { if (!tryMove(mx, 0)) tryMove(0, mzz); }
    w.resolve(p, 0.55, p.y);
    const moved = Math.hypot(p.x - ox, p.z - oz), want = Math.hypot(mx, mzz);
    // Navegación automática: si choca, rodea el obstáculo alternando el lado; si no hay caso, abandona
    if (this.goto) {
      if (this.goto !== this.lastGoto) { this.lastGoto = this.goto; this.stuck = 0; this.stuckAll = 0; this.detour = 0; this.side = 1; }
      if (want > 1e-4 && moved < want * 0.35) { this.stuck += dt; this.stuckAll += dt; if (this.stuck > 0.1 && this.detour <= 0) { this.side = -this.side; this.detour = 0.7; this.stuck = 0; } if (this.stuckAll > 2.2) this.goto = null; }
      else this.stuck = 0;
    }
    // Vertical: suelo, salto, agua
    const g = w.groundAt(p.x, p.z, p.y), wl2 = w.waterAt(p.x, p.z), deep = g < wl2 - 1.2, floatY = wl2 - 1.1;
    if (this.swimming) {
      if (!deep) { this.swimming = false; this.grounded = true; p.y = Math.max(g, p.y); }
      else { p.y = damp(p.y, floatY + Math.sin(this.t * 2.4) * 0.05, 8, dt); this.vy = 0; }
    }
    if (!this.swimming) {
      if (this.grounded) {
        if (deep && p.y <= floatY + 0.4) { this.swimming = true; this.grounded = false; this.fx.splash(p.x, wl2 + 0.1, p.z, 18); this.audio.splash(1); }
        else if (g < p.y - 0.9) { this.grounded = false; this.vy = 0; }
        else p.y = g > p.y ? g : damp(p.y, g, 25, dt);
      } else {
        this.vy -= 30 * dt; p.y += this.vy * dt;
        if (deep && p.y <= floatY) { this.swimming = true; p.y = floatY - 0.3; this.fx.splash(p.x, wl2 + 0.1, p.z, 22); this.audio.splash(1); }
        else if (p.y <= g && this.vy <= 0) { p.y = g; this.grounded = true; if (this.vy < -7) { this.fx.puff(p.x, g + 0.15, p.z, 9, g < wl2 ? 0xffffff : 0xd9c9a3); this.audio.land(); } this.vy = 0; }
      }
    }
    const sp = Math.hypot(this.vel.x, this.vel.z);
    if (sp > 0.6) this.heading += angDiff(this.heading, Math.atan2(this.vel.x, this.vel.z)) * Math.min(1, dt * 12);
    if (inp.face != null && sp < 0.6) this.heading += angDiff(this.heading, inp.face) * Math.min(1, dt * 10);
    // Estado
    const prev = this.state;
    this.state = this.swimming ? S.SWIM : this.cele > 0 && this.grounded ? S.CELEBRATE : this.busy > 0 || inp.working ? S.INTERACT : !this.grounded ? S.JUMP : sp > 1 ? S.RUN : S.IDLE;
    // Estela en V al nadar
    if (this.swimming && sp > 1.5 && Math.random() < 40 * dt) {
      const hx = Math.sin(this.heading), hz = Math.cos(this.heading);
      for (const s of [-1, 1]) this.fx.soft.emit(p.x - hx * 0.6 + hz * s * 0.35, wl2 + 0.08, p.z - hz * 0.6 - hx * s * 0.35, hz * s * 1.6 - hx * 0.4, 0, -hx * s * 1.6 - hz * 0.4, 1.5, 0.28, 0.7, 0xffffff, 0.75, 0, 0.6);
    }
    this.animate(dt, sp, g, wl2, prev);
    this.root.position.copy(p); this.root.rotation.y = this.heading;
  }

  animate(dt, sp, ground, wl, prev) {
    const j = this.j, t = this.t, st = this.state;
    let legL = 0, legR = 0, armL = 0, armR = 0, armLz = 0.12, armRz = -0.12, tilt = 0, roll = 0, headX = 0, lift = 0, sy = 1, spin = 0, flip = 0;
    this.wrench.visible = st === S.INTERACT; this.beltWrench.visible = !this.wrench.visible; this.tablet.visible = st === S.INTERACT;
    if (st === S.RUN) {
      const before = this.phase; this.phase += sp * dt * 1.25;
      if (Math.floor(before / Math.PI) !== Math.floor(this.phase / Math.PI)) {
        const wade = ground < wl, hard = this.world.groundAt(this.pos.x, this.pos.z) - this.world.terrainAt(this.pos.x, this.pos.z) > 0.05;
        this.audio.step(wade ? 'agua' : hard ? 'hormigon' : 'pasto');
        if (wade) this.fx.splash(this.pos.x, wl + 0.05, this.pos.z, 4);
        else if (sp > 5) this.fx.puff(this.pos.x - Math.sin(this.heading) * 0.4, this.pos.y + 0.12, this.pos.z - Math.cos(this.heading) * 0.4, 2, hard ? 0xd9d3c4 : 0xcdbb8c, 0.5);
      }
      const s = Math.sin(this.phase), k = clamp(sp / 11, 0.3, 1);
      legL = s * 1.0 * k; legR = -s * 1.0 * k; armL = -s * 0.85 * k; armR = s * 0.85 * k; lift = Math.abs(Math.cos(this.phase)) * 0.13 * k; roll = s * 0.07; tilt = 0.14 * k; headX = -0.08 + Math.sin(this.phase * 2) * 0.04;
    } else if (st === S.JUMP) {
      legL = -0.5; legR = 0.35; armL = armR = -2.3; armLz = 0.5; armRz = -0.5; sy = 1 + clamp(this.vy * 0.012, -0.1, 0.16); tilt = clamp(-this.vy * 0.012, -0.2, 0.25);
    } else if (st === S.SWIM) {
      tilt = 1.12; headX = -0.95; lift = 0; const s = Math.sin(t * (6 + sp * 0.5));
      legL = s * 0.7 - 0.2; legR = -s * 0.7 - 0.2; armL = -1.9 + s * 0.6; armR = -1.9 - s * 0.6; roll = Math.sin(t * 2.2) * 0.05;
      // estela en el agua
      if (Math.random() < (4 + sp * 2.2) * dt) { const bx = this.pos.x - Math.sin(this.heading) * (0.5 + Math.random() * 0.6), bz = this.pos.z - Math.cos(this.heading) * (0.5 + Math.random() * 0.6); this.fx.soft.emit(bx + (Math.random() - 0.5) * 0.7, wl + 0.06, bz + (Math.random() - 0.5) * 0.7, 0, 0.04, 0, 1.1 + Math.random() * 0.5, 0.3, 1.25, 0xffffff, 0.55, 0, 1); }
    } else if (st === S.INTERACT) {
      armR = -1.45 + Math.sin(t * 16) * 0.3; armL = -1.0; headX = 0.12 + Math.sin(t * 5) * 0.08; tilt = 0.08;
      if (Math.random() < 14 * dt) { const hx = Math.sin(this.heading), hz = Math.cos(this.heading); this.fx.sparks(this.pos.x + hx * 0.9, this.pos.y + 1.5, this.pos.z + hz * 0.9, 2, 0xffd23f); }
    } else if (st === S.CELEBRATE) {
      const ck = this.celeKind || 0, ct = this.celeT = (this.celeT || 0) + dt, pr = this.celeProp;
      if (pr === 'kite') { armR = -2.3 + Math.sin(t * 3) * 0.15; armRz = -0.2; armL = -0.5; headX = -0.45; lift = Math.abs(Math.sin(ct * 3)) * 0.08; }
      else if (pr === 'splash') { const u = (ct * 1.1) % 1; lift = Math.sin(u * Math.PI) * 1.6; flip = u * Math.PI * 2; armL = armR = -2.6; legL = legR = -0.6; if (Math.random() < 9 * dt) this.fx.splash(this.pos.x + (Math.random() - 0.5) * 2.4, this.pos.y + 0.1, this.pos.z + (Math.random() - 0.5) * 2.4, 8); }
      else if (pr === 'shades') { armR = -2.1; armRz = -0.9; armL = -0.2; armLz = 0.7; headX = -0.1; roll = Math.sin(ct * 2.4) * 0.08; lift = Math.abs(Math.sin(ct * 4.8)) * 0.12; if (Math.random() < 6 * dt) this.fx.glow.emit(this.pos.x + (Math.random() - 0.5) * 1.6, this.pos.y + 2 + Math.random(), this.pos.z + (Math.random() - 0.5) * 1.6, 0, 1, 0, 0.6, 0.35, 0.05, 0xffe066, 1, 0, 1); }
      else if (pr === 'flag') { armR = -2.7 + Math.sin(ct * 9) * 0.35; armRz = -0.3; armL = -0.4; lift = Math.abs(Math.sin(ct * 6)) * 0.3; headX = -0.2; }
      else if (pr === 'bulb') { armR = -3.05; armRz = -0.1; armL = -0.6; armLz = 0.4; headX = -0.4; lift = Math.abs(Math.sin(ct * 3)) * 0.15; }
      else if (pr === 'umbrella') { armR = -2.55; armRz = -0.15; armL = -0.4; spin = ct * 2.2; lift = Math.abs(Math.sin(ct * 4.4)) * 0.18; }
      else if (ck === 1) {          // giro con los dos brazos arriba
        lift = Math.abs(Math.sin(ct * 6)) * 0.45; armL = armR = -2.8; armLz = 0.35; armRz = -0.35; spin = ct * 9; headX = -0.2;
      } else if (ck === 2) {   // bailecito: brazos alternados y balanceo
        const s2 = Math.sin(ct * 9); armL = -1.6 - s2 * 1.1; armR = -1.6 + s2 * 1.1; armLz = 0.5; armRz = -0.5; roll = s2 * 0.2; lift = Math.abs(s2) * 0.25; legL = s2 * 0.4; legR = -s2 * 0.4; headX = -0.1;
      } else if (ck === 3) {   // salto mortal
        const u = (ct * 1.25) % 1; lift = Math.sin(u * Math.PI) * 1.5; flip = u * Math.PI * 2; armL = armR = -2.4; legL = legR = -0.6;
      } else {                 // salto con el puño en alto
        lift = Math.abs(Math.sin(t * 7.5)) * 0.7; armR = -2.9; armRz = -0.25; armL = -0.4; legL = 0.3; legR = -0.3; headX = -0.25; sy = 1 + Math.sin(t * 15) * 0.04;
      }
    } else if (this.dancing) {   // baile de candombe en la ceremonia final
      const s2 = Math.sin(t * 6.1), s3 = Math.sin(t * 3.05); armL = -1.2 - s2 * 0.9; armR = -1.2 + s2 * 0.9; armLz = 0.6; armRz = -0.6; roll = s3 * 0.22; lift = Math.abs(s2) * 0.22; legL = s3 * 0.5; legR = -s3 * 0.5; headX = -0.15 + Math.sin(t * 12.2) * 0.06; spin = Math.sin(t * 1.5) * 0.5;
    } else if (this.talking) {   // discurso: gesticula con los brazos y asiente
      armR = -1.25 + Math.sin(t * 4.6) * 0.55; armRz = -0.35; armL = -0.45 + Math.sin(t * 2.9 + 1) * 0.3; armLz = 0.3; headX = Math.sin(t * 6.5) * 0.07 - 0.05; roll = Math.sin(t * 1.7) * 0.04; sy = 1 + Math.sin(t * 9) * 0.012;
    } else {
      sy = 1 + Math.sin(t * 2.2) * 0.018; headX = Math.sin(t * 0.7) * 0.04;
      this.sniff -= dt; if (this.sniff < 0.6) headX = -0.16 + Math.sin(t * 22) * 0.05; if (this.sniff < 0) this.sniff = 3 + Math.random() * 4;
    }
    if (this.flinch > 0 && (st === S.IDLE || st === S.RUN)) { this.flinch -= dt; armL = armR = -2.8; armLz = 0.45; armRz = -0.45; headX = 0.25; }   // se cubre de los teros
    // objetos de festejo
    const PR = st === S.CELEBRATE ? this.celeProp : null;
    for (const k in this.props) this.props[k].visible = PR === k;
    this.kiteTail.forEach(b => { b.visible = PR === 'kite'; }); this.kiteLine.visible = PR === 'kite';
    if (PR === 'flag') this.flagCloth.rotation.y = Math.PI / 2 + Math.sin(t * 11) * 0.35;
    if (PR === 'umbrella') this.umbTop.rotation.y += dt * 3;
    if (PR === 'bulb') { const p = this.pos; this.fx.glow.sprite(p.x, p.y + 3.4, p.z, 2.6, 0xfff2a8, 0.7 + 0.2 * Math.sin(t * 9)); }
    if (PR === 'kite') {
      const p = this.pos, k = this.props.kite, hx = Math.sin(this.heading), hz = Math.cos(this.heading), kx = p.x - hx * 4 + Math.sin(t * 0.9) * 1.2, ky = p.y + 7.5 + Math.sin(t * 1.7) * 0.7, kz = p.z - hz * 4 + Math.cos(t * 0.7) * 1.2;
      k.position.set(kx, ky, kz); k.rotation.set(0.25 * Math.sin(t * 2.1), this.heading, 0.35 * Math.sin(t * 1.3));
      this.kiteTail.forEach((b, i) => { b.position.set(kx + Math.sin(t * 3 + i) * 0.25, ky - 1.2 - i * 0.42, kz + Math.cos(t * 2.5 + i) * 0.2); b.rotation.z = Math.sin(t * 5 + i) * 0.6; });
      const a = this.kiteLine.geometry.attributes.position; a.setXYZ(0, p.x + hz * 0.7, p.y + 2.6, p.z - hx * 0.7); a.setXYZ(1, kx, ky - 0.9, kz); a.needsUpdate = true;
    }
    const r = 16;
    j.legL = damp(j.legL, legL, r, dt); j.legR = damp(j.legR, legR, r, dt); j.armL = damp(j.armL, armL, r, dt); j.armR = damp(j.armR, armR, r, dt);
    j.armLz = damp(j.armLz, armLz, r, dt); j.armRz = damp(j.armRz, armRz, r, dt); j.tilt = damp(j.tilt, tilt, 9, dt); j.roll = damp(j.roll, roll, r, dt);
    j.headX = damp(j.headX, headX, 10, dt); j.lift = damp(j.lift, lift, 22, dt); j.sy = damp(j.sy, sy, 14, dt);
    this.legL.rotation.x = j.legL; this.legR.rotation.x = j.legR; this.armL.rotation.x = j.armL; this.armR.rotation.x = j.armR; this.armL.rotation.z = -j.armLz; this.armR.rotation.z = -j.armRz;
    this.rig.rotation.x = j.tilt + flip; this.rig.rotation.y = spin; this.rig.rotation.z = j.roll; this.rig.position.y = 1.0 + j.lift; this.rig.scale.set(1 / Math.sqrt(j.sy), j.sy, 1 / Math.sqrt(j.sy));
    this.head.rotation.x = j.headX; this.head.rotation.z = -j.roll * 1.4;
    // Orejas móviles y parpadeo
    const ew = Math.sin(t * 9) * (Math.sin(t * 0.9) > 0.75 ? 0.35 : 0.04) + (st === S.RUN ? Math.sin(this.phase * 2) * 0.12 : 0);
    this.ears[0].rotation.z = 0.25 + ew; this.ears[1].rotation.z = -0.25 - ew;
    this.blink -= dt; const bl = this.blink < 0.12 ? 0.12 : 1; if (this.blink < 0) this.blink = 2 + Math.random() * 3;
    this.eyes[0].scale.y = bl; this.eyes[1].scale.y = bl;
    // atuendos con partes móviles: el molinito del casco y la capa del Guardián
    const spd = Math.hypot(this.vel.x, this.vel.z);
    if (this.kitKey === 'eolico' && this.kitRotor) this.kitRotor.rotation.z -= dt * (5 + spd * 2.5);
    if (this.kitKey === 'guardian' && this.cape) {
      const c = this.cape, a = c.m.geometry.attributes.position, fl = Math.min(1, spd / 7);
      c.m.rotation.x = damp(c.m.rotation.x, 0.12 + fl * 0.75 + (this.vy > 1 ? 0.3 : 0), 6, dt);
      for (let i = 0; i < a.count; i++) { const y = c.base[i * 3 + 1], x = c.base[i * 3], u = -y / 1.55; a.setZ(i, -Math.sin(u * 4 - t * (4 + fl * 6) + x * 1.5) * 0.09 * u * (0.6 + fl)); }
      a.needsUpdate = true;
    }
  }
}
