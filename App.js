import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import createStore from './src/redux'
/*
* Both of the following files work for react-navigation
* Routes will always be added and supported by modifying
* the AppNavigation file.  Special redux actions/reducers
* will be handled in Redux Navigation
*   // use this to use react-navigation no redux
*   import AppNavigation from './src/Navigation/AppNavigation'
*
*   // use this to use react-navigation with redux
*   import ReduxNavigation from './src/Navigation/ReduxNavigation'
*/

// We're going to use navigation with redux
import ReduxNavigation from './src/navigation/ReduxNavigation';
import AppNavigation from './src/navigation/AppNavigation';

// create our store
const store = createStore()


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppNavigation />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
