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
    props.population < 5 && arr.push(classes.AppMapAreaItemPopulation00)
    props.population >= 5 && props.population < 10 && arr.push(classes.AppMapAreaItemPopulation05)
    props.population >= 10 && props.population < 15 && arr.push(classes.AppMapAreaItemPopulation10)
    props.population >= 15 && props.population < 20 && arr.push(classes.AppMapAreaItemPopulation15)
    props.population >= 20 && props.population < 25 && arr.push(classes.AppMapAreaItemPopulation20)
    props.population >= 25 && props.population < 30 && arr.push(classes.AppMapAreaItemPopulation25)
    props.population >= 30 && props.population < 40 && arr.push(classes.AppMapAreaItemPopulation30)
    props.population >= 40 && props.population < 60 && arr.push(classes.AppMapAreaItemPopulation40)
    props.population >= 60 && props.population < 75 && arr.push(classes.AppMapAreaItemPopulation60)
    props.population >= 75 && props.population < 100 && arr.push(classes.AppMapAreaItemPopulation75)
    props.population >= 100 && arr.push(classes.AppMapAreaItemPopulation99)
  }
  if (props.showSat) {
    props.satisfaction < 1.25 && arr.push(classes.AppMapAreaItemSatisfaction10)
    props.satisfaction >= 1.25 && props.satisfaction < 1.75 && arr.push(classes.AppMapAreaItemSatisfaction15)
    props.satisfaction >= 1.75 && props.satisfaction < 2.25 && arr.push(classes.AppMapAreaItemSatisfaction20)
    props.satisfaction >= 2.25 && props.satisfaction < 2.75 && arr.push(classes.AppMapAreaItemSatisfaction25)
    props.satisfaction >= 2.75 && props.satisfaction < 3.25 && arr.push(classes.AppMapAreaItemSatisfaction30)
    props.satisfaction >= 3.25 && props.satisfaction < 3.75 && arr.push(classes.AppMapAreaItemSatisfaction35)
    props.satisfaction >= 3.75 && props.satisfaction < 4.25 && arr.push(classes.AppMapAreaItemSatisfaction40)
    props.satisfaction >= 4.25 && props.satisfaction < 4.75 && arr.push(classes.AppMapAreaItemSatisfaction45)
    props.satisfaction >= 4.75 && arr.push(classes.AppMapAreaItemSatisfaction50)
  }
  return arr.join(' ')
}

export default AppMapAreaItem