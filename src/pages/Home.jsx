import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import { IconArrowRight, IconChess, IconMathSymbols } from "@tabler/icons-react";

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
          <Link
            to={to}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-900 underline-offset-4 hover:underline"
          >
            Learn more <IconArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Section kicker="Solutions Arkitect" title="Math enrichment and community events that build confident thinkers.">
        <div className="max-w-2xl text-slate-600">
          We’re focused on two things: <span className="font-medium text-slate-900">Ark Enrichment Academy</span> and
          community-building events like <span className="font-medium text-slate-900">chess club</span>.
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Card
            icon={<IconMathSymbols size={22} />}
            title="Ark Enrichment Academy"
            desc="Small-group math support that builds understanding, confidence, and consistency."
            to="/academy"
          />
          <Card
            icon={<IconChess size={22} />}
            title="Community Events"
            desc="Chess club and other low-pressure events that grow logic, belonging, and joy."
            to="/events"
          />
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
          QR codes in town? This page stays permanently:
          <span className="ml-2 rounded-lg bg-white px-2 py-1 font-mono text-xs ring-1 ring-slate-200">
            /lufkin-chess
          </span>
        </div>
      </Section>
    </>
  );
}
