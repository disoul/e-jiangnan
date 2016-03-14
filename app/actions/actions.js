export const LOGIN_STATE_LOGGED_IN = 'LOGIN_STATE_LOGGED_IN';
export const LOGIN_STATE_LOGGING_IN = 'LOGIN_STATE_LOGGING_IN';
export const LOGIN_STATE_LOGGED_OUT = 'LOGIN_STATE_LOGGED_OUT';
export const LOGIN_STATE_LOGGED_FAILED = 'LOGIN_STATE_LOGGED_FAILED';

export function logging_in() {
  return { type: 'LOGIN', state: LOGIN_STATE_LOGGING_IN }
};

export function logged_in() {
  return { type: 'LOGIN', state: LOGIN_STATE_LOGGED_IN }
};

export function logged_failed(errorinfo) {
  return { type: 'LOGIN', state: LOGIN_STATE_LOGGED_FAILED, error: errorinfo }
}

export function login(form) {
  return dispatch => {
    dispatch(logging_in());
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
        dispatch(logged_in()); 
      }
    });
  }
}
