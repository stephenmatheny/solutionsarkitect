import Section from "../components/Section.jsx";
import { Link } from "react-router-dom";
import { IconChess, IconMapPin, IconCalendarEvent, IconInfoCircle } from "@tabler/icons-react";

function Info({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
      <div className="mt-0.5 rounded-lg border border-slate-200 bg-slate-50 p-2">{icon}</div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</div>
        <div className="mt-1 text-sm text-slate-900">{value}</div>
      </div>
    </div>
  );
}

export default function LufkinChess() {
  return (
    <Section kicker="Community Event" title="Lufkin Chess Club">
      <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-3">
          <IconChess size={26} />
        </div>
        <div className="min-w-0">
          <p className="text-slate-700">
            A welcoming chess club for students, families, and anyone who wants to learn or improve.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Important: this page is intentionally located at <span className="font-mono">/lufkin-chess</span>.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Info icon={<IconCalendarEvent size={18} />} label="When" value="(Add day/time here)" />
        <Info icon={<IconMapPin size={18} />} label="Where" value="(Add location here)" />
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <IconInfoCircle size={16} />
          What to expect
        </div>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li>• Beginners welcome — we’ll teach you.</li>
          <li>• Friendly games + optional coaching.</li>
          <li>• Family-friendly atmosphere.</li>
        </ul>
      </div>

      <div className="mt-8">
        <Link
          to="/events"
          className="inline-flex rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
        >
          ← Back to events
        </Link>
      </div>
    </Section>
  );
}
