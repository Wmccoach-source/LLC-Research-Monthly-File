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
  const out = [aH1("Chart Ideas and Links"), aBody("Chart ideas with the data points found so far and where to pull them. Charts D and B fill the two placeholders on page 5, and C and A fill the two on page 7. E and F are optional swaps. In the PowerPoint, native charts draw automatically once a chart is marked verified in data/chart_data.json. In this Word file the charts are placeholders to paste into.")];
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
  ["Source access", "Every research and fact check pass ran on search result text. The proxy blocked opening pages, so no figure has been read at its source. Click through each chart and table value before publishing.", "Links in charts.js and reviews/research-*.md"],
  ["Hyperion secondary price", "The low 90s price and about T+230 spread in late September come from aggregators. Another aggregator gives a 94.4 low in July or August.", "Bloomberg or TRACE"],
  ["Hyperion launch spread", "T+225 per IFR. One aggregator says 185bps.", "IFR, Bloomberg"],
  ["Saline", "About $14bn of bonds and 15% equity are from the Related and Blackstone releases. The 7.5% is price guidance, not a final coupon.", "Offering memorandum or Bloomberg"],
  ["Abilene and xAI leverage", "Both ratios are derived from reported debt and cost or purchase price, not stated by the lenders.", "Deal documents"],
  ["CoreWeave DDTL 4.0 pricing", "SOFR plus 225 is in one research file as a company release and in another as aggregator only.", "CoreWeave release and 10-Q"],
  ["Oracle long bond yield", "Above 8% for the first time, from Bloomberg via Yahoo. Pin the date and bond.", "Bloomberg"],
  ["Issuance to date", "About $223bn for four issuers runs through late August. Alphabet priced a jumbo deal in early August that may or may not be inside that figure. Refresh before publishing.", "LSEG"],
  ["Amazon and Meta deal terms", "Amazon's July NIC of 10 to 12bps and Meta's April 2066 at T+147 come from Bloomberg syndications and Fortune.", "Bloomberg"],
  ["Page numbers and cover", "The cover is assumed to be page 4 and the case study pages 5 to 7. The cover photo is a stand in.", "Final report file"],
];

// Appendix C, extra facts not on the page
const extras = [
  ["Deal detail", [
    "El Paso notes are amortizing, due November 30, 2048, sold by Sopaipilla Investor LLC. BlackRock holds 80% of the joint venture and Meta 20% (PitchBook).",
    "Meta's El Paso residual value guarantee reportedly has an aggregate threshold of about $13bn that steps down over time (aggregator).",
    "Saline bonds have a 19.5 year maturity, 14 year weighted average life, six years of interest only, then 13 years of amortization, with Pimco anchoring about $10bn (Bloomberg).",
    "CloudHQ's $1.4bn data center ABS earned Fitch's first AAA in the sector, yet Fitch's stressed view showed 0.71x DSCR and 125.6% LTV (trade press).",
    "Vantage's UK ABS class A-2 carries a 53.6% LTV and a 6.172% coupon (Scope and S&P).",
    "Data center ABS class A deals typically trap cash below 1.45x DSCR and begin amortizing below 1.25x (trade press on CloudHQ).",
  ]],
  ["GPU lending", [
    "CoreWeave repays its DDTLs from the greater of contracted cash flow or the depreciated GPU cost (S-1).",
    "CoreWeave depreciates equipment over six years. Amazon cut some servers to five years and Meta moved to 5.5 (company filings via research notes).",
    "CoreWeave priced $3.7bn of 2.875% convertible notes due 2033 on September 18 (SEC exhibit).",
    "No 2026 neocloud default was found in research.",
  ]],
  ["Oracle and Jupiter", [
    "Moody's rates Oracle Baa2 with a negative outlook and Fitch rates it BBB (press).",
    "A downgrade to high yield would push about $120bn of Oracle bonds out of investment grade indexes (Bloomberg via Yahoo).",
    "On September 17 the New Mexico Supreme Court lifted stays on the Jupiter air permit hearing and water use (press).",
  ]],
  ["Market wide", [
    "Bank of England's Financial Policy Committee flagged rising risk of AI linked debt stress on September 30.",
    "Hyperscalers, data center SPVs and neoclouds raised about $346bn across IG, HY and equity so far in 2026, against $172bn in 2025 (The Real Deal, likely citing Bloomberg).",
    "Hyperscaler data center ABS traded about 150bps over five year Treasuries in September, 16bps wider than a year earlier (Barclays via The Real Deal).",
  ]],
];

// Appendix D, continuity
const continuity = [
  "August ABS case study. The esoteric ABS page covers data center securitization. This case study's ABS and CMBS figures (Aligned, BX 2026 VLT10) are deal level and do not repeat the August totals.",
  "Add the September recap to reference/ so the continuity editor can check rates and spreads against it.",
];

// ---------- document ----------
const pageProps = (extra = {}) => ({ page: { size: { width: PAGE_W, height: PAGE_H }, margin: { top: 1040, bottom: 1250, left: MARG_LR, right: MARG_LR, header: 280, footer: 0 }, ...extra } });

const p1 = c.page1, p2 = c.page2, p3 = c.page3;

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
        title(p2.title), h2(p2.h1), body(p2.p1), chartTitle(p2.table.title),
        simpleTable(p2.table.head, p2.table.rows, [2250, 900, 900, 1150, 1450, 700, 1694]),
        new Paragraph({ spacing: { before: 60, after: 60 }, children: [run(p2.table.note, { size: 14, italics: true })] }),
        h2(p2.h2), body(p2.p2),
      ],
    },
    // Page 7
    {
      properties: { ...pageProps() },
      headers: { default: makeHeader() }, footers: { default: makeFooter(p3.sources) },
      children: [
        title(p3.title), h2(p3.h1), body(p3.p1), twoChartPlaceholders(p3, 2600), h2(p3.h2), body(p3.p2), callouts(p3),
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
        aBody("In depth detail that did not fit in the three page layout. Pull from here if you want to lengthen a callout, add a footnote, or prepare for questions. Tags in parentheses show where each fact came from."),
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
