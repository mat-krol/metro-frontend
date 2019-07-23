import React from 'react';
import _ from 'lodash';
import { actions } from '../../../../redux/leaves';
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
import AppCost from '../../../common/cost/AppCost';
import AppModalExpand from '../../../common/modal/expand/AppModalExpand';

function GameBuild() {
  const dispatch = useDispatch()
  const points = useSelector(selectors.getModeBuildLineBranchPoints)
  const color = useSelector(selectors.getModeBuildLineColor)
  const budget = useSelector(selectors.getGameBudget)
  const cost = useSelector(selectors.getModeBuildLineCost)
  const show = useSelector(selectors.getModeBuildModal)

  const updateLine = (id, arr) => {
    var position = Object.keys(points).length;
    const point = {
      initial: position === 0,
      id: id,
      x: arr[0],
      y: arr[1],
      key: position
    }
    dispatch(updateModeBuild.trigger(point))
  }

  const finishBuild = () => {
    dispatch(finishModeBuild.trigger())
  }

  const resetPoints = () => {
    dispatch(actions.mode.build.line.branch[0].create.reset())
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

export default GameBuild;