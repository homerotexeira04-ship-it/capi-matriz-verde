# Capi: Guardián de la Matriz Verde

Videojuego 3D del museo **Energimundo** sobre la matriz eléctrica renovable del Uruguay.

**Jugar en línea:** https://homerotexeira04-ship-it.github.io/capi-matriz-verde/

Capi, un carpincho ingeniero, recorre una maqueta del Uruguay y pone en marcha el parque eólico, la represa, el parque solar con baterías y la planta de biomasa para que la red funcione con energía 100 % renovable.

- **Historia corta:** 5 misiones, unos 10 minutos.
- **Historia larga:** 7 misiones, unos 20 minutos. Suma la misión de ahorro (cambiar lamparitas por LED y cargar los ómnibus con sol), la sudestada y una decisión de año seco.
- 11 minijuegos, 10 "chispas de saber" escondidas con datos sobre la energía en Uruguay, atuendos para Capi, viajes en ómnibus eléctrico y un diploma final con el nombre del visitante y un código QR para seguir jugando en casa.
- **Feria de minijuegos:** botón "Minijuegos" en la pantalla de inicio y puesto de feria en la rambla, para jugar cualquier minijuego suelto sin empezar una historia.
- **Dos escenas grandes:** el Centro de Control, donde se maneja la red durante un día entero, y la subida por dentro de la torre de un aerogenerador. Se entra hablando con la Ing. Valeria y con Don Mateo, o desde la feria.
- **Personajes:** cada uno responde preguntas y Don Mateo, Lucía y Valeria piden favores cortos (arrear ovejas, avisar a pasajeros, leer medidores) que dan atuendos nuevos. Hay personajes en el naranjal, el muelle, las termas y un grupo escolar en la plaza. Los vecinos muestran globitos según cómo anda la red.
- **Decisiones:** dos niveles al empezar (Explorador e Ingeniero), elegir si después del viento se sigue por el río o por el sol, qué atender primero en la sudestada y cómo enfrentar un año seco. En modo libre aparecen olas de calor y sequías con su propia decisión.
- Álbum de chispas (tecla B), modo foto (tecla P) y soporte para joystick.
- Si nadie toca nada en la pantalla de inicio, la cámara pasea sola por el diorama hasta que alguien se acerca.
- El aire del diorama se ve gris mientras la red usa respaldo fósil y se limpia a medida que sube el porcentaje renovable.

## Controles

| Acción | Teclado y ratón |
|---|---|
| Mover a Capi | W A S D o flechas, o clic en el lugar de destino |
| Saltar | Espacio |
| Interactuar / seguir un diálogo | E |
| Girar la cámara | Q y E, o arrastrar con el botón derecho |
| Acercar y alejar | Rueda del ratón |
| Panel de la red eléctrica | Tab |
| Vestuario | V |
| Álbum de chispas | B |
| Modo foto | P |
| Joystick | Palanca o cruceta para moverse y elegir; A usar, B saltar, X panel, Y vestuario, LB y RB cámara |

También funciona con pantalla táctil.

## Archivos

- `index.html` y `game.js`: el juego listo para publicar. No necesita servidor ni conexión a internet: las tipografías y los logos van incluidos.
- `kiosco.html`: el mismo juego en modo kiosco, para una PC del museo. Vuelve solo a la pantalla de inicio tras 3 minutos sin actividad y no guarda partidas entre visitantes.
- `fuente/`: el código fuente.

## Cómo modificarlo

Hace falta [Node.js](https://nodejs.org/).

```
cd fuente
npm install
npm run build
```

El resultado queda en `fuente/web/`. Para publicar una versión nueva, copiá `index.html`, `kiosco.html` y `game.js` de esa carpeta a la raíz del repositorio.

## Créditos

- **Autor:** Homero Texeira
- **Museo:** Energimundo
- Salto, Uruguay · 2026
- Gráficos 3D con [Three.js](https://threejs.org/) (licencia MIT).
- Tipografías Lilita One y Nunito (SIL Open Font License).
- Elenco: Capi, la Ing. Valeria, Don Mateo, Lucía, Doña Rosa, Beto, Sofía y el grupo escolar con su guía.
- Datos de generación eléctrica: Ministerio de Industria, Energía y Minería del Uruguay.
