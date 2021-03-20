import React from 'react';
import { Redirect } from 'react-router-dom'
import { ROUTES } from '../../../constants/routes';

import AppModule from '../../../common/module';
import Backdrop from '../../../../ui/backdrop/Backdrop';
import logo from '../../../../assets/icon-blue.png'
import text from '../../../../assets/text.png'

function IntroSplash() {

  const [shouldRedirect, setShouldRedirect] = React.useState(false)
  const [showBackdropWhite, setShowBackdropWhite] = React.useState(true)
  const [showBackdropBlue, setShowBackdropBlue] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setShouldRedirect(true)
    }, 3000);
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      setShowBackdropBlue(false)
    }, 600);
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      setShowBackdropWhite(false)
    }, 100);
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      setShowBackdropWhite(true)
    }, 2500);
  }, [])

  if (shouldRedirect) {
    return (
      <Redirect to={ROUTES.MenuHome} />
    )
  } else {
    return (
      <AppModule type="splash">
        <Backdrop show={showBackdropBlue} color="blue" />
        <Backdrop show={showBackdropWhite} color="white" />
        <img src={logo} alt="logo" style={{ width: "115px", marginBottom: "2rem"}} />
        <img src={text} alt="text" style={{ width: "250px"}} />
      </AppModule>
    )
  }
}

export default IntroSplash;