import React from 'react';
import Svg, { Polygon, G } from 'react-native-svg';

const ColorsSVG = props => (
  <Svg width={44} height={38} viewBox="0 0 51 51">
    <Polygon fill="#EFCE4A" points="50.956,14.456 25.5,29 0.044,14.456 25.5,0 "/>
    <Polygon fill="#ED8A19" points="25.5,29 9.7,19.973 0.044,25.456 25.5,40 50.956,25.456 41.3,19.973 "/>
    <G>
      <Polygon fill="#EA6248" points="25.5,40 9.7,30.973 0.044,36.456 25.5,51 50.956,36.456 41.3,30.973 	"/>
    </G>
  </Svg>
  )
  
  ColorsSVG.defaultProps = {
    // fill: '#000000',
    // strokeColor: '#000000',
    // strokeWidth: 10,
  }
  
  export default ColorsSVG;
  