// src/app/layout.js
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { StrictMode } from 'react';
import { CurrencyProvider } from './Context/CurrencyContext';

export const metadata = {
  title: 'Gangaram Travels | Car Rentals in Agra at Best Prices',
  description:
    'Rent reliable and affordable cars in Agra with Gangaram Travels. Choose from a wide range of vehicles for self-drive or chauffeur service. Easy booking and 24/7 support.',
  keywords:
    'car rental Agra, car hire Agra, rent a car Agra, Gangaram Travels, Agra cab service, chauffeur cars, self drive Agra, car services, Agra taxi service, Agra travel agency, car rental near me,Airport taxi service',
  metadataBase: new URL('https://gangaramtravels.com'),
  openGraph: {
    title: 'Gangaram Travels | Car Rentals in Agra',
    description:
      'Affordable and reliable car rentals in Agra. Book with Gangaram Travels for top-rated travel services.',
    url: 'https://gangaramtravels.com',
    siteName: 'Gangaram Travels',
    images: [
      {
        url: 'https://gangaramtravels.com/og-image.jpg', // Put this image in your public folder
        width: 1200,
        height: 630,
        alt: 'Gangaram Travels Agra Car Rental',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gangaram Travels - Car Rentals in Agra',
    description:
      'Reliable car rental service in Agra. Chauffeur and self-drive options available. Book now with Gangaram Travels.',
    images: ['https://gangaramtravels.com/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CarRental',
              name: 'Gangaram Travels',
              url: 'https://gangaramtravels.com',
              telephone: '+91-1234567890',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Near MG Road, Agra',
                addressLocality: 'Agra',
                addressRegion: 'Uttar Pradesh',
                postalCode: '282001',
                addressCountry: 'IN',
              },
              openingHours: 'Mo-Su 08:00-22:00',
              priceRange: '₹₹',
              areaServed: 'Agra',
            }),
          }}
        />
      </head>
      <body>
        <StrictMode>
          <CurrencyProvider>{children}</CurrencyProvider>
        </StrictMode>
      </body>
    </html>
  );
}
