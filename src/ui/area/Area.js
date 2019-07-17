import React from 'react';

import classes from './Area.module.css';

function Area(props) {
  return (
    <path
      d={props.d}
      key={props.id}
      className={className(props)}
      fill="rgb(243,243,243)"
      vectorEffect="non-scaling-stroke"
      strokeWidth="3" stroke="rgb(255,255,255)"
      strokeLinejoin="miter" 
      strokeLinecap="square"
      strokeMiterlimit="3"
    />
  )
}

const className = props => {
  const arr = [classes.Area]
  // props.sharp && arr.push(classes.AreaSharp);
  // props.color === "blue" && arr.push(classes.AreaBlue)
  // props.color === "black" && arr.push(classes.AreaBlack)
  // props.color === "white" && arr.push(classes.AreaWhite)
  // props.color === "transparent" && arr.push(classes.AreaTransparent);
  // props.show ? arr.push(classes.AreaShow) : arr.push(classes.AreaHide);
  return arr.join(' ')
}

export default Area