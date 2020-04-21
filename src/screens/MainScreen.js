import React, {Component} from 'react';
import LottieView from 'lottie-react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { requestVehicleInfo } from "../actions";
import {StyleSheet, Text, Alert, Image, View, Animated, TouchableOpacity, Dimensions} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';
import Modal from 'react-native-modal';
import YourCarPic from '../components/YourCarPic'
import HeaderComponent from '../components/HeaderComponent'
import * as Animatable from 'react-native-animatable';
import {
  FlingGestureHandler,
  Directions,
  State,
  PanGestureHandler
} from 'react-native-gesture-handler';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import Svg,{
  Circle,
  Rect,
  Defs,
  Mask,
} from 'react-native-svg';

import MaskedView from '@react-native-community/masked-view';

const { height, width } = Dimensions.get('window');
perfectSize = create(PREDEF_RES.iphoneX.px);
import SummonModalScreen from './SummonModalScreen';
// import MapModalScreen from './MapModalScreen';
import MapModal from '../components/Map';
// import Lock from '../components/Lock';
import ClimateControlsModalScreen from './ClimateControlsModalScreen'
import helper from '../Utils/helper';
import { Query, withApollo } from 'react-apollo'

const fanAnimation = require('../animations/fan_animation.json');

const seatLeftFirstAnimation = require('../animations/seat_left_1.json');
const seatLeftSecondAnimation = require('../animations/seat_left_2.json');
const seatLeftThirdAnimation = require('../animations/seat_left_3.json');

const seatRightFirstAnimation = require('../animations/seat_right_1.json');
const seatRightSecondAnimation = require('../animations/seat_right_2.json');
const seatRightThirdAnimation = require('../animations/seat_right_3.json');

import { 
  Window, 
  Parked, 
  Port, 
  Panic, 
  Trunk, 
  Frunk, 
  Fan, 
  Temperature, 
  Target,
  LocationArrow,
  Battery,
  ArrowUp,
  ArrowDown
} from '../img/svg';
const frunk = require("../img/frunk.png");
const trunk = require("../img/trunk.png");
const mask = require("../img/mask.png");
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
        circleY: new Animated.Value(0),
        flingLeft: false,
        flingRight: false,
        fanIsToggled: false,
        animationsIndexSeatLeft:0,
        animationsListSeatLeft: [seatLeftFirstAnimation, seatLeftSecondAnimation, seatLeftThirdAnimation],
        animationsIndexSeatRight:0,
        animationsListSeatRight: [seatRightFirstAnimation, seatRightSecondAnimation, seatRightThirdAnimation]
      };

    this.deltaX = 0;
    this.deltaY = 0;
    this.animated = new Animated.Value(0);

    this._translateX = new Animated.Value(0);
    this._translateY = new Animated.Value(0);
    this._lastOffset = { x: 0, y: 0 };

    this.state.circleX.addListener( (circleRadius) => {
      this._myCircle.setNativeProps({ cx: circleRadius.value.toString() });
    });

    this.state.circleY.addListener( (circleRadius) => {
      this._myCircle.setNativeProps({ cy: circleRadius.value.toString() });
    });
    this.togglefanAnimation = this.togglefanAnimation.bind(this);
    this.onAnimationClickForwardSeatLeft = this.onAnimationClickForwardSeatLeft.bind(this);
    this.onAnimationClickForwardSeatRight = this.onAnimationClickForwardSeatRight.bind(this);
  }

  togglefanAnimation() {
    const newState = !this.state.fanIsToggled;
    this.setState({
      fanIsToggled:newState
    });
    console.log("fan toggle: ", this.state.fanIsToggled);
    if(this.state.fanIsToggled) {
      this.fanAnimation.play();
    } else {
      this.fanAnimation.reset();
    }
  }

  onAnimationClickForwardSeatLeft() {
    if (this.state.animationsIndexSeatLeft +1 === this.state.animationsListSeatLeft.length) {
      this.setState({
        animationsIndexSeatLeft: 0
      });
    } else {
      this.setState({
        animationsIndexSeatLeft: this.state.animationsIndexSeatLeft + 1
      });
    }
  }

  onAnimationClickForwardSeatRight() {
    if (this.state.animationsIndexSeatRight +1 === this.state.animationsListSeatRight.length) {
      this.setState({
        animationsIndexSeatRight: 0
      });
    } else {
      this.setState({
        animationsIndexSeatRight: this.state.animationsIndexSeatRight + 1
      });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
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

  _onGestureEvent = (event) => {
    let deltaX = event.nativeEvent.translationX;
    let deltaY = event.nativeEvent.translationY;

    if (!this.state.visibleLockModal&&Math.abs(deltaY-this.deltaY)>50) {
      this.openLockModal();
    }
    if (this.state.visibleLockModal&&Math.abs(deltaX-this.deltaX)>width/10) {
        this.deltaX = deltaX;            
        if (deltaX>0) {
          this.setState({flingRight: true, flingLeft: false});
        } else {
          this.setState({flingRight: false, flingLeft: true});
        }
    }
    
  }

  _onHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      console.log("Here");
      this._lastOffset.x += event.nativeEvent.translationX;
      this._lastOffset.y += event.nativeEvent.translationY;
      this._translateX.setOffset(this._lastOffset.x);
      this._translateX.setValue(0);
      this._translateY.setOffset(this._lastOffset.y);
      this._translateY.setValue(0);
      this.closeLockModal();
    }
  };

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

    /*
    let batteryIcon = <BatteryHigh/>;
    if (batteryLevel == 100) {
      batteryIcon = <BatteryHigh/>;
    }
    else if (batteryLevel > 70) {
      batteryIcon = <BatteryHigh/>;
    }
    else if (batteryLevel < 70 && batteryLevel > 40) {
      batteryIcon = <BatteryMedium/>;
    }
    else {
      batteryIcon = <BatteryLow/>;
    }

    let temperatureIcon = <TemperatureMedium/>;
    else if (temperatureLevelFahrenheit > 80) {
      temperatureIcon = <TemperatureHigh/>;
    }
    else if (temperatureLevelFahrenheit < 80 && temperatureLevelFahrenheit > 60) {
      temperatureIcon = <TemperatureyMedium/>;
    }
    else {
      temperatureIcon = <TemperatureLow/>;
    }
    */

    const {
            firstItem,
            secondItem,
            description,
            endIntro,
            flingLeft,
            flingRight,
          } = this.state;

    return (
      
      // Added a local query to update temperature
      /*
      <View style={{
        backgroundColor: '#f8f8f8',
        paddingTop: 50,
        flex: 1,
      }}>
        <Query
          query={requests.VEHICLE_STATE}
        >
          {({ data, loading, error }) => {
            if (loading) {
              return (
                <Text>LOADING ...</Text>
              )
            }
            if (error) {
              return (
                <Text>{JSON.stringify(error)} ...</Text>
              )
            }
            if (data) {
              return (
                <View>
                  <Text>{JSON.stringify(data, null, 4)}</Text>
                  <TouchableOpacity onPress={async () => {
                    await this.props.client.mutate({
                      variables: { input: { temperature: 101 } },
                      mutation: requests.SET_TEMPERATURE,
                    });
                  }}>
                    <Text>Increase temperature</Text>
                  </TouchableOpacity>
                </View>
              )
            }
            return <Text>NOTHING</Text>
          }}
        </Query>
       {/* 
        <Query
          query={requests.CLIMATE_STATE}
          variables={{ vehicle: '123' }}
        >
          {({ data, loading, error }) => {
            if (loading) {
              return (
                <Text>LOADING ...</Text>
              )
            }
            if (error) {
              return (
                <Text>{JSON.stringify(error)} ...</Text>
              )
            }
            if (data) {
              return (
                <Text>{JSON.stringify(data, null, 4)}</Text>
              )
            }
          }}
        </Query> 
        /*}
      </View>
     */

      // <FlingGestureHandler
      //   direction={Directions.DOWN}
      //   numberOfPointers={1}
      // onHandlerStateChange={this.openLockModal}
      // >

    <PanGestureHandler
      minDist={30}
      onGestureEvent={this._onGestureEvent}
      onHandlerStateChange={this._onHandlerStateChange}
    >        
      <Animated.View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
        {!this.state.visibleLockModal&&<View style={styles.container}>
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
                <Temperature style={styles.buttonIcon}/>
                <Text style={styles.inlineLabel}>Interior 68°F</Text>
                <Parked style={styles.buttonIcon}/>
                <Text style={styles.inlineLabel}>Parked</Text>
                <Battery style={styles.buttonIcon}/>
                <Text style={styles.inlineLabel}>Charging</Text>
              </View>
              <View style={styles.calloutView} >
                <View style={styles.calloutIconView}>
                  <LocationArrow style={styles.calloutIcon} />
                </View>
                
                <TouchableOpacity style={styles.calloutSearch} onPress={()=> this.setState({ visibleMapModal: true })}>
                  <Text style={styles.label}>Where to?</Text>
                </TouchableOpacity>

                <View style={styles.calloutIconView}>
                  <TouchableOpacity style={styles.calloutIconEnd} onPress={() => this.props.navigation.navigate('ARScene')}>
                  <Target/>
                  </TouchableOpacity>
                </View>
            </View>
              <View style={styles.buttonGroup}>
                <View style={styles.buttonRow}>
                  <TouchableOpacity style={styles.button} onPress={this.onAnimationClickForwardSeatLeft}>
                    <LottieView 
                      ref={animation => {
                      this.animation = animation;
                      }}
                      source={this.state.animationsListSeatLeft[this.state.animationsIndexSeatLeft]} 
                      style={{width:40}}
                    />  
                  </TouchableOpacity>

                  <View style={styles.ctrlTem}>
                    <TouchableOpacity style={styles.button} onPress={this.incrementFirstItem}>
                      <ArrowUp/>
                    </TouchableOpacity>
                    <Text style={styles.temText}>{`  ${firstItem}°`}</Text>
                    <TouchableOpacity style={styles.button} onPress={this.decrementFirstItem}>
                      <ArrowDown/>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.item}>
                    <TouchableOpacity style={styles.fanButton} 
                    onLongPress={this.handlerfanButtonLongPress}
                    onPress={this.togglefanAnimation}
                    >
                     <LottieView 
                      ref={fanAnimation => {
                      this.fanAnimation = fanAnimation;
                      }}
                      loop = {true}
                      source={fanAnimation} 
                      style={{width:40}}
                      />  
                      <Text style={styles.text}>MANUAL</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.ctrlTem}>
                    <TouchableOpacity style={styles.button} onPress={this.incrementSecondItem}>
                      <ArrowUp/>
                    </TouchableOpacity>
                    <Text style={styles.temText}>{` ${secondItem}°`}</Text>
                    <TouchableOpacity style={styles.button} onPress={this.decrementSecondItem}>
                      <ArrowDown/>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.button} nPress={this.onAnimationClickForwardSeatRight}>
                    <LottieView 
                      ref={animation => {
                      this.animation = animation;
                      }}
                      source={this.state.animationsListSeatRight[this.state.animationsIndexSeatRight]} 
                      style={{width:40}}
                    />  
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                  <View style={styles.item}>
                    <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
                      <Port style={styles.buttonIcon}/>
                      <Text style={styles.text}>PORT</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.item}>
                    <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
                      <Frunk style={styles.buttonIcon}/>
                      <Text style={styles.text}>FRUNK</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.item}>
                    <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
                      <Panic style={styles.buttonIcon}/>              
                      <Text style={styles.text}>PANIC</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.item}>
                    <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
                      <Trunk style={styles.buttonIcon}/> 
                      <Text style={styles.text}>TRUNK</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.item}>
                    <TouchableOpacity style={styles.button} onPress={()=>alert('button')}>
                      <Window style={styles.buttonIcon}/> 
                      <Text style={styles.text}>VENT</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
        </View>}
       
        {!endIntro&&
          <View style={styles.intro}>
            <Text style={{color: 'white', fontSize: 27,ginBottom: 20}}>{description}</Text>            
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
            onBackdropPress={() => this.setState({ visibleClimateControlsModal: false })}
          >
            <ClimateControlsModalScreen onCloseClimateControlsModal={()=>this.closeClimateControlsModal()}/>
          </Modal>
            {this.state.visibleLockModal&&
              <Lock 
                onCloseLockModal={(lock_state)=>this.closeLockModal(lock_state)}
                lockState={this.state.lockState}
                onFlingLeft={flingLeft}
                onFlingRight={flingRight}
              />}
      </Animated.View>
    </PanGestureHandler>
    );
  }
}

const trunk_black = require("../img/trunk_black.png");
const frunk_black = require("../img/frunk_black.png");

const LockState = {
    frunk: 1, lock: 2, trunk: 3 
};

export class Lock extends Component {
    constructor(props) {
		super(props)
		this.state = {
            lockState: LockState.lock,
            animatedShow: "fadeInDown",

            circleRadius: new Animated.Value(0),
            circleX: new Animated.Value(0),
            circleY: new Animated.Value(0),
        };
        this.lockState = LockState.lock;
        this.numberOfGesture = 0;

        this.deltaX = 0;

        this.animated = new Animated.Value(width/2-perfectSize(210/2));
        this.funkAnimated = new Animated.Value(0);
        this.lockAnimated = new Animated.Value(0);
        this.trunkAnimated = new Animated.Value(0);
        this.scaleAnimated = new Animated.Value(0);
        this.animatedCircle = new Animated.Value(perfectSize(210));

        this._translateX = new Animated.Value(0);
        this._translateY = new Animated.Value(0);
        this._lastOffset = { x: 0, y: 0 };
    }

    _onGestureEvent = (event) => {
        let deltaX = event.nativeEvent.translationX;
        let deltaY = event.nativeEvent.translationY;

        if (Math.abs(deltaX-this.deltaX)>width/10) {
            this.deltaX = deltaX;            
            if (deltaX>0) {
                this.flingRight();
            } else {
                this.flingLeft();
            }
        }
    }

    _onHandlerStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            this._lastOffset.x += event.nativeEvent.translationX;
            this._lastOffset.y += event.nativeEvent.translationY;
            this._translateX.setOffset(this._lastOffset.x);
            this._translateX.setValue(0);
            this._translateY.setOffset(this._lastOffset.y);
            this._translateY.setValue(0);
            this.deltaX = 0;
            this.props.onCloseLockModal(this.lockState);
        }
    };

    UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.onFlingLeft) {
        this.flingLeft();
      } else if (nextProps.onFlingRight) {
        this.flingRight();
      }
    }

    componentDidMount() {

        Animated.timing(this.state.circleX, {
          toValue: width/2-perfectSize(210/2),
          useNativeDriver: true,
          duration: 500
        }).start();

        Animated.timing(this.scaleAnimated, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
          delay: 550
        }).start();
        switch (this.props.lockState) {
            case LockState.trunk:
                this.unLockTrunk();
                break;
        
            case LockState.frunk:
                this.unLockFrunk();
                break;

            case LockState.lock:
                this.unLock();
                break;
        
            default:
                break;
        }
    }

    circleShape = () => {
      Animated.sequence([
          Animated.timing(this.animatedCircle, {
              toValue: perfectSize(270),
              useNativeDriver: true,
              duration: 100
          }),
          Animated.timing(this.animatedCircle, {
              toValue: perfectSize(300),
              useNativeDriver: true,
              duration: 100
          }),
          Animated.timing(this.animatedCircle, {
              toValue: perfectSize(270),
              useNativeDriver: true,
              duration: 100
          }),
          Animated.timing(this.animatedCircle, {
              toValue: perfectSize(210),
              useNativeDriver: true,
              duration: 100
          })
      ]).start();
    }

    unLockTrunk = () => {
        this.circleShape();
        Animated.timing(this.animated, {
            toValue: width-15-perfectSize(210),
            useNativeDriver: true,
            duration: 400
        }).start();
        Animated.timing(this.funkAnimated, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
            delay: 100
        }).start();
        Animated.timing(this.lockAnimated, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
            delay: 100            
        }).start();
        Animated.timing(this.trunkAnimated, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
            delay: 100            
        }).start();
        this.lockState = LockState.trunk;
        return;
    }

    unLock = () => {
        this.circleShape();        
        Animated.timing(this.animated, {
            toValue: width/2-perfectSize(210/2),
            useNativeDriver: true,
            duration: 400
        }).start();
        Animated.timing(this.funkAnimated, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
            delay: 100            
        }).start();
        Animated.timing(this.lockAnimated, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
            delay: 100            
        }).start();
        Animated.timing(this.trunkAnimated, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
            delay: 100            
        }).start();
        this.lockState = LockState.lock;
        return;   
    }

    unLockFrunk = () => {
        this.circleShape();        
        Animated.timing(this.animated, {
            toValue: 7,
            useNativeDriver: true,
            duration: 400
        }).start();
        Animated.timing(this.funkAnimated, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
            delay: 100            
        }).start();
        Animated.timing(this.lockAnimated, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
            delay: 100            
        }).start();
        Animated.timing(this.trunkAnimated, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
            delay: 100            
        }).start();
        this.lockState = LockState.frunk;
        return;     
    }

    flingUP = () => {
        this.setState({animatedShow: "fadeOutUp"});
        setTimeout(() => {
            this.props.onCloseLockModal();
        }, 200);
    }

    flingRight = () => {
            this.numberOfGesture = 0;
            switch (this.lockState) {
                case LockState.frunk:
                    this.unLock();
                    break;
                case LockState.lock:
                    this.unLockTrunk();
                    break;
                default:
                    break;
            }  
    }

    flingLeft = () => {
            switch (this.lockState) {
                case LockState.lock:
                    this.unLockFrunk();
                    break;
                case LockState.trunk:
                    this.unLock();
                    break;
                default:
                    break;
            }
    
    }

    render() {
        const {onCloseLockModal} = this.props;
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };
        const scale = this.scaleAnimated.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1]
        });
        const transform = [{scale}];
        return (
                <Animatable.View style={{flex: 1, backgroundColor: '#111117'}}>
                    <Animatable.View  style={styles.topContainer}  activeOpacity={1} animation={this.state.animatedShow} iterationCount={1} iterationDelay={150} direction="alternate">
                      <View style={styles.button}>
                        <Image style={styles.lockButtonIcon} source={frunk} />              
                        <Animatable.Text style={{...styles.lockText, opacity: this.funkAnimated}}>Frunk</Animatable.Text>
                      </View>
                      <View>
                        <Entypo
                          name={'lock'}
                          type={'Entypo'}
                          color={'white'}
                          size={perfectSize(110)}
                        />
                        <Animatable.Text style={{...styles.lockText,  opacity: this.lockAnimated}}>Unlock</Animatable.Text>
                      </View>
                      <View>
                        <Image style={styles.lockButtonIcon} source={trunk} />              
                        <Animatable.Text style={{...styles.lockText,  opacity: this.trunkAnimated}}>Trunk</Animatable.Text>
                      </View>
                    </Animatable.View>

                    <MaskedView
                        style={{...styles.maskView, backgroundColor: 'black'}}
                        maskElement={
                          <Animated.View
                            style={{
                                backgroundColor: 'transparent',
                                flex: 1,
                                position: 'absolute',
                                top: 57,
                                left: this.animated,
                            }}
                          >
                            <Animated.Image source={mask} 
                                style={
                                    [styles.mask1,
                                    {
                                        width: this.animatedCircle, 
                                        resizeMode: 'stretch'                                                
                                    },
                                    {transform}]
                                }
                            />
                          </Animated.View>
                    }>
                    <View style={{...styles.topContainer, backgroundColor: 'white'}}>
                            <TouchableOpacity style={{...styles.button}} onPress={this.unLockFrunk}>
                                <Image style={styles.lockButtonIcon} source={frunk_black} />              
                                <Text style={styles.lockText}>Frunk</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.unLock}>
                                <Entypo
                                name={'lock-open'}
                                type={'Entypo'}
                                color={'black'}
                                size={perfectSize(110)}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.unLockTrunk}>
                            <Image style={styles.lockButtonIcon} source={trunk_black} />              
                            <Text style={styles.lockText}>Trunk</Text>
                        </TouchableOpacity>
                    </View>
                </MaskedView>
            </Animatable.View>
        )
    }
}

Lock.defaultProps = {
    distance: 0,
    duration: 0
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111117',
    fontFamily: 'Montserrat-Medium',
  },
  mask1: {
    width: perfectSize(210),
    height: perfectSize(210)
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
    color: '#98989b',
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
    marginLeft: 20,
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
    fontSize: 24,
    paddingTop:10,
    paddingBottom:10
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
  topContainer:{
        flex:1,
        position: 'absolute',
        top: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width,
        padding: 20
    },
    maskView: {
        flex:1,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width,
        padding: 20
    },
    mask: {
        width: perfectSize(910),
        height: perfectSize(910)
    },
    lockButtonIcon: {
        width: perfectSize(110),
        height: perfectSize(110)
    },
    lockText: {
        color: "#fff",
        textTransform: 'uppercase',
        fontSize: 11,
        fontWeight: 'bold',
        marginTop: 20
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