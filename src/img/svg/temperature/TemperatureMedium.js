import React from "react";
import Svg, { Path, G, Defs, Polygon } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="9px" height="20px" viewBox="0 0 9 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Defs>
        <Polygon id="path-1" points="0.0004 0 8.7914 0 8.7914 19.9999 0.0004 19.9999"  />
      </Defs>
      <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G>
            <G>
                <Path d="M3.6664,0.9999 L5.1364,0.9999 C5.4004,0.9999 5.6144,1.2139 5.6144,1.4789 L5.6144,8.3909 L3.1874,8.3909 L3.1874,1.4789 C3.1874,1.2139 3.4014,0.9999 3.6664,0.9999 M6.6044,11.8239 L6.6044,1.0909 C6.6044,0.4879 6.1154,-0.0001 5.5134,-0.0001 L3.2784,-0.0001 C2.6764,-0.0001 2.1874,0.4879 2.1874,1.0909 L2.1874,11.8239 C0.8854,12.5869 0.0004,13.9849 0.0004,15.6039 C0.0004,18.0319 1.9684,19.9999 4.3954,19.9999 C6.8234,19.9999 8.7914,18.0319 8.7914,15.6039 C8.7914,13.9849 7.9064,12.5869 6.6044,11.8239" fill="#FFFFFF" />
            </G>
        </G>
    </G>
  </Svg>
  </View>
);

export default SvgComponent;
