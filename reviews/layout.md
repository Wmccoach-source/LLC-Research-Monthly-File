# Layout review

Rendered via scripts/render.sh and compared with ref_aug-5/6 and ref_mar-7.

## Slide 1 (cover): PASS
Cover box, logo, firm name, rule and title are centred and fit with no clipping. Photo is full bleed.

## Slide 2 (p.5 AI Infrastructure Financing): PASS (minor notes)
- No text clipping. Logo, "Page number box" and title do not collide. Sources line and footer bar are clear (charts end about y=9.9in, Sources at 10.26in).
- Charts C and D are aligned with the text columns and each other. Footnotes are italic 7pt and do not collide with the chart.
- Optional: the gap above the "Why It Matters for Credit" heading is about 20px larger than the gap above "AI Infrastructure and the Credit Markets". Try moving the "Why It Matters" heading and body up by 0.15in, or add 0.1in to the heading above.
- Body text is a little tighter and smaller than the reference, with a smaller left margin gap. Acceptable.

## Slide 3 (p.6 AI Debt Issuance): PASS (minor notes)
- No overflow. Columns end about y=9.75in, clear of Sources.
- "Chart placeholder A" (dashed box) is top-aligned with chart B. Heights match and the left and right column edges line up. Expected, since A is still a placeholder.
- "Meta SPVs Reprice" and "Oracle Under Pressure" body: justified text in narrow columns gives visible word gaps (for example "Meta has funded two campuses through joint"). Optional fix: set align to left for these two bodies, or widen the column gutter by 0.05in. Not blocking.
- Chart B footnote runs to 3 lines and sits close to the "Risk Considerations" heading (about 15px). Optional: shorten the footnote or move "Risk Considerations" down 0.08in.

## Drift versus reference
Colours (maroon, cream background, footer gradient), Times-style serif, heading hierarchy and 0.5in margins match. Page number box and logo placement match the reference. The reference pages have more white space between sections because their body font is slightly larger. No visible drift.

## Overall verdict: PASS
There are no blocking issues. The three notes above are optional polish. Note that object names are mostly unset in make_pptx.js, so the names used above are descriptive.
