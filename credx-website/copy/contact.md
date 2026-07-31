# CredX Website — Contact Page Copy

> **Page:** `/contact` · **INDEXED** (SEO budgets bind) · priority 0.6 · transactional intent.
> **Status:** DRAFT 2026-07-31 — first draft. Written from `plan/05.Content-Architecture.md` §Page 7 (lines 187–196) + the CTA inventory in `copy/home.md`. Pipeline: credx-copy (write) → copy-101-dz (de-AI validate, run below) → seo-copy-sync (conformance, still owed — no locked `.xlsx` exists).
> **BUILT 2026-07-31** — `credx-website/contact/index.html` (+ `style.css` §23, + the `[data-contact-form]` handler at the foot of `script.js`). Directory-style path so the real domain serves `/contact`. Verified by render and by a behaviour probe, not by reading the code — results in the build-verification section at the foot of this file. ⚠ **NOT committed, and must not be pushed:** a push to `main` auto-deploys to GitHub Pages, and this page currently carries a form that discards every submission while telling the visitor otherwise.
> **Why now:** second of the three MVP pages (Home ✅ · `/join` ⏳ blocked on Audrey's screens + Kyle's embed · **`/contact` ← this**). Unblocked — nothing external gates it. **7 links on the Home point here** and none of them resolve until this ships.
> **Voice:** Premium · Aspirational · Enterprise-ready · Human. Merchant-generic; the selector is the only place lender/partner register appears, and it appears as a label, not as prose.
> **House style:** contractions expanded (do not / we will / you would); Canadian spelling; Oxford comma; accent = magenta colour only, no italic. Zero "should". "Onboarding" never appears — the act is **joining**.
> **SEO:** branded / transactional. This page deliberately does **not** chase `embedded lending` — see the reconciliation note under the metadata table.

---

## Page metadata (indexed)

| Field | Value | Budget |
|---|---|---|
| Title | `Contact CredX \| Talk to Our Team` | 32 / ≤60 ✓ |
| Meta description | `Talk to the CredX team about embedded lending for your business. Tell us who you are and what you run, and we will come back with the numbers. Get in touch.` | 156 / 150–160 ✓ |
| H1 | `Talk it through with the CredX team` | 35 / ≤70 ✓ |
| OG title | `Contact CredX \| Talk to Our Team` | — |
| OG description | `Tell us who you are and what you run. We will come back with what joining would look like for your business.` | — |
| Schema | `Organization` + `ContactPage`; `contactPoint` (Canada) — build note. ⚠ `contactPoint` needs a real email or phone; none exists yet (see §4) |

**SEO/voice reconciliation — and why the Title is 30 characters, not 58.** The budget is a ceiling, not a target. The demand on this URL is **branded and navigational** (`credx contact`, `contact credx`, `book a credx demo`), so the brand token *is* the keyword and padding the title with `embedded lending` would buy nothing. It would also cost something: the Home's H1 already owns that anchor at 1,000/mo, and a second page competing for it splits the signal. This is the same reasoning already applied to `/join` on 2026-07-27, where Semrush data killed the keyword case outright. The difference is that `/contact` stays **indexable** — branded queries need somewhere to land, and this is it.

---

## 1 · INTRO — THE INVITATION

**Status:** DRAFT · **Beat:** short invitation, set the expectation of what happens after submit, and route the already-warmed visitor to `/join` without competing with the form.

| Field | Value |
|---|---|
| Eyebrow | `Contact Us` |
| Headline (H1) | `Talk it through with the CredX team` |
| Body | `Tell us who you are and what you run. We will come back with what joining would look like for your business, and the numbers behind it.` |
| Secondary path | `Already spoke with someone on our team? Join the movement and finish on your own time.` → `/join` |

**Notes:**
- ⚠ **The scent-matching rationale that originally justified this H1 no longer applies, and the H1 survived anyway.** The first draft argued the headline should echo *"talk it through"* from the Home §8 sentence *"If you would rather talk it through first, book a meeting."*, because every visitor was assumed to arrive via that button. **That premise was wrong** (see the 2026-07-31 reframe): visitors now arrive from a `Contact Us` nav item. The H1 was kept on a different and simpler merit — **it never mentioned meetings**. It invites a conversation, which is exactly what a general contact page is for, and it still beats a generic `Get in touch` on specificity. The Home §8 echo is now a bonus for the subset who do arrive that way, not the reason.
- ⚠ **The spec's suggested intro line was *"Let's talk."*** It cannot ship: contractions are banned in customer-facing copy, and the expanded form (*"Let us talk."*) reads archaic in English rather than warm. The invitation is carried by the H1 + body instead. **This is a copy-level fix, not a spec disagreement** — the intent (short, human, low-friction) is preserved.
- **The body promises a reply, not an instant calculation.** It says *"we will come back with…"* rather than naming a figure, because nothing on this page computes one — the number arrives in the human reply, and the optional volume band in §2 is what makes that reply specific. Anyone who wants a figure *now* has the Home's calculator, which is what §5 is for. ⚠ The wording holds whether or not the volume field survives review, which is deliberate.
- **The secondary path is the anti-cannibalisation device.** `/join` and `/contact` are both conversion surfaces in the MVP and the difference is warmth: `/join` is the link a rep sends **after** a call (per the Marketing Brief), `/contact` is for someone who wants to speak to a person first. Naming that split in one line stops the warmed visitor from filling in a contact form he does not need. Rendered as a small text link, **not** a second button — a competing CTA here would undo the point.
- `join the movement` is lowercase inline because it is running prose, not the locked brand label. As a **button** it stays `Join the Movement` (Title Case, Audrey C15).

---

## 2 · THE FORM

**Status:** DRAFT · **Beat:** the conversion mechanism. Minimum viable friction: one selector, four fields.

| Field | Value |
|---|---|
| Sub-head | `Tell us who you are` |
| Selector label | `I am a…` |
| Selector options | `Merchant` · `Lender` · `Partner` |

### Fields

| Label | Notes |
|---|---|
| `Full name` | required |
| `Work email` | required |
| `Business name` | required |
| `Roughly what do you process in card volume each month?` | **optional** — `$250K–$1M` · `$1M–$5M` · `$5M–$25M` · `$25M+`. Added 2026-07-31 (default applied, see Open items #1) |
| `What would you like to talk about?` | optional — free text |

**Button:** `Send message`

**Reassurance line (under the button):** `Your details reach our team so we can reply.`
⚠ **Trimmed 2026-07-31 for the Vercel deploy.** It used to continue *"Read how we handle them in our Privacy notice."* linking to `{{PENDING:privacy-url}}`. Both were cut: `/legal/privacy` is post-MVP and does not exist, and a dead privacy link on a form collecting business details is worse than no link. **Restore the full sentence with the link together** — never the sentence alone.

**Confirmation message (inline success state):** `Thank you. Your message reached our team, and someone will be in touch.`

**Notes:**
- **`I am a…`, not `I'm a…`.** The spec wrote the contraction; house style bans it. `I am a…` reads perfectly well as a form label, so there is no cost to complying.
- **Three of the four field labels are lifted from client-reviewed copy** — `Full name`, `Work email` and `Business name` are the shipped Automotive §8 Step 1 labels (`automotive/copy.md`, status `CANONICAL`). ⚠ **This is a deliberate divergence from the spec**, which says *"company"*. `Business name` won because it is already through client review on four pages and because *"company"* reads oddly for a single-location operator. Reusing reviewed strings also means the client is not re-reading wording it already approved.
- **`Phone` was NOT carried over** from the Automotive set. That form is a five-field top-of-funnel capture; this one is specced at four and its purpose is to start a conversation, not to qualify. Work email is enough to reply.
- ✅ **Volume added as an OPTIONAL band (2026-07-31 — recommended default applied).** ⚠ **This is a documented departure from the spec**, which lists four fields. The case for it: volume is the one input that lets the team reply with a real number instead of a scheduling note, and marking it optional keeps the spec's *"minimize friction"* intent intact — an optional field costs the visitor nothing. Bands are **not invented**: they are the client-reviewed set from `automotive/copy.md:309`. Marco's call to reverse; removing it is a one-row deletion with no rewrite anywhere else.
- **The button says `Send message`** (reframed 2026-07-31, was `Request a meeting`). Booking left the page entirely, so a meeting-shaped label would now point at nothing. `Send message` is also the honest description of the mechanism: a message is sent, nothing is scheduled, and the reply is where scheduling happens.
- **The reassurance line is not a claim.** It says where the data goes and points at the notice. It deliberately does **not** say *"we never share your details"* — form submissions land in a CRM, which is a third party, and a promise we cannot verify does not belong on an indexed page from a company claiming PIPEDA compliance. ⚠ **The notice it points at does not exist** (`/legal/*` is post-MVP) — see Open items #3.
- ✅ **The inline success state is the shipping confirmation** — decided 2026-07-31 (Marco): the MVP is three pages, so `/thank-you` is not built. The copy above is what the visitor sees after submit; no redirect. ⚠ **Build task attached:** the conversion event (`fbq` / `gtag`) fires on the success callback instead of on a thank-you pageview. See Open items #2 for why that is not a downgrade.
- **No response-time commitment.** *"Someone will be in touch"* rather than *"within one business day"* — nobody has told us what the team can actually honour, and an SLA on a public page is the client's promise to make, not ours. See Open items (ask) #6.

---

## 3 · BOOK A TIME  *(⛔ PARKED — removed from the page 2026-07-31)*

**Status:** ⛔ **NOT ON THE PAGE.** Booking is no longer a block here — it is a **separate destination reached from the `Book a meeting` nav CTA** (Marco, 2026-07-31). The copy below is **parked, not deleted**, so it survives if booking is ever wanted back on-page.

⚠ **Do not re-add it without that decision.** Two booking entry points — one in the global nav, one mid-page — would compete for the same click and split the conversion path this page exists to keep simple.

| Field | Value |
|---|---|
| Sub-head | `Or pick a time yourself` |
| Body | `Choose a slot that works for you and we will meet you there.` |
| CTA | `Book a time` → `{{PENDING:booking-url}}` |

**Notes:**
- ⚠ **The booking URL has never been delivered.** Asked for since **2026-07-20**; tracked as a `LAUNCH` blocker in `workflow/Handoff.md`, and it is the same missing URL that has had `Book a Demo` on the four live vertical pages falling back to a form anchor since Feedback-04. **No URL is fabricated here.**
- ⚠ **Where the booking placeholder went, and why it got more dangerous.** `{{PENDING:booking-url}}` moved out of this block and onto the **nav CTA**, which is on **every page** — so a dead href there breaks the primary CTA site-wide, not one button on one page. **It is therefore NOT left dead:** the nav CTA falls back to `/contact` until Kyle's URL lands, which is exactly the pattern the four vertical pages have used for `Book a Demo` since Feedback-04. Swap the href when the URL arrives; the token lives in an HTML comment beside it so the register grep still catches it.
- **Superseded rationale, kept for the record:** this block was originally specced as *"Booking (optional)"*, secondary to the form (`plan/05:194`). That reading held while `/contact` was the booking funnel. It is not, now.
- `Book a time` was lowercase-after-first-word per the 2026-07-15 proofing decision on non-brand CTAs. Retained here in case the block returns.

---

## 4 · ALTERNATIVE CONTACT  *(⛔ PARKED — removed from the page 2026-07-31, for the Vercel deploy)*

**Status:** ⛔ **NOT ON THE PAGE.** The block was placeholders and nothing else — general email, press email, LinkedIn and location were **all unknown to us**, not merely unwritten. Once the visible tokens came off for the deploy, the section had no content left, and an empty *"Other ways to reach us"* heading is worse than no heading. Copy below is **parked, not deleted** — restore it the moment the client supplies the values.

⚠ **Do not restore it with a guessed address.** An unmonitored inbox on a conversion page loses leads in silence, and it would pass any visual review.

| Field | Value |
|---|---|
| Sub-head | `Other ways to reach us` |
| General enquiries | `{{PENDING:email-general}}` |
| Media / press | `{{PENDING:email-press}}` — ⚠ **build this line only if `/press` is going ahead** (post-MVP). If it is not, delete the row; do not point press enquiries at the general address without asking |
| LinkedIn | `{{PENDING:linkedin-url}}` |
| Location line | `{{PENDING:location-line}}` — may be **deliberately empty**, see notes |

**Notes:**
- ⚠ **The repo contains no contact details of any kind.** No email address, no phone number, no physical address. The Home footer's LinkedIn link is `https://www.linkedin.com/` — the bare domain, i.e. a placeholder nobody ever filled (`credx-website/index.html:546`). **So the values here are not "not yet written"; they are unknown to us.**
- ⚠ **Why the tokens look like this.** Per Marco's instruction the block ships with placeholders rather than being cut — so the placeholders are deliberately **unmistakable**. Nothing here is a plausible-looking guess. `info@credx-tech.com` would have been the dangerous option: it renders as real, passes a visual review, and an unmonitored address on a conversion page loses leads in silence. A `{{PENDING:…}}` token cannot be mistaken for a working address by anyone, including us in three weeks.
- **A location line may not be wanted at all.** Publishing an address is a business decision, and for a financial-services brand sometimes a deliberate omission. The token stands for *"answer pending"*, not *"address exists and we lack it"*.
- ⚠ **This block is also the `Organization` schema's `contactPoint` dependency.** The Home's schema already declares `contactPoint` (Canada); until a real email or phone exists, that field is decorative. Worth resolving in one pass with the values above.

---

## Open / launch-confirm items

**✅ Resolved 2026-07-31 by applying the recommended defaults** (Marco moved past these to the placeholder instruction; each is one edit to reverse):

1. ✅ **Volume field — ADDED as optional.** Reviewed bands from `automotive/copy.md:309`. Departure from the spec's four fields, documented in §2. Reverse = delete one row.
4. ✅ **Button stays `Request a meeting`.** The honest label: nothing is booked on submit. `Book a Time` is reserved for §3, where a calendar actually opens. Reverse = one string.
5. ✅ **`Business name` kept** over the spec's *"company"* — it is the label already through client review on four vertical pages.

**Still genuinely open — a placeholder does not resolve either of these:**

2. ✅ **RESOLVED 2026-07-31 (Marco): the MVP is Home + Contact + `/join`, three pages. No `/thank-you`.** The **inline success state** above is the shipping confirmation. `plan/05:193` (submit → `/thank-you`) and `plan/04.Sitemap-Locked.md:89` (`/thank-you` = 🔴 LAUNCH BLOCKER) are both **superseded for the MVP** and need updating.
   ⚠ **The conversion tracking is NOT lost — it changes implementation.** `plan/04` frames the `/thank-you` URL as *required* for Meta Pixel + Google Ads. That is the conventional setup, not the only one: **event-based** conversion tracking (`fbq('track', 'Lead')` / `gtag('event', 'conversion')` fired on successful submit) needs no URL change, and no URL change is exactly how a native Webflow form success state behaves. **So the launch-blocker framing in `plan/04` is wrong as written** — the requirement is a conversion *event*, and a dedicated URL is one way to get one. **Build task, not a copy or scope item:** wire the event to the form's success callback.
3. ⏳ **Privacy notice — `{{PENDING:privacy-url}}` applied, exposure unchanged.** The token unblocks the build; it does not answer the question. `/legal/privacy` is post-MVP, so the options remain: build a minimal privacy page for the MVP · strip the sentence · point at a notice hosted elsewhere. ⚠ **Same exposure already flagged for `/join`** — collecting business details on a CredX-branded URL while the site claims PIPEDA compliance. Worth settling once for both pages. **This is the one placeholder with legal rather than cosmetic consequences if it ships unresolved.**

**Asks to the client:**

6. **Response-time commitment** — may the page say *"within one business day"*, or does it stay at *"someone will be in touch"*? Currently the vaguer, safer version.
7. **Contact details for §4** — general enquiries email · press email (if `/press` is wanted) · the real LinkedIn company URL · whether any address gets published. **All four are unknown; none guessed.**
8. **The booking URL** (Kyle) — outstanding since 2026-07-20. Blocks §3, and has been blocking `Book a Demo` on four live vertical pages for longer than that.

**Standing caveat, no action:**

9. ⚠ **Audrey's self-serve sales criteria will reshape this page and this funnel** — `plan/05.Content-Architecture.md:196` says so explicitly, and there is still **no ETA** (open since the 2026-07-17 reopen, which went ahead without them). This draft is the MVP version. When the criteria land, expect the merchant/lender/partner selector and the form-versus-calendar hierarchy to be the parts that move.

---

## Status summary

| Section | Status |
|---|---|
| Page metadata (indexed) | DRAFT — Title/Meta/H1 within budget; keyword strategy deliberately branded, not `embedded lending` |
| 1 · Intro — The Invitation | DRAFT — scent-matched to the Home's `Book a meeting`; `/join` routing line included |
| 2 · The Form | DRAFT — `I am a…` selector + 5 fields (3 required, 2 optional); 3 labels reused from client-reviewed Automotive copy; volume band optional; button `Send message` |
| 3 · Book a Time | ⛔ **PARKED** — off the page; booking is the nav CTA now. Copy retained, not deleted |
| 4 · Alternative Contact | DRAFT — shape and labels final, **all 4 values are `{{PENDING:…}}`** |

**Deliverable state:** the page is **built** (`contact/index.html`). §1 and §2 carry no placeholders at all beyond the form endpoint and the privacy link. §4 is entirely placeholders. §3 is off the page.

### ⚠ 2026-07-31 reframe — read this before trusting anything above it

**The premise the first draft was written on was wrong.** It treated `/contact` as the *"Contact / Book a Meeting"* funnel that `plan/05` §Page 7 describes, with `Book a Meeting` as the **nav CTA pointing here** (`plan/05:59`). **Marco corrected it:** `Contact Us` is its **own nav item**, and `Book a meeting` is a **different destination** — Kyle's calendar.

| | before | after |
|---|---|---|
| Nav | 3 links + `Book a meeting` CTA → `/contact` | **4 links** (`Contact Us` added) + CTA → **calendar** |
| Page framing | booking funnel | **general contact page** |
| Eyebrow | `Book a Meeting` | **`Contact Us`** |
| Submit button | `Request a meeting` | **`Send message`** |
| Title | `Contact CredX \| Book a Meeting` | **`Contact CredX \| Talk to Our Team`** |
| Meta closer | *"Book a meeting."* | *"Get in touch."* |
| §3 booking block | on the page | **removed → parked** |
| H1 | `Talk it through with the CredX team` | **unchanged** |

⚠ **`plan/05` is now stale in two places** and it is the same doc the first draft was written from: **line 59** (nav CTA `Book a Meeting` → `/contact`) and the **§Page 7 title + block 3** (*"Booking (optional)"* on this page). Not edited — `plan/05` is a locked artifact and rewriting it is Marco's call.

⚠ **The nav change touches `index.html` too** — the nav is duplicated per page, not a component, so the Home was edited as well. Any future page must carry the same 4-link nav.

---

## Placeholder register — the pre-publish gate

**Seven tokens. This is the list to grep before anything reaches `main`.**

⚠ **Why this section exists.** This repo has **no staging step**: `main` auto-deploys to GitHub Pages within ~30 seconds of a push, so **a push is a publish** (memory `credx-two-live-surfaces-push-is-publish`). Placeholders are the right call for building — they are the wrong thing to have live on the site's only conversion page. The convention is deliberately loud so that cannot happen quietly:

```
grep -rn "{{PENDING:" credx-website/
```

| Token | Stands for | Owed by | If it ships unresolved |
|---|---|---|---|
| `{{PENDING:form-endpoint}}` | Where a submission actually goes (§2) | **build decision** — surfaced at build, 2026-07-31 | 🔴🔴 **The worst one.** The form validates, clears, and shows *"Thank you… someone will be in touch"* — and the submission is logged to the console and discarded. **Every lead is lost silently, and the visitor is told the opposite.** No amount of copy review catches this; only the register does |
| `{{PENDING:booking-url}}` | Google Calendar / Calendly link — now the **nav CTA** on *every page*, not a block on this one | **Kyle** — asked since 2026-07-20 | 🟡 **Currently mitigated:** the CTA falls back to `/contact`, so nothing is dead. ⚠ The risk is the opposite one — the fallback is invisible, so `Book a meeting` silently keeps going to the contact form instead of a calendar, and nobody notices it was never wired |
| `{{PENDING:privacy-url}}` | `/legal/privacy` (§2 reassurance line) | **Scope decision** (Open items #3) | 🔴 **The one with legal rather than cosmetic weight** — a form collecting business details, on a site claiming PIPEDA compliance, pointing at a notice that does not exist |
| `{{PENDING:email-general}}` | General enquiries address (§4) | **Client** | 🟡 Visible token, or a dead mailto |
| `{{PENDING:email-press}}` | Press address (§4) | **Client** — only if `/press` goes ahead | 🟡 Delete the row instead if `/press` is dropped |
| `{{PENDING:linkedin-url}}` | Real LinkedIn company page (§4) | **Client** | 🟡 ⚠ Note the Home footer **already** ships the bare `https://www.linkedin.com/` (`index.html:546`) — this token documents a live defect, it does not create one |
| `{{PENDING:location-line}}` | Whether any address is published (§4) | **Client** | 🟢 May resolve to *"nothing"* — an intentional omission is a valid answer |

**Two are safe to ship visibly if it comes to that** (`email-press`, `location-line` — both may legitimately resolve to nothing). **Three are not** (`form-endpoint`, `booking-url`, `privacy-url`). The other two are lead-loss risks rather than page-breaking ones.

⚠ **`form-endpoint` was not in the copy spec and was not foreseeable from it.** It surfaced at build: `plan/05:315` says *"Webflow Forms"*, which solves delivery **on Webflow** — but this page is being built in the repo first, and the repo deploys to GitHub Pages, which has **no form handling at all**. So the same page has a working form on one live surface and a silent black hole on the other. Whoever wires this needs to decide per surface, not once.

---

## copy-101-dz VALIDATE pass — run 2026-07-31

Checked against all 13 anti-patterns in `copy-101-dz/references/anti-patterns.md` plus the CredX-specific rules.

| Check | Result |
|---|---|
| Em-dash crutch in H1/H2/CTAs | ✅ none — no display string contains one |
| "Not just X, but Y" | ✅ none |
| "Here's what sets us apart" preface | ✅ none |
| "From X to Y, we…" filler | ✅ none |
| "X meets Y" metaphor | ✅ none |
| "Dive / delve into" | ✅ none |
| Fragmented 2–3 word H1 | ✅ H1 is one clear descriptive line |
| Transitional-word overuse | ✅ none |
| **Vague nouns** (journey, landscape, realm, innovation, tapestry, tailor) | ✅ none. **"journey" specifically avoided** — it is banned twice over: as a vague noun here, and as *"start your journey"* in `CredX-Forbidden-Language.md` §2 |
| Vague phrases ("unlock the power", "a testament to") | ✅ none |
| Data-client clichés ("actionable insights") | ✅ none |
| Adverb saturation | ✅ zero adverbs in customer-facing strings |
| Triple-quality lists with no content | ✅ none — the only three-item set is the selector, which is functional |
| **"should"** | ✅ **zero occurrences** in customer-facing copy |
| **"onboarding" / "onboard"** | ✅ **zero.** §1 uses *"join the movement"* and *"finish on your own time"* |
| Contractions | ✅ zero. Includes the two the spec would have introduced: `I'm a…` → `I am a…`, `Let's talk` → dropped |
| Forbidden vocabulary (rewards · BNPL · payments platform · payment rails · Visa/Mastercard · LOI) | ✅ none present — this page has no mechanic or product copy, so most rows do not arise |
| Numbers invented | ✅ **zero numbers on the page.** The only figures referenced are the volume bands in a Note, sourced to `automotive/copy.md:309` |
| Contact details invented | ✅ none — §4 is entirely placeholders, §3's URL is a marked placeholder |
| Consent / data language | ✅ §2's reassurance line states where data goes and links the notice; makes no unverifiable non-sharing claim |
| Canadian spelling · Oxford comma | ✅ |
| Founder names / photos | ✅ none (Discovery Q6) |
| Audience register purity | ✅ merchant register throughout; lender/partner appear only as selector labels, never as prose voice |

**One flag the validator raises rather than fixes:** the page carries **no number and no proof marker at all**. That is correct for a contact form — proof lives upstream on the Home and friction is the enemy here — but it does mean this page converts entirely on the momentum the Home built. If the Home's `/contact` links ever fire from a cold context (paid, email), this page has nothing to persuade with. Worth knowing; not worth fixing inside the MVP.

---

## Build verification — 2026-07-31

**Method note first, because it is the part worth keeping.** The handoff records two occasions in this project where a render was claimed from stored or served values and was wrong. So nothing below is inferred from the code.

**1 · The first render showed a broken H1 — and it was not a defect.** The title rendered as two glyph slivers. Cause: `data-reveal-words` (script.js §3b) sets `yPercent: 115` on each word inside an overflow mask and animates to 0 on a ScrollTrigger; under headless with `--virtual-time-budget` the trigger never fires, so the words stay parked outside their masks. **Diagnosed by control test, not by guesswork: the Home renders identically broken in the same environment**, and the Home is live and correct in real browsers. Re-rendered with `--force-prefers-reduced-motion`, which makes script.js skip the whole motion block (`if (!prefersReducedMotion && …)`) and leaves everything visible — that both revealed the true layout **and** exercised the reduced-motion fallback path.

**2 · Mobile "overflow" was also an artifact.** A 390px-wide screenshot showed the nav, H1, form and tokens all clipped at the right edge. Same control test: **the Home clips identically at 390** — `--window-size` in desktop headless does not emulate a mobile viewport, so the screenshot crops rather than the layout breaking. Settled numerically with an iframe probe measuring `scrollWidth` against `clientWidth`:

| viewport | 390 | 414 | 640 | 768 | 1024 | 1440 |
|---|---|---|---|---|---|---|
| `/contact` overflow | none | none | none | none | none | none |
| `/` (Home) overflow | none | none | none | none | none | none |

**3 · Form behaviour probe — filled and submitted for real in an iframe, then the DOM was read back.** All 16 checks pass:

| Check | Result |
|---|---|
| Empty form blocked by native validation | ✅ `checkValidity() === false` |
| Filled form valid | ✅ `true` |
| Volume + message genuinely optional | ✅ neither `required` |
| Form hides, success block shows | ✅ |
| Success copy | ✅ *"Thank you. Your message reached our team, and someone will be in touch."* |
| Focus moves to the confirmation | ✅ `activeElement === [data-contact-done]` |
| `aria-live` | ✅ `polite` |
| No page navigation on submit | ✅ stays on `/contact` |
| Placeholder is audible in console | ✅ `[CredX /contact] {{PENDING:form-endpoint}} — submission NOT sent anywhere` |
| Inert placeholder links do not navigate | ✅ 2 found, both blocked |
| One `<h1>` | ✅ |
| Form labels / orphaned | ✅ 6 / **0** |

**Two small defects the render did find, both fixed:** the last row of the §4 list carried a trailing `border-bottom` (now `:last-child` cleared), and the privacy sentence left an orphaned full stop between the link and the token (the token moved to its own line, matching §3's pattern).

⏳ **Still not observed, and not observable here:** the motion (word-reveal on the H1, `data-reveal` on §3/§4) with animation actually running, and any hover state — both need a real browser and a live pointer. The layout was verified with motion disabled, which is the honest description of what was checked.

---

## 🚀 2026-07-31 — stripped for the Vercel deploy

**Marco: deploy is git-based on Vercel; remove the visible placeholders from the page.** Done. **Nothing was resolved — the placeholders became invisible, not absent.** Every token still exists as an HTML comment at the same spot, so `grep -rn "{{PENDING:" credx-website/` still finds all seven. There are now **zero `.pending` elements in the DOM** on either page.

| What was visible | What happened |
|---|---|
| `form-endpoint` warning banner above the form | Removed → HTML comment |
| `privacy-url` token + the *"Read how we handle them in our Privacy notice"* sentence and its dead link | **Both cut.** The line now reads only *"Your details reach our team so we can reply."* — factual, no dead link, no unverifiable claim |
| §4 Alternative Contact (4 tokens, the whole block) | **Section removed from the page**, parked in §4 above |
| `booking-url` (nav CTA) | Already a comment; the CTA falls back to `/contact`, so nothing changed |

**The page is now §1 + §2 only** — hero, then the form. Which is, in fairness, exactly what *"a simple contact us page"* meant (Gaetan, 2026-07-20).

### ⚠ The one thing that got worse, not better

**`{{PENDING:form-endpoint}}` is unchanged and now silent.** The form validates, clears, shows *"Thank you. Your message reached our team, and someone will be in touch."* — and the submission is written to the browser console and discarded. **It was always broken; the banner was the only thing saying so, and the banner is gone.**

On a public URL this is the failure mode that costs actual business: a merchant fills it in, is told they will be contacted, and no one ever hears from them. It cannot be fixed by copy — it needs one of:

1. **A form endpoint** (Vercel Forms / Formspree / a serverless route — the repo has no backend and GitHub Pages has none either).
2. **A `mailto:` action** — the cheap fallback, but it is **blocked**: no CredX email address exists anywhere in the repo. Same gap as §4.
3. **Disable the form** until 1 or 2 lands, and let the nav CTA carry conversion. One edit, and it is the only option that does not risk a lost lead.

⚠ **Also unresolved for a public deploy, and flagged rather than fixed** (not part of the placeholder ask): `sitemap.xml` declares **18 URLs of which 2 exist**, and `robots.txt` is `Allow: /`. Publishing as-is invites crawlers to 16 URLs that 404, on the domain whose SEO anchor is locked.
