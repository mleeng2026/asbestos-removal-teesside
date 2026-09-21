import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve("out");
const areaSlugs = [
  "asbestos-removal-middlesbrough",
  "asbestos-removal-stockton-on-tees",
  "asbestos-removal-thornaby",
  "asbestos-removal-billingham",
  "asbestos-removal-redcar",
  "asbestos-removal-yarm-ingleby-barwick",
  "asbestos-removal-guisborough-eston",
  "asbestos-removal-hartlepool",
  "asbestos-removal-darlington-county-durham",
];
const serviceSlugs = [
  "asbestos-removal-middlesbrough-teesside",
  "asbestos-surveys-testing-middlesbrough-teesside",
  "asbestos-artex-removal-middlesbrough-teesside",
  "asbestos-roof-removal-middlesbrough-teesside",
  "asbestos-aib-removal-middlesbrough-teesside",
  "asbestos-floor-removal-middlesbrough-teesside",
  "asbestos-pipe-insulation-removal-middlesbrough-teesside",
  "commercial-asbestos-removal-middlesbrough-teesside",
];

function htmlFor(slug) {
  return fs.readFileSync(path.join(outDir, slug, "index.html"), "utf8");
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, " and ")
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function mainText(html) {
  const match = html.match(/<main[\s\S]*?<\/main>/i);
  const main = match ? match[0] : html;
  const editorial = main
    .replace(/<aside class="call-band"[\s\S]*?<\/aside>/gi, " ")
    .replace(/<section class="section related-section"[\s\S]*?<\/section>/gi, " ")
    .replace(/<form class="quote-form"[\s\S]*?<\/form>/gi, " ");
  return stripTags(editorial);
}

function words(text) {
  return text.toLowerCase().match(/[a-z0-9]+(?:['’-][a-z0-9]+)*/g) ?? [];
}

function grams(tokens, size = 5) {
  const result = new Set();
  for (let index = 0; index <= tokens.length - size; index += 1) {
    result.add(tokens.slice(index, index + size).join(" "));
  }
  return result;
}

function overlap(left, right) {
  let shared = 0;
  for (const gram of left) if (right.has(gram)) shared += 1;
  return shared / Math.max(1, Math.min(left.size, right.size));
}

function auditGroup(label, slugs) {
  const pages = slugs.map((slug) => {
    const text = mainText(htmlFor(slug));
    const tokens = words(text);
    return { slug, tokens, grams: grams(tokens) };
  });

  console.log(`${label} rendered main-content word counts`);
  for (const page of pages) console.log(`${page.slug}: ${page.tokens.length}`);

  console.log(`\n${label} highest pairwise five-word overlap`);
  const pairs = [];
  for (let left = 0; left < pages.length; left += 1) {
    for (let right = left + 1; right < pages.length; right += 1) {
      pairs.push({
        pages: `${pages[left].slug} <> ${pages[right].slug}`,
        score: overlap(pages[left].grams, pages[right].grams),
      });
    }
  }
  for (const pair of pairs.sort((a, b) => b.score - a.score).slice(0, 12)) {
    console.log(`${(pair.score * 100).toFixed(1)}% ${pair.pages}`);
  }

  const failures = pages.filter((page) => page.tokens.length < 1100);
  if (failures.length) {
    console.error(`\nFAIL: ${failures.length} ${label.toLowerCase()} pages are below 1,100 rendered main-content words.`);
    process.exitCode = 1;
  }
}

auditGroup("Location", areaSlugs);
console.log("\n---\n");
auditGroup("Service", serviceSlugs);
