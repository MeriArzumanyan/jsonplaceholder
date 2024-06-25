import React, { useEffect } from "react";
import st from "./Comments.module.css";
import { middlewareCreatorForComments } from "../../slices/commentsReducers";
import { useSelector, useDispatch } from "react-redux";
import LoadingIndicator from "../../Components/Loading/Loading";

const Comments = () => {
  const dispatch = useDispatch();
  const { comments, loading } = useSelector((state) => state.reducerComments);
  useEffect(()=>{
    const result=middlewareCreatorForComments(dispatch)
    result()
  },[])
  return (
    <div className={st.allPageComments}>
      {loading ? (
        <LoadingIndicator className={st.forLoading} />
      ) : (
        <div className={st.comments}>
          {comments.map((el) => (
            <div key={el.id} className={st.textsForComments}>
              <h2>{el.name}</h2>
              <p>{el.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
