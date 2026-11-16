// CapiController: modelo 3D de Capi, física, colisiones suaves, detección agua/tierra y máquina de estados de animación.
import * as THREE from 'three';
import { clamp, lerp, damp, angDiff, rng } from './util.js';
import { B, POS, CITY_Y } from './terrain.js';
import { canvasTex } from './world.js';

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
    add(new THREE.CylinderGeometry(0.645, 0.7, 0.74, 16, 1, true), mVest, 0, 0.14, 0, rig).scale.z = 0.94;
    for (const y of [-0.08, 0.3]) { const b = add(new THREE.TorusGeometry(0.69, 0.045, 6, 20), mBand, 0, y, 0, rig); b.rotation.x = Math.PI / 2; b.scale.y = 0.94; }
    const emb = canvasTex(64, 64, (g) => { g.fillStyle = '#ffd23f'; g.beginPath(); g.arc(32, 32, 30, 0, 7); g.fill(); g.fillStyle = '#12325a'; g.beginPath(); g.moveTo(37, 6); g.lineTo(16, 36); g.lineTo(30, 36); g.lineTo(25, 58); g.lineTo(48, 26); g.lineTo(34, 26); g.closePath(); g.fill(); });
    const em = add(new THREE.CircleGeometry(0.15, 12), new THREE.MeshStandardMaterial({ map: emb, roughness: 0.6 }), -0.3, 0.3, 0.6, rig); em.rotation.y = -0.5;
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
      const rim = add(new THREE.TorusGeometry(0.15, 0.035, 5, 10), mYellow, sx * 0.44, 0.42, -0.1, head); rim.rotation.y = Math.PI / 2; rim.rotation.x = sx * 0.4;
    }
    // Casco con dos aberturas para las orejas
    const helm = new THREE.Group(); helm.position.set(0, 0.2, -0.04); helm.rotation.x = -0.3; head.add(helm);   // echado hacia atrás para que se vean los ojos
    add(new THREE.SphereGeometry(0.58, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), mYellow, 0, 0.03, 0, helm).scale.set(1.0, 0.72, 1.04);
    add(new THREE.CylinderGeometry(0.61, 0.63, 0.06, 18), mYellow, 0, 0.04, 0, helm); add(new THREE.BoxGeometry(0.44, 0.05, 0.16), mYellow, 0, 0.04, 0.62, helm);
    add(new THREE.BoxGeometry(0.12, 0.07, 0.9), mYellow, 0, 0.45, 0, helm);
    this.lamp = add(new THREE.BoxGeometry(0.16, 0.1, 0.06), new THREE.MeshStandardMaterial({ color: 0xe8fbff, emissive: 0x9ff0ff, emissiveIntensity: 0.6 }), 0, 0.2, 0.57, helm);
    this.wrench.visible = false; this.tablet.visible = false;
    // Capa 1 + estarcido: permite dibujar la silueta de Capi cuando queda detrás de un edificio
    root.traverse(o => { if (o.isMesh) { o.layers.enable(1); o.renderOrder = 3; const m = o.material; m.stencilWrite = true; m.stencilRef = 1; m.stencilFunc = THREE.AlwaysStencilFunc; m.stencilZPass = THREE.ReplaceStencilOp; } });
    root.position.copy(this.pos); scene.add(root);
  }

  setLed(level, good) {
    const n = Math.round(clamp(level, 0, 1) * 5);
    this.leds.forEach((l, i) => { l.material.emissive.set(good ? 0x4dffa0 : level < 0.4 ? 0xff7a4d : 0xffc93c); l.material.emissiveIntensity = i < n ? 2.2 : 0.05; });
  }
  setOutfit(o) { this.mats.helmet.color.set(o.helmet); this.mats.vest.color.set(o.vest); this.mats.band.color.set(o.band); this.mats.band.emissive.set(o.band).multiplyScalar(0.7); }
  celebrate(t = 2.4) { this.cele = t; }
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
    let legL = 0, legR = 0, armL = 0, armR = 0, armLz = 0.12, armRz = -0.12, tilt = 0, roll = 0, headX = 0, lift = 0, sy = 1;
    this.wrench.visible = st === S.INTERACT; this.beltWrench.visible = !this.wrench.visible; this.tablet.visible = st === S.INTERACT;
    if (st === S.RUN) {
      const before = this.phase; this.phase += sp * dt * 1.25;
      if (Math.floor(before / Math.PI) !== Math.floor(this.phase / Math.PI)) {
        const wade = ground < wl, hard = this.world.groundAt(this.pos.x, this.pos.z) - this.world.terrainAt(this.pos.x, this.pos.z) > 0.05;
        this.audio.step(wade ? 'agua' : hard ? 'hormigon' : 'pasto');
        if (wade) this.fx.splash(this.pos.x, wl + 0.05, this.pos.z, 4);
      }
      const s = Math.sin(this.phase), k = clamp(sp / 11, 0.3, 1);
      legL = s * 1.0 * k; legR = -s * 1.0 * k; armL = -s * 0.85 * k; armR = s * 0.85 * k; lift = Math.abs(Math.cos(this.phase)) * 0.13 * k; roll = s * 0.07; tilt = 0.14 * k; headX = -0.08 + Math.sin(this.phase * 2) * 0.04;
    } else if (st === S.JUMP) {
      legL = -0.5; legR = 0.35; armL = armR = -2.3; armLz = 0.5; armRz = -0.5; sy = 1 + clamp(this.vy * 0.012, -0.1, 0.16); tilt = clamp(-this.vy * 0.012, -0.2, 0.25);
    } else if (st === S.SWIM) {
      tilt = 1.12; headX = -0.95; lift = 0; const s = Math.sin(t * (6 + sp * 0.5));
      legL = s * 0.7 - 0.2; legR = -s * 0.7 - 0.2; armL = -1.9 + s * 0.6; armR = -1.9 - s * 0.6; roll = Math.sin(t * 2.2) * 0.05;
    } else if (st === S.INTERACT) {
      armR = -1.45 + Math.sin(t * 16) * 0.3; armL = -1.0; headX = 0.12 + Math.sin(t * 5) * 0.08; tilt = 0.08;
      if (Math.random() < 14 * dt) { const hx = Math.sin(this.heading), hz = Math.cos(this.heading); this.fx.sparks(this.pos.x + hx * 0.9, this.pos.y + 1.5, this.pos.z + hz * 0.9, 2, 0xffd23f); }
    } else if (st === S.CELEBRATE) {
      lift = Math.abs(Math.sin(t * 7.5)) * 0.7; armR = -2.9; armRz = -0.25; armL = -0.4; legL = 0.3; legR = -0.3; headX = -0.25; sy = 1 + Math.sin(t * 15) * 0.04;
    } else if (this.talking) {   // discurso: gesticula con los brazos y asiente
      armR = -1.25 + Math.sin(t * 4.6) * 0.55; armRz = -0.35; armL = -0.45 + Math.sin(t * 2.9 + 1) * 0.3; armLz = 0.3; headX = Math.sin(t * 6.5) * 0.07 - 0.05; roll = Math.sin(t * 1.7) * 0.04; sy = 1 + Math.sin(t * 9) * 0.012;
    } else {
      sy = 1 + Math.sin(t * 2.2) * 0.018; headX = Math.sin(t * 0.7) * 0.04;
      this.sniff -= dt; if (this.sniff < 0.6) headX = -0.16 + Math.sin(t * 22) * 0.05; if (this.sniff < 0) this.sniff = 3 + Math.random() * 4;
    }
    const r = 16;
    j.legL = damp(j.legL, legL, r, dt); j.legR = damp(j.legR, legR, r, dt); j.armL = damp(j.armL, armL, r, dt); j.armR = damp(j.armR, armR, r, dt);
    j.armLz = damp(j.armLz, armLz, r, dt); j.armRz = damp(j.armRz, armRz, r, dt); j.tilt = damp(j.tilt, tilt, 9, dt); j.roll = damp(j.roll, roll, r, dt);
    j.headX = damp(j.headX, headX, 10, dt); j.lift = damp(j.lift, lift, 22, dt); j.sy = damp(j.sy, sy, 14, dt);
    this.legL.rotation.x = j.legL; this.legR.rotation.x = j.legR; this.armL.rotation.x = j.armL; this.armR.rotation.x = j.armR; this.armL.rotation.z = -j.armLz; this.armR.rotation.z = -j.armRz;
    this.rig.rotation.x = j.tilt; this.rig.rotation.z = j.roll; this.rig.position.y = 1.0 + j.lift; this.rig.scale.set(1 / Math.sqrt(j.sy), j.sy, 1 / Math.sqrt(j.sy));
    this.head.rotation.x = j.headX; this.head.rotation.z = -j.roll * 1.4;
    // Orejas móviles y parpadeo
    const ew = Math.sin(t * 9) * (Math.sin(t * 0.9) > 0.75 ? 0.35 : 0.04) + (st === S.RUN ? Math.sin(this.phase * 2) * 0.12 : 0);
    this.ears[0].rotation.z = 0.25 + ew; this.ears[1].rotation.z = -0.25 - ew;
    this.blink -= dt; const bl = this.blink < 0.12 ? 0.12 : 1; if (this.blink < 0) this.blink = 2 + Math.random() * 3;
    this.eyes[0].scale.y = bl; this.eyes[1].scale.y = bl;
  }
}
