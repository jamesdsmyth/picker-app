import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import HeartSVG from '../assets/HeartSVG'
import persistorStore from '../reducers/combinedReducers';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const ColorPickerFooter = ({ bgColor, hexColor, toggleColorText, savedColors, saveColor, showRGBText }) => (
  <View style={styles.colorCodeSection}>   
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
          {hexColor}
        </Text>
      </TouchableHighlight>
    }
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
        style={styles.colorCodeSectionSave}
        onPress={() => saveColor(bgColor)}
      >
        <HeartSVG bgColor={hexColor} />
      </TouchableHighlight>
    </View>
  </View>
)

ColorPickerFooter.propTypes = {
  bgColor: PropTypes.array.isRequired,
  saveColor: PropTypes.func.isRequired
}

export default ColorPickerFooter;