import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
  return (
  
   
    <div className="navbar">
      <div className="navbar_list">
        <div className="navbar_logo">
          <NavLink to={"/"}><h1>OneSchool</h1></NavLink>
        </div>
        <div className="navbar_ul">
        <NavLink to={"/"}><h3>Home</h3></NavLink>
          <NavLink to={"/detale"}><h3>Detale</h3></NavLink>
          <NavLink to={"/add"}><h3>Add</h3></NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
