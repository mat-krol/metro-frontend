import React from 'react';
import _ from 'lodash';
import * as selectors from '../../../redux/selectors'
import { useSelector } from 'react-redux';

import classes from './AppSelection.module.css';
import AppSelectionItem from './item/AppSelectionItem';

function AppSelection(props) {
  const list = useSelector(selectors.getQuizList)

  return (
    <div className={classes.AppSelection}>
      {_.map(list, item => (
        <AppSelectionItem {...item} key={item.id} />
      ))}
    </div>
  )
}

export default AppSelection;