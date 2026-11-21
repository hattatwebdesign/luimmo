/* Hatnova · rapport-marche */
(function(){
  var $=HN.$,$$=HN.$$,E=HN.esc;
  var rows=[
    {n:"J. Hoffmann",k:"Maison / villa",p:"Dans les 3 prochains mois"},
    {n:"A. Rossi",k:"Appartement / penthouse",p:"Non, je m’informe"},
    {n:"M. Klein",k:"Immeuble de rapport",p:"Dans 6 à 12 mois"},
    {n:"S. Lambert",k:"Maison / villa",p:"Dans plus de 12 mois"}
  ];
  function chip(p){p=E(p);return /3 prochains/.test(p)?'<span class="chip red">Chaud · '+p+'</span>':/6 à 12/.test(p)?'<span class="chip amber">'+p+'</span>':/12 mois/.test(p)?'<span class="chip ghost">'+p+'</span>':'<span class="xs muted">'+p+'</span>';}
  function render(){var only=$("#only").checked;$("#tbl tbody").innerHTML=rows.filter(function(r){return !only||!/Non/.test(r.p);}).map(function(r,i){
    return '<tr class="'+(r.isNew?"new-row":"")+'"><td><b>'+E(r.n)+'</b></td><td>'+E(r.k)+'</td><td>'+chip(r.p)+'</td><td>'+(/Non/.test(r.p)?'':'<button class="btn btn-navy btn-sm" data-toast="Appel planifié dans votre agenda.">Appeler</button>')+'</td></tr>';}).join("");}
  $("#only").addEventListener("change",render);
  $("#dl").addEventListener("submit",function(e){e.preventDefault();
    rows.forEach(function(r){r.isNew=false;});
    rows.unshift({n:$("#n").value||"Contact",k:$("#kind").value,p:$("#plan").value,isNew:true});
    $("#kDl").textContent=+$("#kDl").textContent+1;if(!/Non/.test($("#plan").value))$("#kPlan").textContent=+$("#kPlan").textContent+1;
    render();$("#dl").classList.add("hidden");$("#ok").classList.remove("hidden");HN.toast("Nouveau contact avec projet de vente. Voir la Vue agence.");});
  $("#save").addEventListener("click",function(){$("#quote").textContent=$("#cm").value;HN.toast("Commentaire mis à jour dans le rapport (Vue propriétaire).");});
  render();
})();
