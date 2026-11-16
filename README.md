# Capi: Guardián de la Matriz Verde

Videojuego 3D del museo **Energimundo** sobre la matriz eléctrica renovable del Uruguay.

**Jugar en línea:** https://homerotexeira04-ship-it.github.io/capi-matriz-verde/

Capi, un carpincho ingeniero, recorre una maqueta del Uruguay y pone en marcha el parque eólico, la represa, el parque solar con baterías y la planta de biomasa para que la red funcione con energía 100 % renovable.

- **Historia corta:** 5 misiones, unos 10 minutos.
- **Historia larga:** 6 misiones, 15 a 20 minutos.
- 7 minijuegos, 10 "chispas de saber" escondidas con datos sobre la energía en Uruguay, atuendos para Capi, viajes en ómnibus eléctrico y un diploma final con el nombre del visitante.

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
- Datos de generación eléctrica: Ministerio de Industria, Energía y Minería del Uruguay.
