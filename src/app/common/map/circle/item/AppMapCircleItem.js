import React from 'react';

function AppMapCircleItem({ x, y }) {
  return (
    <circle
      vectorEffect="non-scaling-stroke"
      cx={x.toString()}
      cy={y.toString()}
      r="6"
      fill="rgb(255,255,255)"
      strokeWidth="2"
      stroke="rgb(0,0,0)"
      strokeLinejoin="miter"
      strokeLinecap="square"
      strokeMiterlimit="2"
    />
  )
}

export default AppMapCircleItem