// La vía del ferrocarril como recorrido. La estación de Salto (la del Noroeste, obra del ingeniero Wilkinson) está en el
// barrio del puerto, junto al río Uruguay: acá queda en la costanera, al sur del puerto. La vía sale de la estación y baja
// recta hacia el sur por la costa, cruza el río Daymán por un puente de hierro y sigue hasta el borde de la maqueta
// (rumbo a Paysandú, como la línea real).
// s = metros recorridos desde el tope de la vía, al norte del andén.
import { lerp, smooth, clamp } from './util.js';

export const RX = -81.5, RZ0 = 99.6, REND = 369.2;   // la vía termina en el borde sur de la maqueta (z = 370)
export const L1 = REND - RZ0;
export const RAIL_L = L1;
export const S_OUT = RAIL_L - 12.3;   // con el tren en s, la punta del coche delantero está en s + 12,2: acá llega al borde
export const S_CITY = 50;             // hasta acá, el área ferroviaria (andén, galpones): la vía va a nivel
export const S_HOME = 13;             // donde para el tren: los dos coches junto al andén
export const PUENTE_DAYMAN = [312, 350];   // tramo del puente de hierro sobre el Daymán (z)

// punto y dirección de la vía en s
export function railXZ(s, out = {}) { out.x = RX; out.z = RZ0 + s; out.dx = 0; out.dz = 1; return out; }
// altura de los rieles: a nivel en el área de la estación y sobre un terraplén bajo en el campo
export function railY(s) { return lerp(2.45, 2.9, smooth(S_CITY, S_CITY + 40, s)); }
// distancia a la vía y s del punto más cercano
export function railNear(x, z, out = {}) { const zc = clamp(z, RZ0, REND); out.d = Math.hypot(x - RX, z - zc); out.s = zc - RZ0; return out; }
// orientación (rotación y) de algo cuyo eje x local apunta a lo largo de la vía
export const railRot = p => -Math.atan2(p.dz, p.dx);
