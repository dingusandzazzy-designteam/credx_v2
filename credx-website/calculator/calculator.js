/* ============================================================================
   CredX — Fee Analyzer (`/calculator`)
   Spec: credx-website/plan/Calculator-Fee-Analyzer-Spec.md
   Copy: credx-website/copy/calculator.md
   ClickUp: 86cb9amqa

   🔴 NOTHING HERE SUBMITS ANYWHERE. The CRM integration spec — endpoint, auth,
   payload shape — is owed by the client's IT team and has not arrived. The gate
   computes and renders locally, and `buildPayload()` assembles the object that
   WILL be sent so the shape is reviewable now. Do not invent the transport, and
   do not build Vercel-specific technology into it (standing ruling 2026-08-03).
   ========================================================================== */
(function () {
  'use strict';

  var root = document.querySelector('[data-fa]');
  if (!root) return;

  /* --------------------------------------------------------------------------
     CONSTANTS
     -------------------------------------------------------------------------- */

  // 0.6% · $6,000 per $1M. Locked, and the figure in the live copy
  // (automotive/index.html:245, and the Home's calculator hedge).
  var CREDX_RATE = 0.006;

  // 3.6% · $36,000 per $1M. ⚠ O3 — this is approved as a COMPARATIVE EXAMPLE in
  // live copy, which is not the same as approved as a CALCULATION BASELINE.
  // Estimate mode is the only thing that reads it. If Mauricio rules against it,
  // estimate mode cannot output dollars at all and this constant comes out.
  var BASELINE_RATE = 0.036;

  // The published recovery range.
  var BAND_LOW = 0.40;
  var BAND_HIGH = 0.85;

  // The qualification floor. The only place in the funnel where it is applied.
  var THRESHOLD = 250000;

  /* 🔴 WHY THE BAND IS APPLIED TO THE GAP AND NOT TO VOLUME.
     The slider on the Home computes `volume × 0.0144` to `volume × 0.03`
     (script.js:545-546) — anchored to VOLUME, which silently assumes the
     merchant pays 3.6%. The slider can afford that because it never learns what
     the merchant actually pays. This page does.
     A merchant whose statement shows 2.4% effective has a real gap of $9,000 on
     $500,000. The volume-anchored model would still show $15,000 at the top —
     a promised saving LARGER THAN THE TOTAL FEES THEY PAY, in writing, with
     their name on it. So the band scales the merchant's own gap instead.
     ⚠ O1 is open: range against one exact figure is Mauricio's call. Built as a
     range because that is the position consistent with what is already live. */

  /* --------------------------------------------------------------------------
     HELPERS
     -------------------------------------------------------------------------- */

  var money0 = new Intl.NumberFormat('en-CA', {
    style: 'currency', currency: 'CAD', maximumFractionDigits: 0
  });
  var money2 = new Intl.NumberFormat('en-CA', {
    style: 'currency', currency: 'CAD', minimumFractionDigits: 2, maximumFractionDigits: 2
  });

  // Round half DOWN on anything shown, so the figure on screen is never larger
  // than the figure computed.
  function fmt(n) { return money0.format(Math.floor(n)); }
  function fmt2(n) { return money2.format(Math.floor(n * 100) / 100); }
  function pct(n) { return (Math.round(n * 1000) / 10) + '%'; }

  function el(sel) { return root.querySelector(sel); }
  function all(sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }
  function field(name) { return el('[data-fa-field="' + name + '"]'); }

  // Accepts "$18,000", "18 000", "18000.00". Rejects everything else as 0.
  function parseMoney(value) {
    if (!value) return 0;
    var cleaned = String(value).replace(/[^0-9.]/g, '');
    var n = parseFloat(cleaned);
    return isFinite(n) && n > 0 ? n : 0;
  }

  function show(name) { el('[data-fa-step="' + name + '"]').hidden = false; }
  function hide(name) { el('[data-fa-step="' + name + '"]').hidden = true; }

  function setError(name, on) {
    var node = el('[data-fa-error="' + name + '"]');
    if (node) node.hidden = !on;
    var input = field(name);
    if (input) input.setAttribute('aria-invalid', on ? 'true' : 'false');
    return !on;
  }

  /* ⚠ EVENTS ARE A STUB, ON PURPOSE. No analytics tag and no pixel exist on this
     site yet, and the consent banner is still owed (T0 items 3 and 5). Anything
     that fires must fire AFTER consent, never before. Until then the events are
     queued on `window.credxEvents` so the list in the spec can be verified in a
     browser console without shipping a tag nobody consented to. */
  window.credxEvents = window.credxEvents || [];
  function track(name, props) {
    window.credxEvents.push({ event: name, props: props || {}, at: new Date().toISOString() });
  }

  /* --------------------------------------------------------------------------
     STATE
     -------------------------------------------------------------------------- */

  var state = { mode: 'known_cost' };

  /* --------------------------------------------------------------------------
     MODE CHOOSER
     -------------------------------------------------------------------------- */

  function applyMode(mode) {
    state.mode = mode;
    el('[data-fa-fields="known_cost"]').hidden = mode !== 'known_cost';
    el('[data-fa-fields="estimate"]').hidden = mode !== 'estimate';
    el('[data-fa-warn]').hidden = true;
    setError('cross', false);
    track('calc_mode_selected', { mode: mode });
  }

  all('[data-fa-mode]').forEach(function (radio) {
    radio.addEventListener('change', function () { applyMode(radio.value); });
  });

  /* --------------------------------------------------------------------------
     CURRENCY FIELDS — format on blur, never mid-keystroke
     -------------------------------------------------------------------------- */

  all('[data-fa-currency]').forEach(function (input) {
    input.addEventListener('blur', function () {
      var n = parseMoney(input.value);
      if (n > 0) input.value = money0.format(n);
      track('calc_field_blur', { field: input.getAttribute('data-fa-field'), mode: state.mode });
    });
    input.addEventListener('focus', function () {
      input.value = String(parseMoney(input.value) || '');
    });
  });

  /* --------------------------------------------------------------------------
     THE MATH
     -------------------------------------------------------------------------- */

  function compute() {
    var known = state.mode === 'known_cost';
    var volume = known ? parseMoney(field('volume').value) : parseMoney(field('volume_est').value);
    var fees = known ? parseMoney(field('fees').value) : volume * BASELINE_RATE;

    var effectiveRate = fees / volume;
    var credxCost = volume * CREDX_RATE;
    var grossGap = fees - credxCost;

    return {
      mode: state.mode,
      volume: volume,
      fees: fees,
      effectiveRate: effectiveRate,
      credxCost: credxCost,
      grossGap: grossGap,
      monthlyLow: grossGap * BAND_LOW,
      monthlyHigh: grossGap * BAND_HIGH,
      annualLow: grossGap * BAND_LOW * 12,
      annualHigh: grossGap * BAND_HIGH * 12,
      threeYearLow: grossGap * BAND_LOW * 36,
      threeYearHigh: grossGap * BAND_HIGH * 36,
      locations: Math.max(1, parseInt(field('locations').value, 10) || 1),
      vertical: field('vertical').value,
      aboveThreshold: volume >= THRESHOLD
    };
  }

  /* --------------------------------------------------------------------------
     STEP 1 → RESULT
     -------------------------------------------------------------------------- */

  function validateStep1() {
    var ok = true;
    var known = state.mode === 'known_cost';

    if (known) {
      var fees = parseMoney(field('fees').value);
      var volume = parseMoney(field('volume').value);
      ok = setError('fees', fees <= 0) && ok;
      ok = setError('volume', volume <= 0) && ok;

      // Cross-field: the two figures swapped is the most likely real mistake.
      if (fees > 0 && volume > 0 && fees >= volume) {
        var cross = el('[data-fa-error="cross"]');
        cross.textContent = 'Those numbers look swapped. Fees are the smaller figure.';
        cross.hidden = false;
        ok = false;
      } else {
        setError('cross', false);
      }

      // Soft warning only — it never blocks. A merchant genuinely paying over
      // 10% exists, and refusing their numbers would be telling them they are
      // wrong about their own statement.
      el('[data-fa-warn]').hidden = !(fees > 0 && volume > 0 && fees < volume && (fees / volume) > 0.10);
    } else {
      ok = setError('volume_est', parseMoney(field('volume_est').value) <= 0) && ok;
      ok = setError('card_mix', !field('card_mix').value) && ok;
    }

    ok = setError('vertical', !field('vertical').value) && ok;
    ok = setError('locations', !(parseInt(field('locations').value, 10) >= 1)) && ok;

    if (!ok) track('calc_validation_error', { mode: state.mode });
    return ok;
  }

  function renderResult() {
    var r = compute();
    state.result = r;

    var known = r.mode === 'known_cost';

    el('[data-fa-result-label]').textContent = known ? 'Your result' : 'Your estimate';

    el('[data-fa-readback]').textContent = known
      ? 'You paid ' + fmt(r.fees) + ' on ' + fmt(r.volume) + ' in card volume. That is ' + pct(r.effectiveRate) + ' of every sale.'
      : 'You run about ' + fmt(r.volume) + ' a month in card volume. At the rates most businesses your size pay, that works out to roughly ' + fmt(r.fees) + ' a month in card fees.';

    /* 🔴 THIS LINE USED TO READ "Through CredX, that same month costs $X." IT WAS
       WRONG, AND IT CONTRADICTED THE HEDGE THREE LINES BELOW IT. A merchant only
       lands at 0.6% if recovery is 100%, and the published range is 40 to 85% —
       so the old wording promised, as their outcome, the one figure the range
       exists to rule out. It is the CredX RATE, stated as the comparison point,
       not their resulting bill. ⚠ If O1 ever lands on Treatment B (one exact
       figure, full gap), the old wording becomes correct again and this comes
       back. Do not "simplify" it before then. */
    el('[data-fa-credx]').textContent = 'The CredX rate is 0.6%. On ' + fmt(r.volume) + ', that is ' + fmt(r.credxCost) + '.';

    el('[data-fa-monthly]').textContent = fmt(r.monthlyLow) + ' to ' + fmt(r.monthlyHigh);
    el('[data-fa-annual]').textContent = fmt(r.annualLow) + ' to ' + fmt(r.annualHigh) + ' a year';

    el('[data-fa-hedge]').textContent = known
      ? 'Recovery runs from 40% up to 85% of standard interchange, so the figure above is a range rather than a single outcome. Results vary by volume and card mix.'
      : 'This is an estimate. Recovery runs from 40% up to 85% of standard interchange, and results vary by volume and card mix.';

    el('[data-fa-note]').textContent = known
      ? 'This is your own arithmetic. We did not add anything to it.'
      : 'This is an estimate built from your volume. Your statement will give you the exact figure.';

    el('[data-fa-switch]').hidden = known;

    hide('1');
    show('2');
    el('[data-fa-step="2"]').scrollIntoView({ behavior: 'smooth', block: 'start' });

    track('calc_result_reached', {
      mode: r.mode,
      effective_rate: r.effectiveRate,
      above_threshold: r.aboveThreshold
    });
  }

  el('[data-fa-run]').addEventListener('click', function () {
    if (validateStep1()) renderResult();
  });

  el('[data-fa-switch-back]').addEventListener('click', function () {
    var known = root.querySelector('[data-fa-mode][value="known_cost"]');
    known.checked = true;
    applyMode('known_cost');
    hide('2');
    show('1');
    el('[data-fa-step="1"]').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  /* --------------------------------------------------------------------------
     GATE
     -------------------------------------------------------------------------- */

  el('[data-fa-open-gate]').addEventListener('click', function () {
    hide('2');
    show('gate');
    el('[data-fa-step="gate"]').scrollIntoView({ behavior: 'smooth', block: 'start' });
    track('calc_gate_shown', { mode: state.mode, above_threshold: state.result.aboveThreshold });
  });

  function validateGate() {
    var ok = true;
    var email = field('work_email').value.trim();

    ok = setError('full_name', field('full_name').value.trim().length < 2) && ok;
    ok = setError('work_email', !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) && ok;
    ok = setError('phone', field('phone').value.replace(/[^0-9]/g, '').length < 10) && ok;
    ok = setError('business_name', field('business_name').value.trim().length < 2) && ok;
    ok = setError('transactions', !(parseInt(field('transactions').value, 10) >= 1)) && ok;
    ok = setError('provider_type', !field('provider_type').value) && ok;
    ok = setError('contract_end', !field('contract_end').value) && ok;
    ok = setError('pos_system', field('pos_system').value.trim().length < 2) && ok;

    if (!ok) track('calc_validation_error', { step: 'gate' });
    return ok;
  }

  /* The payload the CRM will receive. Assembled but NOT sent — see the header.
     Kept as one flat object so the field list in the spec can be checked against
     it line by line. */
  function buildPayload() {
    var r = state.result;
    var params = new URLSearchParams(window.location.search);
    var transactions = parseInt(field('transactions').value, 10);

    return {
      // inputs
      mode: r.mode,
      fees_last_month: r.mode === 'known_cost' ? r.fees : null,
      volume_last_month: r.mode === 'known_cost' ? r.volume : null,
      volume_monthly_est: r.mode === 'estimate' ? r.volume : null,
      card_mix: field('card_mix').value || null,
      vertical: r.vertical,
      locations: r.locations,
      full_name: field('full_name').value.trim(),
      work_email: field('work_email').value.trim(),
      phone: field('phone').value.trim(),
      business_name: field('business_name').value.trim(),
      transactions_last_month: transactions,
      current_provider_type: field('provider_type').value,
      contract_end: field('contract_end').value,
      pos_system: field('pos_system').value.trim(),

      // computed
      effective_rate: r.effectiveRate,
      credx_cost_monthly: r.credxCost,
      gross_gap_monthly: r.grossGap,
      saving_monthly_low: r.monthlyLow,
      saving_monthly_high: r.monthlyHigh,
      saving_annual_low: r.annualLow,
      saving_annual_high: r.annualHigh,
      saving_three_year_low: r.threeYearLow,
      saving_three_year_high: r.threeYearHigh,
      cost_per_transaction: r.fees / transactions,
      average_ticket: r.volume / transactions,
      saving_per_location_low: r.monthlyLow / r.locations,
      saving_per_location_high: r.monthlyHigh / r.locations,

      // flags
      above_threshold: r.aboveThreshold,
      gate_completed: true,
      // ⚠ THE FIGURE THE MERCHANT ACTUALLY SAW, stored verbatim. The sales call
      // opens on this number, and re-deriving it later from the stored inputs
      // risks a mismatch if a constant ever moves.
      figure_shown: el('[data-fa-monthly]').textContent,

      // attribution
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      utm_content: params.get('utm_content'),
      utm_term: params.get('utm_term'),
      entry_point: params.get('entry') || 'direct',
      page_path: window.location.pathname,
      referrer: document.referrer || null,

      // meta
      timestamp_iso: new Date().toISOString(),
      consent_flag: true,
      language_version: 'en_CA'
    };
  }

  function renderBreakdown() {
    var r = state.result;
    var transactions = parseInt(field('transactions').value, 10);

    el('[data-fa-per-sale]').textContent = fmt2(r.fees / transactions);
    el('[data-fa-avg-ticket]').textContent = fmt2(r.volume / transactions);
    el('[data-fa-per-location]').textContent =
      fmt(r.monthlyLow / r.locations) + ' to ' + fmt(r.monthlyHigh / r.locations);
    el('[data-fa-three-year]').textContent = fmt(r.threeYearLow) + ' to ' + fmt(r.threeYearHigh);

    var contract = field('contract_end').value;
    var timing = el('[data-fa-timing]');
    if (contract === 'free_now') {
      timing.textContent = 'You are free to move now.';
    } else if (contract === 'unsure') {
      timing.textContent = 'Worth checking when your current agreement ends. It decides how soon any of this can start.';
    } else {
      var when = {
        lt_3m: 'within 3 months', '3_6m': 'in 3 to 6 months',
        '6_12m': 'in 6 to 12 months', gt_12m: 'in more than a year'
      }[contract];
      timing.textContent = 'Your agreement ends ' + when + '. You could move then.';
    }

    /* ⚠ THE INTEGRATION LINE STAYS HIDDEN until the supported POS/DMS list
       arrives. Naming their system back to them without knowing whether we
       integrate with it is a claim, not a courtesy.
       The per-vertical "what the saving buys" block is absent for the same
       reason — those figures need real research and have not been sourced. */

    var close = el('[data-fa-close]');
    if (r.aboveThreshold) {
      close.innerHTML =
        '<h3 class="fa__h3">Worth a proper conversation.</h3>' +
        '<p class="fa__sub">Book a call and we will walk through your numbers together.</p>' +
        // {{PENDING:booking-url}} — owed by the client. Falls back to /contact,
        // the same fallback every other page on the site uses.
        '<a href="../contact/" class="btn btn-primary fa__submit" data-pending="booking-url">Book a call</a>';
      close.querySelector('a').addEventListener('click', function () { track('calc_booking_click', {}); });
    } else {
      /* 🔴 NO CALENDAR IS RENDERED FOR BELOW-THRESHOLD MERCHANTS. Not hidden with
         CSS, not present and disabled. Absent. They still see the full result and
         they are still captured — what they never see is a sales calendar.
         ⚠ The copy says why without saying "you do not qualify". Empowering,
         never attacking, applies hardest on the one screen where we turn someone
         down. */
      close.innerHTML =
        '<h3 class="fa__h3">Keep this handy.</h3>' +
        '<p class="fa__sub">CredX is built for businesses running $250,000 or more a month in card volume. You are not there yet, so we will send your breakdown by email and check back when the timing is better.</p>' +
        '<button type="button" class="btn btn-primary fa__submit" data-fa-nurture>Email me my breakdown</button>';
      close.querySelector('[data-fa-nurture]').addEventListener('click', function () {
        track('calc_nurture_click', {});
        el('[data-fa-sent]').textContent =
          'Sent. Your breakdown is on its way to ' + field('work_email').value.trim() + '.';
        hide('3');
        show('sent');
        el('[data-fa-step="sent"]').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    hide('gate');
    show('3');
    el('[data-fa-step="3"]').scrollIntoView({ behavior: 'smooth', block: 'start' });

    track('calc_breakdown_reached', { above_threshold: r.aboveThreshold });
  }

  el('[data-fa-gate-submit]').addEventListener('click', function () {
    if (!validateGate()) return;

    var payload = buildPayload();
    // 🔴 The one line that is missing a destination. When the CRM spec lands,
    // this is where it goes — and nowhere else on the page.
    track('calc_gate_completed', {
      mode: payload.mode,
      above_threshold: payload.above_threshold,
      contract_end: payload.contract_end
    });
    window.credxLastPayload = payload;

    renderBreakdown();
  });

  /* --------------------------------------------------------------------------
     RESTART
     -------------------------------------------------------------------------- */

  all('[data-fa-restart]').forEach(function (button) {
    button.addEventListener('click', function () {
      var from = button.closest('[data-fa-step]').getAttribute('data-fa-step');
      hide('2'); hide('3'); hide('gate'); hide('sent');
      show('1');
      el('[data-fa-step="1"]').scrollIntoView({ behavior: 'smooth', block: 'start' });
      track('calc_restart', { from_step: from });
    });
  });

  track('calc_start', {
    entry_point: new URLSearchParams(window.location.search).get('entry') || 'direct',
    page_path: window.location.pathname
  });
})();
