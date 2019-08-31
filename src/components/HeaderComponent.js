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
import { WhiteKey, LockArrow,  Menu} from '../img/svg';
import Entypo from 'react-native-vector-icons/Entypo';

var { width, height } = Dimensions.get('window');

class HeaderComponent extends Component {
  state = {
    showStatusBar: false,
	  width:width
 };
 _isMounted = false;

 
 componentDidMount(){
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
      centerButtonOnPress
    } = this.props;
    return (
      <View style={[styles.headerContainer, headerContainerStyle]}>
        <View style={styles.headerItem}>
          <TouchableOpacity style={{padding:8,marginTop:-8, paddingLeft:20, minHeight:38}} onPress={leftButtonOnPress}>
            <Menu />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={centerButtonOnPress}>
          <View style={[styles.headerItem]}>
            <LockArrow />
          </View>
        </TouchableOpacity>
        <View style={[styles.headerItem, { alignItems: "flex-end" }]}>
          <TouchableOpacity style={{padding:8, marginTop:-8, paddingLeft:30,  marginRight:5,}} onPress={rightButtonOnPress}>
            <WhiteKey width="30px" height="30px"/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  render() {
    const { containerStyle } = this.props;
    return (
      <View style={[styles.container, containerStyle]} onLayout={()=>{ var { width, height } = Dimensions.get('window'); this.setState({ width:width }) }}>
         <StatusBar barStyle="light-content" backgroundColor="transparent"/>
        {this.renderHeader()}
      </View>
    );
  }
}

HeaderComponent.defaultProps = {
  leftButtonImage: "",
  headerContainerStyle: {
    backgroundColor: "transparent"
  }
};

const styles = StyleSheet.create({
  container: {
    width: width
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2,
    paddingBottom: 6,
    paddingTop:  Platform.OS === 'ios' ? 32: 8,
  },
  headerItem: {
    // flex: 1
    marginTop:10
  },
  title: {
    flex: 1,
    alignSelf: "center",
    fontSize: 15,
    color: "white"
  },
  icon: {
    width: 24,
    height: 24
  },
  touchableNetworkStatus: {
     position:'absolute',
     bottom:0,
     left:0,
     right:0,
  },
  networkStatusBar:{
     height:24,
     justifyContent:'center',
     alignItems:'center'
 }
});

export default withNavigation(HeaderComponent);
