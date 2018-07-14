import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from '../styles/styles';

const ColorPickerFooter = ({ bgColor, saveColor }) => (
  <View style={styles.colorCodeSection}>
    <Text style={styles.colorCodeSectionText}>
      {bgColor[0]}{' ,  '}
      {bgColor[1]}{' ,  '} 
      {bgColor[2]}
    </Text>
    <TouchableHighlight 
      style={styles.colorCodeSectionSave}
      onPress={saveColor}
    >
      <Text style={styles.colorCodeSectionSaveText}>
        Save
      </Text>
    </TouchableHighlight>
  </View>
)

export default ColorPickerFooter;