import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="13px" height="2px" viewBox="0 0 13 2" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G transform="translate(0.000000, -6.000000)" fill="#FFFFFF">
            <Path d="M12.25,7.5 L0.75,7.5 C0.336,7.5 0,7.164 0,6.75 C0,6.336 0.336,6 0.75,6 L12.25,6 C12.664,6 13,6.336 13,6.75 C13,7.164 12.664,7.5 12.25,7.5" />
        </G>
    </G>
    </Svg>
  </View>
);

export default SvgComponent;