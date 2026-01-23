# 👻 Configuration Snapchat Pixel + CAPI - Focus Business

## ✅ Ce qui a été fait

### 1️⃣ Snap Pixel (côté navigateur)
- ✅ **Installé dans** : `focus-v2/src/layouts/Layout.astro`
- ✅ **Pixel ID** : `827ae1c2-5cf7-44db-9761-0a858ab2e2e6`
- ✅ **Événements trackés** :
  - `PAGE_VIEW` - Chaque visite
  - `SIGN_UP` - Inscription newsletter
  - `START_CHECKOUT` - Clic sur lien Stripe
  - `VIEW_CONTENT` - Vue de la section pricing

### 2️⃣ Snap Conversions API (côté serveur)
- ✅ **Fichier créé** : `api/snap-conversion.php`
- ✅ **Access Token** : Configuré (valide)
- ✅ **App ID** : `63ae0e9b-6c6a-4dfa-ae9e-effb97ad6afc`

### 3️⃣ Webhook Stripe Multi-Plateforme
- ✅ **Fichier créé** : `api/stripe-webhook.php`
- ✅ **Envoie vers** : Meta CAPI + Snap CAPI
- ✅ **Événements** : Purchase, InitiateCheckout, Subscribe

---

## ⏳ Ce qu'il reste à faire

### 🔧 Configuration Stripe Webhook

1. **Aller sur** : https://dashboard.stripe.com/webhooks
2. **Créer un endpoint** :
   - URL : `https://mentalitefocus.com/api/stripe-webhook.php`
   - Événements : `checkout.session.completed`, `payment_intent.succeeded`, `customer.subscription.created`
3. **Copier le Webhook Secret** (commence par `whsec_...`)
4. **Mettre à jour** la ligne 18 de `api/stripe-webhook.php` :
   ```php
   $STRIPE_WEBHOOK_SECRET = 'whsec_TON_SECRET_ICI';
   ```
5. **Activer la vérification** : Passer `$VERIFY_SIGNATURE = true;` (ligne 22)

### 🧪 Tester le Pixel Snap

Après déploiement, dans la console du site :

```javascript
// Test Snap Pixel
if (typeof snaptr !== 'undefined') {
  console.log('✅ Snap Pixel actif');
  snaptr('track', 'PAGE_VIEW');
} else {
  console.log('❌ Snap Pixel non chargé');
}
```

### 📊 Vérifier dans Snapchat Ads Manager

- **Événements Pixel** → Vérifier que les événements remontent
- **Conversions API** → Tester avec un achat test Stripe

---

## 📁 Fichiers modifiés

```
focus-v2/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          [MODIFIÉ] + Snap Pixel
│   └── pages/
│       └── index.astro            [MODIFIÉ] + Tracking Snap

api/
├── snap-conversion.php            [NOUVEAU]
├── stripe-webhook.php             [NOUVEAU]
└── meta-conversion.php            [EXISTANT]
```

---

## 🚀 Pour déployer

```bash
cd /Users/c4b/mentalitefocus/focus-v2
npm run build
cp -r dist/* ..
```

---

## 📝 Notes importantes

- **Snap Access Token** : Expire peut-être, à régénérer si besoin
- **Stripe Webhook Secret** : À NE PAS commiter dans Git
- **Test en local** : Utiliser `ngrok` pour exposer `api/stripe-webhook.php`

---

## 🎯 Prochaines étapes

1. ⏳ Configurer TikTok Pixel + Events API
2. ⏳ Créer l'Agent IA Analytics (rapports automatiques)
3. ⏳ Dashboard KPI centralisé

---

**Date** : 22 janvier 2026
**Par** : Agent Focus
