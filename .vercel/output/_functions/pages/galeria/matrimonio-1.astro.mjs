import { a as createComponent, d as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CX1FWOFY.mjs';
import 'kleur/colors';
import { $ as $$GalleryGrid } from '../../chunks/GalleryGrid_CR-nAKCu.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DLxa-FEj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Matrimonio1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Y nos fuimos a la playa con este hermoso matrimonio de verano a las orillas del mar." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GalleryGrid", $$GalleryGrid, { "title": "", "folder": "matrimonios/matrimonio-1", "count": 7 })} ` })}`;
}, "C:/Users/josej/dev/lading-page-decoartesjb/src/pages/galeria/matrimonio-1.astro", void 0);

const $$file = "C:/Users/josej/dev/lading-page-decoartesjb/src/pages/galeria/matrimonio-1.astro";
const $$url = "/galeria/matrimonio-1";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Matrimonio1,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
