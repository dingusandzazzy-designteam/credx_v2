---
timestamp: 2026-08-18T19-31-31Z
slug: credx-website-plan-06-design-direction-md
---
# Critique — plan/06.Design-Direction.md §6 (page-type composition spec)

Method: DEGRADED single-context (no sub-agent tool permitted in this session).
Applicable max 32/40 — heuristics 5 (Error Prevention) and 9 (Error Recovery) scored n/a: the pillar pages carry no destructive or input actions.

Score: 22/32 (69%) — Acceptable.

| # | Heuristic | Score |
|---|---|---|
| 1 | Visibility of System Status | 1 |
| 2 | Match System / Real World | 4 |
| 3 | User Control and Freedom | 3 |
| 4 | Consistency and Standards | 4 |
| 5 | Error Prevention | n/a |
| 6 | Recognition Rather Than Recall | 1 |
| 7 | Flexibility and Efficiency | 2 |
| 8 | Aesthetic and Minimalist | 4 |
| 9 | Error Recovery | n/a |
| 10 | Help and Documentation | 3 |

## Verdict on the spec
Directionally right, wrongly weighted. The uniformity it names is real and measured. But it proposes a NEW component (compact pillar hero) to solve an orientation problem while `.nav__link--active` is styled in style.css:456 and used on ZERO pages — the purpose-built affordance is dead code.

## P0/P1 findings
- P1 · No page marks itself as current. `.nav__link--active` unused sitewide; `/evp` and `/` lack even `aria-current`.
- P1 · The Pillar type conflates two modes. `/about` + `/how-it-works` are Read; `/evp` is Persuade (CTA "Become a CredX Partner", stat grid, value stack). One composition cannot serve both.
- P1 · The uniformity is in the BODY, not the hero. Centred H2 -> 65ch prose -> 16:9 image, x4 per page, ~90% of a 7,300px scroll. The hero is ~10%.
- P2 · Five levers collapse to three axes (opening / density / ornament budget). Over-specified specs get partially applied.
- P2 · No acceptance test. The gate says "agreed -> unfreeze" with no falsifiable check.
- P2 · No in-page navigation on 7.1-7.7k px Read-mode pages; FAQ sits at ~85% depth.
- P3 · Unstated cost: adopting the compact hero retires three already-delivered hero images.

## Detector
3 findings, all `overused-font` (Fraunces/Inter), one per page. False positive in context: those tokens are the client-approved v2 system and are closed by the same constraint the spec is written under.
DEGRADED detector run — htmlparser2, css-select, css-tree, domutils unavailable; regex fallback. Custom properties, selector matching and computed contrast NOT evaluated. Findings are an undercount.
