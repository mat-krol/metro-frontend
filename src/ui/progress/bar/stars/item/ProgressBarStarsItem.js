import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'
import classes from './ProgressBarStarsItem.module.css'

function ProgressBarStarsItem(props) {
  if (props.full) {
    return (
      <FaStar className={className(props)} style={{ color: "#FFD700", left: props.left }} />
    )
  }
  return (
    <FaRegStar className={className(props)} style={{ color: "#00000060", left: props.left }} />
  )
}

const className = props => {
  const arr = [classes.ProgressBarStarsItem]
  props.full && arr.push(classes.ProgressBarStarsItemFull);
  return arr.join(' ')
}

export default ProgressBarStarsItem;