'use strict';

import React, { Component } from 'react';
import {StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation'
import {
  ViroARScene,
  ViroText,
  ViroImage,
  ViroBox,
  ViroMaterials,
} from 'react-viro';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import merc from 'mercator-projection';
//import { TeslaMarker } from '../img/svg';

const TeslaMarker = require("../img/tesla-ar-marker.png");

export default class ARScene extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR...",
      currentPosition: {
        latitude: 0.0,
        longitude: 0.0,
      },
      imageFinalPosX: 0,
      imageFinalPosZ: 0
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  setNavigationColor = (color) => {
    changeNavigationBarColor(color);
  };

  componentDidMount() {

    this.setNavigationColor('#111117');

    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
            currentPosition: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            }
        });

        // translate car position to xy 
        var imagePos = merc.fromLatLngToPoint({lat: 48.8983508, lng: 2.3778904});
        console.log("image Position", imagePos);

        var currentDeviceLat = this.state.currentPosition.latitude;
        var currentDeviceLong  = this.state.currentPosition.longitude;

        console.log("currentDeviceLat ", currentDeviceLat );
        console.log("currentDeviceLong ", currentDeviceLong );
        // translate current device position to a lat/lng 
        var currentDevicePos = merc.fromLatLngToPoint({lat: currentDeviceLat, lng: currentDeviceLong});

        var imageFinalPosX = imagePos.x - currentDevicePos.x;
        var imageFinalPosZ = imagePos.y - currentDevicePos.y;

        console.log("image final position X :", imageFinalPosX);
        console.log("image final position Z : ", imageFinalPosZ);

        // Since the position has to be in xyz, assuming that height is 1m
        // x = imageFinalPosX
        // y = 1
        // z = imageFinalPosZ

        // Rotate the final positions
        // var angle = heading;
        // var newRotatedX = imageFinalPosX * Math.cos(angle) - imageFinalPosZ * Math.sin(angle);
        // var newRotatedZ = imageFinalPosZ * Math.cos(angle) + imageFinalPosX * Math.sin(angle);

        this.setState({
          currentPosition: {
              imageFinalPosX: imageFinalPosX,
              imageFinalPosZ: imageFinalPosZ
          }
        });

      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    const { imageFinalPosX, imageFinalPosZ } = this.state;

    console.log("image final position X in render method: ", imageFinalPosX);
    console.log("image final position Z in render method: ", imageFinalPosZ);

    return (
         /*
          <TouchableOpacity style={styles.closeButton} onPress={this.props.onCloseMap}>
            <Icon name="times" size={30} color="#fff" />
          </TouchableOpacity>   
        */
         <ViroARScene onTrackingUpdated={this._onInitialized} >
        {/* <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} /> */}
        <ViroImage
          height={0.23}
          width={0.2}
          scale={[.5, .5, .5]} 
          position={[0, 0, -1]} 
          // position={[imageFinalPosX, 1, imageFinalPosZ]} 
          source={TeslaMarker}
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
