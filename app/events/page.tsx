import Link from 'next/link'

const upcomingEvents = [
  {
    id: 1,
    title: "Young Entrepreneurs Summit 2025",
    date: "March 15, 2025",
    time: "09:00 - 17:00",
    location: "Sandton Convention Centre, Johannesburg",
    description: "Join us for a full day of networking, keynote speeches, and workshops designed to empower the next generation of business leaders. This flagship event brings together over 500 young entrepreneurs, investors, and industry experts.",
    category: "Summit",
    price: "R250",
    featured: true,
    speakers: ["Sipho Dlamini - CEO YCCI", "Dr. Sarah Molefe - Venture Capitalist", "James Thompson - Tech Entrepreneur"],
    agenda: [
      "09:00 - Registration & Networking Breakfast",
      "10:00 - Opening Keynote: The Future of African Entrepreneurship",
      "11:30 - Panel: Access to Funding for Young Entrepreneurs",
      "13:00 - Networking Lunch",
      "14:30 - Workshops: Digital Marketing, Financial Planning, Leadership",
      "16:00 - Closing Keynote: Building Resilient Businesses",
      "17:00 - Networking Cocktail"
    ]
  },
  {
    id: 2,
    title: "Monthly Networking Mixer",
    date: "February 28, 2025",
    time: "18:00 - 21:00",
    location: "The Zone, Rosebank",
    description: "Connect with fellow young entrepreneurs over drinks and light refreshments. A relaxed environment to share ideas, find collaborators, and build lasting business relationships.",
    category: "Networking",
    price: "R100"
  },
  {
    id: 3,
    title: "Digital Marketing Workshop",
    date: "March 5, 2025",
    time: "14:00 - 16:00",
    location: "Online via Zoom",
    description: "Learn the latest digital marketing strategies to grow your business online. Covering social media marketing, content creation, SEO basics, and paid advertising fundamentals.",
    category: "Workshop",
    price: "Free for Members"
  },
  {
    id: 4,
    title: "Pitch Perfect: Investor Readiness Bootcamp",
    date: "March 20, 2025",
    time: "09:00 - 16:00",
    location: "Innovation Hub, Pretoria",
    description: "Intensive one-day bootcamp to prepare your business for investor presentations. Learn to craft compelling pitches, understand investor expectations, and practice with real VCs.",
    category: "Bootcamp",
    price: "R350"
  },
  {
    id: 5,
    title: "Women in Business Leadership Forum",
    date: "April 10, 2025",
    time: "10:00 - 15:00",
    location: "Cape Town International Convention Centre",
    description: "Celebrating and empowering women entrepreneurs with inspiring stories, practical workshops, and networking opportunities specifically designed for female business leaders.",
    category: "Forum",
    price: "R200"
  },
  {
    id: 6,
    title: "Tech Startup Showcase",
    date: "April 25, 2025",
    time: "18:00 - 21:00",
    location: "University of Witwatersrand, Johannesburg",
    description: "Platform for tech startups to demonstrate their innovations to potential investors, partners, and customers. Featuring 20 startups across various tech sectors.",
    category: "Showcase",
    price: "R150"
  }
]

const pastEvents = [
  {
    id: 7,
    title: "Annual Gala Dinner 2024",
    date: "December 5, 2024",
    description: "Our biggest networking event of the year with over 300 attendees, recognizing outstanding young entrepreneurs.",
    attendees: 300,
    photos: 50
  },
  {
    id: 8,
    title: "Financial Literacy Workshop Series",
    date: "November 2024",
    description: "3-part workshop series covering personal finance, business accounting, and investment strategies.",
    attendees: 150,
    sessions: 3
  }
]

export default function Events() {
  const featuredEvent = upcomingEvents.find(event => event.featured)
  const otherEvents = upcomingEvents.filter(event => !event.featured)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Events & Workshops
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 max-w-3xl mx-auto">
              Join our dynamic community at networking events, educational workshops, 
              and business development programs designed to accelerate your entrepreneurial journey.
            </p>
          </div>
        </div>
      </div>
      <div className="sa-flag-accent"></div>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="inline-flex items-center rounded-full bg-sa-gold px-3 py-1 text-sm font-medium text-corporate-blue">
                Featured Event
              </span>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredEvent.title}</h2>
                  <p className="text-gray-600 mb-6">{featuredEvent.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <span className="mr-3">📅</span>
                      <div>
                        <div className="font-semibold">{featuredEvent.date}</div>
                        <div className="text-sm text-gray-500">{featuredEvent.time}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-3">📍</span>
                      <div className="font-semibold">{featuredEvent.location}</div>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-3">💰</span>
                      <div className="font-semibold">{featuredEvent.price}</div>
                    </div>
                  </div>

                  {featuredEvent.speakers && (
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Featured Speakers</h3>
                      <ul className="space-y-1">
                        {featuredEvent.speakers.map((speaker, index) => (
                          <li key={index} className="text-gray-600 text-sm">• {speaker}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button className="bg-corporate-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                    Register Now
                  </button>
                </div>
                
                <div className="bg-corporate-blue p-8 lg:p-12 text-white">
                  <h3 className="text-xl font-bold mb-6">Event Agenda</h3>
                  {featuredEvent.agenda && (
                    <ul className="space-y-3">
                      {featuredEvent.agenda.map((item, index) => (
                        <li key={index} className="text-sm flex">
                          <span className="text-sa-gold mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Upcoming Events
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Don't miss these exciting opportunities to learn, network, and grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center rounded-full bg-corporate-blue/10 px-2.5 py-0.5 text-xs font-medium text-corporate-blue">
                      {event.category}
                    </span>
                    <span className="text-sm font-semibold text-sa-green">{event.price}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">📅</span>
                      {event.date} • {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">📍</span>
                      {event.location}
                    </div>
                  </div>
                  
                  <button className="w-full bg-corporate-blue text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Event Categories
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Explore different types of events we offer throughout the year
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Networking</h3>
              <p className="text-gray-600 text-sm">
                Monthly mixers, cocktail events, and informal meetups to connect with fellow entrepreneurs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sa-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Workshops</h3>
              <p className="text-gray-600 text-sm">
                Hands-on learning sessions covering business skills, digital marketing, finance, and more.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sa-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎤</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Conferences</h3>
              <p className="text-gray-600 text-sm">
                Large-scale events with keynote speakers, panel discussions, and industry insights.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sa-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Showcases</h3>
              <p className="text-gray-600 text-sm">
                Pitch competitions, startup demos, and opportunities to present your business to investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Past Events
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Look back at some of our successful events and their impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>📅 {event.date}</span>
                  <span>👥 {event.attendees} attendees</span>
                  {event.sessions && <span>📚 {event.sessions} sessions</span>}
                  {event.photos && <span>📸 {event.photos} photos</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="inline-flex rounded-md border border-corporate-blue px-4 py-2 text-sm font-semibold text-corporate-blue hover:bg-corporate-blue hover:text-white transition-colors">
              View Event Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-corporate-blue text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to Join Our Next Event?
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Don't miss out on valuable networking opportunities and learning experiences. 
            Register for upcoming events or become a member for exclusive access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="bg-sa-gold text-corporate-blue px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
            >
              Become a Member
            </Link>
            <button className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-corporate-blue transition-colors">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
