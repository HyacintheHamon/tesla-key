import React, { Component } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
    Animated,
    Image
} from 'react-native';
import {
    FlingGestureHandler,
    Directions,
    State,
    PanGestureHandler
  } from 'react-native-gesture-handler';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';
import Entypo from 'react-native-vector-icons/Entypo';
import * as Animatable from 'react-native-animatable';
import MaskedView from '@react-native-community/masked-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

perfectSize = create(PREDEF_RES.iphoneX.px);
let { height, width } = Dimensions.get("window");
const trunk = require("../../img/trunk.png");
const frunk = require("../../img/frunk.png");
const trunk_black = require("../../img/trunk_black.png");
const frunk_black = require("../../img/frunk_black.png");
const mask = require("../../img/mask.png");

const LockState = {
    frunk: 1, lock: 2, trunk: 3 
};

export default class Lock extends Component {
    constructor(props) {
		super(props)
		this.state = {
            lockState: LockState.lock,
            animatedShow: "fadeInDown"
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
            console.log("lock_state", this.lockState);
            this.props.onCloseLockModal(this.lockState);
        }
    };

    componentDidMount() {
        Animated.timing(this.scaleAnimated, {
            toValue: 1,
            duration: 300,
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
                duration: 100
            }),
            Animated.timing(this.animatedCircle, {
                toValue: perfectSize(300),
                duration: 100
            }),
            Animated.timing(this.animatedCircle, {
                toValue: perfectSize(270),
                duration: 100
            }),
            Animated.timing(this.animatedCircle, {
                toValue: perfectSize(210),
                duration: 100
            })
        ]).start();
    }

    unLockTrunk = () => {
        this.circleShape();
        Animated.timing(this.animated, {
            toValue: width-15-perfectSize(210),
            duration: 400
        }).start();
        Animated.timing(this.funkAnimated, {
            toValue: 0,
            duration: 400,
            delay: 100
        }).start();
        Animated.timing(this.lockAnimated, {
            toValue: 0,
            duration: 400,
            delay: 100            
        }).start();
        Animated.timing(this.trunkAnimated, {
            toValue: 1,
            duration: 400,
            delay: 100            
        }).start();
        this.lockState = LockState.trunk;
        return;
    }

    unLock = () => {
        this.circleShape();        
        Animated.timing(this.animated, {
            toValue: width/2-perfectSize(210/2),
            duration: 400
        }).start();
        Animated.timing(this.funkAnimated, {
            toValue: 0,
            duration: 400,
            delay: 100            
        }).start();
        Animated.timing(this.lockAnimated, {
            toValue: 1,
            duration: 400,
            delay: 100            
        }).start();
        Animated.timing(this.trunkAnimated, {
            toValue: 0,
            duration: 400,
            delay: 100            
        }).start();
        this.lockState = LockState.lock;
        return;   
    }

    unLockFrunk = () => {
        this.circleShape();        
        Animated.timing(this.animated, {
            toValue: 7,
            duration: 400
        }).start();
        Animated.timing(this.funkAnimated, {
            toValue: 1,
            duration: 400,
            delay: 100            
        }).start();
        Animated.timing(this.lockAnimated, {
            toValue: 0,
            duration: 400,
            delay: 100            
        }).start();
        Animated.timing(this.trunkAnimated, {
            toValue: 0,
            duration: 400,
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
        // this.numberOfGesture++;
        // if (this.numberOfGesture==2) {
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
        // }        
    }

    flingLeft = () => {
        // this.numberOfGesture++;
        // if (this.numberOfGesture==2) {
            // this.numberOfGesture = 0;
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
        // }
    
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
            <PanGestureHandler
                {...this.props}
                onGestureEvent={this._onGestureEvent}
                onHandlerStateChange={this._onHandlerStateChange}>
                <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                    <Animatable.View  style={styles.topContainer}  activeOpacity={1} animation={this.state.animatedShow} iterationCount={1} iterationDelay={150} direction="alternate">
                        <View style={styles.button}>
                            <Image style={styles.buttonIcon} source={frunk} />              
                            <Animatable.Text style={{...styles.text, opacity: this.funkAnimated}}>Frunk</Animatable.Text>
                        </View>
                        <View>
                            <Entypo
                                name={'lock'}
                                type={'Entypo'}
                                color={'white'}
                                size={perfectSize(110)}
                            />
                            <Animatable.Text style={{...styles.text,  opacity: this.lockAnimated}}>Unock</Animatable.Text>
                        </View>
                        <View>
                            <Image style={styles.buttonIcon} source={trunk} />              
                            <Animatable.Text style={{...styles.text,  opacity: this.trunkAnimated}}>Trunk</Animatable.Text>
                        </View>
                    </Animatable.View>
                    <MaskedView style={{...styles.maskView, backgroundColor: 'black'}}
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
                                        [styles.mask,
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
                                <Image style={styles.buttonIcon} source={frunk_black} />              
                                <Text style={styles.text}>Frunk</Text>
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
                                <Image style={styles.buttonIcon} source={trunk_black} />              
                                <Text style={styles.text}>Trunk</Text>
                            </TouchableOpacity>
                        </View>
                    </MaskedView>      
                </View>
            </PanGestureHandler>
        )
    }
}

Lock.defaultProps = {
    distance: 0,
    duration: 0
};

const styles = StyleSheet.create({
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
        width: perfectSize(210),
        height: perfectSize(210)
    },
    buttonIcon: {
        width: perfectSize(110),
        height: perfectSize(110)
    },
    text: {
        color: "#fff",
        textTransform: 'uppercase',
        fontSize: 11,
        fontWeight: 'bold',
        marginTop: 20
      },
});
