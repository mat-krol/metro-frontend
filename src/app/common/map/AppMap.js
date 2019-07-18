import React from 'react';
import _ from 'lodash';

import classes from './AppMap.module.css';
import AppMapArea from './area/AppMapArea';
import { calculateCenter, obtainLine } from '../../../helpers/utils';

function AppMap({ map, onClick, line }) {
  console.log(obtainLine(line), line)
  return (
    <svg viewBox="0 0 600 600" className={classes.AppMap}>
      <defs>
        <clipPath id="app_map">
          <rect width="600" height="600"/>
        </clipPath>
      </defs>
      <g clipPath="url(#app_map)">
        {_.map(map, item => (
          <AppMapArea {...item} key={item.id} onClick={onClick} />
          ))}
        <path d={obtainLine(line)} fill="none" vectorEffect="non-scaling-stroke" strokeWidth="3" stroke="#22b3fa" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
      </g>
    </svg>
  )
}

export default AppMap