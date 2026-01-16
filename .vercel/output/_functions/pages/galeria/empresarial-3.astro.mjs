import { f as createComponent, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_DXRTHAEE.mjs';
import 'piccolore';
import { $ as $$GalleryGrid } from '../../chunks/GalleryGrid_CoZ8lNls.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DJ0rbSAV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Empresarial3 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Decoraciones que transmiten profesionalismo y modernidad en reuniones corporativas." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GalleryGrid", $$GalleryGrid, { "title": "", "folder": "evento-empresarial/empresarial-3", "count": 15 })} ` })}`;
}, "C:/Users/josej/dev/lading-page-decoartesjb/src/pages/galeria/empresarial-3.astro", void 0);

const $$file = "C:/Users/josej/dev/lading-page-decoartesjb/src/pages/galeria/empresarial-3.astro";
const $$url = "/galeria/empresarial-3";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Empresarial3,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
