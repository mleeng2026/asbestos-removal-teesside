import Link from "next/link";
import { site } from "@/lib/site-data";

export function Header() {
  return (
    <>
      <div className="topline">
        <div className="shell topline-inner">
          <span>Middlesbrough & the whole Teesside area</span>
          <a href={`tel:${site.phoneHref}`}>Call {site.phone}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="shell header-inner">
          <Link className="brand" href="/" aria-label="Asbestos Removal Middlesbrough Teesside home">
            <span className="brand-mark" aria-hidden="true">A</span>
            <span><b>Asbestos Removal</b><small>Middlesbrough · Teesside</small></span>
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/services">Services</Link>
            <Link href="/areas">Areas</Link>
            <Link href="/#questions">Questions</Link>
            <Link href="/#quote">Free quote</Link>
          </nav>
          <a className="header-call" href={`tel:${site.phoneHref}`}>01642 921035</a>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-kicker">Asbestos Removal Middlesbrough Teesside</p>
          <h2>Tell us what has been found and what needs to happen next.</h2>
          <a className="footer-phone" href={`tel:${site.phoneHref}`}>{site.phone}</a>
        </div>
        <div>
          <h3>Core services</h3>
          <Link href="/services">All asbestos services</Link>
          <Link href="/asbestos-removal-middlesbrough-teesside">Asbestos removal</Link>
          <Link href="/asbestos-surveys-testing-middlesbrough-teesside">Surveys & testing</Link>
          <Link href="/asbestos-artex-removal-middlesbrough-teesside">Artex removal</Link>
          <Link href="/asbestos-roof-removal-middlesbrough-teesside">Roof removal</Link>
          <Link href="/asbestos-pipe-insulation-removal-middlesbrough-teesside">Pipe insulation removal</Link>
        </div>
        <div>
          <h3>Main areas</h3>
          <Link href="/areas">All coverage areas</Link>
          <Link href="/asbestos-removal-middlesbrough">Middlesbrough</Link>
          <Link href="/asbestos-removal-stockton-on-tees">Stockton-on-Tees</Link>
          <Link href="/asbestos-removal-redcar">Redcar & Cleveland</Link>
          <Link href="/asbestos-removal-billingham">Billingham</Link>
        </div>
      </div>
      <div className="shell footer-base">
        <span>15+ years’ experience · Domestic & commercial enquiries</span>
        <span>Serving Middlesbrough, Teesside & nearby North East areas · <Link href="/privacy">Privacy</Link></span>
      </div>
    </footer>
  );
}

export function CallBand() {
  return (
    <aside className="call-band" aria-label="Asbestos removal quote">
      <div>
        <span>Have a survey, photos or just a suspected material?</span>
        <strong>Start with what you know.</strong>
      </div>
      <a href={`tel:${site.phoneHref}`}>Call {site.phone}</a>
      <Link href="/#quote">Free quote</Link>
    </aside>
  );
}
