import React from 'react';
import { FaAngleDoubleUp, FaExpandArrowsAlt, FaDollarSign, FaRegClock, FaExchangeAlt } from 'react-icons/fa'
import { ROUTES } from '../../constants/routes';

import Modal from '../../../ui/modal/Modal';
import Option from '../../../ui/option/Option';

function AppModal(props) {
  return (
    <>
      <Modal show>
        <h1>One month has passed!</h1>
        <p>What would you like to do now?</p>
        <Option list={list} horizontal />
      </Modal>
    </>
  )
}

const list = [
  { key: 0, to: ROUTES.GameMap, text: "Build", icon: FaExchangeAlt },
  { key: 1, to: ROUTES.GameMap, text: "Expand", icon: FaExpandArrowsAlt },
  { key: 2, to: ROUTES.GameMap, text: "Upgrade", icon: FaAngleDoubleUp },
  { key: 2, to: ROUTES.GameMap, text: "Invest", icon: FaDollarSign, disabled: true },
  { key: 2, to: ROUTES.GameMap, text: "Wait", icon: FaRegClock },
]


export default AppModal