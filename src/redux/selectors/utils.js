export const stringify = number => {
  if (number === 0) return '0M'
  else if (number < 1000) return Math.round(number) + 'K'
  else if (number < 1000000) return Math.round(number / 1000) + 'M'
  else return Math.round(number / 1000000) + 'B'
}