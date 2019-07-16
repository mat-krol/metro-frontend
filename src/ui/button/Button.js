import React from 'react'
import { Link } from 'react-router-dom'

import ButtonContent from './content/ButtonContent';

function Button(props) {
  const { onClick, to, ...rest } = props;
  if (to) {
    return (
      <Link to={to} onClick={onClick}>
        <ButtonContent {...rest} />
      </Link>
    )
  } else {
    return <ButtonContent {...rest} onClick={onClick} />
  }
}

export default Button