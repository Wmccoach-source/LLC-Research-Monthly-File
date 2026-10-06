# Charts v2

Source of verdicts: reviews/fact-check-v2.md (ids 113 to 131 and the Chart readiness section). Confirmations rest on search text, not opened pages. Revert A and C to false if the human click-through fails.

- D (page 5, leverage): verified false. Dropped the Abilene bar (ids 14, 15, 117 trade press only), relabeled xAI "Apollo share of xAI chip purchase", relabeled Aligned "Aligned ABS senior LTV cap", footnote now says the bars use different measures (loan to cost, loan to value cap, share of purchase). Open issue: Aligned 70 is unverifiable (id 115, S&P presale not opened). Beacon Point 95 and Saline 85 are confirmed.
- B (page 5, issuance): verified false. Values unchanged. Relabeled "2026 to Aug 20" and footnoted the 2027E as the July estimate; scope note (four issuers versus five) kept. Open issue: 223 is aggregator only (id 119). Fallback if unconfirmed: $194bn through July 7 (Reuters), relabeled.
- C (page 7, project bond yields): verified true. All four yields confirmed (ids 122 to 125). Footnote adds that yields span Oct 2025 to Sep 2026 with Treasury moves in between, so spreads (T+165, T+225, T+287.5) are the fair comparison. Source "Hut 8 via press" changed to "Hut 8 release". Open issue: cannot chart spreads directly because Digital Drive has no Treasury spread (its 270bps is a gap to similarly rated debt).
- A (page 7, GPU loan spreads): verified true. All five values confirmed (ids 127 to 131), no data changes. Open issue: human click-through of ids 50, 51, 52, 65, 108.

Swap suggestions: none required. Chart D would be stronger with a like for like measure (all LTC) if the Aligned figure stays unconfirmed.

Build: node make_pptx.js completed with no errors.
