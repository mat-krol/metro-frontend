import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../../../redux/selectors'
import { finishGameRound } from '../../../../redux/sagas/round'
import { ROUTES } from '../../../constants/routes';

import Modal from '../../../../ui/modal/Modal';
import Button from '../../../../ui/button/Button';

function AppModalFinish({ show }) {
  const dispatch = useDispatch()
  const satisfaction = useSelector(selectors.getRoundSatisfaction)

  const finishGame = () => {
    dispatch(finishGameRound.trigger())
  }
  
  return (
    <Modal show={satisfaction > 5}>
      <h1>Round finished!</h1>
      <p style={{ marginTop: "0" }}>Well done, you've achieved an average satisfaction of 9.0 across all neighbourhoods</p>
      <Button to={ROUTES.MenuHome} text="OK" onClick={finishGame} />
    </Modal>
  )
}

export default AppModalFinish