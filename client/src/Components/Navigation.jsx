import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import "./Navigation.css";

const Navigation = () => {
  const userName = localStorage.getItem('name') || 'U'; // Default to 'U' if no name is found
  const isLoggedIn = JSON.parse(localStorage.getItem('loged'));

  return (
    <div className="nav">
      <div className="nav-logo">
        {/* Insert SVG here */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40" // Adjust size as needed
          height="40"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          {/* Your SVG Path */}
        </svg>
      </div>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName="active">News</NavLink>
        </li>
        <li>
          <NavLink to="/all-cards" activeClassName="active">Reviews</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
      {isLoggedIn && (
        <div className="nav-avatar">
          <Avatar sx={{ bgcolor: 'gray' }}>{userName[0]}</Avatar>
        </div>
      )}
    </div>
  );
};

export default Navigation;
