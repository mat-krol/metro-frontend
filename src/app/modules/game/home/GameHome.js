import React from 'react';
import { MdSentimentSatisfied, MdRadioButtonUnchecked, MdPeople } from 'react-icons/md'
import { actions } from '../../../../redux/leaves'
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../../../redux/selectors'

import AppHeader from '../../../common/header/AppHeader';
import AppModule from '../../../common/module';
import AppMap from '../../../common/map/AppMap';
import Selection from '../../../../ui/selection/Selection';

function GameHome() {
  const dispatch = useDispatch()
  const population = useSelector(selectors.getCurrentViewPopulation)
  const satisfaction = useSelector(selectors.getCurrentViewSatisfaction)
  const plain = useSelector(selectors.getCurrentViewPlain)
  

  const updateViewPlain = () => {
    dispatch(actions.view.create.update(0))
  }

  const updateViewSatis = () => {
    dispatch(actions.view.create.update(1))
  }

  const updateViewPopul = () => {
    dispatch(actions.view.create.update(2))
  }

  const list = [
    { key: 0, onClick: updateViewPlain, icon: MdRadioButtonUnchecked },
    { key: 1, onClick: updateViewSatis, icon: MdSentimentSatisfied },
    { key: 2, onClick: updateViewPopul, icon: MdPeople },
  ]

  return (
    <AppModule header >
      <AppHeader />
      <AppMap />
      <span style={{ fontSize: "0.8rem" }}>View</span>
      <Selection horizontal list={list} />
    </AppModule>
  )
}



export default GameHome;