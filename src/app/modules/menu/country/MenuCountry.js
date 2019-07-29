import React from 'react';
import { ROUTES } from '../../../constants/routes';

import logo from '../../../../assets/icon-white.png'
import AppModule from '../../../common/module';
import Choice from '../../../../ui/choice/Choice';

function MenuCountry() {
  return (
    <AppModule type="select" header>
      <img src={logo} alt="logo" style={{ width: "115px", marginBottom: "2rem"}} />
      <Choice list={list} />
    </AppModule>
  )
}

const list = [
  { to: ROUTES.MenuBoard, text: "United Kingdom" },
  { to: ROUTES.MenuBoard, text: "Brazil", disabled: true },
  { to: ROUTES.MenuBoard, text: "Japan", disabled: true },
  { to: ROUTES.MenuBoard, text: "France", disabled: true },
  { to: ROUTES.MenuBoard, text: "Canada", disabled: true },
  { to: ROUTES.MenuBoard, text: "Australia", disabled: true },
  { to: ROUTES.MenuBoard, text: "Poland", disabled: true },
  { to: ROUTES.MenuBoard, text: "South Korea", disabled: true },
  { to: ROUTES.MenuBoard, text: "Egypt", disabled: true }
]

export default MenuCountry;