import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found | YCCI Africa',
  description: 'The page you are looking for does not exist. Return to YCCI Africa homepage to explore our youth entrepreneurship programs and business opportunities.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 text-center">
        <div>
          <div className="mx-auto h-20 w-20 text-[#007749] mb-6">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h1 className="text-6xl font-bold text-[#003366] mb-4">404</h1>
          <h2 className="corporate-heading text-2xl mb-4">Page Not Found</h2>
          <p className="corporate-body text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL or the page has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#003366] hover:bg-[#004080] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003366] transition-all duration-200"
          >
            Return to Homepage
          </Link>
          
          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-4">Popular pages:</p>
            <div className="space-x-4 text-sm">
              <Link href="/membership" className="text-[#007749] hover:underline">
                Membership
              </Link>
              <Link href="/events" className="text-[#007749] hover:underline">
                Events
              </Link>
              <Link href="/news" className="text-[#007749] hover:underline">
                News
              </Link>
              <Link href="/contact" className="text-[#007749] hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            YCCI Africa - Empowering Young Entrepreneurs
          </p>
        </div>
      </div>
    </div>
  )
}
