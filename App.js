import React from "react";
import { StyleSheet, View } from "react-native";
// import AppNavigation from "./src/navigation/AppNavigation";
import AppNavigation from './src/navigation'
import changeNavigationBarColor from "react-native-navigation-bar-color";
import OneSignal from "react-native-onesignal";
import GraphQLExample from './src/screens/GraphQLExample'

// Apollo
import { ApolloProvider } from '@apollo/client';
import client from "./src/graphql/client";

import codePush from "react-native-code-push";

console.disableYellowBox = true;

class App extends React.Component {
  constructor(properties) {
    super(properties);
    OneSignal.init("eabb4a2f-2554-4282-961b-a66dc9208ce3");

    OneSignal.addEventListener("received", this.onReceived);
    OneSignal.addEventListener("opened", this.onOpened);
    OneSignal.addEventListener("ids", this.onIds);
    //OneSignal.configure(); 	// triggers the ids event
  }

  setNavigationColor = (color) => {
    changeNavigationBarColor(color);
  };

  componentDidMount() {
    this.setNavigationColor("#111117");
  }

  componentWillUnmount() {
    OneSignal.removeEventListener("received", this.onReceived);
    OneSignal.removeEventListener("opened", this.onOpened);
    OneSignal.removeEventListener("ids", this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log("Message: ", openResult.notification.payload.body);
    console.log("Data: ", openResult.notification.payload.additionalData);
    console.log("isActive: ", openResult.notification.isAppInFocus);
    console.log("openResult: ", openResult);
  }

  onIds(device) {
    console.log("Device info: ", device);
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <AppNavigation />
          {/* <GraphQLExample /> */}
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const codePushWrapper = codePush(App);

export default codePushWrapper;
