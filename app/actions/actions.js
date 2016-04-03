'use strict';

import { NativeModules } from 'react-native';

export const LOGIN_STATE_LOGGED_IN = 'LOGIN_STATE_LOGGED_IN';
export const LOGIN_STATE_LOGGING_IN = 'LOGIN_STATE_LOGGING_IN';
export const LOGIN_STATE_LOGGED_OUT = 'LOGIN_STATE_LOGGED_OUT';
export const LOGIN_STATE_LOGGED_FAILED = 'LOGIN_STATE_LOGGED_FAILED';

export function logging_in(form) {
  return { type: 'LOGIN', state: LOGIN_STATE_LOGGING_IN, info: form }
};

export function logged_in() {
  return { type: 'LOGIN', state: LOGIN_STATE_LOGGED_IN, info: ''}
};

export function logged_failed(errorinfo) {
  return { type: 'LOGIN', state: LOGIN_STATE_LOGGED_FAILED, info: errorinfo }
}

export function user_updating() {
  return { type: 'USER', state: 'UPDATING'};
}

export function user_updated(name) {
  return { type: 'USER', state: 'UPDATED', user: {"name": name}};
}

export function login(form) {
  return dispatch => {
    dispatch(logging_in(form));
    fetch(
        'http://e.jiangnan.edu.cn/main.login.do?email=' +
        form.username +
        '&password=' +
        form.password )
    .then(res => {
      let re = /error_login_failed=(.*)$/;
      let errorinfo = re.exec(decodeURIComponent(res.url, "error_login_failed"));
      if (errorinfo) {
        dispatch(logged_failed(errorinfo[1]));
      } else {
        dispatch(user_update(res._bodyText));
      }
    })
    .catch(error => {
      dispatch(logged_failed(error.toString()));
    });
  }
}

export function user_update(res) {
  return dispatch => {
    dispatch(user_updating());
    NativeModules.HTMLParser.parse(res)
    .then(name => {
      dispatch(user_updated(name));
      dispatch(logged_in());
    })
    
  };
}
