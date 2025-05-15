export function formatYear(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return isNaN(date) ? '' : date.getFullYear().toString();
}

export function formatYearRange(startDate, endDate) {
  if (!startDate || !endDate) return '';
  const start = new Date(startDate);
  const end = new Date(endDate);
  if (isNaN(start) || isNaN(end)) return '';
  const startYear = start.getFullYear();
  const endYear = end.getFullYear();
  return startYear === endYear ? `${startYear}` : `${startYear} – ${endYear}`;
}
