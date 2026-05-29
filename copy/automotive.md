# Automotive — Landing Page Copy (v2)

> **URL:** `/automotive` (path / subdomain decided in Phase 7).
> **Template:** A (Auto · Entertainment · Sports — operator-pitch).
> **Status:** DRAFT 2026-05-27 — first greenfield write under v2 architecture. All sections await user review.
> **Architecture source:** `plan/02.Architecture.md §Template A` (S1 Hero · S2 Pain · S3 Opportunity · S4 Outcome · S5 Process · S6 Proof · S7 Final CTA + 5 globals).
> **Audience:** `audiences/automotive.md` — Dealership groups / DMS operators / OEM financing arms / F&I leadership.
> **Voice:** Premium · Aspirational · Enterprise-ready · Human. Mode: Operator / Merchant (per `voice.md` §Voice modes).
> **SEO note:** budget locked (Title ≤60 · Meta 150–160 · H1 ≤70). Keywords transfer from v1 research (`seo/credx_SEO.xlsx`). `seo-copy-sync` should validate this draft against the locked brief.

---

## SEO meta block

| Field | Value | Length | Status |
|---|---|---|---|
| URL slug | `/automotive` | — | DRAFT |
| Search intent | Commercial — the S2 pain-explainer and FAQ serve the informational interchange-fees intent | — | LOCKED 2026-05-29 |
| Funnel stage | MOFU (dealer principal / VP Ops actively evaluating interchange-reduction solutions) | — | LOCKED |
| Primary keyword | `car dealership interchange fees` | — | LOCKED 2026-05-29 (pain-aligned per SEMrush CA re-pull — see `seo/automotive_brief_revalidation_2026-05-29.md`) |
| Secondary keywords | `interchange fee reduction for dealerships` · `branded credit line for dealerships` · `embedded credit for car dealerships` | — | LOCKED |
| **Title (browser tab + SERP)** | `Cut Car Dealership Interchange Fees by $30K per $1M \| CredX` | 59 | LOCKED |
| **Meta description** | `Car dealership interchange fees cost you $30,000 of every $1M. CredX turns them into a branded credit line at the F&I desk, so your dealership keeps the margin.` | 160 | LOCKED |
| **H1 (S1 Hero)** | `Your dealership processes $1M a month. Where does $30,000 go?` | 61 | LOCKED — pain-pivot per A3; primary keyword carried in the S2 H2; color-only magenta accent on `$30,000` |
| OG title | `Cut Car Dealership Interchange Fees by $30K per $1M \| CredX` | 59 | LOCKED |
| OG description | `Car dealership interchange fees take $30,000 of every $1M. CredX turns them into a branded credit line at the F&I desk that your dealership owns.` | — | LOCKED |
| OG image | `assets/images/automotive_og_v2.png` | — | TBD — Phase 5 imagery |

**Notes:**
- Pain-pivot H1 per A3 lock — quantified leak in the first frame. Retained verbatim through the 2026-05-29 SEO re-validation.
- SEO target re-aligned to the pain pivot 2026-05-29 (SEMrush CA re-pull): primary is now `car dealership interchange fees`. The interchange-fees framing matches what the page leads with, so the keyword sits naturally in the S2 H2 and the pain narrative. Earlier candidates `dealer in-house financing` (off-brand — buy-here-pay-here) and `branded credit line for dealerships` (solution-side, weaker intent match) were stepped down; branded credit line stays a secondary. See `seo/automotive_brief_revalidation_2026-05-29.md`.
- The primary is Informational intent (SEMrush KD 33) — served by the S2 pain-explainer and the FAQ, which match that intent; the Title and CTAs stay commercial so the page still converts.
- Primary keyword is carried in the S2 H2 ("...to interchange fees"), so the locked pain-pivot H1 stays keyword-free and on-brand (on-page practice #5 honored via the H2).
- Avoid naming partner brands (PBS, Harley-Davidson, NMAX) in Title / Meta / H1 / OG until public-use approval is logged.
- "Up to 85%" hedge appears in body; the $30,000 per $1M dollar figure is the defensible anchor.

---

## S1 — Hero (pain-pivot)

**Status:** DRAFT
**Beat:** Pain-pivot H1 + outcome sub + primary CTA. Cinematic hero image as the visual anchor; the Trilha B cover animation IS the "short explainer video above the fold" from feedback-03 and will be its own animated section (separate from this hero slot, decision 2026-05-27).

| Field | Value |
|---|---|
| Eyebrow | `For dealership groups + DMS operators` |
| H1 | `Your dealership processes $1M a month. Where does` `<em class="accent">$30,000</em>` `go?` |
| Sub | `A Merchant Network Agreement with CredX turns the interchange fees you pay into a branded credit line for your dealership. It recovers up to $30,000 per million, builds a value-back program in your dealership's brand, and gives you the customer data your DMS does not capture.` |
| Primary CTA | `Talk to a CredX partner specialist` → opens lead-form modal |
| Hero asset | Static cinematic image (`assets/images/automotive/automotive-hero-poster.jpg`). No play button, no video modal. |
| Hero alt text | `Dealership F&I desk where a branded credit line is issued to a customer` |

**Notes:**
- Pain-pivot ✅ — quantified leak in the first frame.
- Accent magenta on `$30,000`; no italic (Fraunces dropped per B1 lock).
- 13-word H1, 60 chars — within SEO budget.
- Sub-copy is ~200 chars — within 10-second density target.

---

## S2 — Pain (the money problem)

**Status:** DRAFT
**Beat:** Quantify what the dealership loses today. Image-led; data callout typographically large.

| Field | Value |
|---|---|
| Image | Editorial-cinematic photography. Dealer principal or F&I director reviewing a margin report at a premium-showroom desk; statements / invoices in shallow focus. Per `project_imagery_direction` — competent agent in vertical context. |
| Alt text | `F&I director reviewing a dealership margin report at a showroom desk` |
| H2 | `Every $1M you process on Visa loses $30,000 to interchange fees.` |
| Body | `Visa and Mastercard take an average of 2.5–3% across your card mix. On a $40,000 vehicle, that is more than a thousand dollars per transaction. Across $1M a month, it is $30,000 of margin you will never see on a P&L.` |
| Data callout | `$30,000 / $1M lost` (large display-sans, navy on light surface or cream on dark) |
| Sub-link | `See where the leakage happens →` (anchors to S3 Opportunity) |

**Notes:**
- ~200 chars body — within density target.
- Specific transaction example (~$40K vehicle) anchors the abstract percentage in F&I-desk reality.
- Image is editorial-cinematic per `project_imagery_direction`, not line-art (line-art direction from Moodboard p16-17 is superseded for v2).

---

## S3 — Opportunity (Movement)

**Status:** DRAFT
**Beat:** Manifesto. The §0 anchor lives here. Gradient band (one of two — paired with S7).

| Field | Value |
|---|---|
| Surface | Full-bleed gradient band (`--gradient-1` cinematic retune — softer stops, atmospheric overlay per D5 lock) |
| Eyebrow | `The movement` |
| H2 | `CredX is a modern financial movement reshaping payment economics.` |
| Body | `Merchants like you are signing Merchant Network Agreements with CredX — embedded value rails that turn interchange into recurring revenue, customer retention, and partnership equity. The system that has been taking $30,000 per million from your dealership for decades does not have to keep doing it.` |
| Founder kicker (optional) | `<em class="accent">"</em>Software should pay for people, not people for software.<em class="accent">"</em>` — Kendall [Last Name], Founder, CredX (verbatim — per `voice.md` Movement vocabulary) |
| Sub-link | `Read the founder's note →` (links to deeper content or opens modal — TBD whether implemented in v2 launch) |

**Notes:**
- §0 anchor in the H2.
- "Embedded value rails" + "Merchant Network Agreement" — required vocabulary per `voice.md`.
- Founder quote uses verbatim Kendall anchor; flag for Kendall to confirm attribution / surname.
- Body ~290 chars — slightly above target; can be tightened in review.
- Accent magenta on the quote marks (color-only, no italic).

---

## S4 — Outcome (what changes)

**Status:** DRAFT
**Beat:** Concrete outcomes. 3-col stat strip + interactive calculator widget. Bold data callouts.

| Field | Value |
|---|---|
| Section H2 | `What a Branded Credit Line for Dealerships Returns` |

### Stat strip (3 columns)

| Stat | Caption |
|---|---|
| `$30K` recovered per $1M processed | Average interchange recovery via Merchant Network Agreement |
| `Customer + data` owned by the dealership | Not by Visa, not by the DMS |
| `6 minutes` to underwrite a credit decision | At the F&I desk, in the customer's hand |

### Calculator widget (interactive)

| Field | Value |
|---|---|
| Section H2 | `What $30,000 per million looks like across your operation.` |
| Body | `Move the slider. CredX shows what your group recovers across 12 months at your real volume.` |
| Slider label | `Monthly volume processed` |
| Slider range | `$250K — $25M` (default position $1M, step $250K — round increments) |
| Volume display | `$1,000,000/month` (full number with thousand separators) |
| Output eyebrow | `Saved with CredX per month` |
| Output primary | `$X` monthly saved — large display, magenta accent (computed: monthly × 0.03) |
| Output secondary | `$Y/year` (computed: monthly_saved × 12) |
| Output caption | `Based on $36K interchange per $1M (Visa/MC benchmark) vs $6K per $1M with CredX.` (italic, muted) |
| Sub-CTA | `Get my full savings estimate` → opens lead-form modal pre-filled with the slider volume |

**Notes:**
- Math model from v1 screenshot 2026-05-27 — $36K interchange per $1M (Visa/MC benchmark) minus $6K residual per $1M with CredX = $30K saved per $1M monthly → effective 3% rate. Cleaner than the prior 2.5% × 85% = 2.125% model.
- ⚠ flag for Audrey / Kendall to verify the $36K / $6K benchmark figures before launch.
- Single output card now (replaced the 2-row recovered + value-back stack) — matches v1 screenshot pattern; value-back is still messaged in S4 stat strip + S5 step 3.
- Bold data callout typographically large per `design/tokens-from-brandguide-v2.md`.
- 6-minute stat in the strip strips the Onus.ai / Ownest vendor name per `voice.md` Never Say.
- "Customer + data" owned framing answers the Digital / IT Director persona pain.

---

## S5 — Process (subordinate beat)

**Status:** DRAFT
**Beat:** How it works. Light density. Four steps. Process is supporting evidence, not the headline.

| Field | Value |
|---|---|
| Eyebrow | `How it works` |
| H2 | `Four steps. No DMS replacement. No customer-facing change at checkout.` |

### Steps

| Step | Title | Body |
|---|---|---|
| 1 | Sign a Merchant Network Agreement | `Onboarding takes about 7 days. No replacement of your DMS, processor, or F&I tools.` |
| 2 | CredX activates on your transaction flow | `Your existing checkout stays unchanged. CredX runs on the embedded value layer underneath.` |
| 3 | Savings + value-back accrual report monthly | `Your monthly reporting shows interchange recovered and value-back earned, per store and per group.` |
| 4 | Customers see lower-interest credit + value-back at your dealership | `A branded credit line issued at the F&I desk, with value-back accrued in your dealership's program. Visa is not the front-end anymore.` |

**Sub-link:** `See the integration spec →` (links to deeper technical / partner page — TBD whether implemented in v2 launch)

**Notes:**
- Each step ~80–120 chars body — within subordinate-beat density.
- "No DMS replacement" answers the most common operator objection upfront.
- "Embedded value layer" required vocabulary.
- Step 4 closes the loop on the consumer-facing experience (the operational question, not a brand-level UVP).

---

## S6 — Proof (credibility + partnership)

**Status:** DRAFT — anonymized labels until public-use approval is logged
**Beat:** Partner emblems · operator-side quoted endorsement · 3-KPI line.

| Field | Value |
|---|---|
| Section H2 | `Dealers and Lenders Already Running Embedded Credit on CredX` |

### Partner emblem strip (4–6 emblems)

⚠ All labels anonymized until Kyle / Kendall sign off on public-use:

| Emblem | Caption | Status |
|---|---|---|
| Dealer Group A | Western Canada · multi-rooftop | SAMPLE — replaceable with PBS Systems on approval |
| Dealer Group B | Powersports retail · US Southeast | SAMPLE — replaceable with Harley-Davidson Tampa on approval |
| Multi-Brand Auto Group | Eastern Canada · 12 rooftops | SAMPLE — replaceable with NMAX or similar on approval |
| DMS Partner | Mid-market dealer-management platform | SAMPLE — replaceable with PBS Systems on approval |
| Lender Partner | Community lender · embedded credit funding | SAMPLE |
| Powersports Operator | Recreational vehicle dealer network | SAMPLE |

Imagery direction per `project_imagery_direction`: editorial-cinematic emblems or photography of competent agents in vertical context. NOT line-art (v1 line-art direction is superseded).

### Operator-side quoted endorsement

**Status:** SAMPLE — pending real quote from PBS / Harley-Davidson / Audrey-collected operator quote.

| Field | Value |
|---|---|
| Quote | `"We were leaking $30,000 of margin per million in interchange and could not see it on the P&L. CredX gave us the rails to recover it and the customer data our DMS never captured."` |
| Attribution | `— [F&I Director], [Dealer Group], [Region]` |
| Photo | Editorial-cinematic portrait of attributed speaker (head-shoulders or waist-up in workplace context per `project_imagery_direction`) |

⚠ Composite SAMPLE quote — DO NOT publish. Replace with real operator quote once public-use approval is logged.

### 3-KPI line

| KPI | Value | Status |
|---|---|---|
| Merchant Network Agreements signed | `$500M+ in Merchant Network Agreements` | DRAFT — ⚠ Audrey / Kendall to confirm current figure (v1 had $500M+ understated per prior open item) |
| Lender partners | `4 community lender partners funding embedded credit` | DRAFT |
| Compliance | `SOC 2 compliant · data is de-identified and consent-driven` | DRAFT |

**Notes:**
- Customer-side quote required in this slot per `voice.md` — NEVER a CredX team self-quote here.
- Onus.ai / Ownest vendor name STRIPPED from underwriting language (6-minute stat in S4 carries the capability without naming the engine).
- "Loyalty" not used to label CredX; "value-back" used instead.

---

## S7 — Final CTA (partnership ask)

**Status:** DRAFT
**Beat:** Movement-anchored partnership ask. Gradient band (paired with S3).

| Field | Value |
|---|---|
| Surface | Full-bleed gradient band (`--gradient-1` — paired with S3) |
| Eyebrow | `Start a partner conversation` |
| H2 | `Build the next era of automotive economics with CredX.` |
| Body | `Talk to a CredX partner specialist. We will model your interchange recovery, walk you through the Merchant Network Agreement, and show you the branded credit line for dealerships that CredX issues at the F&I desk, funded by our lender partners.` |
| Primary CTA | `Get my savings estimate` → opens lead-form modal pre-filled with vertical = Automotive |
| Sub-CTA | `Read the Automotive partner brief` → PDF (hide on launch if PDF not ready) |
| Optional micro-element | Calendar slot picker (Calendly embed) for direct booking — TBD whether in v2 launch |

**Notes:**
- Two-CTA cap — no third option, per Path B references' discipline.
- Movement anchor in H2 ("next era of automotive economics") — paired with §0 brand anchor in S3.
- Body ~200 chars — within density target.
- "Talk to a CredX partner specialist" framing (not "Book a demo") per v2 CTA lock + feedback-03.

---

## Globals — vertical-specific overrides

Most globals (Nav · Footer · FAQ compact · Lead-form modal · Partner-program block per `plan/02.Architecture.md §Globals`) carry default copy across all 4 verticals. Per-vertical overrides for Automotive:

### Nav CTA (default override)

| Field | Default | Automotive override |
|---|---|---|
| Nav primary CTA | `Talk to CredX` | `Talk to a partner specialist` (same anchor, same modal) |

### FAQ vertical-specific items (G3 compact — append to global FAQ)

| Question | Answer (~80–120 chars) |
|---|---|
| Does CredX replace my DMS? | `No. CredX runs on the embedded value layer underneath your existing DMS — PBS, CDK, Reynolds & Reynolds all supported. Typical integration is 2–4 weeks.` |
| What about multi-store rollout? | `One master account, individual store branding, consolidated reporting. Each rooftop sees its own savings and value-back accrual.` |
| Is the dealership's customer data really mine? | `Yes. Consent-driven, opt-in by default, de-identified for analytics. Your dealership owns the value-back ledger; Visa does not.` |
| How long until I see savings? | `Interchange recovery starts the month after activation. Monthly reporting shows the number per store and per group.` |
| How does interchange fee reduction work for dealerships? | `A car dealership reduces interchange fees by signing a Merchant Network Agreement with CredX. CredX moves the transaction onto an embedded value layer and returns roughly $30,000 of every $1M as a branded credit line, so the margin stays with the dealership.` |
| How does dealer in-house financing compare to a CredX branded credit line? | `Traditional dealer in-house financing puts the dealership's own capital at risk. A CredX branded credit line is an F&I credit platform funded by lender partners and issued in your dealership's brand, so you keep the customer relationship and the value-back without carrying the loan book.` |

---

## Open items / external pending

- ⚠ **S6 partner emblems** — anonymized SAMPLES; replace once Kyle / Kendall log public-use approval for PBS Systems, Harley-Davidson Tampa, NMAX.
- ⚠ **S6 operator quote** — SAMPLE composite; replace with real operator quote from Audrey's collection.
- ⚠ **S6 $500M+ figure** — likely understated per prior open item; Audrey / Kendall to confirm current Merchant Network Agreement total.
- ⚠ **S4 calculator math** — model is 3% effective ($36K interchange / $1M minus $6K residual / $1M with CredX = $30K saved / $1M / month → $360K/year at $1M default). Verified $36K / $6K benchmark figures from Audrey / Kendall before launch.
- ⚠ **Trilha B cover animation** — external asset; lives as a separate animated section (not in the hero slot). Awaiting brief. The "short explainer video above the fold" requirement from feedback-03 is satisfied by Trilha B, not by a separate hero video.
- ⚠ **Kendall founder quote attribution** — verify surname and title formatting.
- ✅ **SEO Title/Meta/H1** — re-validated 2026-05-29 and aligned to the pain pivot. Locked brief: primary `car dealership interchange fees`; Title 59 / Meta 160 / H1 61 (pain-pivot kept; keyword in S2 H2 + FAQ). Primary is Informational (KD 33) — served by S2 + FAQ; Title/CTAs stay commercial. See `seo/automotive_brief_revalidation_2026-05-29.md`.
- ⚠ **Calculator hedge wording** — "Designed to recover up to 85%" is voice-correct but should be reviewed by Audrey for marketing claim defensibility.

---

## Status summary

| Section | Status | Locked? |
|---|---|---|
| SEO meta block | LOCKED 2026-05-29 | Yes — re-validated + brand-reconciled via seo-research / seo-copy-sync |
| S1 Hero | DRAFT | No — pending user / brand-owner review |
| S2 Pain | DRAFT | No |
| S3 Opportunity | DRAFT | No |
| S4 Outcome | DRAFT | No — calculator math pending Audrey verification |
| S5 Process | DRAFT | No |
| S6 Proof | DRAFT (mostly SAMPLE) | No — emblems + quote + $500M+ pending external input |
| S7 Final CTA | DRAFT | No |
| Globals overrides | DRAFT | No |

Next: brand-owner review of this DRAFT + `seo-copy-sync` Title/Meta/H1 validation against locked v1 SEO brief. Then Phase 5 (Image Generation) consumes the imagery directions in S2 / S6 to rewrite `prompts/automotive.md §C`. Then Phase 6 (Build) implements.

**Out of scope for this turn:** `copy/entertainment.md`, `copy/sports.md`, `copy/pos.md`, `copy/global.md`. These replicate the Template A (or Template B for POS) pattern after Automotive is reviewed.
