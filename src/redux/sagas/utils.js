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