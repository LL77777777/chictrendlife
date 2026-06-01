import React from 'react';
import { ArrowLeft, Star, ShieldCheck, Plane, Globe, ShoppingCart, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CoolifeAdvertorial() {
  const currentYear = 2026;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans selection:bg-blue-100">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes travel-pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
          70% { transform: scale(1.03); box-shadow: 0 0 0 15px rgba(37, 99, 235, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
        }
        .pulse-blue { animation: travel-pulse 2s infinite; }
      `}} />

      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
            <ArrowLeft className="mr-2 w-3 h-3" /> Chic Trend Life
          </a>
          <span className="font-black tracking-tighter text-xl text-zinc-800 italic">TRAVEL EDIT</span>
          <div className="hidden md:block w-20"></div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto bg-white shadow-xl my-8 overflow-hidden rounded-sm">
        <header className="px-8 pt-16 pb-12 text-center border-b border-slate-50">
          <div className="flex justify-center mb-6">
             <span className="text-[11px] font-bold bg-blue-50 text-blue-600 px-4 py-1 rounded-full uppercase tracking-widest">
               Smart Travel Hacks {currentYear}
             </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-8 text-slate-900">
            Stop Overpaying for Luggage: How This Amazon Best-Seller is Disrupting the Luxury Travel Market
          </h1>
          <div className="flex items-center justify-center space-x-3 text-slate-400 text-sm italic">
            <span>By Marcus Thorne, Travel Editor</span>
            <span>•</span>
            <span>June 2, {currentYear}</span>
          </div>
        </header>

        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=1200&q=80" 
            alt="Coolife Luggage Set" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-sm shadow-lg max-w-xs hidden md:block border-l-4 border-blue-600">
            <p className="text-xs font-bold text-blue-600 mb-1 tracking-widest uppercase">Editor's Note</p>
            <p className="text-sm italic">"I took the Coolife 3-piece set through 4 international flights in 3 weeks. Here's what happened."</p>
          </div>
        </div>

        <div className="px-8 md:px-20 py-16 leading-[1.8] text-slate-700 text-lg">
          <p className="mb-8">
            Let’s be real: We’ve all been seduced by those $500 minimalist suitcases on Instagram. But after seeing my "premium" carry-on cracked by a baggage handler in Heathrow last year, I had an epiphany. <strong>Why am I spending a mortgage payment on something meant to be thrown around an airplane belly?</strong>
          </p>

          <div className="my-16 text-center">
            <a 
              href="/coolife" 
              target="_blank"
              className="pulse-blue inline-flex items-center bg-blue-600 text-white px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest transition-all hover:bg-blue-700 shadow-xl"
            >
              Check Coolife Spring Deals on Amazon <ShoppingCart className="ml-2 w-4 h-4" />
            </a>
            <p className="mt-4 text-[10px] text-slate-400 uppercase tracking-[0.2em]">Limited Stock: Sets starting under $160</p>
          </div>

          <h2 className="text-3xl font-serif text-slate-900 mb-6">1. The "Indestructible" Factor</h2>
          <p className="mb-6 text-gray-600">
            Coolife uses a blend of <strong>PC+ABS material</strong>. In plain English? It’s incredibly light but has that "bounce-back" flexibility. During my test, I literally stood on the empty 28-inch suitcase. It flexed, then popped right back into shape.
          </p>

          <div className="bg-slate-50 p-8 rounded-xl my-12 border border-slate-100">
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="mr-3 w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm"><strong>Silent-Run Spinner Wheels:</strong> Multidirectional wheels that actually glide over carpet and cobblestones.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mr-3 w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm"><strong>TSA-Approved Security:</strong> Integrated locks that keep your belongings safe.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mr-3 w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm"><strong>The 3-Piece Hack:</strong> Get a 20", 24", and 28" set for less than half the price of ONE carry-on from trendy brands.</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <div className="p-8 bg-white border border-slate-100 shadow-sm rounded-lg">
              <p className="text-red-400 font-bold text-xs uppercase mb-4 tracking-widest">The "Designer" Option</p>
              <p className="text-2xl font-serif mb-2">$450 - $600</p>
              <p className="text-sm text-slate-500 italic">One suitcase. Heartbreak when it gets scratched.</p>
            </div>
            <div className="p-8 bg-blue-600 text-white shadow-xl rounded-lg transform md:-translate-y-4">
              <p className="text-blue-200 font-bold text-xs uppercase mb-4 tracking-widest">The Coolife Way</p>
              <p className="text-2xl font-serif mb-2">$150 - $190</p>
              <p className="text-sm text-blue-100 italic font-medium underline underline-offset-4">Complete 3-piece set. 2-Year Warranty.</p>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-slate-100 text-center text-gray-600">
             <h3 className="text-3xl font-serif mb-8 text-slate-900">Ready for your next adventure?</h3>
             <a 
              href="/coolife" 
              target="_blank"
              className="inline-flex items-center bg-zinc-900 text-white px-12 py-6 rounded-sm font-bold text-sm uppercase tracking-[0.3em] shadow-2xl hover:bg-blue-600 transition-all duration-500"
             >
               View Coolife Collections on Amazon <ArrowRight className="ml-3 w-5 h-5" />
             </a>
             <div className="mt-12 flex justify-center items-center space-x-8 opacity-40 grayscale">
                <Plane className="w-6 h-6" />
                <Globe className="w-6 h-6" />
                <ShieldCheck className="w-6 h-6" />
             </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] text-slate-400 uppercase tracking-widest mb-8">© {currentYear} Chic Trend Life | The Smart Traveler's Resource</p>
          <div className="bg-slate-50 p-6 rounded-lg text-left">
            <p className="text-[10px] leading-relaxed text-slate-500 italic">
              <strong>Affiliate Disclosure:</strong> chictrendlife.com is a participant in the Amazon Services LLC Associates Program. We may earn a commission if you purchase through our links.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
