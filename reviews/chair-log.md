# Chair Log

## Round 1 merge (2026-10-06)

Inputs: reviews/fact-check.md (69 items: 47 confirmed, 5 conflict, 17 unverifiable), reviews/skeptic.md, reviews/continuity.md.
Note: the fact checker could not open any page (WebFetch blocked by the egress proxy). Every "confirmed" rests on search results naming the original outlet. A human should click through chart values before any chart is published.

### Changes applied to content.js

| Field | Change | Driver |
|---|---|---|
| page1.p1 | "off balance sheet joint venture" to "joint venture"; leverage off the tenant's "reported" balance sheet | Skeptic (agencies impute leases) |
| page1.p1 | SPV explainer now points to last month's ABS case study | Continuity C2 |
| page1.p1 | "bonds or loans" to "bonds" | Hyperion and El Paso are bonds; loans covered in callR |
| page1.p1 | Added Hyperion spread, about 225bps over Treasuries; "Meta's own corporate debt" to "a comparable Meta corporate bond" | Fact check ids 5, 6, 22 |
| page1.p1 | Cut "It remains the largest private credit transaction ever" | Fact check id 7 unverifiable; skeptic (144A bond, not clearly private credit) |
| page1.p1 | Oracle "borrowing directly" reworded to "leaned more on its own balance sheet while also leasing campuses financed at the project level" | Fact check id 8 conflict with Jupiter callout |
| page1.p2 | Cut $778bn operating cash flow; now capex about $750bn with about one third debt funded | Fact check id 10 unverifiable; skeptic and continuity flagged the OCF versus one third contradiction |
| page1.p2 | "five largest hyperscalers" now says "the five, adding Microsoft" | Fact check scope note, continuity E2 |
| page1.p2 | Cut $145.2bn August IG record, "third straight monthly record", and 2% to 9% share | Fact check ids 16, 17, 18 unverifiable (aggregator only) |
| page1.p2 | Added IG versus HY divergence using the August recap (HY $12bn, one year low) | Continuity C5 |
| page1.p2 | Morgan Stanley "up to $800bn" to "more than $800bn of data center financing through 2028, led by asset based finance" | Fact check id 19 conflict |
| page1.p2 | Added Blue Owl redemption halt cross reference to the March recap | Continuity C1 |
| page1.p2 | Maturity mismatch reframed from GPUs to the four year initial lease | Skeptic objection 5 (SPVs finance buildings and leases); fact check id 21 GPU life unverifiable |
| page1.p3 | "higher yield" to "wider spread" | Fact check id 22, skeptic objection 1 |
| page1.p3 | Oracle line limited to Oracle ("can put a hyperscaler itself under ratings pressure") | Skeptic overstated claims |
| page1.p3 | Closing line changed from "distinct credit sector" assertion to a divergence takeaway | Skeptic (no spread series), continuity finding 6 (page must end on risk or divergence) |
| page1 chart1 | Chart C retitled "2026 Capex Versus Debt Funding ($bn)" (capex $750bn against debt issuance $250bn, both confirmed) | Fact check id 61 |
| page1 chart2 note | GPU life removed from chart D note | Fact check id 62 |
| page1 sources | Dropped The Asset (not cited), added Meta (press release is the primary source) | Continuity finding 8, fact check id 1 |
| page2.p1 | Yield drift now described as blending rates and spread; concession presented as the cleaner credit signal | Skeptic objection 3 |
| page2.p1 | El Paso 7.534% to "about 7.5%"; "10 year" benchmark dropped | Fact check ids 29, 30 |
| page2.p1 | El Paso orders $17bn to about $20bn, about 1.6 times the deal; $12.55bn deal size removed here | Fact check ids 31, 32 |
| page2.p1 | CoreWeave notes softened with "reportedly", labeled high yield, "leased entirely" to "leased" | Fact check id 33 aggregator only; skeptic objection 4 |
| page2.p2 | Lease and RVG mechanics made explicit (renewal or RVG after year four, RVG covers first 16 years) | Skeptic objection 2; fact check ids 34, 35 |
| page2.p2 | GPU life now attributed to Moody's (four to six years) | Fact check id 21 |
| page2.p2 | BIS wording to "increasingly sits in vehicles funded through private placements" | Fact check id 36 |
| page2.callL | Cut "long lease"; added 2049 maturity, Hyperion spread, amortizing, "about $12.5bn", "about 7.5%", "also rated A+ by S&P" | Fact check ids 32, 29, 40, 41; skeptic objection 2 |
| page2.callL | "shows" to "suggests"; part of gap attributed to higher Treasury yields; comparison now on spread | Skeptic objection 1; continuity finding 1 |
| page2.callR | Cut $43bn fiscal 2026 debt | Fact check id 45 unverifiable |
| page2.callR | "cash burn" to "widening cash flow deficit" | Fact check id 43 |
| page2.callR | Reuters attribution corrected (not seeking to terminate, can defer rent up to three years, owes full term) | Fact check id 49 conflict |
| page2 sources | Dropped Capacity (no longer cited), added Meta | Continuity finding 8 |

### Suggestions rejected or deferred

| Suggestion | Seat | Reason |
|---|---|---|
| Add OpenAI concentration behind Oracle and CoreWeave | Skeptic | Not fact checked this round and the word budget is full. Kept as an open flag; closing line on page 5 now refers to "a short list of tenants". |
| Add covenants, reserves, recovery value, who holds the paper | Skeptic | No sourced figures available; adding them would be invention. |
| Name the CoreWeave notes' rating | Skeptic | No rating found in sources; labeled high yield instead. |
| Trim sources lines to 3 or 4 | Continuity | Every listed source is cited on the page; accuracy outranks precedent. |
| Cut to one chart per page | Continuity | Template was designed with four slots; layout QA will decide if space is a problem. |
| AI and software credit stress cross reference (March) | Continuity | Word budget full. |
| HY index near its tights (260bps) beside CoreWeave pricing | Continuity | Risk of confusing two different spreads; budget full. |
| Hyperion "largest private credit deal on record when it priced" | Fact check | Cut instead of softened, since the skeptic disputes whether a 144A bond counts as private credit. |

### Open flags after Round 1

- El Paso spread of about 287.5bps, and therefore the "roughly 60bps wider" spread gap in callL, rest on an aggregator (Zhitong via AiCoin and Bitget).
- CoreWeave site notes (9.25%, about 270bps) are aggregator only (AI Weekly citing Bloomberg).
- Moody's four to six year obsolescence figure is press tier (DCD).
- Every "confirmed" verdict was made from search results, without opening pages.

## Round 2 (2026-10-06)

### Style editor (reviews/style.md)
- Applied: page1.p1 run on sentence split after "ABS case study".
- Applied: page2.p2 cut filler opener "The structural risks are familiar to credit investors." (113 to 105 words).
- Flags checked by the chair: the March recap (p1) names Blue Owl, Apollo and Blackstone as halting redemptions; the August recap says HY volume fell to $12bn, lowest in over a year. Both cross references hold. "Last month's ABS case study" assumes this is the September edition.

### Chart builder (reviews/charts.md)
- A stays verified false (Oracle 6.5%, El Paso 7.534%, CoreWeave 9.25% unverifiable).
- B, C, D set verified true; every value carries a "confirmed" fact check verdict. Caveat kept: confirmations came from search results, not opened pages. Revert to false if Will's click-through fails.
- Chair change: page1.chart2Title retitled "Lease Term Versus Debt Maturity (years)" since the GPU bar was dropped. The internal title field in data/chart_data.json still reads "Asset Life"; it is not displayed.

### Layout QA (reviews/layout.md), all slides PASS
- Applied: "Why It Matters" heading and body moved up 0.15in (gap was larger than other sections).
- Applied: "Risk Considerations" heading and body moved down 0.08in to clear chart B's footnote; callout headings and bodies moved down 0.08in to keep the gap below the risk body. Rendered and checked.
- Rejected: left aligning the callout bodies. House style is justified body text.

## Rerun (Round 1 fact checker, then Round 2 once more)

### Fact check rerun (reviews/fact-check-r2.md: 58 items, 49 confirmed, 6 conflict, 3 unverifiable)
- page1.p2: cut "high yield issuance at a one year low of $12bn" (conflict; Newfleet and Muzinich report about $27bn for August 2026). The August recap's $12bn figure may itself be wrong; flagged for Will. Replaced with Goldman's 2027 issuance at about 35% of capex (confirmed).
- page1.p2: Blue Owl "halted fund redemptions in March" to "halted or capped fund redemptions early this year" (Blue Owl release dated February 18; Apollo capped).
- page1.p2: Morgan Stanley figure labeled "global".
- page1.p2: maturity mismatch now cites the four year initial terms at both Hyperion and El Paso (Meta El Paso release).
- page2.p1: "Meta's El Paso bonds" to "The El Paso joint venture bonds" (issuer is Sopaipilla Investor LLC); orders "peaking near $20bn" (Round 1 fix on $17bn was too firm).
- page2.p1: CoreWeave notes now confirmed via Bloomberg; "reportedly" removed, S&P BB- rating added, 270bps described as a gap to the average yield on similarly rated debt.
- page2.p2: residual value guarantee described as capped.
- callL: "structure, supply, and duration" to "structure and supply" (both deals amortize to 2048 and 2049).

### Round 2 once more
- Style editor: no redlines.
- Chart builder: D's El Paso bar replaced with initial lease 4 plus potential term 20; D back to verified false because the Hyperion maturity (24 years) is approximate (23 or 24). A footnote updated. A false, B and C true.
- Layout QA: all slides PASS. Applied: page 5 charts lifted 0.2in; page 6 charts moved down 0.1in and shortened 0.09in to clear the Risk heading. Rejected again: left aligned callouts (house style is justified).
- Stopped after two full rounds, per /committee.

# Version 2 (three page rewrite, 2026-10-06)

Author feedback: not in depth enough, needs specific credit pricing and LTV examples, must be current for October, no March report references, no stale cutoffs such as "July 7". Rewritten from reviews/research-deals.md, research-market.md and research-structures.md, then reviewed (fact-check-v2.md: 131 items, 105 confirmed, 8 conflict, 18 unverifiable; skeptic-v2.md; continuity-v2.md).

## Round 1 merge
| Change | Driver |
|---|---|
| Hyperion secondary price (low 90s, near T+230, ten point loss) cut from page 6 and the Meta callout | Fact check ids 42, 105, 106 aggregator only; skeptic objection 1 (loss would be rates, not credit). Chair search found only Protos (94.4, likely July) |
| Meta callout now uses the about $28bn RVG against $27.3bn of bonds and June 2029 rent start | Skeptic gap (RVG size against bonds); chair search, Meta 10-K via press |
| Saline cell to "7.5% at 98.75", final 2045, rating "Not disclosed" | Fact check C1, id 55 |
| CoreWeave callout "best and worst secured loans" to "A3 and Ba2 facilities", plus timing caveat | Fact check C2; skeptic objection 3 |
| Oracle "T+95 for BBB peers" to "US BBB index traded around T+95" | Fact check C3 |
| Abilene cut from text and chart | Fact check C4, ids 14, 15 trade press only |
| "four times for large 2026 deals" to "average bond sale this year" | Fact check C5 |
| Beacon Point record claim attributed to Hut 8 and narrowed to HPC | Fact check C6; skeptic |
| "A+ rating on Meta's lease" to "A+ rated notes backed by Meta's lease" | Fact check C7 |
| Meta 2066 T+147 versus T+110 cut, confirmed books kept | Fact check ids 74, 75; chair search found conflicting 140 and 180 |
| Oracle "long bonds above 8%" cut | Fact check id 97; chair search found aggregators only |
| Oracle FCF negative $5.4bn and prior year capex $8.5bn cut | Fact check ids 87, 88 |
| Oracle balance restored with S&P 4.5x trigger and "Oracle says the project is on schedule"; "as banks struggled" replaced with FT's "syndicate banks holding more than planned" | Skeptic objection 5 |
| OpenAI backs "one" CoreWeave facility, not two | Fact check id 101 |
| Aligned 70% recast as the master trust's senior note cap | Fact check ids 17, 18; chair search found S&P presale wording on the trust |
| Sizing mechanics added (rent covers debt service with a thin cushion, amortize before lease and renewals end), KBRA haircut explained (cash flow 18.9% below issuer) | Skeptic depth gaps |
| Thesis refined to "tenant sets the starting point, tenor and timing set the rest"; final maturity column added to the table | Skeptic objection 2 |
| Apollo order cover from about 5x to below 2x added | Research (Reuters, Apollo) |
| Moody's $662bn dated to end 2025 | Fact check stale note |
| Page 5 overview trimmed | Continuity (density) |

## Rejected or deferred
| Suggestion | Reason |
|---|---|
| Fitch 1.32x DSCR figure | Aggregator only (chair search); mechanism described without the number |
| Spread decomposition, recovery, GPU residuals, who holds the paper | No sourced figures; word budget |
| WAL column | Not available for most deals; final maturity used instead |
| Optional August cross references | Budget full; page 5 overview no longer points to the ABS case study |

## Round 2 (version 2)
- Style editor (style-v2.md): all five redlines applied; no numbers changed.
- Chart builder (charts-v2.md): A and C verified true (every value confirmed); B and D held false. Chair fixed a colon in D's footnote, removed an unsourced "10 year rose about a point" from C's footnote, and relabeled B's bar "2026 to date".
- Layout QA (layout-v2.md): FAIL on all three pages (overlap on page 5, white space on page 6, callout near the rule on page 7). All coordinate fixes applied and checked in the render.

## Fact check rerun (fact-check-v2-r2.md: 47 items, 37 confirmed, 3 conflict, 7 unverifiable)
- R1: RVG now "capped at about $28bn and covering the first 16 years, bridges most of the gap".
- R2: CoreWeave callout now says the May to August step reflects shorter customer contracts as well as timing.
- R3: Meta callout "shows ... supply, structure, and timing" to "suggests ... supply and timing".
- Hyperion rent start "June 2029" to "2029".
- Aligned recast as S&P wording on past series of the master trust; table cell "~70% LTV (past series)".
- US BBB index near T+95 attributed to TwentyFour Asset Management.
- "with a thin cushion" cut (no sourced coverage figure).
- Final trims to word budgets.

## Open flags for Will
- No source page was opened by any seat (proxy blocked fetches). Click through the chart A and C values and the table before publishing.
- Chart B (2026 issuance to date of $223bn) rests on one aggregator relaying CNBC and LSEG; refresh from LSEG.
- Chart D held because Aligned's 70% is S&P wording from earlier series; open the July 2026 S&P presale.
- "Oracle says the project is on schedule" is quoted widely but the Bloomberg original was not opened.
- September recap is not in reference/, so rates and spreads were not cross checked against it.
- Cover photo is a stand in.

Committee complete, 2 rounds (round 1 review and merge, round 2 style, charts, build, layout, plus a fact checker rerun).
