import { createArticleMetadata, ArticleStructuredData, SITE_URL } from '../../../lib/site';
import Deals from './Deals';
const article = { slug: 'shokz-official-deals', title: 'Shokz US Daily Deals & Promo Codes | Amazon Offers', absoluteTitle: true, description: 'Find Shokz US deals, product-specific Amazon offers and promo codes. Check offer dates, eligible colors and our pinned long-term OpenDots 2 code.', image: '/images/shokz-openrun-pro-blue.png', publishedTime: '2026-09-08T12:00:00+08:00' };
export const metadata = createArticleMetadata(article);
const faqs = [
  { q: 'Which model does SHOKZE320 apply to?', a: 'The 10% code is for Shokz OpenDots 2. It has no announced end date. It is not listed as a discount for OpenRun Pro or OpenRun Pro Mini.' },
  { q: 'Can I combine the code with the OpenRun offers?', a: 'These are separate promotions for different products. No stacking terms have been supplied, so do not assume the discounts can be combined.' },
  { q: 'Why is the Amazon price different?', a: 'A different color, size, seller or delivery location can change the price. An offer may also end early or sell out. Check your chosen variant and the final total before ordering.' },
  { q: 'Will this page get new deals?', a: 'Yes. We add new promotions to this same page as they become available to us. Ongoing codes stay at the top, and ended limited-time offers move into the expired section.' },
];
export default function ShokzDealsPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return <div className="min-h-screen bg-[#f7f7f5] text-zinc-900">
    <ArticleStructuredData {...article}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}/>
    <nav className="border-b border-zinc-200 bg-white px-5 py-5"><div className="mx-auto flex max-w-6xl items-center justify-between gap-4"><a href="/" className="text-xs font-bold tracking-widest">← CHIC TREND LIFE</a><a href="#how-to" className="text-xs text-zinc-500">How to use the offers</a></div></nav>
    <main className="mx-auto max-w-6xl px-5 py-8 sm:py-10"><Deals/>
      <section id="how-to" className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-semibold">A quick checkout checklist</h2><ol className="mt-5 grid list-decimal gap-6 pl-5 text-sm leading-7 text-zinc-600 md:grid-cols-3"><li>Choose the offer for your exact model. The White & Blue and Mini deals have their own links.</li><li>For OpenDots 2, copy SHOKZE320 and enter it in Amazon&apos;s promo-code field at checkout.</li><li>Confirm the discount in the order summary. If it does not appear, check eligibility before paying.</li></ol></section>
      <section className="mt-10 max-w-3xl"><h2 className="text-xl font-semibold">Questions before you shop</h2><div className="mt-4 divide-y divide-zinc-200">{faqs.map(f => <details key={f.q} className="py-5"><summary className="cursor-pointer text-sm font-semibold">{f.q}</summary><p className="mt-3 text-sm leading-7 text-zinc-600">{f.a}</p></details>)}</div></section>
      <footer className="mt-10 border-t border-zinc-200 pt-6 text-xs leading-6 text-zinc-500"><p>Chic Trend Life is an independent publisher. This page collects Shokz offers and is not the brand&apos;s official website.</p><p className="mt-2">Affiliate disclosure: We may earn a commission if you purchase through links on this page, at no additional cost to you. <a href="/affiliate-disclosure" className="underline">Read our disclosure</a>.</p><p className="mt-3"><a href={`${SITE_URL}/posts/shokz`} className="underline">Explore our Shokz article</a> · <a href="/contact" className="underline">Contact us</a></p></footer>
    </main></div>;
}
