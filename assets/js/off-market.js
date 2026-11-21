/* Hatnova · off-market */
(function(){
  var $=HN.$,$$=HN.$$,E=HN.esc;
  function pic(c1,c2,kind){
    var b = kind==="villa" ? '<rect x="50" y="62" width="200" height="70" fill="#f1ece2"/><rect x="40" y="56" width="220" height="10" fill="#2b2f3a"/><rect x="70" y="78" width="40" height="34" fill="#3a5683"/><rect x="125" y="78" width="40" height="34" fill="#3a5683"/><rect x="180" y="78" width="50" height="54" fill="#3a5683"/><rect x="0" y="132" width="300" height="30" fill="#6f8f5a"/>'
      : kind==="hp" ? '<rect x="70" y="30" width="160" height="110" fill="#e9dfcf"/><polygon points="60,32 150,8 240,32" fill="#4a4f5c"/><g fill="#3a5683"><rect x="90" y="48" width="22" height="30"/><rect x="139" y="48" width="22" height="30"/><rect x="188" y="48" width="22" height="30"/><rect x="90" y="92" width="22" height="30"/><rect x="188" y="92" width="22" height="30"/></g><rect x="137" y="96" width="26" height="44" fill="#5c3b2a"/><rect x="0" y="140" width="300" height="22" fill="#9aa08d"/>'
      : '<rect x="60" y="40" width="180" height="90" fill="#f4efe6"/><rect x="50" y="36" width="200" height="8" fill="#2b2f3a"/><g fill="#3a5683"><rect x="75" y="55" width="30" height="58"/><rect x="115" y="55" width="30" height="58"/><rect x="155" y="55" width="30" height="58"/><rect x="195" y="55" width="30" height="58"/></g><rect x="200" y="20" width="60" height="16" fill="#6f8f5a" rx="6"/><rect x="0" y="130" width="300" height="32" fill="#b9b2a2"/>';
    return '<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g'+kind+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+c1+'"/><stop offset="1" stop-color="'+c2+'"/></linearGradient></defs><rect width="300" height="160" fill="url(#g'+kind+')"/>'+b+'</svg>';
  }
  var lots=[
    {t:"Penthouse · Limpertsberg",d:"285 m² · terrasse 120 m²",k:"ph",c:["#cfd9e6","#efe2c8"],main:true},
    {t:"Villa · Belair",d:"520 m² · terrain 14 ares",k:"villa",c:["#d6e0ea","#f2e6cf"]},
    {t:"Hôtel particulier · Ville-Haute",d:"410 m² · classé",k:"hp",c:["#d3dbe4","#ece0ca"]}
  ];
  var L=$("#lots");
  lots.forEach(function(x,i){
    var d=document.createElement("div");d.className="lot locked";d.id="lot"+i;
    d.innerHTML='<div class="pic">'+pic(x.c[0],x.c[1],x.k)+'<span class="lock">🔒 OFF-MARKET</span></div><div class="body"><h4>'+x.t+'</h4><span class="xs muted">'+x.d+' · prix sur demande</span><button class="btn btn-navy btn-sm" data-i="'+i+'">Demander l’accès</button></div>';
    L.appendChild(d);
  });
  $$("#lots button").forEach(function(b){b.addEventListener("click",function(){
    if(+b.dataset.i!==0){HN.toast("Dans la démo, essayez le penthouse.");return;}
    $("#flow").classList.remove("hidden");$("#flow").scrollIntoView({behavior:"smooth",block:"nearest"});
  });});
  function step(n){[1,2,3,4].forEach(function(i){$("#st"+i).classList.toggle("hidden",i!==n);});[1,2,3].forEach(function(i){$("#s"+i).classList.toggle("on",i<=n);});}
  var logs=[["12/11 09:14","Acheteur A-117 · NDA signé"],["12/11 09:16","Acheteur A-117 · preuve de financement reçue"],["12/11 10:02","Acheteur A-117 · accès accordé par l’agent"]];
  function log(t){logs.push([HN.now().split(" · ")[1]+" ",t]);renderLog();}
  function renderLog(){$("#log").innerHTML=logs.map(function(l){return "<div><b>"+E(l[0])+"</b> "+E(l[1])+"</div>";}).join("");$("#log").scrollTop=1e4;}
  var buyer=null, budget="2 – 3 Mio. €", proof=false;
  $("#go2").addEventListener("click",function(){buyer=$("#bName").value||"Acheteur";$("#ndaSig").placeholder=buyer;step(2);log(buyer+" · inscription au club privé");});
  function chk(){$("#go3").disabled=!($("#ndaRead").checked&&$("#ndaSig").value.trim().length>2);}
  $("#ndaRead").addEventListener("change",chk);$("#ndaSig").addEventListener("input",chk);
  $("#go3").addEventListener("click",function(){log(buyer+" · NDA signé électroniquement (horodaté)");step(3);});
  $$("#budOpts .opt").forEach(function(b){b.addEventListener("click",function(){$$("#budOpts .opt").forEach(function(x){x.classList.remove("on")});b.classList.add("on");budget=b.dataset.v;});});
  function addProof(){proof=true;$("#fileBox").classList.add("ok");$("#fileBox .tick").className="tick ok";$("#fileBox .tick").textContent="✓";$("#fileTxt").textContent="attestation_banque.pdf · ajoutée";$("#sendReq").disabled=false;}
  $("#fileBox").addEventListener("click",addProof);$("#fileBox").addEventListener("keydown",function(e){if(e.key==="Enter")addProof();});
  var reqs=[{n:"Acheteur A-117",b:"2 – 3 Mio. € · fonds propres",ok:[1,1,1],st:"Validé"},{n:"Acheteur A-121",b:"1 – 2 Mio. € · prêt en cours",ok:[1,1,0],st:"Incomplet"}];
  $("#sendReq").addEventListener("click",function(){
    log(buyer+" · preuve de financement reçue ("+$("#fin").value+")");
    reqs.unshift({n:buyer,b:budget+" · "+$("#fin").value.toLowerCase(),ok:[1,1,1],st:"À valider",isNew:true});
    renderReqs();step(4);$("#kWait").textContent=2;HN.toast("Demande transmise. Passez en Vue agence pour valider.");
  });
  function renderReqs(){
    var l=$("#reqList");l.innerHTML="";
    reqs.forEach(function(r,i){
      var t=function(v,lab){return '<span title="'+lab+'" class="tick '+(v?"ok":"wait")+'">'+(v?"✓":"…")+'</span>';};
      var chip=r.st==="Validé"?'<span class="chip green">Validé</span>':r.st==="À valider"?'<span class="chip amber">À valider</span>':r.st==="Refusé"?'<span class="chip red">Refusé</span>':'<span class="chip ghost">Incomplet</span>';
      var d=document.createElement("div");d.className="li"+(r.isNew?" pulse":"");
      d.innerHTML='<div class="grow"><b>'+E(r.n)+'</b><small>'+E(r.b)+'</small></div><span class="xs muted">ID</span>'+t(r.ok[0],"Identité")+'<span class="xs muted">NDA</span>'+t(r.ok[1],"NDA")+'<span class="xs muted">Fin.</span>'+t(r.ok[2],"Financement")+chip+
        (r.st==="À valider"?' <button class="btn btn-navy btn-sm" data-a="ok" data-i="'+i+'">Valider</button><button class="btn btn-ghost btn-sm" data-a="no" data-i="'+i+'">Refuser</button>':'');
      l.appendChild(d);
    });
    $$("#reqList button").forEach(function(b){b.addEventListener("click",function(){
      var r=reqs[+b.dataset.i];
      if(b.dataset.a==="ok"){r.st="Validé";$("#kVer").textContent=24;log(r.n+" · accès accordé · dossier envoyé");
        $("#lot0").classList.remove("locked");$("#lot0 .lock").textContent="✓ ACCÈS ACCORDÉ";$("#flow").classList.add("hidden");$("#unlocked").classList.remove("hidden");
        HN.toast("Acheteur validé. Repassez en Vue acheteur : le bien est débloqué.");}
      else{r.st="Refusé";log(r.n+" · accès refusé");HN.toast("Demande refusée. L’acheteur est informé poliment.");}
      $("#kWait").textContent=1;r.isNew=false;renderReqs();
    });});
  }
  renderReqs();renderLog();
})();
