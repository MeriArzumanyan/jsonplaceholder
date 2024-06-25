import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import LoadingIndicator from "../../Components/Loading/Loading";
import { middlewareCreatorForPhotos } from "../../slices/photosReducer";
import st from "./Photos.module.css";

const Photos = () => {
  const dispatch = useDispatch();
  const { photos, loading } = useSelector((state) => state.reducerPhotos);
  useEffect(() => {
    const result = middlewareCreatorForPhotos(dispatch);
    result();
  }, []);
  return (
    <div className={st.allPagePhotos}>
      {loading ? (
        <LoadingIndicator className={st.forLoading} />
      ) : (
        <div className={st.photos}>
          {photos.map((el) => (
            <div key={el.id} className={st.textsForPhotos}>
              <h2>{el.title}</h2>
              <img src={el.url} alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Photos;
