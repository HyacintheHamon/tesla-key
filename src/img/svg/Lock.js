import React from "react";
import Svg, { G, Path, Defs, Polygon } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="15px" height="17px" viewBox="0 0 15 17" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Defs>
        <Polygon points="0 0 14.833 0 14.833 16.3248 0 16.3248" />
      </Defs>
      <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G>
            <G>
              <Path d="M7.392,2 L7.442,2 C9.45,2 11.083,3.634 11.083,5.642 L11.083,6.991 L3.75,6.991 L3.75,5.642 C3.75,3.634 5.384,2 7.392,2 M13.083,7 L13.083,5.642 C13.083,2.526 10.557,0 7.442,0 L7.392,0 C4.276,0 1.75,2.526 1.75,5.642 L1.75,7 C0.777,7.045 0,7.841 0,8.825 L0,14.491 C0,15.504 0.821,16.325 1.833,16.325 L12.999,16.325 C14.012,16.325 14.833,15.504 14.833,14.491 L14.833,8.825 C14.833,7.841 14.056,7.045 13.083,7" fill="#FFFFFF" />
            </G>
        </G>
     </G>
    </Svg>
  </View>
);

export default SvgComponent;