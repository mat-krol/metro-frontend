import _ from 'lodash'

export const checkCorrect = (answer, solution) => {
  if (answer === solution) {
    return 1
  } else {
    return checkSubstring(answer, solution)
  }
}

const checkSubstring = (answer, solution) => {
  let correct = 0
  let i
  for (i = 0; i < answer.length; ++i) {
    correct = answer[i] === solution[i] ? correct : --correct
  }
  return correct
}

export const evaluateLineLength = line => {
  let length = 0
  _.forEach(line, (value, key) => {
    if (key === "0") return length
    else {
      const numKey = parseFloat(key)
      const x0 = parseFloat(line[numKey - 1].x)
      const y0 = parseFloat(line[numKey - 1].y)
      const x1 = parseFloat(value.x)
      const y1 = parseFloat(value.y)
      const segment = Math.sqrt((x1 - x0) ** 2 + (y1 - y0) ** 2)
      length += segment
      return length
    }
  })
  return Math.round( length / 6 ) / 10
}