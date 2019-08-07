'use strict';

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { ViroSceneNavigator, ViroARSceneNavigator } from 'react-viro';

var InitialARScene = require('./InitialScene');

class ARScene extends React.Component {
  
  constructor () {
    super();
    this.state = {
      sharedProps: {
        // react-viro AR API key 
        apiKey: "48F904D3-E6A6-4D2F-B66A-FFBEC0CA4B69"
      }
    }
  }

  render() {
    return (
      //husk API key
      <ViroARSceneNavigator {...this.state.sharedProps}
      initialScene={{scene: InitialARScene}} />
    );
  }
}


module.exports = ARScene;
