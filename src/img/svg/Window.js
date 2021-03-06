import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg xmlns="http://www.w3.org/2000/svg" width="23" height="32" viewBox="0 0 379.88 390.89" {...props}>
      <Path d="M336.63,6.56H207.42a77,77,0,0,0-53.84,22L33.22,146.43a77,77,0,0,0-23.1,55V360.82c0,30.19,21.21,36.62,36.22,36.62H357.07c13.56,0,32.93-6.7,32.93-35.32V59.93A53.37,53.37,0,0,0,336.63,6.56Zm23.62,247.31H65.32L189.05,133.18a43.71,43.71,0,0,1,30.78-12.57H340.26a21.78,21.78,0,0,1,20,13.33ZM54,167.69,174.4,49.78a46.93,46.93,0,0,1,33-13.48H336.63c13,0,23.62,10.6,23.62,24.43V97.14a49.43,49.43,0,0,0-20-4.25H219.83a71.7,71.7,0,0,0-50.18,20.48L39.87,240V201.39A47.47,47.47,0,0,1,54,167.69Z" transform="translate(-10.12 -6.56)" fill="#fff"/>
    </Svg>
  </View>
);

export default SvgComponent;