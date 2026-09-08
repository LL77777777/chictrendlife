'use client';

import { useEffect, useState } from 'react';
import { Deal, dealStatus, shokzDeals, updated } from '../../../data/shokz-deals';

const rel = 'sponsored nofollow noopener noreferrer';
const money = (value: number) => `$${value.toFixed(2)}`;
const displayDate = (date: string) => new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
function CopyCode({ code, path }: { code: string; path: string }) {
  const [message, setMessage] = useState('Copy code');
  const copy = () => {
    if (!navigator.clipboard) { setMessage('Select the code to copy'); return; }
    void navigator.clipboard.writeText(code).then(
      () => setMessage('Copied!'),
      () => setMessage('Select the code to copy'),
    );
  };
  const openOffer = () => {
    copy();
    window.open(path, '_blank', 'noopener,noreferrer');
  };
  return <div>
    <div className="flex flex-wrap items-center gap-3">
      <button type="button" onDoubleClick={openOffer} onKeyDown={event => { if (event.key === 'Enter') { event.preventDefault(); openOffer(); } }} aria-label={`Double-click ${code} to copy and open the Amazon offer; press Enter with a keyboard`} className="select-all rounded-lg border border-dashed border-orange-300 bg-white px-4 py-3 text-lg font-bold tracking-wider text-zinc-950"><code>{code}</code></button>
      <a href={path} target="_blank" rel={rel} onClick={copy} className="rounded-lg border border-orange-300 px-4 py-3 text-sm font-semibold hover:bg-orange-100">Copy &amp; shop ↗</a>
      <span role="status" className="text-xs">{message}</span>
    </div>
    <p className="mt-2 text-xs text-zinc-500">Double-click the code or choose Copy &amp; shop to open Amazon.</p>
  </div>;
}
function Card({ deal, expired = false }: { deal: Deal; expired?: boolean }) {
  return <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
    {deal.image && <a href={deal.path} target="_blank" rel={rel} aria-label={`View ${deal.name} ${deal.variant} on Amazon`} className="block border-b border-zinc-100 bg-white"><img src={deal.image} alt={deal.imageAlt} width="800" height="800" loading="lazy" className="h-52 w-full object-contain p-5" /></a>}
    <div className="p-6"><div className="mb-4 flex flex-wrap items-center justify-between gap-2"><span className={`rounded-full px-3 py-1 text-xs font-bold ${expired ? 'bg-zinc-100 text-zinc-500' : 'bg-orange-100 text-orange-800'}`}>{expired ? 'Expired' : `${deal.discount}% OFF`}</span><span className="text-xs text-zinc-500">Amazon US</span></div>
      <h3 className="text-xl font-semibold tracking-tight">{deal.name}</h3><p className="mt-1 text-sm text-zinc-500">{deal.variant}</p>
      {deal.price !== undefined && <div className="my-5"><span className="text-3xl font-semibold tracking-tight">{money(deal.price)}</span> <del className="ml-2 text-sm text-zinc-400">{money(deal.original!)}</del><p className="mt-1 text-xs text-zinc-500">{expired ? 'Previous advertised price' : `Advertised deal · Save ${money(deal.original! - deal.price)}`}</p></div>}
      <p className="text-sm text-zinc-600">{displayDate(deal.start)} – {deal.end ? displayDate(deal.end) : 'No end date announced'}</p><p className="mt-2 text-xs leading-5 text-zinc-500">No promo code supplied. Confirm the selected color and final price on Amazon.</p>
      {!expired && <a href={deal.path} rel={rel} target="_blank" className="mt-6 block rounded-lg bg-zinc-950 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-orange-700">Check deal on Amazon ↗</a>}
    </div></section>;
}
export default function Deals() {
  const [date, setDate] = useState(updated);
  useEffect(() => { const tick = () => setDate(new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date())); tick(); const timer = setInterval(tick, 60000); return () => clearInterval(timer); }, []);
  const active = shokzDeals.filter(d => dealStatus(d, date) === 'active');
  const pinned = active.filter(d => d.code && !d.end);
  const limited = active.filter(d => d.end);
  const expired = shokzDeals.filter(d => dealStatus(d, date) === 'expired');
  const max = Math.max(0, ...active.map(d => d.discount));
  return <>
    {pinned.map(deal => <aside key={deal.id} className="mb-9 rounded-2xl border border-orange-200 bg-orange-50 p-5 sm:p-7">
      <div className="grid items-center gap-7 lg:grid-cols-2">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange-800">Pinned · Ongoing offer</p>
          <h2 className="mt-2 text-xl font-semibold">{deal.name}: {deal.discount}% OFF</h2>
          <p className="mt-2 mb-4 text-sm text-zinc-600">No end date announced</p>
          <CopyCode code={deal.code!} path={deal.path}/>
          <a href={deal.path} target="_blank" rel={rel} className="mt-5 inline-block rounded-lg bg-zinc-950 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-700">Shop OpenDots 2 on Amazon ↗</a>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { slug: 'pearl-white', name: 'Pearl White' },
              { slug: 'grey', name: 'Grey' },
              { slug: 'black', name: 'Black' },
            ].map(color => <a key={color.slug} href={deal.path} target="_blank" rel={rel} aria-label={`Shop OpenDots 2 — ${color.name} on Amazon`} className="rounded-xl border border-orange-100 bg-white p-2 text-center transition hover:border-orange-400 hover:shadow-sm">
              <img src={`/images/shokz-opendots2-${color.slug}.webp`} alt={`Shokz OpenDots 2 earbuds in ${color.name}`} width="480" height="480" className="aspect-square w-full object-contain"/>
              <span className="mt-2 block text-xs font-medium text-zinc-600">{color.name}</span>
            </a>)}
          </div>
          <p className="mt-3 text-center text-xs text-zinc-500">Choose your color on Amazon. Availability may vary.</p>
        </div>
      </div>
      <p className="mt-4 text-xs text-zinc-500">Enter the code at checkout for eligible OpenDots 2 purchases. Other models are not included in this code offer.</p>
    </aside>)}
    <header className="mb-8"><p className="text-xs font-semibold uppercase tracking-widest text-orange-700">Shokz Official offers · US</p><h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Shokz US Daily Deals{max ? ` — Up to ${max}% OFF!` : ' & Promo Codes'}</h1><p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">The latest Shokz offers shared with Chic Trend Life, collected in one place. Pick your model, check the dates, then follow its link to Amazon US. New promotions will appear here as they are added.</p><p className="mt-3 text-xs text-zinc-500">Amazon US · Prices in USD</p></header>
    <div className="mb-5 flex items-center justify-between"><h2 className="text-lg font-semibold">Limited-time offers</h2><span className="text-xs text-zinc-500">{limited.length} listed offers</span></div>
    {limited.length ? <div className="grid gap-5 md:grid-cols-3">{limited.map(deal => <Card key={deal.id} deal={deal}/>)}</div> : <p className="rounded-xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">No limited-time offers are currently listed. Check above for ongoing codes.</p>}
    {expired.length > 0 && <details className="mt-8"><summary className="cursor-pointer text-sm font-semibold">Expired offers ({expired.length})</summary><div className="mt-4 grid gap-5 md:grid-cols-3">{expired.map(d => <Card key={d.id} deal={d} expired/>)}</div></details>}
    <p className="mt-5 text-xs leading-6 text-zinc-500">Offer dates and prices are supplied by our affiliate partner, not a live Amazon price feed. Availability and checkout price can change. End times were not specified; expired offers are archived using the US Eastern calendar. Product photos show representative colors.</p>
  </>;
}
