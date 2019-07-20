import React from 'react';
import { obtainLine } from '../../../../../helpers/utils';

function AppMapLineItem({color, points}) {
  // const line = useSelector(selectors.getMapLine)
  // console.log(props)

  return (
    <path
      d={obtainLine(points)}
      fill="none"
      vectorEffect="non-scaling-stroke"
      strokeWidth="3"
      stroke={color}
      strokeLinejoin="miter"
      strokeLinecap="square"
      strokeMiterlimit="3"
    />
  )
}

export default AppMapLineItem