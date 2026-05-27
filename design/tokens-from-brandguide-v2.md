# CredX v2 — Tokens (Phase 3 partial)

> **Source-of-truth hierarchy** (declared 2026-05-26):
> 1. **Strategic source of truth:** `feedbacks/Client-feedback-03.md` — authoritative for direction, surface, voice, storytelling, imagery.
> 2. **Operational reference:** `documents/02_Brand/CREDX-Moodboard-051926.pdf` (33 pages, 9 sections) — token values feedback-03 does not specify.
> 3. Where (2) contradicts (1), (1) wins. Specific supersessions flagged inline below.
>
> **Status:** Draft 2026-05-26. **Extract flow only** — no deployed code yet (repo at fresh `git init` after greenfield reset). Audit deferred until Phase 6 produces real code surface.
> **Applies:** §0 v2 direction lock (dark navy enterprise primary surface). Brand color palette confirmed against `documents/02_Brand/Brand Colors.pdf` p1.
> **Out of scope:** Voice & Tone (Moodboard p27–28) — routed to `credx-copy` skill per design-audit scope rule.

---

## ⚠ Correction to Phase 1 refs teardown

The Phase 1 refs teardown (`design/v2-references.md`) recommended **dropping Fraunces** because Apple Business, Figma Enterprise, and Porsche Newsroom all run sans-only display. **That recommendation is reversed by this Moodboard extraction.**

Moodboard p14, p24, p30, p33–34 explicitly prototype the v2 hero treatment using **Fraunces italic for accent fragments on both light and dark surfaces**, e.g.:
- p14: dark navy card with Fraunces white "Keep $30,000 of every $1M" headline + Poppins sub
- p33: phones showing "Operational *Intelligence* at the Edge" — italic Fraunces magenta accent in serif within sans context
- p30: "Built for people, *not networks*" — italic Fraunces accent on dark navy

Per design-audit skill rule (brandguide is authoritative; refs are inspiration), **Fraunces stays**. The signature pattern is *italic Fraunces in magenta on key fragments* within a Poppins context. This is the typographic expression of "one accent" restraint.

---

## 1. Color tokens

### 1.1 Brand palette (Moodboard p8–9)

All six hex values cited verbatim from p8. Role assignments from p9.

| Token name | Hex | RGB | CMYK | Moodboard role |
|---|---|---|---|---|
| `--navy` (Deep Indigo Navy) | `#323665` | 50, 54, 101 | 93, 88, 31, 19 | Headlines · navigation · primary buttons · manifesto sections · icon base |
| `--magenta` | `#943f78` | 148, 63, 120 | 40, 92, 22, 2 | High-emotion vertical accent · savings numbers · data callouts · CTA emphasis |
| `--purple` | `#6d5ea4` | 109, 94, 164 | 65, 72, 0, 0 | Secondary charts · hover states · supporting depth (when magenta not active) |
| `--soft-lavender` | `#a79ab4` | 167, 154, 180 | 35, 39, 14, 0 | Soft surfaces · badges · dividers · low-pressure trust accents |
| `--ink` | `#0b0c16` | 11, 12, 22 | 79, 72, 60, 80 | Deep dark (v1 was text on cream; **v2 promotes to primary surface** per §0) |
| `--cloud-white` | `#f8f9fc` | 248, 249, 252 | 2, 1, 0, 0 | Light alt surface (Moodboard shows mixed dark/light samples; v2 §0 makes dark primary, light remains as alternate section variant) |

### 1.2 v2 surface system (derived; needs sign-off)

§0 locks dark navy enterprise as primary. The Moodboard does not provide a mid-tone navy scale — it only gives `--ink` `#0b0c16` (deepest) and `--navy` `#323665` (brand navy). v2 needs a **3-step mid-tone scale** to support cards, panels, and dividers on dark surface. Derived candidates (OKLCH-aware tinted toward navy hue, not pure greys):

| Token name | Hex (candidate) | Use case | Confidence |
|---|---|---|---|
| `--surface-0` | `#0b0c16` (`--ink`) | Primary page surface — full-bleed dark | ✅ Locked (Moodboard p8) |
| `--surface-1` | `#13141f` | Card surface · raised panel · modal background | ⏳ Derived — needs sign-off (sample test in Phase 6) |
| `--surface-2` | `#1a1c2c` | Hover state for cards · selected panel · sub-section bg | ⏳ Derived |
| `--surface-3` | `#23253a` | Divider · subtle outline · low-contrast border | ⏳ Derived |
| `--surface-navy` | `#323665` (`--navy`) | Strong navy accent surface (sample card per Moodboard p14) | ✅ Locked |
| `--surface-light` | `#f8f9fc` (`--cloud-white`) | Alternate light section variant (Moodboard p31 shows light cards mixed with dark) | ✅ Locked as variant |

⚠ **Phase 3 follow-up:** these derived mid-tones must be visually validated in Phase 6 (Build) against actual content. The OKLCH math behind tinting toward navy hue (rather than pure greyscale) follows the brandguide spirit of "quiet infrastructure" (p9) — neutrals tinted toward the brand axis.

### 1.3 Text colors (derived from Moodboard samples)

| Token name | Hex | Use case |
|---|---|---|
| `--text-primary-on-dark` | `#f8f9fc` (`--cloud-white`) | Body and headlines on dark surfaces (per Moodboard p14, p33) |
| `--text-secondary-on-dark` | `#a79ab4` (`--soft-lavender`) | Sub-copy on dark surfaces (consistent with p9 "soft surfaces, dividers") |
| `--text-primary-on-light` | `#0b0c16` (`--ink`) | Body and headlines on light surfaces |
| `--text-secondary-on-light` | `#323665` (`--navy`) | Sub-copy on light surfaces (per Moodboard p14 example) |
| `--text-accent` | `#943f78` (`--magenta`) | Accent fragments (italic Fraunces moments) and key data callouts |

### 1.4 Gradient system (Moodboard p9–10)

Two locked gradient options:

**Option 01 — Dark gradient (v2 primary):**
```
linear-gradient(120deg, #323665 0%, #6d5ea4 50%, #943f78 100%)
```
Composition: Deep Indigo Navy → Purple → Magenta. Moodboard p10 describes as "refined balance between credibility, modernity, and premium digital infrastructure."

**Option 02 — Light gradient (alternate, for cream/white surface variants):**
```
linear-gradient(120deg, #f8f9fc 0%, #6d5ea4 50%, #943f78 100%)
```
Composition: Cloud White → Purple → Magenta.

**Usage rules (Moodboard p10):** "hero backgrounds, section transitions, infrastructure textures, data highlights, layered UI moments." Restrained application — gradients are punctuation, not surface filler. Per refs teardown, expect gradient use only at S3 (Movement/Opportunity) and S7 (Final CTA) beats in the v2 architecture.

**Cinematic retune note:** the gradient as captured is already dark-friendly. For "cinematic" feel per feedback-03 (softer atmosphere, less abrupt color transitions), tune via:
- Larger gradient stops (longer transitions, no hard color edges)
- Mesh gradient or layered radial overlays for atmospheric depth
- Reduced saturation on the gradient mid-stop in Phase 6
- See Moodboard p18 "Background" textures — abstract dark navy network imagery — for compatible atmospheric layers on top of gradient bases.

---

## 2. Typography tokens

### 2.1 Families (Moodboard p12–14)

| Token name | Value | Role |
|---|---|---|
| `--font-display` | `Fraunces, serif` | Headlines · manifesto moments · high-value numbers · italic accent fragments (the v2 signature pattern) |
| `--font-body` | `Poppins, sans-serif` | Navigation · body copy · buttons · tables · labels · dashboard UI · forms · dense product info |

### 2.2 Weights available (Moodboard p12–13)

| Family | Weights |
|---|---|
| Fraunces | Black · Bold · Semibold · Medium · Light · Thin |
| Poppins | Extra Bold · Bold · Semibold · Medium · Regular |

### 2.3 Type scale (derived — Moodboard does not specify precise px)

Moodboard p14 sample shows hero headline ~64px in Fraunces. Phase 3 derives a complete scale; Phase 6 validates against real content. Candidate scale (rem-based for responsive, clamp() for fluid):

| Token | Min → Max | Family | Weight | Use |
|---|---|---|---|---|
| `--type-display` | `clamp(2.5rem, 6vw + 1rem, 4.5rem)` | Fraunces | Bold | Hero H1 |
| `--type-h1` | `clamp(2rem, 4vw + 1rem, 3rem)` | Fraunces | Bold | Section H2 headlines |
| `--type-h2` | `clamp(1.5rem, 3vw + 0.5rem, 2.25rem)` | Fraunces | Semibold | Sub-section headers |
| `--type-h3` | `clamp(1.25rem, 2vw + 0.5rem, 1.5rem)` | Poppins | Semibold | Card titles · list-item titles |
| `--type-body` | `1rem` | Poppins | Regular | Body copy |
| `--type-body-lg` | `1.125rem` | Poppins | Regular | Lead paragraphs (S1 hero sub, etc.) |
| `--type-caption` | `0.875rem` | Poppins | Medium | Captions · meta · footer |
| `--type-eyebrow` | `0.75rem` | Poppins | Semibold | Eyebrows (uppercase, letter-spacing 0.08em per `_TEMPLATE.md` convention from v1) |
| `--type-data-callout` | `clamp(3rem, 8vw, 5rem)` | Fraunces | Bold | Big data numbers (S2 stats, S4 outcome — "Bold data callouts" per feedback-03) |

### 2.4 Italic accent fragment pattern (v2 signature)

From Moodboard p14, p30, p33–34: a recurring v2 pattern is **italic Fraunces in magenta on key fragments** within otherwise-sans-serif headlines and Poppins context. Examples observed:
- "Operational *Intelligence* at the Edge" — accent on "Intelligence"
- "The *Future* of Commerce" — accent on "Future"
- "Built for people, *not networks*" — accent on "not networks"
- "Welcome to *the future*" — accent on "the future"
- "Empowering *Commerce*" — accent on "Commerce"

**Implementation:** wrap the accent fragment in `<em class="accent">...</em>` or equivalent CSS class. CSS: `font-family: var(--font-display); font-style: italic; color: var(--text-accent);`. Survives both light and dark surfaces.

This is the typographic expression of the "one accent" restraint rule (Moodboard p24 "Controlled: Deep Indigo Navy, White, and one vertical accent keep the system sharp").

---

## 3. Buttons

Moodboard p14 + p33 + p34 (multiple samples).

| Token / spec | Value |
|---|---|
| Shape | **Pill** — border-radius 999px |
| Primary CTA color | Navy `--navy` (background) + Cloud White text |
| Secondary CTA color | Magenta `--magenta` (background) + Cloud White text |
| Tertiary / outline CTA | Transparent bg + Navy border + Navy text (on light) OR Cloud White border + Cloud White text (on dark) |
| Padding | ~16px vertical · ~32px horizontal (derived from sample sizing; validate in Phase 6) |
| Typography | Poppins Semibold |
| Hover state | Per Moodboard p9 "Purple supports hover states" — fades primary navy or magenta toward purple `--purple` |
| States | Rest · Hover · Active · Disabled · Focus (a11y outline using Cloud White or Magenta) |

**Variant order observed in samples:** when two CTAs sit together, the order varies. Moodboard p33 shows Navy primary + Magenta secondary; other samples show Magenta primary + Navy secondary. **Decision in Phase 6:** establish one canonical primary/secondary mapping. Recommendation: **Navy = primary (more structural authority), Magenta = secondary (high-emotion CTA, reserved for conversion moments)**.

---

## 4. Iconography (Moodboard p20)

**Style:** Two-color line icons. Dark navy line work + magenta accent dots / fills on the most important detail of each icon.

**Examples observed (12 icons on p20):** card+phone with $, storefront with $, security shield with nodes, data flow with chart, contactless payment hand, user+network, tablet+touch, transfer arrows, analytics dashboards (3 variations), diamond.

**Stroke width:** consistent across set, ~2px equivalent (derived; needs validation against the actual SVG icons when D&Z provides them).

**Implementation challenge inherited from v1:** the v1 attempt used Lucide icons (single-color line-art with `currentColor`). Lucide icons do not have natural anchor points for a magenta accent dot — the v1 two-tone attempt was reverted. **v2 options:**

| Option | Pros | Cons |
|---|---|---|
| **A — Commission purpose-drawn icon set** | Matches Moodboard p20 exactly · Premium signature feel · Custom semantics per icon | Cost · Schedule (~1–2 weeks to draw 8–12 anchor icons) · Maintenance overhead |
| **B — Use Lucide single-color (v1 carry-over)** | No cost · Available now · `currentColor` makes recoloring trivial | No two-tone signature · Doesn't match Moodboard prescription |
| **C — Hybrid: Lucide single-color + custom 4–6 hero icons** | Lucide for utility (S5 process steps, FAQ icons) · Custom for hero data viz / S2 stat strip / S4 outcome row | Two icon systems to maintain · Visual coherence risk if not careful |

**Recommendation:** **Option C** — start with Lucide single-color in v2 build, commission 4–6 hero / data-strip / outcome icons mid-Phase 6 once layout is settled and we know which icons are most visible. Phase 6 ownership.

---

## 5. Imagery (Moodboard p16–17 + v2 reconciliation)

**⚠ Critical reconciliation.** Moodboard p16 describes the imagery direction for the brand at the time it was written (~2026-05-19), and prescribes:

> "Style: cream backgrounds, dark navy line work, one brand accent on the most important detail."

This is v1-aligned (Mercury cream + line-art emblems). The Moodboard p17 "Illustration" page shows line-art automotive scenes on cream/lavender background — also v1.

**Moodboard p16 explicitly anticipates v2:**
> "Need: public-use partner logos, real team headshots, and vertical-specific photography can replace placeholders later."

§0 v2 (locked 2026-05-26) declares "later" is now. The `project_imagery_direction` memory documents the v2 direction: editorial-cinematic photography of humans as competent agents in vertical context, automotive-glamour modernized. That memory supersedes Moodboard p16–17 line-art direction for v2.

**v2 imagery rules (cite `project_imagery_direction` memory):**

| Eixo | ✅ OK | ❌ NÃO |
|---|---|---|
| Style | Editorial-cinematic photography. Real humans as agents in vertical context (Auto = pit/showroom/service drive; Entertainment = venue ops; Sports = front office; POS = channel/partner) | Line-art emblems · cartoon · stock SaaS · generic handshakes · grid-girl/paddock-model decorative framing |
| Lighting | Cinematic (Vogue Business, Bloomberg Pursuits, Porsche Newsroom register) | Beauty-campaign / lifestyle / lingerie register |
| Color treatment | Photography can carry natural color; subtle grade toward navy palette in post for harmony with dark surface | Saturated AI-glossy realism |
| Composition | Head-shoulders portraits · waist-up · contextual full-body action · environmental scenes | Body-focused crops · seductive direct camera gaze · isolating subject from work context |
| Casting | Diverse (age 25–55, ethnicity, body types). Women lead decision scenes (CFO, VP Ops, team principal) as much as men. Editorial attractiveness OK. | Casting reduced to one demographic · women framed as decorative |
| Reference frames | Apple Business · Tesla Business · Porsche Newsroom (Iron Dames pattern) · Stripe customer pages · Bloomberg Businessweek · W Series / F1 Academy comms | Klarna · Affirm · Mercury cream homepage · grid-girl motorsport |

**Backgrounds (Moodboard p18) survive v2:** abstract dark navy/purple network textures (grid, circuit, particle-flow imagery) work as atmospheric layers on dark surfaces. Compatible with feedback-03 "modern UI overlays/data visualization." Recommendation: use as subtle hero parallax layer or section divider, low opacity.

---

## 6. Logo (Moodboard p25–26)

| Asset | Use | Constraint |
|---|---|---|
| **Wordmark CREDX** | Navigation · footer · default mark | Bold geometric sans (Poppins-class). Available in dark navy `#323665` or Cloud White depending on surface. |
| **Symbol (looping ribbon in gradient)** | Decorative · favicon · OG image · standalone brand mark | Per Moodboard: "interconnected looping forms" with gradient (navy/purple/magenta). **D&Z needs to deliver the actual SVG/PNG** — current `assets/logo/credx-shape.svg` is monochrome only. |
| **Combined (symbol + wordmark)** | Cover animation moments · big-canvas usage | Symbol contains wordmark in circular layout. |
| **Dark variant** | Square dark navy card with white wordmark | Survives. |

**Logo Do's & Don'ts (p26):** no transparency · no skew/stretch · no rotation · no stroke/outline · no recreation with different typeface · no drop shadow or effects. Standard hygiene.

**Open follow-up:** the full gradient ribbon symbol (Moodboard p25, top-right and bottom-right) needs to be delivered as a clean SVG/PNG asset. Logo files in `assets/logo/` currently have monochrome `credx-shape.svg` — the gradient symbol is missing.

---

## 7. Visual identity principles (Moodboard p24)

Tagline: ***"Real credit. Real savings. Merchant-owned loyalty."*** (Moodboard p24, hero positioning statement).

Three principles (token-shaped, visual layer):

| Principle | Translation to tokens |
|---|---|
| **Structural** ("CredX is infrastructure, not a feature add-on") | Layout: clean grids, fine rules, no decorative chrome. Components: consistent spacing scale, no nested cards. |
| **Measured** ("Every major section earns its place with a number") | Each section has a quantified anchor (S2 stats, S4 outcome stats, S6 partner counts). Big-number typography uses `--type-data-callout`. |
| **Controlled** ("Deep Indigo Navy, White, and one vertical accent keep the system sharp") | Color discipline: surface = `--navy` or `--ink`, text = `--cloud-white`, accent = `--magenta` only at the most important fragment per section. Never two accents competing. |

The tagline relationship to the §0 anchor *"a modern financial movement reshaping payment economics"* needs reconciliation by `credx-copy` — the Moodboard tagline is more concrete (3 nouns), the §0 anchor is more positioning-level (manifesto sentence). Both can coexist: Moodboard tagline as sub-pillar / footer / nav, §0 anchor as hero / manifesto / final CTA.

---

## 8. Out of scope — routed to other skills

| Topic | Moodboard reference | Route to |
|---|---|---|
| Voice & Tone — "Bold. Trustworthy. Empowering." + 5 voice rules | p27–28 | `credx-copy` skill — but ⚠ `project_v2_direction_lock` §0 supersedes this with **Premium · Aspirational · Enterprise-ready · Human**. Moodboard p28 voice descriptor is OUT OF DATE. `credx-copy` update in Phase 4 should reconcile. |
| Graphic Style narrative ("Soft Infrastructure" concept) | p29–30 | `credx-copy` for narrative; this skill captures only the **visual patterns** observed in p30 samples (italic Fraunces accent · pill CTA mix · light/dark card mix · subtle network texture overlays). |
| UI Inspiration mockups | p31, p33–34 | These ARE in scope as design references and have been internalized into typography + button + composition rules above. The specific layouts (welcome card, app download, dashboard) become Phase 6 component candidates. |
| Concept narrative ("Soft Infrastructure" prose, p5) | p5–6 | `credx-copy` for the narrative content; the visual implication ("measured, structural, useful" + "Brex clarity / Mercury restraint / Vertical flexibility" framing) is partially superseded by §0 dark navy enterprise lock — "Mercury restraint" specifically. |

---

## 9. Spacing, border-radius, shadows (Moodboard implicit only)

The Moodboard does not define explicit spacing scale, border-radius scale, or shadow tokens. These are **derived from sample observation** in Phase 6:

| Token type | Observation from Moodboard samples | Status |
|---|---|---|
| Border-radius | Pill buttons (999px), card corners ~16–24px (samples on p6, p14, p30) | ⏳ Derive in Phase 6 from real layout |
| Shadow | p25 shows soft drop shadow on logo card variants (p25 bottom-right) | ⏳ Derive subtle elevation scale (avoid heavy shadows — Moodboard p24 says "measured, structural") |
| Spacing scale | Generous whitespace observed; consistent rhythm | ⏳ Recommend 4px base unit, scale 4-8-12-16-24-32-48-64-96-128 |

⚠ **Phase 3 follow-up:** these need real layout testing in Phase 6. The Moodboard restraint principle ("measured · structural") rules out heavy shadows and chunky borders.

---

## 10. Summary — what's locked, what's pending

### Locked from Moodboard extraction (✅)

- 4 brand colors + 2 utility (`--ink`, `--cloud-white`)
- 2 gradient options (dark + light) — Option 01 dark = primary v2 base, retune applied per D5 below
- Typography family **Poppins** (sans body + all display in v2 per B1 lock)
- Pill button geometry (radius 999px)
- Logo wordmark + don'ts (p25–26)
- Visual identity principles (Structural · Measured · Controlled — p24)
- Imagery direction (per `project_imagery_direction` memory, supersedes Moodboard p16–17 line-art)
- Background atmospheric textures (Moodboard p18) as compatible layer for dark surfaces

### Locked via sign-off walkthrough 2026-05-27 (✅)

Source: `workflow/Sign-off-2026-05-27.md` Part 1 (brand) + Part 3 (design derivation).

**Typography (from Part 1):**
- ⚠ **Fraunces DROPS** (B1 = B). All-sans display. Sans display substitute (Inter Display / GT America / Söhne candidates) deferred to Phase 6 pick.
- ⚠ **Italic accent fragment pattern DROPS with Fraunces** (B1 follow-on). Accent on key fragments = **color only** (magenta), no italic. Pattern: wrap accent fragment in `<em class="accent">` with `color: var(--text-accent); font-style: normal;` (or just inline magenta).
- **`--type-display` / `--type-h1` / `--type-h2` / `--type-data-callout`** all now point to the sans display font (TBD in Phase 6).

**Brand statements (from Part 1, also affects this doc's framing):**
- ⚠ **Moodboard tagline RETIRES** (B2 = B). Only §0 anchor *"a modern financial movement reshaping payment economics"* used site-wide. Resolves the prior "tagline reconciliation" pending item.

**Design derivation (from Part 3):**

| Lock | Decision |
|---|---|
| **D1** | ✅ A — Mid-tone navy scale candidates accepted (`--surface-1` `#13141f` · `--surface-2` `#1a1c2c` · `--surface-3` `#23253a`) pending Phase 6 visual validation. |
| **D2** | ✅ A — `clamp()`-based type scale accepted (display 40–72px · H1 32–48px · H2 24–36px · H3 20–24px · body 16px · etc) pending Phase 6 validation. |
| **D3** | ✅ surface-aware mapping — **Dark surface (default v2):** Magenta solid primary · Cream outline secondary · Magenta text-link tertiary. **Light surface (variant):** Navy solid primary · Magenta/Navy outline secondary · Navy text-link tertiary. Magenta = primary dominant in practice (99% dark surface). |
| **D4** | ✅ C — Hybrid iconography. Lucide single-color for utility icons (S5 process steps, FAQ, etc.). Commission 4–6 custom icons for hero/stat-strip/outcome moments mid-Phase 6. |
| **D5** | ✅ B — Pre-emptive cinematic gradient softening. Longer stops + reduced mid-stop saturation + atmospheric overlay (Moodboard p18 textures) as composition pattern. |
| **D6** | ✅ A — Spacing 4px base (4-8-12-16-24-32-48-64-96-128), border-radius pill 999px / cards 16–24px / small 8–12px, shadows subtle (no heavy elevation) — pending Phase 6 visual validation. |
| **D7** | ✅ A — D&Z delivers full gradient ribbon symbol as production SVG/PNG. ⚠ External action: D&Z timeline pending. |

### Out of scope (routed)

- Voice & Tone (Moodboard p27–28) → `credx-copy` (§0 already supersedes Moodboard's p28 descriptor — Premium/Aspirational/Enterprise-ready/Human wins).
- Narrative / concept prose (Moodboard p5, p29–30 prose) → `credx-copy`.
- Sans display font pick (Inter Display / GT America / Söhne candidates) → Phase 6.

### Still external / awaiting

- ⚠ **D7 asset delivery** — D&Z to deliver gradient ribbon symbol SVG/PNG. No timeline yet.
- ⚠ **Phase 6 validations** — all "pending Phase 6" items above get visual review against real content during Build.

---

## What's next

This doc feeds Phase 4 (Copy) + Phase 6 (Build). Phase 3 ✅ closed via sign-off walkthrough 2026-05-27 (`workflow/Sign-off-2026-05-27.md`).

- **Phase 4 (Copy)** uses: §0 anchor as tagline · color-only magenta accent (not italic) on key fragments · B2B Operator/Merchant voice mode drafted by `credx-copy` from §0 pillars.
- **Phase 6 (Build)** validates: derived mid-tone navy scale · clamp() type scale · spacing/radius/shadow scales · commissions hybrid iconography · executes cinematic gradient softening · picks sans display substitute (Inter Display / GT America / Söhne).

Sibling docs: `design/v2-references.md` (refs teardown), `plan/01.Brand-and-References.md` (brand validation), `plan/02.Architecture.md` (section list), `workflow/Sign-off-2026-05-27.md` (consolidated locks).
