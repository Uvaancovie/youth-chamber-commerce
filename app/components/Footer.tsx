import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="sa-flag-accent"></div>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-sa-gold rounded-full flex items-center justify-center">
                <span className="text-corporate-blue font-bold text-lg">Y</span>
              </div>
              <div>
                <div className="font-bold text-xl">YCCI Africa</div>
                <div className="text-sm text-gray-300">Youth Chamber of Commerce & Industry</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering young entrepreneurs and business leaders across South Africa through 
              networking, mentorship, and advocacy for economic growth and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sa-gold transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-sa-gold transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-sa-gold transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-sa-gold transition-colors">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-sa-gold transition-colors">About Us</Link></li>
              <li><Link href="/membership" className="text-gray-300 hover:text-sa-gold transition-colors">Membership</Link></li>
              <li><Link href="/core-areas" className="text-gray-300 hover:text-sa-gold transition-colors">Core Areas</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-sa-gold transition-colors">Events</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-sa-gold transition-colors">News</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-sa-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>📍 Johannesburg, South Africa</p>
              <p>📧 info@ycciafrica.co.za</p>
              <p>📞 +27 11 xxx xxxx</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Youth Chamber of Commerce & Industry. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-sa-gold text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-sa-gold text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
