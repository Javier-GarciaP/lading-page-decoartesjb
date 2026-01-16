import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_DXRTHAEE.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DJ0rbSAV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Empresariales = createComponent(($$result, $$props, $$slots) => {
  const galleryEvents = [
    // 1
    {
      title: "Eventos Empresariales",
      description: "Un hermoso evento tropical entre palmeras y arenas y de esta forma se culmina la estaci\xF3n de verano para darle inicio al fr\xEDo oto\xF1o.",
      image: "/evento-empresarial/empresarial-1/imagen-1.jpg",
      route: "/galeria/empresarial-1"
    },
    // 2
    {
      title: "Eventos Empresariales",
      description: "Este fin de semana tuvimos un grandioso evento a la rivera del R\xEDo , con una linda y emotiva ceremonia  que lleno de alegr\xEDa a los novios y sus invitados, un lugar m\xE1gico de recordar.",
      image: "/evento-empresarial/empresarial-2/imagen-1.jpg",
      route: "/galeria/empresarial-2"
    },
    // 3
    {
      title: "Eventos Empresariales",
      description: "Decoraciones que transmiten profesionalismo y modernidad en reuniones corporativas.",
      image: "/evento-empresarial/empresarial-3/imagen-1.jpg",
      route: "/galeria/empresarial-3"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Decoraciones que transmiten profesionalismo y modernidad en reuniones corporativas." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-6 md:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> ${galleryEvents.map((event) => renderTemplate`<a${addAttribute(event.route, "href")} class="group block relative rounded-xl overflow-hidden shadow-lg"> <img${addAttribute(event.image, "src")}${addAttribute(event.title, "alt")} class="w-full h-64 object-cover transform transition duration-300 group-hover:scale-110"> <div class="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition"> <h3 class="text-white text-xl font-bold">${event.title}</h3> <p class="text-white text-sm mt-1">${event.description}</p> </div> </a>`)} </section> ` })}`;
}, "C:/Users/josej/dev/lading-page-decoartesjb/src/pages/galeria/empresariales.astro", void 0);

const $$file = "C:/Users/josej/dev/lading-page-decoartesjb/src/pages/galeria/empresariales.astro";
const $$url = "/galeria/empresariales";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Empresariales,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
