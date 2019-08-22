import React from "react";
import Svg, { Path } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="20" height="20" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M4.47576 5.62478V4.01616C4.47576 2.35009 5.82585 1 7.49192 1C9.15799 1 10.5081 2.35009 10.5081 4.01616V5.62478" stroke="white" stroke-miterlimit="10"/>
      <Path d="M12.4154 17H2.57415C1.7009 17 1 16.2934 1 15.4259V8.06068C1 7.18743 1.70664 6.48653 2.57415 6.48653H12.4097C13.2829 6.48653 13.9838 7.19318 13.9838 8.06068V15.4201C13.9896 16.2934 13.2829 17 12.4154 17Z" stroke="white" stroke-miterlimit="10"/>
    </Svg>
  </View>
);

export default SvgComponent;