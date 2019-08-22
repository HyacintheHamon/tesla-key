import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M7.58534 8.1818C9.56854 8.1818 11.1762 6.5741 11.1762 4.5909C11.1762 2.6077 9.56854 1 7.58534 1C5.60215 1 3.99445 2.6077 3.99445 4.5909C3.99445 6.5741 5.60215 8.1818 7.58534 8.1818Z" stroke="white" stroke-miterlimit="10"/>
      <Path d="M1 18C1 13.5852 3.90712 10 7.5 10C11.0929 10 14 13.578 14 18" stroke="white" stroke-miterlimit="10"/>
    </Svg>
  </View>
);

export default SvgComponent;
