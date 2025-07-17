import Link from 'next/link'

export default function Hero() {
  return (
    <div className="hero-gradient text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Empowering Young 
            <span className="text-sa-gold"> Entrepreneurs</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            Join South Africa's premier youth chamber of commerce and industry. 
            Connect with like-minded entrepreneurs, access mentorship programs, 
            and drive economic growth across the continent.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/membership"
              className="rounded-md bg-sa-gold px-3.5 py-2.5 text-sm font-semibold text-corporate-blue shadow-sm hover:bg-yellow-400 transition-colors"
            >
              Become a Member
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-semibold leading-6 text-white hover:text-sa-gold transition-colors"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-sa-gold">500+</div>
            <div className="mt-2 text-sm text-gray-200">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sa-gold">50+</div>
            <div className="mt-2 text-sm text-gray-200">Partner Organizations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sa-gold">100+</div>
            <div className="mt-2 text-sm text-gray-200">Events Hosted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sa-gold">₹2M+</div>
            <div className="mt-2 text-sm text-gray-200">Funding Facilitated</div>
          </div>
        </div>
      </div>
    </div>
  )
}
