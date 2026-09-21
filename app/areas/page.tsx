import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, CallBand } from "@/components/SiteChrome";
import { areas, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: { absolute: "Asbestos Removal Areas | Middlesbrough & Teesside" },
  description: "Find local asbestos removal pages for Middlesbrough, Stockton, Thornaby, Billingham, Redcar, Yarm, Guisborough, Hartlepool and Darlington.",
  alternates: { canonical: `${site.url}/areas` },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: { title: "Asbestos Removal Areas | Middlesbrough & Teesside", description: "Find local asbestos removal pages for Middlesbrough, Stockton, Thornaby, Billingham, Redcar, Yarm, Guisborough, Hartlepool and Darlington.", url: `${site.url}/areas`, type: "website", images: [{ url: `${site.url}/asbestos-removal-areas-teesside-middlesbrough-town-centre-ts1-5ad.webp`, width: 1600, height: 1200, alt: "Commercial roof project context for local asbestos removal coverage across Middlesbrough and Teesside" }] },
  twitter: { card: "summary_large_image", title: "Asbestos Removal Areas | Middlesbrough & Teesside", description: "Find the closest local asbestos removal coverage page across Teesside and nearby North East areas.", images: [`${site.url}/asbestos-removal-areas-teesside-middlesbrough-town-centre-ts1-5ad.webp`] },
};

function jsonLd() {
  const url = `${site.url}/areas`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: "Asbestos Removal Areas across Middlesbrough and Teesside", isPartOf: { "@id": `${site.url}/#website` }, breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#areas` }, primaryImageOfPage: { "@id": `${url}#primaryimage` } },
      { "@type": "ImageObject", "@id": `${url}#primaryimage`, url: `${site.url}/asbestos-removal-areas-teesside-middlesbrough-town-centre-ts1-5ad.webp`, contentUrl: `${site.url}/asbestos-removal-areas-teesside-middlesbrough-town-centre-ts1-5ad.webp`, name: "Asbestos removal areas Teesside – Middlesbrough town centre TS1 5AD", caption: "Genuine North East commercial-roof photography used as coverage context for the local asbestos removal areas hub.", width: 1600, height: 1200, representativeOfPage: true, contentLocation: { "@type": "Place", name: "Middlesbrough town centre", address: { "@type": "PostalAddress", addressLocality: "Middlesbrough", postalCode: "TS1 5AD", addressCountry: "GB" }, geo: { "@type": "GeoCoordinates", latitude: 54.57643, longitude: -1.23683 } } },
      { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Areas", item: url },
      ] },
      { "@type": "ItemList", "@id": `${url}#areas`, name: "Local asbestos removal coverage", numberOfItems: areas.length, itemListElement: areas.map((area, index) => ({ "@type": "ListItem", position: index + 1, name: area.title, url: `${site.url}/${area.slug}` })) },
    ],
  };
}

export default function AreasHub() {
  return (
    <>
      <Header />
      <main>
        <section className="hub-hero">
          <img className="hub-hero-image" src="/asbestos-removal-areas-teesside-middlesbrough-town-centre-ts1-5ad.webp" alt="Commercial roof project context for local asbestos removal coverage across Middlesbrough and Teesside" title="Asbestos removal areas Teesside – Middlesbrough town centre TS1 5AD" width="1600" height="1200" fetchPriority="high" />
          <div className="shell hub-hero-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Areas</span></nav>
            <p className="eyebrow light">Middlesbrough · Teesside · nearby North East</p>
            <h1>Local Asbestos Removal Areas</h1>
            <p>Choose the page closest to the property. Each one covers real buyer situations, relevant streets and employment areas, access questions, confirmed project evidence and the nearest useful service links.</p>
            <div className="hero-actions"><a className="button primary" href={`tel:${site.phoneHref}`}>Call {site.phone}</a><Link className="button ghost" href="/#quote">Free quote</Link></div>
          </div>
        </section>
        <CallBand />

        <section className="section hub-intro">
          <div className="shell two-col">
            <div><p className="eyebrow">Choose by property location</p><h2>One coverage hub. Nine distinct local pages.</h2></div>
            <div className="prose">
              <p>The Middlesbrough and Teesside service area includes dense residential streets, suburban homes, coastal property, offices, retail parks, workshops and major industrial estates. A useful local page has to explain those differences, not repeat one city template with the place name changed.</p>
              <p>Start with the exact postcode and the problem holding up work. The local page then connects you to the closest property and access context, the relevant asbestos removal or survey service, nearby coverage and the evidence needed for a useful quotation.</p>
            </div>
          </div>
        </section>

        <section className="section hub-list-section">
          <div className="shell">
            <div className="section-heading centered-heading"><p className="eyebrow">All local coverage pages</p><h2>Find the nearest asbestos removal page.</h2></div>
            <div className="hub-card-grid">
              {areas.map((area) => (
                <Link href={`/${area.slug}`} key={area.slug}>
                  <span>{area.eyebrow}</span>
                  <h2>{area.navTitle}</h2>
                  <p>{area.summary}</p>
                  <b>View {area.title} →</b>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section hub-explainer">
          <div className="shell local-decision-grid">
            <article><p className="eyebrow">Homeowners and landlords</p><h2>Describe the room, outbuilding or roof.</h2><p>Send the postcode, property type, photographs, rough dimensions and any survey or sample result. Say whether plastering, rewiring, flooring, a kitchen, bathroom or roof replacement is waiting.</p></article>
            <article><p className="eyebrow">Commercial and industrial buyers</p><h2>Send the survey action and programme.</h2><p>Include the building or unit, survey item, access route, occupancy, working hours, height, loading or yard controls and the next contractor’s date. This separates a real work package from a generic local lead.</p></article>
          </div>
          <p className="hub-cross-link"><Link href="/services">Not sure which work type applies? Compare all asbestos services →</Link></p>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()).replace(/</g, "\\u003c") }} />
    </>
  );
}
