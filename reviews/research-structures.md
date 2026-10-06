# Research: How AI infrastructure financing structures work (sizing, pricing, protections)

Prepared 2026-10-06 for the AI Infrastructure Financing case study. Research only. Nothing here has been fact checker confirmed; the fact checker wins on every number.

**Method and limits.** Built from web search snippets. WebFetch was blocked by the egress proxy for every primary host tried (sec.gov, businesswire.com, kbra.com, ifre.com, datacenterdynamics.com, cliffordchance.com, CoreWeave q4cdn IR deck). So "primary" below means the cited URL is a filing, agency or company page whose text came back in a search snippet. I could not open the full document. The session's web search budget ran out before I finished. Not searched: Fluidstack's own debt, Crusoe corporate debt, xAI's earlier $12.5bn SPV close terms, data center ABS DSCR levels, and spread on the Abilene, Frontier and Jupiter construction loans.

**Tiers.** P = primary (filing, agency, company). B = named top tier press (Bloomberg, Reuters, FT, WSJ, PitchBook, IFR), counted as B only when the URL is that outlet or a direct wire syndication of it. A = aggregator (trade press, blogs, substacks, and outlets relaying Bloomberg or FT). **A only** marks a figure with no primary or B source found. Under committee rules those are not confirmed.

---

## 1. Hyperscaler corporate bonds (the base layer)

How it works: these are senior unsecured bonds of the hyperscaler parent. There is no collateral and no covenants beyond a standard investment grade package. Lenders size them on parent credit (Meta Aa3/AA minus, Oracle now BBB minus at S&P). The price is a spread over Treasuries. Tenors run from 2 to 50 years, plus Alphabet's 100 year sterling tranche.

- **Meta, Oct 30 2025.** $30bn in six tranches (5, 7, 10, 20, 30 and 40 years). Spreads over Treasuries were 50 / 70 / 78 / 88 / 98 / 110bp. The book was about $125bn, the largest ever. Rated Aa3/AA minus. IFR (B): https://www.ifre.com/ifr-awards/2330993/us-bond-meta-platforms-us30bn-six-tranche-bond ; Bloomberg (B): https://www.bloomberg.com/news/articles/2025-10-30/meta-platforms-offers-six-part-bond-amid-ai-spending-rush . Note: one aggregator snippet called this "October 2026". The date is October 2025.
- **Meta, April 2026.** $25bn in six parts. The 2066 tranche priced at +147bp against +110bp on the 40 year tranche in Oct 2025. The peak book was $96bn against about $125bn before. Meta raised its 2026 capex guide by $10bn to $125bn to $145bn. Bloomberg via bgov (B): https://news.bgov.com/capital-markets/meta-looks-to-raise-as-much-as-25-billion-with-jumbo-bond-sale
- **Amazon, March 2026.** $53.8bn equivalent in 19 tranches ($37bn USD in 11 tranches from 2 to 50 years, plus EUR 14.5bn). This was the largest corporate bond sale ever, beating Verizon's $49bn from 2013. The 2076 tranche priced at +130bp. Total demand was $158bn. IFR (B): https://www.ifre.com/bonds/2397565/amazon-makes-market-history-with-largest-corporate-bond-sale-ever
- **Alphabet, Feb 10 2026.** $20bn in 7 tranches, GBP 5.5bn in 5 tranches including a GBP 1.0bn 100 year bond, and CHF 3.1bn. Source is an aggregator (A): https://virginiabusiness.com/alphabet-raise-25-billion-us-bond-offering/ and https://www.roic.ai/news/alphabet-and-big-tech-ramp-up-debt-issuance-to-fuel-ai-infrastructure-spending-02-26-2026 . This is **A only** in my search.
- **Supply and spread drift.** Reuters, Jul 29 2026 (B, Reuters wire syndication): https://wdez.com/2026/07/29/hyperscaler-debt-binge-pushes-yields-up-as-investor-demand-cools/
  - Amazon, Alphabet, Meta and Oracle issued about $194bn of bonds in 2026 through Jul 7, up 79% from about $108bn in all of 2025.
  - Median spreads widened 30 to 40bp (2 to 4 years), 50 to 60bp (5 to 7 years) and 108.5 to 118bp (20 years plus).
  - 78 of 91 hyperscaler bonds issued in 2026 traded at higher yields on Jul 28 than at issue. The median rise was about 22bp.
  - Goldman expects about $250bn of 2026 issuance from the five hyperscalers and $400bn in 2027.
- **Oracle, the weak link.** Oracle sold $18bn of bonds in Sept 2025. S&P cut Oracle to BBB minus from BBB on Jul 9 2026 and added $260bn of not yet commenced lease commitments (starting FY2027 to FY2029) and $13bn of unconditional purchase obligations, mostly power, to its analysis. Sources: https://ppc.land/s-p-cuts-oracle-to-bbb-as-ai-buildout-widens-cash-deficit-to-42bn/ (A); https://civicmedia.us/news/2026/07/16/oracle-credit-rating-drops-amid-wisconsin-fight-over-data-center-credit-rules (A). S&P's own release was not retrieved, so this is **A only** pending the S&P release.
  - Oracle 5 year CDS was about 203bp on Jul 20 to 24 2026, a record since 2008. A (https://www.kucoin.com/news/flash/oracle-s-5-year-cds-hits-record-high-sparking-investor-concern ; https://letsdatascience.com/news/oracle-credit-risk-rises-amid-ai-buildout-e40ec988). **A only.**
  - Oracle's 6.7% 2056 bonds widened about 8bp to +263bp. A, **A only.**
  - FY2026 FCF was about negative $23.7bn, with about $40bn of FY2027 financing planned. A, **A only.**

## 2. Off balance sheet JV / SPV project bonds backed by hyperscaler leases

How it works: a private capital sponsor owns about 80% of a JV that owns the campus. The hyperscaler keeps about 20%, runs construction, and signs a short operating lease (four years for Hyperion) with renewal options. The hyperscaler also gives a residual value guarantee (RVG). The SPV issues long, amortizing, investment grade 144A bonds sized to the lease plus the RVG. Rating agencies effectively rate the hyperscaler's credit and notch for the structure. The hyperscaler does not consolidate the JV because the short lease plus a "not probable" RVG keeps it an operating lease commitment.

**Hyperion (Richland Parish, Louisiana; Meta / Blue Owl; issuer Beignet Investor LLC)**
- The JV is 80% Blue Owl funds and 20% Meta. Total development cost is about $27bn for buildings and long lived power, cooling and connectivity. Blue Owl contributed about $7bn cash. Meta received a one time distribution of about $3bn. Meta release (P): https://about.fb.com/news/2025/10/meta-blue-owl-capital-develop-hyperion-data-center/ ; https://investor.atmeta.com/investor-news/press-release-details/2025/Meta-Announces-Joint-Venture-with-Funds-Managed-by-Blue-Owl-Capital-to-Develop-Hyperion-Data-Center/default.aspx
- **Bonds.** $27.3bn of 6.581% senior secured amortizing bonds due May 2049, priced Oct 16 2025 at **Treasuries +225bp**. Rated A+ (S&P). The term is 23.6 years. IFR (B): https://www.ifre.com/ifr-awards/2327933/financing-package-blue-owl-capitalbeignet-investors-us27.3bn-23.6-year-bond (snippet). Pimco anchored about $18bn and BlackRock about $3bn. Bonds were plus $2.5bn of equity (A: https://www.globaldatacenterhub.com/p/meta-blue-owls-27b-bet-is-this-the). The $18bn Pimco figure also appears in press relays.
- **Debt to total cost (derived, flag).** $27.3bn of bonds against Meta's stated about $27bn development cost, which puts debt at roughly 100% of stated development cost. Against a $27.3bn bonds plus $2.5bn equity capital stack, debt is about 92%. The $2.5bn equity figure is **A only** and the ratio is my arithmetic. Do not print it without fact checker sign off. It probably reflects bonds also funding Blue Owl's contribution and the $3bn Meta distribution.
- **Lease and RVG.** Meta signed operating leases with the JV for all facilities, with a **four year initial term** and extension options. Meta gave an RVG covering the **first 16 years** of operations. Under it Meta makes a **capped** cash payment, based on the then current campus value, if certain conditions are met after a non renewal or termination. Source: Meta disclosure language as quoted by Vinod Kothari (A, quoting Meta 10-Q / 10-K): https://vinodkothari.com/?p=56061 . The primary source is Meta's Q3 2025 10-Q and FY2025 10-K. Those were not retrieved. Fact checker should pull the exact wording and the cap.
  - IFR (B snippet) says the RVG is triggered if Meta fails to renew at expiry, terminates early, or defaults. It obliges Meta to pay an amount that, with sale proceeds, makes bondholders whole: https://www.ifre.com/ifr-awards/2340435/the-metablue-owl-deal-broken-down-off-balance-sheet-gymnastics-24-years-after-enron
  - Moody's (via Fortune, B tier equivalent; A strictly) says Meta disclosed data center leases commencing 2029 with an initial commitment of about $12.3bn, and an RVG with an **aggregate threshold of $28bn**. Meta recorded no liability because payout was judged "not probable". Source: https://fortune.com/2026/02/25/hyperscaler-risk-off-balance-sheet-662-billion-data-center-commitments-meta-amazon-microsoft-oracle-alphabet/ . Confirm against Meta's FY2025 10-K.
- **Secondary price stress.** The bonds traded as high as about 110 within days of pricing. They fell to about 96 by late July 2026 and then to a record low of **94.4** in about late July / August 2026, on the same day Meta stock rose 9%. Source: https://protos.com/metas-ai-bond-just-hit-a-record-low-as-its-stock-soared/ (A, relaying Bloomberg). **A only.** The exact date is unconfirmed.

**El Paso (Texas; Meta / BlackRock GIP and HPS; "Project Sopaipilla", issuer Sopaipilla Investor LLC)**
- BlackRock (GIP and HPS) owns 80% and Meta 20%. The campus is about 1GW with a 2028 online date. JPMorgan and Morgan Stanley led the deal. https://thenextweb.com/news/blackrock-12bn-meta-el-paso-data-centre-debt (A)
- **Bonds.** **$12.55bn priced late July 2026 at a 7.534% yield, Treasuries +287.5bp.** Secondary tightened to about +260bp. The book was about $20bn, or 1.6x, against about 4x average for 2026 IG deals. Bloomberg via Bloomberg Law (B): https://news.bloomberglaw.com/esg/blackrock-dodges-ai-bond-trading-flop-after-offering-junk-yields ; https://www.aicoin.com/en/news-flash/3004155 (A, for spread and book). The yield and the "junk yield" framing are B. The +287.5bp and 1.6x cover should be confirmed.
- **Ratings.** S&P preliminary **A+** and Fitch **AA minus (EXP)** on $12.3bn of notes. The split was over the security package. Notes are secured by issuer accounts, revenues and JV equity, with **no direct mortgage** on land and buildings. Source: https://www.globaldatacenterhub.com/p/bondholders-are-not-underwriting (A). **A only.** Confirm with the S&P and Fitch releases.
- **Protections.** Meta must start base rent in **December 2028 whether or not buildings are complete** (a hell or high water rent start). The RVG is sized to outstanding principal and triggers on non renewal. Same source (A). **A only.**
- **Spread step up.** Hyperion priced at +225bp in Oct 2025 and El Paso at +287.5bp in Jul 2026. That is about 62bp wider for a similar Meta credit structure, about nine months apart. This is derived, and the El Paso spread needs confirmation.

## 3. Construction and term loans for developer campuses leased to Oracle / OpenAI

How it works: a developer JV (Crusoe / Blue Owl / Primary Digital; Vantage; Stack / BorderPlex / Blue Owl) borrows senior secured construction loans from bank syndicates. The loan is sized against a long Oracle lease (15 years at Abilene) and the value of the completed asset. Banks hold the risk and then try to syndicate it to other banks and institutions. Tenor is short (about 4 years plus extensions) with an expected refinancing into ABS, CMBS or project bonds once the site is stabilized. The key risk is that rent does not start until the project is complete (Fitch's Anubhav Arora, via A source below).

**Stargate Abilene (Crusoe / Blue Owl / Primary Digital; tenant Oracle for OpenAI; 1.2GW, 8 buildings)**
- JPMorgan led **$2.3bn** for phase 1 (reported Jan 22 2025; 2 buildings, 200MW plus). Newmark arranged a **$7.1bn** construction loan for phase 2 (6 buildings, about 1GW), also JPMorgan led. Together that is **$9.6bn** of JPMorgan debt. Crusoe and Blue Owl put in about $5bn of cash equity. The total project is about $15bn. Oracle signed a **15 year lease**.
  - https://www.nasdaq.com/articles/startup-crusoe-nets-116b-fresh-financing-massive-new-openai-data-center (A)
  - https://www.bisnow.com/news/national/data-center/primary-digital-infrastructure-emerges-as-key-player-in-texas-stargate-data-center-campus-129519 (A)
  - https://spyglass.org/the-stargate-data-center-layer-cake/ (A)
  - The original reporting is Bloomberg / The Information. **A only** in my results.
- **Implied loan to cost (derived).** $9.6bn of debt over about $15bn total is about **64%**. Alternatively $9.6bn debt against about $5bn cash equity gives a debt share of about 66%. The figures are A only and the ratio is my arithmetic.
- Loan spread: **not found.**
- **Stress, Mar 6 2026.** Oracle and OpenAI ended plans to expand Abilene (a planned, never finalized expansion lease of about 600MW toward 2GW) over financing and OpenAI's shifting needs. The existing campus is unaffected. Meta then explored leasing the expansion from Crusoe, and Nvidia paid a $150m deposit to Crusoe. Bloomberg (B): https://bloomberg.com/news/articles/2026-03-06/oracle-and-openai-end-plans-to-expand-flagship-data-center . The Meta and Nvidia $150m detail comes from https://w.media/did-oracle-openai-scrap-texas-data-center-expansion-plans/ (A).

**Vantage Frontier (Shackelford County, Texas) and Port Washington (Wisconsin); tenant Oracle for OpenAI**
- The package is **$38bn**, led by JPMorgan and MUFG, in two senior secured facilities: **$23.25bn Texas** and **$14.75bn Wisconsin**. Wells Fargo and Goldman also participate. This is the largest AI infrastructure loan to date. https://datacenterdynamics.com/en/news/jpmorgan-chase-and-mitsubishi-ufj-lead-38bn-debt-package-for-oracle-linked-data-centers-report/ (A, relaying Bloomberg)
- **Tenor.** Term loans run **four years with two one year extensions**. Most of the loan was syndicated in Q4 2025 with close expected in Q2 2026, across more than 50 lenders. By the time of the Bloomberg piece, lenders were "nearly done" with less than $1bn left to offload. Banks saw diminished interest because of Oracle's below peer rating. Bloomberg via bgov (B): https://news.bgov.com/financial-accounting/oracle-tied-38-billion-debt-takes-months-for-market-to-swallow
- Spread and LTC: **not found.** Searches for SOFR pricing returned nothing reliable.

**Project Jupiter (Dona Ana County, New Mexico; Stack Infrastructure / BorderPlex / Blue Owl; tenant Oracle; 2.45GW)**
- About **20 banks lent $18bn**. Santander and Jefferies are among the syndicate banks struggling to distribute it. The loans trade at **89 to 91 cents** on the dollar, per the FT. https://aiweekly.co/alerts/oracles-18b-project-jupiter-loans-trade-at-89-91-cents (A, relaying FT); https://cryptobriefing.com/oracle-project-jupiter-data-center-mothballed/ (A). **A only.** Confirm against the FT.
- **Stress, Sept 24 to 25 2026.** Oracle sent a **force majeure notice** to the Blue Owl unit that owns and develops the site. Oracle wants to defer rent if delays hit the planned 2028 launch. It is not exiting the lease. Bloomberg report (Sept 24), via https://www.insurancejournal.com/news/west/2026/09/25/886812.htm (A, Bloomberg wire) and https://247wallst.com/investing/2026/09/24/oracle-declares-force-majeure-on-165-billion-project-jupiter-data-center/ (A).
  - Power delay: the New Mexico State Land Office twice denied the Energy Transfer gas pipeline, pushing its in service date back nearly six months to Feb 1 2027.
  - The site was about 26% complete in early Sept 2026, with the initial phase at least seven months behind schedule.
  - Source for the pipeline, completion and schedule details: https://www.globaldatacenterhub.com/p/oracles-jupiter-force-majeure-stacks (A). **A only.**

**Financing pulled.** In Dec 2025 Blue Owl dropped out of equity funding for Oracle's $10bn, 1GW Saline Township, Michigan campus (developer Related Digital). Lenders had pushed for tougher lease and debt terms, and there were construction delay concerns. Blackstone was in talks to replace Blue Owl. FT reported first. https://www.axios.com/local/detroit/2025/12/18/saline-data-center-project-limbo (A) ; https://www.datacenterdynamics.com/en/news/blue-owl-opts-not-to-fund-oracles-10bn-michigan-data-center/ (A). Fitch later gave the Michigan project its highest score in the sector because of an unconditional rent guarantee from Oracle (see section 7).

## 4. GPU backed loans (neoclouds and chip lease SPVs)

How it works: a bankruptcy remote SPV (for example CoreWeave Compute Acquisition Co. VII or VIII) buys GPUs and networking for one named customer contract. Lenders take security over the GPUs, the contract receivables and the SPV equity. The debt is a delayed draw term loan (DDTL) that funds as GPUs are delivered. It amortizes over the contract life rather than the GPU life. Sizing is the lesser of contracted cash flow capacity and depreciated hardware value. Pricing tracks the customer's credit (OpenAI vs Meta vs Microsoft) far more than the neocloud's own credit.

**CoreWeave facility ladder**

| Facility | Date | Size | Pricing | Maturity | Anchor / notes | Source, tier |
|---|---|---|---|---|---|---|
| DDTL 1.0 | Jul 2023 | $2.3bn | about 15% floating (implied) | 2028 (unconfirmed) | Led by Magnetar and Blackstone; GPU hardware security | Size: Blackstone release (P) https://www.blackstone.com/news/press/coreweave-secures-2-3-billion-debt-financing-facility-led-by-magnetar-capital-and-blackstone-to-meet-surging-demand-and-ongoing-expansion-of-specialized-cloud-infrastructure-to-power-ai/ ; rate is **A only** https://www.globaldatacenterhub.com/p/is-coreweaves-85-billion-deal-the |
| DDTL 2.0 | May 2024 | up to $7.6bn | Term SOFR +6.00% to 6.50% (IG customer loans); SOFR +13.00% (non IG customer loans), before amendments | | Led by Blackstone, with Magnetar and Coatue | CoreWeave S-1 / FY2025 10-K (P, snippet) https://www.sec.gov/Archives/edgar/data/1769628/000176962826000104/crwv-20251231.htm |
| DDTL 2.1 | Sept 2025 | n/f | SOFR +4.25% | | | FY2025 10-K (P, snippet) same URL |
| DDTL 3.0 | Jul 31 2025 | $2.6bn | **SOFR +4.00%** | Aug 21 2030 | OpenAI contract; Morgan Stanley and MUFG lead; secured by substantially all assets of CoreWeave Compute Acquisition Co. VII | CoreWeave IR (P) https://investors.coreweave.com/news/news-details/2025/CoreWeave-Closes-2-6-Billion-Secured-Debt-Financing-Facility-Strengthening-Market-Position-as-AI-Cloud-Leader/default.aspx |
| DDTL 4.0 | Mar 30 to 31 2026 | **$8.5bn** | about SOFR +2.25% floating; fixed tranche about 5.9% | about Mar 2032 | **Meta** contract; **A3 Moody's, A(low) DBRS**; first IG GPU backed financing | Size and ratings: Business Wire (P) https://www.businesswire.com/news/home/20260330529766/en/CoreWeave-Closes-Landmark-8.5-Billion-Financing-Facility-Achieving-First-Investment-Grade-Rated-GPU-backed-Financing/ ; pricing **A only** https://davefriedman.substack.com/p/the-trophy-deal-trap-what-coreweaves |
| DDTL 5.0 | May 18 2026 | **$3.1bn** | **SOFR +4.50%** (tightened 50bp from talk) | about 5.5 years | First publicly syndicated GPU backed DDTL; **Ba2 Moody's, BB+ Fitch**; supports two customer contracts; more than $15bn of orders | CoreWeave IR (P) https://investors.coreweave.com/news/news-details/2026/CoreWeave-Closes-3-1-Billion-Loan-Facility-Expanding-Access-to-Public-Markets-for-GPU-Backed-Financing/default.aspx ; Bloomberg (B) https://bloomberg.com/news/articles/2026-04-30/banks-kick-off-3-1-billion-loan-sale-for-coreweave-amid-ai-boom |

- **Takeaway on spreads.** Spreads fell from about 15% all in (2023) to SOFR +6.00% to 6.50% (2024, IG customer), SOFR +4.00% (OpenAI, 2025) and SOFR +2.25% (Meta, 2026, A only). The spread is set by who the end customer is. DDTL 5.0 shows the same company paying SOFR +4.50% once two non Meta contracts back the deal.
- **Conflict to resolve.** One aggregator (https://www.ainvest.com/news/coreweave-2-6b-loan-oversubscribed-price-widening-tells-story-2608/, A) says a $2.6bn CoreWeave loan closed at SOFR +5.50% and an issue price of 97. That conflicts with CoreWeave's own SOFR +4.00% for DDTL 3.0. Use the primary.
- **Sizing and amortization (P, S-1 snippet).** DDTL 2.0 repays quarterly from Oct 2025. Each payment is the **greater of** (i) the amount needed to bring principal down to a level supported by **projected contracted cash flows**, and (ii) the amount needed to bring it down to the **depreciated purchase price of the GPU servers and infrastructure**. There is also a mandatory prepayment of 100% of certain proceeds (the cash sweep). Source: https://www.sec.gov/Archives/edgar/data/1769628/000119312525044231/d899798ds1.htm . This is the core lender sizing logic: the debt can never exceed the lower of contract value or the depreciated hardware value.
- **Covenants.** DDTL 3.0 has a minimum **DSCR of 1.40x** from April 2027. A First Amendment pushed the first DSCR test to Oct 31 2027 and the first **contract fulfillment ratio** test to Feb 28 2026. DDTL 4.0 has a minimum **DSCR of 1.15x** after Jun 30 2027. Source is a snippet tied to the S-1 and 8-K results. The originating document is unclear, so treat as **A only** until the fact checker reads the 10-K or 8-K.
- **Moody's rationale for DDTL 4.0.** Meta is Aa2 at Moody's per the source (Meta's corporate rating is usually cited as Aa3, so check this). The facility is A3, a gap of about four notches. The gap reflects CoreWeave's operator risk: SLA failure, force majeure, or disruption to contracted cash flows. Source: https://davefriedman.substack.com/p/the-trophy-deal-trap-what-coreweaves (A). **A only.**
- **CoreWeave corporate debt.** $1.75bn of 9.75% senior notes due 2031, upsized from $1.25bn, rose to 101.88 after issue in April 2026. Bloomberg (B): https://www.bloomberg.com/news/articles/2026-04-10/coreweave-s-new-junk-bond-jumps-amid-meta-anthropic-deals . Meta's contract expanded by $21bn through Dec 2032, taking the total to $35bn. Bloomberg (B): https://www.bloomberg.com/news/articles/2026-04-09/coreweave-expands-meta-deal-for-ai-computing-to-21-billion

**xAI chip lease SPVs (Valor)**
- In Oct 2025 Valor arranged an SPV that buys Nvidia GPUs and rents them to xAI for Colossus 2 on a **five year** lease. The plan was about $7.5bn of equity and up to $12.5bn of debt (about **62.5% debt**, derived). Nvidia put up to $2bn into the equity. Apollo, Diameter and Valor were in the deal. Bloomberg via relays (A): https://www.freemalaysiatoday.com/category/business/2025/10/08/nvidia-to-invest-in-musks-xai-as-part-of-us20bil-funding ; https://ceomorningbrief.theedgemalaysia.com/article/2025/1037/World/22/773190 . **A only.**
- In Feb 2026 Apollo neared a **$3.4bn loan** to a second Valor vehicle at about **9.5%**. Total vehicle funding was about $5.3bn of debt and equity, so debt was about 64% (derived). Apollo made a similar $3.5bn loan in Nov 2025. The Information via Yahoo (A): https://finance.yahoo.com/news/apollo-xai-near-3-4-141209518.html . **A only.**

**Lambda**
- **$926m senior secured Term Loan B**, priced Aug 12 and closed Aug 27 2026, at **SOFR +3.00%** with OID 99.5. It tightened 75bp in syndication. It matures Dec 31 2030 and fully amortizes in line with contracted cash flows and GPU useful life. It is secured by the funded GPU servers. **Moody's Baa2.** The offtaker is investment grade: Nvidia, under a roughly $1.5bn, four year contract for about 18,000 servers per A sources. Lambda (P): https://lambda.ai/blog/lambda-closes-926-million-senior-secured-term-loan-b-facility ; https://lambda.ai/blog/lambda-prices-926-million-senior-secured-term-loan-b-facility . The Nvidia offtake detail is A: https://aiweekly.co/alerts/lambda-taps-917m-leveraged-loan-to-fund-nvidia-chip-lease
- Lambda also has a $1bn credit facility from May 2026 (A).

**Fluidstack / Google backstop (hyperscaler credit support for a neocloud lease)**
- Google backstopped **$3.2bn** of Fluidstack lease obligations at TeraWulf's Lake Mariner campus (360MW, 10 year lease) and got a 14% stake in TeraWulf. It backstopped **$1.4bn** at Cipher Mining (10 year deal) for a 5.4% stake. https://www.bisnow.com/news/national/data-center-capital-markets/crypto-miner-terawulf-raising-3b-in-debt-to-build-data-centers-for-google-131166 (A)
- WULF Compute LLC priced **$3.2bn of 7.750% senior secured notes due 2030** at par on Oct 16 2025. Collateral is first liens on substantially all WULF Compute assets and equity, plus a Fluidstack lockbox account. Before completion, Google pledged its TeraWulf warrants. TeraWulf IR (P): https://investors.terawulf.com/news-events/press-releases/detail/119/terawulf-inc-announces-pricing-of-3-2-billion-of-senior/
- Ratings: not found.
- **Not searched (budget ran out):** Fluidstack's own GPU debt.

**GPU depreciation and collateral values**
- CoreWeave raised the useful life of technology equipment **from 5 to 6 years** starting Jan 1 2023 (S-1). A: https://www.fool.com/investing/2025/11/11/michael-burrys-latest-warning-could-be-bad-news-fo . The primary is the S-1 at the URL above. Confirm wording there.
- **Hyperscaler server useful lives.**
  - Amazon cut a subset of servers from **6 to 5 years**, citing the pace of AI and ML. That cost about $700m of operating income, and Amazon recorded $920m of accelerated depreciation.
  - Meta extended to **5.5 years** (early 2025), a $2.9bn depreciation reduction.
  - Alphabet and Microsoft are at **6 years**.
  - Source: https://www.business-standard.com/companies/news/meta-platforms-tweak-accounting-formula-on-ai-servers-to-boost-profit-125021201808_1.html (A); https://deepquarry.substack.com/p/amazon-revises-server-lifespan-amid (A). The primaries are the Amazon and Meta FY2024 10-Ks. Fact checker should pull them.
- Moody's (Feb 2026 commentary, via relays) says GPUs have an average **economic life of 3 to 5 years**, and core hardware often becomes obsolete in **4 to 6 years**. That is why hyperscalers negotiate initial lease terms of **4 years** with renewal options extending to 20 years or more. https://www.datacenterdynamics.com/en/news/moodys-hyperscalers-understating-risks-of-short-term-ai-dc-lease-agreements-leaving-investors-in-the-dark/ (A, relaying Moody's).
- **H100 rental decline.** On demand H100 fell from **$8 to $10/hr at the 2024 peak to $1.80 to $3.50/hr by Q2 2026**, a decline of about 64% to 75%. https://intuitionlabs.ai/articles/h100-rental-prices-cloud-comparison ; https://introl.com/blog/gpu-cloud-price-collapse-h100-market-december-2025 . **A only.** These are vendor blogs. Silicon Data's H100 rental index (https://www.silicondata.com/blog/h100-rental-price-over-time) is the better source to cite if the fact checker can open it.
- Used H100 resale is estimated at **$15k to $28k, about 60% to 70% of new cost**. Compute Exchange calls its own figure an "unverified marketplace estimate". https://intuitionlabs.ai/articles/used-ai-gpu-prices-resale-trends . **A only and self described as unverified. Do not use.**
- **Collateral backstops emerging.** Nvidia is in early talks with insurers including Howden Re about cover for lender losses when neocloud borrowers default and pledged chips cannot be sold at par. Nvidia has also agreed to rent back unused capacity from neoclouds in some cases. https://www.bisnow.com/news/national/data-center-capital-markets/nvidia-asks-insurers-to-shoulder-financing-risk-for-some-of-its-largest-customers (A); https://capacityglobal.com/news/nvidia-now-agrees-to-rent-back-unused-gpu-capacity-from-neocloud-operators-if-customer-demand-falls-short/ (A). **A only.**
- **Neocloud defaults.** I found **no confirmed 2026 neocloud default or GPU collateral foreclosure** in search results. The risk is described as a refinancing wall in 2026 to 2027, not realized losses. Do not claim a default.

## 5. Securitization: data center ABS and CMBS

How it works.
- **ABS** (master trust, for example Vantage, Stack, Aligned, Switch, DataBank) securitizes the contracted lease cash flows of stabilized, leased facilities. Notes have an anticipated repayment date of about 5 years and a longer legal final maturity. If notes are not refinanced by the ARD, a cash sweep and rate step up apply. Sizing uses an LTV cap on appraised value and DSCR triggers that trap cash.
- **CMBS** (usually single asset single borrower, SASB) is a mortgage on the real estate. It is often floating (SOFR) or a 10 year fixed rate with an ARD.
- Both refinance construction debt once a site is stabilized.

- **ABS LTV cap.** S&P notes Aligned's class A notes have LTV **constrained at 70.0%** of appraised value at closing. Source: search snippet describing S&P presale language for Aligned (A relay): https://asreport.americanbanker.com/news/aligned-data-centers-presents-350-million-to-the-abs-market . **A only** as retrieved. The 60% to 75% range in the brief is consistent with this single data point, but I could not confirm a range.
- **ABS spreads and volume.** **AAA data center ABS at +105 to 130bp over swaps** in 2026, against +150 to 175bp in 2023. Issuance was **$38.4bn YTD through Aug 2026**, against $24.1bn a year earlier and $13.6bn for full year 2023. Typical leases are 12 to 20 year triple net leases with Microsoft, AWS, Meta or Google. https://www.datacentres.com/news/data-centre-abs-issuance-hits-38b-as-wall-street-securitizes-the-ai-lease-boom-slot1-2026-09-01 (A). **A only.**
- **Example ABS deals.**
  - Switch 2026-1: about $768m. Class A-2 rated AAA(sf), AA(low) and A(low) by DBRS Morningstar (separate classes), with ARD Mar 2031. Kirkland (P adjacent, A strictly): https://www.kirkland.com/news/press-release/2026/04/kirkland-advises-switch-on-raising-$768-million-in-latest-data-center-abs-issuance
  - Vantage: $2.9bn ABS in June 2026, about 620MW contracted, 3.4x covered (A, same datacentres.com piece).
  - Aligned: $1.18bn ABS in Aug 2026 (A: https://www.structureresearch.net/2026/08/05/aligned-data-centers-closes-on-1-18b-in-securitization-financing/).
  - Stack: $290m at 5.900% fixed. Cumulative master trust issuance is $2.59bn, rated A minus by S&P (A).
- **KBRA mix.** In KBRA research (May 30 2025, P), ABS were **70.8%** of data center securitized issuance (75 deals, average $459.7m) and CMBS **29.2%** (13 deals, average $1.09bn). https://www.kbra.com/publications/wtXJZSZt/kbra-releases-research-data-centers-a-comparison-of-abs-and-cmbs-structures
- **QTS / Blackstone examples.**
  - **$3.46bn CMBS** refinanced 10 QTS data centers in 6 markets (Nov 2025, originated by Citi and 10 others). Morningstar DBRS value rose from $4.75bn to $5.62bn over four years, so **implied LTV is about 62%** on the $5.62bn (derived; A for inputs). Cap rate moved from 7.50% to 7.32%. https://www.bisnow.com/news/national/data-center-capital-markets/blackstone-refinancing-10-qts-data-centers-with-35b-cmbs-loan-131817 (A); https://www.credaily.com/briefs/data-centers-power-record-3-46b-blackstone-deal/ (A)
  - **$2.05bn BX Trust 2025-VLT6** (Goldman led): 3 campuses (Suwanee, Manassas, Chicago), about $419m cash out. https://hoodline.com/2026/02/blackstone-snags-419m-cash-in-2-05b-qts-data-hub-refi/ (A)
  - An earlier QTS deal: $755.0m fixed rate first lien loan, 10 year ARD, 12 year final, **6.1341%** fixed (A snippet; deal unnamed).
- **QTS Thunder (KBRA, Jul 2026, P).** KBRA rated **A+**: preliminary on up to $3.6bn (Jul 8 2026) and final on **$3.25bn senior secured term loans**. This is a master indenture over **12 fully contracted data centers, 493.5MW**, leased to IG hyperscalers under 10 NNN and 2 NN leases.
  - Initial lease terms are 15 to 20 years. The weighted average remaining term is about **15.2 years** with about 13.7 years of extensions.
  - KBRA tests repayment under a hypothetical amortization and a **cash sweep** scenario, repaying within the extension period with lease tail left over.
  - Sources: https://www.kbra.com/publications/kbXhHFHP ; https://www.kbra.com/publications/kRbJnxVX
- **CMBS spreads.** JPMorgan Research puts AAA spreads on SASB data center CMBS at **SOFR +168bp as of Jul 28 2026**, against +153bp a year earlier. Barclays has data center AAA CMBS at about **165bp**, against 93 for office, 105 for retail and 125 for industrial. https://commercialobserver.com/2026/09/trepp-stephen-buschbom-andy-boettcher-cmbs/ (A, trade press citing bank research); https://www.credaily.com/?p=222783 (A). **A only.**
  - Data center CMBS issuance is about $17bn since 2025.
  - The **63.0% LTV and 10.36% debt yield** cited for the 2026 vintage cover **all CMBS**, not data centers. The data center figures rest on only five loans. Do not use as a data center LTV.

## 6. Leverage and pricing ladder

Derived ratios are marked (d). Items marked A only are not confirmed.

| Route | Typical leverage (LTV / LTC / advance) | Typical spread | Tenor | Example deal with figure |
|---|---|---|---|---|
| Hyperscaler senior unsecured bonds | Parent balance sheet; no asset LTV | T +40 (2 to 4 years) to T +118bp (20 years plus) median for Amazon, Alphabet, Meta and Oracle, Jul 2026 (B, Reuters) | 2 to 50 years (Alphabet 100 years in GBP) | Meta $25bn (Apr 2026), 2066 at T +147bp against +110bp in Oct 2025 (B); Amazon $53.8bn equivalent, 2076 at T +130bp (B) |
| JV / SPV lease backed project bonds (Hyperion, El Paso) | Debt roughly 90% to 100% of development cost (d, Hyperion; A only equity input); sized to lease plus RVG | T +225bp (Hyperion, Oct 2025, B); T +287.5bp (El Paso, Jul 2026; yield B, spread A) | About 23.6 years, amortizing (Hyperion 2049) | Beignet $27.3bn, 6.581%, A+ (B); Sopaipilla $12.55bn at 7.534% (B) |
| Developer construction / term loans (Oracle leases) | About 64% LTC at Abilene (d: $9.6bn of debt on about $15bn cost; A only) | Not found | 4 years plus 2 x 1 year extensions (Frontier, B) | Vantage $38bn ($23.25bn TX plus $14.75bn WI) (A/B); Jupiter $18bn at 89 to 91 cents (A only) |
| GPU backed DDTL / TLB (IG customer) | Lesser of contracted cash flow and depreciated GPU cost (P, S-1); DSCR 1.15x to 1.40x (A only) | SOFR +2.25% (CoreWeave and Meta, A only); SOFR +3.00% (Lambda Baa2, P); SOFR +4.00% (CoreWeave and OpenAI, P) | About 4 to 6 years, amortizing to contract end | CoreWeave DDTL 4.0 $8.5bn, A3 (P); Lambda $926m, Baa2 (P) |
| GPU backed loans (sub IG / private) | About 62% to 64% debt in xAI chip SPVs (d, A only) | SOFR +4.50% (CoreWeave DDTL 5.0, Ba2/BB+, P); about 9.5% fixed (Apollo and xAI, A only); about 15% (CoreWeave DDTL 1.0 2023, A only) | 5 year chip lease (xAI); about 5.5 years (DDTL 5.0) | CoreWeave DDTL 5.0 $3.1bn (P); Apollo $3.4bn to Valor SPV (A only) |
| Neocloud HY with hyperscaler backstop | n/a | 7.75% fixed (TeraWulf, P) | 5 years (2030) | WULF Compute $3.2bn with $3.2bn Google lease backstop (P/A) |
| Data center ABS | LTV cap about 70% of appraised value (S&P on Aligned, A only) | AAA at swaps +105 to 130bp (2026, A only) | About 5 year ARD, longer legal final | Switch 2026-1 about $768m (A); Vantage $2.9bn (A); $38.4bn YTD Aug 2026 (A only) |
| Data center CMBS / master indenture | About 62% implied on the QTS $3.46bn (d, A inputs) | AAA SASB at SOFR +168bp (Jul 28 2026, A only via JPM) | Floating, or 10 year ARD / 12 year final (QTS fixed 6.1341%, A) | QTS $3.46bn CMBS (A); QTS Thunder $3.25bn, KBRA A+ (P) |

## 7. Rating agency treatment

**S&P**
- S&P treats the Hyperion SPV as Meta credit in project finance form. Beignet is rated **A+**, one notch below Meta's AA minus. The drivers are Meta's lease guarantee over the initial term and renewals, and an RVG structured to be sufficient in most modeled cases to repay the bonds.
  - Sources: https://www.globaldatacenterhub.com/p/meta-blue-owls-27b-bet-is-this-the (A); https://stohl.substack.com/p/exclusive-credit-report-shows-meta (A, says it saw the S&P report). **A only.** Fact checker should get the S&P presale.
  - S&P's October 2025 opinion is what let Meta keep Hyperion off balance sheet (IFR, B snippet): https://www.ifre.com/bonds/2390941/moodys-opinion-threatens-to-derail-off-balance-sheet-data-centre-deals
- On El Paso, S&P is at A+ preliminary and Fitch at AA minus (EXP), one notch apart over the security package (A only).
- On Oracle (Jul 9 2026), S&P adds not yet commenced data center leases ($260bn) and power purchase obligations ($13bn) into its leverage view and cut Oracle to **BBB minus** (A only, see section 1).

**Moody's**
- Moody's report, about Feb 24 to 25 2026. Authors were David Gonzales and Alastair Drake.
  - The top five hyperscalers had **$969bn** of lease commitments at end 2025, about double the prior year. **$662bn** of that is not yet commenced and sits entirely off balance sheet, equal to **113%** of their adjusted debt.
  - Hyperscalers sign short initial terms (often 4 years) with RVGs and long renewal options. This understates risk because GPU and hardware obsolescence (economic life 3 to 5 years) drives the short terms.
  - Moody's will make its own probability assessment of which future obligations, RVGs included, to treat as debt. It warns that heavy users of the route risk a **"material" deterioration** in credit profile. That puts Moody's at odds with S&P's Hyperion treatment.
  - Sources: Fortune (A, but detailed): https://fortune.com/2026/02/25/hyperscaler-risk-off-balance-sheet-662-billion-data-center-commitments-meta-amazon-microsoft-oracle-alphabet/ ; IFR (B): https://www.ifre.com/bonds/2390941/moodys-opinion-threatens-to-derail-off-balance-sheet-data-centre-deals ; DCD (A): https://www.datacenterdynamics.com/en/news/moodys-hyperscalers-understating-risks-of-short-term-ai-dc-lease-agreements-leaving-investors-in-the-dark/
- Moody's has separately flagged that aging data centers and tenant risk could pressure CMBS and ABS. https://irei.com/news/moodys-aging-data-centers-tenant-risks-could-pressure-cmbs-and-abs-returns/ (A; date not confirmed).
- **GPU loans.**
  - CoreWeave DDTL 4.0 is **A3** with Meta as the customer. The notch gap to Meta reflects CoreWeave operator dependency risk, and the rating looks through to Meta credit and Blackwell residual value (A only for the rationale).
  - CoreWeave DDTL 5.0 is **Ba2** with two non Meta contracts (P).
  - Lambda's TLB is **Baa2** with an IG offtaker (P).
  - Pattern: a GPU loan rating equals the offtaker rating minus operator notches. Without an IG offtaker it falls to BB.

**Fitch**
- Fitch rated El Paso / Sopaipilla **AA minus (EXP)**, one notch above S&P (A only).
- Fitch's 2026 approach sorts deals into three buckets (A only, Clifford Chance July 2026 note "The Data Center Lease Is the Bond", fetch blocked):
  - The bond tracks the tenant.
  - The bond is IG but notched down for structural risk.
  - The bond is HY because hyperscaler support is deferred or absent.
- Fitch's Anubhav Arora: "rent doesn't start until the project is complete", so construction delay leaves a cash flow gap for bondholders. Oracle's Michigan project got Fitch's highest score in the field because of an unconditional rent guarantee. Sources: https://www.cliffordchance.com/content/dam/cliffordchance/briefings/2026/07/The%20Data%20Center%20Lease%20Is%20the%20Bond.pdf ; https://asreport.americanbanker.com/articles/ai-race-mints-top-rated-hyperscaler-backed-data-center-debt (A)
- CoreWeave DDTL 5.0: **BB+** (P).

**KBRA**
- Rates data center ABS under its Data Center ABS Global Rating Methodology (P): https://www.kbra.com/publications/ywsVHsMw/abs-data-center-abs-global-rating-methodology
- QTS Thunder **A+** (P). The rationale is fully contracted IG hyperscaler leases (about 15.2 years WALT plus 13.7 years of extensions), with repayment tested under amortization and cash sweep scenarios that leave lease tail.

**DBRS Morningstar**
- CoreWeave DDTL 4.0 **A(low)** (P).
- Switch 2026-1 class ratings AAA(sf), AA(low) and A(low) (A).

**Synthesis for the report.**
1. The S&P versus Moody's split on whether short leases plus RVGs are debt is the key divergence. S&P let Hyperion stay off balance sheet. Moody's says it will impute.
2. Every rated structure is effectively rated on the end tenant (Meta, Microsoft, Oracle, Nvidia) less structural notches. So a downgrade of the tenant (Oracle to BBB minus in July 2026) flows straight through to the project debt.

## 8. 2026 stress log (chronological)

| Date | Event | Figure | Tier |
|---|---|---|---|
| Dec 2025 | Blue Owl exits equity on Oracle's Michigan campus | $10bn, 1GW | A (FT original) |
| Feb 24 to 25 2026 | Moody's flags off balance sheet leases | $662bn not commenced, 113% of adjusted debt | A / B (IFR) |
| Mar 6 2026 | Oracle and OpenAI end Abilene expansion | About 600MW never finalized | B (Bloomberg) |
| Apr 2026 | Meta $25bn bond prices wider | 2066 at +147bp against +110bp; book $96bn against $125bn | B |
| Jul 9 2026 | S&P cuts Oracle to BBB minus | Adds $260bn of leases | A only |
| Jul 20 to 24 2026 | Oracle 5 year CDS at record | About 203bp | A only |
| Late Jul 2026 | El Paso bonds need junk like yield | 7.534%, T +287.5bp, 1.6x book | B (yield) / A |
| Jul 28 2026 | 78 of 91 2026 hyperscaler bonds trade above issue yield | Median +22bp | B (Reuters) |
| Late Jul / Aug 2026 | Hyperion bonds hit a record low | 94.4 cents | A only |
| 2026 (by Sept) | Jupiter loans quoted below par as syndication stalls | 89 to 91 cents on $18bn | A only (FT original) |
| Sept 24 to 25 2026 | Oracle force majeure on Jupiter | 2.45GW; pipeline slipped to Feb 1 2027 | A (Bloomberg original) |
| 2026 | Neocloud defaults | **None found** | n/a |

## 9. Open items for the fact checker (priority)
1. Meta FY2025 10-K: exact RVG language, the 16 year term, the cap amount, and the $28bn aggregate RVG threshold.
2. S&P Beignet and Sopaipilla presales, and the Fitch Sopaipilla release: ratings, notching rationale, lease and rent start terms.
3. Primary source for the El Paso spread (+287.5bp) and Hyperion's 94.4 low with its date.
4. CoreWeave FY2025 10-K debt footnote: DDTL 1.0 rate, DDTL 4.0 pricing (SOFR +2.25% and about 5.9% fixed are A only), and DSCR covenant levels.
5. FT original on Jupiter loan prices. Bloomberg / S&P original on the Oracle downgrade and the $260bn lease add.
6. Construction loan spreads (Abilene, Frontier, Jupiter). Nothing found. Cut or soften any spread claim for this route.
7. ABS LTV and DSCR: get a 2026 presale (S&P or KBRA) to replace the single A only 70% data point.
