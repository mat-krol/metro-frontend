import React from 'react';

import classes from './AppMap.module.css';
import AppMapArea from './area/AppMapArea';
import { obtainLine } from '../../../helpers/utils';
import AppMapCircle from './circle/AppMapCircle';

function AppMap({ onClick, line }) {
  return (
    <svg viewBox="0 0 600 600" className={classes.AppMap}>
      <defs>
        <clipPath id="app_map">
          <rect width="600" height="600"/>
        </clipPath>
      </defs>
      <g clipPath="url(#app_map)">
        <AppMapArea onClick={onClick} />
        <AppMapCircle />
        <path d={obtainLine(line)} fill="none" vectorEffect="non-scaling-stroke" strokeWidth="3" stroke="#22b3fa" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
      </g>
    </svg>
  )
}

export default AppMap