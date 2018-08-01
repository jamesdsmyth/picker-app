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
    }
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
  return {
    user: state.currentUserReducer
  }
}

const mapDispatchToProps = (dispatch) => {

  console.log('mappinggg', this.props);
  return {
    saveColorDispatch: (id, colorArr) => dispatch(saveColorAction(id, colorArr))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);