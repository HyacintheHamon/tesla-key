import React, { Component } from 'react';
import { StyleSheet, View,  Text, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import SvgUri from 'react-native-svg-uri';

import LottieView from 'lottie-react-native';
const splashScreenAnimation = require('../animations/splashscreen_animation.json');

export default class SplashScreen extends Component {

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        1000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage

    const data = await this.performTimeConsumingTask();

    this.animation.play();

     if (data !== null) {
      console.log('performTimeConsumingTask '+data)
     }

    AsyncStorage.getItem("alreadyLaunched").then(value => {
      if(value == null) {

        AsyncStorage.setItem('alreadyLaunched', 'true').then(()=> {
         // App has never been launched
         console.log('App has never been launched');
         this.props.navigation.replace('VideoWalkthrough');
        });

      } else {
          // App was already launched
          console.log('App was already launched');
          //this.userLoggedIn();
          this.props.navigation.replace('LoginScreen');
        }
    });
  }
   

  render() {
    return (
        <View style={styles.View}>
          {/*  <SvgUri style={styles.logo} width="100" height="50" source={require('../img/logo_grey.svg')} /> */}
        <LottieView 
            ref={animation => {
              this.animation = animation;
            }}
            autoPlay = {true}
            loop = {false}
            source={splashScreenAnimation} 
            style={{position:'relative', width:250, alignContent:'center', justifyContent:'center',alignItems:'center'}}
            //progress={this.state.progress}
            //onAnimationFinish={()=>{ this.props.navigation.replace('LoginScreen'); }}
            />  
        </View>
    );
  }
}

const styles = StyleSheet.create({

    View: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: '#111117',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        alignSelf: 'center',
        backgroundColor: 'transparent',
    }

});