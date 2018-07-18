import React, { Component} from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { signInAction } from '../actions/actions'
import t from 'tcomb-form-native';
import styles from '../styles/styles';

// here we are: define your domain model
const Form = t.form.Form;
const signInFields = t.struct({
  email: t.String,
  password: t.String
});

var options = {
  fields: {
    email: {
      error: 'Enter your email'
    },
    password: {
      password: true,
      secureTextEntry: true,
      error: 'Enter your password'
    }
  }
};

class SignIn extends Component {
  constructor() {
    super()

    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    var value = this.refs.form.getValue();
    if (value) {
      console.log(value);

      this.props.signInDispatch(value);
      // passing Struct {email: "Xxx", password: "rere"}.
      // From this I will be able to login to firebase.
      // needs to call a dispatch
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* display */}
        <Form
          ref="form"
          type={signInFields}
          options={options}
        />
        <TouchableHighlight 
          style={styles.button}
          onPress={this.signIn}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('the state from firebase is', state);
  return {
    colors: state
  }
}

const mapDispatchToProps = (dispatch, formData) => {
  return {
    signInDispatch: (formData) => dispatch(signInAction(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);