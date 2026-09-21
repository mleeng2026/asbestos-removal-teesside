# Asbestos Removal Teesside — Project Checkpoint

Last updated: 21 September 2026

## Source and deployment

- Repository: `mleeng2026/asbestos-removal-teesside`
- Live branch: `main`
- Safe working branch: `v3-section-126-20260921`
- Live checkpoint before this work: `c368949` (`Add Google Search Console verification`)
- Deployment: GitHub Actions to GitHub Pages
- Domain: `https://asbestosremovalteesside.co.uk`
- HTTPS and Google Search Console ownership: verified

## Current governing standard

- V3 Mega Mega Power Edition dated 20 September 2026 at 18:27 BST
- Sections 124, 125 and 126 are active hard rules
- Section 126 local-page five-word phrase audit completed across all nine area pages
- Highest pairwise editorial five-word overlap: 9.3%, so the location cluster reaches 90.7% editorial uniqueness without forced rewrites

## Completed in this branch

- Refreshed the 20-route site inventory
- Created the location image map for the homepage, both hubs, seven service pages and nine area-page primary images
- Visually reviewed every unique WebP image in the repository
- Created postcode-bearing page-specific image assets for the homepage, both hubs, all seven services and all nine area pages while retaining old live asset URLs
- Added verified town-centre postcode and OS Open Names latitude/longitude data to each commercial-page primary image record
- Connected ImageObject `contentLocation`, `PostalAddress` and `GeoCoordinates` to every indexable commercial page's primary image
- Kept hero, Open Graph, Twitter, ImageObject and image-sitemap references driven from the same primary-image record
- Updated changed-page sitemap `lastmod` to 21 September 2026
- Lint and TypeScript checks pass; the direct static image elements produce six intentional performance warnings and no errors
- Static Next.js export completes successfully
- Generated-output audit covers 23 HTML files, 19 JSON-LD graphs and 764 internal links with no broken links or missing image files
- Hero, Open Graph, Twitter, ImageObject and image-sitemap URLs align across all 19 commercial pages
- Final editorial audit gives every area page 547–607 locally edited words and a maximum shared five-word overlap of 9.3%

## Verification still required before merge/deploy

- Render and inspect representative pages after deployment
- Commit and push the safe branch, merge to `main`, then verify the live deployment
- Confirm all new image URLs return 200 with an image MIME type
- Recheck `sitemap.xml` after deployment; Search Console initially showed a temporary `Couldn't fetch` state even though the live XML returned 200

## Scope note

- No page video is currently present, so Section 125 is not applicable unless a video is added.
