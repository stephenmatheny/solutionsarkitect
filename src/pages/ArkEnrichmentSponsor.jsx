import { IconArrowRight, IconCheck, IconPigMoney, IconShieldLock } from "@tabler/icons-react";

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

const sponsorshipWhy = [
  "Offer reduced-cost or free seats",
  "Expand access to underserved students",
  "Maintain small class sizes and quality instruction",
  "Keep the program sustainable long-term",
];

const sponsorshipOptions = [
  "Sponsor an individual student",
  "Sponsor a full class or semester",
  "Ongoing monthly support",
  "One-time community investment",
];

const transparencyPoints = [
  "Clear communication with families",
  "Ethical use of sponsorship funds",
  "Student-first decision making",
  "Faith-informed values without pressure or exclusion",
];

export default function AcademySponsor() {
  return (
    <div className="text-slate-100">
      <Section kicker="Ark Enrichment" title="Sponsorship Opportunities">
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="max-w-3xl text-sm text-slate-200/90">
              Sponsorship ensures cost is never the reason a student misses out on meaningful math enrichment.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                <IconPigMoney size={14} />
                Student access
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                <IconShieldLock size={14} />
                Trusted stewardship
              </span>
            </div>
            <CTAButton href="/contact">Become a Sponsor</CTAButton>
          </div>
          <ImageCard
            src="/images/ark-enrichment-sponsor.jpg"
            alt="Supporting student opportunities through sponsorship"
            className="h-full"
          />
        </div>
      </Section>

      <Section title="Sponsorship Opportunities">
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <Card title="Why Sponsorship Matters">
            <p className="text-sm text-slate-100">
              Many families want support—but simply can’t afford enrichment services. Sponsorships allow us to:
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {sponsorshipWhy.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <IconCheck size={16} className="mt-0.5 text-slate-100" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-white">Sponsorship Options:</h4>
              <ul className="mt-2 space-y-2 text-sm">
                {sponsorshipOptions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <IconCheck size={16} className="mt-0.5 text-slate-100" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-3 text-sm text-slate-200">
              Sponsors may be recognized publicly (if desired) and will directly impact students in our community.
            </p>
          </Card>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-100 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Transparency & Trust</h3>
            <ul className="mt-3 space-y-2">
              {transparencyPoints.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <IconCheck size={16} className="mt-0.5 text-slate-100" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <CTAButton href="/contact">Become a Sponsor</CTAButton>
      </Section>
    </div>
  );
}
