import React, { Component } from 'react';
import { AppRegistry, Image, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export default class YourCarPic extends Component {
  render() {
    let pic = {
      uri: 'https://static-assets.tesla.com/configurator/compositor/?model=m3&options=$APPB,$BT37,$PMNG,$IN3PB,$MDL3,$DV2W,ZCST,$PRM31,$W38B,WR01&view=STUD_3QTR&size=1020&bkba_opt=1'
    };
    return (

      // 270 x 110
      // 351 x 143
      // 378 x 144
      // 405 x 165
      // 432 x 176
      // 459 x 187
      <Image source={pic} style={{width: 459, height: 187, position: 'absolute', top: height/7}}/>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => YourCarPic);
