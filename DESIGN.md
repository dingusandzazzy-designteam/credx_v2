# Design

Visual system for the CredX Automotive landing page (V3.1, shipped 2026-06-04). Extracted from `style.css`, `design/tokens-from-brandguide-v2.md`, and the Phase 3 sign-off. Other 3 verticals not built.

## Theme

**Light + dark, toggled in the nav. Dark is the brand hard-default.** A saved preference (localStorage `credx-theme`) wins; an inline `<head>` script applies it before paint to avoid FOUC. The toggle adds `[data-theme="light"]` on `<html>`.

- **Dark (default).** Scene: a dealer principal reviewing the page between meetings on a 27-inch display in a dim showroom office. Reads as "Bloomberg Terminal at the C-suite level," not "consumer app." Premium without ornamentation; magenta emerges from architecture, not decoration.
- **Light.** Scene: the same operator on a bright showroom floor by the glass, mid-morning. Cool, airy, enterprise — a cooler `#f4f5f9` page with white cards, NOT cream/Mercury (that was v1, dropped).

Two sections stay dark in **both** themes by design — the page's cinematic punctuation: the **`.movement`** manifesto band and the **`.signup`** form band. Their inner text is cloud-white and AA-safe regardless of theme.

## Color

**Strategy:** Committed dark (default) — one anchor surface (`--ink`) carries ~80% of the page; magenta + purple appear as accent on key fragments and as ambient glow in photography. Cloud-white type carries reading load. The light theme inverts the surface scale while keeping the same accent logic.

### Brand palette (locked, Moodboard p8)

| Token | Hex | Role |
|---|---|---|
| `--navy` | `#323665` | Brand color · light-theme primary button · strong accent surface |
| `--magenta` | `#943f78` | Surface accent (button bg, slider thumb) · **light-theme text accent** |
| `--magenta-bright` | `#d667ad` | **Dark-theme text accent** (AA on `--ink`; the regular magenta is too dark for text on dark) |
| `--purple` | `#6d5ea4` | Hover state · ambient glow in imagery + movement band |
| `--soft-lavender` | `#a79ab4` | Secondary text on dark |
| `--ink` | `#0b0c16` | Dark-theme page surface |
| `--cloud-white` | `#f8f9fc` | Text on dark · light-theme card background |

### Surface system (theme-aware)

| Token | Dark (default) | Light (`[data-theme="light"]`) | Role |
|---|---|---|---|
| `--surface-0` | `#0b0c16` | `#f4f5f9` | Page background |
| `--surface-1` | `#13141f` | `#ffffff` | Card, raised panel |
| `--surface-2` | `#1a1c2c` | `#eceef4` | Hover / selected, calc output, form inputs |
| `--surface-3` | `#23253a` | `#dce0ea` | Divider / outline |

### Text colors (theme-aware)

| Token | Dark | Light | Role |
|---|---|---|---|
| `--text-primary` | `--cloud-white` | `--ink` | Body + headings |
| `--text-secondary` | `--soft-lavender` | `#4a4f73` (navy-slate ~7:1) | Secondary body |
| `--text-muted` | `rgba(167,154,180,0.85)` | `rgba(40,44,80,0.62)` | Captions, hedges |
| `--text-accent` | `--magenta-bright` | `--magenta` | Accent fragment color only (`<em class="accent">`) |

### Gradient

`--gradient-1` (navy → purple → magenta, 135deg) is **defined but currently unused** — the old S3/S7 gradient bands were retired in V3.1. The `.movement` band now uses `--ink` + two soft radial traces (magenta at 82%/75%, purple at 12%/10%) for atmosphere without a gradient cliché. Keep this token for future use; do not reintroduce full gradient bands without a reason.

## Typography

**Two families. Fraunces (editorial titles) + Inter (everything else).** Accent on key fragments = color only (magenta), never italic. Pattern follows Bloomberg Pursuits / Porsche Newsroom: editorial serif for narrative titles, sans for body + numeric/data + UI.

### Families

- `--font-editorial: 'Fraunces', Georgia, serif` — **all narrative titles**: baseline `h1, h2, h3, h4` plus the explicit selectors `.movement__h2`, `.control-card__title`, `.control__whitelabel-head`, `.gain__num`, `.gain__title`, `.calc__h3`, `.step__h3`, `.faq__question`, `.kpi__value`, `.proof__quote-text`, `.signup__step-label`. Weight 500 default; 600 on `h1`. `font-optical-sizing: auto` lets the display variant carry big sizes.
- `--font-display` / `--font-body: 'Inter', system-ui, sans-serif` — body, sub-copy, eyebrows, captions, FAQ answers, form labels + inputs, buttons, and **most data callouts** (`.calc__volume-value`, `.calc__output-number`). Weights 400-700. **Exception (2026-06-04, user):** the Gains stat strip values (`.gains__strip .stat__number` — $30K / Yours / 6 min) are **Fraunces** for an editorial register; the calculator numerals stay Inter. Both tokens resolve to Inter (kept distinct for forward clarity).

Loaded in `<head>`: `Inter:wght@400;500;600;700` + `Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600`.

### Scale (clamp() responsive — D2 lock)

| Token | Range | Role |
|---|---|---|
| `--type-display` | 40-72px | Hero H1 |
| `--type-h1` | 32-48px | Section H2s |
| `--type-h2` | 24-36px | Calc H3, step H3, KPI value, quote text, control-card title |
| `--type-h3` | 20-24px | Gain title, FAQ question, signup step label |
| `--type-body-lg` | 18px | Hero sub, movement body, intros |
| `--type-body` | 16px | Default body |
| `--type-caption` | 14px | Stat labels, hedge, footer links, step notes |
| `--type-eyebrow` | 12px | Eyebrow labels (uppercase, 0.08em) |
| `--type-data-callout` | 48-80px | Stat numbers, calc output |

### Hierarchy rules

- Headings: `letter-spacing` -0.01em default, -0.015em on H1, -0.03em on data-callouts. `text-wrap: balance` on headings, `pretty` on body. `max-width: 65ch` on `<p>`.
- Accent fragment: `<em class="accent">$30,000</em>` → `color: var(--text-accent); font-style: normal;`.

## Spacing

4px base scale (D6 lock). `--s-1`=4 · `--s-2`=8 · `--s-3`=12 · `--s-4`=16 · `--s-5`=24 · `--s-6`=32 · `--s-7`=48 · `--s-8`=64 · `--s-9`=96 · `--s-10`=128 · `--s-section`=clamp(64px,10vh,128px). Container: `--container-max: 1280px`, `--container-pad: clamp(16px,4vw,48px)`. Vary spacing for rhythm; sections use `--s-section` block padding, headers use `--s-9` bottom margin.

## Border radius

`--radius-pill` 999px (buttons, slider thumb, theme toggle) · `--radius-card` 24px (calc panel, quote block, FAQ items, control/gain cards, signup steps) · `--radius-card-sm` 16px (emblems, calc output, reward) · `--radius-small` 8px (form inputs, focus ring).

## Elevation

Subtle, measured (Structural · Measured · Controlled). `--shadow-1/2/3` retuned per theme (lighter, navy-tinted shadows on light). No glassmorphism beyond the nav backdrop-blur (theme-aware `--nav-bg` + `blur(12px)`). The nav adds `.is-scrolled` (raised opacity) past 24px scroll.

## Buttons (surface-aware mapping)

Pill geometry, 600 weight, translateY hover.

- **Dark (default):** `.btn-primary` magenta bg + cloud-white text, hover → purple. `.btn-secondary` transparent + cloud-white border/text, hover → cloud-white bg + ink text.
- **Light (`[data-theme="light"]`):** `.btn-primary` → navy bg + cloud-white text. `.btn-secondary` → navy border/text.
- **Hero exception:** `.hero--full .btn-primary` keeps brand **magenta in both themes** for punch on the photo.

## Iconography

Two-tone (Option C hybrid). Lucide-style inline SVG for utility (the theme-toggle sun/moon, FAQ `+`). Custom SVG for brand (logo wordmark, shape mark). No line-art emblems.

## Imagery

**Documentary-realistic editorial photography** of operators in context (REV 2, memory `project_imagery_direction`). Hard rules learned from the REV-1 AI failure: distinct casting per slot (never one reused model), no brand-colour light on skin, no readable on-screen UI, visible skin texture / available light. Reference: Apple Business · Porsche Newsroom · Bloomberg Pursuits · Stripe customer stories.

**Theme strategy:** the full-bleed **hero ships two renders** — `automotive-hero-dark.jpg` (dusk, left third deep shadow for cloud-white copy) / `automotive-hero-light.jpg` (daylight, left third pale for ink copy) — swapped by `[data-theme]` with a theme-matched overlay. The framed slots (pain, process, proof-team, quote-portrait, og) are **one shared mid-key set** that reads on either surface inside a card. All optimized to JPG q82 + WebP. Prompts in `prompts/automotive.md` §C (REV 2, local/gitignored).

## Motion

Subtle motion + interaction cues throughout (per feedback-03). Magnetic cursor + glow from v1 dropped. **This is an active area — being expanded via `/impeccable` (scroll animations + micro-interactions) on top of the baseline below.**

**Engine.** Lenis (smooth scroll) + GSAP ScrollTrigger (reveals + parallax). Vanilla DOM for theme toggle, calculator, 2-step form.

**Easing.** `--ease-out-quart` (0.25,1,0.5,1) for hover/focus · `--ease-out-expo` (0.16,1,0.3,1) for reveals. No bounce, no elastic, no spring.

**Duration.** `--duration-fast` 200ms (hover, slider) · `--duration-base` 400ms (nav state, theme) · `--duration-slow` 800ms (reveals).

**Baseline patterns (shipped).**
- `[data-reveal]` — opacity 0→1 + translateY 24px→0, once, on scroll-enter at `top 88%`. `[data-reveal-delay="1|2|3"]` stagger 100/200/300ms.
- Parallax on `.hero__bg` (60px range), `scrub: 0.6`, `pointer: fine` only.
- Theme toggle — instant swap, persists to localStorage, syncs `<meta theme-color>`.
- Calculator slider — magenta thumb with expanding glow ring (8→12px) on hover; output + micro-reward update live.
- 2-step form — Step 1 validates → reveals Step 2 + micro-reward, scrolls into view.

**Reduced motion.** Lenis off, all `[data-reveal]` snap revealed, parallax off, transitions capped 0.01ms.

## Components (V3.1, shipped on Automotive)

In page order:

- **Nav (G1)** — fixed, backdrop-blur, theme-aware bg + `.is-scrolled`. Logo · in-page anchor links (How it works · The movement · Savings) · **theme toggle** · primary CTA "Join the Movement" (→ `#form`).
- **Hero (S1, `.hero--full`)** — 100dvh full-bleed, **theme-swapped image** (dark/light), left negative space carries eyebrow + H1 ("Own the Customer You Fought to Win") + sub + 2 CTAs via a theme-matched overlay gradient.
- **Movement (S2)** — dark band (both themes), centered one-liner H2 + body + founder pull-quote (Kendall, verbatim).
- **Control (S3)** — eyebrow + H2 + intro, then a **3-card grid** (Your customer / Your data / Your loyalty) + a centered **white-label beat** above a divider.
- **Gains (S4)** — eyebrow + H2, then **3 numbered cards** (big Fraunces numeral + title + body) + a **3-stat strip** ($30K / Yours / 6 min) with dividers.
- **Calculator (S5)** — `.calc` card: slider ($250K–$25M) + live volume readout / single output card ("$X recovered per year" + caption + CTA).
- **How it works (S6, `.process`)** — header + wide shared photo + **4-step card grid**.
- **Proof (S7)** — header + operator quote block (portrait + quote + attribution) + **6-emblem partner grid** + behind-the-scenes wide photo + **3-KPI line** ($500M+ · 4 lenders · SOC 2 + PIPEDA).
- **Signup (S8, `.signup`)** — dark band, intro + **inline 2-step progressive form** (Step 1: 4 fields + "Join the Movement"; micro-reward; Step 2 optional: 4 fields + "See my full breakdown"; done state). This replaced the old contact modal — it is the single conversion surface.
- **FAQ (G3)** — 4 `<details>` accordions, magenta `+` rotate, DMS-specific (PBS/CDK/Reynolds, 4–8 wk).
- **Footer (G2)** — 3-col (brand + tagline "Software should pay for people, not people for software." · Navigate · Legal) + bottom strip.

No modal, no cover-scrub video, no gradient bands in the current build (all retired in V3.1).

## Open derivations / pending

- ⚠ **Theme default** — dark hard-default (ignores OS); flip to OS-aware is a 1-line `<head>` change, open for user.
- ⚠ **Launch-confirm copy figures** — interchange benchmark ($36K/$6K per $1M), $500M+ signed figure (owned by `credx-copy`, pending Audrey/Kendall).
- ⚠ **S7 partner emblems + operator quote** — anonymized SAMPLE until public-use approval.
- ⚠ **D7 gradient ribbon symbol** SVG from D&Z (external).
- ⚠ **Movement film (Trilha B)** — deferred; hero is a static image this round.
