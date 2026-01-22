// Types pour les cartes Arsenal
export interface ArsenalCard {
  id: string;
  tag: string;
  tagColor: 'green' | 'shopify' | 'purple' | 'black' | 'orange' | 'blue' | 'meta' | 'pink' | 'gray' | 'insta' | 'snap';
  type: 'ia' | 'ecom' | 'smma' | 'fiscal' | 'auto' | 'google' | 'meta' | 'tiktok' | 'seo' | 'influence' | 'snap';
}

export const arsenalCardsRow1: ArsenalCard[] = [
  { id: 'ia', tag: 'IA Automation', tagColor: 'green', type: 'ia' },
  { id: 'ecom', tag: 'E-Commerce', tagColor: 'shopify', type: 'ecom' },
  { id: 'smma', tag: 'SMMA', tagColor: 'purple', type: 'smma' },
  { id: 'fiscal', tag: 'Fiscalité', tagColor: 'black', type: 'fiscal' },
  { id: 'auto', tag: 'Automobile', tagColor: 'orange', type: 'auto' },
];

export const arsenalCardsRow2: ArsenalCard[] = [
  { id: 'google', tag: 'Google Ads', tagColor: 'blue', type: 'google' },
  { id: 'meta', tag: 'Meta Ads', tagColor: 'meta', type: 'meta' },
  { id: 'tiktok', tag: 'TikTok Ads', tagColor: 'pink', type: 'tiktok' },
  { id: 'seo', tag: 'SEO', tagColor: 'gray', type: 'seo' },
  { id: 'influence', tag: 'Influence', tagColor: 'insta', type: 'influence' },
  { id: 'snap', tag: 'Snapchat Ads', tagColor: 'snap', type: 'snap' },
];

// Couleurs des tags
export const tagColors: Record<ArsenalCard['tagColor'], string> = {
  green: 'bg-emerald-500 text-white',
  shopify: 'bg-[#95bf47] text-white',
  purple: 'bg-violet-600 text-white',
  black: 'bg-zinc-900 text-white dark:bg-white dark:text-black',
  orange: 'bg-orange-500 text-white',
  blue: 'bg-blue-100 text-blue-700',
  meta: 'bg-[#0081FB] text-white',
  pink: 'bg-pink-500 text-white',
  gray: 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300',
  insta: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white',
  snap: 'bg-yellow-400 text-black',
};
