/* Hatnova · kyc */
(function(){
  var $=HN.$,$$=HN.$$,E=HN.esc;
  var who="pp",pep="non",files={};
  function go(n){$$(".k").forEach(function(k){k.classList.add("hidden");});$("#k"+n).classList.remove("hidden");$$("#bar span").forEach(function(s,i){s.classList.toggle("on",i<Math.min(n,4));});}
  $$("[data-next]").forEach(function(b){b.onclick=function(){go(+b.dataset.next);};});
  function single(g,cb){$$(g+" .opt").forEach(function(b){b.onclick=function(){$$(g+" .opt").forEach(function(x){x.classList.remove("on")});b.classList.add("on");cb(b.dataset.v);};});}
  single("#who",function(v){who=v;$("#soc").classList.toggle("hidden",v!=="pm");});
  single("#pep",function(v){pep=v;});
  $$(".file").forEach(function(f){f.onclick=function(){files[f.dataset.f]=1;f.classList.add("ok");f.querySelector(".tick").className="tick ok";f.querySelector(".tick").textContent="✓";
    f.lastElementChild.textContent+=" · ajouté";f.onclick=null;$("#n3").disabled=!(files.id&&files.dom);$("#n4").disabled=!files.fonds;};});
  $("#decl").onchange=function(){$("#submitK").disabled=!this.checked;};
  var D=[
    {n:"A. Rossi",b:"Villa · Belair",c:[1,1,1,1,1],v:"Standard",ok:"12/11/2026 · 10:42"},
    {n:"Holding Exemple S.A.",b:"Immeuble · Gare",c:[1,1,0,1,0],v:"Renforcée",why:"Société · bénéficiaire effectif à confirmer"},
    {n:"M. & Mme Duarte",b:"Maison · Strassen",c:[1,0,1,1,1],v:"Standard"}
  ];
  var L=["Identification du client","Justificatif de domicile","Origine des fonds","Déclaration PPE","Bénéficiaire effectif"];
  var cur=0;
  function rList(){$("#dos").innerHTML=D.map(function(d,i){var full=d.c.every(function(x){return x;});
    return '<div class="li'+(i===cur?" sel":"")+'" data-i="'+i+'"><div class="grow"><b>'+E(d.n)+'</b><small>'+E(d.b)+' · vigilance '+E(d.v.toLowerCase())+'</small></div>'+(d.ok?'<span class="chip green">Vérifié</span>':full?'<span class="chip amber">À vérifier</span>':'<span class="chip red">Incomplet</span>')+'</div>';}).join("");
    $$("#dos .li").forEach(function(r){r.onclick=function(){cur=+r.dataset.i;rList();rDet();};});}
  function rDet(){var d=D[cur],full=d.c.every(function(x){return x;});
    $("#detail").innerHTML='<div class="eyebrow">Dossier</div><h3 style="font-size:18px;margin:4px 0 2px">'+E(d.n)+'</h3><p class="xs muted">'+E(d.b)+'</p>'+
      '<p class="small" style="margin:8px 0">Vigilance proposée : <span class="chip '+(d.v==="Renforcée"?"red":"ghost")+'">'+E(d.v)+'</span>'+(d.why?'<br><span class="xs muted">'+E(d.why)+'</span>':'')+'</p>'+
      L.map(function(l,i){return '<div class="doc"><span class="tick '+(d.c[i]?"ok":"wait")+'">'+(d.c[i]?"✓":"!")+'</span>'+l+'</div>';}).join("")+
      '<div class="divider" style="margin:10px 0"></div>'+
      (d.ok?'<p class="small"><b>Vérifié et signé</b> par le responsable LBC/FT<br><span class="xs muted">'+E(d.ok)+'</span></p><button class="btn btn-navy btn-sm" id="exp" style="margin-top:8px">Exporter pour contrôle AED</button>'
        :full?'<button class="btn btn-gold btn-sm" id="sign">Valider et signer (responsable LBC/FT)</button>':'<button class="btn btn-ghost btn-sm" id="rem">Relancer l’acheteur</button>');
    var s=$("#sign");if(s)s.onclick=function(){d.ok=HN.now();$("#kOk").textContent=+$("#kOk").textContent+1;rList();rDet();HN.toast("Dossier vérifié, horodaté et signé.");};
    var e=$("#exp");if(e)e.onclick=function(){HN.toast("Export PDF + pièces pour l’AED (dans le module réel).");};
    var r=$("#rem");if(r)r.onclick=function(){HN.toast("Rappel envoyé à l’acheteur avec son lien sécurisé.");};}
  $("#submitK").onclick=function(){
    D.unshift({n:$("#kn").value||"Acheteur",b:"Penthouse · Limpertsberg",c:[1,1,1,1,who==="pm"?1:1],v:(pep==="oui"||who==="pm")?"Renforcée":"Standard",why:pep==="oui"?"Déclaration PPE positive":(who==="pm"?"Acquisition via société":"Fonds : "+$("#src").value.toLowerCase())});
    cur=0;$("#kAll").textContent=+$("#kAll").textContent+1;rList();rDet();go(5);HN.toast("Dossier reçu. Passez en Vue agence.");};
  rList();rDet();
})();
