import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Pages } from 'react-native-pages';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

let Page = ({ color, backgroundColor, text, title, source }) => {
  let style = { ...textStyle, color };

  return (
    <View style={{flex: 1}}>
      <Image source={source} style={imageStyle} />
      <View style={[viewStyle, { backgroundColor }]}>
        <Text style={style}>{title}</Text>
        <Text style={style}>{text}</Text>
      </View>
    </View>
  );
};

let imageStyle = {
  width: width,
  height: (height/1.5),
  marginTop: 0
};

let viewStyle = {
  flex: 1,
  overflow: 'hidden',
  marginTop: 40
};

let textStyle = {
  backgroundColor: 'transparent',
  textAlign: 'center',
  fontFamily: 'Montserrat-Medium',
  fontSize: 15,
  marginTop: 20,
  padding: 10
};

export default class Walkthrough extends Component {

  constructor(props) {
    super(props);
  }

    render() {
      return (
        <View style={{ flex: 1, backgroundColor: '#111117' }}>
          <Pages>
            <Page 
              color="#FFF" 
              title="Welcome to Tesla key" 
              text="A Tesla companion app, by Tesla lovers, for Tesla lovers"  
              source={require('../img/walkthrough-1.png')}
            />
            <Page 
              color="#FFF" 
              title="Title 2" 
              text="Some subtile that goes with page 2" 
              source={require('../img/walkthrough-2.png')}
            />
          </Pages>
          <View style={{alignSelf: 'center',backgroundColor:'transparent', alignItems:'center', justifyContent:'center', position: 'absolute', bottom:50}}>
            <TouchableOpacity style={{backgroundColor:'transparent'}}  onPress={() => this.props.navigation.replace('LoginForm')}>
              <Text style={{color:'#FFF'}}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
}