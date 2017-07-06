/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Router from './Cam/Router';

export default class Capture extends Component {

  render() {
    return (
    <Router />
    );
  }
}

AppRegistry.registerComponent('Camera', () => Capture);
