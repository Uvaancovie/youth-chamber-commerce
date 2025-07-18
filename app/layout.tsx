import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingSAFlag from './components/FloatingSAFlag'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  title: 'Youth Chamber of Commerce & Industry - YCCI Africa | Empowering Young Entrepreneurs',
  description: 'Join YCCI Africa, South Africa\'s premier youth business chamber. Connect with 500+ young entrepreneurs, access mentorship, funding opportunities, and transform your business journey. Membership from R50/month.',
  keywords: 'South Africa youth entrepreneurs, business chamber, networking, mentorship, YCCI, youth development, business funding, entrepreneurship, young professionals, business community, AfCFTA, UN SDGs',
  authors: [{ name: 'YCCI Africa' }],
  creator: 'Youth Chamber of Commerce & Industry Africa',
  publisher: 'YCCI Africa',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://ycci-africa.org',
    siteName: 'YCCI Africa - Youth Chamber of Commerce & Industry',
    title: 'YCCI Africa | Empowering Young Entrepreneurs in South Africa',
    description: 'Join South Africa\'s premier youth business chamber. Connect with 500+ young entrepreneurs, access mentorship, funding opportunities, and business development resources.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YCCI Africa - Youth Chamber of Commerce & Industry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@YCCIAfrica',
    creator: '@YCCIAfrica',
    title: 'YCCI Africa | Empowering Young Entrepreneurs',
    description: 'Join South Africa\'s premier youth business chamber. 500+ members, mentorship programs, and funding opportunities.',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://ycci-africa.org',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Youth Chamber of Commerce & Industry Africa",
    "alternateName": "YCCI Africa",
    "url": "https://ycci-africa.org",
    "logo": "https://ycci-africa.org/logo.png",
    "description": "South Africa's premier youth business chamber empowering young entrepreneurs through networking, mentorship, and business development opportunities.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "King Sobhuza II House",
      "addressLocality": "Sandton",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+27-79-654-6630",
      "contactType": "Customer Service",
      "email": "info@ycci-africa.org"
    },
    "sameAs": [
      "https://www.linkedin.com/company/youth-chamber-of-commerce-industry-africa-ycci",
      "https://web.facebook.com/ycci.africa"
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "African Continental Free Trade Area",
      "alternateName": "AfCFTA"
    },
    "areaServed": {
      "@type": "Country",
      "name": "South Africa"
    }
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <meta name="theme-color" content="#003366" />
        <meta name="msapplication-TileColor" content="#003366" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="YCCI Africa" />
        <meta name="application-name" content="YCCI Africa" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileImage" content="/icon-144.png" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Favicon and Icons */}
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#003366" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="ZA-GP" />
        <meta name="geo.placename" content="Sandton, Gauteng, South Africa" />
        <meta name="geo.position" content="-26.1076;28.0567" />
        <meta name="ICBM" content="-26.1076, 28.0567" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        
        <link rel="canonical" href="https://ycci-africa.org" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="corporate-body antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingSAFlag />
      </body>
    </html>
  )
}
