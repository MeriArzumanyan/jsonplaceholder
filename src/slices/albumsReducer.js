import { LOADING } from "./postsReducers";
import { requests } from "../../api/api";
//////Action types
const ALL_ALBUMS = "allComments";

///////Initial State
export const initAlbums = {
  albums: [],
  loading: false,
};

//////reducer
export const reducerAlbums = (state = initAlbums, action) => {
  switch (action.type) {
    case ALL_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };
    case LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
/////ACs
export const albumsAC = (albumsData) => {
  return { type: ALL_ALBUMS, payload: albumsData };
};
/////create middleware
export const middlewareCreatorForAlbums = (dispatch) => {
  return () => {
    requests.getAlbums(dispatch);
  };
};
