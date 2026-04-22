import React, { useState, useEffect } from 'react';
import { Document, Page, Text, View, StyleSheet, Image, PDFDownloadLink, Font } from '@react-pdf/renderer';
import catalogo from '../../data/catalogo.json';

// Definición de estilos premium
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 35, // Reducido de 50
    fontFamily: 'Helvetica',
    color: '#1a1a1a'
  },
  // Portada
  cover: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #d4af37',
    margin: 5,
    padding: 30,
    position: 'relative'
  },
  coverLogo: {
    width: 70,
    height: 70,
    marginBottom: 15
  },
  coverBrand: {
    fontSize: 11,
    letterSpacing: 4,
    color: '#d4af37',
    marginBottom: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  title: {
    fontSize: 36,
    marginBottom: 8,
    color: '#1a1a1a',
    textAlign: 'center',
    fontFamily: 'Times-Roman',
    textTransform: 'uppercase',
    letterSpacing: 2
  },
  subtitle: {
    fontSize: 9,
    marginBottom: 40,
    color: '#777777',
    letterSpacing: 5,
    textTransform: 'uppercase'
  },
  decorativeLine: {
    width: 35,
    height: 1,
    backgroundColor: '#d4af37',
    marginBottom: 25
  },
  // Layout de Catálogo
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25, // Reducido de 40
    borderBottom: '0.5px solid #eeeeee',
    paddingBottom: 10
  },
  headerLogo: {
    width: 25,
    height: 25
  },
  headerTitle: {
    fontSize: 7,
    letterSpacing: 2,
    color: '#999999',
    textTransform: 'uppercase'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20, // Reducido de 35
    alignItems: 'flex-start'
  },
  // Cards de Producto
  card: {
    width: '31%',
  },
  cardLarge: {
    width: '48%',
  },
  imageBox: {
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
    border: '0.5px solid #f0f0f0'
  },
  image: {
    width: '100%',
    height: 130, // Reducido de 160
    objectFit: 'cover'
  },
  imageLarge: {
    width: '100%',
    height: 180, // Reducido de 240
    objectFit: 'cover'
  },
  cardContent: {
    paddingTop: 3
  },
  cardTitle: {
    fontSize: 9,
    color: '#1a1a1a',
    fontFamily: 'Times-Roman',
    marginBottom: 3,
    textTransform: 'uppercase',
    letterSpacing: 0.5
  },
  cardPrice: {
    fontSize: 8,
    color: '#d4af37',
    fontWeight: 'bold'
  },
  // Secciones Especiales
  poemSection: {
    width: '35%',
    paddingRight: 15,
    justifyContent: 'center'
  },
  poemText: {
    fontSize: 9,
    lineHeight: 1.6,
    color: '#555555',
    fontFamily: 'Times-Italic',
    textAlign: 'left',
    borderLeft: '1px solid #d4af37',
    paddingLeft: 12
  },
  // Contacto & Footer
  contactSection: {
    marginTop: 20, // Reducido de 50
    padding: 20,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    border: '0.5px solid #eeeeee'
  },
  contactTitle: {
    fontSize: 12,
    fontFamily: 'Times-Roman',
    marginBottom: 10,
    color: '#1a1a1a',
    letterSpacing: 2,
    textTransform: 'uppercase'
  },
  contactInfo: {
    fontSize: 8,
    color: '#777777',
    marginBottom: 5,
    letterSpacing: 1
  },
  footer: {
    position: 'absolute',
    bottom: 25,
    left: 35,
    right: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '0.5px solid #eeeeee',
    paddingTop: 8
  },
  pageNumber: {
    fontSize: 7,
    color: '#bbbbbb'
  },
  footerText: {
    fontSize: 7,
    color: '#bbbbbb',
    letterSpacing: 1
  }
});

interface CatalogItem {
  id: number;
  name: string;
  price: number;
  type: string;
  image: string;
  row: number;
  col: number;
}

const items = catalogo as CatalogItem[];

interface OriginProps {
  origin: string;
}

const PageHeader = ({ origin }: OriginProps) => (
  <View style={styles.header}>
    <Image src={`${origin}/favicon.png`} style={styles.headerLogo} />
    <Text style={styles.headerTitle}>Colección Día de la Madre 2026</Text>
  </View>
);

interface ProductCardProps {
  item: CatalogItem | undefined;
  origin: string;
  large?: boolean;
}

const ProductCard = ({ item, origin, large = false }: ProductCardProps) => {
  if (!item) return <View style={large ? styles.cardLarge : styles.card} />;
  return (
    <View style={large ? styles.cardLarge : styles.card}>
      <View style={styles.imageBox}>
        <Image src={`${origin}/ramos-dia-madre/ramo-${item.id}.png`} style={large ? styles.imageLarge : styles.image} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardPrice}>${item.price}.000 CLP</Text>
      </View>
    </View>
  );
};

const CatalogDocument = ({ origin }: OriginProps) => (
  <Document>
    {/* Portada */}
    <Page size="A4" style={styles.page}>
      <View style={styles.cover}>
        <Image src={`${origin}/favicon.png`} style={styles.coverLogo} />
        <Text style={styles.coverBrand}>SJB DECOARTE</Text>
        <View style={styles.decorativeLine} />
        <Text style={styles.title}>Colección</Text>
        <Text style={styles.title}>Día de la Madre</Text>
        <Text style={styles.subtitle}>Arte Floral Exclusivo</Text>
        <View style={styles.decorativeLine} />
        <Text style={{ fontSize: 9, color: '#999999', letterSpacing: 2 }}>SANTIAGO • CHILE</Text>
      </View>
    </Page>

    {/* Catálogo Pág 1 */}
    <Page size="A4" style={styles.page}>
      <PageHeader origin={origin} />

      <View style={styles.row}>
        <View style={styles.poemSection}>
          <Text style={styles.poemText}>
            "Para quien nos dio la vida, {"\n"}
            un detalle que celebre {"\n"}
            su belleza infinita. {"\n"}
            Flores que hablan de {"\n"}
            amor y gratitud."
          </Text>
        </View>
        <ProductCard item={items[0]} origin={origin} large />
      </View>

      <View style={styles.row}>
        <ProductCard item={items[1]} origin={origin} />
        <ProductCard item={items[2]} origin={origin} />
        <ProductCard item={items[3]} origin={origin} />
      </View>

      <View style={styles.row}>
        <ProductCard item={items[4]} origin={origin} />
        <ProductCard item={items[5]} origin={origin} />
        <ProductCard item={items[6]} origin={origin} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>SJB DECOARTE</Text>
        <Text style={styles.pageNumber}>01</Text>
      </View>
    </Page>

    {/* Catálogo Pág 2 */}
    <Page size="A4" style={styles.page}>
      <PageHeader origin={origin} />

      <View style={styles.row}>
        <ProductCard item={items[7]} origin={origin} large />
        <ProductCard item={items[8]} origin={origin} large />
      </View>

      <View style={styles.row}>
        <ProductCard item={items[9]} origin={origin} />
        <ProductCard item={items[10]} origin={origin} />
        <View style={styles.card} />
      </View>

      <View style={styles.contactSection}>
        <Text style={styles.contactTitle}>Pedidos y Consultas</Text>
        <Text style={styles.contactInfo}>WhatsApp: +56 9 3770 8933</Text>
        <Text style={styles.contactInfo}>Instagram: @sjbdecoarte</Text>
        <Text style={styles.contactInfo}>www.sjbdecoarte.cl</Text>
        <View style={[styles.decorativeLine, { marginTop: 20, marginBottom: 15 }]} />
        <Text style={{ fontSize: 10, fontFamily: 'Times-Italic', color: '#1a1a1a', marginBottom: 5 }}>"Gracias por elegirnos para celebrar a mamá"</Text>
        <Text style={{ fontSize: 7, color: '#d4af37', letterSpacing: 1, textTransform: 'uppercase' }}>Diseño Floral • Hecho a Mano • Santiago</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>SJB DECOARTE</Text>
        <Text style={styles.pageNumber}>02</Text>
      </View>
    </Page>
  </Document>
);

export default function DownloadCatalog() {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [origin, setOrigin] = useState<string>('');

  useEffect(() => {
    setIsClient(true);
    setOrigin(window.location.origin);
  }, []);

  if (!isClient || !origin) return (
    <div className="flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/20">
      <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/50">Preparando descarga...</span>
    </div>
  );

  return (
    <PDFDownloadLink
      document={<CatalogDocument origin={origin} />}
      fileName="Catalogo_Dia_de_la_Madre_SJBDECOARTE.pdf"
      className="group flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
    >
      {({ loading, error }: { loading: boolean; error: Error | null }) => {
        if (error) {
          console.error("PDF generation error:", error);
          return <span className="text-red-400 text-xs">Error al generar PDF</span>;
        }
        return (
          <>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white group-hover:text-primary transition-colors">
              {loading ? 'Preparando archivo...' : 'Descargar Catálogo Editorial PDF'}
            </span>
            <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20 group-hover:border-primary group-hover:bg-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white group-hover:text-bg transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
          </>
        )
      }}
    </PDFDownloadLink>
  );
}
