import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/studio/'],
    },
    sitemap: 'https://ampmarketing-io-enhanced-ux.netlify.app/sitemap.xml',
  };
}
