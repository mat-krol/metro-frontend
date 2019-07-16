import React from 'react';
import _ from 'lodash';

import ProgressBarStarsItem from './item/ProgressBarStarsItem';

function ProgressBarStars(props) {
  return (
    <>
      {_.map([0, 1, 2], item => (
        <ProgressBarStarsItem
          key={item}
          full={props.stars > item}
          left={calcPositionLeft(item, props.tiers)}
        />
      ))}
    </>
  )
}

const calcPositionLeft = (id, tiers) => {
  switch (id) {
    case 0: return `calc(${tiers[0] / tiers[2] * 100}% - 9px)`;
    case 1: return `calc(${tiers[1] / tiers[2] * 100}% - 9px)`;
    case 2: return "calc(100% - 18px)";
    default: return "calc(100% - 18px)";
  }
}

export default ProgressBarStars;