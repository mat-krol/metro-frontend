import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { actions } from '../../../../redux/leaves'
import * as selectors from '../../../../redux/selectors'
import { updateModeBuild } from '../../../../redux/sagas'

import AppModule from '../../../common/module';
import AppMap from '../../../common/map/AppMap';

function GameMap() {
  const dispatch = useDispatch()
  const line = useSelector(selectors.getMapLine)
  const stations = useSelector(selectors.getUpgradeStations)
  const length = useSelector(selectors.getUpgradeLineLength)
  

  const updateLine = (id, arr) => {
    var position = Object.keys(line).length;
    const point = {
      [position]: {
        id: id,
        x: arr[0],
        y: arr[1],
        key: position
      }
    }
    dispatch(updateModeBuild.trigger(point))
  }

  return (
    <AppModule >
      <p>{length} km - ¢{length * 50} mln</p>
      <p>{stations} stations - ¢{stations * 10} mln</p>
      <p>Total: ¢{length * 50 + stations * 10} mln</p>
      <AppMap onClick={updateLine} line={line} />
    </AppModule>
  )
}

export default GameMap;