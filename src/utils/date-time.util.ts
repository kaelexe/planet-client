import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import isoWeek from "dayjs/plugin/isoWeek";

dayjs.extend(utc);
dayjs.extend(relativeTime);
dayjs.extend(isoWeek);

// --
// CURRENT DATE INFO
// --
export const currentDateInfo = () => {
  const now = dayjs();

  return {
    // Today
    now,
    // Day
    currentDayName: now.format("dddd"), // e.g. Tuesday
    currentDayNumber: now.date(), // e.g. 2

    // Month
    currentMonthName: now.format("MMMM"), // e.g. November
    currentMonthNumber: now.month() + 1, // e.g. 11

    // Year
    currentYear: now.year(), // e.g. 2025

    // Week Month Day
    currentDayAndMonth: now.format("dddd, MMMM D"), // Saturday, October 25

    // Month Day Year
    currentMonthDayAndYear: now.format("MMMM D, YYYY"), // October 25, 2025

    // complete date
    currentCompleteDate: now.format("ddd, MMMM D, YYYY"), // Sat, October 25, 2025

    // Week info
    currentWeekdayRange: "Sunday - Saturday",
    currentWeekNumber: now.isoWeek(), // e.g. 45

    // Lists
    months: Array.from({ length: 12 }, (_, i) => ({
      name: dayjs().month(i).format("MMMM"),
      number: i + 1,
    })),
    daysOfWeek: Array.from({ length: 7 }, (_, i) => ({
      name: dayjs().day(i).format("dddd"),
      number: i + 1,
    })),
  };
};

// --
// CURRENT TIME INFO
// --
export const currentTimeInfo = () => {
  const now = dayjs();

  return {
    currentTime: now.format("h:mm A"), // e.g. 6:04 AM
    currentFullTime: now.format("HH:mm:ss"), // e.g. 13:03:45
    currentTimestamp: now.toISOString(), // full ISO timestamp
  };
};

// -
// CONVERSION HELPERS
// -

/**
 * Converts a "YYYY-MM-DD HH:mm:ss" string to ISO string.
 */
export const toISOString = (dateTimeString: string): string => {
  return dayjs.utc(dateTimeString, "YYYY-MM-DD HH:mm:ss").toISOString();
};

/**
 * Converts an ISO string to "YYYY-MM-DD HH:mm:ss".
 */
export const fromISOString = (isoString: string): string => {
  return dayjs.utc(isoString).local().format("YYYY-MM-DD HH:mm:ss");
};

// -
// FORMAT HELPERS
// -

/**
 * Formats date strings (ISO or "YYYY-MM-DD HH:mm:ss") into various readable formats.
 */
export const formatDate = (dateInput: string) => {
  const isISO = dateInput.includes("T");
  const date = isISO
    ? dayjs.utc(dateInput).local()
    : dayjs.utc(dateInput, "YYYY-MM-DD HH:mm:ss").local();

  return {
    fullDateTime: date.format("YYYY-MM-DD HH:mm:ss"), // 2025-10-25 01:38:18
    prettyDateTime: date.format("MMM D, YYYY h:mm A"), // Oct 25, 2025 1:38 AM
    completeDateTime: date.format("ddd, MMMM D, YYYY h:mm A"), // Sat, October 25, 2025 1:38 AM
    dayAndMonth: date.format("dddd, MMMM D"), // Saturday, October 25
    monthDayAndYear: date.format("MMMM D, YYYY"), // October 25, 2025
    relative: date.fromNow(), // 5 days ago
  };
};

// -
// RECENCY / TIME AGO
// -

/**
 * Returns a concise "time ago" string, like "1s ago", "2d ago", "3w ago", "5y ago".
 */
export const getTimeAgo = (dateInput: string): string => {
  const now = dayjs();
  const date = dateInput.includes("T")
    ? dayjs(dateInput)
    : dayjs(dateInput, "YYYY-MM-DD HH:mm:ss");

  const diffSeconds = now.diff(date, "second");
  const diffMinutes = now.diff(date, "minute");
  const diffHours = now.diff(date, "hour");
  const diffDays = now.diff(date, "day");
  const diffWeeks = now.diff(date, "week");
  const diffMonths = now.diff(date, "month");
  const diffYears = now.diff(date, "year");

  if (diffSeconds < 60) return `${diffSeconds}s ago`;
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffWeeks < 5) return `${diffWeeks}w ago`;
  if (diffMonths < 12) return `${diffMonths}mo ago`;
  return `${diffYears}y ago`;
};
