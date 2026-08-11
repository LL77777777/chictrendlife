import type { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/site';

export const dynamic = 'force-static';

const pages = [
  { path: '', changeFrequency: 'weekly' as const, priority: 1 },
  { path: '/posts/coolife', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/posts/fitflop', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/posts/foreo', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/posts/oliveyoung', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/posts/ricaud', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/posts/shokz', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/about', changeFrequency: 'yearly' as const, priority: 0.4 },
  { path: '/contact', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/privacy-policy', changeFrequency: 'yearly' as const, priority: 0.2 },
  { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.2 },
  { path: '/affiliate-disclosure', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/editorial-policy', changeFrequency: 'yearly' as const, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-08-11T00:00:00+08:00');

  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
