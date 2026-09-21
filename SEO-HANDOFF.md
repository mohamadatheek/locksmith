# KeyHome SEO implementation — 21 September 2026

## Confirmed by the owner

- Public phone: **077 438 0935** (+94 77 438 0935).
- KeyHome provides both vehicle and household door unlocking.

## Implemented

- Nine prerendered pages: homepage and eight service pages, including car lock repair and household door unlocking.
- All services linked from the homepage and from other service pages; Toyota programming is no longer orphaned.
- Service-specific preparation advice, scope, limitations, quote factors and FAQs.
- Descriptive homepage heading, photo captions based on image contents, corrected Toyota photograph and digit-only WhatsApp links.
- Removed unsupported business statistics, founding-date claims, unverified coordinates and unconfirmed shop opening hours.
- Service titles, descriptions, canonical URLs, social metadata and Service/BreadcrumbList structured data generated from the same service content at build time.
- Sitemap updated to include all nine pages. Production build checks metadata, structured data, internal links, anchors, assets and orphaned pages.
- Content remains visible without JavaScript. Responsive service guides and navigation preserve the existing visual design.

## Validation

- Build, lint and generated-site SEO checks pass for all nine pages.
- All nine pages tested at 320 px, 390 px and 1440 px: no horizontal overflow or JavaScript errors.
- Mobile menu, photo lightbox, FAQ expansion and visibility without JavaScript verified.
- Local mobile Lighthouse: homepage **99 Performance / 100 Accessibility / 100 Best Practices / 100 SEO**, LCP **1.8 s**, CLS **0**.
- Household page: **100 Performance / 100 Best Practices / 100 SEO**, LCP **1.4 s**, CLS **0**; final accessibility rerun **100** after correcting button contrast.
- These are local lab measurements, not live PageSpeed or ranking results.

## Business details still needed

The owner has confirmed the phone but has not confirmed street addresses, branch count, shop hours or a Google Maps/Business Profile link. The website keeps the existing Maharagama locality and asks visitors to call for directions and visiting hours.

Confirm whether public listings for **119/E High Level Road** and **128 Dehiwala–Maharagama Road** describe current branches, previous locations or unrelated records. Confirm whether **074 120 3918** belongs to a branch before changing that external listing. These records were not edited.

Actual job case studies, specific vehicle years supported, customer reviews and warranty terms should be added only after the business supplies or verifies them. Current photo captions describe visible content without inventing job dates, locations or outcomes.

## Deployment and search follow-up

1. Publish the reviewed changes through the repository's GitHub Pages workflow.
2. Check both new URLs return 200: `/lock-repair-colombo/` and `/door-unlocking-colombo/`.
3. Inspect representative pages in Google Search Console and submit `https://keyhome.lk/sitemap.xml` if it is not already submitted. Inspect indexing status and Google's selected canonical.
4. Reconcile the verified website information with the owner's Google Business Profile and relevant directories.
5. Use Search Console query/page reports to compare impressions, clicks, CTR and position over meaningful periods. Keep Maps performance separate from organic website results.

The previous 98 mobile score is a historical lab result. Changes to 28-day real-user Core Web Vitals and search rankings must be measured after deployment; neither is guaranteed by a technical SEO check.
