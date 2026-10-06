# LLC Case Study Project

This repo builds the case study section of the Leveraged Lion Capital monthly research report. The current case study is AI Infrastructure Financing (cover plus three pages, report pages 4 to 7).

## Files
- content.js holds all report text. Both builds read from it. Edit text here only.
- charts.js holds chart ideas, data points, and source links (appendix and speaker notes).
- data/chart_data.json drives native charts. A chart renders only when "verified" is true.
- make_pptx.js builds the PowerPoint layout master. make_docx.js builds the Word version with working notes.
- reference/ holds the March and August reports, which define the house style. Do not cite or cross reference the March report in report text.
- Report text must read as current for the publication month. Avoid stale data cutoffs (for example "through July 7") in body text.
- reviews/ holds committee output. evals/ holds the planted error test.

## House style (never break these in report text)
- No dashes of any kind and no colons. The "Sources:" footer label is the only exception. BBB- as a rating is fine.
- Page is 7.5 x 10.83 inches. Times New Roman. Body 10.5 pt justified, section headings 20 pt, title 26 pt bold. Maroon 5A2020, cream background F4F1EC.
- Dense, stat heavy paragraphs with specific figures, named deals, and period changes. Each page ends on a risk or divergence takeaway.
- Every page has a sources line.

## Committee rules
- Reviewers (fact-checker, credit-skeptic, continuity-editor, style-editor, chart-builder, layout-qa) write to reviews/ and never edit content.js.
- Only the chair (the main session) edits content.js, then rebuilds with npm run build.
- The fact checker wins on numbers. An aggregator only claim is not confirmed.
- Never set a chart to verified without the fact checker's confirmation.
- Never invent data. If it cannot be sourced, cut or soften the claim.
- Never publish. Final approval is Will's.
- Run /committee for a full pass and /eval-committee to test the committee itself.
