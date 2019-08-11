import React from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '../../../../redux/selectors'

import classes from './AppHeaderScore.module.css'
import { MdSentimentNeutral, MdSentimentSatisfied, MdSentimentDissatisfied } from 'react-icons/md'

function AppHeaderScore() {
  const satisfaction = useSelector(selectors.getRoundSatisfaction)

  return (
    <div className={className(satisfaction)}>
      {satisfaction < 2 && <MdSentimentDissatisfied />}
      {satisfaction >= 2 && satisfaction <= 4 && <MdSentimentNeutral />}
      {satisfaction > 4 && <MdSentimentSatisfied />}
      <span>{satisfaction}</span>
    </div>
  )
}

const className = satisfaction => {
  const arr = [classes.AppHeaderScore]
  satisfaction < 1 && arr.push(classes.AppHeaderScore10)
  satisfaction >= 1 && satisfaction < 2 && arr.push(classes.AppHeaderScore15)
  satisfaction >= 2 && satisfaction < 3 && arr.push(classes.AppHeaderScore20)
  satisfaction >= 3 && satisfaction < 4 && arr.push(classes.AppHeaderScore25)
  satisfaction >= 4 && satisfaction < 6 && arr.push(classes.AppHeaderScore30)
  satisfaction >= 6 && satisfaction < 7 && arr.push(classes.AppHeaderScore35)
  satisfaction >= 7 && satisfaction < 8 && arr.push(classes.AppHeaderScore40)
  satisfaction >= 8 && satisfaction < 9 && arr.push(classes.AppHeaderScore45)
  satisfaction >= 9 && arr.push(classes.AppHeaderScore50)
  return arr.join(' ')
}

export default AppHeaderScore