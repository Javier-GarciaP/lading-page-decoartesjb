import { a as createComponent, d as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CX1FWOFY.mjs';
import 'kleur/colors';
import { $ as $$GalleryGrid } from '../../chunks/GalleryGrid_CR-nAKCu.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DLxa-FEj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Empresarial1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Un hermoso evento tropical entre palmeras y arenas y de esta forma se culmina la estaci\xF3n de verano para darle inicio al fr\xEDo oto\xF1o." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GalleryGrid", $$GalleryGrid, { "title": "", "folder": "evento-empresarial/empresarial-1", "count": 20 })} ` })}`;
}, "C:/Users/josej/dev/lading-page-decoartesjb/src/pages/galeria/empresarial-1.astro", void 0);

const $$file = "C:/Users/josej/dev/lading-page-decoartesjb/src/pages/galeria/empresarial-1.astro";
const $$url = "/galeria/empresarial-1";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Empresarial1,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
