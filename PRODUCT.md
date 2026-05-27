# Product

## Register

brand

## Users

**B2B operators across 4 standalone verticals:**

- **Automotive** — Dealer principals, F&I directors, DMS operators, OEM financing arms. Decision context: evaluating interchange-recovery / embedded credit vendors at the executive level. Reading the site between meetings on a desktop or in a showroom office.
- **Entertainment** — Venue operators, ticketing directors, live-entertainment CFOs, indoor entertainment franchise ops. Decision context: looking for revenue recovery + customer retention layered onto an existing payments stack.
- **Sports** — VP fan experience, pro-team CCOs, stadium operators, league admin bodies, loyalty/membership directors. Decision context: monetizing per-game-night transaction volume + fan loyalty programs.
- **POS Partners** — POS platforms (Square / Helcim / Clover / Toast tier). Decision context: evaluating channel partnership programs, not direct merchant pitch. Template B page on this site is the partner program signup.

All 4 verticals share one job-to-be-done: **recover what their current payments stack is taking from them, and own the customer + data on the other side of that transaction.** They convert by booking a partner conversation (Template A) or applying to the channel program (Template B).

## Product Purpose

The CredX vertical landing pages exist to **convert qualified B2B operators into partner conversations**. Each page is one funnel: pain-pivot hero → quantified outcome → manifesto positioning → process clarity → proof → partner-conversation CTA.

The brand positioning is **"a modern financial movement reshaping payment economics"** — explicitly not a fintech product, not a card issuer, not a payments platform. The site sells the **movement** + the **Merchant Network Agreement**, not features. Outcomes lead; mechanics follow.

Success = an operator at a $1M+/month dealership / venue / team / partner-platform reads the page and books a call. Success is **not** signups, demo requests, or trial activations — this is a long-cycle B2B partnership funnel.

## Brand Personality

**Premium · Aspirational · Enterprise-ready · Human** (per `feedbacks/Client-feedback-03.md` and `workflow/Sign-off-2026-05-27.md` B-locks).

Voice modes operating in the site (per `.claude/skills/credx-copy/voice.md`):
- **Operator / Merchant** mode is default — addresses dealer principals + venue ops + team CCOs + POS channel directors as peers, not as marks.
- **Movement** mode lives in S3 of every vertical — manifesto register, founder voice optional (Kendall verbatim quote, never paraphrased).
- **Partner / Channel** mode is POS-specific (Template B).

Sentence case is **overridden to Title Case for Automotive** per the D&Z proof copy (`copy/Ownest_CredX - Landing page Copy - Automotive Version 2 - DZ.md`); other verticals TBD.

## Anti-references

What this site explicitly should NOT look or feel like:

- **F1 grid-girl / paddock-model imagery** — abolished by motorsport itself in 2018; carries reputational risk. Beautiful women appear as **competent agents in context** (engineer, dealer principal, F&I director, CFO, ops director), not as decorative adjacencies. See memory `project_imagery_direction`.
- **Beauty-campaign / lingerie / lifestyle register** — direct seductive gaze, body-focused crops, cleavage emphasis, intimate close-ups, parted lips. All explicit Midjourney `--no` directives in `prompts/automotive.md`.
- **Consumer fintech aesthetic** — Klarna, Affirm, "buy now pay later" product framing. CredX is positioned upstream of that category, not adjacent to it. Vocabulary banned in `.claude/skills/credx-copy/voice.md` (BNPL → embedded lending; payments platform → embedded value platform).
- **Mercury / cream / pastel surfaces** — v1 (Mercury cream `#f6f4ee`) was dropped 2026-05-26. Path B execution = **dark navy enterprise surface** (`#0b0c16` + mid-tone navy scale).
- **Line-art emblems / cream-on-pastel pattern** — Moodboard pp 16-17 line-art direction is **superseded** for v2; partner emblems and imagery use editorial-cinematic photography on dark navy.
- **Fintech-product editorial style** — Stripe customer pages are a reference for substance (real operator quotes, named verticals), NOT for surface (their cream + sans is wrong tonality for this site).
- **Cross-vertical navigation / brand-level pages** — the 4 verticals are **fully standalone** (per memory `project_verticals_standalone` 2026-05-27). No `/` content, no cross-links in nav / footer / body, no "see also Sports" lead lines. Each vertical lives as if it were the only CredX page.

## Design Principles

Three strategic principles that govern every visual + interaction decision on these landing pages:

1. **Show, don't tell.** Concrete numbers, real operator names (when public-use is approved), partner emblems, dollar pain quantified in the first frame. Never describe capabilities abstractly — always show the operator's worldview translated into their volume language ($1M/month for Auto, $60K/night for Entertainment, per-game-night for Sports, per $100M merchant volume for POS).

2. **Editorial cinematic, not fintech-product.** Visual register pulls from Bloomberg Pursuits · Apple Business · Porsche Newsroom · Vogue Business — premium editorial photography of operators in vertical context, generous negative space, single dominant light source, dark navy enterprise palette with magenta + purple ambient accents only as supporting cues. Explicitly **not** Klarna / Affirm / consumer-fintech-product UI aesthetic.

3. **10-second operator comprehension.** Each section delivers its core message — pain · opportunity · outcome · process · proof · ask — in 10 seconds of operator reading time. Image-led, then text confirms what the image already showed. Section bodies stay 150-250 chars; data callouts carry the punch. Per `feedbacks/Client-feedback-03.md` density target (supersedes v1's 30-second target).

## Accessibility & Inclusion

**WCAG 2.1 AA** is the target.

- **Contrast.** Body text ≥4.5:1, large text + display ≥3:1 against `--ink` (#0b0c16) dark navy surface. Body uses `--cloud-white` (#f8f9fc); secondary text uses `--soft-lavender` (#a79ab4) and must be validated at AA. Magenta accent (`--magenta` #943f78) on dark surface is large-text-only; never use it for body copy.
- **Reduced motion.** `prefers-reduced-motion: reduce` is fully honored in `script.js` — Lenis disabled, scroll-triggered reveals snap to revealed state, parallax disabled, animations cap at 0.01ms. Already wired.
- **Color independence.** Accent is color-only magenta (no italic Fraunces underline post B1 lock). State must never be conveyed by color alone — focus rings, error states, success states need shape or text affordance.
- **Focus visibility.** `:focus-visible` ring uses `--magenta` 2px outline with 2px offset (already in style.css line 1216).
- **Pointer fine vs coarse.** Parallax only activates on `pointer: fine` (mouse / trackpad) — touch users get static media to avoid jank.
- **Keyboard navigation.** All modals trap focus, `Esc` closes, focus returns to trigger. Forms are native HTML inputs with `<label>` association.
- **Reading register.** Sentence case is the credx-copy default; Automotive uses Title Case per the D&Z proof. Both stay above 5th-grade reading ease for body text.

Out of scope for v2 launch: i18n (English-only, Canadian-first register), keyboard shortcuts, dyslexia-specific font alternatives.
