import React from 'react';
import { ArrowLeft, ShoppingBag, Truck, Star, CheckCircle2 } from 'lucide-react';

export default function OliveYoungArticle() {
  const currentYear = 2026;
  
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Top Nav */}
      <nav className="p-6 md:p-8 max-w-7xl mx-auto flex justify-between items-center border-b border-gray-50 sticky top-0 bg-white/90 backdrop-blur-sm z-50">
        <a href="/" className="group flex items-center text-xs font-bold uppercase tracking-widest">
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Trends Home
        </a>
        <h1 className="text-xl font-black tracking-tighter italic">CHIC TREND LIFE</h1>
        <div className="w-20"></div>
      </nav>

      {/* Affiliate Disclosure */}
      <div className="bg-zinc-50 border-b border-gray-100 py-3 px-6 text-center">
        <p className="text-[10px] text-gray-400 italic tracking-wide">
          March 22, {currentYear} | Editorial Update: This post contains links to Olive Young Global. We may earn a commission on qualifying purchases.
        </p>
      </div>

      <article className="pb-24">
        {/* Header Section */}
        <header className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
          <span className="bg-black text-white px-3 py-1 text-[9px] font-bold tracking-[0.2em] uppercase mb-6 inline-block">Regional Spotlight: Australia</span>
          <h1 className="text-4xl md:text-7xl font-serif leading-tight mb-8">
            Olive Young Global: Is It Worth It for Australian K-Beauty Fans in {currentYear}?
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            As we transition into the Australian Autumn this March, we explore why <strong>Olive Young</strong> has become the #1 destination for K-Beauty essentials in Sydney, Melbourne, and beyond.
          </p>
        </header>

        {/* High-Quality Brand Image */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <img 
            src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1600&q=80" 
            className="w-full h-[50vh] md:h-[70vh] object-cover rounded-sm shadow-sm"
            alt="Olive Young Skincare Routine"
          />
        </div>

        {/* Article Body */}
        <div className="max-w-2xl mx-auto px-6 leading-[1.8]">
          <h2 className="text-3xl font-serif mb-6 mt-12 text-black">Why Australians Love Olive Young</h2>
          <p className="mb-6">
            For years, K-Beauty enthusiasts in Australia struggled with limited local stock and high markups. Enter <strong>Olive Young Global</strong>—the "Sephora of South Korea"—which now offers direct shipping to Australia that is faster and more reliable than ever in early {currentYear}.
          </p>

          <p className="mb-10">
            Whether you're battling the lingering effects of the intense summer sun or preparing your skin for the cooler April winds, the curated selections at Olive Young provide the targeted solutions that Australian skin types demand.
          </p>

          {/* CTA 1: Top Seller */}
          <div className="my-12 p-8 border-2 border-zinc-100 rounded-xl bg-white shadow-xl text-center transition-transform hover:scale-[1.02]">
            <div className="flex justify-center mb-4 text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <h3 className="text-2xl font-serif mb-2">March {currentYear} Best Seller</h3>
            <p className="text-gray-500 text-sm mb-6 uppercase tracking-widest font-bold">The Viral "Glass Skin" Bundle</p>
            <a 
              href="/oliveyoung" 
              target="_blank"
              className="inline-flex items-center bg-green-600 text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-green-700 transition-all shadow-lg"
            >
              Shop the Collection <ShoppingBag className="ml-2 w-4 h-4" />
            </a>
            <p className="text-[10px] text-gray-400 mt-4 italic">Free Shipping to AU on orders over $60 USD</p>
          </div>

          <h2 className="text-2xl font-serif mb-6 mt-16 text-black tracking-tight underline decoration-zinc-200 underline-offset-8">Top 3 Must-Haves for the AU Autumn Climate</h2>
          
          <div className="space-y-12 mt-10">
            {/* Product 1 */}
            <div className="border-l-4 border-black pl-6 py-2">
              <h4 className="text-lg font-bold mb-2">1. Intense Hydration Serums</h4>
              <p className="text-gray-600 text-md">
                As Australian humidity drops in March, your skin barrier needs support. Look for <strong>Torriden</strong> or <strong>Round Lab</strong> products—currently top-ranked on Olive Young’s real-time charts.
              </p>
            </div>

            {/* Product 2 */}
            <div className="border-l-4 border-black pl-6 py-2">
              <h4 className="text-lg font-bold mb-2">2. After-Sun Repair (Propolis & Cica)</h4>
              <p className="text-gray-600 text-md">
                Repairing sun damage from the heavy Dec-Feb period is crucial. <strong>COSRX Full Fit Propolis</strong> remains a staple for soothing and revitalizing dull skin.
              </p>
            </div>
          </div>

          {/* CTA 2: Shop Charts */}
          <div className="my-16 bg-zinc-900 text-white p-10 text-center rounded-sm">
            <h3 className="text-2xl font-serif mb-4">Discover the Top 100</h3>
            <p className="text-zinc-400 text-sm mb-8">See what's trending in Seoul right now and get it delivered to Australia in under 7 days.</p>
            <a 
              href="/oliveyoung" 
              target="_blank"
              className="inline-block border-2 border-white px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
            >
              View Olive Young Rankings
            </a>
          </div>

          <h2 className="text-2xl font-serif mb-6 mt-16 text-black italic">Shipping & Custom Duties to Australia</h2>
          <p className="mb-6 text-gray-600">
            One of the biggest concerns for AU shoppers is the wait time. In our latest test (updated March 22, {currentYear}), standard shipping to Melbourne took only <strong>5 business days</strong>. With the current "Global Olive Young" promotions, shipping is often waived for Australian orders that meet a very accessible minimum spend.
          </p>

          <div className="bg-zinc-50 p-6 rounded-lg mb-12">
            <ul className="space-y-3">
              <li className="flex items-center text-sm font-medium"><CheckCircle2 className="w-4 h-4 mr-3 text-green-500" /> 100% Authentic Products (Straight from Seoul)</li>
              <li className="flex items-center text-sm font-medium"><Truck className="w-4 h-4 mr-3 text-green-500" /> DHL/EMS Express Shipping to AU</li>
              <li className="flex items-center text-sm font-medium"><CheckCircle2 className="w-4 h-4 mr-3 text-green-500" /> Huge variety of exclusive brands</li>
            </ul>
          </div>

          <div className="text-center mt-20 border-t border-zinc-100 pt-12">
            <h4 className="text-xl font-serif mb-6">Ready to upgrade your skincare?</h4>
            <a 
              href="/oliveyoung" 
              target="_blank" 
              className="group text-sm font-black uppercase border-b-4 border-black pb-2 hover:text-zinc-500 hover:border-zinc-300 transition-all"
            >
              Enter the Olive Young Global Store <ShoppingBag className="ml-2 w-5 h-5 inline-block transition-transform group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-zinc-100 text-center px-6">
        <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-4">© {currentYear} CHIC TREND LIFE | BEAUTY EDITORIAL</p>
        <p className="max-w-md mx-auto text-[10px] text-gray-300 leading-relaxed">
          Our reviews are independent. Some products featured here are from our partners who compensate us. This helps keep our trend reports free for our Australian readers.
        </p>
      </footer>
    </div>
  );
}
