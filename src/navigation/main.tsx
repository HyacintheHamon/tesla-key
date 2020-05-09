// React
import React from 'react'

// Navigation
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import VideoWalkthrough from '../screens/VideoWalkthrough'
import OnePageVideoWalkthrough from '../screens/OnePageVideoWalkthrough'
import SplashScreen from '../screens/SplashScreen'
import LoginScreen from '../screens/LoginScreen'
import Walkthrough from '../screens/Walkthrough'
import BatteryScreen from '../screens/BatteryScreen'
import DrawerStack from './drawer'


const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator
        initialRouteName='SplashScreen'
        headerMode='none'
    >
        <Stack.Screen
            component={VideoWalkthrough}
            name='VideoWalkthrough'
        />
        <Stack.Screen
            component={OnePageVideoWalkthrough}
            name='OnePageVideoWalkthrough'
        />
        <Stack.Screen
            component={SplashScreen}
            name='SplashScreen'
        />
        <Stack.Screen
            component={Walkthrough}
            name='Walkthrough'
        />
        <Stack.Screen
            component={LoginScreen}
            name='LoginScreen'
        />
        <Stack.Screen
            component={DrawerStack}
            name='DrawerStack'
        />
        <Stack.Screen
            component={BatteryScreen}
            name='BatteryScreen'
        />
    </Stack.Navigator>
)