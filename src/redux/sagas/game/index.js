import {
  // all,
  call,
  // cancel,
  // cancelled,
  // delay,
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
import * as selectors from '../../selectors';
import Api from '../../../api/index'

export function* getLevels() {
  const { data } = yield call(Api.getLevels)
  yield put(actions.levels.list.create.update(data))
}

export function* updatePosition(action) {
  const position = action.payload
  yield put(actions.levels.position.create.update(position))
}

getLevels.TRIGGER = "sagas: getLevels (TRIGGER)"
getLevels.trigger = makeActionCreator(getLevels.TRIGGER)

updatePosition.TRIGGER = "sagas: updatePosition (TRIGGER)"
updatePosition.trigger = makeActionCreator(updatePosition.TRIGGER)

export const sagas = [
  takeLeading(updatePosition.TRIGGER, updatePosition),
  takeLeading(getLevels.TRIGGER, getLevels),
]