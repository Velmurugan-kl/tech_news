import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProfileCard from './Components/ProfileCard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <ProfileCard
  name="John Doe"
  role="Senior Tech Editor"
  bio="Passionate about all things technology. Focuses on the latest gadgets and in-depth reviews."
  avatarUrl="https://example.com/path/to/avatar.jpg"
  onEdit={() => alert("Edit Profile Clicked")}
  onLogout={() => {
    localStorage.removeItem("loged");
    alert("Logged out");
    window.location.reload();
  }}
/> */}


  </React.StrictMode>,
)
