import React from 'react';
import classes from './AppHeaderDate.module.css'
import { FaCalendar, FaCoins, FaUserFriends } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import * as selectors from '../../../../redux/selectors'

function AppHeaderDate() {
  const budget = useSelector(selectors.getGameBudget)
  const date = useSelector(selectors.getRoundDate)
  const population = useSelector(selectors.getGamePopulation)
  // const stations = useSelector(selectors.getModeBuildLineStations)

    return (
    <div className={classes.AppHeaderDate}>
      <div className={classes.AppHeaderDateItem}>
        <div className={classes.AppHeaderDateIcon}>
          <FaCalendar />
        </div>
        <span>{date}</span>
      </div>
      <div className={classes.AppHeaderDateItem}>
        <div className={classes.AppHeaderDateIcon}>
          <FaCoins />
        </div>
        <span>{budget} mln</span>
      </div>
      <div className={classes.AppHeaderDateItem}>
        <div className={classes.AppHeaderDateIcon}>
          <FaUserFriends />
        </div>
        <span>{population.toLocaleString()}</span>
      </div>
    </div>
  )
}

export default AppHeaderDate