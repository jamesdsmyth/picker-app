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

  componentWillReceiveProps(newProps) {
    // this.props.colors.list = newProps.list;
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
      // let isValid = true;

      // Object.keys(this.props.colors.list).forEach(item => {
      //   console.log(this.props.colors.list[item].rgb, colorArr)
      //   if(this.props.colors.list[item].rgb == colorArr) {
      //     isValid = false;
      //   }
      // });

      // if(isValid) {
        this.props.saveColorDispatch(this.props.user.uid, colorArr);
      // } else {
      //   alert('not valid');
      // }
    } else {
      this.props.navigation.navigate('SignIn');
      this.props.tempSaveColorDispatch(colorArr);
    }
  }

  // calling this function will take you to the profile section
  profile() {
    if(this.props.user.loggedIn) {
      this.props.navigation.navigate('Profile');
    } else {
      this.props.navigation.navigate('SignIn');
    }
  }

  render() {
    return (
      <View style={styles.container}> 
        <ColorPicker 
          savedColors={this.savedColors}
          saveColor={this.saveColor}
          profile={this.profile}
          savingColor={this.props.color.savingColor}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {

  console.log('THE NEW STATE IS', state.getColorsReducer);
  return {
    user: state.currentUserReducer,
    color: state.saveColorReducer,
    colors: state.getColorsReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveColorDispatch: (uid, colorArr) => dispatch(saveColorAction(uid, colorArr)),
    tempSaveColorDispatch: (colorArr) => dispatch(tempSaveColorAction(colorArr))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);