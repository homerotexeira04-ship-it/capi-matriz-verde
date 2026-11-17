// Navegación automática: grilla de transitabilidad + A* para que el clic en el terreno rodee edificios, cercos y ríos.
import { B, waterAt } from './terrain.js';

export class NavGrid {
  constructor(world) {
    const N = this.N = Math.round((B.maxX - B.minX) / 1.25), cell = this.cell = (B.maxX - B.minX) / N, n = N * N;
    this.h = new Float32Array(n); this.ok = new Uint8Array(n); this.water = new Uint8Array(n); this.deck = new Uint8Array(n);
    for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
      const x = B.minX + (i + 0.5) * cell, z = B.minZ + (j + 0.5) * cell, c = j * N + i, g = world.groundAt(x, z), wl = waterAt(x, z);
      this.ok[c] = 1;
      if (g < wl - 1.2) { this.water[c] = 1; this.h[c] = wl; } else { this.h[c] = g; if (g - world.terrainAt(x, z) > 0.5) this.deck[c] = 1; }
    }
    const R = 0.62, ci = v => Math.max(0, Math.min(N - 1, Math.floor((v - B.minX) / cell))), cj = v => Math.max(0, Math.min(N - 1, Math.floor((v - B.minZ) / cell)));
    for (const b of world.boxes) for (let j = cj(b.z0 - R); j <= cj(b.z1 + R); j++) for (let i = ci(b.x0 - R); i <= ci(b.x1 + R); i++) {
      const x = B.minX + (i + 0.5) * cell, z = B.minZ + (j + 0.5) * cell, c = j * N + i;
      if (x >= b.x0 - R && x <= b.x1 + R && z >= b.z0 - R && z <= b.z1 + R && b.top > this.h[c] + 0.72) this.ok[c] = 0;
    }
    for (const o of world.circles) {
      if (!o.r) continue; const rr = o.r + 0.5;
      for (let j = cj(o.z - rr); j <= cj(o.z + rr); j++) for (let i = ci(o.x - rr); i <= ci(o.x + rr); i++) { const x = B.minX + (i + 0.5) * cell, z = B.minZ + (j + 0.5) * cell; if ((x - o.x) ** 2 + (z - o.z) ** 2 < rr * rr) this.ok[j * N + i] = 0; }
    }
    this.gs = new Float32Array(n); this.from = new Int32Array(n); this.closed = new Uint8Array(n); this.heap = [];
  }
  idx(x, z) { const N = this.N; return Math.max(0, Math.min(N - 1, Math.floor((z - B.minZ) / this.cell))) * N + Math.max(0, Math.min(N - 1, Math.floor((x - B.minX) / this.cell))); }
  cx(c) { return B.minX + ((c % this.N) + 0.5) * this.cell; }
  cz(c) { return B.minZ + (Math.floor(c / this.N) + 0.5) * this.cell; }
  can(a, b) {
    if (!this.ok[b]) return false;
    const d = this.h[b] - this.h[a];
    if (d > 2.0 || d < -3.2) return false;
    if (this.water[a] && this.deck[b]) return false;
    return true;
  }
  nearest(c, rad) {
    if (this.ok[c]) return c;
    const N = this.N, i0 = c % N, j0 = Math.floor(c / N); let best = -1, bd = 1e9;
    for (let j = Math.max(0, j0 - rad); j <= Math.min(N - 1, j0 + rad); j++) for (let i = Math.max(0, i0 - rad); i <= Math.min(N - 1, i0 + rad); i++) { const k = j * N + i; if (!this.ok[k]) continue; const d = (i - i0) ** 2 + (j - j0) ** 2 + Math.abs(this.h[k] - this.h[c]) * 4; if (d < bd) { bd = d; best = k; } }
    return best;
  }
  los(a, b) {
    const ax = this.cx(a), az = this.cz(a), bx = this.cx(b), bz = this.cz(b), n = Math.ceil(Math.hypot(bx - ax, bz - az) / (this.cell * 0.45));
    let prev = a;
    for (let k = 1; k <= n; k++) { const c = this.idx(ax + (bx - ax) * k / n, az + (bz - az) * k / n); if (c === prev) continue; if (!this.can(prev, c) || this.water[c] !== this.water[a]) return false; prev = c; }
    return true;
  }
  // Devuelve una lista de puntos {x,z} o null si no hay camino.
  find(sx, sz, gx, gz) {
    const N = this.N, s = this.nearest(this.idx(sx, sz), 5); let g = this.nearest(this.idx(gx, gz), 7);
    if (s < 0) return null; if (g < 0) g = this.idx(gx, gz);
    const gs = this.gs, from = this.from, closed = this.closed, heap = this.heap; gs.fill(Infinity); closed.fill(0); heap.length = 0;
    const gi = g % N, gj = Math.floor(g / N);
    const hcost = c => { const dx = Math.abs((c % N) - gi), dz = Math.abs(Math.floor(c / N) - gj); return Math.max(dx, dz) + 0.414 * Math.min(dx, dz); };
    const push = (f, c) => { heap.push([f, c]); let i = heap.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
    const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; for (;;) { const l = i * 2 + 1, r = l + 1; let m = i; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } } return top; };
    gs[s] = 0; from[s] = -1; push(hcost(s), s);
    let found = false, best = s, bd = 1e9;
    while (heap.length) {
      const c = pop()[1]; if (closed[c]) continue; closed[c] = 1; if (c === g) { found = true; break; }
      const d = (this.cx(c) - gx) ** 2 + (this.cz(c) - gz) ** 2; if (d < bd) { bd = d; best = c; }
      const i = c % N, j = Math.floor(c / N);
      for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
        if (!di && !dj) continue; const ni = i + di, nj = j + dj; if (ni < 0 || nj < 0 || ni >= N || nj >= N) continue;
        const k = nj * N + ni; if (closed[k] || !this.can(c, k)) continue;
        if (di && dj && (!this.can(c, j * N + ni) || !this.can(c, nj * N + i))) continue;
        const cost = gs[c] + (di && dj ? 1.414 : 1) * (this.water[k] ? 1.8 : 1) + Math.max(0, this.h[k] - this.h[c]) * 0.3;
        if (cost < gs[k]) { gs[k] = cost; from[k] = c; push(cost + hcost(k), k); }
      }
    }
    // Destino inalcanzable (isla, techo, patio cerrado): se va hasta la celda alcanzable más cercana
    if (!found) { if (best === s) return null; g = best; }
    const cells = []; for (let c = g; c !== -1; c = from[c]) cells.push(c); cells.reverse();
    const out = []; let i = 0;
    while (i < cells.length - 1) { let j = Math.min(cells.length - 1, i + 60); while (j > i + 1 && !this.los(cells[i], cells[j])) j--; out.push({ x: this.cx(cells[j]), z: this.cz(cells[j]) }); i = j; }
    if (found && this.ok[this.idx(gx, gz)] && out.length) { out[out.length - 1] = { x: gx, z: gz }; }
    return out;
  }
}
