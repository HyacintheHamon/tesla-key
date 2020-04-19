import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Dimensions } from "react-native";
import Back from '../img/svg/Back';

var { width } = Dimensions.get('window');

export default class CalendarScreen extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Back style={styles.backButton} />
                    </TouchableOpacity>
                    <Text style={styles.header}>Calendar</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.textArea}>To get calendar events in your car, make sure the following phone settings are ON.</Text>
                    <Text style={styles.secondaryHeader}>Calendar Access ON</Text>
                    <Text style={styles.textArea}>
                      Calendar Access ON Settings > Tesla {"\n"}
                      Turn on switch next to Calendars 
                    </Text>
                    <Text style={styles.secondaryHeader}>Allow Notifications ON</Text>
                    <Text style={styles.textArea}>
                      Settings > Tesla > Notifications {"\n"}
                      Allow Notifications 
                    </Text>
                    <Text style={styles.secondaryHeader}>Background App Refresh OFF</Text>
                    <Text style={styles.textArea}>
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
    justifyContent:"center",
    marginTop:30
  },
  backButton:{
    marginLeft:30
  },
  header: {
    paddingHorizontal: 34,
    fontSize:32, 
    fontWeight: "bold", 
    color:"#FFFFFF"
  },
  bodyContainer: {
    flex:1,
    marginTop: 10
  },
  greyText:{
    fontSize: 16, 
    color:"#C5CCD6", 
    textAlign:"center"
  },
  milesText:{
    fontSize: 22, 
    margin: 10,
    color:"#FFFFFF", 
    textAlign:"center"
  },
  textArea:{
    fontSize: 18, 
    marginTop: 20,
    marginLeft: parseInt(width/15),
    marginRight: parseInt(width/15),
    color:"#FFFFFF", 
    lineHeight: 30
  },
  secondaryHeader: {
    textAlign:"left",
    fontSize:20, 
    fontWeight: "bold", 
    color:"#FFFFFF",
    marginTop: 10,
    marginLeft: parseInt(width/15),
  },
  learnMore: {
    textAlign:"left",
    fontSize:13,
    fontWeight: "bold", 
    color:"#FFFFFF",
    marginTop: 10,
    marginLeft: parseInt(width/15),
    textDecorationLine: 'underline'
  },
});

