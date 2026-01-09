import { useEffect, useMemo, useState } from "react";
import DOMPurify from "dompurify";
import {
  IconCalendarEvent,
  IconCalendarPlus,
  IconMapPin,
  IconAlertTriangle,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";
import { downloadICS } from "../utils/ics";
import { mapsUrl } from "../utils/mapsUrl";

function normalizeEventTimes(ev) {
  const start = ev.start?.dateTime || (ev.start?.date ? `${ev.start.date}T00:00:00` : null);
  const end = ev.end?.dateTime || (ev.end?.date ? `${ev.end.date}T00:00:00` : null);
  const isAllDay = Boolean(ev.start?.date);
  return { start, end, isAllDay };
}

function formatWhen(startISO, endISO, isAllDay) {
  if (!startISO) return "Time TBD";

  const start = new Date(startISO);
  const end = endISO ? new Date(endISO) : null;

  const date = start.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (isAllDay) return `${date} • All day`;

  const startTime = start.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });

  if (!end) return `${date} • ${startTime}`;

  const endTime = end.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${date} • ${startTime}–${endTime}`;
}

function sanitizeDescriptionHtml(html) {
  // Allow only safe formatting + links.
  // DOMPurify strips scripts/handlers automatically.
  const clean = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ["a", "br", "b", "strong", "i", "em", "p", "ul", "ol", "li"],
    ALLOWED_ATTR: ["href", "target", "rel"],
  });

  // Ensure all links open in a new tab safely.
  // (DOMPurify can’t add these automatically in sanitize config consistently.)
  return clean.replaceAll(
    "<a ",
    '<a target="_blank" rel="noopener noreferrer" '
  );
}

function EventCard({ ev }) {
  const { start, end, isAllDay } = normalizeEventTimes(ev);
  const when = formatWhen(start, end, isAllDay);

  const hasDetails = Boolean(ev.description && ev.description.trim().length > 0);
  const [openDetails, setOpenDetails] = useState(false);

  const safeHtml = useMemo(() => {
    if (!hasDetails) return "";
    return sanitizeDescriptionHtml(ev.description);
  }, [hasDetails, ev.description]);

  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm transition hover:shadow-md">
      {/* Top row: date/time + add-to-calendar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        {/* Date/time */}
        <div className="min-w-0">
          <div className="flex items-start gap-2">
            <IconCalendarEvent
              size={18}
              className="mt-0.5 shrink-0 text-slate-700"
            />
            <span className="block text-sm font-semibold leading-5 text-slate-900 sm:text-base sm:tracking-tight">
              {when}
            </span>
          </div>
        </div>

        {/* Add to calendar button */}
        <div className="flex sm:justify-end">
          <button
            type="button"
            onClick={() =>
              downloadICS({
                title: ev.summary || "Event",
                startISO: start,
                endISO: end,
                isAllDay,
                location: ev.location,
                description: ev.description ? ev.description.replace(/<[^>]*>/g, "") : "",
                url: ev.htmlLink,
                filename: `${(ev.summary || "event")
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}.ics`,
              })
            }
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800 sm:w-auto"
            aria-label="Add to calendar"
            title="Add to calendar"
          >
            <IconCalendarPlus size={16} />
            <span className="sm:hidden">Add to calendar</span>
          </button>
        </div>
      </div>

      {/* Title */}
      <h4 className="mt-2 text-sm text-slate-700">
        {ev.summary || "Untitled event"}
      </h4>

      {/* Location */}
      {ev.location ? (
        <a
          href={mapsUrl(ev.location)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-start gap-2 text-sm text-slate-700 hover:underline"
          aria-label={`Open map for ${ev.location}`}
          title="Open in Maps"
        >
          <IconMapPin size={16} className="mt-0.5 shrink-0" />
          <span className="min-w-0 break-words">{ev.location}</span>
        </a>
      ) : (
        <div className="mt-2 text-sm text-slate-500">Location TBD</div>
      )}

      {/* Details toggle only if there are details */}
      {hasDetails ? (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setOpenDetails((v) => !v)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 sm:w-auto sm:justify-start"
          >
            {openDetails ? "Hide details" : "See details"}
            {openDetails ? (
              <IconChevronUp size={14} />
            ) : (
              <IconChevronDown size={14} />
            )}
          </button>
        </div>
      ) : null}

      {/* Details content (supports links) */}
      {hasDetails && openDetails ? (
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Details
          </div>

          <div
            className="prose prose-slate mt-2 max-w-none text-sm"
            dangerouslySetInnerHTML={{ __html: safeHtml }}
          />
        </div>
      ) : null}
    </article>
  );

}

export default function CalendarEvents({
  calendarId,
  apiKey,
  title = "Upcoming events",
  daysAhead = 60,
  maxResults = 12,
}) {
  const [events, setEvents] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const timeMin = useMemo(() => new Date().toISOString(), []);
  const timeMax = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + daysAhead);
    return d.toISOString();
  }, [daysAhead]);

  useEffect(() => {
    if (!calendarId || !apiKey) {
      setStatus("error");
      setError("Missing calendarId or apiKey.");
      return;
    }

    const controller = new AbortController();

    async function load() {
      setStatus("loading");
      setError(null);

      try {
        const encodedId = encodeURIComponent(calendarId);
        const params = new URLSearchParams({
          key: apiKey,
          singleEvents: "true",
          orderBy: "startTime",
          timeMin,
          timeMax,
          maxResults: String(maxResults),
        });

        const url = `https://www.googleapis.com/calendar/v3/calendars/${encodedId}/events?${params.toString()}`;

        const res = await fetch(url, { signal: controller.signal });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.error?.message || "Failed to load calendar events.");
        }

        setEvents(Array.isArray(data.items) ? data.items : []);
        setStatus("success");
      } catch (err) {
        if (err.name === "AbortError") return;
        setStatus("error");
        setError(err.message || "Unknown error.");
      }
    }

    load();
    return () => controller.abort();
  }, [calendarId, apiKey, timeMin, timeMax, maxResults]);

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold tracking-tight">{title}</h3>
        {status === "success" && (
          <span className="text-xs text-slate-500">Updated from Google Calendar</span>
        )}
      </div>

      {status === "loading" && (
        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
          Loading events…
        </div>
      )}

      {status === "error" && (
        <div className="mt-4 flex items-start gap-2 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <IconAlertTriangle size={18} className="mt-0.5" />
          <div>
            <div className="font-medium">Couldn’t load events</div>
            <div className="mt-1 text-amber-800">{error}</div>
            <div className="mt-2 text-xs text-amber-800">
              Make sure the calendar is public and the API key is valid.
            </div>
          </div>
        </div>
      )}

      {status === "success" && events.length === 0 && (
        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
          No upcoming events found.
        </div>
      )}

      {status === "success" && events.length > 0 && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {events.map((ev) => (
            <EventCard key={ev.id} ev={ev} />
          ))}
        </div>
      )}
    </section>
  );
}
