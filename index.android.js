/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
} from 'react-native';

import App from './app/components/app';

class ejiangnan extends Component {
  render() {
    return (
      <App></App>
    );
  }
}

AppRegistry.registerComponent('ejiangnan', () => ejiangnan);
