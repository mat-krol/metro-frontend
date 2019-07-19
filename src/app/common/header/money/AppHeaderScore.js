import React from 'react';
import classes from './AppHeaderScore.module.css'
import { MdSentimentNeutral } from 'react-icons/md'

function AppHeaderScore({ duration, finishQuiz }) {
  return (
    <div className={classes.AppHeaderScore}>
      <MdSentimentNeutral />
      2.8
    </div>
  )
}

export default AppHeaderScore