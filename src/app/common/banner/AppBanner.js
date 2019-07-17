import React from 'react';

import logo from '../../../assets/logo.png'
import text from '../../../assets/text.png'
import classes from './AppBanner.module.css';

function AppBanner(props) {
  return (
    <div className={classes.AppBanner}>
      <img src={logo} alt="logo" style={{ width: "115px", marginBottom: "2rem"}} />
      <img src={text} alt="text" style={{ width: "250px"}} />
    </div>
  )
}

export default AppBanner