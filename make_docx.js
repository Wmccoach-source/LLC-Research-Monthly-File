const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun, Header, Footer,
  AlignmentType, BorderStyle, WidthType, ShadingType, HeightRule, PageNumber, ExternalHyperlink,
  LevelFormat, VerticalAlign, HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom,
  TextWrappingType, HeadingLevel, TableLayoutType,
} = require("docx");
const c = require("./content.js");
const { charts, L } = require("./charts.js");

const FONT = "Times New Roman";
const MAROON = "5A2020", DARK = "4F1D1B", MID = "9B3739", PINK = "DEB9B7", CREAM = "F4F1EC";
const PAGE_W = 10800, PAGE_H = 15600;
const MARG_LR = 878;                       // 0.61 in
const CONTENT_W = PAGE_W - MARG_LR * 2;    // 9044

const none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none };

// ---------- text helpers ----------
const run = (t, o = {}) => new TextRun({ text: t, font: FONT, size: 21, ...o });
const body = (t, o = {}) => new Paragraph({ alignment: AlignmentType.JUSTIFIED, spacing: { line: 252, after: 120 }, ...o, children: [run(t)] });
const title = (t) => new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 0, after: 40 }, children: [run(t, { bold: true, size: 52 })] });
const h2 = (t, o = {}) => new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 160, after: 60 }, ...o, children: [run(t, { size: 40 })] });
const chartTitle = (t) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 60 }, children: [run(t, { bold: true, size: 22 })] });

function makeHeader() {
  const logoW = 2400, boxW = 520, spacer = CONTENT_W - logoW - boxW;
  const noB = { top: none, bottom: none, left: none, right: none };
  return new Header({
    children: [
      new Table({
        width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: [spacer, logoW, boxW], borders: noBorders, layout: TableLayoutType.FIXED,
        rows: [new TableRow({ children: [
          new TableCell({ width: { size: spacer, type: WidthType.DXA }, borders: noB, children: [new Paragraph({ children: [] })] }),
          new TableCell({ width: { size: logoW, type: WidthType.DXA }, borders: noB, verticalAlign: VerticalAlign.CENTER, margins: { top: 0, bottom: 0, left: 0, right: 120 },
            children: [new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { before: 0, after: 0 }, children: [run("L | L | C", { size: 50, color: MAROON })] })] }),
          new TableCell({ width: { size: boxW, type: WidthType.DXA }, borders: noB, verticalAlign: VerticalAlign.CENTER,
            shading: { type: ShadingType.CLEAR, fill: MAROON, color: "auto" }, margins: { top: 40, bottom: 40, left: 0, right: 0 },
            children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0 }, children: [new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 22, bold: true, color: "FFFFFF" })] })] }),
        ] })],
      }),
    ],
  });
}
function makeFooter(sourcesText) {
  return new Footer({
    children: [
      new Paragraph({
        border: { top: { style: BorderStyle.SINGLE, size: 6, color: MAROON, space: 3 } },
        spacing: { before: 0, after: 60 },
        children: [run(sourcesText, { size: 15 })],
      }),
      new Paragraph({
        indent: { left: -MARG_LR, right: -MARG_LR },
        shading: { type: ShadingType.CLEAR, fill: DARK, color: "auto" },
        spacing: { before: 0, after: 0, line: 340, lineRule: "exact" },
        children: [run(" ", { size: 12 })],
      }),
    ],
  });
}

// ---------- cover ----------
function coverChildren() {
  const img = fs.readFileSync(path.join(__dirname, "assets", "cover_mar-000.jpg"));
  const boxW = 6365;
  const cellP = (t, o = {}, ro = {}) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0 }, ...o, children: [run(t, { color: "FFFFFF", ...ro })] });
  const cellRule = new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 100, after: 100 }, indent: { left: 700, right: 700 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "FFFFFF", space: 1 } }, children: [] });
  return [
    new Paragraph({
      spacing: { before: 0, after: 3700 },
      children: [new ImageRun({
        type: "jpg", data: img, transformation: { width: 720, height: 1040 },
        altText: { title: "Cover photo", description: "Glass office towers seen from below", name: "cover" },
        floating: {
          horizontalPosition: { relative: HorizontalPositionRelativeFrom.PAGE, offset: 0 },
          verticalPosition: { relative: VerticalPositionRelativeFrom.PAGE, offset: 0 },
          behindDocument: true, allowOverlap: true, wrap: { type: TextWrappingType.NONE },
        },
      })],
    }),
    new Table({
      width: { size: boxW, type: WidthType.DXA }, columnWidths: [boxW], borders: noBorders, layout: TableLayoutType.FIXED,
      rows: [new TableRow({ children: [new TableCell({
        width: { size: boxW, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: DARK, color: "auto" },
        borders: { top: none, bottom: none, left: none, right: none },
        margins: { top: 200, bottom: 200, left: 100, right: 100 },
        children: [
          cellP("L | L | C", {}, { size: 88 }),
          cellP("Leveraged Lion Capital", {}, { size: 34 }),
          cellRule,
          cellP(c.coverTitleLines[0], {}, { size: 34 }),
          cellP(c.coverTitleLines[1], {}, { size: 34 }),
        ],
      })] })],
    }),
  ];
}

// ---------- page 2 helpers ----------
function twoChartPlaceholders(p, boxH = 3000) {
  const cw = 4400, gap = CONTENT_W - cw * 2;
  const dash = { style: BorderStyle.DASHED, size: 8, color: MID };
  const noB = { top: none, bottom: none, left: none, right: none };
  const titles = new TableRow({ children: [
    new TableCell({ width: { size: cw, type: WidthType.DXA }, borders: noB, children: [chartTitle(p.chart1Title)] }),
    new TableCell({ width: { size: gap, type: WidthType.DXA }, borders: noB, children: [new Paragraph({ children: [] })] }),
    new TableCell({ width: { size: cw, type: WidthType.DXA }, borders: noB, children: [chartTitle(p.chart2Title)] }),
  ] });
  const mkBox = (note) => new TableCell({
    width: { size: cw, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER,
    borders: { top: dash, bottom: dash, left: dash, right: dash },
    margins: { top: 100, bottom: 100, left: 200, right: 200 },
    children: note.split("\n").map((t, i) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 40 }, children: [run(t, { color: MID, bold: i === 0, italics: i !== 0, size: i === 0 ? 22 : 18 })] })),
  });
  const boxes = new TableRow({ height: { value: boxH, rule: HeightRule.EXACT }, children: [
    mkBox(p.chart1Note),
    new TableCell({ width: { size: gap, type: WidthType.DXA }, borders: noB, children: [new Paragraph({ children: [] })] }),
    mkBox(p.chart2Note),
  ] });
  return new Table({ width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: [cw, gap, cw], borders: noBorders, layout: TableLayoutType.FIXED, rows: [titles, boxes] });
}
function callouts(p) {
  const cw = 4400, gap = CONTENT_W - cw * 2;
  const noB = { top: none, bottom: none, left: none, right: none };
  const cell = (w, d) => new TableCell({ width: { size: w, type: WidthType.DXA }, borders: noB, margins: { top: 0, bottom: 0, left: 0, right: 0 },
    children: [h2(d.h, { spacing: { before: 60, after: 60 } }), body(d.p)] });
  return new Table({ width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: [cw, gap, cw], borders: noBorders, layout: TableLayoutType.FIXED, rows: [new TableRow({ children: [
    cell(cw, p.callL), new TableCell({ width: { size: gap, type: WidthType.DXA }, borders: noB, children: [new Paragraph({ children: [] })] }), cell(cw, p.callR),
  ] })] });
}

// ---------- appendix helpers ----------
const aBody = (t, o = {}) => new Paragraph({ spacing: { line: 252, after: 100 }, ...o, children: [run(t, { size: 21 })] });
const aH1 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 0, after: 80 }, children: [run(t, { bold: true, size: 40, color: MAROON })] });
const aH2 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 220, after: 60 }, children: [run(t, { bold: true, size: 26, color: MAROON })] });
const bullet = (children) => new Paragraph({ numbering: { reference: "bul", level: 0 }, spacing: { before: 0, after: 50 }, children });
const link = (label, url) => new ExternalHyperlink({ link: url, children: [new TextRun({ text: label, font: FONT, size: 20, color: MID, underline: {} })] });

const thin = { style: BorderStyle.SINGLE, size: 4, color: "C9B3B0" };
const tBorders = { top: thin, bottom: thin, left: thin, right: thin };
function simpleTable(headers, rows, widths) {
  const total = widths.reduce((a, b) => a + b, 0);
  const mkCell = (t, w, hdr) => new TableCell({
    width: { size: w, type: WidthType.DXA }, borders: tBorders, margins: { top: 60, bottom: 60, left: 90, right: 90 },
    shading: hdr ? { type: ShadingType.CLEAR, fill: DARK, color: "auto" } : undefined,
    children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [run(t, { size: 18, bold: hdr, color: hdr ? "FFFFFF" : "000000" })] })],
  });
  return new Table({
    width: { size: total, type: WidthType.DXA }, columnWidths: widths, layout: TableLayoutType.FIXED,
    rows: [
      new TableRow({ tableHeader: true, children: headers.map((h, i) => mkCell(h, widths[i], true)) }),
      ...rows.map((r) => new TableRow({ cantSplit: true, children: r.map((t, i) => mkCell(t, widths[i], false)) })),
    ],
  });
}

const APP_W = PAGE_W - 1100 * 2; // appendix margins 0.76in

// Appendix A, charts
function appendixCharts() {
  const out = [aH1("Chart Ideas and Links"), aBody("Seven chart ideas with the data points found so far and where to pull them. Charts C and D fill the two placeholders on page 5, and A and B fill the two on page 6. E, F and G are optional swaps. In the PowerPoint, native charts draw automatically once a chart is marked verified in data/chart_data.json. In this Word file the charts are placeholders to paste into.")];
  for (const k of charts) {
    out.push(aH2("Chart " + k.id + ", " + k.title));
    out.push(aBody(k.slot + ". " + k.type + ".", { spacing: { after: 60 } }));
    out.push(simpleTable(["Data point", "Value", "Source"], k.rows, [APP_W * 0.46, APP_W * 0.30, APP_W * 0.24].map(Math.round)));
    out.push(new Paragraph({ spacing: { before: 80, after: 60 }, children: [run(k.note, { size: 20, italics: true })] }));
    for (const [lab, url] of k.links) out.push(bullet([link(lab, url)]));
  }
  return out;
}

// Appendix B, verification
const verify = [
  ["El Paso pricing", "7.534% yield, about 287.5bps over the 10 year, roughly $17bn of orders, $12.55bn size. These trace to reposts of Bloomberg. Marketed size was $12.3bn, so use the priced figure.", "Bloomberg or the offering documents"],
  ["Hyperion versus El Paso cost", "6.58% and the 5.5% Meta comparison come from a secondary source, and the deals priced at different Treasury levels. The 'higher cost on the same rating' line is safest with spreads.", "Bloomberg deal pages, pull Hyperion spread"],
  ["Oracle rating", "Several outlets report S&P cut Oracle to BBB- on July 9. One aggregator listed BBB with a negative outlook in August. Confirm the current S&P rating and outlook.", "S&P Global Ratings"],
  ["Oracle debt figures", "The $43bn fiscal 2026 raise is on the page. Other figures conflict, including debt above $122bn, $117bn outstanding, and about $260bn of lease obligations.", "Oracle 10 K and 10 Q"],
  ["Hyperscaler issuance scope", "$194bn through July 7 covers four issuers. About $220bn through August covers five. Decide on one cutoff and scope.", "Reuters and LSEG"],
  ["Goldman figures", "$750bn capex, $778bn operating cash flow, debt about one third of capex, $250bn and $400bn issuance estimates. Reported through Reuters.", "Goldman Sachs note"],
  ["IG record and issuer share", "$145.2bn August record and the 2% to 9% issuer share come from an aggregator citing Bloomberg and Morningstar.", "Bloomberg"],
  ["Morgan Stanley $800bn", "Reported through Capacity. Confirm the original note and its scope.", "Morgan Stanley research"],
  ["Project Jupiter", "Loan quotes of 89 to 91 are from the FT on Sept 18 to 19. The detail that Oracle cannot terminate the lease and pays debt costs is one anonymous source in Reuters. Check for later quotes.", "FT, Reuters, Bloomberg"],
  ["CoreWeave site notes", "9.25%, 98.5 cents, plus 270bps versus similarly rated debt, priced about Sept 23. Reported through aggregators of Bloomberg.", "Bloomberg"],
  ["Hyperion lease terms", "Four year initial term and residual value guarantee come from a September 2025 report. Confirm they still describe the structure.", "Bloomberg, S&P presale"],
  ["BIS and Moody's remarks", "Paraphrased from Capacity's summary. Read the primary reports before attributing.", "BIS, Moody's"],
  ["Sources footer", "I listed the original publishers, but several figures reached me through aggregators. Adjust the footer to what you actually pull.", "Your pulls"],
  ["Page numbers and cover", "I assumed the cover is page 4 and the case study pages are 5 and 6, as in March and August. The cover photo is the March BDC image as a stand in.", "Your September file"],
];

// Appendix C, extra facts not on the page
const extras = [
  ["Hyperion", [
    "Meta received a $3bn cash distribution at closing, and Blue Owl funded part of its commitment through debt sold to Pimco and other bond investors (The Asset).",
    "If Meta ends the lease and the campus is worth less than the guaranteed amount, Meta pays the shortfall (Bloomberg via iTiger).",
    "The campus is due online in 2029 and Meta runs construction and operations (The Asset).",
    "BlackRock bought more than $3bn of the Hyperion bonds (Zhitong via Longport).",
    "Meta's $30bn bond in October 2025 was the largest investment grade deal of 2025 and the largest non M&A deal ever, with about $125bn of orders (Bloomberg, Reuters via Silicon Analysts and MarketScreener).",
  ]],
  ["El Paso", [
    "About $14bn of development cost, with Meta contributing about $2.3bn of land and construction assets and BlackRock about $4.9bn of cash (Zhitong, lower quality source).",
    "20 year lease with Meta as sole tenant, and insurance limits of $427m during construction and $450m after operations start, about 3.2% of cost (Zhitong via Webull, lower quality source).",
    "Deal led by JPMorgan and Morgan Stanley, and early talk was above 7%, about 0.4 points over Hyperion (FT via Moneywise).",
    "Orders were about $17bn, which was weaker coverage than typical for the size (Briefs, BigGo).",
  ]],
  ["Oracle", [
    "Oracle ended fiscal 2026 with negative free cash flow and roughly $260bn of data center lease obligations (Reuters via Benzinga).",
    "S&P described a failure path in which OpenAI cannot pay Oracle and Oracle is left holding leases it cannot exit (PPC Land).",
    "Morgan Stanley's Lindsay Tyler said Oracle could end the year with two low BBB ratings, raising fallen angel concern, though she sees high yield as a medium term risk (Benzinga).",
    "Oracle planned to raise another $40bn through debt and equity, including $20bn of stock (TNW).",
    "Oracle has also issued about $18bn of bonds in September 2025 and $18bn or more in February 2026 (MLQ and ECM Source tables).",
  ]],
  ["Project Jupiter", [
    "A source told Reuters Blue Owl earns a 9% yield on its equity during development and expects about 11% levered at completion. By invoking force majeure, Oracle extends the period at the lower development rent (Reuters, Sept 24).",
    "New Mexico's State Land Office denied the Energy Transfer gas pipeline twice, pushing its in service date to Feb 1, 2027 (Bloomberg via AI Weekly).",
    "Oracle and Blue Owl shares each fell about 4% on the notice, and spreads on related AI infrastructure notes briefly blew out before tightening (Axios, AI Weekly).",
  ]],
  ["CoreWeave site", [
    "The Digital Drive campus near Richmond has 76MW of IT capacity under a 15 year, $2.94bn CoreWeave contract, and operations are targeted for 2027 to 2028 (Bloomberg via MT Newswires).",
    "The issuer was DDC 01 Propco LLC, backed by Blue Owl affiliates, Cedarwood Investment Group, and PowerHouse Data Centers (Remio, lower quality source).",
  ]],
  ["Market wide", [
    "S&P estimates the five hyperscalers will spend about $750bn on capex in 2026, equal to 38% of combined revenue (MLQ).",
    "Combined remaining performance obligations of Amazon, Microsoft, Alphabet and Oracle exceed $2tn, nearly triple a year earlier, and secured data center bond issuance is approaching $100bn since Meta's October 2025 deal (Aviva Investors).",
    "UBS strategist Matthew Mish described AI related debt accumulation at roughly $100bn a quarter (Capacity).",
    "Barclays expects $2.46tn of US corporate issuance in 2026 with hyperscaler capex the largest upside risk (Reuters via MarketScreener).",
    "JLL's outlook puts data center investment as high as $3tn over five years (Capacity).",
  ]],
];

// Appendix D, continuity
const continuity = [
  "March recap and BDC case study. March reported that Blue Owl, Apollo and Blackstone halted redemptions in private credit funds. Blue Owl is now the equity sponsor behind Hyperion and Project Jupiter, and BlackRock sponsors El Paso. A single sentence linking the two would tie the issues together if there is room.",
  "March BDC case study. Public BDCs held 20.8% of portfolios in software and another 21% in tech. AI infrastructure financing is the other side of the same AI trade.",
  "August ABS case study. The esoteric ABS section covers data center securitization. Keep numbers consistent, since it cites $61bn of data center ABS outstanding while also showing $3.3bn of S&P rated issuance through July 6. These are different measures, so avoid mixing them.",
  "August recap. High yield spreads sat at 260bps, with BB at 146bps and CCC at 850bps. Oracle at BBB- is one notch from the high yield line, which makes a natural bridge to the fallen angel point.",
  "Rate sanity check. El Paso priced at 7.534%, about 287.5bps over the 10 year, which implies a 10 year near 4.66% in late July. That is consistent with the August recap's note that the 10 year traded through 4.8% by late August.",
  "August recap inconsistency. Page 1 says Brent was above $85 after the August 31 strikes, while page 3 says it fell below $90 and then rose back above $90. Worth reconciling before September goes out.",
];

// ---------- document ----------
const pageProps = (extra = {}) => ({ page: { size: { width: PAGE_W, height: PAGE_H }, margin: { top: 1040, bottom: 1250, left: MARG_LR, right: MARG_LR, header: 280, footer: 0 }, ...extra } });

const p1 = c.page1, p2 = c.page2;

const doc = new Document({
  creator: "Leveraged Lion Capital",
  title: "LLC Case Study, AI Infrastructure Financing",
  background: { color: CREAM },
  styles: {
    default: { document: { run: { font: FONT, size: 21 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { font: FONT, bold: true, size: 52 }, paragraph: { spacing: { before: 0, after: 40 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { font: FONT, size: 40 }, paragraph: { spacing: { before: 160, after: 60 }, outlineLevel: 1 } },
    ],
  },
  numbering: { config: [{ reference: "bul", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 280, hanging: 200 } } } }] }] },
  sections: [
    // Cover
    { properties: { page: { size: { width: PAGE_W, height: PAGE_H }, margin: { top: 0, bottom: 0, left: 0, right: 0, header: 0, footer: 0 } } }, children: coverChildren() },
    // Page 5
    {
      properties: { ...pageProps({ pageNumbers: { start: 5 } }) },
      headers: { default: makeHeader() }, footers: { default: makeFooter(p1.sources) },
      children: [
        title(p1.title), h2(p1.h1), body(p1.p1), h2(p1.h2), body(p1.p2), h2(p1.h3), body(p1.p3), twoChartPlaceholders(p1, 2700),
      ],
    },
    // Page 6
    {
      properties: { ...pageProps() },
      headers: { default: makeHeader() }, footers: { default: makeFooter(p2.sources) },
      children: [
        title(p2.title), h2(p2.h1), body(p2.p1), twoChartPlaceholders(p2), h2(p2.h2), body(p2.p2), callouts(p2),
      ],
    },
    // Appendix
    {
      properties: { page: { size: { width: PAGE_W, height: PAGE_H }, pageNumbers: { start: 1 }, margin: { top: 1100, bottom: 1000, left: 1100, right: 1100, header: 500, footer: 400 } } },
      headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [run("LLC working notes, not for publication", { size: 18, italics: true, color: MID })] })] }) },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [run("Page ", { size: 18 }), new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 18 })] })] }) },
      children: [
        ...appendixCharts(),
        new Paragraph({ pageBreakBefore: true, children: [] }),
        aH1("Verification Checklist"),
        aBody("Check these before the report goes out. Several figures reached me through aggregator reposts of Bloomberg, Reuters and the FT, so the primary source should replace them."),
        simpleTable(["Item", "What to check", "Where"], verify, [APP_W * 0.20, APP_W * 0.55, APP_W * 0.25].map(Math.round)),
        new Paragraph({ pageBreakBefore: true, children: [] }),
        aH1("Additional Facts Not on the Pages"),
        aBody("In depth detail that did not fit in the two page layout. Pull from here if you want to lengthen a callout, add a footnote, or prepare for questions. Tags in parentheses show where each fact came from."),
        ...extras.flatMap(([h, items]) => [aH2(h), ...items.map((t) => bullet([run(t, { size: 20 })]))]),
        aH2("Continuity With Prior Reports"),
        ...continuity.map((t) => bullet([run(t, { size: 20 })])),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buf) => {
  fs.mkdirSync(path.join(__dirname, "outputs"), { recursive: true });
  fs.writeFileSync(path.join(__dirname, "outputs", "LLC_AI_Infrastructure_Case_Study.docx"), buf);
  console.log("written");
});
