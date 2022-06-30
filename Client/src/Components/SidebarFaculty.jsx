import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { ReactComponent as HomeIcon } from "../Icons/home-icon.svg";
import { ReactComponent as ProfileIcon } from "../Icons/profile-d-icon.svg";
import { ReactComponent as NotesIcon } from "../Icons/note-icon.svg";
import { ReactComponent as ExamIcon } from "../Icons/exam-icon.svg";
import { ReactComponent as ResultIcon } from "../Icons/result-icon.svg";
import { ReactComponent as MenuIcon } from "../Icons/menu-icon-white.svg";
import { ReactComponent as EnrollIcon } from "../Icons/list-icon.svg";
import { ReactComponent as LogoutWIcon } from "../Icons/logout-icon-white.svg";
function SidebarFaculty({role}) {
  const [sidebar,setSidebar]=React.useState(true)
  function showSidebar(){
    setSidebar((prevState)=>!prevState)
  }
  if(sidebar)
  return (
    <div className="side-bar">
      <ul className="list-item">
        <div className="menu-option">
          <MenuIcon onClick={showSidebar}/>
        </div>
        <li>
          <Link to={`/facultydashboard/${role}`}>
          <span className="options">
            <HomeIcon />
            <p>Dashboard</p>
          </span>
          </Link>
        </li>
        <li>
          <Link to="/facultyprofile" state={role}>
          <span className="options">
            <ProfileIcon />
            <p>Profile</p>
          </span>
          </Link>
        </li>
        <li>
          <Link to="/enroll" state={role}>
          <span className="options">
            <EnrollIcon />
            <p>Enroll Students</p>
          </span>
          </Link>
        </li>
        <li>
          <Link to="/uploadnotes" state={role}>
          <span className="options">
            <NotesIcon />
            <p>Upload Notes</p>
          </span>
          </Link>
        </li>
        <li>
          <Link to="/setexampaper" state={role}>
          <span className="options">
            <ExamIcon />
            <p>Set Exam</p>
          </span>
          </Link>
        </li>
        <li>
          <Link to="/checkpaper" state={role}>
          <span className="options">
            <ResultIcon />
            <p>Check Paper</p>
          </span>
          </Link>
        </li>
        <li>
          <Link to="/" state={role}>
          <span className="options">
            <LogoutWIcon />
            <p>Logout</p>
          </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default SidebarFaculty;
