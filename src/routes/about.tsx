import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";
import { media } from "@/lib/media";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About A to F Fixers | Cape Town Repair Team" },
      {
        name: "description",
        content: "Meet A to F Fixers, a Cape Town team for roofing, repairs and practical home improvements.",
      },
      { property: "og:title", content: "About A to F Fixers | Cape Town Repair Team" },
      {
        property: "og:description",
        content: "Meet A to F Fixers, a Cape Town team for roofing, repairs and practical home improvements.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: media.roofMetal },
      { name: "twitter:image", content: media.roofMetal },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <section className="site-container page-intro">
        <div>
          <p className="eyebrow">A to F Fixers · Cape Town</p>
          <h1 className="page-title">Big jobs. Small <em>fixes.</em></h1>
          <p className="page-lede">
            We help keep homes and workspaces in good shape, with a practical range of repairs and
            improvements under one roof.
          </p>
        </div>
        <div className="page-image-frame">
          <img src={media.roofMetal} alt="A roofer fitting a blue metal roof edge" />
        </div>
      </section>

      <section className="content-band">
        <div className="site-container content-band-inner">
          <h2>Good work is in the details.</h2>
          <div className="content-band-copy">
            <p>
              From roofing and waterproofing to painting, plastering and tiling, A to F Fixers
              takes on the jobs that help a place feel looked after.
            </p>
            <p>
              Tell us what needs attention, and we’ll talk through the work and a sensible next
              step. Whether it’s one repair or a longer list, the goal is a finish you can feel
              good about.
            </p>
            <Button asChild className="site-button">
              <Link to="/services">
                See what we do <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="site-container page-cta">
        <p className="eyebrow">Based in Cape Town</p>
        <h2 className="section-title">Let’s make your place feel <em>right.</em></h2>
        <p className="section-copy">Share what’s on your repair list and start a conversation.</p>
        <Button asChild className="site-button">
          <Link to="/contact">Contact A to F Fixers <ArrowRight aria-hidden="true" /></Link>
        </Button>
      </section>
    </SiteShell>
  );
}