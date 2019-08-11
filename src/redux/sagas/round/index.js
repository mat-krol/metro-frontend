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

export function* initiateGameRound() {
  yield delay(1000)
  yield put(actions.round.modal.create.on())
}

export function* startGameRound() {
  const date = yield select(selectors.getRoundDatePlain)
  const days_number = yield call(daysInMonth, date)
  const days = _.range(days_number)
  const increment = yield call(updateBudget, days_number)
  yield call(updateSatisfaction)
  for (let c of days) {
    yield call(incrementDate, increment, c)
  }
  yield delay(1000)
  yield put(actions.round.modal.create.on())
}

function* incrementDate(increment) {
  yield put(actions.round.date.create.increment(86400000))
  yield put(actions.round.budget.create.increment(increment))
  // yield call(updatePopulation)
  yield delay(100)
}

function updateBudget(days_number) {
  // const stations = yield select(selectors.getMapStationsNumber)
  // const lines = yield select(selectors.getMapLinesNumber)
  // const increment = (lines * 20000 + stations * 1000) / days_number
  const increment = 300000 / days_number
  return increment
}

function* updateSatisfaction() {
  const areas = yield select(selectors.getMapAreas)
  for (let i in areas) {
    let value = areas[i].metro.satisfaction
    if (areas[i].metro.stations === 1) value += 3
    else if (areas[i].metro.neighbouring) value += 1
    // else value = Math.round(areas[i].metro.satisfaction * 100 - 20) / 100
    yield put(actions.map.areas[i].metro.stations.create.reset())
    yield put(actions.map.areas[i].metro.neighbouring.create.reset())

    if (value > 10) value = 10
    if (value) yield put(actions.map.areas[i].metro.satisfaction.create.update(value))
  }
}

// function* updatePopulation() {
//   const areas = yield select(selectors.getMapAreas)
//   for (let i in areas) {
//     const value = areas[i].metro.population + Math.random() * 0.1
//     yield put(actions.map.areas[i].metro.population.create.update(value))
//   }
// }

export function* updateStationCount(points) {
  const areas = yield select(selectors.getMapAreas)
  for (let i in points) {
    const id = points[i].id
    const neighbours = areas[id].neighbours
    for (let j in neighbours) {
      const id = neighbours[j]
      yield put(actions.map.areas[id].metro.neighbouring.create.increment(1))
    }
    yield put(actions.map.areas[id].metro.stations.create.increment(1))
  }
}

startGameRound.TRIGGER = "sagas: startGameRound (TRIGGER)"
startGameRound.trigger = makeActionCreator(startGameRound.TRIGGER)

initiateGameRound.TRIGGER = "sagas: initiateGameRound (TRIGGER)"
initiateGameRound.trigger = makeActionCreator(initiateGameRound.TRIGGER)

export const sagas = [
  takeLeading(initiateGameRound.TRIGGER, initiateGameRound),
  takeLeading(startGameRound.TRIGGER, startGameRound),
]


