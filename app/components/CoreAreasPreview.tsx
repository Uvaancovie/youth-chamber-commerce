import Link from 'next/link'

const coreAreas = [
  {
    id: 1,
    title: "Business Development",
    description: "Supporting young entrepreneurs with world-class mentorship, training, and resources to scale their businesses into market leaders.",
    icon: "🚀",
    gradient: "from-corporate-blue to-sa-navy"
  },
  {
    id: 2,
    title: "Policy Advocacy",
    description: "Representing youth interests in policy discussions and advocating for business-friendly regulations that drive economic transformation.",
    icon: "🏛️",
    gradient: "from-sa-green to-corporate-blue"
  },
  {
    id: 3,
    title: "Networking & Partnerships",
    description: "Creating premium opportunities for collaboration and partnerships between young business leaders across Africa and beyond.",
    icon: "🤝",
    gradient: "from-sa-gold to-sa-green"
  },
  {
    id: 4,
    title: "Skills Development",
    description: "Providing cutting-edge training programs and workshops to enhance entrepreneurial skills and business acumen for the digital age.",
    icon: "📚",
    gradient: "from-sa-red to-sa-gold"
  }
]

export default function CoreAreasPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Flag Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-32 h-24 sa-flag-full rounded-lg"></div>
        <div className="absolute bottom-20 right-10 w-28 h-20 sa-flag-full rounded-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-30 sa-flag-full rounded-lg"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="corporate-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Our Core <span className="text-gradient">Areas</span>
          </h2>
          <div className="sa-flag-accent max-w-md mx-auto mb-6"></div>
          <p className="corporate-body text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            We focus on four strategic pillars to empower young entrepreneurs and drive sustainable economic growth 
            across South Africa and the African continent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {coreAreas.map((area, index) => (
            <div key={area.id} className="premium-card text-center p-8 rounded-3xl hover:scale-105 transition-all duration-300 shine group"
                 style={{animationDelay: `${index * 200}ms`}}>
              {/* Premium icon with gradient background */}
              <div className={`w-20 h-20 bg-gradient-to-br ${area.gradient} rounded-full flex items-center justify-center mx-auto mb-6 floating group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                   style={{animationDelay: `${index * 300}ms`}}>
                <span className="text-white text-3xl">{area.icon}</span>
              </div>
              
              <h3 className="card-heading text-xl font-bold mb-4">{area.title}</h3>
              <p className="card-body leading-relaxed">{area.description}</p>
              
              {/* Mini flag accent that appears on hover */}
              <div className="mt-6 w-16 h-1 sa-flag-accent mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="premium-card rounded-3xl p-8 bg-gradient-to-br from-corporate-blue via-sa-navy to-sa-green text-white relative overflow-hidden mb-8">
            {/* Flag elements */}
            <div className="absolute top-0 right-0 w-20 h-12 sa-flag-full rounded-bl-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-16 h-10 sa-flag-full rounded-tr-3xl opacity-20"></div>
            
            <div className="relative z-10">
              <h3 className="corporate-heading text-2xl font-bold mb-4">
                Ready to Transform Your Business Journey?
              </h3>
              <p className="corporate-body text-white/90 mb-6 max-w-2xl mx-auto">
                Discover how our comprehensive approach to youth entrepreneurship development 
                can accelerate your business success and impact.
              </p>
            </div>
          </div>
          
          <Link
            href="/core-areas"
            className="btn-corporate inline-flex items-center px-8 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="mr-3">🎯</span>
            Learn More About Our Work
            <span className="ml-3">🇿🇦</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
