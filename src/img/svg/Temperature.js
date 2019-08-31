import React from "react";
import Svg, { Rect, G,  Path} from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="9px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 20">
      <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <Rect id="Rectangle-path" fill="#FFFFFF" fill-rule="nonzero" x="3" y="9" width="3" height="7" />
        <Path d="M6.76023658,11.824 L6.76023658,1.091 C6.76023658,0.488 6.26069154,0 5.64342584,0 L3.3555505,0 C2.73930846,0 2.23976342,0.488 2.23976342,1.091 L2.23976342,11.824 C0.905937216,12.587 0,13.985 0,15.604 C0,18.032 2.01455869,20 4.5,20 C6.98544131,20 9,18.032 9,15.604 C9,13.985 8.09406278,12.587 6.76023658,11.824 Z M5.74783894,12.313 C5.74783894,12.577 5.52877616,12.792 5.25853048,12.792 L3.75375341,12.792 C3.48350773,12.792 3.26342129,12.578 3.26342129,12.313 L3.26342129,1.478 C3.26342129,1.214 3.48248408,1 3.75272975,1 L5.25750682,1 C5.5277525,1 5.74783894,1.214 5.74783894,1.478 L5.74783894,12.313 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero" />
      </G>
    </Svg>
  </View>
);

export default SvgComponent;


