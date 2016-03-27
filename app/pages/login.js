'use strict';
import React, {
  Component,
  View,
  TouchableNativeFeedback,
  Text,
  TextInput,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-root-toast';
import * as Action from '../actions/actions';


export default class LoginPage extends Component {
  constructor(props: any) {
    super(props);
    this.fields = {
      username: null,
      password: null,
    }
  }
  render() {
    const { dispatch } = this.props;
    return (
      <View>
        <View>
          <TextInput
            placeholder='请输入学号'
            keyboardType='numeric'
            onChangeText={(text) => this.fields.username = text}
            />
          <TextInput
            placeholder='请输入密码'
            secureTextEntry={true}
            onChangeText={(text) => this.fields.password = text}
            />
        </View>
        <TouchableNativeFeedback
          background={ TouchableNativeFeedback.Ripple('deeppink', false) }
          onPress={
            () => {
              dispatch(Action.login({
                username: this.fields.username,
                password: this.fields.password,
              }));
            }
          }
          >
          <View>
            <Text>Login</Text>
          </View>
        </TouchableNativeFeedback>
        <Spinner 
          visible={
            this.props.login.state == Action.LOGIN_STATE_LOGGING_IN
          } 
          />
        <Toast
          visible={
            this.props.login.state == Action.LOGIN_STATE_LOGGED_IN
          }
          position={-100}
          shadow={true}
          animation={true}
          hideOnPress={true}
          >登录成功!</Toast>
        <Toast
          visible={
            this.props.login.state == Action.LOGIN_STATE_LOGGED_FAILED
          }
          position={-100}
          shadow={true}
          animation={true}
          >登录失败({this.props.login.info})</Toast>
      </View>
    );
  }
}
