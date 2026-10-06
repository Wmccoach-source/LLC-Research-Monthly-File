// Shared report text. Rule: no dashes or colons anywhere in report body text.
module.exports = {
  title: "AI Infrastructure Financing",
  coverTitleLines: ["Case Study", "AI Infrastructure Financing"],

  page1: {
    pageNum: "5",
    title: "AI Infrastructure Financing",
    h1: "Overview",
    p1:
      "AI infrastructure financing is the debt raised to build data centers and the computing equipment inside them, and in 2026 it has become one of the largest sources of new supply in credit. Lenders reach the same assets through five routes. Hyperscalers borrow directly in the investment grade market. Joint ventures issue project bonds secured by a lease to a hyperscaler, as with Meta's $27.3bn Hyperion financing, where Blue Owl owns 80% of the vehicle and the A+ rated bonds amortize to 2049. Developers take construction loans against leases to Oracle and OpenAI. Neoclouds such as CoreWeave borrow against GPUs and the customer contracts that pay for them. Stabilized campuses are refinanced through data center ABS and CMBS. In every route the lender is underwriting the tenant, and agencies start from the tenant's rating and subtract notches for construction, lease length, and operator risk.",
    h2: "How Lenders Size the Debt",
    p2:
      "Lease backed debt is sized so that contracted rent covers debt service with a thin cushion and the bonds amortize before the lease and its renewals run out, so leverage rises with the strength of the tenant. Hut 8's $4.25bn Beacon Point bonds, backed by a tenant rated AA- or better, financed 95% of project cost at T+165, which Hut 8 calls the highest loan to cost for an HPC data center bond. Oracle's Saline Township campus in Michigan raised about $14bn of bonds against $16.3bn of cost, leaving roughly 15% equity. Stabilized campuses are sized on appraised value, and Aligned's ABS master trust, which added $1.18bn in July, caps its senior notes at 70% of appraised value. GPU lenders lend less because the collateral depreciates, and Apollo's $3.5bn for the vehicle that leases chips to xAI equals about 65% of a $5.4bn purchase. Agencies stress all of these. KBRA cut the cash flow on the single tenant Ohio campus behind BX 2026 VLT10 to 18.9% below the issuer's figure and its value to 27.2% below appraisal, lifting leverage on the $1.26bn loan to 108.4%.",
    h3: "Why It Matters for Credit",
    p3:
      "The debt is only as long as the lease behind it, and hyperscaler leases are short. Hyperion and El Paso both carry four year initial terms against bonds amortizing to 2049 and 2048, and Meta's residual value guarantee on Hyperion, about $28bn and covering the first 16 years, is what bridges the gap. Moody's counted $662bn of hyperscaler data center leases not yet commenced at the end of 2025, held off balance sheet and equal to 113% of their adjusted debt, and says it will treat part of them as debt, while S&P accepted Hyperion as off balance sheet for Meta. The divergence is that one obligation is a lease to one agency and debt to another, and any tenant downgrade passes straight through to the structures built on it.",
    chart1Title: "Leverage by Financing Route (%)",
    chart2Title: "Hyperscaler Bond Issuance ($bn)",
    chart1Note: "Insert chart\nBeacon Point, Saline, Aligned ABS, xAI chip vehicle",
    chart2Note: "Insert chart\n2025 actual, 2026 to date, 2026E, 2027E",
    sources: "Sources: Meta, Moody's, S&P Global Ratings, KBRA, Bloomberg, PitchBook, Apollo, Hut 8, Aligned, Related Digital",
  },

  page2: {
    pageNum: "6",
    title: "Pricing AI Credit",
    h1: "Market Activity",
    p1:
      "Investors are still funding the buildout, but they are charging more for it. Apollo estimates that order cover on hyperscaler bonds fell from about five times in February to below two times by July. Meta's El Paso joint venture priced $12.5bn of A+ rated amortizing notes on July 27 at 7.534%, or T+287.5, with orders peaking near $20bn, about 1.6 times the deal, while the average bond sale this year drew close to four times. That was 62.5bps wider than Hyperion's T+225 in October 2025 on the same tenant, rating, and template. On September 23 a Blue Owl affiliated campus in Virginia leased to CoreWeave sold $1.1bn of BB- rated five year notes at 98.5 to yield 9.25%, about 270bps above similarly rated debt. GPU loans show the same split. CoreWeave borrowed at SOFR plus 225 in March on an A3 rated facility backed by its Meta contract, then paid SOFR plus 550 in August on a Ba2 facility, 100bps wider than its May loan at the same ratings.",
    table: {
      title: "AI Infrastructure Deal Pricing and Leverage",
      head: ["Deal", "Priced", "Size", "Rating", "Pricing", "Final", "Leverage or collateral"],
      rows: [
        ["Hut 8 Beacon Point bonds", "Jun 2026", "$4.25bn", "Baa2", "6.129%, T+165", "2042", "95% LTC"],
        ["Oracle Saline SPV bonds", "Apr 2026", "~$14bn", "Not disclosed", "7.5% at 98.75", "2045", "~85% LTC (derived)"],
        ["Meta Hyperion SPV bonds", "Oct 2025", "$27.3bn", "A+", "6.581%, T+225", "2049", "Lease, ~$28bn RVG"],
        ["Meta El Paso SPV bonds", "Jul 2026", "$12.5bn", "A+ / AA-", "7.534%, T+287.5", "2048", "Meta lease and RVG"],
        ["Digital Drive (CoreWeave)", "Sep 2026", "$1.1bn", "BB-", "9.25% yield", "5 yr", "CoreWeave lease"],
        ["Aligned data center ABS", "Jul 2026", "$1.18bn", "A- senior", "Not disclosed", "5 yr ARD", "70% LTV cap"],
        ["BX 2026 VLT10 CMBS", "Jun 2026", "$1.26bn", "KBRA rated", "Not disclosed", "10 yr ARD", "108% KBRA LTV"],
        ["CoreWeave DDTL 4.0", "Mar 2026", "$8.5bn", "A3", "SOFR+225", "2032", "GPUs, Meta contract"],
        ["CoreWeave DDTL 5.5", "Aug 2026", "$2.6bn", "Ba2 / BB+", "SOFR+550", "2031", "GPUs, ~3 yr contracts"],
        ["Lambda term loan B", "Aug 2026", "$926m", "Baa2", "SOFR+300", "2030", "GPUs, IG offtaker"],
        ["Oracle Jupiter loan", "Late 2025", "~$18bn", "Not disclosed", "Quoted 89 to 91", "n/a", "Oracle lease (BBB-)"],
      ],
      note: "LTC is loan to cost and LTV is loan to value. Ratings are S&P, Moody's, Fitch or KBRA as reported, and El Paso shows S&P then Fitch. Saline LTC is derived from the reported 15% equity.",
    },
    h2: "Spreads Follow the Tenant",
    p2:
      "The table shows that the tenant sets the starting point and tenor and timing set the rest. Beacon Point, with a tenant rated AA- or better and bonds that amortize to 2042, priced at T+165 despite 95% leverage. El Paso, with A+ rated notes backed by Meta's lease and a 2048 final maturity, needed T+287.5 nine months after Hyperion, by which time order books for hyperscaler debt had thinned. Below investment grade the step is larger, and CoreWeave linked paper now clears near 9.25% even on a secured basis. Hyperscaler corporate bonds are repricing as well. Amazon paid a new issue concession of 10 to 12bps on its $25bn July deal against a 2026 average near 4bps, and Meta's $25bn April deal drew a $96bn book against $125bn for its October 2025 deal. Oracle's $25bn February deal drew a $129bn book, yet its 10 year priced near T+145 while the US BBB index traded around T+95. The divergence is between steady demand for the largest tickets and a rising price for every notch of tenant risk.",
    sources: "Sources: Bloomberg, PitchBook, IFR, Reuters, S&P Global Ratings, Moody's, Fitch, KBRA, CoreWeave, Lambda, Hut 8",
  },

  page3: {
    pageNum: "7",
    title: "AI Credit Under Strain",
    h1: "Oracle and Project Jupiter",
    p1:
      "Oracle is the clearest test of what happens when the tenant weakens. S&P cut Oracle to BBB- on July 9, citing OpenAI as about half of its contracted backlog and a projected fiscal 2027 free operating cash flow deficit of about $42bn, and said another downgrade is possible if leverage stays above 4.5x. Oracle's September 10 results showed remaining performance obligations of $664bn, quarterly capex of $28.5bn, and fiscal 2027 capex guidance of $90bn to $95bn. The strain has reached project debt. The $18bn construction loan on Project Jupiter, a 2.45 gigawatt New Mexico campus developed by a Blue Owl unit and leased to Oracle, was quoted at 89 to 91 cents in September, with syndicate banks holding more of it than planned. On September 24 Oracle sent the developer a force majeure notice after a gas pipeline slipped to February 2027, which could let it defer rent for up to three years. Oracle says the project is on schedule.",
    chart1Title: "Project Bond Yields by Tenant (%)",
    chart2Title: "GPU Loan Spreads (bps over SOFR)",
    chart1Note: "Insert chart\nBeacon Point, Hyperion, El Paso, Digital Drive",
    chart2Note: "Insert chart\nCoreWeave DDTL 4.0, Lambda, DDTL 3.0, 5.0, 5.5",
    h2: "Risk Considerations",
    p2:
      "Three risks sit beneath the pricing. Duration is the first, since four year initial leases support bonds amortizing over more than 20 years, and CoreWeave's August facility runs about five years against customer contracts averaging about three. Construction is the second, because rent does not begin until a campus is finished, leaving lenders exposed to power, permitting, and local opposition. Concentration is the third, with OpenAI behind about half of Oracle's backlog and an OpenAI contract backing one of CoreWeave's GPU facilities, so one counterparty links bank loans, project bonds, and GPU debt. The key divergence is that structures rated on a strong tenant now carry spreads that price a weaker one.",
    callL: {
      h: "Meta SPVs Reprice",
      p: "Meta's two joint ventures share one template, a four year initial lease, a residual value guarantee covering the first 16 years, and A+ rated amortizing bonds. On Hyperion the guarantee totals about $28bn against $27.3bn of bonds, and rent begins in June 2029. Hyperion priced at 6.581%, or T+225, in October 2025. El Paso priced $12.5bn at 7.534%, or T+287.5, in July, with Fitch one notch higher at AA-. The 62.5bps wider spread on the same tenant shows that investors now price supply, structure, and timing on top of Meta's credit.",
    },
    callR: {
      h: "CoreWeave's Credit Curve",
      p: "CoreWeave's pricing depends on who pays. Its $8.5bn DDTL 4.0, backed by GPUs serving Meta, is rated A3 by Moody's and priced at SOFR plus 225. DDTL 3.0, tied to OpenAI, priced at SOFR plus 400. The $3.1bn DDTL 5.0 in May priced at SOFR plus 450 with Ba2 and BB+ ratings, and the $2.6bn DDTL 5.5 in August priced at SOFR plus 550 at the same ratings. The company itself is rated B+ by S&P. The 325bps gap between its A3 and Ba2 facilities mostly prices counterparty risk, though the 100bps move between May and August shows timing matters too.",
    },
    sources: "Sources: Oracle, S&P Global Ratings, Moody's, Fitch, Financial Times, Bloomberg, Reuters, CoreWeave, PitchBook",
  },
};
