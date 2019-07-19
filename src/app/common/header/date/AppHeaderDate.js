import React from 'react';
import classes from './AppHeaderDate.module.css'
import { FaCalendar, FaCoins } from 'react-icons/fa'

function AppHeaderDate() {
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
        <span>500 mln</span>
      </div>
    </div>
  )
}

export default AppHeaderDate