import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.595 14.375">
      <G>
      <Path fill="#FFFFFF" d="M6.539,3.827C5.995,4.785,4.977,5.44,3.798,5.44S1.601,4.785,1.057,3.827
		C0.429,4.176,0,4.837,0,5.606v6.726c0,1.128,0.915,2.043,2.043,2.043h3.509c1.128,0,2.043-0.915,2.043-2.043V5.606
		C7.595,4.837,7.166,4.176,6.539,3.827z"/>
	  <Circle fill="#FFFFFF" cx="3.798" cy="2.276" r="2.276"/>
    </G>
    </Svg>
  </View>
);

export default SvgComponent;