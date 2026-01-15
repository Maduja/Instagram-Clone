import React from "react";
import { useNavigate } from "react-router-dom";


function Sidebar() {

  const navigate = useNavigate()

  return (
    <div className="m-3 position-fixed">
      <div className="d-flex flex-column gap-3">
        <img className="insta-text" src="src\assets\insta-text.png" alt="" />
        <div className="sidebar-item">
          <i className="bi bi-house-door"></i>Home
        </div>
        <div className="sidebar-item">
          <i className="bi bi-search"></i>Search
        </div>
        <div className="sidebar-item">
          <i className="bi bi-compass"></i>Explore
        </div>
        <div className="sidebar-item">
          <i className="bi bi-film"></i>Reels
        </div>
        <div className="sidebar-item">
          <i className="bi bi-chat-dots"></i>Messages
        </div>
        <div className="sidebar-item">
          <i className="bi bi-heart-fill"></i>Notifications
        </div>
        <div className="sidebar-item">
          <i className="bi bi-plus-square"></i>Create
        </div>
        <div onClick={()=>{navigate('/profile')}} className="sidebar-item">
          <i className="bi bi-person-circle"></i>Profile
        </div>
      </div>
      <div className="position-fixed bottom-0 d-flex flex-column gap-3 mb-3">
        <div className="sidebar-item">
          <i className="bi bi-threads"></i>Threads
        </div>
        <div className="sidebar-item">
          <i className="bi bi-list"></i>More
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
