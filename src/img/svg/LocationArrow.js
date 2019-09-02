import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.187 18.047" {...props}>
      <G>
	    <Path fill="#FFFFFF" d="M10.704,18.047c-0.008,0-0.016,0-0.023-0.001c-0.479-0.01-0.9-0.314-1.061-0.765l-2.265-6.386
		L0.771,8.595C0.318,8.437,0.011,8.014,0,7.534s0.277-0.915,0.722-1.093L16.61,0.083c0.428-0.173,0.916-0.071,1.241,0.255
		c0.326,0.326,0.425,0.814,0.254,1.241l-6.333,15.746C11.596,17.762,11.173,18.047,10.704,18.047z M4.427,7.436l4.207,1.47
		c0.329,0.115,0.589,0.373,0.705,0.701l1.433,4.04l4.194-10.429L4.427,7.436z"/>
      </G>
    </Svg>
  </View>
);

export default SvgComponent;