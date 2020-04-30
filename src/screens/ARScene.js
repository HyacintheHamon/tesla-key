"use strict";

import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  Animated,
  ScrollView,
} from "react-native";

import Geolocation from "@react-native-community/geolocation";
import { Magnetometer } from "expo-sensors";
import { ViroSceneNavigator, ViroARSceneNavigator } from "react-viro";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { Close, CompassLine } from "../img/svg";
import VectorIcon from "../components/VectorIcons/VectorIcon";
import { create, PREDEF_RES } from "react-native-pixel-perfect";
import merc from "mercator-projection";

const perfectSize = create(PREDEF_RES.iphoneX.px);

const { height, width } = Dimensions.get("window");
var InitialARScene = require("./InitialScene");

class ARScene extends Component {
  constructor() {
    super();
    this.state = {
      magnetometer: "0",
      dirLeft: "NW",
      dirCenter: "N",
      dirRight: "NE",
      carPosition: null,
      sharedProps: {
        // react-viro AR API key
        apiKey: "48F904D3-E6A6-4D2F-B66A-FFBEC0CA4B69",
      },
    };
  }

  setNavigationColor = (color) => {
    changeNavigationBarColor(color);
  };

  componentDidMount = async () => {
    this.setNavigationColor("#111117");
    this._toggle();
    if (this.state.carPosition === null) {
      await Geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            carPosition: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        },
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    }
  };

  componentWillUnmount() {
    this._unsubscribe();
  }

  _toggle = () => {
    if (this._subscription) {
      this._unsubscribe();
    } else {
      this._subscribe();
    }
  };

  _subscribe = async () => {
    this._subscription = Magnetometer.addListener((data) => {
      this.setState({ magnetometer: this._angle(data) });
    });
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  _angle = (magnetometer) => {
    let angle = 0;
    if (magnetometer) {
      let { x, y, z } = magnetometer;

      if (Math.atan2(y, x) >= 0) {
        angle = Math.atan2(y, x) * (180 / Math.PI);
      } else {
        angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
      }
    }

    return Math.round(angle);
  };

  _direction = (degree) => {
    if (degree >= 22.5 && degree < 67.5) {
      return { left: "N", center: "NE", right: "E" };
    } else if (degree >= 67.5 && degree < 112.5) {
      return { left: "NE", center: "E", right: "SE" };
    } else if (degree >= 112.5 && degree < 157.5) {
      return { left: "S", center: "SE", right: "E" };
    } else if (degree >= 157.5 && degree < 202.5) {
      return { left: "SE", center: "S", right: "SW" };
    } else if (degree >= 202.5 && degree < 247.5) {
      return { left: "S", center: "SW", right: "W" };
    } else if (degree >= 247.5 && degree < 292.5) {
      return { left: "SW", center: "W", right: "NW" };
    } else if (degree >= 292.5 && degree < 337.5) {
      return { left: "N", center: "NW", right: "W" };
    } else {
      return { left: "NW", center: "N", right: "NE" };
    }
  };

  // Match the device top with pointer 0° degree. (By default 0° starts from the right of the device.)
  _degree = (magnetometer) => {
    return magnetometer - 90 >= 0 ? magnetometer - 90 : magnetometer + 271;
  };

  onDistanceChanged = async (distance) => {
    await this.setState({ distance });
  };
  render() {
    const { currentPosition, magnetometer, distance, carPosition } = this.state;
    const { left, center, right } = this._direction(this._degree(magnetometer));

    return carPosition !== null ? (
      <View style={styles.viroContainer}>
        <ViroARSceneNavigator
          style={{ flex: 1 }}
          {...this.state.sharedProps}
          initialScene={{
            scene: InitialARScene,
            passProps: {
              onDistanceChanged: this.onDistanceChanged.bind(this),
              carPosition,
            },
          }}
        />
        <View style={styles.bottomView}>
          <View style={styles.compassView}>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                justifyContent: "center",
                width: 330,
                height: 20,
              }}
            >
              <Text
                style={{
                  width: 25,
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                {left}
              </Text>
              <Text
                style={{
                  width: 280,
                  marginLeft: 8,
                  marginRight: 8,
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                {center}
              </Text>
              <Text
                style={{
                  width: 25,
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                {right}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: 20,
              }}
            >
              <CompassLine style={{ flexDirection: "row" }} />
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <Text
                style={{
                  textAlign: "center",
                  color: "red",
                  fontSize: 11,
                  fontWeight: "bold",
                }}
              >
                {distance}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
              >
                {this._degree(magnetometer)}°
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => this.props.navigation.goBack()}
          >
            <VectorIcon.MaterialVectorIcon
              color={"white"}
              size={30}
              name={"close"}
            />
          </TouchableOpacity>
        </View>
      </View>
    ) : (
      <View />
    );
  }
}

var styles = StyleSheet.create({
  leftRightDirection: {},
  viroContainer: {
    flex: 1,
    backgroundColor: "#111117",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  compassView: {
    paddingTop: 5,
    width: "100%",
    height: 60,
  },
  bottomView: {
    width: "100%",
    height: 150,
    backgroundColor: "#111117", //#111117
    margin: 0,
    position: "absolute",
    alignItems: "center",
    bottom: 0,
  },
  closeButton: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    width: 44,
    borderColor: "#525252",
    borderWidth: 0.5,
    borderRadius: 22,
  },
});

module.exports = ARScene;

export default ARScene