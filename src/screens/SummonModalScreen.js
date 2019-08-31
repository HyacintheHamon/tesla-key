import React, { PropTypes, Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Animated, Easing, SafeAreaView  } from 'react-native'
import YourCarPic from '../components/YourCarPic'
import Icon from 'react-native-vector-icons/FontAwesome5';
const { height, width } = Dimensions.get('window');
const topView = require('../img/model-s-top-view.png');
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import  { Close } from '../img/svg'

// import LottieView from 'lottie-react-native';
// const carAnimation = require('../animations/car.json');

export default class SummonModalScreen extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
        visibleSummonModal: null,
        DescriptionText : 'Press and hold a direction button to start Summon',
        progress: new Animated.Value(0),
    }
  }

  handlePressIn =()=> {
    this.setState({
      DescriptionText : 'Release the direction button  to stop your vehicle'
    })
    // this.animation.play();
  }

  handlePressOut =()=> {
    this.setState({
      DescriptionText : 'Press and hold a direction button to start Summon'
    })
    // this.animation.play();
  }

  setNavigationColor = (color) => {
    changeNavigationBarColor(color);
  };

  componentDidMount() {
    this.setNavigationColor('#111117');
  }

  render() {
    return (
        <SafeAreaView style={{flex:1}}>
          <View style={styles.modalContent}>
            <Text style={styles.header}>SUMMON</Text>
            <TouchableOpacity style={styles.closeButton} onPress={this.props.onCloseSummonModal}>
              <Close />
            </TouchableOpacity>

            <Image source={topView} style={{width: width/3, height: height/2 , marginBottom: 100}}/> 
          {/* <LottieView 
            ref={animation => {
              this.animation = animation;
            }}
            source={carAnimation} 
            style={{position:'relative', width:250, alignContent:'center', justifyContent:'center',alignItems:'center'}}
            //progress={this.state.progress}
            onAnimationFinish={()=>{ this.animation.reset(); }}
            />  */}

            <View style={styles.bottomModal}>
              <Text style={styles.descriptionText}> {this.state.DescriptionText} </Text>
              <TouchableOpacity style={styles.button} 
                              onPressIn={this.handlePressIn} 
                              onPressOut={this.handlePressOut}>
                <Text style={styles.buttonText}>FORWARD</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} 
                              onPressIn={this.handlePressIn} 
                              onPressOut={this.handlePressOut}>
                <Text style={styles.buttonText}>REVERSE</Text>
              </TouchableOpacity>
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
    descriptionText: {
        color: "#fff",
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        textAlign: "center",
        lineHeight: 15,
        width: 200,
        marginBottom: 40
    },
    buttonText: {
        color: '#fff',
        textTransform: 'uppercase',
        fontFamily: 'Montserrat-Bold',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 1
    },
    button: {
        backgroundColor: 'transparent',
        padding: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#A9A9A9',
        width: width/2.5,
        maxWidth: width/2.5
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
    }
})
