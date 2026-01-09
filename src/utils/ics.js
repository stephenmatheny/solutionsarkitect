function pad(n) {
  return String(n).padStart(2, "0");
}

function toICSDate(date) {
  // Convert a Date to UTC "YYYYMMDDTHHMMSSZ"
  return (
    date.getUTCFullYear() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    "T" +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    "Z"
  );
}

function escapeICS(text = "") {
  // Escape per RFC 5545 basics
  return String(text)
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

export function downloadICS({
  title,
  startISO,
  endISO,
  isAllDay,
  location,
  description,
  url,
  filename = "event.ics",
}) {
  if (!startISO) return;

  const uid = `${Date.now()}-${Math.random().toString(16).slice(2)}@solutionsarkitect.com`;
  const dtstamp = toICSDate(new Date());

  let dtstart;
  let dtend;

  if (isAllDay) {
    // All-day uses VALUE=DATE and dtend is non-inclusive
    const startDate = new Date(startISO);
    const endDate = endISO ? new Date(endISO) : new Date(startISO);

    const ymd = (d) =>
      `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}`;

    dtstart = `DTSTART;VALUE=DATE:${ymd(startDate)}`;

    // Add 1 day for dtend per ICS all-day convention
    const endPlusOne = new Date(Date.UTC(endDate.getUTCFullYear(), endDate.getUTCMonth(), endDate.getUTCDate() + 1));
    dtend = `DTEND;VALUE=DATE:${ymd(endPlusOne)}`;
  } else {
    const start = new Date(startISO);
    const end = endISO ? new Date(endISO) : new Date(start.getTime() + 60 * 60 * 1000); // default 1 hour
    dtstart = `DTSTART:${toICSDate(start)}`;
    dtend = `DTEND:${toICSDate(end)}`;
  }

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Solutions Arkitect//Lufkin Chess//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    dtstart,
    dtend,
    `SUMMARY:${escapeICS(title || "Event")}`,
    location ? `LOCATION:${escapeICS(location)}` : null,
    description ? `DESCRIPTION:${escapeICS(description)}${url ? "\\n\\n" + escapeICS(url) : ""}` : url ? `DESCRIPTION:${escapeICS(url)}` : null,
    url ? `URL:${escapeICS(url)}` : null,
    "END:VEVENT",
    "END:VCALENDAR",
  ].filter(Boolean);

  const blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}
