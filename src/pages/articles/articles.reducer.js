import { FETCH_ARTICLEINFO } from './articles.actions';


export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ARTICLE:
      return {
        ...state,
        view: action.payload
      };

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
