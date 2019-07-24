import React from 'react';
// import { useDispatch } from 'react-redux';
// import { startQuiz } from '../../../../redux/sagas'

import classes from './AppSelectionItem.module.css';
import Stars from '../../../../ui/stars/Stars';

function AppSelectionItem({ stars, name, id }) {
  // const dispatch = useDispatch()

  const handleStart= () => {
    // dispatch(startQuiz.trigger(id))
  }

  return (
    <div onClick={handleStart} className={classes.AppSelectionItem}>
      <Stars stars={stars} />
      <span>{name}</span>
    </div>
  )
}

export default AppSelectionItem;