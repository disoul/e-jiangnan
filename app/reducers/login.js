import { LOGIN_STATE_LOGIN, LOGIN_STATE_LOGOUT } from '../actions/actions'
var CookieManager = require('react-native-cookies');

export default function login(state, action) {
  switch (action.type) {
    case 'LOGIN':
      CookieManager.setFromResponse(
          'http://e.jiangnan.edu.cn/main/loginIndex.do',
          'user_session=JSESSIONID; path=/;'
          (res) => { console.log("Set cookies", res); }
          );
      return action.state;
    default:
      return LOGIN_STATE_LOGOUT;
  }
}
