'use strict';
import React, {
  Component,
  View,
  TouchableNativeFeedback,
  Text,
} from 'react-native';
import * as Action from '../actions/actions';

export default class LoginPage extends Component {
  render() {
    return (
      <View>
        <TouchableNativeFeedback
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
