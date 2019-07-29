import React from 'react';

import classes from './AppMapAreaItem.module.css';
// import { calculateCenter } from '../../../../../helpers/utils';

function AppMapAreaItem(props) {
  // const [x, y] = calculateCenter(props.d)

  const handleToggle = () => {
    props.onClick && props.onClick(props.id, props.center)
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
      {/* <rect x="90.343" y="81.465" width="114.657" height="45.535" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
      <text transform="matrix(1,0,0,1,99.149,98.826)" style={{ fontFamily: 'Open Sans', fontWeight: "400", fontSize: "12px" }}>Population: 200K</text>
      <text transform="matrix(1,0,0,1,102.761,115.168)" style={{ fontFamily: 'Open Sans', fontWeight: "400", fontSize: "12px" }}>Satisfaction: 2.8</text> */}
    </>
  )
}

const className = props => {
  const { population, satisfaction } = props.metro
  const arr = [classes.AppMapAreaItem]
  if (props.showPop) {
    population < 5 && arr.push(classes.AppMapAreaItemPopulation00)
    population >= 5 && population < 10 && arr.push(classes.AppMapAreaItemPopulation05)
    population >= 10 && population < 15 && arr.push(classes.AppMapAreaItemPopulation10)
    population >= 15 && population < 20 && arr.push(classes.AppMapAreaItemPopulation15)
    population >= 20 && population < 25 && arr.push(classes.AppMapAreaItemPopulation20)
    population >= 25 && population < 30 && arr.push(classes.AppMapAreaItemPopulation25)
    population >= 30 && population < 40 && arr.push(classes.AppMapAreaItemPopulation30)
    population >= 40 && population < 60 && arr.push(classes.AppMapAreaItemPopulation40)
    population >= 60 && population < 75 && arr.push(classes.AppMapAreaItemPopulation60)
    population >= 75 && population < 100 && arr.push(classes.AppMapAreaItemPopulation75)
    population >= 100 && arr.push(classes.AppMapAreaItemPopulation99)
  }
  if (props.showSat) {
    satisfaction <= 1.0 && arr.push(classes.AppMapAreaItemSatisfaction10)
    satisfaction > 1.0 && satisfaction <= 1.5 && arr.push(classes.AppMapAreaItemSatisfaction15)
    satisfaction > 1.5 && satisfaction <= 2.0 && arr.push(classes.AppMapAreaItemSatisfaction20)
    satisfaction > 2.0 && satisfaction <= 2.5 && arr.push(classes.AppMapAreaItemSatisfaction25)
    satisfaction > 2.5 && satisfaction < 3.5 && arr.push(classes.AppMapAreaItemSatisfaction30)
    satisfaction >= 3.5 && satisfaction < 4.0 && arr.push(classes.AppMapAreaItemSatisfaction35)
    satisfaction >= 4.0 && satisfaction < 4.5 && arr.push(classes.AppMapAreaItemSatisfaction40)
    satisfaction >= 4.5 && satisfaction < 5.0 && arr.push(classes.AppMapAreaItemSatisfaction45)
    satisfaction >= 5.0 && arr.push(classes.AppMapAreaItemSatisfaction50)
  }
  return arr.join(' ')
}

export default AppMapAreaItem