import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: 'Chic Trend Life | Modern Lifestyle & Trends',
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    other: {
      'impact-site-verification': '3d875436-ce16-4fd1-9cf4-d6bb4a87fffa',
    },
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: SITE_NAME,
    title: 'Chic Trend Life | Modern Lifestyle & Trends',
    description: SITE_DESCRIPTION,
    locale: 'en_US',
    images: [
      {
        url: '/images/coolife1.jpg',
        width: 1280,
        height: 640,
        alt: 'Chic Trend Life editorial selection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chic Trend Life | Modern Lifestyle & Trends',
    description: SITE_DESCRIPTION,
    images: ['/images/coolife1.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: 'en',
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/android-chrome-512x512.png`,
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'admin@chictrendlife.com',
          contactType: 'customer support',
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans bg-white text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData).replace(/</g, '\\u003c'),
          }}
        />
        {children}
      </body>
    </html>
  )
}
