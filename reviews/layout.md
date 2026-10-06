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

---

# Round 2

Rendered with scripts/render.sh; compared with ref_aug-5/6 and ref_mar-7. Chart D is a placeholder, B and C are native charts.

## Slide 1 (cover): PASS
Cover box, logo, firm name, rule and two-line title are centred and unclipped. No change from round 1.

## Slide 2 (p.5 AI Infrastructure Financing): PASS (minor notes)
- No clipping or overflow. Logo, page number box and title are clear of each other. Sources line and footer bar are clear.
- Section gaps are now even (Overview, Credit Markets, Why It Matters). Body text ends about y=7.0in.
- Chart C (native, left) and the chart D placeholder (right) are top and bottom aligned, and their titles share a baseline. The C footnote (2 lines) stays inside the placeholder height.
- Optional: the gap between the end of "Why It Matters" body and the chart titles is about 0.6in, larger than the roughly 0.2in gaps between sections. Try moving both chart titles, chart C, the placeholder and the footnote up by 0.25in, or leave as is.
- Placeholder text "Insert chart" is intentional.

## Slide 3 (p.6 AI Debt Issuance): PASS (minor notes)
- No overflow. Column bottoms end about y=9.8in, clear of Sources.
- Chart A placeholder (left) and chart B (right) are top-aligned and have matching heights; edges line up with the text columns.
- Cramped: the chart titles sit only about 0.1in under the last line of the "Market Activity" body. Try moving the chart titles, chart B and placeholder A down 0.1in (there is about 0.35in of room above "Risk Considerations").
- Chart B footnote is 3 lines and sits about 0.2in above "Risk Considerations". Acceptable. Shortening it to 2 lines would help.
- "Meta SPVs Reprice" and "Oracle Under Pressure" bodies are justified in narrow columns and show wide word gaps (for example "Meta has funded two campuses through joint / ventures with private capital. Hyperion in"). Optional: set align left for both bodies.
- No one-word last lines or figures split from units.

## Drift versus reference
Colours, serif font, heading hierarchy, 0.5in margins, page number box and logo match the reference. Body text is slightly smaller and denser than the August reference, which is acceptable. No visible drift.

## Round 2 verdict: PASS
No blocking issues. The optional fixes are the 0.1in chart shift on slide 3, the 0.25in chart lift on slide 2, and left alignment of the two narrow columns on slide 3. Object names are still mostly unset in make_pptx.js, so the names above are descriptive.
