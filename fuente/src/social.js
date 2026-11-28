// Vida social: personajes nuevos, preguntas, favores con premio, vecinos que reaccionan,
// feria de minijuegos y álbum de chispas.
import * as THREE from 'three';
import { POS } from './terrain.js';
import { makePerson } from './actors.js';
import { sign } from './sectors.js';
import { rng } from './util.js';
import { NAMES } from './ui.js';

const $ = id => document.getElementById(id);
const L = (who, text) => ({ who, text });
const PEN = { x0: 23.5, x1: 31.5, z0: 37.5, z1: 44.5, g0: 26, g1: 29 };   // corral: tranquera sobre el lado norte
const METERS = [[-36, 53.5, 'la Plaza Artigas', 0.08], [-82.2, 28.6, 'la costanera', 0.15], [5.6, 72.6, 'el bulevar', 0.22]];
const NEW = { rosa: [68, -61.3, 0.2], beto: [-97, 78.4, 0], sofi: [28.6, 284.9, 2.6], guia: [-51.5, 45.5, 1.2], mamavieja: [-36.6, 40.6, 0.4], marta: [-44, 37.2, 0], papanoel: [-34, 42.6, -0.5], payador: [56.6, 19.0, 0.3], nico: [-35.2, 43.8, -0.9], graciela: [-169.6, 51.2, 1.86], quiroga: [-35.4, -51.4, -2.2] };
// Personajes que solo aparecen con su fiesta (modo festivo del modo guía)
const FEST_NPC = { mamavieja: 'carnaval', marta: 'patrimonio', papanoel: 'fiestas', payador: 'criolla', nico: 'museos' };
const PAS = [2, 3, 4];
export const CLEAR2 = [[22, 33.5, 36, 46.5]];

// Postales de los alumnos de Graciela (favor en Concordia): a quién se le entrega cada una y qué contesta
const POST = { beto: 0, guia: 1, lucia: 2 };
const POSTR = {
  beto: '¡Una postal de los gurises de Concordia! Me dibujaron un dorado. Del otro lado se pescan los mismos peces: el río no tiene frontera.',
  guia: '¡Qué lindo! Mis alumnos de Salto les van a contestar con otra postal. Y en la próxima visita cruzamos todos juntos en el internacional.',
  lucia: '¡Me dibujaron arriba del ómnibus! Decile a Graciela que los esperamos en la terminal: el internacional los trae en un rato.'
};
// Placa del monumento a Artigas de la Plaza Artigas de Salto
const MON = [
  'Monumento al General José Gervasio Artigas, obra de Edmundo Prati, escultor nacido en Paysandú que trabajó muchos años en Salto. Se inauguró el 29 de setiembre de 1940.',
  'Prati lo quiso «joven y fuerte, vigoroso y severo», a caballo, «como anduvo en la vida y como van los héroes». Los bronces se fundieron en Italia y llegaron en barco.',
  'A los lados están el ciudadano y el gaucho. Detrás, las palmeras representan al pueblo de la Redota que marcha hacia el norte, detrás de Artigas.',
  '¿Por qué hacia el norte? En 1811 Artigas marchó al norte con miles de orientales: es el Éxodo del Pueblo Oriental, la Redota.',
  'En diciembre de 1811 acamparon casi un mes en el Salto, frente a los saltos del río Uruguay, y después cruzaron al campamento del Ayuí, en la otra orilla.',
  'La plaza se llamó primero Plaza 18 de Julio y la gente le decía «la plaza nueva»: a comienzos del siglo XX el centro de Salto se fue corriendo desde el puerto hacia el este, hasta acá. Desde 1940 se llama Plaza Artigas. Está entre las calles Uruguay, Artigas, 25 de Agosto y 18 de Julio.',
  'José Gervasio Artigas nació en Montevideo en 1764 y murió en el Paraguay en 1850, después de treinta años de exilio. Defendió la libertad de los pueblos y el federalismo, y en 1815 dictó un reglamento para repartir tierras entre los más pobres.'
];
// Otras placas para leer con E
const PLACAS = {
  artigas: { label: 'Leer la placa del monumento a Artigas', t: MON },
  pozo: { label: 'Leer la placa del pozo termal', t: [
    'Pozo de las Termas del Daymán. Lo perforaron buscando petróleo… y salió agua caliente.',
    'El agua viene del Acuífero Guaraní, una de las reservas de agua subterránea más grandes del mundo, que comparten Uruguay, Argentina, Brasil y Paraguay. Sube sola, por su propia presión, desde unos 2.000 metros de profundidad.',
    'Sale a unos 46 °C: es la más caliente de las termas uruguayas. En las piscinas el agua llega hasta unos 44 °C.',
    'Es calor de la Tierra: geotermia. Acá se usa para bañarse y para el turismo, que es el trabajo de mucha gente del pueblo.'] },
  mhyt: { label: 'Leer la placa del Museo del Hombre y la Tecnología', t: [
    'Museo del Hombre y la Tecnología. El edificio se construyó entre 1909 y 1915 para el Mercado Central de Salto, obra del arquitecto Domingo F. Rocco.',
    'Adentro se recorre cómo la tecnología fue cambiando la vida de la gente de la región, y hay una sala dedicada a la represa de Salto Grande y a cómo funciona.',
    'Es Monumento Histórico Nacional y la entrada es gratis.'] },
  casaq: { label: 'Leer la placa de la Casa Quiroga', t: [
    'Casa Quiroga. Esta casa quinta de las afueras de Salto era de la familia de Horacio Quiroga, la sucesión de su padre, Prudencio. Él pasaba temporadas acá.',
    'Desde 2003 es museo, mausoleo y centro cultural, y en 2009 se declaró Monumento Histórico Nacional. Hoy está en la zona norte de la ciudad, en la avenida Líber Seregni esquina Maciel.',
    'Horacio Quiroga nació en Salto el 31 de diciembre de 1878 y murió en Buenos Aires en 1937. Es uno de los grandes cuentistas de América Latina.'] },
  urna: { label: 'Leer la placa de la urna', t: [
    'Urna con las cenizas de Horacio Quiroga. La talló en madera de algarrobo, con la forma de su cabeza, el escultor ruso-argentino Stefan Erzia.',
    'Desde 2003 descansa acá, en el jardín de su casa de Salto.'] },
  crec: { label: 'Mirar la marca de la creciente', t: [
    'Marca de la creciente de 1959, la más grande que se recuerda en Salto: el río Uruguay llegó hasta acá.',
    'La estación está junto al río, en el barrio del puerto. Las crecientes inundaban seguido la planta baja, y después de cada una había que limpiar y arreglar todo.',
    'La proyectó el ingeniero Arturo Rodolfo Wilkinson. Con sus dos galpones, la chimenea y el edificio de al lado, es Monumento Histórico Nacional desde 2010. Hoy los galpones se usan para teatro, pintura y candombe.'] }
};
// Horacio Quiroga (Salto, 1878 – Buenos Aires, 1937), en su casa quinta de Salto. Es una recreación: lo que cuenta sale de su
// biografía y de su obra; lo más duro de su vida se nombra con cuidado, porque el juego lo usan chicos.
const QUIROGA_Q = [
  ['¿Quién sos?', 'Escribí cuentos. Muchos dicen que fui uno de los grandes cuentistas de América Latina. Escribí sobre la selva, los animales y la gente que vive en lugares difíciles.'],
  ['¿Cómo fue tu juventud en Salto?', 'Me encantaban las máquinas y la bicicleta: fundé la Sociedad de Ciclismo de Salto y fui pedaleando hasta Paysandú, ¡unos 120 kilómetros! En 1899 fundé la Revista de Salto, y en 1900 viajé a París a ver la Exposición Universal.'],
  ['¿Qué tiene que ver Misiones?', 'En 1903 fui como fotógrafo, con el escritor Leopoldo Lugones, a las ruinas jesuíticas de Misiones, en Argentina. La selva me atrapó: después viví en San Ignacio, fui juez de paz, planté yerba mate y naranjos ¡y hasta destilé licor de naranja!'],
  ['¿Qué libros escribiste?', 'Cuentos de amor, de locura y de muerte (1917), Cuentos de la selva (1918), Anaconda (1921), El desierto (1924) y Los desterrados (1926), entre otros. Los Cuentos de la selva son para chicos: los protagonistas son animales.'],
  ['¿Algún consejo para escribir?', 'En mi «Decálogo del perfecto cuentista» puse, por ejemplo: «No escribas bajo el imperio de la emoción. Déjala morir, y evócala luego». Y antes que nada: leé mucho a los que admirás.'],
  ['¿Qué pasó después?', 'Trabajé en el consulado del Uruguay en Buenos Aires, y en 1932 volví a San Ignacio como cónsul. Morí en Buenos Aires en 1937. Mi vida tuvo muchas pérdidas y tristezas, pero los cuentos quedaron. Mis cenizas descansan acá, en esta casa, en una urna de algarrobo tallada con la forma de mi cabeza.'],
  ['¿Sos de verdad Horacio Quiroga?', 'Soy una recreación para este juego: Horacio Quiroga vivió de 1878 a 1937. Todo lo que te cuento sale de su vida y de su obra. Si querés conocerlo más, visitá la Casa Quiroga de Salto o leé sus cuentos.'],
  ['¿Hay animales de tus cuentos por acá?', 'Dicen que de noche, en la arena del Daymán, unos flamencos bailan con medias de colores… y que un loro pelado anda por los naranjales. Una abeja haragana duerme en mi jardín. Si los encontrás a todos, contame.']
];
const WHO = {
  mateo: { q: [['¿Por qué los molinos están en las cuchillas?', 'Porque acá arriba el viento corre más fuerte y parejo, sin árboles ni casas que lo frenen.'], ['¿Qué pasa cuando no hay viento?', 'Los molinos descansan y cubren el agua, el sol o la biomasa. Por eso no conviene depender de una sola fuente.'], ['¿Cómo se llama el perro?', 'Pampa. Si te sigue es porque le caíste bien. Cuando se cansa, vuelve solo al fogón.']] },
  lucia: { q: [['¿Por qué ómnibus eléctricos?', 'No echan humo en la calle, hacen mucho menos ruido y andan con electricidad hecha acá, no con combustible traído de afuera.'], ['¿Cuándo conviene cargarlos?', 'Cuando sobra energía: al mediodía con mucho sol o de madrugada, cuando la ciudad duerme y gasta poco.']] },
  valeria: { q: [['¿Qué es eso de los 50 Hz?', 'Es el pulso de la red. Si se genera menos de lo que se consume, baja; si sobra, sube. Mi trabajo es mantenerlo clavado en 50.'], ['¿Para qué está el respaldo fósil?', 'Para los ratos en que lo renovable no alcanza. Cuanto mejor combinamos agua, viento, sol y biomasa, menos hay que prenderlo.']] },
  rosa: { hi: '¡Bienvenido al naranjal! Salto es tierra de citrus, y esta cosecha viene dulce.', q: [['¿Por qué hay tantos naranjales en Salto?', 'Por el clima templado y la tierra del litoral: acá las naranjas y las mandarinas se dan muy bien.'], ['¿Las naranjas tienen que ver con la energía?', '¡Claro! El riego y el empaque usan electricidad. Y el árbol hace lo suyo con la energía más vieja de todas: la del sol.']] },
  beto: { hi: 'Acá ando, esperando el pique. El río enseña a tener paciencia.', q: [['¿Qué se pesca por acá?', 'Bogas, bagres y, con suerte, algún dorado, que es el más peleador del río.'], ['¿La represa le cambia la vida al río?', 'Sí: aguas arriba se arma un lago y el agua corre distinto. Por eso las represas tienen que cuidar el caudal y a los peces.']] },
  quiroga: { hi: '¡Hola! Soy Horacio Quiroga. Nací acá, en Salto, el 31 de diciembre de 1878. Esta casa quinta era de mi familia; hoy es museo y centro cultural. Pasá, preguntame lo que quieras.', q: QUIROGA_Q },
  sofi: { hi: '¡Pasá! El agua de las termas sale calentita todo el año.', q: [['¿Por qué el agua sale caliente?', 'Viene de muy hondo, del Acuífero Guaraní: ahí abajo las rocas la calientan antes de que suba.'], ['¿Eso también es energía renovable?', 'Es calor de la Tierra y se llama geotermia. Acá lo usamos para bañarnos, no para generar electricidad.']] },
  guia: { hi: '¡Hola, Capi! Estoy con un grupo de la escuela recorriendo la ciudad. Chicos, saluden al ingeniero.', q: [['¿Qué se aprende en Energimundo?', 'De dónde viene la energía, cómo llega hasta tu casa y cómo usarla mejor. Y se aprende jugando, como ahora.'], ['¿Qué puedo hacer yo por la energía?', 'Apagar lo que no usás, preferir lámparas LED y contarle a tu familia lo que aprendiste hoy.']] },
  mamavieja: { hi: '¡Buenas, Capi! ¿Bailamos? La cuerda de tambores ya viene por el bulevar.', q: [
    ['¿Quién sos?', 'Soy la Mama Vieja, uno de los personajes típicos del candombe. Bailo con el Gramillero y el Escobero delante de los tambores.'],
    ['¿Qué tambores lleva una cuerda?', 'Tres: el chico, que marca el ritmo más agudo; el repique, que se anima a improvisar; y el piano, el más grave, que es la base.'],
    ['¿Y qué tiene que ver con la energía?', 'Las noches de Carnaval la ciudad trasnocha: luces, escenarios y sonido. La red tiene que cubrir esa demanda cuando ya no hay sol, con agua, viento, biomasa y baterías.']] },
  marta: { hi: '¡Bienvenido a la visita del Día del Patrimonio! Sumate al grupo, Capi.', q: [
    ['¿Qué es el Día del Patrimonio?', 'Una fiesta de todo el país: un fin de semana al año, museos, edificios y lugares históricos abren sus puertas para que la gente conozca su historia.'],
    ['¿La energía también es patrimonio?', '¡Claro! Las represas, las usinas antiguas y hasta los molinos de agua de las estancias cuentan cómo el país fue consiguiendo su energía.'],
    ['¿Qué se puede visitar en Salto?', 'Muchísimo: el Teatro Larrañaga, que se inauguró en 1882, la Casa de Horacio Quiroga, el Museo del Hombre y la Tecnología y, por supuesto, Energimundo.']] },
  papanoel: { hi: '¡Jo, jo, jo! Hola, Capi. Con este calor, el traje rojo pesa más que la bolsa de regalos.', q: [
    ['¿Cómo repartís tantos regalos?', 'Este año me muevo en los ómnibus eléctricos de Lucía: me dejan en cada parada sin echar ni un poquito de humo.'],
    ['¿Las luces de Navidad gastan mucho?', 'Si son LED, muy poco: alumbran lo mismo que las lamparitas viejas con mucha menos electricidad. Y conviene apagarlas al irse a dormir.'],
    ['¿Qué pedís para el año que viene?', '¡Una red cien por ciento renovable todos los días! Y un ventilador para el trineo, que en diciembre acá hace un calor bárbaro.']] },
  payador: { hi: '¡Buenas, Capi! Arrímese al fogón, que la guitarra está templada.', q: [
    ['¿Qué es una payada?', 'Es poesía improvisada con guitarra. En la payada de contrapunto, dos payadores se contestan en verso, por turnos y sin libreto.'],
    ['¿Me cantás una payada?', ['Ahí va, compañero, una décima de mi cosecha:', 'Con permiso, compañero,\nle canto a la red de acá,\nque el viento soplando va\npor la cuchilla y el estero;', 'el río, fiel y certero,\ngira turbinas; de día\ncarga el sol con alegría;', 'la biomasa da su llama,\ny el Capi, que tiene fama,\n¡cuida la red, alma mía!'], 'payada'],
    ['¿Qué es la Semana Criolla?', 'Una fiesta de las tradiciones del campo que se hace en Semana de Turismo: desfile de tropillas, fogones, payadores y artesanías. La del Prado, en Montevideo, se hace desde 1925.']] },
  graciela: { hi: '¡Hola, Capi! Bienvenido a Concordia. Soy maestra en una escuela de acá, a unas cuadras del río.', q: [
    ['¿Qué se puede visitar en Concordia?', 'El Parque San Carlos, con el castillo donde estuvo el aviador y escritor Antoine de Saint-Exupéry en 1929. Lo cuenta en su libro «Tierra de hombres».'],
    ['¿Concordia también tiene naranjas?', 'Muchísimas: Concordia es la Capital Nacional del Citrus y cada diciembre hace la Fiesta Nacional de la Citricultura. Por eso la rotonda de la avenida tiene naranjos.'],
    ['¿Cómo se cruza a Salto?', 'En la lancha, que sale de este muelle, o en el ómnibus internacional, que pasa por arriba de la represa. La represa es de los dos países: la energía se reparte mitad y mitad.']] },
  nico: { hi: '¡Bienvenido a Museos en la Noche, Capi! ¿Te animás con la bicicleta generadora?', q: [
    ['¿Qué es Museos en la Noche?', 'Una noche al año, en diciembre, museos de todo el país abren en un horario distinto y con entrada libre, con actividades para toda la familia.'],
    ['¿Cómo funciona la bicicleta generadora?', 'Al pedalear, un pequeño generador transforma el movimiento en electricidad. Es lo mismo que pasa en una turbina o en un molino, pero con tus piernas.'],
    ['¿Cuánta energía da una persona pedaleando?', 'Pedaleando parejo, unos 100 vatios: alcanza para varias lamparitas LED, pero no para una estufa. ¡Por eso usamos el agua, el viento y el sol!']] }
};
export const SOCIAL_NAMES = { rosa: 'Doña Rosa', beto: 'Beto, el pescador', sofi: 'Sofía', guia: 'Pepe, guía de Energimundo', mamavieja: 'la Mama Vieja', marta: 'Marta, guía del Patrimonio', papanoel: 'Papá Noel', payador: 'el payador', nico: 'Nico, guía nocturno', graciela: 'Graciela, maestra de Concordia', quiroga: 'Horacio Quiroga' };
const FAV = {
  mateo: { title: 'Arrear las 3 ovejas al corral', outfit: 'Gaucho', ask: 'Se me escaparon tres ovejas del corral del bajo, al sur del rancho. Arrimate por atrás y van solas para adentro: la tranquera está del lado del rancho.', done: '¡Las tres adentro! Tenés mano para el campo, m\'hijo. Tomá, para que no te falte abrigo en la cuchilla.' },
  lucia: { title: 'Avisar a 3 pasajeros en las paradas', outfit: 'Chofer', ask: 'Hay vecinos esperando en las paradas de la Represa de Salto Grande, el Parque Eólico y el Parque Solar. ¿Les avisás que el ómnibus eléctrico ya pasa por ahí?', done: '¡Los tres ya viajaron! Con vos de inspector, la línea anda sola. Te ganaste el uniforme.' },
  valeria: { title: 'Leer 3 medidores', outfit: 'Control', ask: 'Necesito tres lecturas para el informe: los medidores de la Plaza Artigas, de la costanera y del bulevar. Son los postes blancos con reloj.', done: 'Lecturas recibidas. ¿Ves? La ciudad no gasta igual en todos lados ni a toda hora: por eso miramos la demanda todo el tiempo. Tomá, ya sos del equipo de control.' }
};
FAV.graciela = { title: 'Llevar 3 postales de Concordia a Salto', outfit: 'Viajero',
  ask: 'Mis alumnos hicieron postales para tres vecinos de Salto que conocieron en una visita: Beto, el pescador del puerto; Pepe, el guía de Energimundo, que anda con un grupo por la Plaza Artigas; y Lucía, la chofer de la terminal. ¿Se las llevás? Podés cruzar en la lancha o en el ómnibus internacional.',
  done: '¡Llegaron las tres! Los chicos van a saltar de contentos. Tomá, para tus viajes de una orilla a la otra: un piluso con el Sol de Mayo, que está en las banderas de los dos países.' };
const SCENES = { valeria: ['despacho', '¿Puedo manejar la red un día entero?', 'Pasá al Centro de Control', 'Centro de Control'], mateo: ['torre', '¿Se puede subir a un molino?', 'Por dentro de la torre, hasta la góndola', 'Torre del aerogenerador'], guia: ['casa', '¿Jugamos a «La casa eficiente»?', 'Encontrá lo que gasta de más en una casa', 'La casa eficiente'] };
const ARCADE = [['sync', 'Sincronización de fase', 'Apretá en el momento justo'], ['crank', 'Freno del aerogenerador', 'Girá la manivela a toda velocidad'], ['gates', 'Compuerta del embalse', 'Regulá el paso del agua'], ['helio', 'Matriz solar', 'Limpiá y orientá los paneles'], ['route', 'Subestación', 'Armá el camino de la energía'], ['seq', 'Caldera de biomasa', 'Memorizá la secuencia de arranque'], ['rhythm', 'Compás de carga', 'Seguí el ritmo con las flechas'], ['led', 'Cambio a LED', 'Encontrá las lamparitas que gastan de más'], ['casa', 'La casa eficiente', 'Arreglá lo que gasta de más en casa'], ['carga', 'Carga programada', 'Cargá el auto de madrugada'], ['h2', 'Electrolizador', 'Hacé hidrógeno con el viento que sobra'], ['solar', 'Carga con sol', 'Cargá solo mientras brilla el sol'], ['cometa', 'Cometa en la rambla', 'Atrapá las ráfagas de viento'], ['cinta', 'Cinta de chips', 'Sacá lo que no es madera'], ['despacho', 'Centro de Control', 'Manejá la red durante un día entero'], ['torre', 'Torre del aerogenerador', 'Subí por dentro hasta la góndola']];

// ---------- Construcciones (antes de fundir la geometría) ----------
export function buildSocial(w) {
  const b = w.batch;
  // Puesto de la feria en el bulevar
  const fx = -4, fz = 73.0, fy = w.groundAt(fx, fz);
  b.boxB(fx, fy, fz, 5.6, 1.0, 2.0, 0xb5532f); b.boxB(fx, fy + 1.0, fz, 5.8, 0.1, 2.2, 0xf6e7c8);
  for (const sx of [-2.7, 2.7]) for (const sz of [-1.0, 1.4]) b.boxB(fx + sx, fy, fz + sz, 0.14, 3.0, 0.14, 0x7b6a55);
  for (let i = 0; i < 6; i++) b.box(fx - 2.5 + i, fy + 3.05, fz + 0.2, 1.0, 0.14, 3.0, i % 2 ? 0xffffff : 0xe6007e);
  for (const sx of [-1.5, 1.5]) { b.boxB(fx + sx, fy + 1.1, fz - 0.2, 1.0, 1.3, 0.8, 0x23395d); w.screenBatch.box(fx + sx, fy + 1.95, fz + 0.22, 0.74, 0.5, 0.05, 0xffffff, 0, -0.2); b.boxB(fx + sx, fy + 2.4, fz - 0.2, 1.06, 0.2, 0.86, sx < 0 ? 0xffc420 : 0x2ed3c6); }
  w.addSolid(fx - 2.9, fx + 2.9, fz - 1.1, fz + 1.1); w.addOcc(fx - 2.9, fx + 2.9, fz - 1.1, fz + 1.5, fy + 3.2);
  sign(w, 'FERIA DEL BULEVAR', fx, fy + 1.0, fz - 1.5, 0, 6.4, 1.1, { bg: '#6a2c91', border: '#ffc420' });
  w.addInter('feria', fx, fz + 2.3, { console: false, h: 3.9, r: 3 });
  // Corral de Don Mateo
  const P = PEN, post = (x, z) => b.boxB(x, w.groundAt(x, z), z, 0.18, 1.15, 0.18, 0x7b5a3a), rail = (x0, z0, x1, z1) => { const mx = (x0 + x1) / 2, mz = (z0 + z1) / 2, y = w.groundAt(mx, mz), len = Math.hypot(x1 - x0, z1 - z0), ry = Math.atan2(x1 - x0, z1 - z0); for (const h of [0.45, 0.9]) b.box(mx, y + h, mz, 0.08, 0.1, len, 0x9a7650, ry); w.addSolid(Math.min(x0, x1) - 0.12, Math.max(x0, x1) + 0.12, Math.min(z0, z1) - 0.12, Math.max(z0, z1) + 0.12, y + 1.0); };
  for (let x = P.x0; x <= P.x1 + 0.01; x += 2) { post(x, P.z1); if (x <= P.g0 || x >= P.g1) post(x, P.z0); } for (let z = P.z0 + 1.75; z < P.z1; z += 1.75) { post(P.x0, z); post(P.x1, z); }
  post(P.g0, P.z0); post(P.g1, P.z0);
  rail(P.x0, P.z1, P.x1, P.z1); rail(P.x0, P.z0, P.x0, P.z1); rail(P.x1, P.z0, P.x1, P.z1); rail(P.x0, P.z0, P.g0, P.z0); rail(P.g1, P.z0, P.x1, P.z0);
  // Medidores para el informe de Valeria
  METERS.forEach(([x, z], i) => { const y = w.groundAt(x, z); b.boxB(x, y, z, 0.16, 1.3, 0.16, 0x8c9199); b.boxB(x, y + 1.3, z, 0.74, 0.84, 0.36, 0xf4f1ea); w.screenBatch.box(x, y + 1.72, z + 0.2, 0.46, 0.46, 0.04, 0xffffff, 0, 0); w.addCircle(x, z, 0.42); w.addInter('met:' + i, x, z + 0.9, { console: false, h: 3.5, r: 2.6 }); });
  for (const k in NEW) w.addInter('npc:' + k, NEW[k][0], NEW[k][1], { console: false, h: 3.6 });
  PAS.forEach((s, i) => w.addInter('pas:' + i, POS.stops[s][0] - 1.7, POS.stops[s][1] + 1.0, { console: false, h: 3.4, r: 2.4 }));
}

const iconTex = (draw) => { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); g.fillStyle = 'rgba(255,255,255,.95)'; g.beginPath(); g.arc(32, 30, 27, 0, 7); g.fill(); g.beginPath(); g.moveTo(24, 52); g.lineTo(32, 63); g.lineTo(40, 52); g.fill(); draw(g); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; };
const glyph = (ch, col) => g => { g.fillStyle = col; g.font = '900 38px "Lilita One","Arial Black",sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(ch, 32, 31); };

export class Social {
  constructor(game) {
    const g = this.g = game, w = g.world, sc = g.scene, R = rng(77); this.t = 0; this.done = {}; this.active = null; this.prog = [false, false, false]; this.emoT = 2;
    const add = (o, x, z, ry) => { const p = makePerson(o); p.group.position.set(x, w.groundAt(x, z), z); p.group.rotation.y = ry; p.ry = ry; p.ph = R() * 6; sc.add(p.group); return p; };
    this.npc = {
      rosa: add({ skin: 0xd9a17a, shirt: 0xf2a93b, pants: 0x4a6b3a, hair: 0x5a4636, hat: 'boina', hatColor: 0xe9dcc0 }, ...NEW.rosa),
      beto: add({ skin: 0xc58b62, shirt: 0x3f7d8c, pants: 0x3a3a44, hair: 0x555555, hat: 'gorra', hatColor: 0xd4483b, bigote: true }, ...NEW.beto),
      sofi: add({ skin: 0xe0ac86, shirt: 0x35c9d2, pants: 0xf4f1ea, hair: 0x1a1412, pony: true }, ...NEW.sofi),
      guia: add({ skin: 0xc58b62, shirt: 0xe6007e, jacket: 0x6a2c91, pants: 0x2b2d42, hair: 0x3b2314, hat: 'gorra', hatColor: 0xffc420 }, ...NEW.guia),
      graciela: add({ skin: 0xf1c9a5, shirt: 0x75aadb, jacket: 0xf8f8f8, pants: 0x2b2d42, hair: 0x6b4a2a, pony: true }, ...NEW.graciela),   // guardapolvo blanco de maestra
      quiroga: add({ skin: 0xe2b896, shirt: 0xf2ede2, jacket: 0x3a3430, pants: 0x2e2a28, hair: 0x1a1412, beard: 0x1a1412, extra: 'libro' }, ...NEW.quiroga)   // barba larga y oscura, como en sus fotos
    };
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.035, 3.6, 5), new THREE.MeshStandardMaterial({ color: 0x5a4636 })); rod.position.set(0.5, 1.9, 1.5); rod.rotation.x = 1.05; this.npc.beto.group.add(rod);
    this.kids = [0xffc420, 0x4fc3f7, 0x57e389, 0xff8fab].map((col, i) => add({ skin: i % 2 ? 0xc58b62 : 0xe0ac86, shirt: 0xffffff, pants: 0x23395d, hair: i % 2 ? 0x1a1412 : 0x5a4636, hat: 'gorra', hatColor: col, scale: 0.62 }, NEW.guia[0] + 2.2 + (i % 2) * 1.1, NEW.guia[1] - 1.4 + i * 0.95, -1.9));
    this.pas = PAS.map((s, i) => add({ skin: i % 2 ? 0xe0ac86 : 0xc58b62, shirt: [0xff8f4a, 0x9be7ff, 0xb6f27a][i], pants: 0x3a3a44, hair: 0x2a1c12, pony: i === 1 }, POS.stops[s][0] - 0.8, POS.stops[s][1] - 0.5, 0));
    // Ovejas
    const sheep = () => { const gr = new THREE.Group(), Wm = new THREE.MeshStandardMaterial({ color: 0xf3f0e6, roughness: 1, flatShading: true }), D = new THREE.MeshStandardMaterial({ color: 0x3a3230, roughness: 1 });
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.62, 1.1), Wm); body.position.y = 0.72; gr.add(body); const head = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.36, 0.42), D); head.position.set(0, 0.9, 0.72); gr.add(head);
      const legs = []; for (const lx of [-0.24, 0.24]) for (const lz of [-0.38, 0.38]) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.42, 0.12), D); l.position.set(lx, 0.21, lz); gr.add(l); legs.push(l); }
      gr.traverse(o => { if (o.isMesh) o.castShadow = true; }); sc.add(gr); return { g: gr, head, legs }; };
    this.sheep = [[33, 33.5], [37, 36], [30.5, 35]].map(([x, z], i) => Object.assign(sheep(), { x, z, hx: x, hz: z, h: R() * 6, vx: 0, vz: 0, pen: false, ph: i * 2 }));
    // Globitos de los vecinos
    const cloud = g2 => { g2.fillStyle = '#7d848f'; for (const [x, y, r] of [[23, 34, 10], [34, 27, 12], [43, 35, 9]]) { g2.beginPath(); g2.arc(x, y, r, 0, 7); g2.fill(); } };
    this.icons = { ok: iconTex(glyph('♥', '#e6007e')), fun: iconTex(glyph('♪', '#2a9d8f')), bad: iconTex(glyph('!', '#d4483b')), smog: iconTex(cloud), hi: iconTex(glyph('¡Hola!'.slice(0, 1) + '', '#23395d')) };
    this.icons.hi = iconTex(g2 => { g2.fillStyle = '#23395d'; g2.font = '900 17px "Lilita One","Arial Black",sans-serif'; g2.textAlign = 'center'; g2.textBaseline = 'middle'; g2.fillText('¡Hola!', 32, 31); });
    this.emo = [0, 1, 2, 3].map(() => { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.icons.ok, depthTest: false, fog: false, transparent: true })); s.visible = false; s.renderOrder = 35; sc.add(s); return { s, t: 0, c: null }; });
    // Interfaz
    $('bAlb').onclick = () => this.openAlbum(); $('alClose').onclick = () => g.extras.close(); $('arClose').onclick = () => g.extras.close(); $('bArc').onclick = () => this.openArcade();
    const box = $('arList'); ARCADE.forEach(([type, name, sub]) => { const b = document.createElement('button'); b.type = 'button'; b.className = 'btn ghost'; b.dataset.type = type; b.innerHTML = `${name}<small>${sub}</small>`; b.onclick = () => this.playArcade(type, name); box.appendChild(b); });
    this.refresh();
  }

  // ---------- Guardado ----------
  saved() { return Object.keys(this.done).filter(k => this.done[k]); }
  restore(s) { this.done = {}; (s && Array.isArray(s.favors) ? s.favors : []).forEach(k => { if (FAV[k]) this.done[k] = true; }); this.active = null; this.sheep.forEach(o => { o.pen = !!this.done.mateo; if (o.pen) { o.x = 24 + o.ph; o.z = 41; } else { o.x = o.hx; o.z = o.hz; } }); this.refresh(); }
  reset() { this.restore(null); }
  refresh() { const f = this.active && FAV[this.active], n = this.prog.filter(Boolean).length; $('favLine').textContent = f ? `Favor: ${f.title} (${n}/3)` : ''; $('favLine').classList.toggle('hidden', !f); }

  // Adónde hay que ir para el favor en curso (para el mapa grande)
  favorTargets() {
    const a = this.active, P = this.prog, out = []; if (!a) return out;
    if (a === 'graciela') [[NEW.beto, 'Beto'], [NEW.guia, 'Pepe'], [POS.lucia, 'Lucía']].forEach(([p, n], i) => { if (!P[i]) out.push({ x: p[0], z: p[1], label: 'Postal para ' + n }); });
    if (a === 'valeria') METERS.forEach((m, i) => { if (!P[i]) out.push({ x: m[0], z: m[1], label: 'Medidor de ' + m[2] }); });
    if (a === 'lucia') PAS.forEach((st, i) => { if (!P[i]) out.push({ x: POS.stops[st][0], z: POS.stops[st][1], label: 'Pasajero en ' + POS.stops[st][2] }); });
    if (a === 'mateo') this.sheep.forEach(o => { if (!o.pen) out.push({ x: o.x, z: o.z, label: 'Oveja suelta' }); });
    return out;
  }

  // ---------- Conversación con preguntas ----------
  menu(who, line) {
    const g = this.g, Wd = WHO[who], f = FAV[who], opts = Wd.q.map(q => [q[0], '']); let fi = -1;
    if (f && !this.done[who] && (who !== 'lucia' || g.grid.buses)) { fi = opts.length; opts.push(this.active === who ? ['¿Cómo era el favor?', ''] : ['¿Necesitás una mano con algo?', 'Un favor corto, con premio']); }
    const m = g.missions, busy = m.m5 && !m.flags.m5won, sc = busy ? null : SCENES[who]; let si = -1; if (sc) { si = opts.length; opts.push([sc[1], sc[2]]); }
    const ex = (g.fiestas && g.fiestas.extraOptions(who)) || [], ei = opts.length; ex.forEach(e => opts.push([e[0], e[1]]));
    const pk = POST[who], pi = this.active === 'graciela' && pk != null && !this.prog[pk] ? opts.length : -1; if (pi >= 0) opts.push(['Darle la postal de Concordia', 'De los alumnos de Graciela']);
    opts.push(['Nada más, ¡gracias!', '']);
    const fl = g.fiestas && g.fiestas.line(who); if (fl) line = fl;
    g.extras.choose(NAMES[who], line || Wd.hi, opts, i => {
      if (i < Wd.q.length) { const a = Wd.q[i][1]; if (Wd.q[i][2] && g.fiestas) g.fiestas.onAsk(who, Wd.q[i][2]); return g.ui.dialog((Array.isArray(a) ? a : [a]).map(x => L(who, x))); }
      if (i >= ei && i < ei + ex.length) return ex[i - ei][2]();
      if (i === si) return this.enterScene(sc[0], sc[3]);
      if (i === pi) return g.ui.dialog([L(who, POSTR[who])], () => this.step(pk));
      if (i !== fi) return;
      if (this.active && this.active !== who) return g.ui.dialog([L(who, 'Primero terminá el favor que ya empezaste, y después volvé por acá.')]);
      this.active = who; if (!this.started || this.started !== who) { this.prog = [false, false, false]; this.started = who; }
      this.refresh(); g.ui.dialog([L(who, f.ask)]);
    });
  }
  step(i) {
    const g = this.g, who = this.active; this.prog[i] = true; this.refresh(); g.audio.ok();
    if (!this.prog.every(Boolean)) return;
    this.done[who] = true; this.active = null; this.started = null; this.refresh(); g.stats.inc(g.stats.d, 'favors');
    g.audio.fanfare(); g.capi.celebrate(2.4); g.ui.toast('¡FAVOR CUMPLIDO!', `Nuevo atuendo para Capi: ${FAV[who].outfit}. Abrí el vestuario con V.`, 4.5);
    setTimeout(() => g.ui.dialog([L(who, FAV[who].done)]), 1600); g.missions.save();
  }

  // ---------- Consolas propias ----------
  describe(id) {
    const [k, s] = id.split(':'), i = +s;
    if (k === 'feria') return { state: 'ok', label: 'Jugar en la feria' };
    if (k === 'mon') return PLACAS[s] ? { state: 'ok', label: PLACAS[s].label } : null;
    if (k === 'npc' && FEST_NPC[s] && !(this.g.fiestas && this.g.fiestas.mode === FEST_NPC[s] && this.g.fiestas.present(s))) return { state: 'hidden' };
    if (k === 'npc' && WHO[s] && SOCIAL_NAMES[s]) return { state: 'ok', label: 'Hablar con ' + SOCIAL_NAMES[s].split(',')[0] };
    if (k === 'met') return this.active === 'valeria' && !this.prog[i] ? { state: 'need', label: 'Leer el medidor de ' + METERS[i][2] } : { state: 'locked' };
    if (k === 'pas') return this.active === 'lucia' && !this.prog[i] ? { state: 'need', label: 'Avisarle que ya pasa el ómnibus' } : { state: 'locked' };
    return null;
  }
  interact(id) {
    const g = this.g, [k, s] = id.split(':'), i = +s;
    if (k === 'feria') { this.openArcade(); return true; }
    if (k === 'mon') { if (!PLACAS[s]) return false; g.ui.dialog(PLACAS[s].t.map(t => L(s === 'artigas' ? 'placa' : 'placa2', t))); return true; }
    if (k === 'npc' && SOCIAL_NAMES[s]) { this.menu(s); return true; }
    if (k === 'met') { g.capi.work(0.8); g.ui.note(`Medidor de ${METERS[i][2]}: ${Math.round(g.grid.out.demand * METERS[i][3])} MW en este momento.`, 4); this.step(i); return true; }
    if (k === 'pas') { g.ui.note('“¡Gracias, Capi! Me tomo el próximo ómnibus eléctrico.”', 4); this.step(i); return true; }
    return false;
  }

  // ---------- Feria y álbum ----------
  openArcade() {
    const g = this.g; if (g.mode === 'play' && g.locked) return; if (g.attract) g.stopAttract();
    g.extras.open = 'arcade'; $('arcade').classList.remove('hidden'); g.audio.click();
    $('arList').querySelectorAll('button').forEach(b => { b.classList.toggle('hidden', !g.mg.has(b.dataset.type)); });
  }
  playArcade(type, name) {
    const g = this.g; $('arcade').classList.add('hidden'); g.extras.open = null; g.audio.start(); g.stats.inc(g.stats.d, 'feria');
    if (type === 'despacho' || type === 'torre' || type === 'casa') return this.enterScene(type, name, () => this.openArcade());
    g.mg.start(type, { title: name, from: 'SOLAR', to: 'BATERÍAS', arcade: true }, () => this.openArcade());
  }
  // Transición con pantalla propia y escena aparte
  enterScene(type, name, back) {
    const g = this.g; g.stats.inc(g.stats.d.scenes, type); $('fadeTxt').textContent = 'Entrando: ' + name + '…'; $('fade').classList.add('on'); g.extras.fading = true;
    setTimeout(() => { $('fade').classList.remove('on'); g.extras.fading = false; g.audio.start();
      g.mg.start(type, { title: name }, ok => { if (back) return back(); if (ok && type === 'torre') { g.cam.inspect = new THREE.Vector3(60, 14, -12); g.cam.inspectT = 7; g.ui.note('Así se ve el diorama desde lo alto de la góndola.', 6); } }); }, 900);
  }
  openAlbum() {
    const g = this.g; if (g.locked) return; g.extras.open = 'album'; $('album').classList.remove('hidden'); g.audio.click();
    const box = $('alList'); box.textContent = '';
    g.extras.sparks.forEach((s, i) => { const got = g.extras.got.has(s.i), d = document.createElement('div'); d.className = 'alItem' + (got ? ' on' : ''); d.innerHTML = `<b>${i + 1}</b><div><em>${got ? 'Encontrada en ' + s.place : 'Todavía sin encontrar'}</em><span>${got ? s.text : 'Pista: buscá en ' + s.place + '.'}</span></div>`; box.appendChild(d); });
    $('alCount').textContent = `${g.extras.got.size} de ${g.extras.sparks.length}`;
  }

  update(dt, st) {
    const g = this.g, w = g.world, t = this.t += dt, cp = st.capi, play = g.mode === 'play';
    // Personajes nuevos: miran a Capi y gesticulan al hablar
    for (const k in this.npc) { const n = this.npc[k], p = n.group.position, d = Math.hypot(cp.x - p.x, cp.z - p.z), talk = st.talking === k; let dh = (d < 9 ? Math.atan2(cp.x - p.x, cp.z - p.z) : n.ry) - n.group.rotation.y; dh = Math.atan2(Math.sin(dh), Math.cos(dh)); n.group.rotation.y += dh * Math.min(1, dt * 4);
      n.armR.rotation.x = talk ? -1.2 + Math.sin(t * 7) * 0.35 : k === 'beto' ? -1.1 : k === 'guia' ? -0.5 + Math.sin(t * 1.5) * 0.5 : 0; w.dynCircles.push({ x: p.x, z: p.z, r: 0.6 }); }
    this.kids.forEach((n, i) => { n.group.position.y = w.groundAt(n.group.position.x, n.group.position.z) + Math.abs(Math.sin(t * 3 + n.ph)) * 0.07; n.armR.rotation.x = Math.sin(t * 2 + n.ph) > 0.92 ? -2.6 : 0; });
    this.pas.forEach((n, i) => { n.group.visible = !this.done.lucia && !(this.active === 'lucia' && this.prog[i]); });
    // Ovejas: pastan, y durante el favor huyen de Capi hasta entrar al corral
    const herd = play && this.active === 'mateo', P = PEN;
    this.sheep.forEach((o, i) => {
      let ax = 0, az = 0; const d = Math.hypot(cp.x - o.x, cp.z - o.z);
      if (herd && !o.pen && d < 6.5) { ax = (o.x - cp.x) / (d || 1) * 13; az = (o.z - cp.z) / (d || 1) * 13; }
      else if (o.pen || !herd) { const a = t * 0.25 + o.ph, tx = (o.pen ? (P.x0 + P.x1) / 2 : o.hx) + Math.cos(a) * (o.pen ? 2.2 : 1.2), tz = (o.pen ? 41 : o.hz) + Math.sin(a * 1.3) * (o.pen ? 2 : 1.2); ax = (tx - o.x) * 0.8; az = (tz - o.z) * 0.8; }
      o.vx = (o.vx + ax * dt) * Math.exp(-2.2 * dt); o.vz = (o.vz + az * dt) * Math.exp(-2.2 * dt);
      let nx = o.x + o.vx * dt, nz = o.z + o.vz * dt; const inP = (x, z) => x > P.x0 + 0.5 && x < P.x1 - 0.5 && z > P.z0 + 0.4 && z < P.z1 - 0.5;
      if (o.pen) { nx = Math.max(P.x0 + 0.7, Math.min(P.x1 - 0.7, nx)); nz = Math.max(P.z0 + 0.9, Math.min(P.z1 - 0.7, nz)); }
      else {
        const wasIn = o.x > P.x0 - 0.5 && o.x < P.x1 + 0.5 && o.z > P.z0 - 0.4 && o.z < P.z1 + 0.5, willIn = nx > P.x0 - 0.5 && nx < P.x1 + 0.5 && nz > P.z0 - 0.4 && nz < P.z1 + 0.5;
        if (willIn && !wasIn && !(o.z <= P.z0 - 0.4 && nx > P.g0 + 0.3 && nx < P.g1 - 0.3)) { if (!(o.x > P.x0 - 0.5 && o.x < P.x1 + 0.5)) { nx = o.x; o.vx = 0; } else { nz = o.z; o.vz = 0; } }
        nx = Math.max(23, Math.min(40, nx)); nz = Math.max(31.5, Math.min(47, nz));
        if (inP(nx, nz) && herd) { o.pen = true; g.fx.puff(nx, w.groundAt(nx, nz) + 0.5, nz, 8, 0xffffff, 1.2); this.step(i); }
      }
      o.x = nx; o.z = nz; const sp = Math.hypot(o.vx, o.vz); if (sp > 0.25) { let dh = Math.atan2(o.vx, o.vz) - o.h; dh = Math.atan2(Math.sin(dh), Math.cos(dh)); o.h += dh * Math.min(1, dt * 7); }
      const wk = sp > 0.3 ? Math.sin(t * 14 + o.ph) : 0; o.g.position.set(o.x, w.groundAt(o.x, o.z) + Math.abs(wk) * 0.05, o.z); o.g.rotation.y = o.h; o.legs.forEach((l, k) => { l.rotation.x = wk * (k === 0 || k === 3 ? 0.6 : -0.6); }); o.head.position.y = sp > 0.3 ? 0.95 : 0.62 + Math.sin(t * 3 + o.ph) * 0.05;
      w.dynCircles.push({ x: o.x, z: o.z, r: 0.5 });
    });
    // Vecinos: globitos según cómo anda la red
    const cit = g.actors.citizens, o = st.grid.out;
    for (const e of this.emo) { if (e.t > 0) { e.t -= dt; const p = e.c.group.position, k = Math.min(1, (2.6 - e.t) * 6) * Math.min(1, e.t * 4); e.s.position.set(p.x, p.y + 3.1 + Math.sin(t * 3) * 0.08, p.z); e.s.scale.setScalar(1.25 * k); e.s.visible = k > 0.02 && play && !st.cine; if (e.t <= 0) { e.s.visible = false; e.c = null; } } }
    this.emoT -= dt;
    if (this.emoT <= 0 && play && !st.cine && cit.length) {
      this.emoT = 1.4 + Math.random() * 1.6; const free = this.emo.find(e => e.t <= 0), near = cit.filter(c => c.group.visible && Math.hypot(c.group.position.x - cp.x, c.group.position.z - cp.z) < 32 && !this.emo.some(e => e.c === c));
      if (free && near.length) { const c = near[Math.floor(Math.random() * near.length)], d = Math.hypot(c.group.position.x - cp.x, c.group.position.z - cp.z);
        const icon = o.unmet > 1 || st.grid.freq < 49.4 ? 'bad' : (w.smog || 0) > 0.45 ? 'smog' : d < 5 ? 'hi' : o.pct >= 99.9 ? (Math.random() < 0.5 ? 'ok' : 'fun') : null;
        if (icon) { free.c = c; free.t = 2.6; free.s.material.map = this.icons[icon]; } }
    }
  }
}
