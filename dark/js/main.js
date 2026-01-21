// === VARIABLES GLOBALES FAQ (doit être en premier) ===
var busy = false;
var mobileBusy = false;
var data = [
    { q: "Je n'ai aucune compétence et je pars de 0.", a: "C'est le cas de <b>80% des membres</b>. Le 'Protocole' te guide pas à pas, de la création du statut à la première vente." },
    { q: "Pourquoi le prix est seulement de 9.90€/mois ?", a: "On casse le marché. C'est le prix d'un Netflix, mais qui te rapporte de l'argent. On mise sur la communauté." },
    { q: "J'ai un travail / des études, je n'ai pas le temps.", a: "Focus est un accélérateur. Au lieu de perdre 10h sur Google, tu as la réponse en 5 min. 30min/jour suffisent." },
    { q: "Est-ce que le business est saturé en 2026 ?", a: "Saturé pour les amateurs. Un boulevard pour les pros équipés d'IA. C'est le meilleur moment pour se lancer." },
    { q: "Faut-il payer des logiciels en plus ?", a: "Non. On t'apprend à utiliser les versions gratuites et on te fournit nos propres scripts et templates." },
    { q: "Je ne vis pas en France, est-ce que ça marche ?", a: "Oui. Le digital n'a pas de frontières. Stripe et Shopify fonctionnent dans 99% des pays." },
    { q: "Si je suis bloqué techniquement, qui m'aide ?", a: "Le réseau. Poste un screen dans le chat, un expert te répond. Partage ton écran en vocal. Tu n'es jamais seul." },
    { q: "J'ai peur d'échouer...", a: "L'échec vient de l'isolement. Ici, tu es porté par l'énergie du groupe. Si tu appliques le Protocole, tu avances." },
    { q: "Puis-je annuler quand je veux ?", a: "Oui, instantanément. Un bouton dans ton espace membre. Pas de mail, pas de justification. Liberté totale." }
];

// === ARSENAL ANIMATIONS - OPTIMISÉ ===
        // LOADER géré par GSAP plus bas (évite les conflits)
        
        // === PAGE VISIBILITY API - PAUSE QUAND ONGLET INACTIF ===
        let pageVisible = true;
        document.addEventListener('visibilitychange', () => {
            pageVisible = !document.hidden;
        });

        /* INIT CHARTS */
        const cryptoChart = document.getElementById('crypto-chart');
        if (cryptoChart) {
            for(let i=0; i<12; i++) cryptoChart.innerHTML += `<div class="w-1 bg-[#F7931A] transition-all duration-500" style="height:${Math.random()*100}%; opacity:${0.5+Math.random()*0.5}"></div>`;
        }

        /* --- AUTOMATIC LIFE SYSTEM - OPTIMISÉ --- */
        // Variables pour les animations
        const qontoAmounts = [4300, 2890, 5670, 3200, 4800];
        let qontoIndex = 0;
        const revolutPayments = [
            [{name: '🍎 Apple', amount: 1200}, {name: '👜 Louis Vuitton', amount: 600}],
            [{name: '💻 MacBook Pro', amount: 2800}, {name: '🏨 Hotel Ritz', amount: 450}],
            [{name: '✈️ Air France', amount: 850}, {name: '🍽️ Restaurant', amount: 320}],
            [{name: '🎮 PlayStation', amount: 550}, {name: '👟 Nike', amount: 180}]
        ];
        let revolutIndex = 0;
        const randomCards = [{id: 'card-youtube', badge: 'notif-yt'}, {id: 'card-tiktok', badge: 'notif-tiktok'}];
        
        // Compteurs pour espacer les animations
        let animFrame = 0;
        
        // === BOUCLE PRINCIPALE UNIQUE (au lieu de 6 setInterval) ===
        setInterval(() => {
            if (!pageVisible) return; // Ne rien faire si onglet inactif
            animFrame++;
            
            // SHOPIFY - toutes les 8 sec (animFrame % 8)
            if (animFrame % 8 === 0) {
                const card = document.getElementById('card-shopify');
                const badge = document.getElementById('notif-shop');
                const valEl = document.getElementById('shop-val');
                if (card && badge && valEl) {
                    card.style.transform = window.innerWidth > 768 ? 'translateY(-8px) scale(1.02)' : 'scale(1.02)';
                    badge.style.transform = 'translateY(0)';
                    let current = parseFloat(valEl.innerText.replace(',','').replace('€','').replace(/\s/g, '')) || 2500;
                    valEl.innerText = (current + 49).toLocaleString('fr-FR') + ' €';
                    setTimeout(() => {
                        badge.style.transform = 'translateY(-100%)';
                        card.style.transform = window.innerWidth > 768 ? '' : 'none';
                    }, 2000);
                }
            }
            
            // STRIPE - toutes les 12 sec
            if (animFrame % 12 === 2) {
                const card = document.getElementById('card-stripe');
                const badge = document.getElementById('notif-stripe');
                const valEl = document.getElementById('stripe-val');
                if (card && badge && valEl) {
                    card.style.transform = window.innerWidth > 768 ? 'translateY(-8px) scale(1.02)' : 'scale(1.02)';
                    badge.style.transform = 'translateY(0)';
                    let current = parseFloat(valEl.innerText.replace(/[^0-9]/g, '')) || 997;
                    valEl.innerText = '+ ' + (current + 297).toLocaleString('fr-FR') + ',00 €';
                    setTimeout(() => {
                        badge.style.transform = 'translateY(-100%)';
                        card.style.transform = window.innerWidth > 768 ? '' : 'none';
                    }, 2500);
                }
            }
            
            // CRYPTO - toutes les 5 sec
            if (animFrame % 5 === 0) {
                const valEl = document.getElementById('btc-val');
                const pctEl = document.getElementById('btc-percent');
                if (valEl && pctEl) {
                    const change = (Math.random() - 0.45) * 200;
                    let current = parseFloat(valEl.innerText.replace(/[^0-9]/g, '')) || 98000;
                    valEl.innerText = '$' + (current + change).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0});
                    valEl.style.color = change > 0 ? '#4ade80' : '#f87171';
                    pctEl.innerText = (change > 0 ? '+' : '') + (Math.random()*5).toFixed(2) + '%';
                    if (cryptoChart && cryptoChart.children.length > 0) {
                        cryptoChart.children[Math.floor(Math.random() * cryptoChart.children.length)].style.height = Math.random() * 100 + '%';
                    }
                }
            }
            
            // RANDOM EVENTS (YouTube/TikTok) - toutes les 9 sec
            if (animFrame % 9 === 4) {
                const item = randomCards[Math.floor(Math.random() * randomCards.length)];
                const badge = document.getElementById(item.badge);
                if (badge) {
                    badge.style.transform = 'translateY(0)';
                    setTimeout(() => badge.style.transform = 'translateY(-100%)', 2500);
                }
            }
            
            // QONTO - toutes les 14 sec
            if (animFrame % 14 === 6) {
                const card = document.getElementById('card-qonto');
                const badge = document.getElementById('notif-qonto');
                const valEl = document.getElementById('qonto-val');
                if (card && badge && valEl) {
                    card.style.transform = window.innerWidth > 768 ? 'translateY(-8px) scale(1.02)' : 'scale(1.02)';
                    badge.style.transform = 'translateY(0)';
                    valEl.innerText = '+ ' + qontoAmounts[qontoIndex].toLocaleString('fr-FR') + ' €';
                    qontoIndex = (qontoIndex + 1) % qontoAmounts.length;
                    setTimeout(() => {
                        badge.style.transform = 'translateY(-100%)';
                        card.style.transform = window.innerWidth > 768 ? '' : 'none';
                    }, 2500);
                }
            }
            
            // REVOLUT - toutes les 16 sec
            if (animFrame % 16 === 10) {
                const badge = document.getElementById('notif-revolut');
                const paymentsEl = document.getElementById('revolut-payments');
                if (badge && paymentsEl) {
                    badge.style.transform = 'translateY(0)';
                    const payments = revolutPayments[revolutIndex];
                    paymentsEl.innerHTML = payments.map(p => `
                        <div class="flex justify-between items-center opacity-90">
                            <span class="text-gray-300">${p.name}</span>
                            <span class="text-white font-bold">- ${p.amount.toLocaleString('fr-FR')} €</span>
                        </div>
                    `).join('');
                    revolutIndex = (revolutIndex + 1) % revolutPayments.length;
                    setTimeout(() => badge.style.transform = 'translateY(-100%)', 2500);
                }
            }
        }, 1000); // 1 tick par seconde


// === DISCORD SECTION ===
        // ===== CLONE CARDS FOR INFINITE LOOP =====
        document.querySelectorAll('.marquee-track').forEach(track => {
            const cards = track.innerHTML;
            track.innerHTML = cards + cards;
        });

        document.getElementById('row1').classList.add('animate-left');
        document.getElementById('row2').classList.add('animate-right');

        // ===== PAUSE =====
        document.querySelectorAll('.marquee-track').forEach(track => {
            track.addEventListener('mouseenter', () => track.classList.add('paused'));
            track.addEventListener('mouseleave', () => track.classList.remove('paused'));
        });

        // ===== ANIMATIONS =====
        window.addEventListener('load', () => {

            // IA - ASCII TYPEWRITER EFFECT
            const asciiText = "___  ____ ____ _  _ ____ \n|__  |  | |    |  | [__  \n|    |__| |___ |__| ___]";
            const asciiContainer = document.querySelectorAll('#ascii-container');
            
            asciiContainer.forEach(container => {
                let i = 0;
                function typeASCII() {
                    if (i < asciiText.length) {
                        container.innerHTML += asciiText.charAt(i);
                        i++;
                        setTimeout(typeASCII, 20); // Vitesse de frappe
                    } else {
                        // Après le texte, afficher SYSTEM READY
                        const readyMsg = container.nextElementSibling;
                        if(readyMsg) gsap.to(readyMsg, { opacity: 1, duration: 0.5 });
                    }
                }
                setTimeout(typeASCII, 1000); // Délai avant de commencer
            });

            // Terminal lines
            document.querySelectorAll('.t-line').forEach((el, i) => {
                // Skip the ascii container which is handled separately
                if(el.id !== 'ascii-container' && el.id !== 'system-ready') {
                    setTimeout(() => gsap.to(el, { opacity: 1, duration: 0.3 }), 500 + i * 400);
                }
            });

            // Auto
            setTimeout(() => {
                document.querySelectorAll('.auto-price').forEach(el => gsap.to(el, { color: '#f97316', duration: 0.2, yoyo: true, repeat: 4 }));
            }, 1200);
            setTimeout(() => document.querySelectorAll('.stamp-vendu').forEach(s => s.classList.add('show')), 2200);
            setTimeout(() => document.querySelectorAll('.auto-badge').forEach(b => gsap.to(b, { opacity: 1, duration: 0.4 })), 3000);

            // SMMA
            setTimeout(() => document.querySelectorAll('.stamp-paye').forEach(s => s.classList.add('show')), 2800);

            // Fiscalite
            setTimeout(() => document.querySelectorAll('.stamp-tax').forEach(s => gsap.to(s, { opacity: 0.8, scale: 1, duration: 0.4, ease: "back.out(1.7)" })), 2000);

            // Google
            setTimeout(() => {
                document.querySelectorAll('.google-bar').forEach(b => b.style.width = '100%');
                document.querySelectorAll('.google-ctr').forEach(t => t.innerText = '12.8%');
            }, 2500);
            setTimeout(() => document.querySelectorAll('.google-boost').forEach(t => gsap.to(t, { opacity: 1, duration: 0.3 })), 3000);

            // Meta
            setTimeout(() => {
                document.querySelectorAll('.meta-dot').forEach(d => { d.style.transform = 'translateX(20px)'; d.style.background = '#3b82f6'; });
                document.querySelectorAll('.meta-toggle').forEach(t => t.style.background = '#bfdbfe');
                document.querySelectorAll('.roas-path').forEach(p => p.classList.add('draw'));
            }, 1800);
            setTimeout(() => document.querySelectorAll('.meta-roas').forEach(t => t.innerText = '8.7x'), 3200);

            // === BOUCLE OPTIMISÉE POUR ARSENAL (au lieu de 8 setInterval) ===
            let ecom = 14250, views = 4120000, snapViews = 842000, snapSwipes = 12400;
            let arsenalFrame = 0;
            
            setInterval(() => {
                if (!pageVisible) return;
                arsenalFrame++;
                
                // E-com total - toutes les 6 sec
                if (arsenalFrame % 6 === 0) {
                    ecom += Math.floor(Math.random() * 150) + 50;
                    document.querySelectorAll('.ecom-total').forEach(el => el.innerText = ecom.toLocaleString() + '€');
                }
                
                // E-com toast - toutes les 14 sec
                if (arsenalFrame % 14 === 3) {
                    document.querySelectorAll('.toast-ecom').forEach(t => {
                        t.classList.add('show');
                        setTimeout(() => t.classList.remove('show'), 3000);
                    });
                }
                
                // TikTok - toutes les 4 sec
                if (arsenalFrame % 4 === 0) {
                    views += Math.floor(Math.random() * 50000) + 10000;
                    document.querySelectorAll('.tiktok-views').forEach(t => t.innerText = (views/1000000).toFixed(2) + 'M');
                }
                
                // Snapchat - toutes les 5 sec
                if (arsenalFrame % 5 === 2) {
                    snapViews += Math.floor(Math.random() * 3000) + 1000;
                    snapSwipes += Math.floor(Math.random() * 50) + 20;
                    document.querySelectorAll('.snap-views').forEach(t => t.innerText = Math.floor(snapViews/1000) + 'K');
                    document.querySelectorAll('.snap-swipes').forEach(t => t.innerText = (snapSwipes/1000).toFixed(1) + 'K');
                    document.querySelectorAll('.snap-ctr').forEach(t => t.innerText = ((snapSwipes / snapViews) * 100).toFixed(2) + '%');
                }
                
                // Snap flash - toutes les 10 sec
                if (arsenalFrame % 10 === 5) {
                    document.querySelectorAll('.snap-flash-overlay').forEach(f => {
                        f.style.opacity = 0.9;
                        setTimeout(() => f.style.opacity = 0, 150);
                    });
                }
                
                // SEO - toutes les 12 sec
                if (arsenalFrame % 12 === 1) {
                    const seoFocus = document.querySelectorAll('.seo-focus');
                    const seoResults = document.querySelectorAll('.seo-r1, .seo-r2');
                    const seoStar = document.querySelectorAll('.seo-star');
                    if (seoFocus.length > 0) {
                        seoFocus.forEach(el => gsap.to(el, { y: -55, duration: 0.8, ease: 'power2.out' }));
                        seoResults.forEach(el => gsap.to(el, { y: 30, duration: 0.8, ease: 'power2.out' }));
                        setTimeout(() => seoStar.forEach(s => s.style.opacity = 1), 900);
                        setTimeout(() => {
                            seoFocus.forEach(el => gsap.to(el, { y: 0, duration: 0.8, ease: 'power2.out' }));
                            seoResults.forEach(el => gsap.to(el, { y: 0, duration: 0.8, ease: 'power2.out' }));
                            seoStar.forEach(s => s.style.opacity = 0);
                        }, 4000);
                    }
                }
                
                // Hearts - toutes les 3 sec
                if (arsenalFrame % 3 === 0) {
                    document.querySelectorAll('.hearts-box').forEach(box => {
                        if (box.children.length > 5) return;
                        const h = document.createElement('span');
                        h.className = 'heart';
                        h.innerText = ['❤️','🧡','💜','💖'][Math.floor(Math.random()*4)];
                        h.style.left = Math.random() * 15 + 'px';
                        h.style.bottom = '0';
                        box.appendChild(h);
                        setTimeout(() => h.remove(), 2000);
                    });
                }
                
                // Meta Ads ROAS - toutes les 5 sec
                if (arsenalFrame % 5 === 3) {
                    const roasEl = document.getElementById('meta-roas');
                    if (roasEl) {
                        roasIndex = (roasIndex + 1) % roasValues.length;
                        roasEl.style.transform = 'scale(1.2)';
                        roasEl.textContent = roasValues[roasIndex];
                        metaResults += Math.floor(Math.random() * 50) + 10;
                        const resultsEl = document.getElementById('meta-results');
                        if(resultsEl) resultsEl.textContent = metaResults.toLocaleString('en-US');
                        setTimeout(() => { if(roasEl) roasEl.style.transform = 'scale(1)'; }, 300);
                    }
                }
            }, 1000);

        });

// === FAQ SECTION ===
        // ===== MESSAGES DATABASE PAR SALON =====
        const messagesDB = {
            // ===== LIVES & REDIFFUSIONS =====
            'rediff-générale': [
                { user: "Sonny", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 09:00", content: "📺 Nouveau replay dispo : Comment j'ai créé une landing page e-commerce en 30 min avec l'IA", reactions: ["🔥 34", "👀 18"] },
                { user: "bmh.793", role: "student-yellow", avatar: "bg-purple-500", time: "Aujourd'hui à 09:15", content: "Ce replay sur les Meta Ads est une mine d'or ! J'ai pris 3 pages de notes 📝" },
                { user: "YasmineCr", role: "student-blue", avatar: "bg-pink-400", time: "Aujourd'hui à 10:30", content: "Le replay SMMA de Jamel m'a fait signer mon premier client cette semaine 🚀" },
                { user: "Midou", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 11:00", content: "Le replay automobile de vendredi est en ligne ! Comment sourcer les RS3 en Allemagne 🚗" },
                { user: "Malek", role: "student-yellow", avatar: "bg-orange-500", time: "Aujourd'hui à 11:45", content: "Quelqu'un a le timestamp du passage sur la fiscalité LLC dans le live de Zaid ?" },
                { user: "iSkyze", role: "student-blue", avatar: "bg-indigo-500", time: "Aujourd'hui à 12:20", content: "@Malek C'est vers 1h12 il parle de New Mexico vs Wyoming" }
            ],
            
            'live-public': [
                { user: "Zaid", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 19:55", content: "🔴 LIVE DANS 5 MIN ! On parle stratégies Meta Ads pour scale de 0 à 5K€/jour", reactions: ["🔥 52", "🎯 28"] },
                { user: "Val", role: "student-yellow", avatar: "bg-indigo-600", time: "Aujourd'hui à 20:02", content: "J'ai ma question prête sur les audiences lookalike ! 📊" },
                { user: "Betterr", role: "student-blue", avatar: "bg-teal-500", time: "Aujourd'hui à 20:15", content: "Incroyable ce que tu viens de montrer Zaid, les CBO c'est vraiment la clé 🔑" },
                { user: "Mohamed951", role: "student-yellow", avatar: "bg-amber-500", time: "Aujourd'hui à 20:30", content: "Question : tu recommandes quel budget pour tester les créas en Advantage+ ?" },
                { user: "Jamel", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 20:45", content: "@Mohamed951 50-100€/jour mini pour avoir des données exploitables. Patience ! 💪" },
                { user: "Rabah", role: "student-blue", avatar: "bg-cyan-600", time: "Aujourd'hui à 21:00", content: "Merci pour ce live les gars, j'applique tout demain sur mes campagnes e-commerce !" }
            ],
            
            // ===== IMPORTANT =====
            'annonce': [
                { user: "Zaid", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 08:00", content: "🎉 LIVE CE SOIR 20H : Comment scale de 0 à 10K€/mois avec Meta Ads<br><br>✅ Stratégies CBO avancées<br>✅ Audiences qui convertissent<br>✅ Q&A en direct<br><br>RDV en vocal à 20h !", reactions: ["🔥 67", "🎉 45", "💪 32"] },
                { user: "Sonny", role: "founder", avatar: "bg-red-600", time: "Hier à 18:30", content: "📺 REPLAY DISPO : Session e-commerce + IA<br><br>On a créé 3 pages produits complètes en moins d'1h avec Claude IA.<br><br>Durée : 2h de techniques avancées 💎" },
                { user: "Midou", role: "founder", avatar: "bg-red-600", time: "Il y a 2 jours", content: "🚗 NOUVELLE OPPORTUNITÉ AUTOMOBILE<br><br>J'ai un contact en Allemagne pour des RS3 et M4 à prix grossiste.<br>MP moi si intéressés !", reactions: ["🚗 23", "💰 18"] }
            ],
            
            'annonce-public': [
                { user: "Jamel", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 10:00", content: "🎯 CHALLENGE SMMA : Signe ton premier client en 30 jours<br><br>On lance un challenge pour les débutants SMMA. Qui est chaud ? 🔥", reactions: ["🔥 89", "💪 56"] },
                { user: "Sonny", role: "founder", avatar: "bg-red-600", time: "Hier à 14:00", content: "📢 Live public demain ! On parle automatisation e-commerce avec Claude IA. Invitez vos potes entrepreneurs !" },
                { user: "Zaid", role: "founder", avatar: "bg-red-600", time: "Il y a 3 jours", content: "🎉 +1000 membres actifs sur le Discord ! Merci à tous pour votre confiance 🙏", reactions: ["🎉 124", "❤️ 87"] }
            ],
            
            'programme-live': [
                { user: "Sonny", role: "founder", avatar: "bg-red-600", time: "Lundi à 08:00", content: "📅 PROGRAMME DE LA SEMAINE<br><br>🔹 Lundi 20h : Meta Ads avec Zaid<br>🔹 Mercredi 20h : SMMA avec Jamel<br>🔹 Vendredi 20h : E-commerce avec Sonny<br>🔹 Samedi 14h : Automobile avec Midou", reactions: ["📅 45", "🔥 32"] },
                { user: "Jamel", role: "founder", avatar: "bg-red-600", time: "Mardi à 10:00", content: "💡 Rappel : Live SMMA demain soir ! Préparez vos questions sur la prospection LinkedIn" },
                { user: "Midou", role: "founder", avatar: "bg-red-600", time: "Jeudi à 15:00", content: "🚗 Samedi on parle import automobile. Comment sourcer en Allemagne et faire 3-5K€ de marge" }
            ],
            
            // ===== GÉNÉRAL =====
            'général': [
                { user: "Sonny", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 08:15", content: "🔥 Live ce soir ! On parle stratégies e-commerce et comment utiliser l'IA pour automatiser vos tâches", reactions: ["🔥 24", "👀 12"] },
                { user: "bmh.793", role: "student-yellow", avatar: "bg-purple-500", time: "Aujourd'hui à 08:18", content: "Merci Sonny pour les conseils d'hier c'était incroyable ! J'ai enfin compris comment structurer ma boutique Shopify" },
                { user: "YasmineCr", role: "student-blue", avatar: "bg-pink-400", time: "Aujourd'hui à 08:20", content: "Le live de ce soir une dinguerie !!!!!!<br>Hâte d'apprendre les automatisations IA 😂", reactions: ["😂 8", "💀 3"] },
                { user: "Zaid", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 09:30", content: "Pour ceux qui veulent scale leur business : on fait un point Meta Ads demain en vocal ! Venez avec vos questions 🎯" },
                { user: "Mohamed951", role: "student-yellow", avatar: "bg-amber-500", time: "Aujourd'hui à 09:35", content: "Merci @Jamel pour les conseils hier sur la prospection, j'ai déjà 3 appels de découverte bookés !" },
                { user: "iSkyze", role: "student-blue", avatar: "bg-indigo-500", time: "Aujourd'hui à 10:12", content: "Merci Midou pour les tips automobile ! J'ai économisé 2K€ sur ma dernière négo 🙏" },
                { user: "Jamel", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 11:45", content: "Pour ceux qui veulent scale avec Meta Ads, live spécial samedi matin. On analyse vos campagnes en direct 📊" }
            ],
            
            'concours': [
                { user: "Zaid", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 10:00", content: "🏆 CHALLENGE DU MOIS : Meilleur ROAS Meta Ads<br><br>Le membre avec le meilleur ROAS documenté gagne 1 mois offert !<br>Postez vos screens dans #vos-chiffres", reactions: ["🏆 45", "🔥 38"] },
                { user: "Val", role: "student-yellow", avatar: "bg-indigo-600", time: "Aujourd'hui à 10:30", content: "Je participe ! Mon ROAS actuel est à 4.2x sur ma boutique e-commerce 📊" },
                { user: "Malek", role: "student-blue", avatar: "bg-orange-500", time: "Aujourd'hui à 11:15", content: "5.1x ROAS ce mois-ci ! Merci les conseils de Zaid sur les CBO 🎯", reactions: ["🔥 12", "👏 8"] },
                { user: "Betterr", role: "student-yellow", avatar: "bg-teal-500", time: "Aujourd'hui à 12:00", content: "Objectif 6x ROAS pour le prochain challenge ! Let's go 💪" }
            ],
            
            'général-public': [
                { user: "Sonny", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 09:00", content: "Bienvenue aux nouveaux ! N'hésitez pas à poser vos questions ici 👋" },
                { user: "NewMember42", role: "student-blue", avatar: "bg-gray-500", time: "Aujourd'hui à 09:15", content: "Salut ! Je débute en e-commerce, par où commencer ?" },
                { user: "YasmineCr", role: "student-yellow", avatar: "bg-pink-400", time: "Aujourd'hui à 09:20", content: "@NewMember42 Commence par regarder les replays dans #rediff-générale, y'a tout pour débuter 🔥" },
                { user: "Jamel", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 10:00", content: "Focus sur UN business model au début. E-commerce, SMMA ou automobile. Pas tout en même temps ! 🎯" },
                { user: "bmh.793", role: "student-blue", avatar: "bg-purple-500", time: "Aujourd'hui à 10:30", content: "Moi j'ai commencé par le e-commerce il y a 3 mois, maintenant je fais 5K€/mois. C'est possible !" }
            ],
            
            'présentation': [
                { user: "Fafull.S6", role: "student-yellow", avatar: "bg-rose-500", time: "Aujourd'hui à 08:00", content: "Salut la team ! Moi c'est Fafull, je suis dans l'automobile depuis 6 mois. J'ai fait 15K€ de marge le mois dernier grâce aux conseils de Midou 🚗" },
                { user: "Redwane", role: "student-blue", avatar: "bg-blue-400", time: "Aujourd'hui à 09:30", content: "Hey ! Redwane ici, je lance mon agence SMMA. Déjà 2 clients grâce aux techniques de prospection de Jamel 📱" },
                { user: "incognito", role: "student-yellow", avatar: "bg-gray-600", time: "Aujourd'hui à 11:00", content: "Nouveau membre ! Je veux me lancer en e-commerce, j'ai regardé tous les replays ce week-end 🔥" },
                { user: "Sonny", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 11:15", content: "Bienvenue @incognito ! N'hésite pas à poser tes questions, la communauté est là pour t'aider 💪" },
                { user: "BA1MAN", role: "student-blue", avatar: "bg-cyan-500", time: "Aujourd'hui à 12:30", content: "Yoo ! Je me présente enfin. SMMA depuis 4 mois, 8K€ MRR. Merci Focus pour tout ! 🙏" }
            ],
            
            // ===== INFORMATIONS =====
            'règlement': [
                { user: "Sonny", role: "founder", avatar: "bg-red-600", time: "Il y a 30 jours", content: "📋 RÈGLEMENT DU SERVEUR<br><br>✅ Respect entre membres<br>✅ Pas de spam ni de pub<br>✅ Questions dans les bons salons<br>✅ Partage et entraide<br><br>Les infractions = ban direct 🚫" },
                { user: "Jamel", role: "founder", avatar: "bg-red-600", time: "Il y a 15 jours", content: "Rappel : Les questions Meta Ads dans #vocal-business, pas en DM 🙏<br>Comme ça tout le monde profite des réponses !" },
                { user: "Zaid", role: "founder", avatar: "bg-red-600", time: "Il y a 7 jours", content: "📢 Nouveau : Partagez vos résultats dans #vos-chiffres ! Ça motive tout le monde 💪" }
            ],
            
            'focus-coin': [
                { user: "Midou", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 10:00", content: "🏆 TOP 3 de la semaine :<br><br>🥇 @Malek - 2450 pts<br>🥈 @Val - 2180 pts<br>🥉 @YasmineCr - 1920 pts<br><br>GG à tous ! 💪", reactions: ["🏆 34", "👏 28"] },
                { user: "Val", role: "student-yellow", avatar: "bg-indigo-600", time: "Aujourd'hui à 10:15", content: "Trop chaud ! Objectif première place la semaine prochaine 🎯" },
                { user: "Malek", role: "student-blue", avatar: "bg-orange-500", time: "Aujourd'hui à 10:30", content: "J'ai aidé 15 membres cette semaine, ça paye ! Merci la communauté 🙏" }
            ],
            
            'bienvenue': [
                { user: "Sonny", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 08:00", content: "👋 Bienvenue aux nouveaux membres !<br><br>🔹 Présentez-vous dans #présentation<br>🔹 Regardez les replays dans #rediff-générale<br>🔹 Posez vos questions dans #général<br><br>On est là pour vous aider à réussir ! 💪" },
                { user: "Jamel", role: "founder", avatar: "bg-red-600", time: "Hier à 14:00", content: "N'hésitez pas à rejoindre les vocaux, c'est là que ça se passe vraiment ! 🎙️" },
                { user: "Midou", role: "founder", avatar: "bg-red-600", time: "Il y a 2 jours", content: "Bienvenue ! Commencez par lire #règlement et posez vos questions. Pas de question bête ici 😉" }
            ],
            
            // ===== VOCAL =====
            'commandes-vocaux': [
                { user: "Zaid", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 19:00", content: "🎙️ Vocal Meta Ads dans 1h ! Préparez vos questions sur les campagnes et les audiences" },
                { user: "Val", role: "student-yellow", avatar: "bg-indigo-600", time: "Aujourd'hui à 19:15", content: "Je serai là ! Question sur les budgets de test Advantage+" },
                { user: "Malek", role: "student-blue", avatar: "bg-orange-500", time: "Aujourd'hui à 19:30", content: "Présent ! J'ai une question sur le scaling vertical vs horizontal 📊" },
                { user: "Betterr", role: "student-yellow", avatar: "bg-teal-500", time: "Aujourd'hui à 19:45", content: "Moi je veux parler des créas qui convertissent en e-commerce 🎨" }
            ],
            
            'vocal-public': [
                { user: "Sonny", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 15:00", content: "🔊 Session Q&A ouverte ! Rejoignez le vocal pour poser vos questions sur le e-commerce" },
                { user: "YasmineCr", role: "student-yellow", avatar: "bg-pink-400", time: "Aujourd'hui à 15:10", content: "Merci pour la session ! J'ai enfin compris comment structurer mes fiches produits 🙏" },
                { user: "bmh.793", role: "student-blue", avatar: "bg-purple-500", time: "Aujourd'hui à 15:30", content: "Top cette session ! Les conseils sur Shopify vont me faire gagner des heures" }
            ],
            
            'vocal-business': [
                { user: "Jamel", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 20:00", content: "🎙️ On vient de finir 2h de vocal sur la prospection SMMA. Résumé :<br><br>✅ LinkedIn > Cold email en B2B<br>✅ 50 prospects/jour minimum<br>✅ Follow-up après 3 jours<br><br>Go appliquer ! 💪", reactions: ["🔥 28", "📝 15"] },
                { user: "Redwane", role: "student-yellow", avatar: "bg-blue-400", time: "Aujourd'hui à 20:15", content: "Merci Jamel ! J'applique la méthode demain matin. Objectif 5 appels cette semaine 📞" },
                { user: "BA1MAN", role: "student-blue", avatar: "bg-cyan-500", time: "Aujourd'hui à 20:30", content: "Cette session était une pépite ! J'ai noté tous les scripts de prospection 📝" }
            ],
            
            // ===== FOCUS =====
            'vos-chiffres': [
                { user: "Malek", role: "student-yellow", avatar: "bg-orange-500", time: "Aujourd'hui à 10:15", content: "🔥 Premier 10K€ de CA ce mois-ci sur ma boutique Shopify !<br><br>📊 CA : 10 240€<br>💰 Marge : 4 100€ (40%)<br>📈 ROAS : 4.2x<br><br>Merci à toute l'équipe Focus ! 🙏", reactions: ["🔥 45", "🎉 32", "💪 28"] },
                { user: "Val", role: "student-blue", avatar: "bg-indigo-600", time: "Aujourd'hui à 11:42", content: "Ma meilleure semaine Meta Ads :<br><br>💸 Dépense : 2 800€<br>💰 CA : 14 200€<br>📊 ROAS : 5.07x<br><br>Les CBO de Zaid c'est vraiment la clé 🎯", reactions: ["🎯 38", "💰 25"] },
                { user: "Fafull.S6", role: "student-yellow", avatar: "bg-rose-500", time: "Aujourd'hui à 13:05", content: "🚗 Vente automobile du mois :<br><br>RS3 achetée : 38K€<br>RS3 vendue : 43K€<br>Marge nette : 4 200€<br><br>Merci Midou pour les contacts en Allemagne ! 💪", reactions: ["🚗 22", "💰 18"] },
                { user: "Redwane", role: "student-blue", avatar: "bg-blue-400", time: "Aujourd'hui à 15:20", content: "SMMA update :<br><br>👥 3 nouveaux clients ce mois<br>💰 +4 500€ MRR<br>📈 Total : 8 500€/mois<br><br>La prospection LinkedIn ça marche vraiment 📱", reactions: ["🔥 35"] }
            ],
            
            'vos-avis': [
                { user: "YasmineCr", role: "student-yellow", avatar: "bg-pink-400", time: "Aujourd'hui à 09:00", content: "⭐⭐⭐⭐⭐<br><br>Focus Business m'a changé la vie. En 3 mois je suis passée de 0 à 3K€/mois en e-commerce. La communauté est incroyable ! 🙏", reactions: ["❤️ 45", "🙏 32"] },
                { user: "bmh.793", role: "student-blue", avatar: "bg-purple-500", time: "Aujourd'hui à 10:30", content: "Les lives de Sonny sur Shopify + IA sont une mine d'or. J'ai créé 10 sections custom en 1 semaine grâce à ses techniques 🔥" },
                { user: "Mohamed951", role: "student-yellow", avatar: "bg-amber-500", time: "Aujourd'hui à 12:00", content: "La section automobile avec Midou c'est du pur gold. J'ai fait ma première vente en 2 semaines après avoir rejoint ! 🚗" },
                { user: "Betterr", role: "student-blue", avatar: "bg-teal-500", time: "Aujourd'hui à 14:15", content: "Meilleur investissement de ma vie. Pour 10€/mois j'ai accès à des conseils qui valent des milliers d'euros 💎" }
            ]
        };

        // ===== CHANNEL MANAGEMENT =====
        let currentChannel = 'général';
        const channelItems = document.querySelectorAll('.channel-item');
        const messagesContainer = document.getElementById('messages-container');
        const currentChannelName = document.getElementById('current-channel-name');
        const channelDescription = document.getElementById('channel-description');
        const messageInput = document.getElementById('message-input-placeholder');

        const channelDescriptions = {
            'rediff-générale': 'Tous les replays des lives e-commerce, SMMA, ads et automobile',
            'live-public': 'Lives en direct - posez vos questions !',
            'annonce': 'Annonces importantes de l\'équipe Focus',
            'annonce-public': 'Annonces et events pour tous les membres',
            'programme-live': 'Planning des lives de la semaine',
            'général': 'Discussions générales, entraide et partage entre entrepreneurs',
            'concours': 'Challenges et compétitions entre membres',
            'général-public': 'Questions et discussions ouvertes à tous',
            'présentation': 'Présentez-vous à la communauté !',
            'règlement': 'Règles du serveur à respecter',
            'focus-coin': 'Classement et récompenses des membres actifs',
            'bienvenue': 'Premiers pas sur le serveur Focus Business',
            'commandes-vocaux': 'Annonces des prochaines sessions vocales',
            'vocal-public': 'Sessions Q&A ouvertes à tous',
            'vocal-business': 'Discussions stratégiques entre entrepreneurs',
            'vos-chiffres': 'Partagez vos CA, ROAS et résultats !',
            'vos-avis': 'Témoignages et avis sur Focus Business'
        };

        // ===== CREATE MESSAGE ELEMENT =====
        function createMessage(msg) {
            const div = document.createElement('div');
            div.className = 'discord-message p-2.5 rounded-lg transition message-appear';
            div.style.opacity = '0';
            
            let roleClass = '';
            let crownIcon = '';
            if (msg.role === 'founder') {
                roleClass = 'role-founder';
                crownIcon = '<span class="founder-crown">👑</span>';
            } else if (msg.role === 'student-yellow') {
                roleClass = 'role-student-yellow';
            } else {
                roleClass = 'role-student-blue';
            }
            
            div.innerHTML = `
                <div class="flex gap-3">
                    <div class="relative flex-shrink-0">
                        <div class="w-10 h-10 ${msg.avatar} rounded-full flex items-center justify-center font-bold text-sm text-white shadow-lg">
                            ${msg.user.charAt(0).toUpperCase()}
                        </div>
                        <div class="status-online"></div>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="font-bold text-sm ${roleClass}">${msg.user}${crownIcon}</span>
                            <span class="text-[11px] text-gray-500">${msg.time}</span>
                        </div>
                        <div class="text-[13.5px] text-gray-200 leading-relaxed">${msg.content}</div>
                        ${msg.reactions && msg.reactions.length > 0 ? `
                            <div class="flex gap-1.5 mt-2">
                                ${msg.reactions.map(r => `<div class="reaction">${r}</div>`).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
            
            return div;
        }

        // ===== LOAD CHANNEL MESSAGES =====
        function loadChannel(channelName) {
            currentChannel = channelName;
            
            // Update UI
            channelItems.forEach(item => item.classList.remove('active'));
            document.querySelector(`[data-channel="${channelName}"]`).classList.add('active');
            
            currentChannelName.textContent = channelName;
            channelDescription.textContent = channelDescriptions[channelName];
            messageInput.placeholder = `Envoyer un message dans #${channelName}`;
            
            // Clear messages
            messagesContainer.innerHTML = '';
            
            // Add messages with animation
            const messages = messagesDB[channelName] || [];
            let delay = 0;
            
            messages.forEach((msg, index) => {
                setTimeout(() => {
                    showTyping(msg.user);
                    
                    setTimeout(() => {
                        hideTyping();
                        const msgElement = createMessage(msg);
                        messagesContainer.appendChild(msgElement);
                        
                        setTimeout(() => {
                            msgElement.style.opacity = '1';
                        }, 50);
                        
                        messagesContainer.scrollTop = messagesContainer.scrollHeight;
                    }, 800);
                }, delay);
                
                delay += 1200;
            });
        }

        // ===== TYPING INDICATOR =====
        function showTyping(username) {
            const indicator = document.getElementById('typing-indicator');
            const userSpan = document.getElementById('typing-user');
            userSpan.textContent = username;
            indicator.style.display = 'block';
        }

        function hideTyping() {
            document.getElementById('typing-indicator').style.display = 'none';
        }

        // ===== DISCORD MOBILE SIDEBAR FUNCTIONS =====
        function openDiscordSidebar() {
            const sidebar = document.querySelector('.focus-sidebar');
            const overlay = document.getElementById('discordOverlay');
            if (sidebar) {
                sidebar.classList.add('open');
            }
            if (overlay) {
                overlay.classList.add('show');
            }
        }
        
        function closeDiscordSidebar() {
            const sidebar = document.querySelector('.focus-sidebar');
            const overlay = document.getElementById('discordOverlay');
            if (sidebar) {
                sidebar.classList.remove('open');
            }
            if (overlay) {
                overlay.classList.remove('show');
            }
        }

        // ===== CHANNEL CLICK HANDLERS =====
        channelItems.forEach(item => {
            item.addEventListener('click', () => {
                const channelName = item.getAttribute('data-channel');
                loadChannel(channelName);
                
                // Update mobile header
                const mobileChannelName = document.getElementById('mobileChannelName');
                if (mobileChannelName) {
                    mobileChannelName.textContent = '# ' + channelName;
                }
                
                // Close sidebar on mobile
                if (window.innerWidth <= 768) {
                    closeDiscordSidebar();
                }
            });
        });
        
        // ===== AUTO-LOAD MESSAGES FOR MOBILE =====
        function autoLoadDiscordMobile() {
            // Charger les messages automatiquement
            setTimeout(() => {
                loadChannel('général');
            }, 800);
            
            // Ajouter des messages animés périodiquement - OPTIMISÉ (8s au lieu de 5s)
            setInterval(() => {
                if (!pageVisible || !messagesContainer || messagesContainer.children.length === 0) return;
                
                const randomMsgs = [
                    { user: "Focus Bot", role: "founder", avatar: "bg-green-500", time: "À l'instant", content: "🔔 Nouveau membre dans le salon ! Bienvenue 👋" },
                    { user: "Alex_Trading", role: "student-blue", avatar: "bg-blue-500", time: "À l'instant", content: "Merci pour les conseils ! 🙏" },
                    { user: "Julie_Ecom", role: "student-yellow", avatar: "bg-pink-500", time: "À l'instant", content: "Je viens de faire ma première vente ! 🎉" },
                    { user: "Thomas_Ads", role: "student-blue", avatar: "bg-purple-500", time: "À l'instant", content: "ROAS de 4.2 aujourd'hui 📈🔥" }
                ];
                const msgElement = createMessage(randomMsgs[Math.floor(Math.random() * randomMsgs.length)]);
                msgElement.classList.add('discord-msg-animated');
                messagesContainer.appendChild(msgElement);
                setTimeout(() => msgElement.style.opacity = '1', 50);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
                
                // Limiter messages pour performance
                while (messagesContainer.children.length > 12) messagesContainer.removeChild(messagesContainer.firstChild);
            }, 8000);
        }
        
        // Init on load
        window.addEventListener('load', autoLoadDiscordMobile);

        // ===== INIT =====
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            const letters = document.querySelectorAll('.loader-letter');
            
            const tl = gsap.timeline();
            
            // Letters entrance
            tl.to(letters, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: "power3.out"
            });
            
            // Shine sweep
            tl.to('.loader-shine', {
                left: '200%',
                duration: 1,
                ease: "power2.inOut"
            }, "-=0.3");
            
            // Bar fill is handled by CSS animation, we just wait a bit
            tl.to(loader, {
                y: '-100%',
                duration: 0.8,
                ease: "power4.inOut",
                delay: 0.3
            });

            setTimeout(() => {
                loadChannel('général');
            }, 2500); // Crypto optimisé
        });


// === EXPERTS CAROUSEL ===
            // Expert Carousel Navigation
            const expertGrid = document.getElementById('expertGrid');
            const expertDots = document.getElementById('expertDots');
            
            if (expertGrid && window.innerWidth <= 768) {
                const cards = expertGrid.querySelectorAll('.expert-card');
                const totalCards = cards.length;
                
                // Create dots
                for (let i = 0; i < totalCards; i++) {
                    const dot = document.createElement('div');
                    dot.className = 'swipe-dot' + (i === 0 ? ' active' : '');
                    dot.onclick = () => scrollToExpert(i);
                    expertDots.appendChild(dot);
                }
                
                // Update dots on scroll
                expertGrid.addEventListener('scroll', () => {
                    const scrollLeft = expertGrid.scrollLeft;
                    const cardWidth = expertGrid.querySelector('.expert-card').offsetWidth + 16;
                    const activeIndex = Math.round(scrollLeft / cardWidth);
                    
                    document.querySelectorAll('.swipe-dot').forEach((dot, i) => {
                        dot.classList.toggle('active', i === activeIndex);
                    });
                });
            }
            
            function scrollExperts(direction) {
                const grid = document.getElementById('expertGrid');
                const cardWidth = grid.querySelector('.expert-card').offsetWidth + 16;
                grid.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
            }
            
            function scrollToExpert(index) {
                const grid = document.getElementById('expertGrid');
                const cardWidth = grid.querySelector('.expert-card').offsetWidth + 16;
                grid.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
            }

// === GLOBAL SCRIPTS ===
// Protection VanillaTilt - Initialisé une seule fois
function initTilt() {
    if(typeof VanillaTilt !== 'undefined') {
        document.querySelectorAll('[data-tilt]').forEach(el => {
            // Éviter double init
            if (!el._vanillaTiltInit) {
            VanillaTilt.init(el, { max: 5, speed: 400, glare: true, "max-glare": 0.2 });
                el._vanillaTiltInit = true;
            }
        });
        const phone = document.querySelector('.phone-mockup');
        if(phone && !phone._vanillaTiltInit) {
            VanillaTilt.init(phone, { max: 10, speed: 400, glare: true, "max-glare": 0.2 });
            phone._vanillaTiltInit = true;
        }
    }
}
window.addEventListener('load', initTilt);

        // ===== 1. SNAPCHAT - SUPPRIMÉ (dupliqué au-dessus) =====

        // ===== 2. META ADS - Animation (intégrée dans boucle principale Arsenal) =====
        const roasValues = ['2.4x', '3.1x', '4.7x', '6.2x', '8.2x'];
        let roasIndex = 4;
        let metaResults = 4240;

        // ===== 4. TERMINAL IA - Typewriter effect + Matrix background =====
        const terminalContent = document.getElementById('terminal-content');
        const matrixBg = document.getElementById('matrix-bg');
        
        // Matrix rain effect - Optimisé (réduit fréquence)
        const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';
        function createMatrixRain() {
            if (matrixBg && matrixBg.children.length < 10) {
                const char = document.createElement('div');
                char.className = 'matrix-char';
                char.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
                char.style.left = Math.random() * 100 + '%';
                char.style.animationDuration = (Math.random() * 3 + 2) + 's';
                char.style.opacity = Math.random() * 0.5 + 0.3;
                matrixBg.appendChild(char);
                
                setTimeout(() => char.remove(), 5000);
            }
        }
        // Matrix rain - OPTIMISÉ (1.5s au lieu de 800ms)
        if (matrixBg) setInterval(() => { if (pageVisible) createMatrixRain(); }, 1500);
        
        // Terminal typewriter
        const terminalLines = [
            '<span class="terminal-prompt">user@focus:~$</span> <span class="terminal-command">./generate_business.sh</span>',
            '<span class="terminal-output">> Initializing AI modules...</span>',
            '<span class="terminal-output">> Loading neural networks...</span>',
            '<span class="terminal-output">> Connecting to API endpoints...</span>',
            '<span class="terminal-output">> Analyzing market trends...</span>',
            '<span class="terminal-output">> Generating business strategies...</span>',
            '<span class="terminal-output">> Optimizing conversion funnels...</span>',
            '<span class="terminal-output"></span>',
            '<div class="ascii-art">███████╗ ██████╗  ██████╗██╗   ██╗███████╗\n██╔════╝██╔═══██╗██╔════╝██║   ██║██╔════╝\n█████╗  ██║   ██║██║     ██║   ██║███████╗\n██╔══╝  ██║   ██║██║     ██║   ██║╚════██║\n██║     ╚██████╔╝╚██████╗╚██████╔╝███████║\n╚═╝      ╚═════╝  ╚═════╝ ╚═════╝ ╚══════╝</div>',
            '<span class="terminal-output">> STATUS: <span style="color: #22C55E; font-weight: 700;">READY 🟢</span></span>',
            '<span class="terminal-prompt">user@focus:~$</span> <span class="terminal-cursor"></span>'
        ];

        let lineIndex = 0;
        function typeTerminal() {
            if (!terminalContent) return; // Protection null
            
            if (lineIndex < terminalLines.length) {
                const div = document.createElement('div');
                div.className = 'terminal-line';
                div.style.animationDelay = '0s';
                div.innerHTML = terminalLines[lineIndex];
                terminalContent.appendChild(div);
                lineIndex++;
                setTimeout(typeTerminal, lineIndex === 8 ? 1200 : lineIndex === 9 ? 800 : 350);
            } else {
                setTimeout(() => {
                    if (terminalContent) terminalContent.innerHTML = '';
                    lineIndex = 0;
                    typeTerminal();
                }, 6000);
            }
        }
        if (terminalContent) typeTerminal();

        // ===== 5. SHOPIFY - Increment sales (OPTIMISÉ - 4s au lieu de 2s) =====
        let shopifySales = 14250;
        setInterval(() => {
            if (!pageVisible) return;
            const salesEl = document.getElementById('shopify-sales');
            if (!salesEl) return;
            shopifySales += Math.floor(Math.random() * 80) + 30;
            salesEl.textContent = shopifySales.toLocaleString('fr-FR') + '€';
            salesEl.style.transform = 'scale(1.1)';
            setTimeout(() => { if(salesEl) salesEl.style.transform = 'scale(1)'; }, 300);
        }, 4000);

        // ===== 6. GOOGLE - Typing animation in search bar =====
        const searchQueries = [
            'formation business elite',
            'meilleure formation e-commerce',
            'formation business en ligne',
            'comment devenir entrepreneur'
        ];
        let currentQueryIndex = 0;
        
        function rotateSearchQuery() {
            const searchBar = document.querySelector('.google-search-bar');
            if (searchBar) {
                currentQueryIndex = (currentQueryIndex + 1) % searchQueries.length;
                const textNode = searchBar.childNodes[0];
                if (textNode && textNode.nodeType === 3) {
                    // Fade out
                    searchBar.style.opacity = '0.5';
                    setTimeout(() => {
                        textNode.textContent = searchQueries[currentQueryIndex] + '\n                            ';
                        searchBar.style.opacity = '1';
                    }, 300);
                }
            }
        }
        setInterval(() => { if (pageVisible) rotateSearchQuery(); }, 6000);

        // ===== ADD SMOOTH TRANSITIONS =====
        document.querySelectorAll('.snap-stat-value, .meta-roas, .shopify-sales-value').forEach(el => {
            el.style.transition = 'transform 0.2s ease, color 0.2s ease';
        });

        // ===== PERFORMANCE: Pause animations when not visible =====
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                } else {
                    entry.target.style.animationPlayState = 'paused';
                }
            });
        });

        document.querySelectorAll('.expert-card').forEach(card => {
            observer.observe(card);
        });

    
/* Script networking */

        // ANIMATION SCRIPT - avec vérification
        const chatStream = document.getElementById('chat-stream');
        if (!chatStream) { console.log('chat-stream not found, skipping animation'); }
        const messages = [
            { u: 'Karim', t: 'Merci pour le tips !' },
            { u: 'Julie', t: 'C\'est enregistré le replay ?' },
            { u: 'Alex', t: 'Je teste ça direct.' },
            { u: 'Mehdi', t: 'Le ROAS est incroyable 🔥' },
            { u: 'Sarah', t: 'Tu utilises quel angle ?' },
            { u: 'Yassine', t: 'Go passer à 100€/j' }
        ];
        
        let lastMessageIndex = -1;

        function addMessage() {
            if (!chatStream) return;
            if(chatStream.children.length > 2) chatStream.firstElementChild.remove();
            
            // Avoid duplicate messages
            let index;
            do {
                index = Math.floor(Math.random() * messages.length);
            } while (index === lastMessageIndex);
            
            lastMessageIndex = index;
            const m = messages[index];
            
            const bubble = document.createElement('div');
            bubble.className = 'chat-bubble';
            bubble.innerHTML = `<span class="font-bold text-white mr-2">${m.u}:</span>${m.t}`;
            chatStream.appendChild(bubble);
        }
        // Boucle optimisée pour Networking (au lieu de 2 setInterval séparés)
        const speaker = document.getElementById('u1');
        let networkFrame = 0;
        setInterval(() => {
            if (!pageVisible) return;
            networkFrame++;
            
            // Messages - toutes les 5 sec
            if (networkFrame % 5 === 0) addMessage();
            
            // Speaking - simulation sans surcharge CPU (500ms au lieu de 200ms)
            if (speaker && networkFrame % 1 === 0) {
                if (Math.random() > 0.4) {
                    speaker.classList.add('talking');
                    const ring = speaker.querySelector('.avatar-ring');
                    if (ring) ring.style.boxShadow = `0 0 0 ${Math.random() * 4 + 2}px #23a559`;
                } else {
                    speaker.classList.remove('talking');
                    const ring = speaker.querySelector('.avatar-ring');
                    if (ring) ring.style.boxShadow = 'none';
                }
            }
        }, 500);

        if (typeof VanillaTilt !== 'undefined') {
            const phoneMockup = document.querySelector(".phone-mockup");
            if (phoneMockup) VanillaTilt.init(phoneMockup, { max: 10, speed: 400, glare: true, "max-glare": 0.2 });
        }
    
/* Script pricing */

        if (typeof VanillaTilt !== 'undefined') {
            const pricingCard = document.querySelector(".pricing-card");
            if (pricingCard) VanillaTilt.init(pricingCard, { max: 2, speed: 400, glare: true, "max-glare": 0.05 });
        }
    
/* Script faq */

        function ask(idx) {
            if (busy) return;
            
            // UI Sidebar
            document.querySelectorAll('.q-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.q-btn')[idx].classList.add('active');

            const feed = document.getElementById('feed');
            const welcome = document.getElementById('welcome');
            if(welcome) welcome.style.display = 'none';
            feed.innerHTML = ''; 

            // User msg
            const u = document.createElement('div');
            u.className = 'msg-row user';
            u.innerHTML = `<div class="msg-avatar-icon user">T</div><div class="bubble">${data[idx].q}</div>`;
            feed.appendChild(u);

            // Typing
            busy = true;
            const t = document.createElement('div');
            t.className = 'msg-row ai';
            t.innerHTML = `<div class="msg-avatar-icon ai">AI</div><div class="bubble dots"><span></span><span></span><span></span></div>`;
            feed.appendChild(t);
            feed.scrollTop = feed.scrollHeight;

            // Reply
            setTimeout(() => {
                t.remove();
                const r = document.createElement('div');
                r.className = 'msg-row ai';
                r.innerHTML = `<div class="msg-avatar-icon ai">AI</div><div class="bubble">${data[idx].a}</div>`;
                feed.appendChild(r);
                feed.scrollTop = feed.scrollHeight;
                busy = false;
            }, 2500); // Snapchat optimisé
        }
        
        // ===== FAQ MOBILE FUNCTIONS =====
        function openFaqDrawer() {
            document.getElementById('faqDrawer').classList.add('open');
        }
        
        function closeFaqDrawer() {
            document.getElementById('faqDrawer').classList.remove('open');
        }
        
        function askMobile(idx) {
            if (mobileBusy) return;
            
            // Close drawer
            closeFaqDrawer();
            
            const feed = document.getElementById('faqMobileFeed');
            const welcome = document.getElementById('faqMobileWelcome');
            if(welcome) welcome.style.display = 'none';
            feed.innerHTML = '';
            
            // User message
            const userMsg = document.createElement('div');
            userMsg.className = 'faq-msg user';
            userMsg.innerHTML = `
                <div class="faq-msg-avatar user">T</div>
                <div class="faq-msg-bubble">${data[idx].q}</div>
            `;
            feed.appendChild(userMsg);
            
            // Typing indicator
            mobileBusy = true;
            const typing = document.createElement('div');
            typing.className = 'faq-msg ai';
            typing.innerHTML = `
                <div class="faq-msg-avatar ai">AI</div>
                <div class="faq-msg-bubble dots"><span></span><span></span><span></span></div>
            `;
            feed.appendChild(typing);
            feed.scrollTop = feed.scrollHeight;
            
            // AI Reply
            setTimeout(() => {
                typing.remove();
                const aiMsg = document.createElement('div');
                aiMsg.className = 'faq-msg ai';
                aiMsg.innerHTML = `
                    <div class="faq-msg-avatar ai">AI</div>
                    <div class="faq-msg-bubble">${data[idx].a}</div>
                `;
                feed.appendChild(aiMsg);
                feed.scrollTop = feed.scrollHeight;
                mobileBusy = false;
            }, 800);
        }
    

// === ANIMATIONS ===
    // Utiliser IntersectionObserver natif au lieu de ScrollTrigger pour éviter les saccades
    window.addEventListener('load', function() {
    
    // Animation légère avec IntersectionObserver (plus performant que ScrollTrigger)
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    // Animation pour les titres
    document.querySelectorAll('.section-title, h2').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        fadeObserver.observe(el);
    });
    
    // Animation pour les cartes Expert
    document.querySelectorAll('.expert-card').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`;
        fadeObserver.observe(el);
    });
    
    // Animation KPIs Ads Dashboard
    function animateAdsKPIs() {
        const kpis = {
            'ads-spend': { start: 8000, end: 12847, prefix: '€', suffix: '' },
            'ads-revenue': { start: 50000, end: 89230, prefix: '€', suffix: '' },
            'ads-roas': { start: 4.0, end: 6.9, prefix: '', suffix: 'x', decimal: true },
            'ads-conv': { start: 1500, end: 2847, prefix: '', suffix: '' }
        };
        
        Object.keys(kpis).forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            
            const kpi = kpis[id];
            let current = kpi.start;
            const increment = (kpi.end - kpi.start) / 60;
            
            const interval = setInterval(() => {
                current += increment;
                if (current >= kpi.end) {
                    current = kpi.end;
                    clearInterval(interval);
                }
                
                const value = kpi.decimal 
                    ? current.toFixed(1) 
                    : Math.floor(current).toLocaleString();
                el.textContent = kpi.prefix + value + kpi.suffix;
            }, 30);
        });
    }
    
    // Lancer l'animation quand la section est visible
    const adsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateAdsKPIs();
                adsObserver.disconnect();
            }
        });
    }, { threshold: 0.3 });
    
    const adsDashboard = document.querySelector('.ads-dashboard-v2');
    if (adsDashboard) adsObserver.observe(adsDashboard);
    
    // Animation pour la section Pricing
    document.querySelectorAll('.pricing-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        fadeObserver.observe(el);
    });
    
    // FAQ - PAS d'animation pour éviter les bugs de clic
    // Les éléments FAQ doivent toujours être visibles et cliquables
    
    // Animation pour les textes networking
    document.querySelectorAll('.networking-text p, .networking-text h2').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-15px)';
        el.style.transition = `opacity 0.4s ease ${i * 0.1}s, transform 0.4s ease ${i * 0.1}s`;
        fadeObserver.observe(el);
    });
    
    // Animation pour les satellites
    document.querySelectorAll('.satellite').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'scale(0.9)';
        el.style.transition = `opacity 0.3s ease ${i * 0.05}s, transform 0.3s ease ${i * 0.05}s`;
        fadeObserver.observe(el);
    });
    
    // Animation pour les bulles de speech
    document.querySelectorAll('.speech-bubble').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';
        el.style.transition = `opacity 0.3s ease ${i * 0.08}s, transform 0.3s ease ${i * 0.08}s`;
        fadeObserver.observe(el);
    });
    
    }); // Fin window.addEventListener('load')
