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
      const beats = cover.querySelectorAll('.cover-scrub__beat');
      const dots = cover.querySelectorAll('.cover-scrub__progress-dot');

      // Beat boundaries (seconds) — one entry per beat = start time.
      const BEAT_STARTS = [0, 4.417, 10.167, 13.917];

      let lastIdx = -1;
      const setActive = (idx) => {
        if (idx === lastIdx) return;
        lastIdx = idx;
        beats.forEach((el, i) => el.classList.toggle('is-active', i === idx));
        dots.forEach((el, i) => el.classList.toggle('is-active', i === idx));
      };

      const beatFromTime = (t) => {
        for (let i = BEAT_STARTS.length - 1; i >= 0; i--) {
          if (t >= BEAT_STARTS[i]) return i;
        }
        return 0;
      };

      let pendingProgress = 0;
      let rafId = null;
      const applyScrub = () => {
        rafId = null;
        if (!isFinite(video.duration) || video.duration <= 0) return;
        const t = Math.max(0, Math.min(video.duration, pendingProgress * video.duration));
        // Setting currentTime triggers an async seek; we don't await it.
        try { video.currentTime = t; } catch (_) {}
        setActive(beatFromTime(t));
      };
      const queueScrub = (progress) => {
        pendingProgress = progress;
        if (rafId == null) rafId = requestAnimationFrame(applyScrub);
      };

      const initScrollTrigger = () => {
        window.ScrollTrigger.create({
          trigger: cover,
          start: 'top top',
          end: '+=300%', // 3× viewport scroll for the full clip
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          onUpdate: ({ progress }) => queueScrub(progress),
        });
      };

      const onReady = () => {
        cover.classList.add('is-video-ready');
        initScrollTrigger();
        // Force a first frame paint at t=0.
        try { video.currentTime = 0; } catch (_) {}
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
