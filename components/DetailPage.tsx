/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer, CallBand } from "@/components/SiteChrome";
import { QuoteForm } from "@/components/QuoteForm";
import { areaDepth, areas, services, site, type AreaPage, type ServicePage } from "@/lib/site-data";
import { areaEditorial } from "@/lib/area-editorial";
import { serviceEditorial, supplementalServiceFaqs } from "@/lib/service-editorial";

function faqsFor(page: ServicePage | AreaPage) {
  return page.kind === "service" ? [...page.faqs, ...(supplementalServiceFaqs[page.slug] ?? [])] : page.faqs;
}

export function metadataForSlug(slug: string): Metadata {
  const page = [...services, ...areas].find((item) => item.slug === slug);
  if (!page) return {};
  const description = page.kind === "area" ? page.metaDescription : (page.summary.length > 158 ? `${page.summary.slice(0, 155)}…` : page.summary);
  const pageImage = page.kind === "area" ? page.primaryImage : page.image;
  const image = `${site.url}${pageImage.src}`;
  return {
    title: page.kind === "area" ? { absolute: `${page.title} | Free Quote` } : `${page.title} | Free Quote`,
    description,
    alternates: { canonical: `${site.url}/${page.slug}` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph: { title: page.title, description, url: `${site.url}/${page.slug}`, type: "website", images: [{ url: image, alt: pageImage.alt, width: pageImage.width, height: pageImage.height }] },
    twitter: { card: "summary_large_image", title: page.title, description, images: [{ url: image, alt: pageImage.alt }] },
  };
}

function schema(page: ServicePage | AreaPage) {
  const url = `${site.url}/${page.slug}`;
  const serviceName = page.kind === "service" ? page.title : `Asbestos Removal ${page.navTitle}`;
  const faqs = faqsFor(page);
  const image = page.kind === "area" ? page.primaryImage : page.image;
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
        primaryImageOfPage: { "@id": `${url}#primaryimage` },
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
        image: { "@id": `${url}#primaryimage` },
        url,
      },
      {
        "@type": "ImageObject",
        "@id": `${url}#primaryimage`,
        url: `${site.url}${image.src}`,
        contentUrl: `${site.url}${image.src}`,
        name: image.name,
        caption: image.caption,
        width: image.width,
        height: image.height,
        representativeOfPage: true,
        contentLocation: {
          "@type": "Place",
          name: image.locationName,
          address: { "@type": "PostalAddress", addressLocality: image.locationName, postalCode: image.postalCode, addressCountry: "GB" },
          geo: { "@type": "GeoCoordinates", latitude: image.latitude, longitude: image.longitude },
        },
      },
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
  const localEditorial = !isService ? areaEditorial[page.slug] : undefined;
  const serviceDepth = isService ? serviceEditorial[page.slug] : undefined;
  const pageFaqs = faqsFor(page);
  const roofClusterSlugs = [
    "asbestos-roof-removal-middlesbrough-teesside",
    "asbestos-warehouse-corrugated-roof-removal-teesside",
    "asbestos-farm-building-roof-removal-teesside",
    "asbestos-shed-outbuilding-roof-removal-teesside",
  ];
  const relatedServices = isService
    ? (roofClusterSlugs.includes(page.slug)
        ? services.filter((item) => roofClusterSlugs.includes(item.slug) && item.slug !== page.slug)
        : services.filter((item) => item.slug !== page.slug).slice(0, 4))
    : (page as AreaPage).serviceSlugs.map((serviceSlug) => services.find((item) => item.slug === serviceSlug)).filter((item): item is ServicePage => Boolean(item));
  const relatedAreas = isService
    ? areas
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
              <h2>{isService ? serviceDepth?.decisionHeading ?? "A quote needs the real scope, not a guessed material." : localEditorial?.decisionHeading ?? `Asbestos work across ${page.navTitle}.`}</h2>
            </div>
            <div className="prose">
              <p>{isService ? (page as ServicePage).intro : (page as AreaPage).local}</p>
              {isService && serviceDepth && <p>{serviceDepth.decisionIntro}</p>}
              {!isService && localEditorial && <p>{localEditorial.decisionIntro}</p>}
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
                  width={(page as ServicePage).image!.width}
                  height={(page as ServicePage).image!.height}
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
              {localEditorial && (
                <section className="area-editorial" aria-label={`${page.navTitle} asbestos removal buyer guide`}>
                  {localEditorial.sections.map((section, index) => (
                    <article className={`area-editorial-block area-editorial-block-${index + 1}`} key={section.heading}>
                      <p className="eyebrow">{section.eyebrow}</p>
                      <h2>{section.heading}</h2>
                      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </article>
                  ))}
                </section>
              )}
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
                <p className="eyebrow">Choose the route that fits this job</p>
                <h2>Useful asbestos services for buyers in {page.navTitle}.</h2>
              </div>
              <div className="local-service-grid">
                {localEditorial?.serviceAngles.map((item) => (
                  <Link href={`/${item.slug}`} key={item.slug}>
                    <h3>{item.heading}</h3>
                    <p>{item.copy}</p>
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
          <section className="section service-depth-section">
            <div className="shell">
              {serviceDepth && (
                <div className="area-editorial" aria-label={`${page.navTitle} buyer guide`}>
                  {serviceDepth.sections.map((section, index) => (
                    <article className={`area-editorial-block area-editorial-block-${index + 1}`} key={section.heading}>
                      <p className="eyebrow">{section.eyebrow}</p>
                      <h2>{section.heading}</h2>
                      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </article>
                  ))}
                </div>
              )}
              <div className="two-col service-context-grid">
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
            {isService && (
              <>
                <div className="section-heading centered-heading"><p className="eyebrow">Keep moving</p><h2>Related asbestos services</h2></div>
                <div className="related-grid">
                  {relatedServices.map((item) => <Link key={item.slug} href={`/${item.slug}`}><b>{item.navTitle}</b><span>{item.summary}</span><em>View service →</em></Link>)}
                </div>
              </>
            )}
            <div className="section-heading second-related centered-heading">
              <p className="eyebrow">{isService ? "Where we cover" : "Nearby coverage"}</p>
              <h2>{isService ? `${page.navTitle} across Teesside and nearby areas` : "Other local areas we cover"}</h2>
              {isService && <p className="coverage-intro">We cover this service across Middlesbrough, Stockton-on-Tees, Thornaby, Billingham, Redcar, Yarm, Ingleby Barwick, Guisborough, Eston, Hartlepool, Darlington and nearby parts of County Durham. Choose the nearest area page for useful local detail including districts, streets, roads, landmarks, industrial estates and business parks.</p>}
            </div>
            <div className={`related-grid ${isService ? "coverage-grid" : ""}`}>
              {relatedAreas.map((item) => <Link key={item.slug} href={`/${item.slug}`}><b>{isService ? `${page.navTitle} in ${item.navTitle}` : item.navTitle}</b>{isService && <span>{item.summary}</span>}<em>View local page →</em></Link>)}
            </div>
            {isService && <p className="hub-return coverage-hub-link"><Link href="/areas">See the full asbestos removal areas we cover →</Link></p>}
          </div>
        </section>

        <section className="section quote-section" id="quote">
          <div className="shell quote-layout">
            <div className="quote-copy">
              <p className="eyebrow light">Free quotation</p>
              <h2>{!isService && localEditorial ? localEditorial.quoteHeading : serviceDepth?.quoteHeading ?? "Send the job details you already have."}</h2>
              <p>{!isService && localEditorial ? localEditorial.quoteCopy : serviceDepth?.quoteCopy ?? "Survey or no survey, tell us the location, material or suspected material, approximate amount and project timing."}</p>
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
