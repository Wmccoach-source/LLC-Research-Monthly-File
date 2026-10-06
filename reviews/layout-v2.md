# Layout QA v2 (slides 2 to 4 = report pages 5 to 7)

Render: scripts/render.sh, compared with ref_aug-6 to ref_aug-8. Scale is 110 px per inch.
Fonts, heading sizes (20 pt), title (26 pt), body (10.5 pt justified), margins, maroon and cream all match the reference. No logo, page box or title collisions on any slide.

## Slide 2 (page 5) FAIL
1. "Overview body" runs 10 lines and its last line ("lease length, and operator risk.") overprints "Heading How Lenders Size the Debt" (text ends near y 3.22 in, heading box starts 3.12 in). Fix: heading h2 y 3.12 to 3.32, "Lender sizing body" y 3.52 to 3.72.
2. Uneven gaps after that shift. "Lender sizing body" ends near 5.3 in and leaves a 0.3 in gap before the next heading. Set heading h3 y 5.55 to 5.62 and "Why it matters body" y 5.95 to 6.02 (ends about 7.1 in). Charts stay at y 7.4.
3. Chart placeholder D and B are aligned with each other and the body columns (right edge 758 px vs 756 px body, acceptable). No change.

## Slide 3 (page 6) FAIL (large empty area, no overlaps)
1. "Spreads body" ends near 9.25 in and about 1 in of empty space sits above the sources rule (10.22 in). The reference pages fill to the rule. Fix: set rowH 0.28 to 0.31 in the "Deal table" options (adds about 0.36 in), and raise heading h2 offset from tEnd + 0.38 to tEnd + 0.45 and "Spreads body" from tEnd + 0.78 to tEnd + 0.88. Body then ends near 9.7 in. If the table row grows past one line in PowerPoint, re-check "Table note".
2. "Deal table" fits its width, no wrapped cells, right edge aligns with body. "Table note" is two lines and clears the heading. Table title to table spacing is fine.

## Slide 4 (page 7) FAIL (cramped bottom)
1. "Callout right body" runs 12 lines and ends about 10.09 in, only 0.13 in above the sources rule (10.22 in). It is also two lines longer than "Callout left body". Fix: pull the page up by 0.15 in. Chart slots C and A y 3.5 to 3.35, heading h2 y 5.72 to 5.57, "Risk body" y 6.12 to 5.97, both callout headings y 7.62 to 7.47, both callout bodies y 8.02 to 7.87. Right column then ends about 9.94 in.
2. Charts C and A are native, aligned with each other and the columns. The two footnotes sit on one baseline and do not collide (left ends 403 px, right starts 421 px). The category label "Beacon Point, AA- tenant (Jun 2026)" wraps to two lines, which is acceptable.
3. The sources rule looks lighter under the left column in the render. Likely a render artifact. Recheck after the shift in item 1.

## Widows and split units
None found. All last lines carry at least three words, and no figure is split from its unit.

## Overall verdict
FAIL, three fixes needed, all coordinate only in make_pptx.js. Slide 2 has a real text overlap (most urgent), slide 4 is cramped against the sources line, and slide 3 has a large empty band at the bottom. Style drift against the August reference is minimal. Heading to body gaps are slightly tighter than August, which is acceptable for the denser content.
