'use client'

import { useState, useEffect } from 'react'

export default function FloatingSAFlag() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Show flag when user scrolls down
      const scrollTop = window.pageYOffset
      setIsVisible(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className={`fixed bottom-8 right-8 z-40 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="group">
        {/* Main Flag Container */}
        <div className="relative">
          <div className="w-16 h-12 sa-flag-full rounded-lg shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer floating">
            <div className="absolute inset-0 bg-black/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-1">
            <div className="bg-gradient-to-r from-corporate-blue to-sa-navy text-white px-4 py-2 rounded-lg shadow-xl text-sm font-semibold whitespace-nowrap">
              <div className="corporate-subheading">🇿🇦 YCCI Africa</div>
              <div className="corporate-body text-xs text-sa-gold mt-1">Building Tomorrow's Economy</div>
              {/* Arrow */}
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-corporate-blue"></div>
            </div>
          </div>
        </div>

        {/* Pulse Animation Ring */}
        <div className="absolute inset-0 rounded-lg">
          <div className="absolute inset-0 rounded-lg border-2 border-sa-gold animate-ping opacity-20"></div>
          <div className="absolute inset-0 rounded-lg border border-sa-green animate-pulse opacity-30" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Mini Social Icons */}
        <div className="absolute -top-2 -left-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-0">
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-sa-gold to-sa-green rounded-full flex items-center justify-center shadow-lg">
              <span className="text-[8px] text-corporate-blue">💼</span>
            </div>
            <div className="w-4 h-4 bg-gradient-to-br from-sa-green to-corporate-blue rounded-full flex items-center justify-center shadow-lg">
              <span className="text-[8px] text-white">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
