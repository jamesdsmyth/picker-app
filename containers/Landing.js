import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorPicker from '../components/ColorPicker'

import { saveColorAction } from '../actions/actions'

class Landing extends Component {
  constructor() {
    super();

    this.saveColor = this.saveColor.bind(this);
  }

  static navigationOptions = {
    header: null
  }

  saveColor(colorArr) {

    console.log('LANDINGGGGG', colorArr);

    this.props.saveColorDispatch(colorArr);
    // we can just test the navigation functionality.
    // but really we should only navigate once we have saved the color in firebase
    // and recieved the response. then we should navigate to the saved colors screen
  }

  render() {
    return (
      <ColorPicker 
        hideRgbValues
        // height={400}
        returnColor={this.getColor}
        saveColor={this.saveColor}
        // color={[0, 25, 134]}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    color: state
  }
}

const mapDispatchToProps = (dispatch, colorArr) => {
  return {
    saveColorDispatch: (colorArr) => dispatch(saveColorAction(colorArr)) //dispatch({ type: 'SAVE_COLOR' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);