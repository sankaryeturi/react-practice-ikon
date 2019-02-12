import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import loginReducer from '../pages/login/login.reducer';
export default history =>
  combineReducers({
    router: connectRouter(history),
    user: loginReducer,
  });
