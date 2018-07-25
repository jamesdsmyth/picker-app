import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorPicker from '../components/ColorPicker'

import { saveColorAction } from '../actions/actions'

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

    console.log(this.props);
    if(this.props.user.loggedIn) {
      this.props.navigation.navigate('SignIn');
    } else {
      this.props.navigation.navigate('SavedColors');
    }
  }

  //  calling this function will dispatch an action that will write the color to firebase
  saveColor(colorArr) {
    this.props.saveColorDispatch(colorArr);
  }

  render() {

    console.log(this.props);
    return (
      <ColorPicker 
        hideRgbValues
        // height={400}
        returnColor={this.getColor}
        savedColors={this.savedColors}
        saveColor={this.saveColor}
        // color={[0, 25, 134]}
      />
    )
  }
}

const mapStateToProps = (state) => {
  console.log('the state from firebase is', state);
  return {
    user: state.currentUserReducer
  }
}

const mapDispatchToProps = (dispatch, colorArr) => {
  return {
    saveColorDispatch: (colorArr) => dispatch(saveColorAction(colorArr))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);