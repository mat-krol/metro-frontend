import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import * as selectors from '../../../../redux/selectors'

import AppMapLineItem from './item/AppMapLineItem';

function AppMapLine() {
  const lines = useSelector(selectors.getMapLines)

  return (
    <>
      {_.map(lines, item => (
        <AppMapLineItem {...item} />
      ))}
    </>
  )
}

export default AppMapLine