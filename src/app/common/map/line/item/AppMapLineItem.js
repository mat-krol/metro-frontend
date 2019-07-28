import React from 'react';
import { obtainLine } from '../../../../../helpers/utils';

function AppMapLineItem({ color, points, capacity }) {
  return (
    <path
      d={obtainLine(points)}
      fill="none"
      vectorEffect="non-scaling-stroke"
      strokeWidth={capacity || 3}
      stroke={color}
      strokeLinejoin="miter"
      strokeLinecap="square"
      strokeMiterlimit="3"
    />
  )
}

export default AppMapLineItem