import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer, CallBand } from "@/components/SiteChrome";
import { QuoteForm } from "@/components/QuoteForm";
import { areaDepth, areas, services, site, type AreaPage, type ServicePage } from "@/lib/site-data";

function faqsFor(page: ServicePage | AreaPage) {
  return page.faqs;
}

export function metadataForSlug(slug: string): Metadata {
  const page = [...services, ...areas].find((item) => item.slug === slug);
  if (!page) return {};
  const description = page.kind === "area" ? page.metaDescription : (page.summary.length > 158 ? `${page.summary.slice(0, 155)}…` : page.summary);
  const areaImage = page.kind === "area" ? page.primaryImage : undefined;
  const image = areaImage ? `${site.url}${areaImage.src}` : undefined;
  return {
    title: page.kind === "area" ? { absolute: `${page.title} | Free Quote` } : `${page.title} | Free Quote`,
    description,
    alternates: { canonical: `${site.url}/${page.slug}` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph: { title: page.title, description, url: `${site.url}/${page.slug}`, type: "website", ...(image && areaImage ? { images: [{ url: image, alt: areaImage.alt, width: areaImage.width, height: areaImage.height }] } : {}) },
    twitter: { card: "summary_large_image", title: page.title, description, ...(image ? { images: [image] } : {}) },
  };
}

function schema(page: ServicePage | AreaPage) {
  const url = `${site.url}/${page.slug}`;
  const serviceName = page.kind === "service" ? page.title : `Asbestos Removal ${page.navTitle}`;
  const faqs = faqsFor(page);
  const image = page.kind === "area" ? page.primaryImage : undefined;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${site.url}/#business`, name: site.name, url: site.url, telephone: site.phoneHref },
      { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, publisher: { "@id": `${site.url}/#business` }, inLanguage: "en-GB" },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.title,
        description: page.summary,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#business` },
        mainEntity: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        hasPart: { "@id": `${url}#faq` },
        inLanguage: "en-GB",
        ...(image ? { primaryImageOfPage: { "@id": `${url}#primaryimage` } } : {}),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: serviceName,
        serviceType: serviceName,
        provider: { "@id": `${site.url}/#business` },
        areaServed: page.kind === "area" ? page.schemaAreas.map((name) => ({ "@type": "Place", name, containedInPlace: { "@type": "AdministrativeArea", name: "Teesside and the North East" } })) : "Middlesbrough and Teesside",
        mainEntityOfPage: { "@id": `${url}#webpage` },
        isRelatedTo: { "@id": `${site.url}/#service` },
        ...(image ? { image: { "@id": `${url}#primaryimage` } } : {}),
        url,
      },
      ...(image ? [{
        "@type": "ImageObject",
        "@id": `${url}#primaryimage`,
        url: `${site.url}${image.src}`,
        contentUrl: `${site.url}${image.src}`,
        name: image.name,
        caption: image.caption,
        width: image.width,
        height: image.height,
        representativeOfPage: true,
      }] : []),
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: page.kind === "service" ? "Services" : "Areas", item: `${site.url}/${page.kind === "service" ? "services" : "areas"}` },
          { "@type": "ListItem", position: 3, name: page.navTitle, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
      },
    ],
  };
}

export function DetailPage({ slug }: { slug: string }) {
  const page = [...services, ...areas].find((item) => item.slug === slug);
  if (!page) notFound();
  const isService = page.kind === "service";
  const localDepth = !isService ? areaDepth[page.slug] : undefined;
  const pageFaqs = faqsFor(page);
  const relatedServices = isService
    ? services.filter((item) => item.slug !== page.slug).slice(0, 4)
    : (page as AreaPage).serviceSlugs.map((serviceSlug) => services.find((item) => item.slug === serviceSlug)).filter((item): item is ServicePage => Boolean(item));
  const relatedAreas = isService
    ? areas.slice(0, 4)
    : (page as AreaPage).nearbySlugs.map((areaSlug) => areas.find((item) => item.slug === areaSlug)).filter((item): item is AreaPage => Boolean(item));

  return (
    <>
      <Header />
      <main>
        <section className={`detail-hero ${!isService ? "area-detail-hero" : ""}`}>
          {!isService && (
            <figure className="detail-hero-media">
              <img src={(page as AreaPage).primaryImage.src} alt={(page as AreaPage).primaryImage.alt} width={(page as AreaPage).primaryImage.width} height={(page as AreaPage).primaryImage.height} fetchPriority="high" />
              <figcaption>{(page as AreaPage).primaryImage.caption}</figcaption>
            </figure>
          )}
          <div className="shell">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><Link href={isService ? "/services" : "/areas"}>{isService ? "Services" : "Areas"}</Link><span>/</span><span>{page.navTitle}</span>
            </nav>
            <div className="detail-hero-grid">
              <div>
                <p className="eyebrow light">{page.eyebrow}</p>
                <h1>{page.title}</h1>
                <p className="detail-answer">{page.summary}</p>
                <div className="hero-actions">
                  <a className="button primary" href={`tel:${site.phoneHref}`}>Call {site.phone}</a>
                  <a className="button ghost" href="#quote">Free quote</a>
                </div>
              </div>
              <aside>
                <span>What to send</span>
                <strong>Postcode · photos · survey pages · rough size · deadline</strong>
                <p>You can still enquire if the material has not been confirmed.</p>
              </aside>
            </div>
          </div>
        </section>
        <CallBand />

        <section className="section detail-intro">
          <div className="shell two-col">
            <div>
              <p className="eyebrow">{isService ? "Start with the live job" : "Local buyer context"}</p>
              <h2>{isService ? "A quote needs the real scope, not a guessed material." : `Asbestos work across ${page.navTitle}.`}</h2>
            </div>
            <div className="prose">
              <p>{isService ? (page as ServicePage).intro : (page as AreaPage).local}</p>
              <p>Call <a href={`tel:${site.phoneHref}`}>{site.phone}</a> or use the enquiry form with the postcode, photographs and any paperwork you already have.</p>
            </div>
          </div>
        </section>

        {isService && (page as ServicePage).image && (
          <section className="service-photo-section" aria-label={`${page.navTitle} project photography`}>
            <div className="shell">
              <figure className="service-photo">
                <img
                  src={(page as ServicePage).image!.src}
                  alt={(page as ServicePage).image!.alt}
                />
                <figcaption>
                  <span>Real North East project photography</span>
                  <p>{(page as ServicePage).image!.caption}</p>
                </figcaption>
              </figure>
            </div>
          </section>
        )}

        <section className="section detail-points">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow light">{isService ? "When people contact us" : "Relevant services"}</p>
                <h2>{isService ? "Live triggers that usually need a clear next step." : `Common asbestos enquiries in ${page.navTitle}.`}</h2>
              </div>
              <p>{isService ? (page as ServicePage).quote : "The correct route depends on the actual material, condition, access and work planned."}</p>
            </div>
            <div className="point-grid">
              {(isService ? (page as ServicePage).triggers : (page as AreaPage).priorities).map((item, index) => (
                <article key={item}><span>0{index + 1}</span><h3>{item}</h3></article>
              ))}
            </div>
          </div>
        </section>

        {!isService && (
          <section className="section local-detail-section">
            <div className="shell">
              <div className="section-heading split-heading">
                <div>
                  <p className="eyebrow">Local buyer and property context</p>
                  <h2>Asbestos removal in {page.navTitle} for work that needs to move.</h2>
                </div>
                <p>Start with the real problem: what has been found or suspected, where it is, and which renovation, maintenance, roofing or commercial programme is waiting.</p>
              </div>
              <div className="local-info-grid">
                <article className="local-buyer-card">
                  <h3>When people contact us</h3>
                  <ul>{(page as AreaPage).buyerSituations.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
                <article>
                  <h3>Areas covered</h3>
                  <ul>{(page as AreaPage).subAreas.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
                <article>
                  <h3>Property types</h3>
                  <ul>{(page as AreaPage).propertyTypes.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
                <article>
                  <h3>What to send</h3>
                  <ul>{(page as AreaPage).whatToSend.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              </div>
              <div className="local-decision-grid">
                <article>
                  <p className="eyebrow">Quoting the live project</p>
                  <h3>How asbestos work is scoped in {page.navTitle}</h3>
                  <p>{(page as AreaPage).planning}</p>
                </article>
                <article>
                  <p className="eyebrow">Survey or no survey</p>
                  <h3>The correct route follows the material and work</h3>
                  <p>{(page as AreaPage).route}</p>
                </article>
              </div>
              {localDepth && (
                <section className="local-depth" aria-labelledby="local-depth-heading">
                  <div className="section-heading centered-heading">
                    <p className="eyebrow">Streets, landmarks and real project evidence</p>
                    <h2 id="local-depth-heading">Local detail that changes an asbestos removal quote.</h2>
                  </div>
                  <div className="local-depth-grid">
                    <article>
                      <h3>{localDepth.landmarksTitle}</h3>
                      <p>{localDepth.landmarks}</p>
                      <p>{localDepth.accessPlanning}</p>
                    </article>
                    <article className="local-evidence-card">
                      <h3>{localDepth.situationTitle}</h3>
                      <p>{localDepth.situation}</p>
                      <strong>{localDepth.evidenceNote}</strong>
                    </article>
                  </div>
                </section>
              )}
              <div className="section-heading local-service-heading centered-heading">
                <p className="eyebrow">Removal, surveys and testing</p>
                <h2>Asbestos removal services available across {page.navTitle}.</h2>
              </div>
              <div className="local-service-grid">
                {services.slice(0, 7).map((item) => (
                  <Link href={`/${item.slug}`} key={item.slug}>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <span>View service →</span>
                  </Link>
                ))}
              </div>
              <div className="local-root-link">
                <p>Explore the <Link href="/areas">full Middlesbrough and Teesside areas hub</Link>, return to <Link href="/">asbestos removal across Middlesbrough and Teesside</Link>, or call <a href={`tel:${site.phoneHref}`}>{site.phone}</a> with the postcode and job details.</p>
              </div>
            </div>
          </section>
        )}

        {isService && (
          <section className="section context-section">
            <div className="shell two-col">
              <div>
                <p className="eyebrow">Property and project context</p>
                <h2>Scope the material around the building that contains it.</h2>
                <p>Height, access, occupancy, condition, amount and the next trade all change how a removal project is assessed.</p>
              </div>
              <ul className="context-list">
                {(page as ServicePage).contexts.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p className="hub-return"><Link href="/services">Compare every asbestos removal, survey and testing service →</Link></p>
            </div>
          </section>
        )}

        <section className="section faq-section" id="questions">
          <div className="shell faq-layout">
            <div>
              <p className="eyebrow">Buyer questions</p>
              <h2>What people ask before a free quote.</h2>
              <p>Answers are specific to this service or area. The actual survey and job scope still govern the work.</p>
            </div>
            <div className="faq-list">
              {pageFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="section related-section">
          <div className="shell">
            <div className="section-heading centered-heading"><p className="eyebrow">Keep moving</p><h2>{isService ? "Related asbestos services" : `Relevant asbestos services in ${page.navTitle}`}</h2></div>
            <div className="related-grid">
              {relatedServices.map((item) => <Link key={item.slug} href={`/${item.slug}`}><b>{item.navTitle}</b><span>{item.summary}</span><em>View service →</em></Link>)}
            </div>
            <div className="section-heading second-related centered-heading"><p className="eyebrow">{isService ? "Service coverage" : "Nearby coverage"}</p><h2>{isService ? "Asbestos removal across Teesside" : "Other local areas we cover"}</h2></div>
            <div className="related-grid">
              {relatedAreas.map((item) => <Link key={item.slug} href={`/${item.slug}`}><b>{item.navTitle}</b><span>{item.summary}</span><em>View local page →</em></Link>)}
            </div>
          </div>
        </section>

        <section className="section quote-section" id="quote">
          <div className="shell quote-layout">
            <div className="quote-copy">
              <p className="eyebrow light">Free quotation</p>
              <h2>Send the job details you already have.</h2>
              <p>Survey or no survey, tell us the location, material or suspected material, approximate amount and project timing.</p>
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(page)).replace(/</g, "\\u003c") }} />
    </>
  );
}
