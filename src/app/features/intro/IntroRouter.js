import React from "react";
import { Switch, Route } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

import IntroSplash from "./splash";

export default function IntroRouter() {
  return (
    <Switch>
      <Route path={ROUTES.IntroSplash} component={IntroSplash} />
    </Switch>
  );
}
