import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../../../redux/selectors'
import _ from 'lodash';
import { updateAnswerAndCheckCorrectness } from '../../../../redux/sagas'

import AppModule from '../../../common/module';
import Area from '../../../../ui/area/Area';

function GameMap() {
  const dispatch = useDispatch()
  const map = useSelector(selectors.getMap)

  // const updateAnswer = key => {
  //   dispatch(updateAnswerAndCheckCorrectness.trigger(key))
  // }

  return (
    <AppModule >
      <svg viewBox="0 0 600 600" width="100%" height="100%">
      <defs>
      <clipPath id="_clipPath_EzTj8a7Kh2JY8ip0pv5Dy13MSk2F5ZL8">
      <rect width="600" height="600"/>
      </clipPath>
      </defs>
      <g clipPath="url(#_clipPath_EzTj8a7Kh2JY8ip0pv5Dy13MSk2F5ZL8)">
        {_.map(map, item => (
          <Area {...item} key={item.id}/>
        ))}
      </g>
      </svg>
    </AppModule>
  )
}

export default GameMap;