import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";
import { media } from "@/lib/media";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A to F Fixers | Home & Business Repairs in Cape Town" },
      {
        name: "description",
        content: "Roofing, painting, building, waterproofing and home repairs from A to F Fixers in Cape Town.",
      },
      { property: "og:title", content: "A to F Fixers | Home & Business Repairs in Cape Town" },
      {
        property: "og:description",
        content: "Roofing, painting, building, waterproofing and home repairs from A to F Fixers in Cape Town.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: media.tiledRoof },
      { name: "twitter:image", content: media.tiledRoof },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <section className="site-container home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Cape Town · Home &amp; business fixes</p>
          <h1 className="hero-title">
            Your home deserves <em>the best.</em>
          </h1>
          <p className="hero-description">
            From a fresh coat of paint to a roof that needs attention, A to F Fixers brings the
            right hands to the work.
          </p>
        </div>
        <div className="hero-media">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            poster={media.tiledRoof}
            aria-label="A to F Fixers carrying out home repair work"
          >
            <source src={media.heroVideo} type="video/mp4" />
            Your browser does not support the video.
          </video>
          <span className="hero-media-label">A to F Fixers · On the job</span>
        </div>
        <div>
          <div className="hero-actions">
            <Button asChild className="site-button">
              <a href="tel:+27826046918">
                Let’s talk about it <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild className="site-button" variant="outline">
              <a href="/services">See our services</a>
            </Button>
          </div>
          <p className="hero-service-note">Roofing · Painting · Building · And the in-between</p>
        </div>
      </section>

      <section className="service-band">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">One helpful team</p>
              <h2 className="section-title">From roof to <em>room.</em></h2>
            </div>
            <p className="section-copy">
              Small fixes or bigger home improvements—find the work you need, all in one place.
            </p>
          </div>
          <div className="service-chips">
            {services.map((service) => (
              <a className="service-chip" href="/services" key={service.name}>
                {service.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container work-preview">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">A closer look</p>
            <h2 className="section-title">Work that speaks <em>for itself.</em></h2>
          </div>
          <a className="text-link" href="/projects">
            View all projects <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="preview-grid">
          <article className="preview-item">
            <img src={media.roofRenewal} alt="Roof structure during a home roof renovation" />
            <div className="preview-item-copy">
              <p>Roofing</p>
              <h3>Built with care, from the frame up.</h3>
            </div>
          </article>
          <article className="preview-item">
            <img src={media.plastering} alt="A plasterer smoothing a white interior wall" />
            <div className="preview-item-copy">
              <p>Plastering</p>
              <h3>A clean finish starts with a smooth surface.</h3>
            </div>
          </article>
        </div>
      </section>

      <section className="home-cta-band">
        <div className="site-container home-cta-inner">
          <h2>Something at home needs fixing?</h2>
          <Button asChild className="site-button">
            <a href="/contact">Get in touch <ArrowRight aria-hidden="true" /></a>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
