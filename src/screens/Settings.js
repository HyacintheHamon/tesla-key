import React, { Component, useState } from 'react';
import {   Alert,   TouchableHighlight, StyleSheet, ScrollView, View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import TouchID from "react-native-touch-id";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Back from '../img/svg/Back';
import Divider from "../components/Divider";
import Block from "../components/Block";
import Switch from "../components/Switch";

export default class Settings extends Component {

  constructor(props) {
		super(props)
    this.state = {
      biometryType: null,
      speed: 60,
      showSpeedLimitControls: false
    };
  }

  componentDidMount() {
    TouchID.isSupported()
    .then(biometryType => {
      this.setState({ biometryType });
    })
  }

  increaseSpeed = () => {
    if (this.state.speed<90) {
      this.setState({speed:  ++this.state.speed});
    }
  }

  decreaseSpeed = () => {
    if (this.state.speed>50) {
      this.setState({speed:  --this.state.speed});
    }
  }

  showSpeedLimit = (value) => {
      this.setState({showSpeedLimitControls:  value});
  }

  render() {

    const {speed, showSpeedLimitControls } = this.state;

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
        <Text style={{fontSize:18, color:"#FFFFFF", marginBottom: 10, fontWeight:"bold"}}>{`${this.state.biometryType} Authentication`}</Text>
        <Text style={{fontSize:14, color:"#9DA3B4"}}>{`Allow ${this.state.biometryType} authentication`}</Text>
        </View>
        <Switch
          accessibilityRole={'button'}
          value={fingerprint}
          onValueChange={value => setFingerprint(value)}
          // onValueChange={this.clickHandler}
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

    const ValetBlock = () => {
      const [valet, setValet]  = useState(false);
      return (
        <Block
        row
        center
        space="between"
        style={{ marginBottom: 16 * 2 }}
      >
        <Text style={{fontSize:18, color:"#FFFFFF", fontWeight:"bold"}}>Valet Mode</Text>
        <Switch
          accessibilityRole={'button'}
          value={valet}
          onValueChange={value => setValet(value)}
        />
      </Block>
      );
    };

    const SentryBlock = () => {
      const [sentry, setSentry]  = useState(false);
      return (
        <Block
        row
        center
        space="between"
        style={{ marginBottom: 16 * 2 }}
      >
        <Text style={{fontSize:18, color:"#FFFFFF", fontWeight:"bold"}}>Sentry Mode</Text>
        <Switch
          accessibilityRole={'button'}
          value={sentry}
          onValueChange={value => setSentry(value)}
        />
      </Block>
      );
    };


    const SpeedLimitBlock = () => {

      return (
        <View>
        <Block
        row
        center
        space="between"
        style={{ marginBottom: 10 }}
      >
        <Text style={{fontSize:18, color:"#FFFFFF", fontWeight:"bold"}}>Speed Limit Mode</Text>
        <Switch
          accessibilityRole={'button'}
          value={showSpeedLimitControls}
          onValueChange={value => this.showSpeedLimit(value)}
        />
      </Block>
      { showSpeedLimitControls && 
      <View style={styles.speedLimitControlsContainer}>
        <TouchableOpacity style={styles.minusContainer} onPress={this.decreaseSpeed}>
          <FontAwesome5 name="minus" size={16} color="#93A8B3"/>
        </TouchableOpacity>
        <View style={styles.speedLimitContainer}>
          <Text style={{color:"#FFF", fontSize:16 }}>{speed} MPH</Text>
        </View>
        <TouchableOpacity style={styles.plusContainer} onPress={this.increaseSpeed}>
          <FontAwesome5 name="plus" size={16} color="#93A8B3"/>
        </TouchableOpacity>
      </View> }
      </View> 
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
            <ValetBlock/>
            <SentryBlock/>
            <SpeedLimitBlock/>
          </Block>

          <Divider />

          <Text style={{ fontSize: 12, marginBottom: 5, color:"#C5CCD6", textAlign:"center" }}>VIN: 5YJ3E1EBOLF589216</Text>
          <Text style={{ fontSize: 12, color:"#C5CCD6", textAlign:"center" }}>Version: 2020.4.1 4a4ad401858f</Text>

          {/* TEST FACE ID 
          {/*
          <TouchableHighlight
          style={{marginTop: 10, justifyContent:"center", alignContent:"center"}}
          onPress={this.clickHandler}
          underlayColor="#0380BE"
          activeOpacity={1}
        >
          <Text style={{
            color: '#fff',
            fontWeight: '600'
          }}>
            {`Authenticate with ${this.state.biometryType}`}
          </Text>
        </TouchableHighlight>
         */}
        </ScrollView>
      </Block>
      </SafeAreaView>
    );
  }

  clickHandler() {
    TouchID.isSupported()
      .then(authenticate)
      .catch(error => {
        Alert.alert('TouchID not supported');
      });
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
  },
  speedLimitControlsContainer: {
    flexDirection: "row", 
    justifyContent: "center", 
    alignSelf: "center",
    alignContent: "center",
    width: 250,
    height: 50,
    marginTop: 35,
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 64,
  },
  speedLimitContainer: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 32,
  },
  minusContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  plusContainer: {
    alignItems: "center",
    justifyContent: "center",
  }
});

function authenticate() {
  return TouchID.authenticate()
    .then(success => {
      Alert.alert('Authenticated Successfully');
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message);
    });
}
