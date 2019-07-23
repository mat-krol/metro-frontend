import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../../../redux/selectors'
import { continueModeExpand } from '../../../../redux/sagas'

import Modal from '../../../../ui/modal/Modal';
import Option from '../../../../ui/option/Option';

function AppModalExpand({ show }) {
  const dispatch = useDispatch()
  const lines = useSelector(selectors.getMapLines)
  console.log(lines)

  const selectLine = id => {
    dispatch(continueModeExpand.trigger(id))
  }
  
  return (
    <Modal show={show}>
      <h1>Which line would you like to expand?</h1>
      <p style={{ marginTop: "0" }}>You can choose from the following:</p>
      <Option onClick={selectLine} list={lines} horizontal  />
    </Modal>
  )
}

export default AppModalExpand