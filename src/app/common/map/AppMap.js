import React from 'react';
import _ from 'lodash';

import classes from './AppMap.module.css';
import AppMapArea from './area/AppMapArea';

function AppMap({ map }) {
  return (
    <svg viewBox="0 0 600 600" className={classes.AppMap}>
      <defs>
        <clipPath id="app_map">
          <rect width="600" height="600"/>
        </clipPath>
      </defs>
      <g clipPath="url(#app_map)">
        {_.map(map, item => (
          <AppMapArea {...item} key={item.id}/>
        ))}
        <circle vectorEffect="non-scaling-stroke" cx="124.5314142981241" cy="200.11627960205078" r="7.558139534883708" fill="rgb(255,255,255)" strokeWidth="2" stroke="rgb(0,0,0)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="2"/>
      </g>
    </svg>
  )
}

export default AppMap