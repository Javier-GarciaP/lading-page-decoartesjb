import { a as createComponent, d as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CX1FWOFY.mjs';
import 'kleur/colors';
import { $ as $$GalleryGrid } from '../../chunks/GalleryGrid_CR-nAKCu.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DLxa-FEj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Matrimonio5 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Entre variedad de verde y la elegancia del color blanco se impone este lindo matrimonio." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GalleryGrid", $$GalleryGrid, { "title": "", "folder": "matrimonios/matrimonio-5", "count": 10 })} ` })}`;
}, "C:/Users/josej/dev/lading-page-decoartesjb/src/pages/galeria/matrimonio-5.astro", void 0);

const $$file = "C:/Users/josej/dev/lading-page-decoartesjb/src/pages/galeria/matrimonio-5.astro";
const $$url = "/galeria/matrimonio-5";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Matrimonio5,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
