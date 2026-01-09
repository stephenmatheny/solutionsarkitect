import Section from "../components/Section.jsx";
import { Link } from "react-router-dom";
import {
  IconBrandFacebook,
  IconChess,
  IconInfoCircle,
  IconTrophy,
} from "@tabler/icons-react";
import CalendarEvents from "../components/CalendarEvents.jsx";

const API_KEY = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
const CALENDAR_ID = import.meta.env.VITE_GOOGLE_CALENDAR_ID;

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
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-4">
          <div className="w-fit rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <IconChess size={26} />
          </div>
          <div className="min-w-0 space-y-3">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Lufkin & Nacogdoches Chess Club
            </div>
            <p className="text-sm text-slate-700">
              The Lufkin & Nacogdoches Chess Club is a welcoming, competitive chess community for students, families,
              and adults of all skill levels. We host structured games, friendly competition, and opportunities to improve—whether
              you’re brand new to chess or actively working to sharpen your tournament play.
            </p>
            <p className="text-sm text-slate-700">
              We believe competition is a powerful teacher. Through chess, players develop critical thinking, patience, focus,
              and sportsmanship, while learning how to analyze positions, plan ahead, and grow from both wins and losses.
              Beginners are supported, experienced players are challenged, and everyone is encouraged to improve.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
        <a
          href="https://www.facebook.com/LufkinChessClub"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          <IconBrandFacebook size={18} />
          Join us on Facebook
        </a>
        <span className="text-sm text-slate-600">
          Stay connected for updates, announcements, and photos.
        </span>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <IconTrophy size={16} />
          Why chess?
        </div>
        <p className="mt-3 text-sm text-slate-700">
          Chess strengthens problem-solving, logical reasoning, patience, and resilience. It teaches players to think ahead,
          adapt under pressure, and learn from mistakes—skills that carry far beyond the board.
        </p>
      </div>

      <div className="mt-10">
        <div className="mt-4">
          <CalendarEvents
            title="Upcoming Lufkin Chess Club Meetups"
            calendarId={CALENDAR_ID}
            apiKey={API_KEY}
            daysAhead={120}
            maxResults={10}
          />
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <IconInfoCircle size={16} />
          What to expect
        </div>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <span className="text-slate-600">•</span>
            <span>Beginners welcome (we teach fundamentals)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-600">•</span>
            <span>Competitive games (timed or structured play when available)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-600">•</span>
            <span>Coaching/help available (optional)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-600">•</span>
            <span>Sportsmanship & respectful play</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-600">•</span>
            <span>Family-friendly environment</span>
          </li>
        </ul>
      </div>
    </Section>
  );
}
