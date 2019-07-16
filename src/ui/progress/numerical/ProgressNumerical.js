import React from 'react'
import classes from './ProgressNumerical.module.css'

function ProgressNumerical(props) {
  return (
    <div className={classes.ProgressNumerical}>
      {showTime(props)}
    </div>
  )
}

const showTime = props => {
  const time = parseInt(props.text, 10);
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  if (seconds < 10) return `${minutes}:0${seconds}`
  else return `${minutes}:${seconds}`
}

export default ProgressNumerical