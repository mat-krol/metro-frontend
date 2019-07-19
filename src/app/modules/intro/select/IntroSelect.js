import React from 'react';
import { ROUTES } from '../../../constants/routes';

import logo from '../../../../assets/icon-white.png'
import AppModule from '../../../common/module';
import Selection from '../../../../ui/selection/Selection';

function IntroSelect() {
  return (
    <AppModule type="select" header>
      <img src={logo} alt="logo" style={{ width: "115px", marginBottom: "2rem"}} />
      <Selection list={list} />
    </AppModule>
  )
}

const list = [
  { to: ROUTES.GameHome, text: "Game Start" },
  { to: ROUTES.GameHome, text: "Settings" },
  { to: ROUTES.GameHome, text: "Log out" }
]

export default IntroSelect;