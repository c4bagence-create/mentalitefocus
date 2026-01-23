// Types pour les experts
export interface Expert {
  id: string;
  role: string;
  name: string;
  description: string;
  type: 'influence' | 'ads' | 'fiscal' | 'ia' | 'shopify' | 'seo' | 'auto' | 'smma';
}

export const experts: Expert[] = [
  {
    id: 'influence',
    role: 'Influence',
    name: 'EXPERT INFLUENCE',
    description: "Marketing d'influence en e-commerce. Créateurs & UGC.",
    type: 'influence'
  },
  {
    id: 'ads',
    role: 'Publicité',
    name: 'EXPERT ADS',
    description: 'Facebook, TikTok, Google Ads. Scale massif. ROAS explosif.',
    type: 'ads'
  },
  {
    id: 'fiscal',
    role: 'Optimisation',
    name: 'EXPERT FISCALITÉ',
    description: "LLC US. 0% d'impôts. Optimisation totale et légale.",
    type: 'fiscal'
  },
  {
    id: 'ia',
    role: 'IA & Automatisation',
    name: 'INTELLIGENCE ARTIFICIELLE',
    description: 'GPT-4, Claude, Gemini. Agents autonomes. Automatisation totale.',
    type: 'ia'
  },
  {
    id: 'shopify',
    role: 'E-Commerce',
    name: 'EXPERT SHOPIFY',
    description: 'Boutiques rentables. Dropshipping. Stores optimisés.',
    type: 'shopify'
  },
  {
    id: 'seo',
    role: 'Référencement',
    name: 'EXPERT SEO',
    description: 'Position #1 Google. Trafic organique gratuit et qualifié.',
    type: 'seo'
  },
  {
    id: 'auto',
    role: 'Trading',
    name: 'EXPERT AUTOMOBILE',
    description: 'Achat/Revente premium. Marges élevées. Deals exclusifs.',
    type: 'auto'
  },
  {
    id: 'smma',
    role: 'Agence',
    name: 'EXPERT SMMA',
    description: 'Gestion clients. Facturation récurrente. Marges solides.',
    type: 'smma'
  },
];
