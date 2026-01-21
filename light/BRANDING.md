# 🎨 FOCUS - BRANDING OFFICIEL

## Identité Visuelle

### Logo
- **Fichier** : `assets/images/logof.svg`
- **Forme** : Lettre "F" stylisée
- **Usage** : Noir sur fond clair, Blanc sur fond sombre

---

## Palette de Couleurs

### Couleurs Principales
```css
--color-black: #000000;
--color-dark: #0a0a0a;
--color-darker: #050505;
--color-white: #FFFFFF;
--color-gold: #D4AF37;
--color-gold-light: #FFD700;
```

### Dégradés Gold
```css
/* Dégradé principal */
background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%);

/* Dégradé texte */
background: linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

/* Glow ambiant */
background: radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%);
```

### Couleurs Secondaires
```css
--color-gray-100: #f5f5f5;
--color-gray-300: #d1d1d1;
--color-gray-400: #a1a1a1;
--color-gray-500: #666666;
--color-gray-600: #444444;
--color-gray-700: #333333;
--color-gray-800: #1a1a1a;
--color-gray-900: #111111;
```

---

## Typographie

### Police Principale
- **Font** : Space Grotesk
- **Import** : Google Fonts
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap');
```

### Hiérarchie
| Élément | Taille Desktop | Taille Mobile | Weight |
|---------|---------------|---------------|--------|
| H1 (Hero) | 80px | 36px | 900 |
| H2 (Sections) | 48px | 28px | 900 |
| H3 (Cards) | 24px | 18px | 800 |
| Body | 16px | 14px | 400 |
| Small | 14px | 12px | 500 |
| Micro | 10px | 9px | 700 |

---

## Composants UI

### Boutons CTA
```css
/* Bouton Principal - Gold */
background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%);
color: black;
font-weight: 800;
padding: 16px 32px;
border-radius: 12px;
box-shadow: 0 10px 40px rgba(212,175,55,0.3);

/* Bouton Secondaire - Outline */
background: transparent;
border: 2px solid rgba(212,175,55,0.3);
color: white;
```

### Cards
```css
/* Card Standard */
background: rgba(20, 20, 22, 0.95);
border: 1px solid rgba(212,175,55,0.1);
border-radius: 16px;
box-shadow: 0 20px 60px rgba(0,0,0,0.5);

/* Card Highlight */
border-color: rgba(212,175,55,0.3);
box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(212,175,55,0.1);
```

### Badges
```css
/* Badge Standard */
background: rgba(212,175,55,0.1);
border: 1px solid rgba(212,175,55,0.2);
color: #D4AF37;
padding: 6px 12px;
border-radius: 20px;
font-size: 10px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 1px;
```

---

## Effets & Animations

### Glow Effects
```css
/* Glow Gold Subtil */
box-shadow: 0 0 30px rgba(212,175,55,0.15);

/* Glow Gold Intense */
box-shadow: 0 0 60px rgba(212,175,55,0.3);

/* Text Glow */
text-shadow: 0 0 20px rgba(212,175,55,0.5);
```

### Animations Standard
```css
/* Pulse */
@keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
}

/* Float */
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* Glow Pulse */
@keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 20px rgba(212,175,55,0.3); }
    50% { box-shadow: 0 0 40px rgba(212,175,55,0.6); }
}
```

---

## Backgrounds

### Section Dark
```css
background: #000000;
/* Avec glow ambiant */
background: linear-gradient(180deg, #000 0%, #0a0a0a 100%);
```

### Glow Ambiant (à ajouter en position absolute)
```css
/* Orbe Gold */
position: absolute;
width: 600px;
height: 600px;
background: radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%);
filter: blur(100px);
border-radius: 50%;
```

---

## Iconographie

### Style
- Emojis pour l'aspect friendly
- Icons minimalistes en blanc/gold
- Taille : 16-24px

### Emojis Signature
- ⚡ - Énergie/Action
- 🔥 - Performance
- 💰 - Argent/Revenue
- 📊 - Data/Analytics
- 🚀 - Croissance

---

## Spacing System

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
--space-4xl: 96px;
```

### Sections
- Padding vertical : `py-12 md:py-20` (48px / 80px)
- Gap entre sections : `mb-10 md:mb-14`

---

## Responsive Breakpoints

```css
/* Mobile First */
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

---

## Tone of Voice

### Mots-clés
- **Élite** - Pas pour tout le monde
- **Business** - Concret, résultats
- **Communauté** - Entraide, groupe
- **Sans bullshit** - Direct, honnête

### Exemples de copy
- "Pour 10€/mois"
- "Sans bullshit"
- "+1000 membres actifs"
- "Réseau business élite"

---

## Fichiers Officiels

```
v2/
├── index.html          # Site principal
├── CNAME               # Domaine : mentalitefocus.com
├── BRANDING.md         # Ce fichier
└── assets/
    └── images/
        ├── logof.svg   # Logo F
        └── rs3.jpg     # Image Arsenal
```

---

*Dernière mise à jour : Janvier 2026*
*Version : 2.0 - Mode Sombre*
