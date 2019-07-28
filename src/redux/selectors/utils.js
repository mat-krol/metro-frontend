export const stringify = number => {
  if (number < 999) return Math.round(number) + 'K'
  else if (number < 9999) return Math.round(number / 100) / 10 + 'M'
  else if (number < 999999) return Math.round(number / 1000) + 'M'
  else if (number < 9999999) return Math.round(number / 100000) / 10 + 'B'
  else return Math.round(number / 1000000) + 'B'
}