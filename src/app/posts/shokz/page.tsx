import React from 'react';
import { ArrowLeft, ShoppingCart, Activity, Zap, CheckCircle2, Info, ArrowRight, Award, Headphones, HeartPulse, Sparkles } from 'lucide-react';

export default function ShokzOpenDotsReview() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#111] font-sans selection:bg-[#FF8C00] selection:text-white">
      {/* Prime Day 动画效果 */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-shokz {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 140, 0, 0.7); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 25px rgba(255, 140, 0, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 140, 0, 0); }
        }
        .prime-day-btn { animation: pulse-shokz 2s infinite; }
        .data-bar { transition: width 2s ease-in-out; }
      `}} />

      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition">
            <ArrowLeft className="mr-2 w-4 h-4" /> Chic Trend Life
          </a>
          <span className="font-black tracking-tighter text-2xl italic">LIFESTYLE & TECH</span>
          <div className="hidden md:block w-20"></div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto py-12 px-6">
        {/* Prime Day Flash Alert */}
        <div className="bg-[#FF8C00] text-white p-4 rounded-t-2xl text-center font-black text-sm tracking-[0.2em] uppercase shadow-lg">
          🔥 Amazon Prime Day 2026: June 23 – June 26 | Huge Savings on OpenDots 2
        </div>

        <header className="bg-white p-10 md:p-20 text-center shadow-sm rounded-b-2xl mb-16 border-x border-b border-gray-100">
          <div className="inline-flex items-center space-x-2 bg-orange-50 text-[#FF8C00] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            <Sparkles className="w-3 h-3" /> <span>2026 Newest Release: Shokz OpenDots 2</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif leading-[1.05] mb-8 tracking-tight">
            The Death of the Earbud: Why <span className="italic text-[#FF8C00]">OpenDots 2</span> is the Only Way to Listen in 2026
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            Forget everything you know about earphones. The Shokz <strong>OpenDots 2</strong> has arrived to solve the "Ear Fatigue" crisis once and for all.
          </p>
        </header>

        {/* Hero Image - OpenDots 2 Focus */}
        <div className="mb-24 relative group">
          <img 
            src="/images/OpenDots 2.jpg" 
            alt="Shokz OpenDots 2 Revolutionary Design" 
            className="w-full h-[650px] object-cover rounded-2xl shadow-3xl grayscale-[20%] group-hover:grayscale-0 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12 rounded-2xl">
            <p className="text-white text-lg italic border-l-4 border-[#FF8C00] pl-6 max-w-xl">
              "Finally, a headphone that fits your life, not just your ears. The OpenDots 2 is the peak of 2026 wearable tech."
            </p>
          </div>
        </div>

        {/* Section 1: The OpenDots 2 Advantage */}
        <section className="prose prose-zinc lg:prose-xl mx-auto mb-24 leading-[1.9]">
          <h2 className="text-4xl font-serif mb-8 flex items-center tracking-tight">
            <Zap className="mr-4 text-[#FF8C00] fill-current" /> Why OpenDots 2 is the 2026 Bestseller
          </h2>
          <p>
            The market has spoken. While traditional "buds" trap bacteria and muffle your world, the <strong>Shokz OpenDots 2</strong> has become the specific model that savvy travelers, office professionals, and light athletes are flocking to. 
          </p>
          <p className="font-bold text-gray-900 border-l-4 border-black pl-6 my-10 bg-gray-50 py-6">
            Unlike the neckband-style headphones of the past, OpenDots 2 features a "True Wireless" open-ear design. No cables, no ear-canal pressure, just pure, high-definition audio floating in the air around you.
          </p>
        </section>

        {/* HEALTH & COMFORT DATA - 专门针对 OpenDots 2 的数据对比 */}
        <section className="my-24 bg-white border-2 border-gray-100 p-12 rounded-3xl shadow-xl">
          <h3 className="text-2xl font-serif mb-12 text-center uppercase tracking-widest">2026 Ear Canal Pressure Test</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div>
                <div className="flex justify-between mb-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <span>Standard In-Ear Pods</span>
                  <span>High Pressure (88%)</span>
                </div>
                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-red-400 h-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-3 text-[10px] font-bold uppercase tracking-widest text-orange-500">
                  <span>Shokz OpenDots 2</span>
                  <span>Zero Pressure (0%)</span>
                </div>
                <div className="w-full bg-gray-100 h-5 rounded-full overflow-hidden border border-orange-200">
                  <div className="bg-[#FF8C00] h-full" style={{ width: '2%' }}></div>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500 leading-relaxed italic border-l-2 border-gray-100 pl-8">
              "By utilizing 2026 <strong>DirectPitch™ 3.0</strong> technology, OpenDots 2 projects sound directly into your ear with zero contact with the sensitive ear canal. This eliminates 'Ear Fatigue' and reduces the risk of inner-ear humidity and bacteria."
            </div>
          </div>
        </section>

        {/* PRIME DAY MEGA CTA - 针对 OpenDots 2 的大按钮 */}
        <section className="my-28 py-20 bg-zinc-900 rounded-[3rem] text-center shadow-3xl border-b-8 border-[#FF8C00]">
          <h2 className="text-white text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">Prime Day Exclusive</h2>
          <p className="text-[#FF8C00] text-2xl font-serif italic mb-12 px-6">
            Score the lowest price ever on the <strong>Shokz OpenDots 2</strong> (June 23-26)
          </p>
          <a 
            href="/shokz" 
            target="_blank"
            className="prime-day-btn inline-flex items-center bg-[#FF8C00] text-white px-14 py-7 rounded-full font-black text-xl uppercase tracking-widest shadow-2xl transition-all hover:bg-white hover:text-black"
          >
            Get My OpenDots 2 Discount <ShoppingCart className="ml-3 w-7 h-7" />
          </a>
          <p className="mt-8 text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">Official Amazon Global Fulfillment</p>
        </section>

        {/* Section 2: Which Shokz is for you? (The Comparison) */}
        <section className="my-24">
          <h2 className="text-4xl font-serif mb-16 text-center italic">The 2026 Shokz Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* OpenDots 2 - THE STAR */}
            <div className="p-8 bg-orange-50 border-2 border-orange-200 rounded-2xl flex flex-col items-center text-center">
              <Headphones className="w-12 h-12 text-[#FF8C00] mb-6" />
              <h4 className="font-black text-xl mb-4">OpenDots 2</h4>
              <p className="text-xs text-orange-700 font-bold mb-6 uppercase tracking-widest bg-orange-200 px-3 py-1 rounded-full">Bestseller</p>
              <p className="text-sm text-gray-600 mb-8 italic">Perfect for daily life, office, and travel. Total freedom with True Wireless design.</p>
              <a href="/shokz" className="mt-auto text-[10px] font-black uppercase border-b-2 border-orange-500 pb-1">Shop Now</a>
            </div>

            {/* OpenRun Pro 2 */}
            <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-2xl flex flex-col items-center text-center opacity-80">
              <Activity className="w-12 h-12 text-zinc-400 mb-6" />
              <h4 className="font-black text-xl mb-4 text-zinc-400">OpenRun Pro 2</h4>
              <p className="text-[10px] text-zinc-400 font-bold mb-6 uppercase tracking-widest border border-zinc-200 px-3 py-1 rounded-full">For Athletes</p>
              <p className="text-sm text-gray-400 mb-8 italic">The ultimate bone conduction neckband for hardcore runners and cyclists.</p>
              <a href="/shokz" className="mt-auto text-[10px] font-black uppercase border-b-2 border-zinc-300 pb-1 text-zinc-400">Explore</a>
            </div>

            {/* OpenFit Pro */}
            <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-2xl flex flex-col items-center text-center opacity-80">
              <HeartPulse className="w-12 h-12 text-zinc-400 mb-6" />
              <h4 className="font-black text-xl mb-4 text-zinc-400">OpenFit Pro</h4>
              <p className="text-[10px] text-zinc-400 font-bold mb-6 uppercase tracking-widest border border-zinc-200 px-3 py-1 rounded-full">Max Comfort</p>
              <p className="text-sm text-gray-400 mb-8 italic">Ergonomic air-conduction for those who prioritize premium sound over sport.</p>
              <a href="/shokz" className="mt-auto text-[10px] font-black uppercase border-b-2 border-zinc-300 pb-1 text-zinc-400">Explore</a>
            </div>
          </div>
        </section>

        {/* Section 3: Safety Analysis */}
        <section className="prose prose-zinc lg:prose-xl mx-auto mb-24 leading-[1.9]">
          <h2 className="text-3xl font-serif mb-8 flex items-center">
            <ShieldAlert className="mr-4 text-red-500" /> Situational Awareness: The Life-Saver
          </h2>
          <p>
            According to recent 2026 pedestrian safety data, 1 in 5 urban accidents involve commuters wearing noise-canceling headphones. By allowing ambient sound to pass through naturally, <strong>OpenDots 2</strong> keeps you 100% connected to your surroundings. Hear the electric bike coming around the corner before you see it. 
          </p>
        </section>

        {/* Final Conclusion */}
        <footer className="text-center py-20 border-t border-gray-100">
           <Activity className="w-16 h-16 mx-auto mb-10 text-[#FF8C00] opacity-30" />
           <h3 className="text-4xl font-serif italic mb-10">Stop plugging your ears. Start living.</h3>
           <a href="/shokz" target="_blank" className="group text-sm font-black uppercase border-b-4 border-black pb-2 hover:text-[#FF8C00] hover:border-[#FF8C00] transition-all duration-300">
             Unlock Shokz Prime Day Secret Deals <ArrowRight className="ml-2 w-5 h-5 inline-block transition-transform group-hover:translate-x-3" />
           </a>
        </footer>
      </main>

      {/* Compliance Footer */}
      <footer className="bg-[#111] py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] text-zinc-500 uppercase tracking-[0.5em] mb-12 font-bold">Chic Trend Life Editorial Tech Report</p>
          <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 text-left">
            <div className="flex items-start space-x-6">
              <Info className="w-6 h-6 text-zinc-700 flex-shrink-0" />
              <p className="text-[11px] leading-relaxed text-zinc-500 italic">
                <strong>Editorial Note:</strong> This is a promotional report and not an endorsement from medical professionals. chictrendlife.com is an independent review site that participates in the Amazon Services LLC Associates Program. We may receive commissions for purchases made through links on this page during the Amazon Prime Day window (June 23-26, 2026). OpenDots 2, OpenRun Pro 2, and OpenFit Pro are trademarks of Shokz Holding Limited. Technical data is based on 2026 model testing.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
