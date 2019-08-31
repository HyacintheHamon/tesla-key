import React from "react";
import Svg, { Path, G, Defs, Polygon } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="30px" height="30px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
      <Defs>
        <Polygon points="0.0003 0.0005 16.9043 0.0005 16.9043 16.9045 0.0003 16.9045"/>
      </Defs>
      <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G transform="translate(-1.000000, -1.000000)">
            <G transform="translate(1.000000, 1.000000)">
                <Path d="M9.9593,8.4528 L16.5923,1.8198 C17.0083,1.4028 17.0083,0.7278 16.5923,0.3118 C16.1763,-0.1042 15.5013,-0.1042 15.0853,0.3118 L8.4523,6.9448 L1.8193,0.3118 C1.4033,-0.1042 0.7293,-0.1042 0.3123,0.3118 C-0.1037,0.7278 -0.1037,1.4028 0.3123,1.8198 L6.9443,8.4528 L0.3123,15.0848 C-0.1037,15.5018 -0.1037,16.1768 0.3123,16.5928 C0.7293,17.0088 1.4033,17.0088 1.8193,16.5928 L8.4523,9.9598 L15.0853,16.5928 C15.5013,17.0088 16.1763,17.0088 16.5923,16.5928 C17.0083,16.1768 17.0083,15.5018 16.5923,15.0848 L9.9593,8.4528 Z" fill="#FFFFFF" />
            </G>
        </G>
      </G>
    </Svg>
  </View>
);

export default SvgComponent;


