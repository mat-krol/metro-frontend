import React from 'react';
import classes from './AppHeaderDate.module.css'
import { FaCalendar, FaCoins } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import * as selectors from '../../../../redux/selectors'

function AppHeaderDate() {
  const budget = useSelector(selectors.getGameBudget)
  // const stations = useSelector(selectors.getModeBuildLineStations)

    return (
    <div className={classes.AppHeaderDate}>
      <div className={classes.AppHeaderDateItem}>
        <div className={classes.AppHeaderDateIcon}>
          <FaCalendar />
        </div>
        <span>20 May 2019</span>
      </div>
      <div className={classes.AppHeaderDateItem}>
        <div className={classes.AppHeaderDateIcon}>
          <FaCoins />
        </div>
        <span>{budget} mln</span>
      </div>
    </div>
  )
}

export default AppHeaderDate