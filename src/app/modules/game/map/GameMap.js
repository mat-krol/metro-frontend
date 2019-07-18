import React from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '../../../../redux/selectors'
// import { useSelector, useDispatch } from 'react-redux';
// import { updateAnswerAndCheckCorrectness } from '../../../../redux/sagas'

import AppModule from '../../../common/module';
import AppMap from '../../../common/map/AppMap';

function GameMap() {
  // const dispatch = useDispatch()
  const map = useSelector(selectors.getMap)

  // const updateAnswer = key => {
  //   dispatch(updateAnswerAndCheckCorrectness.trigger(key))
  // }

  return (
    <AppModule >
      <AppMap map={map} />
    </AppModule>
  )
}

export default GameMap;