export default function Events() {
  const events = [
    {
      id: 1,
      title: "Entrepreneurship Bootcamp 2025",
      date: "2025-08-15",
      day: "15",
      month: "Aug",
      location: "Sandton, Johannesburg",
      description: "Intensive 3-day program covering business fundamentals, funding, and market entry strategies.",
      type: "Workshop"
    },
    {
      id: 2,
      title: "Youth Business Awards Gala",
      date: "2025-09-20",
      day: "20",
      month: "Sep",
      location: "Cape Town International Convention Centre",
      description: "Annual celebration recognizing outstanding young entrepreneurs across South Africa.",
      type: "Awards"
    },
    {
      id: 3,
      title: "Networking Mixer: Tech Entrepreneurs",
      date: "2025-08-28",
      day: "28",
      month: "Aug",
      location: "Durban",
      description: "Connect with fellow tech entrepreneurs and explore collaboration opportunities.",
      type: "Networking"
    },
    {
      id: 4,
      title: "Investment Readiness Workshop",
      date: "2025-09-10",
      day: "10",
      month: "Sep",
      location: "Virtual Event",
      description: "Learn how to prepare your business for investor meetings and funding rounds.",
      type: "Workshop"
    }
  ]

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
            Join us at our upcoming events designed to empower, educate, and connect young entrepreneurs across South Africa.
          </p>
        </div>

        {/* Calendar Embed Placeholder */}
        <div className="mb-12 bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-heading font-bold text-primary mb-4">Event Calendar</h3>
          <div className="bg-gray-100 rounded-lg p-12 text-gray-500">
            <div className="text-6xl mb-4">📅</div>
            <p className="font-body">Google Calendar integration coming soon</p>
            <p className="text-sm mt-2">View all events and RSVP directly through our calendar</p>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="flex items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              {/* Date Badge */}
              <div className="text-white bg-maroon p-4 rounded-lg mr-6 text-center min-w-[80px]">
                <span className="block text-2xl font-heading font-bold">{event.day}</span>
                <span className="block text-sm font-body">{event.month}</span>
              </div>
              
              {/* Event Details */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-heading font-bold text-primary mb-2">{event.title}</h4>
                    <p className="font-body text-gray-600 mb-2">{event.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <span className="mr-1">📍</span>
                        {event.location}
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">🏷️</span>
                        {event.type}
                      </span>
                    </div>
                  </div>
                  
                  {/* Register Button */}
                  <button className="bg-gold text-primary px-6 py-2 rounded-lg font-heading font-semibold hover:bg-gold/90 transition-colors ml-4">
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events CTA */}
        <div className="text-center mt-12">
          <a
            href="/events"
            className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Events
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
