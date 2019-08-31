import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 2 13.299 18.726" {...props}>
      <G>
	    <Path fill="#FFFFFF" d="M12.89,8.525L8.545,7.158l1.638-6.428c0.147-0.575-0.56-0.977-0.979-0.556L0.171,9.232
		c-0.309,0.31-0.18,0.837,0.238,0.969l4.345,1.367l-1.638,6.428c-0.147,0.575,0.56,0.977,0.979,0.556l9.033-9.057
		C13.437,9.184,13.308,8.657,12.89,8.525z"/>
      </G>
    </Svg>
  </View>
);

export default SvgComponent;