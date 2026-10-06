# Charts review (2026-10-06)

Caveat: the fact checker could not open any page (WebFetch blocked). Every "confirmed" verdict rests on search results that name the original outlet. The fact checker recommends a human click through each chart source before publication. B, C and D are verified true only because the verdicts are all "confirmed"; revert to false if the click-through fails.

- A: verified false. Ids 53, 54, 55 (Oracle 6.5%, El Paso 7.534%, CoreWeave 9.25%) are unverifiable. Added a footnote on mixed dates and maturities. A spread version is preferred, but only Hyperion (about 225bps) and El Paso (about 287.5bps, aggregator only) spreads exist. No values changed.
- B: verified true. Relabeled "2026 to Jul 7". Sources changed to Reuters analysis of LSEG data and Goldman Sachs (no Yahoo). Footnote covers four issuers versus five. Ids 56 to 59 confirmed. Open issue: human click-through. Raw issuance, no yield or spread issue.
- C: verified true. Redefined as "2026 Capex Versus Debt Funding ($bn)": capex 750 and debt issuance estimate 250 (ids 9, 11, 14 confirmed). Dropped unverifiable $778bn. Footnote notes the five-hyperscaler scope. Open issue: human click-through of the Goldman page.
- D: verified true. Dropped GPU life bar (id 62). Four bars remain (ids 63 to 66 confirmed). Sources changed to Meta press release, IBTimes (Bloomberg derived) and Bloomberg via iTiger. The El Paso 20 year lease is press tier only (IBTimes).

Swap suggestions: none needed now. If A cannot be verified, consider swapping it for optional chart G (78 of 91 bonds wider, 22bps median, 12bps concession; Reuters and LSEG, confirmed ids 24 to 26), omitting the unverifiable IG share row. Chart E needs Bloomberg CDS data and is unverified.

Build: node make_pptx.js completed without errors.
