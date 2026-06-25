<nav className="max-w-7xl mx-auto p-8 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
    <h1 className="text-2xl font-black tracking-tighter italic text-zinc-800">CHIC TREND LIFE</h1>
    <div className="hidden md:flex space-x-10 text-[11px] font-bold uppercase tracking-widest text-gray-500">
      <a href="/" className="text-black border-b border-black">Home</a>
      <a href="#trends" className="hover:text-black transition">Trends</a>
      <a href="#about" className="hover:text-black transition">About</a>
    </div>
  </nav>

  <section className="relative h-[80vh] w-full overflow-hidden bg-gray-900">
    <img 
      src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80" 
      className="w-full h-full object-cover opacity-70"
      alt="Fashion Hero"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
      <p className="text-sm tracking-[0.5em] uppercase mb-6">Sophistication redefined</p>
      <h2 className="text-6xl md:text-8xl font-serif mb-8 max-w-5xl leading-tight italic">The Art of <br/> Modern Living</h2>
      <a href="#trends" className="bg-white text-black px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500 shadow-2xl">
        Explore the Edit
      </a>
    </div>
  </section>

  <section className="py-12 bg-gray-50 border-b border-gray-100 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div className="flex flex-col items-center">
        <ShieldCheck className="w-6 h-6 mb-3 text-gray-400" />
        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-600">Expert Curation</h4>
        <p className="text-[11px] text-gray-400 mt-1 italic">Hand-picked styles from global runways.</p>
      </div>
      <div className="flex flex-col items-center">
        <Users className="w-6 h-6 mb-3 text-gray-400" />
        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-600">Global Community</h4>
        <p className="text-[11px] text-gray-400 mt-1 italic">Join over 50k style enthusiasts.</p>
      </div>
      <div className="flex flex-col items-center">
        <Mail className="w-6 h-6 mb-3 text-gray-400" />
        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-600">Weekly Newsletter</h4>
        <p className="text-[11px] text-gray-400 mt-1 italic">The latest trends delivered to your inbox.</p>
      </div>
    </div>
  </section>

  <section id="trends" className="px-6 py-24 max-w-7xl mx-auto">
    <div className="flex justify-between items-end mb-16 border-b border-zinc-100 pb-8">
      <h2 className="text-4xl font-serif text-zinc-800 italic">Featured Stories</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {ARTICLES.map((article) => (
        <a href={`/posts/${article.id}`} key={article.id} className="group block no-underline">
          <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-8 relative shadow-sm transition hover:shadow-xl">
            <img src={article.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt={article.title} />
          </div>
          <p className="text-[10px] font-bold text-gray-400 mb-3 tracking-[0.3em] uppercase">{article.category}</p>
          <h3 className="text-2xl font-serif mb-4 leading-tight group-hover:underline underline-offset-8 transition-all duration-500">{article.title}</h3>
          <p className="text-sm text-gray-500 mb-8 leading-relaxed line-clamp-2 italic">{article.desc}</p>
          <div className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform border-b border-black w-fit pb-1">
            Read Story <ArrowRight className="ml-2 w-3 h-3" />
          </div>
        </a>
      ))}
    </div>
  </section>

  <footer className="bg-white border-t border-gray-100 pt-24 pb-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
        <div className="col-span-2">
          <h3 className="text-xl font-black mb-6 tracking-tighter italic">CHIC TREND LIFE</h3>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed italic">
            Dedicated to those who seek a refined lifestyle. We explore the intersection of fashion and modern living.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase mb-6 tracking-widest">Legal</h4>
          <ul className="text-sm text-gray-500 space-y-4">
            <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-black">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase mb-6 tracking-widest text-zinc-800">Contact</h4>
          <p className="text-sm text-gray-500 leading-relaxed italic">
            admin@chictrendlife.com
          </p>
        </div>
      </div>
      <div className="text-center pt-12 border-t border-gray-50 text-[10px] text-gray-300 tracking-[0.2em] uppercase font-bold">
         &copy; 2026 CHIC TREND LIFE.
      </div>
    </div>
  </footer>
</div>
