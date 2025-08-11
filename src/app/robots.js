// src/app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private',
    },
    sitemap: 'https://gangaramtravels.com/sitemap.xml',
  };
}
