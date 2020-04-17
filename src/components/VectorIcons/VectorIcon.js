import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {Platform} from "react-native";
const primaryColor = '#fff';
const IonVectorIcon = (props) => {
  return (
    <Ionicons
      name={Platform.OS === 'ios' ? 'ios-' + props.name : 'md-' + props.name}
      size={props.size}
      style={props.style ? props.style : {}}
      color={props.color ? props.color : primaryColor}
    />
  );
}
const OctIcon = (props) => {
  return (
      <Octicons
          name={props.name}
          size={props.size}
          style={props.style ? props.style : {}}
          color={props.color ? props.color : primaryColor}
      />
  );
}
const SimpleLineIcon = (props) => {
  return (
      <SimpleLineIcons
          name={props.name}
          size={props.size}
          style={props.style ? props.style : {}}
          color={props.color ? props.color : primaryColor}
      />
  );
}

const MaterialVectorIcon = (props) => {
  return (
      <MaterialIcons
          name={props.name}
          size={props.size}
          style={props.style ? props.style : {}}
          color={props.color ? props.color : primaryColor}
      />
  );
}

const AntDesignVectorIcon = (props) => {
  return (
      <AntDesign
          name={props.name}
          size={props.size}
          style={props.style ? props.style : {}}
          color={props.color ? props.color : primaryColor}
      />
  );
}

const FontAwesomeVectorIcon = (props) => {
  return (
      <FontAwesome
          name={props.name}
          size={props.size}
          style={props.style ? props.style : {}}
          color={props.color ? props.color : primaryColor}
      />
  );
}

export default {
  IonVectorIcon,
  MaterialVectorIcon,
  AntDesignVectorIcon,
  FontAwesomeVectorIcon,
  SimpleLineIcon,
  OctIcon
}
