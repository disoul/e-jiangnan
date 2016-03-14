import * as Action from '../actions/actions'
var CookieManager = require('react-native-cookies');

export default function login(state = Action.LOGIN_STATE_LOGGED_OUT, action) {
  switch (action.type) {
    case 'LOGIN':
      return action.state;
    default:
      return state;
  }
}
