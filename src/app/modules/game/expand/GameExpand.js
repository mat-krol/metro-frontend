import React from 'react';
import _ from 'lodash';
import { actions } from '../../../../redux/leaves';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '../../../../redux/selectors'
import { updateModeExpand, finishModeBuild } from '../../../../redux/sagas'

import AppHeader from '../../../common/header/AppHeader';
import AppMap from '../../../common/map/AppMap';
import AppModule from '../../../common/module';
import AppMapLineItem from '../../../common/map/line/item/AppMapLineItem';
import Button from '../../../../ui/button/Button';
import { ROUTES } from '../../../constants/routes';
import AppMapCircleItem from '../../../common/map/circle/item/AppMapCircleItem';
import AppCost from '../../../common/cost/AppCost';
import AppModalExpand from '../../../common/modal/expand/AppModalExpand';

function GameExpand() {
  const dispatch = useDispatch()
  const points = useSelector(selectors.getModeExpandLinePoints)
  const color = useSelector(selectors.getModeExpandLineColor)
  const budget = useSelector(selectors.getGameBudget)
  const cost = useSelector(selectors.getModeExpandLineCost)
  const show = useSelector(selectors.getModeExpandModal)

  const updateLine = (id, arr) => {
    var position = Object.keys(points).length;
    const point = {
      initial: position === 0,
      id: id,
      x: arr[0],
      y: arr[1],
      key: position
    }
    dispatch(updateModeExpand.trigger(point))
  }

  const finishBuild = () => {
    dispatch(finishModeBuild.trigger())
  }

  const resetPoints = () => {
    dispatch(actions.mode.build.line.points.create.reset())
  }

  return (
    <AppModule header >
      <AppModalExpand show={show} />
      <AppHeader type="build" />
      <AppMap onClick={updateLine}>
        <AppMapLineItem color={color} points={points} />
        {_.map(points, item => (
          <AppMapCircleItem {...item} />
        ))}
      </AppMap>
      <AppCost />
      <Button text="Clear All" onClick={resetPoints} />
      <Button text="Save" to={ROUTES.GameHome} onClick={finishBuild} disabled={cost > budget} />
      {cost > budget && <p>You've gone above budget!</p>}
    </AppModule>
  )
}

export default GameExpand;