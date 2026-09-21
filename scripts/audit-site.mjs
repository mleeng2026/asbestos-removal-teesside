import fs from "node:fs";
import path from "node:path";

const root = path.resolve("out");
const errors = [];
const htmlFiles = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".html")) htmlFiles.push(full);
  }
}

function routeFor(file) {
  const relative = path.relative(root, file).replaceAll(path.sep, "/");
  if (relative === "index.html") return "/";
  return `/${relative.replace(/\/index\.html$/, "").replace(/\.html$/, "")}`;
}

function routeExists(route) {
  const clean = route.split("#")[0].split("?")[0];
  if (clean === "/") return fs.existsSync(path.join(root, "index.html"));
  if (fs.existsSync(path.join(root, clean))) return true;
  return fs.existsSync(path.join(root, clean, "index.html")) || fs.existsSync(path.join(root, `${clean}.html`));
}

walk(root);

for (const file of htmlFiles) {
  const route = routeFor(file);
  if (["/404", "/_not-found"].includes(route)) continue;
  const html = fs.readFileSync(file, "utf8");
  const h1s = html.match(/<h1\b/gi) ?? [];
  if (h1s.length !== 1) errors.push(`${route}: expected one H1, found ${h1s.length}`);
  if (!/<title>[^<]+<\/title>/i.test(html)) errors.push(`${route}: missing title`);
  if (!/<link rel="canonical" href="https:\/\/asbestosremovalteesside\.co\.uk[^" ]*"/i.test(html)) errors.push(`${route}: missing or incorrect canonical`);

  for (const match of html.matchAll(/href="([^"]+)"/gi)) {
    const href = match[1];
    if (href.startsWith("/") && !href.startsWith("//") && !routeExists(href)) errors.push(`${route}: broken internal link ${href}`);
  }

  for (const match of html.matchAll(/<img[^>]+src="([^"]+)"/gi)) {
    const src = match[1];
    if (src.startsWith("/") && !fs.existsSync(path.join(root, src))) errors.push(`${route}: missing image ${src}`);
  }

  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(match[1].replaceAll("\\u003c", "<"));
    } catch (error) {
      errors.push(`${route}: invalid JSON-LD (${error.message})`);
    }
  }

  if (/^\/asbestos-(?:removal|surveys|artex|roof|aib|floor|pipe)/.test(route) || route.startsWith("/commercial-asbestos")) {
    if (!html.includes('"@type":"ImageObject"')) errors.push(`${route}: missing ImageObject`);
    if (!html.includes('"contentLocation"')) errors.push(`${route}: missing image contentLocation`);
    if (!html.includes('"postalCode"')) errors.push(`${route}: missing image postalCode`);
    if (!html.includes('"@type":"GeoCoordinates"')) errors.push(`${route}: missing image GeoCoordinates`);
    if (!/<meta property="og:image" content="https:\/\/asbestosremovalteesside\.co\.uk\//i.test(html)) errors.push(`${route}: missing absolute OG image`);
    if (!/<meta name="twitter:image" content="https:\/\/asbestosremovalteesside\.co\.uk\//i.test(html)) errors.push(`${route}: missing absolute Twitter image`);
  }
}

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
for (const file of htmlFiles) {
  const route = routeFor(file);
  if (["/404", "/_not-found"].includes(route)) continue;
  const url = `https://asbestosremovalteesside.co.uk${route === "/" ? "" : route}`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) errors.push(`${route}: absent from sitemap`);
}

if (errors.length) {
  console.error(`FAIL: ${errors.length} technical issue(s)`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`PASS: ${htmlFiles.length - 1} indexable HTML routes checked`);
console.log("PASS: one H1, titles, canonicals, internal links and local images");
console.log("PASS: JSON-LD parses; detail-page image Place/postcode/GEO present");
console.log("PASS: Open Graph, Twitter and sitemap checks");
