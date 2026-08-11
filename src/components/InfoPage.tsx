import type { ReactNode } from 'react';

type InfoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

const policyLinks = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
  { href: '/editorial-policy', label: 'Editorial Policy' },
];

export default function InfoPage({ eyebrow, title, description, children }: InfoPageProps) {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="border-t-4 border-black border-b border-zinc-100">
        <nav className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row gap-5 sm:items-center sm:justify-between">
          <a href="/" className="font-black tracking-tighter italic text-xl">
            CHIC TREND LIFE
          </a>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <a href="/" className="hover:text-black">Home</a>
            <a href="/#trends" className="hover:text-black">Trends</a>
            <a href="/contact" className="hover:text-black">Contact</a>
          </div>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 mb-5">{eyebrow}</p>
        <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-7">{title}</h1>
        <p className="text-lg text-zinc-500 leading-relaxed mb-14">{description}</p>
        <div className="space-y-10 text-zinc-700 leading-8 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-zinc-900 [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2 [&_a]:underline [&_a]:underline-offset-4">
          {children}
        </div>
      </main>

      <footer className="border-t border-zinc-100 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-zinc-500 mb-8">
            {policyLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-black">
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-zinc-400">© 2026 Chic Trend Life.</p>
        </div>
      </footer>
    </div>
  );
}
