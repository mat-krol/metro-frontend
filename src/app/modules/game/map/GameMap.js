import React from 'react';
// import { useSelector } from 'react-redux';
import { actions } from '../../../../redux/leaves'
import * as selectors from '../../../../redux/selectors'
import { useSelector, useDispatch } from 'react-redux';
// import { updateAnswerAndCheckCorrectness } from '../../../../redux/sagas'

import AppModule from '../../../common/module';
import AppMap from '../../../common/map/AppMap';

function GameMap() {
  const dispatch = useDispatch()
  const map = useSelector(selectors.getMapAreas)
  const line = useSelector(selectors.getMapLine)

  const updateLine = arr => {
    dispatch(actions.map.line.create.concat(arr))
  }

  return (
    <AppModule >
      <AppMap map={map} onClick={updateLine} line={line} />
    </AppModule>
  )
}

export default GameMap;