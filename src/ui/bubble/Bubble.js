import React from 'react';

import classes from './Bubble.module.css'
import InnerHTML from '../innerHtml/InnerHTML';

function Bubble(props) {
  return (
    <div className={classNamesHolder().join(' ')}>
      <div className={classNames().join(' ')}>
        <InnerHTML.span>{props.text}</InnerHTML.span>
      </div>
    </div>
  )
}

const classNamesHolder = () => [
  classes.BubbleHolder,
  classes.BubbleHolderLeft
  // props.left ? classes.BubbleHolderLeft : classes.BubbleHolderRight,
]

const classNames = () => [
  classes.Bubble,
  classes.BubbleLeft
  // props.left ? classes.BubbleLeft : classes.BubbleRight,
]

export default Bubble