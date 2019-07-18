import React from 'react';

import classes from './AppMapArea.module.css';

function AppMapArea(props) {
  return (
    <path
      d={props.d}
      id={props.id}
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
  const arr = [classes.AppMapArea]
  props.population < 5 && arr.push(classes.AppMapAreaS)
  props.population >= 5 && props.population < 10 && arr.push(classes.AppMapAreaM)
  props.population >= 10 && props.population < 15 && arr.push(classes.AppMapAreaL)
  props.population >= 15 && arr.push(classes.AppMapAreaXL)
  return arr.join(' ')
}

export default AppMapArea