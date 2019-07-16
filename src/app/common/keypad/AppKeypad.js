import React from 'react';
import _ from 'lodash';

import classes from './AppKeypad.module.css'
import AppKeypadItem from './item/AppKeypadItem';

function AppKeypad(props) {
  return (
    <div className={classes.AppKeypad}>
      {_.map(keypad, item => (
        <AppKeypadItem key={item} id={item} updateAnswer={props.updateAnswer}>
        </AppKeypadItem>
      ))}
    </div>
  )
}

const keypad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0,]

export default AppKeypad;