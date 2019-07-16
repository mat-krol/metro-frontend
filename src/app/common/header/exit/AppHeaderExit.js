import React from 'react';
import { MdClose } from 'react-icons/md'

function AppHeaderExit({ finishQuiz }) {
  return (
    <MdClose onClick={finishQuiz} style={{ fontSize: "1.5rem", justifySelf: "end" }} />
  )
}

export default AppHeaderExit