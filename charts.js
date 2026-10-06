// Chart ideas for the AI Infrastructure Financing case study.
// Appendix material, not report text.
const L = {
  yahoo: "https://finance.yahoo.com/markets/stocks/articles/hyperscaler-debt-binge-pushes-yields-134825104.html",
  capacity: "https://capacityglobal.com/news/metas-12bn-el-paso-bond-exposes-ai-debt-repricing/",
  theasset: "https://www.theasset.com/article/55209/theasset.com",
  marcellus: "https://marcellus.in/story/short-read-three-ai-megadeals-are-breaking-new-ground-on-wall-street/",
  tnw: "https://thenextweb.com/news/oracle-sp-downgrade-ai-spending-junk-risk",
  coreweave: "https://aiweekly.co/alerts/blue-owl-backed-coreweave-data-center-prices-11b-in-junk-bonds-at-925-270bps",
  elpaso: "https://www.bitget.com/news/detail/12560605553292",
  elpaso2: "https://finance.biggo.com/news/9e8d67e5-ca22-44ed-a1bd-0753ecac9f88",
  aviva: "https://www.avivainvestors.com/en-us/views/aiq-investment-thinking/2026/07/bond-voyage/",
  ecm: "https://ecmsource.com/investment-grade-bond-issuance-record-august-2026-ai-hyperscalers-145-billion/",
  sa: "https://siliconanalysts.com/analysis/hyperscaler-ai-capex-depreciation-wall-2026",
  jupiterReuters: "https://kfgo.com/?p=1355919",
  jupiterFT: "https://www.thestar.com.my/tech/tech-news/2026/09/19/oracle039s-18-billion-data-center-debt-under-pressure-ft-reports",
  axios: "https://axios.com/2026/09/25/oracle-debt-data-centers",
  ppc: "https://ppc.land/s-p-cuts-oracle-to-bbb-as-ai-buildout-widens-cash-deficit-to-42bn/",
  sage: "https://www.sageadvisory.com/article/hyperscaler-debt-deluge-the-new-driver-of-ig-spread-pressure",
  benzinga: "https://www.benzinga.com/node/60986056",
  mlq: "https://mlq.ai/news/hyperscaler-bond-issuance-reaches-about-220-billion-as-ai-financing-costs-rise/",
  hyperionDetail: "https://www.itiger.com/news/1142559708",
  jupiterAI: "https://aiweekly.co/alerts/oracle-sends-force-majeure-notice-on-blue-owls-project-jupiter",
  fredBBB: "https://fred.stlouisfed.org/series/BAMLC0A4CBBB",
  fredHY: "https://fred.stlouisfed.org/series/BAMLH0A0HYM2",
  fred10: "https://fred.stlouisfed.org/series/DGS10",
};

const charts = [
  {
    id: "A",
    slot: "Page 6, left",
    title: "AI Infrastructure Debt Yields (%)",
    type: "Horizontal bar, maroon shades like the Auto ABS chart",
    rows: [
      ["Meta corporate bond (comparable)", "about 5.5", "Oct 2025"],
      ["Hyperion project bonds (A+)", "6.58", "Oct 2025"],
      ["Oracle 10 year bond", "about 6.5", "Jul 2026"],
      ["El Paso project bonds (A+)", "7.534", "Jul 2026"],
      ["CoreWeave Digital Drive notes", "9.25", "Sep 2026"],
    ],
    note:
      "Bars mix dates and maturities, so label each bar with its pricing date. A cleaner version plots spread over Treasuries. I only found a spread for El Paso (about 287.5bps over the 10 year), so pull the rest from Bloomberg before publishing.",
    links: [
      ["El Paso repricing, Capacity", L.capacity],
      ["El Paso 7.534% yield and 287.5bps spread", L.elpaso],
      ["Hyperion A+ rating and structure, The Asset", L.theasset],
      ["Hyperion 6.58% versus 5.5% Meta corporate", L.marcellus],
      ["Oracle 10 year near 6.5%, Bloomberg via TNW", L.tnw],
      ["CoreWeave site 9.25% and plus 270bps", L.coreweave],
    ],
  },
  {
    id: "B",
    slot: "Page 6, right",
    title: "Hyperscaler Bond Issuance ($bn)",
    type: "Column chart, last two bars shaded lighter to show estimates",
    rows: [
      ["2025 full year (Amazon, Alphabet, Meta, Oracle)", "about 108", "Reuters and LSEG"],
      ["2026 through July 7 (same four issuers)", "about 194", "Reuters and LSEG"],
      ["2026 estimate (five hyperscalers)", "about 250", "Goldman Sachs"],
      ["2027 estimate (five hyperscalers)", "about 400", "Goldman Sachs"],
    ],
    note:
      "The first two bars cover four issuers and Goldman's cover five (adding Microsoft), so footnote the scope or use one scope throughout. A stacked version by issuer is possible using the dated issuance table in the Silicon Analysts link.",
    links: [
      ["Reuters analysis of LSEG data via Yahoo Finance", L.yahoo],
      ["Dated deal table by issuer, Silicon Analysts", L.sa],
      ["Issuance by currency, about $170bn by June 26, Aviva Investors", L.aviva],
      ["About $220bn through August, via MLQ", L.mlq],
    ],
  },
  {
    id: "C",
    slot: "Page 5, left",
    title: "Capex Versus Operating Cash Flow and Debt Funding ($bn)",
    type: "Clustered column plus a callout for debt share",
    rows: [
      ["2026 hyperscaler capex estimate", "about 750", "Goldman Sachs"],
      ["2026 operating cash flow estimate", "about 778", "Goldman Sachs"],
      ["Debt issuance as a share of capex", "about 33% in 2026, 35% in 2027", "Goldman Sachs"],
    ],
    note:
      "S&P's own capex estimate for the five is also about $750bn, equal to 38% of their combined revenue, which gives a second source.",
    links: [
      ["Goldman capex and cash flow figures via Yahoo Finance", L.yahoo],
      ["S&P capex estimate and ratings by issuer via MLQ", L.mlq],
    ],
  },
  {
    id: "D",
    slot: "Page 5, right",
    title: "Asset Life Versus Debt Maturity (years)",
    type: "Horizontal bar, shows the duration mismatch in one picture",
    rows: [
      ["GPU useful life", "3 to 5", "Capacity"],
      ["Hyperion initial lease term", "4 (extensions available)", "Bloomberg via iTiger"],
      ["El Paso lease obligation", "up to 20", "Zhitong via Webull"],
      ["El Paso bond maturity", "2048, about 22 years", "Bloomberg via Briefs"],
      ["Hyperion bond maturity", "2049, about 24 years", "Capacity"],
    ],
    note:
      "This is the most original visual in the set. The El Paso 20 year lease comes from a weaker source, so verify it before using.",
    links: [
      ["Duration mismatch discussion, Capacity", L.capacity],
      ["Hyperion lease and residual value guarantee", L.hyperionDetail],
      ["El Paso lease and insurance details", L.elpaso2],
    ],
  },
  {
    id: "E",
    slot: "Optional, page 6 swap",
    title: "Oracle Credit Spread Versus BBB Index",
    type: "Line chart",
    rows: [
      ["Oracle 5 year CDS, 2025 to present", "Bloomberg ORCL CDS", "Bloomberg terminal"],
      ["ICE BofA BBB option adjusted spread", "FRED BAMLC0A4CBBB", "FRED"],
      ["ICE BofA high yield option adjusted spread", "FRED BAMLH0A0HYM2", "FRED"],
    ],
    note:
      "Pairs naturally with the BBB- downgrade and the August recap's high yield spread discussion. FRED series IDs are from memory and I did not open them this session, so confirm the links resolve. Oracle CDS has to come from Bloomberg.",
    links: [
      ["BBB spread, FRED", L.fredBBB],
      ["High yield spread, FRED", L.fredHY],
      ["Oracle downgrade details, PPC Land", L.ppc],
      ["Oracle BBB- and bond yield, TNW", L.tnw],
    ],
  },
  {
    id: "F",
    slot: "Optional, Oracle callout graphic",
    title: "Project Jupiter Timeline",
    type: "Simple dated timeline",
    rows: [
      ["Late 2025", "About $18bn of bank loans arranged by about 20 banks", "FT via Reuters"],
      ["Jul 9, 2026", "S&P cuts Oracle to BBB-", "S&P via PPC Land"],
      ["Sep 18 to 19, 2026", "Loans quoted at 89 to 91 cents", "FT via Reuters"],
      ["Sep 24, 2026", "Oracle sends force majeure notice to Blue Owl unit", "Reuters, Bloomberg"],
      ["Feb 1, 2027", "Gas pipeline in service date after two state denials", "Bloomberg via AI Weekly"],
      ["2028", "Planned campus opening", "Reuters"],
    ],
    note:
      "Useful if the Oracle callout needs a visual instead of a second page two chart.",
    links: [
      ["Reuters on the force majeure notice", L.jupiterReuters],
      ["FT report on loan prices via The Star", L.jupiterFT],
      ["Pipeline delay detail, AI Weekly", L.jupiterAI],
      ["Axios on spread moves in related notes", L.axios],
    ],
  },
  {
    id: "G",
    slot: "Optional",
    title: "Hyperscaler Bonds Trading Wider Than Issue",
    type: "Two simple stat callouts or a small bar pair",
    rows: [
      ["Bonds trading wider than issue (July 28)", "78 of 91", "Reuters and LSEG"],
      ["Median yield increase", "about 22bps", "Reuters and LSEG"],
      ["Median new issue concession", "12bps in 2026 versus 2.25bps in 2025", "Reuters and LSEG"],
      ["Hyperscaler share of USD IG issuance", "about 2% (2022 to 2024) versus about 9% projected 2026", "Bloomberg via ECM Source"],
    ],
    note:
      "The share of IG issuance figure comes from an aggregator quoting Morningstar and Bloomberg, so verify it before using.",
    links: [
      ["Reuters via Yahoo Finance", L.yahoo],
      ["IG record August and issuer share, ECM Source", L.ecm],
      ["Amazon deal pushing spreads wider, Sage Advisory", L.sage],
    ],
  },
];

module.exports = { charts, L };
