import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { SiteShell } from "@/components/site-shell";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact A to F Fixers | Cape Town" },
      {
        name: "description",
        content: "Call, WhatsApp or email A to F Fixers for home and business repair work in Cape Town.",
      },
      { property: "og:title", content: "Contact A to F Fixers | Cape Town" },
      {
        property: "og:description",
        content: "Call, WhatsApp or email A to F Fixers for home and business repair work in Cape Town.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <section className="site-container contact-intro">
        <p className="eyebrow">Cape Town · We’re ready to listen</p>
        <h1 className="page-title">Let’s get your <em>to-do list</em> moving.</h1>
        <p className="page-lede">
          Tell us what needs attention. Call, message or email the team to start a conversation.
        </p>
      </section>

      <section className="site-container contact-layout">
        <div className="contact-list" aria-label="Contact A to F Fixers">
          <a className="contact-method" href={company.phoneHref}>
            <span>
              <span className="contact-method-label">Call the team</span>
              <span className="contact-method-value">{company.phone}</span>
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a className="contact-method" href={company.whatsappHref} rel="noreferrer" target="_blank">
            <span>
              <span className="contact-method-label">WhatsApp</span>
              <span className="contact-method-value">{company.whatsapp}</span>
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a className="contact-method" href={`mailto:${company.email}`}>
            <span>
              <span className="contact-method-label">Email</span>
              <span className="contact-method-value">{company.email}</span>
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <aside className="contact-details">
          <div className="contact-detail">
            <h2>Where we work</h2>
            <p>{company.area}<br />{company.postalCode}</p>
          </div>
          <div className="contact-detail">
            <h2>Enquiries</h2>
            <p>Always open<br />Reach out when it suits you.</p>
          </div>
          <div className="contact-detail">
            <h2>Have a project in mind?</h2>
            <p>Share a few details and the team can help you figure out a next step.</p>
          </div>
        </aside>
      </section>
    </SiteShell>
  );
}