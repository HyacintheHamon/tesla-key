import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="15"  height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.75 15.01" {...props}>
      <G>
	      <Path fill="#FFFFFF" d="M10.138,10.945l-0.013-0.009c-0.32-0.16-0.539-0.491-0.539-0.874L9.583,6.337
		c0-2.223-1.802-4.025-4.025-4.025H5.191c-2.223,0-4.025,1.802-4.025,4.025l-0.003,3.726c0,0.382-0.22,0.713-0.539,0.874
		l-0.013,0.009C0.248,11.137,0,11.52,0,11.96v0.54h10.75v-0.54C10.75,11.52,10.502,11.137,10.138,10.945z"/>
	      <Path fill="#FFFFFF"  d="M5.375,1.979c0.547,0,0.99-0.443,0.99-0.99C6.365,0.443,5.922,0,5.375,0s-0.99,0.443-0.99,0.99
		C4.385,1.536,4.828,1.979,5.375,1.979z"/>
      	<Path sfill="#FFFFFF" d="M5.781,13.123V7.867H4.969v5.256c-0.343,0.156-0.583,0.497-0.583,0.898
		c0,0.547,0.443,0.99,0.99,0.99s0.99-0.443,0.99-0.99C6.365,13.62,6.124,13.279,5.781,13.123z"/>
     </G>
    </Svg>
  </View>
);

export default SvgComponent;