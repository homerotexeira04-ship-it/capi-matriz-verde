// La vía del ferrocarril como recorrido: sale de la estación de Salto (en la ciudad, al este del centro, como la
// estación real del Midland), baja recta hacia el sur entre manzanas, dobla en curva hacia el este y sigue por la pradera.
// s = metros recorridos desde el tope de la vía, al norte del andén.
import { lerp, smooth, clamp } from './util.js';

export const RX = 15.8, RZ0 = 29.6, RZ1 = 196, RR = 51, RZE = 247, REND = 345;
const CX = RX + RR, CZ = RZ1;
export const L1 = RZ1 - RZ0, LA = RR * Math.PI / 2, L3 = REND - CX;
export const RAIL_L = L1 + LA + L3;
export const S_CITY = 92.5 - RZ0;   // hasta acá la vía va entre manzanas, a nivel de la calle
export const S_HOME = 13;           // donde para el tren: los dos coches junto al andén

// punto y dirección de la vía en s
export function railXZ(s, out = {}) {
  if (s <= L1) { out.x = RX; out.z = RZ0 + s; out.dx = 0; out.dz = 1; }
  else if (s <= L1 + LA) { const th = Math.PI - (s - L1) / RR; out.x = CX + RR * Math.cos(th); out.z = CZ + RR * Math.sin(th); out.dx = Math.sin(th); out.dz = -Math.cos(th); }
  else { out.x = CX + (s - L1 - LA); out.z = RZE; out.dx = 1; out.dz = 0; }
  return out;
}
// altura de los rieles: a nivel de la calle en la ciudad y sobre el terraplén en el campo
export function railY(s) { const p = railXZ(s); return lerp(2.45, 2.9 + 1.2 * smooth(-40, 140, p.x), smooth(S_CITY, S_CITY + 50, s)); }
// distancia a la vía y s del punto más cercano
export function railNear(x, z, out = {}) {
  let d = 1e9, s = 0;
  { const zc = clamp(z, RZ0, RZ1), dd = Math.hypot(x - RX, z - zc); if (dd < d) { d = dd; s = zc - RZ0; } }
  { const dx = x - CX, dz = z - CZ, th = Math.atan2(dz, dx); if (th >= Math.PI / 2 && th <= Math.PI) { const dd = Math.abs(Math.hypot(dx, dz) - RR); if (dd < d) { d = dd; s = L1 + (Math.PI - th) * RR; } } }
  { const xc = clamp(x, CX, REND), dd = Math.hypot(x - xc, z - RZE); if (dd < d) { d = dd; s = L1 + LA + (xc - CX); } }
  out.d = d; out.s = s; return out;
}
// orientación (rotación y) de algo cuyo eje x local apunta a lo largo de la vía
export const railRot = p => -Math.atan2(p.dz, p.dx);
