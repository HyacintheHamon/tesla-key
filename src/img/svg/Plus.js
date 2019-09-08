import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="13px" height="13px" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg" {...props}>
      <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G fill="#FFFFFF">
            <Path d="M12.25,5.75 L7.25,5.75 L7.25,0.75 C7.25,0.336 6.914,0 6.5,0 C6.086,0 5.75,0.336 5.75,0.75 L5.75,5.75 L0.75,5.75 C0.336,5.75 0,6.086 0,6.5 C0,6.914 0.336,7.25 0.75,7.25 L5.75,7.25 L5.75,12.25 C5.75,12.664 6.086,13 6.5,13 C6.914,13 7.25,12.664 7.25,12.25 L7.25,7.25 L12.25,7.25 C12.664,7.25 13,6.914 13,6.5 C13,6.086 12.664,5.75 12.25,5.75" />
        </G>
      </G>
    </Svg>
  </View>
);

export default SvgComponent;