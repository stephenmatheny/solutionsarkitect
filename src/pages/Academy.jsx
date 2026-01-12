import {
  IconArrowRight,
  IconCheck,
  IconHeartHandshake,
  IconSchool,
  IconUsers,
  IconBulb,
  IconTargetArrow,
  IconQuote,
  IconListNumbers,
  IconChartDots,
  IconAffiliate,
  IconRibbonHealth,
  IconShieldCheck,
  IconHandStop,
  IconSparkles,
} from "@tabler/icons-react";

/** ---------- small UI primitives ---------- */

function Section({ title, subtitle, children, kicker, icon: Icon }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4">
        {kicker ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {kicker}
          </p>
        ) : null}

        {title ? (
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              {Icon ? (
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100">
                  <Icon size={18} />
                </span>
              ) : null}
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {title}
              </h2>
            </div>

            {subtitle ? (
              <p className="max-w-3xl text-sm text-slate-200/90 sm:text-base">
                {subtitle}
              </p>
            ) : null}
          </div>
        ) : null}

        <div className="mt-2">{children}</div>
      </div>
    </section>
  );
}

function CTAButton({ href, children, variant = "primary", className = "" }) {
  const base =
    "inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:w-auto";
  const styles =
    variant === "primary"
      ? "bg-slate-100 text-slate-900 hover:bg-white"
      : "border border-slate-200/40 bg-white/5 text-slate-100 hover:bg-white/10";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <IconArrowRight size={16} />
    </a>
  );
}

function Card({ title, icon: Icon, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur sm:p-6">
      {title ? (
        <div className="flex items-center gap-2">
          {Icon ? <Icon size={18} className="text-slate-100/90" /> : null}
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
      ) : null}
      <div className={`${title ? "mt-3" : ""} text-sm leading-6 text-slate-100/90`}>
        {children}
      </div>
    </div>
  );
}

function Pill({ icon: Icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white">
      {Icon ? <Icon size={14} /> : null}
      {children}
    </div>
  );
}

function CheckList({ items }) {
  return (
    <ul className="space-y-2 text-sm">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <IconCheck size={16} className="mt-0.5 text-slate-100/90" />
          <span className="text-slate-100/90">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DotList({ items }) {
  return (
    <ul className="space-y-2 text-sm">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
          <span className="text-slate-100/90">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ImageCard({ src, alt, className = "", withAspect = true, aspect = "aspect-[16/10]" }) {
  const aspectClass = withAspect ? aspect : "";
  return (
    <div
      className={`overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm ${aspectClass} ${className}`}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

/** ---------- content ---------- */

const focusItems = [
  "Conceptual understanding",
  "Number sense and reasoning",
  "Confidence in problem-solving",
  "Closing gaps without stigma",
  "Preparing students for advanced math and real-world thinking",
];

const audienceCards = [
  {
    title: "Students",
    icon: IconUsers,
    bullets: [
      "Students who feel behind and want confidence",
      "Students who want to get ahead or be challenged",
      "Homeschool, private school, public school, and adult learners",
      "Students preparing for Algebra I, Geometry, Algebra II, or beyond",
    ],
  },
  {
    title: "Parents",
    icon: IconHeartHandshake,
    bullets: [
      "Parents frustrated with homework battles",
      "Families wanting more than worksheets and test prep",
      "Parents looking for small-group, high-impact instruction",
    ],
  },
  {
    title: "Schools & Organizations",
    icon: IconSchool,
    bullets: [
      "Schools seeking enrichment partnerships",
      "Churches hosting education initiatives",
      "Community organizations investing in local students",
    ],
  },
];

const differenceList = [
  "Skill-based grouping, not grade-based",
  "Small groups & individual attention",
  "Focus on “why,” not just “how”",
  "Real dialogue, not passive worksheets",
  "Built and taught by an experienced educator & software engineer",
];

const programSteps = [
  "Guided instruction (concept introduction & modeling)",
  "Student reasoning & discussion",
  "Independent and partner practice",
  "Reflection & explanation (verbal + written)",
];

const focusAreas = [
  "Number sense & mental math",
  "Fractions, decimals, and ratios",
  "Algebraic thinking & equations",
  "Graphing and visual reasoning",
  "Multi-step problem solving",
  "Mathematical communication (explaining thinking)",
];

const communityMeans = [
  "We actively seek sponsors to support families",
  "We partner with organizations aligned with student success",
  "We reinvest support directly into instruction and access",
];

const engageWays = [
  "Enroll a student",
  "Refer a family",
  "Host a class",
  "Become a sponsor",
  "Partner with us",
];

/** ---------- page ---------- */

export default function Academy() {
  return (
    // Transparent wrapper: inherits background from parent layout
    <div className="text-slate-100">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="order-1 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Ark Enrichment Academy
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Real Math. Real Confidence. Real Opportunity.
          </h1>

          <p className="max-w-2xl text-base leading-7 text-slate-200">
            Ark Enrichment Academy is a math enrichment program designed to help students understand math deeply,
            not just memorize steps. We serve students who want more challenge, more clarity, or a different
            approach than traditional classrooms can offer.
          </p>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <CTAButton href="https://forms.gle/bxhFtNBQPT6uR2Cj9">Enroll a Student</CTAButton>
            <CTAButton href="mailto:stephen@solutionsarkitect.com" variant="secondary">
              Contact Us
            </CTAButton>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <Pill icon={IconHeartHandshake}>Built by educators</Pill>
            <Pill icon={IconUsers}>Supported by the community</Pill>
            <Pill icon={IconSchool}>Focused on students</Pill>
          </div>
        </div>

          <div className="order-2">
            <ImageCard
              src="/images/ark-enrichment-hero.jpg"
              alt="Students collaborating during Ark Enrichment math session"
              aspect="aspect-[16/11] sm:aspect-[16/10]"
            />
          </div>
        </div>
      </section>

      {/* WHAT IS */}
      <Section title="What Is Ark Enrichment Academy?" icon={IconBulb}>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur sm:p-6">
            <p className="text-sm leading-7 text-slate-200">
              Ark Enrichment Academy is an in-person math enrichment program serving upper elementary, middle school,
              high school, and adult learners.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-200">
              We exist to help students make sense of math — not rush through it, not memorize steps,
              and not feel labeled or left behind.
            </p>

            <p className="mt-4 text-sm font-semibold text-white">
              Our goal is confidence, clarity, and long-term understanding.
            </p>

            <div className="mt-4 hidden sm:block">
              <CheckList items={focusItems} />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur sm:p-6">
            <div className="flex items-center gap-2">
              <IconHeartHandshake size={18} className="text-slate-100/90" />
              <h3 className="text-lg font-semibold text-white">What Families Can Expect</h3>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-slate-100/90">
              <li className="flex items-start gap-2">
                <IconCheck size={16} className="mt-0.5 text-slate-100/90" />
                <span>Students learn the “why,” not just the steps</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck size={16} className="mt-0.5 text-slate-100/90" />
                <span>Small-group instruction that meets students where they are</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck size={16} className="mt-0.5 text-slate-100/90" />
                <span>A confidence-first approach without stigma</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>



      {/* QUOTE */}
      <Section icon={IconQuote}>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-sm backdrop-blur">
          <p className="text-lg font-semibold text-white">“I’m just not a math person.”</p>
          <p className="mt-2 text-sm text-slate-200">
            We believe that’s not true—and we prove it every day.
          </p>
        </div>
      </Section>

      {/* WHO FOR */}
      <Section title="Who Ark Enrichment Academy Is For" icon={IconUsers}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audienceCards.map((card) => (
            <Card key={card.title} title={card.title} icon={card.icon}>
              <DotList items={card.bullets} />
            </Card>
          ))}
        </div>
      </Section>

      {/* DIFFERENT */}
      <Section title="How Ark Enrichment Academy Is Different" icon={IconSparkles}>
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <Card title="What We Do" icon={IconCheck}>
            <CheckList items={differenceList} />
          </Card>

          <Card title="What We Don’t" icon={IconHandStop}>
            <div className="space-y-1 text-sm text-slate-100/90">
              <p>We don’t rush.</p>
              <p>We don’t shame.</p>
              <p>We don’t teach math like a checklist.</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* STRUCTURE */}
      <Section title="Program Structure (High-Level)" icon={IconListNumbers}>
        <div className="grid gap-6 lg:grid-cols-2">
          <ImageCard
            src="/images/ark-enrichment-session.jpg"
            alt="Small-group math session with discussion and whiteboard work"
            aspect="aspect-[16/11] sm:aspect-[16/10]"
            className="order-1 lg:order-2"
          />

          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur order-2 lg:order-1 sm:p-6">
            <p className="text-sm text-slate-200">
              While classes adapt to student needs, a typical enrichment session includes:
            </p>

            <ol className="mt-4 space-y-3 text-sm text-slate-100/90">
              {programSteps.map((step, idx) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100 shadow-sm backdrop-blur">
              <div className="flex items-center gap-2">
                <IconTargetArrow size={18} className="text-slate-100/90" />
                <h3 className="text-lg font-semibold text-white">Instruction Note</h3>
              </div>
              <p className="mt-2 text-slate-100/90">
                Instruction is adjusted continuously based on how students think—not just how fast they finish.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* AREAS */}
      <Section title="Areas of Focus" icon={IconChartDots}>
        <div className="flex flex-wrap gap-3">
          {focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-100/90"
            >
              {area}
            </span>
          ))}
        </div>
      </Section>

      {/* PHILOSOPHY */}
      <Section title="Our Philosophy" icon={IconBulb}>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-sm backdrop-blur">
          <p className="text-xl font-semibold text-white">
            Math is not about speed. <br className="hidden sm:block" />
            Math is about sense-making.
          </p>
          <p className="text-sm text-slate-200">
            Ark Enrichment Academy exists to restore confidence, curiosity, and joy in learning—especially for students who have
            been told they “aren’t good at math.”
          </p>
        </div>
      </Section>

      {/* COMMUNITY */}
      <Section title="Community-Driven by Design" icon={IconAffiliate}>
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <Card title="Our Nonprofit Approach" icon={IconHeartHandshake}>
            <p>
              Ark Enrichment Academy operates under Solutions Arkitect, a nonprofit organization committed to removing barriers
              to education through innovation, technology, and partnerships.
            </p>

            <div className="mt-4">
              <p className="text-sm font-semibold text-white">That means:</p>
              <div className="mt-2">
                <CheckList items={communityMeans} />
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <Card title="Partnership Mindset" icon={IconSchool}>
              <p>
                We actively partner with organizations that share our mission. Let’s talk about how Ark Enrichment Academy can
                serve your community.
              </p>
            </Card>
          </div>
        </div>
      </Section>

{/* TODO: Add these sections later */}
      {/* <Section title="Partnership Opportunities" icon={IconSchool}>
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-3">
            <p className="text-sm text-slate-200">
              We partner with organizations that share our mission to serve students through meaningful math enrichment.
            </p>
            <CheckList items={partnershipTeaser} />
          </div>

          <Card title="Explore the full partnership options" icon={IconHeartHandshake}>
            <p className="text-sm text-slate-200">
              See ideal partners, models, and how we collaborate to reach more students.
            </p>
            <div className="mt-3">
              <CTAButton href="/ark-enrichment/partnership">Request Partnership Info</CTAButton>
            </div>
          </Card>
        </div>
      </Section>

      <Section title="Sponsorship Opportunities" icon={IconRibbonHealth}>
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-3">
            <p className="text-sm text-slate-200">
              Sponsorship removes financial barriers so students can access Ark Enrichment.
            </p>
            <CheckList items={sponsorshipTeaser} />
          </div>

          <Card title="Support students directly" icon={IconShieldCheck}>
            <p className="text-sm text-slate-200">
              Learn how sponsorship works, how funds are stewarded, and the options available.
            </p>
            <div className="mt-3">
              <CTAButton href="/ark-enrichment/sponsor">Become a Sponsor</CTAButton>
            </div>
          </Card>
        </div>
      </Section> */}

      {/* GET INVOLVED */}
      <Section title="Get Involved" icon={IconHeartHandshake}>
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <Card title="Ways to Engage" icon={IconUsers}>
            <CheckList items={engageWays} />
          </Card>

          <Card title="Student-First" icon={IconTargetArrow}>
            <p className="text-sm text-slate-200">
              Whether you’re a parent, partner, or sponsor—there’s a place for you here.
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA BAND */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-md backdrop-blur">
          <h3 className="text-xl font-semibold text-white">Ready to take the next step?</h3>
          <p className="mt-2 text-sm text-slate-200">
            Choose the path that fits your role. We’ll follow up with details.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <CTAButton href="https://forms.gle/bxhFtNBQPT6uR2Cj9">Enroll a Student</CTAButton>
            {/* <CTAButton href="/ark-enrichment/partnership" variant="secondary">
              Request Partnership Info
            </CTAButton> */}
            {/* <CTAButton href="/ark-enrichment/sponsor" variant="secondary">
              Become a Sponsor
            </CTAButton> */}
            <CTAButton href="mailto:stephen@solutionsarkitect.com" variant="secondary">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>

      {/* FOOTER LINE */}
      <Section>
        <div className="text-center text-sm text-slate-300">
          Ark Enrichment Academy is a program of Solutions Arkitect, a nonprofit organization dedicated to empowering students
          through education, innovation, and community partnership.
        </div>
      </Section>
    </div>
  );
}
