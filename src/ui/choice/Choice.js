import React from 'react'
import _ from 'lodash';
import classes from './Choice.module.css';

import ChoiceItem from './item/ChoiceItem';

function Choice(props) {
  return (
    <div className={classes.Choice}>
      {_.map(props.list, item => (
        <ChoiceItem
          horizontal={props.horizontal}
          key={item.text || item.key}
          disabled={item.disabled}
          icon={item.icon}
          onClick={item.onClick}
          src={item.src}
          to={item.to}
          text={item.text}
        />
      ))}
    </div>
  )
}

export default Choice