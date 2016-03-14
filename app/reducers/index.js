import { combineReducers } from 'redux';
import login from './login';
import { reducer as router } from 'react-native-router-redux';


const Ejiangnan = combineReducers({
  login,
  router,
});

export default Ejiangnan;
