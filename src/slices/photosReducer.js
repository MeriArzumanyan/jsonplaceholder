import { LOADING } from "./postsReducers";
import { requests } from "../../api/api";
//////Action types
const ALL_PHOTOS = "allComments";

///////Initial State
export const initPhotos = {
  photos: [],
  loading: false,
};

//////reducer
export const reducerPhotos = (state = initPhotos, action) => {
  switch (action.type) {
    case ALL_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    case LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
/////ACs
export const photosAC = (photosData) => {
  return { type: ALL_PHOTOS, payload: photosData };
};
/////create middleware
export const middlewareCreatorForPhotos = (dispatch) => {
  return () => {
    requests.getPhotos(dispatch);
  };
};
