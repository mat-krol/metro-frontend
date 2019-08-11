import React from 'react';
import { ROUTES } from '../../../constants/routes';
// import { useDispatch } from 'react-redux'
// import { getLevels } from '../../../../redux/sagas/game'

import logo from '../../../../assets/icon-white.png'
import AppModule from '../../../common/module';
import Selection from '../../../../ui/selection/Selection';

function MenuHome() {
  // const dispatch = useDispatch()

  // React.useEffect(() => {                   
  //   dispatch(getLevels.trigger())
  // }, [dispatch])

  return (
    <AppModule type="select" header>
      <img src={logo} alt="logo" style={{ width: "115px", marginBottom: "2rem"}} />
      <Selection list={list} />
    </AppModule>
  )
}

const list = [
  { to: ROUTES.GameHome, text: "Demo" },
  { to: ROUTES.Settings, text: "Settings", disabled: true },
  { to: ROUTES.GameHome, text: "Log out", disabled: true }
]

export default MenuHome;