import {
  // all,
  // call,
  // cancel,
  // cancelled,
  delay,
  // fork,
  put,
  // select,
  // take,
  // takeEvery,
  // takeLatest,
  takeLeading,
} from 'redux-saga/effects';

import { actions } from '../../leaves'
import { makeActionCreator } from 'redux-leaves';

export function* startGameRound() {
  // yield put(actions.game.budget.create.increment(20))
  // yield delay(2000)
  // yield put(actions.game.budget.create.increment(10))
  // yield delay(1000)
  // yield put(actions.game.budget.create.increment(30))
  // yield delay(500)
  yield put(actions.game.budget.create.increment(1000))
  yield delay(500)
  yield put(actions.game.modal.create.on())
}

startGameRound.TRIGGER = "sagas: startGameRound (TRIGGER)"
startGameRound.trigger = makeActionCreator(startGameRound.TRIGGER)

export const sagas = [
  takeLeading(startGameRound.TRIGGER, startGameRound),
]


