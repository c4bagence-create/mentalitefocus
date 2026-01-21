# 🎯 Setup Analytics - mentalitefocus.com

## Stack à Installer

### 1. Google Analytics 4 (GA4)
**Pourquoi**: Trafic, sources, conversions, parcours utilisateur

**Setup**:
1. Va sur https://analytics.google.com
2. Crée un compte si pas déjà fait
3. Crée une propriété "mentalitefocus.com"
4. Copie l'ID de mesure (G-XXXXXXXXXX)

### 2. Microsoft Clarity
**Pourquoi**: Heatmaps, recordings, scroll maps, rage clicks

**Setup**:
1. Va sur https://clarity.microsoft.com
2. Connecte-toi avec ton compte Microsoft
3. Crée un nouveau projet "Focus Business"
4. Copie le Project ID

---

## Scripts à Ajouter

Une fois que tu as les IDs, donne-les moi et j'ajoute ces scripts au site :

### Google Analytics 4
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Microsoft Clarity
```html
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "XXXXXXXXXX");
</script>
```

---

## Déjà Installé sur le Site

✅ **Meta Pixel** (ID: 26364309749823828)
- PageView sur toutes les pages
- ViewContent sur clics CTA Hero/Discord
- AddToCart sur clic bouton Stripe
- InitiateCheckout sur redirection Stripe

✅ **Klaviyo** (ID: pk_e30db79da52c39592f7b89b7244f30c9ce)
- Tracking email/comportement

---

## Ce que tu pourras analyser

### Google Analytics 4
- 📊 Nombre de visiteurs en temps réel
- 🌍 D'où viennent tes visiteurs (pays, ville)
- 📱 Device (mobile vs desktop)
- 🔗 Source du trafic (Meta Ads, direct, organic)
- ⏱️ Temps passé sur le site
- 📈 Conversions et revenus

### Microsoft Clarity
- 🔥 **Heatmaps**: Où les gens cliquent le plus
- 📹 **Session Recordings**: Vidéos des visiteurs
- 📜 **Scroll Maps**: Jusqu'où ils scrollent
- 😤 **Rage Clicks**: Clics frustrés (bug UX)
- 💀 **Dead Clicks**: Clics sur éléments non-cliquables
- ⚡ **Insights automatiques**: Problèmes détectés par l'IA

---

## Prochaines Étapes

1. **Maintenant**: Crée tes comptes GA4 et Clarity
2. **Donne-moi les IDs**: Je les ajoute au site
3. **Minuit**: Tes ads lancent avec tracking complet
4. **Demain matin**: Premier rapport avec données réelles

---

*Setup pour lancement ads 21/01/2026*
