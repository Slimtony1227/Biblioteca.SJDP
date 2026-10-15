// One shared mapping controls both the explanatory key and the card outlines.
export const audiences = [
  { id: '9', label: '9.º', cardLabel: '9.º grado', color: '#D47730' },
  { id: '10', label: '10.º', cardLabel: '10.º grado', color: '#3478B7' },
  { id: '11', label: '11.º', cardLabel: '11.º grado', color: '#777777' },
  { id: '12', label: '12.º', cardLabel: '12.º grado', color: '#8B3B50' },
  { id: 'all', label: 'Todos', cardLabel: 'Todos los grados', color: '#262626' },
];

const months = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];

export function formatActivityDate(date) {
  if (!date) return null;

  const month = months[date.month - 1];
  const yearLabel = date.year == null ? '' : ` de ${date.year}`;
  const monthDay = `${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`;

  return {
    short: `${date.day} ${month.slice(0, 3).toUpperCase()}`,
    full: `${date.day} de ${month}${yearLabel}`,
    // Omit machine-readable full dates until the year is confirmed.
    datetime: date.year == null ? undefined : `${String(date.year).padStart(4, '0')}-${monthDay}`,
  };
}

export function prepareActivities(entries) {
  const seenIds = new Set();

  for (const entry of entries) {
    for (const field of ['id', 'title', 'location']) {
      if (typeof entry[field] !== 'string' || !entry[field].trim()) {
        throw new Error(`Activity ${entry.id ?? '(no id)'} needs a nonempty ${field}.`);
      }
    }

    for (const field of ['time', 'description', 'audienceLabel']) {
      if (entry[field] != null && (typeof entry[field] !== 'string' || !entry[field].trim())) {
        throw new Error(`Activity ${entry.id} needs a nonempty ${field} or null.`);
      }
    }

    if (entry.moreInfo != null) {
      for (const field of ['text', 'label', 'url']) {
        if (typeof entry.moreInfo[field] !== 'string' || !entry.moreInfo[field].trim()) {
          throw new Error(`Activity ${entry.id} needs a nonempty moreInfo.${field}.`);
        }
      }

      if (!URL.canParse(entry.moreInfo.url) || new URL(entry.moreInfo.url).protocol !== 'https:') {
        throw new Error(`Activity ${entry.id} needs an HTTPS moreInfo.url.`);
      }
    }

    if (seenIds.has(entry.id)) throw new Error(`Duplicate activity id: ${entry.id}.`);
    seenIds.add(entry.id);

    if (!audiences.some((audience) => audience.id === entry.audience)) {
      throw new Error(`Unknown audience for activity ${entry.id}: ${entry.audience}.`);
    }

    if (entry.date) {
      const { year, month, day } = entry.date;
      const referenceYear = year ?? 2000;
      const daysInMonth = new Date(Date.UTC(referenceYear, month, 0)).getUTCDate();

      if (
        (year != null && (!Number.isInteger(year) || year < 1000 || year > 9999)) ||
        !Number.isInteger(month) || month < 1 || month > 12 ||
        !Number.isInteger(day) || day < 1 || day > daysInMonth
      ) {
        throw new Error(`Invalid date for activity ${entry.id}.`);
      }
    }

    if (entry.image && (typeof entry.imageAlt !== 'string' || !entry.imageAlt.trim())) {
      throw new Error(`Activity ${entry.id} needs imageAlt for its image.`);
    }
  }

  // This orders the supplied schedule; it deliberately does not hide past events.
  // A school time zone and the event year are needed before automatic expiry.
  return [...entries].sort((left, right) => {
    if (!left.date) return right.date ? 1 : 0;
    if (!right.date) return -1;

    const yearDifference = left.date.year != null && right.date.year != null
      ? left.date.year - right.date.year
      : 0;

    return yearDifference || left.date.month - right.date.month || left.date.day - right.date.day;
  });
}
