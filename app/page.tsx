import { Metadata } from 'next'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import UpcomingEvents from './components/UpcomingEvents'
import FeaturedNews from './components/FeaturedNews'
import CoreAreasPreview from './components/CoreAreasPreview'
import CallToAction from './components/CallToAction'

export const metadata: Metadata = {
  title: 'YCCISA | Youth Chamber of Commerce & Industry South Africa | Empowering Young Entrepreneurs',
  description: 'Join YCCISA, South Africa\'s premier youth business chamber. Connect with 500+ young entrepreneurs, access mentorship, funding opportunities, and exclusive business development programs in alignment with AfCFTA and UN SDGs.',
  keywords: 'YCCISA, youth entrepreneurs South Africa, business chamber, young professionals, mentorship programs, business networking, entrepreneurship development, African Continental Free Trade Area, UN SDGs, youth empowerment',
  openGraph: {
    title: 'YCCISA | Empowering Young Entrepreneurs Across South Africa',
    description: 'Join 500+ young entrepreneurs in South Africa\'s premier business chamber. Access mentorship, networking, and funding opportunities to transform your business journey.',
    url: 'https://yccisa.org',
    images: [
      {
        url: '/home-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YCCISA - Youth Chamber of Commerce & Industry South Africa',
      }
    ],
  },
  twitter: {
    title: 'YCCISA | Youth Business Chamber',
    description: 'Empowering young entrepreneurs across South Africa. Join 500+ members in our dynamic business community.',
    images: ['/home-twitter-image.jpg'],
  },
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "YCCISA",
    "url": "https://yccisa.org",
    "description": "South Africa's premier youth business chamber empowering young entrepreneurs",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://yccisa.org/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Youth Chamber of Commerce & Industry South Africa",
      "logo": "https://yccisa.org/logo.png"
    }
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <About />
      <Events />
      <CoreAreasPreview />
      <FeaturedNews />
      <CallToAction />
    </div>
  )
}
