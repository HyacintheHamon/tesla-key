import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import VehicleState from './VehicleState'
import changeNavigationBarColor from 'react-native-navigation-bar-color';

export default class ConnectToVehicle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataLoaded: false,
      bearerToken: 0,
      allData: {},
    }
    this.setEstablishedConnection = this.setEstablishedConnection.bind(this)
  }

  setEstablishedConnection = (bearerToken) => {
    this.setState({
      bearerToken
    })

    async function getVehicleData(bearerToken, fn) {
      try {
        let response = await fetch('https://owner-api.teslamotors.com/api/1/vehicles', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${bearerToken}`
          }
        });
        let responseJson = await response.json();
        fn(responseJson.response[0])
      } catch (error) {
        console.error(error);
      }
    }
    getVehicleData(this.state.bearerToken, this.setVehicleData);
  }

  setVehicleData = (allData) => {
    this.setState({
      allData,
      dataLoaded: true
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
        <VehicleState allData={this.state.allData} bearerToken={this.state.bearerToken} />
        {/*
        {!this.state.dataLoaded ? 
          <LoginForm setEstablishedConnection={this.setEstablishedConnection} /> 
        :
          <VehicleState allData={this.state.allData} bearerToken={this.state.bearerToken} />
        }
      */}
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
    paddingTop: 50,
  },
});