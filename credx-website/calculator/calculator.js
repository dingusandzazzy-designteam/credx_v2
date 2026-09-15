
(function () {
  'use strict';

  var root = document.querySelector('[data-fa]');
  if (!root) return;

  var CREDX_RATE = 0.006;

  var BASELINE_RATE = 0.036;

  var BAND_LOW = 0.40;
  var BAND_HIGH = 0.85;

  var THRESHOLD = 250000;

  var money0 = new Intl.NumberFormat('en-CA', {
    style: 'currency', currency: 'CAD', maximumFractionDigits: 0
  });
  var money2 = new Intl.NumberFormat('en-CA', {
    style: 'currency', currency: 'CAD', minimumFractionDigits: 2, maximumFractionDigits: 2
  });

  function fmt(n) { return money0.format(Math.floor(n)); }
  function fmt2(n) { return money2.format(Math.floor(n * 100) / 100); }
  function pct(n) { return (Math.round(n * 1000) / 10) + '%'; }

  function pair(low, high) {
    return fmt(low) === fmt(high) ? fmt(low) : fmt(low) + ' to ' + fmt(high);
  }

  function el(sel) { return root.querySelector(sel); }
  function all(sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }
  function field(name) { return el('[data-fa-field="' + name + '"]'); }

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

  window.credxEvents = window.credxEvents || [];
  function track(name, props) {
    window.credxEvents.push({ event: name, props: props || {}, at: new Date().toISOString() });
  }

  var state = { mode: 'known_cost' };

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

      monthlyLow: known ? grossGap : grossGap * BAND_LOW,
      monthlyHigh: known ? grossGap : grossGap * BAND_HIGH,
      annualLow: (known ? grossGap : grossGap * BAND_LOW) * 12,
      annualHigh: (known ? grossGap : grossGap * BAND_HIGH) * 12,
      threeYearLow: (known ? grossGap : grossGap * BAND_LOW) * 36,
      threeYearHigh: (known ? grossGap : grossGap * BAND_HIGH) * 36,
      locations: Math.max(1, parseInt(field('locations').value, 10) || 1),
      vertical: field('vertical').value,
      aboveThreshold: volume >= THRESHOLD
    };
  }

  function validateStep1() {
    var ok = true;
    var known = state.mode === 'known_cost';

    if (known) {
      var fees = parseMoney(field('fees').value);
      var volume = parseMoney(field('volume').value);
      ok = setError('fees', fees <= 0) && ok;
      ok = setError('volume', volume <= 0) && ok;

      if (fees > 0 && volume > 0 && fees >= volume) {
        var cross = el('[data-fa-error="cross"]');
        cross.textContent = 'Those numbers look swapped. Fees are the smaller figure.';
        cross.hidden = false;
        ok = false;
      } else {
        setError('cross', false);
      }

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

    el('[data-fa-credx]').textContent = 'Through CredX, that same month costs ' + fmt(r.credxCost) + '.';

    el('[data-fa-monthly]').textContent = pair(r.monthlyLow, r.monthlyHigh);
    el('[data-fa-annual]').textContent = pair(r.annualLow, r.annualHigh) + ' a year';

    var hedge = el('[data-fa-hedge]');
    hedge.textContent = known
      ? ''
      : 'This is an estimate. Recovery runs from 40% up to 85% of standard interchange, and results vary by volume and card mix.';
    hedge.hidden = known;

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

  function buildPayload() {
    var r = state.result;
    var params = new URLSearchParams(window.location.search);
    var transactions = parseInt(field('transactions').value, 10);

    return {

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

      above_threshold: r.aboveThreshold,
      gate_completed: true,

      figure_shown: el('[data-fa-monthly]').textContent,

      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      utm_content: params.get('utm_content'),
      utm_term: params.get('utm_term'),
      entry_point: params.get('entry') || 'direct',
      page_path: window.location.pathname,
      referrer: document.referrer || null,

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
      pair(r.monthlyLow / r.locations, r.monthlyHigh / r.locations);
    el('[data-fa-three-year]').textContent = pair(r.threeYearLow, r.threeYearHigh);

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

    var close = el('[data-fa-close]');
    if (r.aboveThreshold) {
      close.innerHTML =
        '<h3 class="fa__h3">Worth a proper conversation.</h3>' +
        '<p class="fa__sub">Book a call and we will walk through your numbers together.</p>' +

        '<a href="../contact/" class="btn btn-primary fa__submit" data-pending="booking-url">Book a call</a>';
      close.querySelector('a').addEventListener('click', function () { track('calc_booking_click', {}); });
    } else {

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

    track('calc_gate_completed', {
      mode: payload.mode,
      above_threshold: payload.above_threshold,
      contract_end: payload.contract_end
    });
    window.credxLastPayload = payload;

    renderBreakdown();
  });

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
