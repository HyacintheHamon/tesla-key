import React from "react";
import Svg, { G, Path, Defs, Polygon } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="14px" height="17px" viewBox="0 0 14 17" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Defs>
        <Polygon points="0.6952 0.675 8.8572 0.675 8.8572 8.8379 0.6952 8.8379" />
      </Defs>
      <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G>
            <G transform="translate(0.000000, -1.000000)">
                <Path d="M10.6951,10.4175 C9.5961,11.2275 8.2431,11.7115 6.7761,11.7115 C5.3091,11.7115 3.9571,11.2275 2.8571,10.4175 C1.1311,11.6455 0.0001,13.6575 0.0001,15.9385 L0.0001,17.3245 L13.5521,17.3245 L13.5521,15.9385 C13.5521,13.6575 12.4231,11.6455 10.6951,10.4175" fill="#FFFFFF" />
                <G transform="translate(2.000000, 0.324700)">
                    <Path d="M8.8572,4.7569 C8.8572,2.5029 7.0302,0.6749 4.7762,0.6749 C2.5222,0.6749 0.6952,2.5029 0.6952,4.7569 C0.6952,7.0109 2.5222,8.8379 4.7762,8.8379 C7.0302,8.8379 8.8572,7.0109 8.8572,4.7569" fill="#FFFFFF" />
                </G>
            </G>
        </G>
      </G>
    </Svg>
  </View>
);

export default SvgComponent;
