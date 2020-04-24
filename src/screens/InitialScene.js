'use strict';

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation'
import {
    ViroARScene,
    ViroText,
    ViroImage,
    ViroBox,
    Viro3DObject,
    ViroARCamera,
    ViroMaterials,
} from 'react-viro';
import {getDistance, getPreciseDistance} from 'geolib';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import merc from 'mercator-projection';
//import { TeslaMarker } from '../img/svg';
const haversine = require('haversine');
// const TeslaMarker = require("../img/tesla-ar-marker.png");
const TeslaObject = require("../img/tesla_logo.obj");
const TeslaMTL = require('../img/tesla_logo.mtl')

export default class ARScene extends Component {

    constructor(props) {
        super(props);
        const carPosition = this.props.carPosition;
        // Set initial state here
        this.state = {
            carPosition,
            text: "Initializing AR...",
            currentPosition: {
                latitude: 0.0,
                longitude: 0.0,
            },
            imageFinalPosX: 0,
            imageFinalPosZ: 0
        };
        this.watchID = null;
        // bind 'this' to functions
        this._onInitialized = this._onInitialized.bind(this);
    }

    setNavigationColor = (color) => {
        changeNavigationBarColor(color);
    };

    componentWillUnmount(): void {
        if (this.watchID) {
            console.log('clearing watch id');
            Geolocation.clearWatch(this.watchID);
        }
    }
    _getDistance = async (carPosition, newLatLng) => {
        // console.log('newLatLng:', newLatLng);
        // console.log('carPosition:', carPosition);
        // const distance = haversine({latitude: carPosition.lat, longitude: carPosition.lng}, newLatLng, {unit: 'meter'}) || 0;

        const dis = await getDistance(
            { latitude: newLatLng.latitude, longitude: newLatLng.longitude },
            { latitude: carPosition.lat, longitude: carPosition.lng }
        );
        const distance = dis >= 1000 ? `${dis/1000}km` : `${dis}m`;
        await this.props.onDistanceChanged(distance);
        //console.log(`Distance\n${dis} Meter\nor\n${dis / 1000} KM`);
    };
    componentDidMount = async () => {
        const {carPosition} = this.state;
        this.setNavigationColor('#111117');

        // translate car position to xy
        const imagePos = merc.fromLatLngToPoint(carPosition);
        console.log("image Position", imagePos);

        this.watchID = await Geolocation.watchPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            this.setState({
                currentPosition: {
                    latitude,
                    longitude,
                }
            });
            await this._getDistance(carPosition, position.coords);
            // console.log("currentDeviceLat ", latitude);
            // console.log("currentDeviceLong ", longitude);
            // translate current device position to a lat/lng
            const currentDevicePos = merc.fromLatLngToPoint({lat: latitude, lng: longitude});

            const imageFinalPosX = imagePos.x - currentDevicePos.x;
            const imageFinalPosZ = imagePos.y - currentDevicePos.y;

            //console.log("image final position X :", imageFinalPosX);
            //console.log("image final position Z : ", imageFinalPosZ);

            // Since the position has to be in xyz, assuming that height is 1m
            // x = imageFinalPosX
            // y = 1
            // z = imageFinalPosZ

            // Rotate the final positions
            // var angle = heading;
            // var newRotatedX = imageFinalPosX * Math.cos(angle) - imageFinalPosZ * Math.sin(angle);
            // var newRotatedZ = imageFinalPosZ * Math.cos(angle) + imageFinalPosX * Math.sin(angle);

            this.setState({
                currentPosition: {
                    imageFinalPosX: imageFinalPosX,
                    imageFinalPosZ: imageFinalPosZ
                }
            });
        }, (error) => {
            console.log('err:' + JSON.stringify(error));
        }, {
            distanceFilter: 0.5,
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 1000
        });
    }

    render() {
        const {imageFinalPosX, imageFinalPosZ, devicePosition, carPosition} = this.state;
        //console.log("image final position X in render method: ", imageFinalPosX);
        //console.log("image final position Z in render method: ", imageFinalPosZ);

        return (
            /*
             <TouchableOpacity style={styles.closeButton} onPress={this.props.onCloseMap}>
               <Icon name="times" size={30} color="#fff" />
             </TouchableOpacity>
           */
            <ViroARScene onTrackingUpdated={this._onInitialized}>
                {/* <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} /> */}
                <ViroImage
                    height={0.23}
                    width={0.2}
                    scale={[.5, .5, .5]}
                    position={[0, 0, -1]}
                    // position={[imageFinalPosX, 1, imageFinalPosZ]}
                    source={TeslaMarker}
                    // animation={{ name: "animateImage", run: this.state.runAnimateImage }}
                />
                {/*             
                <ViroARCamera>
                  <Viro3DObject 
                    source={TeslaObject}
                    resources={[TeslaMTL]}
                    position={[0.0, 0.0, -10]}
                    scale={[0.02, 0.02, 0.0]}
                    type="OBJ" />
                </ViroARCamera>
                */}
            </ViroARScene>
        );
    }

    _onInitialized() {
        this.setState({
            text: "Hello World!"
        });
    }

}

var styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 30,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    closeButton: {
        position: 'absolute',
        right: 9,
        top: 10
    },
});

module.exports = ARScene;
