import React from 'react';
import classes from './AppHeaderDate.module.css'
import { FaCalendar } from 'react-icons/fa'

function AppHeaderDate() {
  return (
    <div className={classes.AppHeaderDate}>
      <div className={classes.AppHeaderDateIcon}>
        <FaCalendar />
      </div>
      <span>20 May</span>
    </div>
  )
}

export default AppHeaderDate