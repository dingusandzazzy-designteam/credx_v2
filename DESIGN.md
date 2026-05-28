# Design

Visual system for the CredX v2 vertical landing pages. Extracted from `style.css`, `design/tokens-from-brandguide-v2.md`, and the locked Phase 3 sign-off (`workflow/Sign-off-2026-05-27.md`).

## Theme

**Dark navy enterprise.** Scene: a dealer principal or VP fan experience reviewing the page between meetings on a 27-inch display in a dimly-lit office, mid-afternoon. The surface should read as "Bloomberg Terminal at the C-suite level," not "consumer app." Premium without ornamentation; magenta accents emerge from architecture, not from decorative noise.

Light surface is supported as a card variant (`.light .btn-primary` etc.) but is **not** the page default in v2 (it was the v1 Mercury cream default, dropped 2026-05-26).

## Color

**Strategy:** Committed dark — one anchor surface (`--ink` deep navy) carries ~80% of every page; magenta + purple appear as accent on key fragments, gradient bands at S3 + S7, and ambient screen-glow in photography. Cloud-white type carries reading load.

### Brand palette (locked, Moodboard p8)

| Token | Hex | Role |
|---|---|---|
| `--navy` | `#323665` | Brand color · light-surface primary button · strong accent surface |
| `--magenta` | `#943f78` | Accent (color-only on key fragments) · dark-surface primary button · gradient endpoint |
| `--purple` | `#6d5ea4` | Hover state · gradient mid-stop · ambient screen-glow in imagery |
| `--soft-lavender` | `#a79ab4` | Secondary text on dark · muted UI |
| `--ink` | `#0b0c16` | Primary page surface (the default for the entire v2 site) |
| `--cloud-white` | `#f8f9fc` | Primary text on dark · light-surface variant background |

### Surface system

| Token | Hex | Role |
|---|---|---|
| `--surface-0` | `#0b0c16` (ink) | Page background |
| `--surface-1` | `#13141f` | Card, raised panel |
| `--surface-2` | `#1a1c2c` | Hover / selected state |
| `--surface-3` | `#23253a` | Divider / outline |
| `--surface-navy` | `#323665` | Strong navy accent surface |
| `--surface-light` | `#f8f9fc` | Light variant (card-level only) |

### Text colors

| Token | Value | Role |
|---|---|---|
| `--text-primary` | `--cloud-white` | Body + headings on dark surface (AA on `--ink` = 17.8:1) |
| `--text-secondary` | `--soft-lavender` | Body secondary on dark (AA on `--ink` = 5.4:1) |
| `--text-muted` | `rgba(167, 154, 180, 0.7)` | Captions, hedges (large-text only on `--ink`) |
| `--text-accent` | `--magenta` | Accent fragment color only — must wrap in `<em class="accent">` |

### Gradient

`--gradient-1` cinematic retune (D5 lock):

```css
linear-gradient(135deg,
  var(--navy) 0%,
  var(--navy) 25%,
  var(--purple) 55%,
  var(--magenta) 95%);
```

Used at S3 (Movement) + S7 (Final CTA) as paired bookends. Both sections layer an atmospheric overlay (radial gradients with soft-lavender + magenta tints) for depth. Movement also layers `automotive-movement-bg.png` under the gradient at 80% opacity for environmental atmosphere.

## Typography

**Locked to 2 families 2026-05-28 (rev 2) — Fraunces (all narrative titles) + Inter (body + sub-copy + UI + all data callouts).** Poppins dropped. Accent on key fragments = **color only** (magenta), never italic. Pattern follows Bloomberg Pursuits / Porsche Newsroom: editorial serif for narrative, sans for body + numeric/data + UI.

### Families

- `--font-editorial: 'Fraunces', Georgia, serif` — **all narrative titles**: baseline `h1, h2, h3, h4`, plus the explicit selectors `.cover-scrub__title`, `.movement__h2`, `.calc__h3`, `.step__h3`, `.faq__question`, `.modal__h3`, `.kpi__value`, `.proof__quote-text`. Weight 500 default; 600 on `h1`. opsz variable axis (`font-optical-sizing: auto`) lets the display variant carry the big sizes.
- `--font-display: 'Inter', 'Inter Display', system-ui, sans-serif` — body, sub-copy, eyebrows, captions, FAQ answers, form labels, buttons, and **all data callouts** (`.pain__callout-number`, `.stat__number`, `.calc__volume-value`, `.calc__output-number`). Weights 400-700.
- `--font-body: 'Inter', ...` — same stack as `--font-display`; both tokens preserved for forward semantic clarity but resolve identically.

Loaded from Google Fonts in `<head>`: `Inter:wght@400;500;600;700` + `Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600`.

### Scale (clamp() responsive — D2 lock)

| Token | Range | Role |
|---|---|---|
| `--type-display` | 40-72px | Hero H1, calculator output number |
| `--type-h1` | 32-48px | S2/S4/S5/S6/S7 H2 |
| `--type-h2` | 24-36px | Calculator H3, step H3, KPI value, quote text |
| `--type-h3` | 20-24px | Step body emphasis, FAQ question |
| `--type-body-lg` | 18px | Hero sub, movement body, final-cta body |
| `--type-body` | 16px | Default body |
| `--type-caption` | 14px | Stat labels, KPI labels, hedge, footer links |
| `--type-eyebrow` | 12px | Eyebrow labels (uppercase + letter-spacing 0.08em) |
| `--type-data-callout` | 48-80px | Pain callout number, stat number |

### Hierarchy rules

- Headings: `letter-spacing: -0.01em` default, `-0.02em` on H1, `-0.03em` on data-callouts. Tight tracking signals premium without ornamenting.
- Line height: 1.05 on hero H1, 1.1 on H2/H3, 1.5 on body, 1.6 on long-form paragraphs.
- `text-wrap: balance` on headings, `text-wrap: pretty` on body.
- `max-width: 65ch` on `<p>` to enforce readable measure.
- Accent fragment pattern: `<em class="accent">$30,000</em>` renders as `color: var(--magenta); font-style: normal;` — color-only.

## Spacing

4px base scale (D6 lock):

| Token | Value | Typical use |
|---|---|---|
| `--s-1` | 4px | Tight inline gaps |
| `--s-2` | 8px | Compact gap (button icon gap, kpi value→label) |
| `--s-3` | 12px | Caption gap |
| `--s-4` | 16px | Default gap, button padding-y |
| `--s-5` | 24px | Section-internal gap |
| `--s-6` | 32px | Stat padding, card padding |
| `--s-7` | 48px | Hero CTA-margin-top, between-block gap |
| `--s-8` | 64px | Footer block, calc panel padding |
| `--s-9` | 96px | Container padding-block on calc |
| `--s-10` | 128px | Largest stat-strip margin |
| `--s-section` | clamp(64px, 10vh, 128px) | Section padding-block (responsive) |

Container: `--container-max: 1280px`, `--container-pad: clamp(16px, 4vw, 48px)`.

## Border radius

| Token | Value | Use |
|---|---|---|
| `--radius-pill` | 999px | Buttons (pill geometry per B1 lock + Moodboard p14/p33), slider thumb, play button |
| `--radius-card` | 24px | Calc panel, quote block, FAQ items, hero media |
| `--radius-card-sm` | 16px | Emblems, calc output panel, modal panel |
| `--radius-small` | 8px | Form inputs, focus ring |

## Elevation

Subtle and measured (Moodboard p24 visual identity principles — Structural · Measured · Controlled):

| Token | Value | Use |
|---|---|---|
| `--shadow-1` | `0 1px 2px rgba(0,0,0,0.2)` | Default inline elevation (rare on dark surface) |
| `--shadow-2` | `0 4px 12px rgba(0,0,0,0.25)` | Card-level lift |
| `--shadow-3` | `0 12px 32px rgba(0,0,0,0.35)` | Modal panel |

No glassmorphism beyond the nav backdrop-blur (`rgba(11,12,22,0.7)` + `backdrop-filter: blur(12px)`) and modal scrim (`rgba(11,12,22,0.85)` + blur 8px). Both purposeful — not decorative.

## Buttons (D3 surface-aware mapping)

Pill geometry, 600 weight, 16px padding-x baseline, transform: translateY hover.

**Default (dark surface):**
- `.btn-primary` — magenta bg + cloud-white text · hover → purple
- `.btn-secondary` — transparent + cloud-white border + cloud-white text · hover → cloud-white bg + ink text

**Light surface variant** (use sparingly, only on light card backgrounds):
- `.light .btn-primary` — navy bg + cloud-white text · hover → purple
- `.light .btn-secondary` — transparent + navy border + navy text · hover → navy bg + cloud-white text

Per D3 lock: Magenta primary is the dominant CTA across the v2 site because it's the default dark surface. Navy primary only appears in occasional light card variants.

## Iconography

Two-tone direction (Option C hybrid per D4 lock):
- **Lucide icons** for utility (close, arrows, chevrons, play, check). 1.5-2px stroke, currentColor inheritance.
- **Custom SVG** for brand assets (logo wordmark, shape mark, gradient ribbon symbol — D7 still external pending from D&Z).

No line-art emblem direction (v1 Moodboard p16-17 superseded).

## Imagery

**Editorial cinematic photography** of operators in vertical context. Per memory `project_imagery_direction`:
- Reference register: Apple Business · Tesla Business · Porsche Newsroom · Bloomberg Pursuits · Vogue Business · W Series / F1 Academy comms.
- Casting: diverse, professional, age 25-55, attractive without erotic register.
- Composition: confident in-action posture, eyes on work/colleague/horizon, never at camera as seductive gaze.
- Lighting: cinematic editorial (ARRI Alexa anamorphic register).
- Color match: dark navy enterprise surface dominant, magenta + purple ambient accent integrated (signage, monitor glow), never overlaid as flat color.

Image slots and per-slot Midjourney prompts live in `prompts/<vertical>.md §C`.

## Motion

Subtle motion + interaction cues throughout (per feedback-03). Magnetic cursor + glow effects from v1 are dropped.

**Engine.** Lenis (smooth scroll) + GSAP ScrollTrigger (reveals + parallax). Vanilla DOM events for modal, calculator, form.

**Easing.**
- `--ease-out-quart` `cubic-bezier(0.25, 1, 0.5, 1)` — default for hover, focus
- `--ease-out-expo` `cubic-bezier(0.16, 1, 0.3, 1)` — scroll reveals
- No bounce, no elastic, no spring.

**Duration.**
- `--duration-fast` 200ms — hover, button, slider thumb expand
- `--duration-base` 400ms — modal, scroll-trigger, nav state
- `--duration-slow` 800ms — reveal-on-scroll

**Patterns.**
- `[data-reveal]` — opacity 0→1 + translateY 24px→0, fires once on scroll-enter at `top 88%`.
- `[data-reveal-delay="1|2|3"]` — staggered 100/200/300ms within a section block.
- Parallax on `.hero__bg` (60px range) + `.pain__media` (30px range), `scrub: 0.6`, `pointer: fine` only.
- Calculator slider — magenta thumb with expanding glow shadow on hover (8px → 12px ring).
- Modals — fade + scrim, body scroll lock + lenis.stop().

**Reduced motion.** Lenis disabled, all `[data-reveal]` snap to revealed, parallax off, transition-duration capped 0.01ms. Wired in script.js + CSS `@media (prefers-reduced-motion: reduce)`.

## Components

**Currently shipped on `/automotive`:**

- **Nav (G1)** — fixed top, backdrop-blur, logo + primary CTA only (no nav links, no cross-vertical switcher per A4 lock).
- **Hero (S1, hero--full variant)** — full-bleed image, 100dvh, left negative space carries eyebrow + H1 + sub + CTA via overlay gradient (`linear-gradient(90deg, ink → transparent)`).
- **Pain (S2)** — split layout, `.pain__media` editorial photo + copy column with H2, body, callout (`$30,000/$1M LOST` typographic punch), sub-link.
- **Movement (S3)** — full-bleed gradient band + backdrop image at 80% opacity, centered manifesto block with optional founder quote.
- **Outcome (S4)** — 3-col stat strip (numbers + labels, dividers) + calculator widget (slider + output card with monthly + yearly + caption + CTA).
- **Process (S5)** — wide cinematic image strip + 4-col step grid (cards with eyebrow + H3 + body).
- **Proof (S6)** — 6-emblem grid + quote block (portrait + quote + attribution) + behind-scenes wide image + 3-KPI line.
- **Final CTA (S7)** — full-bleed gradient band (paired with S3), centered manifesto-flavored copy + 2 CTAs.
- **FAQ (G3 compact)** — 4 `<details>` accordions with magenta `+`/`×` rotate.
- **Footer (G2)** — 2-col + 2-col layout (brand line · Talk to us · Legal · bottom strip).
- **Modal (Lead form)** — centered panel, backdrop-blur scrim, focus trap, ESC close.

**Patterns reusable across verticals:**

- Status flag system: `LOCKED` · `DRAFT` · `SAMPLE` · `TBD` per `.claude/skills/credx-copy/SKILL.md` §Working with status flags.
- Vertical-bound CTAs: Template A → "Talk to a CredX Partner Specialist"; Template B (POS) → "Apply to the partner program" / "Become a CredX channel partner."
- Eyebrow → H2/H3 → body → sub-link/CTA section rhythm.

## Open derivations

From `design/tokens-from-brandguide-v2.md` §10 — items still pending visual validation in Phase 6 build:

- ⚠ **D7 — gradient ribbon symbol SVG/PNG** from D&Z (external pending).
- ⚠ **S6 partner emblems** — currently anonymized SAMPLE labels; replace with real partner logos once public-use approval is logged.
- ⚠ **S4 calculator math** — model is 3% effective ($36K interchange / $1M minus $6K residual / $1M = $30K saved / $1M). Audrey + Kendall to verify benchmarks.
- ⚠ **Trilha B cover animation** — separate animated section (not in hero); brief from user pending.
- ⚠ **FINAL-CTA-BG image** — still pending generation; S7 currently renders gradient-only.
