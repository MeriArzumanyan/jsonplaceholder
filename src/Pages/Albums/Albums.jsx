import React from 'react'
import { middlewareCreatorForAlbums } from '../../slices/albumsReducer';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import LoadingIndicator from "../../Components/Loading/Loading";
import st from "./Albums.module.css"
const Albums = () => {
  const dispatch = useDispatch();
  const { albums, loading } = useSelector((state) => state.reducerAlbums);
  useEffect(()=>{
    const result=middlewareCreatorForAlbums(dispatch)
    result()
  },[])
  return (
    <div className={st.allPageAlbums}>
      {loading ? (
        <LoadingIndicator className={st.forLoading} />
      ) : (
        <div className={st.albums}>
          {albums.map((el) => (
            <div key={el.id} className={st.textsForAlbums}>
              <h2>{el.title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Albums
