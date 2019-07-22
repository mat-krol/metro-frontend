import React from 'react';
import { MdSentimentSatisfied, MdRadioButtonUnchecked, MdPeople } from 'react-icons/md'
import { actions } from '../../../../redux/leaves'
import { useDispatch } from 'react-redux';

import AppHeader from '../../../common/header/AppHeader';
import AppMap from '../../../common/map/AppMap';
import AppModal from '../../../common/modal/AppModal';
import AppModule from '../../../common/module';
import Option from '../../../../ui/option/Option';

function GameHome() {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 3000);
  }, [])

  const dispatch = useDispatch()

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
    { key: 0, onClick: updateViewPlain, text: "Plain", icon: MdRadioButtonUnchecked },
    { key: 1, onClick: updateViewSatis, text: "Satisfaction", icon: MdSentimentSatisfied },
    { key: 2, onClick: updateViewPopul, text: "Population", icon: MdPeople },
  ]

  return (
    <AppModule header >
      <AppHeader />
      <AppMap />
      <Option horizontal list={list} />
      {/* <Selection horizontal list={list} /> */}
      <AppModal show={show} />
    </AppModule>
  )
}



export default GameHome;