import React from 'react';

import classes from './AppMapAreaItem.module.css';
// import { calculateCenter } from '../../../../../helpers/utils';

function AppMapAreaItem(props) {
  // const [x, y] = calculateCenter(props.d)

  const handleToggle = () => {
    props.onClick && props.onClick(props.id, props.center)
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
    props.population < 15 && arr.push(classes.AppMapAreaItemS)
    props.population >= 15 && props.population < 25 && arr.push(classes.AppMapAreaItemM)
    props.population >= 25 && props.population < 35 && arr.push(classes.AppMapAreaItemL)
    props.population >= 35 && arr.push(classes.AppMapAreaItemXL)
  }
  if (props.showSat) {
    props.satisfaction < 1.25 && arr.push(classes.AppMapAreaItem10)
    props.satisfaction >= 1.25 && props.satisfaction < 1.75 && arr.push(classes.AppMapAreaItem15)
    props.satisfaction >= 1.75 && props.satisfaction < 2.25 && arr.push(classes.AppMapAreaItem20)
    props.satisfaction >= 2.25 && props.satisfaction < 2.75 && arr.push(classes.AppMapAreaItem25)
    props.satisfaction >= 2.75 && props.satisfaction < 3.25 && arr.push(classes.AppMapAreaItem30)
    props.satisfaction >= 3.25 && props.satisfaction < 3.75 && arr.push(classes.AppMapAreaItem35)
    props.satisfaction >= 3.75 && props.satisfaction < 4.25 && arr.push(classes.AppMapAreaItem40)
    props.satisfaction >= 4.25 && props.satisfaction < 4.75 && arr.push(classes.AppMapAreaItem45)
    props.satisfaction >= 4.75 && arr.push(classes.AppMapAreaItem50)
  }
  return arr.join(' ')
}

export default AppMapAreaItem