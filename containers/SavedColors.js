import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/styles';
import { connect } from 'react-redux';

class SavedColors extends Component {
  render() {
    const list = this.props.colors;
    const rgbList = Object.keys(list).map((item, i) => {
      return {
        rgb: list[item].rgb
      }
    });
    
    return (
      <View style={styles.container}>
        <FlatList
          data={rgbList}

          renderItem={({item}) => 
            <Text style={styles.item}>{item.rgb}</Text>
          }
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    colors: state.colors
  }
}

export default connect(mapStateToProps)(SavedColors);