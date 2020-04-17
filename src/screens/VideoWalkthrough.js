import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet, 
  View, 
  Image,
  Dimensions
} from "react-native";
import Video from "react-native-video";
import Swiper from "../components/Swiper";
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const { height } = Dimensions.get("window");


export default class VideoWalkthrough extends Component {

  setNavigationColor = (color) => {
    changeNavigationBarColor(color);
  };

  componentDidMount() {
    this.setNavigationColor('#111117');
  }

  render() {
    return (
      <Swiper navigation={this.props.navigation}>
        {/* First screen */}
        <View style={styles.slide}>
          <Video source={require("../videos/background.mp4")} style={styles.backgroundVideo} muted={true} repeat={true} resizeMode={"cover"} rate={1.0} ignoreSilentSwitch={"obey"} />
        </View>
        {/* Second screen */}
        <View style={styles.slide}>
        <Image source={require('../img/background.gif')}  style={{flex: 1 }} />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1, // Take up all screen
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#111117"
  },
  header: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 15
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: "center"
  },
  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 150,
    right: 0
    },
});
AppRegistry.registerComponent("Screen", () => Screen);
