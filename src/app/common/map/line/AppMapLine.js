import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import * as selectors from '../../../../redux/selectors'

import AppMapLineItem from './item/AppMapLineItem';

function AppMapLine() {
  const lines = useSelector(selectors.getMapLines)

  return (
    <>
      {_.map(lines, line => (
        _.map(line.branch, item => (
          <AppMapLineItem {...item} color={line.color} capacity={line.capacity} key={item.length} />
        ))
      ))}
    </>
  )
}

export default AppMapLine