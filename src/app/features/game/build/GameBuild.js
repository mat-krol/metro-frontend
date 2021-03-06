import React from 'react';
import _ from 'lodash';
import { actions } from '../../../../redux/leaves';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '../../../../redux/selectors'
import { updateModeBuild, finishModeBuild, finishModeExpand } from '../../../../redux/sagas/mode'

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
  const stations = useSelector(selectors.getModeBuildLineStations)
  const color = useSelector(selectors.getModeBuildLineColor)
  const build = useSelector(selectors.getModeBuildOngoing)
  const cost = useSelector(selectors.getModeBuildLineCostPlain)
  const show = useSelector(selectors.getModeBuildModal)
  const budget = useSelector(selectors.getRoundBudgetPlain)


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

  const finishExpand = () => {
    dispatch(finishModeExpand.trigger())
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
      <div style={{display: "flex", justifyContent: "center" }}>
        <Button inline text="Clear All" onClick={resetPoints} />
        <Button inline text="Cancel" to={ROUTES.GameHome} onClick={resetPoints} />
      </div>
      <div style={{display: "flex", justifyContent: "center" }}>
        <Button inline text="Save" to={ROUTES.GameHome} onClick={build ? finishBuild : finishExpand} disabled={cost > budget || stations < 2 } />
      </div>
      {cost > budget && <span style={{ fontSize: "10px" }}>You exceeded your budget</span>}
      {stations < 2 && <span style={{ fontSize: "10px" }}>You need at least 2 stations</span>}
    </AppModule>
  )
}

export default GameBuild;