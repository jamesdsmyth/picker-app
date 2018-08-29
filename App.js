import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import persistorStore from './reducers/combinedReducers';
import Landing from './containers/Landing';
import SavedColors from './containers/SavedColors';
import SignIn from './containers/SignIn';

const RootStack = createStackNavigator(
  {
    Home: Landing,
    SavedColors: SavedColors,
    SignIn: SignIn,
    // Profile: Profile
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={persistorStore.store}>
        <PersistGate loading={null} persistor={persistorStore.persistor}>
          <RootStack />
        </PersistGate>
      </Provider>
    )
  }
}