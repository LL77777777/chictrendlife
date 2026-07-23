import React from 'react';
import './globals.css';

// 整合了 Impact 验证代码的 Metadata
export const metadata = {
  title: 'Chic Trend Life | Modern Lifestyle & Trends',
  description: 'Curated trends for a modern, chic life.',
  // 网站小图标设置
  icons: {
    icon: '/favicon.ico',          // 浏览器标签栏图标
    apple: '/apple-touch-icon.png', // 苹果手机保存到桌面的图标
  },
  // --- 添加 Impact 验证代码 ---
  verification: {
    other: {
      'impact-site-verification': '3d875436-ce16-4fd1-9cf4-d6bb4a87fffa',
    },
  },
  // -------------------------
  // 社交媒体分享时的预览图
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
