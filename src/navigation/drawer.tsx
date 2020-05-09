// React
import React, { ReactNode } from 'react'

// Navigation
import {
    DrawerContentComponentProps,
    createDrawerNavigator,
    DrawerContentOptions,
} from '@react-navigation/drawer'

// Screens
import ClimateControlsModalScreen from '../screens/ClimateControlsModalScreen'
import SuperchargersMap from '../screens/SuperchargersMap'
import MapModalScreen from '../screens/MapModalScreen'
import PinCodeScreen from '../screens/PinCodeScreen'
import MediaScreen from '../screens/MediaScreen'
import MainScreen from '../screens/MainScreen'
import HelpScreen from '../screens/HelpScreen'
import LootScreen from '../screens/LootScreen'
import DrawerContent from './DrawerContent'
import Settings from '../screens/Settings'
import ARScene from '../screens/ARScene'
import BatteryScreen from '../screens/BatteryScreen'
import CalendarScreen from '../screens/CalendarScreen'


const Drawer = createDrawerNavigator()

export default () => (
    <Drawer.Navigator
        initialRouteName='MainScreen'
        screenOptions={screenOptions}
        drawerContent={drawerContent}
    >
        <Drawer.Screen
            component={ClimateControlsModalScreen}
            name='ClimateControlsModalScreen'
        />
        <Drawer.Screen
            component={SuperchargersMap}
            name='SuperchargersMap'
        />
        <Drawer.Screen
            component={MapModalScreen}
            name='MapModalScreen'
        />
        <Drawer.Screen
            component={PinCodeScreen}
            name='PinCodeScreen'
        />
        <Drawer.Screen
            component={MediaScreen}
            name='MediaScreen'
        />
        <Drawer.Screen
            component={MainScreen}
            name='MainScreen'
        />
        <Drawer.Screen
            component={HelpScreen}
            name='HelpScreen'
        />
        <Drawer.Screen
            component={LootScreen}
            name='LootScreen'
        />
        <Drawer.Screen
            component={Settings}
            name='Settings'
        />
        <Drawer.Screen
            component={ARScene}
            name='ARScene'
        />
        <Drawer.Screen
            component={BatteryScreen}
            name='BatteryScreen'
        />
        <Drawer.Screen
            component={CalendarScreen}
            name='CalendarScreen'
        />
    </Drawer.Navigator>
)

// Constants
const drawerContent = (
    props: DrawerContentComponentProps<DrawerContentOptions>
) => <DrawerContent {...props} />

const screenOptions = {
    gestureEnabled: false,
}