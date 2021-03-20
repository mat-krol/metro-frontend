import React from "react";
import { Switch, Route } from "react-router-dom";

import { ROUTES } from "./constants/routes";

import classes from "./App.module.css";

import IntroRouter from "./features/intro";
import GameRouter from "./features/game";
import MenuRouter from "./features/menu";
import SettingsRouter from "./features/settings";
import IntroSplash from "./features/intro/splash";

export default function App() {
  return (
    <div className={classes.App}>
      <Switch>
        <Route path={ROUTES.Game} component={GameRouter} />
        <Route path={ROUTES.Intro} component={IntroRouter} />
        <Route path={ROUTES.Menu} component={MenuRouter} />
        <Route path={ROUTES.Settings} component={SettingsRouter} />
        <Route path="/" component={IntroSplash} />
      </Switch>
    </div>
  );
}
