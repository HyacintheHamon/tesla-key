import React from "react";
import Svg, { Path, G, Defs, Polygon } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="24px" height="13px" viewBox="0 0 24 13" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Defs>
        <Polygon points="0.0003 0.838 23.354 0.838 23.354 2.9996 0.0003 2.9996" />
        <Polygon points="0.0003 0.8376 23.354 0.8376 23.354 2.9996 0.0003 2.9996" />
      </Defs>
      <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G transform="translate(-1.000000, 0.000000)">
            <G transform="translate(1.000000, 0.000000)">
                <G>
                    <Path d="M22.2733,2.9996 L1.0813,2.9996 C0.4843,2.9996 0.0003,2.5166 0.0003,1.9186 C0.0003,1.3216 0.4843,0.8376 1.0813,0.8376 L22.2733,0.8376 C22.8703,0.8376 23.3543,1.3216 23.3543,1.9186 C23.3543,2.5166 22.8703,2.9996 22.2733,2.9996" fill="#FFFFFF" />
                </G>
                <G transform="translate(0.000000, 10.000000)">
                    <Path d="M22.2733,2.9996 L1.0813,2.9996 C0.4843,2.9996 0.0003,2.5166 0.0003,1.9186 C0.0003,1.3216 0.4843,0.8376 1.0813,0.8376 L22.2733,0.8376 C22.8703,0.8376 23.3543,1.3216 23.3543,1.9186 C23.3543,2.5166 22.8703,2.9996 22.2733,2.9996" fill="#FFFFFF" />
                </G>
            </G>
        </G>
      </G>
    </Svg>
  </View>
);

export default SvgComponent;


