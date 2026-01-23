# 🎯 GUIDE PIXEL PURCHASE - FOCUS BUSINESS

**Date**: 23 janvier 2026
**Objectif**: Tracking complet du funnel de conversion

---

## 📊 ÉTAT ACTUEL - CE QUI EST DÉJÀ EN PLACE

### ✅ Sur la landing page (index.html)

#### 1. Meta Pixel - PageView
```javascript
// Déjà installé sur /
fbq('init', '26364309749823828');
fbq('track', 'PageView');
```

#### 2. Meta Pixel - InitiateCheckout
```javascript
// Déjà installé sur le bouton "REJOINDRE LE CLUB"
document.getElementById('premium-card')?.addEventListener('click', () => {
  fbq('track', 'InitiateCheckout', {
    value: 9.90,
    currency: 'EUR',
    content_name: 'Focus Business Premium'
  });
});
```

#### 3. Snapchat Pixel - PAGE_VIEW
```javascript
// Déjà installé sur /
snaptr('init', '827ae1c2-5cf7-44db-9761-0a858ab2e2e6');
snaptr('track', 'PAGE_VIEW');
```

#### 4. Snapchat Pixel - START_CHECKOUT
```javascript
// Déjà installé sur le bouton "REJOINDRE LE CLUB"
document.getElementById('premium-card')?.addEventListener('click', () => {
  snaptr('track', 'START_CHECKOUT', {
    price: 9.90,
    currency: 'EUR'
  });
});
```

#### 5. Klaviyo - Active on Site & Started Checkout
```javascript
// Déjà installé sur /
// Active on Site se déclenche automatiquement
// Started Checkout sur le bouton "REJOINDRE LE CLUB"
window.klaviyo.push(['track', 'Started Checkout', {
  '$value': 9.90
}]);
```

#### 6. TikTok Pixel - PageView
```javascript
// Déjà installé sur /
ttq.load('D5PCBC3C77UDCU1J2LHG');
ttq.page();
```

#### 7. TikTok Pixel - InitiateCheckout
```javascript
// Déjà installé sur le bouton "REJOINDRE LE CLUB"
document.getElementById('premium-card')?.addEventListener('click', () => {
  ttq.track('InitiateCheckout', {
    value: 9.90,
    currency: 'EUR',
    content_type: 'product',
    content_name: 'Focus Business Membership'
  });
});
```

---

## ❌ CE QUI MANQUE - PIXEL PURCHASE

### 🔴 Problème actuel

Le funnel actuel:
```
User clique AD
    ↓
Arrive sur mentalite-focus.com
    ↓ ✅ PageView (Meta, Snap, Klaviyo)
    ↓
User clique "REJOINDRE LE CLUB"
    ↓ ✅ InitiateCheckout (Meta, Snap, Klaviyo)
    ↓
Redirect vers espace.mentalitefocus.com/checkout (Stripe)
    ↓
User paye
    ↓
❌ PAS DE PIXEL PURCHASE ICI
    ↓
Redirect direct vers Discord
```

**Le problème**: Entre le paiement Stripe et la redirection Discord, il n'y a pas de page où fire le pixel Purchase.

---

## ✅ SOLUTION - CRÉER UNE PAGE DE CONFIRMATION

### Option recommandée: Page `/confirmation`

**Créer**: `/public_html/confirmation.html`
**URL**: `https://mentalite-focus.com/confirmation`

Cette page va:
1. Fire tous les pixels Purchase (Meta, Snap, Klaviyo)
2. Afficher un message de confirmation
3. Rediriger vers Discord après 5 secondes

---

## 💻 CODE COMPLET - PIXEL PURCHASE

### 1. META PIXEL - PURCHASE

```javascript
// Meta Pixel Purchase Event
fbq('track', 'Purchase', {
  value: 9.90,                              // Montant de l'achat
  currency: 'EUR',                          // Devise
  content_name: 'Focus Business Subscription', // Nom du produit
  content_type: 'product',                  // Type de contenu
  content_ids: ['focus-premium'],           // ID produit
  num_items: 1                              // Nombre d'items
});

console.log('✅ Meta Purchase pixel fired: 9.90 EUR');
```

**Données trackées**:
- Valeur: 9.90€
- Devise: EUR
- Produit: Focus Business Subscription
- Quantité: 1

---

### 2. SNAPCHAT PIXEL - PURCHASE

```javascript
// Snapchat Pixel Purchase Event
snaptr('track', 'PURCHASE', {
  price: 9.90,                              // Prix
  currency: 'EUR',                          // Devise
  transaction_id: 'focus_' + Date.now(),    // ID transaction unique
  item_category: 'subscription',            // Catégorie
  item_ids: ['focus-premium']               // ID produit
});

console.log('✅ Snapchat Purchase pixel fired: 9.90 EUR');
```

**Données trackées**:
- Prix: 9.90€
- Devise: EUR
- Transaction ID: focus_[timestamp]
- Catégorie: subscription

---

### 3. KLAVIYO - PLACED ORDER & ORDERED PRODUCT

```javascript
// Klaviyo Purchase Events

// Event 1: Placed Order (commande complète)
window.klaviyo.push(['track', 'Placed Order', {
  '$value': 9.90,                           // Valeur totale
  'Currency': 'EUR',                        // Devise
  'Product Name': 'Focus Business Premium Subscription', // Nom produit
  'Product ID': 'focus-premium',            // ID produit
  'Quantity': 1,                            // Quantité
  'OrderId': 'focus_' + Date.now()          // ID commande unique
}]);

console.log('✅ Klaviyo - Placed Order tracked: 9.90 EUR');

// Event 2: Ordered Product (produit individuel)
window.klaviyo.push(['track', 'Ordered Product', {
  '$value': 9.90,                           // Valeur
  'ProductName': 'Focus Business Premium',  // Nom produit
  'ProductID': 'focus-premium',             // ID produit
  'Currency': 'EUR'                         // Devise
}]);

console.log('✅ Klaviyo - Ordered Product tracked');
```

**Pourquoi 2 events Klaviyo?**
- **Placed Order**: Track la commande complète (pour revenue metrics)
- **Ordered Product**: Track le produit individuel (pour segmentation)

**Données trackées**:
- Valeur: 9.90€
- Devise: EUR
- Produit: Focus Business Premium Subscription
- Order ID: focus_[timestamp]

---

### 4. TIKTOK PIXEL - COMPLETE PAYMENT

```javascript
// TikTok Pixel CompletePayment Event
ttq.track('CompletePayment', {
  value: 9.90,                              // Valeur de l'achat
  currency: 'EUR',                          // Devise
  content_type: 'product',                  // Type de contenu
  content_name: 'Focus Business Premium Subscription', // Nom du produit
  content_id: 'focus-premium',              // ID produit
  quantity: 1                               // Quantité
});

console.log('✅ TikTok CompletePayment pixel fired: 9.90 EUR');
```

**Données trackées**:
- Valeur: 9.90€
- Devise: EUR
- Produit: Focus Business Premium Subscription
- Content ID: focus-premium
- Quantité: 1

**Pourquoi CompletePayment et pas Purchase?**
TikTok utilise l'événement `CompletePayment` au lieu de `Purchase` pour tracker les achats finalisés. C'est l'équivalent du Purchase event de Meta.

---

## 📄 FICHIER COMPLET - confirmation.html

**Fichier créé**: `/Users/c4b/mentalitefocus/confirmation.html`

Ce fichier contient:
- ✅ Meta Pixel avec Purchase event
- ✅ Snapchat Pixel avec Purchase event
- ✅ TikTok Pixel avec CompletePayment event
- ✅ Klaviyo avec Placed Order + Ordered Product
- ✅ Microsoft Clarity pour analytics
- ✅ Message de confirmation stylé
- ✅ Countdown 5 secondes
- ✅ Redirect automatique vers Discord
- ✅ Debug panel pour vérifier que les pixels se chargent

---

## 🔧 CONFIGURATION REQUISE

### 1. Upload le fichier sur Hostinger

```
File Manager Hostinger:
/public_html/confirmation.html
```

### 2. Configurer Stripe Success URL

Dans ton **Stripe Dashboard** → **Settings** → **Checkout Settings**:

```
Success URL: https://mentalite-focus.com/confirmation
```

Ou si tu utilises Stripe Checkout Sessions via API:
```javascript
success_url: 'https://mentalite-focus.com/confirmation',
```

### 3. Remplacer le lien Discord

Dans `confirmation.html` ligne 204, remplacer:
```javascript
window.location.href = 'https://discord.gg/focus-business';
```

Par ton **vrai lien Discord**:
```javascript
// Option 1: Lien d'invitation Discord
window.location.href = 'https://discord.gg/TON_CODE_INVITATION';

// Option 2: Lien direct vers ton serveur
window.location.href = 'https://discord.com/channels/TON_SERVER_ID';

// Option 3: Si tu as un système custom
window.location.href = 'https://espace.mentalitefocus.com/welcome';
```

---

## 🔄 NOUVEAU FUNNEL COMPLET

Avec la page de confirmation, le funnel devient:

```
1. User clique AD (Meta/Snap)
        ↓
2. Arrive sur mentalite-focus.com
        ↓ 🎯 FIRE: PageView (Meta, Snap, TikTok, Klaviyo)
        ↓
3. User scroll, lit le contenu
        ↓
4. User clique "REJOINDRE LE CLUB"
        ↓ 🎯 FIRE: InitiateCheckout (Meta, Snap, TikTok, Klaviyo)
        ↓
5. Redirect vers espace.mentalitefocus.com/checkout
        ↓
6. User entre ses infos de paiement
        ↓
7. User clique "Payer"
        ↓
8. Stripe traite le paiement
        ↓
9. Stripe Success → Redirect vers /confirmation
        ↓ 🎯 FIRE: Purchase (Meta, Snap, TikTok, Klaviyo) ⭐
        ↓
10. User voit "Paiement confirmé ✅"
        ↓
11. Countdown 5 secondes
        ↓
12. Auto-redirect vers Discord
```

---

## 📊 RÉSUMÉ DES PIXELS PAR PAGE

### Landing Page (/)
| Pixel | Event | Trigger | Status |
|-------|-------|---------|--------|
| Meta | PageView | Chargement page | ✅ Installé |
| Meta | InitiateCheckout | Clic "REJOINDRE" | ✅ Installé |
| Snapchat | PAGE_VIEW | Chargement page | ✅ Installé |
| Snapchat | START_CHECKOUT | Clic "REJOINDRE" | ✅ Installé |
| TikTok | PageView | Chargement page | ✅ Installé |
| TikTok | InitiateCheckout | Clic "REJOINDRE" | ✅ Installé |
| Klaviyo | Active on Site | Chargement page | ✅ Installé |
| Klaviyo | Started Checkout | Clic "REJOINDRE" | ✅ Installé |

### Page Confirmation (/confirmation)
| Pixel | Event | Trigger | Status |
|-------|-------|---------|--------|
| Meta | PageView | Chargement page | ✅ Code fourni |
| Meta | Purchase | Chargement page | ✅ Code fourni |
| Snapchat | PAGE_VIEW | Chargement page | ✅ Code fourni |
| Snapchat | PURCHASE | Chargement page | ✅ Code fourni |
| TikTok | PageView | Chargement page | ✅ Code fourni |
| TikTok | CompletePayment | Chargement page | ✅ Code fourni |
| Klaviyo | Placed Order | Chargement page | ✅ Code fourni |
| Klaviyo | Ordered Product | Chargement page | ✅ Code fourni |

---

## ✅ CHECKLIST DÉPLOIEMENT

- [ ] Upload `confirmation.html` dans `/public_html/` sur Hostinger
- [ ] Vérifier que le fichier est accessible sur `https://mentalite-focus.com/confirmation`
- [ ] Configurer Stripe Success URL → `https://mentalite-focus.com/confirmation`
- [ ] Remplacer le lien Discord dans le fichier
- [ ] Tester le funnel complet de bout en bout
- [ ] Vérifier les pixels dans Facebook Events Manager
- [ ] Vérifier les pixels dans Snapchat Ads Manager
- [ ] Vérifier les pixels dans TikTok Events Manager
- [ ] Vérifier les events dans Klaviyo

---

## 🧪 TESTING

### Test manuel du funnel
1. Aller sur https://mentalite-focus.com
2. Ouvrir la console (F12)
3. Cliquer sur "REJOINDRE LE CLUB"
4. Vérifier les logs console: "✅ InitiateCheckout"
5. Aller sur Stripe, payer (mode test)
6. Vérifier l'arrivée sur /confirmation
7. Vérifier les logs console: "✅ Meta Purchase", "✅ Snapchat Purchase", "✅ TikTok CompletePayment", "✅ Klaviyo"
8. Attendre 5 secondes
9. Vérifier la redirection vers Discord

### Vérifier les pixels dans les dashboards

**Meta Events Manager**:
1. Aller sur https://business.facebook.com/events_manager
2. Sélectionner le pixel 26364309749823828
3. Aller dans "Test Events"
4. Faire un test et vérifier les events: PageView, InitiateCheckout, Purchase

**Snapchat Ads Manager**:
1. Aller sur https://ads.snapchat.com
2. Aller dans "Events Manager"
3. Sélectionner le pixel 827ae1c2-5cf7-44db-9761-0a858ab2e2e6
4. Vérifier les events: PAGE_VIEW, START_CHECKOUT, PURCHASE

**TikTok Events Manager**:
1. Aller sur https://ads.tiktok.com
2. Aller dans "Assets" → "Events"
3. Sélectionner le pixel D5PCBC3C77UDCU1J2LHG
4. Vérifier les events: PageView, InitiateCheckout, CompletePayment

**Klaviyo**:
1. Aller sur https://www.klaviyo.com
2. Aller dans "Analytics" → "Metrics"
3. Chercher: "Placed Order", "Ordered Product"
4. Vérifier les events avec valeur 9.90 EUR

---

## 🎯 ALTERNATIVE - SI PAS DE PAGE CONFIRMATION

Si tu ne veux pas de page de confirmation, voici les alternatives:

### Option 1: Webhook Stripe
Créer un webhook Stripe qui fire les pixels côté serveur quand un paiement est confirmé.
- **Avantage**: Pas besoin de page de confirmation
- **Inconvénient**: Plus complexe, nécessite du code backend

### Option 2: Stripe Success URL avec paramètres
Mettre le pixel Purchase directement sur la page Discord d'accueil.
- **Avantage**: Simple
- **Inconvénient**: Discord ne permet pas d'ajouter des pixels

### Option 3: Redirect vers une page espace.mentalitefocus.com/welcome
Si tu as un système d'espace membre, créer une page welcome avec les pixels.
- **Avantage**: Plus cohérent avec ton écosystème
- **Inconvénient**: Nécessite d'avoir cet espace membre

---

## 📞 SUPPORT & TROUBLESHOOTING

### Problème: Les pixels ne se chargent pas
**Solution**: Vérifier la console (F12) pour voir les erreurs. Vérifier que les scripts sont bien chargés.

### Problème: Purchase ne fire pas
**Solution**:
1. Vérifier que Stripe redirige bien vers /confirmation
2. Vérifier que le fichier confirmation.html existe sur le serveur
3. Vérifier la console pour voir si les pixels se chargent

### Problème: Les données ne remontent pas dans les dashboards
**Solution**: Attendre 15-30 minutes. Les dashboards Meta et Snap ont un délai de traitement.

### Problème: Klaviyo ne track pas
**Solution**:
1. Vérifier que le script Klaviyo se charge (check dans Network tab)
2. Vérifier que company_id est bien "SRshwY"
3. Attendre le setTimeout de 500ms avant de vérifier

---

## 🚀 PROCHAINES ÉTAPES

1. **Upload confirmation.html** sur Hostinger
2. **Configurer Stripe** Success URL
3. **Tester** le funnel complet
4. **Vérifier** les données dans les dashboards
5. **Optimiser** les campagnes basées sur les Purchase events

---

**Version**: 1.0.0
**Date**: 23 janvier 2026
**Status**: ✅ Code prêt, déploiement à faire
