import {
  // all,
  call,
  // cancel,
  // cancelled,
  delay,
  // fork,
  put,
  select,
  // take,
  // takeEvery,
  // takeLatest,
  takeLeading,
} from 'redux-saga/effects';

import { actions } from '../../leaves'
import * as selectors from '../../selectors';
import { makeActionCreator } from 'redux-leaves';
import { daysInMonth } from './utils'
import _ from 'lodash'

export function* startGameRound() {
  const date = yield select(selectors.getRoundDatePlain)
  const days_number = yield call(daysInMonth, date)
  const days = _.range(days_number)
  for (let c of days) {
    yield call(incrementDate, c)
  }
  yield delay(1000)
  yield put(actions.round.modal.create.on())
}

function* incrementDate() {
  yield put(actions.round.date.create.increment(86400000))
  // yield call(updatePopulation)
  // yield call(updateSatisfaction)
  // yield call(updateBudget)
  yield delay(500)
}

startGameRound.TRIGGER = "sagas: startGameRound (TRIGGER)"
startGameRound.trigger = makeActionCreator(startGameRound.TRIGGER)

export const sagas = [
  takeLeading(startGameRound.TRIGGER, startGameRound),
]


