import * as Action from '../actions/actions'

export default function login(state = Action.LOGIN_STATE_LOGGED_OUT, action) {
  switch (action.type) {
    case 'LOGIN':
      return action;
    default:
      return state;
  }
}
