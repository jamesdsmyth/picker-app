import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/styles';
import { connect } from 'react-redux';

import { getColorsAction } from '../actions/actions';

class SavedColors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRGB: true
    }

    this.toggleColorValue = this.toggleColorValue.bind(this);
  }

  static navigationOptions = {
    title: 'Your Colors'
  }

  componentWillMount() {
    this.props.getColorsDispatch(this.props.user.uid);
  }

  toggleColorValue() {
    this.setState({
      showRGB: !this.state.showRGB
    });
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

    return (
      <View style={styles.container}>
        {/* <Text style={styles.savedColorsTitle}>Hi {this.props.user.name},</Text>
        <Text style={styles.savedColorsSubtitle}>Here are your colors...</Text> */}        
        {
          arr.length === 0 ?
            this.props.colors.colorsReceived ?
              <Text style={styles.savedColorsTitle}>You haven't got any colors saved :(</Text>
              :
              <Text style={styles.savedColorsSubtitle}>Fetching your colors...</Text>
            :
            <View>
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
                        {
                          this.state.showRGB
                            &&
                          <Text style={styles.savedColorText}>RGB {item.rgb[0]}, {item.rgb[1]}, {item.rgb[2]}</Text>
                        }
                      </View>
                    )
                  }   
                }
              />
              <Text>
                Sign out
              </Text>
            </View>
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {

  console.log(state);

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