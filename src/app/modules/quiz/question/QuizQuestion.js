import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../../../redux/selectors'
import { updateAnswerAndCheckCorrectness } from '../../../../redux/sagas'

import AppQuestion from '../../../common/question/AppQuestion';
import AppModule from '../../../common/module';
import AppKeypad from '../../../common/keypad';
import AppHeader from '../../../common/header';
import Backdrop from '../../../../ui/backdrop/Backdrop';

function QuizQuestion() {
  const dispatch = useDispatch()
  const disabled = useSelector(selectors.getQuestionDisabled)

  const updateAnswer = key => {
    dispatch(updateAnswerAndCheckCorrectness.trigger(key))
  }

  return (
    <AppModule header>
      <Backdrop sharp color="transparent" show={disabled}/>
      <AppHeader />
      <AppQuestion />
      <AppKeypad updateAnswer={updateAnswer} />
    </AppModule>
  )
}

export default QuizQuestion;