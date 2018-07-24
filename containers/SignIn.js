import React, { Component} from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { signInAction, signUpAction } from '../actions/actions'
import t from 'tcomb-form-native';
import styles from '../styles/styles';

const Form = t.form.Form;

const signInFields = t.struct({
  email: t.String,
  password: t.String
});

const signUpFields = t.struct({
  name: t.String,
  email: t.String,
  password: t.String
});

var options = {
  fields: {
    name: {
      error: 'Enter your name'
    },
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
    this.signUp = this.signUp.bind(this);
  }

  signIn() {
    var value = this.refs.form.getValue();
    if (value) {
      this.props.signInDispatch(value);
    }
  }

  signUp() {
    var value = this.refs.signUpform.getValue();
    if (value) {
      this.props.signUpDispatch(value);
    }
  }

  // once a user is logged in, they will be redirected to their colors page
  componentWillReceiveProps(newProps) {
    if(newProps.user.loggedIn) {
      this.props.navigation.navigate('SavedColors');
    }
  }

  render() {

    console.log(this.props);
    return (
      <View style={styles.container}>
        <Form
          ref='form'
          type={signInFields}
          options={options}
        />
        <TouchableHighlight 
          style={styles.button}
          onPress={this.signIn}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>

        <Form
          ref='signUpform'
          type={signUpFields}
          options={options}
        />
        <TouchableHighlight 
          style={styles.button}
          onPress={this.signUp}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableHighlight>
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
    signInDispatch: (formData) => dispatch(signInAction(formData)),
    signUpDispatch: (formData) => dispatch(signUpAction(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);