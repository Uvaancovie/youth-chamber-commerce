import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, Tag } from 'lucide-react'
import { notFound } from 'next/navigation'
import { newsArticles, getArticleBySlug } from '../../../lib/news-data'

interface PageProps {
  params: { slug: string }
}

export default function NewsArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="border-b bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <Link
            href="/news"
            className="inline-flex items-center text-corporate-blue hover:text-sa-green transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>
        </div>
      </div>

      {/* Article content */}
      <article className="mx-auto max-w-4xl px-6 py-12">
        {/* Article header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-corporate-blue/10 px-3 py-1 text-sm font-medium text-corporate-blue">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {article.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {article.readTime}
            </div>
          </div>

          {/* Featured image */}
          <div className="aspect-video bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
            <span className="text-gray-400 text-6xl">📰</span>
          </div>
        </header>

        {/* Article excerpt */}
        <div className="text-xl text-gray-600 mb-8 p-4 bg-gray-50 rounded-lg border-l-4 border-corporate-blue">
          {article.excerpt}
        </div>

        {/* Article content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-corporate-blue prose-a:no-underline hover:prose-a:text-sa-green"
          dangerouslySetInnerHTML={{ __html: article.content || '' }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-500">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related articles or CTA */}
        <div className="mt-12 p-6 bg-corporate-blue/5 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Stay Updated
          </h3>
          <p className="text-gray-600 mb-4">
            Get the latest news and updates about youth entrepreneurship in South Africa.
          </p>
          <Link
            href="/membership"
            className="inline-flex rounded-md bg-corporate-blue px-4 py-2 text-sm font-semibold text-white hover:bg-sa-green transition-colors"
          >
            Join YCCI Today
          </Link>
        </div>
      </article>
    </div>
  )
}

// Generate static params for the known articles
export function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }))
}

// Generate metadata for each article
export function generateMetadata({ params }: PageProps) {
  const article = newsArticles.find(article => article.slug === params.slug)

  if (!article) {
    return {
      title: 'Article Not Found | YCCI Africa',
    }
  }

  return {
    title: `${article.title} | YCCI Africa`,
    description: article.excerpt,
  }
}
