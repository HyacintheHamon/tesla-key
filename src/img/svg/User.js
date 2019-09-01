import React from "react";
import Svg, { G, Path, Defs, Polygon } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="12px" height="17px" viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Defs>
        <Polygon points="0.0001 0.3799 11.828 0.3799 11.828 10.9999 0.0001 10.9999" />
        <Polygon points="0.713 0.675 7.116 0.675 7.116 7.079 0.713 7.079" />
      </Defs>
      <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G>
            <G transform="translate(0.000000, -1.000000)">
                <G transform="translate(0.000000, 6.324700)">
                    <Path d="M9.6531,0.3799 C8.8441,1.5839 7.4701,2.3789 5.9141,2.3789 C4.3571,2.3789 2.9841,1.5839 2.1751,0.3799 C0.9101,0.8349 0.0001,2.0339 0.0001,3.4569 L0.0001,10.9999 L11.8281,10.9999 L11.8281,3.4569 C11.8281,2.0339 10.9191,0.8349 9.6531,0.3799" fill="#FFFFFF" />
                </G>
                <G transform="translate(2.000000, 0.324700)">
                    <Path d="M7.116,3.877 C7.116,5.646 5.682,7.079 3.914,7.079 C2.146,7.079 0.713,5.646 0.713,3.877 C0.713,2.108 2.146,0.675 3.914,0.675 C5.682,0.675 7.116,2.108 7.116,3.877" fill="#FFFFFF" />
                </G>
            </G>
        </G>
    </G>
    </Svg>
  </View>
);

export default SvgComponent;
