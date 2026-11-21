/* Hatnova · portail-proprietaire */
(function(){
  var $=HN.$,$$=HN.$$,E=HN.esc;
  var feed=[
    {d:"Jeu.",t:"Offre reçue",s:"3 150 000 € · financement confirmé · à discuter vendredi 11:00"},
    {d:"Mar.",t:"Visite de M. & Mme D.",s:"Très bon retour sur la lumière ; trouvent le prix élevé pour les travaux de cuisine"},
    {d:"Lun.",t:"Preuve de financement",s:"Acheteur A-117 · vérifiée par l’agence"},
    {d:"Sam.",t:"Publication premium",s:"Page du bien en ligne en 4 langues · 412 vues"}
  ];
  var pf=[1,1,3];
  var docs=[["Extrait cadastral",1],["Plans",1],["Certificat de performance énergétique",1],["Acte de base / règlement de copropriété",0]];
  function rFeed(){$("#feed").innerHTML=feed.map(function(f){return '<div class="it'+(f.n?" new":"")+'"><span class="d">'+E(f.d)+'</span><div><b>'+E(f.t)+'</b><small>'+E(f.s)+'</small></div></div>';}).join("");}
  function rPf(){var tot=pf[0]+pf[1]+pf[2],lab=["Attractif","Juste","Élevé"];$("#pfb").innerHTML=pf.map(function(v,i){return '<div class="pricefb"><span>'+lab[i]+'</span><div class="progress'+(i===2?" hi":"")+'"><i style="width:'+Math.round(v/tot*100)+'%"></i></div><b>'+v+'</b></div>';}).join("");}
  function rDocs(){$("#docs").innerHTML=docs.map(function(d,i){return '<div class="doc"><span class="tick '+(d[1]?"ok":"wait")+'">'+(d[1]?"✓":"!")+'</span><span class="g">'+E(d[0])+'</span>'+(d[1]?'':'<button class="btn btn-navy btn-sm" data-up="'+i+'">Déposer</button>')+'</div>';}).join("");
    $$("#docs [data-up]").forEach(function(b){b.addEventListener("click",function(){docs[+b.dataset.up][1]=1;rDocs();HN.toast("Document déposé. L’agence est notifiée.");});});}
  var type="Visite",pv=2;
  function single(g,cb){$$(g+" .opt").forEach(function(b){b.addEventListener("click",function(){$$(g+" .opt").forEach(function(x){x.classList.remove("on")});b.classList.add("on");cb(b.dataset.v);});});}
  single("#typeOpts",function(v){type=v;$("#pfField").classList.toggle("hidden",v!=="Visite");
    $("#txt").value=v==="Offre"?"Nouvelle offre écrite : 3 220 000 €, sous condition de financement (accord de principe joint).":v==="Info"?"Le reportage photo du jardin est en ligne. Envoi de la sélection aux 9 acheteurs vérifiés ce soir.":"Visite de la famille N. : coup de cœur pour le jardin, deuxième visite souhaitée avec l’architecte.";});
  single("#pfOpts",function(v){pv=+v;});
  $("#upd").addEventListener("submit",function(e){e.preventDefault();
    feed.forEach(function(f){f.n=false;});
    var title=type==="Visite"?"Nouvelle visite":type==="Offre"?"Nouvelle offre":"Information";
    feed.unshift({d:"Auj.",t:title,s:$("#txt").value,n:true});
    if(type==="Visite"){pf[pv]++;$("#kVis").textContent=+$("#kVis").textContent+1;}
    rFeed();rPf();$("#kCalls").textContent=+$("#kCalls").textContent+1;
    HN.toast("Publié. Le vendeur reçoit une notification (Vue propriétaire).");});
  $$("[data-doc]").forEach(function(b){b.addEventListener("click",function(){docs.push([b.dataset.doc,0]);rDocs();b.disabled=true;HN.toast("Document demandé au vendeur.");});});
  $("#send").addEventListener("click",function(){var m=$("#msg").value.trim();if(!m)return;
    $("#inbox").innerHTML='<div style="color:var(--ink)"><b>Famille R.</b> · '+HN.time()+'<br>'+E(m)+'</div>';$("#kMsg").textContent=1;$("#msg").value="";HN.toast("Message envoyé à votre agent.");});
  rFeed();rPf();rDocs();
})();
