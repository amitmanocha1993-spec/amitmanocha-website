import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/learn/'],
    },
    sitemap: 'https://www.amitmanocha.co.in/sitemap.xml',
  }
}
