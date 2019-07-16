import React from 'react';
import classes from './AppKeypadItem.module.css'

function AppKeypadItem({ id, updateAnswer }) {
  if (id === "") {
    return (
      <div className={classes.AppKeypadItemEmpty} />
    )
  } else {
    return (
      <div className={classes.AppKeypadItem} onClick={() => updateAnswer(id)}>
        {id}
      </div>
    )
  }
}

export default AppKeypadItem;