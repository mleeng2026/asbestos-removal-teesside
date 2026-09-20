import type { Metadata } from "next";
import { Header, Footer } from "@/components/SiteChrome";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "Privacy information for enquiries sent to Asbestos Removal Middlesbrough Teesside.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="detail-hero privacy-hero">
          <div className="shell">
            <p className="eyebrow light">Your enquiry details</p>
            <h1>Privacy Notice</h1>
            <p className="detail-answer">This notice explains how information sent through this website is used to answer and manage asbestos-service enquiries.</p>
          </div>
        </section>
        <section className="section privacy-content">
          <div className="shell prose-page">
            <h2>Information we collect</h2>
            <p>The quote form can collect your name, telephone number, email address, property location, project timing, job description and any survey pages or photographs you choose to attach.</p>
            <h2>How the information is used</h2>
            <p>The information is used to review your enquiry, contact you, assess what service may be needed, prepare or arrange a quotation and keep a record of relevant project communication.</p>
            <h2>Form processing</h2>
            <p>Website form submissions are processed through Formspree so the enquiry can be delivered. Only send information and files that are relevant to the project. Do not upload identity documents or unrelated confidential records.</p>
            <h2>How long information is kept</h2>
            <p>Enquiry and project information is kept only for as long as it is reasonably needed for communication, quotation, project administration and applicable record-keeping requirements.</p>
            <h2>Your choices</h2>
            <p>You can ask about the information held in relation to your enquiry or request a correction or deletion where applicable. Call <a href={`tel:${site.phoneHref}`}>{site.phone}</a> and identify the enquiry concerned.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
