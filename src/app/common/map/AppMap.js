import React from 'react'; 

import classes from './AppMap.module.css';
import AppMapArea from './area/AppMapArea';
import AppMapCircle from './circle/AppMapCircle';
import AppMapLine from './line/AppMapLine';

function AppMap({ onClick }) {
  return (
    <svg viewBox="0 0 600 600" className={classes.AppMap} preserveAspectRatio="xMidYMin meet">
      <AppMapArea onClick={onClick} />
      <AppMapLine />
      <AppMapCircle />
      <path d=" M 539 594 L 539 599 L 599 599 L 599 594" fill="none" vectorEffect="non-scaling-stroke" strokeWidth="1" stroke="rgb(0,0,0)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
      <text transform="matrix(1,0,0,1,517,599.551)" style={{ fontFamily: "Open Sans", fontWeight: "400", fontSize: "8px", fontStyle: "normal", fill: "#000000", stroke: "none" }}>1 km</text>
    </svg>
  )
}

export default AppMap