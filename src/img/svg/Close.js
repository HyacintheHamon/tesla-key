import React from "react";
import Svg, { Path, G, Defs, Polygon, Line } from "react-native-svg";
import { View, Dimensions } from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
console.log('ScreenWidth:', ScreenWidth);
const centerWidth = 330;
const leftRightWidth = (ScreenWidth - centerWidth) / 2;
console.log('leftRightWidth:', leftRightWidth);
let arrLines = [];
for (let i = 0; i < leftRightWidth; i += 10)
{
    if (i === 0) i = 0.5;
    arrLines.push(i);
}
arrLines = arrLines.sort((a, b) => {return b-a});
const SvgComponent = props => (
  <View style={props.style}>
      <View style={{width: leftRightWidth}}>
          <Svg width={leftRightWidth} height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
              {
                  arrLines.map(x => {
                      return <Line x1={x} y1="13" x2={x} y2="7" stroke="white" stroke-linejoin="round"/>;
                  })
              }
          </Svg>
      </View>
      <View style={{marginLeft: 5, marginRight: 5}}>
          <Svg width={centerWidth} height="13" viewBox="0 0 320 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Line x1="0.5" y1="13" x2="0.500001" y2="-2.18557e-08" stroke="white" stroke-linejoin="round"/>
              <Line x1="10.5" y1="13" x2="10.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="20.5" y1="13" x2="20.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="30.5" y1="13" x2="30.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="40.5" y1="13" x2="40.5" y2="5" stroke="white" stroke-linejoin="round"/>
              <Line x1="50.5" y1="13" x2="50.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="60.5" y1="13" x2="60.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="70.5" y1="13" x2="70.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="80.5" y1="13" x2="80.5" y2="5" stroke="white" stroke-linejoin="round"/>
              <Line x1="90.5" y1="13" x2="90.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="100.5" y1="13" x2="100.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="110.5" y1="13" x2="110.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="120.5" y1="13" x2="120.5" y2="5" stroke="white" stroke-linejoin="round"/>
              <Line x1="130.5" y1="13" x2="130.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="140.5" y1="13" x2="140.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="150.5" y1="13" x2="150.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="160.5" y1="13" x2="160.5" y2="-2.18557e-08" stroke="white" stroke-linejoin="round"/>
              <Line x1="170.5" y1="13" x2="170.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="180.5" y1="13" x2="180.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="190.5" y1="13" x2="190.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="200.5" y1="13" x2="200.5" y2="5" stroke="white" stroke-linejoin="round"/>
              <Line x1="210.5" y1="13" x2="210.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="220.5" y1="13" x2="220.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="230.5" y1="13" x2="230.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="240.5" y1="13" x2="240.5" y2="5" stroke="white" stroke-linejoin="round"/>
              <Line x1="250.5" y1="13" x2="250.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="260.5" y1="13" x2="260.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="270.5" y1="13" x2="270.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="280.5" y1="13" x2="280.5" y2="5" stroke="white" stroke-linejoin="round"/>
              <Line x1="290.5" y1="13" x2="290.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="300.5" y1="13" x2="300.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="310.5" y1="13" x2="310.5" y2="7" stroke="white" stroke-linejoin="round"/>
              <Line x1="320.5" y1="13" x2="320.5" y2="7.60754e-06" stroke="white" stroke-linejoin="round"/>
          </Svg>
      </View>
      <View style={{width: leftRightWidth}}>
          <Svg width={leftRightWidth} height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
              {
                  arrLines.map(x => {
                      return <Line x1={x} y1="13" x2={x} y2="7" stroke="white" stroke-linejoin="round"/>;
                  })
              }
          </Svg>
      </View>

  </View>
);

export default SvgComponent;


