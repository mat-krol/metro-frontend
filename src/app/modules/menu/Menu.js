import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

import MenuHome from './home'
// import MenuCountry from './country'
// import MenuBoard from './board'

function Menu() {
  return (
    <Switch>
      {/* <Route path={ROUTES.MenuBoard} component={MenuBoard} /> */}
      {/* <Route path={ROUTES.MenuCountry} component={MenuCountry} /> */}
      <Route path={ROUTES.MenuHome} component={MenuHome} />
    </Switch>
  )
}

export default Menu;