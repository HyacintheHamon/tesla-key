'use strict';

import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';
import { ViroSceneNavigator, ViroARSceneNavigator } from 'react-viro';
import Icon from 'react-native-vector-icons/FontAwesome5';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const { height, width } = Dimensions.get('window');
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

  setNavigationColor = (color) => {
    changeNavigationBarColor(color);
  };

  componentDidMount() {
    this.setNavigationColor('#111117');
  }

  render() {
    return (
      <View style={styles.viroContainer} >
      <ViroARSceneNavigator style={{flex : 1}} {...this.state.sharedProps}
        initialScene={{scene: InitialARScene}} />
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.closeButton} onPress={this.props.onCloseMap}>
            <Icon name="times" size={60} color="#fff" />
        </TouchableOpacity>   
      </View>
    </View>
    );
  }
}

var styles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "#111117", 
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  bottomView: {
    width: '100%', 
    height: height/3,
    backgroundColor: "#111117",
    margin: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0
  },  
  closeButton : {
    position: "relative",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius:100,
    width:60,
    width:60,
    alignItems: "center",
    justifyContent: "center",
  },
});


module.exports = ARScene;
