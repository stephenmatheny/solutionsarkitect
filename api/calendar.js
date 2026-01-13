const CALENDAR_CONFIG = {
  "lufkin-chess": {
    calendarIdEnv: "GOOGLE_CALENDAR_LUFKIN_CHESS",
    apiKeyEnv: "GOOGLE_CALENDAR_MAIN",
  },
  // Example future partner calendar:
  // "partner-1": { calendarIdEnv: "GCAL_ID_PARTNER1", apiKeyEnv: "GCAL_KEY_PARTNER1" },
};

export default async function handler(req, res) {
  try {
    const slug = String(req.query.calendar ?? "lufkin-chess");
    const cfg = CALENDAR_CONFIG[slug];

    if (!cfg) {
      return res.status(400).json({ error: `Unknown calendar "${slug}"` });
    }

    const apiKey = process.env[cfg.apiKeyEnv];
    const calendarId = process.env[cfg.calendarIdEnv];

    if (!apiKey) return res.status(500).json({ error: `Missing env ${cfg.apiKeyEnv}` });
    if (!calendarId) return res.status(500).json({ error: `Missing env ${cfg.calendarIdEnv}` });

    const daysAhead = Math.min(Number(req.query.daysAhead ?? 60), 365);
    const maxResults = Math.min(Number(req.query.maxResults ?? 12), 50);

    const now = new Date();
    const timeMin = now.toISOString();
    const timeMax = new Date(now.getTime() + 1000 * 60 * 60 * 24 * daysAhead).toISOString();

    const url = new URL(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`
    );

    url.searchParams.set("key", apiKey);
    url.searchParams.set("singleEvents", "true");
    url.searchParams.set("orderBy", "startTime");
    url.searchParams.set("timeMin", timeMin);
    url.searchParams.set("timeMax", timeMax);
    url.searchParams.set("maxResults", String(maxResults));

    const r = await fetch(url.toString());
    const data = await r.json();

    if (!r.ok) {
      return res.status(r.status).json({ error: data?.error ?? data });
    }

    // Return in the exact Google event shape your UI already expects
    const events = Array.isArray(data.items) ? data.items : [];

    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
    return res.status(200).json({ events });
  } catch (err) {
    return res.status(500).json({ error: String(err) });
  }
}
