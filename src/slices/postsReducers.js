import { requests } from "../../api/api";

/////Action types
const ALL_POSTS = "allPosts";
export const LOADING = "loading";

////////initial State
export const initPosts = {
  posts: [],
  loading: false,
};
////////reducer
export const reducerPosts = (state = initPosts, action) => {
  switch (action.type) {
    case ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
/////ACs
export const postsAC = (postsData) => {
  return { type: ALL_POSTS, payload: postsData };
};
export const loadingAC = (bool) => {
  return { type: LOADING, payload: bool };
};


/////create middleware
export const middlewareCreator=(dispatch)=>{
  return  ()=>{
    requests.getPosts(dispatch);
  }
}