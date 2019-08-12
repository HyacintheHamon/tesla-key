import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity,SafeAreaView  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';
perfectSize = create(PREDEF_RES.iphoneX.px);
const vent = require("../img/vent.png");
const trunk = require("../img/trunk.png");
const frunk = require("../img/frunk.png");
const fan = require("../img/fan.png");
const panic = require("../img/panic.png");
const port = require("../img/port.png");
const seat1 = require("../img/seat1.png");
const seat2 = require("../img/seat2.png");

export default class ClimateControlsModalScreen extends React.Component {

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
      <View style={styles.modalContent}>
        <Text style={styles.header}>CLIMATE CONTROLS</Text>
        <TouchableOpacity style={styles.closeButton} onPress={this.props.onCloseClimateControlsModal}>
          <Icon name="times" size={24} color="#fff" />
        </TouchableOpacity>

        <Image source={fan} style={{width: 80, height: 80}}/> 

        <View style={styles.bottomModal}>
        <View style={styles.buttonGroup}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
                <Image style={styles.seatIcon} source={seat1} />
              </TouchableOpacity>

            <View style={styles.ctrlTem}>
              <TouchableOpacity style={styles.button} onPress={this.incrementFirstItem}>
                <Icon
                  name={'chevron-up'}
                  type={'entypo'}
                  color={'white'}
                  size={24}
                />
              </TouchableOpacity>
              <Text style={styles.temText}>72</Text>
              <TouchableOpacity style={styles.button} onPress={this.decrementFirstItem}>
                <Icon
                  name={'chevron-down'}
                  type={'entypo'}
                  color={'white'}
                  size={24}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.fanButton} 
              onLongPress={this.handlerfanButtonLongPress}
              onPress={this.handlerfanButtonPress}
              >
                <Image style={styles.buttonIcon} source={fan} />
              </TouchableOpacity>
            </View>
            <View style={styles.ctrlTem}>
              <TouchableOpacity style={styles.button} onPress={this.incrementSecondItem}>
                <Icon
                  name={'chevron-up'}
                  type={'entypo'}
                  color={'white'}
                  size={24}
                />
              </TouchableOpacity>
              <Text style={styles.temText}>72</Text>
              <TouchableOpacity style={styles.button} onPress={this.decrementSecondItem}>
                <Icon
                  name={'chevron-down'}
                  type={'entypo'}
                  color={'white'}
                  size={24}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
              <Image style={styles.seatIcon} source={seat2} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.item}>
              <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
                <Image style={styles.buttonIcon} source={port} />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
                <Image style={styles.buttonIcon} source={frunk} />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
                <Image style={styles.buttonIcon} source={panic} />              
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
                <Image style={styles.buttonIcon} source={trunk} />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
                <Image style={styles.buttonIcon} source={vent} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      </View>
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
  },
  header:{
      position: 'absolute',
      top: 20,
      color: "#fff",
      textTransform: 'uppercase',
      fontFamily: 'Montserrat-Medium',
      fontSize: 15
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
    bottom: 0
  },
  buttonGroup: {
    flex: 1, 
    flexDirection: 'column',
    width: "90%",
    marginBottom:  30
  },
  buttonRow: {
    height: 80,
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "center"
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fanButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  buttonIcon: {
    width: perfectSize(80),
    height: perfectSize(80)
  },
  seatIcon: {
    width: perfectSize(80),
    height: perfectSize(150)
  },
  temText: {
    color: 'white',
    width: '100%',
    justifyContent: 'center',
    fontSize: 24
  },
  ctrlTem: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 5
  }
})

