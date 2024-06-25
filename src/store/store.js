import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducerPosts } from "../slices/postsReducers";
import { reducerComments } from "../slices/commentsReducers";
import { reducerAlbums } from "../slices/albumsReducer";
import { reducerPhotos } from "../slices/photosReducer";
import { thunk } from "redux-thunk";
/////object for reducers
const rootReducers = combineReducers({
  reducerPosts: reducerPosts,
  reducerComments: reducerComments,
  reducerAlbums: reducerAlbums,
  reducerPhotos: reducerPhotos,
});

////get reducer
export const store = createStore(rootReducers, applyMiddleware(thunk));
