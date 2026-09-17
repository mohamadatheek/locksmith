import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { renderToString } from "react-dom/server";
import { createElement } from "react";
import { createServer } from "vite";

const server = await createServer({ server: { middlewareMode: true }, appType: "custom" });

try {
  const marker = '<div id="root"></div>';
  const { default: App } = await server.ssrLoadModule("/src/App.tsx");
  const { default: ServicePage } = await server.ssrLoadModule("/src/ServicePage.tsx");
  const pages = [
    ["index.html", createElement(App)],
    ...[
      "car-key-programming-colombo",
      "car-key-replacement-colombo",
      "emergency-car-unlocking",
      "smart-key-repair",
      "key-cutting-maharagama",
      "toyota-key-programming",
    ].map((slug) => [`${slug}/index.html`, createElement(ServicePage, { slug })]),
  ];

  for (const [page, element] of pages) {
    const output = resolve("dist", page);
    const html = await readFile(output, "utf8");
    if (!html.includes(marker)) throw new Error(`Root marker not found in ${page}`);
    const markup = renderToString(element);
    await writeFile(output, html.replace(marker, `<div id="root">${markup}</div>`));
  }

  console.log(`Prerendered ${pages.length} HTML pages`);
} finally {
  await server.close();
}
