import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/styles';
import { connect } from 'react-redux';

import { rgbToHexConversion } from '../utils/colorConversion';
import { getColorsAction } from '../actions/actions';

class SavedColors extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Colors'
  }

  componentWillMount() {
    this.props.getColorsDispatch(this.props.user.uid);
  }

  // creating a unique ID here using the RGB and the index of the list item
  createId = (item, index) => {
    const str = item.rgb.toString();
    const arr = str.split(',');
    const id = arr.join('');
    const str2 = id + index;
    return str2.toString();
  }

  render() {
    const list = this.props.colors.list || {};
    const arr = Object.keys(list).map(item => {
      return list[item]
    });
    
    const descendingArr = arr.reverse();

    console.log(descendingArr);
    // const hexColor = rgbToHexConversion(bgColor);

    if(arr.length === 0) {
      return (
        <View style={styles.profileContainer}>
          {
            this.props.colors.colorsReceived ?
              <Text style={styles.savedColorsTitle}>You haven't got any colors saved :(</Text>
              :
              <Text style={styles.savedColorsSubtitle}>Fetching your colors...</Text>
          }
        </View>
      )
    }

    if(arr.length > 0) {
      return (
        <View style={styles.container}>
          <FlatList
            data={descendingArr}
            keyExtractor={this.createId}
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
                    <Text style={styles.savedColorText}>
                      HEX {rgbToHexConversion(item.rgb)}
                    </Text>
                    <Text style={styles.savedColorText}>
                      RGB {item.rgb[0]}, {item.rgb[1]}, {item.rgb[2]}
                    </Text>
                  </View>
                )
              }   
            }
          />
        </View>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    colors: state.getColorsReducer,
    user: state.currentUserReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getColorsDispatch: (uid) => dispatch(getColorsAction(uid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedColors);