import React from 'react';
import * as selectors from '../../../redux/selectors'
import { useSelector } from 'react-redux';

import classes from './ProgressBar.module.css'
import ProgressBarStars from './stars/ProgressBarStars';
import ProgressBarCurrent from './current/ProgressBarCurrent';

function ProgressBar(props) {
  const score = useSelector(selectors.getQuizRoundScore)
  const stars = useSelector(selectors.getQuizRoundStars)
  const tiers = useSelector(selectors.getQuizRoundTiers)

  return (
    <div className={classes.ProgressBar}>
      <ProgressBarCurrent {...props} score={score} maximum={tiers[2]} />
      <ProgressBarStars tiers={tiers} stars={stars} />
    </div>
  )
}

export default ProgressBar;