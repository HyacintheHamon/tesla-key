import React, { Component } from 'react';
import { StyleSheet, View,  Text, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import SvgUri from 'react-native-svg-uri';

export default class SplashScreen extends Component {

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        1500
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage

    const data = await this.performTimeConsumingTask();

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
          // this.userLoggedIn();
          this.props.navigation.replace('LoginForm');
        }
    });
  }
   

  render() {
    return (
        <View style={styles.View}>
            <SvgUri style={styles.logo} width="100" height="50" source={require('../img/logo_grey.svg')} />
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