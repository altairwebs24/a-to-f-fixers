import { createFileRoute } from "@tanstack/react-router";

import { SiteShell } from "@/components/site-shell";
import { media } from "@/lib/media";

const projects = [
  {
    category: "Roofing",
    title: "A roof renewal in progress",
    image: media.roofRenewal,
    alt: "Timber roof framing during a home renovation",
  },
  {
    category: "Roofing",
    title: "A fresh finish overhead",
    image: media.tiledRoof,
    alt: "A completed grey tile roof beneath a Cape Town sky",
  },
  {
    category: "Roofing detail",
    title: "Finishing the roof edge",
    image: media.roofMetal,
    alt: "A roofer fitting a blue metal roof edge",
  },
  {
    category: "Exterior repairs",
    title: "Careful work around the home",
    image: media.exteriorRepair,
    alt: "Two tradespeople repairing an exterior wall beside a row of windows",
  },
  {
    category: "Plastering",
    title: "Smoothing the surface",
    image: media.plastering,
    alt: "A gloved hand smoothing plaster on an interior wall",
  },
  {
    category: "Painting",
    title: "A clean coat of paint",
    image: media.painting,
    alt: "A painter applying a fresh coat to a white wall",
  },
  {
    category: "A to F Fixers",
    title: "A quick look at our services",
    image: media.servicesPoster,
    alt: "A to F Fixers service overview and contact information",
    contained: true,
  },
  {
    category: "Cape Town",
    title: "Find us and get in touch",
    image: media.businessProfile,
    alt: "A to F Fixers business profile with Cape Town contact information",
    contained: true,
  },
] as const;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Repair & Roofing Projects | A to F Fixers" },
      {
        name: "description",
        content: "A closer look at roofing, plastering, painting and repair work from A to F Fixers in Cape Town.",
      },
      { property: "og:title", content: "Repair & Roofing Projects | A to F Fixers" },
      {
        property: "og:description",
        content: "A closer look at roofing, plastering, painting and repair work from A to F Fixers in Cape Town.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: media.roofRenewal },
      { name: "twitter:image", content: media.roofRenewal },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteShell>
      <section className="site-container projects-intro">
        <p className="eyebrow">On site · In the details · Cape Town</p>
        <h1 className="page-title">A look at the <em>work.</em></h1>
        <p className="page-lede">
          Roofs, repairs and finishing work—plus a few ways to get to know A to F Fixers.
        </p>
      </section>

      <section aria-label="A to F Fixers projects and media" className="site-container projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div
              className={
                "contained" in project && project.contained
                  ? "project-media project-media-contained"
                  : "project-media"
              }
            >
              <img src={project.image} alt={project.alt} loading="lazy" />
            </div>
            <div className="project-copy">
              <p>{project.category}</p>
              <h2>{project.title}</h2>
            </div>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}