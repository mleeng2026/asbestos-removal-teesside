import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, CallBand } from "@/components/SiteChrome";
import { services, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: { absolute: "Asbestos Services | Middlesbrough & Teesside" },
  description: "Compare asbestos removal, surveys, testing, Artex, AIB, flooring, roof and commercial asbestos services across Middlesbrough and Teesside.",
  alternates: { canonical: `${site.url}/services` },
  robots: { index: true, follow: true },
};

function jsonLd() {
  const url = `${site.url}/services`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: "Asbestos Services across Middlesbrough and Teesside", isPartOf: { "@id": `${site.url}/#website` }, breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#services` } },
      { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Services", item: url },
      ] },
      { "@type": "ItemList", "@id": `${url}#services`, name: "Asbestos removal, survey and testing services", numberOfItems: services.length, itemListElement: services.map((service, index) => ({ "@type": "ListItem", position: index + 1, name: service.title, url: `${site.url}/${service.slug}` })) },
    ],
  };
}

export default function ServicesHub() {
  return (
    <>
      <Header />
      <main>
        <section className="hub-hero services-hub-hero">
          <div className="shell hub-hero-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Services</span></nav>
            <p className="eyebrow light">Removal · surveys · testing · disposal</p>
            <h1>Asbestos Services in Middlesbrough & Teesside</h1>
            <p>Choose the material or project route that best matches the live job. If you do not know what the material is, start with surveys and testing or call with the photographs and work planned.</p>
            <div className="hero-actions"><a className="button primary" href={`tel:${site.phoneHref}`}>Call {site.phone}</a><a className="button ghost" href="/#quote">Free quote</a></div>
          </div>
        </section>
        <CallBand />

        <section className="section hub-intro">
          <div className="shell two-col">
            <div><p className="eyebrow">Choose by the work required</p><h2>A clear route from suspected material to removal scope.</h2></div>
            <div className="prose"><p>Some buyers arrive with a full refurbishment survey and an item schedule. Others have exposed an old floor, found a textured ceiling or need a garage roof removed before a contractor can continue. Both can start an enquiry, but neither should guess the material or licence category.</p><p>These service pages explain the evidence to send, the conditions that affect planning and the correct next step. Every page links into the most relevant local coverage pages so material intent and location intent support each other.</p></div>
          </div>
        </section>

        <section className="section hub-list-section dark-hub-list">
          <div className="shell">
            <div className="section-heading centered-heading"><p className="eyebrow light">All asbestos services</p><h2>Removal, identification and commercial project support.</h2></div>
            <div className="hub-card-grid service-hub-grid">
              {services.map((service) => (
                <Link href={`/${service.slug}`} key={service.slug}>
                  <span>{service.eyebrow}</span>
                  <h2>{service.navTitle}</h2>
                  <p>{service.summary}</p>
                  <b>View {service.title} →</b>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section hub-explainer">
          <div className="shell local-decision-grid">
            <article><p className="eyebrow">If asbestos is confirmed</p><h2>Send the item that needs action.</h2><p>Provide the relevant survey or laboratory result, photographs, quantity, condition, access and the work that follows removal. A written scope can then be built around the actual material and programme.</p></article>
            <article><p className="eyebrow">If asbestos is suspected</p><h2>Do not disturb it to get a better photograph.</h2><p>Explain where the item is and what work may affect it. Targeted sampling can suit one accessible material, while broader refurbishment or demolition may require a survey designed around the full intrusive scope.</p></article>
          </div>
          <p className="hub-cross-link"><Link href="/areas">Choose the nearest local asbestos removal page →</Link></p>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()).replace(/</g, "\\u003c") }} />
    </>
  );
}
