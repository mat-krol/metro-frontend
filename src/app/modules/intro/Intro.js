import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

import IntroSelect from './select'
import IntroSplash from './splash'

function Intro() {
  return (
    <Switch>
      <Route path={ROUTES.IntroSelect} component={IntroSelect} />
      <Route path={ROUTES.IntroSplash} component={IntroSplash} />
    </Switch>
  )
}

export default Intro;