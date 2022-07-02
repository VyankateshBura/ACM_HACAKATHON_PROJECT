import React,{useEffect, useState} from "react";
import { Link,useLocation } from "react-router-dom";
import Sidebar_Example from "./Sidebar_Example";
import {Images} from "../Images/ImagesIndex"
import "./Sidebar.css";
import { ReactComponent as HomeIcon } from "../Icons/home-icon.svg";
import { ReactComponent as ProfileIcon } from "../Icons/profile-d-icon.svg";
import { ReactComponent as NotesIcon } from "../Icons/note-icon.svg";
import { ReactComponent as ExamIcon } from "../Icons/exam-icon.svg";
import { ReactComponent as ResultIcon } from "../Icons/result-icon.svg";
import { ReactComponent as MenuIcon } from "../Icons/menu-icon-white.svg";
import { ReactComponent as EnrollIcon } from "../Icons/list-icon.svg";
import { ReactComponent as LogoutWIcon } from "../Icons/logout-icon-white.svg";
function SidebarFaculty({ role }) {
  let loc = useLocation();
  console.log(role)
  // let curr_page = loc.pathname.split('/').pop();
  // console.log(curr_page)
  const [activepage,setActivepage] = useState({Faculty:'nav-link text-white',facultyprofile:'nav-link text-white',uploadnotes:'nav-link text-white',enroll:'nav-link text-white',setexampaper:'nav-link text-white',checkpaper:'nav-link text-white'});
  useEffect(()=>{
    setActivepage(prevState => ({
      ...prevState,
      [loc.pathname.split('/').pop()]: 'nav-link active'
  }));
},[])

  const [sidebar, setSidebar] = React.useState(true);
  function showSidebar() {
    setSidebar((prevState) => !prevState);
  }
  if (sidebar)
    return (
      <div className="side-bar">
        <ul className="list-item">
          <div className="menu-option">
            <MenuIcon onClick={showSidebar} />
          </div>
          <div
            className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
            style={{ width: " 230px", height: "90vh" ,borderRadius:'10px'}}
          >
            <div
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <img src={Images.WCE} style={{margin:'1vh 1vw',width:'4vw',height:'8vh',backgroundColor:'white',borderRadius:'10px'}}/>
              <span className="fs-4">W C E</span>
            </div>

            <hr></hr>
            <ul className="nav nav-pills flex-column mb-auto">
              <Link to={`/facultydashboard/${role}`} className="link">
              <li className="nav-item">
                  <div href="#" className={activepage.Faculty} aria-current="page">
                    <HomeIcon/>&nbsp;&nbsp;&nbsp;
                    Home
                  </div>
                </li>
              </Link>
              <Link to="/facultyprofile" state={role} className="link">
              <li>
                <div href="#" className={activepage.facultyprofile}>
                <ProfileIcon/>&nbsp;&nbsp;&nbsp;
                  Profile
                </div>
              </li>
              </Link>
              <Link to="/enroll" state={role} className="link">
              <li>
                <div href="#" className={activepage.enroll}>
                <EnrollIcon/>&nbsp;&nbsp;
                  Enroll Students
                </div>
              </li>
              </Link>
              <Link to="/uploadnotes" state={role} className="link">
              <li>
                <div href="#" className={activepage.uploadnotes}>
                <NotesIcon/>&nbsp;&nbsp;&nbsp;
                  Upload Notes
                </div>
              </li>
              </Link>
              <Link to="/setexampaper" state={role} className="link">
              <li>
                <div href="#" className={activepage.setexampaper}>
                <ExamIcon/>&nbsp;&nbsp;&nbsp;
                  Set Exam
                </div>
              </li>
              </Link>
              <Link to="/checkpaper" state={role} className="link">
              <li>
                <div href="#" className={activepage.checkpaper}>
                <ResultIcon/>&nbsp;&nbsp;&nbsp;
                  Check Paper
                </div>
              </li>
              </Link>
              <Link to="/" state={role} className="link">
              <li>
                <div href="#" className="nav-link text-white">
                <LogoutWIcon/>&nbsp;&nbsp;&nbsp;
                  Log Out
                </div>
              </li>
              </Link>
            </ul>
          </div>
          {/* <Sidebar_Example/> */}
          {/* <li>
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
        </li> */}
        </ul>
      </div>
    );
}
export default SidebarFaculty;
