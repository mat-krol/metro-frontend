import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '../../../redux/selectors'
import { FaAngleDoubleUp, FaExpandArrowsAlt, FaDollarSign, FaRegClock, FaExchangeAlt } from 'react-icons/fa'
import { ROUTES } from '../../constants/routes';
import { startModeBuild, startModeWait } from '../../../redux/sagas'

import Modal from '../../../ui/modal/Modal';
import Option from '../../../ui/option/Option';

function AppModal({ show }) {
  const dispatch = useDispatch()
  const budget = useSelector(selectors.getGameBudget)
  
  const startBuild = () => {
    dispatch(startModeBuild.trigger())
  }

  const startWait = () => {
    dispatch(startModeWait.trigger())
  }

  const list = [
    { key: 0, to: ROUTES.GameBuild, text: "Build", onClick: startBuild, icon: FaExchangeAlt },
    { key: 1, to: ROUTES.GameMap, text: "Expand", icon: FaExpandArrowsAlt, disabled: true },
    { key: 2, to: ROUTES.GameMap, text: "Upgrade", icon: FaAngleDoubleUp, disabled: true },
    { key: 2, to: ROUTES.GameMap, text: "Invest", icon: FaDollarSign, disabled: true },
    { key: 2, to: ROUTES.GameHome, text: "Wait", onClick: startWait, icon: FaRegClock },
  ]

  return (
    <>
      <Modal show={show}>
        <h1>One month has passed!</h1>
        <p style={{ marginBottom: "8px" }}>Your current budget is {budget} mln</p>
        <p style={{ marginTop: "0" }}>What would you like to do now?</p>
        <Option list={list} horizontal />
      </Modal>
    </>
  )
}

export default AppModal