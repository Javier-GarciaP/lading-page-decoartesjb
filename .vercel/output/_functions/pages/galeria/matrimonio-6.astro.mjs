import { a as createComponent, d as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CX1FWOFY.mjs';
import 'kleur/colors';
import { $ as $$GalleryGrid } from '../../chunks/GalleryGrid_CR-nAKCu.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DLxa-FEj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Matrimonio6 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Un bello matrimonio en un lugar cultural e hist\xF3rico de la ciudad de Santiago entre muros y esculturas  se refleja\xA0un\xA0bello\xA0momento." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GalleryGrid", $$GalleryGrid, { "title": "", "folder": "matrimonios/matrimonio-6", "count": 10 })} ` })}`;
}, "C:/Users/josej/dev/lading-page-decoartesjb/src/pages/galeria/matrimonio-6.astro", void 0);

const $$file = "C:/Users/josej/dev/lading-page-decoartesjb/src/pages/galeria/matrimonio-6.astro";
const $$url = "/galeria/matrimonio-6";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Matrimonio6,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
