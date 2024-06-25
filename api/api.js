import axios from "axios";
import { postsAC } from "../src/slices/postsReducers";
import { loadingAC } from "../src/slices/postsReducers";
import { commentsAC } from "../src/slices/commentsReducers";
import { albumsAC } from "../src/slices/albumsReducer";
import { photosAC } from "../src/slices/photosReducer";
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
export const requests = {
  getPosts(dispatch) {
    dispatch(loadingAC(true));
    setTimeout(() => {
      instance.get("posts").then((res) => {
        dispatch(postsAC(res.data));
        dispatch(loadingAC(false));
      });
    }, 3000);
  },
  getComments(dispatch) {
    dispatch(loadingAC(true));
    setTimeout(() => {
      instance.get("comments").then((res) => {
        dispatch(commentsAC(res.data));
        dispatch(loadingAC(false));
      });
    }, 2000);
  },
  getAlbums(dispatch) {
    dispatch(loadingAC(true));
    setTimeout(() => {
      instance.get("albums").then((res) => {
        dispatch(albumsAC(res.data));
        dispatch(loadingAC(false));
      });
    }, 2000);
  },
  getPhotos(dispatch) {
    dispatch(loadingAC(true));
    setTimeout(() => {
      instance.get("photos").then((res) => {
        dispatch(photosAC(res.data));
        dispatch(loadingAC(false));
      });
    }, 1000);
  },
};
