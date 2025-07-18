import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // YCCISA Brand Colors (from feedback1.md)
        'primary': '#0F173E',        // header/footer blue (corporate dark navy)
        'gold': '#F6A003',           // CTA, hover (vibrant gold)
        'maroon': '#9B1A37',         // subheads, accents (deep red)
        'teal': '#0B97C0',           // links, highlights (accent teal)
        
        // Legacy South African flag colors (kept for compatibility)
        'corporate-blue': '#003366', // Superman-inspired corporate blue
        'sa-green': '#007749',       // South African flag green
        'sa-gold': '#FFB612',        // South African flag gold
        'sa-red': '#DE3831',         // South African flag red
        'sa-blue': '#002395',        // South African flag blue
        'sa-black': '#000000',       // South African flag black
        'sa-white': '#FFFFFF',       // South African flag white
        'sa-navy': '#001a33',        // Deep navy for premium look
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        'display': ['var(--font-playfair)', 'Playfair Display', 'serif'],
        'heading': ['Lato', 'sans-serif'],     // From feedback1.md
        'body': ['Montserrat', 'sans-serif'],  // From feedback1.md
      },
      animation: {
        'flag-wave': 'flag-wave 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shine': 'shine 2s ease-in-out infinite',
      },
      keyframes: {
        'flag-wave': {
          '0%, 100%': { transform: 'translateX(0) scaleX(1)' },
          '50%': { transform: 'translateX(2px) scaleX(1.02)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shine': {
          '0%': { transform: 'translateX(-100%)' },
          '50%, 100%': { transform: 'translateX(100%)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'corporate': '0 10px 25px -5px rgba(0, 51, 102, 0.1), 0 8px 10px -6px rgba(0, 51, 102, 0.1)',
        'flag': '0 4px 15px rgba(0, 119, 73, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
