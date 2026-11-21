// Medidor de cuadros para el personal (se prende desde el modo SuperCapi; los visitantes no lo ven si no se prende).
// Muestra cuadros por segundo, tiempo medio por cuadro, el peor cuadro de los últimos segundos y los tirones (cuadros
// de más de 50 ms), con la hora y qué estaba pasando en el último, para saber dónde se traba en la PC del museo.
const $ = id => document.getElementById(id);
const f1 = v => v.toFixed(1).replace('.', ',');
const mmss = s => Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');

export class Medidor {
  constructor(g) { this.g = g; this.on = false; this.el = null; this.reset(); }
  reset() { this.t = []; this.n50 = 0; this.n100 = 0; this.since = performance.now(); this.last = null; this.acc = 0; }
  toggle() {
    this.on = !this.on; if (this.on) { this.reset(); this.mount(); }
    if (this.el) this.el.classList.toggle('hidden', !this.on);
  }
  mount() { if (this.el) return; const e = this.el = document.createElement('div'); e.id = 'fpsBox'; e.setAttribute('aria-hidden', 'true'); document.body.appendChild(e); }
  where() {
    const g = this.g, z = $('zone'), bits = [g.mode === 'play' ? 'jugando' : 'portada'];
    if (g.mode === 'play' && z && z.textContent) bits.push(z.textContent);
    if (g.fiestas && g.fiestas.mode) bits.push(g.fiestas.mode); if (g.mg && g.mg.active) bits.push('minijuego'); if (g.panel) bits.push('panel de red');
    return bits.join(' · ');
  }
  // real: segundos desde el cuadro anterior; now: hora del cuadro (ms)
  frame(real, now) {
    if (!this.on) return;
    const ms = real * 1000; if (ms > 3000) return;   // la pestaña estuvo oculta: no cuenta
    this.t.push([now, ms]); while (this.t.length && now - this.t[0][0] > 5000) this.t.shift();
    if (ms > 50) { this.n50++; if (ms > 100) this.n100++; const d = new Date(); this.last = { ms, at: String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0') + ':' + String(d.getSeconds()).padStart(2, '0'), where: this.where() }; }
    if ((this.acc += real) < 0.25) return; this.acc = 0;   // el texto se refresca cuatro veces por segundo
    const sec = this.t.filter(q => now - q[0] <= 1000), avg = sec.reduce((s, q) => s + q[1], 0) / Math.max(1, sec.length);
    const worst = this.t.reduce((m, q) => Math.max(m, q[1]), 0), r = this.g.renderer, cv = r.domElement;
    const L = [
      `${sec.length} cuadros/s · ${f1(avg)} ms`,
      `peor de 5 s: ${Math.round(worst)} ms`,
      `tirones: ${this.n50} (>50 ms) · ${this.n100} fuertes en ${mmss((now - this.since) / 1000)}`,
      this.last ? `último: ${Math.round(this.last.ms)} ms · ${this.last.at}\n  ${this.last.where}` : 'último: ninguno',
      `dibujos: ${r.info.render.calls} · ${cv.width}×${cv.height}`];
    this.el.textContent = L.join('\n');
  }
}
