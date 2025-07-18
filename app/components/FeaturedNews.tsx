import Link from 'next/link'
import { getFeaturedArticles } from '../../lib/news-data'

const featuredNews = getFeaturedArticles()

export default function FeaturedNews() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003366' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="corporate-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Latest <span className="text-gradient">News</span>
          </h2>
          <div className="sa-flag-accent max-w-md mx-auto mb-6"></div>
          <p className="corporate-body text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments in South Africa's youth business ecosystem. 
            Discover stories of success, innovation, and transformation across the continent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredNews.map((article, index) => (
            <article key={article.id} className="premium-card rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shine group"
                     style={{animationDelay: `${index * 200}ms`}}>
              {/* Premium image placeholder with flag accent */}
              <div className="aspect-video bg-gradient-to-br from-corporate-blue to-sa-green flex items-center justify-center relative">
                <div className="absolute top-0 right-0 w-16 h-10 sa-flag-full rounded-bl-2xl opacity-30"></div>
                <span className="text-white text-6xl floating" style={{animationDelay: `${index * 300}ms`}}>📰</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-corporate-blue to-sa-green text-white px-4 py-2 text-sm font-bold shadow-md">
                    {article.category}
                  </span>
                  <span className="text-gray-700 font-semibold">{article.date}</span>
                </div>
                <h3 className="card-heading text-xl font-bold mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="card-body mb-6 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                <Link
                  href={`/news/${article.slug}`}
                  className="text-corporate-blue hover:text-sa-green font-bold transition-colors flex items-center group"
                >
                  Read more 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                
                {/* Mini flag accent that appears on hover */}
                <div className="mt-4 w-16 h-1 sa-flag-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/news"
            className="btn-corporate inline-flex items-center px-8 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="mr-3">📰</span>
            View All News
            <span className="ml-3">🇿🇦</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
