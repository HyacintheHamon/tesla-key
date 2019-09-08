import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="20" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.974 31.632">
      <G>
	    <Path fill="#525252" d="M13.083,7V5.642C13.083,2.526,10.557,0,7.441,0H7.392C4.276,0,1.75,2.526,1.75,5.642V7
		C0.777,7.044,0,7.841,0,8.825v5.666c0,1.013,0.821,1.834,1.833,1.834H13c1.013,0,1.834-0.821,1.834-1.834V8.825
		C14.833,7.841,14.056,7.044,13.083,7z M7.392,2h0.049c2.008,0,3.642,1.634,3.642,3.642v1.349H3.75V5.642
		C3.75,3.634,5.384,2,7.392,2z"/>
	    <Path fill="#525252" d="M7.5,31.632c-0.266,0-0.52-0.105-0.707-0.293l-6.475-6.474c-0.391-0.391-0.391-1.023,0-1.414
		s1.023-0.391,1.414,0L7.5,29.218l5.767-5.767c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-6.474,6.474
		C8.02,31.527,7.766,31.632,7.5,31.632z"/>
      </G>
    </Svg>
  </View>
);

export default SvgComponent;