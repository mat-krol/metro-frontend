import React from 'react'
import { Link } from 'react-router-dom'

import classes from './OptionItem.module.css'

function OptionItem(props) {
  const Icon = props.icon
  if (props.to) {
    return (
      <Link to={props.to} onClick={props.onClick}>
        <button
          className={classes.OptionItem}
          disabled={props.disabled}
        >
          <div className={classes.OptionItemIcon}>
            <Icon style={{ fontSize: "24px" }} />
          </div>
          {props.text && <span>{props.text}</span>}
        </button>
      </Link>
    )
  } else {
    return (
      <button
        onClick={props.onClick}
        className={classes.OptionItem}
        disabled={props.disabled}
      >
        <div className={classes.OptionItemIcon}>
          <Icon style={{ fontSize: "24px" }} />
        </div>
        {props.text && <span>{props.text}</span>}
      </button>
    )
  }
}

export default OptionItem