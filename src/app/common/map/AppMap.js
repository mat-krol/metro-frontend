import React from 'react';

import classes from './AppMap.module.css';
import AppMapArea from './area/AppMapArea';
import AppMapCircle from './circle/AppMapCircle';
import AppMapLine from './line/AppMapLine';

function AppMap({ onClick }) {
  return (
    <svg viewBox="0 0 600 600" className={classes.AppMap}>
      <defs>
        <clipPath id="app_map">
          <rect width="600" height="600"/>
        </clipPath>
      </defs>
      <g clipPath="url(#app_map)">
        <AppMapArea onClick={onClick} />
        <AppMapLine />
        <AppMapCircle />
      </g>
    </svg>
  )
}

export default AppMap