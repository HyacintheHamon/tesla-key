import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class DrawerContent extends React.Component {

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text
          onPress={() => navigation.navigate('MainScreen')}
          style={styles.DrawerItem}>
          Main control screen
        </Text>
        <Text
          onPress={() => navigation.navigate('MapScreen')}
          style={styles.DrawerItem}>
          Map Screen
        </Text>
        <Text
          onPress={() => navigation.navigate('ARScene')}
          style={styles.DrawerItem}>
          AR Screen
        </Text>
        <Text
          onPress={() => navigation.navigate('screen2')}
          style={styles.DrawerItem}>
          Screen 2
        </Text>
        <Text
          onPress={() => navigation.navigate('screen3')}
          style={styles.DrawerItem}>
          Screen 3
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13181B',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  DrawerItem: {
    fontSize: 14,
    color: '#fff',
    padding: 15,
    margin: 5,
    textAlign: 'left'
  }
})