import React from 'react';
import classes from './AppHeaderStats.module.css'
import { FaCalendar, FaCoins, FaUserFriends } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import * as selectors from '../../../../redux/selectors'

function AppHeaderStats() {
  const budget = useSelector(selectors.getRoundBudget)
  const date = useSelector(selectors.getRoundDate)
  const population = useSelector(selectors.getRoundPopulation)
  // const stations = useSelector(selectors.getModeBuildLineStations)

    return (
    <div className={classes.AppHeaderStats}>
      <div className={classes.AppHeaderStatsItem}>
        <div className={classes.AppHeaderStatsIcon}>
          <FaCalendar />
        </div>
        <span>{date}</span>
      </div>
      <div className={classes.AppHeaderStatsItem}>
        <div className={classes.AppHeaderStatsIcon}>
          <FaCoins />
        </div>
        <span>{budget}</span>
      </div>
      <div className={classes.AppHeaderStatsItem}>
        <div className={classes.AppHeaderStatsIcon}>
          <FaUserFriends />
        </div>
        <span>{population.toLocaleString()}</span>
      </div>
    </div>
  )
}

export default AppHeaderStats