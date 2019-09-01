import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity,SafeAreaView  } from 'react-native'
import { create, PREDEF_RES } from 'react-native-pixel-perfect';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import Ionicons from 'react-native-vector-icons/Ionicons';
perfectSize = create(PREDEF_RES.iphoneX.px);
import {
  Fan, 
  Power,
  Plus, 
  Minus, 
  Auto,
  AC,
  Loop,
  ClimateSeatUp,
  ClimateSeatFront,
  ClimateSeatDown,
  ClimateSeatBack,
} from "../img/svg/";

const seat1  = require("../img/seat1.png");

export default class ClimateControlsModalScreen extends React.Component {

  constructor(props) {
		super(props)
      this.state = {
        climate: {
          auto: false,
          ac: false,
          powerOn: false,
          turnFace: false,
          velocity: 2
        }
      };
  }

  setNavigationColor = (color) => {
    changeNavigationBarColor(color);
  };

  componentDidMount() {
    this.setNavigationColor('#111117');
  }

  increaseVelocity = () => {
    this.setState({climate: {...this.state.climate, velocity: ++this.state.climate.velocity}});
  }

  decreaseVelocity = () => {
    if (this.state.climate.velocity>0) {
      this.setState({climate: {...this.state.climate, velocity: --this.state.climate.velocity}});
    }
  }

  render() {
    const {climate} = this.state;
    const {auto, ac, turnFace, powerOn, velocity} = climate;
    return (
      <SafeAreaView style={{flex:1}}>
        <TouchableOpacity  onPress={this.props.onCloseClimateControlsModal} style={{...styles.modalContent}}>
          <View style={{flex: 0.05, justifyContent: 'center'}}>
            <Text style={styles.header}>CLIMATE CONTROLS</Text>
          </View>
          <View style={{flex: 0.3, justifyContent: 'center'}}>
            <Fan width="80" height="80" /> 
          </View>
          <View style={{flex: 0.65}}>
            <View style={styles.buttonGroup}>
              <View style={styles.buttonRow}>
                <View style={styles.buttonCol}>
                  <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
                    <ClimateSeatUp style={styles.buttonIcon}  />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
                    <ClimateSeatFront style={styles.buttonIcon}  />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
                    <ClimateSeatDown style={styles.buttonIcon} />
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonCol}>
                  <TouchableOpacity style={auto?styles.activeBtn:styles.button} onPress={()=>this.setState({climate: {...climate, auto: !auto}})}>
                    <Auto />                  
                  </TouchableOpacity>
                  <View style={styles.longButton}>
                    <TouchableOpacity style={styles.volButton} onPress={this.increaseVelocity}>
                      <Plus/>
                    </TouchableOpacity>
                    <Text style={{color: 'white', fontSize: 27}}>{velocity}</Text>
                    <TouchableOpacity style={styles.volButton} onPress={this.decreaseVelocity}>
                      <Minus/>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.buttonCol}>
                  <TouchableOpacity style={ac?styles.activeBtn:styles.button} onPress={()=>this.setState({climate: {...climate, ac: !ac}})}>
                    <AC/>
                  </TouchableOpacity>
                  <TouchableOpacity style={turnFace?styles.activeBtn:styles.button} onPress={()=>this.setState({climate: {...climate, turnFace: !turnFace}})}>
                    <Loop />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
                    <ClimateSeatBack style={styles.buttonIcon} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={powerOn?styles.activeBtn:styles.button} onPress={()=>this.setState({climate: {...climate, powerOn: !powerOn}})}>
                  <Power />   
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: '#111117',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  header:{
      color: "#fff",
      textTransform: 'uppercase',
      fontFamily: 'Montserrat-Medium',
      fontSize: 15,
  },
  closeButton: {
      position: 'absolute',
      right: 20,
      top: 15,
  },
  bottomModal: {
    width: '100%', 
    backgroundColor: 'transparent', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flex: 0.7,
  },
  buttonGroup: {
    flexDirection: 'column',
    width: "90%",
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "center",
    width: '100%'
  },
  buttonCol: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 5
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70,
    borderColor: '#525252',
    borderWidth: 1,
    borderRadius: 35,
    marginTop: 17
  },
  activeBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70,
    borderColor: '#525252',
    borderWidth: 1,
    borderRadius: 35,
    marginTop: 17,
    backgroundColor: 'rgba(10, 120, 233, 0.9)'
  },
  volButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 70
  },
  buttonText: {
    color: 'white',
    fontSize: 40
  },
  longButton: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 160,
    width: 70,
    borderColor: '#525252',
    borderWidth: 1,
    borderRadius: 35,
    marginTop: 17,
    flexDirection: 'column'
  },
  buttonIcon: {
    width: perfectSize(80),
    height: perfectSize(150)
  }
})

