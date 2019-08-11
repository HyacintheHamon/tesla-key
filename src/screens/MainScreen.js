import React, {Component} from 'react';
import {StyleSheet, Text, Image, View, FlatList, TouchableOpacity, Dimensions} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';
import Modal from 'react-native-modal';
import YourCarPic from '../components/YourCarPic'
import HeaderComponent from '../components/HeaderComponent'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const { height, width } = Dimensions.get('window');
perfectSize = create(PREDEF_RES.iphoneX.px);
import SummonModalScreen from './SummonModalScreen';
import MapModalScreen from './MapModalScreen';
import MapModal from '../components/Map';

const vent = require("../img/vent.png");
const trunk = require("../img/trunk.png");
const frunk = require("../img/frunk.png");
const fan = require("../img/fan.png");
const panic = require("../img/panic.png");
const port = require("../img/port.png");
const seat1 = require("../img/seat1.png");
const seat2 = require("../img/seat2.png");

export default class MainScreen extends Component {
  state = {
    selectedItem: "",
    firstItem: 72,
    secondItem: 72,
    visibleSummonModal: null,
    visibleMapModal: null,
  };

  closeSummonModal() {
    this.setState({visibleSummonModal: false});
  }
  closeMapModal() {
    this.setState({visibleMapModal: false});
  }
  
  incrementFirstItem = () => {
    this.setState({
      firstItem: this.state.firstItem + 1
    });
  };
  
  decrementFirstItem = () => {
    this.setState({
      firstItem: this.state.firstItem - 1
    });
  };


  incrementSecondItem = () => {
    this.setState({
      secondItem: this.state.secondItem + 1
    });
  };
  
  decrementSecondItem = () => {
    this.setState({
      secondItem: this.state.secondItem - 1
    });
  };

  render() {
    const {firstItem} = this.state;
    const {secondItem} = this.state;
    return (
      <View style={styles.container}>
        {/* <LinearGradient colors={['#111117', '#333']} style={styles.linearGradient}> */}
          <HeaderComponent
            leftButtonOnPress={() => this.props.navigation.toggleDrawer()}
            rightButtonOnPress={()=> this.setState({ visibleSummonModal: true })}
            leftButtonImage={false}
            leftIconName={'menu'}
            leftIconType={'feather'}
          />
          <View style={ styles.topView} >
            <View style={ styles.milesView} >
              <Text style={styles.milesViewTitle}>254</Text>
              <Text style={styles.milesViewSubTitle}>mi</Text>
            </View>
          <YourCarPic />
          </View>
          <View style={ styles.bottomView} >
            <View style={styles.status}>
              <Icon
                name={'lock'}
                type={'Entypo'}
                color={'white'}
                size={14}
                //style={{margin: 7}}
              />
                <Text style={styles.inlineLabel}>Interior 68°F</Text>
              <Icon 
                style={styles.infoIcon}
                name="parking"
                size={14}
                color="#fff"
                //style={{margin: 7}}
              />
                <Text style={styles.inlineLabel}>Parked</Text>
              <Ionicons
                name={'md-battery-charging'}
                style={styles.infoIcon}
                color={'white'}
                size={16}
                //style={{margin: 7}}
              />        
                <Text style={styles.inlineLabel}>Charging</Text>
            </View>
            <View style={styles.calloutView} >
              <View style={styles.calloutIconView}>
                <Icon style={styles.calloutIcon} name="location-arrow" size={15} color="#fff" />
              </View>
              
              <TouchableOpacity style={styles.calloutSearch} onPress={()=> this.setState({ visibleMapModal: true })}>
                <Text style={styles.label}>Where to?</Text>
              </TouchableOpacity>

              <View style={styles.calloutIconView}>
                <TouchableOpacity style={styles.calloutIconEnd} onPress={() => this.props.navigation.navigate('ARScene')}>
                 <MaterialIcon name="filter-center-focus" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
          </View>
          
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
              <Text style={styles.temText}>{`  ${firstItem}°`}</Text>
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
              <TouchableOpacity style={styles.fanButton} onPress={()=>alert('button')}>
                <Image style={styles.buttonIcon} source={fan} />
                <Text style={styles.text}>MANUAL</Text>
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
              <Text style={styles.temText}>{` ${secondItem}°`}</Text>
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
                <Text style={styles.text}>PORT</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
                <Image style={styles.buttonIcon} source={frunk} />
                <Text style={styles.text}>FRUNK</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
                <Image style={styles.buttonIcon} source={panic} />              
                <Text style={styles.text}>PANIC</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
                <Image style={styles.buttonIcon} source={trunk} />
                <Text style={styles.text}>TRUNK</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
                <Image style={styles.buttonIcon} source={vent} />
                <Text style={styles.text}>VENT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        </View>
        {/* </LinearGradient> */}
        <Modal
          style={{ margin: 0 }}
          isVisible={this.state.visibleSummonModal === true}
          backdropColor={"#111117"}
          backdropOpacity={1}
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
          animationInTiming={300}
          animationOutTiming={300}
          backdropTransitionInTiming={300}
          backdropTransitionOutTiming={300}
        >
          <SummonModalScreen onCloseSummonModal={()=>this.closeSummonModal()}/>
        </Modal>
        <Modal
          style={{ margin: 0 }}
          isVisible={this.state.visibleMapModal === true}
          backdropColor={"#111117"}
          backdropOpacity={1}
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
          animationInTiming={300}
          animationOutTiming={300}
          backdropTransitionInTiming={300}
          backdropTransitionOutTiming={300}
        >
          <MapModal onCloseMapModal={()=>this.closeMapModal()}/>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111117',
    fontFamily: 'Montserrat-Medium',
  },
  status: {
    flexDirection: 'row',
    width: width*0.9,
    flex: 0.075,
    alignItems: 'center',
    marginBottom: 10
  },
  inlineLabel:{
    color: '#98989b',
    marginLeft: 10,
    marginRight: 10,
    fontFamily: 'Montserrat-Medium',
    fontSize: 13
  },
  label: {
    color: 'white',
    margin: 10,
    fontFamily: 'Montserrat-Bold',
  },
  topView: {
    flex: 1,
    paddingTop: height/5,
    backgroundColor: 'transparent', 
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  milesView: {
    flexDirection: 'row',
  },
  milesViewTitle: {
    fontFamily: 'Montserrat-Light',
    fontSize: 80,
    color: '#fff',
    top: -height/9.5
  },
  milesViewSubtitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
    top: -125,
    color: '#606060',
  },
  bottomView: {
    width: '100%', 
    backgroundColor: 'transparent', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  welcome: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
    textAlign: 'center',
    color: "#fff",
    fontWeight: 'bold',
    marginTop: 10,
    paddingBottom: 20,
  },
  infoView: {
    flexDirection: 'row',
    marginLeft: 20
  },
  infoViewItem: {
    paddingLeft: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  info: {
    textAlign: 'center',
    color: "#fff",
    margin: 5,
  },
  iconIcon: {
  },
  item: {
    justifyContent: 'center',
    alignItems: "center",
    width: 50,
    height: 50,
    maxWidth: 50,
    maxHeight: 50,
    margin:  5
  },
  icon: {
    paddingBottom: 10
  },
  text: {
    color: "#fff",
    textTransform: 'uppercase',
    fontSize: 10,
    marginTop: 5
  },
  calloutView: {
    flexDirection: "row",
    backgroundColor: '#202026',
    borderRadius: 5,
    width: "90%",
    marginLeft: "30%",
    marginRight: "30%",
    marginTop: 10,
    marginBottom: 40
  },
  calloutIconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  calloutIcon: {
    color: "#fff",
    width:50,
    marginLeft: 50,
  },
  calloutIconEnd: {
    color: "#fff",
    width:50,
    marginRight: 0,
  },
  calloutSearch: {
    borderColor: "transparent",
    color: "#fff",
    marginLeft: 10,
    width: "80%",
    marginRight: 10,
    height: 40,
    borderWidth: 0.0 
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
});