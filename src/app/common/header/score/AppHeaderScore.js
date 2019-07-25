import React from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '../../../../redux/selectors'

import classes from './AppHeaderScore.module.css'
import { MdSentimentNeutral } from 'react-icons/md'

function AppHeaderScore() {
  const satisfaction = useSelector(selectors.getGameSatisfaction)

  return (
    <div className={classes.AppHeaderScore}>
      <MdSentimentNeutral />
      <span>{satisfaction}</span>
    </div>
  )
}

export default AppHeaderScore