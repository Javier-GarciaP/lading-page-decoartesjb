import { a as createComponent, d as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CX1FWOFY.mjs';
import 'kleur/colors';
import { $ as $$GalleryGrid } from '../../chunks/GalleryGrid_CR-nAKCu.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DLxa-FEj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Cumpleaos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ambientes festivos con estilo y elegancia para celebrar la vida de tus seres queridos." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GalleryGrid", $$GalleryGrid, { "title": "", "folder": "cumplea\xF1os", "count": 4 })} ` })}`;
}, "C:/Users/josej/dev/lading-page-decoartesjb/src/pages/galeria/cumplea\xF1os.astro", void 0);

const $$file = "C:/Users/josej/dev/lading-page-decoartesjb/src/pages/galeria/cumpleaños.astro";
const $$url = "/galeria/cumpleaños";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cumpleaos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
