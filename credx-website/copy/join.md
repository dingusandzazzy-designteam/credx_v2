# CredX Website — `/join` Page Copy

> **Page:** `/join` · **`noindex`** (excluded from `sitemap.xml` + `robots.txt`) · no SEO budgets bind — the `noindex` call was made on Semrush data 2026-07-27 (the whole merchant-application cluster is 0–40 searches/month, and indexing against `embedded lending` would cannibalise the Home's 1,000/mo anchor).
> **Status:** DRAFT 2026-08-03 — first draft.
> **Sources:** `documents/05.merchant onboarding/Merchant Onboarding.docx` (11 screenshots of the base44 prototype + 11 review comments, delivered 2026-08-03) · ClickUp `86caz3h02` · prototype `https://credx-merchant-start.base44.app`.
> **Pipeline:** credx-copy (write) → copy-101-dz (de-AI validate, run at the foot of this file) → seo-copy-sync **not applicable** (page is `noindex`).
> **Scope of this file:** the *page chrome, section framing, microcopy, buttons, and confirmation.* **The field labels are LOCKED and reproduced verbatim** — see the constraint note below.
> **Voice:** Premium · Aspirational · Enterprise-ready · Human. Merchant/operator register throughout, single audience, no register mixing.
> **House style:** contractions expanded; Canadian spelling; Oxford comma; zero "should"; accent = magenta colour only.
> **⚠ "Onboarding" never appears.** The act is **joining**. The prototype violates this in two places (the header chrome and the confirmation headline) and both are rewritten below — see §Divergences.

---

## ⚠ The one hard constraint on this file

**ClickUp `86caz3h02`: *"Form fields must match the prototype exactly (same fields, order, labels) — this part is locked."*** So every row in the field tables below is **transcribed from the screenshots, not authored.** Where a prototype label reads oddly to a copywriter's ear, it stays.

Two prototype labels were checked against the forbidden-language table and **both clear on documented exceptions:**

| Label | Rule it brushes | Why it stays |
|---|---|---|
| `Payment Gateway` (step 4) | "payments platform" / "payment rails" are banned | The **payment exception** (`voice.md`): describing what the merchant's *existing* processor or gateway does is allowed. Banned is positioning CredX as a payments provider. This field asks what the merchant already runs. |
| `CRM / Loyalty / Customer ID System` (step 5) | "loyalty" is banned when labelling **CredX's** offering | The **loyalty exception**: this is the merchant's own existing system, not a CredX product. CredX's own equivalent is still *value-back program*, and that term does not appear on this page. |

**Everything else on this page is ours to write**, and the task confirms it: *"Page copy is not locked — write fresh copy following CredX's brand voice."*

---

## Page metadata

| Field | Value |
|---|---|
| Title | `Merchant Application \| CredX` |
| Meta description | *(none — page is `noindex`; no description authored)* |
| Robots | `noindex, nofollow` |
| H1 | `Your merchant application` |
| OG | **none.** No OG tags on a `noindex` page — the link is sent by a rep, never shared socially |
| Schema | **none.** Do not add `Organization` here; the Home carries it |

**Build gate:** add the `/join` exclusion to `robots.txt` and keep it out of `sitemap.xml`. Outstanding since 2026-07-27 and still owed.

---

## 0 · PAGE CHROME

**Status:** DRAFT · **Beat:** orient without preamble. The merchant arrives from a link a rep sent after a call — they are already warmed and they came here to fill something in.

| Element | Value |
|---|---|
| Header wordmark | `CredX` |
| Header label | `Merchant Application` |
| Step counter | `Step 1 of 8` |
| Step name (right of counter) | `Business Identity` · `Ownership` · `Commercial` · `Payments` · `Technology` · `Data & Ops` · `Documents` · `Review` |
| Eyebrow | `Join the Movement` |
| H1 | `Your merchant application` |
| Sub | `Eight short sections. Complete each one, and our team takes it from there.` |

**Notes:**
- ⚠ **The prototype header reads `Merchant Onboarding`. It cannot ship.** *"Onboarding"* is internal vocabulary (Marco, 2026-07-27) and is banned in page copy, headlines, CTAs and URLs. `Merchant Application` replaces it, and it is not a compromise: it is the prototype's **own** word for the thing (the H1 says *"Merchant Application"* and the review screen lists the application's sections), so the fix removes the banned term without inventing a new label.
- **The eyebrow is the scent match.** The button that sends the merchant here is `Join the Movement` (locked brand label, Audrey C15; hero primary since 2026-07-27). Repeating it at the top of the page confirms they arrived where they meant to. Title Case is the deliberate exception to the 2026-07-15 lowercase-CTA decision — it is a brand label, not a generic action.
- **The sub names the length.** Eight sections is a lot to be handed without warning, and the single most useful thing the top of a long form can do is tell the truth about its size. *"Our team takes it from there"* is the same promise the confirmation screen pays off.
- ⚠ **The sub does NOT promise saved progress.** There is no login and no persistence (see §Out of scope), so a claim like *"pick up where you left off"* would be false. This is the sentence to revisit if the implementation team adds persistence.
- **The step names are shortened from the section titles** to fit the progress rail, and they match the labels the prototype already uses in the rail. The full titles appear on the card.

---

## 1 · BUSINESS IDENTITY

**Status:** DRAFT · **Beat:** the easiest section first. Nothing here requires the merchant to look anything up.

| Element | Value |
|---|---|
| Card title | `Business Identity` |
| Card sub | `Start with your company's legal information.` |
| Group heading | `Business Details` |
| Button | `Continue` |

### Fields — LOCKED, verbatim from prototype

| Label | Type | Required | Placeholder / helper |
|---|---|---|---|
| `Your Name` | text | ✳ | `Full name` |
| `Your Email` | email | ✳ | `email@company.com` |
| **`Your Phone`** | tel | — | `(000) 000-0000` — ✅ **ADDED, approved 2026-08-03.** Not in the prototype; the client asked for it |
| `Your Title` | text | — | `e.g. CEO, Owner, Operations Manager` |
| `Legal Business Name` | text | ✳ | `As registered` |
| `Operating / Trade Name` | text | — | `If different from legal name` |
| `Business Number / Tax ID` | text | ✳ | `e.g. 123456789` |
| `Country` | select | — | default `Canada` |
| `Street Address` | text | ✳ | `123 Main St` |
| `City` | text | — | `City` |
| `Province / State` | text | — | `ON` |
| `Postal / ZIP` | text | — | `A1A 1A1` |

**Notes:**
- **Card sub rewritten to drop the contraction.** Prototype: *"Let's start with your company's legal information."* → `Start with your company's legal information.` The imperative carries the same warmth without *"Let's"*, and *"Let us start"* reads archaic. Same fix, same reasoning as the `/contact` intro line.
- ✅ **`Your Phone` ADDED — approved by Marco 2026-08-03. This is not a divergence.** The client asked for it: comment #7, to Audrey — *"We still need to have them put their phone number on the first page of this. I see the title but we need the number as well."* **Comment #7 *is* the client updating the spec**, so the field set the page implements is the current one and **the prototype is the artifact that is behind.** The "fields match the prototype exactly" lock means *do not redesign the field set on your own initiative*; it was never a rule that outranks a later instruction from the client who wrote it. It is also **what makes the abandonment follow-up in comment #3 possible at all** — with no login and no saved progress, a phone number is the only channel that reaches a merchant who left at step 6, and the client's own mitigation plan (*"a sequence of emails and text"*) already assumes one exists.
  - **Optional, not required.** Work email is already mandatory, so reaching the merchant is not gated on the phone; making it required would add friction to the first card for a channel that is a fallback.
  - **Paired with `Your Title` in one row**, rather than sitting full-width alone. That mirrors how the client described it (*"I see the title but we need the number as well"*) and keeps the card's two-column rhythm — a lone full-width phone field between two grids read as an afterthought.
- **`Country` defaults to Canada and is not marked required** in the prototype. Left as found.

---

## 2 · OWNERSHIP & CONTROL

**Status:** DRAFT · **Beat:** three questions, all mandatory, all things the signer knows without looking them up.

| Element | Value |
|---|---|
| Card title | `Ownership & Control` |
| Card sub | `Who owns and controls the business?` |
| Buttons | `Back` · `Continue` |

### Fields — LOCKED, verbatim from prototype

| Label | Type | Required | Placeholder | Helper |
|---|---|---|---|---|
| `Beneficial Owners (25%+ ownership)` | textarea | ✳ | `e.g. Jane Smith — 60%, John Doe — 40%` | `List all individuals who own 25% or more. Include full name and ownership %.` |
| `Directors / Officers` | textarea | ✳ | `e.g. Jane Smith — CEO, John Doe — CFO` | `List names and titles of all directors and officers.` |
| `Signing Authority` | text | ✳ | `Full name and title` | `Who is authorized to sign agreements on behalf of the business?` |

**Notes:**
- **Card sub kept verbatim from the prototype** — it is a short, plain question and there is nothing to improve.
- **The helper texts are kept as found.** They are compliance instructions, not marketing copy, and precision beats voice here. `authorized` keeps the prototype's spelling; ⚠ **Canadian house style would be `authorised`** — flagged in §Divergences rather than changed, because these strings sit closest to the legal register and the client wrote them.
- ⚠ **`Signing Authority` is the field that ties to the Merchant Network Agreement.** Nothing on this page names the Agreement, and it does not need to — but the implementation team should know the two connect, because the person named here is the person who signs it. Never *"LOI"* anywhere near this flow.

---

## 3 · COMMERCIAL DETAILS

**Status:** DRAFT · **Beat:** the volume question. This is the section that decides whether the file qualifies.

| Element | Value |
|---|---|
| Card title | `Commercial Details` |
| Card sub | `Tell us about your business activity and sales profile.` |
| Buttons | `Back` · `Continue` |

### Fields — LOCKED, verbatim from prototype

| Label | Type | Required | Placeholder | Helper |
|---|---|---|---|---|
| `Industry / Business Type` | text | ✳ | `e.g. Restaurant, Retail, SaaS` | — |
| `MCC Code` | text | — | `e.g. 5812` | `Merchant Category Code — leave blank if unknown.` |
| `Risk Category` | select | — | `Select…` | `CredX will confirm this during review.` |
| `Monthly Sales Volume (CAD)` | text | ✳ | `e.g. $250,000` | `Approximate monthly card processing volume.` |
| `Average Transaction Amount (CAD)` | text | ✳ | `e.g. $45` | — |

**Notes:**
- 🔴 **`Risk Category` option values are NOT in the document.** The screenshot shows a closed `Select…`. **Not invented** — needed from the prototype or the client before this screen can be finished. Same gap on `Settlement Cadence` in §4.
- **`$250,000` in the volume placeholder is the qualifier the project already publishes** — the `$250K+/month` floor. It matches the Home's calculator floor and the vertical pages, so it reconciles. ⚠ Note it was deliberately kept *off* the indexed Home's §3.5 on 2026-07-27 as an unreviewed figure; on a `noindex` page inside a placeholder it carries none of that exposure.
- **`CredX will confirm this during review.`** is the best line on the prototype and it stays untouched. It tells a merchant who does not know their risk category that guessing wrong costs nothing — which is exactly the friction that abandons a form.

---

## 4 · PAYMENTS SETUP

**Status:** DRAFT · **Beat:** what the merchant runs today. Read-only reality, no judgement.

| Element | Value |
|---|---|
| Card title | `Payments Setup` |
| Card sub | `Your current payment processing configuration.` |
| Buttons | `Back` · `Continue` |

### Fields — LOCKED, verbatim from prototype

| Label | Type | Required | Placeholder | Helper |
|---|---|---|---|---|
| `Current Processor` | text | — | `e.g. Moneris, Square, Stripe` | — |
| `Acquirer` | text | — | `e.g. TD Merchant Services` | — |
| `Payment Gateway` | text | — | `e.g. Beanstream, Authorize.net` | — |
| `Settlement Bank` | text | ✳ | `Bank name and account type` | `Bank where funds settle.` |
| `Settlement Cadence` | select | ✳ | `Select…` | — |

**Notes:**
- ⚠ **This card is the one place the page names competitor brands, and it is allowed.** `Moneris, Square, Stripe`, `TD Merchant Services`, `Beanstream, Authorize.net` are **placeholders inside the merchant's own answer**, which the payment exception permits. **Two separate rules do NOT apply here and should not be misfired:** the `pos/prompts.md` §E naming guard (never name POS/ISV brands) governs *marketing* copy where those brands are prospects, not form examples; and the Visa/Mastercard prohibition is untouched — **no card network is named anywhere on this page, and none may be added.**
- 🔴 **`Settlement Cadence` option values are NOT in the document** — closed select in the screenshot. Needed before build. Likely `Daily · Weekly · Monthly`, but that is a guess and it is not written into the table.
- **Card sub kept verbatim.** *"Your current payment processing configuration"* describes the merchant's existing stack, which is the sanctioned use of the word.

---

## 5 · TECHNOLOGY STACK

**Status:** DRAFT · **Beat:** the integration surface. Every field optional — this is the section most merchants half-fill, and that is fine.

| Element | Value |
|---|---|
| Card title | `Technology Stack` |
| Card sub | `Your point-of-sale, e-commerce, and customer tools.` |
| Buttons | `Back` · `Continue` |

### Fields — LOCKED, verbatim from prototype

| Label | Type | Required | Placeholder | Helper |
|---|---|---|---|---|
| `POS Vendor` | text | — | `e.g. Lightspeed, Toast` | `Leave blank if not applicable.` |
| `POS Version / Model` | text | — | `e.g. v5.2, Lane 3000` | — |
| `E-Commerce Platform` | text | — | `e.g. Shopify, WooCommerce` | `Leave blank if not applicable.` |
| `Checkout System` | text | — | `e.g. Custom, Shopify Checkout` | — |
| `CRM / Loyalty / Customer ID System` | text | — | `e.g. Salesforce, HubSpot, Square Loyalty` | — |

**Notes:**
- **Card sub carries the Oxford comma** the prototype already had (*"point-of-sale, e-commerce, and customer tools"*). Kept.
- **Zero required fields, and the two `Leave blank if not applicable.` helpers are doing real work.** A merchant with no e-commerce arm hits this card and needs permission to skip it. Kept as found.
- ⚠ **This is the card the client's pricing idea attaches to** — comment #11: *"if they want to hook up to a CRM we charge them $500. If they have 2 api hook ups then it is $750."* The number of integrations declared here is what an itemized pricing screen would price. See §Open items #2.

---

## 6 · DATA, OPERATIONS & LAUNCH

**Status:** DRAFT · **Beat:** the longest card. Two mandatory process questions, the rest operational detail.

| Element | Value |
|---|---|
| Card title | `Data, Operations & Launch` |
| Card sub | `How you handle transactions, support, and your launch plan.` |
| Buttons | `Back` · `Continue` |

### Fields — LOCKED, verbatim from prototype

| Label | Type | Required | Placeholder | Helper |
|---|---|---|---|---|
| `Available Transaction Data Fields` | textarea | — | `List available data fields` | `What fields are in your transaction records? e.g. date, amount, location, SKU` |
| `Historical transaction data is available for import` | checkbox | — | — | — |
| `Refund Process` | textarea | ✳ | `How are refunds processed and who handles them?` | — |
| `Chargeback Process` | textarea | ✳ | `How are chargebacks handled?` | — |
| `Tier 1 Support Owner` | text | — | `Team or person name` | — |
| `Escalation Path` | text | — | `Who handles escalations?` | — |
| `Pilot Locations` | text | — | `e.g. Toronto HQ, Vancouver location` | — |
| `Pilot Channels` | text | — | `e.g. In-store, Online, Mobile app` | — |

**Notes:**
- ✅ **Consent line ADDED — approved by Marco 2026-08-03.** Under the import checkbox: **`Nothing is imported until you opt in and the Agreement is in place.`** `voice.md` is unambiguous — *"Never imply consent. When data-sharing is mentioned, opt-in must be stated"* — and the `Historical transaction data is available for import` checkbox is a data-sharing statement in everything but name. **This was the only locked brand rule the page broke**; it now breaks none.
  - **It is microcopy attached to a locked field, not a change to the field**, so the locked field set is untouched.
  - **Build note:** wired with `aria-describedby` on the checkbox so it is announced *with* the control rather than stranded after it. A consent sentence a screen-reader user does not hear alongside the checkbox is not consent.
  - **Two words chosen deliberately.** *"Opt in"* is the term the rule itself uses. *"The Agreement"* is the sanctioned short form of **Merchant Network Agreement** inside a repeating block — never *"LOI"*.
- **`Pilot` framing is kept.** It sets the expectation that the launch is staged, which is honest about how these go live.
- **No CTA on this card beyond `Continue`.** The persistent-CTA mandate governs marketing sections; a form step with a competing CTA leaks the completion the page exists for.

---

## 7 · DOCUMENT UPLOADS

**Status:** DRAFT · **Beat:** the friction wall. Three mandatory documents, and this is where files get abandoned.

| Element | Value |
|---|---|
| Card title | `Document Uploads` |
| Card sub | `Upload the documents needed to complete your application.` |
| Format line | `Accepted formats: PDF, JPG, PNG. Maximum 10MB per file.` |
| Row button | `Upload` |
| Buttons | `Back` · `Continue to review` |

### Fields — LOCKED, verbatim from prototype

| Label | Required | Description |
|---|---|---|
| `Void Cheque` | ✳ | `A void cheque for your settlement bank account.` |
| `Government-Issued ID` | ✳ | `Photo ID of the signing authority.` |
| `Incorporation Document` | ✳ | `Certificate of incorporation or articles of incorporation.` |
| `POS / E-Commerce Screenshot` | — | `Screenshot of your POS system or checkout flow.` |
| `Settlement Sample Report` | — | `A recent settlement or reconciliation report.` |

**Notes:**
- **Card sub rewritten.** Prototype: *"Upload the required documents to complete your application."* → `Upload the documents needed to complete your application.` *"Required"* duplicates the asterisks, and two of the five rows are not required — the prototype's line contradicts its own list.
- **Format line rewritten from `Max 10MB per file.`** → `Maximum 10MB per file.` House style does not abbreviate in customer-facing prose.
- ✅ **`Void Cheque` is already Canadian spelling** in the prototype. Confirmed, kept — this is the one place a US-normalised label (`Voided Check`) would have been a real error.
- ⚠ **The prototype disables `Continue to review` until the three mandatory uploads are present.** That is design intent worth preserving in the mockup, and it is the reason the client asked whether uploads are feasible at all (comment #8). See §Open items #1.
- **`Continue to review` is lowercase-after-first-word** per the 2026-07-15 proofing decision on non-brand CTAs. The prototype's `Continue to Review` was Title Case.

---

## 8 · REVIEW & SUBMIT

**Status:** DRAFT · **Beat:** the last look. Nothing new is asked for; everything already given is shown back.

| Element | Value |
|---|---|
| Card title | `Review & Submit` |
| Card sub | `Review your information before submitting.` |
| Section labels | `BUSINESS IDENTITY` · `OWNERSHIP` · `COMMERCIAL` · `PAYMENTS` · `TECHNOLOGY` · `DATA & OPERATIONS` · `DOCUMENTS` |
| Document chips | `Void Cheque` · `Government ID` · `Incorporation Doc` |
| Disclaimer | `By submitting, you confirm all information is accurate. Our operations team will review your file and reach out within one to two business days.` |
| Buttons | `Back` · `Submit application` |

**Notes:**
- **Section labels are ALL CAPS and that is sanctioned** — `voice.md` permits caps for short labels. They also mirror the eight card titles, so the merchant recognises what they are looking at.
- **`1–2 business days` written out as `one to two business days`.** Numerals in a legal-adjacent sentence read like a spec; the same figure in words reads like a person. ⚠ **This is a response-time commitment, and the identical question is open on `/contact`** (where the copy deliberately stayed vague at *"someone will be in touch"* because nobody told us what the team can honour). **Here it ships because the client wrote it themselves** — twice, on this screen and the confirmation. Their commitment, their number. Worth confirming it is still the one they want to publish.
- **`Submit application`**, not the prototype's `Submit Application →`. Lowercase-after-first-word per the CTA rule; the arrow is a design decision, not copy.
- ⚠ **The disclaimer is the closest thing on this page to legal text, and CredX legal owns legal copy.** The wording above is the client's own with contractions expanded and the numeral spelled out. **Do not rewrite it further without legal sign-off.**

---

## 9 · CONFIRMATION

**Status:** DRAFT · **Beat:** pay off the `Join the Movement` promise and end the interaction cleanly. This screen is the client's own — comment #1: *"This is our confirmation page ;)"*.

| Element | Value |
|---|---|
| Headline | `Welcome to the movement.` |
| Sub | `We have your application. Here is what happens next:` |
| Step 1 title | `Our team reviews your file` |
| Step 1 body | `Every section is checked against the documents you uploaded, usually within one to two business days.` |
| Step 2 title | `You hear from us` |
| Step 2 body | `If anything is missing, we reach out by email. Otherwise your file moves straight to discovery.` |
| Step 3 title | `No second meeting needed` |
| Step 3 body | `You have done your part. We take it from here.` |
| Contact line | `Questions? Contact your CredX representative at {{PENDING:email-join}}.` |

**Notes:**
- 🔴 **The prototype headline `Your Journey has Started` cannot ship, and it fails on two independent counts.** *"Journey"* is a vague noun on the D&Z anti-pattern list (#9), and *"start your journey"* was **explicitly rejected** as the replacement for "onboarding" on 2026-07-27. This is not a stylistic preference; it is the single most clearly prohibited string in the whole document.
- **`Welcome to the movement.` is the replacement, and it is chosen rather than invented.** The button that started this flow says `Join the Movement`. A merchant who clicked *join the movement*, filled in eight sections, and is then welcomed *to the movement* has been told one consistent story from click to confirmation. It is movement framing — the register `voice.md` reserves for exactly this moment — and it says nothing that needs verifying.
- **Sub expanded from `We've got it.`** → `We have your application.` The expansion is mandatory; naming *what* was received is the improvement that came free with it.
- **`You'll hear from us` → `You hear from us`**, not *"You will hear from us"*. Present tense is shorter and more certain, and the three step titles now scan at the same weight.
- ⚠ **`Otherwise we will move your file for discovery` → `Otherwise your file moves straight to discovery.`** *"Move your file for discovery"* is internal ops phrasing. The meaning is preserved; if *"discovery"* is a defined stage the merchant has already been told about, it stays — **confirm with the client that the merchant knows what discovery means at this point**, because an unexplained internal stage name on a confirmation screen is a small unanswered question at the exact moment you want none.
- 🔴🔴 **THE EMAIL ADDRESS IN THE PROTOTYPE IS ON THE WRONG DOMAIN.** The screen reads `connect@credxtech.com` — **no hyphen**. The locked primary domain is **`credx-tech.com`** (with hyphen, client-confirmed 2026-07-17), and `credxtech.com` is one of the two alternates that **301-redirects** to it. Redirects do not forward mail. Every commenter in this very document writes from the hyphenated domain (`audrey@credx-tech.com`, `kyle@credx-tech.com`, `kendall@credx-tech.com`), so `credxtech.com` is almost certainly a typo in the prototype — **but a merchant emailing a non-existent address at the end of a completed application is a silently lost lead, which is the same failure class as the `/contact` form.** Held as `{{PENDING:email-join}}` rather than corrected, because guessing that `connect@credx-tech.com` exists is exactly the guess the `/contact` register exists to prevent. ⚠ **See §Open items #4 — this is also the first CredX email address to appear anywhere in the project.**
- **`our CredX representative` → `your CredX representative`.** They have one; the whole premise is that a rep sent them this link.

---

## Out of scope — and why

**Two of the eleven screens in the document are NOT built.** Both were ruled out by the client, not by us.

| Screen | Ruling |
|---|---|
| **Login / `Welcome back`** (`Continue with Google`, email + password, `Forgot password?`, `Create one`) | **Audrey, comment #2:** *"I'm not sure this screen is a possibility for our website. I was mainly thinking about cases where someone doesn't complete the process and needs to log back in. However, we will have a trigger in our CRM to notify us when someone starts but doesn't complete it, so we can potentially follow up with them."* Also excluded by the task: scope is *"only the 8 screens after login/account creation"*. |
| **Pre-login hero** (`Finish the call. Send one link.` + three feature cards) | **Client, comment #9:** *"I do not believe we need to have the Finish the cal.. Send one link. Your merchant completes on their own time — ..... This was written for our merchant portal however it may be good to have some messaging??"* — and **comment #10: *"I agree"***. So the block comes off, and the *"may be good to have some messaging"* half is answered by §0's eyebrow + H1 + sub, which is messaging sized for a form page rather than a landing page. |

⚠ **The consequence of dropping the login is worth stating plainly: there is no account, so there is no saved progress.** A merchant who abandons at step 6 starts again. The client's own mitigation is the CRM abandonment trigger (comments #2 and #3 — *"follow up with a sequence of emails and text… after a few times then we put it to a person to call or AI"*), which is a **follow-up** mechanism, not a **resume** mechanism. **This is a product gap, not a copy gap** — no sentence on this page can fix it, and §0's sub is deliberately written so it does not pretend otherwise.

---

## Divergences from the prototype — the complete list

Everything changed, and why. **Nothing in the locked field tables was touched.**

| # | Prototype | This draft | Reason |
|---|---|---|---|
| 1 | Header `Merchant Onboarding` | `Merchant Application` | 🔴 "Onboarding" banned in page copy. Replacement is the prototype's own word |
| 2 | Confirmation `Your Journey has Started` | `Welcome to the movement.` | 🔴 "Journey" = anti-pattern #9; *"start your journey"* explicitly rejected 2026-07-27 |
| 3 | `Let's start with your company's…` | `Start with your company's…` | Contraction banned; *"Let us start"* reads archaic |
| 4 | `We've got it.` | `We have your application.` | Contraction banned |
| 5 | `You'll hear from us` | `You hear from us` | Contraction banned; present tense is more certain |
| 6 | `You've done your part. We'll take it…` | `You have done your part. We take it…` | Contractions banned |
| 7 | `Upload the required documents` | `Upload the documents needed` | "Required" contradicts the list — 2 of 5 rows are optional |
| 8 | `Max 10MB per file.` | `Maximum 10MB per file.` | No abbreviations in customer-facing prose |
| 9 | `Continue to Review` / `Submit Application` | `Continue to review` / `Submit application` | 2026-07-15 proofing decision: non-brand CTAs are lowercase after the first word |
| 10 | `1–2 business days` (×2) | `one to two business days` | Numerals read as spec in a legal-adjacent sentence |
| 11 | `Otherwise we will move your file for discovery` | `Otherwise your file moves straight to discovery.` | Internal ops phrasing on a customer screen |
| 12 | `our CredX representative` | `your CredX representative` | They have a specific one — that is the premise of the link |
| 13 | `connect@credxtech.com` | `{{PENDING:email-join}}` | 🔴 Wrong domain (missing hyphen); not guessed |
| 14 | *(nothing)* | Eyebrow `Join the Movement` | Scent match to the CTA that sent them here |
| 15 | `Complete each section to get set up with CredX.` | `Eight short sections. Complete each one, and our team takes it from there.` | Names the length — the most useful thing the top of a long form can say |
| 16 | *(nothing)* | ✅ Consent line under the import checkbox, §6 | `voice.md`: data-sharing requires stated opt-in. **Approved 2026-08-03.** Was the page's only brand-rule breach |
| 17 | *(nothing)* | ✅ `Your Phone` on step 1, §1 | **Not our divergence — the client's own spec change** (comment #7), applied 2026-08-03. Listed here only because anyone comparing the two screens will see the difference; the prototype is the side that is out of date |

**Held, not changed:** `authorized` (US spelling) in the §2 helper text, because those strings sit closest to the legal register and the client wrote them. Flagged for a house-style decision — `authorised` is Canadian, and the rest of this page is.

---

## Open / launch-confirm items

**Owed to the client — two are direct questions they asked us:**

1. 🔴 **Document uploads — the client asked and we owe an answer.** Comment #8: *"Made a few items mandatory here for document upload, fingers crossed we are able to do this on the website. Let me know if we are able to and if not any suggestions?"* This is an implementation question (Void Cheque, Government ID and Incorporation Document need a destination and a retention policy), so it goes to the implementation team and comes back to the client as one answer. **The design deliverable shows the full upload UI with the three mandatory rows gating `Continue to review`** — i.e. the design does not pre-empt the answer.
2. ⏳ **"Number of terminals" + an itemized pricing screen.** Comment #11 (assigned to Audrey): *"do you think we should have a question for number of terminals? I was thinking we could put pricing at the end of this onboard so they know the costs. For Eg if they want to hook up to a CRM we charge them $500. If they have 2 api hook ups then it is $750? We can give them a total cost to set up? Audrey lets talk about this more as we could have the receipt sent out and they pay for it right up front."* **Unresolved between Audrey and the client — no design is drawn for it.** ClickUp says do not block on it but leave room. **The room it needs is a 9th step**, which changes `Step 1 of 8` to `Step 1 of 9` in nine places and adds a payment surface to a page that currently has none. ⚠ **No figures from that comment appear in this file** — `$500` and `$750` are one person's example in a discussion thread, not approved pricing.
3. ✅ ~~**`Your Phone` on step 1**~~ — **DONE 2026-08-03 (Marco approved).** Added as optional, paired with `Your Title`. **Nothing is owed to anyone on this** — the client requested the field, so the page matches the current spec and there is no departure to disclose. If it comes up at all, it is a note for whoever maintains the base44 prototype, which no longer reflects comment #7.
4. 🔴 **The `connect@` address — and the bigger prize behind it.** Two things: (a) confirm the correct address on the **hyphenated** domain; (b) ⚠ **this is the first CredX email address to surface anywhere in this project.** `copy/contact.md` §4 has been parked entirely on `{{PENDING:email-general}}`, the Home footer still ships a bare `https://www.linkedin.com/`, and the `Organization` schema's `contactPoint` has been decorative since it was written — all for want of one address. **Do not silently adopt `connect@` for those**: it is presented here as a *representative* address for merchants mid-application, which is not obviously the same thing as general enquiries. **But ask, because one answer may unblock four placeholders.**
5. ⏳ **`Risk Category` and `Settlement Cadence` option values** — both selects are closed in the screenshots. Needed before either card can be finished. **Not guessed.**
6. ⏳ **Does the merchant know what "discovery" means** by the time they reach the confirmation screen? If it is a named stage in the rep's script, the word stays.
7. ⏳ **Response-time commitment** — `one to two business days` appears twice and is the client's own wording. `/contact` deliberately stayed vague on the same question. Confirm this is the number they want published.

**Scope decision — the same one `/contact` is waiting on:**

8. 🔴 **Privacy notice.** This page collects legal business names, tax IDs, beneficial-owner names, a void cheque, government photo ID, and incorporation documents. `/legal/privacy` **does not exist** (post-MVP), and the site publicly claims SOC 2 + PIPEDA compliance. **`/contact` raised this and settled for trimming the sentence rather than linking a dead page; that answer does not stretch to cover this data set.** The handoff has flagged it as *"settle once for both pages"* since 2026-07-31 — **this page is why it can no longer wait.** Copy cannot solve it: the options are a minimal privacy page for the MVP, a notice hosted elsewhere, or an explicit decision to ship without one.

---

## copy-101-dz VALIDATE pass — run 2026-08-03

Checked against all 13 anti-patterns in `copy-101-dz/references/anti-patterns.md` plus the CredX canonical rules (14 substitution rows + the structural prohibitions). **Scope of the check: strings this file authors or rewrites.** The locked field labels are transcriptions and are audited separately in the table below.

| Check | Result |
|---|---|
| Em-dash crutch in headlines / titles / CTAs | ✅ none. Em dashes appear only inside two prototype helper strings and two placeholders, never in a display string |
| "Not just X, but Y" | ✅ none |
| "Here's what sets us apart" preface | ✅ none |
| "From X to Y, we…" filler | ✅ none |
| "X meets Y" metaphor | ✅ none |
| "Dive / delve into" | ✅ none |
| Fragmented 2–3 word H1 | ✅ H1 is one descriptive line |
| Transitional-word overuse | ✅ one `Otherwise` in the confirmation, load-bearing (it marks the branch) |
| **Vague nouns** (journey, landscape, realm, innovation, tapestry, tailor) | ✅ **zero. This was the primary risk on this page** — the prototype's confirmation headline contained `Journey`, and it is gone |
| Vague phrases ("unlock the power", "a testament to") | ✅ none |
| Data-client clichés ("actionable insights") | ✅ none — §6 asks about data in plain operational terms |
| Adverb saturation | ✅ one adverb total (`usually`, confirmation step 1) and it is a hedge, which is required |
| Triple-quality lists with no content | ✅ none. The confirmation's three steps each carry a concrete mechanism (a check, an email, a handover) |
| **"should"** | ✅ **zero** in customer-facing strings |
| **"onboarding" / "onboard"** | ✅ **zero.** Removed from the header; absent everywhere else. Appears in this file only in operator-facing notes and in quoted client comments |
| Contractions | ✅ zero. Five were removed (divergences #3–#6) |
| Forbidden vocabulary — rewards · BNPL · payments platform · payment rails · Visa/Mastercard · LOI · card network | ✅ **none present.** `Payment Gateway` and `CRM / Loyalty…` clear on the documented payment and loyalty exceptions (see §The one hard constraint); **no card network is named anywhere** |
| Negative / loss framing (loses, leakage, stolen, punish) | ✅ none |
| Numbers invented | ✅ **zero.** `$250,000` / `$45` / `5812` / `10MB` / `one to two business days` / `25%` are all transcribed from the prototype. `$500` and `$750` from comment #11 are **deliberately absent** |
| Contact details invented | ✅ none — the one address is `{{PENDING:email-join}}` |
| Consent / data language | ✅ **RESOLVED 2026-08-03.** §6's import checkbox now carries `Nothing is imported until you opt in and the Agreement is in place.`, wired with `aria-describedby`. **The page now breaks no brand rule** |
| Guarantees on outcomes | ✅ none. `usually within one to two business days` is hedged; nothing promises approval |
| Canadian spelling · Oxford comma | ⚠ **One exception, held:** `authorized` in the §2 helper (prototype string, legal register). `Void Cheque` is correctly Canadian. Oxford commas present |
| Audience register purity | ✅ merchant/operator throughout. No lender or consumer voice — correct, since the Three Voices device is Home-and-verticals only |
| Founder quotes / names | ✅ none. A form is not the place for founder voice |
| ALL CAPS | ✅ §8's seven section labels only — sanctioned for short labels |

**One flag the validator raises rather than fixes** (the consent line, previously flag #1, was applied 2026-08-03):

1. ⚠ **The page carries no proof and no number that argues for CredX** — no interchange figure, no stat strip, no trust marker. That is **correct for a form** (the merchant arrived warmed, from a rep, and friction is the enemy) but it means the page converts entirely on momentum built elsewhere. ⚠ **It stops being correct the moment `/join` is used as a cold entry point** — which the Home's hero primary CTA already does, against the Marketing Brief's premise and against Audrey's own C15 warming argument. **That tension is logged in the handoff and is not this page's to resolve**, but this is where it would show up.

---

## Status summary

| Section | Status |
|---|---|
| Page metadata | DRAFT — `noindex`, no OG, no schema. `robots.txt` / `sitemap.xml` exclusion is a build gate |
| 0 · Page chrome | DRAFT — header de-"onboarded"; eyebrow scent-matches the `Join the Movement` CTA |
| 1 · Business Identity | DRAFT — 11 locked fields + ✅ `Your Phone` (added 2026-08-03 on the client's request) |
| 2 · Ownership & Control | DRAFT — 3 locked fields, all mandatory. ⚠ `authorized` spelling held |
| 3 · Commercial Details | DRAFT — 5 locked fields. 🔴 `Risk Category` options missing |
| 4 · Payments Setup | DRAFT — 5 locked fields. 🔴 `Settlement Cadence` options missing |
| 5 · Technology Stack | DRAFT — 5 locked fields, none required |
| 6 · Data, Operations & Launch | DRAFT — 8 locked fields + ✅ consent line under the import checkbox (added 2026-08-03) |
| 7 · Document Uploads | DRAFT — 5 rows, 3 mandatory. 🔴 feasibility is a client question we owe an answer to |
| 8 · Review & Submit | DRAFT — disclaimer is client wording + legal-adjacent; do not rewrite further |
| 9 · Confirmation | DRAFT — headline replaced (the prototype's was the most clearly prohibited string in the document). 🔴 email domain wrong |
| — Login screen | ⛔ **OUT OF SCOPE** — Audrey comment #2 + task scope |
| — Pre-login hero | ⛔ **OUT OF SCOPE** — client comment #9, agreed in comment #10 |

**Deliverable state:** copy complete for all 8 steps plus the confirmation. **One placeholder** (`{{PENDING:email-join}}`) — the register in `copy/contact.md` gains an eighth token. **Two 🔴 blocking gaps before the design can be finished:** the `Risk Category` and `Settlement Cadence` option values, neither of which is in the source document. ✅ **Both recommendations approved and applied 2026-08-03** (the phone field and the consent line), so **the page now breaks no brand rule.** The field set matches the client's current spec, comment #7 included — **the prototype is the artifact that is out of date, not the page.**

⚠ **Design note, not copy — and it changes every screen.** The prototype is a **light UI** (white cards on light grey, navy header). `credx-website` is **dark-only** — the light theme was removed from the render on 2026-07-24 and deferred to a future update (memory `credx-light-theme-deferred`). **The design deliverable is the dark-theme version of these screens**, on the existing token set. Anyone comparing the mockup to the prototype side by side will see a different surface, and that is intended, not drift.
