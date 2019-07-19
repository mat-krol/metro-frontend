import React from 'react';

import AppHeader from '../../../common/header/AppHeader';
import AppModule from '../../../common/module';
import AppMap from '../../../common/map/AppMap';

function GameHome() {
  return (
    <AppModule header >
      <AppHeader />
      <AppMap />
    </AppModule>
  )
}

export default GameHome;