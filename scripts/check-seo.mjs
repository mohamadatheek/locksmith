import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { resolve } from "node:path";

const origin = "https://keyhome.lk";
const sitemap = await readFile("dist/sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert(urls.length > 1 && new Set(urls).size === urls.length, "Sitemap must contain unique pages");
const pages = new Map();
const titles = new Set();
const descriptions = new Set();
for (const url of urls) {
  assert(url.startsWith(origin + "/"), "Unexpected sitemap origin");
  const pathname = new URL(url).pathname;
  const html = await readFile(resolve("dist", "." + pathname, "index.html"), "utf8");
  const titlesOnPage = [...html.matchAll(/<title>([\s\S]*?)<\/title>/g)];
  assert.equal(titlesOnPage.length, 1, url + ": expected one title");
  assert(!titles.has(titlesOnPage[0][1]), url + ": duplicate title");
  titles.add(titlesOnPage[0][1]);
  const descriptionsOnPage = [...html.matchAll(/<meta name="description" content="([^"]+)"/g)];
  assert.equal(descriptionsOnPage.length, 1, url + ": expected one description");
  assert(!descriptions.has(descriptionsOnPage[0][1]), url + ": duplicate description");
  descriptions.add(descriptionsOnPage[0][1]);
  const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)];
  assert.equal(canonicals.length, 1, url + ": expected one canonical");
  assert.equal(canonicals[0][1], url, url + ": incorrect canonical");
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, url + ": expected one H1");
  assert(/<main\b[\s\S]*?<\/main>/.test(html), url + ": missing prerendered content");
  assert(!/noindex/i.test(html), url + ": unexpected noindex");
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(match => {
    const value = JSON.parse(match[1]);
    return value["@graph"] ?? [value];
  });
  if (pathname !== "/") {
    const service = schemas.find(item => item["@type"] === "Service");
    assert.equal(service?.url, url, url + ": missing or incorrect Service schema");
    assert.equal(service.provider["@id"], origin + "/#business", url + ": provider mismatch");
    const business = schemas.find(item => item["@type"] === "Locksmith");
    assert.equal(business?.telephone, "+94774380935", url + ": phone mismatch");
    const webpage = schemas.find(item => item["@type"] === "WebPage");
    assert.equal(webpage?.url, url, url + ": missing or incorrect WebPage schema");
    const faq = schemas.find(item => item["@type"] === "FAQPage");
    assert(faq?.mainEntity.length >= 3, url + ": missing FAQ schema");
    const crumbs = schemas.find(item => item["@type"] === "BreadcrumbList");
    assert.equal(crumbs?.itemListElement.at(-1).item, url, url + ": breadcrumb mismatch");
  } else {
    const website = schemas.find(item => item["@type"] === "WebSite");
    assert.equal(website?.url, origin + "/", url + ": missing WebSite schema");
  }
  for (const match of html.matchAll(/(?:src|href)="(\/[^"#?]+\.(?:webp|js|css))"/g)) {
    await access(resolve("dist", "." + match[1]));
  }
  const links = [...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(match => match[1]);
  pages.set(pathname, { html, links });
}
for (const [pathname, page] of pages) {
  for (const href of page.links.filter(href => href.startsWith("/") || href.startsWith("#"))) {
    const target = new URL(href, origin + pathname);
    assert(pages.has(target.pathname), pathname + ": broken internal link " + href);
    if (target.hash) assert(pages.get(target.pathname).html.includes('id="' + target.hash.slice(1) + '"'), pathname + ": broken anchor " + href);
  }
  if (pathname !== "/") assert([...pages].some(([otherPath, other]) => otherPath !== pathname && other.links.includes(pathname)), pathname + ": orphaned page");
}
const robots = await readFile("dist/robots.txt", "utf8");
assert(robots.includes("Sitemap: " + origin + "/sitemap.xml"), "Missing sitemap declaration");
console.log(`SEO checks passed: ${pages.size} prerendered pages, unique metadata, valid schema, internal links and assets.`);
