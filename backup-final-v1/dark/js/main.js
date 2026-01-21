// === ARSENAL ANIMATIONS ===
        /* LOADER */
        window.onload = () => { 
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
            }, 1000); // 3 secondes pour profiter de l'effet épique
        }

        /* INIT CHARTS */
        const cryptoChart = document.getElementById('crypto-chart');
        for(let i=0; i<12; i++) cryptoChart.innerHTML += `<div class="w-1 bg-[#F7931A] transition-all duration-500" style="height:${Math.random()*100}%; opacity:${0.5+Math.random()*0.5}"></div>`;

        /* --- AUTOMATIC LIFE SYSTEM --- */
        
        // 1. SHOPIFY LOOP
        setInterval(() => {
            const card = document.getElementById('card-shopify');
            const badge = document.getElementById('notif-shop');
            const valEl = document.getElementById('shop-val');
            
            card.style.transform = window.innerWidth > 768 ? 'translateY(-8px) scale(1.02)' : 'scale(1.02)';
            badge.style.transform = 'translateY(0)';
            
            let current = parseFloat(valEl.innerText.replace(',','').replace('€','').replace(/\s/g, ''));
            valEl.innerText = (current + 49).toLocaleString('fr-FR') + ' €';
            
            setTimeout(() => {
                badge.style.transform = 'translateY(-100%)';
                if(window.innerWidth > 768) card.style.transform = '';
                else card.style.transform = 'none';
            }, 2000);
        }, 4000);

        // 2. STRIPE LOOP
        setInterval(() => {
            const card = document.getElementById('card-stripe');
            const badge = document.getElementById('notif-stripe');
            const valEl = document.getElementById('stripe-val');
            
            card.style.transform = window.innerWidth > 768 ? 'translateY(-8px) scale(1.02)' : 'scale(1.02)';
            badge.style.transform = 'translateY(0)';
            
            let current = parseFloat(valEl.innerText.replace('+','').replace('€','').replace(',00','').replace(/\s/g, ''));
            valEl.innerText = '+ ' + (current + 297).toLocaleString('fr-FR') + ',00 €';
            
            setTimeout(() => {
                badge.style.transform = 'translateY(-100%)';
                if(window.innerWidth > 768) card.style.transform = '';
                else card.style.transform = 'none';
            }, 2500);
        }, 6000);

        // 3. CRYPTO LOOP - Optimisé
        setInterval(() => {
            const valEl = document.getElementById('btc-val');
            const pctEl = document.getElementById('btc-percent');
            if (!valEl || !pctEl) return;
            const change = (Math.random() - 0.45) * 200;
            let current = parseFloat(valEl.innerText.replace('$','').replace(',',''));
            let newVal = current + change;
            
            valEl.innerText = '$' + newVal.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0});
            valEl.style.color = change > 0 ? '#4ade80' : '#f87171';
            pctEl.innerText = (change > 0 ? '+' : '') + (Math.random()*5).toFixed(2) + '%';
            
            if (cryptoChart && cryptoChart.children.length > 0) {
                const bars = cryptoChart.children;
                bars[Math.floor(Math.random() * bars.length)].style.height = Math.random() * 100 + '%';
            }
        }, 2500);

        // 4. RANDOM EVENTS
        const randomCards = [
            {id: 'card-youtube', badge: 'notif-yt'},
            {id: 'card-tiktok', badge: 'notif-tiktok'}
        ];

        setInterval(() => {
            const item = randomCards[Math.floor(Math.random() * randomCards.length)];
            const card = document.getElementById(item.id);
            const badge = document.getElementById(item.badge);
            
            if(card && badge && window.getComputedStyle(card).display !== 'none') {
                badge.style.transform = 'translateY(0)';
                setTimeout(() => badge.style.transform = 'translateY(-100%)', 2500);
            }
        }, 4500);

        // 5. QONTO LOOP
        const qontoAmounts = [4300, 2890, 5670, 3200, 4800];
        let qontoIndex = 0;
        setInterval(() => {
            const card = document.getElementById('card-qonto');
            const badge = document.getElementById('notif-qonto');
            const valEl = document.getElementById('qonto-val');
            
            if(card && badge && valEl) {
                card.style.transform = window.innerWidth > 768 ? 'translateY(-8px) scale(1.02)' : 'scale(1.02)';
                badge.style.transform = 'translateY(0)';
                
                valEl.innerText = '+ ' + qontoAmounts[qontoIndex].toLocaleString('fr-FR') + ' €';
                qontoIndex = (qontoIndex + 1) % qontoAmounts.length;
                
                setTimeout(() => {
                    badge.style.transform = 'translateY(-100%)';
                    if(window.innerWidth > 768) card.style.transform = '';
                    else card.style.transform = 'none';
                }, 2500);
            }
        }, 7000);

        // 6. REVOLUT LOOP
        const revolutPayments = [
            [{name: '🍎 Apple', amount: 1200}, {name: '👜 Louis Vuitton', amount: 600}],
            [{name: '💻 MacBook Pro', amount: 2800}, {name: '🏨 Hotel Ritz', amount: 450}],
            [{name: '✈️ Air France', amount: 850}, {name: '🍽️ Restaurant', amount: 320}],
            [{name: '🎮 PlayStation', amount: 550}, {name: '👟 Nike', amount: 180}]
        ];
        let revolutIndex = 0;
        
        setInterval(() => {
            const card = document.getElementById('card-revolut');
            const badge = document.getElementById('notif-revolut');
            const paymentsEl = document.getElementById('revolut-payments');
            
            if(card && badge && paymentsEl) {
                badge.style.transform = 'translateY(0)';
                
                const payments = revolutPayments[revolutIndex];
                paymentsEl.innerHTML = payments.map(p => `
                    <div class="flex justify-between items-center opacity-90">
                        <span class="text-gray-300">${p.name}</span>
                        <span class="text-white font-bold">- ${p.amount.toLocaleString('fr-FR')} €</span>
                    </div>
                `).join('');
                
                revolutIndex = (revolutIndex + 1) % revolutPayments.length;
                
                setTimeout(() => {
                    badge.style.transform = 'translateY(-100%)';
                }, 2500);
            }
        }, 8000);


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

            // E-com - Optimisé
            let ecom = 14250;
            setInterval(() => {
                ecom += Math.floor(Math.random() * 150) + 50;
                document.querySelectorAll('.ecom-total').forEach(el => el.innerText = ecom.toLocaleString() + '€');
            }, 3000);
            setInterval(() => {
                document.querySelectorAll('.toast-ecom').forEach(t => {
                    t.classList.add('show');
                    setTimeout(() => t.classList.remove('show'), 3000);
                });
            }, 7000);

            // SMMA
            setTimeout(() => document.querySelectorAll('.stamp-paye').forEach(s => s.classList.add('show')), 2800);

            // Fiscalite (New stamp logic)
            setTimeout(() => document.querySelectorAll('.stamp-tax').forEach(s => gsap.to(s, { opacity: 0.8, scale: 1, duration: 0.4, ease: "back.out(1.7)" })), 2000);

            // Google
            setTimeout(() => {
                document.querySelectorAll('.google-bar').forEach(b => b.style.width = '100%');
                document.querySelectorAll('.google-ctr').forEach(t => t.innerText = '12.8%');
            }, 1500);
            setTimeout(() => document.querySelectorAll('.google-boost').forEach(t => gsap.to(t, { opacity: 1, duration: 0.3 })), 3000);

            // Meta
            setTimeout(() => {
                document.querySelectorAll('.meta-dot').forEach(d => { d.style.transform = 'translateX(20px)'; d.style.background = '#3b82f6'; });
                document.querySelectorAll('.meta-toggle').forEach(t => t.style.background = '#bfdbfe');
                document.querySelectorAll('.roas-path').forEach(p => p.classList.add('draw'));
            }, 1800);
            setTimeout(() => document.querySelectorAll('.meta-roas').forEach(t => t.innerText = '8.7x'), 3200);

            // TikTok - Optimisé (réduit fréquence)
            let views = 4120000;
            setInterval(() => {
                views += Math.floor(Math.random() * 50000) + 10000;
                document.querySelectorAll('.tiktok-views').forEach(t => t.innerText = (views/1000000).toFixed(2) + 'M');
            }, 2000);

            // Snapchat - Optimisé (réduit fréquence)
            let snapViews = 842000, snapSwipes = 12400, snapCtr = 1.47;
            setInterval(() => {
                snapViews += Math.floor(Math.random() * 3000) + 1000;
                snapSwipes += Math.floor(Math.random() * 50) + 20;
                snapCtr = ((snapSwipes / snapViews) * 100).toFixed(2);
                document.querySelectorAll('.snap-views').forEach(t => t.innerText = Math.floor(snapViews/1000) + 'K');
                document.querySelectorAll('.snap-swipes').forEach(t => t.innerText = (snapSwipes/1000).toFixed(1) + 'K');
                document.querySelectorAll('.snap-ctr').forEach(t => t.innerText = snapCtr + '%');
            }, 2500);
            
            // Screenshot flash effect
            setInterval(() => {
                document.querySelectorAll('.snap-flash-bg').forEach(f => {
                    f.style.opacity = 0.9;
                    setTimeout(() => f.style.opacity = 0, 150);
                });
                document.querySelectorAll('.snap-camera').forEach(c => {
                    c.style.opacity = 1;
                    c.style.transform = 'translate(-50%, -50%) scale(1.5)';
                    setTimeout(() => {
                        c.style.opacity = 0;
                        c.style.transform = 'translate(-50%, -50%) scale(1)';
                    }, 300);
                });
            }, 5000);

            // SEO
            setTimeout(() => {
                document.querySelectorAll('.seo-focus').forEach(el => gsap.to(el, { y: -55, duration: 0.8, ease: 'power2.out' }));
                document.querySelectorAll('.seo-r1, .seo-r2').forEach(el => gsap.to(el, { y: 30, duration: 0.8, ease: 'power2.out' }));
                setTimeout(() => document.querySelectorAll('.seo-star').forEach(s => s.style.opacity = 1), 900);
            }, 2500);

            // Hearts - Optimisé (réduit fréquence + limite éléments)
            setInterval(() => {
                document.querySelectorAll('.hearts-box').forEach(box => {
                    // Limite à 5 cœurs max pour éviter memory leak
                    if (box.children.length > 5) return;
                    const h = document.createElement('span');
                    h.className = 'heart';
                    h.innerText = ['❤️','🧡','💜','💖'][Math.floor(Math.random()*4)];
                    h.style.left = Math.random() * 15 + 'px';
                    h.style.bottom = '0';
                    box.appendChild(h);
                    setTimeout(() => h.remove(), 2000);
                });
            }, 1200);

        });

// === FAQ SECTION ===
        // ===== MESSAGES DATABASE PAR SALON =====
        const messagesDB = {
            'général': [
                { user: "Sonny", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 08:15", content: "🔥 Live ce soir à 20h : On crée une section Shopify de A à Z avec Claude IA !", reactions: ["🔥 24", "👀 12"] },
                { user: "bmh.793", role: "student-yellow", avatar: "bg-purple-500", time: "Aujourd'hui à 08:18", content: "Merci Sonny pour le live d'hier c'était incroyable ! J'ai enfin compris les sections liquid" },
                { user: "YasmineCr", role: "student-blue", avatar: "bg-pink-400", time: "Aujourd'hui à 08:20", content: "Le livvvw de ce soir une dinguerie !!!!!!<br>Je cherchais comment faire des sections liquid depuis 2023 😂", reactions: ["😂 8", "💀 3"] },
                { user: "Zaid", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 09:30", content: "Nouveau module sur Meta Ads qui sort demain ! Tout ce qu'il faut pour passer de 0 à 10K€/mois 🎯" },
                { user: "Mohamed951", role: "student-yellow", avatar: "bg-amber-500", time: "Aujourd'hui à 09:35", content: "Merci @Jamel pour les conseils hier, j'ai appliqué et j'ai doublé mon ROAS !" },
                { user: "iSkyze", role: "student-blue", avatar: "bg-indigo-500", time: "Aujourd'hui à 10:12", content: "Merci Midou de la value comme toujours 🙏" },
                { user: "Jamel", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 11:45", content: "Pour ceux qui veulent scale avec Meta Ads, je fais un live spécial samedi matin. On analyse vos campagnes en direct 📊" },
                { user: "Betterr", role: "student-yellow", avatar: "bg-teal-500", time: "Aujourd'hui à 12:08", content: "Les gars quelqu'un peut me recap le live d'hier ? J'étais pas dispo 😢" },
                { user: "Midou", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 13:20", content: "Replay disponible dans #annonce ! Et prenez des notes, y'a de la valeur 💎" }
            ],
            
            'annonce': [
                { user: "Zaid", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 08:00", content: "🎉 NOUVEAU MODULE DISPONIBLE : Meta Ads Mastery<br><br>✅ De 0 à 10K€/mois<br>✅ Stratégies éprouvées<br>✅ Cas pratiques<br><br>Dispo dans votre espace membre !", reactions: ["🔥 45", "🎉 32", "💪 18"] },
                { user: "Sonny", role: "founder", avatar: "bg-red-600", time: "Hier à 18:30", content: "📺 REPLAY - Live Shopify Liquid Sections<br><br>Le replay du live d'hier est disponible ! On a créé 3 sections custom avec Claude IA.<br><br>Durée : 2h30 de pure valeur 💎" },
                { user: "Jamel", role: "founder", avatar: "bg-red-600", time: "Il y a 2 jours", content: "🚀 FOCUS COIN : Nouveau système de points<br><br>Chaque interaction vous rapporte des points Focus Coin :<br>• Message : 10 pts<br>• Aide un membre : 50 pts<br>• Partage résultat : 100 pts<br><br>À échanger contre des formations !" }
            ],
            
            'résultats': [
                { user: "Midou", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 14:30", content: "Bravo à tous ceux qui partagent leurs résultats ! C'est ça l'esprit Focus 🔥<br>Keep pushing ! 💪" },
                { user: "Malek", role: "student-yellow", avatar: "bg-orange-500", time: "Aujourd'hui à 10:15", content: "Premier 5K€ de CA ce mois-ci sur ma boutique Shopify ! 🚀🚀🚀<br>Merci à toute l'équipe Focus pour les conseils !", reactions: ["🔥 28", "🎉 15", "💪 12"] },
                { user: "Val", role: "student-blue", avatar: "bg-indigo-600", time: "Aujourd'hui à 11:42", content: "Ma première campagne Meta Ads rentable : 1200€ de dépense, 4800€ de CA ! ROAS de 4x 💰<br>J'ai suivi le module de Zaid à la lettre", reactions: ["🎯 18", "💰 22"] },
                { user: "Fafull.S6", role: "student-yellow", avatar: "bg-rose-500", time: "Aujourd'hui à 13:05", content: "J'ai fermé ma première vente de voiture grâce aux techniques de Midou ! +2800€ de commission 🚗💨", reactions: ["🚗 10", "💪 8"] },
                { user: "Redwane", role: "student-blue", avatar: "bg-blue-400", time: "Aujourd'hui à 15:20", content: "2 nouveaux clients SMMA cette semaine. 3000€ de MRR en plus ! Merci Jamel pour le module prospection 📱", reactions: ["🔥 15"] }
            ],
            
            'ecommerce': [
                { user: "Sonny", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 09:00", content: "Pour ceux qui galèrent avec les sections Shopify : utilisez Claude IA avec les bons prompts. Je vous montre ça en live ce soir 🎨" },
                { user: "bmh.793", role: "student-yellow", avatar: "bg-purple-500", time: "Aujourd'hui à 09:15", content: "Question : quel thème Shopify vous recommandez pour du dropshipping ? Dawn ou un thème premium ?", reactions: [] },
                { user: "YasmineCr", role: "student-blue", avatar: "bg-pink-400", time: "Aujourd'hui à 09:20", content: "Moi j'utilise Dawn + sections custom. C'est gratuit et ultra rapide ! Merci Sonny pour le tuto 🙏" },
                { user: "Mohamed951", role: "student-yellow", avatar: "bg-amber-500", time: "Aujourd'hui à 10:05", content: "Les gars comment vous gérez les retours produits ? J'ai eu 5 demandes cette semaine 😓" },
                { user: "iSkyze", role: "student-blue", avatar: "bg-indigo-500", time: "Aujourd'hui à 10:18", content: "Policy claire dès le départ + bon SAV = moins de problèmes. Check le module Customer Success de Focus" },
                { user: "Rabah", role: "student-yellow", avatar: "bg-cyan-600", time: "Aujourd'hui à 11:30", content: "J'ai intégré Claude IA pour mes descriptions produits. Gain de temps ÉNORME ! 🤖" },
                { user: "incognito", role: "student-blue", avatar: "bg-gray-600", time: "Aujourd'hui à 12:45", content: "Question bête : c'est quoi la différence entre Shopify et Shopify Plus ? Vraiment utile ?" }
            ],
            
            'smma': [
                { user: "Jamel", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 08:30", content: "Le secret du SMMA en 2026 : spécialisation + résultats prouvés. Arrêtez d'être généralistes, devenez experts dans UNE niche 🎯" },
                { user: "BA1MAN", role: "student-yellow", avatar: "bg-cyan-500", time: "Aujourd'hui à 09:15", content: "J'ai débloqué mon premier client à 2K€/mois grâce aux scripts de prospection de Jamel ! C'est fou 🚀" },
                { user: "Betterr", role: "student-blue", avatar: "bg-teal-500", time: "Aujourd'hui à 10:20", content: "Question : vous prospectez plutôt cold email ou LinkedIn pour du SMMA local ?" },
                { user: "Malek", role: "student-yellow", avatar: "bg-orange-500", time: "Aujourd'hui à 10:35", content: "LinkedIn marche mieux pour moi. J'ai signé 3 clients en B2B avec la méthode Focus" },
                { user: "Val", role: "student-blue", avatar: "bg-indigo-600", time: "Aujourd'hui à 11:50", content: "Combien vous facturez pour de la gestion Meta Ads ? Je veux pas me sous-vendre..." },
                { user: "Rodrygo", role: "student-yellow", avatar: "bg-red-400", time: "Aujourd'hui à 12:10", content: "Moi je fais 1500€ de setup + 15% du budget pub. Ça passe bien 💰" }
            ],
            
            'automobile': [
                { user: "Midou", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 07:45", content: "Astuce du jour : Les RS3 et M4 Competition se vendent TRÈS bien en ce moment. Marges de 3-5K€ facilement 🚗💨" },
                { user: "Fafull.S6", role: "student-yellow", avatar: "bg-rose-500", time: "Aujourd'hui à 08:30", content: "Je viens de recevoir une Audi RS3 2024. 400ch, Quattro. Quelqu'un intéressé ? 42K€", reactions: ["🔥 8"] },
                { user: "Mohamed951", role: "student-blue", avatar: "bg-amber-500", time: "Aujourd'hui à 09:20", content: "Question : vous recommandez quoi comme plateforme pour trouver les voitures ? Autoscout, LBC ?" },
                { user: "Rabah", role: "student-yellow", avatar: "bg-cyan-600", time: "Aujourd'hui à 10:15", content: "Moi je scan Autoscout24 Allemagne + France. Les meilleures affaires sont en Allemagne mais faut gérer l'import" },
                { user: "iSkyze", role: "student-blue", avatar: "bg-indigo-500", time: "Aujourd'hui à 11:05", content: "Merci Midou pour les conseils sur la négo ! J'ai réussi à baisser de 3K€ sur une M3 Competition 💪" },
                { user: "Malek", role: "student-yellow", avatar: "bg-orange-500", time: "Aujourd'hui à 13:40", content: "Les Porsche 911 c'est rentable aussi ? Ou trop de concurrence ?" }
            ],
            
            'fiscalité': [
                { user: "Zaid", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 10:00", content: "Pour ceux qui dépassent 100K€/an : pensez à la LLC + holding française. Optimisation fiscale légale = jusqu'à 40% d'économies 💼" },
                { user: "Betterr", role: "student-yellow", avatar: "bg-teal-500", time: "Aujourd'hui à 10:30", content: "C'est quoi la différence entre LLC New Mexico et LLC Wyoming ? Laquelle choisir ?" },
                { user: "Val", role: "student-blue", avatar: "bg-indigo-600", time: "Aujourd'hui à 10:45", content: "New Mexico = moins de paperasse et 0% d'impôts state. Wyoming c'est bien aussi mais plus de maintenance" },
                { user: "Malek", role: "student-yellow", avatar: "bg-orange-500", time: "Aujourd'hui à 11:20", content: "J'ai monté ma LLC avec le guide Focus. Super simple ! Reçu les docs en 10 jours 📄" },
                { user: "YasmineCr", role: "student-blue", avatar: "bg-pink-400", time: "Aujourd'hui à 12:15", content: "Question comptable : vous utilisez quel outil pour tracker vos dépenses ? Excel ou un soft ?" },
                { user: "Rodrygo", role: "student-yellow", avatar: "bg-red-400", time: "Aujourd'hui à 13:05", content: "Moi j'utilise Pennylane. Interface FR, synchro bancaire, nickel pour l'expert comptable ✅" }
            ],
            
            'meta-ads': [
                { user: "Zaid", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 09:15", content: "Les CBO (Campaign Budget Optimization) cartonnent en ce moment. Testez sur vos campagnes ! Je vous montre ça en détail dans le nouveau module 📊" },
                { user: "BA1MAN", role: "student-yellow", avatar: "bg-cyan-500", time: "Aujourd'hui à 09:45", content: "Mon ROAS est bloqué à 2.5x depuis 2 semaines. Des conseils pour scale ? Budget actuel : 500€/jour" },
                { user: "Jamel", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 10:00", content: "@BA1MAN Augmente progressivement (10-20%/jour max). Test de nouvelles audiences lookalike. Et refresh tes créas toutes les semaines !" },
                { user: "Malek", role: "student-blue", avatar: "bg-orange-500", time: "Aujourd'hui à 10:30", content: "Les gars quel budget minimum pour tester un produit sur Meta ? 50€/jour suffit ?" },
                { user: "Val", role: "student-yellow", avatar: "bg-indigo-600", time: "Aujourd'hui à 10:50", content: "50€/jour c'est court. Moi je pars sur 100€/jour pendant 3-5 jours mini. Après tu peux décider" },
                { user: "Redwane", role: "student-blue", avatar: "bg-blue-400", time: "Aujourd'hui à 11:35", content: "Question : vous recommandez Advantage+ ou campagnes manuelles en 2026 ?" },
                { user: "Fafull.S6", role: "student-yellow", avatar: "bg-rose-500", time: "Aujourd'hui à 12:20", content: "Advantage+ pour scale, manuel pour test. Best of both worlds 🎯" }
            ],
            
            'google-ads': [
                { user: "Jamel", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 08:45", content: "Google Ads + SEO = combo gagnant pour l'automobile. Visez les mots clés longue traîne, moins de concurrence 🎯" },
                { user: "iSkyze", role: "student-yellow", avatar: "bg-indigo-500", time: "Aujourd'hui à 09:30", content: "J'ai lancé ma première campagne Google Shopping. 1.2% de CTR, c'est bien ou pas ?" },
                { user: "Midou", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 09:45", content: "@iSkyze C'est un bon début ! Avec l'optimisation tu peux monter à 3-4%. Focus sur tes product feeds et images" },
                { user: "Mohamed951", role: "student-blue", avatar: "bg-amber-500", time: "Aujourd'hui à 10:20", content: "Les campagnes Display ça marche vraiment ? Ou juste du gaspillage de budget ?" },
                { user: "Betterr", role: "student-yellow", avatar: "bg-teal-500", time: "Aujourd'hui à 11:10", content: "Display c'est bon pour du retargeting. Pas pour de l'acquisition froide. Search >> Display" },
                { user: "Rabah", role: "student-blue", avatar: "bg-cyan-600", time: "Aujourd'hui à 12:05", content: "Merci Jamel pour le module Google Ads ! J'ai optimisé mes mots-clés et divisé mon CPC par 2 🔥" }
            ],
            
            'seo': [
                { user: "Sonny", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 07:30", content: "Le SEO c'est un marathon, pas un sprint. Mais quand ça prend, c'est du trafic gratuit à vie 🚀<br>Focus sur : contenu + backlinks + technique" },
                { user: "YasmineCr", role: "student-yellow", avatar: "bg-pink-400", time: "Aujourd'hui à 08:15", content: "Comment vous trouvez des opportunités de backlinks ? J'ai du mal à en obtenir..." },
                { user: "Val", role: "student-blue", avatar: "bg-indigo-600", time: "Aujourd'hui à 08:45", content: "Guest posting + HARO (Help A Reporter Out) + partenariats. Check le module SEO de Focus y'a tout !" },
                { user: "Malek", role: "student-yellow", avatar: "bg-orange-500", time: "Aujourd'hui à 09:30", content: "Mon site Shopify est passé de 0 à 1500 visites/mois organiques en 3 mois ! SEO FTW 📈" },
                { user: "Rodrygo", role: "student-blue", avatar: "bg-red-400", time: "Aujourd'hui à 10:50", content: "Vous utilisez quoi comme outil SEO ? Ahrefs, SEMrush, autre ?" },
                { user: "incognito", role: "student-yellow", avatar: "bg-gray-600", time: "Aujourd'hui à 11:25", content: "Ahrefs perso. Un peu cher mais ultra complet. Sinon Ubersuggest en gratuit" }
            ],
            
            'ia': [
                { user: "Sonny", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 06:30", content: "L'IA en 2026 c'est plus une option, c'est obligatoire. Claude, ChatGPT, Midjourney... Maîtrisez ces outils ou prenez du retard 🤖" },
                { user: "Rabah", role: "student-yellow", avatar: "bg-cyan-600", time: "Aujourd'hui à 07:15", content: "J'ai automatisé toutes mes descriptions produits avec Claude. Gain de temps de 10h/semaine ! 🚀" },
                { user: "YasmineCr", role: "student-blue", avatar: "bg-pink-400", time: "Aujourd'hui à 08:00", content: "C'était quoi le site IA que Sonny a utilisé pour créer les sections Shopify hier ?" },
                { user: "bmh.793", role: "student-yellow", avatar: "bg-purple-500", time: "Aujourd'hui à 08:10", content: "@YasmineCr Claude.ai ! Il a tout codé en 5 minutes c'était dingue" },
                { user: "Midou", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 09:00", content: "Pro tip : combinez ChatGPT pour les textes + Midjourney pour les visuels. Vous avez une agence créative complète 🎨" },
                { user: "Malek", role: "student-blue", avatar: "bg-orange-500", time: "Aujourd'hui à 10:30", content: "J'ai testé l'IA pour mes ads Meta. Les créas IA + copy IA = ROAS de 4.2x ! Incroyable" },
                { user: "Fafull.S6", role: "student-yellow", avatar: "bg-rose-500", time: "Aujourd'hui à 11:45", content: "Vous connaissez des bons prompts pour générer des hooks publicitaires ? Les miens sont bof..." }
            ],
            
            'dev-web': [
                { user: "Sonny", role: "founder", avatar: "bg-red-600", time: "Aujourd'hui à 08:00", content: "Vous voulez apprendre le dev ? Commencez par : HTML/CSS, puis JavaScript, puis un framework (React recommandé). Pas besoin de tout maîtriser, juste les bases 💻" },
                { user: "iSkyze", role: "student-yellow", avatar: "bg-indigo-500", time: "Aujourd'hui à 09:15", content: "Les sections Liquid Shopify c'est compliqué ou ça s'apprend vite ?" },
                { user: "bmh.793", role: "student-blue", avatar: "bg-purple-500", time: "Aujourd'hui à 09:30", content: "Avec les tutos Focus + Claude IA, tu maîtrises en 1 semaine. J'ai fait 5 sections custom cette semaine 🔥" },
                { user: "Redwane", role: "student-yellow", avatar: "bg-blue-400", time: "Aujourd'hui à 10:20", content: "Question technique : comment vous gérez les animations sur vos landing pages ? GSAP ou CSS ?" },
                { user: "Val", role: "student-blue", avatar: "bg-indigo-600", time: "Aujourd'hui à 10:45", content: "GSAP pour les animations complexes, CSS pour les simples. Check le code source des sites Focus, y'a des pépites !" },
                { user: "Mohamed951", role: "student-yellow", avatar: "bg-amber-500", time: "Aujourd'hui à 11:30", content: "Merci Sonny pour le live dev d'hier ! J'ai copié la structure, ça marche niquel 💪" }
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
            'général': 'Discussions générales, entraide et partage entre entrepreneurs',
            'annonce': 'Annonces officielles et updates de Focus Business',
            'résultats': 'Partagez vos victoires et résultats !',
            'ecommerce': 'Shopify, dropshipping, e-commerce et vente en ligne',
            'smma': 'Social Media Marketing Agency - stratégies et clients',
            'automobile': 'Achat/vente de voitures, conseils et deals',
            'fiscalité': 'LLC, optimisation fiscale, comptabilité',
            'meta-ads': 'Facebook Ads, Instagram Ads, stratégies Meta',
            'google-ads': 'Google Ads, Shopping, Display, Search',
            'seo': 'Référencement naturel, backlinks, contenu',
            'ia': 'Intelligence artificielle, ChatGPT, Claude, automatisation',
            'dev-web': 'Développement web, code, intégrations'
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
            
            // Ajouter des messages animés périodiquement pour effet "live"
            setInterval(() => {
                if (messagesContainer && messagesContainer.children.length > 0) {
                    const randomMsgs = [
                        { user: "Focus Bot", role: "founder", avatar: "bg-green-500", time: "À l'instant", content: "🔔 Nouveau membre dans le salon ! Bienvenue 👋" },
                        { user: "Alex_Trading", role: "student-blue", avatar: "bg-blue-500", time: "À l'instant", content: "Merci pour les conseils ! 🙏" },
                        { user: "Julie_Ecom", role: "student-yellow", avatar: "bg-pink-500", time: "À l'instant", content: "Je viens de faire ma première vente ! 🎉" },
                        { user: "Thomas_Ads", role: "student-blue", avatar: "bg-purple-500", time: "À l'instant", content: "ROAS de 4.2 aujourd'hui 📈🔥" }
                    ];
                    const msg = randomMsgs[Math.floor(Math.random() * randomMsgs.length)];
                    const msgElement = createMessage(msg);
                    msgElement.classList.add('discord-msg-animated');
                    messagesContainer.appendChild(msgElement);
                    setTimeout(() => msgElement.style.opacity = '1', 50);
                    messagesContainer.scrollTop = messagesContainer.scrollHeight;
                    
                    // Limiter le nombre de messages pour performance
                    while (messagesContainer.children.length > 15) {
                        messagesContainer.removeChild(messagesContainer.firstChild);
                    }
                }
            }, 5000);
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
            }, 1500);
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

        // ===== 2. META ADS - Cycling ROAS avec animation fluide =====
        const roasValues = ['2.4x', '3.1x', '4.7x', '6.2x', '8.2x'];
        let roasIndex = 4;
        let metaResults = 4240;
        
        setInterval(() => {
            roasIndex = (roasIndex + 1) % roasValues.length;
            const roasEl = document.getElementById('meta-roas');
            roasEl.style.transform = 'scale(1.2)';
            roasEl.textContent = roasValues[roasIndex];
            
            // Increment results
            metaResults += Math.floor(Math.random() * 50) + 10;
            const resultsEl = document.getElementById('meta-results');
            if(resultsEl) resultsEl.textContent = metaResults.toLocaleString('en-US');
            
            setTimeout(() => {
                roasEl.style.transform = 'scale(1)';
            }, 300);
        }, 2500);

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
        setInterval(createMatrixRain, 800);
        
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
                    terminalContent.innerHTML = '';
                    lineIndex = 0;
                    typeTerminal();
                }, 6000);
            }
        }
        typeTerminal();

        // ===== 5. SHOPIFY - Increment sales avec effet de compteur =====
        let shopifySales = 14250;
        setInterval(() => {
            const increment = Math.floor(Math.random() * 80) + 30;
            shopifySales += increment;
            const salesEl = document.getElementById('shopify-sales');
            salesEl.textContent = shopifySales.toLocaleString('fr-FR') + '€';
            
            // Bounce effect
            salesEl.style.transition = 'transform 0.3s ease';
            salesEl.style.transform = 'scale(1.1)';
            setTimeout(() => {
                salesEl.style.transform = 'scale(1)';
            }, 300);
        }, 2000);

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
        setInterval(rotateSearchQuery, 5000);

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
        setInterval(addMessage, 2500);

        // SPEAKING ANIMATION
        const speaker = document.getElementById('u1');
        setInterval(() => {
            // Randomly toggle speaking state
            if(Math.random() > 0.3) {
                speaker.classList.add('talking');
                speaker.querySelector('.avatar-ring').style.boxShadow = `0 0 0 ${Math.random() * 4 + 2}px #23a559`;
            } else {
                speaker.classList.remove('talking');
                speaker.querySelector('.avatar-ring').style.boxShadow = 'none';
            }
        }, 200);

        VanillaTilt.init(document.querySelector(".phone-mockup"), {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.2
        });
    
/* Script pricing */

        VanillaTilt.init(document.querySelector(".pricing-card"), {
            max: 2, speed: 400, glare: true, "max-glare": 0.05,
        });
    
/* Script faq */

        const data = [
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

        let busy = false;

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
            }, 600);
        }
        
        // ===== FAQ MOBILE FUNCTIONS =====
        function openFaqDrawer() {
            document.getElementById('faqDrawer').classList.add('open');
        }
        
        function closeFaqDrawer() {
            document.getElementById('faqDrawer').classList.remove('open');
        }
        
        let mobileBusy = false;
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
    // Attendre que GSAP soit chargé (defer)
    window.addEventListener('load', function() {
    // GSAP ScrollTrigger animations pour tout le site
    gsap.registerPlugin(ScrollTrigger);
    
    // Animation pour les titres de section
    gsap.utils.toArray('.section-title, h2').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
    
    // Animation pour les cartes Expert
    gsap.utils.toArray('.expert-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 0.6,
            delay: i * 0.08,
            ease: 'power2.out'
        });
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
    gsap.from('.pricing-card', {
        scrollTrigger: {
            trigger: '.pricing-card',
            start: 'top 80%'
        },
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 0.9,
        ease: 'power3.out'
    });
    
    // Animation pour la FAQ
    gsap.from('.faq-wrapper, .faq-mobile-wrapper', {
        scrollTrigger: {
            trigger: '.faq-wrapper',
            start: 'top 85%'
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: 'power2.out'
    });
    
    // Animation pour les paragraphes et textes
    gsap.utils.toArray('.networking-text p, .networking-text h2').forEach((el, i) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 90%'
            },
            opacity: 0,
            x: -30,
            duration: 0.6,
            delay: i * 0.15,
            ease: 'power2.out'
        });
    });
    
    // Animation pour les éléments avec classe "satellite"
    gsap.utils.toArray('.satellite').forEach((sat, i) => {
        gsap.from(sat, {
            scrollTrigger: {
                trigger: sat,
                start: 'top 95%'
            },
            opacity: 0,
            scale: 0,
            rotation: -20,
            duration: 0.5,
            delay: i * 0.1,
            ease: 'back.out(2)'
        });
    });
    
    // Animation pour les bulles de speech
    gsap.utils.toArray('.speech-bubble').forEach((bubble, i) => {
        gsap.from(bubble, {
            scrollTrigger: {
                trigger: bubble,
                start: 'top 90%'
            },
            opacity: 0,
            scale: 0.8,
            y: 20,
            duration: 0.5,
            delay: i * 0.15,
            ease: 'power2.out'
        });
    });
    
    }); // Fin window.addEventListener('load')
