import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_EwgVdT_e.mjs';
import { manifest } from './manifest_CWV_dcUF.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/send-email.astro.mjs');
const _page2 = () => import('./pages/galeria/arreglos-florales.astro.mjs');
const _page3 = () => import('./pages/galeria/baby-shower.astro.mjs');
const _page4 = () => import('./pages/galeria/cumpleaños.astro.mjs');
const _page5 = () => import('./pages/galeria/empresarial-1.astro.mjs');
const _page6 = () => import('./pages/galeria/empresarial-2.astro.mjs');
const _page7 = () => import('./pages/galeria/empresarial-3.astro.mjs');
const _page8 = () => import('./pages/galeria/empresariales.astro.mjs');
const _page9 = () => import('./pages/galeria/matrimonio-1.astro.mjs');
const _page10 = () => import('./pages/galeria/matrimonio-2.astro.mjs');
const _page11 = () => import('./pages/galeria/matrimonio-3.astro.mjs');
const _page12 = () => import('./pages/galeria/matrimonio-4.astro.mjs');
const _page13 = () => import('./pages/galeria/matrimonio-5.astro.mjs');
const _page14 = () => import('./pages/galeria/matrimonio-6.astro.mjs');
const _page15 = () => import('./pages/galeria/matrimonio-7.astro.mjs');
const _page16 = () => import('./pages/galeria/matrimonios.astro.mjs');
const _page17 = () => import('./pages/gallery.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/send-email.js", _page1],
    ["src/pages/galeria/arreglos-florales.astro", _page2],
    ["src/pages/galeria/baby-shower.astro", _page3],
    ["src/pages/galeria/cumpleaños.astro", _page4],
    ["src/pages/galeria/empresarial-1.astro", _page5],
    ["src/pages/galeria/empresarial-2.astro", _page6],
    ["src/pages/galeria/empresarial-3.astro", _page7],
    ["src/pages/galeria/empresariales.astro", _page8],
    ["src/pages/galeria/matrimonio-1.astro", _page9],
    ["src/pages/galeria/matrimonio-2.astro", _page10],
    ["src/pages/galeria/matrimonio-3.astro", _page11],
    ["src/pages/galeria/matrimonio-4.astro", _page12],
    ["src/pages/galeria/matrimonio-5.astro", _page13],
    ["src/pages/galeria/matrimonio-6.astro", _page14],
    ["src/pages/galeria/matrimonio-7.astro", _page15],
    ["src/pages/galeria/matrimonios.astro", _page16],
    ["src/pages/gallery.astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "698a8ea6-c2da-451d-8b21-20cb3ce282fb",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
