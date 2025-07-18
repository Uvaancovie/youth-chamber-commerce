import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-corporate-blue via-sa-navy to-sa-green relative overflow-hidden">
      {/* Floating South African Flag Elements */}
      <div className="absolute top-10 left-10 floating">
        <div className="w-16 h-12 sa-flag-full rounded-md shadow-lg opacity-20"></div>
      </div>
      <div className="absolute top-20 right-20 floating" style={{animationDelay: '1s'}}>
        <div className="w-12 h-8 sa-flag-full rounded-md shadow-lg opacity-20"></div>
      </div>
      <div className="absolute bottom-20 left-1/4 floating" style={{animationDelay: '2s'}}>
        <div className="w-10 h-6 sa-flag-full rounded-md shadow-lg opacity-20"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="corporate-heading text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Ready to Shape the <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-sa-gold via-white to-sa-green">Future of Business</span>?
          </h2>
          <div className="sa-flag-full max-w-lg mx-auto mb-8"></div>
          <p className="corporate-body text-xl leading-8 text-white/90 max-w-4xl mx-auto">
            Join a dynamic community of ambitious young entrepreneurs who are building the businesses of tomorrow. 
            Get exclusive access to premium networking events, world-class mentorship programs, and cutting-edge business development resources.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/membership"
              className="btn-corporate inline-flex items-center px-8 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="mr-3">🚀</span>
              Apply for Membership
              <span className="ml-3">🇿🇦</span>
            </Link>
            <Link
              href="/events"
              className="corporate-body text-lg font-semibold text-white hover:text-sa-gold transition-colors border-2 border-white/30 rounded-2xl px-8 py-4 hover:border-sa-gold/50 backdrop-blur-sm hover:bg-white/10"
            >
              <span className="mr-3">📅</span>
              Attend an Event
              <span className="ml-3">→</span>
            </Link>
          </div>
          
          <div className="mt-8 flex justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <span className="text-sa-gold font-bold text-lg">🏆</span>
              <span className="text-white ml-2 font-semibold">Award-Winning Community</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <span className="text-sa-gold font-bold text-lg">💼</span>
              <span className="text-white ml-2 font-semibold">R2M+ Funding Facilitated</span>
            </div>
          </div>
        </div>

        {/* Premium Success Stories */}
        <div className="mt-20">
          <h3 className="corporate-heading text-3xl font-bold text-white text-center mb-12">
            Success Stories from Our <span className="text-sa-gold">Champions</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="premium-card rounded-3xl p-8 bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-all duration-300 shine">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sa-gold to-corporate-blue rounded-full flex items-center justify-center mr-4 shadow-xl floating">
                  <span className="text-white font-bold text-lg">TS</span>
                </div>
                <div>
                  <div className="text-white font-bold corporate-subheading">Thabo Sithole</div>
                  <div className="text-sa-gold text-sm font-semibold">Tech Entrepreneur</div>
                </div>
              </div>
              <p className="text-white/90 corporate-body leading-relaxed">
                "YCCI connected me with world-class mentors who helped me scale my fintech startup. 
                We've now raised R5M in funding and serve over 10,000 customers across South Africa."
              </p>
              <div className="mt-4 w-16 h-1 sa-flag-accent rounded-full"></div>
            </div>

            <div className="premium-card rounded-3xl p-8 bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-all duration-300 shine" style={{animationDelay: '200ms'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sa-green to-sa-gold rounded-full flex items-center justify-center mr-4 shadow-xl floating" style={{animationDelay: '300ms'}}>
                  <span className="text-white font-bold text-lg">NM</span>
                </div>
                <div>
                  <div className="text-white font-bold corporate-subheading">Nomsa Mthembu</div>
                  <div className="text-sa-gold text-sm font-semibold">Fashion Designer</div>
                </div>
              </div>
              <p className="text-white/90 corporate-body leading-relaxed">
                "Through YCCI's premium network, I found international buyers for my sustainable 
                fashion brand. We're now exporting to 8 countries across Africa and beyond."
              </p>
              <div className="mt-4 w-16 h-1 sa-flag-accent rounded-full"></div>
            </div>

            <div className="premium-card rounded-3xl p-8 bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-all duration-300 shine" style={{animationDelay: '400ms'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sa-red to-sa-green rounded-full flex items-center justify-center mr-4 shadow-xl floating" style={{animationDelay: '600ms'}}>
                  <span className="text-white font-bold text-lg">JK</span>
                </div>
                <div>
                  <div className="text-white font-bold corporate-subheading">James Kruger</div>
                  <div className="text-sa-gold text-sm font-semibold">AgriTech Founder</div>
                </div>
              </div>
              <p className="text-white/90 corporate-body leading-relaxed">
                "The cutting-edge skills development programs at YCCI taught me digital marketing 
                strategies that tripled my agricultural consultancy business revenue."
              </p>
              <div className="mt-4 w-16 h-1 sa-flag-accent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
