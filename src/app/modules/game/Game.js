import React from 'react';

import GameBuild from './build';
import GameHome from './home';

import { ROUTES } from '../../constants/routes';
import { Switch, Route } from 'react-router-dom';

function Game() {
  return (
    <Switch>
      <Route path={ROUTES.GameBuild} component={GameBuild} />
      <Route path={ROUTES.GameHome} component={GameHome} />
    </Switch>
  )
}

export default Game;