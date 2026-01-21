# 🚀 FOCUS BUSINESS - LANDING PAGE

## 📁 Structure du Projet

```
focus/
├── index.html          # Page principale (toutes les sections)
├── css/
│   └── (optionnel)     # CSS externe si besoin
├── js/
│   └── (optionnel)     # JS externe si besoin
└── assets/
    └── images/         # Images (à ajouter)
```

## ✅ Sections Incluses (100% COMPLÈTES)

1. **LOADER** - Animation de chargement avec logo GSAP
2. **HERO** - Section principale avec cartes animées
3. **ARSENAL** - Outils et ressources
4. **DISCORD** - Simulation salon vocal avec chat live
5. **NOTRE EQUIPE** - 8 cartes d'experts avec animations ultra-réalistes :
   - Snapchat Ads (stories animées)
   - Meta Ads (dashboard avec ROAS)
   - Fiscalité LLC (certificat officiel)
   - IA Terminal (Matrix + ASCII art)
   - E-commerce Shopify (sales en temps réel)
   - SEO Google (résultats de recherche)
   - Automobile LeBonCoin (annonce vendue)
   - SMMA Invoice (facture payée)
6. **NETWORKING** - Phone mockup Discord + cartes flottantes
7. **PRICING** - Card 3D avec satellites et micro-scènes
8. **FAQ** - Interface AI chat avec sidebar
9. **FOOTER** - Ultra stylé avec stats et CTA

## 🔧 Technologies Utilisées

- **HTML5** - Structure sémantique
- **TailwindCSS** (CDN) - Framework CSS utility-first
- **GSAP 3.12.5** (CDN) - Animations avancées
- **Vanilla Tilt** (CDN) - Effets 3D au hover
- **JavaScript Vanilla** - Animations personnalisées

## 🚀 Déploiement

### Option 1 : Upload Direct
1. Connecte-toi à ton hébergeur (cPanel, FTP, etc.)
2. Upload TOUT le dossier `focus/` dans `/public_html/` ou `/www/`
3. Assure-toi que `index.html` est à la racine
4. C'est prêt ! 🎉

### Option 2 : GitHub Pages
```bash
cd focus
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TON-USERNAME/focus-business.git
git push -u origin main
```

### Option 3 : Netlify / Vercel
1. Drag & drop le dossier `focus/` sur Netlify.com
2. Ton site est live en 30 secondes !

## ⚡ Performance

- **Taille totale** : ~226 KB (HTML uniquement)
- **Chargement** : Optimisé avec lazy-loading
- **Animations** : Pausées quand hors écran (IntersectionObserver)
- **CDN** : Librairies externes chargées depuis CDN

## 🎨 Personnalisation

### Changer le lien Stripe
Cherche `checkout.stripe.com` dans `index.html` et remplace par ton lien.

### Modifier les couleurs
Les couleurs principales sont dans les gradients :
- Primary : `#fff` (blanc)
- Secondary : `#D4AF37` (gold)
- Background : `#000`, `#050505` (noir)

### Ajouter des images
Place tes images dans `assets/images/` et référence-les :
```html
<img src="assets/images/ton-image.jpg" alt="Description">
```

## 🐛 Debug

Si une section ne s'affiche pas :
1. Ouvre la console (F12)
2. Vérifie les erreurs JavaScript
3. Assure-toi que les CDN sont bien chargés :
   - TailwindCSS
   - GSAP
   - Vanilla Tilt

## 📞 Support

Questions ? Bugs ? Contacte l'équipe Focus Business.

---

**Version** : 1.0.0  
**Date** : Janvier 2026  
**Status** : ✅ Production Ready
