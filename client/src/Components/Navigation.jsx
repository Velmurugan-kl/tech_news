import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import "./Navigation.css";
import Mycontext from "./Mycontext";

const Navigation = () => {
  const userName = localStorage.getItem("name");
  const {isLoggedIn} = useContext(Mycontext);

  return (
    <>
    <div className="nav">
      <div className="nav-logo">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none"></circle>
    <path d="M12 2 A10 10 0 0 1 22 12" stroke="currentColor"></path>
    <circle cx="12" cy="12" r="4" fill="currentColor"></circle>
    <line x1="12" y1="12" x2="18" y2="18" stroke="currentColor"></line>
    <circle cx="18" cy="18" r="1.5" fill="currentColor"></circle>
    <circle cx="7" cy="12" r="1.5" fill="currentColor"></circle>
    <circle cx="15" cy="9" r="1.5" fill="currentColor"></circle>
  </svg>
</div>



      <div className="nav-center">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/all-cards">Reviews</NavLink>
          </li> 
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      {isLoggedIn && (
        <div className="nav-avatar">
          <Avatar sx={{ bgcolor: "gray" }}>{userName[0]}</Avatar>
        </div>
      )}
    </div>
    <Outlet/>
    </>
  );
};

export default Navigation;
