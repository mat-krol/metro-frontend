import React from 'react';

import classes from './AppHeader.module.css';
import AppHeaderScore from './score/AppHeaderScore';
import AppHeaderStats from './stats/AppHeaderStats';
import AppIcon from '../icon/AppIcon';

function AppHeader(props) {
  return (
    <>
      <div className={className(props)}>
          <AppIcon height="36px" />
          {props.satisfaction && <AppHeaderScore />}
      </div>
      <AppHeaderStats />
    </>
  )
}

const className = props => {
  const arr = [classes.AppHeader]
  props.type === "build" && arr.push(classes.AppHeaderBuild)
  return arr.join(' ')
}

export default AppHeader;