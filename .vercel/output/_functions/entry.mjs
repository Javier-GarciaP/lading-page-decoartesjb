import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CeAuWtjj.mjs';
import { manifest } from './manifest_C1vI6Qn6.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/send-email.astro.mjs');
const _page2 = () => import('./pages/dia-de-la-madre.astro.mjs');
const _page3 = () => import('./pages/galeria/arreglos-florales.astro.mjs');
const _page4 = () => import('./pages/galeria/baby-shower.astro.mjs');
const _page5 = () => import('./pages/galeria/cumpleaños.astro.mjs');
const _page6 = () => import('./pages/galeria/empresarial-1.astro.mjs');
const _page7 = () => import('./pages/galeria/empresarial-2.astro.mjs');
const _page8 = () => import('./pages/galeria/empresarial-3.astro.mjs');
const _page9 = () => import('./pages/galeria/empresariales.astro.mjs');
const _page10 = () => import('./pages/galeria/matrimonio-1.astro.mjs');
const _page11 = () => import('./pages/galeria/matrimonio-10.astro.mjs');
const _page12 = () => import('./pages/galeria/matrimonio-11.astro.mjs');
const _page13 = () => import('./pages/galeria/matrimonio-12.astro.mjs');
const _page14 = () => import('./pages/galeria/matrimonio-13.astro.mjs');
const _page15 = () => import('./pages/galeria/matrimonio-14.astro.mjs');
const _page16 = () => import('./pages/galeria/matrimonio-15.astro.mjs');
const _page17 = () => import('./pages/galeria/matrimonio-16.astro.mjs');
const _page18 = () => import('./pages/galeria/matrimonio-17.astro.mjs');
const _page19 = () => import('./pages/galeria/matrimonio-18.astro.mjs');
const _page20 = () => import('./pages/galeria/matrimonio-19.astro.mjs');
const _page21 = () => import('./pages/galeria/matrimonio-2.astro.mjs');
const _page22 = () => import('./pages/galeria/matrimonio-20.astro.mjs');
const _page23 = () => import('./pages/galeria/matrimonio-21.astro.mjs');
const _page24 = () => import('./pages/galeria/matrimonio-22.astro.mjs');
const _page25 = () => import('./pages/galeria/matrimonio-23.astro.mjs');
const _page26 = () => import('./pages/galeria/matrimonio-24.astro.mjs');
const _page27 = () => import('./pages/galeria/matrimonio-25.astro.mjs');
const _page28 = () => import('./pages/galeria/matrimonio-26.astro.mjs');
const _page29 = () => import('./pages/galeria/matrimonio-3.astro.mjs');
const _page30 = () => import('./pages/galeria/matrimonio-4.astro.mjs');
const _page31 = () => import('./pages/galeria/matrimonio-5.astro.mjs');
const _page32 = () => import('./pages/galeria/matrimonio-6.astro.mjs');
const _page33 = () => import('./pages/galeria/matrimonio-7.astro.mjs');
const _page34 = () => import('./pages/galeria/matrimonio-8.astro.mjs');
const _page35 = () => import('./pages/galeria/matrimonio-9.astro.mjs');
const _page36 = () => import('./pages/galeria/matrimonios.astro.mjs');
const _page37 = () => import('./pages/gallery.astro.mjs');
const _page38 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/send-email.js", _page1],
    ["src/pages/dia-de-la-madre.astro", _page2],
    ["src/pages/galeria/arreglos-florales.astro", _page3],
    ["src/pages/galeria/baby-shower.astro", _page4],
    ["src/pages/galeria/cumpleaños.astro", _page5],
    ["src/pages/galeria/empresarial-1.astro", _page6],
    ["src/pages/galeria/empresarial-2.astro", _page7],
    ["src/pages/galeria/empresarial-3.astro", _page8],
    ["src/pages/galeria/empresariales.astro", _page9],
    ["src/pages/galeria/matrimonio-1.astro", _page10],
    ["src/pages/galeria/matrimonio-10.astro", _page11],
    ["src/pages/galeria/matrimonio-11.astro", _page12],
    ["src/pages/galeria/matrimonio-12.astro", _page13],
    ["src/pages/galeria/matrimonio-13.astro", _page14],
    ["src/pages/galeria/matrimonio-14.astro", _page15],
    ["src/pages/galeria/matrimonio-15.astro", _page16],
    ["src/pages/galeria/matrimonio-16.astro", _page17],
    ["src/pages/galeria/matrimonio-17.astro", _page18],
    ["src/pages/galeria/matrimonio-18.astro", _page19],
    ["src/pages/galeria/matrimonio-19.astro", _page20],
    ["src/pages/galeria/matrimonio-2.astro", _page21],
    ["src/pages/galeria/matrimonio-20.astro", _page22],
    ["src/pages/galeria/matrimonio-21.astro", _page23],
    ["src/pages/galeria/matrimonio-22.astro", _page24],
    ["src/pages/galeria/matrimonio-23.astro", _page25],
    ["src/pages/galeria/matrimonio-24.astro", _page26],
    ["src/pages/galeria/matrimonio-25.astro", _page27],
    ["src/pages/galeria/matrimonio-26.astro", _page28],
    ["src/pages/galeria/matrimonio-3.astro", _page29],
    ["src/pages/galeria/matrimonio-4.astro", _page30],
    ["src/pages/galeria/matrimonio-5.astro", _page31],
    ["src/pages/galeria/matrimonio-6.astro", _page32],
    ["src/pages/galeria/matrimonio-7.astro", _page33],
    ["src/pages/galeria/matrimonio-8.astro", _page34],
    ["src/pages/galeria/matrimonio-9.astro", _page35],
    ["src/pages/galeria/matrimonios.astro", _page36],
    ["src/pages/gallery.astro", _page37],
    ["src/pages/index.astro", _page38]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "752b17e3-40ae-4f07-a0bb-5e656fc1adf6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
