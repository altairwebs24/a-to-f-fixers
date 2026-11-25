import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Home & Business Repair Services | A to F Fixers" },
      {
        name: "description",
        content: "Skimming, building, waterproofing, roofing, painting, plumbing, carpentry, tiling and plastering in Cape Town.",
      },
      { property: "og:title", content: "Home & Business Repair Services | A to F Fixers" },
      {
        property: "og:description",
        content: "Skimming, building, waterproofing, roofing, painting, plumbing, carpentry, tiling and plastering in Cape Town.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteShell>
      <section className="site-container services-intro">
        <p className="eyebrow">One team · Plenty of ways to help</p>
        <h1 className="page-title">A fix for every <em>corner.</em></h1>
        <p className="page-lede">
          From the roof overhead to the finishing touches indoors, find the work you need below.
        </p>
      </section>

      <section aria-label="A to F Fixers services" className="site-container services-list">
        {services.map((service, index) => (
          <article className="service-entry" key={service.name}>
            <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="service-band">
        <div className="site-container home-cta-inner">
          <div>
            <p className="eyebrow">Not sure where to start?</p>
            <h2>Tell us what needs a hand.</h2>
          </div>
          <Button asChild className="site-button">
            <Link to="/contact">Let’s talk <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}