import React from 'react';
import * as selectors from '../../../redux/selectors'
import { useSelector } from 'react-redux';
import { FaStar, FaUserAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux';

import { finishQuiz } from '../../../redux/sagas'

import classes from './AppHeader.module.css';
import AppHeaderTimer from './timer/AppHeaderTimer';
import ProgressBar from '../../../ui/progress/bar/ProgressBar';
import AppIcon from '../icon/AppIcon';
import AppHeaderExit from './exit/AppHeaderExit';

function AppHeader(props) {
  const stars = useSelector(selectors.getUserStars)
  const timer = useSelector(selectors.getQuizRoundTimer)
  const dispatch = useDispatch()

  const handleFinish = () => {
    dispatch(finishQuiz.trigger())
  }

  if (props.select) {
    return (
      <div className={classes.AppHeaderSelect}>
        <AppIcon height={22} style={{ justifySelf: "start" }} />
        <div className={classes.AppHeaderSelectStars}>
          <span>{stars}</span>
          <FaStar style={{ color: "#FFD700" }} />
        </div>
        <FaUserAlt style={{ fontSize: "22px", justifySelf: "end" }}  />
      </div>
    )
  } else {
    return (
      <div className={classes.AppHeader}>
        <AppHeaderTimer duration={timer} finishQuiz={handleFinish} />
        <ProgressBar />
        <AppHeaderExit finishQuiz={handleFinish} />
      </div>
    )
  }
}

export default AppHeader;