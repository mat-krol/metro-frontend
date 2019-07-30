import React from 'react'
import _ from 'lodash';
import classes from './Choice.module.css';

import ChoiceItem from './item/ChoiceItem';

function Choice(props) {
  return (
    <div className={classes.Choice}>
      {_.map(props.list, item => (
        <ChoiceItem
          key={item.text || item.key}
          {...item}
        />
      ))}
    </div>
  )
}

export default Choice