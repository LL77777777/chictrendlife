import React from 'react';
import { ArrowRight, Instagram, Mail, ShieldCheck } from 'lucide-react';

const ARTICLES = [
  { id: 'fitflop', title: "The Ergonomic Revolution: Why FitFlop is This Season's Essential", category: "LIFESTYLE", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80", desc: "Discover how comfort meets high-fashion in the latest collection..." },
  { id: 'minimal-bags', title: "Quiet Luxury: 5 Minimalist Handbags Worth the Investment", category: "FASHION", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80", desc: "The rise of logo-free elegance and why it's dominating the runways..." },
  { id: 'chic-tech', title: "Smart Home Chic: Tech Gadgets That Actually Look Good", category: "TECH", img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", desc: "Modern technology designed to complement your sophisticated interior..." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Top Bar for Trust */}
      <div className="bg-black text-white text-[10px] tracking-[0.2em] py-2 text-center uppercase">
        Global Trend Report 2024 | Curated Lifestyle Excellence
      </div>

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto p-8 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <h1 className="text-2xl font-black tracking-tighter">CHIC TREND LIFE</h1>
        <div className="hidden md:flex space-x-10 text-[11px] font-bold uppercase tracking-widest text-gray-500">
          <a href="/" className="text-black">Home</a>
          <a href="#trends" className="hover:text-black">Trends</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </div>
      </nav>

      {/* MAJOR HERO SECTION - 大气封面 */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80" 
          className="w-full h-full object-cover opacity-80"
          alt="Fashion Hero"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <p className="text-sm tracking-[0.5em] uppercase mb-6 animate-fade-in">Sophistication redefined</p>
          <h2 className="text-6xl md:text-9xl font-serif mb-8 max-w-5xl leading-tight">The Art of <br/> Modern Living</h2>
          <a href="#trends" className="bg-white text-black px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
            Explore the Edit
          </a>
        </div>
      </section>

      {/* Trust Elements for Google Ads */}
      <section className="py-12 bg-gray-50 border-b border-gray-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-6 h-6 mb-3 text-gray-400" />
            <h4 className="text-xs font-bold uppercase tracking-widest">Expert Curation</h4>
            <p className="text-[11px] text-gray-500 mt-1">Hand-picked styles from global runways.</p>
          </div>
          <div className="flex flex-col items-center">
            <Instagram className="w-6 h-6 mb-3 text-gray-400" />
            <h4 className="text-xs font-bold uppercase tracking-widest">Global Community</h4>
            <p className="text-[11px] text-gray-500 mt-1">Join over 50k style enthusiasts.</p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="w-6 h-6 mb-3 text-gray-400" />
            <h4 className="text-xs font-bold uppercase tracking-widest">Weekly Newsletter</h4>
            <p className="text-[11px] text-gray-500 mt-1">The latest trends delivered to your inbox.</p>
          </div>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section id="trends" className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-serif">Featured Curations</h2>
            <div className="w-12 h-1 bg-black mt-4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {ARTICLES.map((article) => (
            <a href={`/posts/${article.id}`} key={article.id} className="group block">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-6 relative">
                <img src={article.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt={article.title} />
              </div>
              <p className="text-[10px] font-bold text-gray-400 mb-3 tracking-widest uppercase">{article.category}</p>
              <h3 className="text-xl font-serif mb-4 group-hover:underline underline-offset-4">{article.title}</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed line-clamp-2">{article.desc}</p>
              <div className="flex items-center text-[10px] font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                Read Story <ArrowRight className="ml-2 w-3 h-3" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer - Crucial for Google Ads */}
      <footer className="bg-white border-t border-gray-100 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <h3 className="text-xl font-black mb-6 tracking-tighter">CHIC TREND LIFE</h3>
              <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                Dedicated to those who seek a refined lifestyle. We explore the intersection of fashion, technology, and modern living to bring you the only trends that matter.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase mb-6 tracking-widest">Company</h4>
              <ul className="text-sm text-gray-500 space-y-4">
                <li><a href="#" className="hover:text-black">About Us</a></li>
                <li><a href="#" className="hover:text-black">Terms of Service</a></li>
                <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase mb-6 tracking-widest">Contact</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                General Inquiries: hello@chictrendlife.com<br/>
                Partnerships: collab@chictrendlife.com
              </p>
            </div>
          </div>
          <div className="text-center pt-12 border-t border-gray-50 text-[10px] text-gray-400 tracking-[0.2em] uppercase">
             &copy; 2026 CHIC TREND LIFE. Affiliate Disclosure: We may earn a commission from links on this site.
          </div>
        </div>
      </footer>
    </div>
  );
}
