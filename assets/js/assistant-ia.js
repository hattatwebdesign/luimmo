/* Hatnova · assistant-ia */
(function(){
  var $=HN.$,$$=HN.$$,E=HN.esc;
  var S={
   fr:{ph:"Écrire un message…",steps:[
     {b:"Bonsoir ! Je suis l’assistant de l’agence. Comment puis-je vous aider ?",q:["La maison à Strassen est-elle toujours disponible ?"]},
     {b:"Oui, elle est disponible. Pour préparer une visite : quel est votre budget et votre calendrier ?",q:["Environ 2,5 Mio. €, achat d’ici 3 mois","Je regarde seulement"]},
     {b:"Merci. Votre financement est-il déjà validé ?",q:["Oui, financement validé","En cours d’étude"]},
     {b:"Parfait. Je vous propose mardi à 10:00 ou mercredi à 17:30.",q:["Mardi 10h, merci !","Mercredi 17h30"]},
     {b:"C’est noté. Vous recevez la confirmation par e-mail. Votre agent vous accueille sur place. Bonne soirée !",q:[]}]},
   de:{ph:"Nachricht schreiben…",steps:[
     {b:"Guten Abend! Ich bin der Assistent der Agentur. Wie kann ich helfen?",q:["Ist das Haus in Strassen noch verfügbar?"]},
     {b:"Ja, es ist verfügbar. Damit ich eine Besichtigung vorbereiten kann: Wie hoch ist Ihr Budget und wann möchten Sie kaufen?",q:["Etwa 2,5 Mio. €, Kauf in 3 Monaten","Ich schaue mich nur um"]},
     {b:"Danke. Ist Ihre Finanzierung schon bestätigt?",q:["Ja, Finanzierung bestätigt","Noch in Prüfung"]},
     {b:"Sehr gut. Ich schlage Dienstag um 10:00 oder Mittwoch um 17:30 vor.",q:["Dienstag 10 Uhr, danke!","Mittwoch 17:30"]},
     {b:"Ist notiert. Sie erhalten die Bestätigung per E-Mail. Ihr Makler empfängt Sie vor Ort. Schönen Abend!",q:[]}]},
   en:{ph:"Write a message…",steps:[
     {b:"Good evening! I’m the agency’s assistant. How can I help?",q:["Is the house in Strassen still available?"]},
     {b:"Yes, it is. To prepare a viewing: what is your budget and timeline?",q:["Around €2.5M, buying within 3 months","Just browsing"]},
     {b:"Thank you. Is your financing already approved?",q:["Yes, financing approved","Still in progress"]},
     {b:"Perfect. I can offer Tuesday at 10:00 or Wednesday at 17:30.",q:["Tuesday 10am, thanks!","Wednesday 5:30pm"]},
     {b:"Booked. You’ll receive a confirmation by e-mail and your agent will meet you on site. Have a good evening!",q:[]}]},
   pt:{ph:"Escrever uma mensagem…",steps:[
     {b:"Boa noite! Sou o assistente da agência. Como posso ajudar?",q:["A casa em Strassen ainda está disponível?"]},
     {b:"Sim, está disponível. Para preparar uma visita: qual é o seu orçamento e o seu prazo?",q:["Cerca de 2,5 M€, compra em 3 meses","Só estou a ver"]},
     {b:"Obrigado. O seu financiamento já está aprovado?",q:["Sim, financiamento aprovado","Ainda em análise"]},
     {b:"Perfeito. Proponho terça-feira às 10:00 ou quarta-feira às 17:30.",q:["Terça às 10h, obrigado!","Quarta às 17:30"]},
     {b:"Fica marcado. Recebe a confirmação por e-mail e o seu agente recebe-o no local. Boa noite!",q:[]}]}
  };
  var lang="fr",i=0,answers=[],busy=false;
  function add(t,who){var d=document.createElement("div");d.className="m "+who;d.textContent=t;$("#msgs").appendChild(d);$("#msgs").scrollTop=1e5;}
  function bot(t,cb){busy=true;var ty=document.createElement("div");ty.className="typing";ty.innerHTML="<i></i><i></i><i></i>";$("#msgs").appendChild(ty);$("#msgs").scrollTop=1e5;
    setTimeout(function(){ty.remove();add(t,"bot");busy=false;cb&&cb();},700);}
  function quick(){var q=$("#quick");q.innerHTML="";S[lang].steps[i].q.forEach(function(x){var b=document.createElement("button");b.textContent=x;b.onclick=function(){user(x);};q.appendChild(b);});
    q.classList.toggle("hidden",!S[lang].steps[i].q.length);}
  function user(t){if(busy||i>=4)return;add(t,"me");answers[i]=t;$("#quick").innerHTML="";i++;bot(S[lang].steps[i].b,function(){quick();if(i===4)done();});}
  function start(){$("#msgs").innerHTML="";i=0;answers=[];$("#freeTxt").placeholder=S[lang].ph;bot(S[lang].steps[0].b,quick);}
  $$("#langs button").forEach(function(b){b.onclick=function(){$$("#langs button").forEach(function(x){x.classList.remove("on")});b.classList.add("on");lang=b.dataset.l;start();};});
  $("#free").addEventListener("submit",function(e){e.preventDefault();var t=$("#freeTxt").value.trim();if(!t)return;$("#freeTxt").value="";
    if(i<4)user(t);});
  function done(){
    var L={fr:"Français",de:"Deutsch",en:"English",pt:"Português"}[lang];
    $("#hint").classList.add("hidden");$("#clk").textContent=HN.time();
    var n=document.createElement("div");n.className="notif";
    n.innerHTML='<div class="t">Acheteur qualifié <span>maintenant</span></div><b>Maison Strassen · visite '+E(answers[3]||"")+'</b>'+E(L)+' · '+E(answers[1]||"")+' · '+E(answers[2]||"");
    $("#notifs").prepend(n);
    $("#sumBox").innerHTML='<div class="sum fade-in"><div class="eyebrow">Nouveau · acheteur qualifié</div><h3 style="font-size:19px;margin-top:4px">Maison · Strassen</h3><dl>'+
      '<dt>Langue</dt><dd>'+E(L)+'</dd><dt>Budget / délai</dt><dd>'+E(answers[1]||"–")+'</dd><dt>Financement</dt><dd>'+E(answers[2]||"–")+'</dd><dt>Visite</dt><dd>'+E(answers[3]||"–")+' · ajoutée à l’agenda</dd><dt>Heure</dt><dd>'+E(HN.now())+'</dd></dl>'+
      '<div class="opts" style="margin-top:12px"><button class="btn btn-navy btn-sm" data-toast="Conversation complète ouverte.">Lire la conversation</button><button class="btn btn-ghost btn-sm" data-toast="Vous reprenez la conversation personnellement.">Reprendre la main</button></div></div>';
    $("#kQ").textContent=8;
    HN.toast("Visite réservée. Résumé disponible en Vue agence.");
  }
  $("#clk").textContent=HN.time();start();
})();
