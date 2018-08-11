import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import ColorPicker from '../components/ColorPicker';
import styles from '../styles/styles';

import { saveColorAction, tempSaveColorAction } from '../actions/actions';

class Landing extends Component {
  constructor() {
    super();

    this.saveColor = this.saveColor.bind(this);
    this.savedColors = this.savedColors.bind(this);
  }

  static navigationOptions = {
    header: null
  }

  // calling this function will navigate to the users colors page
  savedColors() {
    if(this.props.user.loggedIn) {
      this.props.navigation.navigate('SavedColors');
    } else {
      this.props.navigation.navigate('SignIn');
    }
  }

  // calling this function will dispatch an action that will write the color to firebase
  saveColor(colorArr) {
    if(this.props.user.loggedIn) {
      this.props.saveColorDispatch(this.props.user.id, colorArr);
    } else {
      this.props.navigation.navigate('SignIn');
      this.props.tempSaveColorDispatch(colorArr);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        
        <ColorPicker 
          hideRgbValues
          returnColor={this.getColor}
          savedColors={this.savedColors}
          saveColor={this.saveColor}
        />
        <View style={styles.notification}>
          <Text>Color Saved!</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.currentUserReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveColorDispatch: (id, colorArr) => dispatch(saveColorAction(id, colorArr)),
    tempSaveColorDispatch: (colorArr) => dispatch(tempSaveColorAction(colorArr))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);