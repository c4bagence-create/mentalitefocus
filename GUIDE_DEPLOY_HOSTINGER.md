# 🚀 GUIDE DÉPLOIEMENT HOSTINGER - FOCUS BUSINESS

**Date**: 23 janvier 2026
**Status**: ✅ TOUT EST PRÊT POUR DÉPLOIEMENT

---

## 📦 FICHIERS SUR TON BUREAU

Tu as 2 fichiers sur ton bureau:

1. **`focus-deploy-final.zip`** (214 KB) - Site complet avec tous les pixels
2. **`confirmation.html`** (11 KB) - Page de confirmation pour les purchases

---

## 🎯 ÉTAPE 1: UPLOAD DU SITE PRINCIPAL

### 1. Connecte-toi à Hostinger

Vas sur https://hpanel.hostinger.com et connecte-toi

### 2. Va dans le File Manager

- Cliquer sur **Website** dans le menu gauche
- Cliquer sur **File Manager**
- Tu vas voir la structure de dossiers

### 3. Va dans `/public_html/`

C'est la racine de ton site web

### 4. Upload `focus-deploy-final.zip`

- Cliquer sur **Upload** (en haut à droite)
- Sélectionner `focus-deploy-final.zip` depuis ton bureau
- Attendre que l'upload finisse (barre verte = 100%)

### 5. Extraire le ZIP

- Faire un **clic droit** sur `focus-deploy-final.zip`
- Cliquer sur **Extract**
- Choisir **Extract here** (extraire ici)
- Attendre que l'extraction finisse

### 6. Supprimer le ZIP

- Sélectionner `focus-deploy-final.zip`
- Cliquer sur **Delete**
- Confirmer

### ✅ Résultat attendu dans `/public_html/`:

```
/public_html/
├── index.html          ← Ton site
├── _astro/
│   ├── index.CMXRZc5X.css
│   ├── DiscordSection...js
│   └── NetworkingSection...js
├── images/
│   ├── logofocusnoir.svg
│   ├── logof.svg
│   └── favicon.svg
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

---

## 🎯 ÉTAPE 2: UPLOAD DE LA PAGE CONFIRMATION

### 1. Toujours dans `/public_html/`

Tu dois être dans le dossier `/public_html/` (racine du site)

### 2. Upload `confirmation.html`

- Cliquer sur **Upload**
- Sélectionner `confirmation.html` depuis ton bureau
- Attendre que l'upload finisse

### ✅ Résultat attendu:

Le fichier doit être à `/public_html/confirmation.html` (à la racine, au même niveau que `index.html`)

---

## 🔧 ÉTAPE 3: CONFIGURER STRIPE

### 1. Va dans ton Stripe Dashboard

https://dashboard.stripe.com

### 2. Va dans Settings → Checkout

- Cliquer sur **Settings** (roue dentée en haut à droite)
- Cliquer sur **Payments** dans le menu gauche
- Cliquer sur **Checkout**

### 3. Configure Success URL

Dans la section **Checkout sessions**, trouve **Success URL** et mets:

```
https://mentalite-focus.com/confirmation
```

Ou si c'est via API:
```javascript
success_url: 'https://mentalite-focus.com/confirmation'
```

### 4. Remplace le lien Discord

**IMPORTANT**: Va dans File Manager → `/public_html/confirmation.html`

- Cliquer sur le fichier
- Cliquer sur **Edit**
- Chercher la ligne ~280 (cherche "discord.gg")
- Remplacer par ton **vrai lien Discord**:

```javascript
// AVANT
window.location.href = 'https://discord.gg/focus-business';

// APRÈS
window.location.href = 'TON_LIEN_DISCORD_ICI';
```

- Cliquer sur **Save & Close**

---

## ✅ ÉTAPE 4: VÉRIFICATION

### 1. Teste le site principal

Va sur: **https://mentalite-focus.com**

✅ **Checklist**:
- [ ] Le site se charge correctement
- [ ] Design sobre et premium (mode light par défaut)
- [ ] Toutes les sections visibles
- [ ] Carte pricing réaliste style Amex
- [ ] Pas d'erreurs dans la console (F12)

### 2. Teste la page confirmation

Va sur: **https://mentalite-focus.com/confirmation**

✅ **Checklist**:
- [ ] Page se charge avec "Paiement confirmé ✅"
- [ ] Countdown de 5 secondes visible
- [ ] Debug panel en bas montre tous les pixels OK:
  - ✅ Meta Pixel loaded
  - ✅ Snapchat Pixel loaded
  - ✅ TikTok Pixel loaded
  - ✅ Klaviyo loaded
  - 💰 Purchase value: 9.90 EUR

### 3. Teste la newsletter

Sur le site principal:
- [ ] Scroll jusqu'à la section newsletter (footer)
- [ ] Entre un email de test
- [ ] Clique sur "Accéder gratuitement"
- [ ] Vérifier dans la console (F12):
  - ✅ Klaviyo - Newsletter Signup tracked
  - ✅ Meta - Lead tracked
  - ✅ Snapchat - SIGN_UP tracked
  - ✅ TikTok - Subscribe tracked

---

## 🧪 ÉTAPE 5: TESTER LE FUNNEL COMPLET

### Test complet de A à Z:

1. **Va sur le site**: https://mentalite-focus.com
2. **Ouvre la console**: F12 (onglet Console)
3. **Scroll jusqu'à la carte pricing**
4. **Clique sur "REJOINDRE LE CLUB"**
5. **Vérifie les logs console**:
   ```
   ✅ Meta InitiateCheckout
   ✅ Snapchat START_CHECKOUT
   ✅ TikTok InitiateCheckout
   ✅ Klaviyo Started Checkout
   ```
6. **Tu es redirigé vers Stripe**: espace.mentalitefocus.com/checkout
7. **Entre tes infos de paiement** (mode test si possible)
8. **Clique sur "Payer"**
9. **Tu es redirigé vers**: mentalite-focus.com/confirmation
10. **Vérifie les logs console**:
    ```
    ✅ Meta Pixel - PageView fired
    ✅ Meta Pixel - Purchase fired: 9.90 EUR
    ✅ Snapchat Pixel - PAGE_VIEW fired
    ✅ Snapchat Pixel - PURCHASE fired: 9.90 EUR
    ✅ TikTok Pixel - PageView fired
    ✅ TikTok Pixel - CompletePayment fired: 9.90 EUR
    ✅ Klaviyo - Placed Order tracked: 9.90 EUR
    ✅ Klaviyo - Ordered Product tracked
    ```
11. **Attendre 5 secondes**
12. **Redirection vers Discord** ✅

---

## 📊 ÉTAPE 6: VÉRIFIER LES PIXELS DANS LES DASHBOARDS

### Meta Events Manager

1. Va sur https://business.facebook.com/events_manager
2. Sélectionne le pixel **26364309749823828**
3. Va dans **Test Events**
4. Fais un test complet (étapes ci-dessus)
5. Vérifie que tu vois:
   - PageView
   - InitiateCheckout
   - Purchase (9.90 EUR)

### Snapchat Ads Manager

1. Va sur https://ads.snapchat.com
2. Va dans **Events Manager**
3. Sélectionne le pixel **827ae1c2-5cf7-44db-9761-0a858ab2e2e6**
4. Vérifie:
   - PAGE_VIEW
   - START_CHECKOUT
   - PURCHASE (9.90 EUR)

### TikTok Events Manager

1. Va sur https://ads.tiktok.com
2. Va dans **Assets** → **Events**
3. Sélectionne le pixel **D5PCBC3C77UDCU1J2LHG**
4. Vérifie:
   - PageView
   - InitiateCheckout
   - CompletePayment (9.90 EUR)

### Klaviyo

1. Va sur https://www.klaviyo.com
2. Va dans **Analytics** → **Metrics**
3. Cherche les events:
   - **Newsletter Signup** (si tu as testé la newsletter)
   - **Started Checkout** (clic sur le bouton)
   - **Placed Order** (purchase 9.90 EUR)
   - **Ordered Product** (purchase 9.90 EUR)

---

## 📝 RÉSUMÉ DES PIXELS INSTALLÉS

### Sur la Landing Page (/)

| Pixel | Events | Status |
|-------|--------|--------|
| **Meta** | PageView, InitiateCheckout | ✅ Installé |
| **Snapchat** | PAGE_VIEW, START_CHECKOUT, SIGN_UP | ✅ Installé |
| **TikTok** | PageView, InitiateCheckout, Subscribe | ✅ Installé |
| **Klaviyo** | Active on Site, Started Checkout, Newsletter Signup | ✅ Installé |

### Sur la Page Confirmation (/confirmation)

| Pixel | Events | Status |
|-------|--------|--------|
| **Meta** | PageView, Purchase (9.90 EUR) | ✅ Installé |
| **Snapchat** | PAGE_VIEW, PURCHASE (9.90 EUR) | ✅ Installé |
| **TikTok** | PageView, CompletePayment (9.90 EUR) | ✅ Installé |
| **Klaviyo** | Placed Order, Ordered Product (9.90 EUR) | ✅ Installé |

---

## 🔥 CE QUI A ÉTÉ CORRIGÉ

### 1. Newsletter Klaviyo
- ✅ Corrigé l'ancienne API `_learnq` → nouvelle API `window.klaviyo`
- ✅ Ajouté tracking TikTok Subscribe sur newsletter signup
- ✅ Ajouté logs console pour debugging

### 2. Pixels TikTok
- ✅ Ajouté TikTok Pixel sur toutes les pages
- ✅ PageView automatique
- ✅ InitiateCheckout sur clic bouton
- ✅ CompletePayment sur page confirmation (9.90 EUR)
- ✅ Subscribe sur newsletter signup

### 3. Build optimisé
- ✅ Mode light par défaut
- ✅ Tous les pixels installés et testés
- ✅ Code minifié et optimisé

---

## ⚠️ IMPORTANT - À FAIRE IMPÉRATIVEMENT

### 1. Remplacer le lien Discord

Dans `/public_html/confirmation.html` ligne ~280:
```javascript
window.location.href = 'TON_LIEN_DISCORD_ICI';
```

### 2. Configurer Stripe Success URL

Dans Stripe Dashboard → Settings → Checkout:
```
https://mentalite-focus.com/confirmation
```

### 3. Tester le funnel complet

Faire un vrai test de bout en bout au moins une fois.

---

## 🆘 TROUBLESHOOTING

### Problème: Le site ne charge pas

**Solution**:
1. Vérifier que `index.html` est bien à `/public_html/index.html`
2. Vérifier que les fichiers `_astro/` sont bien à `/public_html/_astro/`
3. Hard refresh: Cmd+Shift+R (Mac) ou Ctrl+Shift+R (Windows)

### Problème: Page confirmation 404

**Solution**:
1. Vérifier que `confirmation.html` est à `/public_html/confirmation.html`
2. Tester l'URL directement: https://mentalite-focus.com/confirmation

### Problème: Les pixels ne se chargent pas

**Solution**:
1. Ouvrir la console (F12)
2. Regarder les erreurs
3. Vérifier l'onglet **Network** pour voir si les scripts se chargent
4. Hard refresh pour vider le cache

### Problème: Newsletter ne fonctionne pas

**Solution**:
1. Vérifier dans la console si `window.klaviyo` est défini
2. Vérifier que le script Klaviyo se charge (onglet Network)
3. Vérifier que company_id est bien "SRshwY"

---

## ✅ CHECKLIST FINALE

Avant de considérer le déploiement comme terminé:

- [ ] Site principal upload et fonctionne (mentalite-focus.com)
- [ ] Page confirmation upload et fonctionne (mentalite-focus.com/confirmation)
- [ ] Lien Discord remplacé dans confirmation.html
- [ ] Stripe Success URL configuré
- [ ] Test funnel complet réussi
- [ ] Pixels Meta vérifiés dans Events Manager
- [ ] Pixels Snapchat vérifiés dans Ads Manager
- [ ] Pixels TikTok vérifiés dans Events Manager
- [ ] Events Klaviyo vérifiés dans Dashboard
- [ ] Newsletter testée et fonctionne
- [ ] Aucune erreur dans la console (F12)
- [ ] Mode light par défaut vérifié

---

## 🎉 TU AS FINI!

Si tous les checks sont ✅, ton site est 100% opérationnel avec:

- 🎯 **4 pixels de tracking** (Meta, Snap, TikTok, Klaviyo)
- 📧 **Newsletter Klaviyo** configurée
- 💰 **Purchase tracking** complet sur 4 plateformes
- 🎨 **Design premium sobre** (mode light)
- 📊 **Funnel complet tracké** de A à Z

**Bonne chance avec Focus Business! 🔥**

---

**Version**: 2.0.0
**Date**: 23 janvier 2026
**Status**: ✅ PRÊT POUR PRODUCTION
