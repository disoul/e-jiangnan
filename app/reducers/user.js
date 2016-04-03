'use strict';

export default function user(state, action) {
  if (!state) {
    state = {name: ""}
  }
  switch (action.type) {
    case 'USER':
      if (action.state == 'UPDATED') {
        return action.user;
      } else {
        return state;
      }
    default:
      return state;
  }
}
