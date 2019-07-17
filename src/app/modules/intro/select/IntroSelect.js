import React from 'react';
import { ROUTES } from '../../../constants/routes';

import AppBanner from '../../../common/banner/AppBanner';
import AppModule from '../../../common/module';
import Selection from '../../../../ui/selection/Selection';

function IntroSelect() {
  return (
    <AppModule type="select">
      <AppBanner />
      <Selection list={list} />
    </AppModule>
  )
}

const list = [
  { to: ROUTES.GameMap, text: "Game Start" },
  { to: ROUTES.GameMap, text: "Settings" },
  { to: ROUTES.GameMap, text: "Log out" }
]

export default IntroSelect;