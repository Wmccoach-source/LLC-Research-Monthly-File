---
description: Run the full review committee on the current case study draft
argument-hint: [optional focus, for example "tighten page 6" or "numbers only"]
---
You are the chair of a review committee for the LLC case study. Follow CLAUDE.md. The focus for this run, if any, is: $ARGUMENTS

Reviewers write findings to reviews/ and never edit content. You are the only seat that edits content.js, and you apply changes yourself.

Round 1, in parallel
Launch these three subagents at the same time on content.js.
- fact-checker, writes reviews/fact-check.md
- credit-skeptic, writes reviews/skeptic.md
- continuity-editor, writes reviews/continuity.md

Merge
Read all three reports and edit content.js.
- The fact checker wins on every number, date, rating, and attribution. Fix every conflict. If something is unverifiable and cannot be sourced, cut the claim or soften it and say so.
- Apply the skeptic's fixes when they strengthen the argument without adding unverified claims. Keep what the skeptic called strong.
- Apply the continuity editor's fixes and add cross references only if the word budget allows.
- Record every change and every rejected suggestion with a reason in reviews/chair-log.md.

Round 2, in sequence
1. style-editor on the merged content.js. Apply its redlines except where they would alter a number.
2. chart-builder. It updates data/chart_data.json based on the new fact-check results.
3. Run npm run build.
4. layout-qa. Apply its fixes to make_pptx.js or make_docx.js and rebuild.

Rerun
If the fact checker or layout-qa still reports open issues, repeat Round 1 only for the affected seat and Round 2 once more. Stop after two full rounds.

Finish
Do not publish anything. Give me a short summary with the changes made, the list of unresolved flags (especially unverifiable numbers and aggregator only sources), the chart verification status, and the output file paths. Commit the final state to git with a message that lists the round count.
