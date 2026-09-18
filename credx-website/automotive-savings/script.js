/* Savings-first variant — behaviour for the two components the approved page
   does not have. Loaded after ../automotive/script.js, which it never touches. */

(function () {
  'use strict';

  /* ── Finder ───────────────────────────────────────────────────────────
     Takes a business name and echoes it back. It does not look anything up:
     every figure it shows is a published rate, identical for every visitor. */

  var finder = document.querySelector('[data-finder]');
  var result = document.querySelector('[data-finder-result]');
  var nameOut = document.querySelector('[data-finder-name]');
  var errorOut = document.querySelector('[data-finder-error]');
  var ownerLabel = document.querySelector('[data-calc-owner]');

  if (finder && result && nameOut) {
    finder.addEventListener('submit', function (event) {
      event.preventDefault();

      var nameField = finder.querySelector('#finder-name');
      var placeField = finder.querySelector('#finder-place');
      var name = nameField ? nameField.value.trim() : '';
      var place = placeField ? placeField.value.trim() : '';

      if (!name) {
        if (errorOut) errorOut.hidden = false;
        if (nameField) nameField.focus();
        return;
      }

      if (errorOut) errorOut.hidden = true;
      nameOut.textContent = place ? name + ' · ' + place : name;
      result.hidden = false;

      if (ownerLabel) ownerLabel.textContent = 'Recovered at ' + name;

      var calc = document.querySelector('.calc');
      if (calc && typeof calc.scrollIntoView === 'function') {
        var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        calc.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
      }
    });
  }

  /* ── Interchange, before and after ────────────────────────────────────
     Two fixed states on $1M a month, built from the published figures:
     3.6% of card volume today, 0.6% with CredX, and up to $30,000 back. */

  var RAILS = {
    legacy: {
      out: '$36,000',
      outBar: '100%',
      outCaption: 'What card fees take out of $1M in card volume',
      kept: '$0',
      keptBar: '0%',
      keptCaption: 'Nothing comes back on the old rail'
    },
    credx: {
      out: '$6,000',
      outBar: '17%',
      outCaption: 'Total CredX cost on the same volume',
      kept: 'Up to $30,000',
      keptBar: '83%',
      keptCaption: 'Recovered and staying in your business'
    }
  };

  var tabs = document.querySelectorAll('[data-rail]');
  var outValue = document.querySelector('[data-rail-out]');
  var outBar = document.querySelector('[data-rail-out-bar]');
  var outCaption = document.querySelector('[data-rail-out-caption]');
  var keptValue = document.querySelector('[data-rail-kept]');
  var keptBar = document.querySelector('[data-rail-kept-bar]');
  var keptCaption = document.querySelector('[data-rail-kept-caption]');
  var panel = document.getElementById('rail-panel');

  function showRail(key, tab) {
    var state = RAILS[key];
    if (!state) return;

    if (outValue) outValue.textContent = state.out;
    if (outBar) outBar.style.width = state.outBar;
    if (outCaption) outCaption.textContent = state.outCaption;
    if (keptValue) keptValue.textContent = state.kept;
    if (keptBar) keptBar.style.width = state.keptBar;
    if (keptCaption) keptCaption.textContent = state.keptCaption;

    Array.prototype.forEach.call(tabs, function (el) {
      var active = el === tab;
      el.classList.toggle('is-active', active);
      el.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    if (panel && tab && tab.id) panel.setAttribute('aria-labelledby', tab.id);
  }

  Array.prototype.forEach.call(tabs, function (tab) {
    tab.addEventListener('click', function () {
      showRail(tab.getAttribute('data-rail'), tab);
    });

    tab.addEventListener('keydown', function (event) {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      var list = Array.prototype.slice.call(tabs);
      var next = list[(list.indexOf(tab) + (event.key === 'ArrowRight' ? 1 : -1) + list.length) % list.length];
      next.focus();
      showRail(next.getAttribute('data-rail'), next);
    });
  });
})();
