import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

import MenuHome from './home'
import MenuBoard from './board'

function Menu() {
  return (
    <Switch>
      <Route path={ROUTES.MenuHome} component={MenuHome} />
      <Route path={ROUTES.MenuBoard} component={MenuBoard} />
    </Switch>
  )
}

export default Menu;