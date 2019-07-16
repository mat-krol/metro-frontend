import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';

import classes from './App.module.css'
import Intro from './modules/intro';
import IntroSplash from './modules/intro/splash';
import Quiz from './modules/quiz';

function App() {
  return (
    <div className={classes.App}>
      <Switch>
        <Route path={ROUTES.Intro} component={Intro} />
        <Route path={ROUTES.Quiz} component={Quiz} />
        <Route path="/" component={IntroSplash} />
      </Switch>
    </div>
  )
}

export default App;
