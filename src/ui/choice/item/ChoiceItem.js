import React from 'react'
import { Link } from 'react-router-dom'
import { MdLock } from "react-icons/md";

import classes from './ChoiceItem.module.css'

function ChoiceItem(props) {
  return (
    <Link to={props.to} onClick={props.onClick}>
      <button
        className={classes.ChoiceItem}
        disabled={props.disabled}
      >
        {props.src && <img src={props.src} alt={props.text} style={{ height: "40px" }} />}
        {props.disabled && <MdLock />}
        {props.text && <span>{props.text}</span>}
        {props.score ? <span>{props.score.toFixed(1)}</span> : <span>-.-</span>}
      </button>
    </Link>
  )
}

export default ChoiceItem