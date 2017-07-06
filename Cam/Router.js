import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Snapshot from './Snapshot';
import Gallery from './Gallery';
import App from './../App';

const RouterComp = () => {
  console.log('In Router');
  return(
    <Router>
      <Scene key = "App" component = { App } hideNavBar/>
      <Scene key = "Snap" component = { Snapshot } />
      <Scene key = "Pics" component = { Gallery } />
    </Router>
  );
};

export default RouterComp;
