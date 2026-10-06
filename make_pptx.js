// Builds outputs/LLC_AI_Infrastructure_Case_Study.pptx
// Page size matches the LLC report PDFs (7.5 x 10.83 in, built in PowerPoint).
// Charts render natively when data/chart_data.json marks them verified, otherwise a dashed placeholder is drawn.
const fs = require("fs");
const path = require("path");
const pptxgen = require("pptxgenjs");
const c = require("./content.js");
const { charts } = require("./charts.js");

const ROOT = __dirname;
const OUT = path.join(ROOT, "outputs", "LLC_AI_Infrastructure_Case_Study.pptx");
const CHART_DATA = (() => {
  try { return JSON.parse(fs.readFileSync(path.join(ROOT, "data", "chart_data.json"), "utf8")); } catch (e) { return {}; }
})();

const FONT = "Times New Roman";
const C = {
  maroon: "5A2020", dark: "4F1D1B", mid: "9B3739", pink: "DEB9B7", cream: "F4F1EC",
  black: "000000", white: "FFFFFF", rose: "CD6661", blush: "E0BCBC",
};
const BAR_COLORS = ["9A3839", "4F1D1B", "CD6661", "E0BCBC", "7A2A28"];

const pres = new pptxgen();
pres.defineLayout({ name: "LLC_PORTRAIT", width: 7.5, height: 10.833 });
pres.layout = "LLC_PORTRAIT";
pres.theme = { headFontFace: FONT, bodyFontFace: FONT };
pres.title = "LLC Case Study, AI Infrastructure Financing";
pres.author = "Leveraged Lion Capital";

const ML = 0.61, CW = 6.28;

pres.defineSlideMaster({ title: "LLC_COVER", background: { color: "FFFFFF" }, objects: [] });
pres.defineSlideMaster({
  title: "LLC_CASE_PAGE",
  background: { color: C.cream },
  objects: [
    { text: { text: "L | L | C", options: { x: 4.45, y: 0.2, w: 2.3, h: 0.45, align: "right", valign: "middle", fontFace: FONT, fontSize: 26, color: C.maroon, margin: 0 } } },
    { line: { x: 0.5, y: 10.22, w: 6.5, h: 0, line: { color: C.maroon, width: 0.75 } } },
    { image: { path: path.join(ROOT, "assets", "footer_bar.png"), x: 0, y: 10.6, w: 7.5, h: 0.233 } },
    { placeholder: { options: { name: "title", type: "title", x: ML, y: 0.62, w: 5.8, h: 0.5, fontFace: FONT, fontSize: 26, bold: true, color: C.black, margin: 0, valign: "middle", align: "left" }, text: "" } },
  ],
});

function pageNumberBox(slide, n) {
  slide.addShape(pres.shapes.RECTANGLE, { x: 6.96, y: 0.27, w: 0.36, h: 0.27, fill: { color: C.maroon }, line: { color: C.maroon, width: 0 }, objectName: "Page number box" });
  slide.addText(n, { x: 6.96, y: 0.27, w: 0.36, h: 0.27, align: "center", valign: "middle", fontFace: FONT, fontSize: 11, bold: true, color: C.white, margin: 0, isTextBox: true, objectName: "Page number" });
}
function heading(slide, text, x, y, w) {
  slide.addText(text, { x, y, w, h: 0.38, fontFace: FONT, fontSize: 20, color: C.black, margin: 0, valign: "middle", isTextBox: true, objectName: "Heading " + text });
}
function body(slide, text, x, y, w, h, name) {
  slide.addText(text, { x, y, w, h, fontFace: FONT, fontSize: 10.5, color: C.black, align: "justify", valign: "top", margin: 0, lineSpacing: 12.5, isTextBox: true, objectName: name });
}
function sources(slide, text) {
  slide.addText(text, { x: 0.5, y: 10.26, w: 6.5, h: 0.22, fontFace: FONT, fontSize: 7.5, color: C.black, margin: 0, valign: "top", isTextBox: true, objectName: "Sources" });
}

// Chart title above, then either a native chart (verified data) or a dashed placeholder.
function chartSlot(slide, id, title, note, x, y, w, h) {
  slide.addText(title, { x, y, w, h: 0.28, fontFace: FONT, fontSize: 11, bold: true, align: "center", color: C.black, margin: 0, valign: "middle", isTextBox: true, objectName: "Chart title " + id });
  const d = CHART_DATA[id];
  const top = y + 0.32, ch = h - 0.32;
  if (d && d.verified === true) {
    const horizontal = d.style === "barH";
    slide.addChart(pres.charts.BAR, [{ name: d.title, labels: d.labels, values: d.values }], {
      x, y: top, w, h: d.footnote ? ch - 0.3 : ch,
      barDir: horizontal ? "bar" : "col",
      chartColors: BAR_COLORS.slice(0, d.values.length),
      showLegend: false, showTitle: false,
      showValue: true, dataLabelFormatCode: d.format || "0", dataLabelPosition: "outEnd",
      dataLabelFontFace: FONT, dataLabelFontSize: 8, dataLabelColor: C.black,
      catAxisLabelFontFace: FONT, catAxisLabelFontSize: 8, catAxisLabelColor: C.black,
      valAxisLabelFontFace: FONT, valAxisLabelFontSize: 8, valAxisLabelColor: C.black,
      catAxisOrientation: horizontal ? "maxMin" : "minMax",
      valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" },
      barGapWidthPct: 60,
    });
    if (d.footnote) {
      slide.addText(d.footnote, { x, y: y + h - 0.28, w, h: 0.26, fontFace: FONT, fontSize: 7, italic: true, color: C.black, margin: 0, valign: "top", isTextBox: true, objectName: "Chart footnote " + id });
    }
    return;
  }
  slide.addShape(pres.shapes.RECTANGLE, { x, y: top, w, h: ch, fill: { color: C.white, transparency: 35 }, line: { color: C.mid, width: 1, dashType: "dash" }, objectName: "Chart placeholder " + id });
  slide.addText(note.split("\n").map((t, i) => ({ text: t, options: { breakLine: i === 0, italic: i !== 0, bold: i === 0, fontSize: i === 0 ? 11 : 9, color: C.mid } })), { x: x + 0.15, y: top, w: w - 0.3, h: ch, align: "center", valign: "middle", fontFace: FONT, margin: 0, isTextBox: true, objectName: "Chart placeholder text " + id });
}

function notesFor(ids) {
  return charts.filter((k) => ids.includes(k.id)).map((k) =>
    "CHART " + k.id + " (" + k.slot + ")\n" + k.title + "\n" + k.type + "\n" +
    k.rows.map((r) => "  " + r.join("  |  ")).join("\n") + "\n" + k.note + "\n" +
    k.links.map((l) => "  " + l[0] + " " + l[1]).join("\n")).join("\n\n");
}

// ---------- Cover ----------
{
  const s = pres.addSlide({ masterName: "LLC_COVER" });
  s.addImage({ path: path.join(ROOT, "assets", "cover_mar-000.jpg"), x: 0, y: 0, w: 7.5, h: 10.833, objectName: "Cover photo", altText: "Glass office towers seen from below" });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 2.65, w: 4.42, h: 2.15, fill: { color: C.dark, transparency: 6 }, line: { color: C.dark, width: 1 }, objectName: "Cover box" });
  s.addText("L | L | C", { x: 0, y: 2.78, w: 4.42, h: 0.8, align: "center", valign: "middle", fontFace: FONT, fontSize: 44, color: C.white, margin: 0, isTextBox: true, objectName: "Cover logo" });
  s.addText("Leveraged Lion Capital", { x: 0, y: 3.55, w: 4.42, h: 0.35, align: "center", valign: "middle", fontFace: FONT, fontSize: 17, color: C.white, margin: 0, isTextBox: true, objectName: "Cover firm" });
  s.addShape(pres.shapes.LINE, { x: 0.49, y: 3.97, w: 3.44, h: 0, line: { color: C.white, width: 0.75 }, objectName: "Cover rule" });
  s.addText([{ text: c.coverTitleLines[0], options: { breakLine: true } }, { text: c.coverTitleLines[1] }], { x: 0, y: 4.05, w: 4.42, h: 0.7, align: "center", valign: "middle", fontFace: FONT, fontSize: 17, color: C.white, margin: 0, isTextBox: true, objectName: "Cover title" });
  s.addNotes("Cover. The photo is the glass towers image from the March BDC cover, used as a stand in. Swap in a fresh photo before publishing. Keep the 7.5 x 10.83 inch frame and the maroon box position so it lines up with the other covers. The cover is page 4 in the full report.");
}

// ---------- Page 5 ----------
{
  const p = c.page1;
  const s = pres.addSlide({ masterName: "LLC_CASE_PAGE" });
  s.addText(p.title, { placeholder: "title" });
  pageNumberBox(s, p.pageNum);
  heading(s, p.h1, ML, 1.1, CW);
  body(s, p.p1, ML, 1.52, CW, 1.72, "Overview body");
  heading(s, p.h2, ML, 3.3, CW);
  body(s, p.p2, ML, 3.72, CW, 1.85, "Credit markets body");
  heading(s, p.h3, ML, 5.53, CW);
  body(s, p.p3, ML, 5.95, CW, 1.2, "Why it matters body");
  const cw = 3.06, gap = CW - cw * 2;
  chartSlot(s, "C", p.chart1Title, p.chart1Note, ML, 7.45, cw, 2.5);
  chartSlot(s, "D", p.chart2Title, p.chart2Note, ML + cw + gap, 7.45, cw, 2.5);
  sources(s, p.sources);
  s.addNotes("PAGE 5 CHART IDEAS AND LINKS\nSlots hold charts C and D. Data lives in data/chart_data.json. Set verified to true after the fact checker confirms the numbers and the chart renders natively.\n\n" + notesFor(["C", "D"]) +
    "\n\nLAYOUT NOTE\nBody is Times New Roman 10.5 pt justified, section headings 20 pt, title 26 pt bold, matching the August and March case studies.");
}

// ---------- Page 6 ----------
{
  const p = c.page2;
  const s = pres.addSlide({ masterName: "LLC_CASE_PAGE" });
  s.addText(p.title, { placeholder: "title" });
  pageNumberBox(s, p.pageNum);
  heading(s, p.h1, ML, 1.1, CW);
  body(s, p.p1, ML, 1.52, CW, 1.3, "Market activity body");
  const cw = 3.06, gap = CW - cw * 2;
  chartSlot(s, "A", p.chart1Title, p.chart1Note, ML, 2.92, cw, 2.45);
  chartSlot(s, "B", p.chart2Title, p.chart2Note, ML + cw + gap, 2.92, cw, 2.45);
  heading(s, p.h2, ML, 5.55, CW);
  body(s, p.p2, ML, 5.97, CW, 1.2, "Risk body");
  const colW = 3.0, colGap = CW - colW * 2;
  heading(s, p.callL.h, ML, 7.28, colW);
  heading(s, p.callR.h, ML + colW + colGap, 7.28, colW);
  body(s, p.callL.p, ML, 7.73, colW, 2.42, "Callout left body");
  body(s, p.callR.p, ML + colW + colGap, 7.73, colW, 2.42, "Callout right body");
  sources(s, p.sources);
  s.addNotes("PAGE 6 CHART IDEAS AND LINKS\nSlots hold charts A and B. E, F and G are optional swaps.\n\n" + notesFor(["A", "B", "E", "F", "G"]));
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
pres.writeFile({ fileName: OUT }).then(() => console.log("wrote " + OUT));
