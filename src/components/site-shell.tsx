import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { media } from "@/lib/media";
import { company, navigation } from "@/lib/site-data";

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-topline">
          <div className="site-container site-topline-inner">
            <span>Cape Town · Home &amp; business fixes</span>
            <a href={company.phoneHref}>{company.phone}</a>
          </div>
        </div>
        <div className="site-container nav-row">
          <Link className="brand-lockup" to="/" aria-label="A to F Fixers home">
            <img className="brand-logo" src={media.logo} alt="A to F Fixers logo" />
            <span className="brand-wordmark">
              <span>A TO F</span>
              <span>FIXERS</span>
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className={menuOpen ? "primary-navigation is-open" : "primary-navigation"}
            id="primary-navigation"
          >
            {navigation.map((item) => (
              <Link
                aria-current={pathname === item.to ? "page" : undefined}
                className={pathname === item.to ? "nav-link nav-link-active" : "nav-link"}
                key={item.to}
                onClick={() => setMenuOpen(false)}
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button asChild className="site-button header-cta">
            <a href={company.phoneHref}>
              <Phone aria-hidden="true" /> Call us
            </a>
          </Button>
          <Button
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            size="icon"
            variant="ghost"
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-cta-band">
          <div className="site-container footer-cta-inner">
            <h2>Ready to get that repair off your list?</h2>
            <Button asChild className="site-button">
              <Link to="/contact">
                Get in touch <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="site-container footer-main">
          <div className="footer-brand">
            <Link className="brand-lockup" to="/" aria-label="A to F Fixers home">
              <img className="brand-logo" src={media.logo} alt="" />
              <span className="brand-wordmark">
                <span>A TO F</span>
                <span>FIXERS</span>
              </span>
            </Link>
            <p>Roofing, repairs and home improvements in Cape Town.</p>
          </div>
          <div>
            <h2 className="footer-heading">Explore</h2>
            <nav aria-label="Footer navigation" className="footer-links">
              {navigation.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="footer-contact">
            <h2 className="footer-heading">Talk to the team</h2>
            <a href={company.phoneHref}>{company.phone}</a>
            <a href={company.whatsappHref}>WhatsApp · {company.whatsapp}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <p>{company.area} · {company.postalCode}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="site-container footer-bottom-inner">
            <span>© {new Date().getFullYear()} A to F Fixers</span>
            <span>Made for the work that makes a house feel like home.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}