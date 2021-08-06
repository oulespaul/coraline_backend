export default function convertTimestampToDatetime(timestamp) {
  const year = timestamp.slice(0, 4);
  const month = timestamp.slice(5, 7);
  const day = timestamp.slice(8, 10);

  const date = new Date(year, +month - 1, day);

  return Intl.DateTimeFormat("en-EN", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(date);
}
