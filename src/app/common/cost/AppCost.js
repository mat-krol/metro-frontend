import React from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '../../../redux/selectors'
import classes from './AppCost.module.css';

function AppCost(props) {
  const length = useSelector(selectors.getModeBuildLineLength)
  const stations = useSelector(selectors.getModeBuildLineStations)
  const cost = useSelector(selectors.getModeBuildLineCost)

  return (
    <div className={classes.AppCost}>
      <div className={classes.AppCostItem}>      
        <span>{stations} stations</span>
      </div>
      <div className={classes.AppCostItem}>      
        <span>{Math.floor(stations * 20)} mln</span>
      </div>
      <div className={classes.AppCostItem}>      
        <span>{length} km</span>
      </div>
      <div className={classes.AppCostItem}>      
        <span>{Math.floor(length * 100)} mln</span>
      </div>
      <div className={classes.AppCostItem}>      
        <span>Total</span>
      </div>
      <div className={classes.AppCostItem}>      
        <span>{cost} mln</span>
      </div>
    </div>
  )
}

export default AppCost