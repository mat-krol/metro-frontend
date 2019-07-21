import React from 'react';
// import { useSelector } from 'react-redux';
// import * as selectors from '../../../redux/selectors'

import GameBuild from './build';
import GameHome from './home';
import GameMap from './map';

import { ROUTES } from '../../constants/routes';
import { Switch, Route } from 'react-router-dom';

function Game() {
  // const ongoing = useSelector(selectors.getGameOngoing)

  // if (ongoing) {
  //   return <GameQuestion />
  // } else {
  //   return <GameSelect />
  // }
  return (
    <Switch>
      <Route path={ROUTES.GameBuild} component={GameBuild} />
      <Route path={ROUTES.GameHome} component={GameHome} />
      <Route path={ROUTES.GameMap} component={GameMap} />
    </Switch>
  )
}

export default Game;