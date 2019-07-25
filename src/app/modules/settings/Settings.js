import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

import SettingsChange from './change'

function Settings() {
  return (
    <Switch>
      <Route path={ROUTES.Settings} component={SettingsChange} />
    </Switch>
  )
}

export default Settings;