import Link from 'next/link'
import { Calendar, User, Clock, Search, Filter } from 'lucide-react'
import { getRecentArticles, getFeaturedArticles } from '../../lib/news-data'

const featuredArticles = getFeaturedArticles()
const recentArticles = getRecentArticles().slice(3) // Get articles after the featured ones

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-corporate-blue to-sa-green">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              News & Updates
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Stay informed about the latest developments in South Africa's youth business ecosystem
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search news articles..."
                className="w-full md:w-80 rounded-md border-gray-300 pl-10 pr-4 py-2 text-sm focus:border-corporate-blue focus:ring-corporate-blue"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select className="rounded-md border-gray-300 text-sm focus:border-corporate-blue focus:ring-corporate-blue">
                <option>All Categories</option>
                <option>Partnership</option>
                <option>Initiative</option>
                <option>Program</option>
                <option>Events</option>
                <option>Training</option>
                <option>Sustainability</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Featured Articles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main featured article */}
            {featuredArticles[0] && (
              <article className="lg:col-span-1">
                <Link href={`/news/${featuredArticles[0].slug}`} className="group">
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-corporate-blue/20 to-sa-green/20 flex items-center justify-center group-hover:from-corporate-blue/30 group-hover:to-sa-green/30 transition-all">
                      <span className="text-6xl">📰</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center rounded-full bg-corporate-blue/10 px-2.5 py-0.5 text-xs font-medium text-corporate-blue">
                      {featuredArticles[0].category}
                    </span>
                    <span className="text-sm text-gray-500">{featuredArticles[0].date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-corporate-blue transition-colors">
                    {featuredArticles[0].title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {featuredArticles[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredArticles[0].author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredArticles[0].readTime}
                    </div>
                  </div>
                </Link>
              </article>
            )}

            {/* Secondary featured articles */}
            <div className="space-y-6">
              {featuredArticles.slice(1, 3).map((article) => (
                <article key={article.id} className="flex gap-4">
                  <Link href={`/news/${article.slug}`} className="group flex gap-4">
                    <div className="flex-shrink-0 w-32 h-24 bg-gray-200 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-corporate-blue/20 to-sa-green/20 flex items-center justify-center group-hover:from-corporate-blue/30 group-hover:to-sa-green/30 transition-all">
                        <span className="text-2xl">📰</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center rounded-full bg-corporate-blue/10 px-2 py-0.5 text-xs font-medium text-corporate-blue">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">{article.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-corporate-blue transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Recent Articles</h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              Showing {recentArticles.length} articles
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <article key={article.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/news/${article.slug}`} className="group">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                    <span className="text-4xl">📰</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center rounded-full bg-corporate-blue/10 px-2.5 py-0.5 text-xs font-medium text-corporate-blue">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-corporate-blue transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-gradient-to-r from-corporate-blue to-sa-green rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Stay Updated with YCCI News
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get the latest updates about youth entrepreneurship, business opportunities, and YCCI initiatives delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-corporate-blue px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
