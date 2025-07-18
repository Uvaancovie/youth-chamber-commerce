import { Metadata } from 'next'
import MembershipForm from './MembershipForm'

// SEO metadata for membership page
export const metadata: Metadata = {
  title: 'Join YCCI Africa | Membership Plans Starting R50/month | Youth Business Chamber',
  description: 'Become a member of YCCI Africa starting from R50/month. Access 500+ entrepreneurs, mentorship, funding opportunities, and exclusive business development programs.',
  keywords: 'YCCI membership, youth entrepreneurs South Africa, business chamber membership, networking opportunities, mentorship programs, business funding, entrepreneur community',
  openGraph: {
    title: 'Join YCCI Africa | Transform Your Business Journey',
    description: 'Join 500+ young entrepreneurs in South Africa\'s premier business chamber. Membership from R50/month with mentorship, networking, and funding opportunities.',
    images: ['/membership-og.jpg'],
    url: 'https://ycci-africa.org/membership',
  },
  twitter: {
    title: 'Join YCCI Africa | Youth Business Membership',
    description: 'Transform your entrepreneurial journey with YCCI Africa membership. Starting R50/month.',
    images: ['/membership-twitter.jpg'],
  },
}

const membershipTiers = [
  {
    name: "Associate Member",
    price: "R50",
    period: "per month",
    description: "Perfect for young professionals starting their business journey with YCCI Africa",
    features: [
      "Monthly YCCI Africa newsletters and updates",
      "Access to online business resources",
      "Basic networking opportunities",
      "Youth development webinars",
      "Digital membership certificate",
      "Access to member-only WhatsApp groups"
    ],
    color: "border-sa-green",
    icon: "🌱",
    popular: false
  },
  {
    name: "Entrepreneur Member", 
    price: "R250",
    period: "per month",
    description: "Ideal for established young entrepreneurs and growing businesses",
    features: [
      "All Associate Member benefits",
      "Priority event access and networking",
      "One-on-one mentorship opportunities", 
      "Industry-specific workshops and training",
      "Business development resources",
      "Access to funding opportunities",
      "Quarterly business review sessions",
      "YCCI member directory access"
    ],
    color: "border-corporate-blue",
    icon: "🚀",
    popular: true
  },
  {
    name: "Corporate Member",
    price: "R250,000", 
    period: "per year",
    description: "For established corporations committed to youth development and empowerment",
    features: [
      "All Entrepreneur Member benefits",
      "Corporate partnership opportunities", 
      "Brand recognition at YCCI events",
      "Access to talent pipeline and recruitment",
      "Custom training and workshop hosting",
      "Annual corporate retreat invitations",
      "CSR and BEE collaboration opportunities",
      "Executive leadership council participation",
      "Premium corporate visibility package"
    ],
    color: "border-sa-gold",
    icon: "🏢",
    popular: false
  }
]

export default function Membership() {
  // Structured data for membership page
  const membershipStructuredData = {
    "@context": "https://schema.org",
    "@type": "MembershipOrganization",
    "name": "Youth Chamber of Commerce & Industry Africa",
    "alternateName": "YCCI Africa",
    "url": "https://ycci-africa.org/membership",
    "description": "Join YCCI Africa with membership tiers designed for young entrepreneurs and businesses",
    "membershipType": [
      {
        "@type": "Offer",
        "name": "Associate Member",
        "description": "Perfect for young professionals starting their business journey",
        "price": "50",
        "priceCurrency": "ZAR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "50",
          "priceCurrency": "ZAR",
          "unitCode": "MON"
        }
      },
      {
        "@type": "Offer",
        "name": "Entrepreneur Member",
        "description": "Ideal for established young entrepreneurs and growing businesses",
        "price": "250",
        "priceCurrency": "ZAR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "250",
          "priceCurrency": "ZAR",
          "unitCode": "MON"
        }
      },
      {
        "@type": "Offer",
        "name": "Corporate Member",
        "description": "For established corporations committed to youth development",
        "price": "250000",
        "priceCurrency": "ZAR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "250000",
          "priceCurrency": "ZAR",
          "unitCode": "ANN"
        }
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+27-79-654-6630",
      "email": "membership@ycci-africa.org",
      "contactType": "Membership Services"
    }
  }

  return (
    <div className="bg-white min-h-screen">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(membershipStructuredData) }}
      />
      
      {/* Hero Section with South African Flag */}
      <div className="hero-gradient text-white py-20 relative overflow-hidden">
        {/* Floating South African Flag Elements */}
        <div className="absolute top-10 left-10 floating">
          <div className="w-16 h-12 sa-flag-full rounded-md shadow-lg"></div>
        </div>
        <div className="absolute top-20 right-20 floating" style={{animationDelay: '1s'}}>
          <div className="w-12 h-8 sa-flag-full rounded-md shadow-lg"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 floating" style={{animationDelay: '2s'}}>
          <div className="w-10 h-6 sa-flag-full rounded-md shadow-lg"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-6">
              <h1 className="corporate-heading text-5xl font-bold tracking-tight text-white sm:text-7xl mb-4">
                Join <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-sa-gold via-white to-sa-green">YCCI Africa</span>
              </h1>
              <div className="sa-flag-full max-w-md mx-auto mb-6"></div>
            </div>
            <p className="corporate-body mt-6 text-xl leading-8 text-gray-100 max-w-4xl mx-auto">
              Become part of South Africa's premier youth business chamber. 
              Access exclusive networks, mentorship, and opportunities to transform your entrepreneurial journey into lasting success.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <span className="text-sa-gold font-bold text-lg">🇿🇦</span>
                <span className="text-white ml-2 font-semibold">Proudly South African</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <span className="text-sa-gold font-bold text-lg">👥</span>
                <span className="text-white ml-2 font-semibold">500+ Members</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium Flag Accent */}
      <div className="sa-flag-full flag-wave"></div>

      {/* Membership Form Component */}
      <MembershipForm />

      {/* Enhanced Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003366' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="corporate-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Why Choose <span className="text-gradient">YCCI Africa</span>?
            </h2>
            <div className="sa-flag-accent max-w-lg mx-auto mb-6"></div>
            <p className="corporate-body text-xl leading-8 text-gray-600 max-w-4xl mx-auto">
              Discover the transformational benefits that come with being part of South Africa's premier youth business community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🌐",
                title: "Extensive Network",
                description: "Connect with 500+ young entrepreneurs, business leaders, and industry experts across South Africa and beyond.",
                gradient: "from-corporate-blue to-sa-navy"
              },
              {
                icon: "🎓", 
                title: "World-Class Learning",
                description: "Access exclusive workshops, masterclasses, and training programs designed by industry leaders.",
                gradient: "from-sa-green to-corporate-blue"
              },
              {
                icon: "🚀",
                title: "Business Acceleration", 
                description: "Get direct access to funding opportunities, mentorship programs, and business development resources.",
                gradient: "from-sa-gold to-sa-green"
              },
              {
                icon: "🏆",
                title: "Recognition Platform",
                description: "Showcase achievements and get recognized as a rising star in South Africa's business ecosystem.",
                gradient: "from-sa-red to-sa-gold"
              },
              {
                icon: "💼",
                title: "Career Advancement",
                description: "Access exclusive job opportunities, internships, and career guidance from top professionals.",
                gradient: "from-corporate-blue to-sa-green"
              },
              {
                icon: "🇿🇦",
                title: "Policy Influence",
                description: "Shape policies affecting young entrepreneurs and contribute to South Africa's economic transformation.",
                gradient: "from-sa-navy to-corporate-blue"
              }
            ].map((benefit, index) => (
              <div 
                key={benefit.title}
                className="premium-card rounded-3xl p-8 text-center shine group hover:scale-105 transition-all duration-300"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-full flex items-center justify-center mx-auto mb-6 floating group-hover:scale-110 transition-transform duration-300`}
                     style={{animationDelay: `${index * 200}ms`}}>
                  <span className="text-white text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="corporate-subheading text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="corporate-body text-gray-600 leading-relaxed">{benefit.description}</p>
                
                {/* Mini flag accent */}
                <div className="mt-4 mx-auto w-16 h-1 sa-flag-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="premium-card rounded-3xl p-12 bg-gradient-to-br from-corporate-blue via-sa-navy to-sa-green text-white relative overflow-hidden">
              {/* Flag elements */}
              <div className="absolute top-0 right-0 w-24 h-16 sa-flag-full rounded-bl-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-20 h-12 sa-flag-full rounded-tr-3xl opacity-20"></div>
              
              <div className="relative z-10">
                <h3 className="corporate-heading text-3xl font-bold mb-4">
                  Ready to Transform Your Future?
                </h3>
                <p className="corporate-body text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Join thousands of ambitious young South Africans who are already building tomorrow's economy. 
                  Your journey to business excellence starts here.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button className="btn-corporate inline-flex items-center px-8 py-4 text-lg font-bold rounded-2xl shadow-xl">
                    <span className="mr-3">🚀</span>
                    Start Your Application
                    <span className="ml-3">🇿🇦</span>
                  </button>
                  <div className="flex items-center text-white/80">
                    <span className="text-2xl mr-2">⭐</span>
                    <span className="corporate-body">Trusted by 500+ Young Leaders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
