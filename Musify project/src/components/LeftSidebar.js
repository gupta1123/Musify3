import React from "react";
import "./LeftSidebar.css";
import MusicNote from "@mui/icons-material/MusicNote";
import School from "@mui/icons-material/School";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Group from "@mui/icons-material/Group";
import Edit from "@mui/icons-material/Edit";
import Settings from "@mui/icons-material/Settings";
import ExitToApp from "@mui/icons-material/ExitToApp";

function LeftSidebar() {
  return (
    <div className="leftSidebar">
      <div className="profileCard">
        <div className="profileImage"></div>
        <div className="profileText">
          <p>Learn Music</p>
          <p>Contact support</p>
        </div>
      </div>

      <div className="menuItems">
        <div className="menuItem">
          <MusicNote className="icon" />
          <p>Music Overview</p>
        </div>
        <div className="menuItem highlighted">
          <School className="icon" />
          <p>Music Classes</p>
        </div>
        <div className="menuItem">
          <CheckCircle className="icon" />
          <p>Music Grades</p>
        </div>
        <div className="menuItem">
          <Group className="icon" />
          <p>Music Teachers</p>
        </div>
        <div className="menuItem">
          <Edit className="icon" />
          <p>Music Notes</p>
        </div>
      </div>

      <div className="separator"></div>

      <div className="settingsLogout">
        <div className="menuItem">
          <Settings className="icon" />
          <p>Settings</p>
        </div>
        <div className="menuItem">
          <ExitToApp className="icon" />
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
