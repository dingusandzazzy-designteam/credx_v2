/* ============================================================
   CredX v2 — Automotive landing page
   Motion: Lenis smooth scroll + GSAP ScrollTrigger reveals + subtle parallax
   Interaction: calculator widget · modal open/close · nav scroll state
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
  let lastScrollY = 0;
  function updateNavOnScroll() {
    const y = window.scrollY;
    if (y > 24) {
      nav.style.backgroundColor = 'rgba(11, 12, 22, 0.92)';
    } else {
      nav.style.backgroundColor = 'rgba(11, 12, 22, 0.7)';
    }
    lastScrollY = y;
  }
  if (lenis) {
    lenis.on('scroll', updateNavOnScroll);
  } else {
    window.addEventListener('scroll', updateNavOnScroll, { passive: true });
  }

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

      // Progress → video-time anchors. Each beat is structured as:
      //   play-in (video advances quickly to the beat's hold frame)
      //   → HOLD (currentTime constant, title fully on for reading)
      //   → transition (video advances through scene end + gap + next fade-in)
      // Hold frames sit inside each beat's full-opacity range so the title
      // is fully visible during the read. -1 in t means "clamp to duration".
      // Source timecodes (24fps): 0.000 / 4.417 / 10.167 / 13.917.
      const ANCHORS = [
        { p: 0.00, t: 0.000  },  // B1 enter (00:00:00:00)
        { p: 0.04, t: 1.500  },  // B1 reached hold frame
        { p: 0.22, t: 1.500  },  // B1 HOLD
        { p: 0.27, t: 6.500  },  // → cross scene 1 end, gap, into B2 hold
        { p: 0.45, t: 6.500  },  // B2 HOLD
        { p: 0.50, t: 12.000 },  // → into B3 hold
        { p: 0.68, t: 12.000 },  // B3 HOLD
        { p: 0.75, t: 13.917 },  // → into B4 (00:00:13:22)
        { p: 1.00, t: -1     },  // B4 HOLD on last frame
      ];

      const progressToTime = (p, duration) => {
        const clamped = p < 0 ? 0 : p > 1 ? 1 : p;
        for (let i = 0; i < ANCHORS.length - 1; i++) {
          const a = ANCHORS[i];
          const b = ANCHORS[i + 1];
          if (clamped >= a.p && clamped <= b.p) {
            const span = b.p - a.p;
            const local = span === 0 ? 0 : (clamped - a.p) / span;
            const tA = a.t < 0 ? duration : a.t;
            const tB = b.t < 0 ? duration : b.t;
            return tA + (tB - tA) * local;
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

      // One-shot intro: on the very first scroll intent we lock the page,
      // play the full cover timeline (video + beats), then release and
      // smooth-scroll to the next section (hero--full). Subsequent scrolls
      // behave normally — the cover stays in its final state until the user
      // scrolls back to top.
      const INTRO_DURATION = 11.0; // seconds — total length of the cover play-through

      let introState = 'idle'; // 'idle' | 'playing' | 'done'
      const intentEvents = ['wheel', 'touchmove', 'keydown'];
      const KEY_INTENT = new Set(['ArrowDown', 'PageDown', 'Space', ' ', 'End']);

      const onIntent = (e) => {
        if (introState !== 'idle') return;
        if (window.scrollY > 4) return; // only at top
        if (e.type === 'keydown' && !KEY_INTENT.has(e.key)) return;
        e.preventDefault();
        playIntro();
      };

      const lockScroll = () => {
        if (lenis && typeof lenis.stop === 'function') lenis.stop();
        document.body.style.overflow = 'hidden';
        intentEvents.forEach((ev) => window.removeEventListener(ev, onIntent, { passive: false }));
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

      const playIntro = () => {
        introState = 'playing';
        lockScroll();
        const proxy = { p: 0 };
        window.gsap.to(proxy, {
          p: 1,
          duration: INTRO_DURATION,
          ease: 'none',
          onUpdate: () => queueScrub(proxy.p),
          onComplete: () => {
            introState = 'done';
            unlockScroll();
            // Give Lenis a tick to resume, then glide to the hero section.
            requestAnimationFrame(scrollToHero);
          },
        });
      };

      const onReady = () => {
        cover.classList.add('is-video-ready');
        // Force a first frame paint at t=0.
        try { video.currentTime = 0; } catch (_) {}
        // Make sure beat 1 is visible while we wait for the user.
        updateBeats(0, video.duration || 14);
        // Wire scroll-intent listeners (non-passive so we can preventDefault).
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
  const monthlyOutput = document.querySelector('[data-calc-output-monthly]');
  const yearlyOutput = document.querySelector('[data-calc-output-yearly]');

  function formatFull(value) {
    return '$' + Math.round(value).toLocaleString('en-US');
  }

  // Calculator math (per v2 screenshot model):
  //   $36K interchange per $1M (Visa/MC benchmark) — $6K residual per $1M with CredX
  //   = $30K saved per $1M/month → 3% effective rate
  function updateCalc() {
    if (!slider) return;
    const monthly = parseFloat(slider.value);
    const monthlySaved = monthly * 0.03;
    const yearlySaved = monthlySaved * 12;

    if (volumeDisplay) volumeDisplay.textContent = formatFull(monthly);
    if (monthlyOutput) monthlyOutput.textContent = formatFull(monthlySaved);
    if (yearlyOutput) yearlyOutput.innerHTML = formatFull(yearlySaved) + '<em class="accent">/year</em>';
  }

  if (slider) {
    slider.addEventListener('input', updateCalc);
    updateCalc();
  }

  /* ---- 6. Modals ---- */

  const triggers = document.querySelectorAll('[data-modal-trigger]');
  const closes = document.querySelectorAll('[data-modal-close]');
  let lastFocus = null;

  function openModal(id) {
    const modal = document.getElementById('modal-' + id);
    if (!modal) return;
    lastFocus = document.activeElement;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (lenis) lenis.stop();
    // Focus first focusable inside modal
    const firstInput = modal.querySelector('input, select, textarea, button');
    if (firstInput) setTimeout(() => firstInput.focus(), 50);
  }

  function closeModal(modal) {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lenis) lenis.start();
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const id = trigger.getAttribute('data-modal-trigger');
      openModal(id);
    });
  });

  closes.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      const modal = closeBtn.closest('.modal');
      if (modal) closeModal(modal);
    });
  });

  // Click outside panel closes modal
  document.querySelectorAll('.modal').forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  // Escape closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModals = document.querySelectorAll('.modal[aria-hidden="false"]');
      openModals.forEach((m) => closeModal(m));
    }
  });

  /* ---- 7. Form submit (placeholder — wire to Zapier/CRM in Phase 7) ---- */

  const contactForm = document.querySelector('[data-form="contact"]');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      // Phase 7: replace with actual endpoint (Zapier webhook / Calendly / CRM)
      console.log('Contact form submitted (placeholder):', data);
      alert('Thanks. A CredX partner specialist will reach out within one business day.');
      const modal = contactForm.closest('.modal');
      if (modal) closeModal(modal);
      contactForm.reset();
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
