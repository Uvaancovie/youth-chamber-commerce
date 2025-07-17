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
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Join us at our upcoming events and connect with South Africa's brightest young entrepreneurs
          </p>
        </div>

        {/* Featured Event */}
        {featuredEvent && (
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-2xl bg-corporate-blue text-white">
              <div className="px-8 py-12 sm:px-12 sm:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center rounded-full bg-sa-gold px-3 py-1 text-sm font-medium text-corporate-blue mb-4">
                      Featured Event
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{featuredEvent.title}</h3>
                    <p className="text-gray-100 mb-6">{featuredEvent.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm">
                        <span className="mr-2">📅</span>
                        {featuredEvent.date} • {featuredEvent.time}
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="mr-2">📍</span>
                        {featuredEvent.location}
                      </div>
                    </div>
                    <Link
                      href="/events"
                      className="inline-flex rounded-md bg-sa-gold px-3.5 py-2.5 text-sm font-semibold text-corporate-blue shadow-sm hover:bg-yellow-400 transition-colors"
                    >
                      Register Now
                    </Link>
                  </div>
                  <div className="hidden lg:block">
                    <div className="aspect-square bg-sa-green/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {otherEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center rounded-full bg-corporate-blue/10 px-2.5 py-0.5 text-xs font-medium text-corporate-blue">
                    {event.category}
                  </span>
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-2">🕒</span>
                  {event.time} • {event.location}
                </div>
                <Link
                  href="/events"
                  className="text-corporate-blue hover:text-sa-green text-sm font-medium transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/events"
            className="inline-flex rounded-md border border-corporate-blue px-3.5 py-2.5 text-sm font-semibold text-corporate-blue hover:bg-corporate-blue hover:text-white transition-colors"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  )
}
