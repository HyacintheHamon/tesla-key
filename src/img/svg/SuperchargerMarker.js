import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <Path d="M20.9 7.6A9.08 9.08 0 0 0 12 0a9.08 9.08 0 0 0-8.9 7.6 8.69 8.69 0 0 0 .9 5.12 40.35 40.35 0 0 0 4.19 6.89c1 1.39 2.09 2.73 3.18 4.05A.87.87 0 0 0 12 24a.87.87 0 0 0 .68-.34c1.09-1.32 2.17-2.66 3.18-4.05a40.35 40.35 0 0 0 4.19-6.89 8.69 8.69 0 0 0 .85-5.12z" fill="#c00"/>
      <Path fill="#fff" d="M14.77 3.87L9.23 10.1l2.08.69-2.08 4.84 5.54-6.23-2.08-.69 2.08-4.84z"/>
    </Svg>
  </View>
);

export default SvgComponent;