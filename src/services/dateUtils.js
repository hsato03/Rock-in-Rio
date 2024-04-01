export function sortByDateTime(a, b) {
  const dateA = new Date(a.data);
  const dateB = new Date(b.data);

  if (dateA < dateB) {
    return -1;
  } else if (dateA > dateB) {
    return 1;
  }

  return 0;
}

export function formatDate(dateTime) {
  const date = new Date(dateTime);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hour = String(date.getHours()).padStart(2, '0');

  return `${day}/${month}/${year} - ${hour}h`;
}
