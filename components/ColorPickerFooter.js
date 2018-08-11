import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import HeartSVG from '../assets/HeartSVG'
import persistorStore from '../reducers/combinedReducers';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const ColorPickerFooter = ({ bgColor, hex, savedColors, saveColor }) => (
  <View style={styles.colorCodeSection}>
    <Text style={styles.colorCodeSectionText}>
      {bgColor[0]}{' , '}
      {bgColor[1]}{' , '} 
      {bgColor[2]}
    </Text>
    <Text style={styles.colorCodeSectionText}>
      {hex}
    </Text>
    <HeartSVG />
    <View style={styles.colorCodeButtonSection}>
      <TouchableHighlight
        style={[styles.btn, styles.colorCodeSectionColors]}
        onPress={() => savedColors()}
      >
        <Text style={styles.colorCodeSectionSaveText}>
          Colors
        </Text>
        
      </TouchableHighlight>
      {/* <TouchableHighlight
        style={[styles.btn, styles.colorCodeSectionColors]}
        onPress={() => persistorStore.persistor.purge()}
      >
        <Text style={styles.colorCodeSectionSaveText}>
          Purge
        </Text>
      </TouchableHighlight> */}
      <TouchableHighlight
        style={[styles.btn, styles.colorCodeSectionSave]}
        onPress={() => saveColor(bgColor)}
      >
        <Text style={styles.colorCodeSectionSaveText}>
          Save
        </Text>
      </TouchableHighlight>
    </View>
  </View>
)

ColorPickerFooter.propTypes = {
  bgColor: PropTypes.array.isRequired,
  saveColor: PropTypes.func.isRequired
}

export default ColorPickerFooter;