import React from 'react';

import AppModule from '../../../common/module';
import AppSelection from '../../../common/selection';
import AppHeader from '../../../common/header/AppHeader';

function QuizSelect() {
  return (
    <AppModule header>
      <AppHeader select />
      <h1>Choose a quiz</h1>
      <AppSelection />
    </AppModule>
  )
}

export default QuizSelect;