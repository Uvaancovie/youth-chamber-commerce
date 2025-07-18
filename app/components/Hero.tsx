import Link from 'next/link'

export default function Hero() {
  return (
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
              Empowering Young <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-sa-gold via-white to-sa-green">Entrepreneurs</span>
            </h1>
            <div className="sa-flag-full max-w-md mx-auto mb-6"></div>
          </div>
          <p className="corporate-body mt-6 text-xl leading-8 text-gray-100 max-w-4xl mx-auto">
            Join South Africa's premier youth chamber of commerce and industry. 
            Connect with 500+ like-minded entrepreneurs, access world-class mentorship programs, 
            and drive economic growth across the continent.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/membership"
              className="btn-corporate inline-flex items-center px-8 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="mr-3">🚀</span>
              Become a Member
              <span className="ml-3">🇿🇦</span>
            </Link>
            <Link 
              href="/about" 
              className="corporate-body text-lg font-semibold leading-6 text-white hover:text-sa-gold transition-colors border-2 border-white/30 rounded-xl px-6 py-3 hover:border-sa-gold/50 backdrop-blur-sm"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
          
          <div className="mt-8 flex justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <span className="text-sa-gold font-bold text-lg">🇿🇦</span>
              <span className="text-white ml-2 font-semibold">Proudly South African</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <span className="text-sa-gold font-bold text-lg">🌍</span>
              <span className="text-white ml-2 font-semibold">AfCFTA Aligned</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium Stats Section */}
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-16">
          <div className="premium-card text-center p-6 rounded-3xl shine bg-white/10 backdrop-blur-md border-white/20">
            <div className="text-4xl font-bold text-sa-gold mb-2 floating">500+</div>
            <div className="text-white/90">Active Members</div>
            <div className="mt-2 w-12 h-1 sa-flag-accent mx-auto rounded-full"></div>
          </div>
          <div className="premium-card text-center p-6 rounded-3xl shine bg-white/10 backdrop-blur-md border-white/20" style={{animationDelay: '200ms'}}>
            <div className="text-4xl font-bold text-sa-gold mb-2 floating" style={{animationDelay: '300ms'}}>50+</div>
            <div className="text-white/90">Partner Organizations</div>
            <div className="mt-2 w-12 h-1 sa-flag-accent mx-auto rounded-full"></div>
          </div>
          <div className="premium-card text-center p-6 rounded-3xl shine bg-white/10 backdrop-blur-md border-white/20" style={{animationDelay: '400ms'}}>
            <div className="text-4xl font-bold text-sa-gold mb-2 floating" style={{animationDelay: '600ms'}}>100+</div>
            <div className="text-white/90">Events Hosted</div>
            <div className="mt-2 w-12 h-1 sa-flag-accent mx-auto rounded-full"></div>
          </div>
          <div className="premium-card text-center p-6 rounded-3xl shine bg-white/10 backdrop-blur-md border-white/20" style={{animationDelay: '600ms'}}>
            <div className="text-4xl font-bold text-sa-gold mb-2 floating" style={{animationDelay: '900ms'}}>R2M+</div>
            <div className="text-white/90">Funding Facilitated</div>
            <div className="mt-2 w-12 h-1 sa-flag-accent mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
