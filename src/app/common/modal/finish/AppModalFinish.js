import React from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '../../../../redux/selectors'
// import { continueModeExpand } from '../../../../redux/sagas/mode'
import { ROUTES } from '../../constants/routes';

import Modal from '../../../../ui/modal/Modal';
import Button from '../../../../ui/button/Button';

function AppModalExpand({ show }) {
  // const dispatch = useDispatch()
  const satisfaction = useSelector(selectors.getRoundSatisfaction)
  
  return (
    <Modal show={satisfaction === 5}>
      <h1>Round finished!</h1>
      <p style={{ marginTop: "0" }}>Well done, you've achieved 5.0 satisfaction in all neighbourhoods</p>
      <Button to={ROUTES.IntroSelect} text="OK" />
    </Modal>
  )
}

export default AppModalExpand