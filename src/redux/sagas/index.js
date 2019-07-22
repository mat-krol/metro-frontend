// import _ from 'lodash';
import { put, call, delay, select, all, takeLeading } from 'redux-saga/effects'
import { actions } from '../leaves'
import { makeActionCreator } from 'redux-leaves';
import * as selectors from '../selectors';
import { evaluateLineLength, checkForDuplicate, removeDuplicate } from './utils'

export function* startGameRound() {
  yield put(actions.game.budget.create.increment(10))
  yield delay(2000)
  yield put(actions.game.budget.create.increment(20))
  yield delay(1000)
  yield put(actions.game.budget.create.increment(30))
  yield delay(500)
  yield put(actions.game.budget.create.increment(40))
  yield delay(500)
  yield put(actions.game.modal.create.on())
}

export function* updateModeBuild(action) {
  const props = action.payload
  const line = yield select(selectors.getModeBuildLinePoints)
  const duplicate = yield call(checkForDuplicate, line, props)
  if (duplicate === 1) {
    const result = yield call(removeDuplicate, line)
    yield put(actions.mode.build.line.points.create.update(result))
  } else if (duplicate === 0) {
    yield put(actions.mode.build.line.points.create.concat(props))
  }
  yield call(updateLineLength)
}

export function* finishModeBuild() {
  const line = yield select(selectors.getModeBuildLine)
  const lines = yield select(selectors.getMapLines)
  const cost = yield select(selectors.getModeBuildLineCost)
  var length = Object.keys(lines).length;
  yield put(actions.map.lines.create.assign({[length]: line}))
  yield put(actions.game.budget.create.increment(cost * -1))
  yield put(actions.mode.build.create.reset())
}

export function* startModeBuild() {
  const lines = yield select(selectors.getMapLines)
  var length = Object.keys(lines).length;
  yield put(actions.game.modal.create.off())
  yield put(actions.mode.build.ongoing.create.on())
  yield put(actions.mode.build.line.id.create.update(length))
  yield put(actions.mode.build.line.key.create.update(length))
  const colors = yield select(selectors.getModeBuildColors)
  yield put(actions.mode.build.line.color.create.update(colors[length]))
}

export function* startModeWait() {
  yield put(actions.game.modal.create.off())
  yield call(startGameRound)
}

function* updateLineLength() {
  const line = yield select(selectors.getModeBuildLinePoints)
  const length = yield call(evaluateLineLength, line)
  yield put(actions.mode.build.line.length.create.update(length))
}

// export function* updateAnswerAndCheckCorrectness(action) {
//   const key = action.payload
//   yield call(updateAnswer, key)
//   yield call(updateCorrectness)
//   const correctness = yield select(selectors.getQuestionUserCorrectness)
//   if (correctness !== 0) yield call(shouldDisplayNextQuestion, correctness)
// }

// export function* startQuiz(action) {
//   const id = action.payload
//   yield put(actions.quiz.ongoing.create.on())
//   yield put(actions.quiz.round.id.create.update(id))
//   const quizRound = yield select(selectors.getQuizRoundById)
//   yield put(actions.quiz.round.create.update(quizRound))
// }

// export function* finishQuiz(action) {
//   yield call(updateStars)
//   yield put(actions.quiz.create.reset())
//   yield put(actions.quiz.ongoing.create.off())
// }

// function* updateAnswer(key) {
//   const answer = yield select(selectors.getQuestionUserAnswer)
//   const newAnswer = answer.concat(key)
//   yield put(actions.quiz.question.user.answer.create.update(newAnswer))
// }

// function* updateStars() {
//   const stars = yield select(selectors.getQuizRoundStars)
//   const oldStars = yield select(selectors.getQuizListStarsById)
//   const id = yield select(selectors.getQuizRoundId)
//   if(stars > oldStars) yield put(actions.list[id].stars.create.update(stars))
// }

// function* updateCorrectness() {
//   const answer = yield select(selectors.getQuestionUserAnswer)
//   const solution = yield select(selectors.getQuestionGivenAnswer)
//   const correctness = yield call(checkCorrect, answer, solution)
//   yield put(actions.quiz.question.user.correctness.create.update(correctness))
// }

// function* shouldDisplayNextQuestion(correctness) {
//   if (correctness === 1) yield call(questionCorrect)
//   yield put(actions.quiz.question.disabled.create.on())
//   yield delay(500)
//   const shouldFinishQuiz = yield select(selectors.getShouldFinishQuiz)
//   if (shouldFinishQuiz) yield call(finishQuiz)
//   else yield call(nextQuestion)
// }

// function* nextQuestion() {
//   yield put(actions.quiz.question.user.create.reset())
//   yield put(actions.quiz.question.id.create.increment())
//   yield put(actions.quiz.question.disabled.create.off())
// }

// function* questionCorrect() {
//   yield put(actions.quiz.round.score.create.increment())
//   const tiers = yield select(selectors.getQuizRoundTiers)
//   const score = yield select(selectors.getQuizRoundScore)
//   if (score < tiers[0]) yield put(actions.quiz.round.stars.create.update(0))
//   else if (score < tiers[1]) yield put(actions.quiz.round.stars.create.update(1))
//   else if (score < tiers[2]) yield put(actions.quiz.round.stars.create.update(2))
//   else yield put(actions.quiz.round.stars.create.update(3))
// }

// updateAnswerAndCheckCorrectness.TRIGGER = "sagas: updateAnswerAndCheckCorrectness (TRIGGER)"
// updateAnswerAndCheckCorrectness.trigger = makeActionCreator(updateAnswerAndCheckCorrectness.TRIGGER)

// finishQuiz.TRIGGER = "sagas: finishQuiz (TRIGGER)"
// finishQuiz.trigger = makeActionCreator(finishQuiz.TRIGGER)

// startQuiz.TRIGGER = "sagas: startQuiz (TRIGGER)"
// startQuiz.trigger = makeActionCreator(startQuiz.TRIGGER)

updateModeBuild.TRIGGER = "sagas: updateModeBuild (TRIGGER)"
updateModeBuild.trigger = makeActionCreator(updateModeBuild.TRIGGER)

finishModeBuild.TRIGGER = "sagas: finishModeBuild (TRIGGER)"
finishModeBuild.trigger = makeActionCreator(finishModeBuild.TRIGGER)

startModeBuild.TRIGGER = "sagas: startModeBuild (TRIGGER)"
startModeBuild.trigger = makeActionCreator(startModeBuild.TRIGGER)

startModeWait.TRIGGER = "sagas: startModeWait (TRIGGER)"
startModeWait.trigger = makeActionCreator(startModeWait.TRIGGER)

startGameRound.TRIGGER = "sagas: startGameRound (TRIGGER)"
startGameRound.trigger = makeActionCreator(startGameRound.TRIGGER)

const sagas = [
  takeLeading(startGameRound.TRIGGER, startGameRound),
  takeLeading(startModeWait.TRIGGER, startModeWait),
  takeLeading(startModeBuild.TRIGGER, startModeBuild),
  takeLeading(finishModeBuild.TRIGGER, finishModeBuild),
  takeLeading(updateModeBuild.TRIGGER, updateModeBuild),
  // takeLeading(startQuiz.TRIGGER, startQuiz),
  // takeLeading(finishQuiz.TRIGGER, finishQuiz),
  // takeLeading(updateAnswerAndCheckCorrectness.TRIGGER, updateAnswerAndCheckCorrectness)
]

export default function* rootSaga() {
  yield all(sagas)
}




