import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="100px" height="50px" viewBox="0 0 1759 1752" xmlns="http://www.w3.org/2000/svg">
      <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G id="Artboard" transform="translate(-12.000000, 0.000000)" fill="#36393E" fill-rule="nonzero">
          <G id="tesla_grey" transform="translate(12.000000, 0.000000)">
            <Path d="M879.6,1751.4 L1125.7,367.5 C1360.2,367.5 1434.2,393.2 1444.9,498.2 C1444.9,498.2 1602.2,439.5 1681.6,320.4 C1371.9,176.9 1060.8,170.4 1060.8,170.4 L879.2,391.5 L879.6,391.5 L698,170.4 C698,170.4 386.9,176.9 77.2,320.4 C156.6,439.5 314,498.2 314,498.2 C324.7,393.2 398.6,367.5 631.6,367.3 L879.6,1751.4 Z" id="Shape"></Path>
            <Path d="M879.5,106.5 C1129.8,104.6 1416.3,145.2 1709.6,273.1 C1748.8,202.5 1758.9,171.4 1758.9,171.4 C1438.3,44.5 1138,1.1 879.5,0 C620.9,1.1 320.7,44.5 0.1,171.4 C0.1,171.4 14.4,209.8 49.3,273.1 C342.6,145.3 629.1,104.6 879.5,106.5 Z" id="Shape"></Path>
          </G>
        </G>
      </G>
    </Svg>
  </View>
);

export default SvgComponent;