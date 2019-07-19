import React from 'react';
import { MdSentimentSatisfied, MdRadioButtonUnchecked, MdPeople } from 'react-icons/md'

import AppHeader from '../../../common/header/AppHeader';
import AppModule from '../../../common/module';
import AppMap from '../../../common/map/AppMap';
import Selection from '../../../../ui/selection/Selection';

function GameHome() {
  return (
    <AppModule header >
      <AppHeader />
      <AppMap />
      <Selection horizontal list={list} />
    </AppModule>
  )
}

const list = [
  { icon: MdRadioButtonUnchecked },
  { icon: MdSentimentSatisfied  },
  { icon: MdPeople },
]

export default GameHome;