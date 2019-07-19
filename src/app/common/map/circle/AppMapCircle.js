import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import * as selectors from '../../../../redux/selectors'

import AppMapCircleItem from './item/AppMapCircleItem';

function AppMapCircle() {
  const line = useSelector(selectors.getMapLine)

  return (
    <>
      {_.map(line, item => (
        <AppMapCircleItem {...item} />
      ))}
    </>
  )
}

export default AppMapCircle