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
  const line = useSelector(selectors.getMapLine)

  const updateLine = (id, arr) => {
    const point = {
      [id]: {
        id: id,
        x: arr[0],
        y: arr[1]
      }
    }
    dispatch(actions.map.line.create.assign(point))
  }

  return (
    <AppModule >
      <AppMap onClick={updateLine} line={line} />
    </AppModule>
  )
}

export default GameMap;