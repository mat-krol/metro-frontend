export const daysInMonth = timestamp => {
  const month = new Date(timestamp).getMonth()
  const year = new Date(timestamp).getYear()
  return new Date(year, month, 0).getDate();
}