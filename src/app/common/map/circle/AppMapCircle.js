import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import * as selectors from '../../../../redux/selectors'

import AppMapCircleItem from './item/AppMapCircleItem';

function AppMapCircle() {
  const lines = useSelector(selectors.getMapLines)

  return (
    <>
      {_.map(lines, item => (
        _.map(item.points, item => (
          <AppMapCircleItem {...item} />
        ))
      ))}
    </>
  )
}

export default AppMapCircle