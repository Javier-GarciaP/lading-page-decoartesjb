import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DXRTHAEE.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DJ0rbSAV.mjs';
export { renderers } from '../renderers.mjs';

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const galleryEvents = [
    {
      title: "Arreglos Florales",
      description: "Dise\xF1os \xFAnicos con flores frescas para toda ocasi\xF3n especial, desde cumplea\xF1os hasta aniversarios.",
      image: "/arreglos-florales/imagen-1.jpg",
      route: "/galeria/arreglos-florales"
    },
    {
      title: "Baby Shower",
      description: "Decoraciones tiernas y personalizadas para dar la bienvenida al nuevo miembro de la familia.",
      image: "/baby-shower/imagen-1.jpg",
      route: "/galeria/baby-shower"
    },
    {
      title: "Cumplea\xF1os",
      description: "Ambientes festivos con estilo y elegancia para celebrar la vida de tus seres queridos.",
      image: "/cumplea\xF1os/imagen-1.jpg",
      route: "/galeria/cumplea\xF1os"
    },
    {
      title: "Eventos Empresariales",
      description: "Decoraciones que transmiten profesionalismo y modernidad en reuniones corporativas.",
      image: "/evento-empresarial/empresarial-1/imagen-1.jpg",
      route: "/galeria/empresariales"
    },
    {
      title: "Matrimonios",
      description: "Cada boda es \xFAnica y m\xE1gica. Explora las diferentes ceremonias y estilos realizados.",
      image: "/matrimonios/matrimonio-1/imagen-1.jpg",
      route: "/galeria/matrimonios"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galer\xEDa de Eventos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-6 md:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> ${galleryEvents.map((event, index) => renderTemplate`<a${addAttribute(event.route, "href")} class="group block relative rounded-xl overflow-hidden shadow-xl border border-transparent hover:border-primary/30 transition-all duration-300"> <div class="overflow-hidden h-80"> <img${addAttribute(event.image, "src")}${addAttribute(event.title, "alt")} class="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"> </div> <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6"> <h3 class="text-primary text-2xl font-heading mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"> ${event.title} </h3> <p class="text-gray-200 text-sm font-body opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75"> ${event.description} </p> <div class="mt-4 w-12 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div> </div> </a>`)} </section> ` })}`;
}, "C:/Users/josej/dev/lading-page-decoartesjb/src/pages/gallery.astro", void 0);

const $$file = "C:/Users/josej/dev/lading-page-decoartesjb/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gallery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
