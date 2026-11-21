/* Hatnova · estimation */
(function(){
  var $=HN.$,$$=HN.$$,E=HN.esc;
  var prices={ "Luxembourg-Belair":[13500,13800],"Luxembourg-Limpertsberg":[13400,14200],"Luxembourg-Kirchberg":[12600,13500],"Luxembourg-Merl":[12900,14000],
    "Strassen":[11200,11900],"Bertrange":[10800,11600],"Kockelscheuer":[10900,12100],"Howald":[10200,11000] };
  var mode="range", type="villa", slot="Cette semaine", last=null;
  var leads=[
    {n:"M. & Mme Schmit",d:"Maison · Strassen · 260 m²",r:"3,0 – 3,5 Mio. €",s:"Semaine prochaine",st:"RDV planifié"},
    {n:"Mme Da Silva",d:"Penthouse · Kirchberg · 185 m²",r:"2,6 – 3,0 Mio. €",s:"Cette semaine",st:"Nouveau"}
  ];
  function fill(){
    var sel=$("#commune"); sel.innerHTML="";
    Object.keys(prices).forEach(function(k){var o=document.createElement("option");o.textContent=k;sel.appendChild(o);});
    var tb=$("#priceTable tbody"); tb.innerHTML="";
    Object.keys(prices).forEach(function(k,i){
      var tr=document.createElement("tr");
      tr.innerHTML="<td>"+k+"</td><td class='num'><input class='input' type='number' step='100' data-k='"+k+"' data-i='0' value='"+prices[k][0]+"'></td><td class='num'><input class='input' type='number' step='100' data-k='"+k+"' data-i='1' value='"+prices[k][1]+"'></td>";
      tb.appendChild(tr);
    });
    $$("#priceTable input").forEach(function(inp){inp.addEventListener("change",function(){prices[inp.dataset.k][+inp.dataset.i]=+inp.value||0;HN.toast("Grille mise à jour : "+inp.dataset.k);});});
  }
  function single(group,cb){ $$(group+" .opt").forEach(function(b){b.addEventListener("click",function(){$$(group+" .opt").forEach(function(x){x.classList.remove("on")});b.classList.add("on");cb(b.dataset.v);});}); }
  single("#typeOpts",function(v){type=v;$("#terrField").classList.toggle("hidden",v==="appartement"||v==="penthouse");});
  single("#slotOpts",function(v){slot=v;});
  $$("#extraOpts .opt").forEach(function(b){b.addEventListener("click",function(){b.classList.toggle("on");});});
  $$("#modeSeg button").forEach(function(b){b.addEventListener("click",function(){$$("#modeSeg button").forEach(function(x){x.classList.remove("on")});b.classList.add("on");mode=b.dataset.m;HN.toast(mode==="range"?"Le propriétaire voit une fourchette indicative.":"Le propriétaire voit uniquement une demande de rappel.");});});

  function mio(v){ return v>=1e6 ? (v/1e6).toLocaleString("fr-FR",{minimumFractionDigits:1,maximumFractionDigits:2})+" Mio. €" : HN.eur(Math.round(v/1000)*1000); }
  $("#estForm").addEventListener("submit",function(e){
    e.preventDefault();
    var c=$("#commune").value, s=Math.max(30,+$("#surf").value||0), house=(type==="maison"||type==="villa");
    var base=prices[c][house?1:0]*s;
    var f={appartement:1,penthouse:1.12,maison:1,villa:1.08}[type]*(+$("#etat").value);
    var extras=$$("#extraOpts .opt.on").length*0.025;
    var land=house?Math.min(0.15,Math.max(0,(+$("#ares").value-5)*0.01)):0;
    var v=base*f*(1+extras+land), lo=Math.round(v*0.93/50000)*50000, hi=Math.round(v*1.07/50000)*50000;
    last={c:c,s:s,type:type,r:mio(lo).replace(" Mio. €","")+" – "+mio(hi)};
    $("#rangeTxt").textContent=last.r;
    $("#resultRange").classList.toggle("hidden",mode!=="range");
    $("#resultCall").classList.toggle("hidden",mode==="range");
    $("#resultBox").classList.remove("hidden");$("#leadForm").classList.remove("hidden");$("#leadDone").classList.add("hidden");
    $("#resultBox").scrollIntoView({behavior:"smooth",block:"nearest"});
  });
  $("#leadForm").addEventListener("submit",function(e){
    e.preventDefault(); if(!last) return;
    var label={appartement:"Appartement",penthouse:"Penthouse",maison:"Maison",villa:"Villa"}[last.type];
    var q=last.c.replace("Luxembourg-","");
    var lead={n:$("#nom").value||"Propriétaire",d:label+" · "+q+" · "+last.s+" m²",r:mode==="range"?last.r:"(rappel uniquement)",s:slot,st:"Nouveau",isNew:true};
    leads.unshift(lead); renderLeads();
    $("#kLeads").textContent=+$("#kLeads").textContent+1;
    $("#leadForm").classList.add("hidden");$("#leadDone").classList.remove("hidden");
    $("#phoneHint").classList.add("hidden");
    $("#clk").textContent=HN.time();
    var n=document.createElement("div");n.className="notif";
    n.innerHTML='<div class="t">Nouveau propriétaire <span>maintenant</span></div><b>'+E(label)+" · "+E(q)+" · "+E(last.s)+' m²</b>'+E(lead.n)+" · rappel souhaité · "+E(slot)+"<br>Fourchette montrée : "+E(lead.r);
    $("#notifs").prepend(n);
    HN.toast("Le contact est arrivé chez l’agent. Passez en Vue agence.");
  });
  function renderLeads(){
    var l=$("#leadList"); l.innerHTML="";
    leads.forEach(function(x,i){
      var d=document.createElement("div");d.className="li"+(x.isNew?" lead-new":"");
      var chip=x.st==="Nouveau"?'<span class="chip amber">Nouveau</span>':'<span class="chip green">'+x.st+'</span>';
      d.innerHTML='<div class="grow"><b>'+E(x.n)+'</b><small>'+E(x.d)+' · '+E(x.r)+' · '+E(x.s)+'</small></div>'+chip+(x.st==="Nouveau"?' <button class="btn btn-navy btn-sm" data-i="'+i+'">Planifier la visite</button>':'');
      l.appendChild(d);
    });
    $$("#leadList button").forEach(function(b){b.addEventListener("click",function(){leads[+b.dataset.i].st="RDV planifié";leads[+b.dataset.i].isNew=false;$("#kRdv").textContent=+$("#kRdv").textContent+1;renderLeads();HN.toast("Rendez-vous d’estimation planifié.");});});
  }
  fill(); renderLeads(); $("#clk").textContent=HN.time();
})();
