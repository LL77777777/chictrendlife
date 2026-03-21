/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 这行非常重要，它告诉 Next.js 把网站生成为一堆静态 HTML 文件
  images: {
    unoptimized: true, // 静态网站必须关闭自带的图片优化功能
  },
};

export default nextConfig;
