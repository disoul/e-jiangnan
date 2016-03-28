'use strict';
import React, {
  Component,
  View,
  TouchableNativeFeedback,
  Text,
  TextInput,
} from 'react-native';
import * as Action from '../actions/actions';


export default class HomePage extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    const { actions } = this.props;
    return (
      <View>
      <TouchableNativeFeedback
        background={ TouchableNativeFeedback.Ripple('deeppink', false) }
        onPress={
          actions.pop
        }
        >
        <View>
          <Text>Back</Text>
        </View>
      </TouchableNativeFeedback>
      </View>
    )
  }
}
