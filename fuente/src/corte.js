// Maqueta en corte de una unidad generadora de Salto Grande, en el mirador de Energimundo frente a la central.
// El hormigón queda detrás del plano de corte y la maquinaria a la vista: toma de agua, tubería forzada, caracol,
// turbina Kaplan, eje, generador, transformador y tubo de aspiración. El agua y la electricidad circulan, y todo gira
// tan rápido como la central hidroeléctrica de la simulación (si se cierran las turbinas, la maqueta se frena).
// Datos: 14 unidades Kaplan de 135 MW (1890 MW), salto nominal de 25,4 m y líneas de 500 kV (Comisión Técnica Mixta de Salto Grande).
import * as THREE from 'three';
import { clamp, damp } from './util.js';
import { C, textTex, canvasTex } from './world.js';

const O = { x: -84.6, z: -81 };     // centro de la maqueta (el corte mira al oeste, a la central real)
const STEPS = [
  { t: 'Esta es una maqueta en corte de una de las 14 unidades de la central de Salto Grande. Cada una tiene una turbina Kaplan de 135 MW: entre las 14 suman 1890 MW.' },
  { n: 1, t: '① Toma de agua. El agua del lago entra por una reja que frena troncos y camalotes antes de que lleguen a la turbina.' },
  { n: 2, t: '② Tubería forzada. El agua baja con fuerza: entre el lago y el río hay unos 25 metros de desnivel. Ese salto es la energía que se aprovecha.' },
  { n: 3, t: '③ Turbina Kaplan. El agua empuja las palas, parecidas a la hélice de un barco, y la hace girar. Las palas se inclinan para aprovechar mejor el agua cuando cambia el caudal.' },
  { n: 4, t: '④ Generador. El eje sube hasta el generador: al girar, sus imanes pasan frente a bobinas de cobre y producen electricidad.' },
  { n: 5, t: '⑤ Transformador. Sube la tensión para que la energía viaje lejos con pocas pérdidas, por las líneas de 500 kV que unen Uruguay y Argentina.' },
  { n: 6, t: '⑥ Vuelta al río. El agua sale por el tubo de aspiración y sigue por el río Uruguay: no se gasta ni se ensucia.' },
  { last: true }
];
const W = [[-5.6, 3.7], [-4.6, 3.4], [-3.2, 3.2], [-2.0, 2.4], [-1.1, 1.6], [-0.35, 1.35], [0, 1.2], [0.1, 0.6], [0.6, 0.32], [1.6, 0.3], [2.7, 0.45], [3.7, 0.7], [5.4, 0.9]];   // recorrido del agua (z, y)

export function buildCorte(w) {
  const gy = w.groundAt(O.x, O.z), Y = gy + 0.6, b = w.batch, X = O.x, cc = 0xc9c3b6, cut = 0xe4dfd2;
  const P = (z, y, x = 0) => new THREE.Vector3(X + x, Y + y, O.z + z);
  const box = (z0, z1, y0, y1, x0, x1, col) => b.box(X + (x0 + x1) / 2, Y + (y0 + y1) / 2, O.z + (z0 + z1) / 2, x1 - x0, y1 - y0, z1 - z0, col);
  // pedestal con borde y cartel
  b.boxB(X, gy, O.z, 3.2, 0.6, 12.4, 0x3d4350); b.boxB(X, gy + 0.6, O.z, 3.3, 0.06, 12.5, C.yellow);
  w.addSolid(X - 1.6, X + 1.6, O.z - 6.2, O.z + 6.2, Y + 6);
  // hormigón detrás del plano de corte (x de 0 a 0,9): presa con la toma, losas, muros y techo de la sala
  box(-4.2, -2.2, 0, 5.6, 0.05, 0.95, cc); box(-4.2, -2.2, 5.6, 5.8, -0.6, 0.95, 0x6a6f77);   // cuerpo de la presa y coronamiento
  box(-2.2, 3.6, 0, 0.15, -0.9, 0.95, cc);                                                        // fundación
  box(-2.2, 3.05, 2.55, 2.75, 0.25, 0.95, cut);                                                   // piso del generador
  box(3.05, 3.35, 0.9, 5.2, 0.05, 0.95, cut); box(-2.2, 3.35, 5.2, 5.45, -0.3, 0.95, cut);         // muro aguas abajo y techo
  box(-2.2, 3.05, 4.7, 4.85, 0.4, 0.95, 0xd7a531);                                               // viga del puente grúa
  box(-4.21, -4.19, 0.1, 5.5, -0.9, 0.05, 0x9e988b);                                              // cara de la presa del lado del lago
  // reja de la toma
  for (let i = 0; i < 7; i++) b.box(X - 0.8 + i * 0.22, Y + 3.4, O.z - 4.32, 0.04, 1.7, 0.04, 0x5a6068);
  // agua del lago y del río (de vidrio celeste)
  const wm = new THREE.MeshStandardMaterial({ color: 0x3f9ad8, transparent: true, opacity: 0.42, roughness: 0.2, depthWrite: false });
  const water = (z0, z1, y1) => { const m = new THREE.Mesh(new THREE.BoxGeometry(1.8, y1, z1 - z0), wm); m.position.set(X, Y + y1 / 2, O.z + (z0 + z1) / 2); m.renderOrder = 5; w.scene.add(m); };
  water(-6.1, -4.22, 4.6); water(3.36, 6.1, 1.5);
  // tubería forzada, caracol y tubo de aspiración: semitransparentes para ver el agua por dentro
  const steel = new THREE.MeshStandardMaterial({ color: 0x7f9bb3, transparent: true, opacity: 0.38, roughness: 0.35, metalness: 0.3, depthWrite: false, side: THREE.DoubleSide, emissive: 0x000000 });
  const curve = pts => new THREE.CatmullRomCurve3(pts.map(([z, y]) => P(z, y)));
  const pen = new THREE.Mesh(new THREE.TubeGeometry(curve([[-4.6, 3.4], [-3.2, 3.2], [-2.0, 2.4], [-1.1, 1.6], [-0.4, 1.35]]), 30, 0.5, 12), steel); pen.renderOrder = 6; w.scene.add(pen);
  const dtm = steel.clone(); const dra = new THREE.Mesh(new THREE.TubeGeometry(curve([[0, 1.05], [0.12, 0.5], [0.7, 0.3], [1.7, 0.32], [2.8, 0.48], [3.5, 0.66]]), 30, 0.5, 12), dtm); dra.renderOrder = 6; w.scene.add(dra);
  const spm = steel.clone(); const spiral = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.3, 10, 28), spm); spiral.rotation.x = Math.PI / 2; spiral.position.copy(P(0, 1.35)); spiral.renderOrder = 6; w.scene.add(spiral);
  // turbina Kaplan: cubo con cinco palas orientables y la nariz abajo
  const bronze = new THREE.MeshStandardMaterial({ color: 0xc8913a, roughness: 0.45, metalness: 0.5, flatShading: true, emissive: 0x000000 });
  const runner = new THREE.Group(); runner.position.copy(P(0, 1.35));
  runner.add(new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.24, 0.42, 10), bronze)); const nose = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.3, 10), bronze); nose.rotation.x = Math.PI; nose.position.y = -0.36; runner.add(nose);
  for (let k = 0; k < 5; k++) { const bl = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.04, 0.34), bronze); bl.position.set(Math.cos(k * 1.2566) * 0.55, 0, Math.sin(k * 1.2566) * 0.55); bl.rotation.set(0, -k * 1.2566, 0.55); runner.add(bl); }
  w.scene.add(runner);
  // eje y generador (la carcasa está abierta para ver el rotor con sus polos)
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.9, 8), new THREE.MeshStandardMaterial({ color: 0xb8bec6, metalness: 0.6, roughness: 0.3 })); shaft.position.copy(P(0, 2.55)); w.scene.add(shaft);
  const statM = new THREE.MeshStandardMaterial({ color: 0x2f6f5f, roughness: 0.6, side: THREE.DoubleSide, flatShading: true, emissive: 0x000000 });
  const stator = new THREE.Mesh(new THREE.CylinderGeometry(1.18, 1.18, 0.8, 24, 1, true, 0, Math.PI), statM); stator.position.copy(P(0, 3.6)); w.scene.add(stator);
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(1.22, 1.22, 0.1, 24, 1, false, 0, Math.PI), statM); cap.position.copy(P(0, 4.05)); w.scene.add(cap);
  const copper = new THREE.MeshStandardMaterial({ color: 0xb87333, roughness: 0.4, metalness: 0.6, flatShading: true, emissive: 0x000000 });
  const rotor = new THREE.Group(); rotor.position.copy(P(0, 3.6)); rotor.add(new THREE.Mesh(new THREE.CylinderGeometry(0.82, 0.82, 0.66, 16), copper));
  const pole = new THREE.MeshStandardMaterial({ color: 0xc0392b, roughness: 0.5 }); for (let k = 0; k < 12; k++) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.6, 0.12), pole); p.position.set(Math.cos(k * 0.5236) * 0.88, 0, Math.sin(k * 0.5236) * 0.88); p.rotation.y = -k * 0.5236; rotor.add(p); }
  w.scene.add(rotor);
  // barras hacia el transformador, transformador y torre de salida
  const busM = new THREE.MeshStandardMaterial({ color: 0xd8b04a, metalness: 0.6, roughness: 0.3, emissive: 0x000000 });
  const bus = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([P(0.95, 3.7), P(2.2, 3.75), P(3.2, 3.75), P(4.0, 3.55)]), 16, 0.07, 6), busM); w.scene.add(bus);
  box(3.35, 5.2, 2.25, 2.45, -0.9, 0.95, cc);   // plataforma de los transformadores
  const trM = new THREE.MeshStandardMaterial({ color: 0x6b7480, roughness: 0.6, flatShading: true, emissive: 0x000000 });
  const tr = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.0, 1.05), trM); tr.position.copy(P(4.25, 2.95)); w.scene.add(tr);
  for (let k = 0; k < 4; k++) b.box(X - 0.5, Y + 2.95, O.z + 3.85 + k * 0.27, 0.12, 0.85, 0.04, 0x58606b);
  for (let k = -1; k <= 1; k++) { b.cyl(X + k * 0.25, Y + 3.45, O.z + 4.25, 0.06, 0.08, 0.38, 0xe9e2d0, 8); b.cyl(X + k * 0.25, Y + 3.83, O.z + 4.25, 0.03, 0.03, 0.1, 0x8a6a3a, 6); }
  for (const dz of [-0.35, 0.35]) for (const dx of [-0.35, 0.35]) b.box(X + dx, Y + 4.4, O.z + 5.45 + dz, 0.06, 4.0, 0.06, 0x8a9099);
  for (let y = 2.6; y <= 6.2; y += 0.9) b.box(X, Y + y, O.z + 5.45, 0.8, 0.05, 0.8, 0x8a9099);
  b.box(X, Y + 6.3, O.z + 5.45, 2.2, 0.08, 0.1, 0x8a9099);
  // cartel
  const sg = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 0.75), new THREE.MeshBasicMaterial({ map: textTex('UNA UNIDAD DE SALTO GRANDE, EN CORTE', { w: 1024, h: 160, bg: '#0f2140', fg: '#ffd23f', border: '#ffd23f', size: 64 }) }));
  sg.position.set(X - 1.67, gy + 0.32, O.z); sg.rotation.y = -Math.PI / 2; w.scene.add(sg);
  // insignias numeradas de cada parte
  const badge = n => { const t = canvasTex(128, 128, (c) => { c.fillStyle = '#1a2238'; c.beginPath(); c.arc(64, 64, 62, 0, 7); c.fill(); c.fillStyle = '#ffd23f'; c.beginPath(); c.arc(64, 64, 52, 0, 7); c.fill(); c.fillStyle = '#1a2238'; c.font = '80px "Lilita One","Arial Black",sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(String(n), 64, 70); }); const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true })); s.scale.setScalar(0.6); s.renderOrder = 12; w.scene.add(s); return s; };
  const spots = [null, P(-4.7, 4.9, -0.6), P(-2.4, 3.35, -0.8), P(0, 1.3, -1.45), P(0, 3.7, -1.55), P(4.25, 3.9, -0.9), P(4.9, 1.9, -1.0)];
  const badges = spots.map((p, i) => { if (!p) return null; const s = badge(i); s.position.copy(p); return s; });
  w.addInter('corte', X - 2.6, O.z - 1.2, { ry: -Math.PI / 2, h: 3.2 });
  w.corte = { runner, rotor, shaft, badges, spots, mats: [null, steel, steel, bronze, copper, trM, dtm], spm, busM, statM, P, center: P(0.4, 3.3), Y };
}

// ---------- Recorrido guiado y animación ----------
export class Corte {
  constructor(g) { this.g = g; this.ang = 0; this.flow = 0; this.ph = 0; this.eph = 0; this.lines = null; this.step = -1; }
  describe(id) { if (id !== 'corte') return null; return { state: 'ok', label: 'Ver cómo funciona la central, en corte' }; }
  interact(id) {
    if (id !== 'corte') return false;
    const g = this.g, K = g.world.corte, cam = g.cam, mw = Math.round((g.grid.out && g.grid.out.hydro) || 0);
    this.lines = STEPS.map(s => ({ who: 'corte', text: s.last ? (mw > 1 ? `Ahora mismo la central hidroeléctrica le está dando ${mw} MW a la red del juego: fijate qué rápido gira. Si cerrás turbinas en la represa, la maqueta se frena.` : 'Ahora mismo la central del juego no está generando: las turbinas están detenidas. Poné una en línea en la represa y mirá cómo arranca.') : s.t }));
    cam.follow = K.center.clone(); cam.followD = 17.5; cam.yawT = -1.3; cam.lowT = 999; cam.lowF = 0.6;
    g.ui.dialog(this.lines, () => { cam.follow = null; cam.lowT = 0; this.lines = null; this.step = -1; });
    g.stats && g.stats.inc && g.stats.inc(g.stats.d, 'corte');
    return true;
  }
  update(dt, st) {
    const g = this.g, K = g.world.corte; if (!K) return;
    const F = st.fx, near = Math.hypot(st.focus.x - O.x, st.focus.z - O.z) < 45 || this.lines;
    const hyd = clamp(((st.grid.out && st.grid.out.hydro) || 0) / 145, 0, 1);
    this.flow = damp(this.flow, hyd, 1.2, dt);
    this.ang += dt * (0.4 + 5.5 * this.flow) * (this.flow > 0.02 ? 1 : 0);
    K.runner.rotation.y = this.ang; K.rotor.rotation.y = this.ang; K.shaft.rotation.y = this.ang;
    // qué parte se está explicando: su insignia late y la pieza se ilumina
    const d = g.ui.dlg, step = d && this.lines && d.lines === this.lines ? (STEPS[d.i] && STEPS[d.i].n) || 0 : 0, t = g.time;
    K.badges.forEach((s, i) => { if (!s) return; const on = step === i, k = on ? 1 + 0.25 * Math.sin(t * 7) : 1; s.scale.setScalar(0.6 * k * (on ? 1.4 : 1)); s.material.opacity = step && !on ? 0.55 : 1; s.visible = !!near; });
    const glow = 0.35 + 0.25 * Math.sin(t * 6);
    K.mats.forEach((m, i) => { if (m && m.emissive) m.emissive.setRGB(step === i ? glow : 0, step === i ? glow * 0.8 : 0, step === i ? glow * 0.3 : 0); });
    if (K.spm.emissive) K.spm.emissive.copy(K.mats[2].emissive);
    K.busM.emissive.setRGB(step === 5 ? glow : 0, step === 5 ? glow * 0.8 : 0, 0);
    if (!near || !F) return;
    // agua que circula (celeste) y electricidad que sale (amarilla)
    this.ph = (this.ph + dt * (0.04 + 0.22 * this.flow)) % 1; this.eph = (this.eph + dt * (0.1 + 0.5 * this.flow)) % 1;
    if (this.flow > 0.02) {
      for (let i = 0; i < 26; i++) { const p = along(W, (this.ph + i / 26) % 1); F.glow.sprite(O.x - 0.05, K.Y + p[1], O.z + p[0], 0.42, 0x7fd4ff, 0.75); }
      const E = [[0.95, 3.7], [2.2, 3.75], [3.2, 3.75], [4.0, 3.55], [4.25, 3.5], [5.45, 6.3]];
      for (let i = 0; i < 9; i++) { const p = along(E, (this.eph + i / 9) % 1); F.glow.sprite(O.x, K.Y + p[1], O.z + p[0], 0.5, 0xffd23f, 0.9); }
    }
  }
}
// punto a lo largo de una polilínea (0..1), en proporción a la longitud
function along(L, u) {
  let tot = 0; const seg = []; for (let i = 1; i < L.length; i++) { const d = Math.hypot(L[i][0] - L[i - 1][0], L[i][1] - L[i - 1][1]); seg.push(d); tot += d; }
  let r = u * tot; for (let i = 0; i < seg.length; i++) { if (r <= seg[i]) { const k = r / seg[i]; return [L[i][0] + (L[i + 1][0] - L[i][0]) * k, L[i][1] + (L[i + 1][1] - L[i][1]) * k]; } r -= seg[i]; }
  return L[L.length - 1];
}
