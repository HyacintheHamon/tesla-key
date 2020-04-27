import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  Modal,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
} from "react-native";

import { WebView } from "react-native-webview";
import { Text, Button } from "react-native-elements";
import Animation from "lottie-react-native";
import StatusHeaderBar from "../components/StatusHeaderBar";
import { Close } from "../img/svg";
import I18n from "../Utils/i18n";

var ANIMATED_LOADER_SQUARE = require("../animations/loader_square.json");
var SOURCE = ANIMATED_LOADER_SQUARE;
const { width, height } = Dimensions.get("window");

export default class HelpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.animation.play();
  }

  handleFinishedLoading() {
    if (this.animation) {
      this.animation.reset();
    }
    this.setState({ loading: false });
  }

  render() {
    let heightStatusBar = Platform.OS == "ios" ? 64 : 54;
    const y = height / 2 - (75 + heightStatusBar);
    const x = width / 2 - 100;
    return (
      <View style={{ flex: 1 }}>
        <StatusHeaderBar>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => this.props.navigation.goBack()}
          >
            <Close />
          </TouchableOpacity>
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                backgroundColor: "transparent",
                alignContent: "center",
                textAlign: "center",
              }}
            >
              {I18n.t("help_center")}
            </Text>
          </View>
        </StatusHeaderBar>
        <View style={{ flex: 1 }}>
          <WebView
            source={{ uri: "https://www.tesla.com/support/customer-support" }}
            startInLoadingState={true}
            renderLoading={() => {
              return false;
            }}
            renderError={() => {
              return (
                <View style={styles.error}>
                  <Text>{I18n.t("connection_error")}</Text>
                </View>
              );
            }}
            onLoadEnd={() => {
              this.handleFinishedLoading();
            }}
          />
          {this.state.loading ? (
            <View style={{ position: "absolute", top: y, left: x }}>
              <Animation
                ref={(animation) => {
                  this.animation = animation;
                }}
                style={{
                  marginTop: 0,
                  marginLeft: 0,
                  width: 200,
                  height: 150,
                }}
                loop={true}
                source={SOURCE}
              />
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 3,
    paddingRight: 3,
  },
  bgBlack: {
    backgroundColor: "#111117",
  },
  input: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    marginTop: 8,
  },
  button: {
    backgroundColor: "#111117",
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 5,
    margin: 0,
  },
  closeButton: {
    position: "absolute",
    left: 20,
    top: 15,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
