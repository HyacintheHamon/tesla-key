import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MainPic from './src/components/MainPic'
import GetStartedButton from './src/components/GetStartedButton'
import ConnectToVehicle from './src/screens/ConnectToVehicle';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const instructions = Platform.select({
  ios: 'A simple app using React Native \n and the Unofficial Tesla API \n',
  android:
    'It is recommended that you use iOS as this app is not optimized for Android'
});

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      getStarted: false
    }
    this.getStarted = this.getStarted.bind(this)
  }

  getStarted = () => {
    this.setState({
      getStarted: true
    })
  }

  setNavigationColor = (color) => {
    changeNavigationBarColor(color);
  };

  componentDidMount() {
    this.setNavigationColor('#111117');
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.getStarted ? <ConnectToVehicle /> : 
        <View style={styles.container}>
          <MainPic />
          <Text style={styles.welcome}>Welcome to Tesla Remote</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <GetStartedButton getStarted={this.getStarted} />
        </View>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111117',
  },
  welcome: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 25,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    margin: 10,
  },
});
