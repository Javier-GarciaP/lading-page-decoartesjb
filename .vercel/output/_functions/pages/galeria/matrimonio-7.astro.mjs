import { f as createComponent, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_DXRTHAEE.mjs';
import 'piccolore';
import { $ as $$GalleryGrid } from '../../chunks/GalleryGrid_CoZ8lNls.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DJ0rbSAV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Matrimonio7 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Una hermosa paleta de colores  veraniegos para este matrimonio inolvidable." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GalleryGrid", $$GalleryGrid, { "title": "", "folder": "matrimonios/matrimonio-7", "count": 8 })} ` })}`;
}, "C:/Users/josej/dev/lading-page-decoartesjb/src/pages/galeria/matrimonio-7.astro", void 0);

const $$file = "C:/Users/josej/dev/lading-page-decoartesjb/src/pages/galeria/matrimonio-7.astro";
const $$url = "/galeria/matrimonio-7";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Matrimonio7,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
