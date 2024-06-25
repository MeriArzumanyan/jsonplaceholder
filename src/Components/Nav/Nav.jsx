import React from "react";
import st from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const array = ["Posts", "Comments", "Albums", "Photos", "Todos", "Users"];
  return (
    <nav>
      <div className={st.nav}>
        <NavLink to="/">
          
          <span>Home</span>
        </NavLink>
        <ul>
          {array.map((el, index) => {
            return (
              <NavLink key={index} to={`/${el.toLowerCase()}`}>
                <li>{el}</li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
