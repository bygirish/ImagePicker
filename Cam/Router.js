import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Snapshot from './Snapshot';
import Gallery from './Gallery';
import Crop from './Crop';
import DisplayPic from './DisplayPic';
import App from './../App';

const RouterComp = () => {
  console.log('In Router');
  return(
    <Router>
      <Scene key = "App" component = { App } hideNavBar />
      <Scene key = "Snap" component = { Snapshot } hideNavBar />
      <Scene key = "Pics"  hideNavBar component = { Gallery } hideNavBar />
      <Scene key = "Crop" component = { Crop } hideNavBar />
      <Scene key = "DisplayPic" component = { DisplayPic } hideNavBar />
    </Router>
  );
};

export default RouterComp;
