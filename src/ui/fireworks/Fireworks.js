import React from 'react'
import classes from './Fireworks.module.css';

function Fireworks(props) {
  return (
    <div className={classes.pyro}>
      <div className={classes.before}></div>
      <div className={classes.after}></div>
    </div>
  )
}

export default Fireworks