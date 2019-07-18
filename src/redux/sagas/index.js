import { put, call, delay, select, all, takeLeading } from 'redux-saga/effects'
import { actions } from '../leaves'
import { makeActionCreator } from 'redux-leaves';
import * as selectors from '../selectors';
// import { getQuestionGivenAnswer, getQuestionUserAnswer, getQuestionUserCorrectness, getQuizRoundTiers, getQuizRoundScore } from '../selectors'
import { checkCorrect, evaluateLineLength } from './utils'

export function* updateLineLength(action) {
  const point = action.payload
  yield put(actions.map.line.create.assign(point))
  const line = yield select(selectors.getMapLine)
  const length = yield call(evaluateLineLength, line)
  yield put(actions.upgrade.line.length.create.update(length))
}

export function* updateAnswerAndCheckCorrectness(action) {
  const key = action.payload
  yield call(updateAnswer, key)
  yield call(updateCorrectness)
  const correctness = yield select(selectors.getQuestionUserCorrectness)
  if (correctness !== 0) yield call(shouldDisplayNextQuestion, correctness)
}

export function* startQuiz(action) {
  const id = action.payload
  yield put(actions.quiz.ongoing.create.on())
  yield put(actions.quiz.round.id.create.update(id))
  const quizRound = yield select(selectors.getQuizRoundById)
  yield put(actions.quiz.round.create.update(quizRound))
}

export function* finishQuiz(action) {
  yield call(updateStars)
  yield put(actions.quiz.create.reset())
  yield put(actions.quiz.ongoing.create.off())
}

function* updateAnswer(key) {
  const answer = yield select(selectors.getQuestionUserAnswer)
  const newAnswer = answer.concat(key)
  yield put(actions.quiz.question.user.answer.create.update(newAnswer))
}

function* updateStars() {
  const stars = yield select(selectors.getQuizRoundStars)
  const oldStars = yield select(selectors.getQuizListStarsById)
  const id = yield select(selectors.getQuizRoundId)
  if(stars > oldStars) yield put(actions.list[id].stars.create.update(stars))
}

function* updateCorrectness() {
  const answer = yield select(selectors.getQuestionUserAnswer)
  const solution = yield select(selectors.getQuestionGivenAnswer)
  const correctness = yield call(checkCorrect, answer, solution)
  yield put(actions.quiz.question.user.correctness.create.update(correctness))
}

function* shouldDisplayNextQuestion(correctness) {
  if (correctness === 1) yield call(questionCorrect)
  yield put(actions.quiz.question.disabled.create.on())
  yield delay(500)
  const shouldFinishQuiz = yield select(selectors.getShouldFinishQuiz)
  if (shouldFinishQuiz) yield call(finishQuiz)
  else yield call(nextQuestion)
}

function* nextQuestion() {
  yield put(actions.quiz.question.user.create.reset())
  yield put(actions.quiz.question.id.create.increment())
  yield put(actions.quiz.question.disabled.create.off())
}

function* questionCorrect() {
  yield put(actions.quiz.round.score.create.increment())
  const tiers = yield select(selectors.getQuizRoundTiers)
  const score = yield select(selectors.getQuizRoundScore)
  if (score < tiers[0]) yield put(actions.quiz.round.stars.create.update(0))
  else if (score < tiers[1]) yield put(actions.quiz.round.stars.create.update(1))
  else if (score < tiers[2]) yield put(actions.quiz.round.stars.create.update(2))
  else yield put(actions.quiz.round.stars.create.update(3))
}

updateAnswerAndCheckCorrectness.TRIGGER = "sagas: updateAnswerAndCheckCorrectness (TRIGGER)"
updateAnswerAndCheckCorrectness.trigger = makeActionCreator(updateAnswerAndCheckCorrectness.TRIGGER)

finishQuiz.TRIGGER = "sagas: finishQuiz (TRIGGER)"
finishQuiz.trigger = makeActionCreator(finishQuiz.TRIGGER)

startQuiz.TRIGGER = "sagas: startQuiz (TRIGGER)"
startQuiz.trigger = makeActionCreator(startQuiz.TRIGGER)

updateLineLength.TRIGGER = "sagas: updateLineLength (TRIGGER)"
updateLineLength.trigger = makeActionCreator(updateLineLength.TRIGGER)


const sagas = [
  takeLeading(updateLineLength.TRIGGER, updateLineLength),
  takeLeading(startQuiz.TRIGGER, startQuiz),
  takeLeading(finishQuiz.TRIGGER, finishQuiz),
  takeLeading(updateAnswerAndCheckCorrectness.TRIGGER, updateAnswerAndCheckCorrectness)
]

export default function* rootSaga() {
  yield all(sagas)
}




