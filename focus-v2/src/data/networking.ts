// Types pour la section Networking
export interface VoiceUser {
  id: string;
  name: string;
  avatar: string;
  color: string;
  message?: string;
}

// 30+ utilisateurs pour l'appel vocal
export const voiceUsers: VoiceUser[] = [
  { id: 'thomas', name: 'Thomas_Ads', avatar: 'T', color: '#5865F2', message: 'Mon CTR est à 1.4%, je coupe ou je scale ?' },
  { id: 'karim', name: 'Karim_Immo', avatar: 'K', color: '#4B5563', message: 'Attend, ton CPM est à combien ?' },
  { id: 'julie', name: 'Julie_Ecom', avatar: 'J', color: '#EC4899', message: "J'avais le même souci, laisse tourner 24h" },
  { id: 'mehdi', name: 'Mehdi_Dev', avatar: 'M', color: '#10B981', message: "Ouais 1.4% c'est pas mal en fait !" },
  { id: 'lucas', name: 'Lucas_Crypto', avatar: 'L', color: '#F59E0B' },
  { id: 'emma', name: 'Emma_SMMA', avatar: 'E', color: '#8B5CF6' },
  { id: 'alex', name: 'Alex_SEO', avatar: 'A', color: '#EF4444' },
  { id: 'sarah', name: 'Sarah_UGC', avatar: 'S', color: '#06B6D4' },
  { id: 'maxime', name: 'Maxime_Drop', avatar: 'M', color: '#84CC16' },
  { id: 'lea', name: 'Lea_Influence', avatar: 'L', color: '#F472B6' },
  { id: 'antoine', name: 'Antoine_Fiscalité', avatar: 'A', color: '#A78BFA' },
  { id: 'chloe', name: 'Chloe_Branding', avatar: 'C', color: '#FB923C' },
  { id: 'romain', name: 'Romain_Meta', avatar: 'R', color: '#0081FB' },
  { id: 'manon', name: 'Manon_TikTok', avatar: 'M', color: '#FE2C55' },
  { id: 'hugo', name: 'Hugo_Google', avatar: 'H', color: '#4285F4' },
  { id: 'camille', name: 'Camille_Snap', avatar: 'C', color: '#FFFC00' },
  { id: 'nathan', name: 'Nathan_Auto', avatar: 'N', color: '#FF6E14' },
  { id: 'ines', name: 'Ines_Copywriting', avatar: 'I', color: '#7C3AED' },
  { id: 'theo', name: 'Theo_Funnel', avatar: 'T', color: '#059669' },
  { id: 'clara', name: 'Clara_Design', avatar: 'C', color: '#DB2777' },
  { id: 'victor', name: 'Victor_AI', avatar: 'V', color: '#10A37F' },
  { id: 'oceane', name: 'Oceane_Content', avatar: 'O', color: '#F97316' },
  { id: 'paul', name: 'Paul_Scale', avatar: 'P', color: '#6366F1' },
  { id: 'justine', name: 'Justine_CRO', avatar: 'J', color: '#14B8A6' },
  { id: 'mathis', name: 'Mathis_Analytics', avatar: 'M', color: '#8B5CF6' },
  { id: 'eva', name: 'Eva_Email', avatar: 'E', color: '#F43F5E' },
  { id: 'quentin', name: 'Quentin_Video', avatar: 'Q', color: '#0EA5E9' },
  { id: 'margot', name: 'Margot_Podcast', avatar: 'M', color: '#22C55E' },
  { id: 'baptiste', name: 'Baptiste_LBC', avatar: 'B', color: '#FF6E14' },
  { id: 'zoe', name: 'Zoe_Community', avatar: 'Z', color: '#D946EF' },
];

// Bulles de discussion
export interface SpeechBubble {
  userId: string;
  position: 'left' | 'right';
  delay: number;
}

export const speechBubbles: SpeechBubble[] = [
  { userId: 'thomas', position: 'left', delay: 0 },
  { userId: 'karim', position: 'right', delay: 1.5 },
  { userId: 'julie', position: 'left', delay: 2.5 },
  { userId: 'mehdi', position: 'right', delay: 3.5 },
];
