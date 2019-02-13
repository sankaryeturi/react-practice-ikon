import { ARTICLES_SUCCESS } from './articles.actions';

const initialState = {
  isLoggedin: false,
};

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case ARTICLES_SUCCESS:
      return {
        ...state,
        isLoggedin: true,
        ...action.payload,
      };
    default:
      return state;
  }
}
