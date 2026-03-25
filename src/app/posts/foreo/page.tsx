import React from 'react';
import { ArrowLeft, Star, Check, Zap, ShoppingCart, ShieldCheck } from 'lucide-react';

export default function ForeoAdvertorial() {
  const currentYear = 2026;

  return (
    <div className="min-h-screen bg-[#FFF9F9] text-[#333] font-serif selection:bg-[#FADADD]">
      {/* Custom Styles for Pulse Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes custom-pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 182, 193, 0.7); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(255, 182, 193, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 182, 193, 0); }
        }
        .pulse-button {
          animation: custom-pulse 2s infinite;
        }
      `}} />

      {/* Editorial Header */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-[#FEE2E2] px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center text-[10px] font-sans font-bold uppercase tracking-widest text-[#B08D8D]">
            <ArrowLeft className="mr-2 w-3 h-3" /> Chic Trend Life
          </a>
          <span className="font-black tracking-tighter text-xl text-[#B08D8D]">BEAUTY EDIT</span>
          <div className="w-20"></div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto bg-white shadow-[0_0_50px_rgba(255,182,193,0.1)] my-12 overflow-hidden">
        {/* Hero Section */}
        <header className="px-8 pt-16 pb-12 text-center border-b border-[#FFF1F1]">
          <div className="flex justify-center mb-6">
             <span className="text-[11px] font-sans font-bold bg-[#FFE4E1] text-[#B08D8D] px-4 py-1 rounded-full uppercase tracking-[0.2em]">
               Tested & Reviewed
             </span>
          </div>
          <h1 className="text-4xl md:text-6xl leading-[1.15] mb-8 text-[#4A4A4A]">
            Is The FOREO BEAR Actually A "Facelift In A Box"? We Tested It For 30 Days.
          </h1>
          <div className="flex items-center justify-center space-x-2 text-[#B08D8D] font-sans text-sm mb-4">
            <span>By Sarah Jenkins</span>
            <span>•</span>
            <span>March 22, {currentYear}</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="px-0 relative">
          <img 
            src="/images/foreo2.jpg" 
            alt="Foreo Bear Facial Device" 
            className="w-full h-[500px] object-cover"
          />
          <p className="p-4 text-[11px] italic text-gray-400 text-center font-sans tracking-wide bg-[#FFFBFB]">
            As we prepare for the 2026 Spring season, at-home skin lifting is the #1 requested beauty solution.
          </p>
        </div>

        {/* Article Body */}
        <div className="px-8 md:px-16 py-12 font-sans leading-[1.9] text-gray-700">
          <p className="text-xl font-serif italic mb-8 border-l-4 border-[#FADADD] pl-6 py-2 text-[#666]">
            "If you’re over 30, you’ve felt it: that sudden realization after a long winter that your jawline isn't as sharp, and your glow has seemingly vanished into the cold air."
          </p>

          <p className="mb-6">
            Let's be honest. Salon facials and monthly Botox appointments in New York or LA are no longer just a 'luxury'—they're a financial commitment that rivals a car payment. Between the cold 2026 winter we just endured and the stress of a busy career, my skin was looking... tired. 
          </p>

          <p className="mb-10">
            I was about to book a $400 microcurrent session when I saw the <strong>FOREO BEAR</strong> everywhere on my feed. The claim? A non-invasive, at-home device that tones all 65+ muscles in your face and neck. I decided to try it for 30 days alongside the <strong>LUNA 4</strong> cleansing device. Here is the honest truth.
          </p>

          {/* CTA 1 */}
          <div className="my-16 text-center">
            <a 
              href="/foreo" 
              target="_blank"
              className="pulse-button inline-flex items-center bg-[#B08D8D] text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl transition-transform hover:scale-105"
            >
              Check Availability & Secret Spring Discounts <Zap className="ml-2 w-4 h-4" />
            </a>
          </div>

          <h2 className="text-3xl font-serif text-[#4A4A4A] mb-6 mt-16">The Science: Muscle Training for Your Face</h2>
          <p className="mb-6">
            The <strong>FOREO BEAR</strong> uses microcurrent technology—tiny electrical pulses that mirror your body’s own natural currents at a cellular level. Think of it as a HIIT workout for your face.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 bg-[#FFF9F9] p-8 rounded-2xl border border-[#FEE2E2]">
            <div className="space-y-4">
              <h4 className="font-bold text-[#B08D8D] flex items-center tracking-tighter uppercase text-sm italic">
                <Check className="mr-2 w-4 h-4" /> Why The BEAR?
              </h4>
              <p className="text-sm">It's the world’s first FDA-cleared microcurrent device with <strong>Anti-Shock System™</strong>. No painful zaps, just a lifting sensation.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-[#B08D8D] flex items-center tracking-tighter uppercase text-sm italic">
                <Check className="mr-2 w-4 h-4" /> The LUNA 4 Advantage
              </h4>
              <p className="text-sm">Before lifting, you need a canvas. LUNA 4’s ultra-hygienic silicone bristles remove 99% of dirt, oil, and makeup residue.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif text-[#4A4A4A] mb-6">The 30-Day Results: My Mirror Doesn't Lie</h2>
          <p className="mb-6">
            <strong>Week 1:</strong> The LUNA 4 made my skin feel like silk after the first wash. The BEAR? It was relaxing, taking only 3 minutes before my morning coffee.
          </p>
          <p className="mb-10">
            <strong>Week 4:</strong> The change was visible. My cheekbones looked more prominent, and the 'sag' around my jawline had tightened significantly. My skin had that 'post-spa' glow every single day.
          </p>

          {/* Product Comparison Card */}
          <div className="bg-white border-2 border-[#FEE2E2] rounded-3xl p-10 my-16 shadow-sm">
            <h3 className="text-2xl font-serif text-center mb-8">Why Thousands are Ditching Botox for FOREO</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="font-medium text-gray-500 text-sm italic">Monthly Botox/Salons</span>
                <span className="font-bold text-red-400">$600+ / Month</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="font-medium text-gray-500 text-sm italic">Professional Lift at Home</span>
                <span className="font-bold text-green-500 tracking-tighter uppercase text-xs">FOREO BEAR (One-time)</span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <span className="font-black text-[#4A4A4A] uppercase text-xs tracking-widest">Savings over 1 Year</span>
                <span className="text-2xl font-black text-[#B08D8D]">$5,000+</span>
              </div>
            </div>
          </div>

          {/* CTA 2 */}
          <div className="my-16 text-center">
            <a 
              href="/foreo" 
              target="_blank"
              className="pulse-button inline-flex items-center bg-[#B08D8D] text-white px-12 py-6 rounded-full font-bold text-sm uppercase tracking-[0.2em] shadow-2xl transition-all hover:bg-[#A07C7C]"
            >
              Shop The Exclusive Bundle Now <ShoppingCart className="ml-2 w-5 h-5" />
            </a>
          </div>

          <h2 className="text-3xl font-serif text-[#4A4A4A] mb-6 mt-16 text-center italic">The Perfect Mother's Day Gift (Or Self-Care Upgrade)</h2>
          <p className="mb-8 text-center text-gray-500">
            With Spring 2026 just around the corner and Mother's Day approaching, FOREO is offering rare bundles that won't last. If you've been waiting for a sign to invest in your skin—this is it.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 my-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center space-x-2"><ShieldCheck className="w-4 h-4" /> <span className="text-[10px] font-bold uppercase tracking-widest">2-Year Warranty</span></div>
             <div className="flex items-center space-x-2"><Check className="w-4 h-4" /> <span className="text-[10px] font-bold uppercase tracking-widest">FDA-Cleared</span></div>
             <div className="flex items-center space-x-2"><Star className="w-4 h-4" /> <span className="text-[10px] font-bold uppercase tracking-widest">4.8/5 Star Reviews</span></div>
          </div>

          {/* CTA 3 */}
          <div className="mt-20 pt-16 border-t border-[#FEE2E2] text-center">
             <h4 className="text-xl font-serif mb-8 italic">Ready for your own 'Facelift in a Box'?</h4>
             <a 
              href="/foreo" 
              target="_blank"
              className="inline-block text-[#B08D8D] font-black uppercase tracking-[0.3em] border-b-2 border-[#B08D8D] pb-2 hover:text-[#4A4A4A] hover:border-[#4A4A4A] transition-all text-sm"
             >
               Click Here To Unlock Exclusive Discounts →
             </a>
          </div>
        </div>
      </main>

      {/* Compliance Footer */}
      <footer className="bg-white border-t border-[#FEE2E2] py-20 px-6 mt-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-8">© {currentYear} Chic Trend Life | Premium Beauty Review</p>
          <div className="bg-[#FFF9F9] p-6 rounded-xl border border-[#FEE2E2]">
            <p className="text-[10px] leading-relaxed text-gray-400 italic">
              <strong>Affiliate Disclosure:</strong> This site contains affiliate links for products we believe in. We may earn a commission if you purchase through our links at no additional cost to you. The results described are based on individual experiences and may vary. This is an advertorial and not a news article or personal blog post by a non-affiliated party.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
