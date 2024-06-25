import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requests } from "../../../api/api";
import LoadingIndicator from "../../Components/Loading/Loading";
import st from "./Posts.module.css";
import { middlewareCreator } from "../../slices/postsReducers";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.reducerPosts);

  useEffect(() => {
    const result = middlewareCreator(dispatch);
    result();
  }, []);

  return (
    <div className={st.allPage}>
      {loading ? (
        <LoadingIndicator className={st.forLoading} />
      ) : (
        <div className={st.posts}>
          {posts.map((el) => (
            <div key={el.id} className={st.texts}>
              <h2>{el.title}</h2>
              <p>{el.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
