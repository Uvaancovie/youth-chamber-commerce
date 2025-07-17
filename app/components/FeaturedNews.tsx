import Link from 'next/link'

const featuredNews = [
  {
    id: 1,
    title: "YCCI Partners with Major Banks to Provide Youth Funding",
    excerpt: "New partnership opens doors for young entrepreneurs to access affordable business loans and financial services.",
    date: "January 15, 2025",
    category: "Partnership",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Youth Employment Initiative Launches Across 3 Provinces",
    excerpt: "Comprehensive program aims to create 10,000 jobs for young people through skills development and business creation.",
    date: "January 10, 2025",
    category: "Initiative",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Tech Startup Incubator Program Sees Record Applications",
    excerpt: "Over 500 applications received for the 2025 cohort of our flagship technology startup incubator program.",
    date: "January 5, 2025",
    category: "Program",
    image: "/api/placeholder/400/250"
  }
]

export default function FeaturedNews() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest News
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Stay updated with the latest developments in South Africa's youth business ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {featuredNews.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-4xl">📰</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center rounded-full bg-corporate-blue/10 px-2.5 py-0.5 text-xs font-medium text-corporate-blue">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Link
                  href="/news"
                  className="text-corporate-blue hover:text-sa-green text-sm font-medium transition-colors"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/news"
            className="inline-flex rounded-md border border-corporate-blue px-3.5 py-2.5 text-sm font-semibold text-corporate-blue hover:bg-corporate-blue hover:text-white transition-colors"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  )
}
