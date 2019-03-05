import { LOGIN_SUCCESS } from './login.actions';

const initialState = {
  isLoggedin: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedin: true,
        ...action.payload,
      };
    default:
      return state;
  }
}
