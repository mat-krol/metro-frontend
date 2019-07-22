import React from 'react';
import { useDispatch } from 'react-redux';
import { FaAngleDoubleUp, FaExpandArrowsAlt, FaDollarSign, FaRegClock, FaExchangeAlt } from 'react-icons/fa'
import { ROUTES } from '../../constants/routes';
import { startModeBuild } from '../../../redux/sagas'

import Modal from '../../../ui/modal/Modal';
import Option from '../../../ui/option/Option';

function AppModal({ show }) {
  const dispatch = useDispatch()

  const startBuild = () => {
    dispatch(startModeBuild.trigger())
  }

  const list = [
    { key: 0, to: ROUTES.GameBuild, text: "Build", onClick: startBuild, icon: FaExchangeAlt },
    { key: 1, to: ROUTES.GameMap, text: "Expand", icon: FaExpandArrowsAlt, disabled: true },
    { key: 2, to: ROUTES.GameMap, text: "Upgrade", icon: FaAngleDoubleUp, disabled: true },
    { key: 2, to: ROUTES.GameMap, text: "Invest", icon: FaDollarSign, disabled: true },
    { key: 2, to: ROUTES.GameMap, text: "Wait", icon: FaRegClock, disabled: true },
  ]

  return (
    <>
      <Modal show={show}>
        <h1>One month has passed!</h1>
        <p>What would you like to do now?</p>
        <Option list={list} horizontal />
      </Modal>
    </>
  )
}

export default AppModal