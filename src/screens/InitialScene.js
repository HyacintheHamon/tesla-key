'use strict';

import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroImage,
  ViroBox,
  ViroMaterials,
} from 'react-viro';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View } from 'react-native-animatable';

export default class ARScene extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
         /*
          <TouchableOpacity style={styles.closeButton} onPress={this.props.onCloseMap}>
            <Icon name="times" size={30} color="#fff" />
          </TouchableOpacity>   
        */
         <ViroARScene onTrackingUpdated={this._onInitialized} >
        {/* <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} /> */}
        <ViroImage
          height={0.2}
          width={0.2}
          scale={[.5, .5, .5]} 
          position={[0, 0, -1]} 
          source={require("../img/tesla-ar-marker.png")}
          // animation={{ name: "animateImage", run: this.state.runAnimateImage }}
        />
      </ViroARScene>     
    );
  }

  _onInitialized() {
    this.setState({
      text : "Hello World!"
    });
  }

}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
  closeButton: {
    position: 'absolute',
    right: 9,
    top: 10
},
});

module.exports = ARScene;
