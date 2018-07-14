import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorPicker from '../components/ColorPicker'

class Landing extends Component {

  static navigationOptions = {
    header: null
  }

  saveColor() {
    alert('color saved in landing!');
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

const mapDispatchToProps = dispatch => {
  return {
    saveColorDispatch: () => dispatch({ type: 'SAVE_COLOR' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);