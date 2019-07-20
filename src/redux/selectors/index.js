import { createSelector } from 'reselect';
import _ from 'lodash';

export const getMapAreas = state => state.map.areas
export const getMapLine = state => state.map.line
export const getMapLines = state => state.map.lines
export const getUpgradeLineLength = state => state.upgrade.line.length

export const getUpgradeLineCost = createSelector(
  getUpgradeLineLength,
  length => length * 50
)

export const getUpgradeStations = createSelector(
  getMapLine,
  line => Object.keys(line).length
)

export const getMapPoints = createSelector(
  getMapLines,
  list => {
    let result = _.flatMap(list, 'points');
    return result
    // _.reduce(list, (result, value, key) => {
    //   result=[value.points, ...result]
    //   // result = _.pluck(objArray, 'foo');
    //   return result;
    // }, [])
  }
)

export const getView = state => state.view

export const getCurrentViewPopulation = createSelector(
  getView,
  view => view === 2
)

export const getCurrentViewSatisfaction = createSelector(
  getView,
  view => view === 1
)

export const getCurrentViewPlain = createSelector(
  getView,
  view => view === 0
)

export const getQuestionId = state => state.quiz.question.id
export const getQuestionDisabled = state => state.quiz.question.disabled
export const getQuestionUserAnswer = state => state.quiz.question.user.answer
export const getQuestionUserCorrectness = state => state.quiz.question.user.correctness

export const getQuizRoundQuestions = state => state.quiz.round.questions
export const getQuizRoundScore = state => state.quiz.round.score
export const getQuizRoundStars = state => state.quiz.round.stars
export const getQuizRoundTiers = state => state.quiz.round.tiers
export const getQuizRoundTimer = state => state.quiz.round.timer
export const getQuizRoundId = state => state.quiz.round.id

export const getQuizOngoing = state => state.quiz.ongoing
export const getQuizList = state => state.list

export const getQuestionGivenAnswer = createSelector(
  getQuestionId,
  getQuizRoundQuestions,
  (id, list) => list[id].answer
)

export const getQuestionGivenPrompt = createSelector(
  getQuestionId,
  getQuizRoundQuestions,
  (id, list) => list[id].prompt
)

export const getQuizRoundById = createSelector(
  getQuizRoundId,
  getQuizList,
  (id, list) => ({ ...list[id], stars: 0, score: 0 })
)

export const getQuizListStarsById = createSelector(
  getQuizRoundId,
  getQuizList,
  (id, list) => list[id].stars
)

export const getUserStars = createSelector(
  getQuizList,
  list => (
    _.reduce(list, (sum, n) => (
      sum + n.stars
    ), 0)
  )
)

export const getNoQuestionsLeft = createSelector(
  getQuestionId,
  getQuizRoundQuestions,
  (id, list) => id === Object.keys(list).length - 1
)

export const getReachedThreeStars = createSelector(
  getQuizRoundStars,
  stars => {
    console.log(stars, stars === 3)
    return (stars === 3)
  }
)

export const getShouldFinishQuiz = createSelector(
  getReachedThreeStars,
  getNoQuestionsLeft,
  (stars, questions) => {
    console.log(stars, questions)
    return (stars || questions)
  }
)


