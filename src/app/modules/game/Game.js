import React from 'react';
// import { useSelector } from 'react-redux';
// import * as selectors from '../../../redux/selectors'

import GameSelect from './select';
import GameStart from './start';
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
      {/* <Route path={ROUTES.GameSelect} component={GameSelect} /> */}
      {/* <Route path={ROUTES.GameStart} component={GameStart} /> */}
      <Route path={ROUTES.GameMap} component={GameMap} />
    </Switch>
  )
}

export default Game;