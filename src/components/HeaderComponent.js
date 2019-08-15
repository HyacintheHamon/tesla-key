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
import SvgUri from 'react-native-svg-uri';
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
    } = this.props;
    return (
      <View style={[styles.headerContainer, headerContainerStyle]}>
        <View style={styles.headerItem}>
          <TouchableOpacity style={{padding:8,marginTop:-8, paddingRight:30, minHeight:38}} onPress={leftButtonOnPress}>
            <Entypo
              name="menu"
              color={'white'}
              size={24}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.headerItem]}>
          <Entypo
            name={'lock'}
            type={'Entypo'}
            color={'gray'}
            size={24}
          />
          <Entypo
            name={'chevron-thin-down'}
            type={'entypo'}
            color={'gray'}
            size={24}
          />
        </View>
        <View style={[styles.headerItem, { alignItems: "flex-end" }]}>
          <TouchableOpacity style={{padding:8, marginTop:-8, paddingLeft:30,  marginRight:5,}} onPress={rightButtonOnPress}>
            <SvgUri fill="#fff" fillAll="true" tyle={styles.logo} width="30" height="30" source={require('../img/key_white.svg')} />
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
