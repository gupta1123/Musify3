import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";

function Header() {
  return (
    <div className="header">
      <h1>Music Journey</h1>
      <div className="searchBar">
        <SearchIcon className="searchIcon" />
        <input type="text" placeholder="Search for Music Lessons" />
      </div>
      <div className="icons">
        <NotificationsIcon className="icon" />
        <EmailIcon className="icon" />
        <MessageIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
