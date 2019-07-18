import React from 'react';
import { useSelector } from 'react-redux';
import { obtainLine } from '../../../../helpers/utils';
import * as selectors from '../../../../redux/selectors'

function AppMapLine() {
  const line = useSelector(selectors.getMapLine)

  return (
    <path
      d={obtainLine(line)}
      fill="none"
      vectorEffect="non-scaling-stroke"
      strokeWidth="3"
      stroke="#22b3fa"
      strokeLinejoin="miter"
      strokeLinecap="square"
      strokeMiterlimit="3"
    />
  )
}

export default AppMapLine