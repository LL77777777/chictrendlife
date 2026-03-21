import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ARTICLES = [
  { id: 1, title: "The Ergonomic Revolution: Why FitFlop is This Season's Essential", category: "LIFESTYLE", img: "https://images.unsplash.com/photo-1560343060-c147a71108d8?q=80&w=800", link: "/fitflop" },
  { id: 2, title: "Quiet Luxury: 5 Minimalist Handbags Worth the Investment", category: "FASHION", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800", link: "/minimal-bags" },
  { id: 3, title: "Smart Home Chic: Tech Gadgets That Actually Look Good", category: "TECH", img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800", link: "/chic-tech" },
  { id: 4, title: "The Capsule Wardrobe: 7 Pieces for Infinite Summer Looks", category: "FASHION", img: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=800", link: "/capsule-edit" },
  { id: 5, title: "Skin Minimalist: The Only 3 Products You Need for a Glow", category: "BEAUTY", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800", link: "/skin-glow" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <nav className="p-8 flex justify-between items-center border-b border-gray-100">
        <h1 className="text-2xl font-bold tracking-tighter">CHIC TREND LIFE</h1>
        <div className="space-x-6 text-sm font-medium uppercase text-gray-500">
          <a href="#" className="hover:text-black">Trends</a>
          <a href="#" className="hover:text-black">Style</a>
          <a href="#" className="hover:text-black">About</a>
        </div>
      </nav>

      <header className="px-8 py-20 text-center max-w-4xl mx-auto">
        <h2 className="text-6xl font-serif leading-tight mb-6">Elevating Your Everyday Essentials</h2>
        <p className="text-xl text-gray-500 italic">“Curated trends for a modern, chic life.”</p>
      </header>

      <section className="px-8 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {ARTICLES.map((article) => (
          <a href={article.link} key={article.id} className="group">
            <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
              <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
            <p className="text-xs font-bold text-gray-400 mb-2 tracking-widest uppercase">{article.category}</p>
            <h3 className="text-2xl font-serif mb-4 leading-tight group-hover:underline">{article.title}</h3>
            <div className="flex items-center text-sm font-medium">
              Check Availability <ArrowUpRight className="ml-1 w-4 h-4" />
            </div>
          </a>
        ))}
      </section>

      <footer className="p-12 border-t border-gray-100 text-center text-gray-400 text-sm">
        &copy; 2024 CHIC TREND LIFE. All rights reserved.
      </footer>
    </div>
  );
}