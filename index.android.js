/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app/components/app';
import Ejiangnan from './app/reducers/index';

let store = createStore(Ejiangnan);
class ejiangnan extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ejiangnan', () => ejiangnan);
