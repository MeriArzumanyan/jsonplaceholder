import { LOADING } from "./postsReducers";
import { requests } from "../../api/api";
//////Action types
const ALL_COMMENTS = "allComments";

///////Initial State
export const initComments = {
  comments: [],
  loading: false,
};

//////reducer
export const reducerComments = (state = initComments, action) => {
  switch (action.type) {
    case ALL_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
/////ACs
export const commentsAC = (commentsData) => {
  return { type: ALL_COMMENTS, payload: commentsData };
};
/////create middleware
export const middlewareCreatorForComments = (dispatch) => {
  return () => {
    requests.getComments(dispatch);
  };
};
