import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';

import classes from './App.module.css'
import Game from './modules/game';
import Intro from './modules/intro';
import IntroSplash from './modules/intro/splash';
import Settings from './modules/settings';

function App() {
  return (
    <div className={classes.App}>
      <Switch>
        <Route path={ROUTES.Game} component={Game} />
        <Route path={ROUTES.Intro} component={Intro} />
        <Route path={ROUTES.Settings} component={Settings} />
        <Route path="/" component={IntroSplash} />
      </Switch>
    </div>
  )
}

export default App;
