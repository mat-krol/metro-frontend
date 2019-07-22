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
  _.forEach(line, value => {
    if (value.key === 0) return length
    else {
      const x0 = line[value.key - 1].x
      const y0 = line[value.key - 1].y
      const x1 = value.x
      const y1 = value.y
      const segment = Math.sqrt((x1 - x0) ** 2 + (y1 - y0) ** 2)
      length += segment
      return length
    }
  })
  return Math.round( length / 6 ) / 10
}

export const checkForDuplicate = (line, props) => {
  if (!_.isEmpty(line)) {
    // 0 - id doesn't appear in the line
    // -1 - id appears somewhere in the line
    // 1 - id is in the last point
    let result = 0
    if (_.some(line, ['id', props.id])) result = -1
    if (line[props.key - 1].id === props.id) result = 1
    return result
  }
  return 0
}

export const removeDuplicate = line => {
  return line.slice(0, -1)
}