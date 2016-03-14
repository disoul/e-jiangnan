'use strict';
import React, {
  AppRegistry,
  Component,
} from 'react-native';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import App from './app/components/app';
import Ejiangnan from './app/reducers';
import LoginPage from './app/pages/login';


const  loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,  
)(createStore);

let store = createStoreWithMiddleware(Ejiangnan);

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
