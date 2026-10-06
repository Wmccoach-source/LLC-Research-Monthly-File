// Shared report text. Rule: no dashes or colons anywhere in report body text.
module.exports = {
  title: "AI Infrastructure Financing",
  coverTitleLines: ["Case Study", "AI Infrastructure Financing"],

  page1: {
    pageNum: "5",
    title: "AI Infrastructure Financing",
    h1: "Overview",
    p1:
      "AI infrastructure financing is the debt and structured capital used to build data centers and the compute inside them, and it has shifted from hyperscaler cash flow to the credit markets. The defining structure is the joint venture. A hyperscaler contributes a campus to a special purpose vehicle, the building block of last month's ABS case study, a private capital partner takes majority equity, and the vehicle issues long dated bonds secured by a lease back to the hyperscaler. The debt sits at the project level, which keeps leverage off the tenant's reported balance sheet in exchange for a higher borrowing cost. Meta's $27bn Hyperion campus in Louisiana set the template in October 2025, with Blue Owl holding 80%, Meta holding 20%, and A+ rated bonds priced at 6.58%, about 225bps over Treasuries, against roughly 5.5% on a comparable Meta corporate bond. Oracle has leaned more on its own balance sheet while also leasing campuses financed at the project level.",
    h2: "AI Infrastructure and the Credit Markets",
    p2:
      "The scale of the buildout is what ties this theme to credit. Goldman Sachs expects the five largest hyperscalers to spend about $750bn on capital expenditure in 2026 and to fund about one third of it with debt. Amazon, Alphabet, Meta and Oracle issued about $194bn of bonds through July 7, up 79% from all of 2025, and Goldman expects issuance across the five, adding Microsoft, to reach roughly $250bn this year and $400bn in 2027. That supply has landed in investment grade, while the August recap showed high yield issuance at a one year low of $12bn. Private capital is filling the rest of the gap, with Morgan Stanley estimating that private credit could supply more than $800bn of data center financing through 2028, led by asset based finance. Several of those lenders, Blue Owl among them, halted fund redemptions in March, as covered in that month's recap. The debt is long dated, with bonds maturing in 2048 and 2049, far beyond Hyperion's four year initial lease term.",
    h3: "Why It Matters for Credit",
    p3:
      "For credit investors, the question is who holds the risk. In the joint venture structure, the hyperscaler's lease supports the bonds, but the project still carries power, permitting, and construction risk that the tenant's rating does not remove. Pricing has started to reflect this, with the El Paso bonds priced at a wider spread than Hyperion. Oracle's cut to BBB- shows that heavy borrowing can put a hyperscaler itself under ratings pressure. The divergence is that capital remains abundant while the risk concentrates in single tenant projects and a short list of tenants.",
    chart1Title: "2026 Capex Versus Debt Funding ($bn)",
    chart2Title: "Asset Life Versus Debt Maturity (years)",
    chart1Note: "Insert chart\n2026 capex and expected debt issuance",
    chart2Note: "Insert chart\nLease terms and bond maturities",
    sources: "Sources: Meta, Bloomberg, Reuters, LSEG, Goldman Sachs, Morgan Stanley, S&P Global Ratings",
  },

  page2: {
    pageNum: "6",
    title: "AI Debt Issuance",
    h1: "Market Activity",
    p1:
      "Hyperscaler borrowing is getting more expensive. Of 91 hyperscaler bonds issued in 2026 with comparable pricing data, 78 traded at higher yields on July 28 than at issuance, with a median increase of about 22bps, a move that blends rates and spread. The cleaner credit signal is the median new issue concession, which widened to 12bps from 2.25bps in 2025, and Amazon's $25bn deal pushed its existing 30 year bond about 20bps wider. Meta's El Paso bonds priced in July at about 7.5%, roughly 287.5bps over Treasuries, and drew roughly $20bn of orders, about 1.6 times the deal. In September, a Blue Owl sponsored data center leased to CoreWeave reportedly sold $1.1bn of five year high yield notes at 9.25%, about 270bps above similarly rated debt.",
    chart1Title: "AI Infrastructure Debt Yields (%)",
    chart2Title: "Hyperscaler Bond Issuance ($bn)",
    chart1Note: "Insert chart\nMeta corporate, Hyperion, Oracle 10 year, El Paso, CoreWeave site",
    chart2Note: "Insert chart\n2025 actual, 2026 YTD, 2026E, 2027E",
    h2: "Risk Considerations",
    p2:
      "The structural risks are familiar to credit investors. Long dated bonds rest on leases to a single tenant, and Hyperion's leases carry a four year initial term, so repayment after year four depends on Meta renewing or on its residual value guarantee, which covers the first 16 years. The chips inside, which Moody's says can become obsolete within four to six years, turn over far faster. Before a campus operates, power, permitting, and local opposition can delay rent. The BIS notes this borrowing increasingly sits in vehicles funded through private placements, and Moody's has flagged that short leases can understate effective obligations. The key divergence is between abundant capital and its rising price.",
    callL: {
      h: "Meta SPVs Reprice",
      p: "Meta has funded two campuses through joint ventures with private capital. Hyperion in Louisiana raised $27bn in October 2025 with A+ rated bonds due 2049 priced at 6.58%, about 225bps over Treasuries. El Paso, a one gigawatt campus due online in 2028, followed in July with about $12.5bn of amortizing bonds due 2048, also rated A+ by S&P, at about 7.5%. Both rest on leases to Meta. Higher Treasury yields explain part of the gap, but a spread roughly 60bps wider on the same S&P rating and tenant suggests investors now charge more for structure, supply, and duration.",
    },
    callR: {
      h: "Oracle Under Pressure",
      p: "S&P cut Oracle to BBB- on July 9, citing a widening cash flow deficit from its AI buildout, and said another downgrade is possible if leverage stays above 4.5x. In September, about $18bn of bank loans tied to its Project Jupiter campus in New Mexico were quoted at 89 to 91 cents, and Oracle sent a force majeure notice to the developer, a Blue Owl unit, citing power delays. Reuters reported that Oracle is not seeking to terminate the lease, could defer rent for up to three years, and would still owe rent for the full term. Oracle says the project is on schedule.",
    },
    sources: "Sources: Bloomberg, Reuters, LSEG, Meta, S&P Global Ratings, Financial Times, BIS, Moody's",
  },
};
