// Pantalla de carga real. Cada etapa pesa lo que tardó la última vez en esta misma PC (se guarda), así la barra
// avanza en proporción al trabajo de verdad. Mientras el procesador está ocupado construyendo, la barra sigue
// caminando sola hacia el final de la etapa (la anima el compositor del navegador, no el programa) y, cuando la
// etapa termina, se acomoda al valor exacto. El juego no se puede tocar hasta que todo esté listo.
const KEY = 'capi-carga-v1';
const $ = id => document.getElementById(id);
const clamp01 = v => Math.max(0, Math.min(1, v));
export const nextFrame = () => new Promise(r => requestAnimationFrame(() => setTimeout(r, 0)));
const wait = ms => new Promise(r => setTimeout(r, ms));

// se leen después de "¿Sabías que…?"; los de teclado solo se muestran si hay teclado y mouse
const TIPS = [
  'casi toda la electricidad de Uruguay sale de fuentes renovables: agua, viento, sol y biomasa?',
  'la represa de Salto Grande tiene 14 turbinas Kaplan de 135 MW? Entre todas suman 1890 MW.',
  'el carpincho es el roedor más grande del mundo? Capi vive a orillas del río Uruguay.',
  { k: 'con la tecla N se abre el mapa grande de la maqueta?' },
  'en Energimundo hay una maqueta en corte de una unidad de la represa? Acercate y mirala por dentro.',
  'las baterías guardan la energía del sol del mediodía para usarla cuando oscurece?',
  'de noche, mirando al sur, se ve la Cruz del Sur con sus dos estrellas punteras?',
  { k: 'con la tecla P entrás al modo foto, y con la C le ponés el marco de postal?' },
  'cada vecino de la maqueta te cuenta algo distinto sobre la energía de Salto?',
  'alejando la cámara (con la rueda del mouse o pellizcando la pantalla) se ve la maqueta entera?'
];

export class Loader {
  // steps: [{ id, label, ms }] — ms es lo que suele tardar mientras esta PC no lo haya medido
  constructor(steps) {
    this.steps = steps; this.meas = {}; this.done = 0; this.tainted = !!document.hidden;
    let saved = {}; try { saved = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { saved = {}; }
    this.exp = steps.map(s => Math.max(30, Math.min(60000, +saved[s.id] || s.ms)));
    this.total = this.exp.reduce((a, b) => a + b, 0);
    // la descarga del juego (la hace el cargador chico de index.html): ya ocupa el principio de la barra
    this.dl = window.__cgDl || null;
    this.base = this.dl ? clamp01(Math.max(this.dl.share || 0, this.dl.ms / (this.dl.ms + this.total))) : 0;
    this.el = { root: $('carga'), fill: $('cgFill'), run: $('cgRun'), bar: $('cgBar'), pct: $('cgPct'), label: $('cgLabel'), tip: $('cgTip') };
    const fine = !window.matchMedia || window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    this.tips = TIPS.filter(t => typeof t === 'string' || fine).map(t => typeof t === 'string' ? t : t.k);
    // si la pestaña queda en segundo plano el navegador frena la carga: esa vez no se usa para medir
    this.onVis = () => { if (document.hidden) this.tainted = true; };
    document.addEventListener('visibilitychange', this.onVis);
    this.tipI = Math.floor(Math.random() * this.tips.length); this.showTip();
    this.tipT = setInterval(() => { this.tipI = (this.tipI + 1) % this.tips.length; this.showTip(); }, 4500);
  }
  showTip() {
    const t = this.el.tip; if (!t) return;
    t.classList.remove('in'); void t.offsetWidth; t.textContent = this.tips[this.tipI]; t.classList.add('in');
  }
  at(frac) { return this.base + (1 - this.base) * clamp01(frac); }
  bar(frac, ms) {
    const v = this.at(frac), dur = ms > 0 ? Math.round(ms) + 'ms' : '180ms', fn = ms > 0 ? 'linear' : 'ease-out';
    for (const [el, tr] of [[this.el.fill, `scaleX(${v.toFixed(4)})`], [this.el.run, `translateX(${(v * 100).toFixed(2)}%)`]]) {
      if (!el) continue; el.style.transitionDuration = dur; el.style.transitionTimingFunction = fn; el.style.transform = tr;
    }
  }
  text(label, frac) {
    if (label && this.el.label) this.el.label.textContent = label;
    const p = Math.floor(this.at(frac) * 100);
    if (this.el.pct) this.el.pct.textContent = p + ' %';
    if (this.el.bar) { this.el.bar.setAttribute('aria-valuenow', String(p)); if (label) this.el.bar.setAttribute('aria-valuetext', label); }
  }
  // Una etapa. fn puede ser sincrónica o asincrónica; recibe sub(u) para contar su avance interno (0..1):
  // "await sub(u)" además deja dibujar un cuadro, así se ve el porcentaje.
  async step(id, fn) {
    const k = this.steps.findIndex(s => s.id === id); if (k < 0) throw new Error('etapa desconocida: ' + id);
    const s = this.steps[k], e = this.exp[k], a = this.done / this.total, b = (this.done + e) / this.total;
    this.text(s.label, a); this.bar(a + (b - a) * 0.94, e * 1.05);   // la barra camina sola mientras se trabaja
    await nextFrame();
    const t0 = performance.now();
    const sub = u => {
      u = clamp01(u); const rest = (e * 1.05) - (performance.now() - t0);
      this.text(null, a + (b - a) * u); this.bar(a + (b - a) * Math.max(u, 0.94), Math.max(150, rest));
      return nextFrame();
    };
    const out = await fn(sub);
    this.meas[id] = performance.now() - t0; this.done += e;
    this.bar(b, 0); this.text(null, b);
    return out;
  }
  // guarda cuánto tardó cada etapa en esta PC, para que la próxima barra sea todavía más fiel
  save() {
    if (this.tainted || document.hidden) return;
    let saved = {}; try { saved = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { saved = {}; }
    const mix = (old, ms) => Math.round(old > 0 ? old * 0.35 + ms * 0.65 : ms);
    for (const [id, ms] of Object.entries(this.meas)) saved[id] = mix(+saved[id], ms);
    if (this.dl) saved.descarga = mix(+saved.descarga, this.dl.ms);
    saved._rest = this.steps.reduce((a, s) => a + (+saved[s.id] || s.ms), 0);   // para que el cargador chico sepa cuánto pesa la descarga
    try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (e) { /* sin almacenamiento: no pasa nada */ }
  }
  stop() { clearInterval(this.tipT); document.removeEventListener('visibilitychange', this.onVis); }
  // todo listo: la barra se completa, se dice y la pantalla se abre
  async finish() {
    this.save(); this.stop(); this.bar(1, 0); this.text('¡Listo para jugar!', 1);
    const r = this.el.root; if (!r) return;
    r.classList.add('ok'); await wait(450);
    r.classList.add('out'); await wait(620);
    r.hidden = true;
  }
  fail(err, kiosk) {
    this.stop(); console.error(err);
    const r = this.el.root; if (!r) return; r.classList.add('err'); r.hidden = false;
    if (this.el.label) this.el.label.textContent = 'No se pudo cargar el juego';
    const box = $('cgErr'), msg = $('cgMsg'), btn = $('cgRetry');
    let m = (err && err.message) ? err.message : String(err || 'Error desconocido');
    if (/webgl|context/i.test(m)) m = 'Esta computadora o este navegador no pudo abrir los gráficos 3D (WebGL). Probá con otro navegador o actualizá el controlador de la placa de video. (' + m + ')';
    if (msg) msg.textContent = m;
    if (box) box.hidden = false;
    if (btn) { btn.onclick = () => location.reload(); btn.focus(); }
    if (kiosk) setTimeout(() => location.reload(), 15000);   // en el kiosco vuelve a intentar solo
  }
}
