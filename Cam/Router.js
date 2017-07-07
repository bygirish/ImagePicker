import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Snapshot from './Snapshot';
import Gallery from './Gallery';
import Crop from './Crop';
import App from './../App';

const RouterComp = () => {
  console.log('In Router');
  return(
    <Router>
      <Scene key = "App" component = { App } hideNavBar />
      <Scene key = "Snap" component = { Snapshot } hideNavBar />
      <Scene key = "Pics"  hideNavBar component = { Gallery } hideNavBar />
      <Scene key = "Crop" component = { Crop } hideNavBar />
    </Router>
  );
};

export default RouterComp;
