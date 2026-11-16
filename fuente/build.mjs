import { build } from 'esbuild';
import fs from 'fs';
await build({ entryPoints: ['src/main.js'], bundle: true, minify: true, format: 'iife', outfile: 'dist/game.js', target: 'es2020', logLevel: 'warning' });
const uri = (p, mime) => `data:${mime};base64,` + fs.readFileSync(p).toString('base64');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replaceAll('__LOGO_ISO__', uri('logos/iso.png', 'image/png')).replaceAll('__LOGO_LARGO__', uri('logos/largo.webp', 'image/webp'));
fs.writeFileSync('dist/index.html', html);
// Versión para sitio propio y kiosco: sin ningún pedido a internet (tipografías incluidas)
const F = (pkg, file) => 'data:font/woff2;base64,' + fs.readFileSync(`node_modules/@fontsource/${pkg}/files/${file}`).toString('base64');
const faces = [`@font-face{font-family:"Lilita One";font-style:normal;font-weight:400;font-display:swap;src:url(${F('lilita-one', 'lilita-one-latin-400-normal.woff2')}) format("woff2")}`]
  .concat([700, 800, 900].map(w => `@font-face{font-family:"Nunito";font-style:normal;font-weight:${w};font-display:swap;src:url(${F('nunito', `nunito-latin-${w}-normal.woff2`)}) format("woff2")}`)).join('\n');
const links = /<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">\s*<link href="https:\/\/fonts\.googleapis\.com[^>]*>/;
if (!links.test(html)) throw new Error('no encontré los enlaces de tipografías');
const web = html.replace(links, () => `<style>\n${faces}\n</style>`);
fs.mkdirSync('web', { recursive: true });
fs.writeFileSync('web/index.html', web); fs.copyFileSync('dist/game.js', 'web/game.js');
fs.writeFileSync('web/kiosco.html', web.replace('<script src="game.js"></script>', () => '<script>window.CAPI_KIOSCO={idle:180,warn:30};</script>\n<script src="game.js"></script>'));
console.log('built', (fs.statSync('dist/game.js').size / 1024).toFixed(0) + ' KB js,', (html.length / 1024).toFixed(0) + ' KB html');
