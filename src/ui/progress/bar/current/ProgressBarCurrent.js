import React from 'react';
import classes from './ProgressBarCurrent.module.css'

function ProgressBarCurrent({ score, maximum }) {
  return (
    <div
      style={{ width: `${calcCurrentWidth(score, maximum)}%` }}
      className={classes.ProgressBarCurrent}
    />
  )
}

const calcCurrentWidth = (score, maximum) => {
  return score / maximum * 100
}

export default ProgressBarCurrent;