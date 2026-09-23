/* Savings-first variant — behaviour for the two components the approved page
   does not have. Loaded after ../automotive/script.js, which it never touches. */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Get your rate ─────────────────────────────────────────────────────
     Business name + industry → three numbers pre-filled for a typical
     business in that industry → the merchant corrects them → name and email
     → today's cost against the CredX rate. Nothing is looked up: the site is
     static, so the pre-fill is a per-industry typical, not a search. The
     rate is the page's own model — 3.6% of card volume today, 0.6% with
     CredX (the $36K vs $6K per $1M/mo stated in the rails section). */

  var finder = document.querySelector('[data-finder]');
  var result = document.querySelector('[data-finder-result]');
  var gate = document.querySelector('[data-finder-gate]');
  var rateBox = document.querySelector('[data-finder-rate]');
  var nameOut = document.querySelector('[data-finder-name]');
  var statusOut = document.querySelector('[data-finder-error]');
  var lostOut = document.querySelector('[data-finder-lost]');
  var volumeField = document.querySelector('[data-finder-volume]');
  var posField = document.querySelector('[data-finder-pos]');
  var ticketField = document.querySelector('[data-finder-ticket]');
  var ownerLabel = document.querySelector('[data-calc-owner]');
  var slider = document.querySelector('[data-calc-input]');

  var CARD_COST = 0.036;  /* what card fees take today, as a share of card volume */
  var CREDX_RATE = 0.006; /* what CredX costs on the same volume */

  /* Plausible, not measured: the merchant corrects them in step 2. */
  var TYPICAL = {
    repair:      { label: 'service and repair', volume: 350000, pos: 'Shop management system', ticket: 450 },
    parts:       { label: 'parts and accessories', volume: 500000, pos: 'Parts counter POS', ticket: 120 },
    tire:        { label: 'tire and quick-lube', volume: 300000, pos: 'Shop management system', ticket: 180 },
    body:        { label: 'body and collision', volume: 400000, pos: 'Estimating system', ticket: 2800 },
    powersports: { label: 'powersports and RV', volume: 750000, pos: 'Dealer management system', ticket: 6500 },
    fleet:       { label: 'fleet service', volume: 600000, pos: 'Fleet management system', ticket: 900 },
    other:       { label: 'automotive', volume: 350000, pos: 'POS system', ticket: 400 }
  };

  var business = '';

  function money(value) {
    return '$' + Math.round(value).toLocaleString('en-US');
  }

  function parseAmount(raw) {
    var digits = String(raw || '').replace(/[^0-9.]/g, '');
    var value = parseFloat(digits);
    return isFinite(value) && value > 0 ? value : 0;
  }

  function monthlyVolume() {
    return parseAmount(volumeField && volumeField.value) ||
           (slider ? parseFloat(slider.value) : 0);
  }

  function updateLost() {
    if (!lostOut) return;
    var monthly = monthlyVolume();
    lostOut.textContent = monthly ? money(monthly * CARD_COST * 12) : '—';
  }

  function setText(selector, text) {
    var el = document.querySelector(selector);
    if (el) el.textContent = text;
  }

  function updateRate() {
    var yearly = monthlyVolume() * 12;
    if (!yearly) return;
    setText('[data-rate-today]', money(yearly * CARD_COST) + ' / yr');
    setText('[data-rate-credx]', money(yearly * CREDX_RATE) + ' / yr');
    setText('[data-rate-kept]', money(yearly * (CARD_COST - CREDX_RATE)) + ' / yr');
    setText('[data-rate-pct]', (CREDX_RATE * 100).toFixed(1) + '%');
    setText('[data-rate-share]', Math.round((1 - CREDX_RATE / CARD_COST) * 100) + '%');
  }

  function scrollToEl(el) {
    if (!el || reduceMotion) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  /* Carry what the merchant already told us into the signup form below. */
  function prefill(id, value) {
    var el = document.getElementById(id);
    if (el && !el.value && value) el.value = value;
  }

  function revealProfile(industryKey) {
    var typical = TYPICAL[industryKey] || TYPICAL.other;
    if (nameOut) nameOut.textContent = business;
    if (volumeField) volumeField.value = typical.volume.toLocaleString('en-US');
    if (posField) posField.value = typical.pos;
    if (ticketField) ticketField.value = typical.ticket.toLocaleString('en-US');
    if (statusOut) statusOut.hidden = true;
    if (result) result.hidden = false;
    if (rateBox) rateBox.hidden = true;
    if (ownerLabel) ownerLabel.textContent = 'Recovered and staying at ' + business;
    syncSlider();
    updateLost();
    updateRate();
    scrollToEl(result);
  }

  function syncSlider() {
    var monthly = parseAmount(volumeField && volumeField.value);
    if (!slider || !monthly) return;
    var min = parseFloat(slider.min);
    var max = parseFloat(slider.max);
    slider.value = String(Math.min(Math.max(monthly, min), max));
    slider.dispatchEvent(new Event('input', { bubbles: true }));
  }

  if (finder) {
    finder.addEventListener('submit', function (event) {
      event.preventDefault();

      var nameField = finder.querySelector('#finder-name');
      var industryField = finder.querySelector('#finder-industry');
      var name = nameField ? nameField.value.trim() : '';
      var industry = industryField ? industryField.value : '';

      if (!name || !industry) {
        if (statusOut) {
          statusOut.hidden = false;
          statusOut.textContent = !name ? 'Add your business name to get your rate.' : 'Pick your industry to get your rate.';
        }
        (!name ? nameField : industryField).focus();
        return;
      }

      business = name;
      var typical = TYPICAL[industry] || TYPICAL.other;
      if (statusOut) {
        statusOut.hidden = false;
        statusOut.textContent = 'Estimating the numbers for a typical ' + typical.label + ' business…';
      }
      window.setTimeout(function () { revealProfile(industry); }, reduceMotion ? 0 : 900);
    });
  }

  if (volumeField) {
    volumeField.addEventListener('input', function () {
      syncSlider();
      updateLost();
      updateRate();
    });
  }

  if (gate) {
    gate.addEventListener('submit', function (event) {
      event.preventDefault();
      var fields = gate.querySelectorAll('input[required]');
      for (var i = 0; i < fields.length; i++) {
        if (!fields[i].checkValidity()) { fields[i].reportValidity(); return; }
      }

      var gName = gate.querySelector('#gate-name').value.trim();
      var gEmail = gate.querySelector('#gate-email').value.trim();
      var industryField = finder && finder.querySelector('#finder-industry');

      /* Placeholder → CRM. The lead goes nowhere until CredX IT wires it. */
      console.log('Get your rate (placeholder → CRM):', {
        business: business,
        industry: industryField ? industryField.value : '',
        monthly_volume: monthlyVolume(),
        pos: posField ? posField.value : '',
        average_ticket: ticketField ? parseAmount(ticketField.value) : 0,
        name: gName,
        email: gEmail
      });

      prefill('su-name', gName);
      prefill('su-email', gEmail);
      prefill('su-company', business);
      prefill('su-pos', posField ? posField.value : '');

      updateRate();
      setText('[data-rate-name]', business);
      if (result) result.hidden = true;
      if (rateBox) rateBox.hidden = false;
      scrollToEl(rateBox);
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
  /* ── Drop-in cards ──────────────────────────────────────────────
     Cards land in sequence as their group comes into view. The shared
     script never sees these: they carry data-drop instead of data-reveal. */

  var dropped = document.querySelectorAll('[data-drop]');

  if (dropped.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(dropped, function (el) { el.classList.add('is-dropped'); });
    } else {
      var groups = [];
      Array.prototype.forEach.call(dropped, function (el) {
        var parent = el.parentNode;
        if (groups.indexOf(parent) === -1) groups.push(parent);
        el.style.setProperty('--drop-i', String(
          Array.prototype.indexOf.call(parent.children, el)
        ));
      });

      var dropObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-dropped');
          dropObserver.unobserve(entry.target);
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

      Array.prototype.forEach.call(dropped, function (el) { dropObserver.observe(el); });
    }
  }

  /* ── The wall that breaks ────────────────────────────────────
     Three beats, once, when the wall is well inside the viewport:
     strain (the wall tightens, edges go magenta) → crack (a line of light
     runs down the centre) → break (every brick is thrown outward from the
     centre along its own vector, measured from the live grid so it holds at
     2, 3 and 4 columns, and settles as debris at low opacity).
     transform + opacity only. Reduced motion: the wall does not break.
     Without GSAP the CSS fallback (.is-breaking) still runs. */

  var wall = document.querySelector('[data-wall]');

  function breakWithGsap(wallEl) {
    var gsap = window.gsap;
    var bricks = Array.prototype.slice.call(wallEl.querySelectorAll('.wall__brick'));
    if (!bricks.length) return;

    wallEl.classList.add('wall--gsap');

    var crack = document.createElement('span');
    crack.className = 'wall__crack';
    crack.setAttribute('aria-hidden', 'true');
    var glow = document.createElement('span');
    glow.className = 'wall__glow';
    glow.setAttribute('aria-hidden', 'true');
    wallEl.appendChild(glow);
    wallEl.appendChild(crack);

    gsap.set(crack, { scaleY: 0, opacity: 1 });
    gsap.set(glow, { opacity: 0, scale: 0.6 });

    /* A fixed pseudo-random per brick, so every visit breaks the same way. */
    function jitter(i, salt) {
      var x = Math.sin((i + 1) * 12.9898 + salt * 78.233) * 43758.5453;
      return x - Math.floor(x);
    }

    function vectors() {
      var box = wallEl.getBoundingClientRect();
      var cx = box.left + box.width / 2;
      var cy = box.top + box.height / 2;
      var reach = Math.min(window.innerWidth * 0.22, 280);
      return bricks.map(function (brick, i) {
        var b = brick.getBoundingClientRect();
        var dx = (b.left + b.width / 2) - cx;
        var dy = (b.top + b.height / 2) - cy;
        var len = Math.sqrt(dx * dx + dy * dy) || 1;
        var push = reach * (0.55 + jitter(i, 1) * 0.6);
        return {
          x: (dx / len) * push,
          y: (dy / len) * push * 0.7 + 10 + jitter(i, 2) * 35,
          r: (jitter(i, 3) - 0.5) * 50,
          d: len
        };
      });
    }

    var played = false;

    function play() {
      if (played) return;
      played = true;

      var v = vectors();
      var maxD = Math.max.apply(null, v.map(function (o) { return o.d; })) || 1;
      var tl = gsap.timeline();

      /* 1 · strain */
      tl.add(function () { wallEl.classList.add('is-straining'); })
        .to(bricks, { scale: 0.97, duration: 0.45, ease: 'power2.in' }, 0)

      /* 2 · crack */
        .to(crack, { scaleY: 1, duration: 0.35, ease: 'power3.in' }, 0.3)
        .to(glow, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }, 0.55)

      /* 3 · break, from the centre out */
        .add('break', 0.68)
        .add(function () { wallEl.classList.add('is-broken'); }, 'break');

      bricks.forEach(function (brick, i) {
        tl.to(brick, {
          x: v[i].x,
          y: v[i].y,
          rotation: v[i].r,
          scale: 0.9,
          opacity: 0.1,
          duration: 1.25,
          ease: 'power3.out'
        }, 'break+=' + ((v[i].d / maxD) * 0.12).toFixed(3));
      });

      tl.to(crack, { opacity: 0, scaleX: 6, duration: 0.5, ease: 'power2.out' }, 'break')
        .to(glow, { opacity: 0, scale: 1.6, duration: 1.1, ease: 'power2.out' }, 'break+=0.05');
    }

    if (window.ScrollTrigger) {
      window.ScrollTrigger.create({
        trigger: wallEl,
        start: 'center 62%',
        once: true,
        onEnter: play
      });
    } else if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) { play(); io.disconnect(); }
        });
      }, { threshold: [0, 0.6, 0.9] });
      io.observe(wallEl);
    } else {
      play();
    }
  }

  if (wall && !reduceMotion) {
    var usedGsap = false;
    if (window.gsap) {
      try { breakWithGsap(wall); usedGsap = true; }
      catch (err) {
        /* Never leave the wall half-broken: fall back to the CSS version. */
        wall.classList.remove('wall--gsap');
        usedGsap = false;
      }
    }

    if (!usedGsap) {
      if (!('IntersectionObserver' in window)) {
        wall.classList.add('is-breaking');
      } else {
        var wallObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting || entry.intersectionRatio <= 0.55) return;
            entry.target.classList.add('is-breaking');
            wallObserver.unobserve(entry.target);
          });
        }, { threshold: [0, 0.3, 0.55, 0.8] });
        wallObserver.observe(wall);
      }
    }
  }
})();
