import React from 'react';

import classes from './Dropdown.module.css';
import Backdrop from '../backdrop/Backdrop';
import DropdownItem from './item/DropdownItem';

function Dropdown(props) {
  if (props.show) {
    return (
      <>
        <div className={classes.Dropdown}>
          {props.children}
        </div>
        <Backdrop transparent />
      </>
    )
  } else {
    return null
  }
}

Dropdown.Item = DropdownItem

export default Dropdown