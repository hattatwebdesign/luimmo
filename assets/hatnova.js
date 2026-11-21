/* Hatnova · éléments communs des démos (sans HTML dynamique non échappé) */
(function () {
  'use strict';
  var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '`': '&#96;' };
  window.HN = {
    $: function (s, r) { return (r || document).querySelector(s); },
    $$: function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); },
    esc: function (v) { return String(v == null ? '' : v).replace(/[&<>"'`]/g, function (c) { return MAP[c]; }); },
    eur: function (n, dec) {
      return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: dec || 0 }).format(n).replace(/ /g, ' ');
    },
    num: function (n) { return new Intl.NumberFormat('fr-FR').format(n).replace(/ /g, ' '); },
    now: function () {
      var d = new Date();
      return d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' · ' +
        d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    },
    time: function () { return new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }); },
    toast: function (msg) {
      var t = document.getElementById('hn-toast');
      if (!t) { t = document.createElement('div'); t.id = 'hn-toast'; t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
      t.textContent = String(msg); t.classList.add('show');
      clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('show'); }, 3200);
    },
    setView: function (v) {
      if (v !== 'client' && v !== 'agence') return;
      document.body.setAttribute('data-current-view', v);
      HN.$$('[data-view]').forEach(function (el) { el.classList.toggle('hidden', el.getAttribute('data-view') !== v); });
      HN.$$('[data-set-view]').forEach(function (b) { var on = b.getAttribute('data-set-view') === v; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
    }
  };
  document.addEventListener('DOMContentLoaded', function () {
    HN.$$('[data-set-view]').forEach(function (btn) { btn.addEventListener('click', function () { HN.setView(btn.getAttribute('data-set-view')); }); });
    // Longueur maximale des champs libres
    HN.$$('input:not([type]), input[type=text], input[type=email], input[type=tel]').forEach(function (i) { if (!i.hasAttribute('maxlength')) i.setAttribute('maxlength', '120'); });
    HN.$$('textarea').forEach(function (t) { if (!t.hasAttribute('maxlength')) t.setAttribute('maxlength', '600'); });
    // Messages d'information sans gestionnaire inline
    document.addEventListener('click', function (e) {
      var el = e.target.closest ? e.target.closest('[data-toast]') : null;
      if (el) { e.preventDefault(); HN.toast(el.getAttribute('data-toast')); }
    });
  });
})();
