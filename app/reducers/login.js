import { LOGIN_STATE_LOGIN, LOGIN_STATE_LOGOUT } from '../actions/actions'

export default function login(state, action) {
  switch (action.type) {
    case 'LOGIN':
      // TODO: do login
      return action.state;
    default:
      return LOGIN_STATE_LOGOUT;
  }
}
