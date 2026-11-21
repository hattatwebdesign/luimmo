/* Hatnova · integration-apimo */
(function(){
  var $=HN.$,$$=HN.$$,E=HN.esc;
  var H={
    1:{m:"Module 1 · Estimation propriétaire",w:"Bouton doré dans le menu principal et sur la page d’accueil",h:"Niveau 1 (lien) ou 2 (formulaire intégré)",d:"Défis 1 + 2",u:"../estimation/index.html"},
    2:{m:"Module 2 · Off-market & NDA",w:"Entrée de menu « Club privé »",h:"Niveau 1 + 3 (biens off-market repris d’Apimo, non publiés sur les portails)",d:"Défis 3 + 4",u:"../off-market/index.html"},
    3:{m:"Module 3 · Portail propriétaire",w:"Entrée « Espace propriétaire » ; accès personnel envoyé à chaque vendeur",h:"Niveau 1 (connexion sécurisée)",d:"Défis 1 + 2",u:"../portail-proprietaire/index.html"},
    4:{m:"Module 4 · Assistant IA",w:"Bulle de discussion en bas à droite, sur toutes les pages",h:"Niveau 2 (une ligne de code) ou lien depuis Contact",d:"Soulage 1 à 6",u:"../assistant-ia/index.html"},
    5:{m:"Module 5 · Rapport de marché",w:"Bannière sur l’accueil et dans « Actualités »",h:"Niveau 1 (bannière + lien)",d:"Défis 1 + 2",u:"../rapport-marche/index.html"},
    6:{m:"Module 6 · Page premium du bien",w:"Badge « Page premium » sur vos biens d’exception, lien depuis la fiche Apimo",h:"Niveau 3 (données synchronisées depuis Apimo)",d:"Défis 3 + 6",u:"../page-premium/index.html"},
    7:{m:"Module 7 · Onboarding KYC",w:"Pas visible sur le site : lien sécurisé envoyé à l’acheteur au moment de l’offre",h:"Indépendant du site",d:"Défi 5",u:"../kyc/index.html"}
  };
  function show(k){var h=H[k];$$(".hs").forEach(function(x){x.classList.toggle("on",x.dataset.h==k);});
    $("#info").innerHTML='<div class="eyebrow">Point '+k+'</div><h3>'+h.m+'</h3><dl><dt>Où</dt><dd>'+h.w+'</dd><dt>Comment</dt><dd>'+h.h+'</dd><dt>Résout</dt><dd>'+h.d+'</dd></dl><a class="btn btn-navy btn-sm" href="'+h.u+'">Ouvrir la démo →</a>';}
  $$(".hs").forEach(function(x){x.onclick=function(){show(x.dataset.h);};});
  $$("#ba button").forEach(function(b){b.onclick=function(){$$("#ba button").forEach(function(x){x.classList.remove("on")});b.classList.add("on");
    $("#frame").className="browser "+b.dataset.m;
    if(b.dataset.m==="before")$("#info").innerHTML='<div class="eyebrow">Aujourd’hui</div><h3>Un site vitrine</h3><p class="small" style="margin-top:6px">Les biens sont présentés, mais le site ne crée ni mandats, ni contacts qualifiés. La plupart des acheteurs passent par les portails.</p><p class="small" style="margin-top:8px">Cliquez sur <b>Avec Hatnova</b> pour voir les points d’intégration.</p>';
    else show(1);};});
  show(1);
})();
