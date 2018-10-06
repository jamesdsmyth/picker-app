import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const ColorPickerFooter = (props) => (
  <View style={styles.colorCodeSection}>   
    <View style={styles.colorCodeValues}>
      {
        props.showRGBText ?
        <TouchableHighlight onPress={props.toggleColorText}>
          <Text style={styles.colorCodeSectionTextValue}>
            {'RGB '}{props.bgColor[0]}{', '}
            {props.bgColor[1]}{', '} 
            {props.bgColor[2]}
          </Text>
        </TouchableHighlight>
        :
        <TouchableHighlight onPress={props.toggleColorText}>
          <Text style={styles.colorCodeSectionTextValue}>
          {'HEX '}{props.hexColor}
          </Text>
        </TouchableHighlight>
      }
    </View>

    {
      props.savingColor ?
        <Text style={styles.colorCodeSectionText}>
          Adding to Palette...
        </Text>
        :
        <View style={styles.colorCodeButtonSection}>
          <TouchableHighlight onPress={() => props.profile()}>
            <Text style={styles.colorCodeSectionText}>
              Profile
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => props.saveColor(props.bgColor)}>
            <Text style={styles.colorCodeSectionText}>
              Save
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => props.savedColors()}>
            <Text style={styles.colorCodeSectionText}>
              My Colors
            </Text>
          </TouchableHighlight>
        </View>
    }
  </View>
)

ColorPickerFooter.propTypes = {
  bgColor: PropTypes.array.isRequired,
  saveColor: PropTypes.func.isRequired
}

export default ColorPickerFooter;