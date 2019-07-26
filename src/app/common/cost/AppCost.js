import React from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '../../../redux/selectors'
import classes from './AppCost.module.css';
import AppHeaderStatsItem from '../header/stats/item/AppHeaderStatsItem';

function AppCost(props) {
  const cost = useSelector(selectors.getModeBuildLineCost)
  const length = useSelector(selectors.getModeBuildLineLength)
  const stations = useSelector(selectors.getModeBuildLineStations)

  return (
    <div className={classes.AppCost}>
      <AppHeaderStatsItem text="Kilometers" variable={length} />
      <AppHeaderStatsItem text="Total" variable={cost} />
      <AppHeaderStatsItem text="Stations" variable={stations} />
    </div>
  )
}

export default AppCost