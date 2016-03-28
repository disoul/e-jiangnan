'use strict';
import React, {
  Component,
  View,
  TouchableNativeFeedback,
  Text,
  TextInput,
} from 'react-native';
import * as Action from '../actions/actions';
import ToolBar from '../components/toolbar';

export default class HomePage extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { user } = this.props;
    return (
      <View>
        <ToolBar 
          title={user.name}
          />
      </View>
    )
  }
}
