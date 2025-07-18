export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Premium Hero Section */}
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
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-6">
              <h1 className="corporate-heading text-5xl font-bold tracking-tight text-white sm:text-7xl mb-4">
                About <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-sa-gold via-white to-sa-green">YCCI Africa</span>
              </h1>
              <div className="sa-flag-full max-w-md mx-auto mb-6"></div>
            </div>
            <p className="corporate-body mt-6 text-xl leading-8 text-white/90 max-w-4xl mx-auto">
              Youth Chamber of Commerce & Industry Africa - Empowering Young Entrepreneurs | Transforming Africa's Economy Through Innovation and Excellence
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <span className="text-sa-gold font-bold text-lg">🇿🇦</span>
                <span className="text-white ml-2 font-semibold">Proudly South African</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <span className="text-sa-gold font-bold text-lg">🌍</span>
                <span className="text-white ml-2 font-semibold">Africa-Wide Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium Flag Accent */}
      <div className="sa-flag-full flag-wave"></div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* Organization Overview */}
        <section className="mb-20 relative">
          {/* Background Flag Elements */}
          <div className="absolute inset-0 overflow-hidden opacity-5">
            <div className="absolute top-10 left-10 w-24 h-18 sa-flag-full rounded-lg"></div>
            <div className="absolute bottom-10 right-10 w-20 h-15 sa-flag-full rounded-lg"></div>
          </div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="corporate-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Who <span className="text-gradient">We Are</span>
            </h2>
            <div className="sa-flag-accent max-w-md mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">`
            <div>
              <div className="relative h-96 bg-gradient-to-br from-corporate-blue/20 to-sa-green/20 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏢</div>
                  <h3 className="corporate-subheading text-2xl font-bold text-gray-800">YCCI Africa</h3>
                  <p className="text-sm text-gray-600">South African Youth Business Chamber</p>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-lg text-gray-600 mb-6">
                The <strong>Youth Chamber of Commerce & Industry Africa (YCCI Africa)</strong> is a national organization committed to supporting and empowering young entrepreneurs across various sectors, enabling them to build successful businesses that contribute to Africa's economic growth and transformation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We serve as the premier platform for youth entrepreneurship, business development, and economic transformation in South Africa and across the continent.
              </p>
              <div className="border-l-4 border-corporate-blue pl-6">
                <p className="text-gray-600 italic">
                  "Together, we're building South Africa's next generation of business leaders."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-gradient-to-br from-corporate-blue to-sa-navy rounded-2xl p-8 text-white">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg text-center">
                To create a self-sustaining, youth-driven business ecosystem that advances entrepreneurial innovation, industrialization, and economic integration in South Africa and across Africa.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-sa-green to-sa-gold rounded-2xl p-8 text-white">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <div className="space-y-3 text-sm">
                <p>• Empower young entrepreneurs through training, mentorship, and funding access</p>
                <p>• Facilitate business growth by connecting youth-led enterprises with investors</p>
                <p>• Expand South African businesses into new markets under AfCFTA</p>
                <p>• Promote sustainable business practices aligned with SDGs</p>
                <p>• Support South Africa's economic transformation under NDP 2030</p>
                <p>• Influence policy to ensure government and private sector support for youth businesses</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Alignment */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Strategic Alignment
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our mission is aligned with key national and international frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-corporate-blue rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🌍</div>
              <h4 className="font-semibold text-gray-900 mb-2">AfCFTA</h4>
              <p className="text-sm text-gray-600">African Continental Free Trade Area - Expanding youth-led businesses across Africa</p>
            </div>
            
            <div className="bg-white border-2 border-sa-blue rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="font-semibold text-gray-900 mb-2">UN SDGs</h4>
              <p className="text-sm text-gray-600">United Nations Sustainable Development Goals - Promoting sustainable businesses</p>
            </div>
            
            <div className="bg-white border-2 border-sa-green rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🏛️</div>
              <h4 className="font-semibold text-gray-900 mb-2">AU Vision 2063</h4>
              <p className="text-sm text-gray-600">African Union Vision - Driving industrialization and digital transformation</p>
            </div>
            
            <div className="bg-white border-2 border-sa-red rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🇿🇦</div>
              <h4 className="font-semibold text-gray-900 mb-2">NDP 2030</h4>
              <p className="text-sm text-gray-600">National Development Plan - Strengthening youth entrepreneurship in South Africa</p>
            </div>
          </div>
        </section>

        {/* Leadership Team Preview */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Leadership
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Led by vibrant, experienced, and visionary young leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gradient-to-br from-corporate-blue to-sa-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">SD</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">HE Siphilangenkosi Dlamini</h4>
              <p className="text-sm text-corporate-blue mb-2">President</p>
              <p className="corporate-body text-sm text-gray-600">Dynamic youth leader, researcher, and social impact advocate currently serving as President of YCCI Africa</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gradient-to-br from-sa-green to-sa-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">TL</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Thando Lukhele</h4>
              <p className="text-sm text-corporate-blue mb-2">Deputy President</p>
              <p className="text-xs text-gray-600">Constitutional Affairs & Partnerships portfolio, President of UCT SRC, passionate about inclusive leadership</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gradient-to-br from-sa-blue to-sa-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">MM</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Michael Mnguni</h4>
              <p className="text-sm text-corporate-blue mb-2">Director of Public Relations</p>
              <p className="text-xs text-gray-600">Seasoned communications expert and public administrator with extensive experience in governance</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a
              href="/about/team"
              className="inline-flex rounded-md bg-corporate-blue px-6 py-3 text-sm font-semibold text-white hover:bg-sa-navy transition-colors"
            >
              Meet Our Full Team
            </a>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <div className="bg-gradient-to-r from-corporate-blue to-sa-navy rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Get Involved with YCCI Africa
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join us in empowering young entrepreneurs and transforming Africa's economy through sustainable business development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/membership"
                className="bg-sa-gold text-corporate-blue px-6 py-3 rounded-md font-semibold hover:bg-sa-white transition-colors"
              >
                Become a Member
              </a>
              <a
                href="/contact"
                className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-corporate-blue transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
