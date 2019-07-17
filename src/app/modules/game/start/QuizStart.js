import React from 'react';
import { ROUTES } from '../../../constants/routes';
import { FaCoins } from 'react-icons/fa'

import Selection from '../../../../ui/selection/Selection';
import AppModule from '../../../common/module';

function QuizStart() {
  return (
    <AppModule background="lab">
      <h1>Are you ready?</h1>
      <Selection list={list}/>
    </AppModule>
  )
}

const list = [
  { icon: FaCoins, to: ROUTES.QuizQuestion, text: "Start the quiz" },
  { icon: FaCoins, to: ROUTES.QuizQuestion, text: "View your stats", disabled: "true" },
]

export default QuizStart;