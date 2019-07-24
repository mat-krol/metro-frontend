import React from 'react';
import { Link } from 'react-router-dom'


import icon from '../../../assets/icon-blue.png'
import classes from './AppIcon.module.css';
import { ROUTES } from '../../constants/routes';

function AppIcon(props) {
  return (
    <Link to={ROUTES.IntroSelect}>
      <img src={icon} alt="Logo" height={props.height} className={classes.AppIconImage}  />
    </Link>
  )
}

export default AppIcon