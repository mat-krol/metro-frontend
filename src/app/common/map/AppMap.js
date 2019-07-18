import React from 'react';
import _ from 'lodash';

import classes from './AppMap.module.css';
import AppMapArea from './area/AppMapArea';
import { calculateCenter } from '../../../helpers/utils';

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
        {/* <path d=" M 100 200 Q 321.255 188.96 361.567 254.651 C 401.88 320.342 307.957 309.064 271 397 Q 234.043 484.936 239 541" fill="none" vectorEffect="non-scaling-stroke" strokeWidth="3" stroke="rgb(255,0,0)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/> */}
        <path d="M 100 200 L 300 200 L 300 300 L 250 500" fill="none" vectorEffect="non-scaling-stroke" strokeWidth="3" stroke="rgb(255,0,0)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
        <circle vectorEffect="non-scaling-stroke" cx="100" cy="200" r="6" fill="rgb(255,255,255)" strokeWidth="2" stroke="rgb(0,0,0)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="2"/>
        {/* <circle vectorEffect="non-scaling-stroke" cx="300" cy="200" r="6" fill="rgb(255,255,255)" strokeWidth="2" stroke="rgb(0,0,0)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="2"/> */}
      </g>
    </svg>
  )
}

export default AppMap