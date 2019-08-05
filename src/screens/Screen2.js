import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class Screen1 extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#fff'}}>Screen 2</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111117',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
