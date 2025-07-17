import Link from 'next/link'

const coreAreas = [
  {
    id: 1,
    title: "Business Development",
    description: "Supporting young entrepreneurs with mentorship, training, and resources to scale their businesses.",
    icon: "🚀",
    color: "bg-corporate-blue"
  },
  {
    id: 2,
    title: "Policy Advocacy",
    description: "Representing youth interests in policy discussions and advocating for business-friendly regulations.",
    icon: "🏛️",
    color: "bg-sa-green"
  },
  {
    id: 3,
    title: "Networking & Partnerships",
    description: "Creating opportunities for collaboration and partnerships between young business leaders.",
    icon: "🤝",
    color: "bg-sa-gold"
  },
  {
    id: 4,
    title: "Skills Development",
    description: "Providing training programs and workshops to enhance entrepreneurial and business skills.",
    icon: "📚",
    color: "bg-sa-red"
  }
]

export default function CoreAreasPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Core Areas
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We focus on four key areas to empower young entrepreneurs and drive economic growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {coreAreas.map((area) => (
            <div key={area.id} className="text-center group hover:scale-105 transition-transform">
              <div className={`${area.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                {area.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{area.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/core-areas"
            className="inline-flex rounded-md bg-corporate-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            Learn More About Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}
