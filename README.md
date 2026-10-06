# LLC Case Study, AI Infrastructure Financing

A buildable project for the September 2026 case study (cover plus report pages 5 and 6), with a Claude Code review committee that fact checks, challenges, edits, and layout checks the draft.

## What is in here

| Path | Purpose |
|---|---|
| content.js | All report text. Both builds read it. Edit text here only. |
| charts.js | Chart ideas, data points, and source links. Feeds the Word appendix and PowerPoint speaker notes. |
| data/chart_data.json | Data that drives native charts. A chart draws only when "verified" is true. |
| make_pptx.js | Builds the PowerPoint layout master (7.5 x 10.83 in, matches the report PDFs). |
| make_docx.js | Builds the Word version plus working notes (chart ideas, verification checklist, extra facts, continuity notes). |
| reference/ | The March and August reports. They define the house style. |
| outputs/ | The current built PowerPoint and Word files. |
| .claude/agents/ | The six committee seats. |
| .claude/commands/ | /committee and /eval-committee. |
| evals/ | A draft with nine planted errors and an answer key. |
| CLAUDE.md | Project rules that every session follows. |

## Setup

1. Install Node 18 or newer, then run `npm install`.
2. For visual QA, install LibreOffice and poppler. On macOS use `brew install --cask libreoffice` and `brew install poppler`.
3. Build with `npm run build`. Check text style with `npm run lint`. Render images with `npm run render`.
4. Open the folder in Claude Code and run `/agents` to confirm the six seats appear.

## Running the committee

Run `/committee` in Claude Code. You can add a focus, for example `/committee numbers only`.

1. Round 1 runs the fact checker, credit skeptic, and continuity editor in parallel. Each writes a report to reviews/ and edits nothing.
2. The chair (the main session) merges the findings into content.js. The fact checker wins on numbers.
3. Round 2 runs the style editor, then the chart builder, then a rebuild, then layout QA.
4. It repeats once if anything is still open, then stops and gives you a summary of changes and unresolved flags. It never publishes.

## Why this design

- Reviewers never edit, so agents do not overwrite each other, and every change goes through one chair with a log (reviews/chair-log.md).
- Seats have different tools and mandates. The fact checker must cite a URL for every number, and the skeptic is told to attack the argument.
- Opus runs the two judgment heavy seats. Sonnet runs the structured seats. Change the model line in any agent file to adjust cost or quality.
- Commit after each round so you can diff exactly what the committee changed.

## Testing the committee

Run `/eval-committee`. It points the fact checker, style editor, and skeptic at evals/content_planted.js, which has nine planted errors (wrong rating, yield, percent change, price, equity split, maturity, a dash, a colon, and a fabricated statistic). It scores what each seat caught and suggests prompt changes for misses. Keep adding planted errors as you find new failure types.

## Charts

Charts A to D start as dashed placeholders. When the fact checker confirms the numbers, the chart builder sets "verified": true in data/chart_data.json and the next build draws a native chart in the maroon house style. Chart ideas E, F, and G in charts.js are optional swaps. The Word file keeps placeholders for pasting.

## Known loose ends

- The cover photo is the March BDC image as a stand in. Replace assets/cover_mar-000.jpg or change the path in make_pptx.js and make_docx.js.
- Page numbers assume the cover is page 4 and the case study is pages 5 and 6.
- Several figures in content.js came through aggregator reposts of Bloomberg, Reuters, and the FT. Expect the fact checker to flag them. The Word file lists 14 items to verify.
- Add reference/september_recap.pdf when the recap is ready so the continuity editor can compare against it.
- Subagents are Markdown files with YAML frontmatter in .claude/agents/. See https://code.claude.com/docs/en/sub-agents for the current field list.
