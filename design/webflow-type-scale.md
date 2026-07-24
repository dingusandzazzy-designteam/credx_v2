# CredX — Global Type Scale (Webflow native tag setup)

Source of truth: the **Global Style Guide** page (`cx-sg__*` classes) on the automotive Webflow site.
This document is the spec for setting up **native HTML tag selectors** in the Webflow Designer so any
`<h1>`, `<p>`, etc. comes pre-styled with no class needed.

## Unit rules (applied throughout this doc)

- **Pixels only** — no `rem`, no `em`, no `clamp()`, no unitless ratios.
- **Even numbers only.**
- Conversion basis: `1rem = 16px`. Fluid `clamp()` sizes were collapsed to their **desktop target**, then rounded to the nearest even px. Line-height (was a ratio) converted to px and rounded to the nearest even. Letter-spacing (was `em`) converted to px; uppercase styles kept at `2px` to preserve tracking.

---

## ⚠️ Prerequisite — add the fonts in the Designer first

The "wrong font" you are seeing is almost certainly because **Fraunces is not registered in the Designer**.
The site's published custom code loads it, but the Designer font dropdown only shows fonts added in Site Settings.

**Webflow Designer → Site Settings → Fonts → Add Google Font:**

| Family | Weights to enable |
|---|---|
| **Fraunces** | 400 (Regular), 500 (Medium), 600 (Semibold) |
| **Inter** | 400 (Regular), 500 (Medium), 700 (Bold) |

After this, both families appear in the **Font family** dropdown of the Style panel.

## How to set a native tag selector

1. Add (or select) the element — e.g. a **Heading** set to **H1**.
2. In the **Style panel → Selector** field, make sure **no class is applied**. It will read **"All H1 Headings"**.
3. With *All H1 Headings* active, enter the values from the table below. They now apply to **every** `<h1>` site-wide with no class.
4. Repeat per tag (H2…H6, paragraph = "All Paragraphs", link = "All Links").

> Note: a named class always overrides a tag selector. Elements that carry a `cx-sg__*` (or any) class keep their class styling.

---

## 1. Tag selectors (set these natively — no class)

| Tag | Font family | Size | Line-height | Weight | Letter-spacing | Transform | Color (dark) | Color (light) |
|---|---|---|---|---|---|---|---|---|
| **H1** | Fraunces | 72px | 76px | 600 Semibold | -2px | — | `#f8f9fc` | `#0b0c16` |
| **H2** | Fraunces | 48px | 52px | 500 Medium | 0 | — | `#f8f9fc` | `#0b0c16` |
| **H3** | Fraunces | 36px | 42px | 500 Medium | 0 | — | `#f8f9fc` | `#0b0c16` |
| **H4** | Fraunces | 24px | 30px | 500 Medium | 0 | — | `#f8f9fc` | `#0b0c16` |
| **H5** | Inter | 18px | 24px | 700 Bold | 0 | — | `#f8f9fc` | `#0b0c16` |
| **H6** | Inter | 14px | 16px | 700 Bold | 2px | UPPERCASE | `#a79ab4` | `#6d5ea4` |
| **P** (paragraph) | Inter | 16px | 26px | 400 Regular | 0 | — | `#a79ab4` | `#323665` |
| **A** (link) | Inter | inherit | inherit | 700 Bold | 0 | — | `#d667ad` | `#d667ad` |

All four margins = **0** on every heading and paragraph.
`A` (link): also set **Text decoration: none**. Heads-up: a global link color repaints *every* link (nav, footer, etc.) — only set the `A` tag if that is what you want; otherwise keep links on a class.

### Optional responsive (set at Webflow breakpoints, even px)

| Tag | Tablet (≤991px) | Mobile (≤479px) |
|---|---|---|
| H1 | 56px / lh 60px | 40px / lh 44px |
| H2 | 40px / lh 44px | 32px / lh 36px |
| H3 | 30px / lh 36px | 26px / lh 32px |

---

## 2. Body scale (keep as classes — no semantic tag)

| Class | Font | Size | Line-height | Weight | Color |
|---|---|---|---|---|---|
| `.body-xl` | Inter | 20px | 32px | 400 | `#a79ab4` |
| `.body-l` | Inter | 18px | 28px | 400 | `#a79ab4` |
| `.body-m` *(= P default)* | Inter | 16px | 26px | 400 | `#a79ab4` |
| `.body-s` | Inter | 14px | 22px | 400 | `#a79ab4` (≈90% opacity) |
| `.body-xs` | Inter | 12px | 18px | 500 | `#a79ab4` (≈82% opacity) |

## 3. Labels (classes, uppercase)

| Class | Font | Size | Line-height | Weight | Letter-spacing | Transform | Color |
|---|---|---|---|---|---|---|---|
| `.label-l` | Inter | 16px | 20px | 700 | 2px | UPPERCASE | `#f8f9fc` |
| `.label-m` | Inter | 12px | 14px | 700 | 2px | UPPERCASE | `#a79ab4` |
| `.label-s` | Inter | 12px | 14px | 700 | 2px | UPPERCASE | `#d667ad` |

## 4. Special text (classes)

| Class | Font | Size | Line-height | Weight | Letter-spacing | Transform | Color |
|---|---|---|---|---|---|---|---|
| `.eyebrow` | Inter | 12px | 14px | 700 | 2px | UPPERCASE | `#d667ad` |
| `.card-kicker` | Inter | 12px | 16px | 700 | 2px | UPPERCASE | `#d667ad` |
| `.card-title` | Fraunces | 24px | 28px | 500 | 0 | — | `#f8f9fc` |
| `.card-body` | Inter | 16px | 24px | 400 | 0 | — | `#a79ab4` |
| `.number` (data callout) | Fraunces | 80px | 80px | 500 | 0 | — | `#f8f9fc` |
| `.accent` (inline span) | inherit | inherit | inherit | inherit | — | — | `#d667ad` |

## 5. Buttons (classes — built on Link/Button, not a tag)

| Class | Font | Size | Weight | Height | Padding (V / H) | Radius | Background | Text | Border |
|---|---|---|---|---|---|---|---|---|---|
| `.button` (primary) | Inter | 16px | 700 | min 48px | 16px / 32px | 1000px | `#943f78` | `#f8f9fc` | none |
| `.button-secondary` | Inter | 16px | 700 | min 48px | 16px / 32px | 1000px | transparent | `#f8f9fc` | 2px solid `#f8f9fc` |
| `.button-small` | Inter | 14px | 700 | min 40px | 12px / 24px | 1000px | `#323665` | `#f8f9fc` | none |

All buttons: line-height **16px**, text-decoration **none**.

---

## Color tokens (reference)

| Token | Hex | Use |
|---|---|---|
| Ink | `#0b0c16` | darkest surface / light-mode text |
| Surface 1 | `#13141f` | — |
| Surface 2 | `#1a1c2c` | — |
| Surface 3 | `#23253a` | — |
| Cloud | `#f8f9fc` | light text on dark / light surface |
| Navy | `#323665` | light-mode body text |
| Magenta | `#943f78` | primary button |
| Bright Magenta | `#d667ad` | accent, links, kickers |
| Purple | `#6d5ea4` | light-mode muted |
| Soft Lavender | `#a79ab4` | dark-mode body/muted |

---

### Notes

- Original style-guide values were `rem`/`clamp`/ratios; this doc is the **even-px** translation per the unit rules above. Exact originals live in the `cx-sg__*` classes on the Global Style Guide page.
- Once the native tag selectors are set, the `credx-global-type-scale` custom-code block (site head) becomes redundant and can be removed to avoid duplicate definitions.
