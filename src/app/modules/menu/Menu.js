import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

import MenuHome from './select'

function Menu() {
  return (
    <Switch>
      <Route path={ROUTES.MenuHome} component={MenuHome} />
    </Switch>
  )
}

export default Menu;