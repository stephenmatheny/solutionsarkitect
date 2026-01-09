import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import {
  IconArrowRight,
  IconBolt,
  IconChess,
  IconClipboardList,
  IconDeviceLaptop,
  IconMathSymbols,
  IconPhoneCall,
  IconTools,
  IconWorld,
} from "@tabler/icons-react";
import { offerings, steps } from "../data/home.js";

function Card({ icon, title, desc, to }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
          {/* {to ? (
            <Link
              to={to}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-900 underline-offset-4 hover:underline"
            >
              Learn more <IconArrowRight size={16} />
            </Link>
          ) : null} */}
        </div>
      </div>
    </div>
  );
}

const iconMap = {
  math: <IconMathSymbols size={22} />,
  chess: <IconChess size={22} />,
  software: <IconDeviceLaptop size={22} />,
  web: <IconWorld size={22} />,
  automation: <IconBolt size={22} />,
};

export default function Home() {
  return (
    <>
      <Section kicker="Solutions Arkitect" title="Math enrichment and community events that build confident thinkers.">
        <div className="max-w-3xl text-slate-600">
          We’re focused on two things: <span className="font-medium text-slate-900">Ark Enrichment Academy</span> and
          community-building events like <span className="font-medium text-slate-900">chess club</span>. We also build software
          and websites that keep these opportunities running.
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Nonprofit mission
              </div>
              <div className="mt-1 text-lg font-semibold text-slate-900">
                A nonprofit built for students and community.
              </div>
              <p className="mt-2 text-sm text-slate-700">
                Solutions Arkitect is a nonprofit organization. We run math enrichment and community events (like chess club),
                and we build software/websites to help support free and reduced-cost opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item) => (
            <Card
              key={item.title}
              icon={iconMap[item.icon]}
              title={item.title}
              desc={item.desc}
              to={item.to}
            />
          ))}
        </div>
      </Section>

      <Section kicker="How it works" title="Simple, supportive steps.">
        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                {step.title === "Connect" && <IconPhoneCall size={16} />}
                {step.title === "Plan" && <IconClipboardList size={16} />}
                {step.title === "Build & Support" && <IconTools size={16} />}
                <span>{step.title}</span>
              </div>
              <p className="mt-2 text-sm text-slate-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Join in" title="Bring students, families, and teams together.">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-slate-700">
              Want a website or software help?{" "}
              <Link to="/contact" className="font-medium text-slate-900 underline-offset-4 hover:underline">
                Contact us
              </Link>.
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/lufkin-chess"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Join Lufkin Chess Club
              </Link>
              <Link
                to="/academy"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Explore Ark Enrichment Academy
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
