import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(utc);
dayjs.extend(relativeTime);

/**
 * Utility to format ISO date strings into various human-readable forms.
 * @param isoString ISO 8601 date string (e.g. "2025-10-24T17:38:18.000Z")
 */
export const formatDate = (isoString: string) => {
  const date = dayjs.utc(isoString).local(); // convert to local timezone

  return {
    fullDateTime: date.format("YYYY-MM-DD HH:mm:ss"), // e.g. 2025-10-25 01:38:18
    prettyDateTime: date.format("MMM D, YYYY h:mm A"), // e.g. Oct 25, 2025 1:38 AM
    dayAndMonth: date.format("dddd, MMMM D"), // e.g. Saturday, October 25
    monthDayAndYear: date.format("MMMM D, YYYY "), // e.g. October 25, 2025
    relative: date.fromNow(), // e.g. 6 days ago
    // TODO: test this
    backtoISOString: dayjs
      .utc("2025-10-19 00:00:00", "YYYY-MM-DD HH:mm:ss")
      .toISOString(),
  };
};
