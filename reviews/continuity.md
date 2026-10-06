# Continuity Review: content.js (AI Infrastructure Financing)

Reviewer: continuity-editor. Draft reviewed: content.js (cover, page1 "5", page2 "6").
Page citations use the printed "L|L|C n" page number in each reference PDF (PDF page index = printed number + 1). "Mar" = LLC_March_2026_Research_Report.pdf, "Aug" = LLC_August_2026_Research_Report.pdf.

## Status of the September comparison
reference/september_recap.pdf does not exist yet. The most important check (facts, rates, oil, Fed expectations in the draft versus the September recap pages) could not be run. This review compares only against March and August. Rerun once the recap is in reference/. The draft already contains September events (CoreWeave site notes, Project Jupiter loan quotes, force majeure notice), so it will overlap the September recap directly.

## A. Fact and number findings

1. Rate environment behind the "Meta SPVs Reprice" claim
   - Draft: page2.callL.p ("The higher cost on the same rating and the same tenant shows investors now charge for structure, supply, and duration"); also page2.p1 ("Hyperscaler borrowing is now carrying a cost") and page2 risk close ("rising price").
   - Prior: Mar p1 (10 year Treasury up 33bps in March to 4.30%, "higher for longer"); Aug p1 (10 year "traded through 4.8%", 2 year up 12bps to 4.4%, September hike odds above 60%).
   - Issue: Hyperion priced Oct 2025 at 6.58% and El Paso priced July 2026 at 7.534%, a gap of about 95bps. The recaps show the base rate itself rose between March and August, so some of the gap is rates, not structure or supply. The draft attributes all of it to structure, supply, and duration. The El Paso spread (287.5bps over the 10 year) implies a 10 year near 4.66%, which sits below Aug p1's "through 4.8%" and is plausible for July, but the draft never states the Hyperion benchmark.
   - Fix: add one clause that part of the move is the higher Treasury base (cite the recap rate move), and compare spreads rather than yields. Pass the benchmark question to the fact checker.

2. The "270bps" CoreWeave spread versus the HY index
   - Draft: page2.p1 ("$1.1bn of five year notes at 9.25%, roughly 270bps above similarly rated debt").
   - Prior: Aug p1 and Aug p2 (HY index at 260bps, BB at 146bps, Single-B at 250bps, all near 52 week lows).
   - Issue: 270bps and 260bps are close numbers with different meanings. A reader flipping from the recap could read the CoreWeave premium as the index spread. It is also a stark contrast worth stating: AI project debt priced about 270bps wide of peers in the same month Aug p2 says HY is near its tights.
   - Fix: keep the phrase "above similarly rated debt" and, if space allows, add that this came while the HY index sat near its tights (cite the September recap number once it exists, 260bps as of end August per Aug p1).

3. Oil and Fed language if the draft adds any macro framing
   - Draft: currently no oil, Fed, or inflation facts. No conflict today.
   - Prior (inherited contradiction): Aug p1 says Brent was "pushed back above $85/barrel" after the August 31 strikes; Aug p3 says Brent "fell below $90/barrel" and was pushed "back above $90". These cannot both hold.
   - Fix: if the chair adds an oil figure, wait for the September recap and use its number. Do not copy either August figure.

4. Named firms
   - Blue Owl appears in the draft as Hyperion's 80% equity owner (page1.p1), sponsor of the CoreWeave site (page2.p1), and the developer unit on Project Jupiter (page2.callR.p). Prior: Mar p1 (Blue Owl, Apollo and Blackstone halted private credit fund redemptions) and Mar p6 (Blue Owl Capital Corporation, $7.40bn net assets, one of the largest BDCs). The names are consistent, no factual conflict. See theme link C1.

## B. Structure and voice

5. Structure matches the house pattern
   - Cover (two lines, same as Mar p5 "Case Study / Business Development Companies"), Overview page with explainer plus context (page1), and second page with Market Activity, Risk Considerations, two callouts, and charts (page2). This matches Mar p6 to p7 (Overview, then Risk Considerations with two callouts). Note: Aug ran three content pages (Aug p5 to p7) and its cover was page 4; the draft assumes cover 4, pages 5 and 6. If the September recap runs to a different length, pageNum values ("5", "6") and CLAUDE.md "report pages 4 to 6" must be rechecked.

6. Page 1 density and heading count
   - Draft: page1 has three headed sections (h1, h2, h3) and about 424 words of body plus two charts. Mar p6 has two headed sections and one chart; Aug p5 has two headed sections and an explainer diagram. The draft is denser than both. The h3 "Why It Matters for Credit" closes page 1 with a conclusion ("distinct credit sector with its own spread behavior") rather than a risk or divergence takeaway, which the house style asks each page to end on (CLAUDE.md). Suggest ending page1.p3 on a divergence line (for example capital abundant, but risk stays at project level).

7. Chart count
   - Draft has two charts on each page (four total). Mar p6 and p7 each carry one chart; Aug p5 to p7 carry one chart or diagram per page, with page 7 having one chart plus two side boxes. Four charts is above precedent. Chair decision; chart-builder and layout-qa should confirm space.

8. Sources line length
   - Draft page1.sources lists seven sources and page2.sources lists eight. Prior case study footers list three to four (Mar p6 two, Mar p7 three, Aug p5 three, Aug p6 four, Aug p7 four). Drift toward a longer list. Consider trimming to the sources actually cited on that page.

9. Number and style conventions
   - Draft writes "$27bn" and "22bps" with no space, matching Aug (for example "$322.9bn", "260bps"). Mar uses "$159.00 bn" and "37.00 bps". Aug is the nearer template, so the draft is aligned. Aug itself mixes "146 bps" and "260bps"; draft is consistently unspaced.
   - Draft writes "10 year", "30 year", "five year", "A+ rated" without hyphens to obey the no dash rule. The prior reports use hyphens freely (Aug p1 "10-year", "US-Iran"; Aug p3 "3.5%-3.8%"; Mar p6 "mid-sized"). The no dash rule in CLAUDE.md is therefore stricter than the reference reports. This is a style editor and chair matter, not an error. A grep of content.js found no dashes or colons in body text other than "BBB-" and the "Sources:" labels.
   - Draft uses "US"; Aug uses "U.S." in the case study pages (Aug p5, p6) and "US" in the recap (Aug p1, p3). Either is defensible.

10. Voice
   - Tone is close to the prior case studies: dense, stat led, named deals. The draft is more declarative and uses more narrative framing ("Hyperscaler borrowing is now carrying a cost", "Oracle Under Pressure") than Aug p6, which describes first and closes with a one sentence divergence. This is within range. Prior callout headings are noun labels (Mar p7 "Ivanti Downgraded", "KKR Downgraded"); draft headings "Meta SPVs Reprice" and "Oracle Under Pressure" follow the same pattern.

## C. Themes to link or avoid repeating

C1. Blue Owl as both the stress story and the funding source
   - Draft: page1.p1, page2.p1, page2.callR.p. Prior: Mar p1 (redemptions halted by Blue Owl, Apollo, Blackstone), Mar p4 (elevated BDC redemptions, thin secondary market), Mar p6 (BDC role in private credit).
   - Link: the private capital partner filling the AI financing gap (Morgan Stanley up to $800bn of private credit by 2028, page1.p2) is the same ecosystem that halted redemptions in March. Long dated project debt on one side and redemption pressure on the other is a genuine divergence the draft does not mention. Suggested fix: one clause in page1.p2 or page2 risk paragraph, for example that this private credit funds the gap while redemption pressure at BDCs was already visible in March, pointing to the March case study. Do not repeat the BDC explainer (Mar p6).

C2. SPV and structure explainers already covered
   - Draft: page1.p1 re-explains special purpose vehicles and tranche style risk. Prior: Aug p5 (ABS Overview defines SPV, waterfall, credit enhancement, with a diagram) and Aug p7 (esoteric ABS including data centers).
   - Fix: shorten the SPV definition and add a pointer to last month's ABS case study. Add a sentence on how the Hyperion style bonds differ from ABS (a single tenant lease versus a diversified pool, Aug p5).

C3. Data center ABS
   - Draft: no mention. Prior: Aug p7 (data center is the fastest growing esoteric ABS area, S&P rated $9.3bn in 2025 versus $3.9bn in 2024, $3.3bn YTD through July 6; Aug p7 also says "$61bn YTD in 2026"). The draft covers project bonds and loans that are a neighboring route to the same assets (and could later be refinanced into ABS).
   - Fix: add a short cross reference without citing Aug p7 numbers (see D3 below).

C4. AI as both funding boom and software credit risk
   - Prior: Mar p1 (software shocks from AI competition halting returns in equities, BSL, and private credit), Mar p2 (software loans down almost 6% YTD), Mar p6 and p7 (public BDCs 20.8% software, 41% software and tech, Ivanti case). Draft is silent. The same technology trend appears in the financing boom (draft) and in software credit stress (March). A one line cross reference would link the two reports.

C5. Equity strength versus credit pricing
   - Prior: Aug p1 (equities up on "AI-related capex commitments", S&P up 3% in August and 13.1% YTD) and Aug p2 (HY issuance fell to $12bn, lowest in a year; "borrowers, not investors, are staying on the sidelines"). Draft: page1.p2 (record IG supply of $145.2bn in August, hyperscalers rising to 9% of dollar issuance).
   - Link: equities are rewarding the capex while the high yield primary market is thin and IG supply is at records. The draft's "abundant capital and its rising price" divergence can be sharpened by noting that IG supply is at records while HY supply is at a one year low (Aug p2). Also Mar p4 (Q1 high grade issuance a record $616bn despite a weekly pullback) confirms the record supply trend. Check the September recap for August IG and HY issuance to avoid contradiction.

C6. Macro backdrop
   - Prior: Mar p3 (Brent peak near $120, Strait of Hormuz) and Aug p3 (hawkish Fed, three dissents, payrolls down 23,000). The draft's point that borrowing costs are rising ties to the hawkish repricing (Aug p1), but the draft does not say so. See finding 1.

## D. Internal contradictions in the prior reports that the draft could inherit (listed for the chair, not fixed)

D1. Brent level, Aug p1 versus Aug p3: "above $85" versus "below $90 ... back above $90".
D2. Data center ABS size, Aug p7: "$61bn YTD in 2026" versus "$3.3bn YTD through July 6" in the same section; "roughly 12% of the esoteric market" does not reconcile with $61bn against $210.9bn outstanding esoteric ABS (about 29%). Avoid quoting data center ABS sizes from Aug p7 until the September recap or a source resolves this.
D3. Aug p7: "$3.9bn" appears both as 2024 data center issuance and as aircraft outstanding; verify before reuse.
D4. Aug p7 cites an "S&P's 3Q26 roundup" in an August report, and says "2Q26 issuance slowed ... before rebounding". Timing is unclear.
D5. Aug p1 and p3: PCE 3.7% is called the "most recent PCE print"; the Aug p3 chart is labeled "Core PCE". Headline versus core is ambiguous. Do not cite PCE without clarifying.
D6. Aug p6: "more than 14.0x lower" for non-prime versus prime net loss rate; 9.5% / 0.7% is about 13.6x.
D7. Aug p5 and p7: SIFMA appears as "SIMFA" (p5 sources) and "SIFMA" (p7 sources).
D8. Mar p2: "lower quality credit rebounded in March" sits in a paragraph where CCC spreads widened 68bps and CCCs returned -1.72% for the month. Also Mar p2 single-B spreads of 346bps equal the March 30 HY index level of 346bps, which may be a transposition.
D9. Mar p6: public 50 BDCs ($159bn) plus non-traded 47 ($205bn) plus private 59 ($69bn) sum to $433bn, but the text says the total is $475bn.
D10. Mar p7: PIK data dated "Q1 2025" in a March 2026 report (stale). Mar p6 and p7 have typos ("DBCs", "BDCS", "there concentration").
D11. Mar p1 versus Mar p4: "Pockets of stress" and halted redemptions (p1) versus the secondary market description of loans offered "at or near par" (p4). Not a conflict, but the March case study does not mention a halt.

## E. Internal consistency of the draft (for the fact checker)

E1. page1.p2 says capex of about $750bn against operating cash flow of roughly $778bn, with debt covering about one third of spending. If cash flow exceeds capex, a one third debt share needs explanation (for example, cash flow already committed to buybacks and dividends). Flag for the fact checker.
E2. page1.p2 names four issuers (Amazon, Alphabet, Meta, Oracle) for the $194bn figure and then "five largest hyperscalers" for the forecast. Name the fifth or reword.
E3. page1.p1 says Hyperion "remains the largest private credit transaction ever". Not in either prior report. Fact checker to confirm; recaps cannot support it.
E4. page2.callR.p says Oracle says the project is on schedule while also sending a force majeure notice citing power delays. That tension is accurately reported but could be read as an error. Keep the attribution to Reuters and Oracle clear.

## Optional cross references the chair could add if space allows

1. "Last month's ABS case study" pointer for SPV mechanics (Aug p5), and data center ABS as the next stage (Aug p7), without quoting Aug p7 figures.
2. "In March, private credit funds at Blue Owl, Apollo, and Blackstone halted redemptions" (Mar p1) next to the Morgan Stanley $800bn private credit need.
3. AI as the cause of both the financing boom and software credit stress (Mar p1, p2, p6).
4. IG supply at records versus HY supply at a one year low, $12bn in August (Aug p2).
5. HY index near its tights at 260bps (Aug p1, p2) beside CoreWeave site pricing 270bps wide of peers.
6. The March to August rise in the 10 year, 4.30% to above 4.8% (Mar p1, Aug p1), as a share of the Hyperion to El Paso repricing.
