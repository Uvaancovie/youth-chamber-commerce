import Link from 'next/link'

const coreAreas = [
  {
    id: 1,
    title: "Business Development",
    description: "Supporting young entrepreneurs with mentorship, training, and resources to scale their businesses and achieve sustainable growth.",
    icon: "🚀",
    color: "bg-corporate-blue",
    textColor: "text-corporate-blue",
    borderColor: "border-corporate-blue",
    features: [
      "One-on-one mentorship with industry experts",
      "Business plan development workshops",
      "Access to startup incubation programs",
      "Market research and analysis support",
      "Financial planning and management training",
      "Legal and compliance guidance"
    ],
    programs: [
      "Young Entrepreneur Accelerator",
      "Startup Incubation Program",
      "Business Mentorship Network",
      "Growth Strategy Workshops"
    ],
    impact: {
      businesses: "200+",
      funding: "R50M+",
      jobs: "1,500+"
    }
  },
  {
    id: 2,
    title: "Policy Advocacy",
    description: "Representing youth interests in policy discussions and advocating for business-friendly regulations that support young entrepreneurs.",
    icon: "🏛️",
    color: "bg-sa-green",
    textColor: "text-sa-green",
    borderColor: "border-sa-green",
    features: [
      "Government liaison and representation",
      "Policy research and position papers",
      "Youth representation in business forums",
      "Regulatory reform advocacy",
      "Public-private partnership facilitation",
      "Industry consultation participation"
    ],
    programs: [
      "Youth Voice in Government",
      "Policy Fellows Program",
      "Business Regulation Reform Initiative",
      "Parliamentary Engagement Sessions"
    ],
    impact: {
      policies: "25+",
      submissions: "50+",
      meetings: "100+"
    }
  },
  {
    id: 3,
    title: "Networking & Partnerships",
    description: "Creating opportunities for collaboration and partnerships between young business leaders, established companies, and international organizations.",
    icon: "🤝",
    color: "bg-sa-gold",
    textColor: "text-sa-gold",
    borderColor: "border-sa-gold",
    features: [
      "Monthly networking events and mixers",
      "Corporate partnership programs",
      "International business exchange",
      "Industry-specific meetups",
      "Online networking platform",
      "B2B collaboration facilitation"
    ],
    programs: [
      "Global Young Leaders Exchange",
      "Corporate Mentorship Program",
      "Industry Connect Series",
      "International Trade Missions"
    ],
    impact: {
      connections: "5,000+",
      partnerships: "150+",
      events: "100+"
    }
  },
  {
    id: 4,
    title: "Skills Development",
    description: "Providing training programs and workshops to enhance entrepreneurial and business skills essential for success in today's economy.",
    icon: "📚",
    color: "bg-sa-red",
    textColor: "text-sa-red",
    borderColor: "border-sa-red",
    features: [
      "Digital marketing and e-commerce training",
      "Financial literacy and management",
      "Leadership and communication skills",
      "Technology and innovation workshops",
      "Industry-specific skill development",
      "Certification programs"
    ],
    programs: [
      "Digital Skills Academy",
      "Leadership Excellence Program",
      "Financial Literacy Initiative",
      "Innovation and Technology Lab"
    ],
    impact: {
      trained: "3,000+",
      programs: "50+",
      certified: "1,200+"
    }
  }
]

export default function CoreAreas() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Core Areas
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 max-w-3xl mx-auto">
              We focus on four strategic areas to empower young entrepreneurs and drive 
              sustainable economic growth across South Africa and the African continent.
            </p>
          </div>
        </div>
      </div>
      <div className="sa-flag-accent"></div>

      {/* Core Areas Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {coreAreas.map((area) => (
              <div key={area.id} className="text-center group hover:scale-105 transition-transform">
                <div className={`${area.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl`}>
                  {area.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Areas */}
      {coreAreas.map((area, index) => (
        <section key={area.id} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                <div className={`inline-flex items-center rounded-full ${area.color}/10 px-4 py-2 text-sm font-medium ${area.textColor} mb-6`}>
                  <span className="mr-2 text-xl">{area.icon}</span>
                  Core Area {area.id}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{area.title}</h2>
                <p className="text-gray-600 text-lg mb-8">{area.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features & Services</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {area.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className={`${area.textColor} mr-2 mt-1`}>✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`inline-flex rounded-md ${area.color} px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity`}
                >
                  Learn More
                </Link>
              </div>
              
              <div className={index % 2 === 0 ? '' : 'lg:order-1'}>
                <div className={`${area.borderColor} border-2 rounded-2xl p-8`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Active Programs</h3>
                  <div className="space-y-4 mb-8">
                    {area.programs.map((program, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-semibold text-gray-900 text-sm">{program}</h4>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Impact So Far</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {Object.entries(area.impact).map(([key, value]) => (
                        <div key={key}>
                          <div className={`text-2xl font-bold ${area.textColor}`}>{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Success Stories */}
      <section className="py-16 bg-corporate-blue text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-100">
              Real impact from our core area initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-3">TechStart Success</h3>
              <p className="text-gray-100 text-sm">
                "Through YCCI's business development program, my fintech startup secured R2M in 
                funding and now serves 15,000+ customers across South Africa."
              </p>
              <div className="mt-4 text-sa-gold font-semibold text-sm">- Ayanda Mthembu, Founder</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-lg font-semibold text-white mb-3">Policy Change Impact</h3>
              <p className="text-gray-100 text-sm">
                "YCCI's advocacy work led to simplified business registration processes, 
                reducing startup time from 30 days to just 5 days for young entrepreneurs."
              </p>
              <div className="mt-4 text-sa-gold font-semibold text-sm">- Department of Trade & Industry</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-white mb-3">Partnership Success</h3>
              <p className="text-gray-100 text-sm">
                "The networking connections I made through YCCI led to a major partnership 
                that tripled my sustainable fashion business revenue in just one year."
              </p>
              <div className="mt-4 text-sa-gold font-semibold text-sm">- Nomsa Dlamini, Fashion Designer</div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How We Work
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our integrated approach ensures maximum impact across all core areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Assess & Identify</h3>
              <p className="text-gray-600 text-sm">
                We identify challenges and opportunities through research, member feedback, 
                and stakeholder consultations to ensure our programs address real needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sa-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Design & Implement</h3>
              <p className="text-gray-600 text-sm">
                We develop tailored programs and initiatives that leverage partnerships, 
                technology, and best practices to deliver effective solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sa-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Measure & Scale</h3>
              <p className="text-gray-600 text-sm">
                We track impact through rigorous monitoring and evaluation, then scale 
                successful programs to reach more young entrepreneurs across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            Get Involved in Our Core Areas
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're looking to grow your business, contribute to policy change, 
            expand your network, or develop new skills, YCCI has programs for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="bg-corporate-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              Become a Member
            </Link>
            <Link
              href="/events"
              className="border-2 border-corporate-blue text-corporate-blue px-6 py-3 rounded-md font-semibold hover:bg-corporate-blue hover:text-white transition-colors"
            >
              Attend Our Events
            </Link>
            <Link
              href="/contact"
              className="border-2 border-sa-green text-sa-green px-6 py-3 rounded-md font-semibold hover:bg-sa-green hover:text-white transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
