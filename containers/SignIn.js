import React, { Component} from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import {
  signInAction, 
  signUpAction, 
  clearSignInErrorsAction,
  clearSignUpErrorsAction } from '../actions/actions'
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
    super();

    this.state = {
      signUpVisible: false
    }

    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
  }

  static navigationOptions = {
    title: 'Sign In / Sign Up'
  }

  signIn() {
    var value = this.refs.form.getValue();
    if (value) {
      this.props.signInDispatch(value, this.props.tempColor);
    }
  }

  signUp() {
    var value = this.refs.signUpform.getValue();
    if (value) {
      this.props.signUpDispatch(value, this.props.tempColor);
    }
  }

  toggleSignUp() {
    this.setState({
      signUpVisible: !this.state.signUpVisible
    });

    this.props.clearSignInErrorsDispatch();
    this.props.clearSignUpErrorsDispatch();
  }

  // once a user is logged in, they will be redirected to their colors page
  componentWillReceiveProps(newProps) {
    if(newProps.user.loggedIn) {
      this.props.navigation.navigate('SavedColors');
    }
  }

  render() {
    return (
      <View style={styles.profileContainer}>
      {
        !this.state.signUpVisible &&
        <View>
          <Form
            ref='form'
            type={signInFields}
            options={options}
          />
          {
            this.props.signIn.signInFailure &&
              <Text>Your email address or password was incorrect</Text>
          }
          <TouchableHighlight 
            style={[styles.btn, styles.signInSignUpBtn]}
            onPress={this.signIn}>
            <Text style={styles.colorCodeSectionSaveText}>
              Login
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.toggleSignUp}>
            <Text style={styles.formMessage}>
              Not got an account? Create one here
            </Text>
          </TouchableHighlight>
        </View>
      }
      {
        this.state.signUpVisible &&
        <View>
          <Form
            ref='signUpform'
            type={signUpFields}
            options={options}
          />
          {
            this.props.signUp.signUpFailure &&
              <View>
                {
                  <Text>
                    {this.props.signUp.message}
                  </Text>
                }
              </View>
          }
          <TouchableHighlight 
            style={[styles.btn, styles.signInSignUpBtn]}
            onPress={this.signUp}>
            <Text style={styles.colorCodeSectionSaveText}>
              Create
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.toggleSignUp}>
            <Text style={styles.formMessage}>
              Already have an account? Sign in here
            </Text>
          </TouchableHighlight>
        </View>
      }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.currentUserReducer,
    signIn: state.signInReducer,
    signUp: state.signUpReducer,
    tempColor: state.saveColorReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInDispatch: (formData, tempColor) => dispatch(signInAction(formData, tempColor)),
    signUpDispatch: (formData, tempColor) => dispatch(signUpAction(formData, tempColor)),
    clearSignInErrorsDispatch: () => dispatch(clearSignInErrorsAction()),
    clearSignUpErrorsDispatch: () => dispatch(clearSignUpErrorsAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);