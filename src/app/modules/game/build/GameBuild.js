import React from 'react';
import _ from 'lodash';
// import { actions } from '../../../../redux/leaves';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '../../../../redux/selectors'
import { updateModeBuild, finishModeBuild } from '../../../../redux/sagas'

import AppHeader from '../../../common/header/AppHeader';
import AppMap from '../../../common/map/AppMap';
import AppModule from '../../../common/module';
import AppMapLineItem from '../../../common/map/line/item/AppMapLineItem';
import Button from '../../../../ui/button/Button';
import { ROUTES } from '../../../constants/routes';
import AppMapCircleItem from '../../../common/map/circle/item/AppMapCircleItem';

function GameBuild() {
  const dispatch = useDispatch()
  const points = useSelector(selectors.getModeBuildLinePoints)
  const color = useSelector(selectors.getModeBuildLineColor)
  const length = useSelector(selectors.getModeBuildLineLength)
  const stations = useSelector(selectors.getModeBuildLineStations)
  const cost = useSelector(selectors.getModeBuildLineCost)

  const updateLine = (id, arr) => {
    var position = Object.keys(points).length;
    const point = {
      // [position]: {
        initial: position === 0,
        id: id,
        x: arr[0],
        y: arr[1],
        key: position
      // }
    }
    dispatch(updateModeBuild.trigger(point))
  }

  const finishBuild = () => {
    dispatch(finishModeBuild.trigger())
  }

  return (
    <AppModule header >
      <AppHeader type="build" />
      <AppMap onClick={updateLine}>
        <AppMapLineItem color={color} points={points} />
        {_.map(points, item => (
          <AppMapCircleItem {...item} />
        ))}
      </AppMap>
      <p>{stations} cost {stations * 20} mln</p>
      <p>{length} km cost {length * 100} mln</p>
      <p>Total is {cost} mln</p>
      <Button text="Save" to={ROUTES.GameHome} onClick={finishBuild} />
    </AppModule>
  )
}

export default GameBuild;