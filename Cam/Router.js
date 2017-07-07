import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import DisplayPic from './DisplayPic';
import App from './App';

const RouterComp = () => {
  console.log('In RouterComp');
  return(
    <Router>
      <Scene key = "App" initial component = { App } hideNavBar />
      <Scene key = "DisplayPic" component = { DisplayPic } hideNavBar />
    </Router>
  );
};

export default RouterComp;
