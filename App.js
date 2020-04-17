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
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import OneSignal from 'react-native-onesignal'; 

// create our store
const store = createStore()

console.disableYellowBox = true;
export default class App extends React.Component {

  constructor(properties) {
    super(properties);
    OneSignal.init("eabb4a2f-2554-4282-961b-a66dc9208ce3");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    //OneSignal.configure(); 	// triggers the ids event
  }

  setNavigationColor = (color) => {
    changeNavigationBarColor(color);
  };

  componentDidMount() {
    this.setNavigationColor('#111117');
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

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
