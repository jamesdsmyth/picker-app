import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ListView } from 'react-native';
import styles from '../styles/styles';
import { connect } from 'react-redux';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

import { rgbToHexConversion } from '../utils/colorConversion';
import { getColorsAction } from '../actions/actions';

class SavedColors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSelected: -1
    };

    this.onSwipeLeft = this.onSwipeLeft.bind(this);
  }

  static navigationOptions = {
    title: 'Palette'
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

  onSwipeLeft(id) {
    this.setState({
      currentSelected: id
    });
  }

  onSwipe(gestureName) {
    const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    switch (gestureName) {
      case SWIPE_LEFT:
        console.log('SWIPE_LEFT');
        // this.setState({backgroundColor: 'blue'});
        break;
      case SWIPE_RIGHT:
        console.log('SWIPE_RIGHT');
        // this.setState({backgroundColor: 'yellow '});
        break;
    }
  }

  render() {

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    const list = this.props.colors.list || {};
    const arr = Object.keys(list).map(item => {
      return list[item];
    });
    
    const descendingArr = arr.reverse();

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
      const ds = new ListView.DataSource({ 
        rowHasChanged: (r1, r2) => r1 !== r2 }); 
  
      const dataSource = ds.cloneWithRows(descendingArr);

      console.log('the currently selected is', this.state.currentSelected);

      return (
        <View style={styles.container}>
          <ListView 
            dataSource = { dataSource } 
            renderRow = { (item, sectionId, rowId) => 
              // <GestureRecognizer
              <TouchableHighlight
                // onSwipe={(direction) => this.onSwipe(direction)}
                // onSwipeLeft={() => this.onSwipeLeft(rowId)}
                // onSwipeRight={() => this.onSwipeRight(rowId)}
                // config={config}
                // onPress={() => this.onSwipeLeft(rowId)}
                style={
                [
                  rowId === this.setState.currentSelected ? styles.openColor : styles.savedColor,
                  { 'backgroundColor': `rgb(${item.rgb[0]}, ${item.rgb[1]}, ${item.rgb[2]})` }
                ]
              }>
                <View style={styles.savedColorContainer}
                >
                  <Text style={styles.savedColorText}>
                    HEX {rgbToHexConversion(item.rgb)}
                  </Text>
                  <Text style={styles.savedColorText}>
                    RGB {item.rgb[0]}, {item.rgb[1]}, {item.rgb[2]}
                  </Text>
                </View>
              </TouchableHighlight>
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