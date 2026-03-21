import React from 'react';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-white pb-24">
      {/* Article Nav */}
      <nav className="p-8 max-w-4xl mx-auto">
        <a href="/" className="inline-flex items-center text-xs font-bold uppercase tracking-widest hover:text-gray-500">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Trends
        </a>
      </nav>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 text-center mb-16">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">Lifestyle & Footwear</p>
        <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-8">The Ergonomic Revolution: Why FitFlop is This Season's Essential</h1>
        <p className="text-lg text-gray-500 italic">Exploring the perfect balance between biomechanics and high-street style.</p>
      </header>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto mb-20">
        <img 
          src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1200&q=80" 
          className="w-full h-[60vh] object-cover"
          alt="Fitflop Collection"
        />
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 text-gray-800 leading-[1.8] text-lg">
        <p className="mb-8">
          In the ever-evolving world of fashion, the pendulum has finally swung back to something we've all been craving: <strong>Comfort.</strong> Leading this charge is the iconic brand FitFlop, which has managed to do the impossible—marry orthopedic-level comfort with designs that wouldn't look out of place on a Parisian runway.
        </p>

        {/* Affiliate Link Card - 高转化组件 */}
        <div className="my-12 p-8 border border-gray-100 bg-gray-50 text-center rounded-sm">
          <h3 className="font-serif text-2xl mb-4">Editor's Choice: The iQushion Ergonomic Flip-Flops</h3>
          <p className="text-sm text-gray-500 mb-8 px-6">Ultra-light, ergonomic comfort with high-rebound cushioning for all-day wear.</p>
          <a 
            href="/fitflop" 
            target="_blank"
            className="inline-flex items-center bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition shadow-xl"
          >
            Shop Original Collection <ShoppingBag className="ml-2 w-4 h-4" />
          </a>
          <p className="text-[10px] text-gray-400 mt-4 italic">* Limited availability on the official website</p>
        </div>

        <h2 className="text-3xl font-serif my-8 text-black">Why It Works</h2>
        <p className="mb-8">
          The secret lies in their microwobbleboard technology. Unlike traditional flat soles that put pressure on the ball of your foot, these midsoles diffuse underfoot pressure by instantly increasing the contact area of your foot to the midsole.
        </p>
        
        <p className="mb-8">
          Whether you're exploring a new city or heading to a casual brunch, the new season collection offers everything from sleek leather sneakers to the signature sandals that started it all.
        </p>
      </div>
    </article>
  );
}
