import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Nav } from "./Components/Nav/Nav";
import Home from "./Pages/Home/Home";
import Posts from "./Pages/Posts/Posts";
import Photos from "./Pages/Photos/Photos";
import Todos from "./Pages/Todos/Todos";
import Albums from "./Pages/Albums/Albums";
import Comments from "./Pages/Comments/Comments";
import Users from "./Pages/Users/Users";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  
  ///to get dispatch
  const dispatch = useDispatch();
 

  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts dispatch={dispatch}/>} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>

    
  );
}

export default App;
