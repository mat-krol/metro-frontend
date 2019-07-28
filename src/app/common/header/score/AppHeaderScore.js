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
  satisfaction < 1.25 && arr.push(classes.AppHeaderScore10)
  satisfaction >= 1.25 && satisfaction < 1.75 && arr.push(classes.AppHeaderScore15)
  satisfaction >= 1.75 && satisfaction < 2.25 && arr.push(classes.AppHeaderScore20)
  satisfaction >= 2.25 && satisfaction < 2.75 && arr.push(classes.AppHeaderScore25)
  satisfaction >= 2.75 && satisfaction < 3.25 && arr.push(classes.AppHeaderScore30)
  satisfaction >= 3.25 && satisfaction < 3.75 && arr.push(classes.AppHeaderScore35)
  satisfaction >= 3.75 && satisfaction < 4.25 && arr.push(classes.AppHeaderScore40)
  satisfaction >= 4.25 && satisfaction < 4.75 && arr.push(classes.AppHeaderScore45)
  satisfaction >= 4.75 && arr.push(classes.AppHeaderScore50)
  return arr.join(' ')
}

export default AppHeaderScore