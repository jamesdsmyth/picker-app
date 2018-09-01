import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import persistorStore from '../reducers/combinedReducers';
import { connect } from 'react-redux';
import styles from '../styles/styles';
import { signOutAction, resetPasswordAction } from '../actions/actions';

class Profile extends Component {

  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
  }

  static navigationOptions = {
    title: 'Your Profile'
  }

  signOut() {
    persistorStore.persistor.purge();
    this.props.navigation.navigate('Home');
    this.props.signOutDispatch();
  }

  resetPassword() {
    this.props.resetPasswordDispatch(this.props.user.email);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hi {this.props.user.name}</Text>
        <View style={styles.profileSection}>
          <TouchableHighlight
            style={[styles.btn, styles.signOutBtn]}
            onPress={this.signOut}
          >
            <Text style={styles.colorCodeSectionSaveText}>
              Sign out
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.btn, styles.signOutBtn]}
            onPress={this.resetPassword}
          >
            <Text style={styles.colorCodeSectionSaveText}>
              Reset password
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      
      // need to add a reset password link.
      // need to list how many colors you have saved.
      // Hey James! 
      // You have 35 colors saved!
      // ------
      // Want to update your password? You can reset it <here />
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
    signOutDispatch: () => dispatch(signOutAction()),
    resetPasswordDispatch: (email) => dispatch(resetPasswordAction(email)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);