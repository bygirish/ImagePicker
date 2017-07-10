import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ProfilePic from './ProfilePic';

const RouterComp = () => {
  console.log('In RouterComp');
  return(
    <Router>
      <Scene key = "ProfilePic" initial component = { ProfilePic } hideNavBar />
    </Router>
  );
};

export default RouterComp;
