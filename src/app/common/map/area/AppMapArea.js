import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import * as selectors from '../../../../redux/selectors'

import AppMapAreaItem from './item/AppMapAreaItem';

function AppMapArea({ onClick }) {
  const map = useSelector(selectors.getMapAreas)
  const showPop = useSelector(selectors.getCurrentViewPopulation)
  const showSat = useSelector(selectors.getCurrentViewSatisfaction)

  return (
    <>
      {_.map(map, item => (
        <AppMapAreaItem key={item.id} {...item} onClick={onClick} showPop={showPop} showSat={showSat} />
      ))}
    </>
  )
}

export default AppMapArea