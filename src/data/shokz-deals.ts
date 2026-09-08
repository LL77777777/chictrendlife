export const updated = '2026-09-08';
export type Deal = {
  id: string; name: string; variant: string; discount: number; code?: string;
  original?: number; price?: number; start: string; end?: string;
  path: string; image?: string; imageAlt?: string;
};
// New offers go first. Keep expired records for the archive; never reuse an old ID.
// Dates are campaign calendar dates. The advertiser has not specified a cutoff time.
export const shokzDeals: Deal[] = [
  { id: 'opendots2-longterm', name: 'Shokz OpenDots 2', variant: 'Long-term promo code', discount: 10, code: 'SHOKZE320', start: '2026-09-08', path: '/shokz-deal-opendots2' },
  { id: 'openrun-pro-september', name: 'OpenRun Pro', variant: 'Check eligible options on Amazon', discount: 20, original: 159.95, price: 127.95, start: '2026-09-03', end: '2026-09-16', path: '/shokz-deal-openrun-pro', image: '/images/shokz-openrun-pro-black.png', imageAlt: 'Shokz OpenRun Pro in Black' },
  { id: 'openrun-pro-colors-september', name: 'OpenRun Pro', variant: 'White & Blue', discount: 31, original: 159.95, price: 110.35, start: '2026-09-03', end: '2026-09-16', path: '/shokz-deal-openrun-colors', image: '/images/shokz-openrun-pro-blue.png', imageAlt: 'Shokz OpenRun Pro in Blue; offer covers White and Blue' },
  { id: 'openrun-mini-september', name: 'OpenRun Pro Mini', variant: 'Black & White', discount: 31, original: 159.95, price: 110.35, start: '2026-09-03', end: '2026-09-16', path: '/shokz-deal-openrun-mini', image: '/images/shokz-openrun-pro-mini.png', imageAlt: 'Shokz OpenRun Pro Mini in Black; offer covers Black and White' },
];
export function dealStatus(deal: Deal, date: string) {
  if (date < deal.start) return 'upcoming';
  if (deal.end && date > deal.end) return 'expired';
  return 'active';
}
