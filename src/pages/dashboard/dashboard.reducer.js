import { FETCH_ARTICLES } from './dashboard.action';

const initialState = {
  fetchArticles: true,
};

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        fetchArticles: true,
        ...action.payload,
      };
    default:
      return state;
  }
}
