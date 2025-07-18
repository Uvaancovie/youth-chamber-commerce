'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const navigation = [
  { 
    name: 'Home', 
    href: '/',
    dropdown: []
  },
  { 
    name: 'About', 
    href: '/about',
    dropdown: [
      { name: 'Our Story', href: '/about' },
      { name: 'Leadership Team', href: '/about#leadership' },
      { name: 'Mission & Vision', href: '/about#mission' },
      { name: 'Partners', href: '/about#partners' }
    ]
  },
  { 
    name: 'Membership', 
    href: '/membership',
    dropdown: [
      { name: 'Join YCCISA', href: '/membership' },
      { name: 'Member Benefits', href: '/membership#benefits' },
      { name: 'Membership Tiers', href: '/membership#tiers' },
      { name: 'Application Process', href: '/membership#process' }
    ]
  },
  { 
    name: 'Core Areas', 
    href: '/core-areas',
    dropdown: [
      { name: 'All Programs', href: '/core-areas' },
      { name: 'Mentorship', href: '/core-areas#mentorship' },
      { name: 'Training & Development', href: '/core-areas#training' },
      { name: 'Networking Events', href: '/core-areas#networking' },
      { name: 'Business Support', href: '/core-areas#support' }
    ]
  },
  { 
    name: 'News', 
    href: '/news',
    dropdown: [
      { name: 'Latest News', href: '/news' },
      { name: 'Media Center', href: '/news#media' }
    ]
  },
  { 
    name: 'Events', 
    href: '/events',
    dropdown: [
      { name: 'Upcoming Events', href: '/events' },
      { name: 'Past Events', href: '/events#past' }
    ]
  },
  { 
    name: 'Contact', 
    href: '/contact',
    dropdown: []
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <>
      {/* South African Flag Top Bar */}
      <div className="sa-flag-full h-2 flag-wave"></div>
      
      <header className="bg-primary shadow-2xl sticky top-0 z-50 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 group">
              <span className="sr-only">YCCISA - Youth Chamber of Commerce & Industry South Africa</span>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img 
                    src="/Official YCCi SA_2025.png" 
                    alt="YCCISA Logo" 
                    className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-white">
                  <div className="font-heading font-bold text-2xl tracking-tight text-on-blue">YCCISA</div>
                  <div className="font-body text-xs opacity-90 text-gold">Youth Chamber of Commerce & Industry South Africa</div>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-xl p-3 text-on-blue hover:bg-white/10 transition-all duration-200 group"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
            </button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-2">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown.length > 0 && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="font-heading flex items-center text-sm font-semibold leading-6 nav-text-blue transition-all duration-200 px-4 py-3 rounded-lg hover:bg-white/10 hover:text-gold"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  {item.name}
                  {item.dropdown.length > 0 && (
                    <ChevronDown className="ml-1 h-4 w-4 transform transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown.length > 0 && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-100 transform rotate-45"></div>
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-3 text-sm font-medium nav-text-white hover:bg-gradient-to-r hover:from-primary/5 hover:to-teal/5 hover:text-primary transition-all duration-200 border-l-2 border-transparent hover:border-gold"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
            <Link
              href="/contact"
              className="font-heading text-sm font-semibold nav-text-blue hover:text-gold transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
            >
              Get in Touch
            </Link>
            <Link
              href="/membership"
              className="btn-corporate inline-flex items-center rounded-xl bg-gradient-to-r from-gold to-maroon px-4 py-2.5 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span className="mr-2">🚀</span>
              Join YCCISA
              <span className="ml-2">🇿🇦</span>
            </Link>
          </div>
        </nav>
      {/* Professional Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary sm:max-w-sm border-l border-gold/20 shadow-2xl">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <Link href="/" className="-m-1.5 p-1.5 group" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">YCCISA</span>
                <div className="flex items-center space-x-3">
                  <img 
                    src="/icon.png" 
                    alt="YCCISA Icon" 
                    className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="text-on-blue">
                    <div className="font-heading font-bold text-xl">YCCISA</div>
                    <div className="font-body text-xs opacity-90 text-gold">Youth Chamber</div>
                  </div>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-lg p-2.5 text-on-blue hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            {/* Mobile Navigation */}
            <div className="px-6 py-6">
              <div className="sa-flag-accent mb-6 rounded-full"></div>
              <nav className="space-y-2">
                {navigation.map((item, index) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="font-heading flex items-center rounded-xl px-4 py-4 text-base font-semibold text-on-blue hover:text-gold hover:bg-white/10 transition-all duration-200 group transform hover:translate-x-2"
                      onClick={() => item.dropdown.length === 0 && setMobileMenuOpen(false)}
                      style={{animationDelay: `${index * 50}ms`}}
                    >
                      <span className="mr-4 text-gold group-hover:scale-110 transition-transform duration-200">→</span>
                      <span className="flex-1">{item.name}</span>
                      {item.dropdown.length > 0 && (
                        <ChevronDown className="h-4 w-4 text-gold" />
                      )}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gold">✨</span>
                    </Link>
                    
                    {/* Mobile Dropdown Items */}
                    {item.dropdown.length > 0 && (
                      <div className="ml-8 mt-2 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-on-blue/80 hover:text-gold hover:bg-white/5 rounded-lg transition-all duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              
              {/* Mobile CTA Section */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-xl border-2 border-white/20 px-6 py-3 text-base font-semibold text-on-blue hover:bg-white/10 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mr-2">📞</span>
                  Get in Touch
                </Link>
                
                <Link
                  href="/membership"
                  className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-gold to-maroon px-6 py-4 text-base font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mr-2">🚀</span>
                  Join YCCISA Today
                  <span className="ml-2">🇿🇦</span>
                </Link>
              </div>
              
              {/* Mobile Footer Info */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="corporate-body text-xs text-on-blue/70 mb-2">
                  Building South Africa's Future Economy
                </p>
                <div className="flex justify-center items-center space-x-4 text-xs text-sa-gold">
                  <span>🏆 500+ Members</span>
                  <span>🇿🇦 Proudly SA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  )
}
