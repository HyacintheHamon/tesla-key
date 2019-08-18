import React, { Component } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
    Animated,
    Image,
    PanResponder
} from 'react-native';
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

export default class Lock extends Component {
    constructor(props) {
		super(props)
		this.state = {
            myText: 'I\'m ready to get swiped!',
            gestureName: 'none',
            backgroundColor: 'gray'
        };

        this.animated = new Animated.Value(width/2-perfectSize(210/2));
        this.funkAnimated = new Animated.Value(0);
        this.lockAnimated = new Animated.Value(0);
        this.trunkAnimated = new Animated.Value(0);
        this.scaleAnimated = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.timing(this.scaleAnimated, {
            toValue: 1,
            duration: 300,
            delay: 550
        }).start();
        this.unLock();
    }

    unLockTrunk = () => {
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
    }

    unLock = () => {
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
    }

    unLockFrunk = () => {
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
                <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                    <Animatable.View  style={styles.topContainer}  activeOpacity={1} animation="fadeInDown" iterationCount={1} iterationDelay={150} direction="alternate">
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
