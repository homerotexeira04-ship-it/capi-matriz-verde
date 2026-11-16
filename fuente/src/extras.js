// Extras: chispas de saber coleccionables, vestuario de Capi, viaje rápido en ómnibus y diploma final.
import * as THREE from 'three';
import { POS, RES } from './terrain.js';
import { smooth } from './util.js';
import { drawFace } from './ui.js';

const $ = id => document.getElementById(id);
const N = ' ';

export const OUTFITS = [
  { name: 'Clásico', need: 0, helmet: 0xffc420, vest: 0x4fc3f7, band: 0xf1ff6b },
  { name: 'Eólico', need: 2, helmet: 0xf4f4f4, vest: 0x7fd8c2, band: 0xffffff },
  { name: 'Hidro', need: 4, helmet: 0x4fc3f7, vest: 0x2a5fb0, band: 0xbfe9fb },
  { name: 'Solar', need: 6, helmet: 0xff8a2a, vest: 0xffd23f, band: 0xfff3b0 },
  { name: 'Biomasa', need: 8, helmet: 0x57b85a, vest: 0x9a6a3f, band: 0xd9f29b },
  { name: 'Guardián', need: 10, helmet: 0xe6007e, vest: 0x6a2c91, band: 0x2ed3c6 }
];

// [x, z, altura extra, pista del lugar, dato]
const SPARKS = [
  [-39.4, 44, 0, 'la fuente de la Plaza Matriz', 'La red eléctrica del Uruguay trabaja a 50 Hz: la corriente va y viene 50 veces por segundo, y todas las centrales tienen que ir al mismo compás.'],
  [-58, 97, 0, 'la punta del muelle', 'El carpincho es el roedor más grande del mundo y un gran nadador. Por eso Capi cruza ríos y embalses sin problema.'],
  [12, -48, 0, 'el techo de la sala de máquinas', 'Salto Grande, sobre el río Uruguay, es una represa binacional: la comparten Uruguay y Argentina, y tiene 14 turbinas.'],
  [0, -78, 0.4, 'el medio del embalse', 'Sobre el río Negro hay tres represas en cadena: Rincón del Bonete, Baygorria y Palmar. El agua que turbina una la vuelve a aprovechar la siguiente.'],
  [86.5, -15.5, 0, 'la cima de una cuchilla', 'La potencia del viento crece con el cubo de su velocidad: si sopla el doble de rápido, trae ocho veces más energía. Por eso los parques eólicos se instalan donde el viento es fuerte y parejo.'],
  [39.3, 30.4, 0, 'la sombra del ombú de Don Mateo', 'El tero es un símbolo del Uruguay: defiende su nido a los gritos, y hasta la selección de rugby se llama Los Teros.'],
  [-66.5, -68, 0, 'el pasillo entre las matrices solares', 'Un panel con seguidor gira durante el día para mirar siempre al sol. Así produce más energía que uno fijo.'],
  [-43, -79.4, 0, 'el fondo del banco de baterías', 'LFP quiere decir litio-ferrofosfato: un tipo de batería de litio muy segura, que aguanta miles de cargas y descargas. Por eso se usa para guardar energía de la red.'],
  [93.15, 40.75, 0, 'el monte de eucaliptos', 'En Uruguay la biomasa para generar electricidad sale de residuos forestales, del licor negro de las plantas de celulosa y de la cáscara de arroz, entre otros.'],
  [-46, -17, 0, 'lo más alto del puente', 'El ceibo, de flores rojas, es la flor nacional del Uruguay. Crece a orillas de ríos y arroyos, como los que se ven desde este puente.']
];

export class Extras {
  constructor(game) {
    this.g = game; this.got = new Set(); this.outfit = 0; this.open = null; this.t = 0; this.factT = 0; this.fading = false;
    const w = game.world, mat = new THREE.MeshBasicMaterial({ color: 0xffe066, fog: false }), geo = new THREE.OctahedronGeometry(0.42, 0);
    this.sparks = SPARKS.map(([x, z, dy, place, text], i) => {
      const g = new THREE.Group(), a = new THREE.Mesh(geo, mat), b = new THREE.Mesh(geo, mat); a.scale.set(0.55, 1.5, 0.55); b.scale.set(1.5, 0.55, 0.55); g.add(a, b);
      // Silueta que se ve a través de árboles y techos cuando Capi anda cerca
      const ghost = new THREE.MeshBasicMaterial({ color: 0xfff3a8, fog: false, transparent: true, opacity: 0, depthTest: false, depthWrite: false });
      for (const m of [a, b]) { const q = new THREE.Mesh(geo, ghost); q.scale.copy(m.scale); q.renderOrder = 30; g.add(q); }
      const y = Math.max(w.groundAt(x, z), z < -56 ? (w.terrainAt(x, z) < RES ? RES : 0) : 0) + 1.5 + dy; g.position.set(x, y, z); game.scene.add(g);
      return { i, x, y, z, place, text, group: g, ghost };
    });
    // Interfaz
    $('bWard').onclick = () => this.toggleWardrobe();
    $('wClose').onclick = () => this.close(); $('tvClose').onclick = () => this.close();
    $('fact').addEventListener('click', () => { this.factT = 0.01; });
    $('dpName').addEventListener('keydown', e => { if (e.key === 'Enter') $('dGo').click(); });
    this.refresh();
  }
  data() { return { sparks: [...this.got], outfit: this.outfit }; }
  reset() { this.got.clear(); this.setOutfit(0); this.refresh(); }
  restore(s) { this.got = new Set((s && Array.isArray(s.sparks) ? s.sparks : []).filter(i => i >= 0 && i < SPARKS.length)); const o = s && OUTFITS[s.outfit] && OUTFITS[s.outfit].need <= this.got.size ? s.outfit : 0; this.setOutfit(o); this.refresh(); }
  refresh() { this.sparks.forEach(s => { s.group.visible = !this.got.has(s.i); }); $('sparkCount').textContent = `Chispas de saber: ${this.got.size}/${SPARKS.length}`; }
  setOutfit(i) { this.outfit = i; this.g.capi.setOutfit(OUTFITS[i]); }
  colors() { const o = OUTFITS[this.outfit], h = c => '#' + c.toString(16).padStart(6, '0'); return { helmet: h(o.helmet), vest: h(o.vest), band: h(o.band) }; }
  close() { if (this.open === 'diploma') return; if (this.open) $(this.open).classList.add('hidden'); this.open = null; }

  // ---- Chispas de saber ----
  fact(title, text, t = 11) { $('factT').textContent = title; $('factX').textContent = text; $('fact').classList.add('on'); this.factT = t; }
  collect(s) {
    const g = this.g; this.got.add(s.i); s.group.visible = false; const n = this.got.size;
    g.fx.sparks(s.x, s.y, s.z, 34, 0xffe066); g.audio.ok(); [84, 88, 91, 96].forEach((m, k) => g.audio.tone(440 * Math.pow(2, (m - 69) / 12), 0.14, 'triangle', 0.08, 0.08 + k * 0.07));
    const un = OUTFITS.find(o => o.need === n && o.need > 0);
    this.fact(`Chispa de saber ${n} de ${SPARKS.length}`, s.text + (un ? `  ·  ¡Nuevo atuendo para Capi: ${un.name}! Abrí el vestuario con la tecla V.` : ''), un ? 14 : 11);
    if (n === SPARKS.length) g.ui.toast('¡TODAS LAS CHISPAS!', 'Encontraste los 10 datos escondidos', 4);
    this.refresh(); g.missions.save();
  }
  hint() { const left = this.sparks.filter(s => !this.got.has(s.i)); return left.length ? 'Pista: buscá una chispa en ' + left[0].place + '.' : 'Ya encontraste todas las chispas.'; }

  // ---- Vestuario ----
  toggleWardrobe() {
    if (this.open === 'wardrobe') return this.close();
    if (this.g.locked) return;
    this.open = 'wardrobe'; $('wardrobe').classList.remove('hidden'); this.g.audio.click(); this.drawWardrobe();
  }
  drawWardrobe() {
    const box = $('wList'), h = c => '#' + c.toString(16).padStart(6, '0'); box.textContent = '';
    OUTFITS.forEach((o, i) => {
      const ok = this.got.size >= o.need, b = document.createElement('button'); b.type = 'button'; b.className = 'wItem' + (i === this.outfit ? ' on' : ''); b.disabled = !ok;
      b.innerHTML = `<span class="sw"><i style="background:${h(o.helmet)}"></i><i style="background:${h(o.vest)}"></i><i style="background:${h(o.band)}"></i></span><b>${o.name}</b><em>${ok ? (i === this.outfit ? 'puesto' : 'disponible') : `con ${o.need} chispas`}</em>`;
      b.onclick = () => { this.setOutfit(i); this.g.audio.ok(); this.g.missions.save(); this.drawWardrobe(); };
      box.appendChild(b);
    });
    $('wHint').textContent = `Tenés ${this.got.size} de ${SPARKS.length} chispas. ` + this.hint();
  }

  // ---- Viaje rápido en ómnibus eléctrico ----
  openTravel(from) {
    if (this.g.locked) return;
    this.open = 'travel'; this.from = from; $('travel').classList.remove('hidden'); this.g.audio.click();
    const box = $('tvList'); box.textContent = '';
    POS.stops.forEach((s, i) => { const b = document.createElement('button'); b.type = 'button'; b.className = 'btn ghost'; b.disabled = i === from; b.innerHTML = `<kbd>${i + 1}</kbd> ${s[2]}` + (i === from ? ' · estás acá' : ''); b.onclick = () => this.travel(i); box.appendChild(b); });
  }
  travel(i) {
    if (i === this.from || this.fading) return; const g = this.g, s = POS.stops[i];
    this.close(); this.fading = true; $('fade').classList.add('on'); $('fadeTxt').textContent = 'En ómnibus eléctrico hacia ' + s[2] + '…';
    g.audio.tone(392, 0.25, 'square', 0.08); g.audio.tone(494, 0.3, 'square', 0.08, 0.22); g.audio.power();
    setTimeout(() => {
      g.capi.teleport(s[0] + 1.6, s[1] + 1.6); g.capi.heading = 0; g.cam.target.set(s[0], g.capi.pos.y + 1.5, s[1]); g.cam.inspect = null;
      setTimeout(() => { $('fade').classList.remove('on'); this.fading = false; g.ui.note('Llegaste a ' + s[2] + '. Viaje sin humo: este ómnibus anda con electricidad renovable.', 4.5); }, 450);
    }, 650);
  }
  key(code) {
    if (this.open === 'travel') { const n = { Digit1: 0, Digit2: 1, Digit3: 2, Digit4: 3, Digit5: 4, Digit6: 5, Numpad1: 0, Numpad2: 1, Numpad3: 2, Numpad4: 3, Numpad5: 4, Numpad6: 5 }[code]; if (n != null) this.travel(n); }
  }

  // ---- Diploma final ----
  showDiploma(done) {
    this.open = 'diploma'; const el = $('diploma'); el.classList.remove('hidden'); $('dAsk').classList.remove('hidden'); $('dCard').classList.add('hidden');
    const inp = $('dpName'); inp.value = ''; setTimeout(() => { try { inp.focus(); } catch (e) { /* sin foco */ } }, 50);
    $('dGo').onclick = () => {
      const name = inp.value.trim().replace(/\s+/g, ' ').slice(0, 40) || 'Visitante', m = this.g.missions;
      $('dWho').textContent = name; $('dWho').classList.toggle('long', name.length > 24); $('dStory').textContent = (m.short ? 'Historia corta' : 'Historia larga') + ` · ${m.seq.length} misiones`; $('dSparks').textContent = `${this.got.size} de ${SPARKS.length} chispas de saber`;
      $('dDate').textContent = new Date().toLocaleDateString('es-UY', { day: 'numeric', month: 'long', year: 'numeric' });
      const c = this.colors(); drawFace($('dCapi').getContext('2d'), 'capi', 1, false, c);
      $('dAsk').classList.add('hidden'); $('dCard').classList.remove('hidden'); this.g.audio.fanfare();
    };
    $('dDone').onclick = () => { el.classList.add('hidden'); this.open = null; this.g.audio.click(); done(); };
  }

  update(dt, st) {
    this.t += dt; const c = this.g.capi.pos;
    if (this.factT > 0) { this.factT -= dt; if (this.factT <= 0) $('fact').classList.remove('on'); }
    for (const s of this.sparks) {
      if (this.got.has(s.i)) continue;
      s.group.rotation.y += dt * 2.4; s.group.position.y = s.y + Math.sin(this.t * 2.6 + s.i) * 0.22;
      st.fx.glow.sprite(s.x, s.group.position.y, s.z, 3.4, 0xffe066, 0.55 + 0.25 * Math.sin(this.t * 5 + s.i));
      const d = Math.hypot(c.x - s.x, c.z - s.z); s.ghost.opacity = 0.6 * (1 - smooth(10, 20, d));
      if (st.play && d < 1.9 && Math.abs(c.y + 1.2 - s.y) < 3.6) this.collect(s);
    }
  }
}
