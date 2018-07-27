import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/styles';
import { connect } from 'react-redux';

import { getColorsAction } from '../actions/actions';

class SavedColors extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.getColorsDispatch('udTmyWG6XiTRaiN6Jo18RB4gdZl2');
  }

  // react native function that creates a key for you
  _keyExtractor = (item, index) => item.id;

  render() {
    const list = this.props.colors['udTmyWG6XiTRaiN6Jo18RB4gdZl2'] || {};
    const arr = Object.keys(this.props.colors['udTmyWG6XiTRaiN6Jo18RB4gdZl2']).map(item => {
      return list[item]
    });

    return (
      <View style={styles.container}>
        <FlatList
          data={arr}
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
    colors: state.getColorsReducer,
    user: state.currentUserReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getColorsDispatch: (id) => dispatch(getColorsAction(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedColors);