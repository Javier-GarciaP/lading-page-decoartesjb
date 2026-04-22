import React, { useState, useEffect } from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFDownloadLink,
} from '@react-pdf/renderer';
import catalogo from '../../data/catalogo.json';

// ─── Tipos ────────────────────────────────────────────────────────────────────
interface CatalogItem {
  id: number;
  group: string;
  title: string;
  description: string;
  price: number;
  type: string;
  image: string;
}

interface GroupedItem {
  title: string;
  description: string;
  price: number;
  items: CatalogItem[];
}

interface OriginProps {
  origin: string;
}

// ─── Paleta de colores ────────────────────────────────────────────────────────
const C = {
  gold:       '#C9A84C',
  goldLight:  '#E8D49A',
  goldDark:   '#8A6B1E',
  black:      '#0E0E0E',
  darkGray:   '#1A1A1A',
  midGray:    '#555555',
  lightGray:  '#AAAAAA',
  offWhite:   '#F7F4EF',
  white:      '#FFFFFF',
  cream:      '#FAF7F2',
} as const;

// ─── Estilos ──────────────────────────────────────────────────────────────────
const S = StyleSheet.create({
  // ── Página ──
  page: {
    backgroundColor: C.white,
    fontFamily: 'Helvetica',
    color: C.darkGray,
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
  },
  bgDecor: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    opacity: 0.08,
  },

  // ── Portada ──
  coverPage: {
    flex: 1,
    backgroundColor: C.black,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  coverStatue: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '70%',
    opacity: 0.25,
  },
  coverTopBar: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: 4,
    backgroundColor: C.gold,
  },
  coverBottomBar: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    height: 4,
    backgroundColor: C.gold,
  },
  coverLeftBorder: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0,
    width: 4,
    backgroundColor: C.gold,
  },
  coverRightBorder: {
    position: 'absolute',
    top: 0, bottom: 0, right: 0,
    width: 4,
    backgroundColor: C.gold,
  },
  coverInner: {
    alignItems: 'center',
    paddingHorizontal: 60,
  },
  coverBrandSmall: {
    fontSize: 8,
    color: C.gold,
    letterSpacing: 5,
    textTransform: 'uppercase',
    marginBottom: 30,
  },
  coverDivider: {
    width: 40,
    height: 1,
    backgroundColor: C.gold,
    marginBottom: 24,
  },
  coverTitle: {
    fontSize: 42,
    fontFamily: 'Times-Roman',
    color: C.white,
    textAlign: 'center',
    letterSpacing: 4,
    textTransform: 'uppercase',
    lineHeight: 1.15,
    marginBottom: 6,
  },
  coverSubtitle: {
    fontSize: 14,
    fontFamily: 'Times-Italic',
    color: C.gold,
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 30,
  },
  coverTagline: {
    fontSize: 9,
    color: C.lightGray,
    letterSpacing: 4,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 30,
  },
  coverDate: {
    fontSize: 8,
    color: C.gold,
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  coverLogoBox: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(201,168,76,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    border: `1px solid ${C.gold}`,
  },
  coverLogoImg: {
    width: 38,
    height: 38,
  },

  // ── Encabezado de página de catálogo ──
  pageWrap: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 30,
    paddingBottom: 60,
  },
  pageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `0.75px solid ${C.gold}`,
    paddingBottom: 10,
    marginBottom: 28,
  },
  pageHeaderLogo: { width: 22, height: 22 },
  pageHeaderBrand: {
    fontSize: 7,
    letterSpacing: 3,
    color: C.gold,
    textTransform: 'uppercase',
  },
  pageHeaderSub: {
    fontSize: 7,
    letterSpacing: 1.5,
    color: C.lightGray,
    textTransform: 'uppercase',
  },

  // ── Pie de página ──
  footer: {
    position: 'absolute',
    bottom: 22,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: `0.5px solid rgba(201,168,76,0.4)`,
    paddingTop: 8,
  },
  footerLeft: {
    fontSize: 6.5,
    color: C.lightGray,
    letterSpacing: 0.3,
    maxWidth: '80%',
    lineHeight: 1.4,
  },
  footerRight: {
    fontSize: 7,
    color: C.gold,
    letterSpacing: 1,
  },

  // ── Índice ──
  indexTitle: {
    fontSize: 22,
    fontFamily: 'Times-Roman',
    color: C.darkGray,
    letterSpacing: 3,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  indexSubtitle: {
    fontSize: 8,
    color: C.lightGray,
    letterSpacing: 3,
    textTransform: 'uppercase',
    marginBottom: 28,
  },
  indexRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    paddingVertical: 9,
    borderBottom: `0.5px solid #EFEFEF`,
  },
  indexNum: {
    fontSize: 7,
    color: C.gold,
    width: 24,
    fontFamily: 'Times-Roman',
  },
  indexName: {
    flex: 1,
    fontSize: 9,
    color: C.darkGray,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  indexDots: {
    flex: 1,
    fontSize: 7,
    color: '#DDDDDD',
    letterSpacing: 2,
  },
  indexPrice: {
    fontSize: 9,
    color: C.gold,
    fontFamily: 'Times-Roman',
    fontWeight: 'bold',
  },

  // ── Grupo ──
  groupWrap: {
    marginBottom: 32,
  },
  groupHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  groupLabel: {
    fontSize: 7,
    color: C.gold,
    letterSpacing: 3,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  groupName: {
    fontSize: 15,
    fontFamily: 'Times-Roman',
    color: C.darkGray,
    textTransform: 'uppercase',
    letterSpacing: 2,
    flex: 1,
  },
  groupPrice: {
    fontSize: 13,
    fontFamily: 'Times-Roman',
    color: C.gold,
  },
  groupDesc: {
    fontSize: 8,
    color: C.midGray,
    fontFamily: 'Times-Italic',
    lineHeight: 1.6,
    marginBottom: 14,
    maxWidth: '90%',
  },
  groupDivider: {
    height: 0.75,
    backgroundColor: C.gold,
    marginBottom: 14,
    opacity: 0.5,
  },

  // ── Tarjetas de producto ──
  cardsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card2: { width: '47%' },
  card3: { width: '30%' },
  cardImageBox: {
    height: 170,
    marginBottom: 6,
    backgroundColor: C.cream,
    overflow: 'visible',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  cardRef: {
    fontSize: 6,
    color: C.lightGray,
    letterSpacing: 1,
    textAlign: 'center',
  },

  // ── Página de contacto ──
  contactPage: {
    flex: 1,
    backgroundColor: C.black,
    paddingHorizontal: 50,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  contactTopBar: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: 4,
    backgroundColor: C.gold,
  },
  contactBottomBar: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    height: 4,
    backgroundColor: C.gold,
  },
  contactTitle: {
    fontSize: 28,
    fontFamily: 'Times-Roman',
    color: C.white,
    textAlign: 'center',
    letterSpacing: 4,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  contactTagline: {
    fontSize: 11,
    fontFamily: 'Times-Italic',
    color: C.gold,
    textAlign: 'center',
    marginBottom: 36,
  },
  contactDivider: {
    width: 40,
    height: 1,
    backgroundColor: C.gold,
    marginBottom: 32,
  },
  contactInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 10,
  },
  contactBullet: {
    width: 4,
    height: 4,
    backgroundColor: C.gold,
    borderRadius: 2,
  },
  contactInfoText: {
    fontSize: 10,
    color: C.lightGray,
    letterSpacing: 1,
  },
  contactHighlight: {
    fontSize: 10,
    color: C.white,
    letterSpacing: 1,
  },
  contactNote: {
    fontSize: 8,
    color: C.lightGray,
    textAlign: 'center',
    marginTop: 36,
    letterSpacing: 1,
    lineHeight: 1.6,
  },
  contactGoldNote: {
    fontSize: 8,
    color: C.gold,
    textAlign: 'center',
    marginTop: 8,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});

// ─── Constantes ───────────────────────────────────────────────────────────────
const FOOTER_MSG =
  'Transferencia bancaria · Delivery a toda la Región Metropolitana · Consultas vía DM';

// ─── Lógica de agrupación ────────────────────────────────────────────────────
const groupItems = (items: CatalogItem[]): GroupedItem[] => {
  const map: Record<string, GroupedItem> = {};
  items.forEach((item) => {
    const key = item.group || 'Otros';
    if (!map[key]) {
      map[key] = { title: key, description: item.description, price: item.price, items: [] };
    }
    map[key].items.push(item);
  });
  return Object.values(map);
};

const typedCatalog = catalogo as CatalogItem[];
const GROUPS = groupItems(typedCatalog);

// Decidir cuántas tarjetas por fila según la cantidad de items en el grupo
const cardStyle = (count: number) => (count <= 2 ? S.card2 : S.card3);
const cardHeight = (count: number): number => (count <= 2 ? 200 : 155);

// Agrupar grupos en páginas (máx 2 grupos por página para que respiren)
const chunkGroups = (groups: GroupedItem[], perPage: number): GroupedItem[][] => {
  const pages: GroupedItem[][] = [];
  for (let i = 0; i < groups.length; i += perPage) {
    pages.push(groups.slice(i, i + perPage));
  }
  return pages;
};
const CATALOG_PAGES = chunkGroups(GROUPS, 2);

// ─── Subcomponentes ───────────────────────────────────────────────────────────
const PageHeader = ({ origin, subtitle }: OriginProps & { subtitle?: string }) => (
  <View style={S.pageHeader}>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <Image src={`${origin}/favicon.png`} style={S.pageHeaderLogo} />
      <Text style={S.pageHeaderBrand}>SJB Decoarte</Text>
    </View>
    <Text style={S.pageHeaderSub}>{subtitle ?? 'Colección Día de la Madre · 2026'}</Text>
  </View>
);

const PageFooter = ({ page, total }: { page: number; total: number }) => (
  <View style={S.footer}>
    <Text style={S.footerLeft}>{FOOTER_MSG}</Text>
    <Text style={S.footerRight}>{page}/{total}</Text>
  </View>
);

const GroupBlock = ({
  group,
  origin,
}: {
  group: GroupedItem;
  origin: string;
}) => {
  const cs = cardStyle(group.items.length);
  const h  = cardHeight(group.items.length);
  return (
    <View style={S.groupWrap}>
      <Text style={S.groupLabel}>Colección · Día de la Madre</Text>
      <View style={S.groupHeaderRow}>
        <Text style={S.groupName}>{group.title}</Text>
        <Text style={S.groupPrice}>${group.price.toLocaleString('es-CL')} CLP</Text>
      </View>
      <View style={S.groupDivider} />
      <Text style={S.groupDesc}>{group.description}</Text>
      <View style={S.cardsRow}>
        {group.items.map((item, i) => (
          <View key={i} style={cs}>
            <View style={[S.cardImageBox, { height: h }]}>
              <Image
                src={`${origin}/ramos-dia-madre/${item.image}`}
                style={S.cardImage}
              />
            </View>
            <Text style={S.cardRef}>REF. {String(item.id).padStart(2, '0')}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

// ─── Documento PDF ────────────────────────────────────────────────────────────
const TOTAL_PAGES = 1 + 1 + CATALOG_PAGES.length + 1; // portada + índice + catálogo + contacto

const CatalogDocument = ({ origin }: OriginProps) => (
  <Document
    title="Catálogo Día de la Madre 2026 · SJB Decoarte"
    author="SJB Decoarte"
    subject="Colección floral exclusiva para el Día de la Madre"
    keywords="flores, ramos, día de la madre, SJB Decoarte, Santiago"
  >

    {/* ── PORTADA ─────────────────────────────────────────────────────────── */}
    <Page size="A4" style={S.page}>
      <View style={S.coverPage}>
        {/* Imagen decorativa de fondo */}
        <Image src={`${origin}/decoracion-catalogo.png`} style={S.bgDecor} />
        {/* Estatua como silueta */}
        <Image src={`${origin}/estatua-madre.png`} style={S.coverStatue} />
        {/* Bordes dorados */}
        <View style={S.coverTopBar} />
        <View style={S.coverBottomBar} />
        <View style={S.coverLeftBorder} />
        <View style={S.coverRightBorder} />
        {/* Contenido centrado */}
        <View style={S.coverInner}>
          <View style={S.coverLogoBox}>
            <Image src={`${origin}/favicon.png`} style={S.coverLogoImg} />
          </View>
          <Text style={S.coverBrandSmall}>SJB · Decoarte · Santiago</Text>
          <View style={S.coverDivider} />
          <Text style={S.coverTitle}>{'Día de\nla Madre'}</Text>
          <Text style={S.coverSubtitle}>Colección Floral · 2026</Text>
          <View style={S.coverDivider} />
          <Text style={S.coverTagline}>Arte floral hecho con amor</Text>
          <Text style={S.coverDate}>10 de Mayo · Santiago de Chile</Text>
        </View>
      </View>
    </Page>

    {/* ── ÍNDICE ──────────────────────────────────────────────────────────── */}
    <Page size="A4" style={S.page}>
      <Image src={`${origin}/decoracion-catalogo.png`} style={S.bgDecor} />
      <View style={S.pageWrap}>
        <PageHeader origin={origin} subtitle="Índice de Colección" />
        <Text style={S.indexTitle}>Índice</Text>
        <Text style={S.indexSubtitle}>Selección de arreglos florales premium</Text>
        {GROUPS.map((group, i) => (
          <View key={i} style={S.indexRow}>
            <Text style={S.indexNum}>{String(i + 1).padStart(2, '0')}</Text>
            <Text style={S.indexName}>{group.title}</Text>
            <Text style={S.indexDots}>{'· · · · · · · · · · · · · · · ·'}</Text>
            <Text style={S.indexPrice}>${group.price.toLocaleString('es-CL')}</Text>
          </View>
        ))}
        {/* Nota info */}
        <View style={{ marginTop: 36, padding: 16, backgroundColor: '#FAF7F2', border: `0.75px solid ${C.gold}` }}>
          <Text style={{ fontSize: 7.5, color: C.midGray, lineHeight: 1.7 }}>
            {'Todos los arreglos incluyen papelería premium y están disponibles en distintas variantes de color. Los precios son referenciales. Para pedidos personalizados, consúltenos vía DM.\n'}
          </Text>
          <Text style={{ fontSize: 7.5, color: C.gold, letterSpacing: 1 }}>
            Pago: Transferencia · Delivery: Región Metropolitana
          </Text>
        </View>
      </View>
      <PageFooter page={2} total={TOTAL_PAGES} />
    </Page>

    {/* ── PÁGINAS DE CATÁLOGO (dinámicas) ─────────────────────────────────── */}
    {CATALOG_PAGES.map((pageGroups, pageIdx) => (
      <Page key={pageIdx} size="A4" style={S.page}>
        <Image src={`${origin}/decoracion-catalogo.png`} style={S.bgDecor} />
        <View style={S.pageWrap}>
          <PageHeader origin={origin} />
          {pageGroups.map((group, gi) => (
            <GroupBlock key={gi} group={group} origin={origin} />
          ))}
        </View>
        <PageFooter page={3 + pageIdx} total={TOTAL_PAGES} />
      </Page>
    ))}

    {/* ── PÁGINA DE CONTACTO ───────────────────────────────────────────────── */}
    <Page size="A4" style={S.page}>
      <View style={S.contactPage}>
        <Image src={`${origin}/decoracion-catalogo.png`} style={S.bgDecor} />
        <Image src={`${origin}/estatua-madre.png`} style={{ position: 'absolute', bottom: 4, right: 0, width: '45%', height: '60%', opacity: 0.15 }} />
        <View style={S.contactTopBar} />
        <View style={S.contactBottomBar} />

        <Image src={`${origin}/favicon.png`} style={{ width: 46, height: 46, marginBottom: 20, opacity: 0.9 }} />
        <Text style={S.contactTitle}>Agenda con{'\n'}nosotros hoy</Text>
        <Text style={S.contactTagline}>"Creemos en la belleza que emociona."</Text>
        <View style={S.contactDivider} />

        <View style={S.contactInfoRow}>
          <View style={S.contactBullet} />
          <Text style={S.contactInfoText}>WhatsApp · </Text>
          <Text style={S.contactHighlight}>+56 9 3770 8933</Text>
        </View>
        <View style={S.contactInfoRow}>
          <View style={S.contactBullet} />
          <Text style={S.contactInfoText}>Instagram · </Text>
          <Text style={S.contactHighlight}>@sjbdecoarte</Text>
        </View>
        <View style={S.contactInfoRow}>
          <View style={S.contactBullet} />
          <Text style={S.contactInfoText}>Web · </Text>
          <Text style={S.contactHighlight}>www.sjbdecoarte.cl</Text>
        </View>

        <Text style={S.contactNote}>
          {'Pago únicamente por transferencia bancaria.\nDespacho a domicilio en toda la Región Metropolitana.\nConsultas y pedidos personalizados vía DM.'}
        </Text>
        <Text style={S.contactGoldNote}>SJB Decoarte · Diseño Floral · Santiago · Chile</Text>
      </View>
    </Page>

  </Document>
);

// ─── Componente exportado ─────────────────────────────────────────────────────
export default function DownloadCatalog() {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [origin, setOrigin]     = useState<string>('');

  useEffect(() => {
    setIsClient(true);
    setOrigin(window.location.origin);
  }, []);

  if (!isClient || !origin) {
    return (
      <div className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10">
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40">
          Preparando catálogo...
        </span>
      </div>
    );
  }

  return (
    <PDFDownloadLink
      document={<CatalogDocument origin={origin} />}
      fileName="Catalogo_Dia_Madre_2026_SJBDecoarte.pdf"
      className="group inline-flex items-center gap-4 px-8 py-4 border border-white/20 bg-white/[0.03] hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all duration-300"
    >
      {({ loading, error }: { loading: boolean; error: Error | null }) => {
        if (error) {
          console.error('PDF error:', error);
          return (
            <span className="text-red-400 text-xs tracking-wider">
              Error al generar PDF
            </span>
          );
        }
        return (
          <>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/70 group-hover:text-[#C9A84C] transition-colors">
              {loading ? 'Generando PDF...' : 'Descargar Catálogo · PDF'}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#C9A84C] group-hover:translate-y-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </>
        );
      }}
    </PDFDownloadLink>
  );
}
