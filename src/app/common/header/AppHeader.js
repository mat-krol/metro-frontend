import React from 'react';
// import * as selectors from '../../../redux/selectors'
// import { useSelector } from 'react-redux';
// import { FaStar, FaUserAlt } from 'react-icons/fa'
// import { useDispatch } from 'react-redux';

// import { finishQuiz } from '../../../redux/sagas'

// import src from '../../../assets/logo.png'
import classes from './AppHeader.module.css';
import AppHeaderScore from './score/AppHeaderScore';
import AppHeaderDate from './date/AppHeaderDate';
import AppIcon from '../icon/AppIcon';
// import AppHeaderTimer from './timer/AppHeaderTimer';
// import ProgressBar from '../../../ui/progress/bar/ProgressBar';
// import AppIcon from '../icon/AppIcon';
// import AppHeaderExit from './exit/AppHeaderExit';

function AppHeader(props) {
  return (
    <div className={className(props)}>
        <AppIcon height="36px" />
        <AppHeaderScore />
        <AppHeaderDate />
    </div>
  )
  // const stars = useSelector(selectors.getUserStars)
  // const timer = useSelector(selectors.getQuizRoundTimer)
  // const dispatch = useDispatch()

  // const handleFinish = () => {
  //   dispatch(finishQuiz.trigger())
  // }

  // if (props.select) {
  //   return (
  //     <div className={classes.AppHeaderSelect}>
  //       <AppIcon height={24} style={{ justifySelf: "start" }} />
  //       <div className={classes.AppHeaderSelectStars}>
  //         <span>{stars}</span>
  //         <FaStar style={{ color: "#FFD700" }} />
  //       </div>
  //       <FaUserAlt style={{ fontSize: "22px", justifySelf: "end" }}  />
  //     </div>
  //   )
  // } else if (props.game) {
  //   return (
  //     <div className={classes.AppHeader}>
  //       <AppHeaderTimer duration={timer} finishQuiz={handleFinish} />
  //       <ProgressBar />
  //       <AppHeaderExit finishQuiz={handleFinish} />
  //     </div>
  //   )
  // } else {

}

const className = props => {
  const arr = [classes.AppHeader]
  props.type === "build" && arr.push(classes.AppHeaderBuild)
  return arr.join(' ')
}

export default AppHeader;