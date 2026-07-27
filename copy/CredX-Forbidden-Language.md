# CredX — Forbidden Language

> **What this is:** the complete list of words and framings that must not appear in CredX copy, with the source of each rule.
> **Compiled:** 2026-07-27 · **Status:** ⚠ **INTERNAL — do not send to the client** (Marco, 2026-07-27). No ratification step; hand it over only if they ask for it. This exists so the rules get enforced when we write, not as a client deliverable.
> **Scope:** body copy, headlines, CTAs, FAQ, page titles, meta descriptions, image alt text, and schema. Across the website and all four vertical landing pages.
> **Enforcement copy:** `.claude/skills/credx-copy/voice.md` §"Brand language rules" is the version applied at writing time. This document and that table must stay in lockstep; if they disagree, the skill table is what actually got applied — reconcile immediately.

## Why this document exists

Until now there was no list. Every rule below was learned **reactively**, one client comment at a time, after the copy had already been written — and in several cases after it had been published.

The client's own `Brand Guidelines v1.0_CredX2026.docx` (2026-05-05) has **no forbidden-language section**. It is a visual identity document: colour values, logo placement, type case, disclaimer positioning. Nothing about vocabulary.

The cost of that gap is measurable. On 2026-07-24 Audrey's homepage review flagged the word **"should"** as forbidden by the brand guidelines — a rule that appeared in none of our files. It was live in **eight** customer-facing places across five pages. Her review caught **one**, because the Home was the only page she reviewed. The other seven were found by searching the repo.

This list exists so that stops happening.

---

## 1 · Word and phrase substitutions

Hard substitutions. Not stylistic preferences.

| Never write | Always write | Source |
|---|---|---|
| **"should"** (as a modal in **page copy** — headlines, body, CTAs, FAQ, captions, metadata) | Rewrite declaratively — *"the business that earns the customer **keeps** the customer"* | Audrey C12, 2026-07-24. Does not override canonical brand statements — see §4 |
| **"onboarding" / "onboard" / "get onboarded"** (in customer-facing copy) | **"join" / "joining"** | Marco, 2026-07-27. Internal vocabulary — fine in plans, briefs and the portal's back-office steps; never in page copy, headlines, CTAs or URLs. The page slug is `/join`. ⚠ Not to be replaced with *"start your journey"* — see §2 |
| "rewards" / "rewards programme" | "value-back" / "value-back program" | Automotive Feedback-04 §27 |
| "loyalty" / "loyalty program" — labelling **CredX's own offering** | "value-back" / "value-back program" | Feedback-04. Exception in §3 |
| "BNPL" / "Buy Now Pay Later" | "embedded lending" / "consumer credit" | Feedback-04 §25 |
| "payments platform" | "embedded value platform" | Feedback-04 §25 |
| "payment rails" | "embedded value layer" / "value engine" | Feedback-04 §25 |
| "payment processing" — as the operator's cost or pain line | "transaction costs" / "interchange" | Feedback-04. Exception in §3 |
| **"Visa" / "Mastercard" / any card brand by name / "card network"** | **"competing credit facility" / "credit facility network"** | Feedback-04 §25. ⚠ Sports override in §5 |
| "LOI" / "Letter of Intent" / "Letters of Intent" | **"Merchant Network Agreement"** — long form on legal/footer first mention | Terminology swap, locked |
| Named POS / ISV / payment brands (Square, Helcim, Clover, Toast, …) | Do not name or show them. They are targets, never partners | POS naming guard |
| Third-party tech vendors (Onus.ai / Ownest underwriting engine, any backend partner) | Keep the capability and the stat; strip the vendor brand | Locked rule |
| Negative / attack framing — "loses, lost, leakage, stolen, punish" | Reframe every truth as a gain. Surface = empowerment, never attack | Feedback-04 §27 |
| "reshaping payment economics" | *Remove entirely* — retired | Kendall flagged it wrong (V3.1) |
| "philanthropic" | *Remove entirely* — retired | Feedback-04 §27 |

## 2 · Structural prohibitions

Not single words — shapes of sentences and claims.

- **Never lead** with *"bypasses a competing credit facility."* Ownership and outcome lead; system contrast follows.
- **Never open** with *"CredX is a platform that…"*.
- **Never frame a truth as a loss.** Every truth is written as something the operator gets back, never as a warning about what they are losing.
- **Never imply consent.** Wherever data-sharing is mentioned, opt-in is stated explicitly.
- **Never guarantee outcomes** on repayment or default reduction. Hedge: "designed to," "may improve," "structured to reduce."
- **Never blame the consumer** for financial hardship.
- **Never name partner brands** in headlines, hooks, hero sub-copy, meta descriptions or OG copy without logged public-use approval. No fabricated proof, no placeholder logos, no invented personas.
- **Never use a CredX team self-quote** in a "what customers say" slot. Founder voice is allowed only in hero, manifesto and final-CTA moments.
- **Never use contractions** in customer-facing copy (do not / does not / you are). Possessive `'s` stays. One exception: a verbatim founder quote is held exactly as sourced.
- **Never use ALL CAPS** except short labels — nav items, button micro-labels, eyebrows.
- **Never reach for *"start your journey"*** (or "begin your journey", "your journey starts here") as the replacement for "onboarding". "Journey" is a vague noun on the D&Z anti-pattern list and the phrase is a saturated marketing cliché — it says nothing about what actually happens on the page. The CredX answer is **joining**: the brand already owns the word (*"a system you belong to"*, *"you belong in it"*, *"Be Part of the Movement"*).

## 3 · Documented exceptions

Two rules above are narrower than they look, and the exception is deliberate:

- **"Loyalty" is allowed when describing the competitor's broken model** — *"Loyalty programs that benefit a competing credit facility, not your business."* Never label CredX's own offering as loyalty.
- **"Payment" is allowed when describing what the merchant's existing stack does** — *"your payment processor runs the transaction."* What is banned is positioning **CredX** as a payments provider, and naming the card networks.

## 4 · "should" — one question left

We are applying the ban to **page copy**: headlines, body, CTAs, FAQ, captions, metadata. We are **holding it back** from two canonical brand statements, because rewriting a founder line to satisfy a rule he may never have meant to apply to his own words is not our call to make:

- *"Software **should** pay for people, not people for software."* — Kendall's anchor
- *"The people creating the value in the economy **should** participate in the value."* — the core belief

**This reading is ours and is not yet confirmed. The question for the client:** is the ban absolute — in which case both lines need rewording, and that is a brand decision, not a copy edit — or does it govern page copy only, leaving canonical statements as they stand?

Neither line is currently published as page copy, so nothing is at risk while this is open. Everywhere else, the fix is to write declaratively rather than reach for the modal: *"the business that earns the customer **keeps** the customer."*

## 5 · Per-vertical overrides

A vertical's own client review beats the global rule — for that vertical only.

| Vertical | Override | Source |
|---|---|---|
| **Sports** | The incumbent is **"legacy credit network(s)"**, not "competing credit facility" — it differentiates the old way from CredX. The product term *"Your credit facility, your brand, your fans"* is untouched. | Kyle C2 → Marco, 2026-07-13; Gaetan C3 on the product term |

## 6 · Also enforced, documented elsewhere

These are live rules but live in their own files, to keep this list about CredX vocabulary:

- **AI-tell patterns** (em-dash crutch, "not just X but Y", rule-of-three lists, vague nouns, clichés) — 13 patterns, `copy-101-dz/references/anti-patterns.md`, from `documents/04_Style-Guide/AI Stuff We Need to Obliterate V.2.docx`. Portable across D&Z clients, which is why it stays separate.
- **House style** — Canadian spelling, Oxford comma, sentence case for section headlines, Title Case for eyebrows and hero H1.

---

## The one thing still worth getting from the client

Every row in §1 except "should" was reconstructed from our own feedback history. No client document ever handed us a list.

The outstanding ask is **Mauricio's**, from §11 proofer comment #4 of the SEO/AEO Strategy — *"I'll bring the info to you"* — open since **2026-07-14**: are there further **client-specific** prohibited terms beyond this set?

"should" is the proof that there are. Until that answer arrives, this list is complete only as far as our own history reaches — which is fine to ship against, it just means the next surprise arrives as a review comment rather than as a rule.

⚠ Note the direction: we are asking **for their terms**, not offering ours. This document stays internal.
