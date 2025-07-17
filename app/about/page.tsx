export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About YCCI Africa
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 max-w-3xl mx-auto">
              Empowering the next generation of African business leaders through innovation, 
              collaboration, and sustainable economic development.
            </p>
          </div>
        </div>
      </div>
      <div className="sa-flag-accent"></div>

      {/* Mission Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The Youth Chamber of Commerce & Industry (YCCI) Africa is dedicated to 
                fostering entrepreneurship and business excellence among young people across 
                South Africa and the broader African continent.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that young entrepreneurs are the driving force behind economic 
                transformation and innovation. Our mission is to provide them with the tools, 
                networks, and opportunities they need to build successful, sustainable businesses 
                that create jobs and drive economic growth.
              </p>
              <div className="bg-sa-gold/10 border-l-4 border-sa-gold p-4 rounded-r-lg">
                <p className="text-corporate-blue font-semibold">
                  "Building bridges between young entrepreneurs and opportunities for 
                  sustainable economic growth across Africa."
                </p>
              </div>
            </div>
            <div className="bg-gray-100 aspect-square rounded-lg flex items-center justify-center">
              <span className="text-6xl">🌍</span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges We Address */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Challenges We Address
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Young entrepreneurs in Africa face unique challenges. We're here to help overcome them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-corporate-blue rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Access to Funding
              </h3>
              <p className="text-gray-600 text-sm">
                Limited access to capital and investment opportunities for young entrepreneurs 
                starting or scaling their businesses.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-sa-green rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Networking Barriers
              </h3>
              <p className="text-gray-600 text-sm">
                Difficulty connecting with experienced mentors, potential partners, 
                and other entrepreneurs for collaboration and support.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-sa-gold rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Skills Gap
              </h3>
              <p className="text-gray-600 text-sm">
                Lack of business management skills, digital literacy, and industry-specific 
                knowledge needed for successful entrepreneurship.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-sa-red rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Policy Challenges
              </h3>
              <p className="text-gray-600 text-sm">
                Complex regulatory environments and policies that don't always support 
                young entrepreneurs and small business development.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-corporate-blue rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🌐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Market Access
              </h3>
              <p className="text-gray-600 text-sm">
                Limited access to markets, customers, and distribution channels, 
                especially for emerging businesses and startups.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-sa-green rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Infrastructure
              </h3>
              <p className="text-gray-600 text-sm">
                Inadequate business infrastructure, including technology, logistics, 
                and professional services support systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                Striving for the highest standards in everything we do and supporting our members to achieve their best.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sa-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">
                Building bridges between entrepreneurs, organizations, and communities for mutual growth and success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sa-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Encouraging creative thinking and innovative solutions to address Africa's business challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sa-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">
                Promoting business practices that create long-term value for society and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Leadership Team
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Meet the leaders driving YCCI's mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-4xl">👨‍💼</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Sipho Dlamini</h3>
                <p className="text-corporate-blue text-sm mb-3">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm">
                  Serial entrepreneur with 15+ years of experience in building and scaling businesses across Africa.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-4xl">👩‍💼</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Thandiwe Mbeki</h3>
                <p className="text-corporate-blue text-sm mb-3">Director of Programs</p>
                <p className="text-gray-600 text-sm">
                  Former McKinsey consultant specializing in youth development and entrepreneurship programs.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-4xl">👨‍💼</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Arjun Patel</h3>
                <p className="text-corporate-blue text-sm mb-3">Head of Partnerships</p>
                <p className="text-gray-600 text-sm">
                  Tech industry veteran focused on building strategic partnerships and fostering innovation ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
