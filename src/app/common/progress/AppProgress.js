import React from 'react';
import classes from './AppProgress.module.css';
import Progress from '../../../ui/progress/Progress';

function AppProgress(props) {
  return (
    <div className={classes.AppProgress}>
      <Progress text="HP" progress={props.brainlien.health} color="#1f5ec4" />
      <Progress text="XP" progress={props.brainlien.exp} color="#108f69" />
    </div>
  )
}

export default AppProgress;