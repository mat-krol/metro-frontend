import React from 'react';
import _ from 'lodash';
import { FaStar, FaRegStar } from 'react-icons/fa'

import classes from './Stars.module.css'

function Stars({ stars }) {
  return (
    <div className={classes.Stars} style={{ verticalAlign: "center" }}>
      {_.times(stars, index => (
        <FaStar style={{ color: "#FFD700" }} key={`${index + 1}-full`} />
      ))}
      {_.times(3 - stars, index => (
        <FaRegStar style={{ color: "#00000060" }} key={`${index + 1}-empty`} />
      ))}
    </div>
  )
}

export default Stars;