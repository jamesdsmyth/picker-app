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
    <View style={styles.colorCodeValues}>
      {
        showRGBText ?
        <TouchableHighlight onPress={toggleColorText}>
          <Text style={styles.colorCodeSectionText}>
            {'RGB '}{bgColor[0]}{', '}
            {bgColor[1]}{', '} 
            {bgColor[2]}
          </Text>
        </TouchableHighlight>
        :
        <TouchableHighlight onPress={toggleColorText}>
          <Text style={styles.colorCodeSectionText}>
          {'HEX '}{hexColor}
          </Text>
        </TouchableHighlight>
      }
    </View>
    {/* <View style={styles.colorCodeButtonSection}> */}
      <TouchableHighlight
        onPress={() => profile()}
      >
        {/* <UserSVG/> */}
        <Text style={styles.colorCodeSectionText}>Profile</Text>
      </TouchableHighlight>
 
      <TouchableHighlight
        onPress={() => saveColor(bgColor)}
      >
        {/* <AddSVG bgColor={hexColor} /> */}
        <Text style={styles.colorCodeSectionText}>Save</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => savedColors()}
      >
        {/* <ColorsSVG/> */}
        <Text style={styles.colorCodeSectionText}>My Colors</Text>
      </TouchableHighlight>
    {/* </View> */}
  </View>
)

ColorPickerFooter.propTypes = {
  bgColor: PropTypes.array.isRequired,
  saveColor: PropTypes.func.isRequired
}

export default ColorPickerFooter;