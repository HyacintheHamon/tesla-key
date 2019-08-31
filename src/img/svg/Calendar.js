import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.686 11.686" {...props}>
      <G>
	    <Path fill="#FFFFFF" d="M11.686,3.765v-2.69C11.686,0.481,11.204,0,10.611,0H8.952v0.961
		c0.211,0.166,0.356,0.413,0.356,0.703c0,0.502-0.407,0.909-0.909,0.909S7.489,2.167,7.489,1.665c0-0.29,0.144-0.537,0.356-0.703V0
		H3.67v0.961c0.211,0.166,0.356,0.413,0.356,0.703c0,0.502-0.407,0.909-0.909,0.909S2.207,2.167,2.207,1.665
		c0-0.29,0.144-0.537,0.356-0.703V0H1.075C0.481,0,0,0.481,0,1.075v2.69H11.686z"/>
	   <Path fill="#FFFFFF" d="M0,5.172v5.439c0,0.594,0.481,1.075,1.075,1.075h9.536c0.594,0,1.075-0.481,1.075-1.075V5.172H0z"/>
      </G>
    </Svg>
  </View>
);

export default SvgComponent;