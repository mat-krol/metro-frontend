import React from 'react'
import classes from './ButtonContent.module.css'

function ButtonContent(props) {
  return (
    <button
      className={className(props)}
      onClick={props.onClick}
      disabled={props.disabled}
      style={props.style}
    >
      {props.text}
    </button>
  )
}

const className = props => {
  const arr = [classes.Button]
  props.animated && arr.push(classes.ButtonAnimated);
  props.inline && arr.push(classes.ButtonInline);
  props.color === "teal" && arr.push(classes.ButtonTeal);
  return arr.join(' ')
}

// const makeOnClickHandler = props => {
//   if (props.onClick) return props.onClick()
// }

export default ButtonContent