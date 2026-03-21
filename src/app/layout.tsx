import React from 'react';
import './globals.css';

// 这部分就是第三步提到的 Metadata，我已经帮你整合好了
export const metadata = {
  title: 'Chic Trend Life | Modern Lifestyle & Trends',
  description: 'Curated trends for a modern, chic life.',
  // 网站小图标设置
  icons: {
    icon: '/favicon.ico',          // 浏览器标签栏图标
    apple: '/apple-touch-icon.png', // 苹果手机保存到桌面的图标
  },
  // 社交媒体分享时的预览图 (选填，如果你做了 og-image.jpg 建议加上)
  openGraph: {
    title: 'Chic Trend Life',
    description: 'Curated trends for a modern, chic life.',
    images: '/images/hero-bg.jpg', 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans bg-white text-black">
        {children}
      </body>
    </html>
  )
}
