import React from 'react'
import { Text, Animated, Easing } from 'react-native'
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen'
import LoginForm from '../screens/LoginForm'
import SignupScreen from '../screens/SignupScreen'
import ForgottenPasswordScreen from '../screens/ForgottenPasswordScreen'
import SplashScreen from '../screens/SplashScreen'
import Walkthrough from '../screens/Walkthrough'
import DrawerContainer from '../screens/DrawerContainer'
import Screen1 from '../screens/Screen1'
import Screen2 from '../screens/Screen2'
import Screen3 from '../screens/Screen3'
import VehicleState from '../screens/VehicleState'

const DrawerStack = createDrawerNavigator({
  VehicleState : { screen: VehicleState },
  screen1: { screen: Screen1 },
  screen2: { screen: Screen2 },
  screen3: { screen: Screen3 },
}, {
  gesturesEnabled: false,
  contentComponent: DrawerContainer,
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#111117', 
      shadowColor: 'transparent',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    gesturesEnabled: false,
    headerLeft: <Text style={{color: '#fff', marginLeft: 20}} onPress={() => navigation.toggleDrawer()}>Menu</Text>
  })
})

const DrawerNavigation = createStackNavigator({
  DrawerStack: { screen: DrawerStack }
})

// login stack
const LoginStack = createStackNavigator({
  loginScreen: { screen: LoginScreen },
  signupScreen: { screen: SignupScreen },
  forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode: 'none'
})


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
  //LoginStack: { screen: LoginStack },
  LoginForm: { screen: LoginForm },
  DrawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'SplashScreen',
  transitionConfig: noTransitionConfig
})

const AppNavigation = createAppContainer(PrimaryNav);

export default AppNavigation
