import React, { useContext, useState, useEffect, useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import "./Navigation.css";
import Mycontext from "./Mycontext";
import ProfileCard from "./ProfileCard";

const Navigation = () => {
  const userName = localStorage.getItem("name");
  const { isLoggedIn, setIsLoggedIn } = useContext(Mycontext);
  const [isProfileCardVisible, setProfileCardVisible] = useState(false);
  const profileCardRef = useRef(null);

  const handleAvatarClick = () => {
    setProfileCardVisible(!isProfileCardVisible);
  };

  const handleLogout = () => {
    localStorage.setItem("loged", false);
    setIsLoggedIn(false);
    setProfileCardVisible(false);
  };

  const handleClickOutside = (event) => {
    if (profileCardRef.current && !profileCardRef.current.contains(event.target)) {
      setProfileCardVisible(false);
    }
  };

  const handleScroll = () => {
    setProfileCardVisible(false);
  };

  useEffect(() => {
    if (isProfileCardVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isProfileCardVisible]);

  return (
    <>
      <div className="nav">
        <div className="nav-logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/news">News</NavLink></li>
            <li><NavLink to="/all-cards">Reviews</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {isLoggedIn && (
          <div className="nav-avatar" onClick={handleAvatarClick}>
            <Avatar sx={{ bgcolor: "gray" }}>{userName[0]}</Avatar>
          </div>
        )}
      </div>

      <div
        className={`profile-card-container ${isProfileCardVisible ? "visible" : ""}`}
        ref={profileCardRef}
      >
        <ProfileCard
          name={userName}
          role="Senior Tech Editor"
          bio="Passionate about all things technology. Focuses on the latest gadgets and in-depth reviews."
          avatarUrl="https://example.com/path/to/avatar.jpg"
          onEdit={() => alert("Edit Profile Clicked")}
          onLogout={handleLogout}
        />
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
