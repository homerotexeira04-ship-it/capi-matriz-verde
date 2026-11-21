import { build } from 'esbuild';
import fs from 'fs';
await build({ entryPoints: ['src/main.js'], bundle: true, minify: true, format: 'iife', outfile: 'dist/game.js', target: 'es2020', logLevel: 'warning', loader: { '.mp3': 'base64' } });
const uri = (p, mime) => `data:${mime};base64,` + fs.readFileSync(p).toString('base64');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replaceAll('__LOGO_ISO__', uri('logos/iso.png', 'image/png')).replaceAll('__LOGO_LARGO__', uri('logos/largo.webp', 'image/webp')).replaceAll('__LOGO_SG__', uri('logos/saltogrande.png', 'image/png'));
html = html.replace(/__CUR_([a-z]+)_(\d+)__/g, (m, n, px) => uri(`cursores/${n}-${px}.png`, 'image/png'));   // cursores del juego
// Versión para sitio propio y kiosco: sin ningún pedido a internet (tipografías incluidas)
const F = (pkg, file) => 'data:font/woff2;base64,' + fs.readFileSync(`node_modules/@fontsource/${pkg}/files/${file}`).toString('base64');
const faces = [`@font-face{font-family:"Lilita One";font-style:normal;font-weight:400;font-display:swap;src:url(${F('lilita-one', 'lilita-one-latin-400-normal.woff2')}) format("woff2")}`]
  .concat([700, 800, 900].map(w => `@font-face{font-family:"Nunito";font-style:normal;font-weight:${w};font-display:swap;src:url(${F('nunito', `nunito-latin-${w}-normal.woff2`)}) format("woff2")}`)).join('\n');
const links = /<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">\s*<link href="https:\/\/fonts\.googleapis\.com[^>]*>/;
if (!links.test(html)) throw new Error('no encontré los enlaces de tipografías');
const bytes = fs.statSync('dist/game.js').size;   // para la barra de descarga
if (!html.includes('__GAME_BYTES__')) throw new Error('falta __GAME_BYTES__ en index.html');
html = html.replace('__GAME_BYTES__', String(bytes));
const web = html.replace(links, () => `<style>\n${faces}\n</style>`);
fs.writeFileSync('dist/index.html', web);   // el artefacto también lleva las tipografías incluidas
fs.mkdirSync('web', { recursive: true });
fs.writeFileSync('web/index.html', web); fs.copyFileSync('dist/game.js', 'web/game.js');
if (!web.includes('<script id="cgBoot">')) throw new Error('falta el cargador en index.html');
fs.writeFileSync('web/kiosco.html', web.replace('<script id="cgBoot">', () => '<script>window.CAPI_KIOSCO={idle:180,warn:30};</script>\n<script id="cgBoot">'));
console.log('built', (fs.statSync('dist/game.js').size / 1024).toFixed(0) + ' KB js,', (html.length / 1024).toFixed(0) + ' KB html');
