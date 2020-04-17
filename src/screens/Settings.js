import React, { Component, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import Back from '../img/svg/Back';
import Divider from "../components/Divider";
import Block from "../components/Block";
import Switch from "../components/Switch";

export default class Settings extends Component {

  render() {

    const NotificationsBlock = () => {
      const [notifications, setNotifications]  = useState(true);
      return (
        <Block
        row
        center
        space="between"
        style={{ marginBottom: 16 * 2 }}
      >
        <Text style={{fontSize:18, color:"#FFFFFF", fontWeight:"bold"}}>Notifications</Text>
        <Switch
          accessibilityRole={'button'}
          value={notifications}
          onValueChange={value => setNotifications(value)}
        />
      </Block>
      );
    };

    const FingerprintBlock = () => {
      const [fingerprint, setFingerprint] = useState( false );
      return (
        <Block
        row
        center
        space="between"
        style={{ marginBottom: 16 * 2 }}
      >
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text style={{fontSize:18, color:"#FFFFFF", marginBottom: 10, fontWeight:"bold"}}>Fingerprint Authentication</Text>
        <Text style={{fontSize:14, color:"#9DA3B4"}}>Allow fingerprint authentication</Text>
        </View>
        <Switch
          accessibilityRole={'button'}
          value={fingerprint}
          onValueChange={value => setFingerprint(value)}
        />
      </Block>
      );
    };

    const CalendarBlock = () => {
      const [calendar, setCalendar] = useState(true);
      return (
        <Block
        row
        center
        space="between"
        style={{ marginBottom: 16 * 2 }}
      >
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          <Text style={{fontSize:18, color:"#FFFFFF", marginBottom: 10, fontWeight:"bold"}}>Calendar Sync</Text>
          <Text style={{fontSize:14, color:"#9DA3B4"}}>View calendar in your vehicle</Text>
        </View>
        <Switch
          accessibilityRole={'button'}
          value={calendar}
          onValueChange={value => setCalendar(value)}
        />
      </Block>
      );
    };

    return (

      <SafeAreaView style={{flex:1, backgroundColor:"#111117"}}>
      <Block style={{justifyContent:"center", marginTop:30}}>
        <TouchableOpacity style={styles.closeButton} onPress={() => this.props.navigation.goBack()}>
          <Back />
        </TouchableOpacity>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text style={{fontSize:32, fontWeight: "bold", color:"#FFFFFF"}}>
            Settings
          </Text>
        </Block>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{justifyContent:"center"}}>

        <Block style={styles.inputs}>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text style={{ marginBottom: 10, color:"#FFFFFF" }}>
                  E-mail
                </Text>
                <Text style={{color:"#FFFFFF", fontWeight:"bold"}}>hamon.hyacinthe@gmail.com</Text>
              </Block>
            </Block>
          </Block>

          <Divider /> 

          <Block style={styles.toggles}>
            <NotificationsBlock/>
            <FingerprintBlock/>
            <CalendarBlock/>
          </Block>

          <Divider />

          <Text style={{ fontSize: 12, marginBottom: 5, color:"#C5CCD6", textAlign:"center" }}>VIN: 5YJ3E1EBOLF589216</Text>
          <Text style={{ fontSize: 12, color:"#C5CCD6", textAlign:"center" }}>Version: 2020.4.1 4a4ad401858f</Text>
        </ScrollView>
      </Block>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  closeButton: {
    marginLeft: 30,
  },
  header: {
    paddingHorizontal: 16 * 2
  },
  inputs: {
    marginTop: 16 * 0.7,
    paddingHorizontal: 16 * 2
  },
  inputRow: {
    alignItems: "flex-end"
  },
  toggles: {
    paddingHorizontal: 16 * 2
  }
});
