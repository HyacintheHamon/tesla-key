import React from "react";
import Svg, { G, Path, Defs, Polygon } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="17px" height="10px" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg">
      <Defs>
        <Polygon points="0 -0.00038 16.442 -0.00038 16.442 9.48037 0 9.48037" />
      </Defs>
      <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G>
            <G>
                <Path d="M1.2598,-0.00038 C1.5808,-0.00038 1.9038,0.12262 2.1498,0.36862 L8.2208,6.43862 L14.2928,0.36862 C14.7848,-0.12338 15.5808,-0.12338 16.0728,0.36862 C16.5658,0.85862 16.5658,1.65962 16.0728,2.14962 L9.1118,9.11062 C8.6188,9.60362 7.8228,9.60362 7.3308,9.11062 L0.3688,2.14962 C-0.1232,1.65962 -0.1232,0.85862 0.3688,0.36862 C0.6148,0.12262 0.9378,-0.00038 1.2598,-0.00038" fill="#5D5D61" />
            </G>
        </G>
      </G>
    </Svg>
  </View>
);

export default SvgComponent;