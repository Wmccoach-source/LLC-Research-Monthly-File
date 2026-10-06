// Shared report text. Rule: no dashes or colons anywhere in report body text.
module.exports = {
  title: "AI Infrastructure Financing",
  coverTitleLines: ["Case Study", "AI Infrastructure Financing"],

  page1: {
    pageNum: "5",
    title: "AI Infrastructure Financing",
    h1: "Overview",
    p1:
      "AI infrastructure financing is the debt and structured capital used to build data centers and the compute inside them, and it has shifted from hyperscaler cash flow to the credit markets. The defining structure is the off balance sheet joint venture. A hyperscaler contributes a campus to a special purpose vehicle, a private capital partner takes majority equity, and the vehicle issues long dated bonds or loans secured by a lease back to the hyperscaler. The debt sits at the project level, which keeps leverage off the tenant's balance sheet in exchange for a higher borrowing cost. Meta's $27bn Hyperion campus in Louisiana - set the template in October 2025, with Blue Owl holding 60%, Meta holding 40%, and A+ rated bonds priced at 6.58% versus roughly 5.5% on Meta's own corporate debt. It remains the largest private credit transaction ever. Oracle has taken the opposite route by borrowing directly on its own balance sheet.",
    h2: "AI Infrastructure and the Credit Markets",
    p2:
      "The scale of the buildout is what ties this theme to credit. Goldman Sachs expects the largest hyperscalers to spend about $750bn on capital expenditure in 2026 against operating cash flow of roughly $778bn, with debt issuance covering about one third of that spending. Amazon, Alphabet, Meta and Oracle issued about $194bn of bonds through July 7, up 59% from all of 2025, and Goldman expects issuance across the five largest hyperscalers to reach roughly $250bn this year and $400bn in 2027. US investment grade supply set a record $145.2bn in August, the third straight monthly record, as hyperscalers rose from roughly 2% of dollar issuance in 2022 through 2024 to a projected 9% in 2026. Private capital is filling the rest of the gap, with Morgan Stanley estimating that tech companies and related parties could need up to $800bn of private credit through asset specific structures by 2028. The debt behind these structures is long dated, with bonds reaching 2048 and 2049 against GPUs that last three to five years.",
    h3: "Why It Matters for Credit",
    p3:
      "For credit investors, the question is who holds the risk. In the joint venture structure, the hyperscaler's lease supports the bonds, but the project still carries power, permitting, and construction risk that the tenant's rating does not remove. Pricing has started to reflect this, with the El Paso bonds priced at a higher yield than Hyperion. At the same time, Oracle's move to BBB- shows that borrowing directly puts the hyperscaler itself on the credit watchlist. Both paths point to the same place, which is that AI infrastructure is becoming a distinct credit sector with its own spread behavior.",
    chart1Title: "Capex Versus Operating Cash Flow ($bn)",
    chart2Title: "Asset Life Versus Debt Maturity (years)",
    chart1Note: "Insert chart\n2026 capex and operating cash flow",
    chart2Note: "Insert chart\nGPU life, lease terms, bond maturities",
    sources: "Sources: Reuters, LSEG, Goldman Sachs, Bloomberg, Morgan Stanley, S&P Global Ratings, The Asset",
  },

  page2: {
    pageNum: "6",
    title: "AI Debt Issuance",
    h1: "Market Activity",
    p1:
      "Hyperscaler borrowing is now carrying a cost. Of 91 hyperscaler bonds issued in 2026 with comparable pricing data, 78 traded at higher yields on July 28 than at issuance, with a median increase of about 22bps. The median new issue concession widened to 12bps from 2.25bps in 2025, and Amazon's $25bn deal pushed its existing 30 year bond about 20bps wider. Pressure is greater in project level debt. Meta's El Paso bonds priced in July at a 7.034% yield, about 287.5bps over 10 year Treasuries, and drew roughly $17bn of orders for a $12.55bn deal. In September, a Blue Owl sponsored data center leased entirely to CoreWeave sold $1.1bn of five year notes at 9.25%, roughly 270bps above similarly rated debt.",
    chart1Title: "AI Infrastructure Debt Yields (%)",
    chart2Title: "Hyperscaler Bond Issuance ($bn)",
    chart1Note: "Insert chart\nMeta corporate, Hyperion, Oracle 10 year, El Paso, CoreWeave site",
    chart2Note: "Insert chart\n2025 actual, 2026 YTD, 2026E, 2027E",
    h2: "Risk Considerations",
    p2:
      "The structural risks are familiar to credit investors. Long dated bonds rest on leases to a single tenant, while the equipment inside the buildings turns over every three to five years, and Hyperion's lease has a four year initial term backed by a residual value guarantee from Meta. Before a campus operates, execution risk sits with lenders, as power, permitting, and local opposition can delay rent. Default rates on data center bonds have reached 12% this year. Disclosure is limited, since the BIS notes much of this borrowing sits in private placement vehicles, and Moody's has flagged that short lease terms and residual value guarantees can understate effective obligations. The key divergence is: between abundant capital and its rising price.",
    callL: {
      h: "Meta SPVs Reprice",
      p: "Meta has funded two campuses through joint ventures with private capital. Hyperion in Louisiana raised $27bn in October 2025 with A+ rated bonds priced at 6.58%. El Paso, a one gigawatt campus due online in 2028, followed in July with $12.55bn of A+ rated bonds due 2058 priced at 7.534%. Both place the debt at the project level behind a long lease to Meta. The higher cost on the same rating and the same tenant shows investors now charge for structure, supply, and duration.",
    },
    callR: {
      h: "Oracle Under Pressure",
      p: "S&P cut Oracle to BBB on July 9, citing cash burn from its AI buildout, and said another downgrade is possible if leverage stays above 4.5x. Oracle raised roughly $43bn of debt in fiscal 2026. In September, about $18bn of bank loans tied to its Project Jupiter campus in New Mexico were quoted at 98 to 100 cents on the dollar, and Oracle sent a force majeure notice to the developer, a Blue Owl unit, citing power delays. A source told Reuters Oracle cannot terminate the lease and remains responsible for debt costs, and Oracle says the project is on schedule.",
    },
    sources: "Sources: Bloomberg, Reuters, LSEG, S&P Global Ratings, Financial Times, BIS, Moody's, Capacity",
  },
};
