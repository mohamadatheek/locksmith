import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { renderToString } from "react-dom/server";
import { createElement } from "react";
import { createServer } from "vite";

const origin = "https://keyhome.lk";
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: "custom" });
const escape = value => String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const json = value => JSON.stringify(value).replaceAll("<", "\\u003c");

try {
  const marker = '<div id="root"></div>';
  const { default: App } = await server.ssrLoadModule("/src/App.tsx");
  const { default: ServicePage } = await server.ssrLoadModule("/src/ServicePage.tsx");
  const { services } = await server.ssrLoadModule("/src/services.ts");
  const { serviceGuides } = await server.ssrLoadModule("/src/serviceGuides.ts");
  const { serviceNavigation } = await server.ssrLoadModule("/src/serviceNavigation.ts");
  const { business } = await server.ssrLoadModule("/src/business.ts");
  const slugs = serviceNavigation.map(item => item.slug);
  if (slugs.length !== Object.keys(services).length || slugs.some(slug => !services[slug] || !serviceGuides[slug])) {
    throw new Error("Service content and navigation do not match");
  }
  const businessSchema = {
    "@type": "Locksmith", "@id": origin + "/#business",
    name: business.name, url: origin + "/", telephone: business.phone,
    image: origin + "/images/optimized/logo.webp",
    description: "Key cutting, car key programming, vehicle lock repair and vehicle or household door unlocking in the Colombo area.",
    address: { "@type": "PostalAddress", addressLocality: business.locality, addressRegion: "Colombo", addressCountry: "LK" },
    areaServed: business.areas.map(name => ({ "@type": "Place", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog", name: "KeyHome locksmith services",
      itemListElement: slugs.map(slug => ({
        "@type": "Offer", itemOffered: { "@type": "Service", name: services[slug].title, url: origin + "/" + slug + "/" },
      })),
    },
  };
  for (const slug of ["", ...slugs]) {
    const output = resolve("dist", slug, "index.html");
    let html = await readFile(output, "utf8");
    if (!html.includes(marker)) throw new Error("Root marker not found: " + output);
    const element = slug ? createElement(ServicePage, { slug }) : createElement(App);
    html = html.replace(marker, '<div id="root">' + renderToString(element) + "</div>");
    if (slug) {
      const service = services[slug];
      const description = serviceGuides[slug].description;
      const title = service.title + " | KeyHome";
      const url = origin + "/" + slug + "/";
      html = html.replace(/<title>[\s\S]*?<\/title>/, "<title>" + escape(title) + "</title>")
        .replace(/<meta (?:name|property)="(?:description|og:[^"]+|twitter:[^"]+)"[^>]*>/g, "")
        .replace(/<link rel="canonical"[^>]*>/g, "")
        .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "");
      const graph = [
        businessSchema,
        { "@type": "WebPage", "@id": url + "#webpage", name: service.title, description, url,
          isPartOf: { "@id": origin + "/#website" }, about: { "@id": url + "#service" },
          breadcrumb: { "@id": url + "#breadcrumb" }, primaryImageOfPage: { "@type": "ImageObject", url: origin + service.image } },
        { "@type": "Service", "@id": url + "#service", name: service.title, description, url,
          image: origin + service.image, areaServed: businessSchema.areaServed,
          provider: { "@id": origin + "/#business" } },
        { "@type": "BreadcrumbList", "@id": url + "#breadcrumb", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin + "/" },
          { "@type": "ListItem", position: 2, name: service.title, item: url },
        ] },
        { "@type": "FAQPage", "@id": url + "#faq", mainEntity: service.faq.map(([question, answer]) => ({
          "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
        })) },
      ];
      const tags = [
        '<meta name="description" content="' + escape(description) + '" />',
        '<link rel="canonical" href="' + url + '" />',
        '<meta property="og:type" content="website" />',
        '<meta property="og:locale" content="en_LK" />',
        '<meta property="og:title" content="' + escape(title) + '" />',
        '<meta property="og:description" content="' + escape(description) + '" />',
        '<meta property="og:url" content="' + url + '" />',
        '<meta property="og:image" content="' + origin + service.image + '" />',
        '<meta name="twitter:card" content="summary_large_image" />',
        '<script type="application/ld+json">' + json({ "@context": "https://schema.org", "@graph": graph }) + "</script>",
      ];
      html = html.replace("</head>", tags.join("\n") + "\n</head>");
    } else {
      html = html.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/, (_, source) => {
        const schema = JSON.parse(source);
        schema["@graph"] = schema["@graph"].map(item => item["@type"] === "Locksmith" ? businessSchema : item);
        schema["@graph"].push({ "@type": "WebSite", "@id": origin + "/#website", url: origin + "/", name: business.name, inLanguage: "en-LK" });
        return '<script type="application/ld+json">' + json(schema) + "</script>";
      });
    }
    await writeFile(output, html);
  }
  console.log("Prerendered " + (slugs.length + 1) + " pages with consistent service metadata");
} finally {
  await server.close();
}
