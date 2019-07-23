import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import * as selectors from '../../../../redux/selectors'

import AppMapCircleItem from './item/AppMapCircleItem';

function AppMapCircle() {
  const lines = useSelector(selectors.getMapLines)

  return (
    <>
      {_.map(lines, line => (
        _.map(line.branch, branch => (
          _.map(branch.points, item => (
            <AppMapCircleItem {...item} />
          ))
        ))
      ))}
    </>
  )
}

export default AppMapCircle