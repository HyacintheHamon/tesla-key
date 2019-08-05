import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'

class GetStartedButton extends Component {

  onPress = () => {
    this.props.getStarted()
  }

  render() {
    return (
      <View style = {styles.container} >
         <TouchableOpacity onPress={this.onPress}>
            <Text style={styles.text}>
               Get Started
            </Text>
         </TouchableOpacity>
      </View>
   )
  }
}

export default GetStartedButton

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
   },
   text: {
      borderWidth: 1,
      padding: 10,
      borderColor: 'white',
      backgroundColor: 'darkred',
      color: 'white',
      fontWeight: 'bold',
   }
})