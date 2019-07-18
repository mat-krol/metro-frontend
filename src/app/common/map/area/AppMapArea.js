import React from 'react';

import classes from './AppMapArea.module.css';
import { calculateCenter } from '../../../../helpers/utils';

function AppMapArea(props) {
  const [x, y] = calculateCenter(props.d)
  const [showCircle, setShowCircle] = React.useState(false)

  const handleToggle = () => {
    setShowCircle(!showCircle)
  }

  return (
    <>
      <path
        d={props.d}
        id={props.id}
        className={className(props)}
        onClick={handleToggle}
        fill="rgb(243,243,243)"
        vectorEffect="non-scaling-stroke"
        strokeWidth="3" stroke="rgb(255,255,255)"
        strokeLinejoin="miter" 
        strokeLinecap="square"
        strokeMiterlimit="3"
      />
      <circle
        vectorEffect="non-scaling-stroke"
        cx={x.toString()}
        cy={y.toString()}
        className={classNameCircle(showCircle)}
        r="6"
        fill="rgb(255,255,255)"
        strokeWidth="2"
        stroke="rgb(0,0,0)"
        strokeLinejoin="miter"
        strokeLinecap="square"
        strokeMiterlimit="2"
      />
    </>
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

const classNameCircle = show => {
  const arr = [classes.AppMapCircle]
  show && arr.push(classes.AppMapCircleShow)
  return arr.join(' ')
}

export default AppMapArea