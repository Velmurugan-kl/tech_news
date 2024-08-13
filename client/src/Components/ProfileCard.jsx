import React from "react";
import Avatar from "@mui/material/Avatar";
import "./ProfileCard.css";

const ProfileCard = ({ name, role, bio, avatarUrl, onEdit, onLogout }) => {
  return (
    <div className="profile-card">
      <Avatar className="profile-avatar" src={avatarUrl} alt={name} />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-role">{role}</p>
      <p className="profile-bio">{bio}</p>
      <div className="profile-actions">
        <button className="profile-button profile-button-edit" onClick={onEdit}>
          <svg className="profile-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3l-11 11-4 1 1-4 11-11z"></path>
          </svg>
          Edit Profile
        </button>
        <button className="profile-button profile-button-logout" onClick={onLogout}>
          <svg className="profile-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
