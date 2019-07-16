import React from 'react';
import { Redirect } from 'react-router-dom'
import { ROUTES } from '../../../constants/routes';

import AppModule from '../../../common/module';
import Backdrop from '../../../../ui/backdrop/Backdrop';
import logo from '../../../../assets/icon-white.png'

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
      <Redirect to={ROUTES.QuizSelect} />
    )
  } else {
    return (
      <AppModule type="splash">
        <Backdrop show={showBackdropBlue} color="blue" />
        <Backdrop show={showBackdropWhite} color="white" />
        <img src={logo} alt="logo" style={{ width: "115px", marginBottom: "1rem"}} />
        <h1 style={{ color: "white", marginBottom: "4rem" }}>Arithmetic</h1>
      </AppModule>
    )
  }
}

export default IntroSplash;