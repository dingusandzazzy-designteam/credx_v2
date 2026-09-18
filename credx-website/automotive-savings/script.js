/* Savings-first variant — behaviour for the two components the approved page
   does not have. Loaded after ../automotive/script.js, which it never touches. */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Prospector ───────────────────────────────────────────────────────
     Runs the scan sequence, then opens an editable profile. Nothing is
     looked up: the merchant supplies the volume, and the yearly figure is
     that volume at the published 3.6% of card volume. */

  var finder = document.querySelector('[data-finder]');
  var result = document.querySelector('[data-finder-result]');
  var nameOut = document.querySelector('[data-finder-name]');
  var statusOut = document.querySelector('[data-finder-error]');
  var lostOut = document.querySelector('[data-finder-lost]');
  var volumeField = document.querySelector('[data-finder-volume]');
  var ownerLabel = document.querySelector('[data-calc-owner]');
  var slider = document.querySelector('[data-calc-input]');

  var SCAN = [
    'Connecting to global rails…',
    'Scanning global rails…',
    'Parsing POS metadata…',
    'Reading interchange drain…',
    'Mapping return rate…',
    'Qualifying lender fit…',
    'Compiling prospect profile…'
  ];

  var CARD_COST = 0.036; /* what card fees take, as a share of card volume */

  function money(value) {
    return '$' + Math.round(value).toLocaleString('en-US');
  }

  function parseAmount(raw) {
    var digits = String(raw || '').replace(/[^0-9.]/g, '');
    var value = parseFloat(digits);
    return isFinite(value) && value > 0 ? value : 0;
  }

  function updateLost() {
    if (!lostOut) return;
    var monthly = parseAmount(volumeField && volumeField.value) ||
                  (slider ? parseFloat(slider.value) : 0);
    lostOut.textContent = monthly ? money(monthly * CARD_COST * 12) : '—';
  }

  function revealProfile(name, place) {
    if (nameOut) nameOut.textContent = place ? name + ' · ' + place : name;
    if (result) result.hidden = false;
    if (statusOut) statusOut.hidden = true;
    if (ownerLabel) ownerLabel.textContent = 'Recovered and staying at ' + name;
    if (volumeField && !volumeField.value && slider) {
      volumeField.value = parseFloat(slider.value).toLocaleString('en-US');
    }
    updateLost();
  }

  function runScan(name, place) {
    if (!statusOut) return revealProfile(name, place);

    if (reduceMotion) {
      statusOut.hidden = false;
      statusOut.textContent = SCAN[SCAN.length - 1];
      revealProfile(name, place);
      return;
    }

    var step = 0;
    statusOut.hidden = false;
    statusOut.textContent = SCAN[0];

    var timer = window.setInterval(function () {
      step += 1;
      if (step < SCAN.length) {
        statusOut.textContent = SCAN[step];
        return;
      }
      window.clearInterval(timer);
      revealProfile(name, place);
    }, 420);
  }

  if (finder) {
    finder.addEventListener('submit', function (event) {
      event.preventDefault();

      var nameField = finder.querySelector('#finder-name');
      var placeField = finder.querySelector('#finder-place');
      var name = nameField ? nameField.value.trim() : '';
      var place = placeField ? placeField.value.trim() : '';

      if (!name) {
        if (statusOut) {
          statusOut.hidden = false;
          statusOut.textContent = 'Scan failed. Try again.';
        }
        if (nameField) nameField.focus();
        return;
      }

      runScan(name, place);
    });
  }

  if (volumeField) {
    volumeField.addEventListener('input', function () {
      var monthly = parseAmount(volumeField.value);
      if (slider && monthly) {
        var min = parseFloat(slider.min);
        var max = parseFloat(slider.max);
        slider.value = String(Math.min(Math.max(monthly, min), max));
        slider.dispatchEvent(new Event('input', { bubbles: true }));
      }
      updateLost();
    });
  }

  if (slider) slider.addEventListener('input', updateLost);

  /* ── Interchange, before and after ────────────────────────────────────
     Two fixed states on $1M a month, stated per year to match the labels:
     3.6% of card volume today, 0.6% with CredX, up to 85% recovered. */

  var RAILS = {
    legacy: {
      out: '$432,000',
      outBar: '100%',
      outCaption: 'Interchange and network fees — gone, permanently',
      kept: '$0',
      keptBar: '0%',
      keptCaption: 'Nothing comes back on the legacy rail'
    },
    credx: {
      out: '$72,000',
      outBar: '17%',
      outCaption: 'Total CredX cost on the same volume',
      kept: 'Up to $360,000',
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
