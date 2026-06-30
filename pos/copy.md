# POS Platforms — Landing Page Copy

> **URL:** `/pos/` (reached from the root hub `index.html`).
> **Template:** **B** (channel / partnership pitch) — **Movement → Control → Gains** spine, adapted platform-to-platform. `is_channel_page = true`.
> **Status:** DRAFT 2026-06-18 — first POS build, written from the reconciled `audiences/pos.md` (competitor names removed, "Onus.ai" not named, personas removed, "rewards" → "value-back", "LOI" → "Merchant Network Agreement", arc flipped to Movement-first). Copy-led: this file is canonical; `pos/index.html` mirrors it ([[feedback_copy_html_sync]]). No SEO ([[project_seo_scope_generic]] — only Generic gets SEO).
> **Arc:** Movement → Control → Gains, **carried to all verticals** (Marco 2026-06-16). POS keeps the spine but adapts the framing to a channel/partnership conversation — Template B per `plan/02.Architecture.md` A2 (integration is the centrepiece; the calculator is swapped for Channel Multiplier Stats; §7 is a Channel Operating Model table; the form is a partner application). Page remains DRAFT pending the Mauricio → client (Kyle/Kendall) copy review gate.
> **Audience:** **POS platforms & ISVs** — mid-market and enterprise POS platforms, ISVs and vertical SaaS with embedded payments, payment facilitators, integration/channel partners (1,000+ merchants, $100M+ volume). The platform is the audience; merchant ROI is the *outcome* of the partnership. Pitch is platform-to-platform.
> **Voice:** Premium · Aspirational · Enterprise-ready · Human. Mode: Partner / Channel (peer-to-peer, never a sales-demo pitch).
> **House style:** contractions expanded (do not / you are / we will / here is); Canadian spelling kept (white-labelled, PIPEDA); Oxford comma. Founder quote held verbatim (exempt).

---

## Source + locked-rule notes (read first)

- **Source:** `audiences/pos.md` (reconciled 2026-06-18) + the Sports / Entertainment precedents. Channel economics: a platform that processes payments but has no leverage on interchange, fragile merchant retention, and a 12-month in-house build standing between it and an embedded-credit offer.
- **Locked rules honoured:** NO competitor names on page ("a competing credit facility" / "credit facility network"); NO POS platform named (Square / Helcim / Clover / Toast are targets, not partners — generic framing only); positive-surface only; "value-back" never "rewards"; PIPEDA language (consent-driven, opt-in, de-identified); no "Book a Demo" / no "Calculate Your Savings" CTA (channel page); movement leads; "embedded value platform/layer" not "payments platform"; Canada-first tone; "Merchant Network Agreement" (never "LOI"); the underwriting partner is not named on-page.
- **⚠ Number discrepancy flagged:** the discovery hook said "$30M saved per $100M"; the per-$1M math ($30K/$1M) scales to **$3M per $100M** (10× gap). Copy uses the defensible scaled figures; the client confirms in the open questions (Q3).
- **⚠ Imagery is placeholder.** No POS renders exist; the build is image-light (styled placeholder treatment). Partnership / integration / channel-conference renders = a Phase-5 task.
- **⚠ = confirm before launch** (figures, revenue-share range, Calendly URL). **No third-party logos** by rule ([[feedback_no_third_party_logos]]). **Tier 3 disclaimer** carried verbatim after §7.

---

## Page metadata (campaign — not indexed)

| Field | Value |
|---|---|
| Title (browser tab) | `CredX for POS Platforms — Give Your Merchants the Offer No Competing Platform Can Match` |
| Meta description | `Add embedded credit and value-back to your POS with one API. Your merchants save up to $30K for every $1M they process — and they stay on your platform because the value is built in. The embedded value layer for POS platforms and ISVs.` |
| H1 | See §1 Hero headline. |
| OG title | `CredX for POS Platforms — The Embedded Value Layer for Your Channel` |
| OG description | `One API. Embedded credit and value-back, white-labelled under your brand. Your merchants save up to $30K per $1M — and stay on your platform.` |
| OG image | ⚠ pending a POS render (Phase 5). |

---

## 1 · HERO — THE MOVEMENT

**Status:** DRAFT
**Beat:** Movement hook, partnership pivot (NOT merchant pain). Image-light hero (placeholder). Primary CTA anchor-scrolls to the §8 partner form.

| Field | Value |
|---|---|
| Eyebrow | `For POS Platforms and ISVs` |
| Headline (H1) | `The card network takes the fees and keeps the data.` |
| Deck line | `Your merchants get the invoice. CredX closes the loop.` |
| Subheadline | `Today, the interchange system splits your transaction data across rail companies that give nothing back. Your platform is left with settlement files and zero customer intelligence. CredX builds the value layer underneath your existing payments — embedded credit and value-back, white-labelled under your brand.` |
| Primary CTA | `Explore a Partnership` → scrolls to §8 form |
| Secondary CTA | `See the merchant ROI` → scrolls to §4 Gains |
| Hero asset | ⚠ placeholder (image-light) — POS render deferred. |

**Notes:**
- This is a partnership pivot, not a pain pivot. No competitor names, no merchant-pain dollar figure in the hero — the savings live in §4 and the §5 Channel Multiplier.
- Nav carries two CTAs: `See the merchant ROI` (secondary) + `Explore a Partnership` (primary). **No "Book a Demo"** (channel page).

---

## 1.5 · THE MOVEMENT STATEMENT

**Status:** DRAFT (pending Mauricio → client review)
**Beat:** Manifesto beat between the hero and §2. Generic — identical across all five verticals (drop-in verbatim). Gaetan's formulation, approved by Kendall. Liberation framing, grade-5, positive surface only.

| Field | Value |
|---|---|
| Eyebrow | `A Movement, Not a Product` |
| Headline | `Forget the old system. Here is a new one.` |
| Lead | `One that you belong to, instead of one that owns you.` |
| Body | `The value your business creates should come back to your business. CredX is how that happens. This is not another product to buy. It is a movement to join, built so the people and businesses who create the value are the ones who keep it. Your customers and your data stay where they started: with you.` |
| Closer | `That is the real switch.` |

**Notes:**
- Approved formulation (Gaetan, approved by Kendall): "Forget the old system. Here's a new one. One that you belong to, instead of one that owns you." The contraction "Here's" is expanded to "Here is" per the CredX no-contractions rule; hold verbatim only if re-approved.
- Broken system is implied, never attacked. No competitor named. The word "owns" appears only inside the approved formulation, describing the *old* system you leave — not as a CredX claim (Kendall flag on "own the customer" respected).
- Generic verbatim. POS speaks to the platform (B2B2B); the generic "your business / your customers" was kept per decision (no POS-specific variant this round — surface a platform-voiced variant later if wanted).

---

## 2 · THE MOVEMENT — THREE VOICES, ONE DIRECTION

**Status:** DRAFT
**Beat:** One-line manifesto → three-perspective movement block (Platform / Merchant / Lender) → founder pull-quote.

| Field | Value |
|---|---|
| Headline | `The platform that earns the merchant should keep the merchant.` |
| Body | `Right now you run the transaction, and the card network keeps everything that comes after: the merchant's customer, the data, and the loyalty. CredX puts that back on your platform. Your value layer, your brand, your merchants.` |

### Three Voices, One Direction

> **Build note:** render as collapsed expanders (accordion). Three voices, one closing line.

**The Platform**
*"Your merchants were already loyal. A card network was the only one profiting from it."*
You built the platform your merchants run their business on. But every transaction sent a piece of their margin to a system that does not answer to you, and the loyalty their customers built accrued to a card network instead of to your platform. CredX gives that back — not just as savings for your merchants, but as a tool you own: an embedded value layer that turns interchange into a differentiator, built-in revolving credit with no lending risk on anyone's books, and a retention moat competing platforms cannot match. A growing community of platforms, done handing their merchants' loyalty to a card network. This is your channel. Finally.

**The Merchant**
*"They have been subsidizing the system for long enough."*
Every transaction sent roughly 3% to someone the merchant never met, and the value piled up with a card network instead of staying in their business. CredX changes that. On your platform, merchants lower their costs, offer their own customers branded credit and value-back, and keep more of what they earn. This is a shift in who the platform works for.

**The Lender**
*"Finally, credit that earns where the spending already happens."*
Community lenders have always been closer to their members than the big networks, but the card network always captured the transaction. CredX changes the rail: fund embedded credit directly at the point of sale, a diversified, closed-loop asset class, with delinquency controls built in so risk stays managed.

**Closer:** `The old system extracted value from all three. CredX returns it.`

### Founder pull-quote

| Field | Value |
|---|---|
| Pull-quote | `"We believe in true partnership so much we put our own money into your business — then give it to your clients, presented under your brand. Who partners like that?"` |
| Attribution | `— Kendall, Founder, CredX` |

**Section CTAs:** `Explore a Partnership` (→ §8 form) · `See the numbers` (→ §5 Channel Multiplier).

**Notes:**
- Pull-quote held verbatim — do not paraphrase or expand contractions. Attribution `— Kendall, Founder, CredX` — no surname.
- Three Voices remapped to the channel: Platform / Merchant / Lender (the approved manifesto device, per `audiences/pos.md`).

---

## 3 · CONTROL — WHAT YOUR PLATFORM GETS BACK

**Status:** DRAFT
**Beat:** The three things the platform gets back + the white-label beat. Written as a gain, never a warning.

| Field | Value |
|---|---|
| Eyebrow | `Take Control of Your Channel` |
| Headline | `The merchant relationship is the asset the networks kept. Until now.` |
| Intro line | `Three things become yours the day you integrate:` |

### Three-up

| Item | Copy |
|---|---|
| Your merchant. | `The relationship stays on your platform, in your brand, not a card network's. The merchant who runs on your platform — and the loyalty their customers build — belongs to your channel.` |
| Your access to data. | `186 verified data sources across the 5 C's of credit — financial, location, inventory, purchase timing, and behavioural — tied directly to the individual customer, not aggregated cohorts. No other platform on the market consolidates all five. Independently confirmed by two of the Big Four accounting firms. Consent-driven and de-identified: which merchants grow, which segments drive the most volume, and where embedded credit lifts retention across your channel.` |
| Keep the loyalty inside your platform. | `A closed-loop value-back layer in each merchant's own currency, where $1 spent is $1 earned, that keeps a merchant's customers spending with them — and keeps the merchant on your platform.` |

### White-label beat

| Field | Value |
|---|---|
| Sub-head | `Your platform's name. Our infrastructure.` |
| Body | `Everything the merchant and their customer sees carries your brand. The underwriting, servicing, compliance, and credit run behind the scenes. The relationship is yours.` |

**Notes:**
- "value-back" (never "rewards"). Framed entirely as a gain.

---

## 4 · THE GAINS — THE CHERRY ON THE CAKE

**Status:** DRAFT
**Beat:** Three ways CredX pays the platform back + key-outcomes strip.

| Field | Value |
|---|---|
| Eyebrow | `And Here Is What It Pays Your Channel` |
| Headline | `Three ways CredX puts money back in your channel.` |

### Three gains

| # | Title | Body |
|---|---|---|
| 1 | `Hand your merchants up to 85% interchange recovery` | `$6,000 per $1M with CredX, against roughly $36,000 with a card network. That is up to $30,000 back for every $1M a merchant processes — a saving you deliver, and a differentiator competing platforms cannot match.` |
| 2 | `Earn on the credit you used to send away` | `Embedded credit of up to $5,000 in each merchant's own brand, approved in about 20 seconds at checkout, at roughly half the rate of a standard card. The merchant is paid in full and upfront, the lending risk stays with CredX and its lender partners, and your platform earns on the economics — never on anyone's books.` |
| 3 | `See your channel in real time` | `A monthly dashboard in plain language, not raw numbers: which merchants grow, which segments drive volume, and where embedded credit lifts retention. The channel intelligence your current setup never handed you.` |

### Benchmark proof line (below the three gain cards)

`When your merchants recover up to 85% of their interchange costs, they reinvest. Promotions, VIP packages, seasonal pricing, loyalty programmes — funded not by their marketing budget, but by money that used to leave their business entirely. Add embedded credit at checkout — up to $5,000 per customer, in the merchant's own brand, at roughly half the rate of a standard card — and the effect compounds. Merchants with embedded credit at the point of sale see up to a 321% lift in purchase frequency and 76% larger transactions (PayPal embedded credit benchmark). Your platform makes both possible. That is a differentiator no competing platform can match.`

### Key-outcomes strip

| Value | Caption |
|---|---|
| `$30K` | `recovered per $1M a merchant processes.` |
| `Yours` | `the merchant, the data, and the loyalty. Not a card network's.` |
| `One API` | `to integrate. No new hardware for merchants.` |

**Section CTAs:** `Explore a Partnership` (→ §8 form) · `See the operating model` (→ §7).

**Notes:**
- 321% / 76% carry their PayPal source inline — sourced, safe to publish.
- The interchange numbers ($36K competing / $6K CredX) are confirmed correct (user, 2026-06-09). Framed at merchant scale here; the platform-scale roll-up is the §5 Channel Multiplier.

---

## 5 · CHANNEL MULTIPLIER  *(swaps the calculator — `is_channel_page`)*

**Status:** DRAFT
**Beat:** Three large stats that roll the per-merchant saving up to platform scale. **No slider** — the savings are the merchant's, shown at channel scale.

| Field | Value |
|---|---|
| Eyebrow | `The Channel Multiplier` |
| Headline | `Your savings, at the scale of your channel.` |
| Body | `Every merchant you onboard compounds the same recovery. Here is what it looks like across a channel.` |

### Three stats (illustrative — see Q3, Q4)

| Value | Caption |
|---|---|
| `1,000 merchants` | `on your platform, each processing about $1M a year.` |
| `× $30K saved` | `recovered for each merchant, every year.` |
| `= $30M unlocked` | `put back in your merchants' pockets across your channel — your differentiator, in dollars.` |

| Field | Value |
|---|---|
| Caption | `Illustrative. Based on recovering up to 85% of standard interchange — roughly $36K per $1M with a card network, against $6K per $1M with CredX. Your channel's number depends on merchant count, volume, and card mix.` |
| CTA | `Explore a Partnership` → scrolls to §8 form |

**Notes:**
- **No calculator slider** on the channel page (per `audiences/pos.md` — the savings are the merchant's, not the platform's). The three stats are the channel-scale story.
- ⚠ The figures are illustrative. The discovery "$30M per $100M" line did not reconcile with the per-$1M math; this section uses the **defensible** roll-up (1,000 merchants × $1M each × $30K = $30M unlocked). Confirm in Q3.

---

## 6 · HOW IT INTEGRATES  *(integration is the centrepiece — Template B)*

**Status:** DRAFT
**Beat:** Integration upfront and headline-level (technical buyers). One API; spec → sandbox → go-live; no merchant hardware.

| Field | Value |
|---|---|
| Eyebrow | `How It Integrates` |
| Headline | `One API. Your payment stack, your checkout, and your merchants stay exactly as they are.` |
| Architecture note | `Your POS connects to the CredX value layer, which runs underwriting, the lender network, and the value-back ledger behind the scenes. Nothing changes at the merchant's terminal.` |

### Steps

| Step | Title | Body |
|---|---|---|
| 1 | `Spec review and Merchant Network Agreement` | `We align on the integration spec and sign a Merchant Network Agreement. Your platform, your checkout, and your payment processor all stay in place.` |
| 2 | `Build in the sandbox` | `One REST API, with SDKs and a full sandbox. CredX activates as a toggle in your platform — no new hardware for merchants, no change to their checkout. Typical path to production runs about 4 to 8 weeks, against a roughly 12-month in-house build.` |
| 3 | `Go live across your channel` | `Each merchant flips CredX on at checkout. Their customers are approved for branded credit in about 20 seconds, value-back accrues in the merchant's own currency at $1 for every $1 spent, and the loyalty stays inside your platform.` |
| 4 | `Your monthly channel report arrives` | `Interchange recovered and value-back earned across your channel, broken out per merchant and in aggregate, with your channel economics reconciled.` |

**Notes:**
- "one API" + "no new hardware" + sandbox → production = the developer-experience beat (Template B centrepiece).
- "Merchant Network Agreement" is the locked term (never "LOI"). Underwriting partner not named.

---

## 7 · CHANNEL OPERATING MODEL  *(swaps Built-For — `is_channel_page`)*

**Status:** DRAFT
**Beat:** The operating-model table (who does what), a short "built for" platform-type list, and the numeric KPIs. No quotes, no personas. **Tier 3 disclaimer carried verbatim after the table.**

| Field | Value |
|---|---|
| Eyebrow | `The Operating Model` |
| Headline | `Who runs what. Clear from day one.` |
| Intro | `CredX carries the credit, the risk, and the compliance. Your platform carries the brand and the channel. Your merchants carry the relationship with their customers.` |

### Operating model table

| Function | CredX | Your Platform | Merchant |
|---|---|---|---|
| Underwriting | Carries | — | — |
| Funding | Carries (with lender partners) | — | — |
| Servicing | Carries | — | — |
| Collections | Carries | — | — |
| Risk | Carries | — | — |
| Compliance (SOC 2, PIPEDA) | Carries | — | — |
| Support | Carries | — | — |
| Brand and checkout | Behind the scenes | Owns (white-label) | Owns (their customers) |
| Economics | Credit + servicing margin | Share of the savings delta | Lower costs + value-back |

### Built for

| Field | Value |
|---|---|
| Sub-head | `Built for the platforms whose merchants keep coming back.` |
| Audience list | `Mid-market and enterprise POS platforms` · `ISVs and vertical SaaS with embedded payments` · `Payment facilitators` · `Integration and channel partners` |
| Qualifier | `If your merchants run card volume on your platform, CredX is built to run underneath it. Platforms with 1,000 or more merchants and $100M or more in annual volume see the channel multiplier compound fastest.` |

### Key metrics

| Metric | Status |
|---|---|
| `$500M+ in Merchant Network Agreements signed` | ⚠ confirm figure |
| `4 community lender partners funding embedded credit` | DRAFT |
| `SOC 2 + PIPEDA compliant. Data de-identified, consent-driven, and held to Canadian privacy law.` | DRAFT |

### Partnership Parameters (Tier 3 disclaimer — verbatim)

`For discussion purposes only; not a commitment or offer.`

**Notes:**
- No people, no persona quotes, no partner logos in this section.
- **No third-party logos** — locked rule ([[feedback_no_third_party_logos]]). §7 stays text + table + numeric KPIs only; no platform/lender emblems ever. Only the CredX brand mark appears on the page.
- The disclaimer is held verbatim (legal). Do not paraphrase.

---

## 8 · EXPLORE A PARTNERSHIP  *(the partner form)*

**Status:** DRAFT
**Beat:** Final CTA + top of funnel. Every CTA on the page anchors here. **Two-step partner application** (not a merchant lead form).

| Field | Value |
|---|---|
| Headline | `Ready to keep your merchants?` |
| Subline | `Two quick steps. Start with the basics — we will take it from there.` |

### Step 1 — Tell us about you
*(This is all we need to reach you.)*

- `Full name`
- `Work email`
- `Phone`
- `Platform or company name`
- `Your title or role`
- `Website`

**Button:** `Explore a Partnership`

**Micro-reward on submit:**
`You are in. Be the platform that pays for itself. Two more questions and we will model your channel.`

### Step 2 — Tell us about your platform
*(Optional. Helps us scope the integration and the channel economics.)*

- `Type of platform` ( `POS platform` · `ISV / vertical SaaS` · `Payment facilitator` · `Integration / channel partner` · `Other` )
- `Roughly how many merchants are on your platform?` ( `Under 1,000` · `1,000 – 10,000` · `10,000 – 50,000` · `50,000+` )
- `Roughly what annual card volume do your merchants process?` ( `Under $100M` · `$100M – $500M` · `$500M – $1B` · `$1B+` )
- `Existing certifications or compliance` (PCI, SOC 2, etc.)
- `In one line: what would an embedded value layer change for your platform?`

**Button:** `Send my channel details`

**Build note:** Step 1 fields feed Kyle's CRM the moment they are submitted, even if Step 2 is skipped.

### Demo path (alongside the form)

There is **no "Book a Demo"** on the channel page (per `audiences/pos.md`). A secondary `See the merchant ROI` route scrolls to §4. ⚠ If the client wants a booking link for partnership calls, a Calendly / booking URL is pending from Kyle.

---

## 9 · FAQ

**Status:** DRAFT
**Heading:** `Questions platforms ask before integrating`

> **Build note:** render as collapsed expanders (accordion).

| Question | Answer |
|---|---|
| `Does CredX replace my payment processor or POS?` | `No. CredX runs as a value layer underneath your existing payment flow. Your platform, your checkout, and your merchants' payment processing all stay in place. It integrates through one API, with no new hardware for merchants, and typical integration runs 4 to 8 weeks.` |
| `What does the API integration actually involve?` | `One REST API, with SDKs and a full sandbox to build against before you go live. CredX activates as a toggle in your platform. Most partners reach production in 4 to 8 weeks, against a roughly 12-month in-house build for underwriting, servicing, funding, and compliance.` |
| `How does the channel economics work?` | `Per partnership agreement. CredX captures the credit and servicing margin; your platform earns on the savings delta CredX creates for your merchants. We model the specific structure with you during the partnership conversation.` |
| `Whose brand do merchants and their customers see?` | `Yours. Full white-label is the default for channel partnerships — the merchant and their customer see your platform's brand, while the underwriting, servicing, credit, and compliance run behind the scenes as CredX.` |
| `Who carries the lending risk?` | `CredX and its community lender partners. The merchant is paid in full and upfront, and the credit risk never sits on your platform's books or the merchant's.` |
| `Is this PCI, SOC 2, and privacy compliant?` | `Yes. SOC 2 and PIPEDA compliant, data de-identified and consent-driven, and handled under Canadian privacy law. The merchant relationship stays yours, never a card network's.` |
| `What about multi-region or large-channel rollouts?` | `One integration, individual merchant branding, and consolidated channel reporting. Each merchant sees its own recovery and value-back numbers, and everything rolls up across your channel on shared infrastructure.` |
| `Who is a good fit?` | `POS platforms, ISVs, payment facilitators, and channel partners. Platforms with 1,000 or more merchants and $100M or more in annual volume see the channel multiplier compound fastest.` |

---

## 10 · FOOTER

**Status:** DRAFT

| Field | Value |
|---|---|
| Closing CTA line | `Want to run the numbers on your channel? Talk to our team.` + `Explore a Partnership` / `See the merchant ROI` |
| Nav | `How it integrates · The movement · Operating model · Explore a partnership` |
| Legal | `Privacy · Terms · SOC 2 attestation` |
| Copyright | `© 2026 CredX Tech Inc.` |

**Note:** no footer tagline. The Tier 3 disclaimer lives in §7.

---

## ⬇ Open questions for CredX — answer inline with the copy review

> **For Kyle / Kendall / Audrey.** Please answer directly under each item (an `→ Answer:` line is provided). These are the only open points on the POS copy — the narrative structure is already settled. None block reading the copy; they block public launch.

### A · Numbers & claims (confirm we can state these publicly)

1. **Interchange math** ($6K per $1M with CredX vs ~$36K with a competing facility; up to 85% recovered → up to $30K saved per $1M) — confirm it carries to the channel framing.
   → Answer:
2. **$5,000** per-customer credit line in the merchant's own brand, with **$1 spent = $1 earned** value-back — OK as an illustrative figure for the POS page?
   → Answer:
3. **⚠ Number discrepancy.** Discovery said "**$30M saved per $100M** in volume," but the per-$1M math scales to **$3M per $100M** ($100M × $30K/$1M). We used the defensible roll-up in the Channel Multiplier (**1,000 merchants × $1M each × $30K = $30M unlocked across the channel**). Which framing is correct, and is the $30M-across-a-1,000-merchant-channel example OK to publish?
   → Answer:
4. **Channel Multiplier example** (1,000 merchants, ~$1M each) — is this a representative channel for the platforms we are pitching, or should we size it differently?
   → Answer:
5. **"Approved in about 20 seconds"** credit at checkout — defensible? *(The old POS notes said underwriting "in 6 minutes"; we used the cross-vertical "about 20 seconds at checkout" — confirm which is right.)*
   → Answer:
6. **One API · 4 to 8 weeks to production · ~12-month in-house build** comparison — accurate and OK to state?
   → Answer:
7. **Revenue share** — we kept it "per partnership agreement" with no numbers. Is there an approved range we can publish, or keep it qualitative?
   → Answer:
8. **$500M+ in Merchant Network Agreements signed · 4 community lender partners** — confirm both figures.
   → Answer:
9. **PayPal benchmark** (321% lift in frequency, 76% larger transactions) applied to merchants on a POS platform — OK to use as framed?
   → Answer:

### B · Naming & approvals

10. **POS-platform naming:** we name **no** POS platform on-page (Square / Helcim / Clover / Toast are targets, not partners) and use generic "POS platforms / ISVs." Confirm — and tell us if any platform IS approved to name.
   → Answer:
11. **No third-party logos** anywhere on the page (platform / lender / integrator) — confirm this is your intent for POS too.
   → Answer:
12. **Tier 3 disclaimer** — we carry *"For discussion purposes only; not a commitment or offer."* verbatim after §7. Confirm the wording and placement.
   → Answer:

### C · CTAs & the channel framing

13. **CTA labels:** we are using **"Explore a Partnership"** (primary) · **"See the merchant ROI"** (secondary), and we **dropped "Book a Demo" and the calculator** for the channel page (per the POS positioning). Confirm — or tell us if you want a booking link / "Talk to Our Team" instead.
   → Answer:
14. **Operating Model table** (CredX / Your Platform / Merchant; rows = underwriting, funding, servicing, collections, support, risk, compliance, revenue share) — does this match how you describe the partnership? Any row to add, remove, or reword?
   → Answer:

### D · Compliance

15. **"SOC 2 + PIPEDA compliant. Data de-identified, consent-driven, held to Canadian privacy law."** — confirm this claim is accurate as stated for the channel partnership.
   → Answer:

### Related (not copy — heads-up)

- **POS imagery** is image-light placeholder; partnership / integration / channel-conference renders are a separate Phase-5 task (no answer needed here).
