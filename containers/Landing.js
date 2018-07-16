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
    this.props.saveColorDispatch(colorArr);
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
  console.log('the state from firebase is', state);
  return {
    colors: state
  }
}

const mapDispatchToProps = (dispatch, colorArr) => {
  return {
    saveColorDispatch: (colorArr) => dispatch(saveColorAction(colorArr))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);