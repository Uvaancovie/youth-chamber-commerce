import Link from 'next/link'

const events = [
  {
    id: 1,
    title: "Young Entrepreneurs Summit 2025",
    date: "March 15, 2025",
    time: "09:00 - 17:00",
    location: "Sandton Convention Centre, Johannesburg",
    description: "Join us for a full day of networking, keynote speeches, and workshops designed to empower the next generation of business leaders.",
    category: "Summit",
    featured: true
  },
  {
    id: 2,
    title: "Monthly Networking Mixer",
    date: "February 28, 2025",
    time: "18:00 - 21:00",
    location: "The Zone, Rosebank",
    description: "Connect with fellow young entrepreneurs over drinks and light refreshments.",
    category: "Networking"
  },
  {
    id: 3,
    title: "Digital Marketing Workshop",
    date: "March 5, 2025",
    time: "14:00 - 16:00",
    location: "Online via Zoom",
    description: "Learn the latest digital marketing strategies to grow your business online.",
    category: "Workshop"
  }
]

export default function UpcomingEvents() {
  const featuredEvent = events.find(event => event.featured)
  const otherEvents = events.filter(event => !event.featured)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Flag Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-32 h-24 sa-flag-full rounded-lg"></div>
        <div className="absolute bottom-20 right-10 w-28 h-20 sa-flag-full rounded-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-30 sa-flag-full rounded-lg"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="corporate-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Upcoming <span className="text-gradient">Events</span>
          </h2>
          <div className="sa-flag-accent max-w-md mx-auto mb-6"></div>
          <p className="corporate-body text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            Join us at our premium events and connect with South Africa's brightest young entrepreneurs. 
            Experience world-class networking, learning, and business development opportunities.
          </p>
        </div>

        {/* Featured Event */}
        {featuredEvent && (
          <div className="mb-16">
            <div className="premium-card relative overflow-hidden rounded-3xl bg-gradient-to-br from-corporate-blue via-sa-navy to-sa-green text-white shine">
              {/* Flag Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-16 sa-flag-full rounded-bl-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-20 h-12 sa-flag-full rounded-tr-3xl opacity-20"></div>
              
              <div className="px-8 py-12 sm:px-12 sm:py-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center rounded-full bg-sa-gold px-6 py-2 text-sm font-bold text-corporate-blue mb-6 shadow-lg">
                      <span className="mr-2">⭐</span>
                      Featured Event
                    </div>
                    <h3 className="corporate-heading text-3xl font-bold mb-4">{featuredEvent.title}</h3>
                    <p className="corporate-body text-white/90 mb-6 text-lg leading-relaxed">{featuredEvent.description}</p>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center corporate-body text-white/80">
                        <span className="mr-3 text-sa-gold text-lg">📅</span>
                        <span className="font-semibold">{featuredEvent.date} • {featuredEvent.time}</span>
                      </div>
                      <div className="flex items-center corporate-body text-white/80">
                        <span className="mr-3 text-sa-gold text-lg">📍</span>
                        <span className="font-semibold">{featuredEvent.location}</span>
                      </div>
                    </div>
                    <Link
                      href="/events"
                      className="btn-corporate inline-flex items-center px-8 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <span className="mr-3">🎟️</span>
                      Register Now
                      <span className="ml-3">🇿🇦</span>
                    </Link>
                  </div>
                  <div className="hidden lg:block">
                    <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center floating">
                      <div className="text-8xl">🚀</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {otherEvents.map((event, index) => (
            <div key={event.id} className="premium-card rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shine group"
                 style={{animationDelay: `${index * 200}ms`}}>
              {/* Flag accent line */}
              <div className="h-1 sa-flag-accent"></div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-corporate-blue to-sa-green text-white px-4 py-2 text-sm font-bold shadow-md">
                    {event.category}
                  </span>
                  <span className="text-gray-700 font-semibold">{event.date}</span>
                </div>
                <h3 className="card-heading text-xl font-bold mb-3">{event.title}</h3>
                <p className="card-body mb-6 leading-relaxed">{event.description}</p>
                <div className="flex items-center text-gray-600 mb-6">
                  <span className="mr-3 text-sa-green text-lg">🕒</span>
                  <span className="font-medium">{event.time} • {event.location}</span>
                </div>
                <Link
                  href="/events"
                  className="text-corporate-blue hover:text-sa-green font-bold transition-colors flex items-center group"
                >
                  Learn more 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                
                {/* Mini flag accent that appears on hover */}
                <div className="mt-4 w-16 h-1 sa-flag-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/events"
            className="btn-corporate inline-flex items-center px-8 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="mr-3">📅</span>
            View All Events
            <span className="ml-3">🇿🇦</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
