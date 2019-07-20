import React from 'react';

import classes from './Backdrop.module.css';

function Backdrop(props) {
  return (
    <div className={className(props)} onClick={props.onClick} />
  )
}

const className = props => {
  const arr = [classes.Backdrop]
  props.sharp && arr.push(classes.BackdropSharp);
  props.color === "blue" && arr.push(classes.BackdropBlue)
  props.color === "black" && arr.push(classes.BackdropBlack)
  props.color === "deepblack" && arr.push(classes.BackdropDeepBlack)
  props.color === "white" && arr.push(classes.BackdropWhite)
  props.color === "transparent" && arr.push(classes.BackdropTransparent);
  props.show ? arr.push(classes.BackdropShow) : arr.push(classes.BackdropHide);
  return arr.join(' ')
}

export default Backdrop