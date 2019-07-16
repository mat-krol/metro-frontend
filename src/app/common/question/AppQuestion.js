import React from 'react';
import _ from 'lodash';
import * as selectors from '../../../redux/selectors'
import { useSelector } from 'react-redux';
import { FaCheck, FaTimes } from 'react-icons/fa';

import classes from './AppQuestion.module.css';

function AppQuestion(props) {
  const answer = useSelector(selectors.getQuestionUserAnswer)
  const correctness = useSelector(selectors.getQuestionUserCorrectness)
  const prompt = useSelector(selectors.getQuestionGivenPrompt).split(" ")

  return (
    <div className={classes.AppQuestion}>
      {correctness === 1
      ? <FaCheck className={classes.AppQuestionCorrect} />
      : correctness === 0
        ? <div className={classes.AppQuestionIcon} />
        : <FaTimes className={classes.AppQuestionIncorrect} />
      }
      <div className={classes.AppQuestionPrompt}>
        {_.map(prompt, (item, index) => (
          item === "x"
          ? <div key={item} className={classes.AppQuestionAnswer}>{answer}</div>
          : <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default AppQuestion;