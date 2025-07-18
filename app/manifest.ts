import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'YCCI Africa - Youth Chamber of Commerce & Industry',
    short_name: 'YCCI Africa',
    description: 'South Africa\'s premier youth business chamber empowering young entrepreneurs',
    start_url: '/',
    display: 'standalone',
    background_color: '#003366',
    theme_color: '#003366',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'networking', 'education'],
  }
}
