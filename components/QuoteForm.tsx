"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site-data";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    try {
      const response = await fetch(site.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="quote-form" onSubmit={submit} encType="multipart/form-data">
      <input type="hidden" name="_subject" value="New Middlesbrough & Teesside asbestos enquiry" />
      <div className="field span-2">
        <label htmlFor="work">What asbestos work do you need help with?</label>
        <textarea id="work" name="message" rows={5} required placeholder="What has been found, where it is, approximate amount and what work is waiting..." />
      </div>
      <div className="field">
        <label htmlFor="location">Property postcode or area</label>
        <input id="location" name="location" required placeholder="e.g. TS5 or Stockton-on-Tees" />
      </div>
      <div className="field">
        <label htmlFor="timing">When do you need it done?</label>
        <input id="timing" name="timing" placeholder="Date or project deadline" />
      </div>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="file">Survey page or photos (optional)</label>
        <input id="file" name="attachment" type="file" accept=".pdf,.jpg,.jpeg,.png,.webp" />
      </div>
      <label className="consent span-2">
        <input name="privacy_consent" type="checkbox" value="yes" required />
        <span>I agree that my details can be used to reply to this enquiry. <Link href="/privacy">Privacy notice</Link>.</span>
      </label>
      <button className="submit-button span-2" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Free quote"}
      </button>
      <div className="form-status span-2" aria-live="polite">
        {status === "sent" && <p className="success">Thank you. Your Teesside asbestos enquiry has been sent.</p>}
        {status === "error" && <p className="error">The form did not send. Please call <a href={`tel:${site.phoneHref}`}>{site.phone}</a>.</p>}
      </div>
    </form>
  );
}
