# Charts review (2026-10-06)

Caveat: the fact checker could not open any page (WebFetch blocked). Every "confirmed" verdict rests on search results that name the original outlet. The fact checker recommends a human click through each chart source before publication. B, C and D are verified true only because the verdicts are all "confirmed"; revert to false if the click-through fails.

- A: verified false. Ids 53, 54, 55 (Oracle 6.5%, El Paso 7.534%, CoreWeave 9.25%) are unverifiable. Added a footnote on mixed dates and maturities. A spread version is preferred, but only Hyperion (about 225bps) and El Paso (about 287.5bps, aggregator only) spreads exist. No values changed.
- B: verified true. Relabeled "2026 to Jul 7". Sources changed to Reuters analysis of LSEG data and Goldman Sachs (no Yahoo). Footnote covers four issuers versus five. Ids 56 to 59 confirmed. Open issue: human click-through. Raw issuance, no yield or spread issue.
- C: verified true. Redefined as "2026 Capex Versus Debt Funding ($bn)": capex 750 and debt issuance estimate 250 (ids 9, 11, 14 confirmed). Dropped unverifiable $778bn. Footnote notes the five-hyperscaler scope. Open issue: human click-through of the Goldman page.
- D: verified true. Dropped GPU life bar (id 62). Four bars remain (ids 63 to 66 confirmed). Sources changed to Meta press release, IBTimes (Bloomberg derived) and Bloomberg via iTiger. The El Paso 20 year lease is press tier only (IBTimes).

Swap suggestions: none needed now. If A cannot be verified, consider swapping it for optional chart G (78 of 91 bonds wider, 22bps median, 12bps concession; Reuters and LSEG, confirmed ids 24 to 26), omitting the unverifiable IG share row. Chart E needs Bloomberg CDS data and is unverified.

Build: node make_pptx.js completed without errors.

## Round 2 (2026-10-06, from reviews/fact-check-r2.md)

- A: verified false. Oracle 6.5% still unverifiable (id 57). El Paso 7.534 and CoreWeave 9.25 now have press support. Footnote now says El Paso spread is press (PitchBook), no longer "aggregator only". Sources array still names aggregators; fact checker suggests Bloomberg, PitchBook and Meta, not changed because the Oracle source is unresolved.
- B: verified true (unchanged). Ids 45 to 49 confirmed. Human click-through still recommended.
- C: verified true (unchanged). Ids 50 to 52 confirmed. Human click-through still recommended.
- D: verified false. El Paso "lease 20" was a conflict (id 54, C1): Meta's El Paso release gives a four year initial term plus four extensions, potential 20 years. Replaced with "El Paso initial lease" = 4 and a separate "El Paso potential term (with four extensions)" = 20, both sourced to Meta's El Paso release (confirmed, via search). Internal title now "Lease Term Versus Debt Maturity (years)". Stays false because Hyperion bond maturity 24 is unverifiable (id 56, 23 or 24 years, maturity month not found). Footnote states the approximation. Can go true if the fact checker accepts it or the maturity is confirmed; I did not set it on my own judgment.

Swap suggestions: if A cannot be verified, consider optional chart G (78 of 91 bonds wider, 22bps median, 12bps concession; ids 17, 18 confirmed).
Note: the fact checker's Chart readiness section says D is "otherwise fine" on the other three values, but its item table marks id 56 unverifiable, so D is held false.
