import React from 'react';
import { Link } from 'react-router-dom';

import classes from './DropdownItem.module.css';

function DropdownItem(props) {
  const { onClick, to } = props;
  if (to) {
    return (
      <Link to={to} onClick={onClick}>
        <button className={classes.DropdownItem} disabled={props.disabled}>
          {props.title}
        </button>
      </Link>
    )
  } else {
    return (
      <div className={classes.DropdownItem} onClick={props.onClick}>
        {props.title}
      </div>
    )
  }
}

export default DropdownItem