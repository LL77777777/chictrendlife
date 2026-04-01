import React from 'react';
import { ArrowLeft, Star, CheckCircle, Zap, ShieldCheck, ShoppingCart } from 'lucide-react';

export default function RicaudAdvertorial() {
  const currentYear = 2026;

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#2D2D2D] font-serif selection:bg-[#E5D1B8]">
      {/* 按钮脉冲动画 */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-gold {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(193, 155, 118, 0.7); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(193, 155, 118, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(193, 155, 118, 0); }
        }
        .pulse-gold { animation: pulse-gold 2s infinite; }
      `}} />

      {/* 顶部导航 */}
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-[#F0EBE5] px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center text-[10px] font-sans font-bold uppercase tracking-widest text-[#8E735B]">
            <ArrowLeft className="mr-2 w-3 h-3" /> Chic Trend Life
          </a>
          <span className="font-black tracking-[0.3em] text-lg text-[#1A237E]">BEAUTÉ MAG</span>
          <div className="w-20"></div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto bg-white shadow-2xl my-8 overflow-hidden border border-[#F0EBE5]">
        {/* 标题部分 */}
        <header className="px-8 pt-16 pb-12 text-center">
          <div className="flex justify-center mb-6">
             <span className="text-[11px] font-sans font-bold bg-[#1A237E] text-white px-4 py-1 rounded-full uppercase tracking-[0.2em]">
               Exclusivité Beauté {currentYear}
             </span>
          </div>
          <h1 className="text-4xl md:text-6xl leading-[1.1] mb-8 text-[#1A237E] font-bold text-left md:text-center">
            Adieu les rides : Pourquoi cette "Crème Intelligente" française fait-elle trembler les cliniques esthétiques ?
          </h1>
          <p className="text-xl text-[#8E735B] italic font-medium mb-4">
            "Après 28 jours, ma peau semble avoir rajeuni de 10 ans. Voici la vérité sur le secret le mieux gardé de Paris."
          </p>
        </header>

        {/* 主图 */}
        <div className="relative">
          <img 
            src="/images/ricaud3.jpg" 
            alt="Dr Pierre Ricaud Soin" 
            className="w-full h-[450px] object-cover"
          />
          <div className="bg-[#1A237E] text-white text-[10px] uppercase tracking-widest p-3 text-center">
            Mise à jour : 22 février {currentYear} | Rapport Spécial Anti-Âge
          </div>
        </div>

        {/* 文章正文 */}
        <div className="px-8 md:px-16 py-12 font-sans leading-[1.8] text-[#444]">
          <p className="mb-8 text-lg">
            <strong>Paris, France.</strong> C'est le dilemme de toutes les femmes après 40 ans : accepter les signes du temps ou dépenser des fortunes en injections de Botox et liftings douloureux. Mais une marque iconique, <strong>Dr Pierre Ricaud</strong>, propose une troisième voie radicale.
          </p>

          <h2 className="text-2xl font-serif text-[#1A237E] mb-6 font-bold uppercase tracking-tight">Le choc des résultats : Laboratoire vs Bistouri</h2>
          
          <p className="mb-6">
            Oubliez les promesses vides des supermarchés. Nous avons comparé l'efficacité des soins sur-mesure de Ricaud aux interventions cliniques. Le résultat est **stupéfiant**. Là où le Botox fige le visage, la science de Dr Pierre Ricaud réactive la mémoire cellulaire pour un effet liftant naturel et immédiat.
          </p>

          {/* 对比表格 */}
          <div className="my-12 overflow-hidden rounded-xl border border-[#F0EBE5]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F8F5F2]">
                  <th className="p-4 text-sm font-bold uppercase tracking-widest">Critères</th>
                  <th className="p-4 text-sm font-bold uppercase tracking-widest text-red-600">Injections</th>
                  <th className="p-4 text-sm font-bold uppercase tracking-widest text-[#1A237E]">Soin Ricaud</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t border-[#F0EBE5]">
                  <td className="p-4 font-medium italic">Coût annuel</td>
                  <td className="p-4 text-red-500 font-bold">1 200€ - 3 000€+</td>
                  <td className="p-4 text-green-600 font-bold">Moins de 200€</td>
                </tr>
                <tr className="border-t border-[#F0EBE5]">
                  <td className="p-4 font-medium italic">Douleur / Risques</td>
                  <td className="p-4">Élevés (Hématomes)</td>
                  <td className="p-4">Zéro (Bien-être total)</td>
                </tr>
                <tr className="border-t border-[#F0EBE5]">
                  <td className="p-4 font-medium italic">Expression du visage</td>
                  <td className="p-4 italic">Figée, artificielle</td>
                  <td className="p-4 italic">Naturelle, éclatante</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 第一个 CTA 按钮 */}
          <div className="text-center my-12">
            <a 
              href="/ricaud" 
              target="_blank"
              className="pulse-gold inline-flex items-center bg-[#C19B76] text-white px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-[0.2em] shadow-2xl transition-all hover:bg-[#1A237E]"
            >
              Découvrir mon diagnostic personnalisé <Zap className="ml-2 w-4 h-4" />
            </a>
            <p className="mt-4 text-[10px] text-gray-400 uppercase tracking-widest">Offre limitée : Cadeaux exclusifs disponibles aujourd'hui</p>
          </div>

          <h2 className="text-2xl font-serif text-[#1A237E] mb-6 font-bold italic">"Une gomme magique sur mes rides d'expression"</h2>
          <p className="mb-6">
            Ce qui rend Dr Pierre Ricaud unique, c'est l'utilisation de **l'Actif Fractionné**. Ce n'est pas une simple crème, c'est un architecte cutané. En testant leur sérum best-seller, nous avons constaté une réduction de **45% de la profondeur des rides** en seulement 3 semaines. C'est du jamais vu pour un soin à domicile.
          </p>

          <div className="bg-[#F8F5F2] p-8 rounded-lg mb-10 border-l-4 border-[#C19B76]">
            <h4 className="font-bold text-[#1A237E] mb-4 uppercase text-sm italic tracking-widest">Pourquoi choisir Dr Pierre Ricaud ?</h4>
            <ul className="space-y-3 text-sm italic">
              <li className="flex items-center"><CheckCircle className="mr-3 w-4 h-4 text-[#C19B76]" /> Fabrication 100% Française (Bretagne)</li>
              <li className="flex items-center"><CheckCircle className="mr-3 w-4 h-4 text-[#C19B76]" /> Plus de 30 ans d'innovation en dermo-cosmétique</li>
              <li className="flex items-center"><CheckCircle className="mr-3 w-4 h-4 text-[#C19B76]" /> Diagnostics de peau sur-mesure gratuits</li>
              <li className="flex items-center"><CheckCircle className="mr-3 w-4 h-4 text-[#C19B76]" /> Cadeaux prestigieux offerts à chaque commande</li>
            </ul>
          </div>

          <h2 className="text-2xl font-serif text-[#1A237E] mb-6 font-bold">L'opportunité du printemps 2026</h2>
          <p className="mb-8">
            En ce mois de mars, Dr Pierre Ricaud propose des offres exceptionnelles pour préparer votre peau au retour du soleil. C'est le moment idéal pour investir dans votre capital jeunesse sans passer par la case chirurgie.
          </p>

          {/* 最终 CTA */}
          <div className="mt-16 pt-12 border-t border-[#F0EBE5] text-center">
             <h3 className="text-2xl font-serif mb-8 text-[#1A237E]">Êtes-vous prête pour votre transformation ?</h3>
             <a 
              href="/ricaud" 
              target="_blank"
              className="inline-flex items-center bg-[#1A237E] text-white px-12 py-6 rounded-sm font-black text-sm uppercase tracking-[0.3em] shadow-2xl hover:bg-[#C19B76] transition-all"
             >
               Profiter des Offres Spéciales <ShoppingCart className="ml-3 w-5 h-5" />
             </a>
             <div className="mt-8 flex justify-center space-x-6 grayscale opacity-50">
                <ShieldCheck className="w-8 h-8" />
                <span className="text-[10px] flex items-center font-bold uppercase tracking-tighter">Paiement Sécurisé</span>
                <span className="text-[10px] flex items-center font-bold uppercase tracking-tighter">Livraison Rapide</span>
             </div>
          </div>
        </div>
      </main>

      {/* 底部声明 */}
      <footer className="bg-white border-t border-[#F0EBE5] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-8">© {currentYear} Chic Trend Life | Magazine Beauté Indépendant</p>
          <div className="bg-[#F8F5F2] p-6 rounded-lg text-left">
            <p className="text-[10px] leading-relaxed text-gray-500 italic">
              <strong>Divulgation Publicitaire :</strong> Cet article est une publicité rédactionnelle (advertorial). Nous recevons une commission si vous achetez via nos liens. Les résultats mentionnés sont basés sur des témoignages d'utilisateurs et peuvent varier d'une personne à l'autre. Dr Pierre Ricaud est une marque déposée. Cet article ne constitue pas un conseil médical.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
