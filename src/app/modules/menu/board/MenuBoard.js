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
  { to: ROUTES.GameHome, text: "Brighton", score: 5 },
  { to: ROUTES.GameHome, text: "Manchester", disabled: true },
  { to: ROUTES.GameHome, text: "Birmingham", disabled: true },
  { to: ROUTES.GameHome, text: "Edinburgh", disabled: true },
  { to: ROUTES.GameHome, text: "Belfast", disabled: true },
  { to: ROUTES.GameHome, text: "Bristol", disabled: true },
  { to: ROUTES.GameHome, text: "Cardiff", disabled: true },
  { to: ROUTES.GameHome, text: "Aberdeen", disabled: true },
  { to: ROUTES.GameHome, text: "London", disabled: true},
]

export default MenuBoard;