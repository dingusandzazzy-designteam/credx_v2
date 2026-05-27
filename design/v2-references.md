# CredX v2 — Reference Teardown (Phase 1)

> **Status:** Draft 2026-05-26. Feeds Phase 2 (Architecture) and Phase 3 (Design System).
> **Direction anchor:** Path B — hybrid editorial + B2B. See `plan/00.Plan.md §Direction lock`.
> **Method:** WebFetch + structured extraction of 3 anchor refs. Tesla Business blocked (HTTP 403); patterns inferred from related Tesla Energy / Fleet imagery and cross-checked against the other 3.

---

## References scanned

| Ref | URL | Why this ref |
|---|---|---|
| **Apple Business** | apple.com/business | Gold standard editorial B2B. Image-first, mixed-gender professional photography, integrated product mockups, premium restraint. |
| **Figma Enterprise** | figma.com/enterprise | B2B substance + UI overlay maturity. Scale/governance/partnership language. Density discipline. |
| **Porsche Newsroom** | newsroom.porsche.com | Premium automotive editorial. Confirms the modernized automotive-glamour register (women as racers, engineers, executives — explicitly no grid-girl framing). |
| ~~Tesla Business~~ | tesla.com/business (403) | Skipped; patterns substituted via cross-ref with Porsche + general Tesla Energy editorial conventions. |

---

## Cross-cutting patterns to APPLY

### 1. Hero treatment — image-first, text supporting

All three refs use **large image (or video) above the fold with text overlay or text below**. None lead with a text-dominated hero.

- Apple: full-bleed editorial photography with tagline "Work as one. Or one thousand." overlaid.
- Figma: product screenshot dominant + "Scale design. Reduce complexity." overlaid + single primary CTA.
- Porsche: 1920×960 hero imagery, headline below image (not over).

**For CredX:** S1 hero is **image / cover animation / video**, with H1 + sub overlaid or placed directly below. Cover animation (Trilha B) sits exactly in this slot.

### 2. Surface mode — dark navy is one path; restraint is the constant

⚠ **Important nuance.** Two of three refs use **LIGHT surface** (Apple, Figma white; Porsche white with grayscale photography). Only Stripe Treasury / Snowflake / Vercel-class refs in our broader Path B list use dark navy primary.

The locked §0 decision is **dark navy enterprise** — that doesn't change. But this teardown surfaces that the **functional outcome we want** (Premium · Aspirational · Enterprise-ready · Human · editorial cinematic + automotive glamour) is delivered by both light and dark surface modes. The constant across all of them is **restraint + photographic excellence + density discipline**, not the surface hue.

**For CredX Phase 3:** dark navy is the surface. Translate Apple/Figma/Porsche compositional patterns to dark mode by drawing reference from Stripe Treasury / Anthropic / Linear `/customers` / Vercel enterprise — they execute the same editorial restraint in dark.

### 3. Photography — humans as agents, not decoration

**Porsche Newsroom is the most useful reference for CredX Automotive specifically.** Direct quotes from the teardown:

- "Women featured in diverse roles: Michelle Gatting and Rahel Frey as **Iron Dames racing professionals**; Cordula Pflaum as **Lufthansa flight captain**; Célia Martin in motorsport"
- "Posture and framing: subjects typically photographed **in action** (cockpit, racetrack, workshop) rather than posed"
- "**No decorative/grid-girl aesthetic detected**; women appear as competitors, technical experts, and brand ambassadors"
- "Craft storytelling: features on upholsterers, painters, engineers as artisans rather than car-centric celebrity"
- "Diversity of protagonist ages, geographies, professions (pilot, chef, collectors, drivers) avoiding narrow demographic idealization"
- "Human subjects consistently positioned as agents with agency and expertise rather than decorative elements"

This is exactly the framing locked in `project_imagery_direction` memory. Porsche **proves it's both premium-automotive-coded and modern** — same vocabulary CredX will use.

Apple Business cross-confirms with mixed-gender professional conversations (e.g., Foncia case study showing "two men and a woman" around a MacBook). Figma uses minimal humans on the main enterprise page — the editorial human moment is reserved for customer-quote moments rather than scattered through every section.

**For CredX:** anchor per-vertical scene library from `project_imagery_direction` memory. Translate Porsche's craft + agency framing to each vertical (Auto = pit/showroom/service drive; Entertainment = venue ops; Sports = front office; POS = channel/partner).

### 4. UI overlays + data callouts — integrated into composition, not floating ornament

- **Apple Business** integrates app icons directly into background imagery (no floating UI cards).
- **Figma Enterprise** uses 2-column alternating layouts: left = explanatory text (~150–200 chars), right = product screenshot showing real interface, with "Learn more" anchor.
- **Porsche** uses performance specs as inline data inserts ("Electrical consumption combined: 24.8 kWh/100 km") rather than dashboard widgets.

**For CredX:** S5-equivalent (interchange calculator) and S2-equivalent (stats strip) should follow Figma's 2-column integration pattern, not v1's standalone floating-card treatment. Data callouts inline; "bold data callouts" from feedback-03 means typographically loud (large serif numbers or premium sans display) — not dashboard-widget loud.

### 5. Typography — sans-serif dominant, no editorial serif display

All three refs are **sans-serif dominant**. Apple uses SF Pro across, Figma uses its own sans, Porsche uses a proprietary sans. **No serif display headlines observed** in any of the three.

⚠ **This contradicts the v1 baseline (Fraunces editorial for H1/H2/quotes/Movement headline).** v1 used Fraunces because Mercury cream demanded editorial-warm contrast; v2 dark navy + Path B refs all run pure sans.

**For CredX Phase 3:** strong recommendation to **drop Fraunces** as the editorial display font and switch to a premium sans (Poppins stays as the body family; consider a display weight of Poppins or a new sans display like Inter Display / GT America / Söhne for hero/section headlines). Decision point in Phase 3 — surface to brand owner.

### 6. Density and pacing — short modular blocks, not long-form essays

- **Figma Enterprise:** ~150–200 characters body per section. 4 main sections. Generous white space between.
- **Porsche Newsroom:** modular 3–4 sentence teases dominate homepage; long-form available but buried behind "read more". Editorial depth lives in `Christophorus` magazine subpages.
- **Apple Business:** alternating image/text blocks; each block self-contained.

**For CredX:** feedback-03's "10-second comprehension" maps directly to this. Each section ~150–250 characters of body + image + CTA. Long-form moves to case study / partner-detail pages, not the landing.

### 7. Storytelling pattern — image leads, text supports the image

Apple's pattern (paraphrased from teardown): "Concept explanation → supporting image → 'Learn more' link". Figma's: same in 2-column. Porsche's: image → headline → 3-sentence tease → link.

**For CredX:** each section should be readable as **image-first, then text confirming what the image already showed**. Pain section = image of revenue leakage / receipt stack / interchange invoice + 1-line confirmation. Opportunity section = image of partnership / handshake / dealer principal + 1-line confirmation. Etc.

### 8. CTA language and placement

- **Apple:** "Learn more" (4x), "Watch the video", "Read the story", "Get in touch", "Talk to an Apple expert". Primary CTAs are enterprise-contact-driven (form with industry, role, company).
- **Figma:** "Contact sales" (primary, repeated in hero + footer) + "Learn more" per section.
- **Porsche:** modular "read more" per editorial tease.

**For CredX:** primary CTA per vertical is enterprise-contact-style ("Talk to a CredX partner specialist" / "Get a savings estimate for your operation" — exact language for `credx-copy` to write). Sub-CTAs per section are "Learn more" / "See the case" / "Read the partner story". Final-CTA is the explicit conversion ask.

### 9. Section transition treatments

All three refs use **whitespace and section breaks** rather than heavy gradient transitions or full-bleed colored bands between sections. Porsche specifically avoids decorative chromatic variety. v1 had `--gradient-1` bands at S3 (Movement) + S12 (Final CTA) — those served the cream baseline (gradient was needed to break the cream monotone).

**For CredX dark navy:** gradient bands may need to retune softer and serve as **section punctuation** (e.g., only at the Movement / Final CTA beats) rather than the visual energy of the page. Per Phase 3 design-audit re-run.

---

## Cross-cutting patterns to AVOID

| Anti-pattern | Source of confirmation |
|---|---|
| Text-heavy hero (paragraph-dense above the fold) | None of 3 refs do this |
| Decorative model framing (grid-girl, paddock-girl, "model adjacent to car") | Porsche teardown explicitly says **"no decorative/grid-girl aesthetic detected"** — confirmed banned |
| Direct seductive camera gaze in human imagery | Porsche subjects shown "in action (cockpit, racetrack, workshop) rather than posed" |
| Floating dashboard UI widget ornament (the "SaaS hero with floating card") | Apple integrates, Figma uses 2-col with real interface — neither floats decorative UI |
| Editorial serif display for B2B premium | None of 3 refs use serif display — sans dominant universally |
| Chromatic variety / multi-accent palette | Porsche "design favors flat, clean surfaces" — accent restraint is the rule |
| Long-form prose per section (>300 chars body) | All 3 hover ~150–250 chars/section |
| Carousel-driven UI for premium B2B (auto-scrolling testimonials, hero carousels) | Not observed in any of 3 |
| Multiple primary CTAs visible at once | All 3 use one clear primary + sub-CTAs |

---

## Surface-mode caveat — Phase 3 carry-over

The locked decision in §0 is **dark navy enterprise** as the v2 surface. This teardown confirms that's a valid path — Stripe Treasury, Snowflake, Vercel enterprise, Anthropic, Linear customer pages all execute the same compositional patterns in dark mode.

But it also surfaces that **the brand-positioning outcome we want (Premium · Aspirational · Enterprise-ready · Human · automotive glamour)** is delivered by Apple, Figma, and Porsche in light mode. The differentiator is **compositional restraint + photographic excellence + density discipline**, not the surface hue alone.

**Practical implication for Phase 3:**
- Confirm dark navy as the surface lock (don't reopen §0).
- Recommend adding **Stripe Treasury** + **Linear customer pages** + **Anthropic homepage** to the secondary ref set for **dark-mode compositional patterns** — translates Apple/Figma/Porsche patterns to dark execution.
- Watch out: dark surfaces require more careful photography treatment (post-production: lift shadows? grade for navy harmony? Editorial photographers shooting for dark backgrounds is a specific brief).

---

## Per-vertical implications (preview for Phase 2)

| Vertical | Image-led scene library | Anti-pattern to avoid |
|---|---|---|
| **Automotive** | Pit/paddock (engineer + headset, Iron Dames-class), showroom premium handshake, service drive with tablet, auction floor, golden-hour test drive, pit-wall war room | Decorative model + premium car; "supercar in a studio without humans"; cream-colored Mercury-aesthetic showroom |
| **Entertainment** | Venue ops director with walkie + headset, live entertainment CFO with ROI report, backstage logistics manager, ticketing in box | Stock concert audience photo; nightlife/club aesthetics; entertainment-as-spectacle without operator perspective |
| **Sports** | VP fan experience in arena, CCO at front office, loyalty/membership director, pitchside ops with headset | Locker room celebration shots; athlete glamour without front-office context |
| **POS** | Channel director in boardroom, enterprise partner manager handshake with merchant, merchant onboarding ops, partner conference floor | Generic startup-office stock photo; "developer-at-keyboard" SaaS aesthetic; transaction-screen close-up |

---

## What's next

This doc feeds:
- **Phase 2 (Architecture)** — section list per vertical can now reference these compositional patterns when deciding what each section LOOKS like, not just what it says.
- **Phase 3 (Design System)** — `design-audit` re-run uses these patterns to extract tokens. The `credx-design` skill creation translates them into component specs.
- **Phase 5 (Imagery)** — `prompts/<vertical>.md §C` Midjourney scaffolding consumes the scene library directly.

Sign-off needed from brand owner (Kendall / Audrey / D&Z) before Phase 2 kicks: (a) confirm Path B + light/dark mode caveat understood; (b) confirm Fraunces drop recommendation for serif display.
