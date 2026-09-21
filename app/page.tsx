/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Header, Footer, CallBand } from "@/components/SiteChrome";
import { QuoteForm } from "@/components/QuoteForm";
import { areas, services, site } from "@/lib/site-data";

const homeFaqs = [
  {
    question: "What asbestos removal work can you help with?",
    answer:
      "Enquiries include asbestos Artex removal, asbestos textured coating removal, asbestos AIB removal, asbestos floor tile removal, asbestos bitumen adhesive removal, asbestos garage roof removal, asbestos corrugated roof removal, asbestos cement sheet removal, soffits, pipes, water tanks and commercial asbestos work.",
  },
  {
    question: "Do I need an asbestos survey before I call?",
    answer:
      "No. If asbestos is confirmed, send the relevant survey or sample result. If it is only suspected, explain where the material is and what work may disturb it. We can discuss whether testing or a survey is the right next step.",
  },
  {
    question: "Which parts of Middlesbrough and Teesside do you cover?",
    answer:
      "Coverage includes Middlesbrough, Stockton-on-Tees, Thornaby, Billingham, Redcar, Yarm, Ingleby Barwick, Guisborough, Eston, Normanby, Marske, Saltburn, Hartlepool, Darlington and surrounding Teesside and North East areas.",
  },
  {
    question: "Can you quote from photographs and survey pages?",
    answer:
      "Yes. Send the property postcode, photographs, relevant survey pages, approximate measurements or quantities, access details and the date or trade affected. A site visit can be arranged where the scope needs checking.",
  },
  {
    question: "Do you handle domestic and commercial asbestos removal?",
    answer:
      "Yes. Enquiries range from ceilings, floors, garages and soffits in homes to asbestos removal in shops, offices, warehouses, workshops, managed buildings and industrial premises.",
  },
];

function jsonLd() {
  const base = site.url;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#business`,
        name: site.name,
        alternateName: ["Asbestos Removal Teesside", "Asbestos Removal Middlesbrough"],
        url: base,
        telephone: site.phoneHref,
        logo: { "@type": "ImageObject", url: `${base}/favicon.svg`, width: 64, height: 64 },
        image: { "@id": `${base}/#primaryimage` },
        description:
          "Asbestos removal, surveys, testing and lawful disposal enquiries for homes, commercial buildings and industrial premises across Middlesbrough and Teesside.",
        areaServed: [
          { "@type": "City", name: "Middlesbrough" },
          { "@type": "AdministrativeArea", name: "Teesside" },
          { "@type": "City", name: "Stockton-on-Tees" },
          { "@type": "City", name: "Redcar" },
          { "@type": "City", name: "Hartlepool" },
        ],
        contactPoint: { "@id": `${base}/#contact` },
      },
      {
        "@type": "ContactPoint",
        "@id": `${base}/#contact`,
        contactType: "customer service",
        telephone: site.phoneHref,
        areaServed: "Middlesbrough and Teesside",
        availableLanguage: "en-GB",
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: site.name,
        publisher: { "@id": `${base}/#business` },
        inLanguage: "en-GB",
      },
      {
        "@type": "WebPage",
        "@id": `${base}/#webpage`,
        url: base,
        name: "Asbestos Removal Middlesbrough & Teesside | Free Quote",
        isPartOf: { "@id": `${base}/#website` },
        about: { "@id": `${base}/#business` },
        mainEntity: { "@id": `${base}/#service` },
        primaryImageOfPage: { "@id": `${base}/#primaryimage` },
        hasPart: { "@id": `${base}/#faq` },
        inLanguage: "en-GB",
      },
      {
        "@type": "ImageObject",
        "@id": `${base}/#primaryimage`,
        url: `${base}/asbestos-removal-middlesbrough-teesside-teesamp-ts2.webp`,
        contentUrl: `${base}/asbestos-removal-middlesbrough-teesside-teesamp-ts2.webp`,
        caption: "Industrial roof lining photographed in connection with a Middlesbrough and Teesside asbestos removal enquiry",
        name: "Asbestos removal Middlesbrough and Teesside – commercial project context",
        width: 1600,
        height: 1200,
        representativeOfPage: true,
        contentLocation: {
          "@type": "Place",
          name: "Middlesbrough and Teesside",
          address: { "@type": "PostalAddress", addressLocality: "Middlesbrough", postalCode: "TS2", addressCountry: "GB" },
          geo: { "@type": "GeoCoordinates", latitude: 54.5847, longitude: -1.2397 },
        },
      },
      {
        "@type": "Service",
        "@id": `${base}/#service`,
        name: "Asbestos Removal Middlesbrough & Teesside",
        serviceType: services.map((item) => item.navTitle),
        provider: { "@id": `${base}/#business` },
        areaServed: "Middlesbrough and Teesside",
        image: { "@id": `${base}/#primaryimage` },
        mainEntityOfPage: { "@id": `${base}/#webpage` },
        url: base,
      },
      {
        "@type": "FAQPage",
        "@id": `${base}/#faq`,
        mainEntity: homeFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <img className="hero-image" src="/asbestos-removal-middlesbrough-teesside-teesamp-ts2.webp" alt="Industrial roof lining photographed for an asbestos removal enquiry covering Middlesbrough and Teesside" title="Asbestos removal Middlesbrough and Teesside – TeesAMP TS2" width="1600" height="1200" fetchPriority="high" />
          <div className="hero-scrim" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow light">Middlesbrough · Stockton · Redcar · all Teesside</p>
              <h1>Asbestos Removal<br />Middlesbrough & Teesside</h1>
              <p className="hero-answer">
                Asbestos removal, surveys, testing and lawful disposal for homes, landlords, contractors and commercial sites. Call with a survey result or just tell us what you have found and what work is waiting.
              </p>
              <div className="hero-actions">
                <a className="button primary" href={`tel:${site.phoneHref}`}>Call {site.phone}</a>
                <a className="button ghost" href="#quote">Free quote</a>
              </div>
              <p className="hero-note">15+ years’ experience · Small and large projects · Teesside-wide coverage</p>
            </div>
          </div>
        </section>

        <CallBand />

        <section className="section intro-section">
          <div className="shell two-col">
            <div>
              <p className="eyebrow">A local answer to a live problem</p>
              <h2>What needs to come out, and what needs to happen afterwards?</h2>
            </div>
            <div className="prose">
              <p>
                Most people are not looking for a lecture about asbestos. A ceiling is holding up plastering. Old floor tiles have stopped a kitchen or bathroom refit. A garage roof needs replacing. A survey has found AIB, pipe insulation or asbestos cement before contractors can continue.
              </p>
              <p>
                Start there. We cover Middlesbrough and the whole Teesside area for domestic, commercial and industrial enquiries. You do not need to work out the licence category or name the material from a photograph before calling.
              </p>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow light">Removal, surveys & testing</p>
                <h2>Asbestos services built around the job in front of you.</h2>
              </div>
              <p>Choose the closest service, or call and describe what has been found.</p>
            </div>
            <details className="content-disclosure dark-disclosure">
              <summary><span>View all asbestos services</span><b>{services.length} service pages</b></summary>
              <div className="service-grid">
                {services.map((service, index) => (
                  <Link className={`service-card service-card-${index + 1}`} href={`/${service.slug}`} key={service.slug}>
                    <span>0{index + 1}</span>
                    <h3>{service.navTitle}</h3>
                    <p>{service.summary}</p>
                    <b>View service →</b>
                  </Link>
                ))}
              </div>
            </details>
            <p className="section-hub-link"><Link href="/services">Open the complete asbestos services hub →</Link></p>
          </div>
        </section>

        <section className="section situation-section">
          <div className="shell">
            <div className="section-heading centered-heading">
              <p className="eyebrow">Common buying situations</p>
              <h2>Removal planned around the building, access and trades waiting.</h2>
            </div>
            <details className="content-disclosure light-disclosure">
              <summary><span>View common buying situations</span><b>4 situations</b></summary>
              <div className="situation-grid">
                <article><span>01</span><h3>Renovation is waiting</h3><p>Textured ceilings, boards or floors need dealing with before plastering, rewiring, kitchens, bathrooms or new finishes can continue.</p></article>
                <article><span>02</span><h3>A survey has found asbestos</h3><p>Send the relevant item pages and explain which recommendations need pricing and what the next contractor needs.</p></article>
                <article><span>03</span><h3>A roof needs replacing</h3><p>From a garage in Middlesbrough to corrugated sheets over a Teesside workshop, send size, height, photos and access.</p></article>
                <article><span>04</span><h3>A commercial programme is fixed</h3><p>Occupants, deliveries, working hours, survey actions and the following trade all need to fit the removal scope.</p></article>
              </div>
            </details>
          </div>
        </section>

        <section className="section evidence-section">
          <div className="shell evidence-grid">
            <figure className="evidence-main">
              <img src="/asbestos-artex-removal-middlesbrough-teesside-textured-ceiling.webp" alt="Swirled textured ceiling in a Teesside property before proposed refurbishment" width="1200" height="1600" loading="lazy" />
              <figcaption><b>Textured ceiling enquiry</b><span>A photograph helps define rooms, finish and access. Testing confirms whether the coating contains asbestos.</span></figcaption>
            </figure>
            <div className="evidence-copy">
              <p className="eyebrow">Real enquiry evidence, accurate wording</p>
              <h2>Photos help us understand the job. They do not replace identification.</h2>
              <p>Clear images can show location, height, condition and scale. Survey pages or sample results establish what the material is. Keeping those two things separate leads to a more useful quote and avoids pretending a ceiling, board, tile or roof can be diagnosed from a screen.</p>
              <figure className="evidence-small">
                <img src="/asbestos-floor-removal-middlesbrough-teesside-bathroom.webp" alt="Bathroom interior and floor finish photographed in connection with a Teesside floor-removal enquiry" width="1200" height="1600" loading="lazy" />
                <figcaption>Flooring and bathroom refurbishments often have a fixed next trade and completion date.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section areas-section" id="areas">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Full local coverage</p>
                <h2>Middlesbrough, Teesside and the surrounding North East area.</h2>
              </div>
              <p>Each local page reflects the property, access and project situations found in that part of the coverage area.</p>
            </div>
            <details className="content-disclosure light-disclosure">
              <summary><span>View every area we cover</span><b>{areas.length} local pages</b></summary>
              <div className="area-grid">
                {areas.map((area) => (
                  <Link href={`/${area.slug}`} key={area.slug}>
                    <h3>{area.navTitle}</h3>
                    <p>{area.summary}</p>
                    <span>Local asbestos removal →</span>
                  </Link>
                ))}
              </div>
            </details>
            <p className="section-hub-link"><Link href="/areas">Open the complete Middlesbrough and Teesside areas hub →</Link></p>
            <div className="coverage-line">
              Also covering Eaglescliffe, Norton, Marske, Saltburn, Eston, Normanby, Nunthorpe, Coulby Newham and nearby Teesside districts.
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="shell">
            <div className="section-heading centered-heading">
              <p className="eyebrow light">From first call to quotation</p>
              <h2>A simple route whether asbestos is confirmed or only suspected.</h2>
            </div>
            <details className="content-disclosure dark-disclosure">
              <summary><span>View the quotation process</span><b>4 clear steps</b></summary>
              <ol className="process-grid">
                <li><span>1</span><h3>Tell us the live problem</h3><p>Where is it, what has been found and what work cannot proceed?</p></li>
                <li><span>2</span><h3>Send useful evidence</h3><p>Postcode, photos, rough dimensions and any survey or sample result.</p></li>
                <li><span>3</span><h3>Confirm the scope</h3><p>We review material, access, occupancy, quantity and the programme. A visit can be arranged when needed.</p></li>
                <li><span>4</span><h3>Receive the quote</h3><p>The written scope sets out the agreed work, removal and disposal route.</p></li>
              </ol>
            </details>
          </div>
        </section>

        <section className="section faq-section" id="questions">
          <div className="shell faq-layout">
            <div>
              <p className="eyebrow">Straight answers</p>
              <h2>Questions about asbestos removal in Middlesbrough & Teesside.</h2>
              <p>Still unsure? Call with what you know. You do not need a complete survey pack before the first conversation.</p>
              <a className="text-link" href={`tel:${site.phoneHref}`}>Call {site.phone} →</a>
            </div>
            <div className="faq-list">
              {homeFaqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section quote-section" id="quote">
          <div className="shell quote-layout">
            <div className="quote-copy">
              <p className="eyebrow light">Free quotation</p>
              <h2>Tell us what asbestos work you need pricing.</h2>
              <p>Use the form for survey pages, photographs and job details. If it is easier, call and talk the project through.</p>
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()).replace(/</g, "\\u003c") }} />
    </>
  );
}
