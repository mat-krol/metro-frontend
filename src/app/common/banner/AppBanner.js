import React from 'react';

import logo from '../../../assets/icon-white.png'
import text from '../../../assets/text.png'
import classes from './AppBanner.module.css';

function AppBanner(props) {
  return (
    <div className={classes.AppBanner}>
      <img src={logo} alt="logo" style={{ width: "115px", marginBottom: "2rem"}} />
    </div>
  )
}

export default AppBanner