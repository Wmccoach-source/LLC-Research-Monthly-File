// Mechanical style check for report text in content.js.
// Flags dashes, colons, and prints word counts per field. Exit code 1 if any violation.
const c = require("../content.js");
const bad = [];
const counts = [];
function walk(o, p) {
  if (typeof o === "string") {
    const t = o.replace(/^Sources:/, "Sources").replace(/\nInsert chart/, " Insert chart");
    if (/[:\u2013\u2014]|--| - /.test(t)) bad.push([p, o.slice(0, 70)]);
    if (o.split(/\s+/).length > 30) counts.push([p, o.split(/\s+/).length]);
    return;
  }
  if (Array.isArray(o)) o.forEach((v, i) => walk(v, p + "[" + i + "]"));
  else if (o && typeof o === "object") for (const k in o) walk(o[k], p + "." + k);
}
walk(c, "content");
console.log("Word counts");
counts.forEach(([p, n]) => console.log("  " + p + ": " + n));
if (bad.length) { console.log("\nViolations"); bad.forEach(([p, t]) => console.log("  " + p + " -> " + t)); process.exit(1); }
console.log("\nNo dashes or colons found.");
