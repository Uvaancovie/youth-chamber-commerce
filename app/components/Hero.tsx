import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen bg-[url('/close-up-person-working-alternative-energy.jpg')] bg-cover bg-center relative">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 lg:px-8">
        <div className="bg-black/50 p-8 max-w-4xl mx-auto text-center text-white rounded-2xl backdrop-blur-sm">
          <h1 className="text-5xl font-heading font-bold text-white mb-6 sm:text-6xl lg:text-7xl">
            Empowering Young <span className="text-gold">Entrepreneurs</span>
          </h1>
          <p className="mt-4 text-lg font-body text-white/90 leading-relaxed max-w-3xl mx-auto">
            Connecting, educating, and inspiring the next generation of South African business leaders. 
            Join YCCISA and be part of a movement that's transforming our economy.
          </p>
          <div className="mt-8">
            <Link
              href="#events"
              className="inline-flex items-center bg-gold text-primary px-8 py-4 rounded-xl text-lg font-heading font-bold hover:bg-gold/90 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <span className="mr-2">📅</span>
              Upcoming Events
              <span className="ml-2">→</span>
            </Link>
          </div>
          
          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-gold mb-2">500+</div>
              <div className="text-white/90 font-body">Active Members</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-gold mb-2">50+</div>
              <div className="text-white/90 font-body">Partner Organizations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-gold mb-2">R2M+</div>
              <div className="text-white/90 font-body">Funding Facilitated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
