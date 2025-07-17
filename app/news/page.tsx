import Link from 'next/link'

const featuredArticles = [
  {
    id: 1,
    title: "YCCI Partners with Major Banks to Provide Youth Funding",
    excerpt: "New partnership opens doors for young entrepreneurs to access affordable business loans and financial services tailored for emerging businesses.",
    content: "The Youth Chamber of Commerce & Industry (YCCI) Africa has announced a groundbreaking partnership with three major South African banks to create a dedicated funding pool for young entrepreneurs...",
    author: "Sarah Molefe",
    date: "January 15, 2025",
    category: "Partnership",
    readTime: "5 min read",
    featured: true,
    tags: ["Funding", "Banking", "Partnership"]
  },
  {
    id: 2,
    title: "Youth Employment Initiative Launches Across 3 Provinces",
    excerpt: "Comprehensive program aims to create 10,000 jobs for young people through skills development and business creation over the next two years.",
    content: "YCCI Africa, in collaboration with the Department of Small Business Development, has launched an ambitious youth employment initiative...",
    author: "Thabo Mthembu",
    date: "January 10, 2025",
    category: "Initiative",
    readTime: "4 min read",
    featured: true,
    tags: ["Employment", "Skills Development", "Government"]
  }
]

const recentArticles = [
  {
    id: 3,
    title: "Tech Startup Incubator Program Sees Record Applications",
    excerpt: "Over 500 applications received for the 2025 cohort of our flagship technology startup incubator program.",
    author: "Nomsa Khumalo",
    date: "January 5, 2025",
    category: "Program",
    readTime: "3 min read",
    tags: ["Technology", "Startups", "Incubator"]
  },
  {
    id: 4,
    title: "Women Entrepreneurs Summit Announces Star-Studded Lineup",
    excerpt: "Leading female business leaders from across Africa to share insights at this year's summit.",
    author: "Zanele Dube",
    date: "December 20, 2024",
    category: "Events",
    readTime: "2 min read",
    tags: ["Women", "Leadership", "Summit"]
  },
  {
    id: 5,
    title: "YCCI Member Wins International Young Entrepreneur Award",
    excerpt: "Cape Town-based fintech founder recognized for innovative mobile payment solution.",
    author: "James Wilson",
    date: "December 15, 2024",
    category: "Awards",
    readTime: "3 min read",
    tags: ["Awards", "Fintech", "Innovation"]
  },
  {
    id: 6,
    title: "Digital Skills Workshop Series Reaches 1000+ Participants",
    excerpt: "Our monthly digital literacy workshops continue to bridge the skills gap for young entrepreneurs.",
    author: "Priya Patel",
    date: "December 10, 2024",
    category: "Education",
    readTime: "2 min read",
    tags: ["Digital Skills", "Education", "Workshop"]
  },
  {
    id: 7,
    title: "Green Business Challenge 2025 Opens for Applications",
    excerpt: "Young entrepreneurs developing sustainable solutions invited to participate in our environmental impact challenge.",
    author: "Michael Stevens",
    date: "December 5, 2024",
    category: "Competition",
    readTime: "4 min read",
    tags: ["Sustainability", "Environment", "Competition"]
  },
  {
    id: 8,
    title: "Rural Entrepreneurship Program Expands to Eastern Cape",
    excerpt: "Supporting young entrepreneurs in rural communities with mobile training units and digital connectivity.",
    author: "Sipho Ndlovu",
    date: "November 28, 2024",
    category: "Expansion",
    readTime: "3 min read",
    tags: ["Rural Development", "Mobile Training", "Eastern Cape"]
  }
]

const categories = [
  "All",
  "Partnership",
  "Initiative", 
  "Program",
  "Events",
  "Awards",
  "Education",
  "Competition",
  "Expansion"
]

export default function News() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              News & Updates
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 max-w-3xl mx-auto">
              Stay informed about the latest developments in South Africa's youth business ecosystem, 
              YCCI initiatives, and success stories from our community.
            </p>
          </div>
        </div>
      </div>
      <div className="sa-flag-accent"></div>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Stories
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              The latest and most important news from YCCI Africa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-r from-corporate-blue to-sa-green flex items-center justify-center">
                  <span className="text-white text-4xl">📰</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center rounded-full bg-corporate-blue/10 px-3 py-1 text-sm font-medium text-corporate-blue">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    <Link href={`/news/${article.id}`} className="hover:text-corporate-blue transition-colors">
                      {article.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-1">✍️</span>
                      <span className="mr-3">{article.author}</span>
                      <span>{article.date}</span>
                    </div>
                    <Link 
                      href={`/news/${article.id}`}
                      className="text-corporate-blue hover:text-sa-green font-medium text-sm transition-colors"
                    >
                      Read more →
                    </Link>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {article.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All" 
                    ? "bg-corporate-blue text-white" 
                    : "bg-white text-gray-600 hover:bg-corporate-blue hover:text-white border border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Recent Articles
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Catch up on the latest news and insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-3xl">📄</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center rounded-full bg-corporate-blue/10 px-2.5 py-0.5 text-xs font-medium text-corporate-blue">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <Link href={`/news/${article.id}`} className="hover:text-corporate-blue transition-colors">
                      {article.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>By {article.author}</span>
                    <span>{article.date}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {article.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex rounded-md border border-corporate-blue px-6 py-3 text-sm font-semibold text-corporate-blue hover:bg-corporate-blue hover:text-white transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-corporate-blue text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Subscribe to our newsletter and never miss important updates about YCCI initiatives, 
            events, and opportunities for young entrepreneurs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-sa-gold"
            />
            <button className="bg-sa-gold text-corporate-blue px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-gray-300 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Press & Media */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Press & Media
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Resources for journalists and media professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Press Kit</h3>
              <p className="text-gray-600 text-sm mb-4">
                Download our complete press kit with logos, fact sheets, and high-resolution images.
              </p>
              <button className="text-corporate-blue hover:text-sa-green font-medium text-sm transition-colors">
                Download Press Kit
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-sa-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📸</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Media Gallery</h3>
              <p className="text-gray-600 text-sm mb-4">
                Access high-quality photos from our events and activities for editorial use.
              </p>
              <button className="text-corporate-blue hover:text-sa-green font-medium text-sm transition-colors">
                View Gallery
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-sa-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Media Contact</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get in touch with our media relations team for interviews and press inquiries.
              </p>
              <Link 
                href="/contact"
                className="text-corporate-blue hover:text-sa-green font-medium text-sm transition-colors"
              >
                Contact Media Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
