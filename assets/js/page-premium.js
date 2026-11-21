/* Hatnova · page-premium */
(function(){
  var $=HN.$,$$=HN.$$,E=HN.esc;
  function scene(k){
    var sky='<defs><linearGradient id="s'+k+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c9d7e8"/><stop offset="1" stop-color="#f3e6cc"/></linearGradient></defs>';
    if(k===0) return '<svg viewBox="0 0 600 260" preserveAspectRatio="xMidYMid slice">'+sky+'<rect width="600" height="260" fill="url(#s0)"/><rect x="0" y="200" width="600" height="60" fill="#6f8f5a"/><rect x="120" y="90" width="360" height="115" fill="#f4efe6"/><rect x="100" y="80" width="400" height="12" fill="#2b2f3a"/><rect x="300" y="40" width="180" height="50" fill="#ece5d8"/><rect x="290" y="34" width="200" height="8" fill="#2b2f3a"/><g fill="#3a5683"><rect x="140" y="110" width="70" height="95"/><rect x="225" y="110" width="70" height="95"/><rect x="320" y="52" width="140" height="30"/><rect x="390" y="110" width="70" height="60"/></g><rect x="40" y="150" width="14" height="55" fill="#5d4a35"/><circle cx="47" cy="140" r="32" fill="#58784a"/><circle cx="545" cy="150" r="26" fill="#58784a"/><rect x="538" y="160" width="12" height="45" fill="#5d4a35"/></svg>';
    if(k===1) return '<svg viewBox="0 0 600 260" preserveAspectRatio="xMidYMid slice"><rect width="600" height="260" fill="#efe7da"/><rect x="0" y="190" width="600" height="70" fill="#c9b79a"/><rect x="330" y="30" width="230" height="150" fill="#bcd0e2"/><line x1="445" y1="30" x2="445" y2="180" stroke="#efe7da" stroke-width="6"/><rect x="60" y="150" width="210" height="45" rx="10" fill="#2c3b5e"/><rect x="60" y="130" width="210" height="28" rx="10" fill="#36497a"/><rect x="110" y="200" width="120" height="10" fill="#8a6d4b"/><circle cx="520" cy="200" r="20" fill="#58784a"/><rect x="80" y="40" width="120" height="70" fill="#d9c7a3" stroke="#b39969" stroke-width="4"/></svg>';
    if(k===2) return '<svg viewBox="0 0 600 260" preserveAspectRatio="xMidYMid slice">'+sky+'<rect width="600" height="260" fill="url(#s2)"/><rect x="0" y="150" width="600" height="110" fill="#7b9b62"/><rect x="200" y="170" width="220" height="60" rx="6" fill="#7fb3d1"/><circle cx="90" cy="120" r="45" fill="#58784a"/><circle cx="510" cy="110" r="55" fill="#4f6d42"/><rect x="430" y="170" width="60" height="8" fill="#e8dcc4"/><rect x="100" y="200" width="70" height="10" fill="#e8dcc4"/></svg>';
    return '<svg viewBox="0 0 600 260" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="s3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e7b98a"/><stop offset="1" stop-color="#f5e3c6"/></linearGradient></defs><rect width="600" height="260" fill="url(#s3)"/><path d="M0 170 L80 140 L170 160 L260 120 L360 150 L450 125 L600 160 L600 260 L0 260Z" fill="#7d8f6c"/><path d="M0 200 L120 185 L260 205 L400 180 L600 205 L600 260 L0 260Z" fill="#5f7552"/><circle cx="470" cy="70" r="26" fill="#f6d39a"/><rect x="0" y="235" width="600" height="25" fill="#d8ccb6"/></svg>';
  }
  var T={
   fr:{tag:"EXCLUSIVITÉ",title:"Villa contemporaine et jardin paysager",place:"Kockelscheuer · à 8 min du centre de Luxembourg",priceL:"Prix",facts:[["Surface","380 m²"],["Terrain","9 ares"],["Chambres","5"],["Énergie","A / A"],["Garage","3 places"]],
       desc:"Architecture lumineuse en lisière de forêt, séjour de 90 m² ouvert sur le jardin, piscine chauffée, suite parentale avec dressing. Disponible à l’acte.",v360:"Visite virtuelle 360°",exp:"Télécharger l’exposé",share:"Partager",expH:"Recevoir l’exposé complet (PDF)",name:"Nom",send:"Envoyer l’exposé",ok:"L’exposé vous a été envoyé par e-mail.",thumbs:["Façade","Séjour","Jardin","Vue"]},
   de:{tag:"EXKLUSIV",title:"Moderne Villa mit Landschaftsgarten",place:"Kockelscheuer · 8 Min. vom Zentrum Luxemburgs",priceL:"Preis",facts:[["Wohnfläche","380 m²"],["Grundstück","9 Ar"],["Schlafzimmer","5"],["Energie","A / A"],["Garage","3 Plätze"]],
       desc:"Lichtdurchflutete Architektur am Waldrand, 90 m² Wohnbereich mit Gartenzugang, beheizter Pool, Elternsuite mit Ankleide. Bezugsfrei zum Notartermin.",v360:"360°-Rundgang",exp:"Exposé herunterladen",share:"Teilen",expH:"Vollständiges Exposé erhalten (PDF)",name:"Name",send:"Exposé senden",ok:"Das Exposé wurde Ihnen per E-Mail gesendet.",thumbs:["Fassade","Wohnen","Garten","Ausblick"]},
   en:{tag:"EXCLUSIVE",title:"Contemporary villa with landscaped garden",place:"Kockelscheuer · 8 min from Luxembourg City centre",priceL:"Price",facts:[["Living area","380 m²"],["Plot","9 ares"],["Bedrooms","5"],["Energy","A / A"],["Garage","3 spaces"]],
       desc:"Light-filled architecture at the edge of the forest, 90 m² living room opening onto the garden, heated pool, master suite with dressing room. Available on completion.",v360:"360° virtual tour",exp:"Download brochure",share:"Share",expH:"Get the full brochure (PDF)",name:"Name",send:"Send brochure",ok:"The brochure has been sent to your inbox.",thumbs:["Façade","Living","Garden","View"]},
   pt:{tag:"EXCLUSIVO",title:"Moradia contemporânea com jardim paisagístico",place:"Kockelscheuer · a 8 min do centro do Luxemburgo",priceL:"Preço",facts:[["Área","380 m²"],["Terreno","9 ares"],["Quartos","5"],["Energia","A / A"],["Garagem","3 lugares"]],
       desc:"Arquitetura luminosa junto à floresta, sala de 90 m² aberta para o jardim, piscina aquecida, suite com closet. Disponível na escritura.",v360:"Visita virtual 360°",exp:"Descarregar o dossiê",share:"Partilhar",expH:"Receber o dossiê completo (PDF)",name:"Nome",send:"Enviar o dossiê",ok:"O dossiê foi enviado para o seu e-mail.",thumbs:["Fachada","Sala","Jardim","Vista"]}
  };
  var lang="fr",cur=0;
  function hero(k){cur=k;var h=$("#hero");var old=h.querySelector("svg");if(old)old.remove();h.insertAdjacentHTML("afterbegin",scene(k));$$("#thumbs button").forEach(function(b,i){b.classList.toggle("on",i===k);});}
  function apply(){var t=T[lang];$("#tTag").textContent=t.tag;$("#tTitle").textContent=t.title;$("#tPlace").textContent=t.place;$("#tPriceL").textContent=t.priceL;$("#tDesc").textContent=t.desc;
    $("#facts").innerHTML=t.facts.map(function(f){return "<div><small>"+f[0]+"</small><b>"+f[1]+"</b></div>";}).join("");
    $("#b360").textContent="◎ "+t.v360;$("#bExp").textContent="↓ "+t.exp;$("#bShare").textContent="↗ "+t.share;$("#tExpH").textContent=t.expH;$("#tNameL").textContent=t.name;$("#tSend").textContent=t.send;$("#tOk").textContent=t.ok;
    $$("#thumbs button").forEach(function(b,i){b.title=t.thumbs[i];b.setAttribute("aria-label",t.thumbs[i]);});}
  $("#thumbs").innerHTML=[0,1,2,3].map(function(k){return '<button data-k="'+k+'">'+scene(k).replace(/id="s(\d)"/,'id="t$1"').replace(/url\(#s(\d)\)/,"url(#t$1)")+'</button>';}).join("");
  $$("#thumbs button").forEach(function(b){b.onclick=function(){hero(+b.dataset.k);};});
  $$("#langs button").forEach(function(b){b.onclick=function(){$$("#langs button").forEach(function(x){x.classList.remove("on")});b.classList.add("on");lang=b.dataset.l;apply();};});
  $("#bExp").onclick=function(){$("#expForm").classList.remove("hidden");$("#expOk").classList.add("hidden");};
  $("#bShare").onclick=function(){var u="https://www.example.com/villa-kockelscheuer";try{navigator.clipboard.writeText(u).then(function(){HN.toast("Lien copié : à partager sur Instagram, LinkedIn ou WhatsApp.");},function(){HN.toast(u);});}catch(e){HN.toast(u);}};
  var leads=[{n:"P. Martin",s:"Instagram",t:"Exposé téléchargé · FR"},{n:"K. Schneider",s:"Newsletter",t:"Demande de visite · DE"}];
  function rLeads(){$("#leads").innerHTML=leads.map(function(l){return '<div class="li'+(l.isNew?" pulse":"")+'"><div class="grow"><b>'+E(l.n)+'</b><small>'+E(l.t)+'</small></div><span class="chip '+(l.s==="atHome"?"ghost":"green")+'">'+E(l.s)+'</span></div>';}).join("");}
  var src=[["Site / lien direct",31],["Instagram / LinkedIn",21],["Newsletter acheteurs",17],["Recommandation",7],["atHome",24]];
  function rSrc(){var tot=src.reduce(function(a,b){return a+b[1];},0);$("#srcs").innerHTML=src.map(function(s){return '<div class="src'+(s[0]==="atHome"?" portal":"")+'"><span>'+s[0]+'</span><div class="progress"><i style="width:'+Math.round(s[1]/tot*100)+'%"></i></div><b>'+Math.round(s[1]/tot*100)+' %</b></div>';}).join("");
    $("#direct").textContent=Math.round((tot-src[4][1])/tot*100)+" %";}
  $("#expForm").addEventListener("submit",function(e){e.preventDefault();$("#expForm").classList.add("hidden");$("#expOk").classList.remove("hidden");
    leads.forEach(function(l){l.isNew=false;});leads.unshift({n:$("#en").value||"Contact",s:"Site / lien direct",t:"Exposé téléchargé · "+lang.toUpperCase()+" · "+HN.time(),isNew:true});rLeads();src[0][1]++;rSrc();
    $("#kExp").textContent=+$("#kExp").textContent+1;HN.toast("Nouveau contact direct, sans portail. Voir la Vue agence.");});
  var objs=[["Villa · Kockelscheuer",true],["Penthouse · Limpertsberg",true],["Maison · Strassen",false],["Appartement · Belair",false]];
  function rObjs(){$("#objs").innerHTML=objs.map(function(o,i){return '<div class="li"><div class="grow"><b>'+o[0]+'</b><small>'+(o[1]?"Page premium en ligne · 4 langues":"Fiche Apimo uniquement")+'</small></div><label class="check xs"><input type="checkbox" data-i="'+i+'"'+(o[1]?" checked":"")+'> Publier</label></div>';}).join("");
    $$("#objs input").forEach(function(c){c.onchange=function(){objs[+c.dataset.i][1]=c.checked;rObjs();HN.toast(c.checked?"Page premium générée depuis les données Apimo.":"Page premium retirée.");};});}
  // visite virtuelle
  var rooms=[1,3],drag=null,off=0;
  function pano(r){var svg=scene(rooms[r]).replace('viewBox="0 0 600 260"','viewBox="0 0 1200 260"').replace('preserveAspectRatio="xMidYMid slice"','');
    var dup=scene(rooms[r]).replace(/<\/?svg[^>]*>/g,"").replace(/id="s(\d)"/,'id="p$1"').replace(/url\(#s(\d)\)/,"url(#p$1)");
    svg=svg.replace("</svg>",'<g transform="translate(600 0)">'+dup+'</g></svg>');$("#pano").innerHTML=svg;off=0;}
  $("#b360").onclick=function(){$("#m360").classList.remove("hidden");pano(0);};
  $("#close360").onclick=function(){$("#m360").classList.add("hidden");};
  $("#m360").addEventListener("click",function(e){if(e.target.id==="m360")$("#m360").classList.add("hidden");});
  $$("#rooms .opt").forEach(function(b){b.onclick=function(){$$("#rooms .opt").forEach(function(x){x.classList.remove("on")});b.classList.add("on");pano(+b.dataset.r);};});
  var P=$("#pano");
  P.addEventListener("pointerdown",function(e){drag=e.clientX;P.setPointerCapture(e.pointerId);});
  P.addEventListener("pointermove",function(e){if(drag===null)return;var svg=P.querySelector("svg");var w=svg.getBoundingClientRect().width/2;off=Math.max(-w,Math.min(0,off+(e.clientX-drag)));drag=e.clientX;svg.style.transform="translateX("+off+"px)";});
  P.addEventListener("pointerup",function(){drag=null;});
  hero(0);apply();rLeads();rSrc();rObjs();
})();
