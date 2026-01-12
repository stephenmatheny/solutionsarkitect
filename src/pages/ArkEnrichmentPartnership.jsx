import { IconArrowRight, IconCheck, IconHandshake, IconUsersGroup } from "@tabler/icons-react";

function Section({ title, subtitle, kicker, children }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4">
        {kicker ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {kicker}
          </p>
        ) : null}
        {title ? (
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
            {subtitle ? (
              <p className="max-w-3xl text-sm text-slate-200/90 sm:text-base">{subtitle}</p>
            ) : null}
          </div>
        ) : null}
        <div className="mt-2">{children}</div>
      </div>
    </section>
  );
}

function CTAButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 sm:w-auto"
    >
      {children}
      <IconArrowRight size={16} />
    </a>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200/30 bg-white/5 p-5 shadow-sm backdrop-blur">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-slate-100/90">{children}</div>
    </div>
  );
}

function ImageCard({ src, alt, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm aspect-[4/3] ${className}`}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

const partnershipIdeal = [
  "Churches",
  "Schools and districts",
  "Homeschool organizations",
  "Community centers",
  "Nonprofits focused on youth development",
];

const partnershipModels = [
  "Hosting Ark Enrichment classes",
  "Referring students in need",
  "Co-sponsoring student seats",
  "Providing space or resources",
  "Educational collaboration or events",
];

export default function AcademyPartnership() {
  return (
    <div className="text-slate-100">
      <Section kicker="Ark Enrichment" title="Partnership Opportunities">
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="max-w-3xl text-sm text-slate-200/90">
              We actively partner with organizations that share our mission to serve students through meaningful math
              enrichment.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                <IconHandshake size={14} />
                Partner with us
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                <IconUsersGroup size={14} />
                Community aligned
              </span>
            </div>
            <CTAButton href="/contact">Request Partnership Info</CTAButton>
          </div>
          <ImageCard
            src="/images/ark-enrichment-partnership.jpg"
            alt="Community organization partnering to host enrichment"
            className="h-full"
          />
        </div>
      </Section>

      <Section title="Partnership Opportunities">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Ideal Partners Include:">
            <ul className="space-y-2 text-sm">
              {partnershipIdeal.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <IconCheck size={16} className="mt-0.5 text-slate-100" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Partnership Models:">
            <ul className="space-y-2 text-sm">
              {partnershipModels.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <IconCheck size={16} className="mt-0.5 text-slate-100" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm">
              Interested in partnering? Let’s talk about how Ark Enrichment can serve your community.
            </div>
            <CTAButton href="/contact">Request Partnership Info</CTAButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
