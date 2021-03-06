import React from "react";
import { Animated, Easing } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import LoginScreen from "../screens/LoginScreen";
import SplashScreen from "../screens/SplashScreen";
import Walkthrough from "../screens/Walkthrough";
import VideoWalkthrough from "../screens/VideoWalkthrough";
import OnePageVideoWalkthrough from "../screens/OnePageVideoWalkthrough";
import DrawerContent from "./DrawerContent";
import MainScreen from "../screens/MainScreen";
import MapModalScreen from "../screens/MapModalScreen";
import SuperchargersMap from "../screens/SuperchargersMap";
import ClimateControlsModalScreen from "../screens/ClimateControlsModalScreen";
import CalendarScreen from "../screens/CalendarScreen";
import ARScene from "../screens/ARScene";
import HelpScreen from "../screens/HelpScreen";
import Settings from "../screens/Settings";
import MediaScreen from "../screens/MediaScreen";
import LootScreen from "../screens/LootScreen";
import PinCodeScreen from "../screens/PinCodeScreen";
import BatteryScreen from "../screens/BatteryScreen";

const StackNavigatorOptions = {
  header: null,
  headerMode: "none",
  animationEnabled: false,
};

const DrawerStack = createDrawerNavigator(
  {
    MainScreen: { screen: MainScreen },
    MapModalScreen: { screen: MapModalScreen },
    ARScene: { screen: ARScene },
    ClimateControlsModalScreen: { screen: ClimateControlsModalScreen },
    CalendarScreen: { screen: CalendarScreen },
    SuperchargersMap: { screen: SuperchargersMap },
    HelpScreen: { screen: HelpScreen },
    Settings: { screen: Settings },
    MediaScreen: { screen: MediaScreen },
    LootScreen: { screen: LootScreen },
    PinCodeScreen: { screen: PinCodeScreen },
    BatteryScreen: { screen: BatteryScreen },
  },
  {
    gesturesEnabled: false,
    contentComponent: DrawerContent,
  }
);

// login stack
const LoginStack = createStackNavigator(
  {
    loginScreen: { screen: LoginScreen },
  },
  StackNavigatorOptions
);

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0,
  },
});

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    Walkthrough: { screen: Walkthrough },
    OnePageVideoWalkthrough: { screen: OnePageVideoWalkthrough },
    //LoginStack: { screen: LoginStack },
    LoginScreen: { screen: LoginScreen },
    DrawerStack: { screen: DrawerStack },
  },
  {
    initialRouteName: "SplashScreen",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
  }
);

const AppNavigation = createAppContainer(PrimaryNav);

export default AppNavigation;
