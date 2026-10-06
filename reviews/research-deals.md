# Research: deal level credit detail, AI and data center financings

Prepared 2026-10-06 for the AI Infrastructure Financing case study. Research notes only. Reviewers and the chair should confirm figures before anything goes into content.js.

## Method and caveats

- Sources come from web search result snippets. WebFetch was blocked by the egress proxy for sec.gov, kbra.com, thestar.com.my, foreignpolicyjournal.com and substack, so no primary document was opened in full. A figure marked "primary" means the snippet came from a primary page (SEC, company IR, rating agency, sponsor press release). The fact checker should still open that page before marking a chart verified.
- Tier key: **primary** = filing, rating agency or company. **press** = Bloomberg (including syndications on Yahoo Finance, BGov, Bloomberg Law, Advisor Perspectives, BNN), Reuters, FT, WSJ, PitchBook, IFR. **aggregator** = everything else (substacks, DCD, aiweekly, Global Data Center Hub, crypto sites, X posts, Investing.com rewrites, trade blogs).
- **AGG ONLY** marks a figure found only in an aggregator. Under the committee rules it is not confirmed.
- The session hit its web search cap (200 calls, shared across agents) before a few follow ups finished. Still open: Related Digital/Oracle Saline final coupon, Hut 8 River Bend terms, the "CoreWeave-backed $3.5bn junk bond", Vantage US ABS 2026, Switch 2026-1 coupon and LTV, and any Microsoft or Alphabet USD deal in Aug to Oct 2026.
- Conflicts between sources are listed under each deal and are not resolved.

---

## 1. Meta Hyperion, Beignet Investor LLC (Blue Owl 80 / Meta 20), Richland Parish, Louisiana (2025 anchor)

- Issuer: Beignet Investor LLC, a bankruptcy remote SPV that owns 80% of the JV with Meta. Source: https://x.com/TheValueist/status/1984231167290139044 (aggregator, AGG ONLY for the structure detail). Meta's own announcement of the JV: https://investor.atmeta.com/investor-news/press-release-details/2025/Meta-Announces-Joint-Venture-with-Funds-Managed-by-Blue-Owl-Capital-to-Develop-Hyperion-Data-Center/default.aspx (primary, Oct 2025)
- Size: $27.294bn single tranche, 144A for life, senior secured, fully amortizing. Source: the TheValueist X post above (aggregator). Roughly $27bn is also reported widely in the press.
- Priced: 2025-10-16 at par. Coupon 6.581% fixed, paid quarterly, 30/360. Expected final maturity 2049-05-30. Source: the X post above (aggregator). The 6.581% coupon and 2049 maturity are also in the rallies.ai summary (aggregator) quoting market data.
- Spread at launch: **CONFLICT.** About T+225 per the X post (aggregator). "185 bps at launch" per https://rallies.ai/news/are-ai-credit-cracks-a-warning-or-a-buy-signal-ac01da097cced0ce (aggregator, probably rewriting a Globe and Mail or Bloomberg piece). The fact checker needs a Bloomberg or IFR source to settle this.
- Rating: S&P preliminary A+ (stable). Source: https://www.ifre.com/ifr-awards/2340435/the-metablue-owl-deal-broken-down-off-balance-sheet-gymnastics-24-years-after-enron (press, IFR, via snippet)
- Equity split: Blue Owl funds 80%, Meta 20%. One report puts equity at Meta $5.8bn and Blue Owl $23.0bn, but that mixes equity and debt sizing and needs care. Morgan Stanley arranged about $27bn of debt and about $2.5bn of equity into the SPV. Sources: IFR link above (press). Search snippet also drew on stohl.substack and globaldatacenterhub (aggregator).
- Residual value guarantee: Meta RVG runs 16 years. It is triggered if Meta fails to renew at lease expiry, terminates early or defaults. Source: IFR link above (press, via snippet)
- Anchor allocations: Pimco about $18bn, BlackRock more than $3bn. Source: X post (AGG ONLY in this pass; FT and Bloomberg reported these in 2025)
- Early secondary: traded up to about 109, yield about 5.68%, per FT Alphaville as cited by the X post (aggregator citing FT; get the FT original)
- Secondary in 2026: spread about 230 bps in Sept 2026, record wide about 255 bps in July 2026. Bonds traded at 91 cents, yield as high as 7.55%. Source: https://rallies.ai/news/are-ai-credit-cracks-a-warning-or-a-buy-signal-ac01da097cced0ce (aggregator; the underlying story looks like Globe and Mail or Bloomberg; AGG ONLY until the original is found)
- Takeaway: the A+ bond moved from a premium (about 109) to a discount (about 91) in under a year without any change in the credit. This is spread and duration risk on lease backed paper.

## 2. Meta El Paso, Sopaipilla Investor LLC (BlackRock 80 / Meta 20), El Paso, Texas (July 2026)

- Issuer: Sopaipilla Investor, LLC, the holding vehicle tied to Project Sopaipilla Holdings LLC (the JV that owns the campus). BlackRock holds 80% and a Meta affiliate 20%. Sources: https://pitchbook.com/news/articles/investors-flock-to-12-5b-data-center-bond-deal-for-blackrock-sponsored-sopaipilla (press, PitchBook); https://www.advisorperspectives.com/articles/2026/07/24/blackrock-12-3-billion-bond-sale-meta-data-center (press, Bloomberg syndication)
- Campus: 960 MW. Source: PitchBook (press)
- Launched 2026-07-24 at $12.3bn, single tranche due 2048. Initial price talk about T+287.5. Sources: Advisor Perspectives/Bloomberg (press). IPT also in https://www.foreignpolicyjournal.com/2026/07/24/meta-platforms-nasdaq-meta-faces-higher-borrowing-costs-on-12-billion-blackrock-backed-ai-data-center-deal/ (aggregator)
- Priced 2026-07-27: $12.547bn of 7.534% amortizing senior secured notes due 2048-11-30 at T+287.5. Source: PitchBook (press)
- Ratings: S&P A+ (prelim) and Fitch AA-(EXP), both stable. Source: PitchBook (press)
- Order book: **CONFLICT.** About $20bn at peak (1.6x) per Bloomberg via https://www.advisorperspectives.com/articles/2026/07/28/blackrock-dodges-ai-bond-trading-flop-junk-yields (press). About $17bn per a search snippet (aggregator). Bloomberg says the 2026 average book was close to 4x. Use the Bloomberg figure.
- Vs Hyperion: about 40 bps wider (about 7.5% vs about 6.6%). Sources: https://electroneconomics.substack.com/p/metas-el-paso-bond-priced-40-basis (aggregator); https://www.edgen.tech/news/stock/metas-12b-data-center-bond-costs-04-more-as-ai-debt-tightens (aggregator). This is arithmetic on the two coupons (7.534 minus 6.581 is about 95 bps). The "40 bps" refers to the guidance yield against Hyperion's then-current secondary level, not its issue yield. Use with care.
- Lease: 20 year Meta lease starting 2028, renewal options every four years, heavy penalties for early exit. Source: foreignpolicyjournal (aggregator, AGG ONLY)
- RVG: Meta residual value guarantee with an aggregate threshold of about $13bn that steps down over time, covering specified conditions in the first 16 years. Source: search snippet drawing on implicator.ai and globaldatacenterhub (aggregator, AGG ONLY)
- Secondary: rallied in gray market and early trading after pricing. Source: Bloomberg via Advisor Perspectives (press, 2026-07-28)
- Takeaway: same sponsor template and same A+ tenant risk as Hyperion, but it needed a 7.5% yield and drew the weakest book of any 2026 jumbo AI IG deal.

## 3. Oracle Project Jupiter, Doña Ana County, New Mexico (Stack Infrastructure, BorderPlex, Blue Owl; tenant Oracle for OpenAI)

- Loan: about $18bn leveraged/construction loan from about 20 banks. Agents were SMBC, BNP Paribas, Goldman Sachs and MUFG. Closed late 2025. Sources: https://news.bgov.com/artificial-intelligence/banks-lend-18-billion-for-oracle-tied-data-center-in-new-mexico (press, Bloomberg); bank names from https://thedarksideoftheboom.substack.com/p/oracles-project-jupiter-loans-fall (aggregator)
- Borrower: the landlord (Blue Owl owned Stack and its partners), not Oracle. Source: https://r40.io/news/orcl-18bn-jupiter-loan-is-the-landlords/ (aggregator)
- Campus: about 1,400 acres, 2.45 GW. Sources: DCD and techzine (aggregator)
- Secondary: quoted 89 to 91 cents by syndicate banks including Santander and Jefferies, about 2026-09-18/19. Banks hold more than planned and the sell down has stalled. Source: FT via https://www.thestar.com.my/tech/tech-news/2026/09/19/oracle039s-18-billion-data-center-debt-under-pressure-ft-reports (press, FT syndication)
- SOFR margin and tenor: NOT FOUND
- Force majeure: Oracle sent a force majeure notice to the Blue Owl unit about 2026-09-24. If accepted for a power related event, rent could be delayed up to three years once due. The 2028 launch is at risk, and New Mexico rejected a gas pipeline extension in July 2026. Sources: https://thenextweb.com/news/oracle-force-majeure-project-jupiter-new-mexico (aggregator citing Bloomberg); https://www.datacenterdynamics.com/en/news/oracle-issues-force-majeure-notice-to-blue-owl-following-series-of-setbacks-at-project-jupiter-data-center-campus-report (aggregator); https://www.insurancejournal.com/news/west/2026/09/25/886812.htm (aggregator, likely a Bloomberg wire)
- Tenant credit: S&P cut Oracle to BBB- from BBB on 2026-07-09. Sources: https://www.heise.de/en/news/S-P-downgrades-Oracle-to-BBB-only-one-notch-above-junk-level-11363472.html (aggregator); FT piece above (press)
- Takeaway: this is the clearest 2026 mark to market of hyperscale construction risk. A loan to an IG tenant's landlord trades at a 10 point discount once power, permitting and tenant credit all move against it.

## 4. Vantage Frontier (Shackelford County, TX) and Port Washington (WI), Oracle/OpenAI ($38bn loans)

- Size: $38bn across two term loans, about $23.25bn Texas (Frontier) and $14.75bn Wisconsin. Leads JPMorgan and MUFG. Sources: https://www.bloomberg.com/news/articles/2025-09-04/banks-ready-38-billion-of-debt-for-data-centers-tied-to-oracle (press); https://www.datacenterdynamics.com/en/news/jpmorgan-chase-and-mitsubishi-ufj-lead-38bn-debt-package-for-oracle-linked-data-centers-report/ (aggregator)
- Pricing: about SOFR + 250 bps. Tenor 4 years plus two 1 year extensions. Source: Bloomberg via DCD and Capital Brief (press via aggregator)
- Syndication fees: about 1% upfront for tickets of $300m or more, 0.75% or lower below that. Source: https://www.bloomberg.com/news/articles/2025-11-10/vantage-data-centers-loan-has-300-million-floor-for-top-fees (press, 2025-11-10)
- Allocations: Wells Fargo, BNP, Goldman, SMBC, SocGen. Source: DCD (aggregator)
- Feb 2026: banks reportedly struggled to offload the $38bn. Source: https://dnyuz.com/2026/02/20/blue-owl-shopped-debt-for-a-coreweave-data-center-lenders-werent-sold/ (aggregator rewriting a press story)
- Related: Ares $2.4bn loan for Vantage, 2026-02-10. Source: https://www.bloomberg.com/news/articles/2026-02-10/ares-lands-2-4-billion-loan-deal-for-vantage-data-centers (press, headline only)

## 5. Stargate Abilene (Crusoe, Blue Owl, Primary Digital; tenant Oracle for OpenAI)

- Debt: two JPMorgan loans totalling $9.6bn, a $2.3bn initial loan (Jan 2025) and about $7bn (later reported as a $7.1bn construction loan arranged by Newmark). Sources: https://commercialobserver.com/2025/01/j-p-morgan-chase-loan-texas-data-center-oracle/ (aggregator, trade press); https://www.costar.com/article/1387166843/first-stargate-data-center-project-lands-7-1-billion-construction-loan (aggregator, trade press)
- Equity: about $5bn cash from Crusoe and Blue Owl. Total $15bn JV, 1.2 GW. 15 year Oracle lease. Sources: DCD https://www.datacenterdynamics.com/en/news/crusoe-secures-116bn-in-debt-and-equity-for-openais-stargate-data-center-campus-in-abilene-texas/ (aggregator); Sacra (aggregator)
- Implied leverage: $9.6bn debt over ($9.6bn + $5bn equity) is about 66% loan to cost. This is derived and should be labelled that way.
- Pricing: NOT FOUND

## 6. CoreWeave GPU backed DDTL facilities (the issuer's whole credit curve)

| Facility | Close | Size | Pricing | Rating | Maturity | Source (tier) |
|---|---|---|---|---|---|---|
| DDTL 1.0 | 2023 | $2.3bn | about 15% all in floating | unrated | n/a | globaldatacenterhub (AGG ONLY) |
| DDTL 2.0 | 2024 | $7.6bn | avg rate on drawn 10.53% at 2024-12-31 | unrated | n/a | CoreWeave S-1 https://www.sec.gov/Archives/edgar/data/1769628/000119312525044231/d899798ds1.htm (primary) |
| DDTL 3.0 | 2025-07-31 | $2.6bn | SOFR + 400 | unrated | 2030-08-21 | https://investors.coreweave.com/news/news-details/2025/CoreWeave-Closes-2-6-Billion-Secured-Debt-Financing-Facility-Strengthening-Market-Position-as-AI-Cloud-Leader/default.aspx (primary). Backs the OpenAI contract. Leads MS and MUFG |
| DDTL 4.0 | 2026-03-30/31 | $7.5bn, expandable to $8.5bn | floating SOFR + 225, fixed tranche about 5.9% | Moody's A3, DBRS A (low) | 2032 | https://investors.coreweave.com/news/news-details/2026/CoreWeave-Closes-Landmark-8-5-Billion-Financing-Facility-Achieving-First-Investment-Grade-Rated-GPU-backed-Financing/default.aspx (primary). Backed by the Meta contract (Yahoo/Bloomberg headline). Anchored by Blackstone Credit and Insurance |
| DDTL 5.0 | 2026-05-18 | $3.1bn | SOFR + 450 (tightened 50 bps), base + 350, 50 bps undrawn fee | Moody's Ba2, Fitch BB+ | 2031-11-15 | https://www.businesswire.com/news/home/20260518337916/en/ (primary). Orders over $15bn per https://www.bloomberg.com/news/articles/2026-05-05/coreweave-gets-lower-costs-on-3-1-billion-loan-as-demand-surges (press). First publicly syndicated HPC backed DDTL. GPUs for OpenAI and Cohere |
| DDTL 5.5 | 2026-08-10 | $2.6bn | SOFR + 550 | Moody's Ba2, Fitch BB+ | 2031-09-01 | https://www.sec.gov/Archives/edgar/data/1769628/000176962826000357/ex991pr.htm (primary). Leads JPM and MUFG. 100 bps wider than DDTL 5.0 at the same ratings. About 5 year loan against customer contracts averaging about 3 years per https://www.theenergymag.com/news/2026-08-11/coreweave-ai-2-6-billion-wider-spread (aggregator) |

- GPU advance rate on CoreWeave facilities: NOT FOUND in a primary source. One aggregator says about 70 cents on the dollar for an early facility (https://medium.com/@Elongated_musk/silicon-to-securities-how-gpus-became-aaa-rated-abs-assets-c0e75199327a, AGG ONLY).
- Takeaway: pricing depends on the contract counterparty, not the GPU. Against Meta the facility is A3 at SOFR + 225. Against a mix of OpenAI, Cohere and shorter contracts it is Ba2 at SOFR + 450 to 550. DDTL 5.5 also shows a duration mismatch (5 year loan, about 3 year contracts).

## 7. CoreWeave unsecured bonds and converts

- 9.25% senior notes due 2030-06-01, issued 2025-05-27 at par. Bid about 93.5 (yield about 11.46%) in late Sept 2026. Source: https://cbonds.com/bonds/1866287/ and https://www.bondsupermart.com/bsm/bond-factsheet/USU2069EAA83 (aggregator, AGG ONLY for the price)
- 9.750% senior notes due 2031-10-01: $1.75bn priced about 2026-04-09 (upsized), plus a $1.0bn add on priced 2026-04-16 at 102.000. Total $2.75bn. Senior unsecured with subsidiary guarantees. Sources: https://investors.coreweave.com/news/news-details/2026/CoreWeave-Announces-Pricing-of-1000-million-of-9-750-Senior-Notes-due-2031/default.aspx (primary); https://www.sec.gov/Archives/edgar/data/1769628/000176962826000164/crwv-20260409.htm (primary)
- Convertibles: $3.5bn upsized convert priced 2026-04-10, per https://www.nasdaq.com/press-release/coreweave-prices-upsized-35-billion-convertible-senior-notes-offering-2026-04-10 (primary press release). $3.7bn 2.875% converts due 2033 priced 2026-09-18 (upsized from $3.0bn), conversion price about $97.85 (22.5% premium to $79.88), settled 2026-09-22, $500m greenshoe. Source: https://www.sec.gov/Archives/edgar/data/0001769628/000176962826000432/ex991pricing.htm (primary)
- Issuer rating: S&P B+ (as of Feb 2026). Source: https://finance.yahoo.com/news/coreweave-b-rating-leads-blue-044911577.html (press, Bloomberg syndication)
- CDS: 5 year CDS peaked at 881 bps in Dec 2025 and was as low as 452 bps in June 2026. Source: https://www.bloomberg.com/news/articles/2026-06-10/coreweave-s-credit-rebound-drives-cheaper-data-center-funding (press)

## 8. Digital Drive (Blue Owl affiliated developer), Richmond area, Virginia, leased to CoreWeave (Sept 2026)

- Size and instrument: $1.1bn high yield (junk) secured notes, 5 year. Source: https://www.bloomberg.com/news/articles/2026-09-23/coreweave-tied-data-center-raises-1-1-billion-in-junk-bonds (press, 2026-09-23)
- Price and yield: 98.5, yield 9.25%, about 2.7 percentage points above the average yield for similarly rated debt. Sources: Bloomberg above (press, via snippet); https://allweatherfinance.com/ai-computing-power-financing-is-being-repriced-coreweave-data-center-bonds-offer-a-coupon-rate-of-9-25-2-7-percentage-points-higher-than-similar-bonds/ (aggregator)
- Coupon: NOT CONFIRMED. One aggregator calls 9.25% the coupon, but the Bloomberg snippet says the bonds priced at 98.5 to yield 9.25%, so the coupon is below 9.25%.
- Rating: S&P BB-. S&P said "Exposure to a single, speculative-grade tenant remains the key risk." Source: Bloomberg via briefs.co https://www.briefs.co/news/goldman-leads-sale-of-1-1-billion-junk-bond-for-coreweave-le/ (press via aggregator)
- Leads: Goldman Sachs, Citigroup, Deutsche Bank. Source: same
- Asset and lease: 76 MW, fully leased to CoreWeave under a 15 year contract. The "$294 million contract" figure in snippets is ambiguous (it cannot be total 15 year rent for 76 MW and may be annual). Do not use it. Operations start 2027 to 2028. Sources: https://www.kucoin.com/news/flash/coreweave-linked-data-center-raises-1-1-billion-for-ai-computing (aggregator), Bloomberg (press)
- Context: in Feb 2026 Blue Owl failed to raise about $4bn of debt for a CoreWeave leased Lancaster, PA campus because of CoreWeave's B+ rating. A roughly $500m bridge came due in March 2026. Source: https://finance.yahoo.com/news/coreweave-b-rating-leads-blue-044911577.html (press, Bloomberg syndication)
- Takeaway: Digital Drive at BB- and 9.25% sits against Sopaipilla at A+ and 7.53%. Same product type, about 170 bps apart in yield, and the gap comes entirely from tenant credit.

## 9. xAI Colossus 2 GPU financing, Valor Compute Infrastructure (Apollo, Nvidia)

- Announced 2026-01-07. Apollo led a $3.5bn "capital solution" for Valor Compute Infrastructure L.P. (VCI) to support VCI's $5.4bn purchase and triple net lease of compute (Nvidia GB200) to an xAI subsidiary. Nvidia is an anchor LP. Source: https://www.apollo.com/insights-news/pressreleases/2026/01/apollo-backs-5-4-billion-valor-and-xai-data-center-compute-infrastructure-transaction-with-3-5-billion-capital-solution-3214463 (primary)
- Implied advance rate: $3.5bn of $5.4bn is about 65% of the purchase price. This is derived. Label it that way, because the "capital solution" may not be all senior debt.
- Coupon: about 10% on the loans. Source: https://fintool.com/news/apollo-7b-xai-gpu-financing-ai-infrastructure (AGG ONLY)
- Wider SPV: $7.5bn equity plus up to $12.5bn debt (about 62.5% debt). About 100,000 GB200s on a 5 year lease. Collateral is the chips, not xAI's balance sheet. Sources: https://www.datacenterdynamics.com/en/news/valor-equity-partners-raises-54bn-to-buy-nvidia-gpus-for-xai/ (aggregator); https://www.datacenterdynamics.com/en/news/xai-seeks-12bn-in-debt-to-fund-colossus-2-data-center-with-first-chips-online-in-a-few-weeks/ (aggregator)
- Secondary: Apollo reported about a $250m paper gain on the xAI debt after the SpaceX merger. Source: https://ng.investing.com/news/stock-market-news/apollo-global-nets-250-million-on-xai-debt-investment--bloomberg-93CH-2366528 (aggregator citing Bloomberg)

## 10. Lambda, $926m senior secured Term Loan B (Aug 2026)

- Priced 2026-08-12, closed 2026-08-27. $926m TLB at SOFR + 300 (tightened 75 bps), OID 99.5. Source: https://lambda.ai/blog/lambda-prices-926-million-senior-secured-term-loan-b-facility (primary)
- Rating: Moody's Baa2, the first IG rated TLB from a private neocloud. Source: same (primary)
- Maturity 2030-12-31, fully amortizing to match contract cash flows and GPU useful life. Backs GPUs for an investment grade offtaker. Heavily oversubscribed. Source: same (primary)
- Earlier: Lambda closed $1bn of senior secured fixed rate financing. Source: https://finance.yahoo.com/technology/ai/articles/lambda-closes-1-billion-senior-221700154.html (date and terms not captured). Lambda's 2024 $500m GPU backed ABS is cited only by aggregators (AGG ONLY).

## 11. Nebius

- About $775m senior secured term loan, maturity 2030-10-31, 1 month Term SOFR (0% floor) + 250. Backed by deployed GPUs and contracted cash flow from an IG customer. Sources: https://blockspace.media/insight/nebius-secures-775-million-ai-cloud-loan-2026/ (aggregator); Nebius 6-K exhibits on sec.gov (primary, not opened)
- Converts: March 2026 1.25% due 2031 and 2.625% due 2033, about $4.3bn gross. Aug 2026 0.50% due 2030 and 4.50% due 2034, about $5.75bn gross. Source: Nebius 6-K exhibits e.g. https://www.sec.gov/Archives/edgar/data/0001513845/000110465926094844/nbis-20260812xex99d2.htm (primary)
- Comparison point: "CoreWeave pays SOFR + 5.5%, Nebius pays + 2.5%." Source: https://finance.yahoo.com/markets/stocks/articles/coreweave-pays-sofr-5-5-185757301.html (aggregator on Yahoo)

## 12. Crusoe

- Corporate facilities: $750m Brookfield credit facility (June 2025), $225m Upper90, $175m Victory Park. Sources: https://www.crusoe.ai/resources/newsroom/crusoe-secures-usd750-million-credit-facility-from-brookfield-to-accelerate (primary); Sacra (aggregator)
- Project level: see Abilene (deal 5). No 2026 Crusoe bond pricing found.

## 13. Hut 8 Beacon Point DC LLC, Texas (June 2026), the high leverage benchmark

- Priced 2026-06-04, closed 2026-06-09. $4.25bn of 6.129% senior secured notes due 2042-11-30 at T+165. Sources: https://blockspace.media/insight/hut-8-prices-beacon-point-notes-2026/ (aggregator); https://investingnews.com/hut-8-closes-4-25-billion-of-investment-grade-senior-secured-notes-for-beacon-point-data-center-project/ (aggregator, likely the company release)
- Rating: Moody's Baa2
- Loan to cost: 95%, up from about 85% at lease announcement. Counsel (Milbank) calls it the highest LTC ever for an HPC data center bond. Equity was only $184m and is returned to Hut 8 at closing. Tenor matches the lease. Tenant is unnamed and rated AA- or better. Sources: same
- Comparison: 20 bps inside Hut 8's April 2026 River Bend deal (rated BBB- by S&P and Fitch), which implies River Bend was about T+185. The fact checker should confirm River Bend directly. Source: same

## 14. Oracle / Related Digital, Saline Township, Michigan (April 2026)

- $16.3bn total. About 15% equity (about $2bn from Related Digital and Blackstone), the rest SPV bonds. Pimco anchored about $10bn after US banks pulled back. Sources: https://www.related.com/press-releases/2026-04-24/related-digital-announces-financing-16-billion-oracle-data-center-project (primary); https://www.blackstone.com/news/press/related-digital-announces-financing-for-16-billion-oracle-data-center-project-in-saline-township-michigan/ (primary); https://www.bloomberg.com/news/articles/2026-04-07/pimco-said-to-weigh-14-billion-debt-deal-for-oracle-data-center (press); https://thenextweb.com/news/oracle-data-centre-16-billion-financing-stargate (aggregator)
- Structure: 19.5 year maturity, 14 year WAL, 6 years interest only then 13 years of amortization. Guidance was slightly more than 100 bps over Oracle's 2040s (then about 6.5%), implying about 7.5%. Final coupon NOT CONFIRMED. Sources: Bloomberg via Yahoo https://finance.yahoo.com/markets/stocks/articles/oracle-draws-pimco-potential-14-161530458.html (press)
- Implied LTC: about 85%. Derived from the 15% equity.
- Pimco later explored selling parts of the $14bn. Source: https://www.bloomberg.com/news/articles/2026-04-08/pimco-seeks-to-sell-parts-of-14-billion-oracle-data-center-debt (press)

## 15. Data center ABS, 2026 issues

- **CloudHQ (Iskandar Enterprise / Kaveh Enterprise), April to May 2026.** $1.4bn: $1.2bn 5 year Class A-2 and $200m 5 year Class B. Two Ashburn, VA turnkey centers (LC1A, LC2), 160 MW, NNN leases to two IG hyperscalers with about 14 years remaining. ARD 5 years, legal final April 2056. Class A cash trap below 1.45x DSCR and amortization below 1.25x. About $16.3m liquidity reserve. First data center ABS with dual Big Three AAA (first Fitch AAA in the sector). S&P rated the A-2 III tranche A per one snippet, so the class/rating mapping needs checking. Fitch stressed metrics: DSCR 0.71x, LTV 125.6%, debt yield 6.4%. These are Fitch-adjusted, not issuer, figures. Sources: https://asreport.americanbanker.com/news/data-center-abs-iskandar-and-kaveh-bring-to-market-raising-1-4-billion (aggregator, trade press); https://www.bloomberg.com/news/articles/2026-04-09/cloudhq-seeks-to-raise-1-4-billion-from-data-center-abs-deal (press); https://www.kslaw.com/about/news/guggenheim-leads-cloudhqs-landmark-14-billion-abs-issuance (aggregator, law firm)
- **Switch Series 2026-1, closed 2026-04-14.** About $768m. Class A-2 ARD March 2031. Adds Reno (52+ MW). About 84% of trust revenue from IG customers. Coupon and LTV NOT FOUND. A separate snippet puts a "similar" Switch bond at 225 bps, 6.1% yield, with unclear vintage (AGG ONLY). Sources: https://www.switch.com/switch-raises-768-million-in-latest-data-center-abs-issuance/ (primary); https://www.kirkland.com/news/press-release/2026/04/kirkland-advises-switch-on-raising-$768-million-in-latest-data-center-abs-issuance (primary, counsel)
- **Aligned, closed about 2026-07-28.** $1.183bn, upsized about 30% from $905m. Class A-2-I rated A- by S&P and Class B rated BBB. 5 year ARD. Four campuses, 14 customers, over 90% of AABR from IG. Appraised LTV 70.0%. Coupon NOT FOUND. Sources: https://www.globenewswire.com/news-release/2026/07/28/3334210/0/en/Aligned-Data-Centers-Completes-1-18-Billion-Securitization-Financing.html (primary); LTV and ratings via snippet from pulse2/convergedigest (aggregator), so confirm in the S&P presale
- **DataBank Series 2026-1 (KBRA prelim, about 2026-01-12).** 36 data centers, about $433.0m AMRR, about $217.6m annualized adjusted NOI (Aug 2025). Refinances the 2021-1 notes. LTV and DSCR NOT CAPTURED. Source: https://www.kbra.com/publications/tGrWrdbr/kbra-assigns-preliminary-ratings-to-databank-series-2026-1 (primary)
- **Lohrasp Enterprise II LLC Series 2026-1 (KBRA prelim 2026-07-07).** Single hyperscale ABS. One data center (LC3), Loudoun County, about 80 MW, about $65.1m AABR, NNN lease to a single high IG hyperscaler. Size, LTV and DSCR NOT CAPTURED. Source: https://www.kbra.com/publications/ZSCHQRWC/kbra-assigns-preliminary-ratings-to-lohrasp-enterprise-ii-llc-series-2026-1 (primary)
- **Vantage EMEA tap, 2026-01-15.** £254m (a £200m tap of the Class A-2 plus a new £54m Class B) on the 2024 £600m UK ABS. The original A-2 has LTV 53.6%, coupon 6.172%, May 2039 maturity, rated S&P A-, DBRS A (low), Scope A. Sources: https://www.businesswire.com/news/home/20260115777091/en/ (primary); A-2 metrics via Scope/S&P snippets (primary, original 2024 deal). No Vantage US 2026 ABS found.
- Other 2026 KBRA data center or fiber ABS seen but not detailed: Flexential 2026-1/2/3/4 and FirstLight 2026-1.

## 16. Data center CMBS, 2026

- **BX 2026-VLT10 (KBRA prelim 2026-06-03).** $1.26bn first lien loan on a single 66 MW New Albany, Ohio data center. 100% leased to one hyperscaler on a 20 year lease to July 2045. 10 year ARD, 20 year final, IO for 10 years. KBRA LTV (KLTV) 108.4%. KBRA NCF about $84.5m (18.9% below issuer). KBRA value about $1.17bn (27.2% below appraisal). Source: https://www.businesswire.com/news/home/20260603885897/en/KBRA-Assigns-Preliminary-Ratings-to-BX-2026-VLT10 (primary)
- **QTS / Blackstone, BX Trust 2025-VLT6 (2025 vintage, reported Feb 2026).** About $2.05bn SASB refi on three campuses (Suwanee GA, Manassas VA, Chicago). Refinanced about $1.76bn and released about $419m. Floating about 6.1%. 2 year term plus three 1 year extensions. Lead Goldman. LTV NOT FOUND. Sources: https://www.datacenterdynamics.com/en/news/qts-data-centers-seeks-2-billion-cmbs-refinancing-for-three-us-data-center-campuses/ (aggregator); https://hoodline.com/2026/02/blackstone-snags-419m-cash-in-2-05b-qts-data-hub-refi/ (aggregator)
- A separate QTS $3.5bn refi is reported at https://www.commercialsearch.com/news/blackstones-qts-to-close-3-5b-data-center-refi/ (aggregator, details not captured)

## 17. Other high yield data center bonds (2026)

- Applied Digital (Polaris Forge 1, building 4, CoreWeave 15 year lease, 150 MW): $1.59bn priced to yield 7%, down from 10% on the Nov 2025 tranche. About 1 point over Cipher's Amazon linked bond, against a 2.9 point gap to Cipher's Alphabet linked deal in Nov 2025. Source: https://www.bloomberg.com/news/articles/2026-06-10/coreweave-s-credit-rebound-drives-cheaper-data-center-funding (press, 2026-06-10)
- TeraWulf (Lake Mariner): $3.2bn senior secured notes with a Google credit enhancement (2025). Exploring leveraged loans in June 2026. Source: https://www.bloomberg.com/news/articles/2026-06-05/terawulf-eyes-leveraged-loans-after-data-center-bond-market-win (press)
- Penn Mutual AM (2026-08-06): its HY data center composite (Core Scientific, TeraWulf, Applied Digital, Meridian Arc) was about 220 bps wide of the HY index at its Dec 2025 peak. That premium "largely disappeared" by mid 2026. Source: https://www.pennmutualam.com/market-insights-news/blogs/chart-of-the-week/2026-08-06-ai-infrastructure-bonds-a-full-picture-of-spreads (aggregator, asset manager research)

## 18. Hyperscaler corporate bonds (2026, with Aug to Oct where found)

- **Amazon, July 2026 (just before the window).** At least $25bn, 8 tranches from 3 to 40 years. IPTs: 3 year +65, 5 year +80, 7 year +90, 10 year +100. The 40 year ($2.25bn) priced about +125. NIC about 10 to 12 bps against a 2026 average of about 4 bps. Long end paid 18 to 21 bps extra. Ratings A1/AA/AA-. Sources: https://fortune.com/2026/07/08/amazons-25-billion-surprise-bond-sale-dangled-extra-yield-to-lure-in-buyers/ (aggregator, Fortune citing Bloomberg); https://www.investing.com/news/stock-market-news/amazon-launches-eightpart-us-investment-grade-bond-offering-4779013 (aggregator). **CONFLICT on the book:** 2.5x per Fortune, against a $62bn peak pared to about $41bn (about 1.6x) per Investing.com. Get the Bloomberg original.
- **Amazon sterling debut, 2026-09-09.** £4.25bn, 4 tranches from 3 to 19 years. Bookrunners JPM, Barclays, HSBC, NatWest. Spreads NOT FOUND. Source: https://finance.yahoo.com/technology/ai/articles/amazon-amzn-taps-uk-bond-212711015.html (aggregator on Yahoo)
- **Meta, late April 2026.** $25bn, 6 tranches from 2031 to 2066, coupons 4.550% to 6.450%. Peak book $96bn against $125bn for the Oct 2025 $30bn deal. Nearly all tranches came wider than Oct 2025. Long bond IPT about +180. Leads Citi and MS. Sources: https://www.bloomberg.com/news/articles/2026-04-30/meta-kicks-off-bond-offering-after-boosting-spending-outlook (press); Meta 8-K via https://www.stocktitan.net/sec-filings/META/8-k-meta-platforms-inc-reports-material-event-0fed3cc186c8.html (primary via aggregator)
- **Alphabet, Feb 2026.** $20bn USD (10 part). IPTs: 2 year +60, 3 year +70, 5 year +85, 7 year +100, 10 year +110, 20 year +130, 30 year +140, 40 year +155. USD book over $100bn. Sources: https://www.clearygottlieb.com/news-and-insights/news-listing/alphabet-in-20-billion-usd-denominated-bonds-offering-feb-2026 (primary, counsel); Yahoo/Bloomberg (press). A later $25bn Alphabet deal is referenced at https://www.clearygottlieb.com/news-and-insights/news-listing/alphabet-in-$25-billion-usd-denominated-bonds-offering (date NOT CAPTURED)
- **Oracle, 2026-02-02.** $25bn across 8 tranches from 3 to 40 years, part of a $50bn debt and equity plan. Record $129bn book. 10 year about +145 against about +95 for BBB peers. Paid 40 to 58 bps more than its prior deal. Sources: https://www.ifre.com/bonds/2379081/oracle-raises-us25bn-in-bond-offering-as-ai-funding-spree-continues (press); Oracle FWP https://www.sec.gov/Archives/edgar/data/1341439/000119312526033882/d44245dfwp.htm (primary)
- **Aug to Oct 2026 spread data.** Benzinga (Sept 2026): Alphabet spreads went from 56 to 71 bps as deal sizes grew from $1.25bn to $3.50bn, and $4bn Meta and Nvidia deals pushed spreads out 15 to 19 bps. Source: https://www.benzinga.com/markets/bonds/26/09/61914657/big-techs-ai-debt-spree-hits-a-wall-as-bond-investors-demand-higher-yields-from-alphabet-meta-and-nvidia (aggregator, AGG ONLY)
- Volume: hyperscalers, DC SPVs and neoclouds raised $346bn across IG, HY and equity so far in 2026, against $172bn in all of 2025. Source: https://therealdeal.com/new-york/2026/09/30/data-center-securities-flash-ai-concerns/ (aggregator, likely citing Bloomberg)
- WARNING: several snippets mix in 2025 figures (Oracle $18bn in Sept 2025, Meta $30bn in Oct 2025, Alphabet $17.5bn and Amazon $15bn in Nov 2025, Oracle +48 bps between Sept 1 and Nov 14 2025). Do not present these as 2026.
- NOT FOUND: any Microsoft USD deal, or a priced USD Meta or Alphabet jumbo dated Aug to early Oct 2026.

---

## Underwriting benchmarks

| Metric | Value | Source | Tier |
|---|---|---|---|
| DC ABS Class A LTV | Aligned 2026: 70.0% appraised. Vantage UK A-2: 53.6%. Presale class A LTV triggers about 70%, with high 60s (about 68%) typical in 2024 to 2025 | Aligned via snippet; Vantage via Scope/S&P; triggers via cranefrontier.substack.com/p/data-center-abs-by-the-numbers | primary via snippet; primary; AGG ONLY |
| DC ABS DSCR | Sector average 1.96x, median 1.93x (issuer basis). Aligned 2023-2 2.56x. Class A cash trap typically 1.45x, amortization trigger 1.25x (CloudHQ) | cranefrontier substack (AGG ONLY); asreport.americanbanker.com (aggregator, trade press) | AGG / trade |
| Rating agency haircuts | Fitch on CloudHQ: LTV 125.6%, DSCR 0.71x. KBRA on BX 2026-VLT10: KLTV 108.4%, NCF 18.9% below issuer, value 27.2% below appraisal | asreport; KBRA via Business Wire | trade; primary |
| DC ABS new issue spread | 150 to 200 bps over Treasuries, 5 year WAL, single A | greenstreetnews.com / L&G AM | aggregator |
| Hyperscaler DC ABS secondary | About 150 bps over 5 year UST in Sept 2026, 16 bps wider YoY (Barclays). DC ABS and CMBS now trade nearer corporate and HY AI paper than broader ABS | therealdeal.com 2026-09-30 | aggregator citing Barclays |
| DC A-rated ABS vs other ABS | DC single A about 140 bps against AAA credit card ABS about 32 bps (dates on both are unclear) | search snippet, diamond-hill / landg | AGG ONLY |
| GPU loan advance rate | Generally 50% to 70% of purchase price, with 24 to 48 month amortization. Up to 70% on H100/B200 and 80% on new GPUs at some lenders. Valor/xAI implied about 65% ($3.5bn/$5.4bn) and about 62.5% at SPV level ($12.5bn/$20bn) | altstreet.investments, gpuloans.com, stoaexchange (AGG ONLY); Apollo release (primary) for the Valor inputs | AGG; derived |
| GPU loan pricing | IG contract (Meta) SOFR + 225 (A3). IG offtaker TLB SOFR + 300 (Baa2, Lambda). IG customer term loan SOFR + 250 (Nebius). Mixed or speculative contracts SOFR + 450 to 550 (Ba2/BB+, CoreWeave 5.0/5.5). 2023 unrated about 15% all in | company releases | primary |
| Hyperscale construction loan LTC | 65% to 70% of cost on hyperscale leased projects at SOFR + 250 to 400 (aggregator). Up to 85% for top tier credit tenants and 70% to 80% for non credit. Derived data points: Abilene about 66%, Saline about 85%, Beacon Point 95% (bond) | foley.com (law firm, aggregator); percepture.com (AGG ONLY); deal sources above | AGG; derived |
| Big bank construction pricing | Vantage Frontier/Port Washington about SOFR + 250, 4 years plus 1 plus 1 | Bloomberg | press |
| HY DC bond premium | About 220 bps over the HY index at the Dec 2025 peak, mostly gone by mid 2026 | Penn Mutual AM | aggregator |

---

## Best 8 to 10 deals for a pricing and leverage table

| Deal | Date | Structure | Size | Rating | Coupon or spread | LTV / LTC / advance | Tenor |
|---|---|---|---|---|---|---|---|
| Meta Hyperion (Beignet) | Oct 2025 (anchor) | 144A amortizing SPV bond, Meta lease plus RVG | $27.3bn | S&P A+ | 6.581%, about T+225 (launch spread conflicted, 185 vs 225) | Equity about $2.5bn (from about $30bn total) | to 2049 |
| Meta El Paso (Sopaipilla) | 27 Jul 2026 | 144A amortizing SPV bond, Meta lease plus RVG | $12.547bn | S&P A+ / Fitch AA- | 7.534%, T+287.5 | n/a (80/20 JV) | to Nov 2048 |
| Hut 8 Beacon Point | 4 Jun 2026 | Senior secured project bond, AA- tenant | $4.25bn | Moody's Baa2 | 6.129%, T+165 | 95% LTC | to Nov 2042 |
| Oracle/Related Saline MI | Apr 2026 | SPV amortizing bonds, Pimco anchor | about $14bn bonds of $16.3bn | not captured | guidance about 7.5% (not final) | about 85% LTC (derived) | 19.5 yr, 14 yr WAL |
| Oracle Project Jupiter NM | late 2025, marked Sept 2026 | Bank construction loan | about $18bn | n/a (Oracle BBB-) | margin n/a, quoted 89 to 91 | n/a | n/a |
| Vantage Frontier + Port Washington | 2025 to 2026 syndication | Bank term loans | $38bn | n/a | about SOFR + 250 | n/a | 4 yr + 1 + 1 |
| CoreWeave DDTL 4.0 | 30 Mar 2026 | GPU backed DDTL, Meta contract | $7.5bn to $8.5bn | Moody's A3 / DBRS A(low) | SOFR + 225 (fixed about 5.9%) | n/a | 2032 |
| CoreWeave DDTL 5.5 | 10 Aug 2026 | GPU backed DDTL, about 3 yr contracts | $2.6bn | Moody's Ba2 / Fitch BB+ | SOFR + 550 | n/a | to Sept 2031 |
| Lambda TLB | 12 Aug 2026 | GPU backed amortizing TLB, IG offtaker | $926m | Moody's Baa2 | SOFR + 300, OID 99.5 | n/a | to Dec 2030 |
| Digital Drive (CoreWeave lease) | 23 Sept 2026 | Secured HY notes, 76 MW, 15 yr lease | $1.1bn | S&P BB- | 9.25% yield at 98.5 | n/a | 5 yr |
| xAI / Valor (Apollo) | 7 Jan 2026 | GPU triple net lease financing | $3.5bn of $5.4bn | unrated | about 10% (AGG ONLY) | about 65% advance (derived) | 5 yr lease |
| Aligned ABS | Jul 2026 | DC master trust ABS | $1.183bn | S&P A- (A-2-I) / BBB (B) | n/a | 70.0% LTV | 5 yr ARD |
| BX 2026-VLT10 | Jun 2026 | SASB CMBS, single hyperscale tenant | $1.26bn | KBRA prelim | n/a | KLTV 108.4% | 10 yr ARD / 20 yr final |

Suggested core 10 for the page: Sopaipilla, Hyperion (anchor), Beacon Point, Saline, Jupiter, DDTL 4.0, DDTL 5.5, Lambda TLB, Digital Drive, Aligned ABS. Together they span A+ to BB-, about T+165 to 9.25%, and 70% to 95% leverage, and they include one distressed mark (Jupiter at 89 to 91).
