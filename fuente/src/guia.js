// Modo guía (se abre escribiendo "energimundo"), contador de visitas y ajustes de pantalla.
const $ = id => document.getElementById(id);
const SKEY = 'capi-estadisticas', AKEY = 'capi-ajustes', WORD = 'energimundo';
const today = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const fmtDate = k => { const [y, m, d] = k.split('-'); return `${+d}/${+m}/${y}`; };
const mmss = s => { s = Math.round(s); const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60; return h ? `${h} h ${String(m).padStart(2, '0')} min` : `${m} min ${String(r).padStart(2, '0')} s`; };
export const MG_NAMES = { sync: 'Sincronización de fase', crank: 'Freno del aerogenerador', gates: 'Compuerta del embalse', helio: 'Matriz solar', route: 'Subestación', seq: 'Caldera de biomasa', rhythm: 'Compás de carga', led: 'Cambio a LED', solar: 'Carga con sol', cometa: 'Cometa en la rambla', bici: 'Bicicleta generadora', cinta: 'Cinta de chips', despacho: 'Centro de Control', torre: 'Torre del aerogenerador' };
const MIS = { viento: 'Vientos en la Cuchilla', rio: 'La Fuerza del Río', sol: 'Cosecha de Sol', urbano: 'Circuito Verde Urbano', ahorro: 'Ciudad que Ahorra', tormenta: 'Sudestada sobre la Red', pico: 'Desafío 100% Renovable' };
const BUCKETS = ['menos de 2 min', '2 a 5 min', '5 a 10 min', '10 a 20 min', 'más de 20 min'];

// ---------- Ajustes que valen para todos los visitantes (letra grande) ----------
export const Settings = {
  d: (() => { try { return JSON.parse(localStorage.getItem(AKEY) || '{}') || {}; } catch (e) { return {}; } })(),
  get big() { return !!this.d.big; },
  get fest() { return this.d.fest || null; },
  setFest(k) { this.d.fest = k || null; try { localStorage.setItem(AKEY, JSON.stringify(this.d)); } catch (e) { /* sin almacenamiento */ } if (this.onFest) this.onFest(this.fest); },
  setBig(on) { this.d.big = !!on; try { localStorage.setItem(AKEY, JSON.stringify(this.d)); } catch (e) { /* sin almacenamiento */ } this.apply(); },
  apply() { document.body.classList.toggle('bigText', this.big); document.querySelectorAll('.bigToggle').forEach(b => { b.textContent = 'Letra grande: ' + (this.big ? 'sí' : 'no'); b.setAttribute('aria-pressed', this.big ? 'true' : 'false'); }); }
};

// ---------- Contador de visitas: queda guardado en la propia PC, sin datos personales ----------
export class Stats {
  constructor() { this.d = this.load(); this.dirty = false; this.sess = null; this.mg = null; setInterval(() => this.flush(), 15000); window.addEventListener('pagehide', () => { this.endSession(); this.flush(); }); }
  blank() { return { v: 1, since: today(), games: 0, cont: 0, mode: { corta: 0, larga: 0 }, level: { explorador: 0, ingeniero: 0 }, done: { corta: 0, larga: 0 }, missions: {}, sessions: 0, sessionSec: 0, buckets: [0, 0, 0, 0, 0], playSec: 0, days: {}, mg: {}, feria: 0, scenes: {}, sparks: 0, favors: 0, tut: { start: 0, done: 0, skip: 0 } }; }
  load() { try { const d = JSON.parse(localStorage.getItem(SKEY) || 'null'); if (d && d.v === 1) { const b = this.blank(); for (const k in b) if (d[k] == null) d[k] = b[k]; return d; } } catch (e) { /* datos dañados: se empieza de cero */ } return this.blank(); }
  flush() { if (!this.dirty) return; this.dirty = false; try { localStorage.setItem(SKEY, JSON.stringify(this.d)); } catch (e) { /* sin almacenamiento */ } }
  inc(obj, key, n = 1) { obj[key] = (obj[key] || 0) + n; this.dirty = true; }
  reset() { this.d = this.blank(); this.dirty = true; this.flush(); }
  // eventos
  startGame(mode, level, isNew) {
    if (isNew) { this.d.games++; this.inc(this.d.mode, mode); this.inc(this.d.level, level); const k = today(); this.inc(this.d.days, k); const keys = Object.keys(this.d.days).sort(); while (keys.length > 120) delete this.d.days[keys.shift()]; }
    else this.inc(this.d, 'cont');
    this.endSession(); this.sess = performance.now();
  }
  endSession() {
    if (!this.sess) return; const s = (performance.now() - this.sess) / 1000; this.sess = null; if (s < 5) return;
    this.d.sessions++; this.d.sessionSec += s; this.d.buckets[s < 120 ? 0 : s < 300 ? 1 : s < 600 ? 2 : s < 1200 ? 3 : 4]++; this.dirty = true;
  }
  mission(key) { this.inc(this.d.missions, key); }
  finished(mode) { this.inc(this.d.done, mode); }
  play(dt) { this.d.playSec += dt; this.dirty = true; }
  mgStart(type) { this.mg = { type, t0: performance.now() }; }
  mgEnd(ok) { const m = this.mg; if (!m) return; this.mg = null; const r = this.d.mg[m.type] = this.d.mg[m.type] || { n: 0, won: 0, sec: 0 }; r.n++; if (ok) { r.won++; r.sec += (performance.now() - m.t0) / 1000; } this.dirty = true; }
  // resumen en texto, para copiar a un informe
  text() {
    const d = this.d, avg = d.sessions ? d.sessionSec / d.sessions : 0, L = [];
    L.push(`Capi: Guardián de la Matriz Verde · Museo Energimundo`, `Estadísticas desde el ${fmtDate(d.since)} hasta el ${fmtDate(today())}`, '');
    L.push(`Partidas nuevas: ${d.games} (historia corta ${d.mode.corta}, historia larga ${d.mode.larga}) · Partidas continuadas: ${d.cont}`);
    L.push(`Nivel elegido: Explorador ${d.level.explorador}, Ingeniero ${d.level.ingeniero}`);
    L.push(`Historias terminadas: corta ${d.done.corta}, larga ${d.done.larga}`);
    L.push(`Visitas al juego: ${d.sessions} · Duración media: ${mmss(avg)} · Tiempo total jugado: ${mmss(d.playSec)}`);
    L.push('Duración de las visitas: ' + BUCKETS.map((b, i) => `${b}: ${d.buckets[i]}`).join(' · '));
    L.push(`Tutorial: empezado ${d.tut.start}, completo ${d.tut.done}, salteado ${d.tut.skip}`);
    L.push(`Chispas de saber encontradas: ${d.sparks} · Favores cumplidos: ${d.favors} · Juegos en la feria: ${d.feria}`);
    L.push('', 'Misiones completadas:'); for (const k in MIS) L.push(`  ${MIS[k]}: ${d.missions[k] || 0}`);
    L.push('', 'Minijuegos (jugados / completados / tiempo medio):'); for (const k in MG_NAMES) { const r = d.mg[k]; if (r) L.push(`  ${MG_NAMES[k]}: ${r.n} / ${r.won} / ${r.won ? Math.round(r.sec / r.won) + ' s' : '-'}`); }
    L.push('', 'Partidas nuevas por día:'); Object.keys(d.days).sort().forEach(k => L.push(`  ${fmtDate(k)}: ${d.days[k]}`));
    return L.join('\n');
  }
}

// ---------- Panel del modo guía ----------
export class Guide {
  constructor(game) {
    this.g = game; this.keys = []; this.confirm = 0;
    // detector de la palabra secreta: se registra antes que cualquier otro manejador de teclado
    window.addEventListener('keydown', e => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      const ch = (e.key || '').toLowerCase(); if (ch.length !== 1) return;
      const now = performance.now(); this.keys.push([ch, now]); while (this.keys.length > WORD.length) this.keys.shift();
      if (this.keys.map(k => k[0]).join('') === WORD && now - this.keys[0][1] < 15000) { const t0 = this.keys[0][1]; this.keys = []; e.preventDefault(); e.stopImmediatePropagation(); this.secret(t0); }
    }, { capture: true });
    $('gClose').onclick = () => this.close();
    $('gReset').onclick = () => { if (Date.now() - this.confirm < 4000) { game.stats.reset(); this.confirm = 0; $('gReset').textContent = 'Reiniciar estadísticas'; this.render(); } else { this.confirm = Date.now(); $('gReset').textContent = '¿Seguro? Tocá de nuevo para borrar'; } };
    $('gCopy').onclick = () => { const t = $('gText'); t.value = game.stats.text(); t.classList.remove('hidden'); t.focus(); t.select(); let ok = false; try { ok = document.execCommand('copy'); } catch (e) { ok = false; } $('gCopy').textContent = ok ? 'Resumen copiado' : 'Seleccionalo y copialo con Ctrl+C'; };
    $('gHour').addEventListener('input', e => { this.g.grid.hour = +e.target.value; this.render(); });
  }
  // la palabra se escribió: deshacer lo que esas teclas pudieron haber hecho y abrir el panel
  secret(t0) {
    const g = this.g;
    if (g.muteAt && g.muteAt > t0) g.toggleMute();
    if (g.mg.active && g.mg.startedAt > t0) g.mg.cancel();
    if (g.extras.open === 'guide') return this.close();
    if (g.attract) g.stopAttract();
    if (g.extras.open && g.extras.open !== 'guide') { const o = g.extras.open; $(o).classList.add('hidden'); g.extras.open = null; }
    g.extras.open = 'guide'; $('guide').classList.remove('hidden'); g.audio.click(); this.confirm = 0; $('gReset').textContent = 'Reiniciar estadísticas'; $('gCopy').textContent = 'Copiar resumen'; $('gText').classList.add('hidden');
    this.build(); this.render();
  }
  close() { if (this.g.extras.open === 'guide') { $('guide').classList.add('hidden'); this.g.extras.open = null; this.g.stats.flush(); } }
  btn(label, fn, cls = '') { const b = document.createElement('button'); b.type = 'button'; b.className = 'btn ghost ' + cls; b.innerHTML = label; b.onclick = () => { fn(); this.render(); }; return b; }
  build() {
    const g = this.g, M = g.missions, G = g.grid, box = $('gActions'); box.textContent = '';
    const sec = (title, ...kids) => { const s = document.createElement('section'); const h = document.createElement('h3'); h.textContent = title; s.appendChild(h); const row = document.createElement('div'); row.className = 'gRow'; kids.forEach(k => row.appendChild(k)); s.appendChild(row); box.appendChild(s); return row; };
    const jump = (mode, phase) => () => { this.close(); g.play(mode, phase, null, M.level || 'ingeniero', { guide: true }); };
    const seqs = { corta: ['viento', 'rio', 'sol', 'urbano', 'pico'], larga: ['viento', 'rio', 'sol', 'urbano', 'ahorro', 'tormenta', 'pico'] };
    for (const mode of ['corta', 'larga']) sec(mode === 'corta' ? 'Ir a la historia corta' : 'Ir a la historia larga', ...seqs[mode].map((k, i) => this.btn(`<b>${i + 1}</b> ${MIS[k]}`, jump(mode, i), 'gMis')), this.btn('Modo libre', jump(mode, seqs[mode].length), 'gMis'));
    sec('Partida', this.btn('Nueva partida con tutorial', () => { this.close(); g.play('larga', 0, null, M.level || 'ingeniero', { guide: true, tutorial: true }); }), this.btn('Volver al título', () => { this.close(); if (g.mode === 'play') g.toTitle(); }));
    sec('Hora y clima', this.btn('Amanecer con neblina', () => { G.hour = 6.4; }), this.btn('Mediodía', () => { G.hour = 12; }), this.btn('Atardecer', () => { G.hour = 18.4; }), this.btn('Noche', () => { G.hour = 21.5; }),
      this.btn('Tormenta', () => { G.cloudTarget = 0.95; G.cloud = 0.95; G.windTarget = 1; }), this.btn('Despejar', () => { G.cloudTarget = 0; G.cloud = Math.min(G.cloud, 0.3); }),
      this.btn('', () => { if (g.clockStopped != null) { G.clockRate = g.clockStopped; g.clockStopped = null; } else { g.clockStopped = G.clockRate; G.clockRate = 0; } }, 'gClock'));
    sec('Red eléctrica', this.btn('Provocar una avería', () => { if (g.mode === 'play') M.randomFault(); }), this.btn('Reparar todo', () => M.clearFaults()), this.btn('', () => g.setPaused(!g.paused), 'gPause'));
    sec('Pantalla', Object.assign(this.btn('', () => window.__capiSettings.setBig(!window.__capiSettings.big), 'bigToggle'), {}));
    const S = window.__capiSettings, mark = () => { box.querySelectorAll('.gFest').forEach(b => { const on = (S.fest || '') === b.dataset.fest; b.classList.toggle('gSel', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); }); const kb = box.querySelector('.gKick'); if (kb) { kb.disabled = !S.fest; kb.title = { carnaval: 'Pone el atardecer y trae las llamadas a la rambla', patrimonio: 'Pone la mañana y arranca la visita guiada en la plaza', fiestas: 'Cuenta regresiva y fuegos de Año Nuevo', criolla: 'Pone la tarde y arranca el desfile de tropillas en el ruedo', museos: 'Pone la noche y arranca la proyección en la torre' }[S.fest] || 'Primero elegí una fiesta'; } };
    const kick = this.btn('¡Empezar la fiesta ahora!', () => { this.close(); g.fiestas.kick(); }, 'gKick');
    sec('Fiestas (decoración de temporada)', ...[['', 'Sin fiesta'], ['carnaval', 'Carnaval'], ['criolla', 'Semana Criolla'], ['patrimonio', 'Día del Patrimonio'], ['museos', 'Museos en la Noche'], ['fiestas', 'Fin de año']].map(([k, label]) => { const b = this.btn(label, () => { S.setFest(k); mark(); }, 'gFest'); b.dataset.fest = k; return b; }), kick);
    mark();
    window.__capiSettings.apply();
  }
  render() {
    const g = this.g, d = g.stats.d, G = g.grid; g.stats.flush();
    $('gHour').value = G.hour; $('gHourV').textContent = `${String(Math.floor(G.hour) % 24).padStart(2, '0')}:${String(Math.floor((G.hour % 1) * 60)).padStart(2, '0')}`;
    document.querySelectorAll('.gClock').forEach(b => { b.textContent = g.clockStopped != null ? 'Reanudar el reloj' : 'Detener el reloj'; });
    document.querySelectorAll('.gPause').forEach(b => { b.textContent = g.paused ? 'Reanudar el juego' : 'Pausar el juego'; });
    $('gSince').textContent = fmtDate(d.since);
    const avg = d.sessions ? d.sessionSec / d.sessions : 0, tiles = [
      ['Partidas nuevas', d.games, `corta ${d.mode.corta} · larga ${d.mode.larga}`], ['Historias terminadas', d.done.corta + d.done.larga, `corta ${d.done.corta} · larga ${d.done.larga}`],
      ['Duración media de la visita', mmss(avg), `${d.sessions} visitas`], ['Tiempo total jugado', mmss(d.playSec), `${d.cont} partidas continuadas`],
      ['Tutorial', `${d.tut.done} de ${d.tut.start}`, `completos · ${d.tut.skip} salteados`], ['Nivel elegido', `${d.level.explorador} / ${d.level.ingeniero}`, 'Explorador / Ingeniero'],
      ['Chispas encontradas', d.sparks, `${d.favors} favores cumplidos`], ['Feria de minijuegos', d.feria, 'juegos sueltos']];
    $('gTiles').innerHTML = tiles.map(([a, b, c]) => `<div class="gTile"><em>${a}</em><b>${b}</b><span>${c}</span></div>`).join('');
    // partidas por día (últimos 14 días)
    const cv = $('gDays'), x = cv.getContext('2d'), W = cv.width, H = cv.height, days = [];
    for (let i = 13; i >= 0; i--) { const t = new Date(Date.now() - i * 864e5), k = t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0'); days.push([k, d.days[k] || 0, t]); }
    const mx = Math.max(1, ...days.map(q => q[1])); x.clearRect(0, 0, W, H); x.font = '700 11px Nunito, sans-serif'; x.textAlign = 'center';
    days.forEach(([k, n, t], i) => { const bw = (W - 20) / 14, bx = 10 + i * bw, bh = (H - 38) * n / mx; x.fillStyle = i === 13 ? '#ffc93c' : '#4fc3f7'; x.fillRect(bx + 3, H - 20 - bh, bw - 6, Math.max(n ? 2 : 0, bh)); x.fillStyle = '#a9bbd6'; x.fillText(String(t.getDate()), bx + bw / 2, H - 6); if (n) { x.fillStyle = '#fff7e6'; x.fillText(String(n), bx + bw / 2, H - 25 - bh); } });
    // misiones y minijuegos
    $('gMis').innerHTML = Object.keys(MIS).map(k => `<tr><td>${MIS[k]}</td><td>${d.missions[k] || 0}</td></tr>`).join('');
    const mgs = Object.keys(MG_NAMES).filter(k => d.mg[k]).sort((a, b) => d.mg[b].n - d.mg[a].n);
    $('gMg').innerHTML = mgs.length ? mgs.map(k => { const r = d.mg[k]; return `<tr><td>${MG_NAMES[k]}</td><td>${r.n}</td><td>${r.won}</td><td>${r.won ? Math.round(r.sec / r.won) + ' s' : '-'}</td></tr>`; }).join('') : '<tr><td colspan="4">Todavía no se jugó ningún minijuego.</td></tr>';
  }
}
