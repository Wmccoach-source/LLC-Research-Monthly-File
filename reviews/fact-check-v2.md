# Fact Check v2: AI Infrastructure Financing case study (three page rewrite)

Reviewed 2026-10-06 by the fact-checker seat. Files: content.js (page1, page2 with the deal table, page3), data/chart_data.json (charts D, B, C, A), and the chart rows in charts.js. Earlier files (fact-check.md, fact-check-r2.md) are not overwritten.

## Summary

I checked 131 items. Every number, date, rating and attribution in content.js is covered, along with every table cell and every chart value. **105 are confirmed, 8 conflict and 18 are unverifiable.** The GPU loan ladder is fully confirmed against CoreWeave and Lambda company releases, as found in search text: SOFR+225, 300, 400, 450 and 550, the A3, Ba2, BB+ and Baa2 ratings, and the five year loan against three year contracts. So are the El Paso pricing (7.534%, T+287.5, $20bn peak orders, 1.6x), Digital Drive (98.5, 9.25%, BB-, about 270bps), Beacon Point (6.129%, T+165, 95% LTC, Baa2), KBRA's BX 2026-VLT10 haircut (27.2%, 108.4%), and Oracle's downgrade and Q1 figures. Chart A and chart C can be set to verified true. Charts B and D cannot.

The most serious problems:

1. **The Saline pricing is stale.** The table says "Guided ~7.5%". Bloomberg (via Gulf Times) reports that Bank of America sold the $14bn of bonds at 98.75 with a 7.5% coupon, due 2045. Pimco took about $10bn.
2. **The Hyperion secondary claims are aggregator only.** These are "low 90s by late September" and "near T+230" (page2.p1, callL), plus the "close to ten points" loss that follows from them. The only press-adjacent print I found is a 94.4 record low, and its date is disputed (late July against late September). There is also an arithmetic problem. T+225 at issue against T+230 now means almost all of the price drop came from Treasuries, not spread.
3. **The Oracle "T+95 for BBB peers" figure is not a peer 10 year spread.** The source (TwentyFour AM, an asset manager) says the US BBB corporate index trades around +95. That is an all maturity index level. The same source says Oracle's own outstanding 10 year traded near +175 before the deal.
4. **The CoreWeave "325bps gap between its best and worst secured loans" is wrong in scope.** The arithmetic (550 minus 225) is right. But CoreWeave's DDTL 2.0 carried SOFR+13.00% on its non-IG customer loans (10-K, via research notes), so SOFR+550 is not its worst secured loan.
5. **Abilene is inconsistent and aggregator sourced.** The text says "about two thirds" and chart D shows 64. The inputs ($9.6bn of loans, about $5bn of equity, $15bn total) come only from trade press and aggregators.
6. **Chart B's "2026 to date 223" is aggregator only.** I could not surface the LSEG figure via CNBC in an original, and it runs only through August 20.
7. **Meta's 2066 at T+147 is unverifiable.** Search shows only the +180 initial talk. The $96bn against $125bn book is confirmed (Bloomberg).
8. Smaller items. The El Paso "four times average" is Bloomberg's average for all bond sales this year, not "large 2026 deals". "Highest loan to cost on record" is Hut 8's own claim for an HPC data center bond. "A+ rating on Meta's lease" should say the rating is on the notes. The xAI "advance" label treats a "capital solution" as debt.

**Method caveat.** WebFetch was blocked by the egress proxy for every primary host tried (investors.coreweave.com, lambda.ai, apollo.com, businesswire.com). So no page was opened in full. Every verdict rests on WebSearch result text that names the original document or outlet. "Confirmed" means the figure appears in search text attributed to a named primary or press original. A human should click through each chart value before publication, using the URLs below. Each takes under a minute.

## Most serious conflicts and fixes

| # | Location | Problem | Fix |
|---|---|---|---|
| C1 | page2.table Saline row, "Pricing" | "Guided ~7.5%" is superseded. Bloomberg reports $14bn sold by Bank of America at 98.75 with a 7.5% coupon, due 2045, Pimco about $10bn | Cell: "7.5% coupon at 98.75". Delete "Saline pricing is guidance" from the table note. Optionally add "due 2045" |
| C2 | page3.callR | "The 325bps gap between its best and worst secured loans". DDTL 2.0 non-IG customer loans were SOFR+13.00% (CoreWeave 10-K, per research-structures) | "The 325bps gap between its A3 and Ba2 facilities this year is the market's price for counterparty risk." |
| C3 | page2.p2 | "against roughly T+95 for BBB peers". The source says the US BBB corporate index (all maturities) was near +95. Oracle's own 10 year traded near +175 before the deal, so the new issue priced inside its own curve | "against about +95 for the US BBB corporate index". Or cut the comparison |
| C4 | page1.p2 vs chart D | "about two thirds of cost" against a chart value of 64. $9.6bn of $15bn is 64%, and $9.6bn of ($9.6bn plus $5bn) is 66%. Inputs are aggregator or trade press only | Pick one basis and say it. Better, cut Abilene from chart D or swap in a bar with a stated ratio. Text: "nearly two thirds" if it is kept |
| C5 | page2.p1 | "against an average book of close to four times for large 2026 deals". Bloomberg says the average for bond sales this year was closer to four times | "against close to four times for the average bond sale this year" |
| C6 | page1.p2 | "the highest loan to cost on record for a data center bond". Hut 8 and Milbank say it is the highest LTC ever for a high performance computing data center bond. One Hut 8 results summary also puts River Bend near 95% | "which Hut 8 calls the highest on record for an HPC data center bond" |
| C7 | page2.p2 | "El Paso, with an A+ rating on Meta's lease". The S&P A+ (and Fitch AA-) is on the Sopaipilla notes, not on the lease | "El Paso, rated A+ on the strength of Meta's lease" |
| C8 | chart_data D label "xAI chip vehicle (advance)" | Apollo calls the $3.5bn a "capital solution", which may not all be senior debt. 64.8% is derived. The body text ("covers about 65%") is fine | Relabel "xAI chip vehicle (Apollo share of purchase)". Keep "derived" in the footnote |

## Unverifiable items that matter most

- **Hyperion late September price and spread** (page2.p1, callL ids 42, 105, 106). The only sources are rallies.ai (91 cents, 7.55%, about 230bps) and Protos (94.4 record low, date unclear). Protos ties the low to a day Meta stock rose 9%, which points to late July, not September. Fix: "traded as low as about 94 cents by late summer" with a Bloomberg cite, or cut. If a Bloomberg print is found, add that the spread barely moved, so the loss was mostly rates.
- **Meta 2066 at T+147 and October 2025 at T+110** (page2.p2). Only the +180 initial talk surfaced. Keep the book sizes and drop the spreads, or cite the Bloomberg pricing story directly.
- **Oracle long bonds above 8% for the first time** (page3.p1). Search found aggregators only (blofin, parameter.io, zerohedge). Research-market cites Bloomberg via Yahoo ("2056 bonds yielded 8% for the first time"), but I could not surface it. The 2056s carry a 6.70% coupon (Oracle FWP, sec.gov).
- **Aligned 70% LTV and A- senior class.** These match S&P language ("appraised LTV constrained at 70.0%"; A- on A-1-L/C, A-1-V and A-2-I; BBB on class B), but only through aggregator relays. The S&P presale was not opened.
- **Chart B 223** (primexbt relaying CNBC and LSEG). The other figures in circulation are $225bn (mid 2026, including Nvidia and Microsoft) and $244bn (six biggest AI spenders). Their scopes differ.
- **Oracle Q1 FCF negative $5.4bn and prior year capex $8.5bn.** The FCF is aggregator only (beancount.io; Verdict rounds to negative $5bn). The $8.5bn did not surface. Both are in Oracle's Sept 10 8-K, https://www.sec.gov/Archives/edgar/data/0001341439/000119312526387905/orcl-ex99_1.htm, which should be opened.

## Internal consistency and arithmetic

- **Oracle rating.** BBB- is consistent across the table row (Jupiter) and page3.p1. S&P is BBB-. Moody's Baa2 negative and Fitch BBB are not in the text, which is fine.
- **El Paso.** $12.5bn, 7.534%, T+287.5, July 27, A+ (S&P) and AA- (Fitch) match across page2.p1, the table, callL and chart C. Arithmetic: $12.5bn x 1.6 = $20bn. Correct.
- **Hyperion.** $27.3bn, 80/20, A+, 6.581%, T+225, October 2025 and 2049 match across page1.p1, the table, callL and chart C.
- **Hyperion against El Paso.** The spread step is 287.5 minus 225, or 62.5bps. The yield gap is 7.534 minus 6.581, or 95.3bps. So about 33bps came from higher Treasuries. Page2.p2 compares spreads, which is the right basis. Chart C compares yields across Oct 2025 to Sep 2026, when the 10 year rose about a point (CNBC Sept 27 has it near 5.17%). The C footnote should say yields are not like for like.
- **Hyperion secondary.** If T+230 is right, the spread is only 5bps wider than at issue. A 9 to 10 point loss would then be almost all rates. "Rate and spread risk" (callL) is acceptable, but "rate risk above all" would be more accurate. Research also cites a record wide near 255bps in July (aggregator).
- **CoreWeave ladder.** 550 minus 450 is 100 (page2.p1 is correct). 550 minus 225 is 325 (correct as arithmetic, see C2). DDTL 4.0 is $7.5bn initially, expandable to $8.5bn, with a fixed tranche near 5.9%. The $8.5bn headline and the SOFR+225 floating margin are both as released.
- **xAI.** 3.5 / 5.4 = 64.8%, so "about 65%" is correct.
- **Saline.** 14 / 16.3 = 85.9% loan to cost and 14.1% equity. "Roughly 15%" and the chart's 85 are both within rounding. 86 would be more exact.
- **Abilene.** See C4.
- **Chart B scope.** The 108 and 223 bars are four issuers (Amazon, Alphabet, Meta, Oracle). The 250 and 400 bars are five issuers (adding Microsoft, per Goldman). The footnote discloses this. Keep it.
- **Chart D mixes metrics.** It plots LTC, LTV and an advance share. The footnote discloses this.
- **Beacon Point against El Paso.** Five weeks apart, so the spread comparison is fair. Tenors differ (2042 against 2048), which adds a small curve effect.
- **Page numbers.** content.js uses pageNum 5, 6 and 7. CLAUDE.md still says report pages 4 to 6. This is for layout-qa and the chair.

## Stale for an October 2026 publication

1. Saline "guided ~7.5%" (C1). It priced in April.
2. Chart B "2026 to date 223" runs through August 20. Label it "through Aug 20", or refresh. September had no US IG hyperscaler deals (Morgan Stanley via BigGo, aggregator only), so the total may still hold.
3. Chart B 2027E 400. Goldman reportedly raised this to $420bn around Sept 22 (Daily Caller and Futu, aggregator only). Keep 400 with "July estimate", or confirm the revision.
4. "Oracle's long bonds yielded above 8% for the first time". By early October the 2065 and 2066 bonds were near 8.4% (Benzinga, aggregator). Date the sentence ("after the Sept 24 notice").
5. Moody's $662bn and 113% use year-end 2025 disclosures (Feb 2026 report). Consider "in February".
6. Oracle's "record $129bn book" (Feb). This was a record at the time, beating Meta's $125bn. Amazon's March deal reportedly drew $158bn of total demand across currencies (IFR, per research; not verified here). Use "then record".
7. "the vehicle that leases chips to xAI". Research notes an xAI and SpaceX merger (aggregator only). Check the naming.

## Item table

| id | location in file | claim | value in draft | value found | source URL | source tier | verdict | suggested fix |
|---|---|---|---|---|---|---|---|---|
| 1 | page1.p1 | Hyperion financing size | $27.3bn | IFR names the Beignet Investor deal a US$27.3bn 23.6 year bond | https://www.ifre.com/ifr-awards/2327933/financing-package-blue-owl-capitalbeignet-investors-us27.3bn-23.6-year-bond | press | confirmed | none |
| 2 | page1.p1 | Hyperion ownership | Blue Owl 80%, Meta 20% | Meta's JV release gives Blue Owl funds 80% and Meta 20% | https://investor.atmeta.com/investor-news/press-release-details/2025/Meta-Announces-Joint-Venture-with-Funds-Managed-by-Blue-Owl-Capital-to-Develop-Hyperion-Data-Center/default.aspx | primary (via search) | confirmed | none |
| 3 | page1.p1 | Hyperion rating | A+ | IFR says S&P rated the bonds A+, tied to Meta's Aa3/AA- | IFR (id 1) | press | confirmed | none |
| 4 | page1.p1 | Hyperion amortization | to 2049 | IFR says the bonds are fully amortizing and mature in 2049 | IFR (id 1) | press | confirmed | none |
| 5 | page1.p1 | Same building supports A+ or BB- | A+ to BB- | Hyperion is A+ (S&P). The Digital Drive notes are BB- (S&P) | ids 3, 46 | press | confirmed | none |
| 6 | page1.p2 | Beacon Point size | $4.25bn | Hut 8 says Beacon Point DC LLC priced $4.25bn of 6.129% senior secured notes due 2042 | https://hut8.com/news-insights/press-releases/hut-8-closes-usd4-25-billion-of-investment-grade-senior-secured-notes-for-beacon-point-data | primary (via search) | confirmed | none |
| 7 | page1.p2 | Beacon Point tenant | AA- or better | Hut 8 says the lease is to a tenant rated AA- or higher | id 6 | primary (via search) | confirmed | none |
| 8 | page1.p2 | Beacon Point LTC | 95% | Hut 8 says LTC rose from about 85% to 95%, with $184m of equity returned at closing | id 6 ; https://www.milbank.com/en/news/milbank-advises-hut-8-on-milestone-dollar325b-offering-of-investment-grade-secured-notes.html | primary (via search) | confirmed | none |
| 9 | page1.p2 | Beacon Point spread | T+165 | Hut 8 says the notes priced at Treasuries plus 165bps, 20bps inside River Bend | id 6 | primary (via search) | confirmed | none |
| 10 | page1.p2 | Record LTC | highest on record for a data center bond | Hut 8 and Milbank say it is the highest LTC ever for an HPC data center bond. A Hut 8 results summary also puts River Bend near 95% | id 8 | primary (via search) | conflict | See C6. Attribute to Hut 8 and narrow to HPC |
| 11 | page1.p2 | Saline bonds | about $14bn | Bloomberg says Bank of America sold $14bn of bonds tied to the project, about $10bn to Pimco | https://www.gulf-times.com/article/724576/business/oracle-data-centre-16bn-financing-gets-over-the-line | press (Bloomberg syndication) | confirmed | none |
| 12 | page1.p2 | Saline cost | $16.3bn | Related Digital and Blackstone announced a $16.3bn financing (debt plus equity) for the Saline Township campus | https://www.related.com/press-releases/2026-04-24/related-digital-announces-financing-16-billion-oracle-data-center-project ; https://finance.yahoo.com/sectors/technology/articles/related-digital-secures-financing-16-234046270.html | primary (via search) / press | confirmed | none |
| 13 | page1.p2 | Saline equity | roughly 15% | (16.3 minus 14) / 16.3 = 14.1%. Blackstone put in about $2bn | ids 11, 12 | derived | confirmed | Optional: "about 14%" |
| 14 | page1.p2 | Abilene loans | $9.6bn of JPMorgan loans | Trade press says JPMorgan's two loans total $9.6bn ($2.3bn and $7.1bn) | https://www.costar.com/article/1387166843/first-stargate-data-center-project-lands-7-1-billion-construction-loan ; https://commercialobserver.com/2025/01/j-p-morgan-chase-loan-texas-data-center-oracle/ | aggregator (trade press) | unverifiable | Find the FT or Bloomberg original, or soften |
| 15 | page1.p2 | Abilene leverage | about two thirds of cost | 9.6/15 = 64% (chart D). 9.6/(9.6+5) = 66%. Inputs are trade press only | id 14 ; https://spyglass.org/the-stargate-data-center-layer-cake/ | aggregator | conflict | See C4 |
| 16 | page1.p2 | Aligned ABS size and month | $1.18bn, July | Aligned says it completed a $1.183bn ABS issuance on July 28, 2026, upsized from $905m | https://aligneddc.com/press-release/aligned-data-centers-completes-1-18-billion-securitization-financing/ | primary (via search) | confirmed | none |
| 17 | page1.p2 | Aligned LTV | 70% | Search text quoting S&P says appraised LTV is constrained at 70.0%. Only relays were reachable | https://pulse2.com/aligned-data-centers-completes-1-18-billion-asset-backed-securities-financing/ | aggregator relaying S&P | unverifiable | Open the S&P presale |
| 18 | page1.p2 | Aligned senior rating | A- senior class | Search text says S&P rates A-1-L/C, A-1-V and A-2-I at A- and class B at BBB | id 17 | aggregator relaying S&P | unverifiable | Open the S&P presale |
| 19 | page1.p2 | Apollo amount | $3.5bn | Apollo led a $3.5bn capital solution for Valor Compute Infrastructure (Jan 7, 2026) | https://www.globenewswire.com/news-release/2026/01/07/3214463/0/en/Apollo-Backs-5-4-Billion-Valor-and-xAI-Data-Center-Compute-Infrastructure-Transaction-with-3-5-Billion-Capital-Solution.html | primary (via search) | confirmed | none |
| 20 | page1.p2 | Purchase size | $5.4bn | The same release describes VCI's $5.4bn purchase and triple net lease of compute (Nvidia GB200) to an xAI subsidiary | id 19 | primary (via search) | confirmed | none |
| 21 | page1.p2 | xAI share | about 65% | 3.5/5.4 = 64.8% | id 19 | derived | confirmed | none in text. See C8 for the chart label |
| 22 | page1.p2 | KBRA haircut | 27.2% below appraisal | KBRA's value of about $1.17bn is 27.2% below the as-is appraisal. KNCF is 18.9% below the issuer's | https://www.businesswire.com/news/home/20260603885897/en/KBRA-Assigns-Preliminary-Ratings-to-BX-2026-VLT10 | primary (via search) | confirmed | none |
| 23 | page1.p2 | VLT10 loan | $1.26bn | $1.26bn first lien mortgage loan | id 22 | primary (via search) | confirmed | none |
| 24 | page1.p2 | KBRA LTV | 108.4% | In-trust KLTV of 108.4% | id 22 | primary (via search) | confirmed | none |
| 25 | page1.p2 | Single tenant Ohio campus | qualitative | A 66MW New Albany, Ohio data center, 100% leased to one hyperscaler to July 2045 | id 22 | primary (via search) | confirmed | none |
| 26 | page1.p3 | Four year initial terms | Hyperion and El Paso | Meta's releases give a four year initial term with extensions for both. El Paso has four options, for a potential 20 years | id 2 ; https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Announces-New-Strategic-Venture-with-BlackRock-to-Develop-Data-Center-in-El-Paso/ | primary (via search) | confirmed | none |
| 27 | page1.p3 | Bond final years | 2049 and 2048 | Hyperion 2049 (IFR). El Paso November 30, 2048 (PitchBook) | id 1 ; https://pitchbook.com/news/articles/investors-flock-to-12-5b-data-center-bond-deal-for-blackrock-sponsored-sopaipilla | press | confirmed | none |
| 28 | page1.p3 | Capped RVG for 16 years | 16 years | El Paso release: aggregate RVG threshold of about $13bn, declining, payable if conditions are met in the first 16 years. Hyperion: RVG for the first 16 years | id 26 ; id 2 | primary (via search) | confirmed | Clarity: "covering the first 16 years" (the bonds run about 22 to 24 years, so the RVG does not cover the whole gap) |
| 29 | page1.p3 | Moody's not commenced leases | $662bn | Moody's (year-end 2025 disclosures) counts $969bn of commitments, of which $662bn have not commenced | https://fortune.com/2026/02/25/hyperscaler-risk-off-balance-sheet-662-billion-data-center-commitments-meta-amazon-microsoft-oracle-alphabet/ | press citing Moody's | confirmed | Optional: "in February" |
| 30 | page1.p3 | Share of adjusted debt | 113% | The $662bn equals about 113% of the five hyperscalers' adjusted debt | id 29 | press citing Moody's | confirmed | none |
| 31 | page1.p3 | Moody's will treat part as debt | qualitative | IFR says Moody's warns of "material" credit deterioration and will judge which obligations to treat as debt, at odds with S&P | https://www.ifre.com/bonds/2390941/moodys-opinion-threatens-to-derail-off-balance-sheet-data-centre-deals | press | confirmed | none |
| 32 | page1.p3 | S&P accepted Hyperion off balance sheet | qualitative | IFR says S&P's October opinion let Meta shift Hyperion's cost off balance sheet with no direct hit to its credit profile | id 31 | press | confirmed | Optional precision: "S&P did not add Hyperion to Meta's debt" (accounting is Meta's call) |
| 33 | page2.p1 | El Paso size | $12.5bn | PitchBook: $12.547bn of amortizing notes | id 27 (PitchBook) | press | confirmed | none |
| 34 | page2.p1 | El Paso rating | A+ | S&P preliminary A+, Fitch AA-(EXP) | id 27 (PitchBook) | press | confirmed | none |
| 35 | page2.p1 | El Paso pricing date | July 27 | PitchBook and Bloomberg give pricing on Monday, July 27 | id 27 ; https://www.bloomberg.com/news/articles/2026-07-27/blackrock-raises-12-5-billion-of-debt-for-meta-data-center | press | confirmed | none |
| 36 | page2.p1 | El Paso yield | 7.534% | 7.534% | id 35 | press | confirmed | none |
| 37 | page2.p1 | El Paso spread | T+287.5 | PitchBook gives T+287.5. A Bloomberg derived report says about 287.5bps over the 10 year | id 27 ; https://www.ibtimes.co.uk/meta-blackrock-ai-data-centre-deal-1811227 | press | confirmed | none |
| 38 | page2.p1 | Peak orders | near $20bn | Bloomberg: demand "reached just $20 billion on Friday", during syndication | https://api.advisorperspectives.com/articles/2026/07/28/blackrock-dodges-ai-bond-trading-flop-junk-yields | press (Bloomberg syndication) | confirmed | none |
| 39 | page2.p1 | Cover | about 1.6 times | Bloomberg: 1.6 times. 12.5 x 1.6 = 20 | id 38 | press | confirmed | none |
| 40 | page2.p1 | Average book | close to four times "for large 2026 deals" | Bloomberg: the average for bond sales this year was closer to four times the offering | id 38 | press | conflict | See C5 |
| 41 | page2.p1 | Hyperion issued at par, 6.581%, Oct 2025 | par, 6.581% | 6.581% coupon (IFR, Protos). Bloomberg gave a 6.58% yield at issue (R2 id 3), which implies par | id 1 ; https://www.itiger.com/news/1142559708 | press | confirmed | none |
| 42 | page2.p1 | Hyperion secondary | low 90s by late September | Protos: record low of 94.4, date unclear (tied to a 9% Meta stock jump, likely late July). rallies.ai: about 91 in September. No Bloomberg or FT original found | https://protos.com/metas-ai-bond-just-hit-a-record-low-as-its-stock-soared/ ; https://rallies.ai/news/are-ai-credit-cracks-a-warning-or-a-buy-signal-ac01da097cced0ce | aggregator | unverifiable | Cut, or cite a Bloomberg price. See the unverifiable section |
| 43 | page2.p1 | Digital Drive date | September 23 | Bloomberg article dated Sept 23, 2026. Pricing was set for a Wednesday (Sept 23) | https://www.bloomberg.com/news/articles/2026-09-23/coreweave-tied-data-center-raises-1-1-billion-in-junk-bonds | press | confirmed | none |
| 44 | page2.p1 | Sponsor, location, tenant | Blue Owl affiliated, Virginia, CoreWeave | A Blue Owl sponsored data center near Richmond, Virginia, fully leased to CoreWeave, 76MW, 15 year lease worth $2.94bn | id 43 ; https://www.itiger.com/news/2669199962 | press | confirmed | none |
| 45 | page2.p1 | Size | $1.1bn | $1.1bn | id 43 | press | confirmed | none |
| 46 | page2.p1 | Rating | BB- | S&P rates the secured notes BB- (issuer DDC 01 is B+) | id 44 | press | confirmed | none |
| 47 | page2.p1 | Tenor | five year | five year notes | id 43 | press | confirmed | none |
| 48 | page2.p1 | Price and yield | 98.5, 9.25% | Priced at 98.5 to yield 9.25% | id 43 | press | confirmed | none |
| 49 | page2.p1 | Gap to similarly rated debt | about 270bps | About 2.7 points above similarly rated debt (a yield gap to an index, not a Treasury spread) | id 43 | press | confirmed | none |
| 50 | page2.p1 | CoreWeave March facility | SOFR+225, A3, Meta | DDTL 4.0: floating tranche at SOFR+2.25%, fixed about 5.9%. Moody's A3, DBRS A (low). Anchored by the Meta contract, March 2026 | https://www.businesswire.com/news/home/20260330529766/en/CoreWeave-Closes-Landmark-8.5-Billion-Financing-Facility-Achieving-First-Investment-Grade-Rated-GPU-backed-Financing/ | primary (via search) | confirmed | none |
| 51 | page2.p1 | CoreWeave August facility | SOFR+550, Ba2, shorter contracts | DDTL 5.5 closed Aug 10, 2026 at SOFR+5.50%, Moody's Ba2, Fitch BB+. About a five year loan against contracts averaging about three years | https://investors.coreweave.com/news/news-details/2026/CoreWeave-Closes-2-6-Billion-Loan-Facility-Expanding-Financing-Flexibility-for-AI-Infrastructure/default.aspx | primary (via search) | confirmed | none |
| 52 | page2.p1 | Gap to the May loan | 100bps, same ratings | DDTL 5.0 (May 18) at SOFR+4.50%, Ba2 and BB+. 550 minus 450 = 100 | https://www.businesswire.com/news/home/20260518337916/en/ | primary (via search) | confirmed | none |
| 53 | page2.table row 1 | Beacon Point | Jun 2026, $4.25bn, Baa2, 6.129%, T+165, 95% LTC | Priced June 4 and closed June 9. Moody's Baa2. Other cells as ids 6 to 9 | id 6 | primary (via search) | confirmed | none |
| 54 | page2.table row 2 | Saline date and size | Apr 2026, ~$14bn | Related release April 24. $14bn of bonds | ids 11, 12 | primary / press | confirmed | none |
| 55 | page2.table row 2 | Saline rating | Not public | No rating found. Fitch reportedly gave the Michigan project its top sector score (Clifford Chance via research), which is not a rating | none | n/a | unverifiable | Keep "Not public" only if the chair confirms. Otherwise "Not disclosed" |
| 56 | page2.table row 2 | Saline pricing | Guided ~7.5% | 7.5% coupon at 98.75, due 2045 | id 11 | press | conflict | See C1 |
| 57 | page2.table row 2 | Saline LTC | ~85% (derived) | 14/16.3 = 85.9% | ids 11, 12 | derived | confirmed | Optional: 86 |
| 58 | page2.table row 3 | Hyperion | Oct 2025, $27.3bn, A+, 6.581%, T+225 | IFR: about 225bps over Treasuries, priced October 2025 (Oct 16 per research) | id 1 ; https://www.globaldatacenterhub.com/p/the-hyperion-financing-is-the-signal | press | confirmed | none |
| 59 | page2.table row 4 | El Paso | Jul 2026, $12.5bn, A+ / AA-, 7.534%, T+287.5 | As ids 33 to 37 | id 27 | press | confirmed | none |
| 60 | page2.table row 5 | Digital Drive | Sep 2026, $1.1bn, BB-, 9.25%, 15 yr lease | As ids 43 to 48 | id 44 | press | confirmed | none |
| 61 | page2.table row 6 | Aligned | Jul 2026, $1.18bn, A- senior, 70% LTV | Date and size confirmed (id 16). A- and 70% via aggregator relays only | ids 16 to 18 | primary / aggregator | unverifiable | Confirm in the S&P presale |
| 62 | page2.table row 7 | BX 2026 VLT10 | Jun 2026, $1.26bn, KBRA rated, 108% | KBRA preliminary ratings June 3, 2026. $1.26bn. 108.4% KLTV | id 22 | primary (via search) | confirmed | none |
| 63 | page2.table row 8 | DDTL 4.0 | Mar 2026, $8.5bn, A3, SOFR+225, GPUs and Meta contract | $7.5bn initially, expandable to $8.5bn. Other cells as id 50 | id 50 | primary (via search) | confirmed | Optional: "$7.5bn to $8.5bn" |
| 64 | page2.table row 9 | DDTL 5.5 | Aug 2026, $2.6bn, Ba2 / BB+, SOFR+550, ~3 yr contracts | As id 51 | id 51 | primary (via search) | confirmed | none |
| 65 | page2.table row 10 | Lambda TLB | Aug 2026, $926m, Baa2, SOFR+300, IG offtaker | $926m TLB at SOFR+3.00%, OID 99.5, Moody's Baa2, matures Dec 31, 2030, backs GPUs for an IG offtaker. Priced Aug 12, closed Aug 27 | https://lambda.ai/blog/lambda-closes-926-million-senior-secured-term-loan-b-facility ; https://www.davispolk.com/experience/lambda-926-million-senior-secured-term-loan-b-facility | primary (via search) | confirmed | none |
| 66 | page2.table row 11 | Jupiter loan | Late 2025, ~$18bn, quoted 89 to 91, Oracle BBB- | Bloomberg (Nov 7, 2025): about 20 banks lending about $18bn, talked at SOFR+250, four years plus two one year extensions. FT: quoted 89 to 91 | https://news.bgov.com/artificial-intelligence/banks-lend-18-billion-for-oracle-tied-data-center-in-new-mexico ; https://www.thestar.com.my/tech/tech-news/2026/09/19/oracle039s-18-billion-data-center-debt-under-pressure-ft-reports | press | confirmed | Optional: add "SOFR+250 (talk)" to the Pricing cell |
| 67 | page2.table row 11 | Jupiter rating | Unrated | No source states this | none | n/a | unverifiable | "Not disclosed" |
| 68 | page2.p2 | Beacon Point T+165 despite 95% leverage | as ids 8, 9 | as ids 8, 9 | id 6 | primary (via search) | confirmed | none |
| 69 | page2.p2 | "A+ rating on Meta's lease" | wording | The A+ is on the Sopaipilla notes | id 34 | press | conflict | See C7 |
| 70 | page2.p2 | Nine months after Hyperion | nine months | Oct 16, 2025 to Jul 27, 2026 is about 9.4 months | ids 35, 58 | derived | confirmed | none |
| 71 | page2.p2 | CoreWeave paper near 9.25% secured | 9.25% | Digital Drive senior secured notes yield 9.25% | id 48 | press | confirmed | none |
| 72 | page2.p2 | Amazon July concession | 10 to 12bps on $25bn | Bloomberg: Amazon offered about 0.10 to 0.12 points of concession on the $25bn deal (July 7). Peak demand $62bn | https://www.investing.com/news/stock-market-news/amazon-launches-eightpart-us-investment-grade-bond-offering-4779013 ; https://news.bloombergtax.com/artificial-intelligence/amazons-new-bonds-get-cooler-reception-as-ai-debt-floods-market | press (Bloomberg syndication) | confirmed | none |
| 73 | page2.p2 | 2026 average concession | near 4bps | Same Bloomberg piece: the year's average was about 0.04 points | id 72 | press | confirmed | none |
| 74 | page2.p2 | Meta 2066 spread | T+147 | Only the initial talk of up to +180 surfaced. The final +147 was not found | https://news.bgov.com/capital-markets/meta-looks-to-raise-as-much-as-25-billion-with-jumbo-bond-sale | press | unverifiable | Cite the final pricing, or drop the spread pair |
| 75 | page2.p2 | Oct 2025 comparison | T+110 | Research cites IFR for a +110 40 year tranche in Oct 2025. Not surfaced this pass | https://www.ifre.com/ifr-awards/2330993/us-bond-meta-platforms-us30bn-six-tranche-bond | press (per research) | unverifiable | Write "its October 2025 40 year" once confirmed |
| 76 | page2.p2 | Meta books | $96bn against $125bn | Bloomberg: peak orders $96bn, down from about $125bn for the $30bn October sale. Nearly all tranches priced wider | id 74 | press | confirmed | none |
| 77 | page2.p2 | Oracle Feb deal | $25bn, February | $25bn, the first leg of a $45bn to $50bn 2026 plan | https://www.ifre.com/bonds/2379081/oracle-returns-with-another-jumbo-bond-to-fund-ai-expansion ; https://www.itiger.com/news/1125364882 | press | confirmed | none |
| 78 | page2.p2 | Oracle book | record $129bn | Orders above $129bn, beating Meta's prior record of $125bn | id 77 (itiger) | press | confirmed | "then record" (see stale item 6) |
| 79 | page2.p2 | Oracle 10 year | ~T+145 | The 10 year landed at +145, about 30bps inside talk | id 77 ; https://www.twentyfouram.com/insights/oracle-clears-the-supply-cloud-with-record-demand | press / aggregator | confirmed | none |
| 80 | page2.p2 | BBB peers | ~T+95 | TwentyFour AM: the US BBB corporate index trades around +95, and Oracle's outstanding 10 year was near +175 before the deal | id 79 (TwentyFour) | aggregator (asset manager) | conflict | See C3 |
| 81 | page3.p1 | S&P cut and date | BBB- on July 9 | S&P cut Oracle to BBB- from BBB on July 9, 2026 | https://ppc.land/s-p-cuts-oracle-to-bbb-as-ai-buildout-widens-cash-deficit-to-42bn/ ; https://www.itiger.com/news/2653248061 ; https://thenextweb.com/news/oracle-sp-downgrade-ai-spending-junk-risk | press (S&P release not opened) | confirmed | none |
| 82 | page3.p1 | OpenAI share of backlog | about half | OpenAI is about half of the $638bn RPO (S&P) | id 81 | press | confirmed | none |
| 83 | page3.p1 | FY27 FOCF deficit | about $42bn | S&P projects about a negative $42bn FY27 FOCF, up from $24bn | id 81 | press | confirmed | none |
| 84 | page3.p1 | Results date | September 10 | Oracle released Q1 FY27 on Sept 10, 2026 | https://www.oracle.com/news/announcement/q1fy27-earnings-release-2026-09-10/ | primary (via search) | confirmed | none |
| 85 | page3.p1 | RPO | $664bn | The 8-K shows RPO up $209bn year on year to $664bn | https://www.sec.gov/Archives/edgar/data/0001341439/000119312526387905/orcl-ex99_1.htm | primary (via search) | confirmed | none |
| 86 | page3.p1 | Quarterly capex | $28.5bn | $28.5bn in the quarter (Reuters, Constellation) | https://wdez.com/?p=956894 ; https://www.constellationr.com/insights/news/oracle-q1-strong-and-so-capital-expenditures | press | confirmed | none |
| 87 | page3.p1 | Prior year quarter capex | $8.5bn | Not surfaced in search | id 85 | n/a | unverifiable | Check the 8-K cash flow statement |
| 88 | page3.p1 | Quarterly FCF | negative $5.4bn | beancount.io: negative $5.4bn on $28.5bn of capex and $23bn of OCF. Verdict: negative $5bn | https://beancount.io/blog/2026/09/13/oracle-fy2027-q1-earnings-analysis ; https://www.verdict.co.uk/oracle-q1-fy27-results/ | aggregator | unverifiable | Check the 8-K. The arithmetic (23 minus 28.5) is consistent |
| 89 | page3.p1 | FY27 capex guidance | $90bn to $95bn | Oracle expects $90bn to $95bn, with net cash capex of no more than $70bn | id 86 (Reuters) | press | confirmed | none |
| 90 | page3.p1 | Jupiter loan | $18bn construction loan | About $18bn from about 20 banks (Bloomberg) | id 66 | press | confirmed | none |
| 91 | page3.p1 | Jupiter size and place | 2.45 GW, New Mexico | 2.45 GW in Dona Ana County, New Mexico | https://www.insurancejournal.com/news/west/2026/09/25/886812.htm | press (Bloomberg wire) | confirmed | none |
| 92 | page3.p1 | Developer | Blue Owl unit, leased to Oracle | The notice went to Blue Owl's Stack Infrastructure, the developer | id 91 | press | confirmed | none |
| 93 | page3.p1 | Loan quote | 89 to 91 cents | FT: quoted at 89 to 91 by syndicate banks including Santander and Jefferies. Sell down stalled | id 66 (The Star) | press (FT via Reuters) | confirmed | none |
| 94 | page3.p1 | Notice date | September 24 | Oracle sent the force majeure notice on Sept 24, 2026 | id 91 ; https://www.ctvnews.ca/business/article/oracle-triggers-force-majeure-on-data-centre-project-over-power-delays-source-says/ | press | confirmed | none |
| 95 | page3.p1 | Pipeline slip | to February 2027 | Energy Transfer pipeline in service date slipped nearly six months, to Feb 1, 2027 | id 91 | press | confirmed | none |
| 96 | page3.p1 | Rent deferral | up to three years | If both sides agree a power related force majeure occurred, Oracle could get a three year rent delay once payments begin | id 94 | press (Reuters) | confirmed | "which, if accepted, could defer rent by three years" |
| 97 | page3.p1 | Oracle long bonds | above 8% for the first time | Aggregators: the 6.70% 2056s topped 8% for the first time, and then a record 8.3%. No press original surfaced | https://parameter.io/oracle-orcl-stock-slides-3-6-amid-18-billion-debt-concerns-and-data-center-delays/ ; https://blofin.com/news/4780809054981191022 | aggregator | unverifiable | Cite Bloomberg via Yahoo if found (research-market lead), and date it |
| 98 | page3.p2 | Four year leases against bonds over 20 years | more than 20 years | Hyperion 23.6 years. El Paso about 22.3 years | ids 1, 27 | press | confirmed | none |
| 99 | page3.p2 | CoreWeave August facility | about five years against about three year contracts | As id 51 | id 51 | primary (via search) | confirmed | none |
| 100 | page3.p2 | OpenAI share of Oracle's backlog | about half | As id 82 | id 81 | press | confirmed | none |
| 101 | page3.p2 | OpenAI backs two CoreWeave GPU facilities | two | DDTL 3.0 is confirmed as OpenAI. For DDTL 5.0, sources say only "two large non-investment grade customers". OpenAI is named only by research notes | id 52 ; https://www.theenergymag.com/news/market-news/coreweave-secures-3-1-billion-syndicated-loan-for-ai-infrastructure-expansion | primary / aggregator | unverifiable | "OpenAI contracts backing at least one of CoreWeave's GPU facilities", or confirm DDTL 5.0's customers |
| 102 | page3.callL | Shared template | four year lease, capped RVG for 16 years, A+ | As ids 26, 28, 3, 34 | ids 2, 26 | primary (via search) | confirmed | none |
| 103 | page3.callL | Hyperion | $27.3bn, 6.581%, T+225, Oct 2025 | As ids 1, 41, 58 | id 1 | press | confirmed | none |
| 104 | page3.callL | El Paso | $12.5bn, 7.534%, T+287.5, July, Fitch AA- one notch higher | As ids 33 to 37. AA- is one notch above A+ | id 27 | press | confirmed | none |
| 105 | page3.callL | Hyperion late September | low 90s, near T+230 | As id 42 | id 42 | aggregator | unverifiable | As id 42 |
| 106 | page3.callL | Loss | close to ten points | Rests on id 105. From par to 91 is 9 points. If the spread is T+230, the loss is almost all Treasury moves | id 42 | derived from aggregator | unverifiable | Tie it to a confirmed price. Say the loss was mainly rates |
| 107 | page3.callR | DDTL 4.0 | $8.5bn, Meta, A3, SOFR+225 | As id 50 | id 50 | primary (via search) | confirmed | none |
| 108 | page3.callR | DDTL 3.0 | OpenAI, SOFR+400 | CoreWeave: $2.6bn DDTL 3.0 closed July 31, 2025 at SOFR+4.00%, for the OpenAI contract, maturing Aug 21, 2030 | https://investors.coreweave.com/news/news-details/2025/CoreWeave-Closes-2-6-Billion-Secured-Debt-Financing-Facility-Strengthening-Market-Position-as-AI-Cloud-Leader/default.aspx | primary (via search) | confirmed | none |
| 109 | page3.callR | DDTL 5.0 | $3.1bn, May, SOFR+450, Ba2 and BB+ | As id 52. Tightened 50bps. About 5.5 years | id 52 | primary (via search) | confirmed | none |
| 110 | page3.callR | DDTL 5.5 | $2.6bn, August, SOFR+550, same ratings | As id 51 | id 51 | primary (via search) | confirmed | none |
| 111 | page3.callR | CoreWeave issuer rating | B+ by S&P | S&P research lists a B+ issuer credit rating (outlook reported as stable or positive). Bloomberg describes CoreWeave as B+ (Feb 2026, per research) | https://www.alacrastore.com/s-and-p-credit-research/CoreWeave-Inc-Assigned-B-Issuer-Credit-Rating-Outlook-Stable-Debt-Rated-B-Recovery-Rating-5-3372088 ; https://finance.yahoo.com/news/coreweave-b-rating-leads-blue-044911577.html | primary listing / press | confirmed | none |
| 112 | page3.callR | Best to worst gap | 325bps | 550 minus 225 = 325 is correct. But DDTL 2.0 non-IG customer loans were at SOFR+13.00% (10-K per research-structures) | https://www.sec.gov/Archives/edgar/data/1769628/000176962826000104/crwv-20251231.htm (not opened) | primary (via research) | conflict | See C2 |
| 113 | chart D[0] | Beacon Point LTC | 95 | As id 8 | id 6 | primary (via search) | confirmed | none |
| 114 | chart D[1] | Saline LTC | 85 | 85.9 derived | ids 11, 12 | derived | confirmed | Optional: 86 |
| 115 | chart D[2] | Aligned LTV | 70 | As id 17 | id 17 | aggregator | unverifiable | Keep D false until the S&P presale is opened |
| 116 | chart D[3] | xAI chip vehicle (advance) | 65 | 64.8 derived. "Advance" assumes all of the capital solution is debt | id 19 | primary inputs, derived | conflict | See C8 |
| 117 | chart D[4] | Abilene LTC | 64 | As ids 14, 15 | id 14 | aggregator | unverifiable | See C4 |
| 118 | chart B[0] | 2025, four issuers | 108 | Reuters (LSEG): about $108bn in all of 2025 for Amazon, Alphabet, Meta and Oracle | https://wdez.com/2026/07/29/hyperscaler-debt-binge-pushes-yields-up-as-investor-demand-cools/ | press (Reuters wire) | confirmed | none |
| 119 | chart B[1] | 2026 to date | 223 | "Nearly $223bn" as of Aug 20 (LSEG via CNBC), seen only through primexbt | https://primexbt.com/news/hyperscaler-ai-bond-sales-top-223-billion-in-2026-pushing-yields-higher/ | aggregator | unverifiable | Find the CNBC original or pull LSEG. Label "through Aug 20". Fallback: $194bn through July 7 (Reuters, confirmed) |
| 120 | chart B[2] | 2026E, five issuers | 250 | Goldman: about $250bn this year for the five, including Microsoft | id 118 | press | confirmed | none |
| 121 | chart B[3] | 2027E, five issuers | 400 | Goldman: $400bn in 2027 (July). A reported Sept revision to $420bn is aggregator only | id 118 ; https://dailycaller.com/2026/09/22/hyperscaler-debt-financing-expected-to-reach-420-billion-next-year/ | press / aggregator | confirmed | Label "July estimate", or confirm the $420bn |
| 122 | chart C[0] | Beacon Point yield | 6.129 | As id 6 | id 6 | primary (via search) | confirmed | none |
| 123 | chart C[1] | Hyperion yield | 6.581 | As id 41 | id 1 | press | confirmed | none |
| 124 | chart C[2] | El Paso yield | 7.534 | As id 36 | id 35 | press | confirmed | none |
| 125 | chart C[3] | Digital Drive yield | 9.25 | As id 48 | id 43 | press | confirmed | none |
| 126 | chart C footnote | Spreads | T+165, T+225, T+287.5 | As ids 9, 58, 37 | ids 6, 1, 27 | primary / press | confirmed | Add: "Pricing dates span Oct 2025 to Sep 2026, so yields include a Treasury move of about a point. Compare spreads" |
| 127 | chart A[0] | DDTL 4.0 | 225 | As id 50 | id 50 | primary (via search) | confirmed | This resolves the charts.js note that DDTL 4.0 was aggregator only |
| 128 | chart A[1] | Lambda TLB | 300 | As id 65 | id 65 | primary (via search) | confirmed | none |
| 129 | chart A[2] | DDTL 3.0 | 400 | As id 108 | id 108 | primary (via search) | confirmed | none |
| 130 | chart A[3] | DDTL 5.0 | 450 | As id 109 | id 52 | primary (via search) | confirmed | none |
| 131 | chart A[4] | DDTL 5.5 | 550 | As id 110 | id 51 | primary (via search) | confirmed | none |

## Chart readiness

- **A (GPU loan spreads).** All five values are confirmed in company release text via search. Can be set to verified true after a human click-through of the five URLs (ids 50, 51, 52, 65, 108). Labels are accurate.
- **C (project bond yields).** All four values and the footnote spreads are confirmed (primary or press). Can be set to verified true. Add the date and Treasury confound sentence to the footnote (id 126). The C source "Hut 8 via press" can become "Hut 8 release".
- **B (issuance).** Keep false. The 223 is aggregator only (id 119). Either confirm it at LSEG or CNBC, or use $194bn through July 7 (Reuters, confirmed) and relabel.
- **D (leverage).** Keep false. Aligned 70 and Abilene 64 are unverifiable (ids 115, 117). The xAI label needs changing (id 116). Beacon Point 95 and Saline 85 are fine.
