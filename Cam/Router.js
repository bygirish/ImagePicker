import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Snapshot from './Snapshot';
import Gallery from './Gallery';
import App from './../App';

const RouterComp = () => {
  console.log('In Router');
  return(
    <Router>
      <Scene key = "App" component = { App } hideNavBar />
      <Scene key = "Snap" component = { Snapshot } hideNavBar />
      <Scene key = "Pics"  hideNavBar component = { Gallery } hideNavBar />
    </Router>
  );
};

export default RouterComp;
