import React from 'react';
import Svg, { Path, Polygon } from 'react-native-svg';

const AddSVG = props => (
  <Svg width={44} height={38} viewBox="0 0 42 42">
    <Polygon points="42,20 22,20 22,0 20,0 20,20 0,20 0,22 20,22 20,42 22,42 22,22 42,22 "/>
  </Svg>
  )
  
  AddSVG.defaultProps = {
    fill: '#000000',
    strokeColor: '#000000',
    strokeWidth: 10,
  }
  
  export default AddSVG;
  