import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './reducers/combinedReducers';

import Landing from './containers/Landing';
import SavedColors from './containers/SavedColors';

const RootStack = createStackNavigator(
  {
    Home: Landing,
    SavedColors: SavedColors
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}