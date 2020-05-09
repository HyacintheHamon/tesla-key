import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Dimensions } from "react-native";
import Back from '../img/svg/Back';
import I18n from "../Utils/i18n";

var { width } = Dimensions.get('window');

export default class CalendarScreen extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => this.props.navigation.goBack()}
          >
            <Back />
          </TouchableOpacity>
          <View style={styles.header}>
            <Text
              style={{ fontSize: 32, fontWeight: "bold", color: "#FFFFFF" }}
            >
              {I18n.t("calendar")}
            </Text>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.textArea}>To get calendar events in your car, make sure the following phone settings are ON.</Text>
          <Text style={styles.secondaryHeader}>Calendar Access ON</Text>
          <Text style={styles.textDescription}>
            Calendar Access ON Settings > Tesla {"\n"}
            Turn on switch next to Calendars
          </Text>
          <Text style={styles.secondaryHeader}>Allow Notifications ON</Text>
          <Text style={styles.textDescription}>
            Settings > Tesla > Notifications {"\n"}
            Allow Notifications
          </Text>
          <Text style={styles.secondaryHeader}>Background App Refresh OFF</Text>
          <Text style={styles.textDescription}>
            Settings > Tesla {"\n"}
            Turn on switch next to Background App Refresh
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111117"
  },
  headerContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  backButton: {
    marginLeft: 30,
    marginTop: 10
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 20
  },
  backButton: {
    marginLeft: 30
  },
  bodyContainer: {
    flex: 1,
    marginTop: 10
  },
  greyText: {
    fontSize: 16,
    color: "#C5CCD6",
    textAlign: "center"
  },
  milesText: {
    fontSize: 22,
    margin: 10,
    color: "#FFFFFF",
    textAlign: "center"
  },
  textArea: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 40,
    marginLeft: parseInt(width / 15),
    marginRight: parseInt(width / 15),
    color: "#FFFFFF",
    lineHeight: 20
  },
  secondaryHeader: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: parseInt(width / 15),
  },
  textDescription: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: parseInt(width / 15),
    marginRight: parseInt(width / 15),
    color: "#FFFFFF",
    lineHeight: 25
  }
});

