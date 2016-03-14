'use strict';
import React, {
  Component,
  View,
  TouchableNativeFeedback,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { login } from '../actions/actions';
var Router = require('react-native-router');

class App extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <View>
        <TouchableNativeFeedback
          onPress={() => dispatch(login({
            username: '1030514226',
            password: '149416',
          }))}
          background={TouchableNativeFeedback.Ripple('deeppink', false)}
          >
          <View>
            <Text>Login</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

function select(state) {
  return {
  };
}

export default connect(select)(App);
