

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isPointerFine = window.matchMedia('(pointer: fine)').matches;

  let lenis = null;
  if (!prefersReducedMotion && window.Lenis) {
    lenis = new window.Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (window.gsap && window.ScrollTrigger) {
      lenis.on('scroll', window.ScrollTrigger.update);
      window.gsap.ticker.add((time) => lenis.raf(time * 1000));
      window.gsap.ticker.lagSmoothing(0);
    }
  }

  const nav = document.querySelector('.nav');
  function updateNavOnScroll() {
    if (!nav) return;

    nav.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  if (lenis) {
    lenis.on('scroll', updateNavOnScroll);
  } else {
    window.addEventListener('scroll', updateNavOnScroll, { passive: true });
  }
  updateNavOnScroll();

  if (!prefersReducedMotion && window.gsap && window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);

    const revealEls = document.querySelectorAll('[data-reveal]');
    revealEls.forEach((el) => {
      window.ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: () => el.classList.add('is-revealed'),
      });
    });
  } else if (prefersReducedMotion) {
    document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-revealed'));
  } else {

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
  }

  if (!prefersReducedMotion && window.gsap && window.ScrollTrigger) {
    const _gsap = window.gsap;

    function wordSplit(el) {
      const words = [];
      const frag = document.createDocumentFragment();

      let prev = null;
      let contiguous = false;
      const isPunctuation = function (s) { return !/[0-9A-Za-zÀ-ÿ]/.test(s); };

      Array.prototype.forEach.call(el.childNodes, function (node) {
        if (node.nodeType === 3) {
          node.textContent.split(/(\s+)/).forEach(function (part) {
            if (part === '') return;
            if (/^\s+$/.test(part)) {
              frag.appendChild(document.createTextNode(part));
              contiguous = false;
              return;
            }

            if (contiguous && prev && isPunctuation(part)) {
              prev.appendChild(document.createTextNode(part));
              return;
            }
            const mask = document.createElement('span');
            mask.className = 'reveal-word-mask';
            const word = document.createElement('span');
            word.className = 'reveal-word';
            word.textContent = part;
            mask.appendChild(word);
            frag.appendChild(mask);
            words.push(word);
            prev = word;
            contiguous = true;
          });
        } else if (node.nodeType === 1) {

          if (node.tagName === 'BR') {
            frag.appendChild(document.createElement('br'));
            prev = null;
            contiguous = false;
            return;
          }
          const mask = document.createElement('span');
          mask.className = 'reveal-word-mask';
          const word = document.createElement('span');
          word.className = 'reveal-word';
          word.appendChild(node.cloneNode(true));
          mask.appendChild(word);
          frag.appendChild(mask);
          words.push(word);
          prev = word;
          contiguous = true;
        }
      });
      el.textContent = '';
      el.appendChild(frag);
      return words;
    }

    document.querySelectorAll('[data-reveal-words]').forEach(function (title) {
      let words = [];
      try {
        words = wordSplit(title);
        if (!words.length) return;
        _gsap.set(words, { yPercent: 115 });
        _gsap.to(words, {
          yPercent: 0,
          duration: 0.85,
          ease: 'power3.out',
          stagger: 0.055,
          scrollTrigger: { trigger: title, start: 'top 88%', once: true },
        });
      } catch (e) {

        if (words.length) { try { _gsap.set(words, { yPercent: 0 }); } catch (_) {} }
      }
    });

    document.querySelectorAll('[data-reveal-media]').forEach(function (media) {
      const img = media.querySelector('img');
      try {
        _gsap.set(media, { clipPath: 'inset(0 0 0 100%)' });
        if (img) _gsap.set(img, { scale: 1.25 });
        const tl = _gsap.timeline({
          scrollTrigger: { trigger: media, start: 'top 85%', once: true },
        });
        tl.to(media, { clipPath: 'inset(0 0 0 0%)', duration: 1.0, ease: 'power3.out' }, 0);
        if (img) tl.to(img, { scale: 1, duration: 1.15, ease: 'power3.out' }, 0);
      } catch (e) {

        try { _gsap.set(media, { clipPath: 'none' }); if (img) _gsap.set(img, { scale: 1 }); } catch (_) {}
      }
    });
  }

  if (!prefersReducedMotion && window.gsap && window.ScrollTrigger) {
    const gsap = window.gsap;

    document.querySelectorAll('.rail').forEach(function (rail) {
      const stations = rail.querySelectorAll('.rail__station');
      const spines = rail.querySelectorAll('.rail__marker');
      if (!stations.length) return;

      gsap.set(stations, { opacity: 0, y: 18 });
      gsap.set(spines, { '--spine-scale': 0 });

      gsap.timeline({
        scrollTrigger: { trigger: rail, start: 'top 78%', once: true }
      })
        .to(stations, {
          opacity: 1, y: 0, duration: 0.7, ease: 'expo.out', stagger: 0.14
        })
        .to(spines, { '--spine-scale': 1, duration: 0.9, ease: 'expo.out', stagger: 0.14 }, 0.1);
    });

    document.querySelectorAll('.stack').forEach(function (stack) {
      const tiers = stack.querySelectorAll('.stack__tier');
      if (!tiers.length) return;
      gsap.set(tiers, { opacity: 0, y: 22 });
      gsap.to(tiers, {
        opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', stagger: 0.16,
        scrollTrigger: { trigger: stack, start: 'top 80%', once: true }
      });
    });

    document.querySelectorAll('.triad').forEach(function (triad) {
      gsap.set(triad, { '--rule-scale': 0 });
      gsap.to(triad, {
        '--rule-scale': 1, duration: 1.1, ease: 'expo.out',
        scrollTrigger: { trigger: triad, start: 'top 82%', once: true }
      });
    });
  }

  if (!prefersReducedMotion && window.gsap && window.ScrollTrigger) {
    const cover = document.querySelector('.cover-scrub');
    const video = cover && cover.querySelector('[data-cover-video]');
    if (cover && video) {
      const beats = Array.from(cover.querySelectorAll('.cover-scrub__beat'));
      const dots = cover.querySelectorAll('.cover-scrub__progress-dot');

      const BEAT_STARTS = [0, 4.417, 10.167, 13.917];

      const FADE_IN = 0.45;
      const FADE_OUT = 0.45;
      const GAP = 0.55;

      const smoothstep = (x) => {
        const c = x < 0 ? 0 : x > 1 ? 1 : x;
        return c * c * (3 - 2 * c);
      };

      const beatFromTime = (t) => {
        for (let i = BEAT_STARTS.length - 1; i >= 0; i--) {
          if (t >= BEAT_STARTS[i]) return i;
        }
        return 0;
      };

      let lastDotIdx = -1;
      const setActiveDot = (idx) => {
        if (idx === lastDotIdx) return;
        lastDotIdx = idx;
        dots.forEach((el, i) => el.classList.toggle('is-active', i === idx));
      };

      const updateBeats = (t, duration) => {
        const lastIdx = beats.length - 1;
        for (let i = 0; i < beats.length; i++) {

          const visStart = (i === 0) ? -FADE_IN : BEAT_STARTS[i];
          const nextStart = (i + 1 < BEAT_STARTS.length) ? BEAT_STARTS[i + 1] : duration;

          const isLast = (i === lastIdx);
          const visEnd = isLast
            ? Number.POSITIVE_INFINITY
            : Math.max(visStart + FADE_IN + 0.05, nextStart - GAP);
          let op;
          if (t < visStart || t >= visEnd) {
            op = 0;
          } else if (t < visStart + FADE_IN) {
            op = smoothstep((t - visStart) / FADE_IN);
          } else if (!isLast && t > visEnd - FADE_OUT) {
            op = smoothstep((visEnd - t) / FADE_OUT);
          } else {
            op = 1;
          }
          const el = beats[i];
          el.style.opacity = op.toFixed(3);
          el.style.transform = 'translateY(' + ((1 - op) * 8).toFixed(2) + 'px)';
          el.style.pointerEvents = op > 0.5 ? 'auto' : 'none';
        }
      };

      const ANCHORS = [
        { p: 0.000, t: 0.000  },
        { p: 0.333, t: 4.867  },
        { p: 0.667, t: 10.617 },
        { p: 1.000, t: -1     },
      ];

      const progressToTime = (p, duration) => {
        const clamped = p < 0 ? 0 : p > 1 ? 1 : p;
        for (let i = 0; i < ANCHORS.length - 1; i++) {
          const a = ANCHORS[i];
          const b = ANCHORS[i + 1];
          if (clamped >= a.p && clamped <= b.p) {
            const span = b.p - a.p;
            const local = span === 0 ? 0 : (clamped - a.p) / span;

            const eased = smoothstep(local);
            const tA = a.t < 0 ? duration : a.t;
            const tB = b.t < 0 ? duration : b.t;
            return tA + (tB - tA) * eased;
          }
        }
        return duration;
      };

      let pendingProgress = 0;
      let rafId = null;
      const applyScrub = () => {
        rafId = null;
        if (!isFinite(video.duration) || video.duration <= 0) return;
        const t = Math.max(0, Math.min(video.duration, progressToTime(pendingProgress, video.duration)));

        try { video.currentTime = t; } catch (_) {}
        updateBeats(t, video.duration);
        setActiveDot(beatFromTime(t));
      };
      const queueScrub = (progress) => {
        pendingProgress = progress;
        if (rafId == null) rafId = requestAnimationFrame(applyScrub);
      };

      const STEP_DURATION = 3.0;
      const COOLDOWN_MS = 350;

      let currentStep = 0;
      let introState = 'idle';
      let cooldown = false;
      const intentEvents = ['wheel', 'touchmove', 'keydown'];
      const KEY_INTENT = new Set(['ArrowDown', 'PageDown', 'Space', ' ', 'End']);

      const lockScroll = () => {
        if (lenis && typeof lenis.stop === 'function') lenis.stop();
        document.body.style.overflow = 'hidden';
      };
      const unlockScroll = () => {
        document.body.style.overflow = '';
        if (lenis && typeof lenis.start === 'function') lenis.start();
      };

      const scrollToHero = () => {
        const target = document.querySelector('.hero--full') || document.querySelector('#pain');
        if (!target) return;
        if (lenis && typeof lenis.scrollTo === 'function') {
          lenis.scrollTo(target, { offset: 0, duration: 1.0 });
        } else {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      const resolveT = (anchor) => (anchor.t < 0 ? video.duration : anchor.t);

      const advanceStep = () => {
        if (introState === 'idle') lockScroll();
        introState = 'playing';
        const fromT = resolveT(ANCHORS[currentStep]);
        const toT = resolveT(ANCHORS[currentStep + 1]);
        const distance = Math.max(0.01, toT - fromT);
        const rate = Math.max(0.25, Math.min(4, distance / STEP_DURATION));

        try {
          if (Math.abs(video.currentTime - fromT) > 0.05) video.currentTime = fromT;
          video.playbackRate = rate;
        } catch (_) {}

        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(() => {});
        }

        const watchFrame = () => {
          if (introState !== 'playing') return;
          const t = video.currentTime;
          updateBeats(t, video.duration);
          setActiveDot(beatFromTime(t));
          if (t >= toT - 0.03 || video.ended) {
            try {
              video.pause();
              video.currentTime = toT;
              video.playbackRate = 1;
            } catch (_) {}
            updateBeats(toT, video.duration);
            setActiveDot(beatFromTime(toT));
            currentStep += 1;
            introState = 'awaiting';
            cooldown = true;
            setTimeout(() => { cooldown = false; }, COOLDOWN_MS);
            return;
          }
          requestAnimationFrame(watchFrame);
        };
        requestAnimationFrame(watchFrame);
      };

      const exitToHero = () => {
        introState = 'done';
        intentEvents.forEach((ev) => window.removeEventListener(ev, onIntent));
        unlockScroll();

        requestAnimationFrame(scrollToHero);
      };

      const onIntent = (e) => {
        if (introState === 'playing' || cooldown) return;
        if (e.type === 'keydown' && !KEY_INTENT.has(e.key)) return;

        if (introState === 'idle' && window.scrollY > 4) return;
        e.preventDefault();
        if (currentStep < ANCHORS.length - 1) {
          advanceStep();
        } else {
          exitToHero();
        }
      };

      const onReady = () => {
        cover.classList.add('is-video-ready');
        try { video.currentTime = 0; } catch (_) {}
        updateBeats(0, video.duration || 14);
        intentEvents.forEach((ev) =>
          window.addEventListener(ev, onIntent, { passive: false })
        );
      };

      if (video.readyState >= 1 && isFinite(video.duration) && video.duration > 0) {
        onReady();
      } else {
        video.addEventListener('loadedmetadata', onReady, { once: true });
      }
    }
  }

  if (!prefersReducedMotion && window.gsap) {
    window.gsap.fromTo(
      '.hero__bg',
      { scale: 1.07 },
      { scale: 1, duration: 1.5, ease: 'expo.out' }
    );
  }

  if (!prefersReducedMotion && isPointerFine && window.gsap && window.ScrollTrigger) {
    const parallaxTargets = [
      { selector: '.hero__bg', amount: 60 },
      { selector: '.pain__media', amount: 30 },
    ];
    parallaxTargets.forEach(({ selector, amount }) => {
      const el = document.querySelector(selector);
      if (!el) return;
      window.gsap.to(el, {
        y: () => amount,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
    });
  }

  const slider = document.querySelector('[data-calc-input]');
  const volumeDisplay = document.querySelector('[data-calc-volume-display]');
  const yearlyOutput = document.querySelector('[data-calc-output-yearly]');

  function formatFull(value) {
    return '$' + Math.round(value).toLocaleString('en-US');
  }

  const RATE_HIGH = 0.03;
  const RATE_LOW = 0.0144;
  const lowOutput = document.querySelector('[data-calc-low]');
  const highOutput = document.querySelector('[data-calc-high]');

  function updateCalc() {
    if (!slider) return;
    const monthly = parseFloat(slider.value);
    if (volumeDisplay) volumeDisplay.textContent = formatFull(monthly);
    if (lowOutput) lowOutput.textContent = formatFull(monthly * RATE_LOW * 12);
    if (highOutput) highOutput.textContent = formatFull(monthly * RATE_HIGH * 12);
  }

  if (slider) {
    slider.addEventListener('input', updateCalc);
    updateCalc();
  }

  if (slider && highOutput && lowOutput && !prefersReducedMotion && window.ScrollTrigger) {
    const targetHigh = parseFloat(slider.value) * RATE_HIGH * 12;
    const targetLow = parseFloat(slider.value) * RATE_LOW * 12;
    lowOutput.textContent = formatFull(0);
    highOutput.textContent = formatFull(0);
    let counted = false;
    window.ScrollTrigger.create({
      trigger: yearlyOutput,
      start: 'top 85%',
      once: true,
      onEnter: function () {
        if (counted) return;
        counted = true;
        const dur = 900;
        const t0 = performance.now();
        (function tick(now) {
          const p = Math.min(1, (now - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 4);

          lowOutput.textContent = formatFull(targetLow * eased);
          highOutput.textContent = formatFull(targetHigh * eased);
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
      },
    });
  }

  const signupForm = document.querySelector('[data-signup-form]');
  if (signupForm) {
    const step1 = signupForm.querySelector('[data-step="1"]');
    const step2 = signupForm.querySelector('[data-step="2"]');
    const step1Btn = signupForm.querySelector('[data-step1-next]');
    const reward = signupForm.querySelector('[data-signup-reward]');
    const done = signupForm.querySelector('[data-signup-done]');

    if (step1Btn && step1) {
      step1Btn.addEventListener('click', () => {

        const fields = step1.querySelectorAll('input[required]');
        for (let i = 0; i < fields.length; i++) {
          if (!fields[i].checkValidity()) { fields[i].reportValidity(); return; }
        }

        console.log('Signup step 1 (placeholder → CRM):', Object.fromEntries(new FormData(signupForm).entries()));
        if (reward) {
          reward.textContent = 'You are in. Based on your volume, you could be keeping up to $30,000 per $1M. Two more questions and we will build your real number.';
          reward.hidden = false;
        }
        if (step2) step2.hidden = false;
        step1Btn.textContent = 'Submitted ✓';
        step1Btn.disabled = true;
        if (step2) {
          if (lenis && typeof lenis.scrollTo === 'function') lenis.scrollTo(step2, { offset: -80 });
          else step2.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'center' });
        }
      });
    }

    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();

      console.log('Signup step 2 (placeholder → CRM):', Object.fromEntries(new FormData(signupForm).entries()));
      if (step2) step2.hidden = true;
      if (reward) reward.hidden = true;
      if (done) done.hidden = false;
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.length <= 1) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target, { offset: -64 });
      } else {
        target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
      }
    });
  });
})();

(function () {
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('[data-nav-toggle]');
  if (!nav || !toggle) return;
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('nav--open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav--open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    });
  });
})();

(function () {
  var form = document.querySelector('[data-contact-form]');
  if (!form) return;

  var done = document.querySelector('[data-contact-done]');

  form.addEventListener('submit', function (event) {

    event.preventDefault();

    var payload = Object.fromEntries(new FormData(form).entries());

    console.warn('[CredX /contact] {{PENDING:form-endpoint}} — submission NOT sent anywhere:', payload);

    if (done) {
      form.hidden = true;
      done.hidden = false;

      done.setAttribute('tabindex', '-1');
      done.focus();
    }
  });

  document.querySelectorAll('a[aria-disabled="true"]').forEach(function (link) {
    link.addEventListener('click', function (event) { event.preventDefault(); });
  });
})();

(function () {
  var group = document.querySelector('[data-nav-group]');
  if (!group) return;
  var toggle = group.querySelector('[data-nav-group-toggle]');

  var mq = window.matchMedia('(max-width: 959px)');
  if (!toggle) return;

  function setOpen(open) {
    group.setAttribute('data-open', open ? 'true' : 'false');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function syncToBreakpoint() {
    if (mq.matches) {

      group.setAttribute('data-open', 'false');
      toggle.setAttribute('aria-expanded', 'true');

      toggle.setAttribute('aria-disabled', 'true');
    } else {
      toggle.removeAttribute('aria-disabled');
      setOpen(false);
    }
  }
  syncToBreakpoint();
  (mq.addEventListener ? mq.addEventListener.bind(mq, 'change') : mq.addListener.bind(mq))(syncToBreakpoint);

  toggle.addEventListener('click', function (e) {
    if (mq.matches) return;
    e.preventDefault();
    setOpen(group.getAttribute('data-open') !== 'true');
  });

  document.addEventListener('click', function (e) {
    if (mq.matches) return;
    if (!group.contains(e.target)) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' || mq.matches) return;
    if (group.getAttribute('data-open') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  group.querySelectorAll('.nav__sublink').forEach(function (link) {
    link.addEventListener('click', function () { if (!mq.matches) setOpen(false); });
  });
})();
