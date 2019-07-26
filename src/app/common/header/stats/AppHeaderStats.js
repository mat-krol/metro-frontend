import React from 'react';
import _ from 'lodash'
import { useSelector } from 'react-redux';
import * as selectors from '../../../../redux/selectors'

import classes from './AppHeaderStats.module.css'
import AppHeaderStatsItem from './item/AppHeaderStatsItem';

function AppHeaderStats() {
  const budget = useSelector(selectors.getRoundBudget)
  const date = useSelector(selectors.getRoundDate)
  const population = useSelector(selectors.getRoundPopulation)

  const list = [
    { key: 0, text: "Budget", variable: budget },
    { key: 1, text: "Date", variable: date },
    { key: 2, text: "Population", variable: population },
  ]

    return (
    <div className={classes.AppHeaderStats}>
      {_.map(list, item => (
        <AppHeaderStatsItem { ...item } />
      ))}
    </div>
  )
}

export default AppHeaderStats