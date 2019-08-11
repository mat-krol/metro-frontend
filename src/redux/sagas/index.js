import {
  all,
  // call,
  // cancel,
  // cancelled,
  // delay,
  // fork,
  // put,
  // select,
  // take,
  // takeEvery,
  // takeLatest
  // takeLeading,
} from 'redux-saga/effects';

import * as game from './game'
import * as mode from './mode'
import * as round from './round'

const sagas = [
  ...game.sagas,
  ...mode.sagas,
  ...round.sagas,
]

export default function* rootSaga() {
  yield all(sagas)
}