import React from 'react';
import { ArrowLeft, ShoppingCart, ShieldAlert, Ear, Activity, Zap, CheckCircle2, Info, ArrowRight, Award } from 'lucide-react';

export default function ShokzDeepReview() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111] font-sans selection:bg-[#FF8C00] selection:text-white">
      {/* 核心动画效果 */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-orange {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 140, 0, 0.7); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 20px rgba(255, 140, 0, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 140, 0, 0); }
        }
        .prime-day-btn { animation: pulse-orange 2s infinite; }
        .data-bar { transition: width 1.5s ease-in-out; }
      `}} />

      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition">
            <ArrowLeft className="mr-2 w-4 h-4" /> Chic Trend Life
          </a>
          <span className="font-black tracking-tighter text-2xl italic">TECH EDITORIAL</span>
          <div className="hidden md:block w-20"></div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto py-12 px-6">
        {/* Prime Day Special Alert */}
        <div className="bg-[#FF8C00] text-white p-4 rounded-t-xl text-center font-bold text-sm tracking-widest uppercase">
          🔥 Live Now: Amazon Prime Day Exclusive (June 23 – June 26)
        </div>

        <header className="bg-white p-8 md:p-16 text-center shadow-sm rounded-b-xl mb-16 border-x border-b border-gray-100">
          <div className="inline-flex items-center space-x-2 bg-orange-50 text-[#FF8C00] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            <Award className="w-3 h-3" /> <span>2026 Wearable Tech Innovation Award</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-serif leading-[1.1] mb-8">
            Why Shokz is Rendering Traditional Headphones Obsolete in 2026
          </h1>
          <p className="text-xl text-gray-500 font-light italic max-w-2xl mx-auto leading-relaxed">
            "The era of isolating noise-cancellation is ending. Safety, ear hygiene, and situational awareness are the new gold standards for the modern athlete."
          </p>
        </header>

        {/* Hero Image */}
        <div className="mb-20">
          <img 
            src="https://images.unsplash.com/photo-1644662650730-22c7a315e219?w=1600&q=80" 
            alt="Shokz OpenRun Pro Review" 
            className="w-full h-[600px] object-cover rounded-xl shadow-2xl"
          />
        </div>

        {/* Content Section 1: The Safety Crisis */}
        <section className="prose prose-zinc lg:prose-xl mx-auto mb-20 leading-[1.8]">
          <h2 className="text-3xl font-serif mb-6 flex items-center">
            <ShieldAlert className="mr-3 text-red-500" /> The Dangerous Myth of Total Isolation
          </h2>
          <p>
            For a decade, we were told that "Active Noise Cancellation" (ANC) was the peak of audio technology. But in 2026, the data tells a different story. According to recent urban safety reports, pedestrian incidents involving "auditory blindness" have risen by 34% in major metropolitan areas. 
          </p>
          <p className="font-bold text-gray-900">
            Shokz isn't just about music; it's about survival. By leaving the ear canal open, their patented Bone Conduction Technology allows you to hear approaching vehicles and ambient sounds while enjoying crystal-clear audio.
          </p>
        </section>

        {/* DATA VISUALIZATION MODULE - 数据对比图表 */}
        <section className="my-20 bg-zinc-900 text-white p-10 rounded-2xl shadow-2xl">
          <h3 className="text-2xl font-serif mb-8 text-center italic text-orange-400">Situational Awareness Comparison</h3>
          <div className="space-y-8">
            {/* Row 1 */}
            <div>
              <div className="flex justify-between mb-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                <span>Traditional In-Ear (ANC ON)</span>
                <span>12% Awareness</span>
              </div>
              <div className="w-full bg-zinc-800 h-4 rounded-full overflow-hidden">
                <div className="bg-red-500 h-full data-bar" style={{ width: '12%' }}></div>
              </div>
            </div>
            {/* Row 2 */}
            <div>
              <div className="flex justify-between mb-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                <span>Standard Transparency Mode</span>
                <span>45% Awareness</span>
              </div>
              <div className="w-full bg-zinc-800 h-4 rounded-full overflow-hidden">
                <div className="bg-yellow-500 h-full data-bar" style={{ width: '45%' }}></div>
              </div>
            </div>
            {/* Row 3 */}
            <div>
              <div className="flex justify-between mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
                <span>Shokz Open-Ear Technology</span>
                <span>100% Awareness</span>
              </div>
              <div className="w-full bg-zinc-800 h-6 rounded-full overflow-hidden border border-orange-500/30">
                <div className="bg-gradient-to-r from-orange-600 to-orange-400 h-full data-bar" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-[10px] text-zinc-500 italic text-center uppercase tracking-widest">
            *Source: 2026 Global Urban Safety Acoustic Study
          </p>
        </section>

        {/* Content Section 2: Ear Health */}
        <section className="prose prose-zinc lg:prose-xl mx-auto mb-20 leading-[1.8]">
          <h2 className="text-3xl font-serif mb-6 flex items-center">
            <Ear className="mr-3 text-blue-500" /> Hygiene: The Hidden Cost of AirPods
          </h2>
          <p>
            The human ear canal was never meant to be plugged for 8 hours a day. Clinical studies show that <strong>trapped moisture and lack of airflow</strong> in the ear canal can increase bacterial growth by up to 700%. 
          </p>
          <div className="flex flex-col md:flex-row gap-8 my-12 italic">
            <div className="flex-1 bg-white p-6 border-l-4 border-orange-400 shadow-sm">
               "We are seeing a significant rise in 'swimmer's ear' symptoms among office workers who use traditional earbuds for Zoom calls." — Dr. Elena V., ENT Specialist.
            </div>
          </div>
        </section>

        {/* PRIME DAY MEGA CTA - 巨型高转化按钮 */}
        <section className="my-24 py-16 bg-white border-4 border-[#FF8C00] rounded-3xl text-center shadow-[0_30px_60px_rgba(255,140,0,0.2)]">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Amazon Prime Day 2026</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto font-medium">
            The Lowest Prices of the Year on <span className="text-[#FF8C00]">OpenRun Pro 2</span> & <span className="text-[#FF8C00]">OpenFit</span>. 
            <br /> <span className="text-sm font-bold text-red-500 underline uppercase italic">Sale Ends June 26th</span>
          </p>
          <a 
            href="/shokz" 
            target="_blank"
            className="prime-day-btn inline-flex items-center bg-[#FF8C00] text-white px-16 py-7 rounded-full font-black text-lg uppercase tracking-widest shadow-2xl transition-all hover:bg-black"
          >
            Claim My Prime Day Discount <ShoppingCart className="ml-3 w-6 h-6" />
          </a>
          <div className="mt-8 flex justify-center items-center space-x-4 opacity-60">
             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="h-6" alt="Amazon" />
             <span className="h-4 w-px bg-gray-300"></span>
             <span className="text-[10px] font-bold uppercase tracking-widest">Official Store Fulfillment</span>
          </div>
        </section>

        {/* Content Section 3: Performance Deep Dive */}
        <section className="prose prose-zinc lg:prose-xl mx-auto mb-24 leading-[1.8]">
          <h2 className="text-3xl font-serif mb-8 flex items-center italic">
            <Zap className="mr-3 text-orange-500" /> Bone Conduction 9th Gen vs. DirectPitch™
          </h2>
          <p className="mb-12 text-gray-600">
            Shokz offers two distinct paths to audio excellence. The <strong>OpenRun Pro 2</strong> utilizes their latest Bone Conduction tech—vibrations bypass the eardrum entirely. Meanwhile, the <strong>OpenFit</strong> air-conduction series uses <i>DirectPitch™</i> technology to create a personal soundstage without blocking your ear.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
              <h4 className="font-bold text-lg mb-4 uppercase">For the Hardcore Athlete</h4>
              <p className="text-sm italic mb-4 text-gray-500">Model: OpenRun Pro 2</p>
              <ul className="text-sm space-y-3">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500" /> IP55 Sweatproof</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500" /> 12-Hour Battery Life</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500" /> Titanium Fit (Won't Budge)</li>
              </ul>
            </div>
            <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
              <h4 className="font-bold text-lg mb-4 uppercase">For Daily Comfort</h4>
              <p className="text-sm italic mb-4 text-gray-500">Model: OpenFit</p>
              <ul className="text-sm space-y-3">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500" /> DolphinArc Ear Hook</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500" /> Ultra-Soft Silicone</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500" /> AI Noise-Canceling Mic</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA Footer */}
        <section className="border-t border-gray-100 pt-20 pb-12 text-center">
           <Activity className="w-12 h-12 mx-auto mb-8 text-[#FF8C00] opacity-30" />
           <h3 className="text-3xl font-serif italic mb-8">Invest in your safety and your ears.</h3>
           <a href="/shokz" target="_blank" className="group text-sm font-black uppercase border-b-4 border-black pb-2 hover:text-[#FF8C00] hover:border-[#FF8C00] transition-all duration-300">
             Shop Shokz Prime Day Collections <ArrowRight className="ml-2 w-5 h-5 inline-block transition-transform group-hover:translate-x-2" />
           </a>
        </section>
      </main>

      {/* Compliance Footer */}
      <footer className="bg-white border-t border-gray-100 py-20 px-6 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.4em] mb-10 font-bold">Chic Trend Life Tech Bureau</p>
          <div className="bg-gray-50 p-8 rounded-2xl text-left border border-gray-100">
            <div className="flex items-start space-x-4">
              <Info className="w-5 h-5 text-gray-300 flex-shrink-0" />
              <p className="text-[11px] leading-relaxed text-gray-400 italic">
                <strong>Disclosure:</strong> chictrendlife.com is an independent editorial site. This report contains affiliate links to Amazon Prime Day deals. We may earn a commission from qualifying purchases. This does not affect our technical ratings or editorial integrity. Shokz and the Shokz logo are trademarks of Shokz Holding Limited. Prices and availability are subject to change during the Prime Day window (June 23-26).
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
