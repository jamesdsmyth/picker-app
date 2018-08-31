import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import AddSVG from '../assets/AddSVG';
import UserSVG from '../assets/UserSVG';
import ColorsSVG from '../assets/ColorsSVG';
import persistorStore from '../reducers/combinedReducers';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const ColorPickerFooter = ({ bgColor, hexColor, toggleColorText, savedColors, saveColor, profile, showRGBText }) => (
  <View style={styles.colorCodeSection}>   
    {
      // showRGBText ?
      // <TouchableHighlight onPress={toggleColorText}>
      //   <Text style={styles.colorCodeSectionText}>
      //     {'RGB '}{bgColor[0]}{', '}
      //     {bgColor[1]}{', '} 
      //     {bgColor[2]}
      //   </Text>
      // </TouchableHighlight>
      // :
      // <TouchableHighlight onPress={toggleColorText}>
      //   <Text style={styles.colorCodeSectionText}>
      //     {hexColor}
      //   </Text>
      // </TouchableHighlight>
    }
    {/* <View style={styles.colorCodeButtonSection}> */}
      <TouchableHighlight
        style={styles.colorCodeSectionSave}
        onPress={() => profile()}
      >
        <UserSVG/>
      </TouchableHighlight>
 
      <TouchableHighlight
        style={styles.colorCodeSectionSave}
        onPress={() => saveColor(bgColor)}
      >
        <AddSVG bgColor={hexColor} />
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.colorCodeSectionSave}
        onPress={() => savedColors()}
      >
        <ColorsSVG/>
      </TouchableHighlight>
    {/* </View> */}
  </View>
)

ColorPickerFooter.propTypes = {
  bgColor: PropTypes.array.isRequired,
  saveColor: PropTypes.func.isRequired
}

export default ColorPickerFooter;