import React from 'react';

import classes from './AppMapAreaItem.module.css';
// import { calculateCenter } from '../../../../../helpers/utils';

function AppMapAreaItem(props) {
  // const [x, y] = calculateCenter(props.d)
  // console.log(x, y, props.center)

  const handleToggle = () => {
    props.onClick(props.id, props.center)
  }

  return (
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
  )
}

const className = props => {
  const arr = [classes.AppMapAreaItem]
  props.population < 5 && arr.push(classes.AppMapAreaItemS)
  props.population >= 5 && props.population < 10 && arr.push(classes.AppMapAreaItemM)
  props.population >= 10 && props.population < 15 && arr.push(classes.AppMapAreaItemL)
  props.population >= 15 && arr.push(classes.AppMapAreaItemXL)
  return arr.join(' ')
}

export default AppMapAreaItem