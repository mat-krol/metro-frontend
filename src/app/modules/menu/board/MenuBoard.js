import React from 'react';
import { ROUTES } from '../../../constants/routes';

import logo from '../../../../assets/icon-white.png'
import AppModule from '../../../common/module';
import Choice from '../../../../ui/choice/Choice';

function MenuBoard() {
  return (
    <AppModule type="select" header>
      <img src={logo} alt="logo" style={{ width: "115px", marginBottom: "2rem"}} />
      <Choice list={list} />
    </AppModule>
  )
}

const list = [
  { to: ROUTES.GameHome, text: "London" },
  { to: ROUTES.GameHome, text: "Hong Kong" },
  { to: ROUTES.GameHome, text: "Sao Paulo" },
  { to: ROUTES.GameHome, text: "Paris", disabled: true },
  { to: ROUTES.GameHome, text: "New York", disabled: true },
  { to: ROUTES.GameHome, text: "Sydney", disabled: true },
  { to: ROUTES.GameHome, text: "Cairo", disabled: true },
  { to: ROUTES.GameHome, text: "Cape Town", disabled: true },
  { to: ROUTES.GameHome, text: "Seoul", disabled: true }
]

export default MenuBoard;