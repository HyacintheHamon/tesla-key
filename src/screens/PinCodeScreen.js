import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import Pincode from '../components/PinCode';

export default class PinCodeScreen extends Component {

  onDetectPin = (pin) => {
    console.log('pinCode>>>', pin);
  };

  render() {

  return (
      <SafeAreaView style={{flex:1, backgroundColor:"#111117"}}>
          <View style={styles.container}>
            <Pincode 
              descriptionText={"Create 4-Pin Digit"}
              spaceColor={"#FFFFFF"}
              closeButtonColor={"#FFFFFF"}
              onEnteredPincode={pin => this.onDetectPin(pin)} 
            />
          </View>
      </SafeAreaView>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
