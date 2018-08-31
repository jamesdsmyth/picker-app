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
    this.profile = this.profile.bind(this);
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
      this.props.saveColorDispatch(this.props.user.uid, colorArr);
    } else {
      this.props.navigation.navigate('SignIn');
      this.props.tempSaveColorDispatch(colorArr);
    }
  }

  // calling this function will take you to the profile section
  profile() {
    this.props.navigation.navigate('Profile');
  }

  render() {
    return (
      <View style={styles.container}> 
        <ColorPicker 
          savedColors={this.savedColors}
          saveColor={this.saveColor}
          profile={this.profile}
        />
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
    saveColorDispatch: (uid, colorArr) => dispatch(saveColorAction(uid, colorArr)),
    tempSaveColorDispatch: (colorArr) => dispatch(tempSaveColorAction(colorArr))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);