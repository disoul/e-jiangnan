import { combineReducers } from 'redux';
import login from './login';
import user from './user';
import { reducer as router } from 'react-native-router-redux';


const Ejiangnan = combineReducers({
  login,
  user,
  router,
});

export default Ejiangnan;
