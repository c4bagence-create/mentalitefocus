# 🎯 PAGE ADS - "TU PAIES OU TU FAIS LE P'TIT ?" - READY TO DEPLOY

**Date**: 23 janvier 2026
**Status**: ✅ PRÊT POUR LE PUSH GITHUB → AUTO-DEPLOY HOSTINGER

---

## 🚀 DÉPLOIEMENT

### 1. Push vers GitHub
```bash
git push origin main
```

### 2. Auto-déploiement
Hostinger va automatiquement déployer le site.
La page sera disponible à: **https://mentalite-focus.com/ads**

### 3. Vérification post-déploiement
- [ ] Vérifier que https://mentalite-focus.com/ads charge
- [ ] Ouvrir la console (F12) et vérifier les pixels
- [ ] Tester le formulaire newsletter
- [ ] Cliquer sur les CTAs et vérifier le tracking

---

## 📊 DIFFÉRENCES ENTRE LES PAGES

| Élément | Page principale (/) | Page ADS (/ads) |
|---------|-------------------|-----------------|
| **Title** | L'Élite de l'Exécution | Tu paies ou tu fais le p'tit ? |
| **Hero Badge** | Groupe Business | TU PAIES OU TU FAIS LE P'TIT ? |
| **Hero Title** | TOUS LES BUSINESS | FAIS LE PLEIN |
| **Ton** | Corporate, pro | Masculin, street, cash |
| **Newsletter** | Communauté | Arrête de faire le p'tit |
| **Tracking** | Standard | + Label "ADS page" |

---

## 🎯 POUR VOS CAMPAGNES SNAP/TIKTOK

### URL de destination
```
https://mentalite-focus.com/ads
```

### Ciblage recommandé
- **Âge**: 18-35 ans
- **Genre**: Hommes
- **Intérêts**: Business, E-commerce, Argent, Lifestyle

### Budget test initial
- **Snapchat**: 20-30€/jour
- **TikTok**: 20-30€/jour
- **Durée**: 3 jours minimum

### Visuels
Vous avez 5 visuels au format vertical (1536x2752) :
1. Restaurant couple + sac LV (le plus fort)
2. Piscine groupe
3. Paiement caisse
4. Restaurant variante 1
5. Restaurant variante 2

---

## 📁 FICHIERS CRÉÉS

```
mentalitefocus/
├── ads/
│   └── index.html                     ← Page compilée prête pour production
│
├── focus-v2/
│   ├── src/
│   │   └── pages/
│   │       └── ads.astro              ← Page source avec copywriting adapté
│   └── dist/                          ← Build Astro complet
│
├── ADS_CAMPAIGN_GUIDE.md              ← Guide stratégie campagne
└── README_ADS_PAGE.md                 ← Ce fichier
```

---

## 🔄 POUR MODIFIER LA PAGE ADS À L'AVENIR

1. Modifier le fichier source:
   ```bash
   code focus-v2/src/pages/ads.astro
   ```

2. Rebuild le projet:
   ```bash
   cd focus-v2
   npm run build
   ```

3. Copier vers la racine:
   ```bash
   cd ..
   cp -r focus-v2/dist/* .
   ```

4. Commit et push:
   ```bash
   git add .
   git commit -m "Update ads page"
   git push origin main
   ```

---

## 📊 PIXELS INSTALLÉS

| Pixel | ID | Events |
|-------|-----|--------|
| Meta | 26364309749823828 | PageView, InitiateCheckout, Lead |
| Snapchat | 827ae1c2-5cf7-44db-9761-0a858ab2e2e6 | PAGE_VIEW, START_CHECKOUT, SIGN_UP |
| TikTok | D5PCBC3C77UDCU1J2LHG | PageView, InitiateCheckout, Subscribe |
| Klaviyo | SRshwY | Active on Site, Newsletter Signup |

**Tracking spécifique ADS**:
- Tous les events incluent le label "ADS page" pour segmenter
- Newsletter: "Newsletter Signup ADS"
- CTA: "Footer CTA ADS"

---

## 🎨 COPYWRITING UTILISÉ

### Meta Tags
```html
<title>Focus Business - Tu paies ou tu fais le p'tit ?</title>

<meta name="description" content="Arrête de faire le p'tit.
Rejoins 1240 mecs qui font le plein chaque mois. E-commerce,
SMMA, LLC - Les vraies méthodes pour faire du cash. 9.90€/mois.">
```

### Hero Section
```
Badge: TU PAIES OU TU FAIS LE P'TIT ?
Titre: FAIS LE PLEIN.
Sous-titre: 1240 mecs qui font du cash. E-commerce, SMMA, LLC.
            Les vraies méthodes.
```

### Newsletter Footer
```
Titre: Arrête de faire le p'tit
Texte: Rejoins 1240 mecs qui font le plein. Reçois les vraies
       méthodes pour faire du cash directement dans ta boîte.
```

---

## 📖 GUIDE COMPLET

Pour la stratégie complète de campagne, voir:
👉 **[ADS_CAMPAIGN_GUIDE.md](ADS_CAMPAIGN_GUIDE.md)**

Ce guide contient:
- Stratégie de campagne détaillée
- Calendrier de posts 7 jours
- Variantes de copy à A/B tester
- Configuration Snap/TikTok
- KPIs et objectifs
- Template de reporting hebdomadaire

---

## ✅ CHECKLIST AVANT LE PUSH

- [x] Page ads.astro créée avec copywriting adapté
- [x] Build Astro réussi
- [x] Fichiers compilés copiés à la racine
- [x] Pixels de tracking configurés
- [x] Guide de campagne créé
- [x] Commit git créé

### ⏭️ Prochaine étape:
```bash
git push origin main
```

---

**Version**: 1.0
**Créé le**: 23 janvier 2026
**Ready for**: GitHub Push → Auto-deploy Hostinger
