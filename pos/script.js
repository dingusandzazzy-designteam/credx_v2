/* ============================================================
   CredX v2 — POS Platforms landing page (Template B — channel)
   Motion: Lenis smooth scroll + GSAP ScrollTrigger reveals + subtle parallax
   Interaction: 2-step partner form · theme toggle · nav scroll state
   (No calculator / cover-scrub on the channel page — those blocks below are
   guarded and no-op when their elements are absent.)
   Respects prefers-reduced-motion.
   ============================================================ */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isPointerFine = window.matchMedia('(pointer: fine)').matches;

  /* ---- 1. Lenis smooth scroll ---- */

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

    // Sync GSAP ScrollTrigger with Lenis
    if (window.gsap && window.ScrollTrigger) {
      lenis.on('scroll', window.ScrollTrigger.update);
      window.gsap.ticker.add((time) => lenis.raf(time * 1000));
      window.gsap.ticker.lagSmoothing(0);
    }
  }

  /* ---- 2. Nav scroll state ---- */

  const nav = document.querySelector('.nav');
  function updateNavOnScroll() {
    if (!nav) return;
    // Theme-aware bg is driven by --nav-bg / --nav-bg-scrolled tokens; JS only
    // toggles the scrolled state so it works in both light and dark themes.
    nav.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  if (lenis) {
    lenis.on('scroll', updateNavOnScroll);
  } else {
    window.addEventListener('scroll', updateNavOnScroll, { passive: true });
  }
  updateNavOnScroll();

  /* ---- 3. Reveal-on-scroll ---- */

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
    // Fallback IntersectionObserver if GSAP is unavailable
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

  /* ---- 3b. Editorial word-reveal (titles) + cinematic media wipe ----
     Signature motion. Fraunces section titles rise word-by-word from behind a
     mask; the wide photos reveal with a left-to-right clip + slow zoom-out.
     GSAP-driven, so the hidden state only exists when we will actually animate
     — no-JS and reduced-motion keep everything visible (see CSS §18 fallback). */

  if (!prefersReducedMotion && window.gsap && window.ScrollTrigger) {
    const _gsap = window.gsap;

    // Split text into word spans, each in an overflow-clip mask. Inline tags
    // (e.g. <em class="accent">) are kept as a single word unit so their style
    // and wrapping survive intact.
    function wordSplit(el) {
      const words = [];
      const frag = document.createDocumentFragment();
      Array.prototype.forEach.call(el.childNodes, function (node) {
        if (node.nodeType === 3) {
          node.textContent.split(/(\s+)/).forEach(function (part) {
            if (part === '') return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            const mask = document.createElement('span');
            mask.className = 'reveal-word-mask';
            const word = document.createElement('span');
            word.className = 'reveal-word';
            word.textContent = part;
            mask.appendChild(word);
            frag.appendChild(mask);
            words.push(word);
          });
        } else if (node.nodeType === 1) {
          // Preserve hard line breaks as real <br> (not a word unit).
          if (node.tagName === 'BR') { frag.appendChild(document.createElement('br')); return; }
          const mask = document.createElement('span');
          mask.className = 'reveal-word-mask';
          const word = document.createElement('span');
          word.className = 'reveal-word';
          word.appendChild(node.cloneNode(true));
          mask.appendChild(word);
          frag.appendChild(mask);
          words.push(word);
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
        // Never leave a title hidden — snap words back to visible.
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
        // Never leave media hidden — clear the clip + scale.
        try { _gsap.set(media, { clipPath: 'none' }); if (img) _gsap.set(img, { scale: 1 }); } catch (_) {}
      }
    });
  }

  /* ---- 4a. Cover scrub (Trilha B — video scrubbed by scroll) ----
     Source timecodes provided by edit (24 fps, HH:MM:SS:FF):
       00:00:00:00  Intro   → 0.000s
       00:00:04:10  Cena 1  → 4.417s
       00:00:10:04  Cena 2  → 10.167s
       00:00:13:22  Final   → 13.917s
     Beats are switched when currentTime crosses each marker. */

  if (!prefersReducedMotion && window.gsap && window.ScrollTrigger) {
    const cover = document.querySelector('.cover-scrub');
    const video = cover && cover.querySelector('[data-cover-video]');
    if (cover && video) {
      const beats = Array.from(cover.querySelectorAll('.cover-scrub__beat'));
      const dots = cover.querySelectorAll('.cover-scrub__progress-dot');

      // Beat boundaries (seconds) — one entry per beat = start time.
      const BEAT_STARTS = [0, 4.417, 10.167, 13.917];
      // Per-beat fade tuning (seconds). GAP = time of "video only, no copy"
      // before the next beat enters.
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
          // Beat 0 starts fully visible at t=0 (no entry fade) by virtually
          // shifting its window to the left.
          const visStart = (i === 0) ? -FADE_IN : BEAT_STARTS[i];
          const nextStart = (i + 1 < BEAT_STARTS.length) ? BEAT_STARTS[i + 1] : duration;
          // Last beat: no fade-out — title stays on screen until the next
          // section scrolls in (pin release).
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

      // Progress → video-time anchors. One anchor per source keyframe.
      // The intro is no longer auto-played: each user scroll-intent advances
      // the video from the current keyframe to the next one and stops there,
      // waiting for the next action. Title fade-in offsets (+0.45s) on B2/B3
      // ensure the title is fully on at each stop.
      // Source keyframes (24fps): 0.000 / 4.417 / 10.167 / 13.917.
      // -1 in t means "clamp to video duration at runtime".
      const ANCHORS = [
        { p: 0.000, t: 0.000  },  // Step 0 — B1 keyframe
        { p: 0.333, t: 4.867  },  // Step 1 — B2 keyframe (+ fade-in offset)
        { p: 0.667, t: 10.617 },  // Step 2 — B3 keyframe (+ fade-in offset)
        { p: 1.000, t: -1     },  // Step 3 — B4 final frame
      ];

      const progressToTime = (p, duration) => {
        const clamped = p < 0 ? 0 : p > 1 ? 1 : p;
        for (let i = 0; i < ANCHORS.length - 1; i++) {
          const a = ANCHORS[i];
          const b = ANCHORS[i + 1];
          if (clamped >= a.p && clamped <= b.p) {
            const span = b.p - a.p;
            const local = span === 0 ? 0 : (clamped - a.p) / span;
            // Smoothstep eases entry/exit of each anchor segment so the
            // video doesn't jolt when crossing between a hold (zero slope)
            // and a transition (high slope) — and back.
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
        // Setting currentTime triggers an async seek; we don't await it.
        try { video.currentTime = t; } catch (_) {}
        updateBeats(t, video.duration);
        setActiveDot(beatFromTime(t));
      };
      const queueScrub = (progress) => {
        pendingProgress = progress;
        if (rafId == null) rafId = requestAnimationFrame(applyScrub);
      };

      // Step-driven intro: page is locked while the cover holds focus. Each
      // scroll/touch/key intent advances the video from one keyframe to the
      // next over STEP_DURATION seconds, then stops and waits. After the
      // last keyframe a final intent releases scroll and glides to the hero.
      const STEP_DURATION = 3.0; // seconds per keyframe-to-keyframe transition
      const COOLDOWN_MS = 350;   // ignore residual scroll inertia after a step

      let currentStep = 0;       // index into ANCHORS — last keyframe reached
      let introState = 'idle';   // 'idle' | 'playing' | 'awaiting' | 'done'
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
        // Give Lenis a tick to resume, then glide to the hero section.
        requestAnimationFrame(scrollToHero);
      };

      const onIntent = (e) => {
        if (introState === 'playing' || cooldown) return;
        if (e.type === 'keydown' && !KEY_INTENT.has(e.key)) return;
        // Lock applies once intro starts; before that, only respond when at top.
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

  /* ---- 4a2. Hero entrance — slow scale-in on the background image ----
     Brand signature load moment. Composes with the parallax y-tween below
     (GSAP merges scale + y on the same target). The CSS `heroIn` keyframe is
     the no-JS fallback; GSAP overrides transform when present. */

  if (!prefersReducedMotion && window.gsap) {
    window.gsap.fromTo(
      '.hero__bg',
      { scale: 1.07 },
      { scale: 1, duration: 1.5, ease: 'expo.out' }
    );
  }

  /* ---- 4b. Subtle parallax on hero bg + pain media ---- */

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

  /* ---- 5. Calculator widget ---- */

  const slider = document.querySelector('[data-calc-input]');
  const volumeDisplay = document.querySelector('[data-calc-volume-display]');
  const yearlyOutput = document.querySelector('[data-calc-output-yearly]');

  function formatFull(value) {
    return '$' + Math.round(value).toLocaleString('en-US');
  }

  // Single output — recovered/year (value-back "Output 2" removed 2026-06-09).
  //   recovered/year = volume × 0.03 × 12
  //   ($36K interchange − $6K residual per $1M = $30K/$1M/month → 3% effective).
  function updateCalc() {
    if (!slider) return;
    const monthly = parseFloat(slider.value);
    const yearly = monthly * 0.03 * 12;
    if (volumeDisplay) volumeDisplay.textContent = formatFull(monthly);
    if (yearlyOutput) yearlyOutput.textContent = formatFull(yearly);
  }

  if (slider) {
    slider.addEventListener('input', updateCalc);
    updateCalc();
  }

  // Count the recovered-per-year figure up from zero the first time the
  // output scrolls into view — the page's one data flourish. After that the
  // slider drives it instantly. Skipped under reduced motion (stays final).
  if (slider && yearlyOutput && !prefersReducedMotion && window.ScrollTrigger) {
    const targetVal = parseFloat(slider.value) * 0.03 * 12;
    yearlyOutput.textContent = formatFull(0);
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
          yearlyOutput.textContent = formatFull(targetVal * eased);
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
      },
    });
  }

  /* ---- 6. Theme toggle (localStorage + first-load handled inline in <head>) ---- */

  const themeToggle = document.querySelector('[data-theme-toggle]');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const next = isLight ? 'dark' : 'light';
      if (next === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
      try { localStorage.setItem('credx-theme', next); } catch (e) {}
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', next === 'light' ? '#f4f5f9' : '#0b0c16');
    });
  }

  /* ---- 7. Signup — 2-step progressive form (placeholder → CRM in Phase 7) ---- */

  const signupForm = document.querySelector('[data-signup-form]');
  if (signupForm) {
    const step1 = signupForm.querySelector('[data-step="1"]');
    const step2 = signupForm.querySelector('[data-step="2"]');
    const step1Btn = signupForm.querySelector('[data-step1-next]');
    const reward = signupForm.querySelector('[data-signup-reward]');
    const done = signupForm.querySelector('[data-signup-done]');

    if (step1Btn && step1) {
      step1Btn.addEventListener('click', () => {
        // Validate step 1 required fields only.
        const fields = step1.querySelectorAll('input[required]');
        for (let i = 0; i < fields.length; i++) {
          if (!fields[i].checkValidity()) { fields[i].reportValidity(); return; }
        }
        // Phase 7: push step 1 to Kyle's CRM here — fires even if step 2 is skipped.
        console.log('Signup step 1 (placeholder → CRM):', Object.fromEntries(new FormData(signupForm).entries()));
        if (reward) {
          reward.textContent = ‘You are in. Be the platform that pays for itself. Two more questions and we will model your channel.’;
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
      // Phase 7: push the full (step 1 + step 2) payload to CRM here.
      console.log('Signup step 2 (placeholder → CRM):', Object.fromEntries(new FormData(signupForm).entries()));
      if (step2) step2.hidden = true;
      if (reward) reward.hidden = true;
      if (done) done.hidden = false;
    });
  }

  /* ---- 8. Smooth in-page nav scroll ---- */

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
