import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import { withNavigation } from "react-navigation";
import { WhiteKey, LockArrow, Menu } from "../img/svg";
import Entypo from "react-native-vector-icons/Entypo";

var { width, height } = Dimensions.get("window");

class HeaderComponent extends Component {
  state = {
    showStatusBar: false,
    width: width,
  };
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  renderHeader() {
    const {
      leftButtonImage,
      leftButtonOnPress,
      rightButtonOnPress,
      title,
      titleStyle,
      headerContainerStyle,
      leftIconName,
      leftIconType,
      centerButtonOnPress,
    } = this.props;
    return (
      <View style={[styles.headerContainer, headerContainerStyle]}>
        <View style={styles.headerItem}>
          <TouchableOpacity onPress={leftButtonOnPress}>
            <Menu />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={centerButtonOnPress}>
          <View style={[styles.headerItheaderContainerem]}>
            <LockArrow />
          </View>
        </TouchableOpacity>
        <View style={styles.headerItem}>
          <TouchableOpacity onPress={rightButtonOnPress}>
            <WhiteKey width="30px" height="30px" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  render() {
    const { containerStyle } = this.props;
    return (
      <View style={[styles.container, containerStyle]}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" />
        {this.renderHeader()}
      </View>
    );
  }
}

HeaderComponent.defaultProps = {
  leftButtonImage: "",
  headerContainerStyle: {
    backgroundColor: "transparent",
  },
};

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 60 : 10,
  },
  headerItem: {},
  title: {
    flex: 1,
    alignSelf: "center",
    fontSize: 15,
    color: "white",
  },
  icon: {
    width: 24,
    height: 24,
  },
  touchableNetworkStatus: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  networkStatusBar: {
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default withNavigation(HeaderComponent);
