---
description: Test the committee against a draft with planted errors and score what it catches
---
You are running an evaluation of the review committee. Do not touch content.js.

1. Read evals/answer_key.md so you know which errors were planted. Do not share it with the reviewers.
2. Launch fact-checker, style-editor, and credit-skeptic in parallel on evals/content_planted.js. Tell each to write its report to reviews/eval/ instead of reviews/ (fact-check.md, style.md, skeptic.md).
3. Compare each report with the answer key. Score each planted error as caught, partly caught (flagged but wrong fix), or missed.
4. Write reviews/eval/score.md with a table (error id, caught by which seat, score), the total caught out of the total planted, and any false alarms where a seat flagged something that was actually correct.
5. Suggest one change to a seat's instructions for each missed error.
