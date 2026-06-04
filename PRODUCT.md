# Product

## Register

brand

## Users

**B2B operators across 4 standalone verticals:**

- **Automotive** — Dealer principals, F&I directors, DMS operators, OEM financing arms. Decision context: evaluating interchange-recovery / embedded credit vendors at the executive level. Reading the site between meetings on a desktop or in a showroom office. **This is the only vertical built (V3.1, shipped 2026-06-04).**
- **Entertainment** — Venue operators, ticketing directors, live-entertainment CFOs, indoor entertainment franchise ops. Decision context: revenue recovery + customer retention layered onto an existing payments stack. (Not built.)
- **Sports** — VP fan experience, pro-team CCOs, stadium operators, league admin bodies, loyalty/membership directors. Decision context: monetizing per-game-night transaction volume + fan loyalty. (Not built.)
- **POS Partners** — POS platforms (Square / Helcim / Clover / Toast tier). Decision context: evaluating channel partnership programs, not a direct merchant pitch. Template B page. (Not built.)

All 4 verticals share one job-to-be-done: **recover what their current payments stack is taking from them, and own the customer + data on the other side of that transaction.** Automotive converts via an inline **2-step "Join the Movement" form** (Step 1 = 4 fields → CRM; Step 2 = optional dealership detail). POS (Template B, future) converts via channel-program application.

## Product Purpose

The CredX vertical landing pages exist to **convert qualified B2B operators into partner conversations**. The Automotive page (V3.1) is one funnel ordered **Movement → Control → Gains**: own-your-customer hook → what you get back (data / loyalty / brand) → the money (interchange recovery, demoted from hook to "the cherry") → calculator → process → proof → the 2-step form.

The brand sells the **movement** + the **Merchant Network Agreement**, not features — explicitly not a fintech product, not a card issuer, not a "payments platform." Outcomes lead; mechanics follow. The public-facing line is **"Software should pay for people, not people for software."** (the footer tagline; it supersedes the internal v2 anchor "a modern financial movement reshaping payment economics," which the founder flagged as the wrong framing).

Success = an operator at a $1M+/month dealership reads the page and starts the 2-step form. Success is **not** signups, demo requests, or trial activations — this is a long-cycle B2B partnership funnel. **SEO is dropped** for these pages: they are campaign destinations, not organic search targets, and are not indexed.

## Brand Personality

**Premium · Aspirational · Enterprise-ready · Human** (per `feedbacks/Client-feedback-03.md` and `workflow/Sign-off-2026-05-27.md` B-locks).

Voice modes operating in the site (per `.claude/skills/credx-copy/voice.md`):
- **Operator / Merchant** mode is default — addresses dealer principals + venue ops + team CCOs + POS channel directors as peers, not as marks.
- **Movement** mode leads the page — manifesto register, founder voice optional (Kendall verbatim quote, never paraphrased).
- **Partner / Channel** mode is POS-specific (Template B, future).

**Copy authority = V3.1** (`copy/CredX-Automotive-Copy-V3.md`, folded into `copy/automotive.md`). It supersedes the old D&Z proof. Casing follows V3.1 verbatim — eyebrows and the hero headline run Title Case, section headlines run sentence case. There is **no blanket Title-Case rule** anymore. Contractions are expanded to house style (you are / we will / here is); Canadian spelling kept (white-labelled, PIPEDA). The "no em dashes" rule holds. **Copy text is owned by `credx-copy` — do not edit it during design work.**

## Anti-references

What this site explicitly should NOT look or feel like:

- **F1 grid-girl / paddock-model imagery** — abolished by motorsport itself in 2018; carries reputational risk. People appear as **competent agents in context** (dealer principal, F&I director, service director, CFO), not as decorative adjacencies. **A distinct person per slot** — never one model reused across the page (that was the REV-1 failure). See memory `project_imagery_direction` (REV 2).
- **AI-render tells** — coloured/neon light on skin, plastic/over-retouched skin, gibberish on-screen UI, one repeated model. The REV-2 imagery is documentary-realistic (available light, visible skin texture, no readable screens). Never reintroduce magenta light on faces.
- **Beauty-campaign / lingerie / lifestyle register** — direct seductive gaze, body-focused crops, cleavage, silk-shell décolletage, intimate close-ups, parted lips.
- **Consumer fintech aesthetic** — Klarna, Affirm, "buy now pay later" product framing. CredX sits upstream of that category. Vocabulary banned in `voice.md` (BNPL → embedded lending; payments platform → embedded value platform).
- **Mercury / cream / pastel surfaces** — v1 Mercury cream `#f6f4ee` dropped 2026-05-26. The dark theme is `--ink #0b0c16` navy; the light theme is a cool `#f4f5f9`, NOT cream.
- **Line-art emblems** — Moodboard pp 16-17 line-art is superseded; emblems + imagery use editorial-cinematic photography.
- **Cross-vertical navigation / brand-level pages** — the 4 verticals are **fully standalone** (memory `project_verticals_standalone`). No `/` content, no cross-links anywhere, no "see also Sports" lines. Each vertical lives as if it were the only CredX page.

## Design Principles

Three strategic principles that govern every visual + interaction decision:

1. **Show, don't tell.** Concrete numbers, partner emblems, dollar figures. Translate to the operator's volume language ($1M/month for Auto, $60K/night for Entertainment, per-game-night for Sports, per $100M merchant volume for POS). Never describe capabilities abstractly.

2. **Editorial cinematic, not fintech-product.** Visual register pulls from Bloomberg Pursuits · Apple Business · Porsche Newsroom · Vogue Business · Stripe customer stories (for realism). Premium editorial photography of operators in context, generous negative space, single dominant light source. Explicitly **not** Klarna / Affirm consumer-fintech-product UI.

3. **10-second operator comprehension.** Each section delivers its core beat — movement · control · gains · process · proof · ask — in ~10 seconds of reading. Image-led, then text confirms. Section bodies stay 150-250 chars; data callouts carry the punch.

## Accessibility & Inclusion

**WCAG 2.1 AA** is the target, in **both themes** (dark default + light toggle).

- **Contrast.** Body ≥4.5:1, large/display ≥3:1. Dark theme: `--cloud-white` body on `--ink`; accent is **bright magenta `#d667ad`** for AA on dark. Light theme: `--ink` body on `#f4f5f9`/`#fff`; accent steps down to **`--magenta #943f78`** (bright magenta fails on white). Accent is large-text/fragment only — never body copy.
- **Theme.** Dark is the brand hard-default; a saved toggle preference (localStorage) wins. The `.movement` band + the signup band stay dark in both themes by design (cloud-white text inside, AA-safe).
- **Reduced motion.** `prefers-reduced-motion: reduce` fully honored — Lenis off, reveals snap to revealed, parallax off, transitions capped 0.01ms.
- **Color independence.** Accent is color-only magenta (no italic). State never conveyed by colour alone — focus rings + text affordances. `:focus-visible` = magenta 2px outline + offset + a halo tuned per theme.
- **Pointer fine vs coarse.** Parallax only on `pointer: fine`; touch users get static media.
- **Keyboard + forms.** The 2-step form is native HTML inputs with `<label>` association; Step 1 validates required fields before revealing Step 2. (No modals — the contact modal was removed in V3.1; the inline form is the single conversion surface.)

Out of scope for launch: i18n (English-only, Canadian-first), keyboard shortcuts, dyslexia font alternatives.
