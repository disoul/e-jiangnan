'use strict';
import React, {
  Component,
  View,
  TouchableNativeFeedback,
  Text,
} from 'react-native';
import * as Action from '../actions/actions';
import { Toolbar } from 'react-native-material-design';

export default class ToolBar extends Component {
  render() {
    return (
        <Toolbar 
          title={this.props.title}
          icon='menu'
          />
    );
  }
}
