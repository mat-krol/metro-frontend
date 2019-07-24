import {
    // all,
    call,
    // cancel,
    // cancelled,
    // delay,
    // fork,
    put,
    select,
    // take,
    // takeEvery,
    // takeLatest,
    takeLeading,
  } from 'redux-saga/effects';

import { actions } from '../../leaves'
import { makeActionCreator } from 'redux-leaves';
import * as selectors from '../../selectors';
import { startGameRound } from '../round'
import { evaluateLineLength, checkForDuplicate, removeDuplicate } from './utils'

export function* updateModeBuild(action) {
  const props = action.payload
  const line = yield select(selectors.getModeBuildLineBranchPoints)
  const duplicate = yield call(checkForDuplicate, line, props)
  if (duplicate === 1) {
    const result = yield call(removeDuplicate, line)
    yield put(actions.mode.build.line.branch[0].points.create.update(result))
  } else if (duplicate === 0) {
    yield put(actions.mode.build.line.branch[0].points.create.concat(props))
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

export function* finishModeExpand() {
  const line = yield select(selectors.getModeBuildLine)
  const lines = yield select(selectors.getMapLines)
  var id = Object.keys(lines[line.id].branch).length;
  // console.log(lines[0], lines['0'], lines[line.id], line.id, id, line.branch[0])
  // yield put(actions.map.lines[0].create.update({[id]: line.branch[0]}))
  // yield put(actions.map.lines[0].create.update({'hello': 'hello'}))
  // yield put(actions.map.lines[0].branch.create.assign('id', line.branch[0]))
  yield put(actions.mode.build.create.reset())
}

export function* startModeBuild() {
  const lines = yield select(selectors.getMapLines)
  var length = Object.keys(lines).length;
  yield put(actions.game.modal.create.off())
  yield put(actions.mode.build.ongoing.create.on())
  yield put(actions.mode.build.line.id.create.update(length))
  yield put(actions.mode.build.line.key.create.update(length))
  const colors = yield select(selectors.getGameColors)
  yield put(actions.mode.build.line.color.create.update(colors[length]))
}

export function* startModeExpand() {
  yield put(actions.game.modal.create.off())
  yield put(actions.mode.expand.ongoing.create.on())
  yield put(actions.mode.build.modal.create.on())
}

export function* continueModeExpand(action) {
  const id = action.payload
  const lines = yield select(selectors.getMapLines)
  yield put(actions.mode.build.line.id.create.update(lines[id].id))
  yield put(actions.mode.build.line.key.create.update(lines[id].key))
  yield put(actions.mode.build.line.color.create.update(lines[id].color))
  yield put(actions.mode.build.modal.create.off())
}

export function* startModeWait() {
  yield put(actions.game.modal.create.off())
  yield call(startGameRound)
}

function* updateLineLength() {
  const line = yield select(selectors.getModeBuildLineBranchPoints)
  const length = yield call(evaluateLineLength, line)
  yield put(actions.mode.build.line.branch[0].length.create.update(length))
}

updateModeBuild.TRIGGER = "sagas: updateModeBuild (TRIGGER)"
updateModeBuild.trigger = makeActionCreator(updateModeBuild.TRIGGER)

continueModeExpand.TRIGGER = "sagas: continueModeExpand (TRIGGER)"
continueModeExpand.trigger = makeActionCreator(continueModeExpand.TRIGGER)

finishModeBuild.TRIGGER = "sagas: finishModeBuild (TRIGGER)"
finishModeBuild.trigger = makeActionCreator(finishModeBuild.TRIGGER)

finishModeExpand.TRIGGER = "sagas: finishModeExpand (TRIGGER)"
finishModeExpand.trigger = makeActionCreator(finishModeExpand.TRIGGER)

startModeBuild.TRIGGER = "sagas: startModeBuild (TRIGGER)"
startModeBuild.trigger = makeActionCreator(startModeBuild.TRIGGER)

startModeWait.TRIGGER = "sagas: startModeWait (TRIGGER)"
startModeWait.trigger = makeActionCreator(startModeWait.TRIGGER)

startModeExpand.TRIGGER = "sagas: startModeExpand (TRIGGER)"
startModeExpand.trigger = makeActionCreator(startModeExpand.TRIGGER)

export const sagas = [
  takeLeading(startModeWait.TRIGGER, startModeWait),
  takeLeading(startModeBuild.TRIGGER, startModeBuild),
  takeLeading(startModeExpand.TRIGGER, startModeExpand),
  takeLeading(finishModeExpand.TRIGGER, finishModeExpand),
  takeLeading(finishModeBuild.TRIGGER, finishModeBuild),
  takeLeading(continueModeExpand.TRIGGER, continueModeExpand),
  takeLeading(updateModeBuild.TRIGGER, updateModeBuild),
]