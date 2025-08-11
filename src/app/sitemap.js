// src/app/sitemap.js
export default function sitemap() {
  const lastModified = new Date().toISOString();

  return [
    {
      url: 'https://gangaramtravels.com',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://gangaramtravels.com/#rent',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://gangaramtravels.com/#services',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://gangaramtravels.com/#about',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://gangaramtravels.com/#contact',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
