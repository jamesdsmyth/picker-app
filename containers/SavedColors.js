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
    // this.props.getColorsDispatch('udTmyWG6XiTRaiN6Jo18RB4gdZl2');
    this.props.getColorsDispatch(this.props.user.id);
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
    console.log(this.props);
    // const list = this.props.colors['udTmyWG6XiTRaiN6Jo18RB4gdZl2'] || {};
    const list = this.props.colors[this.props.user.id] || {};

    const arr = Object.keys(list).map(item => {
      return list[item]
    });

    return (
      <View style={styles.container}>
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