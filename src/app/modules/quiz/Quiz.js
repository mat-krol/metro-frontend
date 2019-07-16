import React from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '../../../redux/selectors'

import QuizQuestion from './question';
import QuizSelect from './select';

// import { ROUTES } from '../../constants/routes';
// import { Switch, Route } from 'react-router-dom';
// import QuizStart from './start';

function Quiz() {
  const ongoing = useSelector(selectors.getQuizOngoing)

  if (ongoing) {
    return <QuizQuestion />
  } else {
    return <QuizSelect />
  }

  // return (
  //   <Switch>
  //     <Route path={ROUTES.QuizQuestion} component={QuizQuestion} />
  //     <Route path={ROUTES.QuizSelect} component={QuizSelect} />
  //     <Route path={ROUTES.QuizStart} component={QuizStart} />
  //   </Switch>
  // )
}

export default Quiz;