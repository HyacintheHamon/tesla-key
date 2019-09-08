import React from "react";
import Svg, { Path, G, Defs, Polygon } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="20px" height="34px" viewBox="0 0 20 34" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Defs>
        <Polygon points="0 0.0004 9.481 0.0004 9.481 16.4424 0 16.4424" />
      </Defs>
      <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G transform="translate(-1.000000, -1.000000)">
            <G transform="translate(1.000000, 1.000000)">
                <Path d="M9.481,1.2598 C9.481,1.5808 9.358,1.9038 9.112,2.1498 L3.042,8.2208 L9.112,14.2928 C9.604,14.7848 9.604,15.5808 9.112,16.0728 C8.621,16.5658 7.821,16.5658 7.331,16.0728 L0.369,9.1118 C-0.123,8.6188 -0.123,7.8228 0.369,7.3308 L7.331,0.3688 C7.821,-0.1232 8.621,-0.1232 9.112,0.3688 C9.358,0.6148 9.481,0.9378 9.481,1.2598" fill="#FFFFFF" />
            </G>
        </G>
      </G>
    </Svg>
  </View>
);

export default SvgComponent;


