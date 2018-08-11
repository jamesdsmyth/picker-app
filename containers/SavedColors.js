import React, { Component } from 'react';
import { View, Text, FlatList, BackHandler } from 'react-native';
import styles from '../styles/styles';
import { connect } from 'react-redux';

import { getColorsAction } from '../actions/actions';

class SavedColors extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Your Colors'
  }

  componentWillMount() {
    console.log(this.props.user)
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
    const list = this.props.colors || {};

    console.log(list);
    const arr = Object.keys(list).map(item => {
      return list[item]
    });

    return (
      <View style={styles.container}>
        {/* <Text style={styles.savedColorsTitle}>Hi {this.props.user.name},</Text>
        <Text style={styles.savedColorsSubtitle}>Here are your colors...</Text> */}
        {
          arr.length === 0 ?
            <Text>Fetching your colors</Text>
            :
            <FlatList
              data={arr}
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
                      <Text style={styles.savedColorText}>{item.rgb[0]}, {item.rgb[1]}, {item.rgb[2]}</Text>
                    </View>
                  )
                }   
              }
            />
        }
      </View>
    )
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