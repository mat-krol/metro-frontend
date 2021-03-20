import React from "react";
import { Switch, Route } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

import SettingsChange from "./change";

export default function SettingsRouter() {
  return (
    <Switch>
      <Route path={ROUTES.Settings} component={SettingsChange} />
    </Switch>
  );
}
