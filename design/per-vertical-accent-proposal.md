# Per-Vertical Accent Differentiation — PROPOSAL (design-audit)

> **Status:** PROPOSAL ONLY — 2026-06-22. Nothing applied. This goes to a **brand-owner gate** (Kendall / Audrey / D&Z) before any code change.
> **Ask:** differentiate the verticals by colour (not just imagery), staying **within the locked brand family**, navy base kept for cohesion. Automotive (Magenta) is the approved reference and is **not** changed.
> **Scope:** VISUAL / TOKEN layer only — colour + gradient + button/eyebrow/link accent tokens. No copy / voice / structure.
> **Source of truth:** brand palette per `documents/02_Brand/CREDX-Moodboard-051926.pdf` p8 (4 locked hues) + deployed tokens in each `<vertical>/style.css :root`.

---

## §0 — Honest constraint (read first)

The brand palette is **4 analogous cool hues**: Navy `#323665` · Magenta `#943f78` · Purple `#6d5ea4` · Soft Lavender `#a79ab4`. They sit close together on the wheel (magenta ≈320° → navy ≈234°). That is *intentional* brand tightness — but it means **four dramatically different looks are not available** from the locked hexes alone, especially because:

- **Soft Lavender fails AA** as an accent: as a white-text button (≈2.5:1) and as text on the light theme (≈2.3:1). It only works as the large decorative `--text-secondary` it already is. So it **cannot** be a vertical's primary accent on its own.
- **Navy `#323665` as a button on the dark page** reads as "no accent" (too low-chroma against `--ink`). It needs lifting to register as an accent.

**Therefore:** only **Automotive's Magenta** uses purely locked hexes. The other three verticals need **derived values within the brand family** — tints/shades of a locked hue, or an interpolation *between* two locked hues. These are proposed, not brandguide-canonical, and are the main thing the gate must approve. (Precedent exists: `--magenta-bright #d667ad` is already a derived tint of magenta, shipped on Automotive for AA.)

**The story that holds:** the four verticals **walk the brand's hue arc**, warm → cool:
`Automotive Magenta (≈320°) → Entertainment Orchid (≈287°) → Sports Purple (≈258°) → POS Indigo (≈234°)`.
Distinct enough to read at a glance, all inside the indigo–magenta family, navy base shared.

---

## §1 — Current state ("before")

All four non-Automotive verticals were **cloned from the magenta system** — they currently ship **identical** accent tokens. Differentiation today = **zero** (colour-wise; only imagery differs).

| Token | Value (all verticals today) | Role |
|---|---|---|
| `--magenta` | `#943f78` | surface accent — button bg, slider thumb, gradient end stop |
| `--magenta-bright` | `#d667ad` | text accent on dark (`--text-accent`) — AA-safe on `--ink` |
| `--purple` | `#6d5ea4` | button hover, gradient mid stop, `.btn-text` hover |
| `--gradient-1` | `navy → navy 25% → purple 55% → magenta 95%` | cinematic band (S2/S8, placeholders) |
| `--soft-lavender` | `#a79ab4` | `--text-secondary` (decorative) — **stays everywhere** |
| `--navy` / `--ink` / surfaces | unchanged | shared base — **stays everywhere** |

---

## §2 — Proposal ("after") — per vertical

Only the **four accent tokens** change per vertical (`--magenta`, `--magenta-bright`, `--purple`, `--gradient-1`). Everything else — navy, ink, surfaces, `--soft-lavender` as `--text-secondary`, typography, spacing — is shared and **unchanged**. Implementation = redefine those token *values* in each vertical's own `:root` (see §5). Hexes marked ◆ are **derived / proposed** (gate must approve); ✓-locked are brandguide hexes.

### Automotive — Magenta *(reference — UNCHANGED)*
| Token | Value |
|---|---|
| `--magenta` (surface) | `#943f78` ✓-locked |
| `--magenta-bright` (text/dark) | `#d667ad` ◆ (shipped) |
| `--purple` (hover/mid) | `#6d5ea4` ✓-locked |
| `--gradient-1` | `navy → navy 25% → #6d5ea4 55% → #943f78 95%` |

### Sports — Purple
| Token | Before | After | Note |
|---|---|---|---|
| `--magenta` (surface) | `#943f78` | `#6d5ea4` ✓-locked | Purple as the button/slider accent |
| `--magenta-bright` (text/dark) | `#d667ad` | `#9d8be0` ◆ | periwinkle-violet, lifted for AA on `--ink` |
| `--purple` (hover/mid) | `#6d5ea4` | `#4f4480` ◆ | deeper indigo-purple (hover darker than base) |
| `--gradient-1` | …→magenta | `navy → navy 25% → #4f4480 55% → #6d5ea4 95%` | cooler band |

### Entertainment — Orchid *(derived in-between Magenta ↔ Purple)*
| Token | Before | After | Note |
|---|---|---|---|
| `--magenta` (surface) | `#943f78` | `#8a4f9c` ◆ | orchid/violet — sits between magenta and purple |
| `--magenta-bright` (text/dark) | `#d667ad` | `#c98fd6` ◆ | light orchid, AA on `--ink` |
| `--purple` (hover/mid) | `#6d5ea4` | `#6a3f86` ◆ | deeper violet |
| `--gradient-1` | …→magenta | `navy → navy 25% → #6a3f86 55% → #8a4f9c 95%` | violet band |

> **Why not pure Soft Lavender for Entertainment?** It is the obvious "4th locked hue," but it fails AA as a white-text button (≈2.5:1) and as light-theme text (≈2.3:1). Orchid keeps Entertainment clearly distinct from both Automotive (magenta) and Sports (purple) **and** passes AA in both themes. *Alt if the gate insists on a locked hex: lavender as a TEXT-only accent with ink-text buttons — workable but a special-case button pattern; not recommended.*

### POS — Indigo *(derived: brand Navy lifted to register as an accent)*
| Token | Before | After | Note |
|---|---|---|---|
| `--magenta` (surface) | `#943f78` | `#5159b5` ◆ | indigo/periwinkle — brand navy lifted so it reads as an accent on the dark page; coolest, most "enterprise/tech" — fits the channel/platform register |
| `--magenta-bright` (text/dark) | `#d667ad` | `#8b93e6` ◆ | periwinkle, AA on `--ink` |
| `--purple` (hover/mid) | `#6d5ea4` | `#3a3f80` ◆ | deep indigo |
| `--gradient-1` | …→magenta | `navy → navy 25% → #3a3f80 55% → #5159b5 95%` | indigo band |

---

## §3 — AA contrast check (both themes)

Two checks per accent: **white text on the surface accent** (the button) and **the text-accent on its background** (eyebrows/links). Ratios are computed (WCAG relative luminance), `≈`, confirm exact hex at the gate. Threshold: **4.5:1** normal text, 3:1 large/UI.

| Vertical | Button = white on `--magenta` | Dark text = `--magenta-bright` on `--ink` | Light text = `--magenta` on `#f4f5f9` |
|---|---|---|---|
| Automotive `#943f78` / `#d667ad` | ≈6.1 ✅ | ≈5.8 ✅ | ≈5.7 ✅ |
| Sports `#6d5ea4` / `#9d8be0` | ≈5.2 ✅ | ≈6.5 ✅ | ≈4.9 ✅ (tight) |
| Entertainment `#8a4f9c` / `#c98fd6` | ≈5.3 ✅ | ≈6.6 ✅ | ≈5.3 ✅ |
| POS `#5159b5` / `#8b93e6` | ≈5.6 ✅ | ≈6.8 ✅ | ≈6.0 ✅ |
| *(rejected)* Lavender `#a79ab4` | ≈2.5 ❌ | ≈7.3 ✅ | ≈2.3 ❌ |

All four proposed accents pass AA for body text in **both** themes (Sports light is tight at ≈4.9 — confirm or nudge the surface hue one step darker). Lavender shown only to document why it was rejected as a primary accent.

> **Light-theme note:** `[data-theme="light"]` sets `--text-accent: var(--magenta)` (the surface hue, not the bright). That is why the **light** column tests the surface hex on the near-white surface. Sports purple is the one to watch.

---

## §4 — Imagery & hero-overlay interaction

The Phase-5 renders just shipped (Sports `c55589f`, Entertainment `920edba`) use a **navy/neutral hero overlay** and warm available-light photography — they are **accent-agnostic** (no magenta baked into the photos). So a per-vertical accent **does not fight the imagery**:

- **Hero overlay** (`--ink`→transparent dark / `--cloud-white`→transparent light) is navy/neutral, not accent-coloured — **no change needed**.
- **Gradient bands** (S2 manifesto, S8 form) are the most visible accent surface; the new `--gradient-1` per vertical is where the colour shift will read most.
- **Buttons / eyebrows / links / slider** pick up the accent automatically via the token redefinition.
- ⚠ **One check:** any CTA that sits **over** a hero photo (e.g. `.hero--full .btn-primary`) — confirm the new accent still contrasts against that photo's busy side (it sits on the negative-space side by design, so low risk).

---

## §5 — Implementation approaches (for the gate to pick)

**A — Redefine token values (recommended, low-touch).** In each vertical's `:root`, change only the 4 accent token *values*. Every downstream `var(--magenta)` / `var(--magenta-bright)` / `var(--purple)` / gradient reference updates automatically — **zero component edits**, ~4 lines per vertical. Fast, reversible.
- *Smell:* `--magenta` would hold a purple/indigo value on Sports/POS (name no longer matches value). Cosmetic; documented here.

**B — Semantic alias refactor (proper, bigger).** Introduce `--accent` / `--accent-bright` / `--accent-deep` in `:root`, point them at the vertical's hues, and rewrite component references (`var(--magenta)` → `var(--accent)`, etc.) across each `style.css`. Cleaner names, but touches every accent reference in 3–4 files. Higher effort, more diff to review.

**Recommendation:** **A** now (ship the differentiation, prove it on the gate), optionally **B** later as a hygiene pass if the per-vertical system sticks. Automotive stays exactly as-is under both.

---

## §6 — Routing & gate

- **Decision owner:** brand-owner (Kendall / Audrey / D&Z) — this touches identity; the brandguide defines one palette, this proposes an in-family per-vertical extension.
- **Execution owner (after approval):** the per-vertical `style.css` edit is a small `frontend-design` / project-design task (4 token values × 3 verticals, approach A). **design-audit does not apply it.**
- **Untouched:** copy, voice, taglines, motion, structure, Automotive.
- **Do NOT apply** until the gate approves the derived ◆ hexes (especially Entertainment Orchid and POS Indigo, which are interpolations/lifts, not locked brand hexes).

---

## §7 — Summary

| Vertical | Accent | Surface hex | Text-bright hex | Locked? |
|---|---|---|---|---|
| Automotive | Magenta | `#943f78` | `#d667ad` | ✓ reference (unchanged) |
| Entertainment | Orchid | `#8a4f9c` ◆ | `#c98fd6` ◆ | derived (gate) |
| Sports | Purple | `#6d5ea4` | `#9d8be0` ◆ | hex locked / bright derived |
| POS | Indigo | `#5159b5` ◆ | `#8b93e6` ◆ | derived (gate) |

Navy base, ink surfaces, soft-lavender secondary text, typography, spacing — **shared and unchanged** across all. One brand, four readings along its own hue arc.
