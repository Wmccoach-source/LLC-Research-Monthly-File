# Style review v2 (round 1 merge)

Mechanical check run on all of content.js including every page2.table cell. Dashes none, colons none outside Sources lines, all table cells under 25 characters, no reference to the March report, no stale cutoff such as through July 7. Every proposal below keeps every number, date, unit, and name unchanged. Chair applies edits.

## Word counts, current

| Field | Words | Budget | Status |
|---|---|---|---|
| page1.p1 | 144 | 155 to 175 | Under |
| page1.p2 | 185 | 150 to 170 | Over |
| page1.p3 | 130 | 100 to 120 | Over |
| page2.p1 | 169 | 145 to 165 | Over |
| page2.p2 | 176 | 145 to 165 | Over |
| page2.table cells | max under 25 chars | under 25 | Pass |
| page3.p1 | 160 | 150 to 170 | Pass |
| page3.p2 | 112 | 100 to 120 | Pass |
| page3.callL.p | 91 | 85 to 105 | Pass |
| page3.callR.p | 101 | 85 to 105 | Pass |

Page 3 and the table need no changes. Page 1 ends on the divergence and page 2 ends on the divergence; page 3 ends on the key divergence in Risk Considerations, then the callouts.

## Proposed replacements

### page1.p1 Overview

Status: 144 words, budget 155 to 175.

Current:

AI infrastructure financing is the debt raised to build data centers and the computing equipment inside them, and in 2026 it has become one of the largest sources of new supply in credit. Lenders reach the same assets through five routes. Hyperscalers borrow directly in the investment grade market. Joint ventures issue project bonds secured by a lease to a hyperscaler, as with Meta's $27.3bn Hyperion financing, where Blue Owl owns 80% of the vehicle and the A+ rated bonds amortize to 2049. Developers take construction loans against leases to Oracle and OpenAI. Neoclouds such as CoreWeave borrow against GPUs and the customer contracts that pay for them. Stabilized campuses are refinanced through data center ABS and CMBS. In every route the lender is underwriting the tenant, and agencies start from the tenant's rating and subtract notches for construction, lease length, and operator risk.

Proposed (157 words):

AI infrastructure financing is the debt raised to build data centers and the computing equipment inside them, and in 2026 it has become one of the largest sources of new supply in credit. Lenders reach the same assets through five routes. Hyperscalers borrow directly in the investment grade market on their corporate ratings. Joint ventures issue project bonds secured by a lease to a hyperscaler, as with Meta's $27.3bn Hyperion financing, where Blue Owl owns 80% of the vehicle and the A+ rated bonds amortize to 2049. Developers take construction loans against leases to Oracle and OpenAI, before any rent is paid. Neoclouds such as CoreWeave borrow against GPUs and the customer contracts that pay for them. Stabilized campuses are refinanced through data center ABS and CMBS once rent is flowing. In every route the lender is underwriting the tenant, and agencies start from the tenant's rating and subtract notches for construction, lease length, and operator risk.

Reason: Adds only connective framing, no new numbers or claims, to reach budget.

### page1.p2 How Lenders Size the Debt

Status: 185 words, budget 150 to 170.

Current:

Lease backed debt is sized so that contracted rent covers debt service with a thin cushion and the bonds amortize before the lease and its renewals run out, so leverage rises with the strength of the tenant. Hut 8's $4.25bn Beacon Point bonds, backed by a tenant rated AA- or better, financed 95% of project cost at T+165, which Hut 8 calls the highest loan to cost for an HPC data center bond. Oracle's Saline Township campus in Michigan raised about $14bn of bonds against $16.3bn of cost, leaving roughly 15% equity. Stabilized campuses are sized on appraised value, and Aligned's ABS master trust, which added $1.18bn in July, caps its senior notes at 70% of appraised value. GPU lenders lend less because the collateral depreciates, and Apollo's $3.5bn for the vehicle that leases chips to xAI equals about 65% of a $5.4bn purchase. Agencies stress all of these. KBRA cut the cash flow on the single tenant Ohio campus behind BX 2026 VLT10 to 18.9% below the issuer's figure and its value to 27.2% below appraisal, lifting leverage on the $1.26bn loan to 108.4%.

Proposed (170 words):

Lease backed debt is sized so contracted rent covers debt service with a thin cushion and bonds amortize before the lease and its renewals run out, so leverage rises with tenant strength. Hut 8's $4.25bn Beacon Point bonds, backed by a tenant rated AA- or better, financed 95% of project cost at T+165, which Hut 8 calls the highest loan to cost for an HPC data center bond. Oracle's Saline Township campus in Michigan raised about $14bn of bonds against $16.3bn of cost, or roughly 15% equity. Stabilized campuses are sized on value, and Aligned's ABS master trust, which added $1.18bn in July, caps senior notes at 70% of appraised value. GPU lenders lend less against depreciating collateral, and Apollo's $3.5bn for the xAI chip leasing vehicle equals about 65% of a $5.4bn purchase. KBRA cut the cash flow on the single tenant Ohio campus behind BX 2026 VLT10 to 18.9% below the issuer's figure and its value to 27.2% below appraisal, lifting leverage on the $1.26bn loan to 108.4%.

Reason: Trims 15 words by tightening phrasing and dropping the generic sentence Agencies stress all of these. All figures unchanged.

### page1.p3 Why It Matters for Credit

Status: 130 words, budget 100 to 120.

Current:

The debt is only as long as the lease behind it, and hyperscaler leases are short. Hyperion and El Paso both carry four year initial terms against bonds amortizing to 2049 and 2048, and Meta's residual value guarantee on Hyperion, about $28bn and covering the first 16 years, is what bridges the gap. Moody's counted $662bn of hyperscaler data center leases not yet commenced at the end of 2025, held off balance sheet and equal to 113% of their adjusted debt, and says it will treat part of them as debt, while S&P accepted Hyperion as off balance sheet for Meta. The divergence is that one obligation is a lease to one agency and debt to another, and any tenant downgrade passes straight through to the structures built on it.

Proposed (120 words):

The debt is only as long as the lease behind it, and hyperscaler leases are short. Hyperion and El Paso both carry four year initial terms against bonds amortizing to 2049 and 2048, and Meta's residual value guarantee on Hyperion, about $28bn and covering the first 16 years, bridges the gap. Moody's counted $662bn of hyperscaler data center leases not yet commenced at the end of 2025, held off balance sheet and equal to 113% of their adjusted debt, and says it will treat part as debt, while S&P accepted Hyperion as off balance sheet for Meta. The divergence is that one obligation is a lease to one agency and debt to another, so a tenant downgrade passes straight through.

Reason: Trims 10 words; closing divergence takeaway kept.

### page2.p1 Market Activity

Status: 169 words, budget 145 to 165.

Current:

Investors are still funding the buildout, but they are charging more for it. Apollo estimates that order cover on hyperscaler bonds fell from about five times in February to below two times by July. Meta's El Paso joint venture priced $12.5bn of A+ rated amortizing notes on July 27 at 7.534%, or T+287.5, with orders peaking near $20bn, about 1.6 times the deal, while the average bond sale this year drew close to four times. That was 62.5bps wider than Hyperion's T+225 in October 2025 on the same tenant, rating, and template. On September 23 a Blue Owl affiliated campus in Virginia leased to CoreWeave sold $1.1bn of BB- rated five year notes at 98.5 to yield 9.25%, about 270bps above similarly rated debt. GPU loans show the same split. CoreWeave borrowed at SOFR plus 225 in March on an A3 rated facility backed by its Meta contract, then paid SOFR plus 550 in August on a Ba2 facility, 100bps wider than its May loan at the same ratings.

Proposed (165 words):

Investors keep funding the buildout but charging more for it. Apollo estimates order cover on hyperscaler bonds fell from about five times in February to below two times by July. Meta's El Paso joint venture priced $12.5bn of A+ rated amortizing notes on July 27 at 7.534%, or T+287.5, with orders peaking near $20bn, about 1.6 times the deal, while the average bond sale this year drew close to four times. That was 62.5bps wider than Hyperion's T+225 in October 2025 on the same tenant, rating, and template. On September 23 a Blue Owl affiliated campus in Virginia leased to CoreWeave sold $1.1bn of BB- rated five year notes at 98.5 to yield 9.25%, about 270bps above similarly rated debt. GPU loans split the same way. CoreWeave borrowed at SOFR plus 225 in March on an A3 rated facility backed by its Meta contract, then paid SOFR plus 550 in August on a Ba2 facility, 100bps wider than its May loan at the same ratings.

Reason: Trims 4 words. The word March here is the CoreWeave loan month, not a reference to the March report, so it stays.

### page2.p2 Spreads Follow the Tenant

Status: 176 words, budget 145 to 165.

Current:

The table shows that the tenant sets the starting point and tenor and timing set the rest. Beacon Point, with a tenant rated AA- or better and bonds that amortize to 2042, priced at T+165 despite 95% leverage. El Paso, with A+ rated notes backed by Meta's lease and a 2048 final maturity, needed T+287.5 nine months after Hyperion, by which time order books for hyperscaler debt had thinned. Below investment grade the step is larger, and CoreWeave linked paper now clears near 9.25% even on a secured basis. Hyperscaler corporate bonds are repricing as well. Amazon paid a new issue concession of 10 to 12bps on its $25bn July deal against a 2026 average near 4bps, and Meta's $25bn April deal drew a $96bn book against $125bn for its October 2025 deal. Oracle's $25bn February deal drew a $129bn book, yet its 10 year priced near T+145 while the US BBB index traded around T+95. The divergence is between steady demand for the largest tickets and a rising price for every notch of tenant risk.

Proposed (164 words):

The tenant sets the starting point, and tenor and timing set the rest. Beacon Point, with a tenant rated AA- or better and bonds amortizing to 2042, priced at T+165 despite 95% leverage. El Paso, with A+ rated notes backed by Meta's lease and a 2048 final maturity, needed T+287.5 nine months after Hyperion, as order books thinned. Below investment grade the step is larger, and CoreWeave linked paper clears near 9.25% even on a secured basis. Hyperscaler corporate bonds are repricing as well. Amazon paid a new issue concession of 10 to 12bps on its $25bn July deal against a 2026 average near 4bps, and Meta's $25bn April deal drew a $96bn book against $125bn for its October 2025 deal. Oracle's $25bn February deal drew a $129bn book, yet its 10 year priced near T+145 while the US BBB index traded around T+95. The divergence is between steady demand for the largest tickets and a rising price for every notch of tenant risk.

Reason: Trims 12 words; closing divergence takeaway kept.

## Items for the fact checker (not changed)

- page1.p2 and table: Saline is described as about 15% equity and about 85% LTC, while $14bn over $16.3bn is about 86%. Arithmetic is consistent within rounding but confirm derived label.
- page1.p2: Beacon Point is described as backed by a tenant rated AA- or better while the table rating cell shows Baa2. Confirm these are different instruments (tenant versus bond rating).
- page1.p2 and table: Apollo 3.5bn over 5.4bn is about 65%, consistent.
- page2 and page3: 62.5bps (287.5 less 225), 100bps (550 less 450), and 325bps (550 less 225) all reconcile.
- page2.p2: nine months after Hyperion (October 2025 to July 2026) reconciles.

## Author rules

- March report reference: none found. page2.p1 uses March only as the CoreWeave DDTL 4.0 loan month.
- Stale data cutoffs: none found. The phrase 2026 to date appears only in chart2Note on page 1, which is a chart label and not a cutoff date; chair may keep it.
