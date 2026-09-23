import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#C5A059',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://extetixoficial.com'),
  title: {
    default: 'Extetix | Medicina Estética Integral en Ramos Mejía',
    template: '%s | Extetix',
  },
  description: 'Extetix - Centro de medicina estética integral en Ramos Mejía, Buenos Aires. Tratamientos faciales, corporales, bioestimuladores y cirugía plástica con atención profesional y años de experiencia en bienestar premium. Consulta gratuita.',
  keywords: [
    'Extetix',
    'Extetix Ramos Mejia',
    'medicina estética Ramos Mejía',
    'tratamientos faciales Ramos Mejía',
    'rejuvenecimiento facial Ramos Mejía',
    'armonización facial Ramos Mejía',
    'rellenos dérmicos Ramos Mejía',
    'bioestimuladores Ramos Mejía',
    'cirugía plástica Argentina',
    'cirugía plástica Ramos Mejía',
    'lifting sin cirugía',
    'plasma rico en plaquetas',
    'hilos tensores Ramos Mejía',
    'tratamientos estéticos La Matanza',
    'clínica estética Buenos Aires',
    'consulta estética gratuita',
  ],
  authors: [{ name: 'Extetix' }],
  creator: 'Extetix',
  publisher: 'Extetix',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://extetixoficial.com',
    siteName: 'Extetix',
    title: 'Extetix | Medicina Estética Integral',
    description: 'Centro de medicina estética líder en Ramos Mejía. Tratamientos faciales, corporales, bioestimuladores y cirugía plástica con trayectoria y excelencia profesional.',
    images: [
      {
        url: '/og-image.jpg?v=2',
        width: 1200,
        height: 630,
        alt: 'Extetix - Medicina Estética Integral en Ramos Mejía',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Extetix | Medicina Estética Integral',
    description: 'Centro de medicina estética líder en Ramos Mejía. Tratamientos faciales, corporales y cirugía plástica.',
    images: ['/og-image.jpg?v=2'],
  },
  verification: {
    google: 'G0-811ErhkusbTfyO3R7pZ-KGjA0cN-86B5JwbMuDbM',
    other: {
      'facebook-domain-verification': ['gyupnrc7jj39t2dtp5iu5g9zzuo4sl'],
    },
  },
  alternates: {
    canonical: 'https://extetixoficial.com',
  },
};

const schemaOrgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Extetix',
  description: 'Centro de medicina estética integral en Ramos Mejía. Tratamientos faciales, corporales, bioestimuladores y cirugía plástica respaldados por profesionales con años de experiencia.',
  url: 'https://extetixoficial.com',
  telephone: '+54-9-11-5504-4320', 
  email: 'extetix.oficial@gmail.com',
  image: 'https://extetixoficial.com/logo.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. De Mayo 618',
    addressLocality: 'Ramos Mejía',
    addressRegion: 'Buenos Aires',
    postalCode: '1704',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-34.6538',
    longitude: '-58.5625',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$$',
  sameAs: [
    'https://www.instagram.com/extetix.original',
    'https://www.facebook.com/share/14jGqr89t5t/',
  ],
  areaServed: {
    '@type': 'City',
    name: 'Ramos Mejía',
    containedInPlace: {
      '@type': 'State',
      name: 'Buenos Aires',
    },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tratamientos de Medicina Estética',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tratamientos Faciales',
          description: 'Rejuvenecimiento facial, rellenos dérmicos, lifting sin cirugía, hilos tensores',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tratamientos Corporales',
          description: 'Relleno corporal, reducción de grasa localizada, bienestar integral',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cirugía Plástica',
          description: 'Liposucción, rinoplastia, blefaroplastia, aumento mamario',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" dir="ltr">
      <head>
        {/* ✅ GOOGLE TAG */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18069228619"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18069228619');
          `}
        </Script>
        
        {/* ✅ SCHEMA.ORG JSON-LD */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrgJsonLd),
          }}
        />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}