import React, {Component} from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { requestVehicleInfo } from "../actions";

import {StyleSheet, Text, Alert, Image, View, Animated, TouchableOpacity, Dimensions} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';
import Modal from 'react-native-modal';
import YourCarPic from '../components/YourCarPic'
import HeaderComponent from '../components/HeaderComponent'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import {
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import Svg,{
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

const { height, width } = Dimensions.get('window');
perfectSize = create(PREDEF_RES.iphoneX.px);
import SummonModalScreen from './SummonModalScreen';
// import MapModalScreen from './MapModalScreen';
import MapModal from '../components/Map';
import Lock from '../components/Lock';
import ClimateControlsModalScreen from './ClimateControlsModalScreen'
import helper from '../Utils/helper';
const vent = require("../img/vent.png");
const trunk = require("../img/trunk.png");
const frunk = require("../img/frunk.png");
const fan = require("../img/fan.png");
const panic = require("../img/panic.png");
const port = require("../img/port.png");
const seat1 = require("../img/seat1.png");
const seat2 = require("../img/seat2.png");

let AnimatedCircle = Animated.createAnimatedComponent(Circle);
let INTRO_POSITION = [
  {x: 50, y: 50, description: "description1"},
  {x: 70, y: height/2, description: "description2"},
  {x: 200, y: height*2/3, description: "description3"},
  {x: 200, y: height*3/4, description: "description4"},
]

class MainScreen extends Component {

  constructor(props) {
		super(props)
      this.state = {
        description: 'Step1 description!',
        selectedItem: "",
        firstItem: 72,
        secondItem: 72,
        visibleSummonModal: null,
        visibleMapModal: null,
        visibleClimateControlsModal: null,
        visibleLockModal: null,
        lockState: false,
        introStep: 0,
        endIntro: false,
        circleRadius: new Animated.Value(0),
        circleX: new Animated.Value(0),
        circleY: new Animated.Value(0)
      };
    this.animated = new Animated.Value(0);

    this.state.circleX.addListener( (circleRadius) => {
      this._myCircle.setNativeProps({ cx: circleRadius.value.toString() });
    });

    this.state.circleY.addListener( (circleRadius) => {
      this._myCircle.setNativeProps({ cy: circleRadius.value.toString() });
    });
  }

  componentWillReceiveProps(nextProps) {
		const { vehicleInfo } = nextProps.vehicle.vehicleInfo;
		if (vehicleInfo!==this.props.vehicle.vehicleInfo) {
      this.setState({lockState: vehicleInfo.lockState});
		}
  }

  componentDidMount = async() => {
    this.setNavigationColor('#111117');

    const result = await helper.getCache('endedIntro');
    if (result=="true") {
      this.setState({endIntro: true});
    } else {
      this.next();
    }
  }

  openLockModal = () => {
    this.setState({visibleLockModal: true});
  }

  closeLockModal(lock_state){
    this.setState({visibleLockModal: false});
    this.props.requestVehicleInfo({lockState: lock_state});
  }

  handlerfanButtonLongPress = () => {
    //handler for Long Press on 
    //Alert.alert(' Long press');
    this.setState({ visibleClimateControlsModal: true });
  };
  handlerfanButtonPress = () => {
    //handler for Press
    Alert.alert(' Just press');
  };

  closeSummonModal() {
    this.setState({visibleSummonModal: false});
  }
  closeMapModal() {
    this.setState({visibleMapModal: false});
  }
  closeClimateControlsModal() {
    this.setState({visibleClimateControlsModal: false});
  }
  
  incrementFirstItem = () => {
    this.setState({
      firstItem: this.state.firstItem + 1
    });
  };
  incrementSecondItem = () => {
    this.setState({
      secondItem: this.state.secondItem + 1
    });
  };

  decrementFirstItem = () => {
    this.setState({
      firstItem: this.state.firstItem - 1
    });
  };
  decrementSecondItem = () => {
    this.setState({
      secondItem: this.state.secondItem - 1
    });
  };

  setNavigationColor = (color) => {
    changeNavigationBarColor(color);
  };

  next = async() => { 
    if (this.state.introStep>3) {
      this.setState({endIntro: true})
      const result = await helper.setCache('endedIntro', "true");
      return;
    }
    Animated.timing(this.state.circleX, {
      toValue: INTRO_POSITION[this.state.introStep].x,
      duration: 500
    }).start();
    Animated.timing(this.state.circleY, {
      toValue: INTRO_POSITION[this.state.introStep].y,
      duration: 500
    }).start();
    this.state.introStep++;
    this.setState({description: INTRO_POSITION[this.state.introStep].description});
  }

  render() {
    const {firstItem, secondItem, description, endIntro} = this.state;

    /*
    let batteryIcon = <BatteryAlmost/>;
    if (batteryLevel == 100) {
      batteryIcon = <BatteryFull/>;
    }
    else if (batteryLevel > 70) {
      batteryIcon = <BatteryFull/>;
    }
    else if (batteryLevel < 70 && batteryLevel > 40) {
      batteryIcon = <BatteryMedium/>;
    }
    else {
      batteryIcon = <BatteryLow/>;
    }
    */

    return (
      // <FlingGestureHandler
      //   direction={Directions.DOWN}
      //   numberOfPointers={1}
        // onHandlerStateChange={this.openLockModal}
        // >
      <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
        <View style={styles.container}>
            <HeaderComponent
              leftButtonOnPress={() => this.props.navigation.toggleDrawer()}
              rightButtonOnPress={()=> this.setState({ visibleSummonModal: true })}
              centerButtonOnPress={this.openLockModal}
              leftButtonImage={false}
              leftIconName={'menu'}
              leftIconType={'feather'}
            />
            <View style={ styles.topView} >
              <View style={ styles.milesView} >
                <Text style={styles.milesViewTitle}>254</Text>
                <Text style={styles.milesViewSubtitle}>mi</Text>
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
                />
                  <Text style={styles.inlineLabel}>Interior 68°F</Text>
                <Icon 
                  style={styles.infoIcon}
                  name="parking"
                  size={14}
                  color="#fff"
                />
                  <Text style={styles.inlineLabel}>Parked</Text>
                <Ionicons
                  name={'md-battery-charging'}
                  style={styles.infoIcon}
                  color={'white'}
                  size={16}
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
                <TouchableOpacity style={styles.fanButton} 
                onLongPress={this.handlerfanButtonLongPress}
                onPress={this.handlerfanButtonPress}
                >
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
            coverScreen={true}
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
            coverScreen={true}
          >
            <MapModal onCloseMapModal={()=>this.closeMapModal()}/>
          </Modal>
          <Modal
            style={{ margin: 0 }}
            isVisible={this.state.visibleClimateControlsModal === true}
            backdropColor={"#111117"}
            backdropOpacity={1}
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            animationInTiming={300}
            animationOutTiming={300}
            backdropTransitionInTiming={300}
            backdropTransitionOutTiming={300}
            coverScreen={true}
            onBackdropPress={() => this.setState({ visibleClimateControlsModal: false })}
          >
            <ClimateControlsModalScreen onCloseClimateControlsModal={()=>this.closeClimateControlsModal()}/>
          </Modal>

          <Modal
            style={{ margin: 0 }}
            isVisible={this.state.visibleLockModal === true}
            backdropColor={'rgba(0,0,0,0.7)'}
            backdropOpacity={1}
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            animationInTiming={300}
            animationOutTiming={300}
            backdropTransitionInTiming={300}
            backdropTransitionOutTiming={300}
            coverScreen={true}
          >
            <Lock onCloseLockModal={(lock_state)=>this.closeLockModal(lock_state)} lockState={this.state.lockState}/>
          </Modal>
        </View>
       
        {!endIntro&&
          <View style={styles.intro}>
            <Text style={{color: 'white', fontSize: 27, marginBottom: 20}}>{description}</Text>            
            <TouchableOpacity style={styles.nextButton} onPress={this.next}>
              <Text style={{color: 'white', fontSize: 27}}>Next</Text>
            </TouchableOpacity>
          </View>        
        }
        {
          !endIntro&&
          <View style={{
            height: height,
            position: 'absolute',
            width: width,
            aspectRatio: 1
          }}>
            <Svg height={height} width="100%">
                <Defs>
                    <Mask id="mask" x="0" y="0" height={height} width="100%">
                        <Rect height="100%" width="100%" fill="#fff" />
                        <AnimatedCircle ref={ ref => this._myCircle = ref } cx="-50" cy="-50" r="50" fill="black" />
                    </Mask>
                </Defs>
                <Rect height="100%" width="100%" fill="rgba(107, 107, 23, 0.5)" mask="url(#mask)" fill-opacity="0" />
            </Svg>              
          </View>          
        }
      </View>
    // </FlingGestureHandler>
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
    fontFamily: 'OpenSans-Light',
    fontWeight: '300',
    fontSize: 75,
    color: '#fff',
    top: -height/9.5
  },
  milesViewSubtitle: {
    fontFamily: 'OpenSans-Light',
    fontWeight: '300',
    fontSize: 30,
    color: '#fff',
    top: -height/22,
    marginLeft: 5
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
  },
  intro: {
    position: 'absolute',
    bottom: 70,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    zIndex: 999
  },
  nextButton: {
    backgroundColor: 'transparent',
    width: width*0.7,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
});


function mapStateToProps(state) {
  const { vehicle } = state;
  return {
    vehicle
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestVehicleInfo: bindActionCreators(requestVehicleInfo, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);