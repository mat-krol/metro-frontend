import { Switch, Route } from "react-router-dom";
import React from "react";

import { ROUTES } from "../../constants/routes";

import GameBuild from "./build";
import GameHome from "./home";

export default function GameRouter() {
  return (
    <Switch>
      <Route path={ROUTES.GameBuild} component={GameBuild} />
      <Route path={ROUTES.GameHome} component={GameHome} />
    </Switch>
  );
}
