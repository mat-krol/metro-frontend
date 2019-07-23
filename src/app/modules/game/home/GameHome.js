import React from 'react';
import { MdSentimentSatisfied, MdRadioButtonUnchecked, MdPeople } from 'react-icons/md'
import { actions } from '../../../../redux/leaves'
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '../../../../redux/selectors'
import { startGameRound } from '../../../../redux/sagas'

import AppHeader from '../../../common/header/AppHeader';
import AppMap from '../../../common/map/AppMap';
import AppModal from '../../../common/modal/AppModal';
import AppModule from '../../../common/module';
import Option from '../../../../ui/option/Option';

function GameHome() {
  const dispatch = useDispatch()
  const show = useSelector(selectors.getGameModal)

  React.useEffect(() => {
    dispatch(startGameRound.trigger())
  }, [dispatch])

  // var tomorrow = new Date();
  // console.log(tomorrow)
  // tomorrow.setDate(tomorrow.getDate() + 1);
  // console.log(tomorrow)

  const updateViewPlain = () => {
    dispatch(actions.game.view.create.update(0))
  }

  const updateViewSatis = () => {
    dispatch(actions.game.view.create.update(1))
  }

  const updateViewPopul = () => {
    dispatch(actions.game.view.create.update(2))
  }

  const list = [
    { key: 0, onClick: updateViewPlain, text: "Plain", icon: MdRadioButtonUnchecked },
    { key: 1, onClick: updateViewSatis, text: "Satisfaction", icon: MdSentimentSatisfied },
    { key: 2, onClick: updateViewPopul, text: "Population", icon: MdPeople },
  ]

  return (
    <AppModule header >
      <AppHeader />
      <AppMap />
      <Option horizontal list={list} />
      <AppModal show={show} />
    </AppModule>
  )
}



export default GameHome;