import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Chic Trend Life | Modern Lifestyle & Trends',
  description: 'Curated trends for a modern, chic life.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}