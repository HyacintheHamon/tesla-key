import React from 'react'
import { Text, Animated, Easing } from 'react-native'
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen'
import LoginForm from '../screens/LoginForm'
import SignupScreen from '../screens/SignupScreen'
import ForgottenPasswordScreen from '../screens/ForgottenPasswordScreen'
import SplashScreen from '../screens/SplashScreen'
import Walkthrough from '../screens/Walkthrough'
import VideoWalkthrough from '../screens/VideoWalkthrough'
import DrawerContent from './DrawerContent'
import VehicleState from '../screens/VehicleState'
import MainScreen from '../screens/MainScreen'
import MapModalScreen from '../screens/MapModalScreen'
import ClimateControlsModalScreen from '../screens/ClimateControlsModalScreen'
import ARScene from '../screens/ARScene'

const StackNavigatorOptions = {
  header: null,
  headerMode: 'none',
  animationEnabled: false
};

const DrawerStack = createDrawerNavigator({
  MainScreen : { screen: MainScreen },
  MapModalScreen: { screen: MapModalScreen },
  ARScene: { screen: ARScene },
  ClimateControlsModalScreen: { screen: ClimateControlsModalScreen },
}, {
  gesturesEnabled: false,
  contentComponent: DrawerContent
})


// login stack
const LoginStack = createStackNavigator({
  loginScreen: { screen: LoginScreen },
  signupScreen: { screen: SignupScreen },
  forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, 
  StackNavigatorOptions
)

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  SplashScreen: { screen: SplashScreen },
  Walkthrough: { screen: Walkthrough },
  VideoWalkthrough: { screen: VideoWalkthrough },
  //LoginStack: { screen: LoginStack },
  //LoginForm: { screen: LoginForm },
  LoginScreen: { screen: LoginScreen },
  DrawerStack: { screen: DrawerStack }
}, {
  initialRouteName: 'SplashScreen',  
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
  transitionConfig: noTransitionConfig
})

const AppNavigation = createAppContainer(PrimaryNav);

export default AppNavigation
