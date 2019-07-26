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
  const increment = yield call(updateBudget, days_number)
  for (let c of days) {
    yield call(incrementDate, increment, c)
  }
  yield delay(5000)
  yield put(actions.round.modal.create.on())
}

function* incrementDate(increment) {
  yield put(actions.round.date.create.increment(86400000))
  yield put(actions.round.budget.create.increment(increment))
  // yield call(updatePopulation)
  yield call(updateSatisfaction)
  yield delay(100)
}

function* updateBudget(days_number) {
  const stations = yield select(selectors.getMapStationsNumber)
  const lines = yield select(selectors.getMapLinesNumber)
  const increment = (lines * 20000 + stations * 1000) / days_number
  return increment
}

function* updateSatisfaction() {
  const areas = yield select(selectors.getMapAreas)
  for (let i in areas) {
    const value = Math.round(areas[i].satisfaction * 100 - 1) / 100
    yield put(actions.map.areas[i].satisfaction.create.update(value))
  }
}


startGameRound.TRIGGER = "sagas: startGameRound (TRIGGER)"
startGameRound.trigger = makeActionCreator(startGameRound.TRIGGER)

export const sagas = [
  takeLeading(startGameRound.TRIGGER, startGameRound),
]


