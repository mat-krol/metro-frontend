import React from 'react';
import classes from './AppHeaderStatsItem.module.css'

function AppHeaderStatsItem({ variable, text }) {
  return (
    <div className={classes.AppHeaderStatsItem}>
      <span>{variable}</span>
      <p>{text}</p>
    </div>
  )
}

export default AppHeaderStatsItem