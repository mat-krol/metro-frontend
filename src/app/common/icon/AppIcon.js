import React from 'react';

import icon from '../../../assets/icon-white.png'
import classes from './AppIcon.module.css';

function AppIcon(props) {
  return (
    <div className={classes.AppIcon} style={{ ...props.style }}>
      <img src={icon} alt="Arithmetic" height={props.height} className={classes.AppIconImage}  />
    </div>
  )
}

export default AppIcon