import React from 'react';

import classes from './AppMapAreaItem.module.css';
// import { calculateCenter } from '../../../../../helpers/utils';

function AppMapAreaItem(props) {
  // const [x, y] = calculateCenter(props.d)

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
  if (props.showPop) {
    props.population < 5 && arr.push(classes.AppMapAreaItemS)
    props.population >= 5 && props.population < 10 && arr.push(classes.AppMapAreaItemM)
    props.population >= 10 && props.population < 15 && arr.push(classes.AppMapAreaItemL)
    props.population >= 15 && arr.push(classes.AppMapAreaItemXL)
  }
  if (props.showSat) {
    props.satisfaction < 2 && arr.push(classes.AppMapAreaItem2)
    props.satisfaction >= 2 && props.satisfaction < 3 && arr.push(classes.AppMapAreaItem3)
    props.satisfaction >= 3 && props.satisfaction < 4 && arr.push(classes.AppMapAreaItem4)
    props.satisfaction >= 4 && arr.push(classes.AppMapAreaItem5)
  }
  return arr.join(' ')
}

export default AppMapAreaItem