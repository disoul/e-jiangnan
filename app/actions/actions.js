export const LOGIN_STATE_LOGIN = 'LOGIN_STATE_LOGIN';
export const LOGIN_STATE_LOGOUT = 'LOGIN_STATE_LOGOUT';

export function login() {
  return { type: 'LOGIN', state: LOGIN_STATE_LOGIN}
};
