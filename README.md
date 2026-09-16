# CredX — website source

This repository is the source for the CredX website. It is plain HTML, CSS and JavaScript with
**no build step**: the files in `credx-website/` are the site, byte for byte, exactly as a browser
receives them.

---

## 1 · The one thing to get right

**The repository root is not the site. `credx-website/` is.**

Point the hosting project's **root directory** at `credx-website/`. Everything inside it resolves
relative to that folder and nothing reaches above it, so the folder can be published as-is.

| Setting | Value |
|---|---|
| Root directory | `credx-website` |
| Build command | none |
| Framework preset | none / static |
| Output directory | the root directory itself |
| Node / package install | not needed, there is no `package.json` |

If the root directory is left at the repository root, the site will not be found: the root holds
only this file and configuration.

---

## 2 · URL form — trailing slash

Pages are directories with an `index.html`, so `/evp/index.html` can answer at both `/evp` and
`/evp/`. Pick one shape and 301 the other, or the same page exists at two addresses.

**Every `rel="canonical"` and every `sitemap.xml` entry in this repository is written without a
trailing slash** — `https://credxtech.com/evp`. The host should therefore serve the slashless form
and redirect `/evp/` → `/evp`.

⚠ `credx-website/vercel.json` contains `{"trailingSlash": true}`, which does the opposite. It was
added for a path collision that no longer exists and it is only read by Vercel. **On any other
host it is inert, and the slashless form is the one to configure.**

⚠ When verifying a redirect, use a cache-buster (`?x=1`). A cached `200` is indistinguishable from
a configuration that never applied.

---

## 3 · Layout

```
credx-website/            ← the site root
├── index.html            home
├── style.css             the site stylesheet (120 KB)
├── script.js             site behaviour: nav, reveals, calculator (21 KB)
├── 404.html              404 page, root-relative paths
├── robots.txt
├── sitemap.xml
├── assets/logo/          logos used by every page
├── images/               photography and graphics
│
├── about/  evp/  how-it-works/  merchants/  lenders/  pos-isv/
├── contact/  join/  thank-you/  calculator/
├── learn/                hub, plus blog/, glossary/, case-studies/, data-economy/
│
└── automotive/  pos/  sports/  entertainment/
```

Each page is a directory containing `index.html`. Editing a page means editing that file.

**Stylesheets.** The site has one: `credx-website/style.css`. The four campaign pages listed last
each carry **their own** `style.css` (51–54 KB) and `script.js`, loaded as siblings from inside
their own folder. They are a separate, older design system and do not share the site's stylesheet.
Changing `credx-website/style.css` does not affect them, and vice versa.

**Third-party scripts** are loaded from a CDN at the bottom of each page: GSAP with ScrollTrigger,
and Lenis for smooth scrolling. There is nothing to install.

---

## 4 · The campaign pages

`automotive/` `pos/` `sports/` `entertainment/` are campaign landing pages. They are **not in
`sitemap.xml`**, **not linked from the site's navigation or footer**, and are meant to be reached
only through a campaign link. Treat them as a separate surface that happens to share the host.

---

## 5 · What is not in this repository

Working documents — planning, copy drafts, research, design notes, image briefs — are deliberately
excluded by `.gitignore` and are not part of the deliverable. **Only files a browser needs to
render a page are tracked**, because everything tracked here is served as public plain text.

If a new file is added, the same test applies: does a browser need it? Directories named
`_masters/` and `_archive/` are ignored by design.

---

## 6 · Editing

1. Open the page's `index.html` and edit it.
2. There is no compile step and no template layer. What you write is what ships.
3. Navigation and footer markup are repeated on each page rather than included from one file, so a
   navigation change touches every page.
4. If a page's copy changes, check whether its `<title>`, `<meta name="description">`, Open Graph
   tags and `rel="canonical"` still describe it.

---

## 7 · Domains

`credxtech.com` is the canonical host, with no hyphen. Any other domain pointing at this site
should 301-redirect to it rather than serve content, or it becomes a duplicate host competing with
the canonical one. Those redirects are a DNS and hosting task, not a change in this repository.
