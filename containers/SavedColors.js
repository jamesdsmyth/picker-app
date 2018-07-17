import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/styles';
import { connect } from 'react-redux';

class SavedColors extends Component {


  _keyExtractor = (item, index) => item.id;

  render() {
    const list = this.props.colors || {};
    const rgbList = Object.keys(list).map(item => {
      return {
        rgb: list[item].rgb
      }
    });

    return (
      <View style={styles.container}>
        <FlatList
          data={rgbList}
          keyExtractor={this._keyExtractor}
          renderItem={
            ({item}) => {
              return (
                <View
                  style={
                  [
                    styles.savedColor,
                    { 'backgroundColor': `rgb(${item.rgb[0]}, ${item.rgb[1]}, ${item.rgb[2]})` }
                  ]
                }>
                  <Text style={styles.item}>{item.rgb[0]}, {item.rgb[1]}, {item.rgb[2]}</Text>
                </View>
              )
            }   
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