import React from 'react';

const ARTICLES = [
  { id: 1, title: "The Ergonomic Revolution: Why FitFlop is This Season's Essential", category: "LIFESTYLE", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80", link: "/fitflop" },
  { id: 2, title: "Quiet Luxury: 5 Minimalist Handbags Worth the Investment", category: "FASHION", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80", link: "/minimal-bags" },
  { id: 3, title: "Smart Home Chic: Tech Gadgets That Actually Look Good", category: "TECH", img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", link: "/chic-tech" },
  { id: 4, title: "The Capsule Wardrobe: 7 Pieces for Infinite Summer Looks", category: "FASHION", img: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80", link: "/capsule-edit" },
  { id: 5, title: "Skin Minimalist: The Only 3 Products You Need for a Glow", category: "BEAUTY", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80", link: "/skin-glow" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation - Centered Header */}
      <nav className="max-w-7xl mx-auto p-8 flex justify-between items-center border-b border-gray-100">
        <h1 className="text-2xl font-bold tracking-tighter">CHIC TREND LIFE</h1>
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase text-gray-400">
          <a href="#" className="hover:text-black">Fashion</a>
          <a href="#" className="hover:text-black">Lifestyle</a>
          <a href="#" className="hover:text-black">Tech</a>
        </div>
      </nav>

      {/* Hero Section - Centered */}
      <header className="px-8 py-24 text-center max-w-4xl mx-auto">
        <p className="text-xs font-bold tracking-[0.2em] text-gray-400 mb-4 uppercase">Established 2024</p>
        <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-8">Curated Trends for the Modern Soul</h2>
        <div className="w-20 h-px bg-black mx-auto mb-8"></div>
        <p className="text-lg text-gray-500 italic max-w-xl mx-auto">“Elevating your daily essentials through a minimalist lens.”</p>
      </header>

      {/* Grid Layout - Centered Container */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {ARTICLES.map((article) => (
            <a href={article.link} key={article.id} className="group block no-underline text-black">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <p className="text-[10px] font-bold text-gray-400 mb-3 tracking-[0.3em] uppercase">{article.category}</p>
              <h3 className="text-2xl font-serif mb-4 leading-tight group-hover:opacity-70 transition">{article.title}</h3>
              <div className="inline-flex items-center text-xs font-bold uppercase tracking-widest border-b border-black pb-1">
                Shop the Trend
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-100 text-center">
        <p className="text-xs tracking-widest text-gray-400 uppercase italic mb-4">The Art of Chic Living</p>
        <p className="text-[10px] text-gray-300 tracking-widest">© 2024 CHIC TREND LIFE. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
